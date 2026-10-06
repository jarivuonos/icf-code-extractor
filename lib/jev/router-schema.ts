export interface ThlChapterMetadata {
  code: string; // e.g. "b1", "d4", "e1"
  component: 'b' | 's' | 'd' | 'e';
  titleFi: string;
  titleEn: string;
  instructions: string;
}

/**
 * Complete 30-Chapter Tier 1 Router Schema for THL ICF Classification (1.2.246.537.6.48)
 * Covers all 8 Body Functions (b), 8 Body Structures (s), 9 Activities & Participation (d),
 * and 5 Environmental Factors (e).
 */
export const THL_30_CHAPTERS: Record<string, ThlChapterMetadata> = {
  // ── Component b: Ruumiin toiminnot (Body Functions) ──
  b1: {
    code: 'b1',
    component: 'b',
    titleFi: 'Mentaaliset toiminnot',
    titleEn: 'Mental functions',
    instructions: 'Does the text mention mental, cognitive, memory, orientation, alertness, or emotional functions?'
  },
  b2: {
    code: 'b2',
    component: 'b',
    titleFi: 'Aistitoiminnot ja kipu',
    titleEn: 'Sensory functions and pain',
    instructions: 'Does the text mention vision, hearing, vestibular dizziness/balance sensations, or pain/särkytilat?'
  },
  b3: {
    code: 'b3',
    component: 'b',
    titleFi: 'Ääni- ja puhetoiminnot',
    titleEn: 'Voice and speech functions',
    instructions: 'Does the text mention voice production, phonation, speech articulation, or fluency?'
  },
  b4: {
    code: 'b4',
    component: 'b',
    titleFi: 'Sydän-, verenkierto-, hengitys- ja immuunijärjestelmän toiminnot',
    titleEn: 'Cardiovascular, respiratory and endurance functions',
    instructions: 'Does the text mention heart rate, blood pressure, breathing, shortness of breath, or exercise tolerance/endurance?'
  },
  b5: {
    code: 'b5',
    component: 'b',
    titleFi: 'Ruuansulatus-, aineenvaihdunta- ja umpieritysjärjestelmän toiminnot',
    titleEn: 'Digestive, metabolic and endocrine functions',
    instructions: 'Does the text mention swallowing (nieleminen), digestion, bowel function, nutrition, or metabolic/endocrine status?'
  },
  b6: {
    code: 'b6',
    component: 'b',
    titleFi: 'Virtsa- ja sukupuolielinten toiminnot',
    titleEn: 'Genitourinary and reproductive functions',
    instructions: 'Does the text mention urinary functions, urinary incontinence (virtsankarkailu), or catheterization?'
  },
  b7: {
    code: 'b7',
    component: 'b',
    titleFi: 'Hermo-lihas-luustojärjestelmän ja liikkumiseen liittyvät toiminnot',
    titleEn: 'Neuromusculoskeletal and movement-related functions',
    instructions: 'Does the text mention muscle power (lihasvoima), muscle tone, joint mobility, involuntary movements, posture control, or balance?'
  },
  b8: {
    code: 'b8',
    component: 'b',
    titleFi: 'Ihon ja siihen liittyvien rakenteiden toiminnot',
    titleEn: 'Skin and related functions',
    instructions: 'Does the text mention skin sensation, skin protective functions, pressure injuries, or wound healing?'
  },

  // ── Component s: Ruumiin rakenteet (Body Structures) ──
  s1: {
    code: 's1',
    component: 's',
    titleFi: 'Hermojärjestelmän rakenteet',
    titleEn: 'Structures of the nervous system',
    instructions: 'Does the text explicitly refer to anatomical structures of the nervous system (brain, spinal cord, nerves)?'
  },
  s2: {
    code: 's2',
    component: 's',
    titleFi: 'Silmä, korva ja niihin liittyvät rakenteet',
    titleEn: 'Eye, ear and related structures',
    instructions: 'Does the text explicitly refer to physical structures of the eyeball, vision organs, or ear?'
  },
  s3: {
    code: 's3',
    component: 's',
    titleFi: 'Ääneen ja puheeseen liittyvät rakenteet',
    titleEn: 'Structures involved in voice and speech',
    instructions: 'Does the text explicitly refer to anatomical structures of larynx, vocal cords, pharynx, or tongue?'
  },
  s4: {
    code: 's4',
    component: 's',
    titleFi: 'Sydän- ja verenkierto-, immuuni- ja hengitysjärjestelmän rakenteet',
    titleEn: 'Structures of cardiovascular and respiratory systems',
    instructions: 'Does the text explicitly refer to anatomical structures of heart, blood vessels, lungs, or trachea?'
  },
  s5: {
    code: 's5',
    component: 's',
    titleFi: 'Ruuansulatus-, aineenvaihdunta- ja umpieritysjärjestelmän rakenteet',
    titleEn: 'Structures related to digestive and endocrine systems',
    instructions: 'Does the text explicitly refer to anatomical structures of stomach, intestines, liver, or endocrine glands?'
  },
  s6: {
    code: 's6',
    component: 's',
    titleFi: 'Virtsa- ja sukupuolielinjärjestelmän rakenteet',
    titleEn: 'Structures of genitourinary system',
    instructions: 'Does the text explicitly refer to anatomical structures of kidneys, bladder, or urinary tract?'
  },
  s7: {
    code: 's7',
    component: 's',
    titleFi: 'Liikkumiseen liittyvät rakenteet',
    titleEn: 'Structures related to movement',
    instructions: 'Does the text explicitly refer to physical joints, bones, spine, limbs (alaraaja, polvi, lonkka, olkapää), or amputations?'
  },
  s8: {
    code: 's8',
    component: 's',
    titleFi: 'Ihon ja siihen liittyvät rakenteet',
    titleEn: 'Skin and related structures',
    instructions: 'Does the text explicitly refer to skin damage, skin ulcers, surgical scars, or skin anatomy?'
  },

  // ── Component d: Suoritukset ja osallistuminen (Activities & Participation) ──
  d1: {
    code: 'd1',
    component: 'd',
    titleFi: 'Oppiminen ja tiedon soveltaminen',
    titleEn: 'Learning and applying knowledge',
    instructions: 'Does the text mention learning skills, focusing attention, reading, writing, calculating, or solving problems?'
  },
  d2: {
    code: 'd2',
    component: 'd',
    titleFi: 'Yleisluontoiset tehtävät ja vaateet',
    titleEn: 'General tasks and demands',
    instructions: 'Does the text mention managing daily routines, handling stress, or organizing multifaceted tasks?'
  },
  d3: {
    code: 'd3',
    component: 'd',
    titleFi: 'Kommunikointi',
    titleEn: 'Communication',
    instructions: 'Does the text mention communicating, speaking, understanding spoken message, conversation, or using communication devices?'
  },
  d4: {
    code: 'd4',
    component: 'd',
    titleFi: 'Liikkuminen',
    titleEn: 'Mobility',
    instructions: 'Does the text mention moving, walking, transfers, climbing stairs, changing body positions, or using transport?'
  },
  d5: {
    code: 'd5',
    component: 'd',
    titleFi: 'Itsestä huolehtiminen',
    titleEn: 'Self-care',
    instructions: 'Does the text mention washing (peseytyminen), dressing (pukeutuminen), toileting (WC-toiminnot), or eating (syöminen)?'
  },
  d6: {
    code: 'd6',
    component: 'd',
    titleFi: 'Kotielämä',
    titleEn: 'Domestic life',
    instructions: 'Does the text mention domestic life, cleaning (siivoaminen), cooking, laundry (pyykinpesu), or shopping (kauppa-asiointi)?'
  },
  d7: {
    code: 'd7',
    component: 'd',
    titleFi: 'Henkilöiden välinen vuorovaikutus ja suhteet',
    titleEn: 'Interpersonal interactions and relationships',
    instructions: 'Does the text mention interactions with people, family relationships, or informal social relations?'
  },
  d8: {
    code: 'd8',
    component: 'd',
    titleFi: 'Keskeiset elämänalueet',
    titleEn: 'Major life areas',
    instructions: 'Does the text mention formal education, paid work/employment, or financial/economic self-sufficiency?'
  },
  d9: {
    code: 'd9',
    component: 'd',
    titleFi: 'Yhteisöllinen, sosiaalinen ja kansalaiselämä',
    titleEn: 'Community, social and civic life',
    instructions: 'Does the text mention community participation, recreation, leisure/hobbies, clubs, religion, or civic life?'
  },

  // ── Component e: Ympäristötekijät (Environmental Factors) ──
  e1: {
    code: 'e1',
    component: 'e',
    titleFi: 'Tuotteet ja teknologia',
    titleEn: 'Products and technology',
    instructions: 'Does the text mention assistive products, walking sticks/crutches/rollators, adapted devices, or building design (handrails/ramps)?'
  },
  e2: {
    code: 'e2',
    component: 'e',
    titleFi: 'Luonnollinen ympäristö ja ihmisen tekemät muutokset',
    titleEn: 'Natural environment and human-made changes',
    instructions: 'Does the text mention physical terrain, outdoor winter ice/slippery sidewalks, weather/climate, or light/noise factors?'
  },
  e3: {
    code: 'e3',
    component: 'e',
    titleFi: 'Tuki ja keskinäiset suhteet',
    titleEn: 'Support and relationships',
    instructions: 'Does the text mention support provided by family/spouse, personal assistants, home care workers, or health professionals?'
  },
  e4: {
    code: 'e4',
    component: 'e',
    titleFi: 'Asenteet',
    titleEn: 'Attitudes',
    instructions: 'Does the text mention individual or societal attitudes, motivation, or attitudes of caregivers/providers?'
  },
  e5: {
    code: 'e5',
    component: 'e',
    titleFi: 'Palvelut, hallinto ja politiikat',
    titleEn: 'Services, systems and policies',
    instructions: 'Does the text mention formal health services, social care services, assisted living facility services, or transport services?'
  }
};

/**
 * Builds the Jev Schema for the Stage 1 Router call.
 */
export function buildThlChapterRouterSchema(): Record<string, { type: 'noul'; instructions: string }> {
  const schema: Record<string, { type: 'noul'; instructions: string }> = {};
  for (const [key, chapter] of Object.entries(THL_30_CHAPTERS)) {
    schema[key] = {
      type: 'noul',
      instructions: chapter.instructions
    };
  }
  return schema;
}
