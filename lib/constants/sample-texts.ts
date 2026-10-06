import { SAMPLE_INPUT_TEXT as ORIGINAL_SAMPLE } from './icf-rules';

export interface SampleCase {
  id: string;
  title: string;
  shortTitle: string;
  targetChapters: string[];
  description: string;
  text: string;
}

export const SAMPLE_CASES: SampleCase[] = [
  {
    id: 'case-1',
    title: '1. Geriatrinen fysioterapia & tasapaino (Alkuperäinen)',
    shortTitle: '1. Geriatria & tasapaino',
    targetChapters: ['b1', 'b7', 'd3', 'd4', 'd5', 'd6', 'e1', 'e2', 'e5'],
    description: 'Ikääntyneen toimintakyky, FSQfin, SPPB 8/12, Berg 51/56, DGI 16/24, sauvakävely ja palvelutaloasuminen.',
    text: ORIGINAL_SAMPLE
  },
  {
    id: 'case-2',
    title: '2. Aivoverenkiertohäiriö (AVH) & Oikeanpuoleinen hemipareesi',
    shortTitle: '2. AVH & hemipareesi',
    targetChapters: ['s1', 'b1', 'b3', 'b7', 'd3', 'd4', 'd5', 'e1', 'e3'],
    description: 'Sairastettu vasemman aivopuoliskon infarkti, motorinen afasia, oikean ylä- ja alaraajan spastinen pareesi, pyörätuolisiirrot ja puolison tuki.',
    text: `Toimintakyky ja kuntoutustarve

Diagnoosi: I63.4 Vasemman aivopuoliskon aivoinfarkti, oikeanpuoleinen hemipareesi ja motorinen afasia (sairastettu 4 kk sitten).

Nykytila ja oirekuva:
Potilas kommunikoi ilmein ja elein, puheen tuottamisessa huomattavaa vaikeutta (b320), ymmärtää yksinkertaiset puheohjeet hyvin (d310). Kognitiivinen toiminnanohjaus hidastunut, mutta orientoitunut aikaan ja paikkaan.

Kehon toiminnot ja rakenteet:
Aivojen magneettikuvauksessa todettu laaja vasemman aivopuoliskon kortikaalinen ja subkortikaalinen vaurio (s110). Oikeassa yläraajassa spastinen pareesi (b735), aktiivinen sormien ojennus ja tarttumaote puuttuvat kokonaan, olkanivelen subluksaatioriski. Oikeassa alaraajassa ojentajapainotteinen spastisuus ja lihasheikkous (b730, MRC 2-3/5). Istumatasapaino hyvä, mutta seisomatasapainossa voimakas vartalon huojunta ja painon varaaminen vasemmalle terveelle puolelle (b755).

Suoritukset ja osallistuminen:
- Siirtymiset (d420): Siirtyminen vuoteesta pyörätuoliin onnistuu siirtolankun avulla toisen henkilön valvonnassa ja kevyesti avustamana.
- Käveleminen (d450): Kävelee enintään 10 metriä matalavartisen nilkkanivelortoosin (AFO) ja neliapilan/korkean kävelypöydän tuella fysioterapeutin avustamana (tarkenne 3). Itsenäinen kävely ei onnistu.
- Pyörätuolin kelaaminen (d465): Kelaa manuaalipyörätuolia yhdellä kädellä ja jalalla sisätiloissa lyhyitä matkoja.
- Pukeutuminen (d540): Ylävartalon pukeutuminen onnistuu osittain vasemmalla kädellä, alavartalon ja kenkien pukemisessa täysin avustettava.
- Peseytyminen (d510): Suihkutuolilla peseytyminen vaatii toisen henkilön avustusta selän ja oikean puolen pesussa.

Ympäristötekijät:
Puoliso toimii omaishoitajana kotona ja avustaa päivittäisissä toimissa ympärivuorokautisesti (e310). Asunnossa tehty kynnysten poisto ja asennettu suihkutuoli sekä tukikaiteet wc-tiloihin (e150). Liikkumisen apuvälineinä käytössä mittatilaustyönä sovitettu pyörätuoli ja nilkkaortoosi (e115). Fysioterapeutin kotikäynnit 2x viikossa (e355).`
  },
  {
    id: 'case-3',
    title: '3. Keuhkoahtautumatauti (COPD) & Sydämen vajaatoiminta',
    shortTitle: '3. COPD & rasituksensieto',
    targetChapters: ['s4', 'b4', 'b1', 'd4', 'd6', 'e1', 'e2', 'e5'],
    description: 'Vaikea-asteinen keuhkoahtautumatauti, rasitushengenahdistus, väsymys, liikkumisen lepotauot ja pakkassään vaikutus.',
    text: `Toimintakyky ja hengityskuntoutus

Potilas 74-vuotias mies, jolla sairauksina vaikea keuhkoahtautumatauti (COPD, GOLD 3) ja krooninen sydämen vajaatoiminta (NYHA III).

Oirekuva ja koettu toimintakyky:
Suurimpana toimintakykyhaasteena on voimakas hengenahdistus (dyspnea) vähäisessäkin fyysisessä rasituksessa sekä jatkuva uupumus (b130, b440). Tasamaalla kävellessä joutuu pysähtymään noin 50-70 metrin välein huohottamaan ja tasaamaan hengitystään.

Tutkimuslöydökset ja suorituskyky:
- Sydän- ja hengitysjärjestelmän rakenteet (s430): Keuhkokuuntelussa pidentynyt uloshengitys ja vinkunoita molemmin puolin. Keuhkojen toimintakokeessa FEV1 42 % viitearvosta.
- Rasituksensieto (b455): 6 minuutin kävelytesti (6MWT) tulos 210 metriä, SpO2 laskee rasituksessa 94 % tasolta 86 % tasolle ilman lisähappea, leposyke 88/min, rasituksessa nousee 125/min.
- Lihasvoima (b730): Alaraajojen voimat heikentyneet inaktiivisuuden ja kortisonilääkityksen myötä. Tuoliltanousutesti 5 krt kestää 24,5 s (heikko tulos).

Arjen suoriutuminen:
- Käveleminen (d450): Kävelee sisällä hitaasti, ulkona liikkuminen rajoittunut vain lähikauppaan rollaattorin kanssa lepotaukoja pitäen.
- Portaissa kulkeminen (d455): Yhdenkin kerrosvälin nouseminen aiheuttaa voimakkaan hengenahdistuksen, tarvitsee hengähdystauon puolivälissä.
- Kotityöt (d640): Raskaammat kotityöt kuten imurointi, lattioiden pesu ja vuodevaatteiden vaihto eivät onnistu hengenahdistuksen vuoksi. Lämpimän aterian lämmitys mikroaaltouunissa onnistuu.
- Peseytyminen (d510): Suihkussa käynti rasittaa voimakkaasti; istuu peseytyessään suihkujakkaralla.

Ympäristö- ja apuvälinetekijät:
Kannettava lisähappilaite ja happirikastin käytössä rasituksessa ja öisin (e110). Käytössä ulkorollaattori istuimella, mikä mahdollistaa lepotauot kävelyn aikana (e115). Talvipakkaset ja kostea viileä ilma (e225) laukaisevat voimakkaan bronkospasmin, minkä vuoksi ei kykene ulkoilemaan talvisin. Kunnan kotihoito käy kerran viikossa siivoamassa ja tuomassa kauppakassin (e575).`
  },
  {
    id: 'case-4',
    title: '4. Muistisairaus (Alzheimerin tauti) & Arjen toiminnanohjaus',
    shortTitle: '4. Muistisairaus & toiminnanohjaus',
    targetChapters: ['b1', 'd1', 'd2', 'd5', 'd6', 'e1', 'e3', 'e5'],
    description: 'Keskivaikea Alzheimerin tauti, MMSE 17/30, eksymistaipumus, lääkehoidon ja monivaiheisten rutiinien vaikeutuminen, omaisen ja kotihoidon tuki.',
    text: `Toimintakyky ja geriatrinen arviointi

81-vuotias nainen, jolla diagnosoitu keskivaikea Alzheimerin tauti. Asuu yksin kerrostalohuoneistossa.

Mentaaliset toiminnot ja kognitio:
- Muistitoiminnot (b144): Lyhytkestoinen muisti huomattavasti heikentynyt. Unohtaa sovittuja asioita, saman asian toistuvaa kyselyä päivän aikana. Ei muista syöneensä aamupalaa tai ottaneensa lääkkeitä.
- Orientaatio (b114): Aikaorientaatio heikko (ei muista viikonpäivää eikä kuukautta), paikkaorientaatio heikentynyt vieraassa ympäristössä, omaan kotiin orientoitunut.
- Toiminnanohjaus (b164): Monivaiheisten tehtävien suunnittelu ja loppuunsaattaminen pirstaleista. MMSE-kokonaispistemäärä 17/30.

Suoritukset ja arjen toiminnot:
- Päivittäisten rutiinien suorittaminen (d230): Tarvitsee säännöllistä ulkopuolista muistutusta ja strukturoitua päivärytmiä.
- Omasta terveydestä huolehtiminen / Lääkkeiden ottaminen (d570): Ei kykene itsenäisesti huolehtimaan monilääkityksestään, annosteluvirheitä ja lääkkeiden ottamattomuutta ilmennyt.
- Aterioiden valmistaminen (d630): Liedellä kattiloiden pohjaanpalamisia, minkä vuoksi lieden turva-ajastin asennettu. Ruoanlaittaminen ei enää turvallista ilman valvontaa. Lounas toimitetaan valmiina ateriapalvelusta.
- Tavaroiden hankkiminen ja talous (d620, d860): Ei kykene hoitamaan pankki- ja raha-asioita itsenäisesti. Kaupassakäynti vaatii saattajan eksymisriskin vuoksi.
- Liikkuminen lähiympäristössä (d450): Fyysinen kävelykyky sinänsä säilynyt hyvänä ilman apuvälineitä, mutta ulkona eksynyt kaksi kertaa lähikortteliin (d455).

Ympäristötekijät:
Turvateknologiana asennettu ovihälytin ja GPS-turvakello eksymisen varalta sekä lieden turvakatkaisin (e115, e150). Tytär hoitaa talousasiat ja lääkkeiden dosetoinnin viikoittain (e310). Kunnan kotihoito käy kolmesti päivässä valvomassa ruokailut ja lääkkeenoton (e575). Päivätoimintakeskuksessa kahdesti viikossa virkistystoiminnassa (d920, e575).`
  },
  {
    id: 'case-5',
    title: '5. Lonkan nivelrikko & Tekonivelleikkauksen jälkitila',
    shortTitle: '5. Lonkkaproteesi & nivelrikko',
    targetChapters: ['s7', 'b2', 'b7', 'd4', 'd5', 'd6', 'e1', 'e5'],
    description: 'Oikean lonkan primaari sementitön tekonivelleikkaus, haavakipu, lonkan liikerajoitus, kyynärsauvakävely ja apuvälineet.',
    text: `Fysioterapian loppuarvio / kotiutumisvaihe

Potilas 68-vuotias nainen, jolle tehty oikean lonkan sementitön kokotekonivelleikkaus (artroplastia) 5 vuorokautta sitten vaikean nivelrikon vuoksi.

Ruumiin toiminnot ja rakenteet:
- Alaraajan rakenne (s750): Oikeassa lonkassa tuore leikkaushaava lateraalisesti, haavasidos kuiva ja siisti, ei infektion merkkejä. Röntgenkuvassa proteesiosat oikeassa asennossa.
- Kipu (b280): Leikkausalueen haavakipu levossa lievää (NRS 2/10), liikkeelle lähtiessä ja koukistaessa kohtalaista (NRS 5/10), lievittyy kipulääkityksellä.
- Liikkuvuus (b710): Oikean lonkan passiivinen fleksio 80 astetta (fleksiorajoitus 90 astetta proteesiluxaatioriskin vuoksi voimassa 6 vko), abduktio 25 astetta.
- Lihasvoima (b730): Oikean lonkan loitontajat ja ojentajat heikentyneet leikkauksen jäljiltä (MRC 3/5), vasen alaraaja hyvävoimainen.

Suoritukset ja osallistuminen:
- Asennon vaihtaminen (d410): Vuoteesta nousu istumaan ja seisomaan onnistuu itsenäisesti leikatun raajan varorajoitukset huomioiden. Istuessa käyttää istuinkoroketta.
- Käveleminen (d450): Kävelee kahdella kyynärsauvalla vuorotahtisesti itsenäisesti osapainovarauksella (täysipainovaraus sallittu kivun sallimissa rajoissa). Kävelymatka osastolla 150 metriä kerrallaan.
- Portaissa kulkeminen (d455): Portaissa kulkeminen harjoiteltu itsenäiseksi kyynärsauvojen ja kaiteen avulla "terve jalka taivaaseen, sairas jalka helvettiin" -tekniikalla.
- Pukeutuminen (d540): Alavartalon pukeutuminen, housujen ja sukkien laitto ei onnistu itsenäisesti lonkan 90 asteen koukistuskiellon takia ilman apuvälineitä (sukanvetolaite ja pitkävartinen kenkälusikka).

Ympäristötekijät ja apuvälineet:
Kotiutuu omaan kotiin. Käytössä kaksi kyynärsauvaa (e115), wc-istuimen korottaja ja tarttumapihdit tavaroiden nostamiseen lattialta (e115, e150). Asunnon suihkutiloihin toimitettu tukeva suihkutuoli. Jatkaa kotiharjoittelua fysioterapeutin antaman kirjallisen liikeohjelman mukaisesti (e355).`
  },
  {
    id: 'case-6',
    title: '6. Krooninen alaselkäkipu, Lannerangan ahtauma & Työkyky',
    shortTitle: '6. Selkäkipu & työkyky',
    targetChapters: ['s7', 'b2', 'b7', 'b1', 'd4', 'd8', 'd9', 'e1'],
    description: 'L4/L5 spinaalistenoosi, iskiasoire, pitkittyneen kivun vaikutus istumiseen, nostamiseen, työssä jaksamiseen ja harrastuksiin.',
    text: `Toimintakyky- ja työkykyarvio

52-vuotias varastotyöntekijä, jolla yli vuoden kestänyt invalidisoiva alaselkäkipu ja vasempaan jalkaan heijastuva säteilykipu (krooninen lumbago ja iskias).

Löydökset ja kehon toiminnot:
- Selkärangan rakenne (s760): Magneettikuvassa (MRI) todettu L4/L5-tasolla lannerangan selkäydinkanavan ahtauma (spinaalistenoosi) ja vasemmanpuoleinen L5-hermojuuren kompressio.
- Kipuaistimus (b280): Jatkuva jomottava alaselkäkipu (NRS 4/10), joka pahenee kumartuessa ja kuormituksessa (NRS 7-8/10). Vasemmassa sääressä ja jalkaterässä puutumista ja pistelyä (L5-dermatoomi).
- Hermo-lihas- ja liikkumistoiminnot (b730, b710): Lannerangan etutaivutus voimakkaasti rajoittunut (sormi-lattiaetäisyys 35 cm). Vasemman isovarpaan ojennusvoima alentunut (MRC 4/5).
- Mentaaliset toiminnot ja uni (b130, b152): Jatkuva kipu heikentää yöunta, herää useita kertoja yössä asennonvaihtoon. Kivun pitkittyminen aiheuttanut masentuneisuutta ja kuormittuneisuutta.

Suoritukset, työ ja osallistuminen:
- Asennon ylläpitäminen (d415): Yhtäjaksoinen istuminen rajoittunut alle 30 minuuttiin, jonka jälkeen joutuu nousemaan ylös jomotuksen vuoksi. Paikallaan seisominen provosoi jalkaoiretta.
- Nostaminen ja kantaminen (d430): Ei kykene nostamaan maasta yli 5 kg painoisia taakkoja selän kramppaamisen vuoksi.
- Palkkatyö ja työssä suoriutuminen (d850): Nykyisessä fyysisessä varastotyössä (tavaroiden siirto, trukilla ajo, nostot) työkyky täysin alentunut. Ollut sairauslomalla 4 kuukautta. Kuntoutussuunnitelmassa tavoitteena ammatillinen uudelleenkoulutus kevyempään työhön.
- Vapaa-aika ja harrastukset (d920): Joutunut luopumaan aiemmasta kuntosaliharrastuksesta ja lentopallosta, korvaavana harrastuksena kävely ja vesijuoksu.

Ympäristötekijät:
Ergonomisina tukina käytössä lantiotukivyö autoa ajaessa (e115) ja säädettävä sähköpöytä kotona. Työterveyshuollon moniammatillinen kuntoutustiimi ja työterveyslääkäri tukevat ammatillisen kuntoutuksen suunnittelua (e355, e575).`
  },
  {
    id: 'case-7',
    title: '7. Diabeettinen jalkahaava & Perifeerinen neuropatia',
    shortTitle: '7. Diabeettinen haava & iho',
    targetChapters: ['s8', 'b8', 'b5', 'b2', 'd4', 'd5', 'e1', 'e3'],
    description: 'Tyypin 2 diabetes, oikean päkiän diabeettinen neuropatiahaava (Wagner 2), kevennysjalkine, kävelyn kevennys ja haavanhoito.',
    text: `Toimintakyky ja jalkaterapeuttinen arviointi

66-vuotias mies, jolla pitkäaikainen huonossa hoitotasapainossa oleva tyypin 2 diabetes (HbA1c 78 mmol/mol) ja verenpainetauti.

Kehon toiminnot ja rakenteet:
- Aineenvaihduntatoiminnot (b530): Huomattava insuliiniresistenssi ja metabolinen oireyhtymä.
- Ihon rakenne ja eheys (s810, b810): Oikean jalkaterän 1. metatarsaaliluun alapuolella (päkiässä) krooninen diabeettinen neuropatiahaava, koko 2,0 x 1,5 cm, syvyys 4 mm (Wagner 2). Haavapohjassa siistiä granulaatiokudosta, ei luukontaktia.
- Tuntoaistimus (b280, b270): Molemmissa jalkaterissä sukkamainen suojatunnon puutos monofilamenttitestissä diabeettisen sensorisen polyneuropatian vuoksi. Haava-alue täysin kivuton (kivuntunteen puute estää potilasta varomasta jalkaa luontaisesti).
- Verenkiertotoiminnot (b415): Jalkaterän pulssit heikosti palpoitavissa, varpaiden iho kuiva ja atrofisen ohut.

Suoritukset ja arjen toiminnot:
- Käveleminen (d450): Kävelemistä jouduttu rajoittamaan merkittävästi haavan paranemisen mahdollistamiseksi. Kävelee lyhyitä siirtymiä asunnossa käyttäen kevennyskenkää.
- Itsestä huolehtiminen / Jalkahygienia (d520): Ei näe eikä kykene leikkaamaan varpaankynsiään itsenäisesti jäykkyyden ja huonon näön vuoksi. Haavan kastelu kielletty suihkussa, suihkussa käytettävä suojapussia.
- Kodinhoito ja asiointi (d620, d640): Raskaampi kaupassakäynti ja siivous kielletty haavan kuormittumisen estämiseksi.

Ympäristötekijät ja apuvälineet:
Käytössä mittatilaustyönä tehty päkiää keventävä terapeuttinen kevennysjalkine (e115) ja kyynärsauva tukena kuormituksen vähentämiseksi. Vaimo avustaa päivittäisissä jalkojen rasvaustoimissa ja suihkussa käynnissä (e310). Haavahoitajan vastaanottokäynnit ja jalkaterapeutin konsultaatiot terveyskeskuksessa kerran viikossa haavanhoidon toteuttamiseksi (e355, e575).`
  },
  {
    id: 'case-8',
    title: '8. Parkinsonin tauti & Nielemis- ja Puhetoiminnot',
    shortTitle: '8. Parkinson & nieleminen',
    targetChapters: ['b7', 'b5', 'b3', 'd3', 'd4', 'd5', 'e1', 'e3'],
    description: 'Etenevä Parkinsonin tauti (Hoehn & Yahr 3), lepovapina, jähmettyminen (freezing), nielemisvaikeus (dysfagia), äänen käheys ja ruokailu.',
    text: `Toimintakyky ja moniammatillinen kuntoutusarvio

71-vuotias mies, jolla sairautena Parkinsonin tauti (sairastanut 8 vuotta, Hoehn & Yahr aste 3).

Kehon toiminnot ja liikkuminen:
- Lihastoiminnot ja liikekontrolli (b735, b760): Molemminpuolinen rigiditeetti (hammasratasilmiö) ylä- ja alaraajoissa, enemmän oikealla puolella. Lepovapinaa oikeassa kädessä.
- Asennonhallinta ja kävely (b755, b770, d450): Vartalon asento etukumara. Kävely laahustavaa, askelpituus lyhentynyt. Kävelyyn lähdössä ja ahtaissa oviaukoissa ilmenee jähmettymistä (freezing-ilmiö). Kääntymiset moniaskeliset ja horjahtelualttiit.
- Ääni- ja puhetoiminnot (b310, b320): Äänenvoimakkuus huomattavasti heikentynyt (hypofonia), puhe monotonista ja ajoittain puuroutuvaa (dysartria). Puheen tuottaminen vaatii suurta ponnistelua.
- Nielemistoiminnot (b510): Esiintyy nesteiden nielemisvaikeutta (orofaryngeaalinen dysfagia), yskähtelee helposti juodessaan ohuita nesteitä. Ruokailu kestää pitkään.

Suoritukset ja arjen toiminnot:
- Syöminen ja juominen (d550, d560): Käden vapinan ja hienomotoriikan kömpelyyden vuoksi keiton ja juoman läikkymistä. Vaatii sakeutettua nestettä ja painotettuja aterimia.
- Pukeutuminen (d540): Pienten nappien ja vetoketjujen sulkeminen erittäin hidasta ja usein mahdotonta ilman apua.
- Henkilökohtainen hygienia (d520): Hampaiden pesu ja parranajo sähkölaitteilla onnistuu hitaasti, mutta vaatii valvontaa.
- Keskusteleminen ja vuorovaikutus (d330): Puheen hiljaisuuden vuoksi vetäytynyt puhelinkeskusteluista ja sosiaalisista tilanteista.

Ympäristö- ja tukitekijät:
Käytössä ergonomiset painoaterimet, nokkamuki ja sakeuttamisaine nesteille (e115). Liikkumisen tukena sisätiloissa ja ulkona rollaattori, jossa laservalo-optiikka freezing-tilanteiden purkamiseksi (e115). Puheterapeutin ohjaus nielemisen nielemisasennoista ja äänenvoimakkuusharjoituksista (LSVT LOUD) (e355). Puoliso huolehtii lääkeaikataulujen noudattamisesta (levodopa-lääkityksen ajoitus kriittinen toimintakyvylle) (e310).`
  },
  {
    id: 'case-9',
    title: '9. Traumaattinen selkäydinvamma (Paraplegia Th10) & Esteettömyys',
    shortTitle: '9. Selkäydinvamma & pyörätuoli',
    targetChapters: ['s1', 'b6', 'b7', 'd4', 'd5', 'd8', 'e1', 'e5'],
    description: 'Täydellinen selkäydinvamma rintarangan tasolla (ASIA A, Th10), molempien alaraajojen paraplegia, neurogeeninen rakko, aktiivipyörätuoli ja esteettömyys.',
    text: `Toimintakyky ja itsenäisen asumisen arviointi

34-vuotias mies, jolle tullut moottoripyöräonnettomuudessa rintarangan Th10-tason täydellinen selkäydinvamma (ASIA A). Kuntoutusvaihe edennyt itsenäisen asumisen järjestämiseen.

Kehon toiminnot ja rakenteet:
- Hermojärjestelmän rakenne (s120): Täydellinen selkäytimen poikkileikkausvaurio Th10-tasolla.
- Liikkumisen ja lihasten toiminnot (b730, b755): Vatsalihasten alaosa ja molemmat alaraajat täysin halvaantuneet (plegiset, MRC 0/5). Ylävartalon, hartiarenkaan ja käsien lihasvoimat erinomaiset (MRC 5/5).
- Tuntoaistimus (b270): Täydellinen tunnonpuutos Th10-dermatoomin alapuolella (alavartalo ja jalat), minkä vuoksi korkea painehaavariski istuinalueella.
- Virtsaamis- ja suolitoiminnot (b620, b525): Neurogeeninen rakko ja suoli; suorittaa puhtaan toistokatetroinnin itsenäisesti 5 kertaa vuorokaudessa.

Suoritukset ja osallistuminen:
- Siirtymiset (d420): Siirtymiset pyörätuolista vuoteeseen, wc-istuimelle ja auton kuljettajan penkille sujuvat täysin itsenäisesti ilman siirtolankkua hyvien yläraajavoimien ansiosta.
- Liikkuminen pyörätuolilla (d465): Kelaa kevennettyä aktiivipyörätuolia itsenäisesti asfaltoiduilla pinnoilla, hallitsee keulimisen ja matalien kynnysten ylittämisen. Pitkillä matkoilla ja maastossa käytössä pyörätuolin sähköinen apulaite.
- Autolla ajaminen (d470): Ajaa itsenäisesti käsihallintalaitteilla varustettua henkilöautoa, nostaa pyörätuolin itse matkustajan penkille.
- Itsestä huolehtiminen (d510, d540): Peseytyminen ja pukeutuminen täysin itsenäistä istuma-asennossa.
- Työelämä ja toimeentulo (d850): Palannut IT-asiantuntijan etätyöhön tietokoneella täysipäiväisesti.

Ympäristötekijät ja esteettömyys:
Käytössä mittatilaustyönä valmistettu aktiivipyörätuoli ja painehaavoja ehkäisevä Roho-ilmatyyny (e115, e120). Asunnossa tehty laajat esteettömyysmuutokset vammaispalvelulain nojalla: ulko-ovelle asennettu ramppi, sisäovet levennetty 90 cm, kynnykset poistettu ja kylpyhuoneeseen asennettu kääntyvät tukikaiteet sekä suihkulaveri (e150, e580). Käsihallintalaitteilla mukautettu auto mahdollistaa itsenäisen liikkumisen (e115).`
  },
  {
    id: 'case-10',
    title: '10. Vaikea masennustila, Uupumus & Sosiaalinen toimintakyky',
    shortTitle: '10. Masennus & uupumus',
    targetChapters: ['b1', 'd2', 'd6', 'd7', 'd8', 'd9', 'e3', 'e5'],
    description: 'Pitkittynyt vaikea masennustila (F32.2), unihäiriö, voimakas aloitekyvyttömyys, kodinhoidon laiminlyönti, sosiaalinen eristäytyminen ja työkyvyttömyys.',
    text: `Psykiatrinen toimintakykyarviointi

44-vuotias nainen, jolla diagnosoitu pitkittynyt vaikea masennustila ilman psykoosioireita (F32.2) ja työuupumus (burnout).

Mentaaliset toiminnot ja psyykkinen suorituskyky:
- Mielialatoiminnot (b152): Mieliala vaikeasti laskenut, anhedonia (kyvyttömyys kokea iloa tai mielihyvää), jatkuva syyllisyyden ja toivottomuuden tunne. BDI-masennuskyselypisteet 34/63 (vaikea masennus).
- Energisyys ja vireystila (b130): Huomattava psykomotorinen hidastuneisuus, lamaannuttava väsymys ja aloitekyvyttömyys. Yksinkertaistenkin asioiden aloittaminen vaatii valtavaa ponnistelua.
- Unitoiminnot (b134): Vaikea nukahtamisvaikeus ja aamuyön heräily (herää klo 03.30, uni jää 3-4 tuntiin yössä).
- Kognitiiviset toiminnot (b140, b164): Keskittymiskyky herpaantuu muutamassa minuutissa, lukeminen tai television katselu ei onnistu keskittymisvaikeuden vuoksi.

Suoritukset, arki ja sosiaalinen osallistuminen:
- Päivittäisten tehtävien ja stressin sieto (d240): Arjen stressinsietokyky romahtanut; pienikin vaatimus tai puhelinsoitto aiheuttaa ahdistuneisuuden nousua ja itkuisuutta.
- Kodinhoito ja ravitsemus (d640, d550): Kotitaloustyöt jääneet täysin hoitamatta useiden viikkojen ajalta (pyykkivuoret, tiskaamattomat astiat, avaamattomat postit). Ruokahalu kadonnut, paino laskenut 6 kg kahdessa kuukaudessa.
- Henkilökohtaisten suhteiden ylläpito (d760, d710): Vetäytynyt kaikista sosiaalisista kontakteista, ei vastaa ystävien viesteihin eikä puheluihin. Yksinäisyyden ja erillisyyden tunne voimakas.
- Työelämä ja talous (d850, d860): Ollut pitkällä sairauspäivärahakaudella 7 kuukautta. Työkyky asiantuntijatehtävissä täysin alentunut, hakenut kuntoutustukea (määräaikaista työkyvyttömyyseläkettä).
- Vapaa-aika ja harrastukset (d920): Luopunut aiemmista kuorolaulu- ja lenkkeilyharrastuksista täydellisen voimattomuuden vuoksi.

Ympäristö- ja tukitekijät:
Iäkäs äiti soittaa päivittäin ja käy satunnaisesti tuomassa valmista ruokaa, mikä on ainoa säännöllinen sosiaalinen kontakti (e310). Säännöllinen hoitosuhde psykiatrian poliklinikalle (sairaanhoitajan keskustelukäynnit 1-2 viikon välein ja lääkärin konsultaatiot) (e355, e575). Kelan psykoterapiaan hakeutuminen suunnitelmissa toimintakyvyn kohennuttua.`
  }
];
