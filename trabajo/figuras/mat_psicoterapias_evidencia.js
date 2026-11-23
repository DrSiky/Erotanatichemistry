// Matriz: psicoterapias por trastorno del adulto según las guías (NICE y, donde NICE no llega, CANMAT/ISBD, guía europea, ACP y AASM).
// Números de recomendación leídos en el capítulo «Recommendations» de cada guía en nice.org.uk (consulta de noviembre de 2026).
module.exports = {
  key: 'mat_psicoterapias_evidencia',
  meta: {
    title: 'Psicoterapias por trastorno en la persona adulta: qué recomiendan las guías',
    kind: 'mat',
    cap: 'Matriz de catorce trastornos del adulto (bulimia y trastorno por atracón van en filas separadas porque NICE NG69 los recomienda con distinta fuerza) frente a once familias de psicoterapia. Cada celda lleva un símbolo y la guía con el número exacto de recomendación: ● recomendación firme en primera línea («offer», «should be used») o tratamiento elegible como primera opción; ◆ recomendación condicional («consider») u opción de segunda línea o tras rechazo o fracaso; ○ la guía declara pruebas insuficientes o no convincentes; ✕ no recomendada («do not offer», «do not routinely offer»); — la guía no la evalúa. En depresión se indica además la posición en las tablas 1 y 2 de NICE NG222, ordenadas por la interpretación del comité de su eficacia clínica y coste-efectividad. En insomnio NICE no tiene guía clínica (solo evaluaciones de tecnologías: TA922 y HTG624) y se usan la guía europea de 2023, la del ACP y la de la AASM. Sin dosis; no sustituye a las guías ni al juicio clínico.',
    refs: [
      'NICE (2022). Depression in adults: treatment and management. NICE guideline NG222, recomendaciones 1.5.2 (tabla 1), 1.6.1 (tabla 2), 1.7.1 y 1.8.5',
      'NICE (2011, última actualización de 15 de junio de 2020). Generalised anxiety disorder and panic disorder in adults: management. Clinical guideline CG113, recomendaciones 1.2.1, 1.2.10, 1.2.12-1.2.18, 1.2.20, 1.3.9, 1.3.10, 1.3.12-1.3.15 y 1.3.35',
      'NICE (2013). Social anxiety disorder: recognition, assessment and treatment. Clinical guideline CG159, recomendaciones 1.3.2-1.3.4, 1.3.7 y 1.6.3',
      'NICE (2005). Obsessive-compulsive disorder and body dysmorphic disorder: treatment. Clinical guideline CG31, recomendaciones 1.5.1.1-1.5.1.4, 1.5.2.3, 1.5.2.4, 1.5.2.7 y 1.5.2.8',
      'NICE (2018). Post-traumatic stress disorder. NICE guideline NG116, recomendaciones 1.6.5, 1.6.15-1.6.23',
      'NICE (2017, última actualización de 16 de diciembre de 2020). Eating disorders: recognition and treatment. NICE guideline NG69, recomendaciones 1.3.4-1.3.10, 1.3.24, 1.4.2-1.4.6, 1.4.9, 1.5.2-1.5.6 y 1.5.11',
      'NICE (2009). Borderline personality disorder: recognition and management. Clinical guideline CG78, recomendaciones 1.3.4.4 y 1.3.4.5',
      'NICE (2014, última actualización de 4 de septiembre de 2026). Psychosis and schizophrenia in adults: prevention and management. Clinical guideline CG178, recomendaciones 1.1.4.4, 1.3.4.1, 1.3.7.1, 1.3.7.2, 1.4.4.1-1.4.4.8, 1.4.6.2 y 1.5.4.1-1.5.4.2',
      'NICE (2014, última actualización de 2 de septiembre de 2025). Bipolar disorder: assessment and management. Clinical guideline CG185, recomendaciones 1.1.8, 1.6.1 y 1.7.2-1.7.4',
      'NICE (2011, última actualización de 21 de octubre de 2014). Alcohol-use disorders: diagnosis, assessment and management of harmful drinking (high-risk drinking) and alcohol dependence. Clinical guideline CG115, recomendaciones 1.1.2.4, 1.3.1.1, 1.3.3.1, 1.3.3.2, 1.3.4.4 y 1.3.6.1',
      'NICE (2023). Daridorexant for treating long-term insomnia. Technology appraisal guidance TA922, recomendación 1.1',
      'NICE (2022). Sleepio to treat insomnia and insomnia symptoms. HealthTech guidance HTG624 (antes MTG70), recomendación 1.1',
      'Yatham LN et al. (2018). Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord 20:97-170 · PMID 29536616 (tabla 10, leída en el texto completo de PMC5947163)',
      'Riemann D et al. (2023). The European Insomnia Guideline: an update on the diagnosis and treatment of insomnia 2023. J Sleep Res 32:e14035 · PMID 38016484',
      'Qaseem A et al. (2016). Management of chronic insomnia disorder in adults: a clinical practice guideline from the American College of Physicians. Ann Intern Med 165:125-133 · PMID 27136449',
      'Edinger JD et al. (2021). Behavioral and psychological treatments for chronic insomnia disorder in adults: an American Academy of Sleep Medicine clinical practice guideline. J Clin Sleep Med 17:255-262 · PMID 33164742',
      'Storebø OJ et al. (2020). Psychological therapies for people with borderline personality disorder. Cochrane Database Syst Rev 5:CD012955 · PMID 32368793',
      'Milrod B et al. (2007). A randomized controlled clinical trial of psychoanalytic psychotherapy for panic disorder. Am J Psychiatry 164:265-272 · PMID 17267789'
    ],
    nodes: ['tb2', 'tcc_inf', 'ter_fam_inf']
  },
  draw(Fig) {
    const W = 2640, X = 40, FS = 15;
    const F = new Fig({ key: 'mat_psicoterapias_evidencia', title: 'Psicoterapias por trastorno en la persona adulta: qué recomiendan las guías', desc: 'Matriz de catorce filas de trastornos del adulto por once familias de psicoterapia (TCC, activación conductual, interpersonal, psicodinámica, DBT y MBT, EMDR, intervención familiar, tercera generación, TCC para el insomnio, psicoeducación y terapia de apoyo). Cada celda tiene un símbolo de fuerza de recomendación y la guía NICE con su número de recomendación, o la guía alternativa cuando NICE no la cubre. Siguen notas por trastorno, fichas relacionadas y los límites de la figura.', w: W });
    const LW = 250;
    const heads = ['TCC (individual o grupal)', 'Activación conductual', 'Psicoterapia interpersonal', 'Psicodinámica (breve, PFPP, ISTDP)', 'DBT / MBT', 'EMDR', 'Intervención familiar o de pareja', 'Tercera generación (ACT, MBCT)', 'TCC para el insomnio (TCC-I)', 'Psicoeducación', 'Terapia de apoyo / counselling'];
    const CWS = [300, 180, 180, 210, 210, 180, 210, 210, 210, 210, 210];
    const cols = [{ w: LW, label: 'Trastorno y guía (personas adultas)' }].concat(heads.map((h, i) => ({ w: CWS[i], label: h })));
    const c = (sym, t, node) => ({ sym, t, node });
    const N = '—';
    let y = 96;
    y = F.text(X, y + 18, 'Cómo leerla: ● recomendación firme en primera línea («offer», «should be used») o elegible como primera opción · ◆ recomendación condicional («consider») u opción tras rechazo o fracaso · ○ la guía declara pruebas insuficientes o no convincentes · ✕ no recomendada («do not offer», «do not routinely offer») · — la guía no la evalúa. Los números son recomendaciones NICE de la guía de la fila; en depresión, «n.º» es la posición en las tablas 1 (menos grave) y 2 (más grave) de NG222, ordenadas por el comité según eficacia y coste-efectividad. CANMAT = CANMAT/ISBD 2018. Solo personas adultas; sin dosis.', { fs: 18, w: W - 2 * X }) + 14;
    y = F.band(y, 'Matriz trastorno × psicoterapia (fichas: primera fila; trastornos: primera columna)', { n: 1 }) + 12;
    const t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Ficha de la terapia ↗', bold: true }, { t: 'TCC (Beck)', node: 'tcc_dep' }, { t: 'Activación conductual', node: 'activ_conduct' }, { t: 'IPT', node: 'ipt_dep' }, { t: 'Psicodinámica', node: 'psicodin_breve' }, { t: 'DBT', node: 'dbt' }, { t: 'EMDR', node: 'emdr_proc' }, { t: 'Intervención familiar', node: 'interv_fam' }, { t: 'MBCT', node: 'mbct' }, { t: 'TCC-I', node: 'tcci' }, { t: 'Psicoeducación', node: 'interv_fam' }, { t: 'Psicoterapia de apoyo', node: 'psicot_apoyo' }],
      [{ t: 'Depresión · NICE NG222 (2022)', node: 'ddm' },
        c('●', 'menos grave 1.5.2: grupal n.º 2, individual n.º 4; más grave 1.6.1: con antidepresivo n.º 1, individual n.º 2; ◆ grupal para prevenir recaídas (1.8.5)'),
        c('●', '1.5.2: grupal n.º 3, individual n.º 5; 1.6.1: individual n.º 3'),
        c('●', '1.5.2: n.º 8; 1.6.1: n.º 8'),
        c('●', 'psicodinámica breve 1.5.2: n.º 11; 1.6.1: n.º 7. PFPP e ISTDP no constan'),
        N, N,
        c('◆', 'terapia conductual de pareja si la relación contribuye (1.7.1)'),
        c('●', 'mindfulness y meditación en grupo, menos grave: 1.5.2 n.º 7; ◆ MBCT para prevenir recaídas (1.8.5)'),
        N,
        c('●', 'autoayuda guiada con material de TCC, AC o psicoeducativo: 1.5.2 n.º 1; 1.6.1 n.º 9'),
        c('●', 'counselling: 1.5.2 n.º 10; 1.6.1 n.º 6')],
      [{ t: 'Ansiedad generalizada · NICE CG113', node: 'tag' },
        c('●', 'paso 3: TCC o relajación aplicada (1.2.18); paso 2: autoayuda basada en TCC (1.2.12-1.2.14)'),
        N, N, N, N, N, N, N, N,
        c('●', 'paso 1: educación y monitorización activa (1.2.10); paso 2: grupos psicoeducativos basados en TCC (1.2.12, 1.2.15)'),
        N],
      [{ t: 'Trastorno de pánico · NICE CG113', node: 'panic' },
        c('●', 'TCC de 7-14 h en total (1.3.12-1.3.15); autoayuda si es leve-moderado (1.3.9)', 'tcc_panico'),
        N, N,
        c('—', 'no evaluada; PFPP > relajación aplicada en un ECA de 49 personas (Milrod 2007)', 'pfpp'),
        N, N, N, N, N,
        c('—', 'solo información sobre grupos de apoyo (1.3.10)'),
        N],
      [{ t: 'Ansiedad social · NICE CG159', node: 'fobia_soc' },
        c('●', 'individual, modelo de Clark y Wells o de Heimberg (1.3.2); no preferir la grupal (1.3.3); ◆ autoayuda con apoyo si rechaza la TCC (1.3.4)'),
        N, N,
        c('◆', 'psicodinámica breve específica si rechaza TCC y fármacos (1.3.7)'),
        N, N, N,
        c('✕', 'no ofrecer de rutina mindfulness (MBSR, MBCT) (1.6.3)'),
        N, N,
        c('✕', 'no ofrecer de rutina terapia de apoyo (1.6.3)')],
      [{ t: 'TOC · NICE CG31 (2005)', node: 'toc_dsm' },
        c('●', 'TCC con EPR: baja intensidad si el deterioro es leve (1.5.1.1); intensiva o ISRS si es moderado (1.5.1.3); con ISRS si es grave (1.5.1.4); ◆ terapia cognitiva adaptada (1.5.2.3, 1.5.2.7)', 'epr'),
        N, N,
        c('○', 'psicoanálisis: «sin pruebas convincentes» (1.5.2.8)'),
        N, N,
        c('◆', 'familiar como coterapeuta en la EPR (1.5.2.4); ○ terapia de pareja (1.5.2.8)'),
        N, N, N, N],
      [{ t: 'TEPT · NICE NG116 (2018)', node: 'ptsd' },
        c('●', 'TCC centrada en el trauma individual: procesamiento cognitivo, terapia cognitiva, NET o exposición prolongada (1.6.15-1.6.16); ◆ computerizada con apoyo (1.6.21)'),
        N, N, N, N,
        c('●', 'más de 3 meses tras trauma no bélico (1.6.19); ◆ 1-3 meses si la persona la prefiere (1.6.18)', 'emdr_proc'),
        N, N,
        c('◆', 'TCC dirigida al sueño si no acepta una terapia centrada en el trauma o quedan síntomas (1.6.23)'),
        c('—', 'no evaluada aislada; es componente obligado de la TCC centrada en el trauma y del EMDR (1.6.17, 1.6.20); ✕ debriefing psicológico (1.6.5)'),
        N],
      [{ t: 'Trastorno por atracón · NICE NG69', node: 'bed' },
        c('●', 'autoayuda guiada de TCC (1.4.2) → TCC-TCA grupal (1.4.4) → ◆ TCC-TCA individual (1.4.6)', 'tcc_e'),
        N, N, N, N, N, N, N, N, N, N],
      [{ t: 'Bulimia nerviosa · NICE NG69', node: 'bul' },
        c('◆', 'autoayuda guiada de TCC (1.5.2) → TCC-TCA individual (1.5.4); ambas «considerar»', 'tcc_e'),
        N, N, N, N, N,
        c('—', 'en adultos; la terapia familiar (FT-BN) se ofrece a menores (1.5.6)'),
        N, N, N, N],
      [{ t: 'Anorexia nerviosa · NICE NG69', node: 'anor' },
        c('◆', 'TCC-TCA individual, una de tres junto a MANTRA y SSCM (1.3.4)', 'tcc_e'),
        N, N,
        c('◆', 'psicodinámica focal (FPT) si las tres anteriores no son aceptables o fallan (1.3.8)'),
        N, N,
        c('—', 'en adultos; la terapia familiar (FT-AN) se considera en menores (1.3.10)'),
        N, N, N,
        c('◆', 'manejo clínico de apoyo especializado (SSCM), una de tres (1.3.4, 1.3.7)')],
      [{ t: 'Trastorno límite de la personalidad · NICE CG78 (2009)', node: 'tlp' },
        N, N, N,
        c('—', 'no evaluada en CG78'),
        c('◆', 'DBT integral en mujeres si reducir las autolesiones es prioritario (1.3.4.5); MBT no nombrada; ambas > tratamiento habitual con evidencia de baja calidad (Storebø 2020)', 'dbt'),
        N, N, N, N, N, N],
      [{ t: 'Psicosis y esquizofrenia · NICE CG178', node: 'esq' },
        c('●', 'individual, al menos 16 sesiones, en el primer episodio, la recaída y la recuperación (1.3.4.1, 1.3.7.1, 1.4.4.1, 1.5.4.1)', 'tccp'),
        N, N,
        c('—', 'no como tratamiento; sus principios pueden ayudar a comprender (1.4.6.2)'),
        N, N,
        c('●', 'al menos 10 sesiones en 3-12 meses (1.3.4.1, 1.3.7.2, 1.4.4.2)', 'interv_fam'),
        N, N,
        c('●', 'programa educativo y de apoyo para cuidadores (1.1.4.4)'),
        c('✕', 'no ofrecer de rutina counselling ni psicoterapia de apoyo (1.4.4.6)')],
      [{ t: 'Trastorno bipolar · NICE CG185 y CANMAT 2018', node: 'tb1' },
        c('●', 'depresión bipolar: TCC, IPT o terapia conductual de pareja (1.6.1); intervención estructurada específica para prevenir recaídas (1.7.3); CANMAT: 2.ª línea'),
        N,
        c('●', 'depresión bipolar (1.6.1); IPSRT: 3.ª línea en CANMAT', 'ipsrt'),
        N,
        c('○', 'DBT: evidencia insuficiente (CANMAT, tabla 10)'),
        N,
        c('●', 'intervención familiar (1.7.2) y programa para cuidadores (1.1.8); terapia focalizada en la familia: 2.ª línea en CANMAT; otras intervenciones familiares o para cuidadores: evidencia insuficiente (CANMAT, tabla 10)'),
        c('○', 'MBCT: evidencia insuficiente (CANMAT, tabla 10)'),
        N,
        c('●', '1.ª línea en el mantenimiento (CANMAT, tabla 10); componente de la intervención estructurada (1.7.4)'),
        N],
      [{ t: 'Insomnio crónico · sin guía clínica NICE', node: 'insom' },
        N, N, N, N, N, N, N, N,
        c('●', '1.ª línea (Riemann 2023, grado A; Qaseem 2016; Edinger 2021); NICE TA922 1.1: daridorexant solo si la TCC-I no funcionó, no está disponible o no es adecuada; NICE HTG624 1.1: TCC-I digital (Sleepio) en atención primaria en lugar de higiene del sueño o hipnóticos', 'tcci'),
        c('✕', 'higiene del sueño como intervención única: se sugiere no usarla (Edinger 2021, condicional)'),
        N],
      [{ t: 'Trastorno por consumo de alcohol · NICE CG115', node: 'alcohol' },
        c('●', 'TCC, conductual o de red social en el consumo perjudicial o la dependencia leve (1.3.3.1); tras la desintoxicación, junto a fármaco (1.3.6.1, «considerar»)'),
        N, N, N, N, N,
        c('●', 'terapia conductual de pareja (1.3.3.2); ◆ reuniones familiares (1.1.2.4)'),
        N, N,
        c('◆', 'parte de los programas comunitarios intensivos tras la desintoxicación (1.3.4.4)'),
        N]
    ] });
    y = t.y + 40;

    // 2. Notas
    y = F.band(y, 'Notas por trastorno y fichas relacionadas', { n: 2 }) + 24;
    const gap = 33, perRow = 3, bw = Math.floor((W - 2 * X - (perRow - 1) * gap) / perRow);
    const notes = [
      { id: 'n_grupo', node: 'psicot_grupo', title: 'Formato grupal', text: 'Primera línea en depresión (TCC y AC grupales, NG222 1.5.2), TOC de baja intensidad (CG31 1.5.1.1) y trastorno por atracón (TCC-TCA grupal, NG69 1.4.4); en bipolar, individual, de grupo o familiar (CG185 1.7.3). En ansiedad social no se prefiere a la individual (CG159 1.3.3).' },
      { id: 'n_tlp', node: 'mbt', title: 'TLP: duración y MBT', text: 'CG78 1.3.4.4: no usar intervenciones psicológicas breves (menos de 3 meses) para el TLP fuera de un servicio estructurado. La MBT reduce autolesiones y suicidalidad frente al tratamiento habitual, con evidencia de baja calidad (Storebø 2020).' },
      { id: 'n_psicosis', node: 'tccp', title: 'Psicosis: otras intervenciones', text: '◆ Arteterapias, sobre todo para síntomas negativos (CG178 1.4.4.3). ✕ Terapia de adherencia como intervención específica (1.4.4.7). No ofrecer de rutina el entrenamiento en habilidades sociales (1.4.4.8).' },
      { id: 'n_alc', node: 'entrev_motiv', title: 'Alcohol: intervención motivacional', text: 'Realizar una intervención motivacional, con los elementos de la entrevista motivacional, en la evaluación inicial de toda persona con consumo problemático (CG115 1.3.1.1).' },
      { id: 'n_psd', node: 'istdp', title: 'PFPP e ISTDP', text: 'Ninguna de las guías NICE consultadas las nombra en sus recomendaciones; la única psicodinámica que figura es la breve (NG222, CG159) y la focal en anorexia (NG69); CG178 solo menciona sus principios para comprender la experiencia de la persona (1.4.6.2). La PFPP tiene un ECA favorable frente a relajación aplicada (Milrod 2007).' },
      { id: 'n_3g', node: 'act_hayes', title: 'ACT y tercera generación', text: 'La ACT no aparece en el capítulo de recomendaciones de ninguna de las diez guías NICE consultadas. El mindfulness solo figura en NG222 (en grupo y MBCT) y en CG159, donde no se recomienda de rutina.' },
      { id: 'n_tca', node: 'tcc_e', title: 'TCA: menores y fármacos', text: 'NG69 reserva la terapia familiar para menores (FT-AN 1.3.10; FT-BN 1.5.6) y desaconseja («do not offer») la medicación como tratamiento único en anorexia, atracón y bulimia (1.3.24, 1.4.9, 1.5.11).' },
      { id: 'n_pan', node: 'tcc_panico', title: 'Pánico y ansiedad generalizada', text: 'CG113 organiza ambos en pasos: lo menos intrusivo primero (1.2.1). En ansiedad generalizada la relajación aplicada es alternativa a la TCC (1.2.18, 1.2.20). En pánico, derivar a salud mental especializada tras dos intervenciones sin mejoría (1.3.35).' },
      { id: 'n_bip', node: 'tb2', title: 'Bipolar: CANMAT frente a NICE', text: 'CANMAT/ISBD 2018 sitúa la psicoeducación en 1.ª línea del mantenimiento, TCC y terapia focalizada en la familia en 2.ª y la IPSRT en 3.ª; NICE ofrece TCC, IPT o terapia de pareja en la depresión bipolar (1.6.1). Se muestran ambas.' }
    ];
    // se miden las cajas en una figura auxiliar para igualar alturas por fila
    const M = new Fig({ key: 'medida', title: 'medida', w: W });
    const mh = Math.max(...notes.map((o, i) => M.box('m' + i, { x: X, y: 100 + i * 1000, w: bw, fs: 17, align: 'left', type: 'info', title: o.title, text: o.text, node: o.node }).h));
    notes.forEach((o, i) => {
      const r = Math.floor(i / perRow), k = i % perRow;
      F.box(o.id, { x: X + k * (bw + gap), y: y + r * (mh + 26), w: bw, fs: 17, align: 'left', type: 'info', title: o.title, text: o.text, node: o.node, minH: mh });
    });
    y += Math.ceil(notes.length / perRow) * (mh + 26) + 14;
    F.box('lim', { x: X, y, w: W - 2 * X, type: 'lim', align: 'left', fs: 18, title: 'Límites de la figura',
      text: 'Esquema docente que resume lo que dicen las guías citadas (consulta de noviembre de 2026); no sustituye al juicio clínico ni a la lectura de cada guía. Las guías NICE son británicas, de fechas muy distintas (CG31 es de 2005 y CG78 de 2009; NICE anunció en junio de 2026 la revisión de CG78 tras la CIE-11) y pueden no reflejar ensayos posteriores; un «—» significa que la guía no evalúa esa terapia, no que sea ineficaz. Los símbolos traducen la redacción de cada recomendación y no son comparables entre guías como medida de tamaño del efecto. Solo personas adultas: en infancia y adolescencia las recomendaciones cambian (terapia familiar en TCA, TCC con la familia en TOC). La combinación con fármacos se omite salvo cuando forma parte de la recomendación.' });
    F.footer('Fuentes: NICE NG222 (2022), CG113 (2011, act. 2020), CG159 (2013), CG31 (2005), NG116 (2018), NG69 (2017, act. 2020), CG78 (2009), CG178 (2014, act. 2026), CG185 (2014, act. 2025), CG115 (2011, act. 2014), TA922 (2023) y HTG624 (2022), leídas en nice.org.uk; CANMAT/ISBD 2018 (PMID 29536616); guía europea de insomnio 2023 (PMID 38016484); ACP 2016 (PMID 27136449); AASM 2021 (PMID 33164742); Storebø 2020 (PMID 32368793); Milrod 2007 (PMID 17267789). Esquema docente para personas adultas.');
    return F;
  }
};
