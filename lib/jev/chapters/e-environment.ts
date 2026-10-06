import { JevQuestionDefinition } from '../catalog';

export const E_CHAPTERS_CATALOG: Record<string, Record<string, JevQuestionDefinition>> = {
  e1: {
    e115: {
      icfCode: 'e115',
      icfTitle: 'Henkilökohtaiset liikkumisen apuvälineet (sauvat, rollaattori, tuet)',
      type: 'noul',
      instructions: 'Does the text mention using mobility aids like walking sticks, poles, crutches, rollators, or wheelchairs?',
      keywords: ['sauvakävely', 'sauvat', 'apuväline', 'kyynärsauv', 'rollaattori', 'kävelylenkeillä'],
      defaultReasoning: (_, conf) =>
        `Liikkumisen apuväline (e115) tunnistettu tekstistä edistävänä tekijänä (varmuus ${Math.round(conf * 100)} %).`
    },
    e150: {
      icfCode: 'e150',
      icfTitle: 'Asuinympäristön rakenteet ja teknologia (tukikaiteet ja kynnykset)',
      type: 'noul',
      instructions: 'Does the text mention architectural adaptations, handrails (kaiteet), grab bars, stairs, or thresholds in home or public buildings?',
      keywords: ['kaidetuki', 'tukikaite', 'kaiteet', 'kaidetuen', 'kynnykset'],
      defaultReasoning: (_, conf) =>
        `Asuinympäristön tukirakenteet/kaiteet (e150) tunnistettu liikkumista mahdollistavana tekijänä (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  e2: {
    e225: {
      icfCode: 'e225',
      icfTitle: 'Ilmasto ja sääolosuhteet (liukkaus ja lumi)',
      type: 'noul',
      instructions: 'Does the text mention weather, winter conditions, icy sidewalks (jäisellä jalkakäytävällä), or slippery outdoor terrain affecting balance or confidence?',
      keywords: ['jäisellä', 'liukas', 'liukkaud', 'talvella', 'jäällä'],
      defaultReasoning: (_, conf) =>
        `Sääolosuhteet/liukkaus (e225) tunnistettu ulkona liikkumisen esteenä tai huolenaiheena (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  e3: {
    e310: {
      icfCode: 'e310',
      icfTitle: 'Lähiperheen ja omaisten antama tuki',
      type: 'noul',
      instructions: 'Does the text mention practical or emotional support provided by family members, spouse, or relatives?',
      keywords: ['omainen', 'puoliso', 'lapset', 'lähiomainen', 'perheen tuki'],
      defaultReasoning: (_, conf) =>
        `Lähiomaisten tuki (e310) tunnistettu potilaan arjen edistävänä voimavarana (varmuus ${Math.round(conf * 100)} %).`
    },
    e355: {
      icfCode: 'e355',
      icfTitle: 'Terveydenhuollon ja kuntoutuksen ammattihenkilöt',
      type: 'noul',
      instructions: 'Does the text describe intervention, assessment, guidance, or rehabilitation provided by physiotherapist, doctor, or nurse?',
      keywords: ['fysioterapeutti', 'vastaanotolla', 'terveydenhuollon', 'hoitaja', 'lääkäri'],
      defaultReasoning: (_, conf) =>
        `Terveydenhuollon ammattihenkilön tuki ja ohjaus (e355) tunnistettu edistävänä tekijänä (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  e5: {
    e575: {
      icfCode: 'e575',
      icfTitle: 'Yleiset sosiaali- ja terveyspalvelut (palvelutalo, ateriapalvelu, kotihoito)',
      type: 'noul',
      instructions: 'Does the text mention institutional services, assisted living facility services (palvelutalo), meal services (ateriapalvelu), or home care (kotihoito)?',
      keywords: ['palvelutalo', 'palvelutalossa', 'kotihoito', 'ateriapalvelu', 'kuljetuspalvelu'],
      defaultReasoning: (_, conf) =>
        `Sosiaali- ja terveyspalvelut (e575) tunnistettu arjessa pärjäämistä tukevana järjestelmänä (varmuus ${Math.round(conf * 100)} %).`
    }
  }
};
