export const ICF_SYSTEM_PROMPT = `
Olet erikoistunut terveydenhuollon ja fysioterapian asiantuntija, joka analysoi suomenkielistä toimintakykytekstiä ja uuttaa siitä THL:n (Terveyden ja hyvinvoinnin laitos) virallisen ICF-koodiston (tunniste: 1.2.246.537.6.48, THL – ICF Toimintakykykäsitteiden luokitus) mukaisia koodeja ja tarkenteita.

LUOKITTELUN ALUEET (neljä osa-aluetta):
- b – Ruumiin/kehon toiminnot (esim. b144 muistitoiminnot, b730 lihasvoima, b755 tahdonalaiset liiketoiminnot, b760 tahdonalaisten liikkeiden hallinta)
- s – Ruumiin rakenteet (esim. s750 alaraajan rakenne; käytä vain kun tekstissä viitataan selkeästi anatomiseen rakenteeseen tai vaurioon)
- d – Suoritukset ja osallistuminen (esim. d410 asennon vaihtaminen, d415 asennon ylläpitäminen, d450 käveleminen, d455 liikkuminen paikasta toiseen, d510 peseytyminen, d520 kehon osien hoitaminen, d530 WC-toiminnot, d540 pukeutuminen, d550 syöminen, d620 tavaroiden ja palveluiden hankkiminen, d630 aterioiden valmistaminen, d640 kotitaloustöiden tekeminen, d660 muiden henkilöiden avustaminen, d760 perhesuhteet, d920 virkistäytyminen ja vapaa-aika)
- e – Ympäristötekijät (esim. e1151 henkilökohtaisessa käytössä olevat liikkumisen apuvälineet, e310 lähiperhe, e355 terveydenhuollon ammattihenkilöt)

HIERARKIATASO:
- Käytä ensisijaisesti tason 2 koodeja (4-merkkiset, esim. b144, d450). Tämä on THL:n ja Suomen Fysioterapeuttien suositus rakenteisessa kirjaamisessa.
- Käytä tason 3 tai 4 koodeja (esim. b7300, d4500) vain jos teksti viittaa erittäin spesifiseen toimintaan ja ero ylätason koodiin on klinisesti merkittävä.

TARKENNEASTEIKKO (0–4) – b-, s- ja d-osa-alueet:
- 0: Ei ongelmaa (0–4 % haitta) – suoriutuu normaalisti, testitulos normaalialueella
- 1: Lievä ongelma (5–24 % haitta) – vähäisiä vaikeuksia, FSQfin > 80, SPPB 10–12, Berg ≥ 45
- 2: Kohtalainen ongelma (25–49 % haitta) – jonkin verran vaikeuksia tai tuen tarvetta, FSQfin 50–79, SPPB 7–9, Berg 41–44, DGI 19–23
- 3: Vaikea ongelma (50–95 % haitta) – huomattavia vaikeuksia, avustajan tarve, SPPB ≤ 6, Berg < 41, DGI < 19
- 4: Täydellinen ongelma (96–100 % haitta) – ei kykene lainkaan

TARKENNE e-osa-ALUEELLE (ympäristötekijät):
- Positiivinen tarkenne (+1 … +4): ympäristötekijä toimii EDISTÄJÄNÄ (esim. apuväline parantaa liikkumista → e1151+2)
- Negatiivinen tarkenne (1 … 4): ympäristötekijä toimii ESTEENÄ (esim. puuttuvat tukikaiteet → e1501.2)
- Jos tekstissä mainitaan apuvälineen tai tuen käyttö ilman negatiivista kuvausta, käytä positiivista tarkenteen arvoa.
- qualifier-kentässä: edistäjä merkitään positiivisena lukuna (esim. 2), este negatiivisena (esim. -2). Tallenna absoluuttinen arvo (0–4) ja merkitse reasoning-kenttään onko kyseessä edistäjä vai este.

TESTIMAPPAUKSET – kuinka testipistemäärät muutetaan tarkenteiksiksi:
- FSQfin kokonaisindeksi: ≥ 90 → tarkenne 0–1; 67–89 → 1; 50–66 → 2; < 50 → 3
- SPPB (0–12): 10–12 → 0–1; 7–9 → 2; 4–6 → 3; 0–3 → 4
- Berg Balance Scale (0–56): ≥ 45 → 1; 41–44 → 2; < 41 → 3 (kaatumisriski merkittävä alle 45)
- DGI (0–24): 22–24 → 0–1; 19–21 → 1; 12–18 → 2; < 12 → 3 (kohonnut kaatumisriski alle 19)
- 10m kävelynopeus: ≥ 1,0 m/s → 1 (ikääntyneet normaalialue); 0,6–0,99 → 2; < 0,6 → 3
- Viiden toiston tuoliltanousu: kuntoluokka 4–5 → 1; kuntoluokka 2–3 → 2; kuntoluokka 1 (heikoin) → 3
- ABC-asteikko (tasapainon varmuus): ≥ 80 % → 1; 50–79 % → 2; < 50 % → 3

SANATARKKA EVIDENSSI:
- Jokaiselle löydökselle tulee ilmoittaa evidenceText, joka on täsmällinen lainaus alkuperäisestä syötetekstistä.
- Jos evidenssi perustuu testipistemäärään, lainaa myös pistemäärä (esim. "Kokonaispisteet: 8/12").

HALLUSINAATION ESTO:
- Älä keksi koodeja, joita ei ole tekstissä tuotu ilmi.
- Jos teksti mainitsee "yleensä ilman vaikeuksia", käytä tarkennetta 0 tai 1, ei korkeampaa.
- Älä toista samaa ICF-koodia useampaan kertaan – yhdistä löydökset yhteen merkintään, jos ne viittaavat samaan toimintoon.
- Muistivaikeudet → b144 (muistitoiminnot); yleinen kognitio → b117 (älylliset toiminnot).
`.trim();

/** Sample Finnish physiotherapy text for the UI "load sample" button */
export const SAMPLE_INPUT_TEXT = `Toimintakyky

Potilas kertoo oireistaan ja toimintakyvystään vastaanotolla:

Potilas keskustelee oirekuvastaan vastaanotolla asianmukaisesti ja orientoituneesti. Kokee, että muistivaikeus suurin haaste arjessa.

Liikkumisessaan ja tasapainon hallinnassaan vaikeuksia, joitakin kaatumisia kotona. Ulkona liikkuessa ei kaatumisia.
Kävelyyn joutuu keskittymään.

Sauvakävelysauvat käytössä tukena kävelylenkeillä. Arkitoimintojen yhteydessä ei käytä sauvoja tukena.


Kartoitettu potilaan oirekuvaa, suoriutumista ja osallistumista arjessa FSQfin-kyselyä apuna käyttäen, jossa FSQfin-kokonaisindeksi: 87,2 /100. Tuloksen mukaan 67-99 = tutkittava on pääsääntöisesti itsenäinen, mutta hänellä on subjektiivisia vaikeuksia yhdessä tai useammassa itsestä huolehtimisen, liikkumisen tai kotielämän tilanteessa.

Osa-alueiden pisteet jakautuivat seuraavasti:

Itsestä huolehtimisen toiminnot Kohtien 1-5 FSQ-indeksi : 86,6 /100

1. Syöminen: yleensä ilman vaikeuksia
2. Pukeutuminen ja riisuuntuminen: jonkin verran vaikeuksia (seinään nojaten)
3. WC-toiminnot: yleensä ilman vaikeuksia
4. Henkilökohtaisen hygienian hoitaminen ( hiukset, parta ym.): yleensä ilman vaikeuksia
5. Peseytyminen suihkussa tai saunassa: jonkin verran vaikeuksia (leveäraiteisesti seisten)

Liikkuminen Kohtien 6-10 FSQ-indeksi : 83,3 /100

6. Kävely kotona huoneesta toiseen: jonkin verran vaikeuksia (joitakin kompasteluja, kaatumisia)
7. Portaissa kulkeminen: jonkin verran vaikeuksia
8. ½ km:n kävely ulkona ilman lepotaukoja: yleensä ilman vaikeuksia
9. Omalla autolla ajaminen: ei tee muun syyn takia
10. Julkisilla kulkuneuvoilla kulkeminen: yleensä ilman vaikeuksia

Kotielämän toiminnot Kohtien 11-15 FSQ-indeksi : 91,6 /100

11. Kauppa-asioiden hoitaminen: yleensä ilman vaikeuksia (ruokailee palvelutalossa, lämmittelee valmiita ruokia)
12. Ruoanlaittaminen: yleensä ilman vaikeuksia (4)
13. Pyykinpeseminen: yleensä ilman vaikeuksia
14. Siivoaminen: jonkin verran vaikeuksia (ei pidä siivoamisesta, 2-3 viikon välein siivoaa.)
15. Pihatyöt: ei tee muun syyn takia

Toiminnallisen tasapainon varmuus (ABC-asteikko-kysely)

Koettu tasapainon varmuus arkisissa toiminnoissa on 80 %

ABC-asteikko sisältää 16 kysymystä, jotka antavat tietoa henkilön koetusta tasapainon varmuudesta arkisissa toiminnoissa. Mitä pienempi kokonaisprosentti, sitä voimakkaampi koettu tasapainon epävarmuus on.

Suurimpana haasteena potilas kokee tuolille nousemisen/kurkottaminen ja jäisellä jalkakäytävällä kävelemisen.

Potilaan toimintakykyä arvioitu vastaanotolla havainnoiden ja standardoiduin toimintakykytestein

Lyhyt fyysisen suorituskyvyn testistö (SPPB)

Tasapaino: pysyy 10 sekuntia [1]/1, puolitandem: pysyy 10 sekuntia [1]/1 tandem: pysyy 3.00-9.99 sekuntia [1]/2.
Tavanomainen kävelynopeus: alle 4.82 sekuntia [4]/4.
Ylösnousu tuolista: yli 16.7 sekuntia [1]/4.
Kokonaispisteet: 8/12.

SPPB tulos aiempi: 10, nykyinen: 8.

SPPB:n summapistemäärän ollessa alle 10, henkilön alaraajojen suorituskyky on jo alkanut heikentyä ja siihen on syytä kiinnittää huomiota. Pisteiden ollessa 7–9 henkilön liikkumiskyvyn huonontumisen riski on lähes kaksinkertainen seuraavan neljän vuoden aikana verrattuna niihin henkilöihin, joilla SPPB:n summapistemäärä on 10–12.

Potilaan tasapainohallinnan arvioinnissa käytetty Bergin tasapainotestiä. Testissä kokonaistulos on 51/56p. Tuloksen mukaan potilaan tasapainonhallinta on hyvä ja itsenäinen. Kaatumisriski on kohonnut kun tulos on <45p.

Pisteet jakautuivat seuraavasti:

13. Seisominen jalat peräkkäin ilman tukea: pystyy ottamaan pienen askelen itsenäisesti ja pitämään 30 sekuntia [2]/4
14. Yhdellä jalalla seisominen: yrittää nostaa jalan, ei pysy 3 sekuntia, mutta pysyy seisomassa itsenäisesti [1]/4

Potilaan dynaamista tasapainon hallintaa kävellessä on arvioitu Dynamic Gait Indexin (DGI) avulla, josta potilas saa Kokonaispisteet 16/24. Kaatumisriski on suurentunut pistemäärän ollessa alle 19/24. Pisteet jakautuivat seuraavasti:

1. Kävely tasaisella Vähäisiä vaikeuksia [2]/3 (keskityttävä,tasapainovaikeutta)
2. Kävelynopeuden muutos Vähäisiä vaikeuksia [2]/3 (keskityttävä,tasapainovaikeutta)
3. Pään kääntäminen vaakatasossa kävelyn aikana Kohtalaisia vaikeuksia [1]/3 (ei pysty pitämään katsetta pois kulkusuunnasta)
4. Pään kääntäminen ylös-alas kävelyn aikana Vähäisiä vaikeuksia [2]/3 (ylös katsoessa epävarmuutta)
5. Kävely ja käännös Normaali [3]/3
6. Esineen yli astuminen Vähäisiä vaikeuksia [2]/3 (keskityttävä, soviteltava askeleita)
6. Esineen ohittaminen Vähäisiä vaikeuksia [2]/3 (vauhti hidasta, keskityttävä)
7. Portaat Vähäisiä vaikeuksia [2]/3 (kaidetuen kanssa vuorotahtisesti)

Potilas kävelee vastaanotolla hieman leveäraiteisesti. Kävellessä katse kohdistettuna alustaan ja pään kääntäminen pois alustasta ja kulkusuunnasta tekee kävelystä horjahtelevaa ja epävarmaa.

Portaissa kävellessä kaidetuen tarve. Ylöspäin mennessä uskaltaa kokeilla ilman tukea kävelemistä, jolloin leventää askelleveyttä huomattavasti lantion leveyttä levyemmäksi.

10 metrin kävelynopeus itse valitulla nopeudella on 1,06 m/s, (kohtalainen (1,01-1,3 m/s)) ja maksimaalisella nopeudella 1,5 m/s, (kohtalaisen nopea (1,31-1,6 m/s)). 65-80-vuotiaiden keskimääräinen kävelynopeus on 0,80-1,52m/s.

Alaraajojen lihasvoimaa ja suorituskykyä arvioitu viiden toiston tuoliltanousutestillä

Potilas suoriutuu ajassa 22 s. Tulos on Ikäryhmässä 80+ kuntoluokka on 1 (17.9 tai yli), selvästi keskimääräistä heikompi tulos.

(viitearvot perustuvat FinTerveys 2017 -tutkimuksen aikuisväestöä edustavalle otokselle tehtyihin mittauksiin).

Tuolilta ylösnousussa keskivartalon hallinnassa heikkoutta ja potilas kokee suorituksen raskaaksi.

Selinmakuulla lantion nosto onnistuu sujuvasti ja ei koe suoritusta raskaana. Pään nosto alustasta kevyesti. Ylösnousu selinmakuulta istumaan onnistuu vatsalihasvoimilla.

Käsien voimat ikätasoisesti hyvät.

Puristusvoima Saehan puristusvoimamittarilla
Potilas on oikeakätinen.

Oikean käden puristusvoima (kg): 22 kg. Ikäluokassa Ikäryhmässä 80+ kuntoluokka on 4 (22-23kg), tulos jonkin verran keskimääräistä parempi.

Vasemman käden puristusvoima (kg): 22 kg. Ikäluokassa Ikäryhmässä 80+ kuntoluokka on 4 (22-23kg), tulos jonkin verran keskimääräistä parempi.

(viitearvot perustuvat FinTerveys 2017 -tutkimuksen aikuisväestöä edustavalle otokselle tehtyihin mittauksiin).

Yhteenveto: Arkisuoriutumisessa muistivaikeudet merkittävin potilaan kokema toimintakykyä heikentävä oire. Tasapainon epävarmuus kävellessä tekee kävelystä leveäraiteista ja horjahdusaltista. Katseen suuntaaminen alustasta horjuttaa tasapainoa. Kapealla tukipinnalla vaikeutta hallita asentoa. Motorinen nopeus alaraajojen voimakestävyystestissä jää heikoksi ja suorituksen potilas kokee raskaana. Arjessa itsenäinen ja apuvälineitä liikkumisen varmistamiseksi arjessa ei käytössä.`;
