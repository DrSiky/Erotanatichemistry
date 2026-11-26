// Figura: fenomenología de la depresión según Ratcliffe (2015): sentimiento existencial, posibilidades, esperanza, tiempo y otros.
// Compilar en prueba: node tools/fig.js mod_depresion_ratcliffe --dry --png <carpeta>
// Fuente de las citas: Ratcliffe M (2015) Experiences of Depression. Oxford: OUP (paginación del libro impreso).
const TITLE = 'La depresión como cambio del sentimiento existencial (Ratcliffe 2015): posibilidades, esperanza, culpa, tiempo y otros';
module.exports = {
  key: 'mod_depresion_ratcliffe',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cuatro bloques sobre la propuesta de Matthew Ratcliffe en «Experiences of Depression» (2015). 1) La tesis: la depresión no es un conjunto de síntomas yuxtapuestos sino un cambio unitario del «sentimiento existencial», es decir, del sentido de las posibilidades que ofrece el mundo; en el centro, ese cambio; alrededor, los seis aspectos que destacan los relatos en primera persona (cuerpo, esperanza, culpa, agencia y self, tiempo, otras personas), cada uno con la página del libro. 2) Contraste con la descripción del DSM y con la tesis de la tristeza proporcionada de Horwitz y Wakefield, tal como los discute Ratcliffe. 3) Antecedentes fenomenológicos que el autor retoma (Minkowski, Straus, Tellenbach, van den Berg, Steinbock, Fuchs). 4) Método y límites. Las citas se dan en el inglés original con su página; las paráfrasis en castellano son del atlas. Esquema docente: describe un modelo filosófico de la vivencia depresiva, no un instrumento diagnóstico ni una guía de tratamiento.',
    refs: [
      'Ratcliffe M (2015). Experiences of Depression: A Study in Phenomenology. Oxford: Oxford University Press (International Perspectives in Philosophy and Psychiatry). ISBN 978-0-19-960897-3',
      'Ratcliffe M (2008). Feelings of Being: Phenomenology, Psychiatry and the Sense of Reality. Oxford: Oxford University Press. Citado en Ratcliffe 2015',
      'Horwitz AV & Wakefield JC (2007). The Loss of Sadness: How Psychiatry Transformed Normal Sorrow into Depressive Disorder. Oxford: Oxford University Press. Citado en Ratcliffe 2015, p. 265',
      'Steinbock AJ (2007). The phenomenology of despair. International Journal of Philosophical Studies 15:435-451. Citado en Ratcliffe 2015, p. 109',
      'Straus EW (1947). Disorders of personal time in depressive states. Southern Medical Journal 40:254-259. Citado en Ratcliffe 2015, p. 180',
      'Minkowski E (1970). Lived Time: Phenomenological and Psychopathological Studies (trad. N. Metzel). Evanston: Northwestern University Press; original francés: Le temps vécu (1933). Citado en Ratcliffe 2015',
      'Minkowski E (1958). Findings in a case of schizophrenic depression. En: May R, Angel E & Ellenberger HF (eds.), Existence. New York: Simon and Schuster, pp. 127-138. Citado en Ratcliffe 2015',
      'Tellenbach H (1980). Melancholy: History of the Problem, Endogeneity, Typology, Pathogenesis, Clinical Considerations. Pittsburgh: Duquesne University Press; original alemán: Melancholie (1961), según las referencias del Oxford Handbook of Phenomenological Psychopathology (2019). Citado en Ratcliffe 2015',
      'van den Berg JH (1972). A Different Existence: Principles of Phenomenological Psychopathology. Pittsburgh: Duquesne University Press. Citado en Ratcliffe 2015, p. 202',
      'Fuchs T (2001). Melancholia as a desynchronization: towards a psychopathology of interpersonal time. Psychopathology 34:179-186 · PMID 11549927',
      'Fuchs T (2013). Depression, intercorporeality and interaffectivity. Journal of Consciousness Studies 20(7-8):219-238. Citado en Ratcliffe 2015',
      'Fuchs T (2013). Temporality and psychopathology. Phenomenology and the Cognitive Sciences 12:75-104. Citado en Ratcliffe 2015',
      'Sass LA & Pienkos E (2013). Space, time, and atmosphere: a comparative phenomenology of melancholia, mania, and schizophrenia, Part II. Journal of Consciousness Studies 20(7-8):131-152. Citado en Ratcliffe 2015',
      'Heidegger M (1962). Being and Time (trad. J. Macquarrie y E. Robinson). Oxford: Blackwell; original alemán: Sein und Zeit (1927). Citado en Ratcliffe 2015'
    ],
    nodes: ['ddm', 'husserl', 'fen_contemp', 'intersubj_sinton', 'minkowski_1927', 'vongebsatt', 'kimura', 'anhed', 'bhs_beck', 'duelo']
  },
  draw(Fig) {
    const W = 1940, L = 60, FS = 18;
    const F = new Fig({ key: 'mod_depresion_ratcliffe', title: TITLE, w: W,
      desc: 'Una caja central (el cambio del sentimiento existencial) rodeada de seis aspectos de la vivencia depresiva con su página en Ratcliffe 2015; una tabla que contrasta la descripción del DSM y la tesis de Horwitz y Wakefield con la lectura de Ratcliffe; una fila de antecedentes fenomenológicos y un recuadro de método y límites.' });

    // ---------- Bloque 1 ----------
    let y = F.band(100, 'La tesis: un cambio unitario en el sentido de lo posible', { n: 1 }) + 24;
    y = F.text(L, y + 18, 'Doble borde = concepto central del modelo; borde continuo = aspecto de la vivencia descrito en los relatos en primera persona; las flechas discontinuas significan «es un aspecto de», no una relación causal.', { fs: 18, w: W - 120 }) + 16;

    const CW = 560, X = [L, 690, 1320];
    const top = [
      { id: 'a_cuerpo', node: 'fuchs_cuerpo', title: 'Cuerpo vivido', text: 'Ratcliffe enumera «altered bodily experience» entre los temas constantes de los relatos (p. 2) y se apoya en los trabajos de Fuchs sobre el cuerpo en la melancolía («corporealized» frente a «disembodied minds», 2005) y la intercorporalidad (2013).' },
      { id: 'a_esper', node: 'bhs_beck', title: 'Pérdida de la esperanza', text: 'No se pierden solo esperanzas concretas: se pierde la orientación que hace posible esperar algo, «the \'ground of hope\'» (p. 109, con Steinbock 2007). «The future is there, but it offers nothing of the kind that would allow one to form hopes» (p. 113).' },
      { id: 'a_culpa', node: 'del_culpa', title: 'Culpa existencial', text: 'Con un futuro «exclusively oppressive», la experiencia «dwells in the past, in a domain of deeds that are fixed, as there is no possibility of ever compensating for them» (p. 138).' }
    ];
    const bTop = top.map((o, i) => F.box(o.id, Object.assign({ x: X[i], y, w: CW, type: 'act', fs: FS, align: 'left' }, o)));
    const hTop = Math.max(...bTop.map(b => b.h)); bTop.forEach(b => b.h = hTop);
    y += hTop + 60;

    const core = F.box('core', { x: 390, y, w: 1160, type: 'dx', fs: 20, node: 'sent_existenciales', title: 'Cambio del sentimiento existencial («existential change»)',
      text: 'Los sentimientos existenciales «constitute a variable sense of the possibilities that the world incorporates»; la depresión implica «a change in the kinds of possibility that are experienced as integral to the world» y en la estructura de la relación global con el mundo (p. 2). No es un cambio local en tal o cual situación (p. 50): síntomas en apariencia distintos son «inseparable aspects of a unitary shift in \'how one finds oneself in the world\'» (p. 32).' });
    y += core.h + 60;

    const bot = [
      { id: 'a_agencia', node: 'sent_falta_sent', title: 'Agencia y self disminuidos', text: '«A diminished sense of agency and self» figura entre los seis temas (p. 2). El futuro «is no longer a dimension of possibilities for meaningful activity» (p. 138).' },
      { id: 'a_tiempo', node: 'desincron_fuchs', title: 'Tiempo vivido heterogéneo', text: 'Para unos el tiempo se enlentece y a la vez «is running out»; otros se sienten «outside time». Estas diferencias reflejan vivencias distintas: «time consciousness in depression is heterogeneous» (p. 176).' },
      { id: 'a_otros', node: 'soledad', title: 'Otras personas', text: 'Cambia «the overall structure of interpersonal experience»: no se trata de fallar con tal o cual persona, sino de que una forma de conexión que damos por sentada «seems impossible, absent from the world» (p. 218).' }
    ];
    const bBot = bot.map((o, i) => F.box(o.id, Object.assign({ x: X[i], y, w: CW, type: 'act', fs: FS, align: 'left' }, o)));
    const hBot = Math.max(...bBot.map(b => b.h)); bBot.forEach(b => b.h = hBot);
    bTop.forEach((b, i) => F.arrow(b, core, { from: 'b', to: 't', fb: [0.12, 0.5, 0.88][i], dash: true }));
    bBot.forEach((b, i) => F.arrow(b, core, { from: 't', to: 'b', fb: [0.12, 0.5, 0.88][i], dash: true }));
    y += hBot + 30;
    y = F.text(L, y + 18, 'Relación con la ansiedad: la mayoría de los relatos transmiten «the intimate relationship between depression and anxiety» (p. 5).', { fs: 18, w: W - 120 }) + 40;

    // ---------- Bloque 2 ----------
    y = F.band(y, 'Frente a la descripción del DSM y a la tesis de la tristeza proporcionada', { n: 2 }) + 20;
    const t = F.table({ x: L, y, fs: 18, cols: [{ w: 330, label: 'Punto' }, { w: 640, label: 'Posición discutida' }, { w: 850, label: 'Lectura de Ratcliffe (2015)' }], rows: [
      [{ t: 'Tiempo vivido', node: 'minkowski' }, 'Descripción del DSM: reconoce de pasada la pérdida de esperanza y los cambios corporales.', '«altered experience of time is not mentioned» (p. 5). Para el autor, el tiempo es un aspecto central de la vivencia (cap. 7).'],
      [{ t: 'Deterioro social', node: 'intersubj_sinton' }, 'Descripción del DSM: lo menciona brevemente como efecto de la depresión.', 'Casi todos los relatos sitúan los cambios interpersonales como «absolutely central to experiences of depression and their development, rather than by-products of depression» (p. 5).'],
      [{ t: 'Tristeza normal frente a trastorno', node: 'wakefield' }, 'Horwitz y Wakefield (2007): la depresión patológica sería tristeza intensa y desproporcionada a su contexto, por disfunción.', '«depression is not simply a matter of intense \'sadness\'»: los cambios existenciales son distintos de los no existenciales aunque se describan con palabras parecidas (p. 265).'],
      [{ t: 'Unidad o lista de síntomas', node: 'ep_depmay' }, 'Criterios diagnósticos: síntomas enumerados y contables.', 'Cuerpo, esperanza, culpa, agencia, tiempo y aislamiento son «inextricable aspects of a unitary experience» (p. 2).']
    ] });
    y = t.y + 50;

    // ---------- Bloque 3 ----------
    y = F.band(y, 'Antecedentes fenomenológicos que Ratcliffe retoma', { n: 3 }) + 24;
    const ant = [
      { id: 'h_mink', node: 'minkowski', title: 'Minkowski', text: 'Tiempo vivido; caso de depresión esquizofrénica (1958; Lived Time, 1970, orig. 1933).' },
      { id: 'h_straus', node: 'straus_erwin', title: 'Straus (1947)', text: '«pathology of becoming»: «with a standstill of becoming future is rendered inaccessible» (citado p. 180, n. 2).' },
      { id: 'h_tell', node: 'tellenbach', title: 'Tellenbach', text: 'Melancholy (trad. inglesa 1980): tipología y endogeneidad de la melancolía.' },
      { id: 'h_vdb', node: 'fen_contemp', title: 'van den Berg (1972)', text: '«loneliness is the nucleus of psychiatry» (citado p. 202).' },
      { id: 'h_fuchs', node: 'desincron_fuchs', title: 'Fuchs (2001, 2013)', text: 'Melancolía como desincronización del tiempo interpersonal; intercorporalidad e interafectividad.' }
    ];
    const aw = 340, gap = (W - 2 * L - 5 * aw) / 4;
    const bAnt = ant.map((o, i) => F.box(o.id, Object.assign({ x: L + i * (aw + gap), y, w: aw, type: 'info', fs: 17, align: 'left' }, o)));
    const hAnt = Math.max(...bAnt.map(b => b.h)); bAnt.forEach(b => b.h = hAnt);
    y += hAnt + 50;

    // ---------- Bloque 4 ----------
    y = F.band(y, 'Método y límites', { n: 4 }) + 24;
    F.box('lim', { x: L, y, w: W - 2 * L, type: 'lim', align: 'left', fs: 18, title: 'Qué es y qué no es este modelo',
      text: 'Es un análisis fenomenológico-filosófico de relatos en primera persona, en parte recogidos con un cuestionario propio del autor (Depression Questionnaire; por ejemplo, 133 respuestas a la pregunta sobre el tiempo, p. 176; descripción de la muestra en el apéndice, pp. 283 y ss.). No es una muestra representativa ni un estudio de validez diagnóstica. El propio autor subraya la heterogeneidad de las vivencias (p. ej., del tiempo, p. 176). Sirve para la exploración clínica de la vivencia y para la valoración del riesgo cuando aparecen desesperanza y culpa irreparable, que obligan a explorar la ideación suicida; no sustituye a la entrevista diagnóstica ni a las guías de tratamiento.' });
    F.footer('Fuentes: Ratcliffe 2015 (pp. 2, 5, 32, 50, 109, 113, 138, 176, 180, 202, 218, 265), y a través de él Straus 1947, van den Berg 1972, Steinbock 2007, Horwitz y Wakefield 2007, Fuchs 2001 y 2013, Minkowski 1958 y 1970, Tellenbach 1980. Citas en inglés original; paráfrasis del atlas. Esquema docente.');
    return F;
  }
};
