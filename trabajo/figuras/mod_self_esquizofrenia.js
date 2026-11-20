// Figura: la esquizofrenia como trastorno del self básico (ipseidad): descripción, instrumento y evidencia.
// Compilar en prueba: node tools/fig.js mod_self_esquizofrenia --dry --png <carpeta>
const TITLE = 'La esquizofrenia como trastorno del self básico: descripción, instrumento y evidencia';
module.exports = {
  key: 'mod_self_esquizofrenia',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en tres bloques. 1) Tres tradiciones fenomenológicas leídas en tres columnas: a la izquierda, la descripción de lo que se vive (doble borde); en el centro, el instrumento que la operativiza (borde continuo fino); a la derecha, la evidencia empírica que lo respalda (borde discontinuo). Las flechas significan «se operativiza en» y «se pone a prueba en». 2) Relación con el alto riesgo clínico de psicosis (CHR): las anomalías del self se proponen como marcador que estrecha el grupo de riesgo y anticipa la evolución al espectro de la esquizofrenia, más que como criterio de transición inminente. 3) Especificidad, lugar en las clasificaciones y críticas. Las cifras proceden de los resúmenes o textos completos citados; «[fuente no localizada]» y «[no verificada]» señalan lo que no se ha podido cotejar en una fuente primaria. Esquema docente: la EASE, la EAWE y la SPI-A no ofrecen puntos de corte para decisiones individuales y no sustituyen al juicio clínico.',
    refs: [
      'Sass LA & Parnas J (2003). Schizophrenia, consciousness, and the self. Schizophr Bull 29:427-444 · PMID 14609238',
      'Parnas J & Handest P (2003). Phenomenology of anomalous self-experience in early schizophrenia. Compr Psychiatry 44:121-134 · PMID 12658621',
      'Parnas J et al. (2005). EASE: Examination of Anomalous Self-Experience. Psychopathology 38:236-258 · PMID 16179811',
      'Sass L et al. (2017). EAWE: Examination of Anomalous World Experience. Psychopathology 50:10-54 · PMID 28268224',
      'Conerty J et al. (2017). Examination of Anomalous World Experience: a report on reliability. Psychopathology 50:55-59 · PMID 28095382',
      'Madeira L et al. (2019). Self and world experience in non-affective first episode of psychosis. Schizophr Res 211:69-78 · PMID 31307860',
      'Parnas J & Bovet P (1991). Autism in schizophrenia revisited. Compr Psychiatry 32:7-21 · PMID 2001623',
      'Stanghellini G (2000). Vulnerability to schizophrenia and lack of common sense. Schizophr Bull 26:775-787 · PMID 11087011',
      'Blankenburg W (1969). Ansätze zu einer Psychopathologie des «common sense». Confin Psychiatr 12:144-163 · PMID 5373170',
      'Huber G & Gross G (1989). The concept of basic symptoms in schizophrenic and schizoaffective psychoses. Recenti Prog Med 80:646-652 · PMID 2697899',
      'Schultze-Lutter F (2009). Subjective symptoms of schizophrenia in research and the clinic: the basic symptom concept. Schizophr Bull 35:5-8 · PMID 19074497',
      'Schultze-Lutter F et al. (2012). Basic symptoms and the prediction of first-episode psychosis. Curr Pharm Des 18:351-357 · PMID 22239566',
      'Klosterkötter J et al. (2001). Diagnosing schizophrenia in the initial prodromal phase. Arch Gen Psychiatry 58:158-164 · PMID 11177117',
      'Schultze-Lutter F et al. (2015). EPA guidance on the early detection of clinical high risk states of psychoses. Eur Psychiatry 30:405-416 · PMID 25735810',
      'Møller P et al. (2011). Examination of anomalous self-experience in first-episode psychosis: interrater reliability. Psychopathology 44:386-390 · PMID 21847006',
      'Nordgaard J & Parnas J (2014). Self-disorders and the schizophrenia spectrum: a study of 100 first hospital admissions. Schizophr Bull 40:1300-1307 · PMID 24476579',
      'Haug E et al. (2012). Selective aggregation of self-disorders in first-treatment DSM-IV schizophrenia spectrum disorders. J Nerv Ment Dis 200:632-636 · PMID 22759943',
      'Raballo A, Poletti M, Preti A & Parnas J (2021). The self in the spectrum: a meta-analysis of the evidence linking basic self-disorders and schizophrenia. Schizophr Bull 47:1007-1017 · PMID 33479736',
      'Henriksen MG, Raballo A & Nordgaard J (2021). Self-disorders and psychopathology: a systematic review. Lancet Psychiatry 8:1001-1012 · PMID 34688345',
      'Nelson B, Thompson A & Yung AR (2012). Basic self-disturbance predicts psychosis onset in the ultra high risk for psychosis «prodromal» population. Schizophr Bull 38:1277-1287 · PMID 22349924',
      'Raballo A et al. (2016). Self-disorders and clinical high risk for psychosis: an empirical study in help-seeking youth attending community mental health facilities. Schizophr Bull 42:926-932 · PMID 26757754',
      'Parnas J et al. (2011). Self-experience in the early phases of schizophrenia: 5-year follow-up of the Copenhagen Prodromal Study. World Psychiatry 10:200-204 · PMID 21991279',
      'Koren D et al. (2020). Basic self-disorders in adolescence predict schizophrenia spectrum disorders in young adulthood: a 7-year follow-up study among non-psychotic help-seeking adolescents. Schizophr Res 216:97-103 · PMID 31889574',
      'Raballo A & Parnas J (2011). The silent side of the spectrum: schizotypy and the schizotaxic self. Schizophr Bull 37:1017-1026 · PMID 20176859',
      'Nordgaard J et al. (2017). Temporal persistence of anomalous self-experience: a 5 years follow-up. Schizophr Res 179:36-40 · PMID 27720316',
      'Nordgaard J et al. (2018). Self-disorders in schizophrenia-spectrum disorders: a 5-year follow-up study. Eur Arch Psychiatry Clin Neurosci 268:713-718 · PMID 28865064',
      'Nordgaard J et al. (2021). «Transition» to schizophrenia or fluctuations within the same disorder? Psychopathology 54:253-261 · PMID 34392248',
      'Salazar de Pablo G et al. (2021). Probability of transition to psychosis in individuals at clinical high risk: an updated meta-analysis. JAMA Psychiatry 78:970-978 · PMID 34259821',
      'Fusar-Poli P et al. (2012). Predicting psychosis: meta-analysis of transition outcomes in individuals at high clinical risk. Arch Gen Psychiatry 69:220-229 · PMID 22393215',
      'Sass L, Pienkos E, Nelson B & Medford N (2013). Anomalous self-experience in depersonalization and schizophrenia: a comparative investigation. Conscious Cogn 22:430-441 · PMID 23454432',
      'Sass LA (2014). Self-disturbance and schizophrenia: structure, specificity, pathogenesis (Current issues, New directions). Schizophr Res 152:5-11 · PMID 23773296',
      'Sass L et al. (2018). Varieties of self disorder: a bio-pheno-social model of schizophrenia. Schizophr Bull 44:720-727 · PMID 29529266',
      'Mishara AL (2007). Missing links in phenomenological clinical neuroscience: why we still are not there yet. Curr Opin Psychiatry 20:559-569 · PMID 17921755',
      'Minkowski E (1927). La schizophrénie: psychopathologie des schizoïdes et des schizophrènes. Paris: Payot. Citado a través de Parnas y Bovet 1991; original [no verificada]',
      'Blankenburg W (1971). Der Verlust der natürlichen Selbstverständlichkeit: ein Beitrag zur Psychopathologie symptomarmer Schizophrenien. Stuttgart: Enke. Citado a través de Parnas y Bovet 1991; original [no verificada]',
      'Gross G, Huber G, Klosterkötter J & Linz M (1987). BSABS: Bonner Skala für die Beurteilung von Basissymptomen. Berlin: Springer. Citada en Klosterkötter et al. 2001; original [no verificada]',
      'Schultze-Lutter F et al. (2007). Schizophrenia Proneness Instrument, Adult Version (SPI-A). Roma: Fioriti. Citado en Schultze-Lutter et al. 2012; original [no verificada]',
      'Organización Mundial de la Salud (2024). CIE-11 para estadísticas de mortalidad y morbilidad (MMS), tabulación simple oficial: bloque «Schizophrenia or other primary psychotic disorders», 6A20 y 6A22. Ginebra: OMS',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5ª ed., texto revisado (DSM-5-TR). Washington, DC: APA Publishing. Síndrome de psicosis atenuada en la Sección III [no verificada]'
    ],
    nodes: ['fen_contemp', 'jaspers_yo', 'leib_korper', 'intersubj_sinton', 'lebenswelt', 'kimura', 'automat_mental', 'praecox_gefuhl', 'proceso_desarrollo', 'tea_esq_dd']
  },
  draw(Fig) {
    const W = 2300;
    const F = new Fig({ key: 'mod_self_esquizofrenia', title: TITLE, w: W,
      desc: 'Tres filas (Minkowski y Blankenburg; síntomas básicos de Huber; ipseidad de Sass y Parnas) en tres columnas: descripción fenomenológica, instrumento (EAWE, BSABS y SPI-A, EASE) y evidencia empírica. Bloque sobre el alto riesgo clínico de psicosis y el valor predictivo de las anomalías del self, y bloque de especificidad, lugar nosológico y críticas.' });
    const FS = 18, L = 60;
    const CX = [L, 830, 1530], CW = [660, 600, 710];
    // Apila cajas en una columna; devuelve la lista
    const stack = (col, y0, items, type) => { let yy = y0; return items.map((it, i) => { const b = F.box(it.id, Object.assign({ x: CX[col], y: yy, w: CW[col], type, fs: FS, align: 'left' }, it)); yy += b.h + 14; return b; }); };
    // Iguala la altura total de las tres columnas alargando la última caja de cada una
    const level = cols => { const bot = c => c[c.length - 1].y + c[c.length - 1].h; const m = Math.max(...cols.map(bot)); cols.forEach(c => { const l = c[c.length - 1]; l.h += m - bot(c); }); return m; };
    const link = (A, B) => { A.forEach((a, i) => F.arrow(a, B[0], { from: 'r', to: 'l', fb: A.length === 1 ? 0.5 : 0.25 + 0.5 * i / (A.length - 1), via: undefined })); };
    const link1 = (a, b) => F.arrow(a, b, { from: 'r', to: 'l', fa: Math.min(0.5, 60 / a.h), fb: Math.min(0.5, 60 / b.h) });

    // ---------- Bloque 1 ----------
    let y = F.band(90, 'Tres tradiciones: qué se describe, con qué se mide y qué evidencia lo respalda', { n: 1 }) + 22;
    y = F.text(L, y + 18, 'Leyenda de forma (no depende del color): doble borde = descripción fenomenológica; borde continuo fino = instrumento; borde discontinuo = evidencia empírica. Flechas: «se operativiza en» → «se pone a prueba en».', { fs: 18, w: W - 120 }) + 12;
    F.text(CX[0], y + 20, 'Descripción fenomenológica (qué se vive)', { bold: true, fs: 20, w: CW[0] });
    F.text(CX[1], y + 20, 'Instrumento que la operativiza', { bold: true, fs: 20, w: CW[1] });
    F.text(CX[2], y + 20, 'Evidencia empírica que lo respalda', { bold: true, fs: 20, w: CW[2] });
    y += 62;

    // Fila A: Minkowski y Blankenburg → EAWE
    let yr = y;
    F.text(L, yr + 2, 'A · Relación con el mundo y el sentido común', { bold: true, fs: 19, w: 1200 });
    yr += 14;
    const aD = stack(0, yr, [
      { id: 'a_mink', node: 'contacto_vital', title: 'Pérdida del contacto vital con la realidad (Minkowski 1927)',
        text: 'Trastorno generador de la esquizofrenia según Minkowski; el autismo se entiende como fenómeno relacional (sujeto-mundo) y no como mero retraimiento (Parnas y Bovet 1991).' },
      { id: 'a_blank', node: 'blankenburg', title: 'Pérdida de la evidencia natural (Blankenburg 1971)',
        text: '«Crisis global del sentido común» (Parnas y Bovet 1991); reformulada como desconexión del sentido común: falta de sintonización intuitiva con los demás y daño de la red de conocimiento social (Stanghellini 2000).' }
    ], 'dx');
    const aI = stack(1, yr, [
      { id: 'a_eawe', node: 'ease_ins', title: 'EAWE (Sass et al. 2017)',
        text: 'Entrevista semiestructurada de la experiencia del mundo vivido: 75 ítems en 6 dominios (espacio y objetos, tiempo y acontecimientos, otras personas, lenguaje, atmósfera, orientación existencial). La «atmósfera» recoge el sentido global de realidad, familiaridad, vitalidad, significado o relevancia (Sass 2017). Ni Minkowski ni Blankenburg tienen instrumento propio.' }
    ], 'act');
    const aE = stack(2, yr, [
      { id: 'a_ev', node: 'fen_contemp', title: 'Evidencia escasa y reciente',
        text: 'Fiabilidad en dos muestras pequeñas (13 y 15 pacientes): alfa > 0,82 y kappa medio ≥ 0,78 (Conerty 2017). En 24 primeros episodios no afectivos frente a 24 controles, EAWE y EASE más altas y muy correlacionadas, con perfiles heterogéneos (Madeira 2019). Los conceptos de Minkowski y Blankenburg carecen de estudios de sensibilidad y especificidad [fuente no localizada].' }
    ], 'info');
    level([aD, aI, aE]);
    link(aD, aI); link1(aI[0], aE[0]);
    y = aD[aD.length - 1].y + aD[aD.length - 1].h + 34;

    // Fila B: Huber → BSABS / SPI-A
    F.text(L, y + 2, 'B · Síntomas básicos (escuela de Bonn)', { bold: true, fs: 19, w: 1200 });
    yr = y + 14;
    const bD = stack(0, yr, [
      { id: 'b_hub', node: 'bsabs', title: 'Síntomas básicos (Huber)',
        text: 'Alteraciones subjetivas, subclínicas, del pensamiento, la percepción y otras funciones, que la persona vive y comunica como deficiencias que puede afrontar y compensar; se llaman «básicos» porque serían la base de la sintomatología psicótica productiva (Huber y Gross 1989; Schultze-Lutter 2009).' }
    ], 'dx');
    const bI = stack(1, yr, [
      { id: 'b_bsabs', node: 'bsabs', title: 'BSABS (Gross et al. 1987) y SPI-A (Schultze-Lutter 2007)',
        text: 'La SPI-A y su versión infantojuvenil (SPI-CY) derivan de la BSABS y definen dos criterios: COPER (síntomas básicos cognitivo-perceptivos, criterio de riesgo) y COGDIS (alteraciones cognitivas, criterio de alto riesgo) (Schultze-Lutter 2012).' }
    ], 'act');
    const bE = stack(2, yr, [
      { id: 'b_ev', node: 'urh', title: 'Valor predictivo prospectivo',
        text: '160 personas derivadas por dudas diagnósticas, seguidas 9,6 años: 49,4 % evolucionaron a esquizofrenia; la ausencia de síntomas prodrómicos de la BSABS la excluyó con un 96 % de probabilidad y su presencia la predijo con un 70 % (especificidad 0,59) (Klosterkötter 2001). Metaanálisis de la EPA: COGDIS y los criterios de riesgo ultra-alto tienen tasas de conversión similares hasta los 2 años; después, mayores con COGDIS (Schultze-Lutter 2015).' }
    ], 'info');
    level([bD, bI, bE]);
    link1(bD[0], bI[0]); link1(bI[0], bE[0]);
    y = bD[0].y + bD[0].h + 34;

    // Fila C: ipseidad → EASE
    F.text(L, y + 2, 'C · Trastorno del self básico o de la ipseidad (Sass y Parnas)', { bold: true, fs: 19, w: 1400 });
    yr = y + 14;
    const cD = stack(0, yr, [
      { id: 'c_self', node: 'selfips', title: 'Esquizofrenia como trastorno del self (Sass y Parnas 2003)',
        text: 'Alteración básica de la conciencia que subyace y antecede a los síntomas positivos, negativos y de desorganización, con dos distorsiones complementarias del acto de conciencia (Sass y Parnas 2003). Descripción clínica de las anomalías no psicóticas en fases prodrómicas y en el trastorno esquizotípico: Parnas y Handest 2003.' },
      { id: 'c_hip', node: 'hiperf', title: 'Componente 1: hiperreflexividad',
        text: 'Autoconciencia exagerada en la que aspectos de uno mismo se viven como objetos externos (Sass y Parnas 2003).' },
      { id: 'c_aut', node: 'ipsei', title: 'Componente 2: disminución de la autoafección (presencia de sí)',
        text: 'Sentido debilitado de existir como fuente vital de la propia conciencia y acción (Sass y Parnas 2003). Revisión de 2018: se añade la alteración del «asidero» (grip) sobre la realidad (Sass 2018).' }
    ], 'dx');
    const cI = stack(1, yr, [
      { id: 'c_ease', node: 'ease_ins', title: 'EASE (Parnas et al. 2005)',
        text: 'Lista semiestructurada de 57 ítems en 5 dominios: corriente de conciencia, presencia e identidad básica, experiencia corporal, demarcación («límites del yo») y reorientación existencial (Nordgaard y Parnas 2014). Entrevista en profundidad: la persona describe con sus palabras y quien entrevista juzga si corresponde al fenómeno.' }
    ], 'act');
    const cE = stack(2, yr, [
      { id: 'c_fiab', node: 'pep', title: 'Fiabilidad',
        text: '25 primeros episodios psicóticos, reevaluación ciega en vídeo: alfa > 0,87; correlación entre evaluadores > 0,80; kappa medio 0,65 (0,51-0,73 por dominio) (Møller 2011). La mayoría de las personas consideró muy pertinente hablar de estas experiencias (Haug 2012).' },
      { id: 'c_ev1', node: 'esqtpersonalidad', title: 'Agregación selectiva en el espectro',
        text: '100 primeros ingresos: las anomalías se concentran en el espectro esquizofrénico, sin diferencias entre esquizofrenia y trastorno esquizotípico; un solo factor y consistencia interna excelente (Nordgaard y Parnas 2014). En 91 primeros tratamientos, la puntuación total de la EASE discriminó esquizofrenia, psicosis bipolar y otras psicosis (Haug 2012).' },
      { id: 'c_ev2', node: 'esq', title: 'Metaanálisis y revisión sistemática',
        text: '27 estudios transversales: espectro esquizofrénico frente a controles sanos g = 1,8; frente a otros trastornos mentales g = 1,9; frente a trastornos bipolares o afectivos g = 1,8; heterogeneidad de nula a alta (Raballo 2021). Las anomalías son estables en el tiempo, predicen la evolución al espectro y se asocian a peor funcionamiento social y a suicidalidad (Henriksen 2021).' }
    ], 'info');
    level([cD, cI, cE]);
    link1(cD[0], cI[0]); cE.forEach((e, i) => F.arrow(cI[0], e, { from: 'r', to: 'l', fa: 0.2 + 0.3 * i, fb: Math.min(0.5, 50 / e.h) }));
    y = cD[cD.length - 1].y + cD[cD.length - 1].h + 60;

    // ---------- Bloque 2: riesgo de psicosis ----------
    y = F.band(y, 'Relación con el alto riesgo clínico de psicosis (CHR): qué añaden las anomalías del self', { n: 2 }) + 30;
    const RW = 520, RG = 50, rx = i => L + i * (RW + RG);
    const r1 = F.box('r_chr', { x: rx(0), y, w: RW, type: 'dx', fs: FS, align: 'left', node: 'urh', title: 'Alto riesgo clínico (CHR-P)',
      text: 'Criterios de riesgo ultra-alto (CAARMS, SIPS) y criterio COGDIS (EPA). Riesgo acumulado de transición: 15 % al año, 25 % a los 3 años y 28 % pasados 4 años (130 estudios, 9222 personas; Salazar de Pablo 2021), inferior al 22 % y 36 % estimados en 2012 (Fusar-Poli 2012).' });
    const r2 = F.box('r_nel', { x: rx(1), y, w: RW, type: 'info', fs: FS, align: 'left', node: 'caarms_sips', title: 'Las anomalías del self dentro del CHR',
      text: '49 personas en riesgo ultra-alto y 52 controles, seguimiento medio de 569 días: la EASE total predijo el tiempo hasta la transición controlando otros predictores (p < 0,05) (Nelson 2012). 47 jóvenes de 14-25 años en servicios comunitarios: se agregan en quienes cumplen CHR y, combinadas con él, delimitan un subgrupo con peor funcionamiento (Raballo 2016). CHR frente a controles sanos, g = 2,0 (Raballo 2021).' });
    const r3 = F.box('r_pred', { x: rx(2), y, w: RW, type: 'info', fs: FS, align: 'left', node: 'aper', title: 'Predicen el espectro, no solo la psicosis',
      text: 'Estudio prodrómico de Copenhague: 151 primeros ingresos seguidos 60 meses, 37 % de conversión al espectro; la perplejidad y las anomalías del self basales fueron los mejores predictores (Parnas 2011). 39 adolescentes consultantes no psicóticos, 7 años: 9 (23,1 %) con trastorno del espectro, predicho por las anomalías del self y no por los síntomas prodrómicos (Koren 2020).' });
    const r4 = F.box('r_esq', { x: rx(3), y, w: W - 60 - rx(3), type: 'dx', fs: FS, align: 'left', node: 'esq', title: 'Espectro de la esquizofrenia',
      text: 'Esquizofrenia y trastorno esquizotípico con niveles similares de anomalías del self (Nordgaard y Parnas 2014). De 40 personas con trastorno esquizotípico, 10 pasaron a esquizofrenia en 5 años, todas con anomalías del self basales: los autores lo leen como fluctuación dentro de un mismo trastorno (Nordgaard 2021).' });
    const rh = Math.max(r1.h, r2.h, r3.h, r4.h); [r1, r2, r3, r4].forEach(b => { b.h = rh; });
    F.arrow(r1, r2, { from: 'r', to: 'l' }); F.arrow(r2, r3, { from: 'r', to: 'l' }); F.arrow(r3, r4, { from: 'r', to: 'l' });
    y = r1.y + rh + 30;
    const SW = (W - 120 - 2 * 30) / 3, sx = i => L + i * (SW + 30);
    const s1 = F.box('s_est', { x: sx(0), y, w: SW, type: 'info', fs: FS, align: 'left', node: 'proceso_desarrollo', title: 'Rasgo estable, no estado',
      text: 'Persistencia elevada a 5 años en 96 primeros ingresos con una escala precursora de 25 ítems (Nordgaard 2017) y en 48 pacientes con la EASE completa, cuyo nivel basal predijo la evolución sintomática pero no la funcional (Nordgaard 2018); correlación de 0,64 entre adolescencia y juventud (Koren 2020).' });
    const s2 = F.box('s_gen', { x: sx(1), y, w: SW, type: 'info', fs: FS, align: 'left', node: 'meehl', title: 'Vulnerabilidad sin psicosis',
      text: '218 familiares no afectados de 6 familias multiplex: las anomalías del self aumentan de forma gradual desde quienes no tienen trastorno hasta el trastorno esquizotípico de la personalidad, con independencia de los síntomas negativos y del trastorno formal del pensamiento subclínicos (Raballo y Parnas 2011).' });
    const s3 = F.box('s_uso', { x: sx(2), y, w: SW, type: 'act', fs: FS, align: 'left', node: 'esqtclin', title: 'Qué se propone para la práctica',
      text: 'Explorar las anomalías del self en quien cumple criterios CHR para «estrechar» el grupo y reducir falsos positivos (Nelson 2012; Raballo 2016), y como complemento de la evaluación clínica habitual en el inicio de la psicosis (Møller 2011). La guía de la EPA recomienda los criterios de riesgo ultra-alto y COGDIS, no la EASE (Schultze-Lutter 2015).' });
    const sh = Math.max(s1.h, s2.h, s3.h); [s1, s2, s3].forEach(b => { b.h = sh; });
    y = s1.y + sh + 60;

    // ---------- Bloque 3: especificidad y críticas ----------
    y = F.band(y, 'Especificidad, lugar en las clasificaciones y críticas', { n: 3 }) + 30;
    const VW = (W - 120 - 3 * 24) / 4, vx = i => L + i * (VW + 24);
    const v = [
      F.box('v_desp', { x: vx(0), y, w: VW, type: 'warn', fs: FS, align: 'left', node: 'desp', title: 'Diferencial: despersonalización',
        text: 'Al comparar los ítems de la EASE con relatos publicados de despersonalización grave se hallan numerosas afinidades; lo más distintivo del espectro serían la confusión entre uno mismo y el mundo o el otro y la erosión de la perspectiva de primera persona (Sass 2013).' }),
      F.box('v_esp', { x: vx(1), y, w: VW, type: 'info', fs: FS, align: 'left', node: 'extranamiento', title: 'Especificidad relativa',
        text: 'En informes publicados de manía, depresión psicótica, despersonalización e introspección intensa aparecen alienación de pensamientos y cuerpo y desvanecimiento del self y del mundo; faltaría la erosión grave del self mínimo (Sass 2014). Estudios exploratorios, no comparaciones clínicas directas.' }),
      F.box('v_noso', { x: vx(2), y, w: VW, type: 'info', fs: FS, align: 'left', node: 'psaten', title: 'Lugar en las clasificaciones',
        text: 'Las anomalías del self no forman parte de los criterios del DSM-5-TR ni de la CIE-11 [fuente no localizada]. La CIE-11 incluye el trastorno esquizotípico (6A22) en el bloque de esquizofrenia y otros trastornos psicóticos primarios, junto a la esquizofrenia (6A20) (OMS, CIE-11 MMS). El DSM-5-TR recoge el síndrome de psicosis atenuada en la Sección III [no verificada].' }),
      F.box('v_crit', { x: vx(3), y, w: VW, type: 'info', fs: FS, align: 'left', node: 'husserl', title: 'Críticas al modelo',
        text: 'Las pretensiones de que el modelo hiperreflexividad-ipseidad restrinja la neurociencia son injustificadas, y la corriente cita fuera de contexto a Binswanger, Blankenburg y von Weizsäcker (Mishara 2007). Los propios autores revisan el modelo: factores primarios y secundarios, trauma y cultura, y solapamiento con trastornos disociativos y de pánico (Sass 2018).' })
    ];
    const vh = Math.max(...v.map(b => b.h)); v.forEach(b => { b.h = vh; });
    y = v[0].y + vh + 44;

    F.box('lim', { x: L, y, w: W - 120, type: 'lim', align: 'left', fs: 19, title: 'Límites de esta figura',
      text: 'Esquema docente, no instrumento diagnóstico: no sustituye al juicio clínico ni a la exploración psicopatológica. La EASE, la EAWE y la SPI-A exigen formación específica [fuente no localizada] y no ofrecen puntos de corte validados para decisiones individuales [fuente no localizada]. Gran parte de la evidencia procede de pocos grupos de investigación (sobre todo de Copenhague, Melbourne, Italia y Bonn-Colonia), con muestras pequeñas y evaluadores formados por los autores de los instrumentos. Los valores predictivos de Klosterkötter (2001) proceden de una población derivada con una probabilidad previa cercana al 50 % y no se trasladan a la población general. Las descripciones de Minkowski y Blankenburg se citan a través de fuentes secundarias indexadas; sus obras originales no se han cotejado. Ninguna de estas anomalías justifica por sí sola un diagnóstico ni un tratamiento antipsicótico.' });

    F.footer('Fuentes: Sass y Parnas 2003 (PMID 14609238); Parnas y Handest 2003 (12658621); Parnas 2005, EASE (16179811); Sass 2017, EAWE (28268224); Conerty 2017 (28095382); Madeira 2019 (31307860); Parnas y Bovet 1991 (2001623); Stanghellini 2000 (11087011); Huber y Gross 1989 (2697899); Schultze-Lutter 2009 (19074497), 2012 (22239566) y 2015, guía EPA (25735810); Klosterkötter 2001 (11177117); Møller 2011 (21847006); Nordgaard y Parnas 2014 (24476579); Haug 2012 (22759943); Raballo 2021 (33479736); Henriksen 2021 (34688345); Nelson 2012 (22349924); Raballo 2016 (26757754); Parnas 2011 (21991279); Koren 2020 (31889574); Raballo y Parnas 2011 (20176859); Nordgaard 2017 (27720316), 2018 (28865064) y 2021 (34392248); Salazar de Pablo 2021 (34259821); Fusar-Poli 2012 (22393215); Sass 2013 (23454432), 2014 (23773296) y 2018 (29529266); Mishara 2007 (17921755); CIE-11 MMS (OMS). Esquema docente de apoyo; no sustituye al juicio clínico.');
    return F;
  }
};
