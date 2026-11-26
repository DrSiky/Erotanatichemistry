// Figura: la naturaleza del delirio en el debate filosófico contemporáneo (fenomenología, dos factores y bayesianismo, continuidad doxástica, reconocimiento).
// Compilar en prueba: node tools/fig.js mod_delirio_filosofia --dry --png <carpeta>
// Citas comprobadas con la paginación impresa de cada libro (Oxford Handbook of Philosophy and Psychiatry 2013; Vagueness in Psychiatry 2017; Rashed 2019; OHPP 2019).
const TITLE = '¿Qué es un delirio? Cuatro respuestas del debate actual: fenomenológica, de dos factores y bayesiana, de continuidad doxástica y de reconocimiento social';
module.exports = {
  key: 'mod_delirio_filosofia',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cuatro bloques que complementa la lámina sobre Jaspers (delirio primario, comprensibilidad) con el debate posterior. 1) Cuatro posiciones en columnas: de arriba abajo, su tesis (doble borde), el argumento o caso en que se apoya (borde continuo) y el límite que reconocen sus propias fuentes (borde discontinuo). 2) Matriz que compara qué responde cada posición a cinco preguntas: si el delirio es una creencia, qué lo distingue de otras creencias erróneas, qué papel tiene la experiencia anómala, qué papel tiene lo compartido y qué consecuencia clínica o forense se sigue. 3) Límites. Citas en inglés original con su página; paráfrasis del atlas. Esquema docente: las posiciones no son excluyentes y ninguna sustituye la definición operativa de las clasificaciones.',
    refs: [
      'Fulford KWM, Davies M, Gipps RGT, Graham G, Sadler JZ, Stanghellini G & Thornton T (eds.) (2013). The Oxford Handbook of Philosophy and Psychiatry. Oxford: Oxford University Press',
      'Sass LA & Pienkos E (2013). Delusion: the phenomenological approach. En: Fulford KWM et al. (eds.), The Oxford Handbook of Philosophy and Psychiatry, cap. 39. Oxford: Oxford University Press',
      'Davies M & Egan A (2013). Delusion: cognitive approaches. Bayesian inference and compartmentalization. En: Fulford KWM et al. (eds.), The Oxford Handbook of Philosophy and Psychiatry, cap. 42. Oxford: Oxford University Press',
      'Henriksen MG & Parnas J (2019). Delusional mood. En: Stanghellini G et al. (eds.), The Oxford Handbook of Phenomenological Psychopathology. Oxford: Oxford University Press',
      'Sullivan-Bissett E, Bortolotti L, Broome M & Mameli M (2017). Moral and legal implications of the continuity between delusional and non-delusional beliefs. En: Keil G, Keuck L & Hauswald R (eds.), Vagueness in Psychiatry, cap. 10. Oxford: Oxford University Press',
      'Rashed MA (2019). Madness and the Demand for Recognition: A Philosophical Inquiry into Identity and Mental Health Activism. Oxford: Oxford University Press',
      'Bleuler E (1950). Dementia Praecox or the Group of Schizophrenias (trad. J. Zinkin). New York: International Universities Press; original alemán de 1911. Citado en Sass y Pienkos 2013',
      'Sass LA (1994). The Paradoxes of Delusion: Wittgenstein, Schreber, and the Schizophrenic Mind. Ithaca: Cornell University Press. Citado en Sass y Pienkos 2013',
      'Campbell J (2001). Rationality, meaning, and the analysis of delusion. Philosophy, Psychiatry, & Psychology 8:89-100. Citado en Sass y Pienkos 2013',
      'Coltheart M (2007). Cognitive neuropsychiatry and delusional belief. Quarterly Journal of Experimental Psychology 60:1041-1062 · PMID 17654390',
      'Coltheart M, Menzies P & Sutton J (2010). Abductive inference and delusional belief. Cognitive Neuropsychiatry 15:261-287 · PMID 20017038',
      'Coltheart M, Langdon R & McKay R (2011). Delusional belief. Annual Review of Psychology 62:271-298 · PMID 20731601',
      'McKay R (2012). Delusional inference. Mind & Language 27:330-355. Citado en Davies y Egan 2013',
      'Corlett PR, Frith CD & Fletcher PC (2009). From drugs to deprivation: a Bayesian framework for understanding models of psychosis. Psychopharmacology 206:515-530 · PMID 19475401',
      'Fletcher PC & Frith CD (2009). Perceiving is believing: a Bayesian approach to explaining the positive symptoms of schizophrenia. Nature Reviews Neuroscience 10:48-58 · PMID 19050712',
      'Bayne T & Pacherie E (2005). In defence of the doxastic conception of delusions. Mind and Language 20:163-188. Citado en Sullivan-Bissett et al. 2017',
      'Bortolotti L (2009). Delusions and Other Irrational Beliefs. Oxford: Oxford University Press. Citado en Sullivan-Bissett et al. 2017',
    ],
    nodes: ['tdelirant', 'percdel', 'ocurr_del', 'wahnbewusstheit', 'conrad_1958', 'bleuler_4a', 'del_ident', 'jaspers_compr', 'saliencia', 'jtc', 'cult_bound', 'context', 'insight', 'idea_sobrev', 'dos_factores', 'doxastico_cont', 'marco_ontologico', 'rashed_reconoc', 'delirio_resp']
  },
  draw(Fig) {
    const W = 2100, L = 60, FS = 17;
    const F = new Fig({ key: 'mod_delirio_filosofia', title: TITLE, w: W,
      desc: 'Cuatro columnas (fenomenológica, de dos factores y bayesiana, de continuidad doxástica y social o de reconocimiento), cada una con tesis, argumento clave y límite; una matriz que compara sus respuestas a cinco preguntas y un recuadro de límites.' });

    // ---------- Bloque 1 ----------
    let y = F.band(100, 'Cuatro posiciones: tesis, argumento y límite reconocido', { n: 1 }) + 20;
    y = F.text(L, y + 18, 'Doble borde = tesis; borde continuo = argumento o caso que la apoya; borde discontinuo = límite que reconocen sus propias fuentes. La lámina sobre Jaspers recoge el delirio primario y el criterio de incomprensibilidad.', { fs: 18, w: W - 120 }) + 14;
    const cw = 470, cg = (W - 2 * L - 4 * cw) / 3, X = [0, 1, 2, 3].map(i => L + i * (cw + cg));
    const heads = ['A · Fenomenológica', 'B · Dos factores y bayesiana', 'C · Continuidad doxástica', 'D · Reconocimiento social'];
    heads.forEach((h, i) => F.text(X[i], y + 22, h, { bold: true, fs: 20, w: cw }));
    y += 46;
    const rows = [
      // tesis
      [
        { id: 'a_t', type: 'dx', node: 'fen_contemp', title: 'Mutación del marco ontológico', text: 'No una creencia aislada ni una «framework proposition» anómala (Campbell 2001), sino «a mutation of the ontological framework of experience itself» (Sass y Pienkos 2013, p. 633).' },
        { id: 'b_t', type: 'dx', node: 'delirio', title: 'Experiencia anómala + fallo de evaluación', text: 'Hay que responder dos preguntas: «where did the delusion come from?» y «why does the patient not reject the belief?» (Coltheart 2007, citado en Davies y Egan 2013, p. 692).' },
        { id: 'c_t', type: 'dx', node: 'idea_sobrev', title: 'Diferencia de grado, no de clase', text: 'No hay «categorical difference between delusional and other epistemically faulty beliefs» (tesis de la continuidad; Sullivan-Bissett et al. 2017, p. 191). Parten de una concepción doxástica (Bayne y Pacherie 2005; Bortolotti 2009) (p. 193, n. 3).' },
        { id: 'd_t', type: 'dx', node: 'cult_bound', title: 'Demanda de reconocimiento', text: '«Delusional identities are vociferous demands for recognition»: el sujeto insiste en que otros validen su creencia (Rashed 2019, p. 143).' }
      ],
      // argumento
      [
        { id: 'a_a', type: 'act', node: 'bleuler_4a', title: 'Doble contabilidad y Schreber', text: 'Bleuler (1911): el paciente que acusa al psiquiatra de desviar su correo y luego le pide que eche su carta (p. 634). En Schreber, la realidad delirante existe «in a different ontological domain from that of everyday reality» (p. 647).' },
        { id: 'b_a', type: 'act', node: 'capgras', title: 'Disociación en el Capgras', text: 'Una paciente con experiencia «Capgras-like» de su madre no desarrolló el delirio: «there must be a second factor» (Turner y Coltheart 2010, en Davies y Egan, p. 692). Variante bayesiana: el error de predicción tiñe la percepción de significado (p. 715).' },
        { id: 'c_a', type: 'act', node: 'jtc', title: 'Mecanismos comunes', text: 'Los mecanismos propuestos para adoptar hipótesis delirantes «are not radically different from, but are continuous with, standard mechanisms of belief formation» (p. 207). Rashed lo suscribe: difieren «in degree, not kind» (2019, p. 15).' },
        { id: 'd_a', type: 'act', node: 'folie_deux', title: 'Lo compartido como exclusión', text: 'Las definiciones clínicas excluyen la creencia compartida por la cultura o subcultura; Rashed propone tratarlo como criterio de exclusión y no como rasgo del delirio (p. 144), para dar espacio a responder a la demanda de reconocimiento (p. 145).' }
      ],
      // límite
      [
        { id: 'a_l', type: 'info', node: 'wahnstimm', title: 'Detección exigente', text: 'El humor delirante «is only rarely detected in routine clinical work» y exige una entrevista psicopatológica en profundidad de lo previo al inicio (Henriksen y Parnas 2019, OHPP pp. 743-744).' },
        { id: 'b_l', type: 'info', node: 'pred_coding', title: 'Segundo factor poco definido', text: 'Podría ser un déficit ejecutivo o de memoria de trabajo, pero su naturaleza cognitiva y su base neural «have not been specified as precisely» como las del primero (p. 692). Dos líneas bayesianas: monotemáticos (Coltheart 2010; McKay 2012) y esquizofrenia (Corlett 2009; Fletcher y Frith 2009) (p. 695).' },
        { id: 'c_l', type: 'info', node: 'imputabilidad', title: 'Consecuencia moral y legal', text: 'Si no hay frontera categórica, la distinción entre creencia patológica y no patológica por sus rasgos epistémicos se vuelve difícil (p. 191); el capítulo examina sus implicaciones morales y legales.' },
        { id: 'd_l', type: 'info', node: 'context', title: 'Fenómeno heterogéneo', text: '«Delusions appear to be a heterogenous phenomenon—a syndrome rather than a symptom» (Rashed 2019, p. 144, n. 5, con Gilleen y David 2005).' }
      ]
    ];
    const grid = rows.map(r => { const bs = r.map((o, i) => F.box(o.id, Object.assign({ x: X[i], y, w: cw, fs: FS, align: 'left' }, o))); const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => b.h = h); y += h + 46; return bs; });
    for (let i = 0; i < 4; i++) { F.arrow(grid[0][i], grid[1][i], { from: 'b', to: 't' }); F.arrow(grid[1][i], grid[2][i], { from: 'b', to: 't', dash: true }); }
    y += 10;

    // ---------- Bloque 2 ----------
    y = F.band(y, 'Qué responde cada posición', { n: 2 }) + 20;
    const t = F.table({ x: L, y, fs: 17, cols: [{ w: 300, label: 'Pregunta' }, { w: 430, label: 'Fenomenológica' }, { w: 430, label: 'Dos factores y bayesiana' }, { w: 420, label: 'Continuidad doxástica' }, { w: 400, label: 'Reconocimiento social' }], rows: [
      [{ t: '¿Es una creencia?', node: 'delirio' }, 'No en sentido ordinario: a menudo el paciente no actúa como si fuera una afirmación de verdad (p. 634); «beliefs or quasi-beliefs» (p. 646).', 'Sí: el segundo factor explica por qué no se rechaza la creencia (p. 692).', 'Sí: concepción doxástica asumida (p. 193, n. 3).', 'Se trata como identidad que reclama validación (p. 143).'],
      [{ t: '¿Qué la separa de otras creencias erróneas?', node: 'idea_sobrev' }, 'Su estatuto de realidad: no siempre es una afirmación falsa sobre la realidad pública, como suponen las definiciones estándar (p. 646).', 'Un déficit añadido en la evaluación de creencias (p. 692).', 'Nada categórico: diferencia de grado (pp. 191, 207).', 'No lo es la falta de compartición, que es solo un criterio de exclusión (p. 144).'],
      [{ t: 'Papel de la experiencia anómala', node: 'percdel' }, 'Central: cambio del marco de la experiencia; humor delirante previo (pp. 633; OHPP 743).', 'Primer factor; en la versión bayesiana, el error de predicción da significado excesivo (p. 715).', 'Los mecanismos son los ordinarios de formación de creencias (p. 207).', 'La fuente no lo trata en estas páginas.'],
      [{ t: 'Papel de lo compartido y la cultura', node: 'cult_bound' }, 'La fuente no lo trata en estas páginas.', 'La fuente no lo trata en estas páginas.', 'La fuente no lo trata en estas páginas.', 'Separar delirio y compartición para poder responder a la demanda de reconocimiento (p. 145).'],
      [{ t: 'Consecuencia clínica o forense', node: 'imputabilidad' }, 'Explorar el estatuto vivido de la creencia y la doble contabilidad, no solo su falsedad.', 'Buscar la experiencia anómala y el déficit de evaluación (p. ej., Capgras de origen neuropsicológico).', 'Cautela al trazar fronteras categóricas en juicios morales y legales (cap. 10).', 'Atender a la dimensión de identidad y a la demanda de los colectivos.']
    ] });
    y = t.y + 50;

    // ---------- Bloque 3 ----------
    y = F.band(y, 'Límites', { n: 3 }) + 24;
    F.box('lim', { x: L, y, w: W - 2 * L, type: 'lim', align: 'left', fs: 18, title: 'Qué es y qué no es esta comparación',
      text: 'Ordena posiciones filosóficas a partir de cuatro textos de referencia (Sass y Pienkos 2013; Davies y Egan 2013; Sullivan-Bissett et al. 2017; Rashed 2019) y del capítulo de Henriksen y Parnas (2019); no es una revisión sistemática. Las posiciones no se excluyen entre sí: Sass y Pienkos se refieren sobre todo al delirio en la esquizofrenia, y el modelo de dos factores sobre todo a los delirios monotemáticos de origen neuropsicológico. La fila de consecuencias clínicas es una paráfrasis docente del atlas, no recomendación de las fuentes. La definición operativa de delirio sigue siendo la de las clasificaciones vigentes.' });
    F.footer('Fuentes: Oxford Handbook of Philosophy and Psychiatry (2013): Sass y Pienkos (pp. 633-647), Davies y Egan (pp. 692-715); Vagueness in Psychiatry (2017): Sullivan-Bissett, Bortolotti, Broome y Mameli (pp. 191-207); Rashed 2019 (pp. 15, 143-145); Oxford Handbook of Phenomenological Psychopathology (2019): Henriksen y Parnas (pp. 743-744). Citas en inglés original; paráfrasis del atlas. Esquema docente.');
    return F;
  }
};
