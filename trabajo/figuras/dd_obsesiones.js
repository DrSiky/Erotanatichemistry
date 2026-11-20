// Figura: pensamientos repetitivos e intrusivos. Diagnóstico diferencial entre obsesión, rumiación, preocupación,
// idea sobrevalorada, idea delirante, reexperimentación postraumática, intrusiones del dismórfico y de la hipocondría,
// imágenes e impulsos de daño y fenómenos de pasividad.
// Compilar en prueba: node tools/fig.js dd_obsesiones --dry --png <carpeta>
const TITLE = 'Pensamientos repetitivos e intrusivos: diagnóstico diferencial';
module.exports = {
  key: 'dd_obsesiones',
  meta: {
    title: TITLE,
    kind: 'dd',
    cap: 'Diagnóstico diferencial de los pensamientos repetitivos e intrusivos en cinco bloques. 1) Punto de partida: el pensamiento repetitivo e intrusivo es frecuente fuera de la clínica y comparte procesos entre trastornos, de modo que se diferencia por la autoría, la egodistonía, la convicción, la resistencia, el contenido, la función de la conducta asociada y la relación con el ánimo. 2) Seis preguntas en un orden docente: a la izquierda la pregunta, en el centro el fenómeno al que orienta si la respuesta es «sí» (cada caja abre su ficha) y a la derecha el dato que la respalda; la flecha descendente indica «no, siguiente pregunta». 3) Matriz de diez fenómenos frente a seis criterios. 4) Situaciones frontera y seguridad. 5) Exploración e instrumentos. Las dimensiones son continuas: el orden de las preguntas no es un algoritmo validado y un mismo fenómeno puede cambiar de casilla con el curso. «[fuente no localizada]», «[no verificada en el texto original]» y «[fuente oficial no localizada]» señalan lo que no se ha podido cotejar en una fuente primaria. Esquema docente: no sustituye al juicio clínico.',
    refs: [
      'Watkins ER (2008). Constructive and unconstructive repetitive thought. Psychol Bull 134:163-206 · PMID 18298268',
      'Watkins E, Moulds M & Mackintosh B (2005). Comparisons between rumination and worry in a non-clinical population. Behav Res Ther 43:1577-1585 · PMID 16239152',
      'Wahl K et al. (2019). Is repetitive negative thinking a transdiagnostic process? A comparison of key processes of RNT in depression, generalized anxiety disorder, obsessive-compulsive disorder, and community controls. J Behav Ther Exp Psychiatry 64:45-53 · PMID 30851652',
      'Nolen-Hoeksema S, Wisco BE & Lyubomirsky S (2008). Rethinking rumination. Perspect Psychol Sci 3:400-424 · PMID 26158958',
      'Borkovec TD, Robinson E, Pruzinsky T & DePree JA (1983). Preliminary exploration of worry: some characteristics and processes. Behav Res Ther 21:9-16 · PMID 6830571',
      'Borkovec TD & Inz J (1990). The nature of worry in generalized anxiety disorder: a predominance of thought activity. Behav Res Ther 28:153-158 · PMID 2183759',
      'Borkovec TD & Hu S (1990). The effect of worry on cardiovascular response to phobic imagery. Behav Res Ther 28:69-73 · PMID 2302151',
      'Langlois F, Freeston MH & Ladouceur R (2000). Differences and similarities between obsessive intrusive thoughts and worry in a non-clinical population: study 1. Behav Res Ther 38:157-173 · PMID 10661001',
      'Rachman S & de Silva P (1978). Abnormal and normal obsessions. Behav Res Ther 16:233-248 · PMID 718588',
      'Julien D, O\'Connor KP & Aardema F (2007). Intrusive thoughts, obsessions, and appraisals in obsessive-compulsive disorder: a critical review. Clin Psychol Rev 27:366-383 · PMID 17240502',
      'Kozak MJ & Foa EB (1994). Obsessions, overvalued ideas, and delusions in obsessive-compulsive disorder. Behav Res Ther 32:343-353 · PMID 8192634',
      'Veale D (2002). Over-valued ideas: a conceptual analysis. Behav Res Ther 40:383-400 · PMID 12002896',
      'Oulis P, Konstantakopoulos G, Lykouras L & Michalopoulou PG (2013). Differential diagnosis of obsessive-compulsive symptoms from delusions in schizophrenia: a phenomenological approach. World J Psychiatry 3:50-56 · PMID 24255875',
      'Bürgy M (2005). Psychopathology of obsessive-compulsive disorder: a phenomenological approach. Psychopathology 38:291-300 · PMID 16224202',
      'Swets M et al. (2014). The obsessive compulsive spectrum in schizophrenia, a meta-analysis and meta-regression exploring prevalence rates. Schizophr Res 152:458-468 · PMID 24361303',
      'Mullins S & Spence SA (2003). Re-examining thought insertion. Semi-structured literature review and conceptual analysis. Br J Psychiatry 182:293-298 · PMID 12668403',
      'Soares-Weiser K et al. (2015). First rank symptoms for schizophrenia. Cochrane Database Syst Rev 1:CD010653 · PMID 25879096',
      'Ehlers A et al. (2002). The nature of intrusive memories after trauma: the warning signal hypothesis. Behav Res Ther 40:995-1002 · PMID 12296496',
      'Brewin CR, Gregory JD, Lipton M & Burgess N (2010). Intrusive images in psychological disorders: characteristics, neural mechanisms, and treatment implications. Psychol Rev 117:210-232 · PMID 20063969',
      'Phillips KA, Menard W, Pagano ME, Fay C & Stout RL (2006). Delusional versus nondelusional body dysmorphic disorder: clinical features and course of illness. J Psychiatr Res 40:95-104 · PMID 16229856',
      'Fairbrother N & Woody SR (2008). New mothers\' thoughts of harm related to the newborn. Arch Womens Ment Health 11:221-229 · PMID 18463941',
      'Bergink V, Rasgon N & Wisner KL (2016). Postpartum psychosis: madness, mania, and melancholia in motherhood. Am J Psychiatry 173:1179-1188 · PMID 27609245',
      'Stein DJ et al. (2016). The classification of Obsessive-Compulsive and Related Disorders in the ICD-11. J Affect Disord 190:663-674 · PMID 26590514',
      'Leckman JF et al. (2010). Obsessive-compulsive disorder: a review of the diagnostic criteria and possible subtypes and dimensional specifiers for DSM-V. Depress Anxiety 27:507-527 · PMID 20217853',
      'Eisen JL et al. (1998). The Brown Assessment of Beliefs Scale: reliability and validity. Am J Psychiatry 155:102-108 · PMID 9433346',
      'Goodman WK et al. (1989). The Yale-Brown Obsessive Compulsive Scale. I. Development, use, and reliability. Arch Gen Psychiatry 46:1006-1011 · PMID 2684084',
      'Meyer TJ, Miller ML, Metzger RL & Borkovec TD (1990). Development and validation of the Penn State Worry Questionnaire. Behav Res Ther 28:487-495 · PMID 2076086',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5th ed., text revision (DSM-5-TR). Washington, DC: APA Publishing. Trastorno obsesivo-compulsivo, dismórfico corporal, de ansiedad por enfermedad y de estrés postraumático: criterios y especificadores de introspección [no verificada en el texto original]',
      'Jaspers K (1913). Allgemeine Psychopathologie. Berlín: Springer. Caracteres externos de la idea delirante e ideas delirantes primarias y deliroides [no verificada en el texto original]',
      'Schneider K (1950). Klinische Psychopathologie. 3.ª ed. Stuttgart: Thieme. Definición de la vivencia obsesiva (Zwang) y síntomas de primer rango [no verificada en el texto original]'
    ],
    nodes: ['rum', 'toc_dsm', 'tdelirant', 'esq', 'ddm', 'jaspers_1913', 'schneider_1950', 'anancasmo', 'tpobs', 'anor', 'querul', 'sro', 'tept_parto', 'pseudoaluc']
  },
  draw(Fig) {
    const W = 2300, X = 60, FW = W - 120;
    const F = new Fig({ key: 'dd_obsesiones', title: TITLE, w: W,
      desc: 'Diagnóstico diferencial de los pensamientos repetitivos e intrusivos: punto de partida, seis preguntas sobre autoría, recuerdo traumático, egodistonía y resistencia, problema real, creencia valorada y convicción delirante, cada una unida al fenómeno al que orienta y a su respaldo; matriz de diez fenómenos frente a seis criterios; situaciones frontera, seguridad, exploración e instrumentos, y límites.' });
    const eq = bs => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };

    // ---------- Bloque 1: punto de partida ----------
    let y = F.band(90, 'Punto de partida: el pensamiento repetitivo no es patológico por sí mismo', { n: 1 }) + 24;
    const CW = 700, CG = 40;
    const p1 = F.box('p1', { x: X, y, w: CW, type: 'q', fs: 18, node: 'rumiacion_persev', title: 'Pensamiento repetitivo: constructivo o no',
      text: 'El pensamiento repetitivo puede tener consecuencias perjudiciales (depresión, ansiedad, peor salud física) o beneficiosas (recuperación tras sucesos traumáticos, planificación anticipatoria). Las distinguen la valencia del contenido, el contexto y el nivel de construcción: abstracto frente a concreto (Watkins 2008).' });
    const p2 = F.box('p2', { x: X + CW + CG, y, w: CW, type: 'info', fs: 18, node: 'obses', title: 'Las intrusiones son frecuentes fuera de la clínica',
      text: 'La revisión de Julien (2007) apoya la universalidad de los pensamientos intrusivos de forma y contenido parecidos a las obsesiones, con muestras poco representativas de la población general (antecedente clásico: Rachman y de Silva 1978). En el posparto, los pensamientos de daño accidental al bebé fueron universales en 100 mujeres (Fairbrother y Woody 2008).' });
    const p3 = F.box('p3', { x: X + 2 * (CW + CG), y, w: CW, type: 'warn', fs: 18, title: 'El proceso no basta para diferenciar',
      text: 'En 42 personas con depresión mayor, 35 con ansiedad generalizada y 41 con TOC, los procesos del pensamiento negativo repetitivo y su función de evitación no difirieron entre diagnósticos y sí respecto de 35 controles (Wahl 2019). La diferencia está en la autoría, la egodistonía, la convicción, el contenido y la función de la conducta.' });
    eq([p1, p2, p3]);
    F.arrow(p1, p2); F.arrow(p2, p3);
    y += p1.h + 50;

    // ---------- Bloque 2: seis preguntas ----------
    y = F.band(y, 'Seis preguntas en orden docente (las dimensiones son continuas)', { n: 2 }) + 14;
    const QW = 700, DX = 830, DW = 680, IX = 1580, IW = 660;
    F.text(X, y + 18, 'Pregunta (si la respuesta es «no», bajar)', { bold: true, fs: 19, w: QW });
    F.text(DX, y + 18, 'Si la respuesta es «sí», orienta a (abre la ficha)', { bold: true, fs: 19, w: DW });
    F.text(IX, y + 18, 'Dato que lo respalda', { bold: true, fs: 19, w: IW });
    y += 44;
    const qs = [];
    const step = (id, q, outs, info) => {
      const qb = F.box(id, Object.assign({ x: X, y, w: QW, type: 'q', fs: 18 }, q));
      const ib = F.box(id + '_i', Object.assign({ x: IX, y, w: IW, type: 'info', fs: 17, align: 'left' }, info));
      const ds = [], P = outs.length > 1 ? 14 : 0, GX0 = DX + P, GW0 = DW - 2 * P, w2 = outs.length > 1 ? (GW0 - 14) / 2 : GW0;
      outs.forEach((o, k) => ds.push(F.box(id + '_d' + k, Object.assign({ x: GX0 + k * (w2 + 14), y: y + P, w: w2, type: 'dx', fs: 17 }, o))));
      const hd = Math.max(...ds.map(d => d.h)); ds.forEach(d => { d.h = hd; });
      const h = Math.max(qb.h, ib.h, hd + 2 * P); qb.h = h; ib.h = h;
      if (outs.length === 1) { ds[0].h = h; F.arrow(qb, ds[0], { from: 'r', to: 'l', label: 'Sí' }); }
      else { ds.forEach(d => { d.h = h - 2 * P; }); const g = { x: DX, y, w: DW, h }; F.group(g); F.arrow(qb, g, { from: 'r', to: 'l', label: 'Sí' }); }
      qs.push(qb); y += h + 46;
      return { qb, ds, ib };
    };
    step('s1', { node: 'jaspers_yo', title: '1. ¿Vive el pensamiento como ajeno, puesto en su mente por otro?', text: 'Explorar la autoría por separado de la explicación: si siente que el pensamiento no es suyo y alguien lo introduce (Schneider 1950).' },
      [{ node: 'pasividad', title: 'Inserción del pensamiento (pasividad)', text: 'Síntoma de primer rango; la obsesión, en cambio, se reconoce como producto de la propia mente aunque sea indeseada (Schneider 1950). Si se oye como voz con cualidad sensorial, valorar alucinación.' }],
      { title: 'No específica de la esquizofrenia', text: 'Definida en sentido estricto, la inserción del pensamiento se identifica con fiabilidad pero no es específica de la esquizofrenia (Mullins y Spence 2003). Los síntomas de primer rango la distinguen de otros diagnósticos con sensibilidad del 57 % y especificidad del 81,4 % (Soares-Weiser 2015).' });
    step('s2', { node: 'ptsd', title: '2. ¿Es un recuerdo involuntario de un suceso real, vivido con cualidad sensorial y sensación de amenaza presente?', text: 'Reexperimentación: recuerdos intrusivos, pesadillas o escenas retrospectivas tras un suceso traumático (DSM-5-TR).' },
      [{ node: 'ptsd', title: 'Reexperimentación postraumática', text: 'Recuerdo propio e involuntario de un suceso real, con evitación de recuerdos y claves e hiperactivación (DSM-5-TR).' }],
      { title: 'Imágenes sensoriales, no ideas', text: 'Las intrusiones postraumáticas fueron sobre todo visuales y rara vez pensamientos; reproducían estímulos previos al momento de mayor impacto, lo que explica la sensación de amenaza actual (Ehlers 2002). Hay imágenes intrusivas en el TEPT, otras ansiedades, la depresión, los trastornos alimentarios y la psicosis (Brewin 2010).' });
    step('s3', { node: 'compul', title: '3. ¿Es intruso, indeseado y contrario a sus valores, y trata de ignorarlo, suprimirlo o neutralizarlo?', text: 'Egodistonía y resistencia; neutralización con una compulsión visible o mental, evitación o búsqueda de reaseguro (DSM-5-TR).' },
      [{ node: 'obses', title: 'Obsesión (TOC)', text: 'Contaminación, dudas, simetría, contenidos sexuales o religiosos. La compulsión reduce el malestar o previene lo temido sin conexión realista con ello (DSM-5-TR).' },
       { node: 'toc_perinatal', title: 'Imágenes e impulsos de daño', text: 'Miedo a dañar a otros, pensamientos no deseados, seguidos de evitación o comprobación (Fairbrother y Woody 2008).' }],
      { title: 'La egodistonía separa obsesión y preocupación', text: 'En 254 estudiantes, las intrusiones de tipo obsesivo y las preocupaciones difirieron en frecuencia, duración, contenido verbal o en imagen, interferencia y egodistonía; la dimensión egodistónica-egosintónica resultó clave (Langlois 2000). La concepción estricta de la obsesión procede de Westphal y recibió su forma final con Jaspers (Bürgy 2005).' });
    step('s4', { node: 'ddm', title: '4. ¿Gira sobre un problema real o verosímil, sin vivirse como ajeno ni absurdo?', text: 'Precisar la orientación temporal y la relación con el ánimo de fondo.' },
      [{ node: 'rumiacion_persev', title: 'Rumiación depresiva', text: 'Centrada en el malestar, sus causas y consecuencias; orientada al pasado (Watkins 2005; Nolen-Hoeksema 2008).' },
       { node: 'preocup_evit', title: 'Preocupación (TAG)', text: 'Cadena de pensamientos sobre problemas de resultado incierto, orientada al futuro (Borkovec 1983; Watkins 2005).' }],
      { title: 'Mismos procesos, distinto contenido', text: 'En 149 mujeres sin trastorno, rumiación y preocupación difirieron en cronicidad, realidad del problema y orientación al pasado o al futuro, pero no en valoraciones ni estrategias (Watkins 2005). La rumiación predice el inicio de la depresión y se asocia también a ansiedad, atracones, consumo de alcohol y autolesión (Nolen-Hoeksema 2008).' });
    step('s5', { node: 'idea_sobrev', title: '5. ¿Es una creencia propia, valorada y comprensible, que defiende y que organiza su vida?', text: 'Plausible en su núcleo, con gran carga afectiva; no se resiste ni se vive como absurda (Veale 2002).' },
      [{ node: 'idea_sobrev', title: 'Idea sobrevalorada', text: 'Peso y figura, apariencia, salud o agravio: se exploran en la anorexia nerviosa, el dismórfico, la hipocondría y la querulancia [fuente no localizada].' }],
      { title: 'Valores idealizados que definen el yo', text: 'Veale (2002) propone que la idea sobrevalorada se asocia a valores idealizados que definen la identidad y se sostienen con rigidez; es a menudo más resistente al tratamiento que las obsesiones o los delirios. En la tradición estadounidense equivale a «poca introspección» en un continuo de la duda obsesiva a la certeza delirante (Veale 2002).' });
    step('s6', { node: 'delirio', title: '6. ¿Convicción plena e incorregible ante pruebas, con contenido falso o imposible?', text: 'Certeza subjetiva, incorregibilidad e imposibilidad del contenido (Jaspers 1913).' },
      [{ node: 'delirio', title: 'Idea delirante', text: 'Primaria o deliroide (derivada del afecto: culpa, ruina o hipocondría en la depresión psicótica) (Jaspers 1913).' },
       { node: 'tocp', title: 'TOC o dismórfico con creencias delirantes', text: 'Si el contenido y los rituales son los del TOC o del dismórfico, se especifica «con ausencia de introspección/creencias delirantes» (DSM-5-TR).' }],
      { title: 'Un continuo de convicción', text: 'Las ideas obsesivas no pueden dicotomizarse según la introspección; es más adecuado un continuo de fuerza de la convicción (Kozak y Foa 1994). En 191 personas con dismórfico, las formas delirante y no delirante tuvieron más semejanzas que diferencias; las diferencias se explicaron por la mayor gravedad (Phillips 2006).' });
    for (let i = 0; i < qs.length - 1; i++) F.arrow(qs[i], qs[i + 1], { from: 'b', to: 't', fa: 0.2, fb: 0.2, label: 'No' });
    y += 4;

    // ---------- Bloque 3: matriz ----------
    y = F.band(y, 'Matriz: diez fenómenos frente a seis criterios', { n: 3 }) + 20;
    const t = F.table({ x: X, y, fs: 16, cols: [
      { w: 250, label: 'Fenómeno (abre la ficha)' }, { w: 330, label: 'Autoría y egodistonía' }, { w: 330, label: 'Convicción e introspección' },
      { w: 300, label: 'Resistencia' }, { w: 360, label: 'Contenido y orientación' }, { w: 330, label: 'Conducta asociada y su función' }, { w: 280, label: 'Relación con el ánimo' }],
      rows: [
        [{ t: 'Obsesión (TOC)', node: 'obses' }, 'Propia pero intrusa e indeseada; egodistónica (Langlois 2000).', 'Variable: buena o aceptable, poca, o ausente con creencias delirantes (DSM-5-TR); la poca introspección puede indicar cronicidad o delusividad (Oulis 2013).', 'Intento de ignorar, suprimir o neutralizar (DSM-5-TR).', 'Temor a algo improbable: contaminación, daño, duda, simetría, sexual, religioso.', 'Compulsión visible o mental, evitación o reaseguro para reducir malestar o prevenir lo temido (DSM-5-TR).', 'No nace del ánimo; provoca ansiedad o malestar (DSM-5-TR).'],
        [{ t: 'Imágenes e impulsos de daño', node: 'toc_perinatal' }, 'Propias, vividas con horror y contrarias a los propios valores.', 'Reconoce que no desea el daño; teme llegar a actuar [fuente no localizada].', 'Evitación de objetos o situaciones y comprobación [fuente no localizada].', 'Daño accidental o intencionado a seres queridos; cerca de la mitad de las madres tuvo los segundos (Fairbrother y Woody 2008).', 'Protección y evitación; poca evidencia de asociación con una crianza agresiva (Fairbrother y Woody 2008).', 'Más frecuentes con estrés parental alto y escaso apoyo social (Fairbrother y Woody 2008).'],
        [{ t: 'Rumiación depresiva', node: 'rumiacion_persev' }, 'Propia y congruente con el ánimo [fuente no localizada].', 'Puede llegar a delirio de culpa o ruina en la depresión psicótica (Jaspers 1913: idea deliroide).', 'Se vive como difícil de detener e improductiva (Wahl 2019).', 'Malestar, sus causas y consecuencias; problema real; pasado (Watkins 2005; Nolen-Hoeksema 2008).', 'Sin rituales; dificulta la solución de problemas y la conducta instrumental (Nolen-Hoeksema 2008).', 'Agrava la depresión y predice su inicio (Nolen-Hoeksema 2008).'],
        [{ t: 'Preocupación (TAG)', node: 'tag' }, 'Propia; más egosintónica que la intrusión obsesiva (Langlois 2000).', 'Reconoce que es excesiva (DSM-5-TR).', 'Relativamente incontrolable (Borkovec 1983).', 'Problemas de resultado incierto; futuro (Watkins 2005); predominio verbal sobre la imagen (Borkovec e Inz 1990).', 'Evitación cognitiva: reduce la respuesta cardiaca a la imagen temida pero no el miedo (Borkovec y Hu 1990).', 'Ansiedad; comparte procesos con la rumiación (Watkins 2005).'],
        [{ t: 'Idea sobrevalorada', node: 'idea_sobrev' }, 'Propia, valorada y defendida; define la identidad (Veale 2002).', 'Intensa pero no absoluta; zona media del continuo (Veale 2002).', 'No se resiste.', 'Plausible y comprensible desde la biografía [fuente no localizada].', 'Organiza la conducta; más resistente al tratamiento (Veale 2002).', 'Gran carga afectiva (Veale 2002).'],
        [{ t: 'Idea delirante', node: 'delirio' }, 'Propia; se vive como verdad, no como intrusión (Oulis 2013).', 'Certeza e incorregibilidad (Jaspers 1913).', 'Sin resistencia ni conciencia de su inexactitud (Oulis 2013).', 'Falso o imposible, no compartido; congruente o no con el ánimo.', 'Conductas repetitivas al servicio de la creencia, no para neutralizar un temor reconocido (Oulis 2013).', 'Primaria (incomprensible) o deliroide, derivada del afecto (Jaspers 1913).'],
        [{ t: 'Reexperimentación postraumática', node: 'ptsd' }, 'Recuerdo propio e involuntario de un suceso real.', 'Se acompaña de una sensación de amenaza actual grave (Ehlers 2002).', 'Evitación de recuerdos y claves (DSM-5-TR).', 'Fragmentos sensoriales, sobre todo visuales; pocas ideas (Ehlers 2002).', 'Evitación e hipervigilancia (DSM-5-TR).', 'Miedo, horror e hiperactivación (DSM-5-TR).'],
        [{ t: 'Intrusión del dismórfico corporal', node: 'tdc' }, 'Propia; egodistonía variable [fuente no localizada].', 'Variable; formas delirante y no delirante más parecidas que distintas (Phillips 2006).', 'Difícil de resistir (DSM-5-TR).', 'Defectos de la apariencia mínimos o no visibles para otras personas (DSM-5-TR).', 'Espejo, camuflaje, comparación y reaseguro (DSM-5-TR).', 'La forma delirante tuvo más intentos de suicidio, explicados por la gravedad (Phillips 2006).'],
        [{ t: 'Intrusión de la hipocondría', node: 'iad' }, 'Propia; vivida como amenaza verosímil [fuente no localizada].', 'Variable; calificador de introspección en la CIE-11 (Stein 2016).', 'Persiste pese a una evaluación médica tranquilizadora (DSM-5-TR).', 'Tener o contraer una enfermedad grave; futuro.', 'Comprobación corporal y consultas, o evitación de la asistencia (DSM-5-TR).', 'Ansiedad por la salud (DSM-5-TR).'],
        [{ t: 'Inserción del pensamiento', node: 'fpr_schneider' }, 'No propia: puesta en la mente por un agente ajeno (Schneider 1950).', 'Se discute si es solo una creencia anómala o también una vivencia (Mullins y Spence 2003).', 'No procede: no hay un pensamiento propio que resistir.', 'Cualquiera: lo diagnóstico es la forma, no el tema.', 'Variable; puede acompañarse de otros síntomas de primer rango (Schneider 1950).', 'No depende del ánimo; aparece también fuera de la esquizofrenia (Mullins y Spence 2003).']
      ] });
    y = t.y + 50;

    // ---------- Bloque 4: frontera y seguridad ----------
    y = F.band(y, 'Situaciones frontera y seguridad', { n: 4 }) + 24;
    const GW = (FW - 2 * 40) / 3;
    const f1 = F.box('f1', { x: X, y, w: GW, type: 'dx', fs: 17, node: 'tocp', title: 'TOC con introspección ausente no es psicosis',
      text: 'El DSM-5-TR permite diagnosticar TOC con creencias delirantes; la propuesta para el DSM-5 fue reconocer un rango de introspección y añadir el especificador «relacionado con tics» (Leckman 2010). La CIE-11 incluye en la misma agrupación el TOC, el dismórfico, la hipocondría, la referencia olfativa y la acumulación (Stein 2016).' });
    const f2 = F.box('f2', { x: X + GW + 40, y, w: GW, type: 'dx', fs: 17, node: 'esq', title: 'Síntomas obsesivos en la esquizofrenia',
      text: 'En 43 estudios con 3978 personas con esquizofrenia, la prevalencia de síntomas obsesivo-compulsivos fue del 30,7 % y la de TOC del 12,3 % (Swets 2014). Distinguir la obsesión del delirio exige explorar autoría, convicción, coherencia con las propias creencias, conciencia de su inexactitud y resistencia (Oulis 2013).' });
    const f3 = F.box('f3', { x: X + 2 * (GW + 40), y, w: GW, type: 'dx', fs: 17, node: 'pasividad', title: 'Obsesión frente a pasividad',
      text: 'Para Jaspers la actividad del yo es un carácter formal de la conciencia del yo; en la pasividad se pierde (el pensamiento lo «hace» otro) y en la obsesión se conserva: el pensamiento es propio aunque se rechace (Jaspers 1913; Schneider 1950).' });
    eq([f1, f2, f3]);
    y += f1.h + 30;
    const f4 = F.box('f4', { x: X, y, w: GW, type: 'warn', fs: 17, node: 'ppp', title: 'Intrusiones de daño en el posparto',
      text: 'Los pensamientos egodistónicos de daño son frecuentes y se asociaron poco a una crianza agresiva (Fairbrother y Woody 2008). La psicosis o la manía posparto es, en cambio, una urgencia psiquiátrica con riesgo de suicidio e infanticidio (Bergink 2016): delirios o alucinaciones sobre el bebé obligan a valoración inmediata.' });
    const f5 = F.box('f5', { x: X + GW + 40, y, w: GW, type: 'warn', fs: 17, node: 'ideac_suic', title: 'Riesgo suicida',
      text: 'En el dismórfico corporal, la forma delirante se asoció a más intentos de suicidio, diferencia atribuible a su mayor gravedad (Phillips 2006). Ante rumiación depresiva, ideas de culpa o ruina y desesperanza, explorar de forma directa la ideación suicida [fuente no localizada].' });
    const f6 = F.box('f6', { x: X + 2 * (GW + 40), y, w: GW, type: 'info', fs: 17, node: 'del_culpa', title: 'Rumiación, obsesión y delirio depresivo',
      text: 'Rumiación, preocupación y pensamiento obsesivo comparten procesos (Wahl 2019): la egodistonía y la neutralización orientan a la obsesión; la congruencia con el ánimo y la ausencia de rituales, a la rumiación; la convicción incorregible de culpa o ruina, a la depresión psicótica (Jaspers 1913) [combinación de criterios: fuente no localizada].' });
    eq([f4, f5, f6]);
    y += f4.h + 50;

    // ---------- Bloque 5: exploración ----------
    y = F.band(y, 'Exploración e instrumentos', { n: 5 }) + 24;
    const e1 = F.box('e1', { x: X, y, w: GW, type: 'act', fs: 17, node: 'insight', title: 'Medir la convicción aparte de la gravedad',
      text: 'La Escala de Evaluación de Creencias de Brown (BABS), de siete ítems y aplicada por el clínico, tuvo excelente fiabilidad, no se correlacionó con la gravedad sintomática y fue sensible al cambio de la introspección en el TOC (Eisen 1998).' });
    const e2 = F.box('e2', { x: X + GW + 40, y, w: GW, type: 'act', fs: 17, node: 'ybocs', title: 'Gravedad obsesiva y preocupación',
      text: 'Y-BOCS: 10 ítems puntuados de 0 a 4 (total 0-40), con subtotales de obsesiones y compulsiones, independiente del tipo de síntoma (Goodman 1989). Penn State Worry Questionnaire: 16 ítems sobre el rasgo de preocupación; discriminó TAG de TEPT en muestras universitarias (Meyer 1990).' });
    const e3 = F.box('e3', { x: X + 2 * (GW + 40), y, w: GW, type: 'act', fs: 17, node: 'aluc_aud', title: 'Preguntas que separan los fenómenos',
      text: '¿Quién produce el pensamiento? ¿Se oye o se piensa? ¿Es un recuerdo de algo que ocurrió? ¿Le parece absurdo o cierto? ¿Qué hace para quitárselo y qué teme si no lo hace? ¿Cambia con el ánimo? Preguntar de forma directa y normalizadora, con ejemplos [fuente no localizada].' });
    eq([e1, e2, e3]);
    y += e1.h + 40;

    F.box('lim', { x: X, y, w: FW, type: 'lim', fs: 18, align: 'left', title: 'Límites de la figura',
      text: 'Esquema docente de apoyo al razonamiento: no es un algoritmo validado ni sustituye al juicio clínico. Egodistonía, convicción, resistencia y orientación temporal son dimensiones continuas que varían entre contenidos, en el tiempo y con la ansiedad; un mismo pensamiento puede cambiar de casilla. Varias comparaciones proceden de muestras no clínicas o de autoinforme retrospectivo (Langlois 2000; Watkins 2005; Wahl 2019) y la base empírica de la idea sobrevalorada es escasa (Veale 2002). Las celdas con «[fuente no localizada]» recogen la tradición clínica sin respaldo primario cotejado. El DSM-5-TR, Jaspers (1913) y Schneider (1950) no se han cotejado en su texto original, y los códigos CIE-11 se omiten por no haberse comprobado en la fuente oficial [fuente oficial no localizada]. No se dibujan tratamientos ni dosis.' });
    F.footer('Fuentes: Watkins 2008 y 2005; Wahl 2019; Nolen-Hoeksema 2008; Borkovec 1983, Borkovec e Inz 1990, Borkovec y Hu 1990; Langlois 2000; Julien 2007; Kozak y Foa 1994; Veale 2002; Oulis 2013; Bürgy 2005; Swets 2014; Mullins y Spence 2003; Soares-Weiser 2015; Ehlers 2002; Brewin 2010; Phillips 2006; Fairbrother y Woody 2008; Bergink 2016; Stein 2016; Leckman 2010; Eisen 1998; Goodman 1989; Meyer 1990; DSM-5-TR; Jaspers 1913; Schneider 1950. Referencias completas en la ficha de la figura. Esquema docente: no sustituye a la valoración clínica individual.');
    return F;
  }
};
