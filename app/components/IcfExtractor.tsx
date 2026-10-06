'use client';

import { useState, useTransition } from 'react';
import { extractIcfCodes } from '@/app/actions/extract-icf';
import type { IcfExtractionResponse, IcfFinding } from '@/lib/schemas/icf';
import { SAMPLE_INPUT_TEXT } from '@/lib/constants/icf-rules';

// ---------------------------------------------------------------------------
// Qualifier helpers
// ---------------------------------------------------------------------------

const QUALIFIER_LABELS: Record<number, string> = {
  0: 'Ei ongelmaa',
  1: 'Lievä',
  2: 'Kohtalainen',
  3: 'Vaikea',
  4: 'Täydellinen',
};

function qualifierLabel(q: number | null): string {
  if (q === null) return 'Tarkenne puuttuu';
  if (q < 0) return `Este ${Math.abs(q)} – ${QUALIFIER_LABELS[Math.abs(q)] ?? ''}`;
  if (q > 0) return `${q} – ${QUALIFIER_LABELS[q] ?? ''}`;
  return '0 – Ei ongelmaa';
}

function qualifierColorClass(q: number | null): string {
  if (q === null) return 'bg-zinc-100 text-zinc-600';
  if (q < 0) return 'bg-teal-100 text-teal-800';  // e-domain barrier
  if (q === 0) return 'bg-green-100 text-green-800';
  if (q === 1) return 'bg-green-100 text-green-800';
  if (q === 2) return 'bg-yellow-100 text-yellow-800';
  return 'bg-red-100 text-red-800'; // 3 or 4
}

function icfDomainColorClass(code: string): string {
  const prefix = code[0]?.toLowerCase();
  if (prefix === 'b') return 'bg-blue-100 text-blue-800';
  if (prefix === 'd') return 'bg-purple-100 text-purple-800';
  if (prefix === 'e') return 'bg-orange-100 text-orange-800';
  return 'bg-zinc-100 text-zinc-700';
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className ?? ''}`}
    >
      {children}
    </span>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16">
      <svg
        className="h-8 w-8 animate-spin text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      <p className="text-sm text-zinc-500">Analysoidaan tekstiä…</p>
    </div>
  );
}

interface FindingCardProps {
  finding: IcfFinding;
  accepted: boolean;
  onToggle: () => void;
}

function FindingCard({ finding, accepted, onToggle }: FindingCardProps) {
  const { icfCode, icfTitle, qualifier, evidenceText, reasoning } = finding;

  return (
    <div
      className={`rounded-xl border p-4 transition-colors ${
        accepted
          ? 'border-blue-200 bg-white'
          : 'border-zinc-200 bg-zinc-50 opacity-60'
      }`}
    >
      {/* Header row */}
      <div className="flex flex-wrap items-start gap-2">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={accepted}
            onChange={onToggle}
            className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
          />
          <Badge className={icfDomainColorClass(icfCode)}>{icfCode}</Badge>
        </label>

        <span className="flex-1 text-sm font-medium text-zinc-900">
          {icfTitle}
        </span>

        <Badge
          className={qualifierColorClass(qualifier)}
        >
          {qualifierLabel(qualifier)}
        </Badge>
      </div>

      {/* Evidence */}
      <blockquote className="mt-3 border-l-4 border-zinc-300 pl-3 text-sm italic text-zinc-600">
        "{evidenceText}"
      </blockquote>

      {/* Reasoning */}
      <p className="mt-2 text-xs text-zinc-500">{reasoning}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Export list
// ---------------------------------------------------------------------------

function buildExportJson(
  findings: IcfFinding[],
  accepted: Set<number>,
  summary: string
): string {
  return JSON.stringify(
    {
      summary,
      findings: findings.filter((_, i) => accepted.has(i)),
    },
    null,
    2
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function IcfExtractor() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState<IcfExtractionResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [acceptedSet, setAcceptedSet] = useState<Set<number>>(new Set());
  const [isPending, startTransition] = useTransition();
  const [copied, setCopied] = useState(false);

  function handleLoadSample() {
    setInputText(SAMPLE_INPUT_TEXT);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!inputText.trim() || isPending) return;
    setErrorMessage(null);
    setResult(null);
    setAcceptedSet(new Set());

    startTransition(async () => {
      const res = await extractIcfCodes(inputText);
      if (res.success) {
        setResult(res.data);
        // Accept all findings by default
        setAcceptedSet(new Set(res.data.findings.map((_, i) => i)));
      } else {
        setErrorMessage(res.error);
      }
    });
  }

  function toggleFinding(index: number) {
    setAcceptedSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  function handleCopy() {
    if (!result) return;
    const json = buildExportJson(result.findings, acceptedSet, result.summary);
    navigator.clipboard.writeText(json).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const acceptedCount = acceptedSet.size;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      {/* ── Header ── */}
      <header className="border-b border-zinc-200 bg-white px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            ICF-koodien Poimija
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Syötä toimintakykyteksti — tekoäly poimii THL:n ICF-koodit,
            tarkenteet ja perustelut automaattisesti.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">
        {/* ── Input form ── */}
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="icf-input"
                className="text-sm font-semibold text-zinc-700"
              >
                Toimintakykyteksti
              </label>
              <button
                type="button"
                onClick={handleLoadSample}
                className="text-xs font-medium text-blue-600 hover:underline"
              >
                Lataa esimerkkiteksti
              </button>
            </div>

            <textarea
              id="icf-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={10}
              placeholder="Liitä tähän potilaan toimintakykyteksti…"
              className="w-full resize-y rounded-lg border border-zinc-300 bg-zinc-50 p-3 font-mono text-sm text-zinc-800 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              disabled={isPending}
            />

            <button
              type="submit"
              disabled={isPending || !inputText.trim()}
              suppressHydrationWarning
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPending ? 'Analysoidaan…' : 'Poimii ICF-koodit'}
            </button>
          </form>
        </section>

        {/* ── Loading ── */}
        {isPending && <LoadingSpinner />}

        {/* ── Error ── */}
        {errorMessage && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <strong>Virhe:</strong> {errorMessage}
          </div>
        )}

        {/* ── Results ── */}
        {result && !isPending && (
          <section className="mt-8 space-y-6">
            {/* Summary */}
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Yhteenveto
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-800">
                {result.summary}
              </p>
            </div>

            {/* Active THL Chapters from Stage 1 Router */}
            {result.activeChapters && result.activeChapters.length > 0 && (
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Stage 1 -ruuterin aktivoimat THL-pääluokat ({result.activeChapters.length})
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {result.activeChapters.map((ch) => (
                    <span
                      key={ch}
                      className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-800"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Findings */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-semibold text-zinc-900">
                  ICF-löydökset{' '}
                  <span className="text-sm font-normal text-zinc-500">
                    ({result.findings.length} kpl)
                  </span>
                </h2>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setAcceptedSet(
                        new Set(result.findings.map((_, i) => i))
                      )
                    }
                    className="text-xs font-medium text-blue-600 hover:underline"
                  >
                    Valitse kaikki
                  </button>
                  <span className="text-xs text-zinc-300">|</span>
                  <button
                    type="button"
                    onClick={() => setAcceptedSet(new Set())}
                    className="text-xs font-medium text-zinc-500 hover:underline"
                  >
                    Poista valinnat
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {result.findings.map((finding, i) => (
                  <FindingCard
                    key={`${finding.icfCode}-${i}`}
                    finding={finding}
                    accepted={acceptedSet.has(i)}
                    onToggle={() => toggleFinding(i)}
                  />
                ))}
              </div>
            </div>

            {/* Export bar */}
            <div className="sticky bottom-4 rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-zinc-600">
                  <span className="font-semibold text-zinc-900">
                    {acceptedCount}
                  </span>{' '}
                  / {result.findings.length} koodia valittu
                </p>
                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={acceptedCount === 0}
                  className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {copied ? '✓ Kopioitu!' : 'Kopioi JSON'}
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
