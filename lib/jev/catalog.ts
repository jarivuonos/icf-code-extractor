export interface JevQuestionDefinition {
  icfCode: string;
  icfTitle: string;
  type: 'choice' | 'noul';
  criteria?: Record<string, string>;
  instructions?: string;
  keywords: string[];
  defaultReasoning: (choice: string, conf: number) => string;
}

export const ICF_JEV_CATALOG: Record<string, JevQuestionDefinition> = {
  b144: {
    icfCode: 'b144',
    icfTitle: 'Muistitoiminnot',
    type: 'choice',
    criteria: {
      '0': 'Muisti normaali tai ikätasoinen, ei ongelmia',
      '1': 'Lievä muistiongelma tai satunnaisia muistivaikeuksia',
      '2': 'Kohtalainen muistivaikeus tai potilaan kokema merkittävä haaste arjessa',
      '3': 'Vaikea muistisairaus tai merkittävä kognitiivinen häiriö',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['muisti', 'kognitio', 'muistivaikeus', 'muistiongelm', 'orientoitun'],
    defaultReasoning: (choice, conf) =>
      `Tekoäly (Jev) arvioi muistitoimintojen tarkenteeksi ${choice} (varmuus ${Math.round(conf * 100)} %) tekstin kuvausten perusteella.`
  },
  b730_lower: {
    icfCode: 'b730',
    icfTitle: 'Lihasvoiman toiminnot (alaraajat / vartalo)',
    type: 'choice',
    criteria: {
      '0': 'Lihasvoima normaali tai ikätasoa parempi',
      '1': 'Lievä lihasvoiman alenema',
      '2': 'Kohtalainen lihasvoiman alenema (tuoliltanousu hidas / heikko tulos / kuntoluokka 1-2)',
      '3': 'Vaikea lihasvoiman heikkous',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['tuoliltanousu', 'alaraajojen lihasvoima', 'lihasvoim', 'kuntoluokka', 'istumaannousu', 'voimakestävyys'],
    defaultReasoning: (choice, conf) =>
      `Lihasvoimatestistön (tuoliltanousu/FinTerveys) tulokset osoittavat tarkennetta ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  b730_grip: {
    icfCode: 'b730',
    icfTitle: 'Lihasvoiman toiminnot (käsien puristusvoima)',
    type: 'choice',
    criteria: {
      '0': 'Puristusvoima normaali tai keskimääräistä parempi (kuntoluokka 4-5)',
      '1': 'Lievä puristusvoiman alenema',
      '2': 'Kohtalainen puristusvoiman heikkous',
      '3': 'Vaikea puristusvoiman heikkous',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['puristusvoima', 'saehan', 'käden voima', 'käsien voimat'],
    defaultReasoning: (choice, conf) =>
      `Puristusvoimamittarin tulosten perusteella tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  b755: {
    icfCode: 'b755',
    icfTitle: 'Tahdonalaiset liiketoiminnot (asennonhallinta ja tasapaino)',
    type: 'choice',
    criteria: {
      '0': 'Tasapainon hallinta täysin normaali',
      '1': 'Lievä tasapainon epävarmuus (Berg > 50, ei merkittävää kaatumisriskiä)',
      '2': 'Kohtalainen tasapainon hallinnan vaikeus (kaatumisia kotona, DGI < 19, SPPB 7-9, tandem epävarma)',
      '3': 'Vaikea tasapainohäiriö, toistuvia kaatumisia tai jatkuva tuki tarpeen',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['tasapaino', 'berg', 'dgi', 'kaatumis', 'horjahtele', 'tandem', 'abc-asteikko'],
    defaultReasoning: (choice, conf) =>
      `Tasapainomittausten (Berg/DGI/SPPB) ja kaatumishistorian perusteella tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  b280: {
    icfCode: 'b280',
    icfTitle: 'Kipuaistimus',
    type: 'choice',
    criteria: {
      '0': 'Ei mainintaa kivusta tai kivuton',
      '1': 'Lievä kipu',
      '2': 'Kohtalainen kipu, joka rajoittaa toimintaa',
      '3': 'Vaikea tai voimakas kipu',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['kipu', 'särky', 'kipua', 'nivelrikko'],
    defaultReasoning: (choice, conf) =>
      `Tekstissä kuvatun kipukokemuksen ja rajoitteen perusteella tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  d410: {
    icfCode: 'd410',
    icfTitle: 'Asennon vaihtaminen (nouseminen istumasta tai makuulta)',
    type: 'choice',
    criteria: {
      '0': 'Asennon vaihdot sujuvat normaalisti',
      '1': 'Lievää hitautta tai vaivalloisuutta nousta tuolilta tai sängystä',
      '2': 'Kohtalaista vaikeutta tuolilta ylösnousussa (suoritus raskas, keskivartalon hallinnan heikkoutta)',
      '3': 'Vaikeaa nousta istumasta tai tarvitsee toisen henkilön apua',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['tuolilta', 'ylösnousu', 'asennon', 'selinmakuu', 'lantion nosto', 'istumaan'],
    defaultReasoning: (choice, conf) =>
      `Tuolilta ylösnousun ja asennonvaihtojen havaintojen mukaan tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  d450: {
    icfCode: 'd450',
    icfTitle: 'Käveleminen',
    type: 'choice',
    criteria: {
      '0': 'Kävely normaalia ilman vaikeuksia tai rajoitteita',
      '1': 'Lievää vaikeutta tai keskittymisen tarvetta kävelyssä, itsenäinen',
      '2': 'Kohtalaista kävelyvaikeutta (leveäraiteinen, kompasteluja, apuvälineen tarve ulkona)',
      '3': 'Vaikeaa kävellä, matka erittäin lyhyt tai avustettava',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['kävely', 'käveleminen', 'kävelynopeus', 'kompastelu', 'leveäraiteis', '10 metrin kävely'],
    defaultReasoning: (choice, conf) =>
      `Kävelynopeustestin, havainnoinnin ja arkiarvion perusteella kävelyn tarkenne on ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  d455: {
    icfCode: 'd455',
    icfTitle: 'Liikkuminen eri paikoissa (portaissa kulkeminen)',
    type: 'choice',
    criteria: {
      '0': 'Portaissa kulkeminen ilman vaikeuksia',
      '1': 'Lievää vaikeutta portaissa kulkemisessa',
      '2': 'Kohtalaista vaikeutta portaissa (kaidetuen tarve tai askeleen leventäminen)',
      '3': 'Ei kykene kulkemaan portaissa itsenäisesti',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['portaat', 'portaissa', 'kaidetuki', 'kaide'],
    defaultReasoning: (choice, conf) =>
      `Portaissa kulkemisen havaintojen (FSQ/DGI/kaidetuki) mukaan tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  d510: {
    icfCode: 'd510',
    icfTitle: 'Peseytyminen',
    type: 'choice',
    criteria: {
      '0': 'Peseytyminen suihkussa ja saunassa ilman vaikeuksia',
      '1': 'Lievää vaikeutta peseytymisessä (esim. leveäraiteisesti seisten tai tuen tarvetta)',
      '2': 'Kohtalaista vaikeutta tai toisen henkilön avustusta tarvitaan osittain',
      '3': 'Vaikea peseytymisrajoite, täysin avustettava',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['peseytyminen', 'suihkussa', 'saunassa', 'pesu'],
    defaultReasoning: (choice, conf) =>
      `Peseytymisen suoriutumisarvion (FSQ) perusteella tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  d540: {
    icfCode: 'd540',
    icfTitle: 'Pukeutuminen',
    type: 'choice',
    criteria: {
      '0': 'Pukeutuminen ja riisuuntuminen ilman vaikeuksia',
      '1': 'Lievää vaikeutta pukeutumisessa (esim. seinään nojaten suoriutuu itsenäisesti)',
      '2': 'Kohtalaista vaikeutta tai tarvitsee apua vaatteiden pukemisessa',
      '3': 'Ei kykene pukeutumaan itsenäisesti',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['pukeutuminen', 'riisuuntuminen', 'vaatteet'],
    defaultReasoning: (choice, conf) =>
      `Pukeutumisen itsenäisyys- ja FSQ-arvion perusteella tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  d530: {
    icfCode: 'd530',
    icfTitle: 'WC-toiminnot',
    type: 'choice',
    criteria: {
      '0': 'WC-toiminnot ilman vaikeuksia',
      '1': 'Lievää vaikeutta WC-toiminnoissa',
      '2': 'Kohtalaista vaikeutta WC-toiminnoissa',
      '3': 'Vaikea ongelma / avustettava',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['wc-toiminnot', 'wc', 'vessassa'],
    defaultReasoning: (choice, conf) =>
      `WC-toimintojen suoriutumisen perusteella tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  d550: {
    icfCode: 'd550',
    icfTitle: 'Syöminen',
    type: 'choice',
    criteria: {
      '0': 'Syöminen ilman vaikeuksia',
      '1': 'Lievää vaikeutta syömisessä',
      '2': 'Kohtalaista vaikeutta syömisessä',
      '3': 'Vaikea ongelma / syötettävä',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['syöminen', 'syö ruokaa'],
    defaultReasoning: (choice, conf) =>
      `Syömisen itsenäisyyden perusteella tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  d640: {
    icfCode: 'd640',
    icfTitle: 'Kotitaloustyöt (siivoaminen ja kodinhoito)',
    type: 'choice',
    criteria: {
      '0': 'Kotityöt ja siivous sujuvat ilman vaikeuksia',
      '1': 'Lievää vaikeutta siivoamisessa tai kotitöiden tekemisessä',
      '2': 'Kohtalaista vaikeutta siivoamisessa (esim. tarvitsee apua raskaissa töissä tai harvennettu siivous)',
      '3': 'Ei kykene tekemään kotitöitä, täysin muiden varassa',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['siivoaminen', 'kotitalous', 'kotityöt', 'pyykinpeseminen', 'pyykit'],
    defaultReasoning: (choice, conf) =>
      `Kotitaloustöiden ja siivoamisen arvioinnin perusteella tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  d620: {
    icfCode: 'd620',
    icfTitle: 'Tavaroiden ja palvelujen hankkiminen (kauppa-asiointi)',
    type: 'choice',
    criteria: {
      '0': 'Kauppa-asioiden hoitaminen ilman vaikeuksia',
      '1': 'Lievää vaikeutta asioinnissa',
      '2': 'Kohtalaista vaikeutta tai tukeutuu palveluihin / apuun',
      '3': 'Ei kykene asioimaan itsenäisesti',
      'not_mentioned': 'Ei mainintaa tekstissä'
    },
    keywords: ['kauppa-asioiden', 'kaupassa', 'asioiden hoitaminen', 'palvelutalossa'],
    defaultReasoning: (choice, conf) =>
      `Kauppa-asioiden ja asiointikyvyn arvioinnin mukaan tarkenne ${choice} (varmuus ${Math.round(conf * 100)} %).`
  },
  e1151: {
    icfCode: 'e1151',
    icfTitle: 'Henkilökohtaiset liikkumisen apuvälineet',
    type: 'noul',
    instructions: 'Käyttääkö potilas kävelysauvoja, sauvoja, kyynärsauvoja, rollaattoria tai muuta liikkumisen apuvälinettä?',
    keywords: ['sauvakävely', 'sauvat', 'apuväline', 'kyynärsauv', 'rollaattori', 'kävelylenkeillä'],
    defaultReasoning: (_, conf) =>
      `Liikkumisen apuväline (sauvat/tuki) tunnistettu tekstistä edistävänä tekijänä (varmuus ${Math.round(conf * 100)} %).`
  },
  e150: {
    icfCode: 'e150',
    icfTitle: 'Asuinympäristön rakenteet ja teknologia (tukikaiteet)',
    type: 'noul',
    instructions: 'Käyttääkö potilas tukikaiteita portaissa tai asunnossa, tai tarvitaanko kaidetukea?',
    keywords: ['kaidetuki', 'tukikaite', 'kaiteet', 'kaidetuen'],
    defaultReasoning: (_, conf) =>
      `Kaidetuki tai asuinympäristön tukirakenne tunnistettu liikkumista mahdollistavana tekijänä (varmuus ${Math.round(conf * 100)} %).`
  }
};
