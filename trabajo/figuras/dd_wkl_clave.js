// Clave diagnóstica dicotómica de las psicosis endógenas según la escuela de Wernicke, Kleist y Leonhard (WKL).
// Compilar en prueba: node tools/fig.js dd_wkl_clave --dry --png <carpeta>
const TITLE = 'Clave dicotómica de las psicosis endógenas según la escuela de Wernicke, Kleist y Leonhard: curso, polaridad, globalidad y dominio';
module.exports = {
  key: 'dd_wkl_clave',
  meta: {
    title: TITLE,
    kind: 'dd',
    cap: 'Clave de decisión en cinco pasos que bifurca sucesivamente las psicosis endógenas según la escuela de Wernicke, Kleist y Leonhard (WKL). 1) Curso de toda la vida: fásico con remisión completa frente a defecto residual. 2) Polaridad: bipolar frente a monopolar (Leonhard 1957; confirmación independiente de Angst, Perris y Winokur en los años sesenta). 3) En las monopolares, las psicosis fásicas puras: síndrome global de las tres esferas (melancolía pura y manía pura) frente a síndrome parcial afectivo, con las cinco depresiones puras (acosada o agitada, hipocondríaca, autotorturante, suspicaz, indiferente o apática) y las cinco euforias puras (improductiva, hipocondríaca, exaltada o entusiasta, confabulatoria, indiferente), cada una con su rasgo diferencial. 4) En las bipolares: enfermedad maníaco-depresiva frente a las tres psicosis cicloides, separadas por el tipo de polimorfia y el colorido. 5) Con defecto: esquizofrenias no sistemáticas frente a sistemáticas, solo resumidas. A la derecha, dos bandas laterales: rasgos diferenciales (polimorfia, carga hereditaria, ambiente prenatal, pronóstico y validez) y correspondencia aproximada con la CIE-11 y el DSM-5-TR, que es una interpretación y no una equivalencia. Las cifras proceden sobre todo de series de la propia escuela (Berlín, Würzburg) y de la revisión de Foucher y cols. (2020); los rasgos de cada forma se toman de los libros de Leonhard a través de las fichas del atlas y no se han cotejado con el original, por lo que se marcan «[fuente no localizada]». Los códigos de la CIE-11 no se han comprobado en la fuente oficial. Es un esquema docente de un sistema histórico no incluido en la CIE-11 ni en el DSM-5-TR: no es un algoritmo validado ni sustituye al seguimiento longitudinal ni al juicio clínico.',
    refs: [
      'Leonhard K (1957). Aufteilung der endogenen Psychosen. Berlín: Akademie-Verlag [no verificada en el original]',
      'Leonhard K (1999). Classification of Endogenous Psychoses and their Differentiated Etiology, 2.ª ed., Beckmann H (ed.). Viena/Nueva York: Springer [contenido no cotejado]',
      'Leonhard K (1987). [Differential diagnosis and different etiologies of monopolar and bipolar phasic psychoses] (artículo en alemán con resumen en inglés). Psychiatr Neurol Med Psychol (Leipz) 39:524-533 · PMID 3432442',
      'Foucher JR et al. (2020). Wernicke-Kleist-Leonhard phenotypes of endogenous psychoses: a review of their validity. Dialogues Clin Neurosci 22:37-49 · PMID 32699504',
      'Angst J & Marneros A (2001). Bipolarity from ancient to modern times: conception, birth and rebirth. J Affect Disord 67:3-19 · PMID 11869749',
      'Angst J, Felder W, Frey R & Stassen HH (1978). The course of affective disorders. I. Change of diagnosis of monopolar, unipolar, and bipolar illness. Arch Psychiatr Nervenkr 226:57-64 · PMID 708227',
      'Perris C (1966). A study of bipolar (manic-depressive) and unipolar recurrent depressive psychoses. I. Genetic investigation. Acta Psychiatr Scand Suppl 194:15-44 · PMID 5229227 [sin resumen en PubMed]',
      'Teichmann G (1990). The influence of Karl Kleist on the nosology of Karl Leonhard. Psychopathology 23:267-276 · PMID 2084780',
      'Perris C (1990). The importance of Karl Leonhard\'s classification of endogenous psychoses. Psychopathology 23:282-290 · PMID 2084782',
      'von Trostorff S (1975). [Pattern of familial psychoses: systematic and unsystematic schizophrenia and cycloid psychoses] (artículo en alemán con resumen en inglés). Psychiatr Neurol Med Psychol (Leipz) 27:80-100 · PMID 1197448',
      'von Trostorff S & Leonhard K (1990). Catamnesis of endogenous psychoses according to the differential diagnostic method of Karl Leonhard. Psychopathology 23:259-262 · PMID 2084778',
      'Franzek E & Beckmann H (1998). Different genetic background of schizophrenia spectrum psychoses: a twin study. Am J Psychiatry 155:76-83 · PMID 9433342',
      'Franzek E & Beckmann H (1993). [Schizophrenia and birth seasonality: contrary results in relation to genetic risk] (artículo en alemán con resumen en inglés). Fortschr Neurol Psychiatr 61:22-26 · PMID 8440510',
      'Pfuhlmann B et al. (2004). Cycloid psychoses are not part of a bipolar affective spectrum: results of a controlled family study. J Affect Disord 83:11-19 · PMID 15546641',
      'Pfuhlmann B, Franzek E, Stöber G, Cetkovich-Bakmas M & Beckmann H (1997). On interrater reliability for Leonhard\'s classification of endogenous psychoses. Psychopathology 30:100-105 · PMID 9168566',
      'Jabs BE et al. (2002). Cycloid psychoses: from clinical concepts to biological foundations. J Neural Transm 109:907-919 · PMID 12111477',
      'Jabs BE et al. (2004). Differences in quality of life and course of illness between cycloid and schizophrenic psychoses: a comparative study. World J Biol Psychiatry 5:136-142 · PMID 15346537',
      'Peralta V, Cuesta MJ & Zandio M (2007). Cycloid psychosis: an examination of the validity of the concept. Curr Psychiatry Rep 9:184-192 · PMID 17521513',
      'Stöber G, Franzek E, Lesch KP & Beckmann H (1995). Periodic catatonia: a schizophrenic subtype with major gene effect and anticipation. Eur Arch Psychiatry Clin Neurosci 245:135-141 · PMID 7669819',
      'Stöber G et al. (2000). Splitting schizophrenia: periodic catatonia-susceptibility locus on chromosome 15q15. Am J Hum Genet 67:1201-1207 · PMID 11001582',
      'Peralta V et al. (2016). Familiality of psychotic disorders: a polynosologic study in multiplex families. Schizophr Bull 42:975-983 · PMID 26707865',
      'Cuesta MJ et al. (2024). Empirical validity of Leonhard\'s psychoses: a long-term follow-up study of first-episode psychosis patients. Schizophr Res 263:237-245 (publicación electrónica 2023) · PMID 36682995',
      'Giné Servén E et al. (2021). Cycloid psychosis as a psychiatric expression of anti-NMDAR encephalitis. A systematic review of case reports accomplished with the authors\' cooperation. Brain Behav 11:e01980 · PMID 33270360',
      'Organización Mundial de la Salud (2025). CIE-11 para estadísticas de mortalidad y morbilidad (CIE-11 MMS), capítulo 06 (icd.who.int) [códigos citados no comprobados en la fuente oficial]',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5.ª ed., texto revisado (DSM-5-TR). Washington, DC: APA Publishing [texto original no cotejado en esta figura]'
    ],
    nodes: ['wkl21', 'wkl22', 'wkl23', 'wkl25', 'wkl26', 'wkl27', 'wkl28', 'wkl29', 'wkl31', 'wkl32', 'wkl33', 'wkl34', 'wkl35', 'wernicke_hit', 'kleist_hit', 'wkl_combinadas', 'locura_md', 'emel', 'dpsic', 'tpsbr', 'teasqb', 'catatonia', 'psicosis_causa_conocida', 'hered_bip', 'hered_esq']
  },
  draw(Fig) {
    const W = 2300, X = 60, MW = 1640, MR = X + MW, SX = 1760, SW = 480, FS = 18;
    const F = new Fig({ key: 'dd_wkl_clave', title: TITLE, w: W,
      desc: 'Clave de decisión en cinco pasos: curso fásico con remisión completa o defecto residual; polaridad bipolar o monopolar; en las monopolares, melancolía y manía puras frente a las cinco depresiones puras y las cinco euforias puras; en las bipolares, enfermedad maníaco-depresiva frente a las tres psicosis cicloides; y, con defecto, esquizofrenias no sistemáticas frente a sistemáticas. Bandas laterales con rasgos diferenciales y correspondencia aproximada con la CIE-11 y el DSM-5-TR.' });
    const bot = (...bs) => Math.max(...bs.map(b => b.y + b.h));
    const eqH = (...bs) => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };
    const band = (y, label, n) => F.band(y, label, { n, x: X, w: MW });
    // fila de cajas de igual altura dentro de un marco de grupo
    const row = (defs, x0, w0, y0, label, gap) => {
      gap = gap || 16; const top = y0 + (label ? 38 : 14), n = defs.length, bw = (w0 - 32 - (n - 1) * gap) / n;
      const bs = defs.map((d, k) => F.box(d.id, Object.assign({ x: x0 + 16 + k * (bw + gap), y: top, w: bw, type: 'dx', fs: 17 }, d)));
      eqH(...bs); const g = { x: x0, y: y0, w: w0, h: bot(...bs) - y0 + 14 };
      F.group(Object.assign({ label }, g)); return { g, bs };
    };

    // ================= Paso 1: curso =================
    let y = band(96, 'Curso de toda la vida: ¿remisión completa o defecto residual?', 1) + 24;
    const s0 = F.box('s0', { x: X, y, w: 800, type: 'info', fs: FS, align: 'left', node: 'leonhard_hit', title: 'Punto de partida: psicosis endógena',
      text: 'La escuela WKL describe 35 fenotipos mediante la observación diacrónica de toda la vida; las psicosis cicloides se definen como fenotipos de toda la vida, no como episodios (Foucher 2020).' });
    const w0 = F.box('w0', { x: X + 840, y, w: 800, type: 'warn', fs: FS, node: 'nmda', title: 'Antes de la clave: excluir una psicosis secundaria',
      text: 'En 200 casos de encefalitis anti-NMDAR con respuesta de sus autores, el 87 % tenía un fenotipo cicloide completo; ante un primer episodio de este tipo se propone estudiar el LCR (Giné Servén 2021).' });
    eqH(s0, w0);
    y = bot(s0) + 50;
    const q1 = F.box('q1', { x: X, y, w: 800, type: 'q', fs: FS, title: '¿Curso fásico, con remisión completa y sin defecto entre episodios?',
      text: 'Fásicas puras, enfermedad maníaco-depresiva y cicloides cursan en fases o episodios remitentes; las no sistemáticas, de forma progresiva-recidivante, y las sistemáticas, de forma insidiosa y progresiva (Foucher 2020).' });
    const c5 = F.box('c5', { x: X + 1000, y, w: 640, type: 'info', fs: FS, node: 'wkl_sistematicas', title: 'No: defecto residual → paso 5',
      text: 'Esquizofrenias no sistemáticas o sistemáticas.' });
    c5.y = q1.y + (q1.h - c5.h) / 2;
    F.arrow(s0, q1, { from: 'b', to: 't', fa: 0.5 });
    F.arrow(q1, c5, { from: 'r', to: 'l', label: 'No' });
    y = bot(q1) + 56;

    // ================= Paso 2: polaridad =================
    const yb2 = y; y = band(y, 'Polaridad: ¿bipolar o monopolar? (Leonhard 1957; Angst, Perris)', 2) + 24;
    const q2 = F.box('q2', { x: X, y, w: 800, type: 'q', fs: FS, title: '¿El curso es bipolar o monopolar?',
      text: 'Monopolar: estabilidad sintomática dentro de cada episodio y entre episodios, sin estados mixtos ni incompletos (Foucher 2020). La enfermedad maníaco-depresiva puede reconocerse por sus rasgos aunque solo haya recaídas depresivas (Foucher 2020).' });
    F.arrow(q1, q2, { from: 'b', to: 't', fa: 0.97, fb: 0.97, label: 'Sí', ly: yb2 - 14 });
    const c3 = F.box('c3', { x: X + 1000, y: q2.y, w: 640, type: 'info', fs: FS, node: 'neele_fasicas', title: 'Monopolar → paso 3: psicosis fásicas puras', text: 'Melancolía y manía puras, depresiones y euforias puras.' });
    const c4 = F.box('c4', { x: X + 1000, y: q2.y, w: 640, type: 'info', fs: FS, node: 'wkl13', title: 'Bipolar → paso 4', text: 'Enfermedad maníaco-depresiva o psicosis cicloides.' });
    const gap2 = 26; const tot2 = c3.h + c4.h + gap2; const top2 = q2.y + (q2.h - tot2) / 2;
    if (top2 < q2.y) { q2.h = tot2; c3.y = q2.y; } else c3.y = top2;
    c4.y = c3.y + c3.h + gap2;
    F.arrow(q2, c3, { from: 'r', to: 'l', fa: 0.3, label: 'Monopolar' });
    F.arrow(q2, c4, { from: 'r', to: 'l', fa: 0.7, label: 'Bipolar' });
    y = Math.max(bot(q2), bot(c4)) + 30;
    const HW = (MW - 40) / 3;
    const h1 = F.box('h1', { x: X, y, w: HW, type: 'info', fs: 17, align: 'left', node: 'kleist_hit', title: 'Kleist, Neele y Leonhard',
      text: 'La separación entre psicosis afectivas unipolares y bipolares se basa en el trabajo conjunto de Kleist, Edda Neele y Leonhard (Teichmann 1990). «Monopolar» procede de Kleist (1947) y Leonhard (1957) (Angst 1978).' });
    const h2 = F.box('h2', { x: X + HW + 20, y, w: HW, type: 'info', fs: 17, align: 'left', node: 'angst_hit', title: 'Angst, Perris y Winokur',
      text: 'En los años sesenta mostraron de forma independiente diferencias clínicas, familiares y de curso entre unipolares y bipolares y verificaron varias tesis de la escuela WKL (Angst y Marneros 2001; Perris 1966; Perris 1990).' });
    const h3 = F.box('h3', { x: X + 2 * (HW + 20), y, w: HW, type: 'warn', fs: 17, node: 'conv_bip', title: '«Monopolar» es un juicio revisable',
      text: 'En Zúrich, el 10 % de las depresiones monopolares cambió después a bipolar, sobre todo con tres o más episodios (Angst 1978). Monopolar no equivale a «unipolar» de la CIE o el DSM (Foucher 2020).' });
    eqH(h1, h2, h3);
    y = bot(h1) + 56;

    // ================= Paso 3: fásicas puras =================
    y = band(y, 'Monopolares: psicosis fásicas puras (melancolía y manía puras, depresiones y euforias puras)', 3) + 24;
    const q3 = F.box('q3', { x: X, y, w: 760, type: 'q', fs: FS, title: '¿Síndrome global de las tres esferas o parcial, limitado al afecto?',
      text: 'Melancolía y manía puras afectan también al impulso, a la velocidad del pensamiento y a la psicomotricidad; las cinco depresiones y las cinco euforias puras alteran sistemas emocionales concretos dentro del dominio afectivo (Foucher 2020).' });
    const GW3 = MR - (X + 880);
    const glob = row([
      { id: 'mel', node: 'wkl2', title: 'Melancolía pura', text: 'Tristeza vital con inhibición del pensamiento y psicomotriz, sin polo maníaco. Episodios de unos 12 meses; hasta el 10 % de las psicosis endógenas (Foucher 2020).' },
      { id: 'man', node: 'wkl1', title: 'Manía pura', text: 'Elación, aceleración del pensamiento y aumento psicomotor, sin polo melancólico en toda la vida. Menos del 1 % (Foucher 2020).' }
    ], X + 880, GW3, y, 'Global: tres esferas');
    if (bot(q3) < glob.g.y + glob.g.h) q3.h = glob.g.y + glob.g.h - q3.y;
    F.arrow(q3, glob.g, { from: 'r', to: 'l', label: 'Global', lx: X + 768 });
    y = Math.max(bot(q3), glob.g.y + glob.g.h) + 50;
    const q3b = F.box('q3b', { x: X, y, w: 300, type: 'q', fs: 17, node: 'wkl3', title: 'Parcial: ¿polo depresivo o eufórico?',
      text: 'Depresiones y euforias puras: 4 % de los ingresos por psicosis endógena, episodios de años con inicio y final progresivos y ≈3 % de familiares de primer grado afectados (Foucher 2020); carga especialmente baja en las euforias (Leonhard 1987).' });
    F.arrow(q3, q3b, { from: 'b', to: 't', fa: 0.2, fb: 0.5, label: 'Parcial', lx: X + 160, ly: q3b.y - 18 });
    const GX3 = X + 420, GW = MR - GX3;
    const dep = row([
      { id: 'd1', node: 'wkl3', title: 'Acosada (agitada)', text: 'Tensión angustiosa e inquietud motora no productiva como núcleo.' },
      { id: 'd2', node: 'wkl4', title: 'Hipocondríaca', text: 'Sensaciones corporales anómalas y temor a ruina o enfermedad corporal.' },
      { id: 'd3', node: 'wkl5', title: 'Autotorturante', text: 'Autorreproche y culpa dolorosa en el centro del cuadro.' },
      { id: 'd4', node: 'wkl6', title: 'Suspicaz', text: 'Desconfianza y autorreferencia subordinadas al tono depresivo.' },
      { id: 'd5', node: 'wkl7', title: 'Indiferente (apática)', text: 'Vacío y pérdida de participación afectiva, sin tristeza activa.' }
    ], GX3, GW, y, 'Las cinco depresiones puras · rasgos según Leonhard 1957/1999 [fuente no localizada]', 14);
    const euf = row([
      { id: 'e1', node: 'wkl8', title: 'Improductiva', text: 'Elación vacía, sin la productividad ideica ni psicomotriz de la manía.' },
      { id: 'e2', node: 'wkl9', title: 'Hipocondríaca', text: 'Tono elevado con quejas corporales extravagantes.' },
      { id: 'e3', node: 'wkl10', title: 'Exaltada (entusiasta)', text: 'Fervor entusiasta, de tono casi místico o de misión.' },
      { id: 'e4', node: 'wkl11', title: 'Confabulatoria', text: 'Fabulaciones y seudorrecuerdos autoelevadores con tono eufórico.' },
      { id: 'e5', node: 'wkl12', title: 'Indiferente', text: 'Contento superficial y hueco, sin búsqueda de contacto.' }
    ], GX3, GW, dep.g.y + dep.g.h + 24, 'Las cinco euforias puras · rasgos según Leonhard 1957/1999 [fuente no localizada]', 14);
    const span3 = euf.g.y + euf.g.h - q3b.y; if (q3b.h < span3) { q3b.h = span3; }
    F.arrow(q3b, dep.g, { from: 'r', to: 'l', fb: 0.5, fa: (dep.g.y + dep.g.h / 2 - q3b.y) / q3b.h, label: 'Depresivo', lx: q3b.x + q3b.w + 6 });
    F.arrow(q3b, euf.g, { from: 'r', to: 'l', fb: 0.5, fa: (euf.g.y + euf.g.h / 2 - q3b.y) / q3b.h, label: 'Eufórico', lx: q3b.x + q3b.w + 6 });
    y = euf.g.y + euf.g.h + 56;

    // ================= Paso 4: bipolares =================
    y = band(y, 'Bipolares: enfermedad maníaco-depresiva frente a psicosis cicloides (polimorfia y colorido)', 4) + 24;
    const q4 = F.box('q4', { x: X, y, w: 740, type: 'q', fs: FS, title: '¿Polimorfia afectiva con estados mixtos, o polos que se suceden con colorido psicótico?',
      text: 'Enfermedad maníaco-depresiva: manifestaciones polimorfas que cambian dentro y entre episodios; estados mixtos, con ambos polos a la vez en distintos dominios. Cicloides: muy polimorfas por cambios rápidos de intensidad e incluso de polaridad, pero los polos opuestos se suceden y nunca coinciden (Foucher 2020). El «colorido» afectivo-vital frente al psicótico (angustia o éxtasis, confusión, motilidad) sigue la descripción de Leonhard [fuente no localizada].' });
    const emd = F.box('emd', { x: X + 850, y, w: 400, type: 'dx', fs: 17, node: 'wkl13', title: 'Enfermedad maníaco-depresiva',
      text: 'Forma bipolar más frecuente: 19 % de las psicosis endógenas; 22-36 % de familiares de primer grado afectados (Foucher 2020).' });
    const per = F.box('per', { x: X + 1280, y, w: 360, type: 'info', fs: 16, align: 'left', node: 'perris', title: 'Leonhard frente a Perris',
      text: 'Leonhard sentó la base del concepto actual; Perris y Brockington crearon los primeros criterios operativos, y ambas concepciones no coinciden (Peralta 2007).' });
    F.arrow(q4, emd, { from: 'r', to: 'l', fa: 0.25, label: 'Mixtos', lx: X + 748 });
    y = bot(q4, emd, per) + 50;
    const pc = F.box('pc', { x: X, y, w: 740, type: 'dx', fs: 17, node: 'pcicloid', title: 'Psicosis cicloides: ¿qué dominio oscila?',
      text: '20 % de las psicosis endógenas; ≈5 % de familiares de primer grado afectados (Foucher 2020), con menor riesgo familiar que la maníaco-depresiva y sin diferencia con los controles (Pfuhlmann 2004). Remiten sin defecto. Concepto moderno basado en Leonhard (Jabs 2002).' });
    const ksc = F.box('ksc', { x: X + 820, y, w: 820, type: 'info', fs: 16, align: 'left', node: 'psciclb', title: 'Cicloides: de Kleist a Leonhard',
      text: 'Leonhard delimitó las tres formas a partir de la obra de Wernicke y Kleist, resolviendo las «psicosis atípicas» de Kraepelin (Jabs 2002).' });
    F.arrow(q4, pc, { from: 'b', to: 't', fa: 0.5, label: 'Polos sucesivos' });
    y = bot(pc, ksc) + 40;
    const cyc = row([
      { id: 'cy1', node: 'wkl14', title: 'Angustia-felicidad', text: 'Dominio afectivo: angustia con ideas de referencia ↔ felicidad extática.' },
      { id: 'cy2', node: 'wkl15', title: 'Confusional excitada-inhibida', text: 'Dominio del pensamiento: incoherencia en la elección de temas ↔ inhibición con perplejidad.' },
      { id: 'cy3', node: 'wkl16', title: 'Motilidad hipercinético-acinética', text: 'Dominio psicomotor: movimientos expresivos y reactivos aumentados ↔ acinesia.' }
    ], X, MW, y, 'Las tres psicosis cicloides (dominio, polos) · rasgos según Leonhard 1957/1999 [fuente no localizada]', 24);
    F.arrow(pc, cyc.g, { from: 'b', to: 't', fa: 0.5, fb: 370 / 1640 });
    y = cyc.g.y + cyc.g.h + 56;

    // ================= Paso 5: defecto =================
    y = band(y, 'Con defecto residual: esquizofrenias no sistemáticas frente a sistemáticas (solo resumen)', 5) + 24;
    const q5 = F.box('q5', { x: X, y, w: 300, type: 'q', fs: 17, node: 'wkl_sistematicas', title: '¿Residuo de gravedad creciente o residuo monomorfo fijo?',
      text: 'No sistemáticas: curso sobre todo progresivo-recidivante con residuo característico de gravedad creciente. Sistemáticas: inicio insidioso, fase de proceso de 1-5 años y residuo que no cambia hasta el final de la vida (Foucher 2020).' });
    const ns = row([
      { id: 'n1', node: 'wkl17', title: 'Parafrenia afectiva', text: 'Afecto: delirio cargado de afecto. ≈5 % de las psicosis endógenas (Foucher 2020).' },
      { id: 'n2', node: 'wkl18', title: 'Catafasia', text: 'Pensamiento y lenguaje. ≈8 %; 15-25 % de familiares afectados (Foucher 2020).' },
      { id: 'n3', node: 'wkl19', title: 'Catatonía periódica', text: 'Psicomotricidad. Riesgo en familiares del 26,9 % (Stöber 1995); locus en 15q15 (Stöber 2000).' }
    ], GX3, GW, y, 'No sistemáticas: bipolares, polimorfas, residuo creciente', 14);
    const sy = row([
      { id: 'y1', node: 'wkl20', title: 'Hebefrenias (4)', text: 'Necia, superficial, excéntrica y autista.' },
      { id: 'y2', node: 'wkl24', title: 'Catatonías sistemáticas (6)', text: 'Paracinética, manierística, procinética, negativista, de habla pronta y de habla perezosa.' },
      { id: 'y3', node: 'wkl30', title: 'Parafrenias sistemáticas (6)', text: 'Hipocondríaca, fonémica, incoherente, fantástica, confabulatoria y expansiva.' }
    ], GX3, GW, ns.g.y + ns.g.h + 24, 'Sistemáticas: monomorfas, 21 % de los ingresos, 2-4 % de familiares afectados (Foucher 2020)', 14);
    const span5 = sy.g.y + sy.g.h - q5.y; if (q5.h < span5) q5.h = span5;
    F.arrow(c5, q5, { from: 'b', to: 't', dash: true, via: [[c5.x + c5.w / 2, c5.y + c5.h + 20], [1725, c5.y + c5.h + 20], [1725, q5.y - 12], [q5.x + q5.w / 2, q5.y - 12]] });
    F.arrow(q5, ns.g, { from: 'r', to: 'l', fb: 0.5, fa: (ns.g.y + ns.g.h / 2 - q5.y) / q5.h, label: 'Creciente', lx: q5.x + q5.w + 6 });
    F.arrow(q5, sy.g, { from: 'r', to: 'l', fb: 0.5, fa: (sy.g.y + sy.g.h / 2 - q5.y) / q5.h, label: 'Fijo', lx: q5.x + q5.w + 6 });
    y = sy.g.y + sy.g.h + 40;
    const mainEnd = y;

    // ================= Bandas laterales =================
    let sy0 = 96;
    sy0 = F.band(sy0, 'Rasgos diferenciales', { x: SX, w: SW }) + 20;
    const side = (id, o) => { const b = F.box(id, Object.assign({ x: SX, y: sy0, w: SW, type: 'info', fs: 16, align: 'left' }, o)); sy0 = b.y + b.h + 18; return b; };
    side('r_pol', { node: 'wkl_sistematicas', title: 'Polimorfia y bipolaridad',
      text: 'Fluctuaciones bipolares en el 78,8 % de las cicloides, el 49,7 % de las no sistemáticas y el 1,6 % de las sistemáticas (604 casos; von Trostorff 1975). Las fásicas puras son estables y las sistemáticas, monomorfas (Foucher 2020).' });
    side('r_her', { node: 'trostorff_hit', title: 'Carga hereditaria',
      text: 'Familiares con psicosis: 50,8 % en no sistemáticas, 22,1 % en cicloides y 15,9 % en sistemáticas (von Trostorff 1975). Fásicas puras ≈3 % frente a 22-36 % en la maníaco-depresiva (Foucher 2020; Leonhard 1987).' });
    side('r_gem', { node: 'wurzburg_escuela', title: 'Gemelos (Würzburg)',
      text: 'Concordancia monocigótica frente a dicigótica: no sistemáticas 88,9 % frente a 25,0 %; cicloides 38,5 % frente a 36,4 %; ningún monocigótico con forma sistemática (45 parejas; Franzek y Beckmann 1998). En familias multiplex, en cambio, la sistemática fue la más familiar (h² = 0,78; Peralta 2016).' });
    side('r_est', { node: 'estacion_wkl', title: 'Ambiente prenatal',
      text: 'En 1299 personas, exceso de nacimientos en invierno y primavera solo en cicloides y sistemáticas, y déficit en no sistemáticas (Franzek y Beckmann 1993).' });
    side('r_pro', { node: 'pcicloid', title: 'Pronóstico',
      text: 'Estancia hospitalaria media de 16,9, 13,8 y 8,2 años en sistemáticas, no sistemáticas y cicloides (von Trostorff 1975). Cicloides con mejor curso y calidad de vida que la esquizofrenia tras 13 años (Jabs 2004). El 93 % de diagnósticos y pronósticos se confirmó en 1986, por los mismos autores (von Trostorff y Leonhard 1990).' });
    side('r_val', { node: 'leonhard_hit', title: 'Fiabilidad y validez',
      text: 'κ de 0,82 y 0,89 para los grandes grupos en 22 pacientes (Pfuhlmann 1997). En 243 primeros episodios seguidos 10-31 años: sistemáticas y no sistemáticas bien separadas, sin diferencias entre cicloides y maníaco-depresiva (Cuesta 2024).' });
    sy0 += 14;
    sy0 = F.band(sy0, 'CIE-11 / DSM-5-TR (interpretación)', { x: SX, w: SW }) + 20;
    side('k_dep', { node: 'ddm', title: 'Melancolía y depresiones puras',
      text: 'Trastorno depresivo recurrente (CIE-11 6A71) o depresivo mayor (DSM-5-TR), con síntomas melancólicos o psicóticos según la forma [interpretación; código: fuente oficial no localizada].' });
    side('k_man', { node: 'munip', title: 'Manía pura y euforias puras',
      text: 'Un episodio maníaco basta para el trastorno bipolar I (CIE-11 6A60; DSM-5-TR): la monopolaridad maníaca no tiene categoría propia [interpretación; código: fuente oficial no localizada].' });
    side('k_emd', { node: 'tb1', title: 'Enfermedad maníaco-depresiva',
      text: 'Trastorno bipolar I o II [interpretación]. El trastorno bipolar de la CIE y el DSM incluye también algunas cicloides de baja familiaridad (Foucher 2020).' });
    side('k_cic', { node: 'psbreve', title: 'Psicosis cicloides',
      text: 'Trastorno psicótico agudo y transitorio (CIE-11 6A23) o psicótico breve o esquizofreniforme (DSM-5-TR) [interpretación; código: fuente oficial no localizada]. En la CIE-10, el trastorno agudo y transitorio solo coincidía con cicloides y bouffées en la mitad de los casos (Foucher 2020).' });
    side('k_esq', { node: 'esq', title: 'No sistemáticas y sistemáticas',
      text: 'Esquizofrenia (6A20), esquizoafectivo (6A21) o catatonía (6A40) [interpretación; códigos: fuente oficial no localizada]. Concordancia de la WKL con la CIE-10 λ = 0,4 y con el DSM-IV λ = 0,56 (Foucher 2020).' });

    y = Math.max(mainEnd, sy0 + 20);
    F.box('lim', { x: X, y, w: SX + SW - X, type: 'lim', fs: 17, align: 'left', title: 'Límites de la figura',
      text: 'Esquema docente de un sistema nosológico histórico, no incluido como tal en la CIE-11 ni en el DSM-5-TR; no es un algoritmo validado ni sustituye al seguimiento longitudinal ni al juicio clínico. La clave exige conocer el curso de toda la vida, y un primer episodio puede no permitir avanzar más allá del paso 1 o 2. Las cifras proceden casi siempre de series de la propia escuela (Berlín, Würzburg), con evaluadores formados en ella y el curso incluido en el diagnóstico; su validez externa es parcial (Cuesta 2024) y algunas tesis, como la baja carga hereditaria de las sistemáticas, han sido contradichas (Peralta 2016). Los rasgos de una línea de cada forma resumen las fichas del atlas, basadas en Leonhard y no cotejadas con el original. La correspondencia con la CIE-11 y el DSM-5-TR es una interpretación, no una equivalencia; los códigos no se han comprobado en la fuente oficial. El tratamiento sigue las guías de cada categoría oficial, no la subforma WKL.' });
    F.footer('Fuentes principales: Leonhard 1957, 1987 y 1999; Foucher 2020; Angst y Marneros 2001; Angst 1978; Perris 1966 y 1990; Teichmann 1990; von Trostorff 1975; von Trostorff y Leonhard 1990; Franzek y Beckmann 1993 y 1998; Pfuhlmann 1997 y 2004; Jabs 2002 y 2004; Peralta 2007 y 2016; Stöber 1995 y 2000; Cuesta 2024; Giné Servén 2021; CIE-11 (OMS); DSM-5-TR (APA 2022). Referencias completas en la ficha de la figura. Abreviaturas: WKL, Wernicke-Kleist-Leonhard; LCR, líquido cefalorraquídeo; NMDAR, receptor de N-metil-D-aspartato. «[fuente no localizada]»: afirmación razonable no contrastada con la fuente primaria. Esquema docente: no sustituye a la valoración clínica individual.');
    return F;
  }
};
