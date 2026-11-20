// Modelo: psicosis cicloides y psicosis fásicas en la clasificación de Leonhard; criterios de Perris y Brockington y relación con la CIE y el DSM.
// Compilar en prueba: node tools/fig.js mod_cicloides_leonhard --dry --png <carpeta>
const TITLE = 'Psicosis cicloides y psicosis fásicas en la clasificación de Leonhard: polos, curso, criterios de Perris y Brockington y lugar en la CIE y el DSM';
module.exports = {
  key: 'mod_cicloides_leonhard',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cinco bloques. 1) Escuela de Wernicke, Kleist y Leonhard y las cinco familias de psicosis endógenas de Leonhard (psicosis fásicas puras monopolares, enfermedad maníaco-depresiva, psicosis cicloides, esquizofrenias no sistemáticas y sistemáticas), con su curso, polaridad, peso relativo y agregación familiar según la revisión de Foucher y cols. (2020). 2) Las tres psicosis cicloides bipolares (angustia-felicidad, confusional excitada-inhibida y de la motilidad hipercinética-acinética), sus polos, su curso episódico con remisión completa sin defecto y su diferencia con la esquizofrenia no sistemática del mismo dominio. 3) Criterios operativos de Perris y Brockington (1981) y estudios que los aplican. 4) Relación con la enfermedad maníaco-depresiva, las esquizofrenias y las categorías oficiales: trastorno psicótico agudo y transitorio de la CIE-10 (F23) y la CIE-11 (6A23), trastorno psicótico breve del DSM y psicosis posparto. 5) Seguridad y tratamiento: exclusión de encefalitis autoinmune, riesgo de síndrome neuroléptico maligno en la psicosis de la motilidad, datos de TEC y fármacos, y contraindicaciones de ficha técnica del litio (Plenur) y del valproato (Depakine Crono). Las cifras proceden de series y revisiones de escuela, en su mayoría de Würzburg, Pamplona, Londres y Suecia. «[fuente no localizada]» y «[fuente oficial no localizada]» señalan lo que no se ha podido cotejar. Esquema docente: no sustituye al seguimiento longitudinal ni al juicio clínico.',
    refs: [
      'Leonhard K (1957). Aufteilung der endogenen Psychosen. Berlín: Akademie-Verlag [no verificada en el original]',
      'Perris C (1974). A study of cycloid psychoses. Acta Psychiatr Scand Suppl 253 [no indexada en PubMed; no verificada en el original]',
      'Perris C & Brockington IF (1981). Cycloid psychoses and their relation to the major psychoses. En: Perris C, Struwe G & Jansson B (eds). Biological Psychiatry 1981. Ámsterdam: Elsevier, pp. 447-450 [original no cotejado; criterios tomados de la tabla 1 de Giné Servén 2021]',
      'Brockington IF, Perris C & Meltzer HY (1982a). Cycloid psychoses: diagnosis and heuristic value. J Nerv Ment Dis 170:651-656 · PMID 7119764',
      'Brockington IF, Perris C, Kendell RE, Hillier VE & Wainwright S (1982b). The course and outcome of cycloid psychosis. Psychol Med 12:97-105 · PMID 7079434',
      'Foucher JR et al. (2020). Wernicke-Kleist-Leonhard phenotypes of endogenous psychoses: a review of their validity. Dialogues Clin Neurosci 22:37-49 · PMID 32699504',
      'Jabs BE, Pfuhlmann B, Bartsch AJ, Cetkovich-Bakmas MG & Stöber G (2002). Cycloid psychoses: from clinical concepts to biological foundations. J Neural Transm 109:907-919 · PMID 12111477',
      'Pfuhlmann B (1998a). Das Konzept der zykloiden Psychosen. Entwicklung, klinische Bedeutung und Stand der Forschung. Fortschr Neurol Psychiatr 66:1-9 · PMID 9530551',
      'Pfuhlmann B, Franzek E, Stöber G, Cetkovich-Bakmas M & Beckmann H (1997a). On interrater reliability for Leonhard\'s classification of endogenous psychoses. Psychopathology 30:100-105 · PMID 9168566',
      'Pfuhlmann B et al. (1997b). Die Bedeutung der differenzierten Analyse formaler Denkstörungen bei Verwirrtheitspsychose und Kataphasie: Inkohärenz der Themenwahl und Inkohärenz mit logischen und sprachlichen Fehlern. Fortschr Neurol Psychiatr 65:531-539 · PMID 9451565',
      'Pfuhlmann B, Jabs B, Althaus G et al. (2004). Cycloid psychoses are not part of a bipolar affective spectrum: results of a controlled family study. J Affect Disord 83:11-19 · PMID 15546641',
      'Pfuhlmann B, Stöber G, Franzek E & Beckmann H (1998b). Cycloid psychoses predominate in severe postpartum psychiatric disorders. J Affect Disord 50:125-134 · PMID 9858072',
      'Pfuhlmann B, Stöber G & Beckmann H (2002). Postpartum psychoses: prognosis, risk factors, and treatment. Curr Psychiatry Rep 4:185-190 · PMID 12003680',
      'Jabs BE et al. (2004). Differences in quality of life and course of illness between cycloid and schizophrenic psychoses - a comparative study. World J Biol Psychiatry 5:136-142 · PMID 15346537',
      'Franzek E & Beckmann H (1998). Different genetic background of schizophrenia spectrum psychoses: a twin study. Am J Psychiatry 155:76-83 · PMID 9433342',
      'Stöber G et al. (2000). Splitting schizophrenia: periodic catatonia-susceptibility locus on chromosome 15q15. Am J Hum Genet 67:1201-1207 · PMID 11001582',
      'Peralta V & Cuesta MJ (2003). Cycloid psychosis: a clinical and nosological study. Psychol Med 33:443-453 · PMID 12701665',
      'Peralta V, Cuesta MJ & Zandio M (2007). Cycloid psychosis: an examination of the validity of the concept. Curr Psychiatry Rep 9:184-192 · PMID 17521513',
      'Yadav DS (2010). Cycloid psychosis: Perris criteria revisited. Indian J Psychol Med 32:54-58 · PMID 21799561',
      'Giné Servén E et al. (2021). Cycloid psychosis as a psychiatric expression of anti-NMDAR encephalitis. A systematic review of case reports accomplished with the authors\' cooperation. Brain Behav 11:e01980 · PMID 33270360',
      'Holm J et al. (2017). Improvement of cycloid psychosis following electroconvulsive therapy. Nord J Psychiatry 71:405-410 · PMID 28367711',
      'García-Andrade RF & López-Ibor JJ (2015). Acute treatment of cycloid psychosis: study on a sample of naive hospitalized patients with first-episode psychosis (FEP). Actas Esp Psiquiatr 43:51-57 · PMID 25812542',
      'Castagnini A & Foldager L (2014). Epidemiology, course and outcome of acute polymorphic psychotic disorder: implications for ICD-11. Psychopathology 47:202-206 · PMID 24481421',
      'Castagnini A, Foldager L, Caffo E & Berrios GE (2022). The predictive validity and outcome of ICD-10 and DSM-5 short-lived psychotic disorders: a review and meta-analysis. Eur Arch Psychiatry Clin Neurosci 272:1157-1168 · PMID 34988647',
      'Schultze-Lutter F, Meisenzahl E & Michel C (2021). Psychotische Störungen in der ICD-11: die Revisionen. Z Kinder Jugendpsychiatr Psychother 49:453-462 · PMID 33287579',
      'Organización Mundial de la Salud (2025). CIE-11 para estadísticas de mortalidad y morbilidad (CIE-11 MMS), versión 2025-01, tabulación simple (icd.who.int): 6A23 «Acute and transient psychotic disorder» [definición clínica no cotejada en la fuente oficial]',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5.ª ed., texto revisado (DSM-5-TR). Washington, DC: APA Publishing [texto original no cotejado en esta figura]',
      'AEMPS-CIMA (2025). Ficha técnica de Plenur 400 mg comprimidos de liberación modificada (carbonato de litio), apartados 4.3 y 4.6 (cima.aemps.es)',
      'AEMPS-CIMA (2026). Ficha técnica de Depakine Crono 500 mg comprimidos de liberación prolongada (valproato sódico), apartado 4.3 (cima.aemps.es)'
    ],
    nodes: ['leonhard_hit', 'kleist_hit', 'wernicke_hit', 'psciclb', 'perris', 'pcicloid', 'wkl14', 'wkl15', 'wkl16', 'wkl13', 'wkl1', 'wkl2', 'wkl3', 'wkl4', 'wkl5', 'wkl6', 'wkl7', 'wkl8', 'wkl9', 'wkl10', 'wkl11', 'wkl12', 'wkl17', 'wkl18', 'wkl19', 'psbreve', 'tpsbr', 'bouf', 'ppp', 'nmda', 'snm', 'catatonia', 'tec_dep', 'lm_bip', 'perplejidad', 'teasqb', 'esq', 'tb1', 'pep', 'psicosis_causa_conocida']
  },
  draw(Fig) {
    const W = 2300, X = 60, IW = W - 2 * X, FS = 19;
    const F = new Fig({ key: 'mod_cicloides_leonhard', title: TITLE, w: W,
      desc: 'Cinco bloques: genealogía de Wernicke a Perris y tabla de las cinco familias de psicosis endógenas de Leonhard; las tres psicosis cicloides con sus dos polos, su curso sin defecto y su diferencia con la esquizofrenia no sistemática del mismo dominio; criterios operativos de Perris y Brockington y estudios de validez; relación con la enfermedad maníaco-depresiva, las esquizofrenias, la CIE-10, la CIE-11, el DSM y la psicosis posparto; y seguridad y tratamiento.' });
    const bot = (...bs) => Math.max(...bs.map(b => b.y + b.h));
    const eqH = (...bs) => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };

    // ---------- Bloque 1: escuela y familias ----------
    let y = F.band(100, 'De Wernicke a Perris: la escuela WKL y las cinco familias de psicosis endógenas de Leonhard', { n: 1 }) + 26;
    const HG = 70, HW = (IW - 3 * HG) / 4;
    const h1 = F.box('h_wer', { x: X, y, w: HW, type: 'info', fs: 18, node: 'wernicke_hit', title: 'Wernicke', text: 'Punto de partida de la escuela: Leonhard elabora el concepto de psicosis cicloide sobre hallazgos de Wernicke y Kleist (Pfuhlmann 1998a; Jabs 2002).' });
    const h2 = F.box('h_kle', { x: X + (HW + HG), y, w: HW, type: 'info', fs: 18, node: 'psciclb', title: 'Kleist', text: 'Describe psicosis «atípicas» episódicas que Kraepelin no lograba ubicar; Leonhard las ordena después (Jabs 2002; Pfuhlmann 1998a).' });
    const h3 = F.box('h_leo', { x: X + 2 * (HW + HG), y, w: HW, type: 'dx', fs: 18, node: 'leonhard_hit', title: 'Leonhard (1957)', text: 'Aufteilung der endogenen Psychosen: tres psicosis cicloides (Pfuhlmann 1998a) y psicosis fásicas puras separadas de la enfermedad maníaco-depresiva (Foucher 2020).' });
    const h4 = F.box('h_per', { x: X + 3 * (HW + HG), y, w: HW, type: 'info', fs: 18, node: 'perris', title: 'Perris (1974) y Perris y Brockington (1981)', text: 'La psicosis cicloide como entidad unitaria con criterios operativos (Peralta 2007), y examinados en comparación transcultural (Brockington 1982a).' });
    eqH(h1, h2, h3, h4);
    F.arrow(h1, h2, { from: 'r', to: 'l' }); F.arrow(h2, h3, { from: 'r', to: 'l' }); F.arrow(h3, h4, { from: 'r', to: 'l' });
    y = bot(h1) + 26;
    const tb = F.table({ x: X, y, fs: 18, cols: [{ w: 330, label: 'Familia (Leonhard)' }, { w: 520, label: 'Curso y polaridad' }, { w: 560, label: 'Formas' }, { w: 330, label: 'Peso entre las psicosis endógenas' }, { w: 440, label: 'Familiares de primer grado afectados' }], rows: [
      [{ t: 'Fásicas puras: melancolía y manía puras', node: 'wkl2' }, 'Remitente-recidivante. Monopolar: el cuadro se repite igual, sin estados mixtos ni incompletos; episodios de melancolía de unos 12 meses.', { t: 'Melancolía pura y manía pura: afectan también al impulso, al curso del pensamiento y a la psicomotricidad.', node: 'wkl1' }, 'Melancolía pura hasta 10 %; manía pura < 1 %.', '≈3 %, frente a 22-36 % en la enfermedad maníaco-depresiva.'],
      [{ t: 'Fásicas puras: depresiones y euforias puras', node: 'wkl5' }, 'Remitente-recidivante, monopolar; episodios de años, con inicio y final progresivos; menor respuesta al tratamiento.', { t: 'Cinco depresiones puras (agitada, hipocondríaca, autotorturante, suspicaz, apática) y cinco euforias puras.', node: 'wkl8' }, '4 % de los ingresos por psicosis endógena.', '≈3 %.'],
      [{ t: 'Enfermedad maníaco-depresiva', node: 'wkl13' }, 'Remitente-recidivante. Bipolar y polimorfa, con estados mixtos e incompletos; puede reconocerse aunque solo haya recaídas depresivas.', { t: 'Una sola entidad que puede imitar cuadros monopolares o cicloides, pero no de forma estable.', node: 'tb1' }, '19 %.', '22-36 %.'],
      [{ t: 'Psicosis cicloides', node: 'pcicloid' }, 'Remitente-recidivante sin residuo. Bipolar: oscilación cuantitativa dentro de un dominio; los polos se suceden y nunca coinciden.', { t: 'Angustia-felicidad (afecto), confusional excitada-inhibida (pensamiento) y de la motilidad hipercinética-acinética (psicomotricidad).', node: 'wkl14' }, '20 %.', '≈5 %, sin diferencia con controles.'],
      [{ t: 'Esquizofrenias no sistemáticas', node: 'wkl19' }, 'Progresiva-recidivante con residuo propio de cada forma. Bipolar con mezcla cualitativa de ambos polos.', { t: 'Parafrenia afectiva (afecto), catafasia (pensamiento y lenguaje) y catatonía periódica (psicomotricidad).', node: 'wkl17' }, '5 %, ≈8 % y ≈7 %.', 'Catatonía periódica 21-26 % y catafasia 15-25 %; locus en 15q15 para la catatonía periódica (Stöber 2000).'],
      [{ t: 'Esquizofrenias sistemáticas', node: 'esq' }, 'Progresiva e insidiosa. Monomorfa: tras 1-5 años queda un residuo estable de por vida.', { t: 'Hebefrenias (4), parafrenias sistemáticas (6) y catatonías sistemáticas (6).', node: 'wkl20' }, '21 % de los ingresos.', '2-4 %, sin diferencia con controles.']
    ] });
    y = F.text(X, tb.y + 30, 'Cifras de curso, frecuencia y agregación familiar de la tabla: revisión de la escuela WKL (Foucher 2020), que reúne series sobre todo alemanas; no son estimaciones poblacionales.', { fs: 17, w: IW }) + 14;
    const r1 = F.box('r_fiab', { x: X, y, w: (IW - 30) / 2, type: 'info', fs: 18, align: 'left', node: 'leonhard_hit', title: 'Fiabilidad y concordancia', text: 'En 22 pacientes con esquizofrenia según DSM-III-R y CIE-10, cuatro evaluadores asignaron los grandes grupos de Leonhard con κ de 0,82 y 0,89 (Pfuhlmann 1997a). La concordancia de la clasificación WKL con la CIE-10 es de λ = 0,4 y con el DSM-IV de 0,56 (Foucher 2020): agrupa a los pacientes de otra manera.' });
    const r2 = F.box('r_mono', { x: X + (IW - 30) / 2 + 30, y, w: (IW - 30) / 2, type: 'info', fs: 18, align: 'left', node: 'wkl3', title: '«Monopolar» no equivale a «unipolar»', text: 'Monopolar implica estabilidad del cuadro dentro y entre episodios, también en el polo maníaco. Como la enfermedad maníaco-depresiva puede diagnosticarse con solo recaídas depresivas, muchas depresiones «unipolares» del DSM serían maníaco-depresivas; y el trastorno bipolar del DSM incluye algunas psicosis cicloides (Foucher 2020).' });
    eqH(r1, r2);
    y = bot(r1) + 46;

    // ---------- Bloque 2: las tres psicosis cicloides ----------
    y = F.band(y, 'Las tres psicosis cicloides: dos polos dentro de un mismo dominio, sin defecto entre episodios', { n: 2 }) + 26;
    const CG = 50, CW = (IW - 2 * CG) / 3, PG = 70, PW = (CW - PG) / 2;
    const forms = [
      { id: 'angf', node: 'wkl14', t: 'Psicosis de angustia-felicidad', x: 'Dominio afectivo: oscilación entre angustia paranoide y éxtasis con sentimientos de elación (Pfuhlmann 1998a).',
        p1: { node: 'ansiedad', t: 'Polo de angustia', x: 'Angustia masiva que invade la vivencia, con ideas de referencia y de persecución (Pfuhlmann 1998a).' },
        p2: { node: 'euforia', t: 'Polo de felicidad', x: 'Felicidad o éxtasis profundos, a menudo de tono místico (Perris y Brockington 1981, en Giné Servén 2021).' },
        c: { node: 'wkl17', t: 'Frente a la parafrenia afectiva', x: 'En la forma no sistemática los polos se mezclan (desconfianza hostil y autoimportancia) y progresa un residuo de referencia irritada (Foucher 2020).' } },
      { id: 'conf', node: 'wkl15', t: 'Psicosis confusional excitada-inhibida', x: 'Dominio del pensamiento: trastorno formal con incoherencia en el polo excitado y perplejidad en el inhibido (Pfuhlmann 1998a).',
        p1: { node: 'incoher', t: 'Polo excitado', x: 'Incoherencia de la elección temática: falla la organización del discurso, no la lógica de cada idea (Pfuhlmann 1997b).' },
        p2: { node: 'perplejidad', t: 'Polo inhibido', x: 'Perplejidad e inhibición del pensamiento (Pfuhlmann 1998a); en los casos graves, pobreza de habla (Yadav 2010).' },
        c: { node: 'wkl18', t: 'Frente a la catafasia', x: 'Errores lógicos y lingüísticos (paragramatismo, parafasias, neologismos) que persisten como residuo (Pfuhlmann 1997b; Foucher 2020).' } },
      { id: 'moti', node: 'wkl16', t: 'Psicosis de la motilidad hipercinética-acinética', x: 'Dominio psicomotor: hipercinesia o acinesia puramente psicomotora, sobre todo de los movimientos expresivos y reactivos (Pfuhlmann 1998a).',
        p1: { node: 'catatonia', t: 'Polo hipercinético', x: 'Exceso de movimientos expresivos y reactivos; puede parecer una excitación catatónica (Pfuhlmann 1998a; Yadav 2010).' },
        p2: { node: 'estupor', t: 'Polo acinético', x: 'Pobreza de movimientos que puede parecer un estupor catatónico (Yadav 2010).' },
        c: { node: 'wkl19', t: 'Frente a la catatonía periódica', x: 'Mezcla cualitativa de acinesia e hipercinesia en distintas partes del cuerpo, paracinesias y residuo psicomotor (Foucher 2020).' } }
    ];
    const D = [], P1 = [], P2 = [], C = [];
    forms.forEach((f, i) => { D.push(F.box('d_' + f.id, { x: X + i * (CW + CG), y, w: CW, type: 'dx', fs: FS, node: f.node, title: f.t, text: f.x })); });
    eqH(...D); y = bot(...D) + 40;
    forms.forEach((f, i) => { const x0 = X + i * (CW + CG);
      P1.push(F.box('p1_' + f.id, { x: x0, y, w: PW, type: 'mec', fs: 18, node: f.p1.node, title: f.p1.t, text: f.p1.x }));
      P2.push(F.box('p2_' + f.id, { x: x0 + PW + PG, y, w: PW, type: 'mec', fs: 18, node: f.p2.node, title: f.p2.t, text: f.p2.x })); });
    eqH(...P1, ...P2);
    forms.forEach((f, i) => {
      F.arrow(D[i], P1[i], { from: 'b', to: 't', fa: 0.25 }); F.arrow(D[i], P2[i], { from: 'b', to: 't', fa: 0.75 });
      F.arrow(P1[i], P2[i], { from: 'r', to: 'l', fa: 0.4, fb: 0.4 }); F.arrow(P2[i], P1[i], { from: 'l', to: 'r', fa: 0.6, fb: 0.6 });
    });
    y = bot(...P1) + 30;
    forms.forEach((f, i) => { C.push(F.box('c_' + f.id, { x: X + i * (CW + CG), y, w: CW, type: 'info', fs: 18, node: f.c.node, title: f.c.t, text: f.c.x })); });
    eqH(...C); y = bot(...C) + 30;
    const QW = (IW - 2 * 30) / 3;
    const q1 = F.box('k_curso', { x: X, y, w: QW, type: 'dx', fs: 18, align: 'left', node: 'pcicloid', title: 'Curso común: episódico, remisión completa, sin defecto', text: 'Episodios de 1 a 3 meses, con inicio y final agudos en hasta dos tercios; en el intervalo, conciencia plena de enfermedad y sin síntomas residuales, sea cual sea el número de recaídas (Foucher 2020). Rápidos cambios de intensidad e incluso de polo dentro del mismo episodio (Foucher 2020).' });
    const q2 = F.box('k_evol', { x: X + QW + 30, y, w: QW, type: 'info', fs: 18, align: 'left', node: 'esq', title: 'Evolución frente a la esquizofrenia', text: 'Londres: 30 de 244 pacientes psicóticos cumplían criterios; evolución mejor que la del conjunto y mucho mejor que la esquizofrenia (Brockington 1982b). Würzburg, 13 años de media: 33 cicloides frente a 44 esquizofrenias, mejores CGI, GAF y PANSS y calidad de vida global sin diferencia con 48 controles (Jabs 2004).' });
    const q3 = F.box('k_vuln', { x: X + 2 * (QW + 30), y, w: QW, type: 'info', fs: 18, align: 'left', node: 'ppp', title: 'Desencadenantes', text: 'Más estresores psicosociales que en la esquizofrenia y los trastornos afectivos (Peralta y Cuesta 2003). En mujeres, el 88 % de los episodios empieza en la fase lútea, y las cicloides suponen el 60 % de las psicosis posparto (Foucher 2020).' });
    eqH(q1, q2, q3);
    y = bot(q1) + 46;

    // ---------- Bloque 3: criterios operativos ----------
    y = F.band(y, 'Criterios operativos de Perris y Brockington (1981) y estudios que los aplican', { n: 3 }) + 26;
    const LW = IW * 0.55, RW = IW - LW - 30;
    const k1 = F.box('crit', { x: X, y, w: LW, type: 'act', fs: 18, align: 'left', node: 'perris', title: 'Los cuatro criterios (se exigen A, B, C y D)',
      text: 'A. Episodio psicótico agudo, no relacionado con sustancias ni con organicidad cerebral, con inicio entre los 15 y los 50 años.\nB. Inicio súbito, en horas o, como mucho, en pocos días.\nC. Al menos 4 de: 1) confusión, de la perplejidad a la desorientación grave; 2) ideas delirantes no congruentes con el ánimo, sobre todo persecutorias; 3) alucinaciones, a menudo ligadas al miedo a morir; 4) angustia abrumadora, no ligada a situaciones; 5) felicidad o éxtasis profundos, a menudo místicos; 6) trastornos de la motilidad acinéticos o hipercinéticos; 7) preocupación particular por la muerte; 8) oscilaciones del ánimo insuficientes para un diagnóstico afectivo.\nD. Sin combinación fija de síntomas: el cuadro cambia a menudo durante el episodio.\n(Perris y Brockington 1981, citados en Giné Servén 2021; texto original no cotejado.)' });
    const k2 = F.box('peralta', { x: X + LW + 30, y, w: RW, type: 'info', fs: 18, align: 'left', node: 'pcicloid', title: 'Validez en 660 ingresos (Pamplona)', text: '68 pacientes (10,3 %) cumplían los criterios; 95 % de casos bien clasificados frente a otras psicosis; concordancia pobre con cada diagnóstico del DSM-III-R, el DSM-IV y la CIE-10 (κ < 0,22). Síntomas psicóticos, de desorganización y de primer rango comparables a la esquizofrenia; subgrupos afectivo (38) y no afectivo (30), con mejor evolución global del no afectivo (Peralta y Cuesta 2003).' });
    const k3 = F.box('dosconc', { x: X + LW + 30, y: bot(k2) + 24, w: RW, type: 'info', fs: 18, align: 'left', node: 'leonhard_hit', title: 'Dos conceptos que no coinciden', text: 'La psicosis cicloide de Leonhard (tres formas, diagnóstico por la constelación de síntomas y el curso) y la de Perris y Brockington (entidad unitaria, lista de síntomas) difieren en varias variables relevantes (Peralta 2007).' });
    const kh = Math.max(k1.h, bot(k3) - y); k1.h = kh; k3.h = kh - (k3.y - y);
    y = y + kh + 46;

    // ---------- Bloque 4: relación con la nosología ----------
    y = F.band(y, 'Relación con la enfermedad maníaco-depresiva, las esquizofrenias y las categorías oficiales', { n: 4 }) + 26;
    const AG = 110, AW = (IW - 2 * AG) / 3;
    const n1 = F.box('n_emd', { x: X, y, w: AW, type: 'dx', fs: 18, align: 'left', node: 'wkl13', title: '¿Parte del espectro bipolar? Debate abierto', text: 'Estudio familiar controlado (431 familiares de 45 cicloides, 32 maníaco-depresivos y 27 controles): menor riesgo de psicosis endógenas y de enfermedad maníaco-depresiva que en los familiares de maníaco-depresivos, sin diferencia con controles (Pfuhlmann 2004). En cambio, más cerca de los trastornos afectivos en la mayoría de variables clínicas y en el riesgo familiar de trastorno afectivo (Peralta y Cuesta 2003). Concordancia despreciable con el diagnóstico final de enfermedad maníaco-depresiva (Brockington 1982b).' });
    const n2 = F.box('n_cic', { x: X + AW + AG, y, w: AW, type: 'dx', fs: 18, node: 'pcicloid', title: 'Psicosis cicloide: sin categoría oficial', text: 'Entidad de curso vital, no de episodio: el diagnóstico se apoya en la remisión sin defecto y en la bipolaridad dentro de un dominio (Foucher 2020). Es heterogénea (Peralta y Cuesta 2003) y no está claro si es independiente de los trastornos afectivos mayores (Peralta 2007).' });
    const n3 = F.box('n_esq', { x: X + 2 * (AW + AG), y, w: AW, type: 'dx', fs: 18, align: 'left', node: 'wkl19', title: 'Separada de las esquizofrenias', text: 'Gemelos de Baja Franconia: concordancia en monocigóticos y dicigóticos de 38,5 % y 36,4 % en cicloides, frente a 88,9 % y 25,0 % en esquizofrenias no sistemáticas (Franzek y Beckmann 1998). Agregación familiar baja, frente a 21-26 % en la catatonía periódica (Foucher 2020).' });
    eqH(n1, n2, n3);
    F.arrow(n2, n1, { from: 'l', to: 'r', dash: true, label: 'discutida', lx: n1.x + n1.w + 14, ly: n2.y + n2.h / 2 - 12 });
    F.arrow(n2, n3, { from: 'r', to: 'l', label: 'curso', lx: n2.x + n2.w + 22, ly: n2.y + n2.h / 2 - 12 });
    y = bot(n1) + 50;
    const OW = (IW - 3 * 30) / 4;
    const o1 = F.box('o_f23', { x: X, y, w: OW, type: 'info', fs: 18, align: 'left', node: 'bouf', title: 'CIE-10 F23', text: 'El trastorno psicótico agudo y transitorio se diseñó para recoger las psicosis cicloides y la bouffée délirante, pero solo coincide con ellas en la mitad de los casos y define episodios, no un curso vital (Foucher 2020).' });
    const o2 = F.box('o_6a23', { x: X + OW + 30, y, w: OW, type: 'info', fs: 18, align: 'left', node: 'psbreve', title: 'CIE-11 6A23 (OMS 2025)', text: 'Restringido a la antigua forma polimorfa sin síntomas esquizofrénicos (F23.0) (Schultze-Lutter 2021), próxima a la bouffée y a la cicloide (Castagnini y Foldager 2014). Metaanálisis: 55 % mantiene el diagnóstico, 25 % pasa a esquizofrenia y afines y 12 % a trastornos afectivos en 6,3 años (Castagnini 2022).' });
    const o3 = F.box('o_dsm', { x: X + 2 * (OW + 30), y, w: OW, type: 'info', fs: 18, align: 'left', node: 'tpsbr', title: 'DSM: sin categoría', text: 'Con el DSM-III y los RDC, los casos londinenses quedaban como esquizoafectivos o afectivos con psicosis no congruente (Brockington 1982b); hoy suelen diagnosticarse de esquizoafectivos o esquizofrénicos (Foucher 2020). Estabilidad del trastorno psicótico breve: 45 % en 4,2 años (Castagnini 2022).' });
    const o4 = F.box('o_pp', { x: X + 3 * (OW + 30), y, w: OW, type: 'info', fs: 18, align: 'left', node: 'ppp', title: 'Psicosis posparto', text: '39 casos graves revisados a los 12,5 años de media: 54 % eran cicloides según Leonhard, con predominio de la psicosis de la motilidad; con la CIE-10, 28 % depresión unipolar y 21 % F23 (Pfuhlmann 1998b). Las cicloides predominan en la psicosis puerperal (Pfuhlmann 2002).' });
    eqH(o1, o2, o3, o4);
    { const ax = o2.x + o2.w * 0.62; F.arrow(n2, o2, { from: 'b', to: 't', fa: (ax - n2.x) / n2.w, fb: 0.62, label: 'solapamiento parcial', lx: ax + 12, ly: n2.y + n2.h + 30 }); }
    y = bot(o1) + 46;

    // ---------- Bloque 5: seguridad y tratamiento ----------
    y = F.band(y, 'Seguridad y tratamiento: lo que hay y lo que falta', { n: 5 }) + 26;
    const SW = (IW - 30) / 2;
    const s1 = F.box('s_nmda', { x: X, y, w: SW, type: 'warn', fs: 18, node: 'nmda', title: 'Antes de etiquetar: descartar causa orgánica', text: 'El criterio A excluye sustancias y organicidad. En 200 casos publicados de encefalitis anti-NMDAR con anticuerpos en LCR, el 87 % cumplía el fenotipo cicloide completo; los autores proponen estudiar el LCR en el primer episodio con este fenotipo (Giné Servén 2021).' });
    const s2 = F.box('s_snm', { x: X + SW + 30, y, w: SW, type: 'warn', fs: 18, node: 'snm', title: 'Psicosis de la motilidad y antipsicóticos', text: 'Los antipsicóticos acortan los episodios, pero en la psicosis de la motilidad se usan con cautela por el riesgo de síndrome neuroléptico maligno; estas personas son especialmente sensibles a los efectos adversos (Foucher 2020). Valorar catatonía como síndrome propio.' });
    eqH(s1, s2);
    y = bot(s1) + 24;
    const s3 = F.box('s_tx', { x: X, y, w: SW, type: 'act', fs: 18, align: 'left', node: 'tec_dep', title: 'Datos de tratamiento: sin ensayos controlados', text: 'No hay ensayos controlados (García-Andrade 2015). Registro sueco de TEC (42 pacientes con cicloide o psicosis polimorfa sin síntomas esquizofrénicos): respuesta 90,5 % y remisión 45,2 % (Holm 2017). Primer episodio sin tratamiento previo (75 pacientes): con antipsicóticos de segunda generación, más mejoría al alta en el grupo cicloide (García-Andrade 2015). Los estabilizadores se proponen en mantenimiento por opinión de escuela (Foucher 2020).' });
    const s4 = F.box('s_ft', { x: X + SW + 30, y, w: SW, type: 'drug', fs: 18, align: 'left', node: 'lm_bip', title: 'Fichas técnicas (relevantes en el posparto)', text: 'Litio: contraindicado en embarazo y lactancia (Plenur, ficha técnica 4.3). Valproato: contraindicado en el embarazo y, en personas con capacidad de gestar, salvo que se cumpla el Plan de Prevención de Embarazos (Depakine Crono, ficha técnica 4.3). La psicosis cicloide no figura como indicación de ningún fármaco [fuente oficial no localizada]: la pauta sigue las guías de primer episodio psicótico y de trastorno bipolar.' });
    eqH(s3, s4);
    y = bot(s3) + 40;

    F.box('lim', { x: X, y, w: IW, type: 'lim', fs: 18, align: 'left', title: 'Límites de la figura',
      text: 'Esquema docente de apoyo: no es un algoritmo diagnóstico ni terapéutico y no sustituye al seguimiento longitudinal ni al juicio clínico. La clasificación de Leonhard y la psicosis cicloide no son categorías oficiales del DSM-5-TR ni de la CIE-11; la mayor parte de los datos procede de la propia escuela WKL (Würzburg) y de series hospitalarias pequeñas, y las cifras no son extrapolables sin más. Los criterios de Perris y Brockington, el libro de Leonhard (1957), la monografía de Perris (1974), el texto del DSM-5-TR y la definición clínica de la CIE-11 no se han cotejado en su original: lo que depende de ellos se marca. No se indican fármacos de elección ni dosis: el tratamiento sigue las guías vigentes y las fichas técnicas.' });
    F.footer('Fuentes principales: Leonhard 1957; Perris 1974; Perris y Brockington 1981; Brockington, Perris y Meltzer 1982; Brockington, Perris, Kendell y cols. 1982; Foucher 2020; Jabs 2002 y 2004; Pfuhlmann 1997, 1998, 2002 y 2004; Franzek y Beckmann 1998; Stöber 2000; Peralta y Cuesta 2003; Peralta 2007; Giné Servén 2021; Holm 2017; García-Andrade 2015; Castagnini 2014 y 2022; Schultze-Lutter 2021; CIE-11 (OMS 2025); fichas técnicas de Plenur y Depakine Crono (AEMPS-CIMA). Referencias completas en la ficha de la figura. Esquema docente: no sustituye a la valoración clínica individual.');
    return F;
  }
};
