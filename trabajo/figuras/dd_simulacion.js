// Figura: simulación, trastorno facticio y presentaciones somáticas en el contexto pericial (diagnóstico diferencial).
// Compilar en prueba: node tools/fig.js dd_simulacion --dry --png <carpeta>
const TITLE = 'Simulación, trastorno facticio y presentaciones somáticas en el contexto pericial';
module.exports = {
  key: 'dd_simulacion',
  meta: {
    title: TITLE,
    kind: 'dd',
    cap: 'Diferencial en cinco bloques. 1) Tres preguntas ordenan el diferencial: si una enfermedad médica explica el cuadro, si la producción de los síntomas es intencionada y si hay un incentivo externo que la explique; la simulación es una conclusión sobre una conducta (CIE-11 QC30), no un trastorno mental, y una presentación inválida no equivale a simulación. 2) Indicadores de sospecha: orientan la exploración, pero ninguno prueba intención. 3) Criterios de Slick (1999) y su revisión multidimensional (Sherman 2020). 4) Evidencia y límites de las pruebas de validez de síntomas (SVT) y de rendimiento (PVT): SIMS, TOMM, SIRS-2 y escalas de sobrerrepresentación del MMPI-2-RF. 5) Principios periciales y marco procesal español. Los símbolos ●●○ y ●○○ gradúan la solidez de la evidencia de cada prueba en contexto pericial; «[fuente no localizada]» y «[no verificada]» señalan lo que no se ha podido cotejar en una fuente primaria. Esquema docente: no sustituye al juicio clínico ni pericial.',
    refs: [
      'Slick DJ, Sherman EM & Iverson GL (1999). Diagnostic criteria for malingered neurocognitive dysfunction: proposed standards for clinical practice and research. Clin Neuropsychol 13:545-561 · PMID 10806468',
      'Sherman EMS, Slick DJ & Iverson GL (2020). Multidimensional malingering criteria for neuropsychological assessment: a 20-year update of the malingered neuropsychological dysfunction criteria. Arch Clin Neuropsychol 35:735-764 · PMID 32377667',
      'Sweet JJ et al. (2021). American Academy of Clinical Neuropsychology (AACN) 2021 consensus statement on validity assessment: update of the 2009 AACN consensus conference statement on neuropsychological assessment of effort, response bias, and malingering. Clin Neuropsychol 35:1053-1106 · PMID 33823750',
      'Larrabee GJ (2008). Aggregation across multiple indicators improves the detection of malingering: relationship to likelihood ratios. Clin Neuropsychol 22:666-679 · PMID 17886147',
      'Bass C & Halligan P (2014). Factitious disorders and malingering: challenges for clinical assessment and management. Lancet 383:1422-1432 · PMID 24612861',
      'Mittenberg W et al. (2002). Base rates of malingering and symptom exaggeration. J Clin Exp Neuropsychol 24:1094-1102 · PMID 12650234',
      'Rogers R (1990). Development of a new classificatory model of malingering. Bull Am Acad Psychiatry Law 18:323-333 · PMID 2245247',
      'van Impelen A et al. (2014). The Structured Inventory of Malingered Symptomatology (SIMS): a systematic review and meta-analysis. Clin Neuropsychol 28:1336-1365 · PMID 25494444',
      'Martin PK et al. (2020). A systematic review and meta-analysis of the Test of Memory Malingering in adults: two decades of deception detection. Clin Neuropsychol 34:88-119 · PMID 31357918',
      'Green D & Rosenfeld B (2011). Evaluating the gold standard: a review and meta-analysis of the Structured Interview of Reported Symptoms. Psychol Assess 23:95-107 · PMID 21381842',
      'Tylicki JL et al. (2018). Comparability of Structured Interview of Reported Symptoms (SIRS) and Structured Interview of Reported Symptoms-Second Edition (SIRS-2) classifications with external response bias criteria. Psychol Assess 30:1144-1159 · PMID 29389175',
      'Ingram PB & Ternes MS (2016). The detection of content-based invalid responding: a meta-analysis of the MMPI-2-Restructured Form\'s (MMPI-2-RF) over-reporting validity scales. Clin Neuropsychol 30:473-496 · PMID 27214667',
      'McWhirter L et al. (2020). Performance validity test failure in clinical populations: a systematic review. J Neurol Neurosurg Psychiatry 91:945-952 · PMID 32651247',
      'Dandachi-FitzGerald B, Ponds RW & Merten T (2013). Symptom validity and neuropsychological assessment: a survey of practices and beliefs of neuropsychologists in six European countries. Arch Clin Neuropsychol 28:771-783 · PMID 24047545',
      'Smith GP & Burger GK (1997). Detection of malingering: validation of the Structured Inventory of Malingered Symptomatology (SIMS). J Am Acad Psychiatry Law 25:183-189 · PMID 9213290',
      'Dieguez S (2018). Ganser syndrome. Front Neurol Neurosci 42:1-22 · PMID 29151087',
      'Kanaan R et al. (2009). In the psychiatrist\'s chair: how neurologists understand conversion disorder. Brain 132:2889-2896 · PMID 19321463',
      'Stone J et al. (2005). Systematic review of misdiagnosis of conversion symptoms and "hysteria". BMJ 331:989 · PMID 16223792',
      'Yates GP & Feldman MD (2016). Factitious disorder: a systematic review of 455 cases in the professional literature. Gen Hosp Psychiatry 41:20-28 · PMID 27302720',
      'Sheridan MS (2003). The deceit continues: an updated literature review of Munchausen syndrome by proxy. Child Abuse Negl 27:431-451 · PMID 12686328',
      'Murrie DC et al. (2013). Are forensic experts biased by the side that retained them? Psychol Sci 24:1889-1897 · PMID 23969777',
      'Organización Mundial de la Salud (2025). CIE-11 para estadísticas de mortalidad y morbilidad (MMS), tabulación simple de la versión 2025-01: 6B23, 6B60, 6C20, 6D50, 6D51, MG30.0 y QC30 (icd.who.int)',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5ª ed., texto revisado (DSM-5-TR). Washington, DC: APA Publishing. Simulación (otros problemas que pueden ser objeto de atención clínica), trastornos facticios, de síntomas somáticos y de síntomas neurológicos funcionales [no verificada]',
      'Rogers R, Sewell KW & Gillard ND (2010). Structured Interview of Reported Symptoms, 2nd edition (SIRS-2). Lutz: Psychological Assessment Resources [no verificada]',
      'Jefatura del Estado (2000). Ley 1/2000, de 7 de enero, de Enjuiciamiento Civil (BOE-A-2000-323), arts. 335 y 348 (texto consolidado, boe.es)',
      'Ministerio de Gracia y Justicia (1882). Real Decreto de 14 de septiembre de 1882 por el que se aprueba la Ley de Enjuiciamiento Criminal (BOE-A-1882-6036), arts. 456, 459, 478 y 741 (texto consolidado, boe.es)',
      'Jefatura del Estado (1996). Ley Orgánica 1/1996, de 15 de enero, de Protección Jurídica del Menor (BOE-A-1996-1069), art. 13.1 (texto consolidado, boe.es)'
    ],
    nodes: ['ganser', 'pseudologia', 'neurtraum', 'histeriaC', 'charcot_hit', 'fibro', 'sfcme', 'fact_psic_med', 'phq15_sss8', 'tx_tnf', 'tmf', 'sens_func', 'autolesion', 'esq', 'ncd_leve', 'scl90r', 'pcl5', 'capacidad_jur', 'whodas2', 'maltrato_inf']
  },
  draw(Fig) {
    const W = 2300;
    const F = new Fig({ key: 'dd_simulacion', title: TITLE, w: W,
      desc: 'Árbol de tres preguntas (enfermedad médica, intención, incentivo externo) que separa la simulación, el trastorno facticio impuesto a uno mismo y a otra persona, el trastorno de síntomas somáticos, el trastorno neurológico funcional y la presentación inválida sin conclusión de simulación; indicadores de sospecha; criterios de Slick de 1999 y su revisión de 2020; tabla de evidencia de SIMS, TOMM, SIRS-2 y MMPI-2-RF; principios periciales y marco procesal español.' });
    const FS = 19, QX = 60, QW = 560, OX = 700, GW = W - 60 - OX;

    // ---------- Bloque 1: árbol ----------
    let y = F.band(90, 'Tres preguntas que ordenan el diferencial (se recorren de arriba abajo)', { n: 1 }) + 30;

    // Fila 1: enfermedad médica
    const q0 = F.box('q0', { x: QX, y, w: QW, type: 'q', fs: FS, title: '1 · ¿Explica el cuadro una enfermedad médica o neurológica?', text: 'Anamnesis, exploración y revisión cronológica de toda la documentación clínica (Bass y Halligan 2014).' });
    const OW2 = (GW - 20) / 2;
    const m1 = F.box('m1', { x: OX, y, w: OW2, type: 'warn', fs: FS, title: 'Sí, total o parcialmente: tratarla y seguir', text: 'Una enfermedad médica real no excluye un trastorno somático, funcional o facticio, ni la exageración: pueden coexistir (Sherman 2020). Reevaluar ante síntomas nuevos sin atribuirlo todo al diagnóstico previo [fuente no localizada].' });
    const m2 = F.box('m2', { x: OX + OW2 + 20, y, w: OW2, type: 'info', fs: FS, align: 'left', node: 'conv', title: 'Error diagnóstico: menor de lo temido', text: 'Revisión sistemática de 27 estudios (1466 pacientes, seguimiento mediano de 5 años): los síntomas motores y sensoriales «conversivos» resultaron explicados por una enfermedad en el 4 % de media en los estudios desde 1970, frente al 29 % en los de los años cincuenta (Stone 2005).' });
    const h1 = Math.max(q0.h, m1.h, m2.h); [q0, m1, m2].forEach(b => { b.h = h1; });
    F.arrow(q0, m1, { from: 'r', to: 'l', label: 'Sí' });
    y += h1 + 70;

    // Fila 2: intención
    const q1 = F.box('q1', { x: QX, y: y + 44, w: QW, type: 'q', fs: FS, title: '2 · ¿Se producen, falsean o exageran los síntomas de forma intencionada?', text: 'La intención no se observa: se infiere de discrepancias documentadas. Los síntomas pueden ser elegidos, ajenos al control voluntario o ambas cosas a la vez (Bass y Halligan 2014).' });
    F.arrow(q0, q1, { from: 'b', to: 't', label: 'No (o no del todo)' });
    const OW3 = (GW - 40 - 40) / 3, ox3 = i => OX + 20 + i * (OW3 + 20);
    const s1 = F.box('s1', { x: ox3(0), y: y + 44, w: OW3, type: 'dx', fs: FS, node: 'somat_sint', title: 'Trastorno de síntomas somáticos (CIE-11 6C20, malestar corporal)', text: 'Lo define la respuesta desproporcionada (pensamientos, emociones y conductas excesivos), no la ausencia de explicación médica (DSM-5-TR).' });
    const s2 = F.box('s2', { x: ox3(1), y: y + 44, w: OW3, type: 'dx', fs: FS, node: 'conv', title: 'Trastorno neurológico funcional (CIE-11 6B60)', text: 'Diagnóstico positivo por signos de incongruencia o inconsistencia clínica (p. ej., signo de Hoover), no de exclusión (DSM-5-TR).' });
    const s3 = F.box('s3', { x: ox3(2), y: y + 44, w: OW3, type: 'dx', fs: FS, node: 'iad', title: 'Ansiedad por enfermedad (CIE-11 6B23, hipocondría) y dolor crónico primario', text: 'Preocupación por padecer una enfermedad grave con pocos síntomas; el dolor crónico primario tiene sección propia en la CIE-11 (ver ficha).' });
    const hs = Math.max(s1.h, s2.h, s3.h); [s1, s2, s3].forEach(b => { b.h = hs; });
    const s4 = F.box('s4', { x: ox3(0), y: y + 44 + hs + 18, w: OW3 * 2 + 20, type: 'warn', fs: FS, node: 'crisis_func', title: 'Los signos funcionales no separan por sí solos lo funcional de lo fingido', text: 'En entrevistas a 22 neurólogos consultores, muchos no veían la conversión como claramente distinta del fingimiento (Kanaan 2009). Los fallos en pruebas de rendimiento no son más frecuentes en los trastornos funcionales que en otros cuadros clínicos sin incentivo externo (McWhirter 2020).' });
    const s5 = F.box('s5', { x: ox3(2), y: y + 44 + hs + 18, w: OW3, type: 'info', fs: FS, node: 'dolor_cron_prim', title: 'Dolor crónico primario', text: 'CIE-11 MG30.0, dentro del capítulo de dolor crónico; su definición y la del dolor nociplástico se desarrollan en la ficha.' });
    const hb = Math.max(s4.h, s5.h); s4.h = hb; s5.h = hb;
    const g2h = 44 + hs + 18 + hb + 20;
    F.group({ x: OX, y, w: GW, h: g2h, label: 'No intencionada: presentaciones somáticas y funcionales (los síntomas son reales para quien los vive)' });
    F.arrow(q1, { x: OX, y, w: GW, h: g2h }, { from: 'r', to: 'l', fb: (q1.y + q1.h / 2 - y) / g2h, label: 'No', lx: QX + QW + 30 });
    y += Math.max(g2h, q1.h + 44) + 64;

    // Fila 3: incentivo externo
    const q2 = F.box('q2', { x: QX, y: y + 44, w: QW, type: 'q', fs: FS, title: '3 · ¿Hay un incentivo externo que explique la conducta?', text: 'Económico (indemnización, prestación), evitar obligaciones o responsabilidad penal, obtener fármacos (Sherman 2020). La ganancia externa no excluye un trastorno coexistente.' });
    F.arrow(q1, q2, { from: 'b', to: 't', label: 'Sí' });
    const f1 = F.box('f1', { x: ox3(0), y: y + 44, w: OW3, type: 'dx', fs: FS, node: 'simulacion', title: 'Simulación (CIE-11 QC30)', text: 'Producción intencionada de síntomas falsos o muy exagerados motivada por incentivos externos. Es una conducta y figura entre los factores que influyen en el estado de salud, no entre los trastornos mentales (CIE-11; DSM-5-TR).' });
    const f2 = F.box('f2', { x: ox3(1), y: y + 44, w: OW3, type: 'dx', fs: FS, node: 'facticio', title: 'Trastorno facticio impuesto a uno mismo (CIE-11 6D50)', text: 'Engaño identificable sin incentivo externo evidente. En 455 casos publicados: 66,2 % mujeres; la profesión sanitaria o de laboratorio fue la más citada, y el 58,7 % se inducía la enfermedad o lesión en lugar de simularla (Yates y Feldman 2016).' });
    const f3 = F.box('f3', { x: ox3(2), y: y + 44, w: OW3, type: 'warn', fs: FS, node: 'facticio', title: 'Trastorno facticio impuesto a otra persona (CIE-11 6D51)', text: 'El diagnóstico recae en quien lo provoca y constituye maltrato. En 451 casos publicados, el 6 % de las víctimas había fallecido y el 7,3 % sufría daño permanente (Sheridan 2003). Comunicación obligatoria a la autoridad (LO 1/1996, art. 13.1).' });
    const hf = Math.max(f1.h, f2.h, f3.h); [f1, f2, f3].forEach(b => { b.h = hf; });
    const f4 = F.box('f4', { x: ox3(0), y: y + 44 + hf + 18, w: OW3, type: 'info', fs: FS, node: 'ganser', title: 'Síndrome de Ganser', text: 'Respuestas aproximadas descritas por Ganser (1897) en presos preventivos; su etiología y estatus nunca se resolvieron y se ha atribuido a histeria, simulación, psicosis o disociación (Dieguez 2018).' });
    const f5 = F.box('f5', { x: ox3(1), y: y + 44 + hf + 18, w: OW3 * 2 + 20, type: 'info', fs: FS, node: 'pseudologia', title: 'Las categorías no son excluyentes', text: 'Los trastornos somáticos, el trastorno neurológico funcional y el facticio no excluyen la simulación: puede darse en cada uno de ellos (Sherman 2020). Pseudología fantástica: relatos falsos que la persona casi llega a creer (ver ficha).' });
    const hf2 = Math.max(f4.h, f5.h); f4.h = hf2; f5.h = hf2;
    const g3h = 44 + hf + 18 + hf2 + 20;
    F.group({ x: OX, y, w: GW, h: g3h, label: 'Intencionada: el incentivo externo separa la simulación del trastorno facticio' });
    F.arrow(q2, { x: OX, y, w: GW, h: g3h }, { from: 'r', to: 'l', fb: (q2.y + q2.h / 2 - y) / g3h, label: 'Sí / No', lx: QX + QW + 22 });
    y += Math.max(g3h, q2.h + 44) + 50;

    // Fila final: presentación inválida
    const inv = F.box('inv', { x: QX, y, w: W - 120, type: 'warn', fs: 20, node: 'sims_tomm', title: 'Presentación inválida no es lo mismo que simulación',
      text: 'Una persona puede mostrar exageración o resultados inválidos sin cumplir los criterios de simulación: sin incentivo externo, sin discrepancias marcadas o con una condición que la explique. En ese caso los resultados no son interpretables, pero no indican simulación por sí mismos; también pueden deberse a falta de cooperación por un trastorno psiquiátrico (Sherman 2020). Las pruebas de validez no prueban la intención ni el incentivo.' });
    F.arrow(q2, inv, { from: 'b', to: 't', fa: 0.5, fb: (QW / 2) / (W - 120), label: 'No se puede decidir' });
    y = inv.y + inv.h + 60;

    // ---------- Bloque 2: indicadores ----------
    y = F.band(y, 'Indicadores de sospecha: orientan la exploración, no prueban intención', { n: 2 }) + 26;
    const CW = 530, CG = 20, cx = i => 60 + i * (CW + CG);
    const i1 = F.box('i1', { x: cx(0), y, w: CW, type: 'info', fs: FS, align: 'left', node: 'perit_forense', title: 'Contexto e indicadores clásicos', text: 'Contexto médico-legal, discrepancia marcada entre el malestar referido y los hallazgos, falta de cooperación y trastorno antisocial de la personalidad (DSM-5-TR). Rogers (1990) criticó que esta lista refleja un modelo criminológico y propuso entender la simulación como respuesta adaptativa a circunstancias adversas.' });
    const i2 = F.box('i2', { x: cx(1), y, w: CW, type: 'info', fs: FS, align: 'left', title: 'Tasas estimadas por contexto', text: 'Encuesta a neuropsicólogos (33 531 casos anuales): simulación o exageración probable en el 29 % de lesiones personales, 30 % de discapacidad, 19 % penales y 8 % médicos. Las tasas dependían de la proporción de encargos del demandante o del demandado (Mittenberg 2002). Son estimaciones, no prevalencias medidas.' });
    const i3 = F.box('i3', { x: cx(2), y, w: CW, type: 'act', fs: FS, align: 'left', node: 'neuropsico', title: 'Fuentes que apoyaron la conclusión', text: 'En la misma encuesta: gravedad (65 %) o patrón (64 %) de deterioro incongruentes con el cuadro, puntuaciones bajo el corte en pruebas de elección forzosa (57 %), discrepancias entre registros, autoinforme y conducta observada (56 %), síntomas inverosímiles (46 %) y escalas de validez de personalidad (38 %) (Mittenberg 2002).' });
    const i4 = F.box('i4', { x: cx(3), y, w: CW, type: 'warn', fs: FS, align: 'left', node: 'tpanti', title: 'Riesgo de falsos positivos', text: 'Aplicados de forma mecánica, los indicadores clásicos etiquetan en exceso a personas con trastorno antisocial, migrantes o en litigio legítimo [fuente no localizada]. Una parte de los neuropsicólogos europeos cree poder juzgar la credibilidad por intuición, idea superada (Dandachi-FitzGerald 2013); el juicio clínico solo no basta (Bass y Halligan 2014).' });
    const ih = Math.max(i1.h, i2.h, i3.h, i4.h); [i1, i2, i3, i4].forEach(b => { b.h = ih; });
    y += ih + 60;

    // ---------- Bloque 3: Slick ----------
    y = F.band(y, 'Criterios de Slick para la disfunción neurocognitiva simulada y su revisión de 2020', { n: 3 }) + 26;
    const SW = 860;
    const k1 = F.box('k1', { x: 60, y, w: SW, type: 'info', fs: FS, align: 'left', title: 'Slick, Sherman e Iverson (1999)', text: 'Datos psicométricos, conductuales y colaterales en tres categorías: definitiva (rendimiento significativamente inferior al azar en una prueba de elección forzosa), probable y posible; la posible incluía los casos con otras etiologías psiquiátricas, neurológicas o del desarrollo no descartadas (Slick 1999; descripción en Sherman 2020). Han sido el criterio de referencia para calibrar la mayoría de las PVT y muchas SVT (Sherman 2020).' });
    const k2 = F.box('k2', { x: 60 + SW + 120, y, w: W - 120 - SW - 120, type: 'act', fs: FS, align: 'left', node: 'simulacion', title: 'Revisión multidimensional (Sherman, Slick e Iverson 2020)', text: 'Una sola categoría de simulación, con cuatro tipos: neurocognitiva, somática, psiquiátrica y mixta. A: incentivo externo sustancial. B: presentación inválida en la exploración (PVT, SVT o incongruencias convincentes observadas). C: discrepancias marcadas con la historia natural del cuadro, los registros u otros medios, o informantes sin interés en el resultado. D: no explicable por completo por otra condición del desarrollo, médica o neurológica. Se suprime la categoría «definitiva»: el rendimiento inferior al azar pasa por alto a muchos simuladores.' });
    const kh = Math.max(k1.h, k2.h); k1.h = kh; k2.h = kh;
    F.arrow(k1, k2, { from: 'r', to: 'l', label: '2020' });
    y += kh + 22;
    const k3 = F.box('k3', { x: 60, y, w: SW, type: 'warn', fs: FS, align: 'left', node: 'dem', title: 'Exclusiones y no exclusiones (Sherman 2020)', text: 'Excluyen la simulación: demencia moderada o grave y discapacidad intelectual moderada o grave. No la excluyen: demencia leve, discapacidad intelectual leve, psicosis, trastornos de síntomas somáticos, trastorno neurológico funcional ni trastorno facticio.' });
    const k4 = F.box('k4', { x: 60 + SW + 120, y, w: W - 120 - SW - 120, type: 'act', fs: FS, align: 'left', title: 'Número de pruebas fallidas (Sherman 2020; Larrabee 2008)', text: 'Elegir pruebas con especificidad de 0,90 o más, aplicar al menos dos o tres y exigir dos o más fallos si se aplican pocas; con muchas pruebas, vigilar la proporción de fallos (Sherman 2020). Con sensibilidad 0,50 y especificidad 0,90, la probabilidad posterior tras un solo fallo oscila entre 0,357 y 0,978 según la tasa de base (10-90 %); tras tres fallos independientes, entre 0,933 y 0,999 (Larrabee 2008).' });
    const kh2 = Math.max(k3.h, k4.h); k3.h = kh2; k4.h = kh2;
    y += kh2 + 60;

    // ---------- Bloque 4: tabla de pruebas ----------
    y = F.band(y, 'Pruebas de validez de síntomas (SVT) y de rendimiento (PVT): qué evalúan y su evidencia', { n: 4 }) + 22;
    y = F.text(60, y + 18, 'Clave: ●●○ evidencia metaanalítica con límites conocidos · ●○○ evidencia discutida o dependiente de la versión. Ninguna prueba recibe ●●●: ninguna diagnostica la simulación por sí sola.', { fs: 19, bold: true, w: W - 120 }) + 6;
    const t = F.table({ x: 60, y, fs: 18, cols: [{ w: 300, label: 'Prueba y tipo' }, { w: 400, label: 'Qué evalúa' }, { w: 820, label: 'Evidencia' }, { w: 660, label: 'Límites y poblaciones en riesgo de falso positivo' }],
      rows: [
        [{ t: 'SIMS (SVT, autoinforme)', node: 'sims_tomm' }, 'Síntomas improbables o atípicos en cinco subescalas; validado con 476 estudiantes universitarios en siete condiciones de simulación o respuesta sincera (Smith y Burger 1997).',
          { sym: '●●○', t: 'Metaanálisis de 31 estudios y 4009 protocolos: discrimina bien entre simulación instruida y respuesta sincera, eleva sus puntuaciones en grupos con más simulación esperada y es bastante resistente al entrenamiento (van Impelen 2014).' },
          'Con los cortes clásicos (>14 y >16) la sensibilidad es satisfactoria y la especificidad insuficiente: puede sobrestimar la simulación en esquizofrenia, discapacidad intelectual y crisis no epilépticas psicógenas; combinarlo con otras medidas o subir el corte (van Impelen 2014).'],
        [{ t: 'TOMM (PVT, memoria visual)', node: 'neuropsico' }, 'Reconocimiento visual de elección forzosa con dos ensayos y uno de retención (Martin 2020).',
          { sym: '●●○', t: 'Metaanálisis de 60 artículos (1997-2017): con los cortes tradicionales del ensayo 2 y de la retención, especificidad 0,96-0,98 y sensibilidad 0,46-0,56; un corte de <49 eleva la sensibilidad a 0,59-0,70 con especificidad 0,91-0,97 (Martin 2020).' },
          'El corte de <49 se reserva a personas sin sospecha de deterioro importante. En la demencia la especificidad cae muy por debajo de lo aceptable; se mantiene por encima de 0,90 en la mayoría de muestras sin el inglés como lengua principal (Martin 2020).'],
        [{ t: 'SIRS-2 (SVT, entrevista estructurada)', node: 'sims_tomm' }, 'Estrategias de detección de síntomas psiquiátricos fingidos (Rogers 2010 [no verificada]).',
          { sym: '●○○', t: 'SIRS original, 26 estudios: más sensibilidad y menos especificidad que en el manual; clasificaba mejor con simuladores instruidos que con personas con sospecha real de simulación (Green y Rosenfeld 2011). La SIRS-2 redujo las clasificaciones de fingimiento en personas solicitantes de prestaciones y acusadas (Tylicki 2018).' },
          'Los pacientes genuinos se clasificaban como fingidores con más frecuencia que los participantes no clínicos (Green y Rosenfeld 2011). Parte de quienes la SIRS-2 reclasificó como no fingidores sobrerrepresentaba síntomas en el MMPI-2-RF (Tylicki 2018).'],
        [{ t: 'MMPI-2-RF, escalas de sobrerrepresentación (SVT)', node: 'scl90r' }, 'Cinco escalas de validez incluidas en un inventario de personalidad, p. ej. Fp-r (psicopatología infrecuente), FBS-r (validez de síntomas) y RBS.',
          { sym: '●●○', t: 'Metaanálisis moderado de 25 estudios: todas discriminan entre respuesta sincera y sobrerrepresentación, con tamaños del efecto de 1,08 (FBS-r) a 1,43 (Fp-r) (Ingram y Ternes 2016).' },
          'La diferencia entre grupos fue menor de lo que sugieren los cortes tradicionales: interpretar en contexto. FBS-r y RBS fueron las menos influidas por moderadores como el grupo de comparación (Ingram y Ternes 2016).']
      ] });
    y = t.y + 24;
    const pv = F.box('pv', { x: 60, y, w: W - 120, type: 'warn', fs: 20, node: 'disc_int', title: 'Fallar una prueba de validez es frecuente sin incentivo externo',
      text: 'Revisión sistemática de 69 estudios en poblaciones clínicas sin motivación externa conocida (discapacidad intelectual, enfermedad neurodegenerativa, lesión cerebral, trastornos psiquiátricos, trastornos funcionales y epilepsia): el fallo en PVT fue frecuente en todos los grupos, por encima del 25 % en algunos grupos y pruebas (McWhirter 2020). Lengua, cultura y escolarización deben constar como límites de la interpretación [fuente no localizada].' });
    y = pv.y + pv.h + 60;

    // ---------- Bloque 5: principios periciales ----------
    y = F.band(y, 'Principios periciales y marco procesal español', { n: 5 }) + 26;
    const p1 = F.box('p1', { x: cx(0), y, w: CW, type: 'act', fs: FS, align: 'left', node: 'sims_tomm', title: 'A · Nunca una sola prueba', text: 'Las pruebas psicométricas necesitan fuentes convergentes: entrevista detallada, registros médicos e investigaciones no médicas (Bass y Halligan 2014). Varios indicadores independientes elevan la probabilidad mucho más que uno solo (Larrabee 2008).' });
    const p2 = F.box('p2', { x: cx(1), y, w: CW, type: 'act', fs: FS, align: 'left', node: 'perit_forense', title: 'B · Abordar y documentar la validez', text: 'Toda evaluación clínica o forense debe abordar de forma proactiva la validez de sus resultados (Sweet 2021). Nombrar versión, cortes y población de referencia de cada prueba [fuente no localizada]. El informe penal describe las operaciones practicadas y sus resultados (LECrim, art. 478).' });
    const p3 = F.box('p3', { x: cx(2), y, w: CW, type: 'info', fs: FS, align: 'left', node: 'imputabilidad', title: 'C · Marco procesal español', text: 'Civil: juramento o promesa de actuar con la mayor objetividad posible (LEC, art. 335.2) y valoración según las reglas de la sana crítica (LEC, art. 348). Penal: el juez acuerda la pericia (LECrim, art. 456), por dos peritos salvo excepción (art. 459), y el tribunal aprecia las pruebas según su conciencia (art. 741).' });
    const p4 = F.box('p4', { x: cx(3), y, w: CW, type: 'warn', fs: FS, align: 'left', node: 'capacidad_jur', title: 'D · Prudencia en la conclusión', text: 'Un resultado inválido no es una conclusión de simulación (Sherman 2020), y la exageración no prueba la ausencia de trastorno. El sesgo de alianza existe: expertos que creían trabajar para la acusación puntuaron más alto el riesgo que quienes creían trabajar para la defensa (d hasta 0,85; Murrie 2013).' });
    const ph = Math.max(p1.h, p2.h, p3.h, p4.h); [p1, p2, p3, p4].forEach(b => { b.h = ph; });
    F.arrow(p1, p2); F.arrow(p2, p3); F.arrow(p3, p4);
    y += ph + 44;

    F.box('lim', { x: 60, y, w: W - 120, type: 'lim', align: 'left', fs: 19, title: 'Límites de la figura',
      text: 'Esquema docente de apoyo al razonamiento: no es un algoritmo validado ni sustituye al juicio clínico o pericial. El orden de las preguntas es expositivo; en la práctica la intención y el incentivo se valoran a la vez y pueden quedar sin decidir. La mayoría de los estudios de validez usan simuladores instruidos y no litigantes reales, y casi toda la evidencia es anglosajona y neuropsicológica. Las cifras proceden de metaanálisis, encuestas y series publicadas, no son prevalencias poblacionales y no se trasladan sin más a otros contextos. No se reproducen puntos de corte para uso clínico: dependen de la versión, la adaptación y la población normativa. Los criterios del DSM-5-TR no se han cotejado en su texto original y las definiciones de la CIE-11 se han comprobado solo en su código y título. Las fichas enlazadas desarrollan cada entidad.' });
    F.footer('Fuentes: Slick 1999 (PMID 10806468); Sherman 2020 (32377667); Sweet 2021 (33823750); Larrabee 2008 (17886147); Bass y Halligan 2014 (24612861); Mittenberg 2002 (12650234); Rogers 1990 (2245247); Smith y Burger 1997 (9213290); van Impelen 2014 (25494444); Martin 2020 (31357918); Green y Rosenfeld 2011 (21381842); Tylicki 2018 (29389175); Ingram y Ternes 2016 (27214667); McWhirter 2020 (32651247); Dandachi-FitzGerald 2013 (24047545); Kanaan 2009 (19321463); Stone 2005 (16223792); Dieguez 2018 (29151087); Yates y Feldman 2016 (27302720); Sheridan 2003 (12686328); Murrie 2013 (23969777); CIE-11 MMS 2025-01; DSM-5-TR; LEC arts. 335 y 348; LECrim arts. 456, 459, 478 y 741; LO 1/1996, art. 13. Referencias completas en la ficha de la figura. Esquema docente: no sustituye a la valoración clínica ni pericial individual.');
    return F;
  }
};
