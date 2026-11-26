// Figura: tiempo y cuerpo vividos en psicopatología (Minkowski, Straus, von Gebsattel, Tellenbach, Fuchs) y su mapa por trastornos.
// Compilar en prueba: node tools/fig.js mod_tiempo_cuerpo --dry --png <carpeta>
// Fuente de las citas: Stanghellini G et al. (eds.) (2019) The Oxford Handbook of Phenomenological Psychopathology (OHPP), paginación impresa.
const TITLE = 'Tiempo y cuerpo vividos en psicopatología: de Minkowski, Straus, von Gebsattel y Tellenbach a la desincronización de Fuchs, por trastornos';
const OHPP = 'Stanghellini G, Broome MR, Fernandez AV, Fusar-Poli P, Raballo A & Rosfort R (eds.) (2019). The Oxford Handbook of Phenomenological Psychopathology. Oxford: Oxford University Press';
module.exports = {
  key: 'mod_tiempo_cuerpo',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cuatro bloques. 1) Los clásicos de la fenomenología psiquiátrica del tiempo y del cuerpo, cada uno con su concepto central y la página del Oxford Handbook of Phenomenological Psychopathology (OHPP, 2019) en que se expone. 2) El esquema integrador de Fuchs: a partir del «sincronismo vivido» con los demás, cuatro formas de alteración del tiempo vivido (fragmentación, retardo, aceleración e inhibición repetitiva). 3) Matriz por trastornos: qué se altera en el tiempo vivido y en el cuerpo vivido o la intercorporalidad, con la fuente y la página. 4) Límites. Las citas van en inglés original con su página; las paráfrasis son del atlas. Esquema docente: describe modelos fenomenológicos de la vivencia, no criterios diagnósticos ni mecanismos causales demostrados.',
    refs: [
      OHPP,
      'Fuchs T (2019). The experience of time and its disorders. En: Stanghellini G et al. (eds.), OHPP, cap. 48',
      'Fuchs T (2019). The life-world of persons with mood disorders. En: Stanghellini G et al. (eds.), OHPP',
      'Fuchs T (2019). Erwin Straus. En: Stanghellini G et al. (eds.), OHPP',
      'Urfer-Parnas A (2019). Eugène Minkowski. En: Stanghellini G et al. (eds.), OHPP',
      'Micali S (2019). Hubertus Tellenbach. En: Stanghellini G et al. (eds.), OHPP',
      'Stanghellini G & Mancini M (2019). The life-world of persons with borderline personality disorder. En: Stanghellini G et al. (eds.), OHPP',
      'Castellini G & Ricca V (2019). Eating disorders as disorders of embodiment and identity. En: Stanghellini G et al. (eds.), OHPP',
      'Minkowski E (1933). Le temps vécu: études phénoménologiques et psychopathologiques. Paris. Trad. inglesa: Lived Time. Evanston: Northwestern University Press, 1970. Citado en OHPP',
      'Straus E (1928). Das Zeiterlebnis in der endogenen Depression und in der psychopathischen Verstimmung. Monatsschrift für Psychiatrie und Neurologie 68:640-656. Citado en OHPP',
      'Straus E (1947). Disorders of personal time in depressive states. Southern Medical Journal 40:254-259. Citado en OHPP',
      'Straus E (1966). Phenomenological Psychology. New York: Basic Books. Citado en OHPP',
      'von Gebsattel E (1928). Zeitbezogenes Zwangsdenken in der Melancholie. Nervenarzt 1:275-287. Citado en OHPP',
      'von Gebsattel E (1954). Prolegomena einer medizinischen Anthropologie. Berlin: Springer. Citado en OHPP',
      'Tellenbach H (1961). Melancholie: zur Problemgeschichte, Typologie, Pathogenese und Klinik. Berlin: Springer. Trad. inglesa: Melancholy. Pittsburgh: Duquesne University Press, 1980. Citado en OHPP',
      'Fuchs T (2001). Melancholia as a desynchronization: towards a psychopathology of interpersonal time. Psychopathology 34:179-186 · PMID 11549927',
      'Fuchs T (2005). Corporealized and disembodied minds: a phenomenological view of the body in melancholia and schizophrenia. Philosophy, Psychiatry & Psychology 12:95-107. Citado en OHPP',
      'Fuchs T (2013). Temporality and psychopathology. Phenomenology and the Cognitive Sciences 12:75-104. Citado en OHPP',
      'Sartre JP (1943). L\'être et le néant. Citado (trad. inglesa de 1992) en Castellini y Ricca 2019'
    ],
    nodes: ['minkowski_1927', 'husserl', 'fen_contemp', 'enactivismo', 'intersubj_sinton', 'sent_falta_sent', 'emel', 'ddp', 'kimura', 'sartre_mala_fe', 'espacio_vivido']
  },
  draw(Fig) {
    const W = 1940, L = 60, FS = 18;
    const F = new Fig({ key: 'mod_tiempo_cuerpo', title: TITLE, w: W,
      desc: 'Cinco autores clásicos con su concepto central; un esquema que parte del sincronismo vivido y se ramifica en cuatro alteraciones del tiempo vivido (fragmentación en la esquizofrenia, retardo en la depresión, aceleración en la manía, inhibición repetitiva en el TOC); una matriz de siete cuadros con su alteración del tiempo y del cuerpo vividos; y un recuadro de límites.' });

    // ---------- Bloque 1 ----------
    let y = F.band(100, 'Los clásicos: conceptos centrales', { n: 1 }) + 20;
    y = F.text(L, y + 18, 'Desde Minkowski, von Gebsattel, Straus y Tellenbach, la temporalidad es un tema mayor de la psiquiatría fenomenológica; sus análisis, sobre todo individuales («a slowing-down or inhibition of lived time in depression or obsessive-compulsive disorder»), pueden ampliarse con la temporalidad encarnada e intersubjetiva (Fuchs, OHPP p. 431).', { fs: 18, w: W - 120 }) + 22;
    const cls = [
      { id: 'c_mink', node: 'contacto_vital', title: 'Minkowski (1933)', text: 'Contacto vital con la realidad: «an immediate attunement and resonance with the world and with others», un «lived synchrony» con la situación y los otros; el trastorno del élan vital como rasgo estructural de la esquizofrenia (Urfer-Parnas, OHPP pp. 105-106).' },
      { id: 'c_straus', node: 'straus_erwin', title: 'Straus (1928, 1966)', text: 'Momento «pathic» (sentiente, corporal, fisiognómico) y «gnostic» (que reconoce) de la percepción (OHPP p. 128). En la depresión, el tiempo subjetivo del devenir se frena hasta detenerse, se desacopla del tiempo del mundo y da primacía al pasado en la culpa (OHPP p. 132).' },
      { id: 'c_gebs', node: 'vongebsatt', title: 'von Gebsattel (1928, 1954)', text: 'Pensamiento obsesivo referido al tiempo en la melancolía (1928). Inhibición del devenir; en el TOC, el «sentiment d\'incomplétude» de Janet, retomado por Straus y von Gebsattel (Fuchs, OHPP p. 438).' },
      { id: 'c_tell', node: 'tellenbach', title: 'Tellenbach (1961)', text: 'Typus melancholicus: includencia y remanencia, «not causes of depression» sino precondición; sobreidentificación con roles fijos: «a guardian of the established orders» (Micali, OHPP p. 144).' },
      { id: 'c_fuchs', node: 'desincron_fuchs', title: 'Fuchs (2001, 2005, 2013)', text: 'Temporalidad encarnada e intersubjetiva: desincronización social en la melancolía; cuerpo «corporealized» en la melancolía frente a «disembodied» en la esquizofrenia (2005).' }
    ];
    const cw = 340, cg = (W - 2 * L - 5 * cw) / 4;
    const bC = cls.map((o, i) => F.box(o.id, Object.assign({ x: L + i * (cw + cg), y, w: cw, type: 'dx', fs: 17, align: 'left' }, o)));
    const hC = Math.max(...bC.map(b => b.h)); bC.forEach(b => b.h = hC);
    y += hC + 56;

    // ---------- Bloque 2 ----------
    y = F.band(y, 'Esquema integrador de Fuchs: del sincronismo vivido a cuatro alteraciones del tiempo', { n: 2 }) + 30;
    const sync = F.box('sync', { x: 520, y, w: 900, type: 'mec', fs: 18, node: 'intersubj_sinton', title: 'Sincronismo vivido o contemporaneidad basal',
      text: '«a tacit sense of being temporally connected with others», que Minkowski llamó «lived synchronism»; pasa por fases de desincronización: «too late» o «too early» respecto a los procesos sociales (OHPP p. 434).' });
    y += sync.h + 70;
    const alt = [
      { id: 'x_esq', node: 'esq', title: 'Fragmentación', text: 'Esquizofrenia: se debilita la síntesis de la conciencia interna del tiempo; el arco intencional se fragmenta y se introducen pensamientos o impulsos ajenos (pp. 435-436).' },
      { id: 'x_dep', node: 'emel', title: 'Retardo («too late»)', text: 'Depresión: la síntesis se conserva; falla la dinámica conativo-afectiva y el sujeto queda desincronizado del tiempo intersubjetivo (pp. 437, 439).' },
      { id: 'x_man', node: 'ep_mania', title: 'Aceleración («too early»)', text: 'Manía: el movimiento de la vida se acelera y «overtakes the external, social, or world time», hasta el agotamiento (p. 628).' },
      { id: 'x_toc', node: 'toc_dsm', title: 'Inhibición repetitiva', text: 'TOC: el tiempo vivido se detiene y se vuelve «an explicit sequencing, or rather, a stuttering» (p. 438); un presente determinado por el pasado, «eternal recurrence of the same» (p. 439).' }
    ];
    const aw = 420, ag = (W - 2 * L - 4 * aw) / 3;
    const bA = alt.map((o, i) => F.box(o.id, Object.assign({ x: L + i * (aw + ag), y, w: aw, type: 'act', fs: 17, align: 'left' }, o)));
    const hA = Math.max(...bA.map(b => b.h)); bA.forEach(b => b.h = hA);
    bA.forEach((b, i) => F.arrow(sync, b, { from: 'b', to: 't', fa: [0.1, 0.37, 0.63, 0.9][i] }));
    y += hA + 24;
    y = F.text(L, y + 18, 'En la depresión y la manía la síntesis del tiempo interno «always remains intact»; lo que falta o sobra es la dinámica conativa: retardo o aceleración frente a la fragmentación esquizofrénica (OHPP p. 437).', { fs: 18, w: W - 120 }) + 44;

    // ---------- Bloque 3 ----------
    y = F.band(y, 'Matriz por trastornos: tiempo vivido y cuerpo vivido', { n: 3 }) + 20;
    const t = F.table({ x: L, y, fs: 17, cols: [{ w: 300, label: 'Cuadro' }, { w: 620, label: 'Tiempo vivido' }, { w: 620, label: 'Cuerpo vivido e intercorporalidad' }, { w: 280, label: 'Fuente (OHPP)' }], rows: [
      [{ t: 'Depresión melancólica', node: 'emel' }, 'Futuro sin apertura ni novedad, ocupado por una ruina ya inminente; con Minkowski: «the whole of becoming seems to rush toward us, a hostile force» (1970: 188).', 'Rigidez y corporalización del cuerpo vivido; sin resonancia corporal no se expresan ni sienten las emociones: «feeling of not-feeling», despersonalización afectiva.', 'Fuchs, pp. 437, 622-623'],
      [{ t: 'Delirio melancólico', node: 'del_culpa' }, '«the utter manifestation of the decoupling from common time».', 'Primacía del pasado en la culpa (Straus).', 'Fuchs, pp. 132, 628'],
      [{ t: 'Depresión crónica', node: 'ddp' }, 'Sin orientación hacia el futuro «everything seems to amount to the same thing» (Minkowski 1970: 303).', 'No consta un análisis corporal específico en estas fuentes.', 'Fuchs, p. 626'],
      [{ t: 'Manía', node: 'ep_mania' }, 'Aceleración que adelanta al tiempo social y del mundo.', 'Se agotan los recursos biológicos y sociales hasta el derrumbe.', 'Fuchs, p. 628'],
      [{ t: 'Esquizofrenia', node: 'esq' }, 'Debilitamiento de la síntesis temporal; fragmentación del arco intencional.', 'Cuerpo «disembodied» (Fuchs 2005); pérdida del contacto vital (Minkowski).', 'Fuchs, pp. 435-436; Urfer-Parnas, pp. 105-106'],
      [{ t: 'TOC', node: 'toc_dsm' }, 'Tiempo detenido, secuenciado y repetitivo para evitar la anticipación ansiosa del futuro.', 'Sentimiento de incompletud (Janet, Straus, von Gebsattel).', 'Fuchs, pp. 438-439'],
      [{ t: 'TLP (disforia)', node: 'tlp' }, 'Monotonía e instantaneidad: un «now» absoluto, sin protención ni retención, que no se integra en la identidad narrativa.', 'No tratado en esta fuente.', 'Stanghellini y Mancini, pp. 669-670'],
      [{ t: 'Anorexia y TCA', node: 'anor' }, 'No tratado en esta fuente.', 'Predominio del «lived-body-for-others» (Sartre): la identidad queda cosificada por la mirada del otro y reducida a la apariencia del cuerpo.', 'Castellini y Ricca, pp. 716-717']
    ] });
    y = t.y + 50;

    // ---------- Bloque 4 ----------
    y = F.band(y, 'Límites', { n: 4 }) + 24;
    F.box('lim', { x: L, y, w: W - 2 * L, type: 'lim', align: 'left', fs: 18, title: 'Qué es y qué no es este mapa',
      text: 'Recoge análisis fenomenológicos de la vivencia, no estudios empíricos de validación ni de especificidad: esta lámina no incluye ese tipo de evidencia. Fuchs admite que la alteración temporal de la esquizofrenia está «certainly correlated to neurophysiological dysfunctions» (p. 436), sin afirmar una causalidad. Para el TLP y los TCA hay una sola fuente en el manual. El typus melancholicus es una precondición propuesta, no un factor de riesgo cuantificado. Útil para orientar la exploración de la vivencia; no sustituye a los criterios diagnósticos.' });
    F.footer('Fuentes: Oxford Handbook of Phenomenological Psychopathology (2019): Fuchs (pp. 128, 132, 431-439, 622-628), Urfer-Parnas (pp. 105-106), Micali (p. 144), Stanghellini y Mancini (pp. 669-670), Castellini y Ricca (pp. 716-717); y a través de ellos Minkowski 1933/1970, Straus 1928, 1947 y 1966, von Gebsattel 1928 y 1954, Tellenbach 1961/1980, Fuchs 2001, 2005 y 2013. Citas en inglés original; paráfrasis del atlas. Esquema docente.');
    return F;
  }
};
