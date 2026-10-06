import { buildThlChapterRouterSchema, THL_30_CHAPTERS } from './router-schema';
import { getChapterCatalog } from './chapters/registry';
import { JevQuestionDefinition } from './catalog';
import type { IcfExtractionResponse, IcfFinding } from '@/lib/schemas/icf';

interface JevChoiceAnswer {
  type: 'choice';
  choice: string;
  confidence: number;
  probabilities?: Record<string, number>;
}

interface JevNoulAnswer {
  type: 'noul';
  noul: number;
}

type JevAnswer = JevChoiceAnswer | JevNoulAnswer;

interface JevResponse {
  model: string;
  answers: Record<string, JevAnswer>;
  usage?: {
    input_tokens: number;
    output_tokens: number;
  };
}

/**
 * Low-level caller for TypeSafe System One (Jev API)
 */
async function callJevApi(
  state: string,
  questions: Record<string, unknown>,
  apiKey: string
): Promise<JevResponse> {
  const response = await fetch('https://api.typesafe.ai/v1/systemone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'jev-latest',
      state,
      questions
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`TypeSafe Jev API Error (${response.status}): ${errorText || response.statusText}`);
  }

  return (await response.json()) as JevResponse;
}

/**
 * Extracts the most relevant verbatim sentence/clause from the input text
 * matching the given keywords.
 */
function extractEvidenceText(inputText: string, keywords: string[]): string {
  // Split by line breaks and typical sentence boundaries
  const fragments = inputText
    .split(/\n+|\.(?=\s+[A-Z0-9ÅÄÖ])/)
    .map((s) => s.trim())
    .filter((s) => s.length > 5);

  let bestFragment = '';
  let maxScore = 0;

  for (const fragment of fragments) {
    const lower = fragment.toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      if (lower.includes(kw.toLowerCase())) {
        score += 1;
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestFragment = fragment;
    }
  }

  if (bestFragment) {
    return bestFragment.replace(/^[-•*]\s*/, '').trim();
  }

  // Fallback: search for first occurrence of any keyword
  const lowerAll = inputText.toLowerCase();
  for (const kw of keywords) {
    const idx = lowerAll.indexOf(kw.toLowerCase());
    if (idx !== -1) {
      const start = Math.max(0, inputText.lastIndexOf('\n', idx));
      const end = inputText.indexOf('\n', idx);
      const slice = inputText.slice(start, end !== -1 ? end : start + 120).trim();
      if (slice) return slice;
    }
  }

  return 'Tekstissä esitetty löydös';
}

/**
 * Two-Stage 30-Chapter THL Router Pipeline:
 *
 * Stage 1: Runs all 30 Tier-1 THL Chapters via Jev noul questions.
 *          Filters active chapters with noul >= 0.60.
 *
 * Stage 2: Concurrently evaluates Level-2 categories for active chapters
 *          in parallel using Promise.all().
 */
export async function extractIcfWithJev(
  inputText: string,
  apiKey: string
): Promise<IcfExtractionResponse> {
  // ─── STAGE 1: 30-Chapter Router Call ───
  const routerQuestions = buildThlChapterRouterSchema();
  const routerResponse = await callJevApi(inputText, routerQuestions, apiKey);

  const chapterScores: { code: string; score: number }[] = [];
  for (const [key, answer] of Object.entries(routerResponse.answers)) {
    if (answer.type === 'noul') {
      chapterScores.push({ code: key, score: answer.noul });
    }
  }

  // Sort descending by score
  chapterScores.sort((a, b) => b.score - a.score);

  // Filter active chapters: score >= 0.60 (or top 3 fallback if none meet threshold)
  let activeChapters = chapterScores.filter((c) => c.score >= 0.60).map((c) => c.code);
  if (activeChapters.length === 0) {
    activeChapters = chapterScores.slice(0, 3).map((c) => c.code);
  }

  // ─── STAGE 2: Parallel Active Chapter Questionnaires ───
  // Collect all questions for active chapters
  const allTargetQuestions: Record<string, JevQuestionDefinition> = {};
  for (const chapterCode of activeChapters) {
    const chapterCatalog = getChapterCatalog(chapterCode);
    for (const [qKey, qDef] of Object.entries(chapterCatalog)) {
      allTargetQuestions[qKey] = qDef;
    }
  }

  const findings: IcfFinding[] = [];
  const handledCodes = new Set<string>();

  // If active chapters have questions, batch them into chunks of max 15 questions
  // and run them in parallel
  const questionEntries = Object.entries(allTargetQuestions);
  if (questionEntries.length > 0) {
    const chunkSize = 15;
    const chunks: Record<string, unknown>[] = [];

    for (let i = 0; i < questionEntries.length; i += chunkSize) {
      const chunk: Record<string, unknown> = {};
      for (const [qKey, qDef] of questionEntries.slice(i, i + chunkSize)) {
        if (qDef.type === 'choice') {
          chunk[qKey] = {
            type: 'choice',
            criteria: qDef.criteria
          };
        } else if (qDef.type === 'noul') {
          chunk[qKey] = {
            type: 'noul',
            instructions: qDef.instructions
          };
        }
      }
      chunks.push(chunk);
    }

    // Execute all chunks concurrently
    const chunkResponses = await Promise.all(
      chunks.map((chunk) => callJevApi(inputText, chunk, apiKey))
    );

    // Merge answers
    const mergedAnswers: Record<string, JevAnswer> = {};
    for (const res of chunkResponses) {
      Object.assign(mergedAnswers, res.answers);
    }

    // Process findings
    for (const [key, answer] of Object.entries(mergedAnswers)) {
      const def = allTargetQuestions[key];
      if (!def) continue;

      let qualifier: number | null = null;
      let confidence = 0.8;
      let include = false;

      if (answer.type === 'choice') {
        confidence = answer.confidence;
        if (answer.choice !== 'not_mentioned') {
          const parsed = parseInt(answer.choice, 10);
          if (!isNaN(parsed)) {
            qualifier = parsed;
            include = true;
          }
        }
      } else if (answer.type === 'noul') {
        confidence = answer.noul;
        // For environmental factors (e-domain), if noul > 0.6 it is present as a facilitator (+2)
        if (answer.noul > 0.6) {
          qualifier = 2; // Positive facilitator
          include = true;
        }
      }

      if (include && !handledCodes.has(def.icfCode)) {
        handledCodes.add(def.icfCode);
        const evidence = extractEvidenceText(inputText, def.keywords);
        const reasoning = def.defaultReasoning(String(qualifier), confidence);

        findings.push({
          icfCode: def.icfCode,
          icfTitle: def.icfTitle,
          qualifier,
          evidenceText: evidence,
          reasoning
        });
      }
    }
  }

  // Sort findings: b first, then s, then d, then e
  findings.sort((a, b) => a.icfCode.localeCompare(b.icfCode));

  // Build active chapter labels (e.g. "b1 (Mentaaliset toiminnot)")
  const activeChapterLabels = activeChapters.map((code) => {
    const meta = THL_30_CHAPTERS[code];
    return meta ? `${code} (${meta.titleFi})` : code;
  });

  // Generate brief clinical summary
  const summaryParts: string[] = [];
  const bCount = findings.filter((f) => f.icfCode.startsWith('b')).length;
  const sCount = findings.filter((f) => f.icfCode.startsWith('s')).length;
  const dCount = findings.filter((f) => f.icfCode.startsWith('d')).length;
  const eCount = findings.filter((f) => f.icfCode.startsWith('e')).length;

  summaryParts.push(
    `Stage 1 tunnisti ${activeChapters.length} aktiivista THL-pääluokkaa. Poimittiin yhteensä ${findings.length} ICF-löydöstä (kehon toiminnot b: ${bCount}, rakenteet s: ${sCount}, suoritukset ja osallistuminen d: ${dCount}, ympäristötekijät e: ${eCount}).`
  );

  const keyProblems = findings.filter((f) => f.qualifier !== null && f.qualifier >= 2);
  if (keyProblems.length > 0) {
    const titles = keyProblems.map((f) => `${f.icfTitle} (${f.icfCode})`).join(', ');
    summaryParts.push(`Keskeisimmät kohtalaiset tai vaikeat haasteet: ${titles}.`);
  } else {
    summaryParts.push('Toimintakyky on arvioidulla alueella pääsääntöisesti hyvää tai lievästi alentunutta.');
  }

  return {
    summary: summaryParts.join(' '),
    activeChapters: activeChapterLabels,
    findings
  };
}
