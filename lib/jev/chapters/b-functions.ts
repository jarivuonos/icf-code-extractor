import { JevQuestionDefinition } from '../catalog';

export const B_CHAPTERS_CATALOG: Record<string, Record<string, JevQuestionDefinition>> = {
  b1: {
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
      defaultReasoning: (c, conf) => `Muistitoimintojen (b144) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    b117: {
      icfCode: 'b117',
      icfTitle: 'Älylliset toiminnot',
      type: 'choice',
      criteria: {
        '0': 'Älyllinen suoriutuminen ja ymmärrys normaalia',
        '1': 'Lievää hidastumista tai vaikeutta kognitiivisessa prosessoinnissa',
        '2': 'Kohtalainen älyllisen suorituskyvyn alenema',
        '3': 'Vaikea kognitiivinen vajaatoiminta',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['älylliset', 'kognitiiv', 'orientoitunut', 'päättely', 'mmse'],
      defaultReasoning: (c, conf) => `Älyllisten toimintojen (b117) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    b130: {
      icfCode: 'b130',
      icfTitle: 'Energisyys- ja viettitoiminnot (uupumus ja vireystila)',
      type: 'choice',
      criteria: {
        '0': 'Vireystila ja energisyys normaali',
        '1': 'Lievää väsymystä tai alentunutta vireystilaa',
        '2': 'Kohtalaista uupumusta tai aloitekyvyttömyyttä',
        '3': 'Vaikea uupumus tai apatia',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['uupum', 'väsym', 'aloitekyky', 'vireystila', 'fatiikki'],
      defaultReasoning: (c, conf) => `Energisyyden ja vireystilan (b130) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  b2: {
    b280: {
      icfCode: 'b280',
      icfTitle: 'Kipuaistimus',
      type: 'choice',
      criteria: {
        '0': 'Ei mainintaa kivusta tai kivuton',
        '1': 'Lievä kipu (VAS 1-3)',
        '2': 'Kohtalainen kipu, joka haittaa toimintaa (VAS 4-6)',
        '3': 'Vaikea tai invalidisoiva kipu (VAS 7-10)',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['kipu', 'särky', 'kipua', 'nivelrikko', 'vas '],
      defaultReasoning: (c, conf) => `Kipuaistimuksen (b280) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    b210: {
      icfCode: 'b210',
      icfTitle: 'Näkötoiminnot',
      type: 'choice',
      criteria: {
        '0': 'Näkö normaali tai korjattu laseilla',
        '1': 'Lievä näön heikentymä',
        '2': 'Kohtalainen näkövamma, joka haittaa arjessa suoriutumista',
        '3': 'Vaikea näkövamma tai sokeus',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['näkö', 'silmä', 'silmälasit', 'näkökyky', 'hämäränäkö'],
      defaultReasoning: (c, conf) => `Näkötoimintojen (b210) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    b230: {
      icfCode: 'b230',
      icfTitle: 'Kuulotoiminnot',
      type: 'choice',
      criteria: {
        '0': 'Kuulo normaali tai kojeella korjattu',
        '1': 'Lievä kuulonalenema',
        '2': 'Kohtalainen kuulonalenema, haittaa keskustelua',
        '3': 'Vaikea kuulovamma tai kuurous',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['kuulo', 'kuulokoje', 'huonokuuloinen', 'kuulonalenema'],
      defaultReasoning: (c, conf) => `Kuulotoimintojen (b230) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    b240: {
      icfCode: 'b240',
      icfTitle: 'Sensomotorinen tasapainoaistimus (huimaus)',
      type: 'choice',
      criteria: {
        '0': 'Ei huimausta',
        '1': 'Lievää satunnaista huimausta asennonmuutoksissa',
        '2': 'Kohtalaista huimausta, joka lisää kaatumisriskiä',
        '3': 'Vaikea invalidisoiva huimaus',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['huimaus', 'huimaa', 'epävarmuus', 'vestibulaari'],
      defaultReasoning: (c, conf) => `Tasapainoaistimuksen/huimauksen (b240) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  b3: {
    b320: {
      icfCode: 'b320',
      icfTitle: 'Puhetoiminnot (artikulaatio ja puheen tuottaminen)',
      type: 'choice',
      criteria: {
        '0': 'Puhe selkeää ja normaalia',
        '1': 'Lievää artikulaatiovaikeutta tai epäselvyyttä',
        '2': 'Kohtalainen puheentuoton häiriö (dysartria/afasia)',
        '3': 'Vaikea puheentuoton puuttuminen',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['puhe', 'artikulaatio', 'dysartria', 'afasia', 'puheen tuotto'],
      defaultReasoning: (c, conf) => `Puhetoimintojen (b320) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  b4: {
    b455: {
      icfCode: 'b455',
      icfTitle: 'Rasituksensietokyvyn toiminnot (fyysinen kestävyys)',
      type: 'choice',
      criteria: {
        '0': 'Fyysinen kestävyys ikätasolle hyvä',
        '1': 'Lievä rasituksensiedon alenema',
        '2': 'Kohtalainen rasituksensiedon alenema, hengästyy vähäisestä',
        '3': 'Vaikea rasituksensiedon heikkous (levossakin oireita)',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['rasituksensieto', 'kestävyys', 'hengästyy', 'väsyy', 'lepotauko'],
      defaultReasoning: (c, conf) => `Rasituksensiedon (b455) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    b440: {
      icfCode: 'b440',
      icfTitle: 'Hengitystoiminnot',
      type: 'choice',
      criteria: {
        '0': 'Hengitys normaali ja vapaa',
        '1': 'Lievää hengenahdistusta rasituksessa',
        '2': 'Kohtalaista hengenahdistusta tasamaakävelyssä',
        '3': 'Vaikeaa hengenahdistusta levossa tai happihoito käytössä',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['hengitys', 'hengenahdistus', 'dyspnea', 'keuhkoahtautuma', 'happi'],
      defaultReasoning: (c, conf) => `Hengitystoimintojen (b440) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  b5: {
    b510: {
      icfCode: 'b510',
      icfTitle: 'Nieleminen',
      type: 'choice',
      criteria: {
        '0': 'Nieleminen normaalia',
        '1': 'Lievää nielemisvaikeutta tai yskimistä syödessä',
        '2': 'Kohtalainen nielemisvaikeus (dysfagia), vaatii soseutetun ruoan',
        '3': 'Vaikea nielemishäiriö tai nenä-mahaletku/PEG',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['nieleminen', 'nielemisvaikeus', 'dysfagia', 'yskiminen syödessä'],
      defaultReasoning: (c, conf) => `Nielemistoimintojen (b510) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    b530: {
      icfCode: 'b530',
      icfTitle: 'Painonhallintatoiminnot ja ravitsemustila',
      type: 'choice',
      criteria: {
        '0': 'Ravitsemustila normaali',
        '1': 'Lievää tahatonta laihtumista tai alipainoriskiä',
        '2': 'Kohtalainen virheravitsemus tai merkittävä laihtuminen',
        '3': 'Vaikea kakeksia tai vaikea lihavuus',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['ravitsemustila', 'laihtunut', 'bmi', 'painonhallinta', 'aliravittu'],
      defaultReasoning: (c, conf) => `Ravitsemustilan (b530) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  b6: {
    b620: {
      icfCode: 'b620',
      icfTitle: 'Virtsaamistoiminnot (virtsanpidätyskyky)',
      type: 'choice',
      criteria: {
        '0': 'Virtsaaminen ja pidätyskyky normaalia',
        '1': 'Lievää ponnistus- tai pakkoinkontinenssia satunnaisesti',
        '2': 'Kohtalaista virtsankarkailua säännöllisesti (vaipat käytössä)',
        '3': 'Täydellinen inkontinenssi tai kestokatetri',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['virtsankarkailu', 'inkontinenssi', 'katetri', 'virtsaamisen', 'vaippa'],
      defaultReasoning: (c, conf) => `Virtsaamistoimintojen (b620) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  b7: {
    b730_lower: {
      icfCode: 'b730',
      icfTitle: 'Lihasvoiman toiminnot (alaraajat / vartalo)',
      type: 'choice',
      criteria: {
        '0': 'Lihasvoima normaali tai ikätasoa parempi',
        '1': 'Lievä lihasvoiman alenema',
        '2': 'Kohtalainen lihasvoiman alenema (tuoliltanousu heikentynyt / kuntoluokka 1-2)',
        '3': 'Vaikea lihasvoiman heikkous',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['tuoliltanousu', 'alaraajojen lihasvoima', 'lihasvoim', 'kuntoluokka', 'istumaannousu'],
      defaultReasoning: (c, conf) => `Alaraajojen lihasvoiman (b730) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
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
      defaultReasoning: (c, conf) => `Puristusvoiman (b730) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    b710: {
      icfCode: 'b710',
      icfTitle: 'Nivelten liikkuvuustoiminnot (liikerajoitukset)',
      type: 'choice',
      criteria: {
        '0': 'Nivelten liikelaajuudet normaalit',
        '1': 'Lievää liikerajoitusta yhdessä tai useammassa nivelessä',
        '2': 'Kohtalainen liikerajoitus, joka haittaa toimintaa',
        '3': 'Vaikea niveljäykkyys tai ankyloosi',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['liikelaajuus', 'liikerajoitus', 'rom', 'fleksio', 'ekstensio', 'jäykkyys'],
      defaultReasoning: (c, conf) => `Nivelten liikkuvuuden (b710) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    b755: {
      icfCode: 'b755',
      icfTitle: 'Tahdonalaiset liiketoiminnot (asennonhallinta ja tasapaino)',
      type: 'choice',
      criteria: {
        '0': 'Tasapainon hallinta täysin normaali',
        '1': 'Lievä tasapainon epävarmuus (Berg > 50, ei merkittävää kaatumisriskiä)',
        '2': 'Kohtalainen tasapainon hallinnan vaikeus (kaatumisia kotona, DGI < 19, SPPB 7-9)',
        '3': 'Vaikea tasapainohäiriö, toistuvia kaatumisia tai jatkuva tuki tarpeen',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['tasapaino', 'berg', 'dgi', 'kaatumis', 'horjahtele', 'tandem', 'abc-asteikko'],
      defaultReasoning: (c, conf) => `Asennonhallinnan ja tasapainon (b755) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    },
    b770: {
      icfCode: 'b770',
      icfTitle: 'Kävelymallin toiminnot (ontuminen tai poikkeava askellus)',
      type: 'choice',
      criteria: {
        '0': 'Kävelymalli normaali ja symmetrinen',
        '1': 'Lievää epäsymmetriaa tai lievää ontumista',
        '2': 'Kohtalainen poikkeavuus (leveäraiteinen, laahaava tai selvästi ontuva kävely)',
        '3': 'Vaikea ataktinen tai spastinen kävelymalli',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['kävelymalli', 'ontuminen', 'leveäraiteinen', 'laahaava', 'askell'],
      defaultReasoning: (c, conf) => `Kävelymallin (b770) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  },

  b8: {
    b810: {
      icfCode: 'b810',
      icfTitle: 'Ihon suojaavat toiminnot (ihon eheys ja haavat)',
      type: 'choice',
      criteria: {
        '0': 'Iho ehjä ja terve',
        '1': 'Lievää punoitusta, hankaumaa tai pintanaarmuja',
        '2': 'Kohtalainen ihovaurio tai säärihaava/painehaava aste 1-2',
        '3': 'Vaikea krooninen haava tai syvä painehaava',
        'not_mentioned': 'Ei mainintaa tekstissä'
      },
      keywords: ['iho', 'haava', 'painehaava', 'säärihaava', 'ihon eheys'],
      defaultReasoning: (c, conf) => `Ihon suojaavien toimintojen (b810) tarkenne on ${c} (varmuus ${Math.round(conf * 100)} %).`
    }
  }
};
