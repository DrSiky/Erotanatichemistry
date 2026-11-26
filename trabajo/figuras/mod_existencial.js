// Figura: análisis existencial y psicoterapia existencial en clínica. Escuelas (Yalom, Frankl, Binswanger y Boss, Längle, Jaspers), fenómenos clínicos a los que se aplican y evidencia empírica, separando escuela de evidencia.
// Compilar en prueba: node tools/fig.js mod_existencial --dry --png <carpeta>
const TITLE = 'Análisis y psicoterapia existencial en clínica: escuelas, fenómenos a los que se aplican y evidencia empírica';
module.exports = {
  key: 'mod_existencial',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en tres bloques que separa escuela y evidencia. 1) Cinco tradiciones existenciales (Yalom, Frankl, Binswanger y Boss, Längle, Jaspers): en cada columna, de arriba abajo, sus conceptos (caja de doble borde), los fenómenos clínicos a los que se aplica (caja de trazo continuo) y el tipo de estudio empírico disponible (caja discontinua, con símbolos ●●●/●●○/●○○/○○○ que indican el diseño de los estudios, no el tamaño del efecto). 2) Fenómenos clínicos de orientación existencial y su diferencial con los trastornos codificados: la pregunta central es si el malestar es proporcionado y compatible con el funcionamiento o si constituye un trastorno, y siempre obliga a explorar el riesgo suicida cuando aparecen temas de muerte o falta de sentido. 3) Matriz de evidencia de las intervenciones derivadas o afines (metaanálisis de Vos 2015, psicoterapia centrada en el sentido de Breitbart, CALM, terapia de la dignidad de Chochinov, intención paradójica), casi toda en cáncer avanzado y cuidados paliativos. Esquema docente: no es una guía de tratamiento ni sustituye al juicio clínico.',
    refs: [
      'Yalom ID (1980). Existential Psychotherapy. New York: Basic Books [no verificada]',
      'Frankl VE (1946). Ärztliche Seelsorge: Grundlagen der Logotherapie und Existenzanalyse. Wien: Deuticke [no verificada]',
      'Jaspers K (1919). Psychologie der Weltanschauungen. Berlin: Springer [no verificada]',
      'Boss M (1957). Psychoanalyse und Daseinsanalytik. Bern: Huber [no verificada]',
      'Vos J, Craig M & Cooper M (2015). Existential therapies: a meta-analysis of their effects on psychological outcomes. J Consult Clin Psychol 83:115-128 · PMID 25045907',
      'Iverach L, Menzies RG & Menzies RE (2014). Death anxiety and its role in psychopathology: reviewing the status of a transdiagnostic construct. Clin Psychol Rev 34:580-593 · PMID 25306232',
      'Trapman ES & Braam AW (2023). The existential dimension of the experience of seclusion: a qualitative study among former psychiatric inpatients. BMC Psychiatry 23:715 · PMID 37789325',
      'Ewalds-Kvist B & Lützén K (2015). Miss B pursues death and Miss P life in the light of V. E. Frankl\'s existential analysis/logotherapy. Omega (Westport) 71:169-197 · PMID 26625511',
      'Gall H (1979). [Treatment of neurotic sleep disorders with the use of V. E. Frankl\'s logotherapy]. Psychiatr Neurol Med Psychol (Leipz) 31:369-372 · PMID 542545',
      'Jansson-Fröjmark M et al. (2022). Paradoxical intention for insomnia: a systematic review and meta-analysis. J Sleep Res 31:e13464 · PMID 34405469',
      'Ascher LM & Schotte DE (1999). Paradoxical intention and recursive anxiety. J Behav Ther Exp Psychiatry 30:71-79 · PMID 10489084',
      'Ghaemi SN (2001). Rediscovering existential psychotherapy: the contribution of Ludwig Binswanger. Am J Psychother 55:51-64 · PMID 11291191',
      'Bühler KE (2004). Existential analysis and psychoanalysis: specific differences and personal relationship between Ludwig Binswanger and Sigmund Freud. Am J Psychother 58:34-50 · PMID 15106398',
      'Martin W, Gergel T & Owen GS (2019). Manic temporality. Philos Psychol 32:72-97 · PMID 30416391',
      'Längle A (1990). [Method of existence analytic psychotherapy; título original en alemán no cotejado]. Z Klin Psychol Psychopathol Psychother 38:253-262 · PMID 2251867',
      'Längle A (2001). Old age from an existential-analytical perspective. Psychol Rep 89:211-215 · PMID 11783537',
      'Längle AA & Kriz J (2012). The renewal of humanism in European psychotherapy: developments and applications. Psychotherapy (Chic) 49:430-436 · PMID 23205824',
      'Ghaemi SN (2007). Existence and pluralism: the rediscovery of Karl Jaspers. Psychopathology 40:75-82 · PMID 17215593',
      'Valdes-Stauber J (2016). [Der Mensch an der Grenze seines Seins: Tragweite des Begriffs der «Grenzsituation» in Psychiatrie und Psychotherapie nach der Existenzontologie von Jaspers]. Fortschr Neurol Psychiatr 84:19-27 · PMID 26878428',
      'Bauer PR, Bronnec MLA, Schulze-Bonhage A, Altenmüller DM & Fuchs T (2023). Seizures as a struggle between life and death: an existential approach to the psychosocial impact of seizures in candidates for epilepsy surgery. Psychopathology 56:417-429 · PMID 36927809',
      'Kissane DW, Clarke DM & Street AF (2001). Demoralization syndrome: a relevant psychiatric diagnosis for palliative care. J Palliat Care 17:12-21 · PMID 11324179',
      'Breitbart W et al. (2010). Meaning-centered group psychotherapy for patients with advanced cancer: a pilot randomized controlled trial. Psychooncology 19:21-28 · PMID 19274623',
      'Breitbart W et al. (2012). Pilot randomized controlled trial of individual meaning-centered psychotherapy for patients with advanced cancer. J Clin Oncol 30:1304-1309 · PMID 22370330',
      'Breitbart W et al. (2015). Meaning-centered group psychotherapy: an effective intervention for improving psychological well-being in patients with advanced cancer. J Clin Oncol 33:749-754 · PMID 25646186',
      'Breitbart W et al. (2018). Individual meaning-centered psychotherapy for the treatment of psychological and existential distress: a randomized controlled trial in patients with advanced cancer. Cancer 124:3231-3239 · PMID 29757459',
      'Rodin G et al. (2018). Managing Cancer and Living Meaningfully (CALM): a randomized controlled trial of a psychological intervention for patients with advanced cancer. J Clin Oncol 36:2422-2432 · PMID 29958037',
      'Chochinov HM et al. (2005). Dignity therapy: a novel psychotherapeutic intervention for patients near the end of life. J Clin Oncol 23:5520-5525 · PMID 16110012',
      'Chochinov HM et al. (2011). Effect of dignity therapy on distress and end-of-life experience in terminally ill patients: a randomised controlled trial. Lancet Oncol 12:753-762 · PMID 21741309',
      'Wulandari BT & Rochmawati E (2024). Effectiveness of dignity therapy on well-being among patients under palliative care: a systematic review and meta-analysis. Int J Nurs Stud 149:104624 · PMID 37980718',
      'Li Y et al. (2020). Effectiveness of dignity therapy for patients with advanced cancer: a systematic review and meta-analysis of 10 randomized controlled trials. Depress Anxiety 37:234-246 · PMID 31808977',
      'Zhang Y, Li J & Hu X (2022). The effectiveness of dignity therapy on hope, quality of life, anxiety, and depression in cancer patients: a meta-analysis of randomized controlled trials. Int J Nurs Stud 132:104273 · PMID 35635908',
      'Shaygan M et al. (2024). Effects of meaning-based psychotherapy on post-traumatic growth and death anxiety in patients with cancer: a systematic review and meta-analysis. Support Care Cancer 32:251 · PMID 38532225',
      'Marco JH et al. (2024). A systematic review of the effectiveness of meaning-centred psychotherapies in depressed participants. Clin Psychol Psychother 31:e2936 · PMID 38009557',
      'Organización Mundial de la Salud (2025). CIE-11 para estadísticas de mortalidad y morbilidad, tabulación simple oficial (versión MMS 2025-01): 6B42 Trastorno por duelo prolongado; 6B43 Trastorno de adaptación; QE62 Duelo no complicado; MB22.2 Desmoralización (síntoma, capítulo 21)'
    ],
    nodes: ['husserl', 'psicoter_fen', 'sent_existenciales', 'espacio_vivido', 'tag', 'esq']
  },
  draw(Fig) {
    const W = 2400, L = 60, FS = 18;
    const F = new Fig({ key: 'mod_existencial', title: TITLE, w: W,
      desc: 'Cinco columnas con las escuelas existenciales (Yalom, Frankl, Binswanger y Boss, Längle, Jaspers), sus conceptos, los fenómenos clínicos a los que se aplican y el tipo de evidencia disponible; bloque de fenómenos clínicos (angustia ante la muerte, desmoralización y vacío, duelo, enfermedad grave, crisis vitales) con su diagnóstico diferencial y la exploración del riesgo suicida; y matriz de evidencia de las terapias centradas en el sentido, CALM, terapia de la dignidad e intención paradójica.' });
    const eq = bs => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };
    const G = 24, CW = Math.floor((W - 2 * L - 4 * G) / 5), cx = i => L + i * (CW + G);

    // ---------- Bloque 1: escuelas ----------
    let y = F.band(90, 'Escuelas: qué proponen (doble borde), a qué fenómenos se aplican (trazo continuo) y qué tipo de estudios tienen (discontinuo)', { n: 1 }) + 26;
    y = F.text(L, y + 18, 'Símbolos de diseño: ●●● metaanálisis de ensayos aleatorizados · ●●○ ensayos aleatorizados aislados · ●○○ estudios cualitativos, casos o revisiones teóricas · ○○○ sin estudios empíricos localizados. Indican el tipo de estudio disponible, no la magnitud del efecto.', { fs: 18, w: W - 2 * L }) + 18;
    const hd = ['Yalom: psicoterapia existencial', 'Frankl: logoterapia', 'Binswanger y Boss: Daseinsanálisis', 'Längle: análisis existencial', 'Jaspers: situaciones límite'];
    const c = [
      F.box('c_yal', { x: cx(0), y, w: CW, type: 'dx', fs: FS, node: 'yalom_dadas', align: 'left', title: hd[0],
        text: 'Cuatro preocupaciones últimas: muerte, libertad (con responsabilidad), aislamiento existencial y falta de sentido (Yalom 1980; Trapman 2023). El conflicto entre la conciencia de esas condiciones y las defensas frente a ellas genera ansiedad y parte de la psicopatología (Yalom 1980).' }),
      F.box('c_fra', { x: cx(1), y, w: CW, type: 'dx', fs: FS, node: 'frankl', align: 'left', title: hd[1],
        text: 'Voluntad de sentido como motivación básica; el sentido se realiza por valores de creación, de vivencia y de actitud ante el sufrimiento inevitable; si se frustra, aparecen frustración y vacío existencial (Ewalds-Kvist 2015). Técnicas: intención paradójica y derreflexión (Gall 1979).' }),
      F.box('c_bin', { x: cx(2), y, w: CW, type: 'dx', fs: FS, node: 'binswang', align: 'left', title: hd[2],
        text: 'Binswanger aplica la analítica de Heidegger: el Dasein como ser-en-el-mundo y la estructura existencial de cada vida (Ghaemi 2001); critica el naturalismo y el concepto de pulsión de Freud y describe «proyectos de mundo» (Bühler 2004). Boss conserva la técnica psicoanalítica y lee síntomas y sueños en su sentido manifiesto [fuente no localizada].' }),
      F.box('c_lan', { x: cx(3), y, w: CW, type: 'dx', fs: FS, align: 'left', title: hd[3],
        text: 'Desarrolla desde Frankl una psicoterapia de procedimiento fenomenológico para neurosis y trastornos de la personalidad, más allá del sufrimiento por sinsentido (Längle 1990). Las modalidades existencial-fenomenológicas forman parte de la renovación humanista europea (Längle y Kriz 2012). Cuatro motivaciones fundamentales de la existencia [fuente no localizada].' }),
      F.box('c_jas', { x: cx(4), y, w: CW, type: 'dx', fs: FS, node: 'jaspers_1913', align: 'left', title: hd[4],
        text: 'Situaciones límite: crisis inherentes a la vida humana que pueden volverse ocasión de existencia auténtica (Ghaemi 2007); tipología en la que el sufrimiento ocupa un lugar clave (Valdes-Stauber 2016). La enfermedad es a la vez situación límite y consecuencia de ella (Valdes-Stauber 2016). Ejemplos: azar, muerte y finitud, lucha y culpa (Bauer 2023).' })
    ];
    eq(c);
    y = c[0].y + c[0].h + 50;
    const a = [
      F.box('a_yal', { x: cx(0), y, w: CW, type: 'act', fs: FS, node: 'anx_exist', align: 'left', title: 'Angustia ante la muerte',
        text: 'Miedo básico propuesto en el núcleo de la hipocondría, el pánico y los trastornos de ansiedad y depresivos (Iverach 2014). En 10 personas que habían estado en una sala de aislamiento psiquiátrico aparecieron las cuatro preocupaciones (Trapman 2023).' }),
      F.box('a_fra', { x: cx(1), y, w: CW, type: 'act', fs: FS, node: 'logoter', align: 'left', title: 'Vacío existencial, duelo, sufrimiento inevitable',
        text: 'Aplicación principal en orientación (sobre todo en duelo) y prevención; el sinsentido como indicación psicoterapéutica en sentido estricto resultó relativamente rara (Längle 1990). Intención paradójica: insomnio y ansiedad con miedo al miedo (Ascher 1999).' }),
      F.box('a_bin', { x: cx(2), y, w: CW, type: 'act', fs: FS, node: 'ellen_west', align: 'left', title: 'Psicosis, manía y casos singulares',
        text: 'Casos clínicos reconstruidos como modos de ser-en-el-mundo (Ghaemi 2001); fobia histérica leída en términos de proyectos de mundo (Bühler 2004). Temporalidad alterada en la manía (Martin 2019).' }),
      F.box('a_lan', { x: cx(3), y, w: CW, type: 'act', fs: FS, node: 'duelo_vejez', align: 'left', title: 'Crisis vitales y envejecimiento',
        text: 'El envejecimiento plantea temas existenciales específicos; no elaborarlos puede conducir a crisis, trastornos psicológicos y enfermedad, e integrarlos favorece la madurez personal (Längle 2001).' }),
      F.box('a_jas', { x: cx(4), y, w: CW, type: 'act', fs: FS, node: 'reac_viv_anormal', align: 'left', title: 'Acontecimientos vitales críticos',
        text: 'Correspondencia clínica: acontecimientos vitales críticos, suicidalidad y estilos rígidos de pensamiento y conducta como «clausuras» frente a la situación límite; vulnerabilidad y competencia existenciales (Valdes-Stauber 2016).' })
    ];
    eq(a);
    c.forEach((b, i) => F.arrow(b, a[i], { from: 'b', to: 't', label: i === 0 ? 'se aplica a' : null }));
    y = a[0].y + a[0].h + 50;
    const e = [
      F.box('e_yal', { x: cx(0), y, w: CW, type: 'info', fs: FS, node: 'iad', align: 'left', title: '●○○ modelo · ●●● terapias afines',
        text: 'El marco no se ha probado como tal; terapias afines (apoyo-expresiva y otras familias existenciales) entran en el metaanálisis de Vos (2015). Iverach (2014) pide ensayos controlados amplios de terapias establecidas sobre la angustia ante la muerte como constructo transdiagnóstico.' }),
      F.box('e_fra', { x: cx(1), y, w: CW, type: 'info', fs: FS, node: 'insom', align: 'left', title: '●●● intención paradójica y terapias del sentido',
        text: 'Intención paradójica en insomnio: 10 ensayos, mejoría grande frente a comparadores pasivos y moderada frente a activos (Jansson-Fröjmark 2022). Añadida a exposición en miedo a hablar en público: mejor resultado si hay miedo al miedo y peor si no lo hay (Ascher 1999, estudio único).' }),
      F.box('e_bin', { x: cx(2), y, w: CW, type: 'info', fs: FS, node: 'ep_mania', align: 'left', title: '●○○ casuística y contraste cualitativo',
        text: 'Hipótesis de Minkowski y Binswanger sobre la manía contrastada y reformulada en un estudio de entrevistas (Martin 2019). Terapias experienciales-existenciales: 2 ensayos sin efecto significativo (Vos 2015). Sin ensayos específicos del Daseinsanálisis [fuente no localizada].' }),
      F.box('e_lan', { x: cx(3), y, w: CW, type: 'info', fs: FS, align: 'left', title: '○○○ sin ensayos localizados',
        text: 'En PubMed solo constan exposiciones del método y casos (Längle 1990, 2001); no se han localizado ensayos aleatorizados de esta escuela [fuente no localizada].' }),
      F.box('e_jas', { x: cx(4), y, w: CW, type: 'info', fs: FS, node: 'jaspers_compr', align: 'left', title: '●○○ marco interpretativo',
        text: 'Se usa como lente en estudios cualitativos: personas que estuvieron en sala de aislamiento (Trapman 2023; n = 10) y candidatas a cirugía de la epilepsia (Bauer 2023; n = 15). Concepto filosófico, no técnica; no se han localizado ensayos [fuente no localizada].' })
    ];
    eq(e);
    a.forEach((b, i) => F.arrow(b, e[i], { from: 'b', to: 't', dash: true, label: i === 0 ? 'estudiado con' : null }));
    y = e[0].y + e[0].h + 60;

    // ---------- Bloque 2: fenómenos clínicos y diferencial ----------
    y = F.band(y, 'Fenómenos clínicos de orientación existencial: ¿malestar proporcionado o trastorno?', { n: 2 }) + 30;
    const QW = 760;
    const q = F.box('q', { x: (W - QW) / 2, y, w: QW, type: 'q', fs: 19, title: '¿El malestar existencial es proporcionado y compatible con el funcionamiento, o forma parte de un trastorno?',
      text: 'La ansiedad existencial no figura como categoría en la CIE-11 y la desmoralización aparece solo como síntoma (MB22.2) (OMS, MMS 2025-01); DSM-5-TR [fuente no localizada]. El diferencial se apoya en los criterios de cada trastorno.' });
    const w0 = F.box('w0', { x: (W - QW) / 2 + QW + 60, y, w: W - L - ((W - QW) / 2 + QW + 60), type: 'warn', fs: 18, node: 'ideac_suic', align: 'left', title: 'Siempre: explorar el riesgo suicida',
      text: 'La desmoralización puede progresar hacia el deseo de morir o el suicidio (Kissane 2001). No normalizar como «existencial» un trastorno tratable [fuente no localizada].' });
    const i0 = F.box('i0', { x: L, y, w: (W - QW) / 2 - 60 - L, type: 'info', fs: 18, node: 'valores_etica', align: 'left', title: 'Escuela no es evidencia',
      text: 'Las escuelas aportan preguntas para la entrevista (muerte, sentido, libertad, soledad); la eficacia se ha medido en intervenciones manualizadas concretas, no en las escuelas (Vos 2015).' });
    eq([q, w0, i0]);
    F.arrow(q, w0, { from: 'r', to: 'l' });
    y = q.y + q.h + 70;
    const FW = Math.floor((W - 2 * L - 4 * G) / 5), fx = i => L + i * (FW + G);
    const f = [
      F.box('f1', { x: fx(0), y, w: FW, type: 'dx', fs: FS, node: 'panic', align: 'left', title: 'Angustia ante la muerte',
        text: 'Diferencial: hipocondría, pánico, ansiedad generalizada y depresión, donde el miedo a la muerte puede ser nuclear (Iverach 2014).' }),
      F.box('f2', { x: fx(1), y, w: FW, type: 'dx', fs: FS, node: 'ep_depmay', align: 'left', title: 'Desmoralización y vacío',
        text: 'Núcleo propuesto: desesperanza, pérdida de sentido y malestar existencial; diferenciable de la depresión y reconocible en cuidados paliativos (Kissane 2001). En la CIE-11, síntoma MB22.2, no trastorno.' }),
      F.box('f3', { x: fx(2), y, w: FW, type: 'dx', fs: FS, node: 'duelo', align: 'left', title: 'Duelo',
        text: 'Duelo no complicado (QE62) frente a trastorno por duelo prolongado (6B42) en la CIE-11 (OMS, MMS 2025-01).' }),
      F.box('f4', { x: fx(3), y, w: FW, type: 'dx', fs: FS, node: 'dep_med', align: 'left', title: 'Enfermedad grave o terminal',
        text: 'Carga de la enfermedad y mortalidad inminente generan malestar sustancial (Rodin 2018); también miedo a perder la dignidad y percepción de ser una carga (Kissane 2001).' }),
      F.box('f5', { x: fx(4), y, w: FW, type: 'dx', fs: FS, node: 'tAdapt', align: 'left', title: 'Crisis vitales',
        text: 'Situación límite (Valdes-Stauber 2016) frente a trastorno de adaptación (6B43, CIE-11; OMS, MMS 2025-01).' })
    ];
    eq(f);
    f.forEach((b, i) => F.arrow(q, b, { from: 'b', to: 't', fa: 0.1 + 0.2 * i }));
    y = f[0].y + f[0].h + 34;
    const g = [
      F.box('g1', { x: fx(0), y, w: FW, type: 'info', fs: 17, node: 'anx_exist', align: 'left', title: 'Relacionado', text: 'Ansiedad existencial (May) frente a ansiedad patológica [fuente no localizada].' }),
      F.box('g2', { x: fx(1), y, w: FW, type: 'info', fs: 17, node: 'bhs_beck', align: 'left', title: 'Medir', text: 'Desesperanza: escala de Beck; deseo de adelantar la muerte como resultado en los ensayos (Breitbart 2015).' }),
      F.box('g3', { x: fx(2), y, w: FW, type: 'info', fs: 17, node: 'dduelo', align: 'left', title: 'Relacionado', text: 'Depresión en el duelo y duelo complicado.' }),
      F.box('g4', { x: fx(3), y, w: FW, type: 'info', fs: 17, node: 'cssrs', align: 'left', title: 'Medir', text: 'Ideación y conducta suicida con instrumento estructurado.' }),
      F.box('g5', { x: fx(4), y, w: FW, type: 'info', fs: 17, node: 'soledad', align: 'left', title: 'Relacionado', text: 'Aislamiento social y soledad, distintos del aislamiento existencial (Yalom 1980).' })
    ];
    eq(g);
    f.forEach((b, i) => F.arrow(b, g[i], { from: 'b', to: 't', dash: true }));
    y = g[0].y + g[0].h + 60;

    // ---------- Bloque 3: matriz de evidencia ----------
    y = F.band(y, 'Evidencia empírica de las intervenciones existenciales y afines (casi toda en cáncer avanzado y cuidados paliativos)', { n: 3 }) + 22;
    const t = F.table({ x: L, y, fs: 17, cols: [{ w: 330, label: 'Intervención y vínculo con las escuelas' }, { w: 440, label: 'Estudio y población' }, { w: 1040, label: 'Resultado principal' }, { w: 470, label: 'Diseño y límites' }],
      rows: [
        [{ t: 'Terapias existenciales (cuatro familias)', node: 'logoter' }, 'Vos 2015: metaanálisis, 15 ensayos con datos propios, 1792 participantes adultos', 'Terapias del sentido (6): d 0,65 sobre el sentido vital tras la intervención y 0,57 en el seguimiento; d 0,47 sobre psicopatología. Apoyo-expresiva (5): d 0,20. Experiencial-existencial (2) y cognitivo-existencial (1): sin efecto significativo', { sym: '●●●', t: 'pocos estudios y de baja calidad; más apoyo en intervenciones estructuradas con enfermedad física' }],
        [{ t: 'Psicoterapia grupal centrada en el sentido (Breitbart), basada en Frankl', node: 'frankl' }, 'Breitbart 2010 (piloto, 90 con tumor sólido avanzado) y 2015 (253 con cáncer avanzado); control: psicoterapia grupal de apoyo', '2015: más mejoría en bienestar espiritual y calidad de vida y menos depresión, desesperanza, deseo de adelantar la muerte y malestar físico; sin diferencia en ansiedad. Por intención de tratar, solo calidad de vida, depresión y desesperanza', { sym: '●●○', t: 'análisis principal con quienes asistieron a ≥ 3 sesiones' }],
        [{ t: 'Psicoterapia individual centrada en el sentido', node: 'logoter' }, 'Breitbart 2012 (120, frente a masaje) y 2018 (321, frente a psicoterapia de apoyo y atención habitual mejorada)', '2018: frente a atención habitual, efecto en 5 de 7 variables (calidad de vida, sentido, bienestar espiritual, ansiedad, deseo de adelantar la muerte), d 0,1-0,34; frente a apoyo, solo calidad de vida y sentido (d 0,19)', { sym: '●●○', t: '2012: la ventaja dejaba de ser significativa a los 2 meses; 56 % completó el seguimiento' }],
        [{ t: 'CALM (Rodin)', node: 'dep_med' }, 'Rodin 2018: 305 con cáncer avanzado, intervención breve manualizada más atención habitual frente a atención habitual', 'Menos síntomas depresivos a los 3 meses (d 0,23) y a los 6 meses (d 0,29); mejor preparación para el final de la vida; sin efectos adversos identificados', { sym: '●●○', t: 'ensayo no enmascarado; efectos pequeños' }],
        [{ t: 'Terapia de la dignidad (Chochinov)', node: 'dep_med' }, 'Chochinov 2005 (sin grupo control) y 2011 (441 en cuidados paliativos con pronóstico ≤ 6 meses; frente a atención centrada en la persona y cuidados paliativos estándar)', '2011: sin diferencias en el malestar (variable principal); mejor valoración percibida (utilidad, dignidad, ayuda a la familia); aún no probada para reducir depresión, deseo de morir o suicidalidad. Metaanálisis de 16 estudios: mejora malestar ligado a la dignidad, esperanza y calidad de vida, no depresión ni ansiedad (Wulandari 2024)', { sym: '●●●', t: 'metaanálisis discordantes: en cáncer, Li 2020 y Zhang 2022 sí hallan mejoría en depresión y ansiedad (certeza muy baja a variable)' }],
        [{ t: 'Logoterapia y terapias del sentido en cáncer y en depresión', node: 'frankl' }, 'Shaygan 2024 (cáncer; 10 estudios, 555 participantes); Marco 2024 (depresión sin enfermedad física; 6 estudios)', 'Cáncer: menor ansiedad ante la muerte con heterogeneidad extrema (I² 98,38 %) y efecto no significativo sobre el crecimiento postraumático. Depresión: «probablemente eficaz»', { sym: '●●●', t: 'Marco 2024: 2 ensayos y 4 cuasiexperimentales; se requieren mejores diseños' }],
        [{ t: 'Intención paradójica (Frankl)', node: 'insom' }, 'Jansson-Fröjmark 2022: metaanálisis de 10 ensayos en insomnio', 'Mejoría grande frente a comparadores pasivos y moderada frente a activos; gran reducción de la ansiedad de ejecución ante el sueño', { sym: '●●●', t: 'se piden estudios metodológicamente más sólidos' }]
      ] });
    y = t.y + 40;

    F.box('lim', { x: L, y, w: W - 2 * L, type: 'lim', align: 'left', fs: 19, title: 'Límites de esta figura',
      text: 'Esquema docente, no guía de tratamiento: no sustituye al juicio clínico ni a la evaluación del riesgo. Las escuelas existenciales son marcos filosóficos y clínicos; su valor heurístico no equivale a eficacia demostrada, y la mayoría de los ensayos evalúan intervenciones manualizadas en cáncer avanzado o cuidados paliativos, por lo que no son extrapolables sin más a otros trastornos. Los conceptos de Yalom, Frankl, Boss y Jaspers se resumen a partir de fuentes secundarias indexadas; la obra primaria no se ha cotejado [no verificada]; lo que no tiene fuente localizada se marca como tal. Los símbolos indican el diseño de los estudios, no la certeza ni el tamaño del efecto. Los códigos CIE-11 proceden de la tabulación simple oficial MMS 2025-01.' });

    F.footer('Fuentes: Vos 2015 (PMID 25045907); Iverach 2014 (25306232); Breitbart 2010 (19274623), 2012 (22370330), 2015 (25646186) y 2018 (29757459); Rodin 2018 (29958037); Chochinov 2005 (16110012) y 2011 (21741309); Wulandari 2024 (37980718); Shaygan 2024 (38532225); Marco 2024 (38009557); Jansson-Fröjmark 2022 (34405469); Ascher 1999 (10489084); Gall 1979 (542545); Li 2020 (31808977); Zhang 2022 (35635908); Bauer 2023 (36927809); Trapman 2023 (37789325); Kissane 2001 (11324179); Ghaemi 2001 (11291191) y 2007 (17215593); Valdes-Stauber 2016 (26878428); Längle 1990 (2251867) y 2001 (11783537); Yalom 1980; Frankl 1946; CIE-11 MMS 2025-01. Esquema docente de apoyo; no sustituye al juicio clínico.');
    return F;
  }
};
