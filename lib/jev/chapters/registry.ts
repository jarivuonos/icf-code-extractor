import { JevQuestionDefinition } from '../catalog';
import { B_CHAPTERS_CATALOG } from './b-functions';
import { S_CHAPTERS_CATALOG } from './s-structures';
import { D_CHAPTERS_CATALOG } from './d-activities';
import { E_CHAPTERS_CATALOG } from './e-environment';

/**
 * Unified registry of all 30 THL Tier 1 Chapters and their respective Level-2 questions.
 */
export const THL_CHAPTER_REGISTRY: Record<string, Record<string, JevQuestionDefinition>> = {
  // Body Functions (b1..b8)
  b1: B_CHAPTERS_CATALOG.b1 || {},
  b2: B_CHAPTERS_CATALOG.b2 || {},
  b3: B_CHAPTERS_CATALOG.b3 || {},
  b4: B_CHAPTERS_CATALOG.b4 || {},
  b5: B_CHAPTERS_CATALOG.b5 || {},
  b6: B_CHAPTERS_CATALOG.b6 || {},
  b7: B_CHAPTERS_CATALOG.b7 || {},
  b8: B_CHAPTERS_CATALOG.b8 || {},

  // Body Structures (s1..s8)
  s1: S_CHAPTERS_CATALOG.s1 || {},
  s2: S_CHAPTERS_CATALOG.s2 || {},
  s3: S_CHAPTERS_CATALOG.s3 || {},
  s4: S_CHAPTERS_CATALOG.s4 || {},
  s5: S_CHAPTERS_CATALOG.s5 || {},
  s6: S_CHAPTERS_CATALOG.s6 || {},
  s7: S_CHAPTERS_CATALOG.s7 || {},
  s8: S_CHAPTERS_CATALOG.s8 || {},

  // Activities & Participation (d1..d9)
  d1: D_CHAPTERS_CATALOG.d1 || {},
  d2: D_CHAPTERS_CATALOG.d2 || {},
  d3: D_CHAPTERS_CATALOG.d3 || {},
  d4: D_CHAPTERS_CATALOG.d4 || {},
  d5: D_CHAPTERS_CATALOG.d5 || {},
  d6: D_CHAPTERS_CATALOG.d6 || {},
  d7: D_CHAPTERS_CATALOG.d7 || {},
  d8: D_CHAPTERS_CATALOG.d8 || {},
  d9: D_CHAPTERS_CATALOG.d9 || {},

  // Environmental Factors (e1..e5)
  e1: E_CHAPTERS_CATALOG.e1 || {},
  e2: E_CHAPTERS_CATALOG.e2 || {},
  e3: E_CHAPTERS_CATALOG.e3 || {},
  e4: E_CHAPTERS_CATALOG.e4 || {},
  e5: E_CHAPTERS_CATALOG.e5 || {}
};

/**
 * Returns the Level-2 question catalog for a given chapter code (e.g. "b7", "d4").
 */
export function getChapterCatalog(chapterCode: string): Record<string, JevQuestionDefinition> {
  return THL_CHAPTER_REGISTRY[chapterCode] || {};
}
