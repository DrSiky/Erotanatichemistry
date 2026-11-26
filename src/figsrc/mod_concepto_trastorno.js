// Figura: el concepto de trastorno mental: naturalismo (Boorse), modelo híbrido (Wakefield), valores (Fulford), escepticismo (Szasz), kinds prácticos y vaguedad.
// Compilar en prueba: node tools/fig.js mod_concepto_trastorno --dry --png <carpeta>
// Citas comprobadas con la paginación impresa: Varga 2015; Haldipur et al. 2019; Keil et al. 2017; Oxford Handbook of Philosophy and Psychiatry 2013.
const TITLE = '¿Qué es un trastorno mental? Del naturalismo de Boorse y la disfunción dañina de Wakefield a los valores de Fulford, el mito de Szasz, los kinds prácticos y la vaguedad';
module.exports = {
  key: 'mod_concepto_trastorno',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cuatro bloques sobre el debate filosófico acerca del concepto de trastorno mental. 1) Cuatro posiciones ordenadas de izquierda a derecha según el peso que dan a los hechos biológicos o a los valores: naturalismo biostadístico (Boorse), análisis híbrido de la disfunción dañina (Wakefield), práctica basada en valores (Fulford) y escepticismo (Szasz); en cada columna, la definición en palabras del autor (doble borde) y una consecuencia o crítica (borde discontinuo). 2) La dialéctica del debate sobre Szasz según Fulford: tesis, antítesis y síntesis apoyada en Hare. 3) Más allá de la definición: los kinds prácticos (Zachar, Hacking) y la vaguedad de los conceptos de salud, enfermedad y trastorno (Keil et al.; Zachar y McNally). 4) Límites. Citas en inglés original con su página; paráfrasis del atlas. Esquema docente: no decide qué cuadros son trastornos ni sustituye a las clasificaciones vigentes.',
    refs: [
      'Varga S (2015). Naturalism, Interpretation, and Mental Disorder. Oxford: Oxford University Press (International Perspectives in Philosophy and Psychiatry)',
      'Haldipur CV, Knoll JL IV & Luft E v.d. (eds.) (2019). Thomas Szasz: An Appraisal of His Legacy. Oxford: Oxford University Press',
      'Fulford KWM (2019). Taking Szasz seriously, and his critics, too: thesis, antithesis, and a values-based synthesis. En: Haldipur CV et al. (eds.), Thomas Szasz: An Appraisal of His Legacy, cap. 7. Oxford: Oxford University Press',
      'Sadler JZ (2019). Conceptual models of normative content in mental disorders. En: Haldipur CV et al. (eds.), Thomas Szasz: An Appraisal of His Legacy, cap. 4. Oxford: Oxford University Press',
      'Wilson S (2019). Study on the Szaszophone. En: Haldipur CV et al. (eds.), Thomas Szasz: An Appraisal of His Legacy, cap. 1. Oxford: Oxford University Press',
      'Pols J (2019). Leading up to The Myth of Mental Illness. En: Haldipur CV et al. (eds.), Thomas Szasz: An Appraisal of His Legacy, cap. 2. Oxford: Oxford University Press',
      'Sadler JZ (2013). Values in psychiatric diagnosis and classification. En: Fulford KWM et al. (eds.), The Oxford Handbook of Philosophy and Psychiatry, cap. 45. Oxford: Oxford University Press',
      'Keil G, Keuck L & Hauswald R (2017). Vagueness in psychiatry: an overview. En: Keil G, Keuck L & Hauswald R (eds.), Vagueness in Psychiatry, cap. 1. Oxford: Oxford University Press',
      'Zachar P & McNally RJ (2017). Vagueness, the sorites paradox, and posttraumatic stress disorder. En: Keil G et al. (eds.), Vagueness in Psychiatry, cap. 9. Oxford: Oxford University Press',
      'Boorse C (1977). Health as a theoretical concept. Philosophy of Science 44:542-573. Citado en Varga 2015',
      'Boorse C (1997). A rebuttal on health. En: Humber y Almeder (eds.), What is Disease? Totowa, NJ: Humana Press, pp. 1-134. Citado en Varga 2015',
      'Boorse C (2014). A second rebuttal on health. Journal of Medicine and Philosophy 39:683-724 · PMID 25398760',
      'Wakefield JC (1992). The concept of mental disorder: on the boundary between biological facts and social values. American Psychologist 47:373-388 · PMID 1562108',
      'Wakefield JC (2007). The concept of mental disorder: diagnostic implications of the harmful dysfunction analysis. World Psychiatry 6:149-156 · PMID 18188432',
      'Kendell RE (1975). The concept of disease and its implications for psychiatry. British Journal of Psychiatry 127:305-315 · PMID 1182384',
      'Szasz TS (1961). The Myth of Mental Illness: Foundations of a Theory of Personal Conduct. New York: Harper. Citado en Varga 2015',
      'Szasz TS (2011). Citado en Wilson 2019, p. 6 (pp. 179-180 del original) [no verificada: obra no identificada en la fuente secundaria]',
      'Fulford KWM (1989). Moral Theory and Medical Practice. Cambridge: Cambridge University Press. Citado en Varga 2015',
      'Hare RM (1952). The Language of Morals. Citado en Fulford 2019 [no verificada: entrada bibliográfica no cotejada]',
      'Zachar P (2000). Psychiatric disorders are not natural kinds. Philosophy, Psychiatry, and Psychology 7:167-182. Citado en Varga 2015',
      'Zachar P (2012). Capítulo en: Kendler KS & Parnas J (eds.), Philosophical Issues in Psychiatry II: Nosology. Oxford: Oxford University Press [no verificada: título del capítulo y páginas]',
      'Zachar P & Kendler KS (2007). Psychiatric disorders: a conceptual taxonomy. American Journal of Psychiatry 164:557-565 · PMID 17403967',
      'Hacking I (2007). Kinds of people: moving targets. Proceedings of the British Academy 151:285-318. Citado en Varga 2015'
    ],
    nodes: ['dsm3', 'dsm5_hit', 'rdoc', 'laing_hit', 'szasz_hit', 'kendell_hit', 'duelo', 'pluralismo']
  },
  draw(Fig) {
    const W = 2100, L = 60, FS = 17;
    const F = new Fig({ key: 'mod_concepto_trastorno', title: TITLE, w: W,
      desc: 'Cuatro columnas ordenadas de los hechos a los valores (Boorse, Wakefield, Fulford, Szasz) con definición y crítica; una secuencia tesis-antítesis-síntesis sobre Szasz; un bloque sobre kinds prácticos y vaguedad, y un recuadro de límites.' });

    // ---------- Bloque 1 ----------
    let y = F.band(100, 'Cuatro posiciones: de los hechos biológicos a los valores', { n: 1 }) + 20;
    y = F.text(L, y + 18, 'Eje de lectura: de izquierda a derecha aumenta el peso que se da a los valores en la definición. Doble borde = definición en palabras del autor; borde discontinuo = consecuencia o crítica.', { fs: 18, w: W - 120 }) + 14;
    const cw = 470, cg = (W - 2 * L - 4 * cw) / 3, X = [0, 1, 2, 3].map(i => L + i * (cw + cg));
    ['← Naturalismo', 'Híbrido', 'Valores sin escepticismo', 'Escepticismo →'].forEach((h, i) => F.text(X[i], y + 22, h, { bold: true, fs: 20, w: cw }));
    y += 46;
    const def = [
      { id: 'd_boorse', title: 'Boorse: teoría biostadística', text: 'La función normal es «a statistically typical contribution» a la supervivencia y la reproducción en una clase de referencia (edad y sexo de una especie); la enfermedad, «an impairment of normal functional ability» por debajo de la eficiencia típica (Boorse 1997, pp. 7-8, citado en Varga 2015, p. 149).' },
      { id: 'd_wake', node: 'wakefield', title: 'Wakefield: disfunción dañina', text: 'Trastorno si y solo si (a) causa daño o privación de un beneficio según los estándares de la cultura de la persona (criterio de valor) y (b) resulta de que un mecanismo interno no realiza su función natural, explicada por la evolución (criterio explicativo) (Wakefield 1992, p. 384, citado en Varga, pp. 166-168).' },
      { id: 'd_fulford', node: 'valores_etica', title: 'Fulford: la enfermedad mental cargada de valores', text: 'Con Hare: los valores se hacen explícitos donde son diversos; son como el aire, que solo notamos al respirar con dificultad (Fulford 2019, p. 87). Rechaza la dicotomía de que la enfermedad corporal sea fisiológica y libre de valores y el trastorno mental, normativo (Varga 2015, p. 184).' },
      { id: 'd_szasz', node: 'szasz', title: 'Szasz: la enfermedad mental como metáfora', text: 'Con la definición «materialist-scientific» de enfermedad como alteración estructural o funcional de células, tejidos y órganos, «mental illness is a metaphor» y afirmarlo sería «an analytic truth, not subject to empirical falsification» (Szasz 2011, citado en Wilson 2019, p. 6). Base: el principio de Virchow (Pols 2019, p. 14).' }
    ];
    const bD = def.map((o, i) => F.box(o.id, Object.assign({ x: X[i], y, w: cw, type: 'dx', fs: FS, align: 'left' }, o)));
    const hD = Math.max(...bD.map(b => b.h)); bD.forEach(b => b.h = hD);
    y += hD + 46;
    const cons = [
      { id: 'c_boorse', title: 'Enfermedad, no padecimiento', text: 'Boorse no se ocupa de «illness», término cargado de valor propio de la práctica, sino de «disease», desviación estadística de las normas de funcionamiento de la especie (Varga, p. 149).' },
      { id: 'c_wake', node: 'duelo', title: 'Frontera difusa reconocida', text: 'El propio Wakefield admite que no hay frontera nítida entre trastorno y no trastorno, con «areas of fuzziness and vagueness» (Wakefield 2010, citado en Varga, p. 168). Ratcliffe discute su aplicación a la tristeza (ver la lámina sobre la depresión).' },
      { id: 'c_fulford', node: 'dsm5_hit', title: 'Aceptación en la corriente principal', text: 'Tras Fulford, la carga de valores de las categorías psiquiátricas y de los procesos para elaborarlas «has increasingly come to be accepted by the psychiatric mainstream» (Sadler 2013, p. 754).' },
      { id: 'c_szasz', node: 'szasz_hit', title: 'Problemas de la vida', text: 'Para Szasz, el DSM confunde enfermedad con costumbres de conducta personal: los trastornos mentales son «problems in living», que abarcan lo que tratan la educación, la religión y la justicia penal (Sadler 2019, p. 42).' }
    ];
    const bK = cons.map((o, i) => F.box(o.id, Object.assign({ x: X[i], y, w: cw, type: 'info', fs: FS, align: 'left' }, o)));
    const hK = Math.max(...bK.map(b => b.h)); bK.forEach(b => b.h = hK);
    bD.forEach((b, i) => F.arrow(b, bK[i], { from: 'b', to: 't', dash: true }));
    y += hK + 56;

    // ---------- Bloque 2 ----------
    y = F.band(y, 'La dialéctica del debate sobre Szasz según Fulford (2019)', { n: 2 }) + 30;
    const dw = 600, dg = (W - 2 * L - 3 * dw) / 2;
    const tesis = F.box('tesis', { x: L, y, w: dw, type: 'act', fs: FS, align: 'left', node: 'szasz_hit', title: 'Tesis (Szasz)', text: 'Aplaudido por los opositores de la psiquiatría médica: las enfermedades mentales se definen por normas evaluativas y quedan fuera de la ciencia biomédica (p. 82).' });
    const anti = F.box('anti', { x: L + dw + dg, y, w: dw, type: 'act', fs: FS, align: 'left', node: 'kendell_hit', title: 'Antítesis (Kendell y críticos biomédicos)', text: 'Las enfermedades mentales no difieren en nada material de las corporales; acusan a Szasz de excluir a los pacientes de la atención clínica (p. 82).' });
    const sint = F.box('sint', { x: L + 2 * (dw + dg), y, w: dw, type: 'dx', fs: FS, align: 'left', node: 'valores_etica', title: 'Síntesis (Fulford, a partir de Hare)', text: 'Szasz acertó en la carga de valores y erró al concluir que es un mito; Kendell acertó al mantenerla en la medicina y erró al negar los valores. La enfermedad mental «is indeed a part of medicine, but engages in areas of human experience and behavior where our values are particularly diverse» (p. 89).' });
    const hh = Math.max(tesis.h, anti.h, sint.h); [tesis, anti, sint].forEach(b => b.h = hh);
    F.arrow(tesis, anti, { from: 'r', to: 'l' }); F.arrow(anti, sint, { from: 'r', to: 'l' });
    y += hh + 56;

    // ---------- Bloque 3 ----------
    y = F.band(y, 'Más allá de la definición: kinds prácticos y vaguedad', { n: 3 }) + 30;
    const pw = 965, pg = W - 2 * L - 2 * pw;
    const pk = F.box('pk', { x: L, y, w: pw, type: 'act', fs: FS, align: 'left', node: 'rdoc', title: 'Kinds prácticos', text: 'Algunos sostienen que los trastornos mentales son «practical kinds» (Zachar 2000; Varga, p. 122). Los objetivos de la clasificación influyen en el peso de los criterios e incluso en cuáles se consideran relevantes: así surgen los kinds prácticos (Zachar 2012) [página no localizada]. Hacking propone «delete every mention of natural kinds»; la mejor clasificación sería relativa a los fines de la investigación (Varga, p. 126).' });
    const vg = F.box('vg', { x: L + pw + pg, y, w: pw, type: 'act', fs: FS, align: 'left', node: 'ptsd', title: 'Vaguedad', text: 'Los términos vagos admiten casos límite porque no trazan una distinción nítida entre su extensión y su antiextensión; los conceptos de salud mental, enfermedad y trastorno son vagos en este sentido (Keil et al. 2017, p. 3). En el TEPT, biomarcadores y mecanismos pueden darse en grados: «not all vagueness is epistemic» (Zachar y McNally 2017, p. 171).' });
    const hp = Math.max(pk.h, vg.h); pk.h = hp; vg.h = hp;
    y += hp + 56;

    // ---------- Bloque 4 ----------
    y = F.band(y, 'Límites', { n: 4 }) + 24;
    F.box('lim', { x: L, y, w: W - 2 * L, type: 'lim', align: 'left', fs: 18, title: 'Qué es y qué no es este mapa',
      text: 'Ordena posiciones filosóficas, no criterios clínicos. Boorse y Wakefield se citan a través de Varga (2015), que los transcribe con su página original; Szasz, a través de Wilson (2019). El eje de hechos y valores simplifica: Wakefield combina ambos y Fulford no niega los hechos biológicos. El enfoque evolucionista ampliado (Adriaens y De Block 2011) no se incluye. La decisión diagnóstica sigue rigiéndose por las clasificaciones vigentes (DSM-5-TR, CIE-11), cuyos marcos se tratan en otras láminas del atlas.' });
    F.footer('Fuentes: Varga 2015 (pp. 122, 126, 146-149, 166-168, 184); Haldipur et al. 2019: Wilson (p. 6), Pols (p. 14), Sadler (p. 42), Fulford (pp. 82-89); Sadler 2013 (p. 754); Keil et al. 2017 (p. 3); Zachar y McNally 2017 (p. 171); Zachar 2012 (PIP II). Citas en inglés original; paráfrasis del atlas. Esquema docente.');
    return F;
  }
};
