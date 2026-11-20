// Figura: modelo de estrés de minorías y salud mental LGTBIQ (Meyer 2003; Hatzenbuehler 2009; Testa 2015), con resiliencia, epidemiología e implicaciones clínicas.
// Compilar en prueba: node tools/fig.js mod_estres_minorias --dry --png <carpeta>
const TITLE = 'Estrés de minorías y salud mental de las personas LGTBIQ: procesos, resiliencia, datos epidemiológicos e implicaciones clínicas';
module.exports = {
  key: 'mod_estres_minorias',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cuatro bloques. 1) Cadena causal propuesta, de izquierda a derecha: el estigma estructural y los estresores distales (externos) generan estresores proximales (internos) según el modelo de estrés de minorías de Meyer (2003); el marco de mediación psicológica de Hatzenbuehler (2009) añade procesos generales, comunes a cualquier persona (desregulación emocional, problemas interpersonales y procesos cognitivos), por los que ese estrés se traduce en malestar y trastornos. Las flechas continuas significan «aumenta o se asocia a»; las discontinuas, desde la franja inferior, «amortigua» (factores de resiliencia). 2) Adaptación a las personas trans y de género diverso (modelo de estrés de minorías y resiliencia de género, Testa 2015). 3) Datos epidemiológicos de revisiones sistemáticas y metaanálisis, con su población y diseño. 4) Implicaciones clínicas: práctica afirmativa, evaluación centrada en el entorno, trabajo con familias, rechazo y prohibición legal de las terapias de conversión en España (Ley 4/2023), despatologización y chemsex. El exceso de malestar se atribuye al entorno social hostil, no a la orientación sexual ni a la identidad de género (Meyer 2003). Casi toda la evidencia es transversal, de autoinforme y estadounidense; las asociaciones no prueban causalidad. Esquema docente: no sustituye al juicio clínico. «[fuente no localizada]» señala lo que no se ha podido cotejar en una fuente primaria.',
    refs: [
      'Meyer IH (2003). Prejudice, social stress, and mental health in lesbian, gay, and bisexual populations: conceptual issues and research evidence. Psychol Bull 129:674-697 · PMID 12956539',
      'Hatzenbuehler ML (2009). How does sexual minority stigma "get under the skin"? A psychological mediation framework. Psychol Bull 135:707-730 · PMID 19702379 · texto completo cotejado en PMC (PMC2789474)',
      'Testa RJ, Habarth J, Peta J, Balsam K & Bockting W (2015). Development of the Gender Minority Stress and Resilience Measure. Psychol Sex Orientat Gend Divers 2:65-77 · doi 10.1037/sgd0000081 (no indexada en PubMed; metadatos cotejados en Crossref; componentes del modelo tomados de Testa 2017)',
      'Testa RJ et al. (2017). Suicidal ideation in transgender people: gender minority stress and interpersonal theory factors. J Abnorm Psychol 126:125-136 · PMID 27831708',
      'Pellicane MJ & Ciesla JA (2022). Associations between minority stress, depression, and suicidal ideation and attempts in transgender and gender diverse (TGD) individuals: systematic review and meta-analysis. Clin Psychol Rev 91:102113 · PMID 34973649',
      'Hatzenbuehler ML et al. (2010). The impact of institutional discrimination on psychiatric disorders in lesbian, gay, and bisexual populations: a prospective study. Am J Public Health 100:452-459 · PMID 20075314',
      'Raifman J et al. (2017). Difference-in-differences analysis of the association between state same-sex marriage policies and adolescent suicide attempts. JAMA Pediatr 171:350-356 · PMID 28241285',
      'Ryan C et al. (2009). Family rejection as a predictor of negative health outcomes in white and Latino lesbian, gay, and bisexual young adults. Pediatrics 123:346-352 · PMID 19117902',
      'Ryan C et al. (2010). Family acceptance in adolescence and the health of LGBT young adults. J Child Adolesc Psychiatr Nurs 23:205-213 · PMID 21073595',
      'Pachankis JE et al. (2020). Sexual orientation concealment and mental health: a conceptual and meta-analytic review. Psychol Bull 146:831-871 · PMID 32700941',
      'Newcomb ME & Mustanski B (2010). Internalized homophobia and internalizing mental health problems: a meta-analytic review. Clin Psychol Rev 30:1019-1029 · PMID 20708315',
      'Bockting WO et al. (2013). Stigma, mental health, and resilience in an online sample of the US transgender population. Am J Public Health 103:943-951 · PMID 23488522',
      'Russell ST et al. (2018). Chosen name use is linked to reduced depressive symptoms, suicidal ideation, and suicidal behavior among transgender youth. J Adolesc Health 63:503-505 · PMID 29609917',
      'King M et al. (2008). A systematic review of mental disorder, suicide, and deliberate self harm in lesbian, gay and bisexual people. BMC Psychiatry 8:70 · PMID 18706118',
      'Marshal MP et al. (2011). Suicidality and depression disparities between sexual minority and heterosexual youth: a meta-analytic review. J Adolesc Health 49:115-123 · PMID 21783042',
      'Marshal MP et al. (2008). Sexual orientation and adolescent substance use: a meta-analysis and methodological review. Addiction 103:546-556 · PMID 18339100',
      'di Giacomo E et al. (2018). Estimating the risk of attempted suicide among sexual minority youths: a systematic review and meta-analysis. JAMA Pediatr 172:1145-1152 · PMID 30304350',
      'Plöderl M & Tremblay P (2015). Mental health of sexual minorities. A systematic review. Int Rev Psychiatry 27:367-385 · PMID 26552495',
      'Kohnepoushi P et al. (2023). Prevalence of suicidal thoughts and attempts in the transgender population of the world: a systematic review and meta-analysis. Ann Gen Psychiatry 22:28 · PMID 37543583',
      'Maxwell S, Shahmanesh M & Gafos M (2019). Chemsex behaviours among men who have sex with men: a systematic review of the literature. Int J Drug Policy 63:74-89 · PMID 30513473',
      'Lafortune D et al. (2021). Psychological and interpersonal factors associated with sexualized drug use among men who have sex with men: a mixed-methods systematic review. Arch Sex Behav 50:427-460 · PMID 33108566',
      'Turban JL, Beckwith N, Reisner SL & Keuroghlian AS (2020). Association between recalled exposure to gender identity conversion efforts and psychological distress and suicide attempts among transgender adults. JAMA Psychiatry 77:68-76 · PMID 31509158',
      'Pachankis JE et al. (2015). LGB-affirmative cognitive-behavioral therapy for young adult gay and bisexual men: a randomized controlled trial of a transdiagnostic minority stress approach. J Consult Clin Psychol 83:875-889 · PMID 26147563',
      'American Psychological Association (2012). Guidelines for psychological practice with lesbian, gay, and bisexual clients. Am Psychol 67:10-42 · PMID 21875169 · contenido de las directrices no cotejado (sin resumen en PubMed)',
      'American Psychological Association (2015). Guidelines for psychological practice with transgender and gender nonconforming people. Am Psychol 70:832-864 · PMID 26653312',
      'Drescher J (2015). Out of DSM: depathologizing homosexuality. Behav Sci (Basel) 5:565-575 · PMID 26690228',
      'Organización Mundial de la Salud (2025). CIE-11 para estadísticas de mortalidad y morbilidad, tabulación simple oficial (MMS): capítulo 17, Afecciones relacionadas con la salud sexual; HA60 Incongruencia de género en la adolescencia o la edad adulta; HA61 Incongruencia de género en la infancia',
      'Ley 4/2023, de 28 de febrero (2023), para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI. BOE núm. 51, de 1 de marzo de 2023 (BOE-A-2023-5366), arts. 17, 79.4.d y 80.3 · texto consolidado cotejado en boe.es (noviembre de 2026)'
    ],
    nodes: ['competencia_cult', 'racismo_sm', 'carga_alostatica', 'hooker_hit', 'dsd', 'dg_inf', 'prot_unif', 'sdu', 'red_danos', 'cssrs', 'autolesion', 'ptsd', 'derrota_soc']
  },
  draw(Fig) {
    const W = 2300, X = 60, FW = W - 2 * X, FS = 18;
    const F = new Fig({ key: 'mod_estres_minorias', title: TITLE, w: W,
      desc: 'Modelo de estrés de minorías: estigma estructural, estresores distales (discriminación, violencia, rechazo familiar, no afirmación de la identidad de género) y proximales (expectativa de rechazo, ocultación, homofobia o transfobia interiorizada), mediadores psicológicos generales (desregulación emocional, problemas interpersonales, procesos cognitivos) y consecuencias (depresión, ansiedad, conducta suicida, consumo de sustancias, chemsex), con factores de resiliencia que amortiguan. Tabla del modelo de estrés de minorías de género, tabla de datos epidemiológicos y recuadros de implicaciones clínicas, terapias de conversión y su prohibición en España, y límites.' });
    const eq = bs => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };
    // Columna: marco con rótulo y cajas apiladas. items: [id, opciones]
    const col = (x, y0, w, label, items, gapIn) => {
      let yy = y0 + 44; const bs = [];
      items.forEach(([id, o]) => { const b = F.box(id, Object.assign({ x: x + 14, y: yy, w: w - 28, fs: FS }, o)); bs.push(b); yy += b.h + (gapIn || 16); });
      return { x, y: y0, w, h: yy - y0, bs, label };
    };

    // ---------- Bloque 1 ----------
    let y = F.band(90, 'Estrés de minorías (Meyer 2003) y marco de mediación psicológica (Hatzenbuehler 2009)', { n: 1 }) + 30;
    y = F.text(X, y, 'El estigma, el prejuicio y la discriminación crean un entorno social hostil y estresante que causa problemas de salud mental (Meyer 2003): el exceso de malestar se explica por el entorno, no por la orientación sexual ni por la identidad de género. El estrés de minorías se suma a los estresores generales que vive cualquier persona (Meyer 2003, citado en Hatzenbuehler 2009). Flecha continua: «aumenta o se asocia a»; flecha discontinua: «amortigua».', { fs: 19, w: FW }) + 26;

    const CW = 392, CG = 55, cx = i => X + i * (CW + CG);
    const y0 = y;
    const c1 = col(cx(0), y0, CW, '1 · Estigma estructural', [
      ['s1', { type: 'info', node: 'estigma', title: 'Leyes y políticas discriminatorias',
        text: 'Tras las prohibiciones del matrimonio entre personas del mismo sexo de 2004-2005 en EE. UU., aumentaron en las personas LGB de esos estados los trastornos del ánimo (36,6 %), la ansiedad generalizada (248,2 %) y los trastornos por alcohol (41,9 %); no en los demás estados ni en las personas heterosexuales (Hatzenbuehler 2010; estudio prospectivo poblacional).' }],
      ['s2', { type: 'info', node: 'determ_soc_sm', title: 'Políticas protectoras',
        text: 'La aprobación del matrimonio igualitario se asoció a 0,6 puntos porcentuales menos de intentos de suicidio en secundaria (7 % relativo), concentrados en el alumnado de minorías sexuales (Raifman 2017; 762 678 estudiantes; diferencias en diferencias).' }]
    ]);
    const c2 = col(cx(1), y0, CW, '2 · Estresores distales (externos)', [
      ['d1', { type: 'dx', node: 'trauma', title: 'Sucesos de prejuicio: discriminación y violencia',
        text: 'Experiencias de prejuicio y discriminación por la orientación (Meyer 2003); en personas trans, discriminación y victimización (Testa 2017).' }],
      ['d2', { type: 'dx', node: 'acoso_esc', title: 'Rechazo familiar y del entorno',
        text: 'Mucho rechazo familiar en la adolescencia: 8,4 veces más intentos de suicidio y 5,9 veces más depresión elevada que poco o ninguno (Ryan 2009; 224 jóvenes LGB; retrospectivo).' }],
      ['d3', { type: 'dx', node: 'wpath_soc8', title: 'No afirmación de la identidad de género',
        text: 'Estresor distal propio de las personas trans y de género diverso (Testa 2017); véase el bloque 2.' }]
    ]);
    const c3 = col(cx(2), y0, CW, '3 · Estresores proximales (internos)', [
      ['p1', { type: 'dx', node: 'hipervig', title: 'Expectativa de rechazo',
        text: 'Anticipar el rechazo por la identidad estigmatizada (Meyer 2003). En personas trans, junto con la transfobia interiorizada, el estresor con mayor asociación a depresión y suicidalidad (Pellicane 2022).' }],
      ['p2', { type: 'dx', title: 'Ocultación',
        text: '193 estudios (n = 92 236): asociación pequeña con problemas internalizantes (r = 0,126) y pequeña e inversa con problemas de consumo (r = −0,061): ocultar protege de la discriminación pero aísla (Pachankis 2020).' }],
      ['p3', { type: 'dx', node: 'genero', title: 'Homofobia o transfobia interiorizada',
        text: '31 estudios (n = 5831): efecto pequeño a moderado sobre depresión y ansiedad, mayor sobre la depresión (Newcomb 2010).' }]
    ]);
    const c4 = col(cx(3), y0, CW, '4 · Mediadores generales', [
      ['m1', { type: 'mec', node: 'rumiacion_persev', title: 'Desregulación emocional', text: 'rumiación, supresión emocional' }],
      ['m2', { type: 'mec', node: 'soledad', title: 'Problemas sociales e interpersonales', text: 'aislamiento social' }],
      ['m3', { type: 'mec', node: 'indefension', title: 'Procesos cognitivos', text: 'desesperanza, baja autoestima' }],
      ['m4', { type: 'info', title: 'Procesos comunes a todas las personas',
        text: 'El estrés ligado al estigma los eleva y ellos median su efecto; son dianas tratables con TCC (Hatzenbuehler 2009).' }]
    ], 20);
    const c5 = col(cx(4), y0, CW, '5 · Consecuencias (bloque 3)', [
      ['o1', { type: 'dx', node: 'ddm', title: 'Depresión' }],
      ['o2', { type: 'dx', node: 'tag', title: 'Trastornos de ansiedad' }],
      ['o3', { type: 'warn', node: 'ideac_suic', title: 'Ideación e intentos de suicidio' }],
      ['o4', { type: 'dx', node: 'tcs', title: 'Consumo de alcohol y otras sustancias', text: 'el alcohol, con resultados dispares en hombres (Plöderl 2015)' }],
      ['o5', { type: 'dx', node: 'chemsex_s', title: 'Chemsex',
        text: 'en hombres GBHSH; entre sus motivos, afrontar emociones dolorosas o estrés y buscar pertenencia (Lafortune 2021)' }]
    ]);
    const cols = [c1, c2, c3, c4, c5];
    const ch = Math.max(...cols.map(c => c.h));
    cols.forEach(c => { c.h = ch; F.group({ x: c.x, y: c.y, w: c.w, h: c.h, label: c.label }); });
    for (let i = 0; i < 4; i++) F.arrow(cols[i], cols[i + 1], { from: 'r', to: 'l', fa: 0.42, fb: 0.42 });

    // Franja de resiliencia
    y = y0 + ch + 70;
    const RW = (cx(3) + CW - X - 3 * 30) / 4;
    const rbs = [
      F.box('r1', { x: X + 14, y: y + 44, w: RW - 14, type: 'act', fs: FS, node: 'interv_fam', title: 'Aceptación familiar',
        text: 'Se asoció a más autoestima, apoyo social y salud general, y a menos depresión, consumo e ideación y conducta suicidas (Ryan 2010; 245 jóvenes LGBT; retrospectivo).' }),
      F.box('r2', { x: X + RW + 30, y: y + 44, w: RW, type: 'act', fs: FS, title: 'Apoyo entre iguales y conexión comunitaria',
        text: 'En 1093 personas trans, el apoyo de otras personas trans moderó la relación entre estigma y malestar psicológico (Bockting 2013).' }),
      F.box('r3', { x: X + 2 * (RW + 30), y: y + 44, w: RW, type: 'act', fs: FS, title: 'Afirmación de la identidad de género',
        text: 'Usar el nombre elegido en más contextos se asoció a menos depresión, ideación y conducta suicidas (Russell 2018; 129 jóvenes trans).' }),
      F.box('r4', { x: X + 3 * (RW + 30), y: y + 44, w: RW - 14, type: 'act', fs: FS, node: 'lgb_afirm', title: 'Afrontamiento y recursos del grupo',
        text: 'El modelo incluye procesos de afrontamiento que mitigan el estrés (Meyer 2003); la práctica afirmativa los refuerza (bloque 4).' })
    ];
    eq(rbs);
    const rg = { x: X, y, w: cx(3) + CW - X, h: rbs[0].h + 60 };
    F.group({ x: rg.x, y: rg.y, w: rg.w, h: rg.h, label: 'Factores de resiliencia (amortiguan)' });
    F.arrow(rg, c3, { from: 't', to: 'b', fa: (cx(2) + CW / 2 - X) / rg.w, dash: true, label: 'amortigua' });
    F.arrow(rg, c4, { from: 't', to: 'b', fa: (cx(3) + CW / 2 - X) / rg.w, dash: true, label: 'amortigua' });
    const n5 = F.box('n5', { x: cx(4), y, w: CW, type: 'info', fs: 17, title: 'Interseccionalidad',
      text: 'Las personas bisexuales son el subgrupo de mayor riesgo en la mayoría de los estudios (Plöderl 2015). El rechazo familiar fue mayor en hombres latinos (Ryan 2009).' });
    y = Math.max(rg.y + rg.h, n5.y + n5.h) + 60;

    // ---------- Bloque 2 ----------
    y = F.band(y, 'Estrés de minorías y resiliencia de género (Testa 2015): personas trans y de género diverso', { n: 2 }) + 18;
    const t2 = F.table({ x: X, y, fs: 18,
      cols: [{ w: 330, label: 'Componente' }, { w: 640, label: 'Contenido' }, { w: 1210, label: 'Qué se sabe' }],
      rows: [
        [{ t: 'Estresores distales (externos)', node: 'incong_gen' }, 'Discriminación, rechazo, victimización y no afirmación de la identidad de género (Testa 2017).',
          'En 816 adultos trans y de género diverso, todos se asociaron a ideación suicida actual; el rechazo, la no afirmación y la victimización, a través de la transfobia interiorizada y las expectativas negativas (Testa 2017; muestra de conveniencia, transversal).'],
        ['Estresores proximales (internos)', 'Transfobia interiorizada, expectativas negativas y no revelación de la identidad (Testa 2017).',
          '85 estudios transversales: estrés distal, expectativas de rechazo, transfobia interiorizada y ocultación se asociaron a más depresión, ideación e intentos de suicidio; efectos mayores para las expectativas de rechazo y la transfobia interiorizada (Pellicane 2022).'],
        [{ t: 'Vía interpersonal', node: 'ideac_suic' }, 'Pertenencia frustrada y sensación de ser una carga (teoría interpersonal del suicidio).',
          'Median la relación de la transfobia interiorizada y las expectativas negativas con la ideación suicida (Testa 2017).'],
        [{ t: 'Resiliencia', node: 'wpath_soc8' }, 'Apoyo de iguales, apoyo familiar, orgullo identitario y afirmación de género.',
          'Apoyo de otras personas trans como moderador (Bockting 2013); nombre elegido (Russell 2018). La escala GMSR incluye también factores de resiliencia (Testa 2015) [componentes no cotejados en el texto original].']
      ] });
    y = t2.y + 60;

    // ---------- Bloque 3 ----------
    y = F.band(y, 'Datos epidemiológicos: revisiones sistemáticas y metaanálisis (comparación con población heterosexual o cisgénero)', { n: 3 }) + 18;
    const t3 = F.table({ x: X, y, fs: 17.5,
      cols: [{ w: 360, label: 'Resultado' }, { w: 620, label: 'Población y diseño' }, { w: 830, label: 'Dato' }, { w: 370, label: 'Fuente' }],
      rows: [
        [{ t: 'Intentos de suicidio a lo largo de la vida', node: 'ideac_suic' }, 'Adultos LGB: 25 estudios poblacionales con grupo heterosexual (11 971 no heterosexuales; 214 344 heterosexuales).', 'RR 2,47 (IC 95 % 1,87-3,28); en hombres gais y bisexuales, RR 4,28 (2,32-7,88).', 'King 2008'],
        [{ t: 'Depresión y trastornos de ansiedad', node: 'ddm' }, 'Mismo metaanálisis; prevalencia a 12 meses o a lo largo de la vida.', 'Riesgo al menos 1,5 veces mayor (RR 1,54-2,58).', 'King 2008'],
        [{ t: 'Dependencia de alcohol y otras sustancias', node: 'alcohol' }, 'Mismo metaanálisis; 12 meses.', 'RR 1,51-4,00; en mujeres lesbianas y bisexuales, alcohol RR 4,00 y drogas RR 3,50.', 'King 2008'],
        [{ t: 'Suicidalidad y depresión en la adolescencia', node: 'suic_adol' }, 'Metaanálisis de estudios con edad media inferior a 18 años.', 'Suicidalidad OR 2,92, creciente con la gravedad: ideación 1,96; intentos 3,18; intentos con atención médica 4,17. Síntomas depresivos d = 0,33.', 'Marshal 2011'],
        ['Intentos de suicidio en la adolescencia por subgrupo', '35 estudios; 113 468 adolescentes de minorías sexuales y 2 378 987 heterosexuales.', 'OR 3,50 global; 3,71 homosexuales; 4,87 bisexuales; 5,87 jóvenes trans (un solo estudio).', 'di Giacomo 2018'],
        [{ t: 'Consumo de sustancias en la adolescencia', node: 'tcs' }, '18 estudios; casi ninguno controló factores de confusión.', 'OR 2,89; mayor en bisexuales y en chicas.', 'Marshal 2008'],
        ['Subgrupos y excepciones', '199 estudios de varias regiones y etapas vitales.', 'Riesgo mayor de depresión, ansiedad, suicidio y problemas por sustancias en la mayoría; bisexuales, el subgrupo de mayor riesgo; alcohol: efectos nulos o inversos en muchos estudios, sobre todo en hombres.', 'Plöderl 2015'],
        [{ t: 'Personas trans: depresión y ansiedad', node: 'tag' }, '1093 personas trans; muestra en línea de EE. UU. (2003), sin grupo de comparación.', 'Depresión clínica 44,1 %; ansiedad 33,2 %; somatización 27,5 %.', 'Bockting 2013'],
        ['Personas trans: conducta suicida', '65 estudios transversales, sobre todo muestras de conveniencia; heterogeneidad alta.', 'Ideación a lo largo de la vida 50 % (IC 95 % 42-57 %); intentos a lo largo de la vida 29 % (25-34 %).', 'Kohnepoushi 2023'],
        [{ t: 'Chemsex', node: 'chemsex_ssex' }, '38 estudios en HSH de países de renta alta.', 'Prevalencias muy heterogéneas según el muestreo; más frecuente en HSH con VIH; más sexo anal sin preservativo.', 'Maxwell 2019']
      ] });
    y = t3.y + 12;
    y = F.text(X, y + 16, 'RR: razón de riesgos; OR: odds ratio; d: diferencia de medias estandarizada; HSH: hombres que tienen sexo con hombres; GBHSH: gais, bisexuales y otros HSH. Casi no hay datos poblacionales españoles [fuente no localizada].', { fs: 17, w: FW, fill: '#333' }) + 40;

    // ---------- Bloque 4 ----------
    y = F.band(y, 'Implicaciones clínicas', { n: 4 }) + 30;
    const IW = (FW - 2 * 40) / 3, ix = i => X + i * (IW + 40);
    const row1 = [
      F.box('i1', { x: ix(0), y, w: IW, type: 'act', fs: FS, align: 'left', node: 'lgb_afirm', title: 'Práctica afirmativa',
        text: 'Directrices de la APA para la práctica psicológica con personas LGB (APA 2012) y con personas trans y de género no conforme: 16 directrices en cinco bloques, uno sobre estigma, discriminación y barreras de acceso (APA 2015). Una TCC transdiagnóstica adaptada al estrés de minorías redujo síntomas depresivos y problemas con el alcohol frente a lista de espera en 63 hombres gais y bisexuales jóvenes (Pachankis 2015; evidencia preliminar).' }),
      F.box('i2', { x: ix(1), y, w: IW, type: 'act', fs: FS, align: 'left', node: 'suic_adol', title: 'Evaluación centrada en el entorno',
        text: 'Explorar la orientación sexual y la historia psicosocial para identificar factores de riesgo asociados, y promover la prevención con la persona joven y su familia (Marshal 2011). Preguntar por estresores distales y proximales, apoyos y exposición a prácticas de conversión, sin tratar la orientación ni la identidad como problema [fuente no localizada para una pauta de evaluación común].' }),
      F.box('i3', { x: ix(2), y, w: IW, type: 'act', fs: FS, align: 'left', node: 'ter_fam_inf', title: 'Trabajo con las familias',
        text: 'Valorar las conductas familiares de rechazo, informar a las familias de su impacto, ofrecer orientación anticipatoria y derivar a apoyo y asesoramiento (Ryan 2009). La aceptación familiar es protectora (Ryan 2010).' })
    ];
    eq(row1);
    y += row1[0].h + 34;
    const row2 = [
      F.box('w1', { x: ix(0), y, w: IW, type: 'warn', fs: FS, align: 'left', node: 'ecosieg', title: 'Terapias de conversión: dañinas y prohibidas',
        text: 'En 27 715 personas trans, el 19,6 % de quienes habían hablado de su identidad con un profesional refirió esfuerzos de conversión; se asociaron a malestar psicológico grave (ORa 1,56) y a intentos de suicidio (ORa 2,27; 4,15 si fueron antes de los 10 años) (Turban 2020; transversal). La Ley 4/2023 las prohíbe incluso con consentimiento (art. 17); promoverlas o practicarlas es infracción muy grave (art. 79.4.d), con multa de 10 001 a 150 000 € (art. 80.3).' }),
      F.box('i4', { x: ix(1), y, w: IW, type: 'info', fs: FS, align: 'left', node: 'homosex_hist', title: 'Despatologización',
        text: 'La Asociación Americana de Psiquiatría retiró la homosexualidad del DSM-II en 1973 (Drescher 2015). La CIE-11 sitúa la incongruencia de género (HA60, HA61) en el capítulo 17, «Afecciones relacionadas con la salud sexual», fuera de los trastornos mentales (CIE-11 MMS).' }),
      F.box('i5', { x: ix(2), y, w: IW, type: 'act', fs: FS, align: 'left', node: 'chemsex_atencion', title: 'Chemsex y consumo sin estigma',
        text: 'Entender el consumo sexualizado también como afrontamiento de emociones dolorosas, estrés y necesidad de pertenencia (Lafortune 2021); atención sin juicio sobre la sexualidad, con reducción de daños y coordinación con salud sexual [fuente no localizada en este módulo; véanse las fichas de chemsex].' })
    ];
    eq(row2);
    y += row2[0].h + 50;
    F.box('lim', { x: X, y, w: FW, type: 'lim', fs: FS, align: 'left', title: 'Límites',
      text: 'Esquema docente, no algoritmo: no sustituye al juicio clínico. La mayor parte de la evidencia es transversal, de autoinforme, con muestras de conveniencia y estadounidense, lo que impide afirmar causalidad y expone a sesgos de selección y de recuerdo; las excepciones parciales son el estudio prospectivo de Hatzenbuehler 2010 y el diseño cuasiexperimental de Raifman 2017. Los tamaños de efecto de los procesos proximales son pequeños (Pachankis 2020; Newcomb 2010). Las personas bisexuales, trans, no binarias e intersexuales, las mujeres y las minorías étnicas están infrarrepresentadas, y la evidencia sobre chemsex se limita a HSH. La prevalencia de conducta suicida en personas trans procede de un metaanálisis de calidad metodológica limitada (Kohnepoushi 2023). Las cifras describen grupos, no a cada persona: la mayoría de las personas LGTBIQ no presenta trastornos mentales.' });

    F.footer('Fuentes principales: Meyer 2003; Hatzenbuehler 2009 y 2010; Testa 2015 y 2017; Pellicane 2022; Raifman 2017; Ryan 2009 y 2010; Pachankis 2015 y 2020; Newcomb 2010; Bockting 2013; Russell 2018; King 2008; Marshal 2008 y 2011; di Giacomo 2018; Plöderl 2015; Kohnepoushi 2023; Maxwell 2019; Lafortune 2021; Turban 2020; APA 2012 y 2015; Drescher 2015; CIE-11 (OMS); Ley 4/2023 (BOE-A-2023-5366). Esquema docente: no sustituye al juicio clínico.');
    return F;
  }
};
