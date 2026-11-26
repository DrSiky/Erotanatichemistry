// Figura: modelo de los trastornos de la personalidad de la CIE-11 (gravedad, dominios de rasgos y patrón límite), su correspondencia con el modelo alternativo del DSM-5-TR, HiTOP y las categorías clásicas, e instrumentos y críticas.
// Compilar en prueba: node tools/fig.js mod_personalidad_cie11 --dry --png <carpeta>
const TITLE = 'Trastornos de la personalidad en la CIE-11: eje de gravedad, dominios de rasgos y patrón límite, y su correspondencia con otros modelos';
module.exports = {
  key: 'mod_personalidad_cie11',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cuatro bandas. 1) Eje de gravedad: requisitos generales y cuatro niveles, desde la dificultad de la personalidad (QE50.7, que no es un trastorno mental y se codifica entre los factores que influyen en el estado de salud) hasta el trastorno leve, moderado y grave (6D10.0-6D10.2), con lo que define cada nivel: alcance de la alteración del funcionamiento del self e interpersonal, relaciones y roles, y daño a la propia persona o a otras. Las flechas significan «mayor gravedad». 2) Calificadores opcionales: cinco dominios de rasgos (6D11.0-6D11.4) y patrón límite (6D11.5), con sus rasgos específicos; se añaden tras fijar la gravedad y pueden acompañar al trastorno o a la dificultad. 3) Banda de interpretación (marcada I): correspondencia aproximada con el modelo alternativo del DSM-5-TR (criterios A y B), con los espectros de HiTOP y con las diez categorías clásicas, y ecos de tradiciones clínicas anteriores. 4) Instrumentos de evaluación y críticas al modelo. Los códigos se han comprobado en la tabulación oficial de la CIE-11 MMS (versión de enero de 2025). Esquema docente: no es un instrumento diagnóstico ni sustituye al juicio clínico.',
    refs: [
      'Organización Mundial de la Salud (2025). CIE-11 para estadísticas de mortalidad y morbilidad, tabulación simple oficial (versión MMS 2025-01): 6D10 Trastorno de la personalidad (6D10.0 leve, 6D10.1 moderado, 6D10.2 grave, 6D10.Z gravedad no especificada); 6D11 Rasgos o patrones de personalidad prominentes (6D11.0-6D11.5); 6A22 Trastorno esquizotípico; QE50.7 Dificultad de la personalidad',
      'Tyrer P, Reed GM & Crawford MJ (2015). Classification, assessment, prevalence, and effect of personality disorder. Lancet 385:717-726 · PMID 25706217',
      'Tyrer P, Mulder R, Kim YR & Crawford MJ (2019). The development of the ICD-11 classification of personality disorders: an amalgam of science, pragmatism, and politics. Annu Rev Clin Psychol 15:481-502 · PMID 30601688',
      'Bach B & First MB (2018). Application of the ICD-11 classification of personality disorders. BMC Psychiatry 18:351 · PMID 30373564',
      'Mulder RT (2021). ICD-11 personality disorders: utility and implications of the new model. Front Psychiatry 12:655548 · PMID 34040555',
      'Mulder RT, Horwood J, Tyrer P, Carter J & Joyce PR (2016). Validating the proposed ICD-11 domains. Personal Ment Health 10:84-95 · PMID 27120419',
      'Oltmanns JR & Widiger TA (2018). A self-report measure for the ICD-11 dimensional trait model proposal: the Personality Inventory for ICD-11. Psychol Assess 30:154-169 · PMID 28230410',
      'Oltmanns JR & Widiger TA (2019). Evaluating the assessment of the ICD-11 personality disorder diagnostic system. Psychol Assess 31:674-684 · PMID 30628821',
      'Olajide K et al. (2018). Development and psychometric properties of the Standardized Assessment of Severity of Personality Disorder (SASPD). J Pers Disord 32:44-56 · PMID 28513349',
      'Weekers LC, Hutsebaut J & Kamphuis JH (2019). The Level of Personality Functioning Scale-Brief Form 2.0: update of a brief instrument for assessing level of personality functioning. Personal Ment Health 13:3-14 · PMID 30230242',
      'Sellbom M, Brown TA & Bach B (2024). Development and psychometric evaluation of the Personality Disorder Severity ICD-11 (PDS-ICD-11) Clinician-Rating Form. Personal Ment Health 18:60-68 · PMID 37941508',
      'Brown TA & Sellbom M (2023). Examining the reliability and validity of the ICD-11 personality disorder severity diagnosis. Aust N Z J Psychiatry 57:1043-1051 · PMID 36384302',
      'Aydın-Seyrek T et al. (2024). Reliability of the ICD-11 personality disorder severity ratings and diagnosis. Personal Ment Health 18:339-346 · PMID 38973511',
      'Hualparuca-Olivera L et al. (2024). Internal consistency of measures for ICD-11 personality disorder severity and traits: a systematic review and meta-analysis. Personal Ment Health 18:357-368 · PMID 39086213',
      'Carnovale M, Sellbom M & Bagby RM (2020). The Personality Inventory for ICD-11: investigating reliability, structural and concurrent validity, and method variance. Psychol Assess 32:8-17 · PMID 31556679',
      'Gutiérrez F et al. (2021). Personality disorders in the ICD-11: Spanish validation of the PiCD and the SASPD in a mixed community and clinical sample. Assessment 28:759-772 · PMID 32583685',
      'Gecaite-Stonciene J et al. (2021). Obsessive-compulsive (anankastic) personality disorder in the ICD-11: a scoping review. Front Psychiatry 12:646030 · PMID 33796036',
      'Huprich SK (2020). Personality disorders in the ICD-11: opportunities and challenges for advancing the diagnosis of personality pathology. Curr Psychiatry Rep 22:40 · PMID 32519211',
      'Krueger RF et al. (2012). Initial construction of a maladaptive personality trait model and inventory for DSM-5. Psychol Med 42:1879-1890 · PMID 22153017',
      'Bender DS, Morey LC & Skodol AE (2011). Toward a model for assessing level of personality functioning in DSM-5, part I: a review of theory and methods. J Pers Assess 93:332-346 · PMID 22804672',
      'Kotov R et al. (2017). The Hierarchical Taxonomy of Psychopathology (HiTOP): a dimensional alternative to traditional nosologies. J Abnorm Psychol 126:454-477 · PMID 28333488',
      'Krueger RF et al. (2021). Validity and utility of Hierarchical Taxonomy of Psychopathology (HiTOP): II. Externalizing superspectrum. World Psychiatry 20:171-193 · PMID 34002506',
      'Watson D et al. (2022). Validity and utility of Hierarchical Taxonomy of Psychopathology (HiTOP): III. Emotional dysfunction superspectrum. World Psychiatry 21:26-54 · PMID 35015357',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5ª ed., texto revisado (DSM-5-TR), Sección III: modelo alternativo de los trastornos de la personalidad. Washington, DC: APA Publishing [no verificada directamente; contenido tomado de Bach y First 2018, Mulder 2021, Krueger 2012 y Bender 2011]'
    ],
    nodes: ['cie11_hit', 'dsm5_hit', 'entrevistas', 'perit_forense', 'clontp', 'schneider_1950']
  },
  draw(Fig) {
    const W = 2400, L = 60, IW = W - 120, FS = 18;
    const F = new Fig({ key: 'mod_personalidad_cie11', title: TITLE, w: W,
      desc: 'Cuatro bandas. Eje de gravedad de la CIE-11: dificultad de la personalidad (QE50.7), trastorno leve, moderado y grave (6D10.0-6D10.2), con su alcance, relaciones y daño. Cinco dominios de rasgos (afectividad negativa, desapego, disocialidad, desinhibición, anancastia) y patrón límite. Correspondencia aproximada con el modelo alternativo del DSM-5-TR, HiTOP y las diez categorías clásicas. Instrumentos (SASPD, PiCD, LPFS-BF 2.0, PDS-ICD-11) y críticas.' });
    const eq = bs => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };
    const cols = (n, g) => { const w = (IW - (n - 1) * g) / n; return { w, x: i => L + i * (w + g) }; };

    // ---------- Banda 1: gravedad ----------
    let y = F.band(90, 'Paso 1 · Eje de gravedad: primero se decide si hay alteración de la personalidad y en qué grado', { n: 1 }) + 26;
    const req = F.box('req', { x: L, y, w: 1340, type: 'q', fs: FS, align: 'left', node: 'tp_cie11', title: '¿Se cumplen los requisitos generales? (Bach y First 2018, tabla 1)',
      text: 'Alteración duradera (> 2 años) del funcionamiento del self (identidad, autoestima, exactitud de la autoimagen, autodirección) o interpersonal (relaciones íntimas, comprender la perspectiva ajena, manejar conflictos); patrones desadaptativos de cognición, emoción y conducta en una gama de situaciones; no propios del desarrollo ni explicables sobre todo por factores sociales o culturales, sustancias u otro trastorno; con malestar o deterioro significativo.' });
    const dim = F.box('dim', { x: L + 1340 + 30, y, w: IW - 1370, type: 'info', fs: FS, align: 'left', node: 'hitop_tp', title: 'Una sola dimensión de gravedad',
      text: 'No hay un umbral claro entre tipos y grados de disfunción: se describe mejor con una dimensión que va de la personalidad normal al trastorno grave (Tyrer 2015). La gravedad, más que el tipo, es el principal predictor de sufrimiento, autolesiones y abandono del tratamiento (Mulder 2021). Los tres niveles de trastorno son excluyentes entre sí y sustituyen a la comorbilidad entre categorías (Bach y First 2018).' });
    eq([req, dim]);
    y = req.y + req.h + 90;
    const c4 = cols(4, 70);
    const sev = [
      F.box('s0', { x: c4.x(0), y, w: c4.w, type: 'info', fs: FS, align: 'left', node: 'tp_cie11', title: 'Dificultad de la personalidad · QE50.7 (no es un trastorno)',
        text: 'Problemas estables (≥ 2 años) que solo se expresan de forma intermitente (p. ej., con estrés) o con baja intensidad, a veces limitados a relaciones o situaciones concretas; no comprometen la capacidad de mantener un trabajo, amistades y relaciones íntimas algo satisfactorias. Se codifica en el capítulo de factores que influyen en el estado de salud (Bach y First 2018).' }),
      F.box('s1', { x: c4.x(1), y, w: c4.w, type: 'dx', fs: FS, align: 'left', node: 'tp_cie11', title: 'Trastorno leve · 6D10.0',
        text: 'Alcance: algunas áreas del funcionamiento y no otras; puede no notarse en algunos contextos. Relaciones: problemas en muchas, pero se mantienen algunas y algunos roles. Daño: típicamente sin daño sustancial a la propia persona o a otras. Deterioro limitado a áreas circunscritas o más extenso pero más leve (Bach y First 2018, tabla 3).' }),
      F.box('s2', { x: c4.x(2), y, w: c4.w, type: 'dx', fs: FS, align: 'left', node: 'tp_cie11', title: 'Trastorno moderado · 6D10.1',
        text: 'Alcance: múltiples áreas (identidad, intimidad, control de impulsos), aunque algunas menos afectadas. Relaciones: problemas marcados en la mayoría, con conflicto, evitación, retraimiento o dependencia extrema. Daño: a veces a la propia persona o a otras. Deterioro marcado, con algún área conservada (Bach y First 2018, tabla 3).' }),
      F.box('s3', { x: c4.x(3), y, w: c4.w, type: 'warn', fs: FS, align: 'left', node: 'tp_cie11', title: 'Trastorno grave · 6D10.2',
        text: 'Alcance: alteración grave del self (sin sentido de quién se es, o rigidez extrema; autodesprecio o grandiosidad) que afecta a casi todas las áreas. Relaciones: prácticamente todas, con roles ausentes o muy comprometidos. Daño: frecuente a la propia persona o a otras. Deterioro grave en casi todos los ámbitos (Bach y First 2018, tabla 3).' })
    ];
    eq(sev);
    for (let i = 0; i < 3; i++) F.arrow(sev[i], sev[i + 1], { from: 'r', to: 'l' });
    F.arrow(req, sev[0], { from: 'b', to: 't', fa: 0.12, label: 'Por debajo del umbral', ly: req.y + req.h + 34 });
    F.arrow(req, sev[1], { from: 'b', to: 't', fa: 0.55, label: 'Sí, al menos leve', ly: req.y + req.h + 34 });
    y = sev[0].y + sev[0].h + 24;
    const ap = F.box('aprec', { x: L, y, w: (IW - 30) / 2, type: 'info', fs: FS, align: 'left', node: 'kernberg', title: 'Apreciación de la realidad bajo estrés: forma parte de la gravedad',
      text: 'Leve: alguna distorsión, con juicio de realidad conservado. Moderado: distorsiones marcadas y quizá estados disociativos leves o ideas de tipo psicótico (p. ej., paranoides). Grave: distorsiones extremas, con frecuencia estados disociativos o creencias o percepciones de tipo psicótico (Bach y First 2018, tabla 4). Así, la CIE-11 gradúa el juicio de realidad por gravedad, como en la organización de la personalidad de la tradición psicodinámica (Bach y First 2018).' });
    const ev = F.box('evol', { x: L + (IW - 30) / 2 + 30, y, w: (IW - 30) / 2, type: 'info', fs: FS, align: 'left', node: 'tp_cie11', title: 'Otras precisiones del modelo',
      text: 'Puede codificarse el trastorno sin especificar la gravedad (6D10.Z; OMS). La estabilidad es solo «relativa» tras la adultez temprana: puede remitir hacia la mediana edad o aparecer más tarde, a veces al perder apoyos que compensaban la alteración (Bach y First 2018). La CIE-11 conserva cinco niveles prácticos: sin alteración, dificultad, leve, moderado y grave (Tyrer 2019).' });
    eq([ap, ev]);
    y = ap.y + ap.h + 60;

    // ---------- Banda 2: dominios y patrón límite ----------
    y = F.band(y, 'Paso 2 · Calificadores opcionales: dominios de rasgos prominentes (6D11.0-6D11.4) y patrón límite (6D11.5)', { n: 2 }) + 22;
    y = F.text(L, y + 4, 'Se anotan tantos dominios como sean prominentes, con el trastorno o con la dificultad; no son tipos sino dimensiones de estilo que contribuyen a la disfunción, y para codificarlos solo se marcan presentes o ausentes. Un trastorno grave suele tener varios dominios, aunque puede bastar uno, p. ej., disocialidad con peligro grave para otras personas (Bach y First 2018). Definiciones y rasgos: Bach y First 2018, tablas 5 y 6.', { fs: 18, w: IW }) + 22;
    const c6 = cols(6, 22);
    const dom = [
      F.box('d_an', { x: c6.x(0), y, w: c6.w, type: 'dx', fs: 17, align: 'left', node: 'tpdep', title: 'Afectividad negativa · 6D11.0',
        text: 'Emociones negativas variadas, con frecuencia e intensidad desproporcionadas. Ansiedad, ira, preocupación, miedo, vulnerabilidad, hostilidad, vergüenza, depresión, pesimismo, culpa, baja autoestima, desconfianza.' }),
      F.box('d_de', { x: c6.x(1), y, w: c6.w, type: 'dx', fs: 17, align: 'left', node: 'tp_esquizoide', title: 'Desapego · 6D11.1',
        text: 'Distancia interpersonal (evitar el trato social y la intimidad, falta de amistades) y emocional (reserva, frialdad, expresión y vivencia emocional limitadas).' }),
      F.box('d_di', { x: c6.x(2), y, w: c6.w, type: 'dx', fs: 17, align: 'left', node: 'tpanti', title: 'Disocialidad · 6D11.2',
        text: 'Desprecio por los derechos y sentimientos ajenos. Egocentrismo (derecho, grandiosidad, búsqueda de admiración y atención) y falta de empatía (engaño, manipulación, explotación, crueldad, agresión física).' }),
      F.box('d_ds', { x: c6.x(3), y, w: c6.w, type: 'dx', fs: 17, align: 'left', node: 'impulsiv', title: 'Desinhibición · 6D11.3',
        text: 'Actuar precipitadamente según estímulos inmediatos, sin considerar las consecuencias negativas. Impulsividad, distraibilidad, irresponsabilidad, temeridad, falta de planificación.' }),
      F.box('d_ak', { x: c6.x(4), y, w: c6.w, type: 'dx', fs: 17, align: 'left', node: 'tpobs', title: 'Anancastia · 6D11.4',
        text: 'Foco estrecho en un estándar rígido de perfección y de lo correcto, y en controlar la conducta propia y ajena. Perfeccionismo (reglas, detalles, orden) y constricción emocional y conductual (terquedad, evitar riesgos, perseveración).' }),
      F.box('d_bp', { x: c6.x(5), y, w: c6.w, type: 'dx', fs: 17, align: 'left', node: 'tlp', title: 'Patrón límite · 6D11.5',
        text: '≥ 5 de 9 rasgos adaptados del DSM-5: temor al abandono, relaciones inestables, alteración de la identidad, impulsividad, autolesiones, inestabilidad afectiva, vacío, ira intensa, síntomas disociativos o de tipo psicótico transitorios.' })
    ];
    eq(dom);
    y = dom[0].y + dom[0].h + 18;
    const nb1 = F.box('n_bp', { x: L, y, w: (IW - 30) / 2, type: 'info', fs: FS, align: 'left', node: 'tlp', title: 'Por qué existe el patrón límite',
      text: 'Se añadió tras un largo debate, como opción posterior a fijar la gravedad, ante la resistencia de quienes querían conservar la categoría (Tyrer 2019); es politético, a diferencia de los dominios, y puede orientar hacia tratamientos manualizados (Bach y First 2018).' });
    const nb2 = F.box('n_ps', { x: L + (IW - 30) / 2 + 30, y, w: (IW - 30) / 2, type: 'info', fs: FS, align: 'left', node: 'esqtpersonalidad', title: 'Sin dominio de psicoticismo',
      text: 'La CIE-11 no codifica psicoticismo ni trastorno esquizotípico de la personalidad: el trastorno esquizotípico (6A22) está en el grupo de la esquizofrenia y otros trastornos psicóticos primarios; los rasgos de tipo psicótico cuentan para la gravedad (Bach y First 2018; OMS).' });
    eq([nb1, nb2]);
    y = nb1.y + nb1.h + 60;

    // ---------- Banda 3: interpretación ----------
    y = F.band(y, 'I · Interpretación: correspondencias aproximadas con el DSM-5-TR (sección III), HiTOP y las categorías clásicas', { n: 'I' }) + 22;
    y = F.text(L, y + 4, 'Banda interpretativa: las equivalencias son orientativas y proceden de tablas de conversión propuestas por autores del campo, no de la OMS ni de la APA. «—» = sin equivalente propio.', { fs: 18, w: IW }) + 18;
    const t = F.table({ x: L, y, fs: 17, cols: [{ w: 400, label: 'CIE-11' }, { w: 640, label: 'DSM-5-TR, sección III (modelo alternativo)' }, { w: 560, label: 'Espectro HiTOP más próximo' }, { w: 680, label: 'Fuente y matiz' }],
      rows: [
        [{ t: 'Gravedad: ninguna / dificultad / leve / moderado / grave', node: 'tp_cie11' }, { t: 'Criterio A (LPFS): nivel 0 / 1 / 2 / 3 / 4 (identidad, autodirección, empatía, intimidad)', node: 'pid5_lpfs' }, '— (HiTOP no define niveles de gravedad de la personalidad) [fuente no localizada]', 'Umbral: trastorno leve en la CIE-11 = deterioro moderado (nivel 2) en el DSM-5 (Bach y First 2018, tabla 7; Mulder 2021). Elementos del criterio A: Bender 2011'],
        [{ t: 'Afectividad negativa', node: 'pers_depresiva' }, 'Afecto negativo', { t: 'Internalizante', node: 'hitop_anx' }, 'Bach y First 2018; Mulder 2021; Watson 2022'],
        [{ t: 'Desapego', node: 'tpev' }, 'Desapego', 'Desapego', 'Bach y First 2018; Kotov 2017'],
        [{ t: 'Disocialidad', node: 'tpnarc' }, 'Antagonismo', 'Externalizante antagonista', 'Bach y First 2018; Krueger 2021'],
        [{ t: 'Desinhibición', node: 'impulsiv' }, 'Desinhibición', 'Externalizante desinhibido', 'Bach y First 2018; Krueger 2021'],
        [{ t: 'Anancastia', node: 'anancasmo' }, '— : perfeccionismo rígido (faceta de desinhibición baja) y perseveración (faceta de afecto negativo)', '— (no es uno de los seis espectros)', 'La compulsividad se propuso como dominio del DSM-5 y se abandonó por motivos poco claros (Mulder 2021)'],
        [{ t: '— (trastorno esquizotípico en 6A22)', node: 'esqtclin' }, 'Psicoticismo', { t: 'Trastorno del pensamiento', node: 'meehl' }, 'Krueger 2012; Bach y First 2018; Kotov 2017'],
        [{ t: 'Patrón límite', node: 'tlp' }, 'T. límite, uno de los seis tipos que conserva (con antisocial, evitativo, narcisista, obsesivo-compulsivo y esquizotípico) más el trastorno con rasgos especificados', 'Sin lugar único: carga sobre todo en internalizante (distrés) y solo de forma provisional en el superespectro externalizante, con rasgos de ambos espectros', 'Mulder 2021, tabla 1 (tipos del DSM-5); Krueger 2021; Watson 2022']
      ] });
    y = t.y + 28;
    y = F.text(L, y + 4, 'Diez categorías clásicas → dominios de la CIE-11 (conversión tentativa desde la CIE-10 de Bach y First 2018, tabla 8, que no incluye el esquizotípico y trata el narcisista como F60.8 «otros»; «bajo» = polo opuesto del dominio):', { fs: 18, bold: true, w: IW }) + 14;
    const c5 = cols(5, 20);
    const cat = [
      ['Paranoide', 'tparano', 'Afectividad negativa (desconfianza, rencor) y desapego'],
      ['Esquizoide', 'tp_esquizoide', 'Desapego; afectividad negativa baja'],
      ['Esquizotípico', 'esqtpersonalidad', 'Sin conversión: 6A22, fuera de los trastornos de la personalidad'],
      ['Antisocial (disocial)', 'tpanti', 'Disocialidad y desinhibición; afectividad negativa baja'],
      ['Límite (emocionalmente inestable)', 'tlp', 'Afectividad negativa, desinhibición y disocialidad; o patrón límite'],
      ['Histriónico', 'hist', 'Disocialidad, desinhibición y afectividad negativa; desapego bajo'],
      ['Narcisista', 'tpnarc', 'Disocialidad (grandiosidad) y afectividad negativa (autoestima desregulada)'],
      ['Evitativo (ansioso)', 'tpev', 'Afectividad negativa y desapego; disocialidad baja'],
      ['Dependiente', 'tpdep', 'Afectividad negativa; disocialidad baja'],
      ['Obsesivo-compulsivo (anancástico)', 'tpobs', 'Anancastia y afectividad negativa; desinhibición baja']
    ];
    const cb = []; let cy = y;
    [0, 1].forEach(r => {
      const row = [];
      for (let i = 0; i < 5; i++) { const c = cat[r * 5 + i]; row.push(F.box('cat' + (r * 5 + i), { x: c5.x(i), y: cy, w: c5.w, type: 'dx', fs: 17, node: c[1], title: c[0], text: c[2] })); }
      eq(row); cb.push(...row); cy = row[0].y + row[0].h + 14;
    });
    y = cy + 14;
    const c4b = cols(4, 24);
    const tr = [
      F.box('tr_k', { x: c4b.x(0), y, w: c4b.w, type: 'info', fs: 17, align: 'left', node: 'kernberg', title: 'Kernberg: organización de la personalidad',
        text: 'La gradación por gravedad se alinea con la tradición psicodinámica (niveles borderline alto, medio y bajo), cuyo nivel más grave admite estados psicóticos transitorios (Bach y First 2018).' }),
      F.box('tr_a', { x: c4b.x(1), y, w: c4b.w, type: 'info', fs: 17, align: 'left', node: 'pers_acentuadas', title: 'Acentuación de rasgos',
        text: 'La dificultad de la personalidad se parece a la categoría no patológica Z73.1 de la CIE-10, «acentuación de rasgos de personalidad» (Bach y First 2018); su parentesco con las personalidades acentuadas de Leonhard es solo terminológico [fuente no localizada].' }),
      F.box('tr_n', { x: c4b.x(2), y, w: c4b.w, type: 'info', fs: 17, align: 'left', node: 'anancasmo', title: 'Anancasmo',
        text: 'El término de la CIE-10 (F60.5, anancástico) sobrevive como dominio de rasgo y no como tipo (Bach y First 2018); la filiación con el anancasmo de la psicopatología alemana es histórica [fuente no localizada].' }),
      F.box('tr_d', { x: c4b.x(3), y, w: c4b.w, type: 'info', fs: 17, align: 'left', node: 'pers_depresiva', title: 'Personalidad depresiva',
        text: 'Sin código propio en la CIE-11 (OMS); sus rasgos (pesimismo, culpa, baja autoestima) caen dentro de la definición de afectividad negativa (Bach y First 2018), pero no hay conversión publicada [fuente no localizada].' })
    ];
    eq(tr);
    y = tr[0].y + tr[0].h + 60;

    // ---------- Banda 4: instrumentos y críticas ----------
    y = F.band(y, 'Instrumentos de evaluación y críticas al modelo', { n: 4 }) + 24;
    const c3 = cols(3, 24);
    const ins = [
      F.box('i_sev', { x: c3.x(0), y, w: c3.w, type: 'act', fs: FS, align: 'left', node: 'pid5_lpfs', title: 'Gravedad',
        text: 'SASPD (autoinforme breve), en 110 pacientes: AUC 0,86 para trastorno leve y 0,84 para moderado (cortes 8 y 10) y test-retest a las 2-4 semanas CCI 0,93 en 43 de ellos (Olajide 2018). LPFS-BF 2.0 (autoinforme del criterio A del DSM-5): dos factores, self e interpersonal, y alta sensibilidad al cambio (Weekers 2019). PDS-ICD-11, primera escala heteroaplicada según la descripción de la OMS: 14 ítems, unidimensional, CCI interevaluador 0,94 (Sellbom 2024).' }),
      F.box('i_dom', { x: c3.x(1), y, w: c3.w, type: 'act', fs: FS, align: 'left', node: 'hitop_tp', title: 'Dominios y patrón límite',
        text: 'PiCD: 60 ítems, autoinforme o informante, para los cinco dominios (Oltmanns y Widiger 2018; Bach y First 2018); omega 0,77-0,87 en 518 estudiantes (Carnovale 2020). Los cinco dominios pueden derivarse también del PID-5 con un algoritmo (Bach y First 2018). BPS para el patrón límite (Oltmanns y Widiger 2019).' }),
      F.box('i_es', { x: c3.x(2), y, w: c3.w, type: 'act', fs: FS, align: 'left', node: 'entrevistas', title: 'Validación española',
        text: 'PiCD y SASPD en 2522 personas de comunidad y 797 clínicas: consistencia interna adecuada en el PiCD (alfa 0,75-0,84) y menor en la SASPD (0,64 y 0,73); gravedad uni- o bidimensional y rasgos en cuatro factores, con un polo bipolar desinhibición-anancastia (Gutiérrez 2021).' })
    ];
    eq(ins);
    y = ins[0].y + ins[0].h + 24;
    const c4c = cols(4, 24);
    const cr = [
      F.box('c_fia', { x: c4c.x(0), y, w: c4c.w, type: 'info', fs: 17, align: 'left', node: 'tp_cie11', title: 'Fiabilidad',
        text: 'Gravedad con fiabilidad interevaluador «excelente» en 311 pacientes de salud mental comunitaria (Brown y Sellbom 2023); con un formulario de 18 ítems anclados, CCI 0,89 para la gravedad y kappa 0,77 para el diagnóstico sí/no (46 pacientes, cuatro clínicos; Aydın-Seyrek 2024). Metaanálisis de 49 estudios: consistencia interna 0,82, con gran heterogeneidad; se piden más estudios test-retest e interevaluador (Hualparuca-Olivera 2024).' }),
      F.box('c_val', { x: c4c.x(1), y, w: c4c.w, type: 'info', fs: 17, align: 'left', node: 'hitop_tp', title: 'Validez y utilidad',
        text: 'Muchos estudios de apoyo usan medidas no derivadas de la descripción de la CIE-11, y quedan dudas sobre la utilidad clínica (Huprich 2020). La evidencia es aún indirecta, apoyada en el modelo alternativo del DSM-5; los ensayos de campo de los dominios dieron resultados mixtos (Mulder 2021). La dificultad de la personalidad suscita temor a medicalizar (Mulder 2021).' }),
      F.box('c_ana', { x: c4c.x(2), y, w: c4c.w, type: 'info', fs: 17, align: 'left', node: 'tpobs', title: 'Debate sobre la anancastia',
        text: 'Varios estudios hallan cuatro factores, con un continuo bipolar desinhibición-anancastia (Carnovale 2020; Gutiérrez 2021); otros, citados por Mulder 2021, apoyan cinco dominios distintos. En pacientes con depresión se replicó la anancastia, pero no una desinhibición separada (Mulder 2016). La anancastia se solapa con el trastorno obsesivo-compulsivo de la personalidad y tiene apoyo factorial (Gecaite-Stonciene 2021).' }),
      F.box('c_psi', { x: c4c.x(3), y, w: c4c.w, type: 'info', fs: 17, align: 'left', node: 'esqtpersonalidad', title: 'Psicoticismo y patrón límite',
        text: 'La diferencia principal con el modelo alternativo es anancastia frente a psicoticismo; la investigación sobre rasgos del DSM-5 es trasladable salvo el psicoticismo (Mulder 2021). El patrón límite parece muy ligado a la gravedad global y podría ser redundante (Mulder 2021), que preveía su uso obligatorio en muchos países desde enero de 2022.' })
    ];
    eq(cr);
    y = cr[0].y + cr[0].h + 44;

    F.box('lim', { x: L, y, w: IW, type: 'lim', align: 'left', fs: 19, title: 'Límites de esta figura',
      text: 'Esquema docente de apoyo, no instrumento diagnóstico: no sustituye al juicio clínico ni a la evaluación con entrevistas y medidas validadas. Las descripciones de cada nivel y dominio se han resumido de la adaptación de las descripciones clínicas y requisitos diagnósticos de la OMS publicada por Bach y First (2018), no del texto oficial; los códigos sí se han cotejado con la tabulación oficial de la CIE-11. Las correspondencias de la banda I son aproximadas y en parte tentativas; las ubicaciones en HiTOP siguen las revisiones del propio consorcio. Las cifras de fiabilidad proceden de muestras concretas y no son extrapolables sin más. El modelo es reciente y su evidencia directa, limitada.' });

    F.footer('Fuentes: CIE-11 MMS, tabulación oficial (OMS 2025); Tyrer 2015 (PMID 25706217) y 2019 (30601688); Bach y First 2018 (30373564); Mulder 2021 (34040555) y 2016 (27120419); Oltmanns y Widiger 2018 (28230410) y 2019 (30628821); Olajide 2018 (28513349); Weekers 2019 (30230242); Sellbom 2024 (37941508); Brown y Sellbom 2023 (36384302); Aydın-Seyrek 2024 (38973511); Hualparuca-Olivera 2024 (39086213); Carnovale 2020 (31556679); Gutiérrez 2021 (32583685); Gecaite-Stonciene 2021 (33796036); Huprich 2020 (32519211); Krueger 2012 (22153017); Bender 2011 (22804672); Kotov 2017 (28333488); Krueger 2021 (34002506); Watson 2022 (35015357); DSM-5-TR, sección III (APA 2022). Esquema docente; no sustituye al juicio clínico.');
    return F;
  }
};
