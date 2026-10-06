import { ICF_JEV_CATALOG, JevQuestionDefinition } from './catalog';
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
    // Trim extra punctuation or prefixes like numbers
    return bestFragment.replace(/^[-•*]\s*/, '').trim();
  }

  // Fallback: search for first sentence containing any keyword
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
 * Calls TypeSafe System One (Jev API) and parses results into structured ICF findings
 */
export async function extractIcfWithJev(
  inputText: string,
  apiKey: string
): Promise<IcfExtractionResponse> {
  const questions: Record<string, unknown> = {};

  for (const [key, def] of Object.entries(ICF_JEV_CATALOG)) {
    if (def.type === 'choice') {
      questions[key] = {
        type: 'choice',
        criteria: def.criteria
      };
    } else if (def.type === 'noul') {
      questions[key] = {
        type: 'noul',
        instructions: def.instructions
      };
    }
  }

  const response = await fetch('https://api.typesafe.ai/v1/systemone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'jev-latest',
      state: inputText,
      questions
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`TypeSafe Jev API Error (${response.status}): ${errorText || response.statusText}`);
  }

  const rawData = (await response.json()) as JevResponse;
  const findings: IcfFinding[] = [];
  const handledCodes = new Set<string>();

  for (const [key, answer] of Object.entries(rawData.answers)) {
    const def = ICF_JEV_CATALOG[key];
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

  // Sort findings: b first, then d, then e
  findings.sort((a, b) => a.icfCode.localeCompare(b.icfCode));

  // Generate brief clinical summary
  const summaryParts: string[] = [];
  const bCount = findings.filter((f) => f.icfCode.startsWith('b')).length;
  const dCount = findings.filter((f) => f.icfCode.startsWith('d')).length;
  const eCount = findings.filter((f) => f.icfCode.startsWith('e')).length;

  summaryParts.push(
    `Arvioinnista tunnistettiin ${findings.length} ICF-toimintakykylöydöstä (kehon toiminnot: ${bCount}, suoritukset ja osallistuminen: ${dCount}, ympäristötekijät: ${eCount}).`
  );

  const keyProblems = findings.filter((f) => f.qualifier !== null && f.qualifier >= 2);
  if (keyProblems.length > 0) {
    const titles = keyProblems.map((f) => `${f.icfTitle} (${f.icfCode})`).join(', ');
    summaryParts.push(`Keskeisimmät kohtalaiset tai vaikeat haasteet: ${titles}.`);
  } else {
    summaryParts.push('Toimintakyky on pääsääntöisesti hyvää tai lievästi alentunutta.');
  }

  return {
    summary: summaryParts.join(' '),
    findings
  };
}
