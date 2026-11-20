// Figura: la Psicopatología general de Karl Jaspers (1913) como método. Comprender y explicar, forma y contenido, reacción/desarrollo/proceso, delirio primario frente a ideas deliroides, criterios externos del delirio, recepción (Schneider, Conrad, lecturas contemporáneas) y evidencia empírica, separando tesis, intérpretes y evidencia.
// Compilar en prueba: node tools/fig.js mod_jaspers --dry --png <carpeta>
const TITLE = 'La Psicopatología general de Jaspers (1913) como método: comprender y explicar, proceso y delirio primario; recepción y evidencia empírica';
module.exports = {
  key: 'mod_jaspers',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cinco bloques que separa tres planos con tres tipos de caja: la tesis de Jaspers (caja de doble borde), la de sus intérpretes y críticos (trazo continuo) y la evidencia empírica (trazo discontinuo, con símbolos de diseño). 1) El método: comprensión estática (fenomenología), comprensión genética y explicación causal, la distinción entre forma y contenido y las lecturas discordantes de qué significa «comprender». 2) Los tres tipos de curso de la vida psíquica (reacción vivencial, desarrollo de la personalidad y proceso) decididos por la pregunta de la continuidad de sentido, con sus críticas. 3) El delirio: los criterios externos (certeza, incorregibilidad, imposibilidad del contenido), que para Jaspers había que sobrepasar, la idea deliroide comprensible y la vivencia delirante primaria incomprensible con sus formas. 4) La recepción: Schneider (síntomas de primer y segundo rango), Conrad (trema y apofanía), Matussek y la psicopatología fenomenológica contemporánea (Fuchs, Stanghellini, Parnas, Sass) junto a las críticas a los criterios del delirio (Spitzer 1990) y el modelo de la saliencia aberrante. 5) Matriz que contrasta seis tesis con los estudios empíricos disponibles: fiabilidad del juicio de extravagancia, delirio primario, fases de Conrad, síntomas de primer rango, dimensiones de la convicción y continuidad con la población general. Esquema docente: no sustituye al juicio clínico.',
    refs: [
      'Jaspers K (1913). Allgemeine Psychopathologie. Berlin: Springer (trad. esp.: Psicopatología general. México: Fondo de Cultura Económica) [obra primaria no cotejada]',
      'Jaspers K (1910). Eifersuchtswahn. Ein Beitrag zur Frage: «Entwicklung einer Persönlichkeit» oder «Prozess»? Z Gesamte Neurol Psychiatr 1:567-637 [no verificada]',
      'Lanteri-Laura G (1962). [The concept of process in K. Jaspers\' psychopathology research; título original en francés no cotejado]. Evol Psychiatr (Paris) 27:459-499 · PMID 13928712',
      'Jaspers K (1968). The phenomenological approach in psychopathology [trad. inglesa del artículo de 1912 «Die phänomenologische Forschungsrichtung in der Psychopathologie»]. Br J Psychiatry 114:1313-1323 · PMID 5702272',
      'Schneider K (1950). Klinische Psychopathologie. Stuttgart: Thieme (trad. esp.: Psicopatología clínica. Madrid: Triacastela, 1997) [obra primaria no cotejada]',
      'Conrad K (1958). Die beginnende Schizophrenie: Versuch einer Gestaltanalyse des Wahns. Stuttgart: Thieme [obra primaria no cotejada]',
      'Kretschmer E (1918). Der sensitive Beziehungswahn. Berlin: Springer [obra primaria no cotejada]',
      'Matussek P (1952). Untersuchungen über die Wahnwahrnehmung. 1. Mitteilung: Veränderungen der Wahrnehmungswelt bei beginnendem, primären Wahn. Arch Psychiatr Nervenkr Z Gesamte Neurol Psychiatr 189:279-319 · PMID 13041256',
      'Häfner H (2013). [Karl Jaspers. 100 years of «Allgemeine Psychopathologie» (General Psychopathology)]. Nervenarzt 84:1281-1290 · PMID 24121445',
      'Häfner H (2015). Descriptive psychopathology, phenomenology, and the legacy of Karl Jaspers. Dialogues Clin Neurosci 17:19-29 · PMID 25987860',
      'Aragona M (2019). The influence of Max Weber on the concept of empathic understanding (Verstehen) in the psychopathology of Karl Jaspers. Hist Psychiatry 30:283-299 · PMID 31130019',
      'Kumazaki T (2013). The theoretical root of Karl Jaspers\' General Psychopathology. Part 1: reconsidering the influence of phenomenology and hermeneutics. Hist Psychiatry 24:212-226 · PMID 24573260',
      'Brücher K (2012). [Jaspers and the problem of understanding: a plea for revision]. Fortschr Neurol Psychiatr 80:213-220 · PMID 22009272',
      'Villareal H & Aragona M (2014). [El concepto de «comprensión» (Verstehen) en Karl Jaspers]. Vertex 25:262-265 · PMID 25546640',
      'Ghaemi SN (2007). Existence and pluralism: the rediscovery of Karl Jaspers. Psychopathology 40:75-82 · PMID 17215593',
      'Walker C (1991). Delusion: what did Jaspers really say? Br J Psychiatry Suppl (14):94-103 · PMID 1840789 [sin resumen en PubMed; contenido no cotejado]',
      'Walker C (2014). Karl Jaspers on the disease entity: Kantian ideas and Weberian ideal types. Hist Psychiatry 25:317-334 · PMID 25114147',
      'Kendler KS & Campbell J (2014). Expanding the domain of the understandable in psychiatric illness: an updating of the Jasperian framework of explanation and understanding. Psychol Med 44:1-7 · PMID 23343526',
      'Fuchs T (2010). Subjectivity and intersubjectivity in psychiatric diagnosis. Psychopathology 43:268-274 · PMID 20516753',
      'Stanghellini G (2007). The grammar of the psychiatric interview. A plea for the second-person mode of understanding. Psychopathology 40:69-74 · PMID 17215592',
      'Spencer L & Broome M (2026). The epistemic harms of empathy in phenomenological psychopathology. Phenomenol Cogn Sci 25:151-172 · PMID 41675301',
      'Sanati A & Kyratsous M (2015). Epistemic injustice in assessment of delusions. J Eval Clin Pract 21:479-485 · PMID 25828924',
      'Piedade VL & Messas G (2026). Back to Karl Jaspers\' incomprehensibility of schizophrenia: a longitudinal approach. Hist Psychiatry 37:284-298 · PMID 41852271',
      'Mishara AL & Fusar-Poli P (2013). The phenomenology and neurobiology of delusion formation during psychosis onset: Jaspers, Truman symptoms, and aberrant salience. Schizophr Bull 39:278-286 · PMID 23354468',
      'Spitzer M (1990). On defining delusions. Compr Psychiatry 31:377-397 · PMID 2225797',
      'Findeis H (2020). [The understanding of God by Kant and the contribution to the psychopathological definition of delusion]. Nervenarzt 91:808-813 · PMID 31889216',
      'Sass LA & Byrom G (2015a). Self-disturbance and the bizarre: on incomprehensibility in schizophrenic delusions. Psychopathology 48:293-300 · PMID 26346263',
      'Sass L & Byrom G (2015b). Phenomenological and neurocognitive perspectives on delusions: a critical overview. World Psychiatry 14:164-173 · PMID 26043327',
      'Fuchs T (2005). Delusional mood and delusional perception: a phenomenological analysis. Psychopathology 38:133-139 · PMID 15905636',
      'Stanghellini G, Bolton D & Fulford WK (2013). Person-centered psychopathology of schizophrenia: building on Karl Jaspers\' understanding of patient\'s attitude toward his illness. Schizophr Bull 39:287-294 · PMID 23314193',
      'Parnas J, Sass LA & Zahavi D (2013). Rediscovering psychopathology: the epistemology and phenomenology of the psychiatric object. Schizophr Bull 39:270-277 · PMID 23267191',
      'Bovet P & Parnas J (1993). Schizophrenic delusions: a phenomenological approach. Schizophr Bull 19:579-597 · PMID 8235460',
      'Hoenig J (1983). The concept of schizophrenia. Kraepelin-Bleuler-Schneider. Br J Psychiatry 142:547-556 · PMID 6349735',
      'Mishara AL (2010). Klaus Conrad (1905-1961): delusional mood, psychosis, and beginning schizophrenia. Schizophr Bull 36:9-13 · PMID 19965934',
      'Hambrecht M & Häfner H (1993). [«Trema, apophany, apocalypse»: is Conrad\'s phase model empirically founded?]. Fortschr Neurol Psychiatr 61:418-423 · PMID 8112705',
      'Hayashi N, Igarashi Y & Harima H (2021). Delusion progression process from the perspective of patients with psychoses: a descriptive study based on the primary delusion concept of Karl Jaspers. PLoS One 16:e0250766 · PMID 33905443',
      'Cermolacce M, Sass L & Parnas J (2010). What is bizarre in bizarre delusions? A critical review. Schizophr Bull 36:667-679 · PMID 20142381',
      'Flaum M, Arndt S & Andreasen NC (1991). The reliability of «bizarre» delusions. Compr Psychiatry 32:59-65 · PMID 2001621',
      'Spitzer RL, First MB, Kendler KS & Stein DJ (1993). The reliability of three definitions of bizarre delusions. Am J Psychiatry 150:880-884 · PMID 8494062',
      'Mojtabai R & Nicholson RA (1995). Interrater reliability of ratings of delusions and bizarre delusions. Am J Psychiatry 152:1804-1806 · PMID 8526250',
      'Tanenberg-Karant M et al. (1995). Bizarre delusions and first-rank symptoms in a first-admission sample: a preliminary analysis of prevalence and correlates. Compr Psychiatry 36:428-434 · PMID 8565447',
      'Bell V, Halligan PW & Ellis HD (2006). Diagnosing delusions: a review of inter-rater reliability. Schizophr Res 86:76-79 · PMID 16857345',
      'Soares-Weiser K et al. (2015). First rank symptoms for schizophrenia. Cochrane Database Syst Rev (1):CD010653 · PMID 25879096',
      'Peralta V & Cuesta MJ (1999). Diagnostic significance of Schneider\'s first-rank symptoms in schizophrenia. Comparative study between schizophrenic and non-schizophrenic psychotic disorders. Br J Psychiatry 174:243-248 · PMID 10448450',
      'Nordgaard J, Arnfred SM, Handest P & Parnas J (2008). The diagnostic status of first-rank symptoms. Schizophr Bull 34:137-154 · PMID 17562695',
      'Brett-Jones J, Garety P & Hemsley D (1987). Measuring delusional experiences: a method and its application. Br J Clin Psychol 26:257-265 · PMID 3427248',
      'Appelbaum PS, Robbins PC & Roth LH (1999). Dimensional approach to delusions: comparison across types and diagnoses. Am J Psychiatry 156:1938-1943 · PMID 10588408',
      'Peters ER, Joseph SA & Garety PA (1999). Measurement of delusional ideation in the normal population: introducing the PDI (Peters et al. Delusions Inventory). Schizophr Bull 25:553-576 · PMID 10478789'
    ],
    nodes: ['fen_francesa', 'husserl', 'jaspers_hit', 'schneider_hit', 'conrad_hit', 'kretschmer_hit', 'weltuntergang', 'hiperf', 'ease_ins', 'jtc', 'paranoia', 'querul']
  },
  draw(Fig) {
    const W = 2400, L = 60, FS = 18, G = 24;
    const F = new Fig({ key: 'mod_jaspers', title: TITLE, w: W,
      desc: 'Cinco bloques. Método de Jaspers: comprensión estática, comprensión genética, explicación causal y forma frente a contenido, con las lecturas discordantes del comprender. Tipos de curso: reacción vivencial, desarrollo de la personalidad y proceso, decididos por la continuidad de sentido. Delirio: criterios externos, idea deliroide y vivencia delirante primaria con sus formas (percepción, ocurrencia, recuerdo y humor delirantes). Recepción: Schneider, Conrad, Matussek, Fuchs, Stanghellini, Parnas y Sass, críticas a los criterios del delirio y saliencia aberrante. Matriz de evidencia empírica de seis tesis.' });
    const eq = bs => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };
    const CW = Math.floor((W - 2 * L - 3 * G) / 4), cx = i => L + i * (CW + G);
    const bottom = bs => Math.max(...bs.map(b => b.y + b.h));

    // ---------- Bloque 1: método ----------
    let y = F.band(90, 'El método: comprender frente a explicar, forma frente a contenido', { n: 1 }) + 26;
    y = F.text(L, y + 18, 'Tipo de caja: doble borde = tesis de Jaspers · trazo continuo = intérpretes y críticos · trazo discontinuo = evidencia empírica (●●● metaanálisis o revisión sistemática · ●●○ estudios empíricos primarios: muestras clínicas, casos o viñetas). Los símbolos indican el diseño, no la certeza ni el tamaño del efecto.', { fs: 18, w: W - 2 * L }) + 18;
    const m = [
      F.box('m1', { x: cx(0), y, w: CW, type: 'dx', fs: FS, node: 'jaspers_fen_metodo', align: 'left', title: 'Fenomenología: comprensión estática',
        text: 'Modo transversal: representación (Vergegenwärtigung) intuitiva y sin prejuicios, y descripción de los fenómenos conscientes tal como se dan a quien los vive (Jaspers 1968). Según Häfner (2015), Jaspers la introdujo en la psicopatología siguiendo a Husserl.' }),
      F.box('m2', { x: cx(1), y, w: CW, type: 'dx', fs: FS, node: 'jaspers_compr', align: 'left', title: 'Comprensión genética',
        text: 'Modo longitudinal, empático o racional: capta cómo unos fenómenos psíquicos surgen de otros. Estática y genética son dos modos del comprender (Verstehen). La ruptura de esas conexiones de sentido se interpreta como signo de enfermedad o de paso de un desarrollo natural a un proceso somático (Häfner 2015).' }),
      F.box('m3', { x: cx(2), y, w: CW, type: 'dx', fs: FS, node: 'jaspers_hit', align: 'left', title: 'Explicación causal (Erklären)',
        text: 'Conexiones causales objetivas de las ciencias naturales. Frente a Weber, que mezclaba explicación y comprensión, Jaspers conservó la distinción más tajante de Dilthey (Aragona 2019) y defendió un pluralismo de métodos, cada uno con sus presupuestos y límites (Ghaemi 2007).' }),
      F.box('m4', { x: cx(3), y, w: CW, type: 'dx', fs: FS, node: 'jaspers_1913', align: 'left', title: 'Forma frente a contenido',
        text: 'Distinción tomada de la Analítica trascendental de Kant y aplicada a todo el conocimiento psicopatológico (Walker 2014). En la clínica, la forma es el modo alterado de la vivencia (p. ej., voz oída fuera frente a habla interior; Häfner 2015) y el contenido, su tema (persecución, celos).' })
    ];
    eq(m);
    y = bottom(m) + 50;
    const r = [
      F.box('r1', { x: cx(0), y, w: CW, type: 'act', fs: FS, node: 'husserl', align: 'left', title: '¿Cuánto Husserl? Lecturas discordantes',
        text: 'Kumazaki (2013) pone en duda la influencia profunda de Husserl y Dilthey: la «fenomenología» de Jaspers es una psicología descriptiva de estados empíricos y su comprensión mezcla empatía y tipo ideal racional.' }),
      F.box('r2', { x: cx(1), y, w: CW, type: 'act', fs: FS, node: 'jaspers_compr', align: 'left', title: '¿Qué es comprender?',
        text: 'Comprensión más empática que la de Weber (Aragona 2019); o bien, rechazo de la hermenéutica de la empatía que se le atribuye (Brücher 2012). «Ser comprensible» como propiedad relacional que exige un proceso intersubjetivo (Villareal y Aragona 2014).' }),
      F.box('r3', { x: cx(2), y, w: CW, type: 'act', fs: FS, node: 'ideas_ref', align: 'left', title: 'Comprensión asistida por la explicación',
        text: 'Kendler y Campbell (2014): modelos de saliencia dopaminérgica (ideas de referencia) y de control motor anticipatorio (acciones hechas) descomponen síntomas que Jaspers juzgó incomprensibles en elementos comunes a casi todas las personas.' }),
      F.box('r4', { x: cx(3), y, w: CW, type: 'act', fs: FS, node: 'fen_contemp', align: 'left', title: 'Primera, segunda y tercera persona',
        text: 'Fuchs (2010) propone combinar la aproximación objetivante (3.ª persona), la fenomenológica (1.ª) y la hermenéutica intersubjetiva (2.ª); Stanghellini (2007) aboga por el modo de comprensión en segunda persona en la entrevista.' })
    ];
    eq(r);
    m.forEach((b, i) => F.arrow(b, r[i], { from: 'b', to: 't', label: i === 0 ? 'reinterpretado por' : null }));
    y = bottom(r) + 26;
    const rc = F.box('rc', { x: L, y, w: W - 2 * L, type: 'act', fs: FS, node: 'cfi', align: 'left', title: 'Crítica ética y epistémica de la comprensión empática',
      text: 'La comprensión empática arriesga errores diagnósticos y formas de daño epistémico (cooptación y objetivación); Spencer y Broome (2026) proponen sustituirla por la escucha virtuosa de Fricker. Juzgar un delirio por estereotipos de irracionalidad, extravagancia o incomprensibilidad puede producir injusticia testimonial (Sanati y Kyratsous 2015). Explorar el contexto cultural antes de calificar algo de incomprensible [recomendación: fuente no localizada].' });
    y = rc.y + rc.h + 60;

    // ---------- Bloque 2: reacción, desarrollo, proceso ----------
    y = F.band(y, 'Curso de la vida psíquica: reacción vivencial, desarrollo de la personalidad y proceso', { n: 2 }) + 30;
    const QW = 860, qx = L + (3 * CW + 2 * G - QW) / 2;
    const q = F.box('q2', { x: qx, y, w: QW, type: 'q', fs: 19, title: '¿Lo nuevo se sigue de modo comprensible de la personalidad, la disposición y las vivencias?',
      text: 'Criterio de Jaspers: continuidad de sentido de una vida; su ruptura como signo de enfermedad es el «teorema de Jaspers» (von Baeyer, citado por Häfner 2015). Piedade y Messas (2026) distinguen niveles fenomenológico, biográfico y existencial de la incomprensibilidad.' });
    const qi = F.box('q2i', { x: cx(3), y, w: CW, type: 'dx', fs: 17, align: 'left', title: 'Origen de la alternativa',
      text: 'Jaspers introdujo la noción de proceso en su estudio del delirio celotípico (1910): «¿desarrollo de una personalidad o proceso?» (Häfner 2015). Lanteri-Laura (1962) dedicó un estudio al concepto de proceso en Jaspers.' });
    eq([q, qi]);
    y = q.y + q.h + 70;
    const c = [
      F.box('c1', { x: cx(0), y, w: CW, type: 'dx', fs: FS, node: 'reac_viv_anormal', align: 'left', title: 'Reacción vivencial',
        text: 'Contenido en relación comprensible con la vivencia; no habría aparecido sin ella; su curso depende de ella (Jaspers 1913). Antecedente conceptual de los trastornos de adaptación y por estrés [fuente no localizada].' }),
      F.box('c2', { x: cx(1), y, w: CW, type: 'dx', fs: FS, node: 'sensit_bezieh', align: 'left', title: 'Desarrollo de la personalidad',
        text: 'Evolución comprensible desde la disposición y las vivencias, también cuando es anormal (Jaspers 1913). Kretschmer (1918) describió el delirio sensitivo de referencia como desarrollo comprensible; según Häfner (2015), Jaspers rechazó esa tesis, como la de Gaupp sobre la paranoia.' }),
      F.box('c3', { x: cx(2), y, w: CW, type: 'dx', fs: FS, node: 'proceso_desarrollo', align: 'left', title: 'Proceso',
        text: 'Cambio patológico, incomprensible y permanente de la vida psíquica que irrumpe en un desarrollo comprensible (Häfner 2015); indica un fenómeno extraconsciente o el paso a un proceso somático (Häfner 2013). Jaspers distinguió proceso psíquico y proceso orgánico cerebral [fuente no localizada]. Mishara y Fusar-Poli (2013) lo leen como proceso neurobiológico.' }),
      F.box('c4', { x: cx(3), y, w: CW, type: 'act', fs: FS, node: 'esq', align: 'left', title: 'Críticas',
        text: 'La distinción apodíctica entre desarrollo comprensible y proceso causalmente explicable obstaculizó la explicación interpretativa de delirios y alucinaciones (Häfner 2015). La esquizofrenia sigue siendo un «tipo ideal» weberiano a la espera de la entidad real que Jaspers anticipaba (Walker 2014).' })
    ];
    eq(c);
    [[0, 0.12, 'Sí'], [1, 0.5, 'Sí'], [2, 0.88, 'No']].forEach(([i, fa, lb]) => F.arrow(q, c[i], { from: 'b', to: 't', fa, label: lb, lx: c[i].x + c[i].w / 2 + 10, ly: c[i].y - 10 }));
    F.arrow(c[2], c[3], { from: 'r', to: 'l', dash: true });
    y = bottom(c) + 60;

    // ---------- Bloque 3: delirio ----------
    y = F.band(y, 'El delirio: criterios externos, idea deliroide y vivencia delirante primaria', { n: 3 }) + 30;
    const d1 = F.box('d1', { x: cx(0), y, w: CW + 120, type: 'dx', fs: FS, node: 'delirio', align: 'left', title: 'Criterios externos del delirio',
      text: '(1) certeza subjetiva extraordinaria, (2) incorregibilidad y (3) imposibilidad o falsedad del contenido: Jaspers fue el primero en enunciarlos y pasaron a los libros de texto (Spitzer 1990). Para Jaspers eran «externos»: había que ir más allá de ellos para reconocer una vivencia primaria atribuible a la enfermedad (Sass y Byrom 2015a).' });
    const QW3 = 700, q3x = cx(0) + CW + 120 + 170;
    const q3 = F.box('q3', { x: q3x, y, w: QW3, type: 'q', fs: 19, title: '¿La idea deriva de modo comprensible de un afecto, una vivencia o la personalidad?',
      text: 'Juicio de quien explora, respecto de la biografía, las motivaciones y el contexto histórico-cultural (Mishara y Fusar-Poli 2013); depende también del encuentro intersubjetivo (Cermolacce 2010).' });
    const dsec = F.box('d2', { x: q3x + QW3 + 110, y, w: W - L - (q3x + QW3 + 110), type: 'dx', fs: FS, node: 'del_culpa', align: 'left', title: 'Idea deliroide (secundaria)',
      text: 'Comprensible a partir de un afecto, la personalidad o la situación (Jaspers 1913); por ejemplo, ideas de ruina que se siguen de un ánimo melancólico [ejemplo: fuente no localizada].' });
    eq([d1, q3, dsec]);
    F.arrow(d1, q3, { from: 'r', to: 'l', label: 'ir más allá', lx: d1.x + d1.w + 18, ly: d1.y + d1.h / 2 - 10 });
    F.arrow(q3, dsec, { from: 'r', to: 'l', label: 'Sí', lx: q3.x + q3.w + 30, ly: q3.y + q3.h / 2 - 10 });
    y = q3.y + q3.h + 60;
    const PW = 1300, px = (W - PW) / 2;
    const pr = F.box('pr', { x: px, y, w: PW, type: 'dx', fs: 19, node: 'wahnbewusstheit', title: 'Vivencia delirante primaria (delirio auténtico)',
      text: 'Psicológicamente irreductible e incomprensible, vivida como inmediata y evidente: transformación primaria de la conciencia de significado, incluida la conciencia delirante sin base perceptiva. De ella nacen las ideas delirantes auténticas (echte Wahnideen) (Jaspers 1913; Hayashi 2021). Su remisión a un proceso neurobiológico es lectura de Mishara y Fusar-Poli (2013).' });
    F.arrow(q3, pr, { from: 'b', to: 't', fb: (q3.x + q3.w / 2 - pr.x) / pr.w, label: 'No', lx: q3.x + q3.w / 2 + 12, ly: pr.y - 18 });
    y = pr.y + pr.h + 60;
    const f = [
      F.box('f1', { x: cx(0), y, w: CW, type: 'dx', fs: FS, node: 'percdel', align: 'left', title: 'Percepción delirante',
        text: 'Una percepción real adquiere un significado anormal. Schneider exigió que no hubiera relación entre percepción y significado; Jaspers admitía ideas de referencia iniciadas por percepciones reales (Hayashi 2021). Fuchs (2005): desenlace del humor delirante.' }),
      F.box('f2', { x: cx(1), y, w: CW, type: 'dx', fs: FS, node: 'ocurr_del', align: 'left', title: 'Representación delirante (ocurrencia)',
        text: 'Idea o intuición súbita vivida con certeza sin base perceptiva (Jaspers 1913; Hayashi 2021). Schneider la llamó ocurrencia delirante (Wahneinfall) (Schneider 1950). En Hayashi (2021) se asoció a delirios de grandeza.' }),
      F.box('f3', { x: cx(2), y, w: CW, type: 'dx', fs: FS, node: 'recdel', align: 'left', title: 'Recuerdo delirante',
        text: 'Jaspers describe, entre las representaciones delirantes, el recuerdo que surge como confirmación del delirio; «recuerdo delirante» es una paráfrasis posterior de Sims, término que Jaspers no usó (Hayashi 2021).' }),
      F.box('f4', { x: cx(3), y, w: CW, type: 'dx', fs: FS, node: 'wahnstimm', align: 'left', title: 'Humor (atmósfera) delirante',
        text: 'El entorno se vuelve enigmático, inquietante y escénico; los objetos cobran expresión fisonómica (Fuchs 2005). Mishara y Fusar-Poli (2013) lo sitúan, con los síntomas «Truman», en el origen del inicio psicótico.' })
    ];
    eq(f);
    f.forEach((b, i) => F.arrow(pr, b, { from: 'b', to: 't', fa: 0.08 + 0.28 * i }));
    y = bottom(f) + 30;
    const fe = F.box('fe', { x: L, y, w: W - 2 * L, type: 'info', fs: FS, align: 'left', title: '●●○ Evidencia: el delirio primario como origen referido por las personas',
      text: '108 personas con esquizofrenia o trastorno esquizoafectivo y delirio persistente, entrevista semiestructurada creada para el estudio (DOAI) con propiedades psicométricas sólidas: el 93 % refirió fenómenos de delirio primario como origen de su delirio y el 84 % los presentaba en ese momento; la percepción y el humor delirantes se asociaron a temas persecutorios (Hayashi 2021). Estudio transversal, con posible sesgo de recuerdo y sin grupo de comparación: muestra el relato de origen, no su causalidad ni su secuencia temporal (Hayashi 2021).' });
    y = fe.y + fe.h + 60;

    // ---------- Bloque 4: recepción ----------
    y = F.band(y, 'Recepción: Schneider, Conrad y la psicopatología fenomenológica contemporánea', { n: 4 }) + 30;
    const a = [
      F.box('a1', { x: cx(0), y, w: CW, type: 'act', fs: FS, node: 'fpr_schneider', align: 'left', title: 'Schneider: síntomas de primer rango',
        text: 'Aplicó la metodología de Jaspers al estudio de la esquizofrenia (Hoenig 1983). Entre los síntomas de primer rango, de mayor peso diagnóstico en ausencia de enfermedad somática, incluyó la percepción delirante (Schneider 1950).' }),
      F.box('a2', { x: cx(1), y, w: CW, type: 'act', fs: FS, node: 'apofania', align: 'left', title: 'Conrad: análisis gestáltico del delirio',
        text: 'Se centró en las vivencias de las fases prodrómica y psicótica inicial y en el papel del humor (Mishara 2010). Secuencia trema, apofanía y apocalipsis (Hambrecht y Häfner 1993); apofanía y anastrofé nombran cambios del mundo y del yo (Sass y Byrom 2015b).' }),
      F.box('a3', { x: cx(2), y, w: CW, type: 'act', fs: FS, node: 'matussek_gestalt', align: 'left', title: 'Matussek: descontextualización',
        text: 'Estudió los cambios del mundo percibido al comienzo del delirio primario (Matussek 1952); su noción de descontextualización perceptiva sigue en la discusión actual sobre el humor delirante (Sass y Byrom 2015b).' }),
      F.box('a4', { x: cx(3), y, w: CW, type: 'act', fs: FS, node: 'intencionalidad', align: 'left', title: 'Fuchs: del humor a la percepción delirante',
        text: 'Parálisis del componente intencional o «gnóstico» de la percepción; el componente «pático» se independiza y la constitución intersubjetiva de la realidad cede a significados idiosincrásicos (Fuchs 2005).' })
    ];
    eq(a);
    y = bottom(a) + 34;
    const b = [
      F.box('b1', { x: cx(0), y, w: CW, type: 'act', fs: FS, node: 'segundo_rango', align: 'left', title: 'Schneider: segundo rango',
        text: 'La ocurrencia delirante, a diferencia de la percepción delirante, queda entre los síntomas de segundo rango (Schneider 1950). Con la percepción delirante intentó prescindir del criterio de imposibilidad; Spitzer (1990) juzga errónea esa definición.' }),
      F.box('b2', { x: cx(1), y, w: CW, type: 'act', fs: FS, node: 'apocalipsis_conrad', align: 'left', title: 'Conrad: secuencia de fases',
        text: 'Modelo de fases del inicio de la esquizofrenia muy influyente en la psiquiatría alemana; su orden empírico se ha puesto a prueba (Hambrecht y Häfner 1993; véase la matriz).' }),
      F.box('b3', { x: cx(2), y, w: CW, type: 'act', fs: FS, node: 'intersubj_sinton', align: 'left', title: 'Stanghellini: psicopatología centrada en la persona',
        text: 'Amplía la «actitud del paciente ante su enfermedad» de Jaspers: la persona interpreta activamente sus cambios básicos de sí y del mundo, y eso modela síntomas, curso y desenlace (Stanghellini 2013).' }),
      F.box('b4', { x: cx(3), y, w: CW, type: 'act', fs: FS, node: 'ipsei', align: 'left', title: 'Parnas y Sass: ipseidad',
        text: 'Forma y contenido del delirio están dialécticamente unidos y apenas se distinguen (Bovet y Parnas 1993). La alteración de la ipseidad vuelve comprensible parte de lo extravagante y cuestiona el absolutismo de Jaspers (Sass y Byrom 2015a).' })
    ];
    eq(b);
    [0, 1].forEach(i => F.arrow(a[i], b[i], { from: 'b', to: 't', dash: true }));
    y = bottom(b) + 34;
    const HW = Math.floor((W - 2 * L - G) / 2);
    const k = [
      F.box('k1', { x: L, y, w: HW, type: 'act', fs: FS, node: 'delirio', align: 'left', title: 'Críticas a los criterios externos del delirio',
        text: 'Spitzer (1990): la definición del DSM-III-R presenta incoherencias; propone definir el delirio por el modo en que se afirman ciertos contenidos sobre la realidad externa, sin juzgar si son verdaderos. Findeis (2020): el criterio de imposibilidad del contenido puede ser innecesario. Parnas, Sass y Zahavi (2013): los síntomas no se captan con definiciones operativas descontextualizadas.' }),
      F.box('k2', { x: L + HW + G, y, w: HW, type: 'act', fs: FS, node: 'saliencia', align: 'left', title: 'Del humor delirante a la saliencia aberrante',
        text: 'Mishara y Fusar-Poli (2013) presentan el humor delirante y los síntomas «Truman» como núcleo del inicio psicótico y los relacionan con los modelos de saliencia aberrante y desregulación dopaminérgica: el delirio se forma por pérdida de contexto en su origen perceptivo y vivencial. Hipótesis compatibles, no demostradas por la fenomenología.' })
    ];
    eq(k);
    y = bottom(k) + 60;

    // ---------- Bloque 5: matriz de evidencia ----------
    y = F.band(y, 'Tesis de Jaspers, Schneider y Conrad frente a la evidencia empírica', { n: 5 }) + 22;
    const t = F.table({ x: L, y, fs: 17, cols: [{ w: 330, label: 'Tesis (autor)' }, { w: 420, label: 'Cómo se ha operativizado' }, { w: 1060, label: 'Estudios y resultado principal' }, { w: 470, label: 'Diseño y valoración' }],
      rows: [
        [{ t: 'Incomprensibilidad como criterio (Jaspers)', node: 'jaspers_compr' }, 'Delirio «extravagante» del DSM-III-R/IV, descrito en origen como absurdo o incomprensible (Cermolacce 2010)', 'Psiquiatras con 40 ideas delirantes: kappa < 0,40 con o sin definición estructurada (Flaum 1991). 180 delirios: kappa 0,64 con la definición del DSM-III-R (Spitzer RL 1993). 50 psiquiatras con 30 viñetas: kappa de moderado a regular, insuficiente para la práctica (Mojtabai 1995). En primeros ingresos, kappa 0,68 para la extravagancia frente a 0,86 para los síntomas de primer rango (Tanenberg-Karant 1995). Revisión: los delirios en general se diagnostican con fiabilidad; los extravagantes, no (Bell 2006). El DSM-5 retiró su peso especial (Sass y Byrom 2015a)', { sym: '●●○', t: 'estudios sobre la extravagancia, no sobre el juicio jaspersiano; sin estudios de fiabilidad de la incomprensibilidad como tal [fuente no localizada]' }],
        [{ t: 'Vivencia delirante primaria como origen (Jaspers)', node: 'wahnbewusstheit' }, 'Entrevista DOAI: percepción, recuerdo, humor e intuición delirantes', '108 personas con esquizofrenia o trastorno esquizoafectivo: 93 % refiere fenómenos primarios como origen y 84 % los presenta; asociaciones con temas persecutorios (percepción y humor) y de grandeza (intuición) (Hayashi 2021). Según los autores, primera verificación empírica del concepto', { sym: '●●○', t: 'transversal, sin comparación con otros diagnósticos; relato retrospectivo' }],
        [{ t: 'Fases del inicio del delirio (Conrad)', node: 'conrad_1958' }, 'Evaluación retrospectiva de la sintomatología inicial en el estudio ABC', '267 primeros ingresos representativos: el trema se confirmó como primera fase frecuente; no se validó el orden propuesto entre apofanía y apocalipsis (Hambrecht y Häfner 1993)', { sym: '●●○', t: 'modelo solo parcialmente generalizable; datos retrospectivos' }],
        [{ t: 'Síntomas de primer rango (Schneider)', node: 'schneider_1950' }, 'Presencia de uno o más síntomas de primer rango frente al diagnóstico clínico', 'Cochrane, 21 estudios y 6253 participantes: sensibilidad 57 % y especificidad 81,4 % frente a todos los diagnósticos; frente a otras psicosis, 58 % y 74,7 % (Soares-Weiser 2015). En 660 ingresados, razón de verosimilitud 1,06 con criterios de Feighner (Peralta y Cuesta 1999). Presentes en el 70 % de la esquizofrenia, el 29 % del trastorno bipolar psicótico y el 18 % de la depresión psicótica (Tanenberg-Karant 1995)', { sym: '●●●', t: 'estudios antiguos de calidad limitada; Nordgaard (2008) pide restarles peso hasta aclarar su estatus' }],
        [{ t: 'Certeza e incorregibilidad (Jaspers)', node: 'delirio' }, 'Medidas dimensionales de la convicción y otras dimensiones del delirio', 'Nueve casos únicos: dimensiones desincronizadas y sin covariación (Brett-Jones 1987). 1136 ingresados: 29 % con delirio definido o posible; las convicciones religiosas y de grandeza fueron las más firmes y la estructura dimensional fue estable entre diagnósticos (Appelbaum 1999)', { sym: '●●○', t: 'la convicción es graduable y variable, no un todo o nada' }],
        [{ t: 'Discontinuidad entre delirio y creencia normal', node: 'delirio' }, 'Inventario PDI en población general y en pacientes', 'Cada ítem fue suscrito, de media, por una de cada cuatro personas adultas; las puntuaciones de población general y de pacientes se solaparon y se diferenciaron por malestar, preocupación y convicción (Peters 1999)', { sym: '●●○', t: 'apoya un continuo; el inventario mide ideación, no vivencias primarias' }]
      ] });
    y = t.y + 40;

    F.box('lim', { x: L, y, w: W - 2 * L, type: 'lim', align: 'left', fs: 19, title: 'Límites de esta figura',
      text: 'Esquema docente: no es un algoritmo diagnóstico ni sustituye al juicio clínico. La obra primaria de Jaspers, Schneider, Conrad y Kretschmer no se ha cotejado: su contenido se resume a partir de fuentes secundarias indexadas, y la exposición de la tipología de vivencias delirantes sigue la lectura habitual de la Psicopatología general. Los intérpretes discrepan sobre qué entendía Jaspers por comprender. La incomprensibilidad, el proceso y el delirio primario son conceptos teóricos; la evidencia empírica disponible se refiere sobre todo a operativizaciones afines (extravagancia, síntomas de primer rango, dimensiones del delirio), con estudios antiguos o de diseño limitado. Calificar algo de «incomprensible» depende de quien explora, del contexto biográfico y cultural y del encuentro intersubjetivo (Mishara y Fusar-Poli 2013; Cermolacce 2010).' });

    F.footer('Fuentes: Jaspers 1913 y 1968 (PMID 5702272); Schneider 1950; Conrad 1958; Häfner 2013 (24121445) y 2015 (25987860); Walker 1991 (1840789) y 2014 (25114147); Aragona 2019 (31130019); Kumazaki 2013 (24573260); Brücher 2012 (22009272); Kendler y Campbell 2014 (23343526); Fuchs 2005 (15905636) y 2010 (20516753); Stanghellini 2007 (17215592) y 2013 (23314193); Parnas 2013 (23267191); Bovet y Parnas 1993 (8235460); Sass y Byrom 2015 (26346263; 26043327); Spitzer 1990 (2225797); Mishara 2010 (19965934); Mishara y Fusar-Poli 2013 (23354468); Piedade y Messas 2026 (41852271); Spencer y Broome 2026 (41675301); Hambrecht y Häfner 1993 (8112705); Hayashi 2021 (33905443); Cermolacce 2010 (20142381); Bell 2006 (16857345); Soares-Weiser 2015 (25879096); Peralta y Cuesta 1999 (10448450); Nordgaard 2008 (17562695); Appelbaum 1999 (10588408); Peters 1999 (10478789). Esquema docente de apoyo; no sustituye al juicio clínico.');
    return F;
  }
};
