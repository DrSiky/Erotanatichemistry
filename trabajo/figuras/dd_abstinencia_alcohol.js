// Figura: diagrama de decisión ampliado del síndrome de abstinencia alcohólica en el adulto.
// Compilar en prueba: node tools/fig.js dd_abstinencia_alcohol --dry --png <carpeta>
const TITLE = 'Abstinencia alcohólica en el adulto: diagrama de decisión ampliado';
module.exports = {
  key: 'dd_abstinencia_alcohol',
  meta: {
    title: TITLE,
    kind: 'dd',
    cap: 'Diagrama de decisión en siete bloques. 1) Columna principal de cribado: antecedentes de delirium tremens o de convulsiones, PAWSS y gravedad actual con CIWA-Ar; cada pregunta conduce a una conducta (centro) y a los datos que la respaldan (derecha). 2) Gravedad y ámbito de tratamiento (ambulatorio, hospital, UCI) y diagnóstico diferencial obligado. 3) Elección farmacológica: benzodiacepinas, clometiazol y fenobarbital, con una tabla de alternativas y adyuvantes que separa lo que dicen las guías de lo que autoriza la ficha técnica española (CIMA): «fuera de ficha» significa que ninguna ficha consultada recoge la abstinencia alcohólica en su apartado 4.1. 4) Tiamina y encefalopatía de Wernicke. 5) Magnesio, potasio, fosfato y riesgo de realimentación. 6) Línea temporal orientativa tras la última ingesta. 7) Paso a la prevención de recaídas. Los cortes de CIWA-Ar son los ejemplos que usa la ASAM, no umbrales validados. No se indican dosis: las pautas dependen del protocolo del centro y de la ficha técnica. «[fuente no localizada]» señala lo que no se ha podido cotejar en una fuente primaria. Esquema docente: no sustituye al juicio clínico.',
    refs: [
      'American Society of Addiction Medicine (2020). The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. J Addict Med 14(3S Suppl 1):1-72 · PMID 32511109 (texto completo consultado en asam.org: recomendaciones II.8-II.12, IV.16-IV.44, V.1-V.40, VI.1-VI.29, VII.8-VII.10)',
      'National Institute for Health and Care Excellence (2010, actualizada en 2017). Alcohol-use disorders: diagnosis and management of physical complications. Clinical guideline CG100, recomendaciones 1.1.1.1-1.1.5.3 y 1.2.1.1-1.2.1.4 (texto consultado en nice.org.uk, noviembre de 2026)',
      'National Institute for Health and Care Excellence (2011). Alcohol-use disorders: diagnosis, assessment and management of harmful drinking (high-risk drinking) and alcohol dependence. Clinical guideline CG115, recomendaciones 1.3.4.5, 1.3.5.8, 1.3.5.10, 1.3.6.1, 1.3.6.3, 1.3.6.14 y 1.3.6.15 (texto consultado en nice.org.uk, noviembre de 2026)',
      'National Institute for Health and Care Excellence (2006, actualizada en 2017). Nutrition support for adults: oral nutrition support, enteral tube feeding and parenteral nutrition. Clinical guideline CG32, recomendaciones 1.4.6 (recuadro 1) y 1.4.8 (texto consultado en nice.org.uk, noviembre de 2026)',
      'Soyka M et al. (2017). Guidelines for biological treatment of substance use and related disorders, part 1: Alcoholism, first revision. World J Biol Psychiatry 18:86-119 · PMID 28006997',
      'Wood E et al. (2018). Will this hospitalized patient develop severe alcohol withdrawal syndrome? The Rational Clinical Examination systematic review. JAMA 320:825-833 · PMID 30167704',
      'Eyer F et al. (2011). Risk assessment of moderate to severe alcohol withdrawal: predictors for seizures and delirium tremens in the course of withdrawal. Alcohol Alcohol 46:427-433 · PMID 21593124',
      'Sullivan JT et al. (1989). Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict 84:1353-1357 · PMID 2597811',
      'Saitz R et al. (1994). Individualized treatment for alcohol withdrawal. A randomized double-blind controlled trial. JAMA 272:519-523 · PMID 8046805',
      'Amato L et al. (2010). Benzodiazepines for alcohol withdrawal. Cochrane Database Syst Rev 2010(3):CD005063 · PMID 20238336',
      'Bahji A et al. (2022). Comparative efficacy and safety of pharmacotherapies for alcohol withdrawal: a systematic review and network meta-analysis. Addiction 117:2591-2601 · PMID 35194860',
      'Mayo-Smith MF et al. (2004). Management of alcohol withdrawal delirium. An evidence-based practice guideline. Arch Intern Med 164:1405-1412 · PMID 15249349',
      'Mirijello A et al. (2015). Identification and management of alcohol withdrawal syndrome. Drugs 75:353-365 · PMID 25666543',
      'Monte Secades R et al. (2010). Evolución del síndrome de abstinencia alcohólica en un hospital general [artículo en español]. Adicciones 22:141-146 · PMID 20549149',
      'Rosenson J et al. (2013). Phenobarbital for acute alcohol withdrawal: a prospective randomized double-blind placebo-controlled study. J Emerg Med 44:592-598.e2 · PMID 22999778',
      'Lee CM et al. (2024). Phenobarbital treatment of alcohol withdrawal in the emergency department: a systematic review and meta-analysis. Acad Emerg Med 31:515-524 · PMID 37923363',
      'Mattle AG et al. (2022). Gabapentin to treat acute alcohol withdrawal in hospitalized patients: a systematic review and meta-analysis. Drug Alcohol Depend 241:109671 · PMID 36402053',
      'Polintan ETT et al. (2023). Adjunctive dexmedetomidine in alcohol withdrawal syndrome: a systematic review and meta-analysis of retrospective cohort studies and randomized controlled trials. Ann Pharmacother 57:696-705 · PMID 36258676',
      'Garel N et al. (2022). Efficacy of ketamine intervention to decrease alcohol use, cravings, and withdrawal symptoms in adults with problematic alcohol use or alcohol use disorder: a systematic review and comprehensive analysis of mechanism of actions. Drug Alcohol Depend 239:109606 · PMID 36087563',
      'Liu J & Wang LN (2019). Baclofen for alcohol withdrawal. Cochrane Database Syst Rev 2019(11):CD008502 · PMID 31689723',
      'Leone MA et al. (2010). Gamma-hydroxybutyrate (GHB) for treatment of alcohol withdrawal and prevention of relapses. Cochrane Database Syst Rev 2010(2):CD006266 · PMID 20166080',
      'Testino G, Leone S & Borro P (2014). Treatment of alcohol dependence: recent progress and reduction of consumption. Minerva Med 105:447-466 · PMID 25392958',
      'Caine D et al. (1997). Operational criteria for the classification of chronic alcoholics: identification of Wernicke\'s encephalopathy. J Neurol Neurosurg Psychiatry 62:51-60 · PMID 9010400',
      'Galvin R et al. (2010). EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol 17:1408-1418 · PMID 20642790',
      'Hendershot CS et al. (2025). Once-weekly semaglutide in adults with alcohol use disorder: a randomized clinical trial. JAMA Psychiatry 82:395-405 · PMID 39937469',
      'AEMPS-CIMA (2026). Fichas técnicas de Valium 10 mg comprimidos (diazepam; n.º 39905), Huberplex 10 mg (clordiazepóxido; n.º 37620) y Orfidal 1 mg (lorazepam; n.º 49796), apartado 4.1; búsqueda de oxazepam por principio activo sin resultados; consulta de noviembre de 2026',
      'AEMPS-CIMA (2026). Ficha técnica de Distraneurine 192 mg cápsulas blandas (clometiazol; n.º 46186), apartados 4.1-4.5; consulta de noviembre de 2026',
      'AEMPS-CIMA (2026). Fichas técnicas de Luminal 100 mg comprimidos (fenobarbital; n.º 35052), apartados 4.1 y 4.3 (según la ficha del atlas, consulta de noviembre de 2026), Tegretol 200 mg (carbamazepina; n.º 39955), Trileptal 300 mg (oxcarbazepina; n.º 63093), Neurontin 300 mg (gabapentina; n.º 60621), Lioresal 10 mg (baclofeno; n.º 52180), Ketolar 50 mg/ml (ketamina; n.º 47034), Propofol Fresenius 10 mg/ml (n.º 62134) y Haloperidol Esteve 10 mg (n.º 58343), apartado 4.1; consulta de noviembre de 2026',
      'AEMPS-CIMA (2026). Ficha técnica de Depakine Crono 500 mg comprimidos de liberación prolongada (valproato; n.º 60350), apartado 4.3; consulta de noviembre de 2026',
      'Agencia Europea de Medicamentos (2026). Información de producto de Selincro 18 mg comprimidos recubiertos con película (nalmefeno), apartado 4.3 (EPAR en español, consultado en noviembre de 2026)',
      'AEMPS-CIMA (2026). Búsqueda por principio activo «cianamida»: sin medicamentos registrados; consulta de noviembre de 2026'
    ],
    nodes: ['dt_alc', 'alcohol', 'ciwa_ar', 'audit', 'kindling_abst_alc', 'neuroadapt_sed', 'clometiazol', 'fenobarbital', 'korsakoff']
  },
  draw(Fig) {
    const W = 2300;
    const F = new Fig({ key: 'dd_abstinencia_alcohol', title: TITLE, w: W,
      desc: 'Diagrama de decisión del síndrome de abstinencia alcohólica en el adulto: cribado de riesgo con antecedentes, PAWSS y CIWA-Ar; ámbito ambulatorio, hospitalario o en UCI; benzodiacepinas, clometiazol y fenobarbital; tabla de alternativas y adyuvantes con su situación de ficha técnica en España; tiamina y encefalopatía de Wernicke; electrolitos y realimentación; línea temporal; y paso a la prevención de recaídas.' });
    const L = 60, R = W - 60, FS = 18;
    const eq = bs => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };

    // ---------- Bloque 1: columna principal de cribado ----------
    let y = F.band(90, 'Cribado de riesgo y gravedad: columna principal (se recorre de arriba abajo)', { n: 1 }) + 20;
    const QX = L, QW = 600, AX = 780, AW = 600, IX = 1440, IW = R - 1440;
    F.text(QX, y + 18, 'Pregunta de decisión', { bold: true, fs: 19, w: QW });
    F.text(AX, y + 18, 'Conducta que se deriva', { bold: true, fs: 19, w: AW });
    F.text(IX, y + 18, 'En qué se apoya', { bold: true, fs: 19, w: IW });
    y += 40;

    const row = (id, y0, q, a, inf, lab) => {
      const qb = F.box(id, Object.assign({ x: QX, y: y0, w: QW, type: 'q', fs: FS }, q));
      const ab = F.box(id + '_a', Object.assign({ x: AX, y: y0, w: AW, type: 'act', fs: FS }, a));
      const ib = F.box(id + '_i', Object.assign({ x: IX, y: y0, w: IW, type: 'info', fs: 17, align: 'left' }, inf));
      eq([qb, ab, ib]);
      F.arrow(qb, ab, { from: 'r', to: 'l', label: lab, lx: QX + QW + 16 });
      F.arrow(ab, ib, { from: 'r', to: 'l', dash: true });
      return qb;
    };

    const s0 = F.box('s0', { x: QX, y, w: QW, type: 'dx', fs: FS, node: 'alcohol', title: 'Persona adulta con consumo intenso que reduce o suspende el alcohol',
      text: 'Todas las personas ingresadas deben cribarse para el riesgo de abstinencia; el AUDIT y el AUDIT-PC pueden indicarlo (ASAM 2020, rec. VII.10).' });
    const s0b = F.box('s0_a', { x: AX, y, w: AW, type: 'act', fs: FS, node: 'audit', title: 'Si no hay ingreso: no suspender de golpe',
      text: 'A quien tiene dependencia y no ingresa, aconsejar que no reduzca bruscamente el consumo e informar de cómo contactar con los servicios de alcohol (NICE CG100, rec. 1.1.1.4).' });
    const s0c = F.box('s0_i', { x: IX, y, w: IW, type: 'warn', fs: 17, node: 'neuroadapt_sed', title: 'Dependencia de otros depresores',
      text: 'La dependencia física concomitante de benzodiacepinas o barbitúricos se ha propuesto como factor de riesgo de abstinencia complicada y obliga a vigilar la tolerancia a las benzodiacepinas (ASAM 2020). Retirada simultánea de alcohol y benzodiacepinas: considerar ingreso (NICE CG115, rec. 1.3.4.5).' });
    eq([s0, s0b, s0c]);
    F.arrow(s0, s0b, { from: 'r', to: 'l' }); F.arrow(s0b, s0c, { from: 'r', to: 'l', dash: true });
    y = s0.y + s0.h + 56;
    const s0box = s0;

    const q1 = row('q1', y,
      { node: 'kindling_abst_alc', title: '1 · ¿Antecedente de delirium tremens o de convulsiones de abstinencia, o crisis en el episodio actual?' },
      { title: 'Riesgo alto: ofrecer ingreso para abstinencia asistida', text: 'Con riesgo alto de convulsiones o de delirium tremens, ofrecer ingreso hospitalario (NICE CG100, rec. 1.1.1.1). Una crisis en el episodio actual, previa a la valoración, equivale a riesgo alto de abstinencia complicada (ASAM 2020).' },
      { title: 'Datos', text: 'El antecedente de delirium tremens aumenta la probabilidad de abstinencia grave (razón de verosimilitud 2,9; IC 95 % 1,7-5,2), y ningún signo aislado la descarta (Wood 2018; 14 estudios, 71 295 pacientes). Predijeron delirium tremens la hipopotasemia, la trombocitopenia y las lesiones cerebrales estructurales (Eyer 2011; 827 pacientes). NICE CG115 (1.3.4.5) añade como criterios de ingreso más de 30 unidades británicas al día, SADQ mayor de 30 y epilepsia.' }, 'Sí');
    F.arrow(s0box, q1, { from: 'b', to: 't' });
    y = q1.y + q1.h + 56;

    const q2 = row('q2', y,
      { node: 'alc_tardio', title: '2 · Persona hospitalizada: ¿PAWSS con 4 hallazgos o más?', text: 'La PAWSS predice abstinencia complicada en pacientes médicos; la ASAM la propone junto a la escala LARS (rec. II.10). En personas frágiles, con deterioro cognitivo, comorbilidad, sin apoyo social o de 16-17 años, umbral de ingreso más bajo (NICE CG100, rec. 1.1.1.3).' },
      { title: 'Riesgo alto de abstinencia grave: tratamiento preventivo', text: 'Pauta de carga en riesgo alto; al menos una dosis preventiva si el riesgo es menor pero hay antecedente de abstinencia grave, enfermedad aguda, coronariopatía grave o síntomas con alcoholemia positiva (ASAM 2020, rec. V.13-V.14). No retrasar el tratamiento por esperar analíticas (rec. II.18).' },
      { title: 'Datos', text: 'PAWSS con 4 hallazgos o más: razón de verosimilitud 174 (IC 95 % 43-696; especificidad 0,93); con 3 o menos: 0,07 (IC 95 % 0,02-0,26; sensibilidad 0,99). La mayoría de las herramientas no estaban plenamente validadas (Wood 2018). En la persona mayor la cronología puede ser distinta (ASAM 2020).' }, '≥4');
    F.arrow(q1, q2, { from: 'b', to: 't', label: 'No' });
    y = q2.y + q2.h + 56;

    const q3 = row('q3', y,
      { node: 'ciwa_ar', title: '3 · ¿Qué gravedad actual tiene? CIWA-Ar', text: 'Ejemplos de la ASAM: menos de 10, leve; 10-18, moderada; 19 o más, grave. La ASAM los presenta como ejemplos, no como umbrales validados.' },
      { node: 'cam', type: 'warn', title: 'Con delirium, la CIWA-Ar no sirve', text: 'Depende de síntomas referidos: usar una escala estructurada como CAM-ICU, RASS, DDS o MINDS (ASAM 2020, rec. VI.9). Interpretar con cautela si otras causas pueden elevar la puntuación (rec. II.12).' },
      { title: 'Datos', text: 'Diez ítems, máximo 67 puntos (Sullivan 1989). La pauta guiada por síntomas redujo la duración mediana del tratamiento de 68 a 9 horas y la dosis de clordiazepóxido, sin diferencias en convulsiones ni en delirium tremens (Saitz 1994). NICE propone la CIWA-Ar como complemento del juicio clínico (CG100, rec. 1.1.2.2; CG115, rec. 1.3.5.8).' }, 'delirium');
    F.arrow(q2, q3, { from: 'b', to: 't', label: '≤3' });
    y = q3.y + q3.h + 60;

    // ---------- Bloque 2: gravedad → ámbito ----------
    y = F.band(y, 'Gravedad y ámbito de tratamiento', { n: 2 }) + 26;
    const SW = (R - L - 2 * 40) / 3;
    const amb = F.box('amb', { x: L, y, w: SW, type: 'act', fs: FS, title: 'Ambulatorio', text: 'Leve (CIWA-Ar < 10) o moderada (10-18) sin factores de complicación, sin intoxicación actual, sin antecedente de crisis o delirium, sin comorbilidad relevante y con capacidad de acudir a las visitas (ASAM 2020, rec. VII.8). Leve con riesgo mínimo: tratamiento farmacológico o solo de soporte (rec. IV.16). Dispensar el mínimo de dosis necesario (rec. IV.24).' });
    const hos = F.box('hos', { x: L + SW + 40, y, w: SW, type: 'act', fs: FS, node: 'dt_alc', title: 'Hospital', text: 'Riesgo alto, moderada con factores de complicación o grave. La grave no complicada solo puede tratarse en ámbito ambulatorio con monitorización y por profesionales con amplia experiencia (ASAM 2020, rec. IV.18). En el hospital, la pauta guiada por síntomas es la preferida (rec. V.23; NICE CG100, rec. 1.1.3.4). Tras una crisis, ingreso con vigilancia estrecha (rec. VI.2).' });
    const uci = F.box('uci', { x: L + 2 * (SW + 40), y, w: SW, type: 'warn', fs: FS, node: 'delirium', title: 'UCI o unidad de cuidados intensivos', text: 'Delirium tremens: observación de enfermería estrecha, a menudo en UCI; acceso intravenoso inmediato; sedación hasta somnolencia ligera, con benzodiacepinas como primera línea (ASAM 2020, rec. VI.7, VI.10 y VI.13). También la abstinencia resistente a dosis altas de benzodiacepinas (rec. VI.26-VI.29).' });
    eq([amb, hos, uci]);
    const yh = q3.y + q3.h + 32, qa = F.boxes.q3_a;
    F.arrow(q3, amb, { from: 'b', to: 't', fa: 0.3, fb: 0.85, label: 'leve o moderada', lx: q3.x + q3.w * 0.3 + 10, ly: yh - 8, via: [[q3.x + q3.w * 0.3, yh], [amb.x + amb.w * 0.85, yh]] });
    F.arrow(q3, hos, { from: 'b', to: 't', fa: 0.8, label: 'moderada con riesgo o grave', lx: q3.x + q3.w * 0.8 + 10, ly: yh - 8, via: [[q3.x + q3.w * 0.8, yh], [hos.x + hos.w / 2, yh]] });
    F.arrow(qa, uci, { from: 'b', to: 't', label: 'delirium o resistencia', lx: qa.x + qa.w / 2 + 10, ly: yh - 8, via: [[qa.x + qa.w / 2, yh], [uci.x + uci.w / 2, yh]] });
    y = amb.y + amb.h + 30;

    // Diferencial obligado
    y = F.text(L, y + 18, 'Antes de atribuirlo todo a la abstinencia: descartar otras causas de delirium con exploración neurológica y médica (ASAM 2020, rec. I.11). Cada caja abre su ficha.', { bold: true, fs: 19, w: R - L }) + 8;
    const DW = (R - L - 4 * 24) / 5;
    const dd = [
      { node: 'hipoglucemia_psiq', title: 'Hipoglucemia', text: 'Comprobar la glucemia: la ASAM la cita entre las alternativas al delirium por abstinencia.' },
      { node: 'enc_hep', title: 'Encefalopatía hepática', text: 'La sedación puede enmascarar el inicio del coma hepático (ficha de Distraneurine, 4.4).' },
      { node: 'korsakoff', title: 'Encefalopatía de Wernicke', text: 'Puede coexistir con la abstinencia: ver bloque 4.' },
      { node: 'ghb_abst', title: 'Abstinencia de GHB/GBL', text: 'Preguntar por otros depresores; puede imitar la abstinencia alcohólica [fuente no localizada para la comparación clínica].' },
      { node: 'bzd_dep', title: 'Abstinencia de benzodiacepinas u otro GABAérgico', text: 'Delirium de más de 72 horas: valorar delirium por fármacos o abstinencia de gabapentina u otro agente (ASAM 2020, rec. VI.18).' }
    ].map((o, i) => F.box('dd' + i, Object.assign({ x: L + i * (DW + 24), y, w: DW, type: 'dx', fs: 17 }, o)));
    eq(dd);
    y = dd[0].y + dd[0].h + 60;

    // ---------- Bloque 3: elección farmacológica ----------
    y = F.band(y, 'Elección farmacológica (sin dosis: protocolo del centro y ficha técnica)', { n: 3 }) + 24;
    const GA = { x: L, w: 1100 }, GB = { x: L + 1140, w: 500 }, GC = { x: L + 1680, w: R - (L + 1680) };
    const gy = y, by = y + 40, PAD = 18, BW = (GA.w - 3 * PAD) / 2;
    const b1 = F.box('bz1', { x: GA.x + PAD, y: by, w: BW, type: 'drug', fs: 17, node: 'diazepam', title: 'Vida media larga: diazepam y clordiazepóxido',
      text: 'La ASAM prefiere las de acción larga, sin que ninguna sea más eficaz que otra (rec. V.19), y diazepam o clordiazepóxido para la pauta de carga (rec. V.24). En España su ficha incluye la deprivación alcohólica (Valium y Huberplex, 4.1). Solo la pauta fija de diazepam redujo el delirium tremens frente a placebo (OR 0,19; IC 95 % 0,05-0,76) (Bahji 2022).' });
    const b2 = F.box('bz2', { x: GA.x + 2 * PAD + BW, y: by, w: BW, type: 'drug', fs: 17, node: 'lorazepam', title: 'Hepatopatía o edad avanzada: lorazepam (u oxazepam)',
      text: 'Con signos de hepatopatía significativa, usar una benzodiacepina de menor metabolismo hepático (ASAM 2020, rec. V.20), por ejemplo lorazepam (NICE CG115, rec. 1.3.5.10). Dosis altas acumulan metabolitos de las de acción larga en hepatopatía y en mayores (rec. VI.17). En España, la ficha de lorazepam no recoge la abstinencia alcohólica (Orfidal, 4.1: fuera de ficha) y el oxazepam no figura en CIMA.' });
    eq([b1, b2]);
    const by2 = b1.y + b1.h + PAD;
    const b3 = F.box('bz3', { x: GA.x + PAD, y: by2, w: BW, type: 'act', fs: 17, node: 'ansiol_bzd', title: 'Pauta guiada por síntomas frente a fija',
      text: 'Guiada por síntomas: preferida donde hay valoración las 24 horas (NICE CG100, rec. 1.1.3.4; ASAM, rec. V.23). Fija con dosis adicionales si no puede aplicarse; con una de acción corta, pauta fija con descenso gradual para evitar rebote (rec. V.25-V.26). Frente a placebo, las benzodiacepinas solo redujeron con significación las convulsiones (RR 0,16; IC 95 % 0,04-0,69) (Amato 2010).' });
    const b4 = F.box('bz4', { x: GA.x + 2 * PAD + BW, y: by2, w: BW, type: 'warn', fs: 17, node: 'bzd_mayor', title: 'Seguridad',
      text: 'Vigilar sobresedación y depresión respiratoria (rec. V.21). Suspender la prescripción al terminar la abstinencia (rec. V.22). No usarlas como tratamiento continuado de la dependencia (NICE CG115, rec. 1.3.6.15). Con dosis intravenosas altas, vigilar hiponatremia y acidosis metabólica (rec. VI.15).' });
    eq([b3, b4]);
    const gAh = b3.y + b3.h + PAD - gy;
    F.group({ x: GA.x, y: gy, w: GA.w, h: gAh, label: 'A · Benzodiacepinas: primera línea (ASAM 2020; NICE CG100; WFSBP 2017)' });

    const c1 = F.box('clm', { x: GB.x + PAD, y: by, w: GB.w - 2 * PAD, type: 'drug', fs: 17, node: 'clometiazol', align: 'left', title: 'Clometiazol (Distraneurine)',
      text: 'Práctica española. Ficha (4.1): síntomas de abstinencia aguda, incluido el delirium tremens, «bajo una supervisión hospitalaria estricta»; no más de 10 días (4.2). Contraindicado en insuficiencia respiratoria aguda y en la depresión respiratoria central, incluida la intoxicación por alcohol, sedantes o hipnóticos (4.3). Colapso cardiorrespiratorio mortal con otros depresores; no prescribir a quien sigue bebiendo: con alcohol, sobre todo en cirrosis, depresión respiratoria mortal (4.4). Dependencia descrita con la prescripción ambulatoria indiscriminada (4.4). NICE: alternativa con precaución y solo en hospital (CG100, rec. 1.1.3.1). Pauta fija frente a placebo: menos convulsiones (OR 0,16; IC 95 % 0,04-0,65) (Bahji 2022).' });
    const c2 = F.box('fnb', { x: GC.x + PAD, y: by, w: GC.w - 2 * PAD, type: 'drug', fs: 17, node: 'fenobarbital', align: 'left', title: 'Fenobarbital: monoterapia o coadyuvante',
      text: 'Fuera de ficha en España: Luminal (4.1) solo autoriza la epilepsia y contraindica la intoxicación aguda por alcohol (4.3). ASAM: solo por clínicos con experiencia, por su margen estrecho; monoterapia si las benzodiacepinas están contraindicadas (rec. V.32-V.33); coadyuvante en la abstinencia grave o resistente con monitorización estrecha (rec. V.34, VI.27); parenteral solo en UCI (rec. V.35); en el delirium, alternativa no preferente (rec. VI.19). Dosis única añadida a lorazepam: UCI 8 % frente a 25 % (Rosenson 2013); el metaanálisis no confirmó menos ingresos en UCI (RR 0,92; IC 95 % 0,54-1,55) (Lee 2024).' });
    const ch = Math.max(c1.h, c2.h, gAh - 40 - PAD); c1.h = ch; c2.h = ch;
    F.group({ x: GB.x, y: gy, w: GB.w, h: ch + 40 + PAD, label: 'B · Clometiazol' });
    F.group({ x: GC.x, y: gy, w: GC.w, h: ch + 40 + PAD, label: 'C · Fenobarbital' });
    y = gy + Math.max(gAh, ch + 40 + PAD) + 30;

    const nd = F.box('neuro', { x: L, y, w: R - L, type: 'warn', fs: 18, node: 'haloperidol', title: 'Haloperidol y otros antipsicóticos: solo coadyuvantes, nunca en monoterapia',
      text: 'En el delirium por abstinencia, los neurolépticos frente a los sedantes-hipnóticos se asociaron a más duración del delirium y a más mortalidad (riesgo relativo de muerte 6,6) (Mayo-Smith 2004). La ASAM los admite como coadyuvantes de las benzodiacepinas cuando el delirium y las alucinaciones no se controlan, no en monoterapia (rec. VI.20); NICE ofrece lorazepam oral en primera línea y, si persisten los síntomas o se rechaza la vía oral, lorazepam o haloperidol parenterales (CG100, rec. 1.1.4.1). Agonistas α2, betabloqueantes y paraldehído no deben usarse para tratar el delirium (ASAM, rec. VI.21); la fenitoína no se usa para las crisis de abstinencia (NICE CG100, rec. 1.1.5.3).' });
    y = nd.y + nd.h + 30;

    y = F.text(L, y + 18, 'D · Alternativas y adyuvantes. «Fuera de ficha»: ninguna ficha española consultada incluye la abstinencia alcohólica en el apartado 4.1; su uso exige las condiciones del Real Decreto 1015/2009 (art. 13).', { bold: true, fs: 19, w: R - L }) + 8;
    const t = F.table({ x: L, y, fs: 17, cols: [{ w: 300, label: 'Fármaco' }, { w: 650, label: 'Lugar según guías' }, { w: 520, label: 'Ficha técnica en España (CIMA)' }, { w: R - L - 1470, label: 'Datos y límites' }],
      rows: [
        [{ t: 'Carbamazepina', node: 'carbamaz' }, 'Alternativa en la abstinencia leve o moderada y si las benzodiacepinas están contraindicadas; coadyuvante (ASAM 2020, rec. IV.16, V.28-V.29). NICE: benzodiacepina o carbamazepina (CG100, rec. 1.1.3.1).', 'En ficha: Tegretol (4.1) incluye el «síndrome de abstinencia al alcohol».', 'Mejoró la CIWA-Ar final frente a placebo, pero se asoció a más abandonos por efectos adversos (Bahji 2022). Interacciones por inducción enzimática: ver su ficha.'],
        [{ t: 'Oxcarbazepina', node: 'oxcarbazepina' }, 'No figura en las recomendaciones de la ASAM ni de NICE CG100.', 'Fuera de ficha: Trileptal (4.1) solo epilepsia.', 'Mejoró la CIWA-Ar final frente a placebo en el metaanálisis en red, con evidencia degradada por riesgo de sesgo (Bahji 2022).'],
        [{ t: 'Gabapentina', node: 'gabapentina' }, 'Alternativa en la abstinencia leve o moderada; opción favorable si se va a mantener para el trastorno por consumo (ASAM 2020, rec. V.27-V.28).', 'Fuera de ficha: Neurontin (4.1) epilepsia y dolor neuropático.', 'En hospitalizados, evidencia insuficiente: 8 estudios retrospectivos, 2030 pacientes (Mattle 2022). La ASAM advierte del uso indebido y del desvío (recuadro 6).'],
        [{ t: 'Valproato', node: 'valproato_fertil' }, 'Solo coadyuvante; evidencia insuficiente en monoterapia; no usar en hepatopatía ni en personas con capacidad de gestar (ASAM 2020, rec. V.29-V.31).', 'Fuera de ficha. Depakine Crono (4.3): contraindicado en el embarazo y «en mujeres en edad fértil» salvo Plan de Prevención de Embarazos, y en la hepatopatía previa o actual.', 'Redujo las convulsiones frente a placebo (OR 0,22; IC 95 % 0,05-0,86) (Bahji 2022). La contraindicación hepática pesa especialmente en el consumo de alcohol.'],
        [{ t: 'Dexmedetomidina', node: 'dexmedetomidina' }, 'Coadyuvante para la hiperactividad autonómica no controlada con benzodiacepinas; no usar sola para prevenir o tratar convulsiones ni delirium (ASAM 2020, rec. V.36, VI.6); en UCI, en la abstinencia resistente (rec. VI.29).', 'Fuera de ficha para la abstinencia: en CIMA solo constan formas intravenosas para sedación en UCI y procedimientos (ficha del atlas).', 'Adyuvante en UCI: sin diferencias significativas en la estancia, con más bradicardia e hipotensión; evidencia baja o muy baja (Polintan 2023). No trata las convulsiones.'],
        [{ t: 'Propofol y ketamina', node: 'ketamina' }, 'Propofol: en UCI, en la abstinencia resistente que ya requiere ventilación mecánica (ASAM 2020, rec. VI.28). Ketamina: sin recomendación en la ASAM.', 'Fuera de ficha para la abstinencia: Propofol Fresenius (4.1) anestesia y sedación en UCI con ventilación; Ketolar (4.1) anestesia.', 'Ketamina: 3 estudios como añadido en UCI, con resultados mixtos; la evidencia no permite conclusiones (Garel 2022).'],
        [{ t: 'Baclofeno', node: 'baclofeno' }, 'Evidencia insuficiente para tratar la abstinencia (ASAM 2020, rec. V.39).', 'Fuera de ficha: Lioresal (4.1) espasticidad.', 'Cuatro ensayos con 189 participantes, sin datos de convulsiones ni delirium; calidad muy baja (Liu 2019).'],
        [{ t: 'Oxibato sódico', node: 'oxibato_sodico' }, 'NICE: no usar GHB para el consumo de alcohol (CG115, rec. 1.3.6.14).', 'Fuera de ficha: en España solo narcolepsia con cataplejía (Xyrem, 4.1; ficha del atlas). Autorizado para el alcohol en Italia y Austria (Testino 2014).', 'Eficaz frente a placebo en un ensayo pequeño; sin pruebas de superioridad frente a benzodiacepinas o clometiazol; riesgo de uso indebido, sobre todo con policonsumo (Leone 2010).']
      ] });
    y = t.y + 60;

    // ---------- Bloque 4: tiamina y Wernicke ----------
    y = F.band(y, 'Tiamina parenteral y encefalopatía de Wernicke', { n: 4 }) + 24;
    const TW4 = (R - L - 3 * 30) / 4;
    const w1 = F.box('wk1', { x: L, y, w: TW4, type: 'q', fs: 17, node: 'korsakoff', title: '¿Sospecha de Wernicke? Criterios de Caine',
      text: 'Dos de cuatro: déficit dietético, signos oculomotores, disfunción cerebelosa y alteración del estado mental o leve déficit de memoria (Caine 1997; adoptados por la EFNS, Galvin 2010). La tríada completa es la excepción.' });
    const w2 = F.box('wk2', { x: L + TW4 + 30, y, w: TW4, type: 'act', fs: 17, title: 'Sospecha: tiamina parenteral antes de cualquier carbohidrato',
      text: 'EFNS: tiamina antes de cualquier carbohidrato, preferiblemente intravenosa (nivel C), y parenteral a toda persona en riesgo que llega a urgencias (Galvin 2010). NICE: parenteral al menos 5 días salvo que se descarte, seguida de oral; alta sospecha si hay intoxicación (CG100, rec. 1.2.1.4).' });
    const w3 = F.box('wk3', { x: L + 2 * (TW4 + 30), y, w: TW4, type: 'act', fs: 17, title: 'Profilaxis en la abstinencia',
      text: 'Oral en la abstinencia aguda o con desnutrición; parenteral seguida de oral si hay desnutrición o hepatopatía descompensada y la persona acude a urgencias o ingresa (NICE CG100, rec. 1.2.1.2-1.2.1.3). La ASAM prefiere la vía intravenosa o intramuscular con mala nutrición o abstinencia complicada (rec. V.7).' });
    const w4 = F.box('wk4', { x: L + 3 * (TW4 + 30), y, w: TW4, type: 'warn', fs: 17, node: 'hipoglucemia_psiq', title: 'Divergencia entre guías: orden tiamina-glucosa',
      text: 'La ASAM admite administrar tiamina y glucosa en cualquier orden o a la vez (rec. V.7), frente a la EFNS. Ante una hipoglucemia no se demora la glucosa, pero la tiamina parenteral se da de inmediato [fuente no localizada para esta conciliación].' });
    eq([w1, w2, w3, w4]);
    F.arrow(w1, w2, { from: 'r', to: 'l' }); F.arrow(w2, w3, { from: 'r', to: 'l', dash: true }); F.arrow(w3, w4, { from: 'r', to: 'l', dash: true });
    y = w1.y + w1.h + 60;

    // ---------- Bloque 5: electrolitos y realimentación ----------
    y = F.band(y, 'Magnesio, potasio, fosfato y riesgo de realimentación', { n: 5 }) + 24;
    const EW = (R - L - 2 * 30) / 3;
    const e1 = F.box('el1', { x: L, y, w: EW, type: 'act', fs: 17, title: 'Magnesio y fosfato',
      text: 'Magnesio si hay hipomagnesemia, arritmias, otras alteraciones electrolíticas o antecedente de crisis de abstinencia (ASAM 2020, rec. V.9); como profilaxis sistemática de la abstinencia no tiene apoyo empírico (rec. V.40). Fósforo menor de 1 mg/dl: suplementar; entre 1 y 2 mg/dl, corregir con nutrición adecuada (rec. V.10).' });
    const e2 = F.box('el2', { x: L + EW + 30, y, w: EW, type: 'warn', fs: 17, title: 'Potasio',
      text: 'Un potasio sérico más bajo al ingreso predijo delirium tremens (OR 0,33 por cada mmol/l; IC 95 % 0,17-0,65) (Eyer 2011). Con dosis intravenosas altas de benzodiacepinas, vigilar además la natremia (ASAM 2020, rec. VI.15).' });
    const e3 = F.box('el3', { x: L + 2 * (EW + 30), y, w: EW, type: 'info', fs: 17, align: 'left', title: 'Realimentación (NICE CG32)',
      text: 'El abuso de alcohol es uno de los criterios de riesgo alto de síndrome de realimentación cuando se suman dos o más (recuadro 1, rec. 1.4.6). En riesgo alto: inicio nutricional lento, vitaminas del grupo B y tiamina justo antes y durante los primeros 10 días, y suplementos de potasio, fosfato y magnesio salvo niveles altos (rec. 1.4.8).' });
    eq([e1, e2, e3]);
    y = e1.y + e1.h + 60;

    // ---------- Bloque 6: línea temporal ----------
    y = F.band(y, 'Línea temporal orientativa tras la última ingesta o la reducción del consumo', { n: 6 }) + 26;
    const T0 = 420, T1 = R - 20, H = 120, px = h => T0 + (T1 - T0) * h / H;
    [0, 6, 12, 24, 36, 48, 72, 96, 120].forEach(h => F.text(px(h), y + 18, h + ' h', { fs: 17, bold: true, anchor: 'middle', w: 80 }));
    y += 34;
    const tl = [
      { id: 'tl1', a: 6, b: 24, lab: 'Síntomas iniciales', type: 'info', text: 'Temblor, ansiedad, insomnio, taquicardia, sudoración: inicio a las 6-24 h (ASAM 2020; Mirijello 2015).' },
      { id: 'tl2', a: 8, b: 48, lab: 'Convulsiones', type: 'act', text: 'Desde las 8 h hasta las 48 h, con pico hacia las 24 h (ASAM 2020). Serie española de 539 episodios: media de 35 h (DE 23,3) (Monte Secades 2010).' },
      { id: 'tl3', a: 12, b: 48, lab: 'Alucinosis', type: 'dx', text: 'Alucinaciones a las 12-24 h, que suelen resolverse en 24-48 h si no aparece delirium (ASAM 2020).' },
      { id: 'tl4', a: 24, b: 120, lab: 'Delirium tremens', type: 'dx', node: 'dt_alc', text: 'La ASAM da dos plazos: aparición a las 72-96 h, con duración habitual de 2-3 días, y, en otro apartado, a las 24-48 h y hasta 3-5 días después. Los plazos varían entre fuentes.' }
    ];
    tl.forEach(o => {
      const b = F.box(o.id, { x: px(o.a), y, w: px(o.b) - px(o.a), type: o.type, fs: 16, node: o.node, align: 'left', text: o.text });
      F.text(L, y + Math.min(b.h, 60) / 2 + 8, o.lab, { bold: true, fs: 19, w: T0 - L - 20 });
      y = b.y + b.h + 14;
    });
    const tw = F.box('tlw', { x: L, y: y + 10, w: R - L, type: 'info', fs: 17, align: 'left', title: 'La secuencia no es obligada',
      text: 'No todas las personas pasan por todas las fases: una crisis puede presentarse sin otros signos llamativos, y en la persona mayor o con consumo concomitante de otros sedantes la cronología y la presentación pueden cambiar (ASAM 2020). Con abstinencia leve y riesgo bajo, puede observarse hasta 36 h, tras las cuales es improbable una abstinencia más grave (rec. V.1).' });
    y = tw.y + tw.h + 60;

    // ---------- Bloque 7: prevención de recaídas ----------
    y = F.band(y, 'Paso a la prevención de recaídas', { n: 7 }) + 24;
    const p0 = F.box('pr0', { x: L, y, w: 560, type: 'act', fs: 18, node: 'alcohol', title: 'La abstinencia es una puerta de entrada',
      text: 'Aprovechar el periodo de abstinencia para vincular a la persona al tratamiento del trastorno por consumo de alcohol e iniciar la farmacoterapia cuando el estado cognitivo lo permita (ASAM 2020, rec. V.12).' });
    const PX = L + 620, PW = (R - PX - 3 * 24) / 4;
    const pr = [
      { node: 'acamprosato', type: 'drug', title: 'Acamprosato', text: 'Tras una abstinencia completada, en dependencia moderada o grave, con intervención psicológica (NICE CG115, rec. 1.3.6.1).' },
      { node: 'naltrexona', type: 'drug', title: 'Naltrexona oral', text: 'Misma recomendación que el acamprosato (NICE CG115, rec. 1.3.6.1). Interacción con opioides: ver su ficha.' },
      { node: 'disulfiram', type: 'drug', title: 'Disulfiram', text: 'Si se busca la abstinencia y acamprosato o naltrexona no son adecuados, o por preferencia informada (NICE CG115, rec. 1.3.6.3).' },
      { node: 'nalmefeno', type: 'drug', title: 'Nalmefeno', text: 'Objetivo de reducción. Contraindicado con historia reciente de abstinencia aguda con alucinaciones, convulsiones o delirium tremens (Selincro, 4.3).' }
    ].map((o, i) => F.box('pr' + (i + 1), Object.assign({ x: PX + i * (PW + 24), y, w: PW, fs: 17 }, o)));
    eq([p0].concat(pr));
    F.arrow(p0, pr[0], { from: 'r', to: 'l' });
    y = p0.y + p0.h + 24;
    const QW7 = (R - L - 2 * 24) / 3;
    const pc = F.box('pr5', { x: L, y, w: QW7, type: 'info', fs: 17, node: 'cianamida', title: 'Cianamida',
      text: 'Interdictor de uso tradicional en España; en la consulta de CIMA de noviembre de 2026 no figura ningún medicamento con cianamida [fuente oficial no localizada sobre su retirada].' });
    const pg = F.box('pr6', { x: L + QW7 + 24, y, w: QW7, type: 'info', fs: 17, node: 'glp1_adicciones', title: 'Agonistas GLP-1: en investigación',
      text: 'Sin indicación autorizada. En un ensayo de 48 personas, la semaglutida a dosis bajas redujo el ansia y algunos resultados de consumo; los autores piden ensayos mayores (Hendershot 2025).' });
    const pb = F.box('pr7', { x: L + 2 * (QW7 + 24), y, w: QW7, type: 'warn', fs: 17, node: 'neuroadapt_sed', title: 'No prolongar los sedantes',
      text: 'Las benzodiacepinas solo para la abstinencia, no como tratamiento continuado de la dependencia (NICE CG115, rec. 1.3.6.15); el clometiazol, no más de 10 días (Distraneurine, 4.2).' });
    eq([pc, pg, pb]);
    y = pc.y + pc.h + 50;

    // ---------- Límites ----------
    F.box('lim', { x: L, y, w: R - L, type: 'lim', fs: 18, align: 'left', title: 'Límites de esta figura',
      text: 'Esquema docente: no sustituye al juicio clínico ni a los protocolos del centro, y no indica dosis. Las recomendaciones de la ASAM proceden en buena parte del consenso del panel y de estudios con riesgo de sesgo; el metaanálisis en red de Bahji (2022) degrada la calidad de la evidencia por sesgo, heterogeneidad e imprecisión. La situación de ficha técnica se refiere a España (CIMA, noviembre de 2026) y puede cambiar; las fichas de dexmedetomidina y oxibato se han tomado de las fichas del atlas. Los cortes de CIWA-Ar y los plazos de la línea temporal son orientativos y difieren entre fuentes. No se ha localizado en PubMed una guía o consenso de Socidrogalcohol sobre la abstinencia alcohólica [fuente no localizada]; la guía de la WFSBP (Soyka 2017) se cita como marco general. La figura trata a personas adultas; el embarazo, la infancia y la adolescencia requieren otras guías.' });

    F.footer('Fuentes: ASAM 2020; NICE CG100, CG115 y CG32; WFSBP (Soyka 2017); EFNS (Galvin 2010); Caine 1997; Wood 2018; Eyer 2011; Sullivan 1989; Saitz 1994; Amato 2010; Bahji 2022; Mayo-Smith 2004; Mirijello 2015; Monte Secades 2010; Rosenson 2013; Lee 2024; Mattle 2022; Polintan 2023; Garel 2022; Liu 2019; Leone 2010; Testino 2014; Hendershot 2025; fichas técnicas AEMPS-CIMA (Valium, Huberplex, Orfidal, Distraneurine, Luminal, Tegretol, Trileptal, Neurontin, Depakine Crono, Lioresal, Ketolar, Propofol Fresenius, Haloperidol Esteve) y EMA (Selincro). Esquema docente: no sustituye al juicio clínico.');
    return F;
  }
};
