import { JevQuestionDefinition } from '../catalog';

export const S_CHAPTERS_CATALOG: Record<string, Record<string, JevQuestionDefinition>> = {
  s1: {
    s110: {
      icfCode: 's110',
      icfTitle: 'Aivojen rakenne (aivoinfarkti, aivovamma tai leesio)',
      type: 'choice',
      criteria: {
        '0': 'Ei aivorakenteen vauriota',
        '1': 'Lievä aivoverenkiertohäiriö (TIA)',
        '2': 'Kohtalainen aivorakenteen vaurio (sairastettu aivoinfarkti / AVH)',
        '3': 'Vaikea laaja-alainen aivovaurio',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['aivoinfarkti', 'avh', 'aivoverenkierto', 'tia', 'aivovamma'],
      defaultReasoning: (c, conf) => `Aivojen rakenteen (s110) vaurion tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  s7: {
    s750: {
      icfCode: 's750',
      icfTitle: 'Alaraajan rakenne (polvi, lonkka, sääri, jalkaterä)',
      type: 'choice',
      criteria: {
        '0': 'Alaraajojen anatomia normaali',
        '1': 'Lievä alaraajan nivelrikko tai kuluma ilman leikkaustarvetta',
        '2': 'Kohtalainen alaraajan nivelrikko, tekonivel tai murtuman jälkitila',
        '3': 'Vaikea nivelrikko tai alaraaja-amputaatio',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['polvi', 'lonkka', 'alaraaja', 'nivelrikko', 'tekonivel', 'murtuma', 'jalkaterä'],
      defaultReasoning: (c, conf) => `Alaraajan rakenteen (s750) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    s760: {
      icfCode: 's760',
      icfTitle: 'Selkärangan rakenne',
      type: 'choice',
      criteria: {
        '0': 'Selkärangan rakenne normaali',
        '1': 'Lievä selän rappeuma tai skolioosi',
        '2': 'Kohtalainen spinaalistenoosi, nikamamurtuma tai välilevytyrä',
        '3': 'Vaikea selkärangan epämuodostuma tai laaja leikkauksen jälkitila',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['selkä', 'lanneranka', 'spinaalistenoosi', 'nikama', 'välilevy', 'skolioosi'],
      defaultReasoning: (c, conf) => `Selkärangan rakenteen (s760) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    s730: {
      icfCode: 's730',
      icfTitle: 'Yläraajan rakenne (olkapää, kyynärvarsi, ranne, käsi)',
      type: 'choice',
      criteria: {
        '0': 'Yläraajan anatomia normaali',
        '1': 'Lievä yläraajan nivelrikko tai jännevaurio',
        '2': 'Kohtalainen olkanivelen vaurio, kiertäjäkalvosinrepeämä tai murtuman jälkitila',
        '3': 'Vaikea yläraajavamma tai amputaatio',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['olkapää', 'ranne', 'yläraaja', 'käsi', 'kiertäjäkalvosin'],
      defaultReasoning: (c, conf) => `Yläraajan rakenteen (s730) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  s8: {
    s810: {
      icfCode: 's810',
      icfTitle: 'Ihon rakenne (haavat ja arvet)',
      type: 'choice',
      criteria: {
        '0': 'Ihon rakenne normaali',
        '1': 'Lievä ihovaurio tai pieni pintahaava',
        '2': 'Kohtalainen krooninen haava-alue tai leikkausarpi',
        '3': 'Vaikea ihonekroosi tai syvä haavauma',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['haava', 'arpi', 'nekroosi', 'haavauma'],
      defaultReasoning: (c, conf) => `Ihon rakenteen (s810) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  }
};
