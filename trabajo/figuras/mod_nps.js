// Figura: nuevas sustancias psicoactivas (NPS) — familias químico-farmacológicas y riesgos clínicos.
// Modelo de orientación: de la familia química al mecanismo, al cuadro tóxico y al principio de manejo.
// Compilar en prueba: node tools/fig.js mod_nps --dry --png <carpeta>
const TITLE = 'Nuevas sustancias psicoactivas (NPS): familias químico-farmacológicas y riesgos clínicos';
module.exports = {
  key: 'mod_nps',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo de orientación en cinco bloques. 1) Qué agrupa el término NPS y por qué la clínica no identifica la sustancia. 2) Matriz de ocho familias químico-farmacológicas: sustancias representativas, mecanismo, cuadro tóxico con las cifras de las series publicadas, riesgos propios (adulteración, potencia, abstinencia) y principio de manejo; la última columna gradúa la base documental (●●● revisión sistemática o serie amplia con confirmación analítica; ●●○ revisión narrativa o serie clínica; ●○○ series pequeñas, casos o estudio preclínico). 3) Riesgos transversales del mercado: etiquetado falso, potencia por microgramo, policonsumo y detección analítica. 4) Códigos de la CIE-11 cotejados en la tabulación oficial de la OMS y los dos antídotos con límites literales de ficha técnica. 5) Alarmas comunes, principios de reducción de daños y límites. Los porcentajes proceden de series de casos y de registros de centros toxicológicos: no son riesgos poblacionales, y en el policonsumo los cuadros se superponen. No contiene dosis ni pautas de tratamiento: solo principios y los límites literales de las fichas técnicas citadas. «[fuente no localizada]» señala lo razonable que no se ha podido cotejar en una fuente primaria. ↗ abre la ficha del atlas.',
    refs: [
      'Peacock A et al. (2019). New psychoactive substances: challenges for drug surveillance, control, and public health responses. Lancet 394:1668-1684 · PMID 31668410',
      'Wood DM (2012). Novel psychoactive substances: how to understand the acute toxicity associated with the use of these substances. Ther Drug Monit 34:363-367 · PMID 22673201',
      'Simmler LD et al. (2013). Pharmacological characterization of designer cathinones in vitro. Br J Pharmacol 168:458-470 · PMID 22897747',
      'Marusich JA et al. (2014). Pharmacology of novel synthetic stimulants structurally related to the «bath salts» constituent 3,4-methylenedioxypyrovalerone (MDPV). Neuropharmacology 87:206-213 · PMID 24594476',
      'Wood DM et al. (2010). Case series of individuals with analytically confirmed acute mephedrone toxicity. Clin Toxicol (Phila) 48:924-927 · PMID 21171849',
      'Regan L, Mitchelson M & Macdonald C (2011). Mephedrone toxicity in a Scottish emergency department. Emerg Med J 28:1055-1058 · PMID 21183522',
      'Nugteren-van Lonkhuyzen JJ et al. (2022). 3-Methylmethcathinone (3-MMC) poisonings: acute clinical toxicity and time trend between 2013 and 2021 in the Netherlands. Ann Emerg Med 80:203-212 · PMID 35752518',
      'Beck O et al. (2016). Toxicity evaluation of α-pyrrolidinovalerophenone (α-PVP): results from intoxication cases within the STRIDA project. Clin Toxicol (Phila) 54:568-575 · PMID 27412885',
      'Beck O et al. (2015). Intoxications involving MDPV in Sweden during 2010-2014: results from the STRIDA project. Clin Toxicol (Phila) 53:865-873 · PMID 26462932',
      'Banks ML et al. (2014). Synthetic cathinones («bath salts»). J Emerg Med 46:632-642 · PMID 24565885',
      'Vallersnes OM et al. (2016). Psychosis associated with acute recreational drug toxicity: a European case series (Euro-DEN). BMC Psychiatry 16:293 · PMID 27538886',
      'Castaneto MS et al. (2014). Synthetic cannabinoids: epidemiology, pharmacodynamics, and clinical implications. Drug Alcohol Depend 144:12-41 · PMID 25220897',
      'Tai S & Fantegrossi WE (2017). Pharmacological and toxicological effects of synthetic cannabinoids and their metabolites. Curr Top Behav Neurosci 32:249-262 · PMID 28012093',
      'Tait RJ et al. (2016). A systematic review of adverse events arising from the use of synthetic cannabinoids and their associated treatment. Clin Toxicol (Phila) 54:1-13 · PMID 26567470',
      'van Amsterdam J, Brunt T & van den Brink W (2015). The adverse health effects of synthetic cannabinoids with emphasis on psychosis-like effects. J Psychopharmacol 29:254-263 · PMID 25586398',
      'Every-Palmer S (2011). Synthetic cannabinoid JWH-018 and psychosis: an explorative study. Drug Alcohol Depend 117:152-157 · PMID 21316162',
      'Centers for Disease Control and Prevention (2013). Acute kidney injury associated with synthetic cannabinoid use — multiple states, 2012. MMWR Morb Mortal Wkly Rep 62:93-98 · PMID 23407124',
      'Manier SK et al. (2023). Analytical toxicology of the semi-synthetic cannabinoid hexahydrocannabinol studied in human samples, pooled human liver S9 fraction, rat samples and drug products using HPLC-HRMS-MS. J Anal Toxicol 47:818-825 · PMID 37864499',
      'Armenian P et al. (2018). Fentanyl, fentanyl analogs and novel synthetic opioids: a comprehensive review. Neuropharmacology 134(Pt A):121-132 · PMID 29042317',
      'Nielsen S et al. (2026). Behavioural effects and naloxone effectiveness with new synthetic opioids. Drug Alcohol Rev 45:e70040 · PMID 41093771',
      'Amaducci A et al. (2023). Naloxone use in novel potent opioid and fentanyl overdoses in emergency department patients. JAMA Netw Open 6:e2331264 · PMID 37642962',
      'Brunetti P et al. (2021). Designer benzodiazepines: a review of toxicology and public health risks. Pharmaceuticals (Basel) 14:560 · PMID 34208284',
      'Gameli PS et al. (2024). Metabolism and detection of designer benzodiazepines: a systematic review. Drug Metab Rev 56:359-384 · PMID 39340261',
      'Penninga EI et al. (2016). Adverse events associated with flumazenil treatment for the management of suspected benzodiazepine intoxication: a systematic review with meta-analyses of randomised trials. Basic Clin Pharmacol Toxicol 118:37-44 · PMID 26096314',
      'Roth BL et al. (2013). The ketamine analogue methoxetamine and 3- and 4-methoxy analogues of phencyclidine are high affinity and selective ligands for the glutamate NMDA receptor. PLoS One 8:e59334 · PMID 23527166',
      'Morris H & Wallach J (2014). From PCP to MXE: a comprehensive review of the non-medical use of dissociative drugs. Drug Test Anal 6:614-632 · PMID 24678061',
      'Wood DM et al. (2012). Acute toxicity associated with the recreational use of the ketamine derivative methoxetamine. Eur J Clin Pharmacol 68:853-856 · PMID 22205276',
      'Krystal JH et al. (1994). Subanesthetic effects of the noncompetitive NMDA antagonist, ketamine, in humans. Arch Gen Psychiatry 51:199-214 · PMID 8122957',
      'Morgan CJA & Curran HV (2012). Ketamine use: a review. Addiction 107:27-38 · PMID 21777321',
      'Winstock AR et al. (2012). The prevalence and natural history of urinary symptoms among recreational ketamine users. BJU Int 110:1762-1766 · PMID 22416998',
      'Chu PSK et al. (2008). The destruction of the lower urinary tract by ketamine abuse: a new syndrome? BJU Int 102:1616-1622 · PMID 18680495',
      'Halberstadt AL (2017). Pharmacology and toxicology of N-benzylphenethylamine («NBOMe») hallucinogens. Curr Top Behav Neurosci 32:283-311 · PMID 28097528',
      'Suzuki J et al. (2015). Toxicities associated with NBOMe ingestion — a novel class of potent hallucinogens: a review of the literature. Psychosomatics 56:129-139 · PMID 25659919',
      'Hill SL et al. (2013). Severe clinical toxicity associated with analytically confirmed recreational use of 25I-NBOMe: case series. Clin Toxicol (Phila) 51:487-492 · PMID 23731373',
      'Herian M (2023). 25X-NBOMe compounds — chemistry, pharmacology and toxicology. A comprehensive review. Crit Rev Toxicol 53:15-33 · PMID 37115704',
      'Tittarelli R et al. (2015). Recreational use, analysis and toxicity of tryptamines. Curr Neuropharmacol 13:26-46 · PMID 26074742',
      'Schep LJ et al. (2012). The clinical toxicology of γ-hydroxybutyrate, γ-butyrolactone and 1,4-butanediol. Clin Toxicol (Phila) 50:458-470 · PMID 22746383',
      'Galicia M, Nogué S & Miró O (2011). Liquid ecstasy intoxication: clinical features of 505 consecutive emergency department patients. Emerg Med J 28:462-466 · PMID 21602168',
      'Liechti ME et al. (2006). Clinical features of gamma-hydroxybutyrate and gamma-butyrolactone toxicity and concomitant drug and alcohol use. Drug Alcohol Depend 81:323-326 · PMID 16143455',
      'McDonough M et al. (2004). Clinical features and management of gamma-hydroxybutyrate (GHB) withdrawal: a review. Drug Alcohol Depend 75:3-9 · PMID 15225884',
      'Abdulrahim D & Bowden-Jones O, en nombre del NEPTUNE Expert Group (2015). Guidance on the Clinical Management of Acute and Chronic Harms of Club Drugs and Novel Psychoactive Substances. London: Novel Psychoactive Treatment UK Network (NEPTUNE) · guía clínica basada en revisión de la literatura y consenso de expertos',
      'Organización Mundial de la Salud (2025; versión de 24 de enero de 2025). CIE-11 para estadísticas de mortalidad y morbilidad: tabulación simple (Simple Tabulation, MMS), códigos 6C42, 6C43, 6C44, 6C47, 6C49, 6C4C, 6C4D y 6C4E · icd.who.int',
      'American Psychiatric Association (2022). DSM-5-TR. Trastornos relacionados con sustancias y trastornos adictivos; trastorno psicótico inducido por sustancias/medicamentos. Washington, DC: APA Publishing',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Nyxoid 1,8 mg solución para pulverización nasal (nº de registro 1171238001), secciones 4.1 y 4.4. Agencia Española de Medicamentos y Productos Sanitarios · cima.aemps.es',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Flumazenil B. Braun 0,1 mg/ml solución inyectable (nº de registro 69020), secciones 4.3 y 4.4. Agencia Española de Medicamentos y Productos Sanitarios · cima.aemps.es'
    ],
    nodes: ['sustanc', 'tcs', 'dast10', 'cows', 'chemsex_inv', 'chemsex_atencion', 'perit_forense', 'neurotox_anf', 'anx_sust', 'dep_induc']
  },
  draw(Fig) {
    const W = 2360, X = 60, FW = W - 2 * X;
    const F = new Fig({ key: 'mod_nps', title: TITLE, w: W,
      desc: 'Modelo de las nuevas sustancias psicoactivas: definición y límites de la identificación clínica; matriz de ocho familias (catinonas sintéticas, cannabinoides sintéticos y semisintéticos, opioides sintéticos, benzodiacepinas de diseño, arilciclohexilaminas, fenetilaminas NBOMe y 2C, triptaminas, GHB/GBL y depresores afines) con mecanismo, cuadro tóxico, riesgos propios y principio de manejo; riesgos transversales del mercado; códigos de la CIE-11 y antídotos con sus límites de ficha técnica; alarmas, reducción de daños y límites del esquema.' });

    let y = 92;
    y = F.text(X, y, 'Esquema de orientación para profesionales sanitarios: se lee por filas, de la familia química al mecanismo, al cuadro tóxico y al principio de actuación. Las cifras son de series publicadas, no riesgos poblacionales. No contiene dosis ni pautas de consumo o de tratamiento.', { fs: 20, w: FW }) + 10;

    // ───────── 1. Qué son y qué no permite la clínica
    y = F.band(y, 'Qué agrupa el término y por qué el cuadro clínico no identifica la sustancia', { n: 1 }) + 18;
    const CW3 = (FW - 2 * 30) / 3;
    const b1 = F.box('def', { x: X, y, w: CW3, type: 'info', fs: 19, align: 'left', node: 'sustanc', title: 'NPS: una categoría de mercado, no una clase farmacológica',
      text: 'Conjunto amplio y heterogéneo de sustancias surgidas sobre todo desde mediados de los años 2000 como alternativas legales a drogas ya fiscalizadas; el propio término es de definición problemática y agrupa familias químicas sin parentesco farmacológico (Peacock 2019). El modelo clásico de vigilancia y control responde mal a un mercado que introduce sustancias con rapidez y en el que las preferencias cambian según la disponibilidad (Peacock 2019).' });
    const b2 = F.box('ident', { x: X + CW3 + 30, y, w: CW3, type: 'q', fs: 19, align: 'left', title: '¿Qué ha consumido la persona?',
      text: 'Lo declarado y lo consumido coinciden mal: hay estudios europeos que muestran inconsistencia entre la sustancia que la persona cree haber tomado y la que contiene el producto (Wood 2012). La toxicidad aguda solo se reconstruye combinando fuentes —foros, encuestas, centros de información toxicológica, casos con confirmación analítica y estudios en voluntarios—, cada una con sus límites (Wood 2012). En consecuencia, el cuadro orienta a un mecanismo, no a una molécula.' });
    const b3 = F.box('lect', { x: X + 2 * (CW3 + 30), y, w: CW3, type: 'act', fs: 19, align: 'left', node: 'tcs', title: 'Cómo usar la matriz',
      text: 'Primero el síndrome dominante (simpaticomimético, depresor, disociativo o alucinógeno-serotoninérgico); después la familia probable; después el riesgo propio de esa familia (potencia, adulteración, abstinencia) y el principio de manejo. La confirmación analítica es retrospectiva y, para muchas NPS, no está disponible en el laboratorio asistencial (Armenian 2018; Gameli 2024): la decisión clínica no la espera.' });
    const h1 = Math.max(b1.h, b2.h, b3.h); [b1, b2, b3].forEach(b => { b.h = h1; });
    F.arrow(b2, b3, { from: 'r', to: 'l' });
    y = b1.y + h1 + 46;

    // ───────── 2. Matriz de familias
    y = F.band(y, 'Ocho familias: mecanismo, cuadro tóxico, riesgos propios y principio de manejo', { n: 2 }) + 16;
    const t2 = F.table({ x: X, y, fs: 17.5,
      cols: [
        { w: 268, label: 'Familia' },
        { w: 318, label: 'Sustancias representativas' },
        { w: 372, label: 'Mecanismo' },
        { w: 452, label: 'Cuadro tóxico característico' },
        { w: 452, label: 'Riesgos propios de la familia' },
        { w: 290, label: 'Principio de manejo (sin dosis)' },
        { w: 88, label: 'Base' }],
      rows: [
        [{ t: 'Catinonas sintéticas', node: 'mefed' },
          { t: 'Mefedrona (4-MMC), 3-MMC, metilona, MDPV, α-PVP, α-PHP y otros derivados de pirovalerona', node: 'catinonas_nuevas' },
          'Tres grupos in vitro: inhibidores no selectivos de la recaptación de monoaminas que además liberan serotonina (mefedrona, metilona, butilona); inhibidores preferentes de dopamina y noradrenalina con liberación de dopamina (catinona, metcatinona); e inhibidores potentes y selectivos del transportador de dopamina y noradrenalina sin liberación (MDPV, pirovalerona) (Simmler 2013). El α-PVP comparte el perfil de MDPV, con potencia MDPV > α-PVP > α-PBP > α-PPP en modelos animales (Marusich 2014). La acción dopaminérgica común se asocia a un riesgo considerable de adicción (Simmler 2013).',
          'Síndrome simpaticomimético. Mefedrona, 7 casos con confirmación analítica: agitación el signo más frecuente, frecuencia cardiaca media 109 lpm y presión sistólica media 153 mmHg (Wood 2010). 3-MMC, 84 intoxicaciones solo por 3-MMC notificadas al centro toxicológico neerlandés: taquicardia 35 %, hipertensión 20 %, agitación 19 %; gravedad leve o moderada en el 90 %, grave en el 6 % (Nugteren-van Lonkhuyzen 2022). α-PVP, 42 casos confirmados: taquicardia 80 %, agitación 70 %, hipertensión 33 %, alucinaciones 20 %, delirium 18 % (Beck 2016). MDPV, 201 casos confirmados: agitación 67 %, taquicardia 56 %, hipertensión 34 %, alucinaciones 16 %, delirium 15 %, hipertermia 10 %, rabdomiólisis 8 % (Beck 2015).',
          'Policonsumo casi constante: en los casos de α-PVP solo en 14 de 42 (33 %) era la única sustancia detectada (Beck 2016); en los de MDPV, solo en 30 de 201 (15 %) (Beck 2015). Las concentraciones en suero y orina varían enormemente, de modo que no orientan sobre la gravedad (Beck 2015 y 2016). Siguieron apareciendo intoxicaciones graves y muertes después de su fiscalización (Beck 2015 y 2016). Psicosis en el 5,7 % de las urgencias por mefedrona y en el 27,3 % de las de MDPV en la red europea Euro-DEN (Vallersnes 2016).',
          'Reducir la agitación y la psicosis y sostener la perfusión renal; la mayoría de los casos descritos con buena evolución se manejaron con benzodiacepinas y antipsicóticos junto con cuidados generales (Banks 2014).',
          { sym: '●●●', t: '' }],
        [{ t: 'Cannabinoides sintéticos (y semisintéticos)', node: 'nps_can' },
          { t: 'JWH-018, XLR-11, AB-CHMINACA y sucesores («Spice», «K2»); aparte, semisintéticos como el hexahidrocannabinol (HHC)', node: 'cannabis_tuc' },
          'La mayoría de los detectados en productos herbales tienen mayor afinidad por el receptor CB1 que el Δ9-THC y mayor afinidad por CB1 que por CB2; en estudios in vitro y en animales su potencia es de 2 a 100 veces la del THC (Castaneto 2014). A diferencia del THC, agonista parcial, actúan como agonistas completos de CB1 y CB2, y varios metabolitos conservan afinidad alta y actividad intrínseca propia (Tai y Fantegrossi 2017). El HHC es semisintético: se obtiene por ciclación del cannabidiol e hidrogenación (Manier 2023).',
          'Revisión sistemática de unos 4.000 casos en 106 estudios, con al menos 26 muertes: taquicardia ≈37-77 %, agitación ≈16-41 %, náuseas ≈13-94 %; la mayoría de las presentaciones no fueron graves y se resolvieron con cuidados sintomáticos, con estancias menores de 8 h (Tait 2016). Complicaciones mayores menos frecuentes: episodios cardiovasculares (infarto, ictus isquémico), lesión renal aguda, crisis tónico-clónicas generalizadas, cuadros psiquiátricos (primer episodio psicótico, ideas paranoides, autolesión e ideación suicida) e hiperemesis (Tait 2016).',
          'Riesgo psicótico: son agonistas completos, más potentes que el THC, y los preparados no contienen cannabidiol, por lo que su potencial de inducir psicosis puede ser mayor que el del cannabis, aunque faltan estudios comparativos directos (van Amsterdam 2015). En 15 personas con enfermedad mental grave, el 69 % de quienes los consumieron presentó síntomas compatibles con recaída psicótica (Every-Palmer 2011); el producto se consideraba «natural», «seguro», legal y no detectable en los análisis (Every-Palmer 2011). Agrupación de 16 casos de lesión renal aguda en seis estados de EE. UU. asociada a XLR-11 (CDC 2013). Un producto vendido como cannabis de bajo contenido en THC contenía un 30,6 % de HHC y un 4 % de Δ9-THC (Manier 2023).',
          'Cuidados sintomáticos: fluidos intravenosos, benzodiacepinas y antieméticos; una parte de los casos no precisa ingreso (Tait 2016). Preguntar por lesión renal y por psicosis en consumo reciente (CDC 2013; Every-Palmer 2011).',
          { sym: '●●●', t: '' }],
        [{ t: 'Opioides sintéticos', node: 'opioides' },
          'Fentanilo y sus análogos (acetilfentanilo, carfentanilo), nitazenos (isotonitazeno, metonitazeno, protonitazeno), U-47700',
          'Agonistas completos del receptor µ de potencia variable; su afinidad alta por el receptor µ explica que la reversión requiera dosis de naloxona mayores que las habituales (Armenian 2018). En 13 opioides sintéticos evaluados para fiscalización internacional desde 2020, las potencias van desde similares a la morfina hasta superiores al fentanilo (Nielsen 2026).',
          'Síndrome opioide: miosis y depresión respiratoria y del sistema nervioso central (Armenian 2018). En una cohorte de urgencias con confirmación analítica, quienes dieron positivo a opioides potentes nuevos (brorfina, isotonitazeno, metonitazeno, N-piperidinil etonitazeno) recibieron más bolos de naloxona que quienes solo dieron positivo a fentanilo (media 1,33 frente a 0,36; p = 0,02); en los dos casos de metonitazeno se practicó reanimación cardiopulmonar (Amaducci 2023). Serie corta: 9 casos frente a 11 de comparación.',
          'Aparecen en comprimidos de aspecto idéntico a opioides o benzodiacepinas conocidos, lo que expone a personas que no buscaban un opioide (Armenian 2018); se han identificado en medicamentos falsificados (Nielsen 2026). La naloxona revierte la mayoría de estas intoxicaciones, aunque en ocasiones se han necesitado dosis mayores o perfusión (Nielsen 2026). No hay estudios sobre los tratamientos del trastorno por consumo de opioides (metadona, buprenorfina, naltrexona) en personas con dependencia de nitazenos (Nielsen 2026).',
          { t: 'Naloxona precoz y soporte respiratorio; vigilancia prolongada por reaparición de la depresión respiratoria (ficha de Nyxoid 4.4). Ofrecer naloxona para llevar a casa.', node: 'naloxona' },
          { sym: '●●○', t: '' }],
        [{ t: 'Benzodiacepinas de diseño', node: 'bzd_dep' },
          'Etizolam, flualprazolam, flubromazolam, clonazolam, fenazepam, diclazepam, pirazolam',
          'Moduladores alostéricos positivos del receptor GABA-A, como las benzodiacepinas de prescripción; en las más recientes, un anillo triazólico fusionado al núcleo 1,4-diazepínico y grupos atractores de electrones aumentan la afinidad por el receptor (Brunetti 2021).',
          'Depresión del sistema nervioso central; comparadas con las benzodiacepinas clásicas producen sedación y amnesia intensas y aumentan el riesgo de depresión respiratoria y de muerte cuando se combinan con otros depresores (Brunetti 2021). De 31 sustancias revisadas, solo 12 tenían datos suficientes; en ellas se documentaron 44 ingresos en urgencias, 63 casos de conducción bajo sus efectos y 141 muertes entre 2008 y 2021, con etizolam, flualprazolam, flubromazolam y fenazepam implicados en la mayoría (Brunetti 2021).',
          'Se venden como alprazolam o diazepam falsos y se han hallado en comprimidos falsificados de marca (Brunetti 2021). Los datos de farmacocinética y toxicidad son escasos y faltan métodos analíticos validados para muchas de ellas, de modo que el número real de casos es probablemente mayor (Brunetti 2021; Gameli 2024). Dependencia y abstinencia descritas (Brunetti 2021); la abstinencia de sedantes puede cursar con alteraciones perceptivas y crisis (CIE-11 6C44.41-6C44.43).',
          { t: 'Soporte y observación. El flumazenil no es un antídoto de rutina: véase el bloque 4.', node: 'desprescr_bzd' },
          { sym: '●●○', t: '' }],
        [{ t: 'Arilciclohexilaminas (disociativos)', node: 'ketamina_rec' },
          'Ketamina, metoxetamina (MXE), 3-MeO-PCP, 4-MeO-PCP, 3-MeO-PCE',
          'Ligandos de afinidad alta por el sitio de la fenciclidina del receptor NMDA del glutamato; la metoxetamina y los análogos de la fenciclidina muestran además afinidad apreciable por el transportador de serotonina (Roth 2013). El antagonismo NMDA es el rasgo farmacológico central de los anestésicos disociativos (Roth 2013). En voluntarios, la ketamina en dosis subanestésicas produjo síntomas positivos y negativos semejantes a los de la esquizofrenia, alteraciones perceptivas, síntomas disociativos y deterioro de la vigilancia, la fluidez verbal y el recuerdo diferido (Krystal 1994).',
          'Estado disociativo o catatónico con rasgos simpaticomiméticos añadidos: en tres casos de metoxetamina con confirmación analítica, taquicardia e hipertensión significativas junto al cuadro disociativo (Wood 2012). Consumo crónico de ketamina: cistitis ulcerativa, ligada sobre todo al consumo frecuente y diario, y deterioro neurocognitivo con déficits de memoria de trabajo y episódica (Morgan y Curran 2012).',
          'Daño urológico: síntomas urinarios en el 26,6 % de 1.285 personas que habían consumido ketamina en el último año, con relación con la dosis y la frecuencia; mejoraron al cesar el consumo en el 51 % de quienes informaron de su evolución (Winstock 2012). En 59 personas con consumo intenso, hidronefrosis uni o bilateral en el 51 % y daño renal potencialmente irreversible en los casos graves (Chu 2008). La metoxetamina se comercializó como derivado «seguro para la vejiga», afirmación no demostrada (Wood 2012). El mercado de disociativos de internet añadió al menos 12 sustancias desde 2008, casi la mitad desconocidas en la literatura científica antes de su aparición (Morris y Wallach 2014).',
          { t: 'Entorno de baja estimulación y soporte; en los casos descritos se usaron benzodiacepinas en dosis bajas (Wood 2012). Ante consumo frecuente, preguntar por síntomas urinarios y derivar (Morgan y Curran 2012).', node: 'ketamina' },
          { sym: '●●○', t: '' }],
        [{ t: 'Fenetilaminas: serie NBOMe y 2C', node: 'alucinogenos' },
          '25I-NBOMe, 25B-NBOMe, 25C-NBOMe; serie 2C (2C-B, 2C-I)',
          'Agonistas del receptor 5-HT2A. Añadir un grupo N-bencilo a las fenetilaminas 2C aumenta de forma marcada la afinidad por 5-HT2A y la potencia alucinógena: el 25I-NBOMe muestra afinidad subnanomolar (Halberstadt 2017). Los compuestos 25X-NBOMe tienen además afinidad por receptores dopaminérgicos, adrenérgicos e histaminérgicos (Herian 2023).',
          'Revisión de 20 casos con confirmación analítica: agitación 85 %, taquicardia 85 %, hipertensión 65 %, crisis convulsivas 40 %, elevación de la creatina-cinasa 45 %; 8 (40 %) precisaron cuidados intensivos y 3 (15 %) fallecieron (Suzuki 2015). Serie de 7 casos de 25I-NBOMe: taquicardia en 7, agitación en 6, alucinaciones visuales y auditivas en 6, crisis en 3, hiperpirexia en 3, clonus en 2, creatina-cinasa elevada en 7 y lesión renal aguda en 1 (Hill 2013). La rabdomiólisis es una complicación relativamente frecuente de la toxicidad grave, posiblemente ligada a crisis, hipertermia y vasoconstricción (Halberstadt 2017).',
          'Potencia por microgramo: se venden en papel secante y se presentan como LSD, de modo que quien cree tomar LSD —4 de 20 casos, dos de ellos mortales— se expone a un perfil muy distinto (Suzuki 2015). En la serie de Hill, seis personas tomaron material del mismo lote etiquetado como 2C-B (Hill 2013). No forman parte de los cribados habituales de drogas de abuso (Suzuki 2015).',
          'Fluidos y sedación con benzodiacepinas, como en el resto de los cuadros con agitación grave (Suzuki 2015).',
          { sym: '●●○', t: '' }],
        [{ t: 'Triptaminas', node: 'psicodel_5ht2a' },
          'DMT, 5-MeO-DMT, 4-AcO-DMT y otras; psilocibina como referencia natural',
          'Compuestos con núcleo indólico derivados del triptófano; comparten estructura con la serotonina y la melatonina, y sus efectos alucinógenos se atribuyen al agonismo serotoninérgico (Tittarelli 2015).',
          'Alteraciones perceptivas intensas de duración variable según la vía de administración; la revisión disponible reúne farmacología, toxicidad y casos de muerte relacionados con su consumo, con información procedente en parte de fuentes no revisadas por pares (Tittarelli 2015).',
          'Base documental débil: la propia revisión recurre a libros, publicaciones oficiales y foros de personas usuarias ante la escasez de literatura científica (Tittarelli 2015). En la red Euro-DEN, las urgencias que implicaban triptaminas se acompañaron de psicosis en 4 de 7 casos: cifra orientativa por el tamaño muy pequeño (Vallersnes 2016).',
          'Contención verbal y entorno seguro; sedación con benzodiacepinas si hay agitación [fuente no localizada para esta familia en concreto].',
          { sym: '●○○', t: '' }],
        [{ t: 'GHB, GBL y depresores afines', node: 'ghb_gbl' },
          'GHB, GBL, 1,4-butanodiol (precursores metabolizados a GHB)',
          'Agonista parcial directo del receptor GABA-B y, de forma indirecta, por su metabolismo a GABA; semivida corta, de 20 a 60 minutos según los datos publicados (Schep 2012).',
          'Depresión del sistema nervioso central y respiratoria de duración relativamente corta, con molestias digestivas, bradicardia, mioclonías e hipotermia (Schep 2012). En 65 casos: coma 83 %, bradicardia 38 %, hipotermia 48 %, tiempo medio para recuperar la conciencia 111 ± 61 min y ventilación mecánica en el 6 % (Liechti 2006). En 505 casos consecutivos de un servicio de urgencias de Barcelona: puntuación de Glasgow ≤ 12 en el 72 % y ninguna muerte (Galicia 2011).',
          'Coingesta habitual: el 76 % de los 505 casos había consumido otras sustancias, sobre todo etanol (64 %); el antídoto administrado en 35 casos no obtuvo respuesta, y la coingesta alargó la recuperación y aumentó la necesidad de ventilación mecánica (Galicia 2011). Abstinencia potencialmente mortal: de 38 casos publicados, deterioro rápido a delirium en el 53 %, con síntomas semejantes a la abstinencia alcohólica y buena respuesta a benzodiacepinas en dosis altas (McDonough 2004); puede prolongarse hasta 21 días (Schep 2012).',
          { t: 'Soporte respiratorio y protección de la vía aérea; el lavado gástrico y el carbón no son útiles (Schep 2012). Abstinencia: benzodiacepinas e ingreso en los casos graves (McDonough 2004).', node: 'ghb_abst' },
          { sym: '●●●', t: '' }]
      ] });
    y = t2.y + 46;

    // ───────── 3. Riesgos transversales
    y = F.band(y, 'Riesgos que no dependen de la familia: etiquetado, potencia, policonsumo y detección', { n: 3 }) + 18;
    const CW4 = (FW - 3 * 26) / 4;
    const r1 = F.box('r_adul', { x: X, y, w: CW4, type: 'warn', fs: 18, align: 'left', title: 'Etiqueta falsa y adulteración',
      text: 'Los opioides sintéticos aparecen en comprimidos de aspecto idéntico a opioides o benzodiacepinas de prescripción (Armenian 2018) y en medicamentos falsificados (Nielsen 2026); las benzodiacepinas de diseño se venden como alprazolam o diazepam (Brunetti 2021); los NBOMe se venden como LSD (Suzuki 2015). Quien no busca esa sustancia es quien corre más riesgo.' });
    const r2 = F.box('r_pot', { x: X + CW4 + 26, y, w: CW4, type: 'warn', fs: 18, align: 'left', node: 'neurotox_anf', title: 'Potencia y margen estrecho',
      text: 'En las familias muy potentes, la diferencia entre el efecto buscado y la intoxicación no se aprecia a simple vista: el 25I-NBOMe tiene afinidad subnanomolar por 5-HT2A (Halberstadt 2017) y varios nitazenos igualan o superan la potencia del fentanilo (Nielsen 2026). Las concentraciones halladas en suero y orina varían de forma extrema y no gradúan la gravedad (Beck 2015 y 2016).' });
    const r3 = F.box('r_poli', { x: X + 2 * (CW4 + 26), y, w: CW4, type: 'info', fs: 18, align: 'left', node: 'chemsex_s', title: 'Policonsumo y contexto sexualizado',
      text: 'El consumo aislado es la excepción: una sola sustancia en el 33 % de los casos de α-PVP (Beck 2016), el 15 % de los de MDPV (Beck 2015) y el 24 % de los de GHB (Galicia 2011). En el contexto del chemsex concurren catinonas, GHB y metanfetamina, con riesgos añadidos de transmisión, interacciones y consentimiento que se abordan en sus propias fichas.' });
    const r4 = F.box('r_det', { x: X + 3 * (CW4 + 26), y, w: CW4, type: 'info', fs: 18, align: 'left', node: 'psust', title: 'Detección y vigilancia',
      text: 'Las técnicas dirigidas habituales detectan lo que ya se busca; identificar un compuesto nuevo exige análisis no dirigido de alta resolución, por lo que los casos están probablemente subregistrados (Armenian 2018). La modificación continua de las estructuras elude a la vez la fiscalización y las pruebas de laboratorio (Castaneto 2014); faltan métodos validados para muchas benzodiacepinas de diseño (Gameli 2024).' });
    const h3 = Math.max(r1.h, r2.h, r3.h, r4.h); [r1, r2, r3, r4].forEach(b => { b.h = h3; });
    y = r1.y + h3 + 46;

    // ───────── 4. Clasificación y antídotos
    y = F.band(y, 'Clasificación de la CIE-11 y los dos antídotos, con los límites literales de la ficha técnica', { n: 4 }) + 16;
    const t4 = F.table({ x: X, y, fs: 18,
      cols: [{ w: 150, label: 'Código' }, { w: 640, label: 'Categoría de la CIE-11 (OMS, tabulación simple MMS 2025)' }, { w: 1450, label: 'Qué cubre y qué no, y matices de codificación' }],
      rows: [
        [{ t: '6C47', bold: true }, { t: 'Trastornos debidos al consumo de catinonas sintéticas', node: 'catinonas_nuevas' }, 'Categoría propia, separada de los estimulantes de tipo anfetamínico (6C46). Incluye intoxicación (6C47.3), abstinencia (6C47.4), delirium (6C47.5) y trastorno psicótico con alucinaciones, ideas delirantes o síntomas mixtos (6C47.60-6C47.62).'],
        [{ t: '6C42', bold: true }, { t: 'Trastornos debidos al consumo de cannabinoides sintéticos', node: 'nps_can' }, 'Separada del cannabis (6C41), decisión coherente con la diferencia farmacológica entre agonistas completos y el THC, agonista parcial (Tai y Fantegrossi 2017). Los semisintéticos como el HHC no tienen categoría propia [fuente oficial no localizada para su asignación].'],
        [{ t: '6C43', bold: true }, { t: 'Trastornos debidos al consumo de opioides', node: 'opioides' }, 'Única categoría para todos los opioides: los fentanilos y los nitazenos no se distinguen en el código, de modo que la vigilancia de estas sustancias no puede apoyarse solo en la clasificación.'],
        [{ t: '6C44', bold: true }, { t: 'Trastornos debidos al consumo de sedantes, hipnóticos o ansiolíticos', node: 'ansiol_bzd' }, 'Cubre las benzodiacepinas de diseño sin categoría aparte. La abstinencia se califica como no complicada, con alteraciones perceptivas, con crisis o con ambas (6C44.40-6C44.43).'],
        [{ t: '6C4D', bold: true }, { t: 'Trastornos debidos al consumo de drogas disociativas, incluidas la ketamina y la fenciclidina (PCP)', node: 'ketamina_rec' }, 'Incluye las arilciclohexilaminas de diseño (metoxetamina, análogos metoxilados de la PCP) sin código propio para cada una.'],
        [{ t: '6C49 · 6C4C', bold: true }, { t: 'Trastornos debidos al consumo de alucinógenos · de MDMA o drogas relacionadas, incluida la MDA', node: 'alucinogenos' }, 'Las fenetilaminas NBOMe y 2C y las triptaminas se codifican como alucinógenos (6C49); la MDMA tiene categoría separada (6C4C). La CIE-11 no incluye en su tabulación simple un código para el trastorno perceptivo persistente por alucinógenos [fuente oficial no localizada].'],
        [{ t: '6C4E', bold: true }, { t: 'Trastornos debidos al consumo de otras sustancias psicoactivas especificadas, incluidos medicamentos', node: 'ghb_gbl' }, 'Categoría residual donde quedan las sustancias sin clase propia, entre ellas el GHB y sus precursores [asignación concreta: fuente oficial no localizada]. Es también la vía de codificación de las NPS sin familia reconocida.']
      ] });
    y = t4.y + 30;
    const CW2 = (FW - 30) / 2;
    const a1 = F.box('ant_nal', { x: X, y, w: CW2, type: 'drug', fs: 18, align: 'left', node: 'naloxona',
      title: 'Naloxona: sí, y vigilancia prolongada',
      text: 'Ficha técnica de Nyxoid (solución para pulverización nasal, nº de registro 1171238001): indicada para la administración inmediata como tratamiento de urgencia en caso de sospecha o confirmación de sobredosis por opioides, manifestada por depresión respiratoria o del sistema nervioso central, tanto en entornos no médicos como sanitarios, en personas de 14 años o más; «no es un sustituto de la atención médica de urgencia» (sección 4.1). La sección 4.4 advierte de tres cosas que importan con los opioides sintéticos: el efecto de algunos opioides puede ser más prolongado que el de la naloxona, con reaparición de la depresión respiratoria y necesidad de dosis adicionales; la reversión puede causar un síndrome de abstinencia agudo; y la reversión de la depresión respiratoria por buprenorfina puede ser incompleta, en cuyo caso debe asistirse la respiración. Coherente con la observación clínica de que los nitazenos exigieron más bolos que el fentanilo (Amaducci 2023) y con que en algunos casos se precisó perfusión (Nielsen 2026).' });
    const a2 = F.box('ant_flu', { x: X + CW2 + 30, y, w: CW2, type: 'warn', fs: 18, align: 'left', node: 'bzd_dep',
      title: 'Flumazenil: no como antídoto de rutina',
      text: 'Metanálisis de 13 ensayos aleatorizados con 994 personas con intoxicación por benzodiacepinas conocida o sospechada: los acontecimientos adversos fueron más frecuentes con flumazenil que con placebo (riesgo relativo 2,85; IC 95 % 2,11-3,84) y también los graves (3,81; IC 95 % 1,28-11,39), sobre todo arritmia supraventricular y convulsiones; las autoras concluyen que no debe usarse de forma rutinaria y que el balance debe valorarse en cada persona (Penninga 2016). Ficha técnica de Flumazenil B. Braun (nº de registro 69020), sección 4.3: contraindicado en «pacientes que reciben benzodiazepinas para el control de una afección que puede poner en peligro su vida (por ejemplo, control de la presión intracraneal o estado epiléptico)». Sección 4.4: su efecto suele ser más corto que el de las benzodiacepinas, con posible resedación que obliga a vigilancia; la inyección rápida ha producido síntomas de abstinencia en personas con exposición alta o prolongada; y no se recomienda en epilepsia con tratamiento prolongado con benzodiacepinas, porque el antagonismo brusco puede provocar convulsiones.' });
    const h4 = Math.max(a1.h, a2.h); [a1, a2].forEach(b => { b.h = h4; });
    y = a1.y + h4 + 46;

    // ───────── 5. Alarmas, reducción de daños y límites
    y = F.band(y, 'Alarmas comunes, principios de actuación y límites del esquema', { n: 5 }) + 18;
    const al = F.box('alarma', { x: X, y, w: CW3, type: 'warn', fs: 18, align: 'left', node: 'delirium',
      title: 'Señales que obligan a derivación urgente',
      text: 'Hipertermia, crisis convulsivas, dolor torácico o arritmia, rabdomiólisis o lesión renal aguda, delirium y agitación grave en los cuadros simpaticomiméticos (Hill 2013; Beck 2015; Tait 2016; CDC 2013). Depresión respiratoria, coma arreactivo o vía aérea sin proteger en los depresores, con el añadido de la reaparición de la depresión respiratoria tras la naloxona (Schep 2012; ficha de Nyxoid 4.4). Deterioro rápido a delirium en la abstinencia de GHB (McDonough 2004).' });
    const rd = F.box('rdanos', { x: X + CW3 + 30, y, w: CW3, type: 'act', fs: 18, align: 'left', node: 'red_danos',
      title: 'Principios de actuación y reducción de daños',
      text: 'Tratar el síndrome, no la etiqueta: el soporte sintomático y las benzodiacepinas son el eje en los cuadros con agitación, y el soporte respiratorio en los depresores (Banks 2014; Tait 2016; Schep 2012). Preguntar de forma explícita y sin juicio por la vía, la frecuencia y las sustancias concurrentes, sabiendo que lo declarado puede no coincidir con lo consumido (Wood 2012). Ofrecer naloxona para llevar a casa cuando haya exposición a opioides (ficha de Nyxoid 4.1). La guía NEPTUNE (2015) reúne el manejo de los daños agudos y crónicos de estas sustancias; las fichas del atlas desarrollan cada familia.' });
    const li = F.box('lim', { x: X + 2 * (CW3 + 30), y, w: CW3, type: 'lim', fs: 18, align: 'left',
      title: 'Límites de esta figura',
      text: 'Esquema docente de orientación: no es un algoritmo diagnóstico ni terapéutico y no sustituye al juicio clínico, a los protocolos locales ni a la consulta con toxicología. Las familias se agrupan por conveniencia didáctica: el término NPS es de definición problemática (Peacock 2019) y el mercado cambia más rápido que la literatura. Los porcentajes vienen de series de casos y de registros toxicológicos, con sesgo hacia los casos graves y confirmación analítica desigual; no son riesgos poblacionales ni probabilidades individuales. No se incluyen dosis: solo principios y los límites literales de las fichas técnicas citadas. Lo no cotejado en una fuente primaria aparece marcado como tal.' });
    const h5 = Math.max(al.h, rd.h, li.h); [al, rd, li].forEach(b => { b.h = h5; });

    F.footer('Fuentes: Peacock 2019; Wood 2012 (a y b); Simmler 2013; Marusich 2014; Wood 2010; Regan 2011; Nugteren-van Lonkhuyzen 2022; Beck 2015 y 2016; Banks 2014; Vallersnes 2016; Castaneto 2014; Tai y Fantegrossi 2017; Tait 2016; van Amsterdam 2015; Every-Palmer 2011; CDC 2013; Manier 2023; Armenian 2018; Nielsen 2026; Amaducci 2023; Brunetti 2021; Gameli 2024; Penninga 2016; Roth 2013; Morris y Wallach 2014; Krystal 1994; Morgan y Curran 2012; Winstock 2012; Chu 2008; Halberstadt 2017; Suzuki 2015; Hill 2013; Herian 2023; Tittarelli 2015; Schep 2012; Galicia 2011; Liechti 2006; McDonough 2004; NEPTUNE 2015; CIE-11 (OMS, tabulación simple MMS 2025); DSM-5-TR; fichas técnicas AEMPS-CIMA de Nyxoid y Flumazenil B. Braun. Esquema docente de orientación y reducción de daños: no es una guía de consumo ni de tratamiento.');
    return F;
  }
};
