import { JevQuestionDefinition } from '../catalog';

export const D_CHAPTERS_CATALOG: Record<string, Record<string, JevQuestionDefinition>> = {
  d1: {
    d160: {
      icfCode: 'd160',
      icfTitle: 'Tarkkaavaisuuden kohdentaminen',
      type: 'choice',
      criteria: {
        '0': 'Kykenee keskittymään ja kohdentamaan tarkkaavaisuutta normaalisti',
        '1': 'Lievää tarkkaavaisuuden herpaantumista',
        '2': 'Kohtalaista keskittymisvaikeutta, joka haittaa tehtävien suorittamista',
        '3': 'Vaikea tarkkaavaisuuden häiriö',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['keskittym', 'tarkkaavaisuus', 'keskittyä', 'huomiokyky'],
      defaultReasoning: (c, conf) => `Tarkkaavaisuuden kohdentamisen (d160) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  d2: {
    d230: {
      icfCode: 'd230',
      icfTitle: 'Päivittäisten rutiinien suorittaminen',
      type: 'choice',
      criteria: {
        '0': 'Päivittäiset rutiinit sujuvat itsenäisesti ja suunnitelmallisesti',
        '1': 'Lievää vaikeutta tai hidastumista arjen aikataulujen hallinnassa',
        '2': 'Kohtalaista tuen tarvetta päivärytmin ja rutiinien ylläpidossa',
        '3': 'Täysin muiden ohjauksen varassa rutiineissa',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['rutiinit', 'päivärytmi', 'arjen hallinta', 'toiminnanohjaus'],
      defaultReasoning: (c, conf) => `Päivittäisten rutiinien suorittamisen (d230) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  d3: {
    d310: {
      icfCode: 'd310',
      icfTitle: 'Puhutun viestin ymmärtäminen',
      type: 'choice',
      criteria: {
        '0': 'Ymmärtää puhetta vaivatta',
        '1': 'Lievää vaikeutta ymmärtää monimutkaista puhetta tai hälyssä',
        '2': 'Kohtalainen puheen ymmärtämisen vaikeus',
        '3': 'Ei ymmärrä puhetta',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['puheen ymmärtäminen', 'viestin ymmärtäminen', 'ymmärtää'],
      defaultReasoning: (c, conf) => `Puhutun viestin ymmärtämisen (d310) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d330: {
      icfCode: 'd330',
      icfTitle: 'Puhuminen ja keskusteleminen',
      type: 'choice',
      criteria: {
        '0': 'Keskustelee asianmukaisesti ja sujuvasti',
        '1': 'Lievää sanojen hakemista tai puheen hitautta',
        '2': 'Kohtalaista keskusteluvaikeutta, tarvitsee tukea',
        '3': 'Ei kykene kommunikoimaan suullisesti',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['keskustelee', 'puhuminen', 'vuorovaikutus', 'sanojen haku'],
      defaultReasoning: (c, conf) => `Puhumisen (d330) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  d4: {
    d410: {
      icfCode: 'd410',
      icfTitle: 'Asennon vaihtaminen (nouseminen istumasta tai makuulta)',
      type: 'choice',
      criteria: {
        '0': 'Asennon vaihdot sujuvat vaivatta',
        '1': 'Lievää hitautta nousta tuolilta tai sängystä',
        '2': 'Kohtalaista vaikeutta tuolilta ylösnousussa (suoritus raskas / tukea tarvitaan)',
        '3': 'Vaikeaa nousta istumasta, tarvitsee toisen henkilön apua',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['tuolilta', 'ylösnousu', 'asennon', 'selinmakuu', 'lantion nosto', 'istumaan'],
      defaultReasoning: (c, conf) => `Asennon vaihtamisen (d410) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d415: {
      icfCode: 'd415',
      icfTitle: 'Asennon ylläpitäminen (seisominen ja istuminen)',
      type: 'choice',
      criteria: {
        '0': 'Pystyy ylläpitämään seisoma-asentoa vakaasti',
        '1': 'Lievää epävarmuutta pitkään seistessä',
        '2': 'Kohtalaista vaikeutta seisoa itsenäisesti (leveäraiteinen asento, huojuntaa)',
        '3': 'Ei kykene seisomaan ilman jatkuvaa tukea tai apua',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['seisominen', 'seisoma-asento', 'puolitandem', 'yhdellä jalalla', 'seisten'],
      defaultReasoning: (c, conf) => `Asennon ylläpitämisen (d415) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d420: {
      icfCode: 'd420',
      icfTitle: 'Siirtyminen paikasta toiseen (vuoteesta tuoliin tms.)',
      type: 'choice',
      criteria: {
        '0': 'Siirtymiset itsenäisiä ja turvallisia',
        '1': 'Lievää hitautta tai varovaisuutta siirtymisissä',
        '2': 'Kohtalaisia vaikeuksia siirtymisissä, tarvitsee apuvälinettä tai valvontaa',
        '3': 'Vaikea siirtymisvaikeus, tarvitsee toisen henkilön avustusta',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['siirtyminen', 'siirrot', 'vuoteesta pyörätuoliin', 'nousut'],
      defaultReasoning: (c, conf) => `Siirtymisen (d420) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
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
      defaultReasoning: (c, conf) => `Kävelemisen (d450) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d455: {
      icfCode: 'd455',
      icfTitle: 'Liikkuminen eri paikoissa (portaissa kulkeminen)',
      type: 'choice',
      criteria: {
        '0': 'Portaissa kulkeminen ilman vaikeuksia',
        '1': 'Lievää vaikeutta portaissa kulkemisessa',
        '2': 'Kohtalaista vaikeutta portaissa (kaidetuen tarve tai askellus vuorotahtiin epävarmaa)',
        '3': 'Ei kykene kulkemaan portaissa itsenäisesti',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['portaat', 'portaissa', 'kaidetuki', 'kaide'],
      defaultReasoning: (c, conf) => `Liikkumisen eri paikoissa / portaissa (d455) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d470: {
      icfCode: 'd470',
      icfTitle: 'Kulkuneuvon käyttäminen (autolla ajaminen tai julkiset kulkuneuvot)',
      type: 'choice',
      criteria: {
        '0': 'Kulkuneuvojen käyttö ja matkustaminen sujuu vaivatta',
        '1': 'Lievää epävarmuutta julkisissa tai pitkillä ajomatkoilla',
        '2': 'Kohtalainen rajoite (luopunut autolla ajosta tai tarvitsee saattajaa julkisissa)',
        '3': 'Ei kykene käyttämään kulkuneuvoja',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['autolla ajaminen', 'julkisilla', 'bussi', 'kulkuväline', 'matkustaminen'],
      defaultReasoning: (c, conf) => `Kulkuneuvon käyttämisen (d470) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  d5: {
    d510: {
      icfCode: 'd510',
      icfTitle: 'Peseytyminen',
      type: 'choice',
      criteria: {
        '0': 'Peseytyminen suihkussa ja saunassa ilman vaikeuksia',
        '1': 'Lievää vaikeutta peseytymisessä (esim. leveäraiteisesti seisten tai tuen tarvetta)',
        '2': 'Kohtalaista vaikeutta tai toisen henkilön osittaista apua tarvitaan',
        '3': 'Vaikea peseytymisrajoite, täysin avustettava',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['peseytyminen', 'suihkussa', 'saunassa', 'pesu'],
      defaultReasoning: (c, conf) => `Peseytymisen (d510) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d520: {
      icfCode: 'd520',
      icfTitle: 'Kehon osien hoitaminen (henkilökohtainen hygienia)',
      type: 'choice',
      criteria: {
        '0': 'Hygieniasta huolehtiminen (hampaat, hiukset, parta) sujuu vaivatta',
        '1': 'Lievää vaikeutta jalkaterien tai selän ylettymisessä',
        '2': 'Kohtalaista avuntarvetta jalkojen tai kynsien hoidossa',
        '3': 'Täysin avustettava hygieniassa',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['hygienia', 'hiukset', 'parta', 'kynnet', 'hampaiden'],
      defaultReasoning: (c, conf) => `Kehon osien hoitamisen (d520) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d530: {
      icfCode: 'd530',
      icfTitle: 'WC-toiminnot',
      type: 'choice',
      criteria: {
        '0': 'WC-toiminnot itsenäisiä ja vaivattomia',
        '1': 'Lievää vaikeutta istuutua tai nousta WC-istuimelta',
        '2': 'Kohtalaista avuntarvetta vaatteiden riisumisessa tai puhdistautumisessa WC:ssä',
        '3': 'Täysin avustettava WC-toiminnoissa',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['wc-toiminnot', 'wc', 'vessassa', 'wc-istuin'],
      defaultReasoning: (c, conf) => `WC-toimintojen (d530) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d540: {
      icfCode: 'd540',
      icfTitle: 'Pukeutuminen',
      type: 'choice',
      criteria: {
        '0': 'Pukeutuminen ja riisuuntuminen ilman vaikeuksia',
        '1': 'Lievää vaikeutta pukeutumisessa (esim. seinään nojaten, kenkien tai sukkien pukemisessa)',
        '2': 'Kohtalaista vaikeutta tai tarvitsee toisen henkilön apua',
        '3': 'Ei kykene pukeutumaan itsenäisesti',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['pukeutuminen', 'riisuuntuminen', 'vaatteet', 'kengät', 'sukat'],
      defaultReasoning: (c, conf) => `Pukeutumisen (d540) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d550: {
      icfCode: 'd550',
      icfTitle: 'Syöminen',
      type: 'choice',
      criteria: {
        '0': 'Syöminen itsenäistä ilman vaikeuksia',
        '1': 'Lievää vaikeutta aterimien käytössä tai ruoan leikkaamisessa',
        '2': 'Kohtalaista vaikeutta, tarvitsee ruoan paloittelemista tai apuvälineitä',
        '3': 'Syötettävä',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['syöminen', 'syö ruokaa', 'aterimet', 'ruokailu'],
      defaultReasoning: (c, conf) => `Syömisen (d550) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  d6: {
    d620: {
      icfCode: 'd620',
      icfTitle: 'Tavaroiden ja palvelujen hankkiminen (kauppa-asiointi)',
      type: 'choice',
      criteria: {
        '0': 'Kauppa-asioiden hoitaminen ilman vaikeuksia',
        '1': 'Lievää vaikeutta raskaiden ostosten kantamisessa',
        '2': 'Kohtalaista vaikeutta tai tukeutuu palveluihin / muiden apuun asioinnissa',
        '3': 'Ei kykene asioimaan itsenäisesti',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['kauppa-asioiden', 'kaupassa', 'asioiden hoitaminen', 'palvelutalossa'],
      defaultReasoning: (c, conf) => `Tavaroiden ja palvelujen hankkimisen (d620) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d630: {
      icfCode: 'd630',
      icfTitle: 'Aterioiden valmistaminen',
      type: 'choice',
      criteria: {
        '0': 'Valmistaa ruokaa itsenäisesti ja monipuolisesti',
        '1': 'Lievää vaivalloisuutta, lämmittää valmisruokia mieluummin',
        '2': 'Kohtalaista avuntarvetta ruoanlaitossa tai turvautuu ateriapalveluun',
        '3': 'Ei kykene valmistamaan aterioita',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['ruoanlaittaminen', 'ruoan valmistus', 'lämmittelee', 'ateria'],
      defaultReasoning: (c, conf) => `Aterioiden valmistamisen (d630) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    d640: {
      icfCode: 'd640',
      icfTitle: 'Kotitaloustyöt (siivoaminen ja kodinhoito)',
      type: 'choice',
      criteria: {
        '0': 'Kotityöt ja siivous sujuvat ilman vaikeuksia',
        '1': 'Lievää vaikeutta siivoamisessa tai kotitöiden tekemisessä',
        '2': 'Kohtalaista vaikeutta siivoamisessa (tarvitsee siivousapua tai harventanut siivousta)',
        '3': 'Ei kykene tekemään kotitöitä lainkaan',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['siivoaminen', 'kotitalous', 'kotityöt', 'pyykinpeseminen', 'pyykit', 'pihatyöt'],
      defaultReasoning: (c, conf) => `Kotitaloustöiden (d640) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  d7: {
    d760: {
      icfCode: 'd760',
      icfTitle: 'Perhesuhteet ja läheissuhteet',
      type: 'choice',
      criteria: {
        '0': 'Suhteet läheisiin hyvät ja tukevat',
        '1': 'Lievää huolta tai kuormitusta perhesuhteissa',
        '2': 'Kohtalaista ristiriitaa tai eristyneisyyttä perheestä',
        '3': 'Täydellinen perhesuhteiden katkeaminen',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['perhe', 'puoliso', 'lähiomainen', 'lapset'],
      defaultReasoning: (c, conf) => `Perhesuhteiden (d760) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  d8: {
    d850: {
      icfCode: 'd850',
      icfTitle: 'Palkkatyö (työkyky ja työssä suoriutuminen)',
      type: 'choice',
      criteria: {
        '0': 'Työkyky hyvä ja täysiaikainen',
        '1': 'Lievää työkyvyn alenemista tai työtehtävien keventämisen tarvetta',
        '2': 'Kohtalaista työkyvyttömyyttä (osa-aikatyökykyinen tai pitkällä sairauslomalla)',
        '3': 'Täysi työkyvyttömyys / eläkkeellä työkyvyttömyyden vuoksi',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['työ', 'työkyky', 'työssä', 'sairausloma', 'eläke'],
      defaultReasoning: (c, conf) => `Palkkatyön (d850) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  d9: {
    d920: {
      icfCode: 'd920',
      icfTitle: 'Virkistäytyminen ja vapaa-aika (harrastukset ja ulkoilu)',
      type: 'choice',
      criteria: {
        '0': 'Osallistuu harrastuksiin ja vapaa-ajan toimintaan aktiivisesti',
        '1': 'Lievää vähenemistä vapaa-ajan toiminnoissa tai sauvakävelylenkeillä',
        '2': 'Kohtalaista rajoitetta harrastustoiminnassa toimintakyvyn vuoksi',
        '3': 'Luopunut kokonaan kaikista harrastuksista ja vapaa-ajan osallistumisesta',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['vapaa-aika', 'harrastus', 'kävelylenkeillä', 'ulkoilu', 'sauvakävely'],
      defaultReasoning: (c, conf) => `Virkistäytymisen ja vapaa-ajan (d920) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  }
};
