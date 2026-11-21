// Figura: modelo jerárquico HiTOP (factor p, superespectros, espectros, subfactores y síndromes) y su correspondencia con el DSM, el PID-5 y la CIE-11.
// Compilar en prueba: node tools/fig.js mod_hitop --dry --png <carpeta>
const TITLE = 'Modelo jerárquico HiTOP: del factor p a los síntomas, y su correspondencia con DSM, PID-5 y CIE-11';
module.exports = {
  key: 'mod_hitop',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en tres bloques. 1) Jerarquía de la Hierarchical Taxonomy of Psychopathology (HiTOP), de lo más general (arriba) a lo más específico (abajo): factor general p, tres superespectros todavía hipotéticos, seis espectros, subfactores con las categorías DSM cuyos síntomas caen sobre todo en cada uno, y ejemplos de componentes sintomáticos y rasgos desadaptativos. Las flechas indican «se divide en»; «(provisional)» y «(también …)» marcan ubicaciones inciertas o cargas cruzadas. HiTOP no contiene diagnósticos DSM: la correspondencia es aproximada y sirve solo para orientarse (Conway 2022). 2) Equivalencias aproximadas de cada espectro con los dominios del PID-5 (modelo alternativo del DSM-5-TR, criterio B), los calificadores de rasgo de la CIE-11 y el polo desadaptativo de los cinco grandes, y correspondencia entre los niveles de gravedad del criterio A y de la CIE-11. 3) Pruebas de validez y utilidad, y límites y críticas. Esquema docente: no es un instrumento diagnóstico ni sustituye al juicio clínico.',
    refs: [
      'Kotov R et al. (2017). The Hierarchical Taxonomy of Psychopathology (HiTOP): a dimensional alternative to traditional nosologies. J Abnorm Psychol 126:454-477 · PMID 28333488',
      'Kotov R et al. (2021). The Hierarchical Taxonomy of Psychopathology (HiTOP): a quantitative nosology based on consensus of evidence. Annu Rev Clin Psychol 17:83-108 · PMID 33577350',
      'Conway CC, Forbes MK, South SC & HiTOP Consortium (2022). A Hierarchical Taxonomy of Psychopathology (HiTOP) primer for mental health researchers. Clin Psychol Sci 10:236-258 (publicado en línea en 2021) · PMID 35599839',
      'Kotov R et al. (2020). Validity and utility of Hierarchical Taxonomy of Psychopathology (HiTOP): I. Psychosis superspectrum. World Psychiatry 19:151-172 · PMID 32394571',
      'Krueger RF et al. (2021). Validity and utility of Hierarchical Taxonomy of Psychopathology (HiTOP): II. Externalizing superspectrum. World Psychiatry 20:171-193 · PMID 34002506',
      'Watson D et al. (2022). Validity and utility of Hierarchical Taxonomy of Psychopathology (HiTOP): III. Emotional dysfunction superspectrum. World Psychiatry 21:26-54 · PMID 35015357',
      'Ringwald WR, Forbes MK & Wright AGC (2023). Meta-analysis of structural evidence for the Hierarchical Taxonomy of Psychopathology (HiTOP) model. Psychol Med 53:533-546 (publicado en línea en 2021) · PMID 33988108',
      'Waszczuk MA et al. (2020). Redefining phenotypes to advance psychiatric genetics: implications from hierarchical taxonomy of psychopathology. J Abnorm Psychol 129:143-161 · PMID 31804095',
      'Caspi A et al. (2014). The p factor: one general psychopathology factor in the structure of psychiatric disorders? Clin Psychol Sci 2:119-137 · PMID 25360393',
      'Krueger RF et al. (2012). Initial construction of a maladaptive personality trait model and inventory for DSM-5. Psychol Med 42:1879-1890 · PMID 22153017',
      'Bach B & First MB (2018). Application of the ICD-11 classification of personality disorders. BMC Psychiatry 18:351 · PMID 30373564',
      'Haeffel GJ et al. (2022). The Hierarchical Taxonomy of Psychopathology (HiTOP) is not an improvement over the DSM. Clin Psychol Sci 10:285-290 · PMID 36299281',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5ª ed., texto revisado (DSM-5-TR), Sección III: modelo alternativo de los trastornos de la personalidad. Washington, DC: APA Publishing [no verificada directamente; contenido tomado de Krueger 2012 y Bach y First 2018]',
      'Organización Mundial de la Salud (2025). CIE-11 para estadísticas de mortalidad y morbilidad, tabulación simple oficial (versión MMS 2025-01): 6D10 Trastorno de la personalidad; 6D11 Rasgos o patrones de personalidad prominentes (6D11.4 anancastia; 6D11.5 patrón límite); QE50.7 Dificultad de la personalidad'
    ],
    nodes: ['cie11_hit', 'dsm5_hit', 'rdoc', 'red_sintom', 'smoller_estructura', 'teasqd', 'desp']
  },
  draw(Fig) {
    const W = 2560;
    const F = new Fig({ key: 'mod_hitop', title: TITLE, w: W,
      desc: 'Árbol jerárquico de HiTOP: factor p; superespectros de disfunción emocional, psicosis y externalizante; espectros internalizante, somatomorfo, trastorno del pensamiento, desapego, externalizante desinhibido y antagonista; subfactores con las categorías DSM correspondientes y ejemplos de síntomas y rasgos. Tabla de equivalencias con el PID-5, la CIE-11 y los cinco grandes, y recuadros de validez, utilidad y críticas.' });
    const L = 60, X0 = 230, G = 36, FS = 18;
    // Columnas de los seis espectros (el internalizante ocupa el doble)
    const C = { int: { x: X0, w: 600 }, som: { x: X0 + 636, w: 300 }, tp: { x: X0 + 972, w: 300 }, des: { x: X0 + 1308, w: 300 }, di: { x: X0 + 1644, w: 300 }, ant: { x: X0 + 1980, w: 300 } };
    const eq = bs => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };
    // Rótulo de nivel en la columna izquierda, a la altura de la fila
    const lab = (y, n, s) => { F.text(L, y + 22, n, { bold: true, fs: 20, w: 150 }); F.text(L, y + 50, s, { fs: 16, fill: '#333', w: 150 }); };

    // ---------- Bloque 1: jerarquía ----------
    let y = F.band(90, 'Jerarquía HiTOP: de lo más general (arriba) a lo más específico (abajo); las flechas significan «se divide en»', { n: 1 }) + 34;
    y = F.text(L, y, 'HiTOP no contiene diagnósticos DSM ni CIE, sino los signos y síntomas que los forman; las categorías de los niveles inferiores indican solo dónde caen sobre todo sus síntomas (Conway 2022).', { fs: 18, w: W - 120 }) + 22;

    lab(y, 'Nivel 1', 'Superespectro general');
    const p = F.box('p', { x: X0 + 640, y, w: 1000, type: 'mec', fs: FS, node: 'p_factor', title: 'Factor general de psicopatología (factor p)',
      text: 'Recoge lo que comparten los seis espectros y se supone presente en casi todos los síntomas, en unos más que en otros (Conway 2022). En la cohorte de Dunedin, seguida 20 años desde la adolescencia, los trastornos se explicaban por tres factores (internalizante, externalizante y del pensamiento) y aún mejor por una sola dimensión general (Caspi 2014).' });
    y = p.y + p.h + 60;

    lab(y, 'Nivel 2', 'Superespectros (hipotéticos según Kotov 2021)');
    const s1 = F.box('s1', { x: C.int.x, y, w: C.som.x + C.som.w - C.int.x, type: 'dx', fs: FS, node: 'hitop_anx', title: 'Disfunción emocional',
      text: 'Une los espectros internalizante y somatomorfo; ligado en conjunto al afecto negativo o neuroticismo (Watson 2022).' });
    const s2 = F.box('s2', { x: C.tp.x, y, w: C.des.x + C.des.w - C.tp.x, type: 'dx', fs: FS, node: 'esqtclin', title: 'Psicosis',
      text: 'Une trastorno del pensamiento y desapego: genética, factores de riesgo y biomarcadores en parte comunes (Kotov 2020).' });
    const s3 = F.box('s3', { x: C.di.x, y, w: C.ant.x + C.ant.w - C.di.x, type: 'dx', fs: FS, node: 'desinhib', title: 'Externalizante',
      text: 'Une los espectros desinhibido y antagonista; incluye sobre todo los trastornos por consumo y los de la personalidad del grupo B (Krueger 2021).' });
    eq([s1, s2, s3]);
    [s1, s2, s3].forEach(s => F.arrow(p, s, { from: 'b', to: 't' }));
    y = s1.y + s1.h + 60;

    lab(y, 'Nivel 3', 'Seis espectros');
    const sp = {};
    sp.int = F.box('e_int', { x: C.int.x, y, w: C.int.w, type: 'dx', fs: FS, node: 'tripartito', title: 'Internalizante', text: 'El espectro mayor y más complejo (Watson 2022). Con los cuatro siguientes, los cinco espectros mejor validados (Conway 2022).' });
    sp.som = F.box('e_som', { x: C.som.x, y, w: C.som.w, type: 'dx', fs: FS, node: 'somat_sint', title: 'Somatomorfo', text: 'El más provisional (Watson 2022); apoyo modesto (Conway 2022).' });
    sp.tp = F.box('e_tp', { x: C.tp.x, y, w: C.tp.w, type: 'dx', fs: FS, node: 'meehl', title: 'Trastorno del pensamiento', text: 'Del juicio de realidad normal al psicoticismo y los delirios (Kotov 2020).' });
    sp.des = F.box('e_des', { x: C.des.x, y, w: C.des.w, type: 'dx', fs: FS, node: 'hitop_tp', title: 'Desapego', text: 'De la introversión al afecto embotado y la abulia (Kotov 2020).' });
    sp.di = F.box('e_di', { x: C.di.x, y, w: C.di.w, type: 'dx', fs: FS, node: 'impulsiv', title: 'Externalizante desinhibido', text: 'Actuar por impulso sin considerar las consecuencias (Krueger 2021).' });
    sp.ant = F.box('e_ant', { x: C.ant.x, y, w: C.ant.w, type: 'dx', fs: FS, node: 'tpb', title: 'Externalizante antagonista', text: 'Relacionarse mediante antipatía y conflicto (Krueger 2021).' });
    eq(Object.values(sp));
    F.arrow(s1, sp.int, { from: 'b', to: 't', fa: 300 / 936 }); F.arrow(s1, sp.som, { from: 'b', to: 't', fa: 786 / 936 });
    F.arrow(s2, sp.tp, { from: 'b', to: 't', fa: 150 / 636 }); F.arrow(s2, sp.des, { from: 'b', to: 't', fa: 486 / 636 });
    F.arrow(s3, sp.di, { from: 'b', to: 't', fa: 150 / 636 }); F.arrow(s3, sp.ant, { from: 'b', to: 't', fa: 486 / 636 });
    y = sp.int.y + sp.int.h + 60;

    lab(y, 'Niveles 4 y 5', 'Subfactores (marcos) y síndromes: categoría DSM-5-TR más próxima (cajas)');
    const gy = y, CF = 17;
    // Marco de subfactor con cajas compactas apiladas. items: [title, node, text?]
    const grp = (id, x, y0, w, label, items) => {
      let yy = y0 + 40; const bs = [];
      items.forEach((it, i) => { const b = F.box(id + i, { x: x + 12, y: yy, w: w - 24, type: 'dx', fs: CF, node: it[1], title: it[0], text: it[2] }); bs.push(b); yy += b.h + 8; });
      const h = yy - y0 + 4; F.group({ x, y: y0, w, h, label }); return { x, y: y0, w, h, bottom: y0 + h };
    };
    const IW = 282, IX2 = C.int.x + IW + G;
    // Internalizante, subcolumna izquierda
    const gD = grp('g_dis', C.int.x, gy, IW, 'Distrés', [['Depresión mayor', 'ddm'], ['Distimia', 'ddp'], ['TAG', 'tag'], ['TEPT', 'ptsd'], ['Insomnio', 'insom', 'validación limitada (Kotov 2021)'], ['T. límite', 'tlp', 'también antagonista']]);
    const gS = grp('g_sex', C.int.x, gD.bottom + 16, IW, 'Problemas sexuales', [['Disfunciones sexuales', 'sexual_sx']]);
    const gM = grp('g_man', C.int.x, gS.bottom + 16, IW, 'Manía (provisional)', [['T. bipolar', 'tb1', 'carga también en trastorno del pensamiento (Kotov 2021)']]);
    // Internalizante, subcolumna derecha
    const gF = grp('g_mie', IX2, gy, IW, 'Miedo', [['Pánico', 'panic', 'carga en miedo y distrés (Kotov 2017)'], ['Agorafobia', 'agora'], ['Ansiedad social', 'fobia_soc'], ['Fobia específica', 'fobia_esp'], ['TOC', 'toc_dsm', 'miembro débil, solapado con trastorno del pensamiento (Kotov 2017); sin subfactor claro (Watson 2022)']]);
    const gA = grp('g_ali', IX2, gF.bottom + 16, IW, 'Patología alimentaria', [['Anorexia nerviosa', 'anor'], ['Bulimia nerviosa', 'bul'], ['T. por atracón', 'bed']]);
    // Somatomorfo
    const gSo = grp('g_som', C.som.x, gy, C.som.w, 'Sin subfactores definidos', [['Síntomas somáticos', 'somat_sint'], ['Ansiedad por la salud', 'iad', 'ubicación pendiente (Watson 2022)'], ['Síntomas neurológicos funcionales', 'conv', 'figura 1 de Watson 2022']]);
    // Trastorno del pensamiento
    const gT = grp('g_tp', C.tp.x, gy, C.tp.w, 'Sin subfactores definidos', [['Esquizofrenia', 'esq', 'también desapego'], ['Esquizoafectivo', 'teasqb', 'también desapego'], ['T. delirante', 'tdelirant'], ['T. esquizotípico', 'esqtpersonalidad', 'también desapego'], ['T. paranoide de la personalidad', 'tparano', 'también desapego'], ['Disociación (provisional)', 'tdi']]);
    // Desapego
    const gDe = grp('g_des', C.des.x, gy, C.des.w, 'Sin subfactores definidos', [['Síntomas negativos', 'esqneg'], ['T. esquizoide', 'tp_esquizoide', 'solo desapego'], ['T. evitativo', 'tpev', 'solo desapego']]);
    // Externalizantes
    const gDi = grp('g_di', C.di.x, gy, C.di.w, 'Solo desinhibido', [['TDAH', 'tdah', 'conducta antisocial según Kotov 2021'], ['Consumo de alcohol', 'alcohol'], ['Consumo de otras sustancias', 'tcs']]);
    const gAn = grp('g_an', C.ant.x, gy, C.ant.w, 'Solo antagonista', [['T. narcisista', 'tpnarc'], ['T. histriónico', 'hist'], ['T. paranoide', 'tparano', 'también psicosis (Kotov 2020)']]);
    const myT = Math.max(gDi.bottom, gAn.bottom) + 16, mw = C.ant.x + C.ant.w - C.di.x;
    // Marco común a los dos espectros externalizantes: rasgos de ambos
    const mx = [['T. antisocial', 'tpanti'], ['T. de conducta', 'tcond'], ['T. negativista desafiante', 'tnd'], ['T. explosivo intermitente', 'tei'], ['T. límite (provisional)', 'tlp', 'carga sobre todo en internalización']];
    let my = myT + 40; const mcol = [C.di.x + 12, C.ant.x + 12]; let rowH = 0;
    mx.forEach((it, i) => { const b = F.box('g_mx' + i, { x: mcol[i % 2], y: my, w: C.di.w - 24, type: 'dx', fs: CF, node: it[1], title: it[0], text: it[2] }); rowH = Math.max(rowH, b.h); if (i % 2 === 1 || i === mx.length - 1) { my += rowH + 8; rowH = 0; } });
    F.group({ x: C.di.x, y: myT, w: mw, h: my - myT + 4, label: 'Conducta antisocial: rasgos de ambos espectros (Krueger 2021)' });
    const gMx = { x: C.di.x, y: myT, w: mw, h: my - myT + 4 };

    F.arrow(sp.int, gD, { from: 'b', to: 't', fa: 0.235 }); F.arrow(sp.int, gF, { from: 'b', to: 't', fa: 0.765 });
    F.arrow(sp.som, gSo, { from: 'b', to: 't' }); F.arrow(sp.tp, gT, { from: 'b', to: 't' }); F.arrow(sp.des, gDe, { from: 'b', to: 't' });
    F.arrow(sp.di, gDi, { from: 'b', to: 't' }); F.arrow(sp.ant, gAn, { from: 'b', to: 't' });

    y = Math.max(gM.bottom, gA.bottom, gSo.bottom, gT.bottom, gDe.bottom, gMx.y + gMx.h) + 60;
    lab(y, 'Nivel 6', 'Componentes y rasgos: unidades básicas (más de 100 propuestos: Kotov 2021); ejemplos');
    const ky = y;
    const k = [
      F.box('k_int', { x: C.int.x, y: ky, w: C.int.w, type: 'info', fs: CF, node: 'anhed', title: 'Anhedonia; pánico, insomnio, ansiedad social', text: 'La anhedonia, como componente, es diana para desarrollar tratamientos (Kotov 2021); subescalas homogéneas del IDAS (Conway 2022).' }),
      F.box('k_som', { x: C.som.x, y: ky, w: C.som.w, type: 'info', fs: CF, title: 'Malestar corporal', text: 'Indicadores principales del espectro (Watson 2022).' }),
      F.box('k_tp', { x: C.tp.x, y: ky, w: C.tp.w, type: 'info', fs: CF, node: 'esqtclin', title: 'Síntomas positivos', text: 'Y esquizotipia positiva (Kotov 2020).' }),
      F.box('k_des', { x: C.des.x, y: ky, w: C.des.w, type: 'info', fs: CF, node: 'apatia', title: 'Afecto embotado, abulia', text: 'Y esquizotipia negativa (Kotov 2020).' }),
      F.box('k_di', { x: C.di.x, y: ky, w: C.di.w, type: 'info', fs: CF, node: 'impulsiv', title: 'Impulsividad, distraibilidad', text: 'Rasgos de desinhibición (Bach y First 2018).' }),
      F.box('k_ant', { x: C.ant.x, y: ky, w: C.ant.w, type: 'info', fs: CF, node: 'tpnarc', title: 'Grandiosidad, falta de empatía', text: 'Rasgos de disocialidad (Bach y First 2018).' })
    ];
    eq(k);
    y = ky + k[0].h + 60;

    // ---------- Bloque 2: personalidad ----------
    y = F.band(y, 'Correspondencia aproximada con los rasgos de personalidad: PID-5 (DSM-5-TR, Sección III) y CIE-11', { n: 2 }) + 22;
    const t = F.table({ x: L, y, fs: 18, cols: [{ w: 330, label: 'Espectro HiTOP' }, { w: 400, label: 'Dominio del PID-5 (criterio B del modelo alternativo)' }, { w: 560, label: 'Calificador de rasgo de la CIE-11' }, { w: 400, label: 'Cinco grandes: polo desadaptativo' }, { w: 750, label: 'Fuente y matiz' }],
      rows: [
        [{ t: 'Internalizante', node: 'hitop_anx' }, 'Afecto negativo', 'Afectividad negativa (la perseveración, faceta del afecto negativo, se aproxima a la anancastia)', 'Neuroticismo', 'Kotov 2017; Watson 2022; equivalencias CIE-11: tabla 7 de Bach y First 2018'],
        [{ t: 'Somatomorfo', node: 'somat_sint' }, 'Sin dominio propio', 'Sin calificador propio', 'Sin equivalente', 'Los cinco dominios del PID-5 (Krueger 2012) y de la CIE-11 (Bach y First 2018) no incluyen un dominio somático'],
        [{ t: 'Trastorno del pensamiento', node: 'esqtpersonalidad' }, 'Psicoticismo', 'Ninguno: la CIE-11 no codifica psicoticismo y sitúa el trastorno esquizotípico en el grupo de la esquizofrenia', 'Sin equivalente claro', 'Kotov 2017; Bach y First 2018'],
        [{ t: 'Desapego', node: 'tp_esquizoide' }, 'Desapego', 'Desapego (social y emocional)', 'Extraversión baja', 'Kotov 2017; Bach y First 2018'],
        [{ t: 'Externalizante desinhibido', node: 'tdah' }, 'Desinhibición', 'Desinhibición; el perfeccionismo rígido, faceta del polo bajo de la desinhibición, se aproxima a la anancastia', 'Responsabilidad baja', 'Kotov 2017; Bach y First 2018'],
        [{ t: 'Externalizante antagonista', node: 'tpanti' }, 'Antagonismo', 'Disocialidad', 'Amabilidad baja', 'Kotov 2017; Bach y First 2018']
      ] });
    y = t.y + 30;
    const BW = (W - 120 - 2 * 24) / 3;
    const p1 = F.box('pg', { x: L, y, w: BW, type: 'act', fs: FS, align: 'left', node: 'pid5_lpfs', title: 'Gravedad: criterio A (LPFS) y CIE-11',
      text: 'Nivel 0 sin deterioro = ninguno; 1 algo de deterioro = dificultad de la personalidad; 2 moderado = trastorno leve; 3 grave = moderado; 4 extremo = grave. Umbral diagnóstico: trastorno leve en la CIE-11 o deterioro moderado en el DSM-5 (Bach y First 2018).' });
    const p2 = F.box('pt', { x: L + BW + 24, y, w: BW, type: 'info', fs: FS, align: 'left', node: 'tlp', title: 'Patrón límite y dificultad de la personalidad',
      text: 'La CIE-11 permite añadir un calificador de patrón límite y codificar la dificultad de la personalidad por debajo del umbral (Bach y First 2018). El PID-5 delimitó 25 facetas fiables en cinco dominios (Krueger 2012).' });
    const p3 = F.box('pa', { x: L + 2 * (BW + 24), y, w: BW, type: 'info', fs: FS, align: 'left', node: 'tpobs', title: 'Anancastia: sin espectro HiTOP propio',
      text: 'Foco estrecho en estándares rígidos de perfección y en controlar la conducta propia y ajena (Bach y First 2018). En la tabla de equivalencias se reparte entre perfeccionismo rígido y perseveración (Bach y First 2018). Código de la CIE-11: 6D11.4, calificador que acompaña a 6D10 o QE50.7 (OMS).' });
    eq([p1, p2, p3]);
    y = p1.y + p1.h + 60;

    // ---------- Bloque 3: validez, utilidad y críticas ----------
    y = F.band(y, 'Pruebas de validez y utilidad, y límites que el propio consorcio y sus críticos señalan', { n: 3 }) + 26;
    const VW = (W - 120 - 3 * 24) / 4, vx = i => L + i * (VW + 24);
    const v = [
      F.box('v1', { x: vx(0), y, w: VW, type: 'info', fs: FS, align: 'left', node: 'hitop_tp', title: 'Estructura: metaanálisis',
        text: '35 estudios, 120 596 participantes y 23 diagnósticos DSM: cinco dimensiones transdiagnósticas con buen ajuste (CFI 0,92; RMSEA 0,07; SRMR 0,03) y jerarquía coherente con HiTOP; la mayoría de los diagnósticos cargó > |0,30| en el factor esperado. Recomienda usar rasgos y síntomas en lugar de diagnósticos (Ringwald 2023).' }),
      F.box('v2', { x: vx(1), y, w: VW, type: 'info', fs: FS, align: 'left', node: 'pid5_lpfs', title: 'Fiabilidad frente a las categorías',
        text: 'Estabilidad a dos semanas de 0,88 (psicoticismo) y 0,89 (desapego) frente a 0,44-0,63 en los trastornos de la personalidad paranoide, esquizoide, esquizotípico y evitativo (Kotov 2020); 0,86 a dos semanas en desinhibición y antagonismo del PID-5 frente a kappa test-retest de 0,40 (consumo de alcohol) y 0,21 (antisocial) en los ensayos de campo del DSM-5 (Krueger 2021); kappa interevaluador de 0,28 en depresión mayor y 0,20 en TAG en esos ensayos (Watson 2022).' }),
      F.box('v3', { x: vx(2), y, w: VW, type: 'info', fs: FS, align: 'left', node: 'pleiotropia', title: 'Genética y validadores',
        text: 'Se espera que unos genes actúen en el factor general y otros en espectros, subfactores o síntomas concretos (Waszczuk 2020). Superespectro psicótico heredable en un 73 % (Kotov 2020); correlación genética de 0,80 entre depresión y TAG (Watson 2022). Propuesta de uso clínico: rangos de gravedad de 1,0-1,5 DE (leve), 1,5-2,0 (moderado) y > 2,0 (grave) (Kotov 2021).' }),
      F.box('v4', { x: vx(3), y, w: VW, type: 'info', fs: FS, align: 'left', node: 'p_factor', title: 'Límites y críticas',
        text: 'Incompleto: de 19 clases del DSM-5 recoge 8 completas, 6 en parte y 5 no; somatomorfo y manía, provisionales; validez incierta fuera de los 15-65 años (Kotov 2021). El modelo bifactorial puede generar un factor general artefactual (Kotov 2021). No hay pruebas de que usar HiTOP mejore los resultados clínicos frente al DSM, y la estructura simple factorial no representa bien el espacio de los síntomas (Haeffel 2022).' })
    ];
    eq(v);
    y = v[0].y + v[0].h + 44;

    F.box('lim', { x: L, y, w: W - 120, type: 'lim', align: 'left', fs: 19, title: 'Límites de esta figura',
      text: 'Esquema docente, no instrumento diagnóstico: no sustituye al juicio clínico ni a la evaluación con medidas validadas. HiTOP es un modelo de investigación en desarrollo; sus superespectros son hipotéticos y la ubicación de varias categorías (manía, TOC, trastorno límite, disociación, ansiedad por la salud, síntomas neurológicos funcionales) es provisional o cruzada. Las correspondencias con el DSM-5-TR, el PID-5 y la CIE-11 son aproximadas y proceden de revisiones del propio consorcio y de Bach y First (2018); las cifras y ubicaciones se han cotejado con los textos completos de las revisiones citadas. Varias cajas de los niveles 4 y 5 agrupan síndromes sin subfactor establecido.' });

    F.footer('Fuentes: Kotov 2017 (PMID 28333488); Kotov 2021 (33577350); Conway 2022 (35599839); Kotov 2020 (32394571); Krueger 2021 (34002506); Watson 2022 (35015357); Ringwald 2023 (33988108); Waszczuk 2020 (31804095); Caspi 2014 (25360393); Krueger 2012 (22153017); Bach y First 2018 (30373564); Haeffel 2022 (36299281); DSM-5-TR, Sección III (APA 2022). Esquema docente de apoyo; no sustituye al juicio clínico.');
    return F;
  }
};
