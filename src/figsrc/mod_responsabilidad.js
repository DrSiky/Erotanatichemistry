// Figura: responsabilidad moral, capacidad y trastorno mental: psicopatía, delirio y eximente, autonomía y capacidad para decidir.
// Compilar en prueba: node tools/fig.js mod_responsabilidad --dry --png <carpeta>
// Citas comprobadas con la paginación impresa: OHPP 2019; Haldipur et al. 2019; Keil et al. 2017; Radoilska 2012.
const TITLE = 'Responsabilidad moral, capacidad y trastorno mental: psicopatía, delirio y eximente, autonomía y capacidad para decidir';
module.exports = {
  key: 'mod_responsabilidad',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cuatro bloques sobre cómo la filosofía de la psiquiatría plantea la relación entre trastorno mental y responsabilidad. 1) Psicopatía: rasgos esenciales según una lectura fenomenológica (Englebert), posición nosográfica incierta y su papel de «excepción paradigmática» en las teorías de la responsabilidad moral (Ciaccio). 2) Delirio y responsabilidad penal: la oposición de Szasz a la eximente por enfermedad mental (Pickering) y la tesis de que una creencia delirante puede explicar un acto sin justificarlo (Sullivan-Bissett et al.). 3) Autonomía y capacidad para decidir: la enfermedad como límite interno de la autonomía (Bolton y Banner), capacidad frente a éxito en el autogobierno (Bortolotti et al.) y la prueba funcional de capacidad (Owen). 4) Límites y enlace con el marco español de las láminas forenses. Citas en inglés original con su página; paráfrasis del atlas. Esquema docente: no es un protocolo pericial ni sustituye a la norma aplicable.',
    refs: [
      'Englebert J (2019). The psychopathology of psychopaths. En: Stanghellini G et al. (eds.), The Oxford Handbook of Phenomenological Psychopathology. Oxford: Oxford University Press',
      'Owen GS (2019). Psychopathology and law. En: Stanghellini G et al. (eds.), The Oxford Handbook of Phenomenological Psychopathology. Oxford: Oxford University Press',
      'Ciaccio MX (2019). Bringing psychopaths into the moral community: reassessing agency cultivation and social participation. En: Haldipur CV, Knoll JL IV & Luft E v.d. (eds.), Thomas Szasz: An Appraisal of His Legacy, cap. 16. Oxford: Oxford University Press',
      'Pickering N (2019). Thomas Szasz and the insanity defense. En: Haldipur CV et al. (eds.), Thomas Szasz: An Appraisal of His Legacy, cap. 15. Oxford: Oxford University Press',
      'Sullivan-Bissett E, Bortolotti L, Broome M & Mameli M (2017). Moral and legal implications of the continuity between delusional and non-delusional beliefs. En: Keil G, Keuck L & Hauswald R (eds.), Vagueness in Psychiatry, cap. 10. Oxford: Oxford University Press',
      'Bolton D & Banner N (2012). Does mental disorder involve loss of personal autonomy? En: Radoilska L (ed.), Autonomy and Mental Disorder, cap. 4. Oxford: Oxford University Press',
      'Bortolotti L, Cox R, Broome M & Mameli M (2012). Rationality and self-knowledge in delusion and confabulation: implications for autonomy as self-governance. En: Radoilska L (ed.), Autonomy and Mental Disorder, cap. 5. Oxford: Oxford University Press',
      'Malatesti L & McMillan J (eds.) (2010). Responsibility and Psychopathy: Interfacing Law, Psychiatry and Philosophy. Oxford: Oxford University Press [páginas no localizadas: ejemplar sin paginación impresa]',
      'Schneider K (1923). Die psychopathischen Persönlichkeiten. Trad. inglesa: Psychopathic Personalities. London: Cassell, 1950. Citado en Englebert 2019',
      'Cleckley H (1941). The Mask of Sanity. St. Louis: Mosby. Citado en Englebert 2019',
      'Vargas M (2013). Building Better Beings: A Theory of Moral Responsibility. Oxford: Oxford University Press. Citado en Ciaccio 2019',
      'Szasz TS (1963). Law, Liberty, and Psychiatry: An Inquiry into the Social Uses of Mental Health Practices. New York: Macmillan. Citado en Pickering 2019',
      'Reino Unido (2005). Mental Capacity Act 2005 (Inglaterra y Gales). Citada en Owen 2019 y en Radoilska 2012'
    ],
    nodes: ['cleckley', 'schneider_1950', 'circ_antisocial', 'riesgo_viol', 'capacidad_jur', 'crpd', 'internamiento', 'cap_dem', 'tdelirant', 'szasz_hit', 'insight', 'ddm', 'psicop_simpatia', 'delirio_resp', 'autonomia_tm']
  },
  draw(Fig) {
    const W = 2100, L = 60, FS = 17;
    const F = new Fig({ key: 'mod_responsabilidad', title: TITLE, w: W,
      desc: 'Tres bloques en columnas de tres cajas (psicopatía; delirio y responsabilidad penal; autonomía y capacidad) con tesis, argumento y consecuencia, y un recuadro de límites con el enlace al marco jurídico español.' });

    let y = F.band(100, 'Tres problemas, tres preguntas', { n: 1 }) + 20;
    y = F.text(L, y + 18, 'Doble borde = tesis o pregunta central; borde continuo = argumento o distinción; borde discontinuo = consecuencia práctica o límite que reconoce la fuente.', { fs: 18, w: W - 120 }) + 14;
    const cw = 640, cg = (W - 2 * L - 3 * cw) / 2, X = [0, 1, 2].map(i => L + i * (cw + cg));
    ['A · Psicopatía', 'B · Delirio y responsabilidad penal', 'C · Autonomía y capacidad para decidir'].forEach((h, i) => F.text(X[i], y + 22, h, { bold: true, fs: 20, w: cw }));
    y += 46;
    const rows = [
      [
        { id: 'a1', type: 'dx', node: 'tpanti', title: '¿Agente moral o excepción?', text: 'En las teorías de la responsabilidad moral, pasadas y actuales, el psicópata figura como «the paradigmatic exception to any imputed account of "normal" moral agency», símbolo de «a deranged moral architecture» (Ciaccio 2019, p. 211).' },
        { id: 'b1', type: 'dx', node: 'imputabilidad', title: '¿Basta un delirio para excluir la responsabilidad?', text: 'Sullivan-Bissett et al. preguntan «whether the presence of delusional as opposed to non-delusional beliefs is always a reason to doubt the responsibility» de quien comete un delito grave (2017, p. 202).' },
        { id: 'c1', type: 'dx', node: 'consent_cap', title: '¿El trastorno resta autonomía?', text: 'La enfermedad ocuparía en el espacio conceptual de la autonomía el lugar de «an internal limitation to autonomy»: nada externo impide a la persona controlar su acción, pero sí algo interno (Bolton y Banner 2012, p. 94).' }
      ],
      [
        { id: 'a2', type: 'act', node: 'cleckley', title: 'Rasgos esenciales (lectura fenomenológica)', text: '«reification of the alter ego without an ego-related disorder, emotional coldness as it provides adaptive benefits, and empathic skills without sympathy» (Englebert 2019, OHPP p. 882). No sería un trastorno de la empatía sino de la simpatía, lo que la distingue de la esquizofrenia (p. 891). Admite grados y subtipos: primario, de baja ansiedad, y secundario, de alta ansiedad (Ciaccio, p. 214).' },
        { id: 'b2', type: 'act', node: 'tdelirant', title: 'Explicar no es justificar', text: 'En uno de sus casos, el delirio explicaba en parte el acto pero no lo justificaba; en otro lo explicaba y justificaba y le eximió de culpabilidad (p. 205). Tener creencias epistémicamente defectuosas, delirantes o no, «rarely provides a justification for criminal action» (p. 207).' },
        { id: 'c2', type: 'act', node: 'insight', title: 'Capacidad frente a éxito en el autogobierno', text: 'Hay que distinguir si se tiene la capacidad de gobernarse y si se logra; esa capacidad depende de poder elaborar una autonarrativa que respalde actitudes y actos con razones (Bortolotti et al. 2012, p. 100).' }
      ],
      [
        { id: 'a3', type: 'info', node: 'pclr', title: 'Posición nosográfica incierta', text: 'Definición común desde Schneider (1923) y Cleckley (1941): trastorno grave del carácter sin psicosis ni deficiencia mental significativa. Según Englebert, su ambigüedad se refleja en su ausencia del DSM-IV y el DSM-5 y de la CIE-10 y la CIE-11 (p. 884). Ciaccio discute el modelo de cultivo de la agencia de Vargas (2013), que justifica el elogio y la censura por su efecto formativo (p. 215).' },
        { id: 'b3', type: 'info', node: 'szasz_hit', title: 'Szasz contra la eximente', text: '«Szasz was opposed to the insanity defense. Throughout his career he wrote in opposition to it» (Pickering 2019, p. 189), con el lema «the irresponsible life is not worth living either» (Szasz 1963, p. 255).' },
        { id: 'c3', type: 'info', node: 'maccat_t', title: 'Prueba funcional de capacidad', text: 'No es una prueba diagnóstica ni de decisión «razonable»: se puede tener capacidad con síntomas y diagnóstico, o eligiendo algo imprudente; si falta alguna de las cuatro capacidades, falta la capacidad, pero debe deberse a la psicopatología (Owen 2019, OHPP p. 862). En la depresión grave, el insight no es sensible como prueba de capacidad (p. 864).' }
      ]
    ];
    const grid = rows.map(r => { const bs = r.map((o, i) => F.box(o.id, Object.assign({ x: X[i], y, w: cw, fs: FS, align: 'left' }, o))); const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => b.h = h); y += h + 46; return bs; });
    for (let i = 0; i < 3; i++) { F.arrow(grid[0][i], grid[1][i], { from: 'b', to: 't' }); F.arrow(grid[1][i], grid[2][i], { from: 'b', to: 't', dash: true }); }
    y += 10;

    y = F.band(y, 'Ideas transversales', { n: 2 }) + 24;
    const iw = 965, ig = W - 2 * L - 2 * iw;
    const t1 = F.box('t1', { x: L, y, w: iw, type: 'act', fs: FS, align: 'left', node: 'capacidad_jur', title: 'El diagnóstico no decide por sí solo',
      text: 'Las tres líneas coinciden en que la presencia de un diagnóstico o de un síntoma (psicopatía, delirio, depresión) no basta para concluir que falta la responsabilidad o la capacidad: hay que mostrar el vínculo entre la psicopatología y el acto o la decisión concretos (Sullivan-Bissett et al., pp. 205-207; Owen, p. 862).' });
    const t2 = F.box('t2', { x: L + iw + ig, y, w: iw, type: 'act', fs: FS, align: 'left', node: 'tpanti', title: 'Grados, no categorías',
      text: 'La psicopatía admite grados y subtipos (Ciaccio, p. 214) y el delirio se sitúa en continuidad con otras creencias defectuosas (Sullivan-Bissett et al., p. 207): ambos casos complican las fronteras categóricas en los juicios de responsabilidad (ver la lámina sobre el delirio).' });
    const ht = Math.max(t1.h, t2.h); t1.h = ht; t2.h = ht;
    y += ht + 56;

    y = F.band(y, 'Límites y marco jurídico', { n: 3 }) + 24;
    F.box('lim', { x: L, y, w: W - 2 * L, type: 'lim', align: 'left', fs: 18, title: 'Qué es y qué no es esta lámina',
      text: 'Expone argumentos filosóficos, no criterios periciales. La prueba funcional que describe Owen procede del derecho de Inglaterra y Gales (Mental Capacity Act 2005); en España rigen el Código Penal (eximentes y atenuantes, arts. 20-21) y la Ley 8/2021 de apoyos a la capacidad jurídica, que se tratan en las láminas y fichas forenses del atlas. La adicción y la debilidad de la voluntad (acrasia) quedan fuera de esta lámina. Del volumen de Malatesti y McMillan (2010) no se citan pasajes porque el ejemplar consultado carece de paginación impresa.' });
    F.footer('Fuentes: Oxford Handbook of Phenomenological Psychopathology (2019): Englebert (pp. 882-891), Owen (pp. 862-864); Haldipur et al. 2019: Pickering (p. 189), Ciaccio (pp. 211-215); Keil et al. 2017: Sullivan-Bissett et al. (pp. 202-207); Radoilska 2012: Bolton y Banner (p. 94), Bortolotti et al. (p. 100). Citas en inglés original; paráfrasis del atlas. Esquema docente.');
    return F;
  }
};
