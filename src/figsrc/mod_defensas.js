// Figura: jerarquía de los mecanismos de defensa (Escala de Funcionamiento Defensivo del DSM-IV, niveles de Vaillant, DMRS de Perry)
// y su correspondencia aproximada con los niveles de organización de la personalidad (Kernberg) y el PDM-2.
// Compilar en prueba: node tools/fig.js mod_defensas --dry --png <carpeta>
const TITLE = 'Mecanismos de defensa: jerarquía adaptativa (DSM-IV, Vaillant, Perry) y correspondencia con la organización de la personalidad';
module.exports = {
  key: 'mod_defensas',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cuatro bloques. 1) Tabla de la jerarquía: los siete niveles de la Escala de Funcionamiento Defensivo (DFS), propuesta en el DSM-IV como eje para estudio adicional, ordenados de más adaptativo (arriba) a menos adaptativo (abajo), con su función según la Defense Mechanism Rating Scales (DMRS) de Perry, los cuatro niveles de Vaillant (psicóticas, inmaduras, neuróticas, maduras), las tres categorías de la DMRS y una correspondencia aproximada con la organización de la personalidad de Kernberg y el PDM-2. 2) Definición breve y ejemplo clínico de cada defensa, agrupadas por nivel de la DFS; las definiciones resumen el manual de la DMRS y los ejemplos se adaptan de sus ítems Q-sort o de Vaillant. 3) Organización de la personalidad (neurótica, límite, psicótica), PDM-2 y tratamientos que trabajan con las defensas. 4) Pruebas de validez y valor pronóstico (estudio Grant de Vaillant, DMRS de Perry, DSQ de Bond, DFS en la clínica), límites y críticas. Calificar una defensa de «inmadura» describe un modo de funcionar, no un juicio sobre la persona. Esquema docente: no es un instrumento diagnóstico ni sustituye al juicio clínico.',
    refs: [
      'Vaillant GE (1976). Natural history of male psychological health. V. The relation of choice of ego mechanisms of defense to adult adjustment. Arch Gen Psychiatry 33:535-545 · PMID 1267569',
      'Vaillant GE (1994). Ego mechanisms of defense and personality psychopathology. J Abnorm Psychol 103:44-50 · PMID 8040479',
      'Vaillant GE (2000). Adaptive mental mechanisms: their role in a positive psychology. Am Psychol 55:89-98 · PMID 11392869',
      'Vaillant GE (2011). Involuntary coping mechanisms: a psychodynamic perspective. Dialogues Clin Neurosci 13:366-370 · PMID 22034454',
      'Perry JC & Cooper SH (1989). An empirical study of defense mechanisms. I. Clinical interview and life vignette ratings. Arch Gen Psychiatry 46:444-452 · PMID 2712663',
      'Skodol AE & Perry JC (1993). Should an axis for defense mechanisms be included in DSM-IV? Compr Psychiatry 34:108-119 · PMID 8485979',
      'Perry JC & Høglend P (1998). Convergent and discriminant validity of overall defensive functioning. J Nerv Ment Dis 186:529-535 · PMID 9741558',
      'Perry JC & Bond M (2012). Change in defense mechanisms during long-term dynamic psychotherapy and five-year outcome. Am J Psychiatry 169:916-925 · PMID 22885667',
      'Perry JC, Presniak MD & Olson TR (2013). Defense mechanisms in schizotypal, borderline, antisocial, and narcissistic personality disorders. Psychiatry 76:32-52 · PMID 23458114',
      'Di Giuseppe M & Perry JC (2021). The hierarchy of defense mechanisms: assessing defensive functioning with the Defense Mechanisms Rating Scales Q-Sort. Front Psychol 12:718440 · PMID 34721167',
      'Bond M, Gardner ST, Christian J & Sigal JJ (1983). Empirical study of self-rated defense styles. Arch Gen Psychiatry 40:333-338 · PMID 6830412',
      'Andrews G, Singh M & Bond M (1993). The Defense Style Questionnaire. J Nerv Ment Dis 181:246-256 · PMID 8473876',
      'Bond M (2004). Empirical studies of defense style: relationships with psychopathology and change. Harv Rev Psychiatry 12:263-278 · PMID 15590575',
      'Blais MA, Conboy CA, Wilcox N & Norman DK (1996). An empirical study of the DSM-IV Defensive Functioning Scale in personality disordered patients. Compr Psychiatry 37:435-440 · PMID 8932968',
      'Hilsenroth MJ, Callahan KL & Eudell EM (2003). Further reliability, convergent and discriminant validity of overall defensive functioning. J Nerv Ment Dis 191:730-737 · PMID 14614340',
      'Richardson LA et al. (2025). The relationship between overall defensive functioning and the Personality Assessment Inventory borderline and treatment outcome scales. Res Psychother 28(3):883 · PMID 41560670',
      'Euler S et al. (2025). Maladaptive defense mechanisms moderate treatment outcome in 6 months versus 12 months dialectical-behavior therapy for borderline personality disorder. Psychother Res 35:529-545 (publicado en línea en 2024) · PMID 38648578',
      'Cramer P (2015). Understanding defense mechanisms. Psychodyn Psychiatry 43:523-552 · PMID 26583439',
      'Kernberg OF (1967). Borderline personality organization. J Am Psychoanal Assoc 15:641-685 · PMID 4861171 [texto completo no consultado; criterios tomados de Lenzenweger 2001 y Richardson 2025]',
      'Lenzenweger MF, Clarkin JF, Kernberg OF & Foelsch PA (2001). The Inventory of Personality Organization: psychometric properties, factorial composition, and criterion relations with affect, aggressive dyscontrol, psychosis proneness, and self-domains in a nonclinical sample. Psychol Assess 13:577-591 · PMID 11793901',
      'Clarkin JF, Levy KN, Lenzenweger MF & Kernberg OF (2007). Evaluating three treatments for borderline personality disorder: a multiwave study. Am J Psychiatry 164:922-928 · PMID 17541052',
      'Lingiardi V & McWilliams N (2015). The Psychodynamic Diagnostic Manual - 2nd edition (PDM-2). World Psychiatry 14:237-239 · PMID 26043343 [texto completo no consultado (PMC4471982 no distribuye el texto); niveles del eje P según Tanzilli 2021]',
      'Tanzilli A, Giovanardi G, Patriarca E, Lingiardi V & Williams R (2021). From a symptom-based to a person-centered approach in treating depressive disorders in adolescence: a clinical case formulation using the Psychodynamic Diagnostic Manual (PDM-2)\'s framework. Int J Environ Res Public Health 18:10127 · PMID 34639429',
      'American Psychiatric Association (1994). Diagnostic and Statistical Manual of Mental Disorders, 4ª ed. (DSM-IV), apéndice B: Escala de Funcionamiento Defensivo (pp. 751-753). Washington, DC: APA [no verificada directamente; niveles y defensas tomados de Richardson 2025 y Vaillant 2011]'
    ],
    nodes: ['opd2', 'kohut', 'hitop_tp', 'pid5_lpfs', 'tdi', 'disest', 'histeriaC', 'mbt']
  },
  draw(Fig) {
    const W = 2560, L = 60, CW = W - 2 * L;
    const F = new Fig({ key: 'mod_defensas', title: TITLE, w: W,
      desc: 'Tabla de los siete niveles de la Escala de Funcionamiento Defensivo del DSM-IV con sus defensas, su función según la DMRS, el nivel de Vaillant, la categoría de la DMRS y la organización de la personalidad aproximada; cuadrícula con la definición y un ejemplo clínico de cada defensa; recuadros sobre la organización neurótica, límite y psicótica de Kernberg, el PDM-2 y los tratamientos; y recuadros de validez, valor pronóstico, críticas y límites.' });
    const eq = bs => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };

    // ---------- Bloque 1: tabla de la jerarquía ----------
    let y = F.band(90, 'Jerarquía defensiva: de lo más adaptativo (arriba) a lo menos adaptativo (abajo)', { n: 1 }) + 30;
    y = F.text(L, y, 'Defensas: procesos psicológicos automáticos que median la reacción a conflictos emocionales y a estresores internos o externos (Di Giuseppe y Perry 2021). La DFS figuró en el apéndice B del DSM-IV como eje propuesto para estudio adicional, tras revisarse su fiabilidad y utilidad (Skodol y Perry 1993); Vaillant (2011) la presenta como adaptada de su jerarquía de 1971, y la DMRS de Perry operacionaliza esa jerarquía (Di Giuseppe y Perry 2021). La numeración 7 a 1 es la de la DFS (Richardson 2025). Incluso las defensas «patológicas» cumplen una función homeostática (Vaillant 2011).', { fs: 18, w: CW }) + 18;
    const t = F.table({ x: L, y, fs: 17, cols: [
      { w: 330, label: 'Nivel de la DFS (DSM-IV)' },
      { w: 520, label: 'Defensas del nivel (DFS)' },
      { w: 690, label: 'Qué protege y cómo (función según la DMRS)' },
      { w: 300, label: 'Nivel de Vaillant' },
      { w: 210, label: 'Categoría DMRS' },
      { w: 390, label: 'Organización de la personalidad (aproximada)' }],
      rows: [
        ['7 · Alto nivel adaptativo', 'Afiliación, altruismo, anticipación, humor, autoafirmación, autoobservación, sublimación, supresión', 'El estresor se percibe sin distorsión y se asume como propio; maximiza la gratificación reconociendo los propios límites y buscando ayuda si la hay (Di Giuseppe y Perry 2021)', 'Maduras: altruismo, sublimación, supresión, humor (Vaillant 2011) y anticipación (Vaillant 2000)', 'Maduras', { t: 'Sana o normal: nivel «sano» de la DFS (Richardson 2025); PDM-2: nivel sano', node: 'pdm2' }],
        ['6 · Inhibiciones mentales (formación de compromiso)', 'Aislamiento afectivo, intelectualización, anulación, represión, disociación, formación reactiva, desplazamiento', 'La DMRS lo divide en obsesivo (la idea es consciente, el afecto se mantiene lejos) y neurótico (se siente el afecto, la idea se bloquea) (Di Giuseppe y Perry 2021)', 'Neuróticas o intermedias; pero Vaillant sitúa la disociación entre las inmaduras (Vaillant 2011)', 'Neuróticas', { t: 'Neurótica: nivel «neurótico» de la DFS (Richardson 2025)', node: 'anancasmo' }],
        ['5 · Distorsión menor de la imagen', 'Idealización, devaluación, omnipotencia', 'Sostienen la autoestima ante el fracaso, la crítica o la decepción distorsionando la imagen propia o ajena, sin mejorar la adaptación (Di Giuseppe y Perry 2021)', 'Sin equivalente en los ejemplos de inmaduras de Vaillant (1994, 2011)', 'Inmaduras', { t: 'Límite: comunes en el TP narcisista y antisocial (Perry 2013)', node: 'tpnarc' }],
        ['4 · Renegación (disavowal)', 'Negación, proyección, racionalización (la DMRS añade aquí la fantasía autista)', 'Rehúsa reconocer aspectos de la realidad o de la experiencia y atribuye el problema a otra fuente, sin asumir el propio papel (Di Giuseppe y Perry 2021)', 'Inmaduras: proyección (Vaillant 2011)', 'Inmaduras', { t: 'Límite: negación en el TP antisocial (Perry 2013)', node: 'tpanti' }],
        ['3 · Distorsión mayor de la imagen', 'Fantasía autista, identificación proyectiva, escisión de la imagen propia o ajena', 'Mantiene separadas las representaciones buenas y malas (todo bueno o todo malo) ante la amenaza de castigo, abuso o abandono (Di Giuseppe y Perry 2021)', 'Inmaduras: fantasía autista (Vaillant 2011)', 'Inmaduras', { t: 'Límite: escisión, núcleo del TP límite (Perry 2013) y defensa central de la organización límite (Kernberg 1967)', node: 'tlp' }],
        ['2 · Acción', 'Paso al acto, retirada apática, queja con rechazo de ayuda, agresión pasiva', 'Percibe la fuente de estrés como externa e intolerable y actúa sobre el entorno o sobre sí sin anticipar las consecuencias (Di Giuseppe y Perry 2021)', 'Inmaduras: paso al acto, agresión pasiva, hipocondría (Vaillant 1994)', 'Inmaduras', { t: 'Límite: las «patológicas» (niveles 5 a 1) describen las organizaciones límite y psicótica (Richardson 2025)', node: 'kernberg' }],
        ['1 · Desregulación defensiva', 'Proyección delirante, negación psicótica, distorsión psicótica', 'Ruptura con la realidad: la DFS añade este nivel a la DMRS (Richardson 2025); en la DMRS es el nivel 0, fuera de su manual, y se evalúa con la P-DMRS (Di Giuseppe y Perry 2021)', 'Psicóticas: frecuentes en la infancia temprana, los sueños y la psicosis (Vaillant 2011)', 'No incluida', { t: 'Psicótica: prueba de realidad alterada (Kernberg 1967; Lenzenweger 2001)', node: 'juicio' }]
      ] });
    y = t.y + 60;

    // ---------- Bloque 2: definiciones y ejemplos ----------
    y = F.band(y, 'Definición breve y ejemplo clínico de cada defensa, por nivel de la DFS', { n: 2 }) + 24;
    y = F.text(L, y, 'Definiciones resumidas del manual de la DMRS y ejemplos adaptados de sus ítems Q-sort (Di Giuseppe y Perry 2021), salvo cita expresa de Vaillant (2011). «Def.»: definición; «Ej.»: ejemplo.', { fs: 18, w: CW }) + 16;
    const S = CW / 8, BW = S - 14, FS = 16;
    // Fila de grupos: cada grupo [etiqueta, items[[título, texto, nodo]]] ocupa tantas ranuras como defensas.
    const row = (y0, groups, extra) => {
      let slot = 0; const bs = []; const frames = [];
      groups.forEach(g => {
        const gx = L + slot * S;
        g[1].forEach((it, i) => { bs.push(F.box('d_' + it[0].replace(/[^a-zA-Záéíóúñ]/g, '').slice(0, 14) + slot + i, { x: gx + (i * S) + 7, y: y0 + 46, w: BW, type: 'info', fs: FS, align: 'left', node: it[2], title: it[0], text: it[1] })); });
        frames.push({ x: gx + 2, w: g[1].length * S - 4, label: g[0] }); slot += g[1].length;
      });
      let ex = null;
      if (extra) ex = F.box(extra.id, { x: L + slot * S + 7, y: y0 + 46, w: (8 - slot) * S - 14, type: extra.type, fs: 17, align: 'left', node: extra.node, title: extra.title, text: extra.text });
      const h = eq(bs.concat(ex ? [ex] : []));
      frames.forEach(fr => F.group({ x: fr.x, y: y0, w: fr.w, h: h + 58, label: fr.label }));
      return y0 + h + 58;
    };
    y = row(y, [['Nivel 7 · Alto nivel adaptativo · Vaillant y DMRS: maduras', [
      ['Afiliación', 'Def.: recurre a otras personas en busca de ayuda o apoyo sin delegar en ellas la solución. Ej.: comenta un problema laboral con alguien de confianza y sale con un plan propio.'],
      ['Altruismo', 'Def.: se dedica a cubrir necesidades ajenas, lo que gratifica en parte las propias. Ej.: tras superar una dificultad, ayuda a quien pasa ahora por lo mismo.'],
      ['Anticipación', 'Def.: prevé reacciones emocionales futuras y ensaya la situación juntando ideas y afectos. Ej.: antes de una actuación, se imagina en ella para prepararse y angustiarse menos.'],
      ['Humor', 'Def.: resalta lo irónico o divertido del conflicto sin que sea a costa de nadie. Ej.: el humor negro en el campo de batalla o en el quirófano (Vaillant 2011).'],
      ['Autoafirmación', 'Def.: expresa de forma directa sentimientos y pensamientos para lograr sus fines, sin coerción ni manipulación. Ej.: ante un trato despectivo, defiende su postura con calma.'],
      ['Autoobservación', 'Def.: reflexiona sobre sus pensamientos, emociones y conducta, y se ve como le ven. Ej.: entiende su propia reacción en un conflicto y así comprende mejor al otro.', 'insight'],
      ['Sublimación', 'Def.: canaliza sentimientos o impulsos potencialmente desadaptativos hacia conductas socialmente aceptables. Ej.: canalizar en la creación artística o en el deporte sentimientos en conflicto (manual de la DMRS).'],
      ['Supresión', 'Def.: evita pensar en un problema de forma voluntaria y temporal, hasta el momento de abordarlo: posponer, no procrastinar. Ej.: deja a un lado la angustia para atender lo urgente.']]]]);
    y += 22;
    y = row(y, [['Nivel 6 · Inhibiciones mentales · Vaillant y DMRS: neuróticas (disociación: inmadura para Vaillant)', [
      ['Aislamiento afectivo', 'Def.: no vive a la vez lo cognitivo y lo afectivo de una experiencia: el afecto queda fuera. Ej.: un cirujano encuentra «interesante» operar un cáncer de páncreas (Vaillant 2011).', 'anancasmo'],
      ['Intelectualización', 'Def.: uso excesivo del pensamiento abstracto para evitar sentimientos perturbadores. Ej.: ante un problema personal, solo pide información general y explica sin sentir.'],
      ['Anulación', 'Def.: conductas o palabras que, de forma simbólica, reparan o niegan lo pensado, sentido o hecho antes. Ej.: matiza cada afirmación con «bueno, no exactamente».'],
      ['Represión', 'Def.: no puede recordar ni ser consciente de deseos, sentimientos o experiencias perturbadores; «sentir sin pensar» (Vaillant 2011). Ej.: no recuerda un incidente penoso que normalmente no se olvidaría.', 'breuer_freud'],
      ['Disociación', 'Def.: alteración temporal de las funciones integradoras de la conciencia o la identidad. Ej.: ante un tema muy cargado se confunde, se despersonaliza o «se queda en blanco».', 'desp_sx'],
      ['Formación reactiva', 'Def.: sustituye pensamientos o sentimientos inaceptables por sus opuestos. Ej.: con quien se muestra hostil o abusivo, es amable y complaciente sin mostrar ningún enfado.'],
      ['Desplazamiento', 'Def.: redirige un sentimiento o una respuesta hacia otro objeto, por lo general menos amenazante. Ej.: «patear al perro en lugar de al jefe» (Vaillant 2011).']]]]);
    y += 22;
    y = row(y, [['Nivel 5 · Distorsión menor de la imagen · DMRS: inmaduras', [
      ['Idealización', 'Def.: atribuye cualidades positivas exageradas a sí o a otras personas. Ej.: ante un problema, insiste en lo brillantes que son quienes le ayudan, como si eso lo resolviera.'],
      ['Devaluación', 'Def.: atribuye cualidades negativas exageradas a sí o a otras personas. Ej.: ante una decepción, critica a otra persona y cambia enseguida de tema.'],
      ['Omnipotencia', 'Def.: responde al conflicto actuando como superior, como si tuviera poderes o capacidades especiales. Ej.: «puedo con todo» ante problemas que no controla.', 'tpnarc']]],
      ['Nivel 4 · Renegación · Vaillant: proyección inmadura · DMRS: inmaduras', [
      ['Negación', 'Def.: rehúsa reconocer un aspecto de la realidad o de su experiencia evidente para otras personas. Ej.: asegura no sentir nada ante un suceso claramente doloroso.', 'tpanti'],
      ['Proyección', 'Def.: atribuye falsamente a otras personas sentimientos, impulsos o pensamientos propios no reconocidos. Ej.: suspicacia o prejuicio hacia un grupo que le evita verse esos motivos.', 'tparano'],
      ['Racionalización', 'Def.: explicaciones tranquilizadoras o interesadas, pero incorrectas, de la conducta propia o ajena. Ej.: justifica un incumplimiento solo por causas externas.']]]]);
    y += 22;
    y = row(y, [['Nivel 3 · Distorsión mayor de la imagen · DMRS: inmaduras', [
      ['Fantasía autista', 'Def.: ensoñación excesiva que sustituye relaciones, acción eficaz o solución de problemas (la DMRS la sitúa en renegación). Ej.: fantasea con soluciones en lugar de planificarlas.'],
      ['Escisión', 'Def.: ve a sí o a otras personas como todo bueno o todo malo, sin integrar lo positivo y lo negativo; a menudo alterna. Ej.: quien era «salvador» pasa a ser «malvado».', 'tlp'],
      ['Identificación proyectiva', 'Def.: proyecta un afecto inaceptable, pero no lo reniega: lo sigue sintiendo y lo vive como reacción justificada al otro; a menudo induce en el otro lo proyectado. Ej.: se enfada sin motivo aparente y acusa al otro de provocarle.', 'klein_pos']]],
      ['Nivel 2 · Acción · Vaillant y DMRS: inmaduras', [
      ['Paso al acto', 'Def.: expresa en conducta, sin reflexión, afectos o impulsos que no tolera; más amplia que la actuación de la transferencia y no sinónimo de «mala conducta». Ej.: rabietas o un pequeño hurto que calma de momento (Vaillant 2011).', 'impulsiv'],
      ['Retirada apática', 'Incluida en la DFS (Richardson 2025), no en la DMRS (Di Giuseppe y Perry 2021); definición del glosario del DSM-IV no consultada [fuente no localizada].'],
      ['Queja con rechazo de ayuda', 'Def.: queja repetida que pide ayuda y rechaza lo ofrecido, con hostilidad encubierta; antes «hipocondría». Ej.: pide consejo y descarta cada propuesta.'],
      ['Agresión pasiva', 'Def.: agresión indirecta: fachada de complacencia que oculta resistencia. Ej.: acepta un encargo y lo demora sin motivo. Vaillant incluye aquí la autolesión (Vaillant 2011).']]]]);
    y += 22;
    y = row(y, [['Nivel 1 · Desregulación defensiva · Vaillant: psicóticas', [
      ['Proyección delirante', 'Atribución delirante a otros de lo propio; p. ej., convicción de persecución. Definición del glosario del DSM-IV no consultada [fuente no localizada].', 'del_persec'],
      ['Negación psicótica', 'Rehúsa reconocer un objeto o un hecho físico presente en su campo perceptivo; la DMRS la excluye de la negación neurótica (Di Giuseppe y Perry 2021). Glosario del DSM-IV no consultado.'],
      ['Distorsión psicótica', 'Reconfiguración delirante o alucinatoria de la realidad. Definición del glosario del DSM-IV no consultada [fuente no localizada].', 'delirio']]]],
      { id: 'uso', type: 'act', node: 'mec_defensa', title: 'Uso clínico de la jerarquía según Vaillant (2011)',
        text: 'Las inmaduras rara vez ceden solo con la interpretación verbal; se modifican con la confrontación, a menudo de un grupo de iguales que apoya, o con psicoterapia empática pero focalizada; también reduciendo la ansiedad y la soledad, o mejorando la función cerebral (sobriedad). Las intermedias a menudo pueden abordarse con psicoterapia. Las psicóticas requieren modificar el funcionamiento cerebral con antipsicóticos («neurolépticos» en su texto) o «despertar al soñante». Conviene ver incluso las defensas molestas como intentos de afrontar, no como faltas: descubrir un trauma previo ayuda a responder con empatía. Vaillant admite que este uso se apoya sobre todo en la experiencia clínica, con pocos datos de tratamiento.' });
    y += 50;

    // ---------- Bloque 3: organización de la personalidad ----------
    y = F.band(y, 'Correspondencia aproximada con la organización de la personalidad (Kernberg) y con el PDM-2', { n: 3 }) + 30;
    y = F.text(L, y, 'Las tres primeras cajas van de mayor a menor integración (neurótica, límite, psicótica); las distinguen la integración de la identidad, el nivel de las defensas y la prueba de realidad, que el IPO mide como escalas (Lenzenweger 2001), a las que la formulación de 1984 añade la calidad de las relaciones objetales (Tanzilli 2021).', { fs: 18, w: CW }) + 18;
    const OW = (CW - 4 * 24) / 5, ox = i => L + i * (OW + 24);
    const o = [
      F.box('o_neu', { x: ox(0), y, w: OW, type: 'dx', fs: 18, align: 'left', title: 'Organización neurótica',
        text: 'Identidad integrada y prueba de realidad conservada, sin predominio de defensas primitivas (Lenzenweger 2001; Kernberg 1967). Su correlato aproximado en la DFS es el nivel 6, de inhibiciones mentales, agrupado como «neurótico» (Richardson 2025).' }),
      F.box('o_lim', { x: ox(1), y, w: OW, type: 'dx', fs: 18, align: 'left', node: 'kernberg', title: 'Organización límite',
        text: 'Difusión de identidad, defensas primitivas centradas en la escisión y prueba de realidad conservada (Kernberg 1967; Lenzenweger 2001). En 107 personas con TP esquizotípico, límite, antisocial o narcisista, las defensas inmaduras abundaban y los cuatro encajaban en la organización límite; las defensas explicaban más varianza en el TP límite y menos en el esquizotípico (Perry 2013).' }),
      F.box('o_psi', { x: ox(2), y, w: OW, type: 'dx', fs: 18, align: 'left', node: 'juicio', title: 'Organización psicótica',
        text: 'Lo que la separa de la límite es la pérdida de la prueba de realidad (Kernberg 1967); la escala de prueba de realidad del IPO se relaciona estrechamente con fenómenos de tipo psicótico (Lenzenweger 2001). Las defensas del nivel 1 de la DFS, psicóticas, son propias de ella (Vaillant 2011), pero Richardson (2025) agrupa los niveles 5 a 1 como «patológicos» para las organizaciones límite y psicótica.' }),
      F.box('o_pdm', { x: ox(3), y, w: OW, type: 'info', fs: 18, align: 'left', node: 'pdm2', title: 'PDM-2',
        text: 'Eje P: nivel de organización sano, neurótico, límite o psicótico, valorado según Kernberg por identidad, relaciones objetales, nivel de defensas y prueba de realidad; en la práctica se describe también un límite «alto» (Tanzilli 2021, versión adolescente PDC-A). Eje M: 12 capacidades, entre ellas, en el dominio «defensas y afrontamiento», la capacidad de funcionamiento defensivo (Tanzilli 2021). Presentación general: Lingiardi y McWilliams 2015 [texto no consultado].' }),
      F.box('o_tx', { x: ox(4), y, w: OW, type: 'act', fs: 18, align: 'left', node: 'tfp', title: 'Tratamientos que trabajan con las defensas',
        text: 'Psicoterapia focalizada en la transferencia, derivada del modelo de Kernberg: en 90 personas con TP límite se asoció a cambios en más dominios que la DBT y el tratamiento de apoyo, en análisis de cambio dentro de cada grupo (Clarkin 2007). En la DBT, un funcionamiento defensivo global más bajo al inicio predijo menos reducción de autolesiones (Euler 2025).' })
    ];
    eq(o);
    y = o[0].y + o[0].h + 60;

    // ---------- Bloque 4: validez y valor pronóstico ----------
    y = F.band(y, 'Pruebas de validez y valor pronóstico, y límites', { n: 4 }) + 26;
    const VW = (CW - 3 * 24) / 4, vx = i => L + i * (VW + 24);
    const v = [
      F.box('v_vai', { x: vx(0), y, w: VW, type: 'info', fs: 18, align: 'left', node: 'ptsd', title: 'Vaillant: estudio Grant y cohortes de Harvard',
        text: '95 varones elegidos en la universidad por su salud y seguidos 30 años: la madurez defensiva, valorada a ciegas, se correlacionó con la psicopatología (r = −0,35) y con la adaptación (r = 0,65); el estilo defensivo maduró con la edad (Vaillant 1976). La madurez apenas dependió de clase social, CI o educación (Vaillant 2000). Las defensas a los 20-47 años predijeron la adaptación psicosocial a los 50-65 (rho 0,51 en la cohorte Core City; 0,34 en la universitaria), pero no el deterioro físico. Con mucho combate en la II Guerra Mundial, 16 varones con defensas maduras refirieron un octavo de síntomas de TEPT que 18 con defensas menos maduras (Vaillant 2011).' }),
      F.box('v_per', { x: vx(1), y, w: VW, type: 'info', fs: 18, align: 'left', node: 'psicodin_breve', title: 'Perry: Defense Mechanism Rating Scales',
        text: 'Escala de observador. Fiabilidad interjueces (CCI mediana) de 0,36 por defensa, 0,57 por consenso de grupo y 0,74 en escalas resumen; en el seguimiento, las inmaduras se asociaron a más síntomas y peor funcionamiento (Perry y Cooper 1989). El funcionamiento defensivo global (ODF) se distinguió de los ejes I y II, del funcionamiento global y del malestar (Perry y Høglend 1998). En psicoterapia dinámica larga (n = 21), el cambio defensivo a 2,5 años se asoció con mejor funcionamiento (rs = 0,60) y menos síntomas (rs = 0,58) a 5 años; el abuso sexual infantil y haber presenciado violencia enlentecieron el cambio, y el ODF siguió por debajo del rango sano-neurótico (Perry y Bond 2012).' }),
      F.box('v_bon', { x: vx(2), y, w: VW, type: 'info', fs: 18, align: 'left', title: 'Bond: Defense Style Questionnaire (DSQ)',
        text: 'Autoinforme. En 98 pacientes y 111 no pacientes, las defensas se agruparon en cuatro estilos ordenados de menos a más adaptativo: acción desadaptativa, distorsión de la imagen, autosacrificio y adaptativo (Bond 1983). El DSQ-40 (388 controles, 324 pacientes) no varía con el sexo y sus estilos inmaduros disminuyen con la edad (Andrews 1993). Revisión: la adaptatividad se asocia a salud mental; el TP límite usa más defensas desadaptativas y de distorsión; los estilos mejoran con los síntomas y los intermedios son estables (Bond 2004).' }),
      F.box('v_dfs', { x: vx(3), y, w: VW, type: 'info', fs: 18, align: 'left', node: 'dbt', title: 'DFS y ODF en la práctica clínica',
        text: 'En 100 clínicos que valoraron a pacientes con TP, los niveles de la DFS se asociaron de forma específica con los síntomas de cada TP y aportaron información sobre deterioro y éxito del tratamiento (Blais 1996). En 53 pacientes ambulatorios, fiabilidad moderada a alta por niveles y excelente para el ODF (Hilsenroth 2003). En 73 ambulatorios, el ODF valorado en relatos del TAT se correlacionó con la escala límite del PAI (r ≈ −0,36) y con su índice de proceso del tratamiento (r = −0,32) (Richardson 2025). En 60 personas con TP límite en DBT, un ODF inicial más bajo predijo menor reducción de autolesiones (Euler 2025).' })
    ];
    eq(v);
    y = v[0].y + v[0].h + 30;
    const c1 = F.box('crit', { x: L, y, w: (CW - 24) * 0.6, type: 'info', fs: 18, align: 'left', title: 'Límites y críticas de la evidencia',
      text: 'Fiabilidad modesta por defensa individual (Perry y Cooper 1989), problema que Vaillant reconoce (Vaillant 1994). El ODF por autoinforme (DSQ) no se distinguió del malestar subjetivo y no sustituye a la valoración por observador (Perry y Høglend 1998); quizá porque el malestar distorsiona los derivados conscientes de las defensas; el carácter inconsciente de las defensas sigue discutiéndose (Cramer 2015). En 2004 no había estudios que mostraran que evaluar las defensas mejore la planificación del tratamiento (Bond 2004). La cohorte Grant eran varones universitarios seleccionados por salud (Vaillant 1976). El estudio de cambio en psicoterapia tenía 21 participantes y un solo grupo (Perry y Bond 2012), y el de DBT, 60 (Euler 2025).' });
    const c2 = F.box('disc', { x: L + (CW - 24) * 0.6 + 24, y, w: (CW - 24) * 0.4, type: 'info', fs: 18, align: 'left', title: 'Discrepancias entre sistemas',
      text: 'Disociación: inmadura para Vaillant (2011), inhibición mental en la DFS (Richardson 2025) y neurótica en la DMRS (Di Giuseppe y Perry 2021). Fantasía autista: distorsión mayor en la DFS y renegación en la DMRS. Recuento de defensas de la DFS: 27 en seis niveles según Blais (1996) y 31 en siete según Richardson (2025). La DMRS divide además el nivel 6 en obsesivo y neurótico, y la imagen propia y ajena en idealización, devaluación y escisión, y numera sus niveles de otro modo (7 alto adaptativo, 6 obsesivo, 5 neurótico, 4 distorsión menor, 3 renegación, 2 distorsión mayor, 1 acción) (Di Giuseppe y Perry 2021).' });
    eq([c1, c2]);
    y = c1.y + c1.h + 40;

    F.box('lim', { x: L, y, w: CW, type: 'lim', align: 'left', fs: 19, title: 'Límites de esta figura',
      text: 'Esquema docente, no instrumento diagnóstico: no sustituye al juicio clínico ni a una evaluación con medidas validadas (DMRS, DFS, DSQ, PDC-2). La correspondencia entre niveles defensivos y organización de la personalidad es aproximada: la DMRS puntúa la proporción de defensas de cada nivel que usa una misma persona (Di Giuseppe y Perry 2021) y el perfil puede cambiar con el tratamiento (Perry y Bond 2012). Las definiciones de la DFS del DSM-IV, la obra original de Kernberg y el texto completo del PDM-2 no se han consultado directamente; los niveles proceden de Richardson (2025), Vaillant (2011) y Di Giuseppe y Perry (2021), y las definiciones de la proyección delirante, la distorsión psicótica y la retirada apática quedan sin fuente localizada. «Inmaduro» describe un modo de funcionar, no un juicio sobre la persona.' });

    F.footer('Fuentes: Vaillant 1976 (PMID 1267569), 1994 (8040479), 2000 (11392869) y 2011 (22034454); Perry y Cooper 1989 (2712663); Skodol y Perry 1993 (8485979); Perry y Høglend 1998 (9741558); Perry y Bond 2012 (22885667); Perry 2013 (23458114); Di Giuseppe y Perry 2021 (34721167); Bond 1983 (6830412); Andrews 1993 (8473876); Bond 2004 (15590575); Blais 1996 (8932968); Hilsenroth 2003 (14614340); Richardson 2025 (41560670); Euler 2025 (38648578); Cramer 2015 (26583439); Kernberg 1967 (4861171); Lenzenweger 2001 (11793901); Clarkin 2007 (17541052); Lingiardi y McWilliams 2015 (26043343); Tanzilli 2021 (34639429); DSM-IV, apéndice B (APA 1994). Esquema docente de apoyo; no sustituye al juicio clínico.');
    return F;
  }
};
