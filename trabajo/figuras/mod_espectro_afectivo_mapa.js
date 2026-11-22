// Modelo: mapa del espectro afectivo unipolar-bipolar (maníaco-depresivo) en un plano geométrico, con banda histórica y curso.
// Complementa (no repite) mod_espectro_bipolar (bloques oficial frente a escuela) y mod_hitop. Inspirado en el plano y la clave epistémica
// del «Atlas clínico-geométrico del espectro afectivo v3.9» (Segovia Vera 2026; nodo mapa_integr).
// Compilar en prueba: node tools/fig.js mod_espectro_afectivo_mapa --dry --png <carpeta>
const TITLE = 'Mapa del espectro afectivo unipolar-bipolar: plano de polaridad y activación, historia de la escisión y la reunificación, y transiciones de curso';
module.exports = {
  key: 'mod_espectro_afectivo_mapa',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Mapa en tres paneles del espectro afectivo unipolar-bipolar (maníaco-depresivo). A) Plano geométrico: el eje horizontal ordena la polaridad (unipolar puro, unipolar recurrente, espectro suave, trastorno bipolar II, trastorno bipolar I) y las tres franjas verticales, la activación y la mixticidad (alta, intermedia, baja). En él se sitúan las categorías oficiales del DSM-5-TR y la CIE-11, los prototipos de Akiskal, la depresión mixta y agitada de Koukopoulos, la cohorte de Zúrich de Angst, el trastorno del espectro bipolar de Ghaemi, las psicosis fásicas de Leonhard (puras monopolares y enfermedad maníaco-depresiva), los temperamentos afectivos medidos con la TEMPS-A y, fuera del eje, las psicosis cicloides. B) Banda histórica: de la locura maníaco-depresiva unitaria de Kraepelin a la escisión unipolar-bipolar (Kleist y Leonhard, Angst, Perris, Winokur), la reunificación en espectro (Akiskal, Angst, Ghaemi, Koukopoulos) y la nosología vigente. C) Curso y transiciones: conversión de la depresión a trastorno bipolar, viraje asociado a antidepresivos, estados mixtos y ciclación rápida. Cada elemento lleva la clave epistémica del atlas de Segovia Vera: F criterio formal (DSM-5-TR, CIE-11), E hallazgo empírico, I interpretación, H hipótesis o propuesta de escuela, G geometría editorial. La posición de una caja en el plano es geometría editorial (G): no expresa distancias, gravedad, frecuencia ni pronóstico, y una misma persona puede ocupar distintas zonas a lo largo de su vida. Véanse también las figuras del espectro bipolar (categorías oficiales frente a propuestas de escuela), de las psicosis cicloides de Leonhard y del modelo HiTOP. «[fuente no localizada]» y «[fuente oficial no localizada]» señalan lo que no se ha podido cotejar. Esquema docente: no sustituye a la evaluación longitudinal ni al juicio clínico.',
    refs: [
      'Segovia Vera FJ (2026). Atlas clínico-geométrico del espectro afectivo: nosología, fenomenología, curso, incertidumbre. Edición revisada y ampliada v3.9, 21-11-2026 (documento propio, 168 páginas; pp. 3 y 8: gramática diagnóstica, plano de dimensiones y clave F/E/I/H/G) [obra del autor del atlas]',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5.ª ed., texto revisado (DSM-5-TR). Washington, DC: APA Publishing. Trastornos bipolares y relacionados; trastornos depresivos; especificadores «con características mixtas» y «con ciclos rápidos» [texto original no cotejado en esta figura]',
      'Organización Mundial de la Salud (2025). CIE-11 para estadísticas de mortalidad y morbilidad (CIE-11 MMS), versión 2025-01 (icd.who.int): bloque de trastornos del estado de ánimo; 6A60 (incluidos 6A60.9 y 6A60.A, episodio actual mixto), 6A61, 6A62 y 6A80.5 [6A70, 6A71 y 6A72: fuente oficial no localizada en esta figura]',
      'Angst J, Gamma A, Benazzi F, Ajdacic V, Eich D & Rössler W (2003). Toward a re-definition of subthreshold bipolarity: epidemiology and proposed criteria for bipolar-II, minor bipolar disorders and hypomania. J Affect Disord 73:133-146 · PMID 12507746',
      'Akiskal HS & Pinto O (1999). The evolving bipolar spectrum. Prototypes I, II, III, and IV. Psychiatr Clin North Am 22:517-534 · PMID 10550853',
      'Akiskal HS (2007). The emergence of the bipolar spectrum: validation along clinical-epidemiologic and familial-genetic lines. Psychopharmacol Bull 40:99-115 · PMID 18227781',
      'Akiskal HS, Djenderedjian AM, Rosenthal RH & Khani MK (1977). Cyclothymic disorder: validating criteria for inclusion in the bipolar affective group. Am J Psychiatry 134:1227-1233 · PMID 910973',
      'Akiskal HS et al. (2005). TEMPS-A: validation of a short version of a self-rated instrument designed to measure variations in temperament. J Affect Disord 85:45-52 · PMID 15780675',
      'Solmi M et al. (2016). A comparative meta-analysis of TEMPS scores across mood disorder patients, their first-degree relatives, healthy controls, and other psychiatric disorders. J Affect Disord 196:32-46 · PMID 26897455',
      'Cassano GB, Akiskal HS, Savino M, Musetti L & Perugi G (1992). Proposed subtypes of bipolar II and related disorders: with hypomanic episodes (or cyclothymia) and with hyperthymic temperament. J Affect Disord 26:127-140 · PMID 1447430',
      'Camacho A & Akiskal HS (2005). Proposal for a bipolar-stimulant spectrum: temperament, diagnostic validation and therapeutic outcomes with mood stabilizers. J Affect Disord 85:217-230 · PMID 15780692',
      'Perris C (1966). A study of bipolar (manic-depressive) and unipolar recurrent depressive psychoses. I. Genetic investigation. Acta Psychiatr Scand Suppl 194:15-44 · PMID 5229227',
      'Angst J, Felder W, Frey R & Stassen HH (1978). The course of affective disorders. I. Change of diagnosis of monopolar, unipolar, and bipolar illness. Arch Psychiatr Nervenkr 226:57-64 · PMID 708227',
      'Angst J & Marneros A (2001). Bipolarity from ancient to modern times: conception, birth and rebirth. J Affect Disord 67:3-19 · PMID 11869749',
      'Angst J & Grobler C (2015). Unipolar mania: a necessary diagnostic concept. Eur Arch Psychiatry Clin Neurosci 265:273-280 · PMID 25631618',
      'Leonhard K (1987). [Differential diagnosis and different etiologies of monopolar and bipolar phasic psychoses] (artículo en alemán con resumen en inglés). Psychiatr Neurol Med Psychol (Leipz) 39:524-533 · PMID 3432442',
      'Leonhard K (1957). Die Aufteilung der endogenen Psychosen. Berlín: Akademie-Verlag [no verificada]',
      'Kraepelin E (1913). Psychiatrie. Ein Lehrbuch für Studierende und Ärzte, 8.ª ed., vol. III. Leipzig: Barth [no verificada]',
      'Salvatore P et al. (2002). Weygandt\'s On the Mixed States of Manic-Depressive Insanity: a translation and commentary on its significance in the evolution of the concept of bipolar disorder. Harv Rev Psychiatry 10:255-275 · PMID 12202452',
      'Koukopoulos A & Koukopoulos A (1999). Agitated depression as a mixed state and the problem of melancholia. Psychiatr Clin North Am 22:547-564 · PMID 10550855',
      'Koukopoulos A & Ghaemi SN (2009). The primacy of mania: a reconsideration of mood disorders. Eur Psychiatry 24:125-134 · PMID 18789854',
      'Koukopoulos A, Sani G & Ghaemi SN (2013). Mixed features of depression: why DSM-5 is wrong (and so was DSM-IV). Br J Psychiatry 203:3-5 · PMID 23818531',
      'Ghaemi SN, Ko JY & Goodwin FK (2001). The bipolar spectrum and the antidepressant view of the world. J Psychiatr Pract 7:287-297 · PMID 15990539',
      'Ghaemi SN, Ko JY & Goodwin FK (2002). "Cade\'s disease" and beyond: misdiagnosis, antidepressant use, and a proposed definition for bipolar spectrum disorder. Can J Psychiatry 47:125-134 · PMID 11926074',
      'Fiedorowicz JG et al. (2011). Subthreshold hypomanic symptoms in progression from unipolar major depression to bipolar disorder. Am J Psychiatry 168:40-48 · PMID 21078709',
      'Tondo L, Vázquez G & Baldessarini RJ (2010). Mania associated with antidepressant treatment: comprehensive meta-analytic review. Acta Psychiatr Scand 121:404-414 · PMID 19958306',
      'Pacchiarotti I et al. (2013). The International Society for Bipolar Disorders (ISBD) task force report on antidepressant use in bipolar disorders. Am J Psychiatry 170:1249-1262 · PMID 24030475',
      'Kupka RW, Luckenbaugh DA, Post RM, Leverich GS & Nolen WA (2003). Rapid and non-rapid cycling bipolar disorder: a meta-analysis of clinical studies. J Clin Psychiatry 64:1483-1494 · PMID 14728111',
      'Wehr TA & Goodwin FK (1979). Rapid cycling in manic-depressives induced by tricyclic antidepressants. Arch Gen Psychiatry 36:555-559 · PMID 435015',
      'Perugi G et al. (2015). Mixed features in patients with a major depressive episode: the BRIDGE-II-MIX study. J Clin Psychiatry 76:e351-e358 · PMID 25830457',
      'Jabs BE, Pfuhlmann B, Bartsch AJ, Cetkovich-Bakmas MG & Stöber G (2002). Cycloid psychoses: from clinical concepts to biological foundations. J Neural Transm 109:907-919 · PMID 12111477'
    ],
    nodes: ['mapa_integr', 'akiskal_hit', 'koukopoulos_hit', 'angst_hit', 'kraepelin_1913', 'locura_md', 'leonhard_hit', 'neele_fasicas', 'munip', 'wkl4', 'wkl5', 'wkl6', 'wkl7', 'wkl8', 'wkl9', 'wkl10', 'wkl11', 'wkl12', 'wkl14', 'wkl15', 'wkl16', 'perris', 'drec', 'mixtos_krp', 'bp3b', 'poldom', 'cul', 'sens_ad', 'bpv', 'dsm2', 'tempcicl', 'tempht']
  },
  draw(Fig) {
    const W = 2300, X = 60, IW = W - 2 * X, FS = 17;
    const F = new Fig({ key: 'mod_espectro_afectivo_mapa', title: TITLE, w: W,
      desc: 'Panel A: plano con la polaridad en horizontal (de unipolar puro a trastorno bipolar I) y tres franjas de activación y mixticidad (alta, intermedia, baja), donde se colocan categorías oficiales, propuestas de escuela, datos empíricos y temperamentos, con una clave F, E, I, H, G en cada caja y las psicosis cicloides fuera del eje. Panel B: secuencia histórica de Kraepelin a Leonhard, Angst y Perris, Akiskal, Ghaemi y Koukopoulos, y el DSM-5-TR y la CIE-11. Panel C: transiciones de curso entre depresión, estado mixto e hipomanía o manía, con datos de conversión, viraje con antidepresivos, mixticidad y ciclación rápida.' });
    const bot = (...bs) => Math.max(...bs.map(b => b.y + b.h));
    const eqH = (...bs) => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };
    const pt = (x, y) => ({ x, y, w: 0, h: 0 });

    // ---------- Clave de lectura ----------
    let y = 104;
    const k1 = F.box('clave', { x: X, y, w: IW * 0.58, type: 'info', fs: 17, align: 'left', title: 'Clave epistémica de cada caja (Segovia Vera 2026)',
      text: 'F · criterio formal (DSM-5-TR, CIE-11) · E · hallazgo empírico con fuente\nI · interpretación clínica · H · hipótesis o propuesta de escuela\nG · geometría editorial no calibrada. La letra indica el tipo de respaldo, no la validez ni la utilidad clínica.' });
    const k2 = F.box('aviso', { x: X + IW * 0.58 + 30, y, w: IW * 0.42 - 30, type: 'warn', fs: 17, title: 'G · Las posiciones no son distancias',
      text: 'Ni gravedad, ni frecuencia, ni pronóstico. El criterio diagnóstico se lee en el texto de cada caja, no en su lugar; una misma persona puede recorrer varias zonas a lo largo de su vida.' });
    eqH(k1, k2);
    y = bot(k1) + 40;

    // ---------- Panel A: plano ----------
    y = F.band(y, 'Plano de polaridad (horizontal) y activación-mixticidad (vertical) · G', { n: 'A' }) + 20;
    const AX = 112, GX = 128, GW = 2240 - GX, PX = 146, CW = (2236 - PX) / 5, BW = CW - 22;
    const cx = c => PX + c * CW + 11;
    const heads = ['Unipolar puro', 'Unipolar recurrente', 'Espectro suave', 'Trastorno bipolar II', 'Trastorno bipolar I'];
    const hb = heads.map((h, i) => F.box('h' + i, { x: cx(i), y, w: BW, type: 'head', fs: 18, title: (i ? '→ ' : '') + h }));
    y = bot(hb[0]) + 16;
    const yTop = y;
    // Franja: coloca cajas en columnas apiladas. it: {c, span, ...box}
    const band = (label, items, fill) => {
      const y0 = y, col = [0, 1, 2, 3, 4].map(() => y0 + 44);
      items.forEach(it => {
        const s = it.span || 1, cs = []; for (let k = it.c; k < it.c + s; k++) cs.push(k);
        const yy = Math.max(...cs.map(k => col[k]));
        const b = F.box(it.id, Object.assign({ x: cx(it.c), y: yy, w: BW + (s - 1) * CW, fs: FS }, it));
        cs.forEach(k => { col[k] = yy + b.h + 16; });
      });
      const h = Math.max(...col) - y0 + 6;
      F.group({ x: GX, y: y0, w: GW, h, label, fill });
      y = y0 + h + 14;
      return [y0, y0 + h];
    };
    const hi = band('Activación o mixticidad alta: manía, hipomanía, mezcla de polos', [
      { id: 'a_mix', c: 1, span: 4, type: 'dx', node: 'mxto', title: 'F · Especificador «con características mixtas» (DSM-5-TR)', text: '≥3 síntomas no solapados del polo opuesto; se aplica a episodios depresivos (también en el trastorno depresivo mayor), hipomaníacos y maníacos (APA 2022). La CIE-11 conserva el episodio mixto en el TB I (6A60.9, 6A60.A; OMS 2025). G · La caja atraviesa cuatro columnas porque el especificador cruza la frontera unipolar-bipolar.' },
      { id: 'a_wkl1', c: 0, type: 'info', node: 'wkl1', title: 'H · Manía pura y euforias puras (Leonhard)', text: 'Formas monopolares con carga familiar muy baja frente a la enfermedad maníaco-depresiva (Leonhard 1987). Correlato actual discutido: manía unipolar, 1,7-1,8 % en dos estudios epidemiológicos (Angst y Grobler 2015).' },
      { id: 'a_dmko', c: 1, type: 'info', node: 'dmko', title: 'H · Depresión mixta (Koukopoulos)', text: 'Depresión mayor con ≥2 de: agitación motora, agitación psíquica o tensión interna intensa, pensamientos acelerados o apiñados (Koukopoulos 1999).' },
      { id: 'a_bp3b', c: 2, type: 'info', node: 'bp3b', title: 'E · Hipomanía sin duración mínima (Angst)', text: 'Incluir la hiperactividad en el criterio principal y no exigir duración si hay 3 de 7 síntomas y cambio funcional (Angst 2003).' },
      { id: 'a_hip', c: 3, type: 'dx', node: 'ep_hipom', title: 'F · Episodio hipomaníaco', text: '≥4 días; cambio observable sin deterioro marcado ni psicosis (APA 2022).' },
      { id: 'a_man', c: 4, type: 'dx', node: 'ep_mania', title: 'F · Episodio maníaco', text: '≥7 días, o cualquier duración si requiere hospitalización (APA 2022).' },
      { id: 'a_agdep', c: 1, type: 'info', node: 'agdep', title: 'H · Depresión agitada', text: 'Estado mixto para Koukopoulos; el sistema DSM ya no la considera mixta (Koukopoulos 1999).' }
    ], '#fbf4f1');
    const mid = band('Activación intermedia: rasgos y episodios atenuados, propuestas de frontera', [
      { id: 'a_wkl3', c: 0, type: 'info', node: 'wkl3', title: 'H · Depresiones puras (Leonhard)', text: 'Agitada, hipocondríaca, autotorturante, suspicaz y apática, monopolares [Leonhard 1957, no verificada]; carga familiar muy baja (Leonhard 1987).' },
      { id: 'a_bp4', c: 1, type: 'info', node: 'bp4', title: 'H · BP IV: depresión hipertímica', text: '10,3 % de 687 depresiones mayores primarias: próximas al TB en sexo e historia familiar y al unipolar en curso (Cassano 1992).' },
      { id: 'a_angst', c: 2, type: 'act', node: 'bipsft', title: 'E · Espectro suave: cohorte de Zúrich', text: 'Cohorte comunitaria prospectiva de 20 años: TB II amplio 10,9 % (depresión mayor amplia 11,4 %), bipolaridad menor 9,4 %, hipomanía pura 3,3 %; espectro suave total 23,7 %. Los autores piden confirmarlo en cohortes mayores (Angst 2003).' },
      { id: 'a_tb2', c: 3, type: 'dx', node: 'tb2', title: 'F · Trastorno bipolar II', text: '≥1 episodio hipomaníaco y ≥1 depresivo mayor, nunca manía (APA 2022). CIE-11: 6A61 (OMS 2025).' },
      { id: 'a_tb1', c: 4, type: 'dx', node: 'tb1', title: 'F · Trastorno bipolar I', text: '≥1 episodio maníaco; la depresión mayor es frecuente, no necesaria (APA 2022). CIE-11: 6A60 (OMS 2025).' },
      { id: 'a_bsd', c: 1, type: 'info', node: 'ghaemi_bsd', title: 'H · Trastorno del espectro bipolar (Ghaemi)', text: 'Formas que no son I ni II; más peso a la historia familiar y a los síntomas maníacos inducidos por antidepresivos (Ghaemi 2001; Ghaemi 2002).' },
      { id: 'a_bp3', c: 2, type: 'info', node: 'bp3', title: 'H · BP III', text: 'Hipomanía con antidepresivos sobre diátesis bipolar familiar (Akiskal 2007).' },
      { id: 'a_bp2h', c: 3, type: 'info', node: 'bp2h', title: 'H · BP II½: depresiones ciclotímicas', text: 'Variante prevalente del patrón bipolar II (Akiskal 2007).' },
      { id: 'a_wkl13', c: 4, type: 'info', node: 'wkl13', title: 'H · Enfermedad maníaco-depresiva (Leonhard)', text: 'Forma bipolar con carga hereditaria alta (Leonhard 1987).' },
      { id: 'a_bp3h', c: 2, type: 'info', node: 'bp3h', title: 'H · BP III½', text: 'Rasgos bipolares subumbrales complicados con estimulantes; serie abierta de 10 casos (Camacho y Akiskal 2005).' },
      { id: 'a_bp1h', c: 3, type: 'info', node: 'bp1h', title: 'H · BP I½', text: 'Depresión con hipomanías prolongadas sin manía [texto completo de Akiskal y Pinto 1999 no cotejado].' }
    ], '#f7f6f1');
    const lo = band('Activación baja: depresión no mixta, inhibición, cronicidad', [
      { id: 'a_unico', c: 0, type: 'dx', node: 'ep_depmay', title: 'F · Episodio depresivo único', text: 'Trastorno depresivo mayor, episodio único (APA 2022). CIE-11 6A70 [fuente oficial no localizada].' },
      { id: 'a_rec', c: 1, type: 'dx', node: 'ddm', title: 'F · Trastorno depresivo recurrente', text: '≥2 episodios sin hipomanía ni manía (APA 2022). CIE-11 6A71 [fuente oficial no localizada].' },
      { id: 'a_cicl', c: 2, type: 'dx', node: 'cicl', title: 'F · Ciclotimia', text: '≥2 años de síntomas hipomaníacos y depresivos sin criterios de episodio (APA 2022). CIE-11: 6A62 (OMS 2025).' },
      { id: 'a_depbip', c: 3, span: 2, type: 'dx', node: 'dep_bip_tx', title: 'F/I · Episodio depresivo en el TB I o II', text: 'F · Mismos criterios de episodio depresivo mayor (APA 2022). I · En el corte transversal no se distingue de la depresión unipolar: la polaridad la define la historia de hipomanía o manía.' },
      { id: 'a_ddp', c: 0, type: 'dx', node: 'ddp', title: 'F · Distimia (depresivo persistente)', text: 'Ánimo deprimido ≥2 años (APA 2022). CIE-11 6A72 [fuente oficial no localizada].' },
      { id: 'a_wkl2', c: 0, type: 'info', node: 'wkl2', title: 'H · Melancolía pura (Leonhard)', text: 'Monopolar, con inhibición del ánimo, el pensamiento y la motilidad [Leonhard 1957, no verificada].' }
    ], '#f1f4f7');
    const yBot = lo[1];
    // ejes
    F.arrow(pt(AX, yBot + 4), pt(AX, yTop - 6), { from: 'r', to: 'r', via: [] });
    F.text(60, yBot + 46, 'Activación-mixticidad: ↑ hacia arriba · Polaridad: de unipolar puro a bipolar I →', { fs: 19, bold: true, w: 1100 });
    F.arrow(pt(GX, yBot + 20), pt(2240, yBot + 20), { from: 'r', to: 'l' });
    y = yBot + 76;

    // temperamentos
    const T1 = F.box('t_head', { x: X, y, w: 520, type: 'info', fs: 17, align: 'left', node: 'persona', title: 'E/H · Temperamentos afectivos (TEMPS-A)',
      text: 'E · Cinco factores validados en 510 personas: ciclotímico, depresivo, irritable, hipertímico y ansioso (Akiskal 2005). G · Su colocación bajo las columnas es editorial.' });
    const TW = (IW - 520 - 4 * 24) / 4, tx = i => X + 520 + 24 + i * (TW + 24);
    const T2 = F.box('t_dep', { x: tx(0), y, w: TW, type: 'mec', fs: 16, title: 'Depresivo', text: 'E · No difiere entre TB y depresión mayor; más bajo en controles (Solmi 2016).' });
    const T3 = F.box('t_ht', { x: tx(1), y, w: TW, type: 'mec', fs: 16, node: 'tempht', title: 'Hipertímico', text: 'E · Gradiente depresión mayor < TB < controles (Solmi 2016). H · Base del BP IV.' });
    const T4 = F.box('t_cic', { x: tx(2), y, w: TW, type: 'mec', fs: 16, node: 'tempcicl', title: 'Ciclotímico', text: 'E · Controles < depresión mayor < TB (Solmi 2016). H · Base del BP II½.' });
    const T5 = F.box('t_irr', { x: tx(3), y, w: TW, type: 'mec', fs: 16, title: 'Irritable', text: 'E · Controles < depresión mayor < TB (Solmi 2016).' });
    eqH(T1, T2, T3, T4, T5);
    y = bot(T1) + 24;

    // fuera del plano
    const OW = (IW - 2 * 30) / 3;
    const o1 = F.box('o_cicl', { x: X, y, w: OW, type: 'dx', fs: 17, node: 'pcicloid', title: 'Fuera del eje · Psicosis cicloides (Leonhard)',
      text: 'E/H · Fenotipos delimitados por Leonhard que resolvían el dilema de las «psicosis atípicas» de Kraepelin; aún sin reconocimiento general (Jabs 2002). No ocupan un lugar en la línea unipolar-bipolar: son bipolares dentro del episodio pero no afectivas puras [fuente no localizada para esta última precisión].' });
    const o2 = F.box('o_fuera', { x: X + OW + 30, y, w: OW, type: 'info', fs: 17, align: 'left', title: 'G · Lo que el plano no sitúa',
      text: 'Psicosis, persistencia, consumo de sustancias y enfermedad médica requieren historia y criterios propios; las variables pueden cambiar de forma parcialmente independiente (Segovia Vera 2026, p. 8).' });
    const o3 = F.box('o_atlas', { x: X + 2 * (OW + 30), y, w: OW, type: 'info', fs: 17, align: 'left', node: 'mapa_integr', title: 'Obra de referencia del estilo',
      text: 'Atlas clínico-geométrico del espectro afectivo v3.9: plano de dimensiones «no de gravedad» y clave F/E/I/H/G (Segovia Vera 2026, pp. 3 y 8). Modelo heurístico sin calibración individual.' });
    eqH(o1, o2, o3);
    y = bot(o1) + 46;

    // ---------- Panel B: historia ----------
    y = F.band(y, 'Banda histórica: unidad kraepeliniana → escisión unipolar-bipolar → reunificación en espectro → nosología vigente', { n: 'B' }) + 26;
    const HG = 64, HW = (IW - 3 * HG) / 4, hx = i => X + i * (HW + HG);
    const b1 = F.box('b_krp', { x: hx(0), y, w: HW, type: 'dx', fs: 17, node: 'kraepelin_1913', title: 'E · Kraepelin 1899 y 1913: locura maníaco-depresiva unitaria',
      text: 'Reúne todos los trastornos afectivos en una sola enfermedad (Angst y Marneros 2001); la idea de Weygandt de manía y depresión simultáneas pudo reforzar esa unidad (Salvatore 2002).' });
    const b2 = F.box('b_leo', { x: hx(1), y, w: HW, type: 'dx', fs: 17, node: 'leonhard_hit', title: 'E · Kleist 1947 y Leonhard 1957: formas monopolares',
      text: '«Depresión monopolar» es término de Kleist y Leonhard (Angst 1978). Leonhard separa formas puras y enfermedad maníaco-depresiva por curso, síntomas y carga familiar (Leonhard 1987).' });
    const b3 = F.box('b_ang', { x: hx(2), y, w: HW, type: 'dx', fs: 17, node: 'angst_hit', title: 'E · Angst y Perris 1966, Winokur 1969: escisión',
      text: 'Diferencias clínicas, familiares y de curso validan, de forma independiente, la distinción unipolar-bipolar (Angst y Marneros 2001; Perris 1966).' });
    const b4 = F.box('b_zur', { x: hx(3), y, w: HW, type: 'dx', fs: 17, node: 'conv_bip', title: 'E · Zúrich 1959-1975: la frontera se mueve',
      text: '254 psicosis afectivas: 37,4 % bipolares, 62,6 % monopolares; el 10 % de las monopolares cambió a bipolar; corregidos errores, razón ≈1:1 (Angst 1978).' });
    eqH(b1, b2, b3, b4);
    F.arrow(b1, b2, { from: 'r', to: 'l' }); F.arrow(b2, b3, { from: 'r', to: 'l' }); F.arrow(b3, b4, { from: 'r', to: 'l' });
    y = bot(b1) + 70;
    const b5 = F.box('b_aki', { x: hx(0), y, w: HW, type: 'dx', fs: 17, node: 'akiskal_hit', title: 'H · Akiskal 1977-1999: reunificación en espectro',
      text: 'Ciclotimia en el grupo bipolar (Akiskal 1977); prototipos I-IV y retorno parcial al concepto amplio de Kraepelin (Akiskal y Pinto 1999).' });
    const b6 = F.box('b_a03', { x: hx(1), y, w: HW, type: 'dx', fs: 17, node: 'epi_bip', title: 'E/H · Angst 2003: bipolaridad suave',
      text: 'Propone revisar los criterios de hipomanía y un concepto amplio de bipolaridad suave entre el TB y la normalidad (Angst 2003).' });
    const b7 = F.box('b_gha', { x: hx(2), y, w: HW, type: 'dx', fs: 17, node: 'koukopoulos_hit', title: 'H · Ghaemi 2001 y Koukopoulos y Ghaemi 2009',
      text: 'Trastorno del espectro bipolar (Ghaemi 2001). «Primacía de la manía»: la depresión como consecuencia de la excitación maníaca, hipótesis contrastable (Koukopoulos y Ghaemi 2009).' });
    const b8 = F.box('b_now', { x: hx(3), y, w: HW, type: 'dx', fs: 17, node: 'locura_md', title: 'F · DSM-5-TR (2022) y CIE-11',
      text: 'DSM-5-TR: capítulos separados de trastornos bipolares y depresivos, con el especificador mixto como puente (APA 2022). CIE-11: bloque común de trastornos del estado de ánimo (OMS 2025).' });
    eqH(b5, b6, b7, b8);
    F.arrow(b5, b6, { from: 'r', to: 'l' }); F.arrow(b6, b7, { from: 'r', to: 'l' }); F.arrow(b7, b8, { from: 'r', to: 'l' });
    const ym = bot(b1) + 35;
    F.arrow(b4, b5, { from: 'b', to: 't', via: [[b4.x + b4.w / 2, ym], [b5.x + b5.w / 2, ym]], label: 'reunificación (1977-2009)', lx: b4.x - 40, ly: ym - 8 });
    y = bot(b5) + 46;

    // ---------- Panel C: curso ----------
    y = F.band(y, 'Curso y transiciones: lo que mueve a una persona por el plano', { n: 'C' }) + 70;
    const SW = 520, SG = (IW - 3 * SW) / 2;
    const s1 = F.box('s_dep', { x: X, y, w: SW, type: 'dx', fs: 18, node: 'ep_depmay', title: 'Episodio depresivo', text: 'Diagnóstico unipolar provisional mientras no haya hipomanía ni manía.' });
    const s2 = F.box('s_mix', { x: X + SW + SG, y, w: SW, type: 'mec', fs: 18, node: 'emsu', title: 'Estado mixto', text: 'Síntomas de ambos polos en el mismo episodio.' });
    const s3 = F.box('s_man', { x: X + 2 * (SW + SG), y, w: SW, type: 'dx', fs: 18, node: 'tb_induc', title: 'Hipomanía o manía', text: 'Espontánea o asociada a fármacos o sustancias.' });
    eqH(s1, s2, s3);
    F.arrow(s1, s2, { from: 'r', to: 'l', label: 'mezcla', lx: s1.x + s1.w + 20, ly: s1.y + s1.h / 2 - 10 });
    F.arrow(s2, s3, { from: 'r', to: 'l', label: 'mezcla', lx: s2.x + s2.w + 20, ly: s2.y + s2.h / 2 - 10 });
    const yv = s1.y - 30;
    F.arrow(s1, s3, { from: 't', to: 't', fa: 0.3, fb: 0.7, via: [[s1.x + s1.w * 0.3, yv], [s3.x + s3.w * 0.7, yv]], label: 'conversión espontánea o viraje con antidepresivos', lx: s2.x + 20, ly: yv - 8 });
    const yb = bot(s1) + 34;
    F.arrow(s3, s1, { from: 'b', to: 'b', fa: 0.7, fb: 0.3, dash: true, via: [[s3.x + s3.w * 0.7, yb], [s1.x + s1.w * 0.3, yb]], label: 'ciclación: ≥4 episodios en 12 meses = ciclos rápidos', lx: s2.x - 40, ly: yb - 8 });
    y = yb + 34;
    const DW = (IW - 3 * 26) / 4, dx = i => X + i * (DW + 26);
    const d1 = F.box('c_conv', { x: dx(0), y, w: DW, type: 'info', fs: 17, align: 'left', node: 'conv_bip', title: 'E · Conversión',
      text: '550 personas con depresión mayor seguidas una media de 17,5 años: 19,6 % presentó hipomanía o manía (12,2 % a TB II, 7,5 % a TB I); predijeron el número de síntomas hipomaníacos subumbrales, la psicosis y la edad de inicio, aunque la mayoría de quienes convirtieron no los tenía (Fiedorowicz 2011).' });
    const d2 = F.box('c_viraje', { x: dx(1), y, w: DW, type: 'info', fs: 17, align: 'left', node: 'bp3', title: 'E/F · Viraje con antidepresivos',
      text: 'E · Metaanálisis (TB y depresión mayor): manía con y sin antidepresivos 12,5 % y 7,5 %; más con tricíclicos que con ISRS (Tondo 2010). F · Si el episodio persiste con criterios completos más allá del efecto fisiológico del fármaco, cuenta como episodio (APA 2022).' });
    const d3 = F.box('c_mix', { x: dx(2), y, w: DW, type: 'info', fs: 17, align: 'left', node: 'dsm2', title: 'E/H · Mixticidad en la depresión',
      text: 'E · 2811 episodios depresivos mayores: 7,5 % con el especificador DSM-5 y 29,1 % con criterios de investigación de ≥3 síntomas (hipo)maníacos (Perugi 2015). H · Koukopoulos considera erróneos los criterios del DSM-5 (Koukopoulos 2013).' });
    const d4 = F.box('c_crap', { x: dx(3), y, w: DW, type: 'info', fs: 17, align: 'left', node: 'crapid', title: 'F/E · Ciclación rápida',
      text: 'F · Especificador DSM-5-TR (APA 2022); CIE-11 6A80.5 (OMS 2025). E · 16,3 % de 2054 personas con TB en 8 estudios; algo más en mujeres y TB II; en el 46 % la precedieron antidepresivos, sin datos sistemáticos de causalidad (Kupka 2003). Serie de 5 casos con tricíclicos (Wehr y Goodwin 1979).' });
    eqH(d1, d2, d3, d4);
    y = bot(d1) + 24;
    const w1 = F.box('c_warn', { x: X, y, w: (IW - 30) / 2, type: 'warn', fs: 17, node: 'riad', title: 'Seguridad (consenso ISBD)',
      text: 'Preocupa el viraje a hipomanía, manía o estado mixto; ISRS y bupropión podrían virar menos que tricíclicos, tetracíclicos e IRSN; en el TB I, antidepresivos solo como adyuvantes de un estabilizador (Pacchiarotti 2013).' });
    const w2 = F.box('c_long', { x: X + (IW - 30) / 2 + 30, y, w: (IW - 30) / 2, type: 'act', fs: 17, node: 'ind_bipdep', title: 'I · Lectura longitudinal',
      text: 'El lugar en el plano es provisional: revisar el diagnóstico con cada episodio y con informantes, sobre todo tras varios episodios depresivos (Angst 1978; Fiedorowicz 2011).' });
    eqH(w1, w2);
    y = bot(w1) + 40;

    F.box('lim', { x: X, y, w: IW, type: 'lim', fs: 17, align: 'left', title: 'Límites de la figura',
      text: 'Esquema docente de apoyo al razonamiento: no es un algoritmo diagnóstico ni terapéutico y no sustituye a la evaluación longitudinal ni al juicio clínico. La geometría (columnas, franjas, tamaño y vecindad de las cajas) es editorial (G): no mide distancias, gravedad, frecuencia ni pronóstico, ni implica que las categorías sean puntos de un continuo demostrado. Solo las cajas F son criterios oficiales; los prototipos de Akiskal, la depresión mixta de Koukopoulos, el trastorno del espectro bipolar de Ghaemi y las formas de Leonhard son propuestas de escuela, y etiquetar con ellas tiene consecuencias terapéuticas. Las cifras proceden de cohortes, series o metaanálisis concretos y no son extrapolables sin más. No se han cotejado en su original el texto del DSM-5-TR, las obras de Kraepelin y Leonhard ni el texto completo de Akiskal y Pinto (1999). No se indican fármacos ni dosis: el tratamiento sigue las guías (CANMAT/ISBD, NICE, BAP) y las fichas técnicas vigentes.' });
    F.footer('Fuentes principales: Segovia Vera 2026 (atlas clínico-geométrico v3.9); DSM-5-TR (APA 2022); CIE-11 (OMS 2025); Angst 1978 y 2003; Angst y Marneros 2001; Angst y Grobler 2015; Perris 1966; Leonhard 1987; Akiskal 1977, 2005 y 2007; Akiskal y Pinto 1999; Cassano 1992; Camacho y Akiskal 2005; Solmi 2016; Koukopoulos 1999 y 2013; Koukopoulos y Ghaemi 2009; Ghaemi 2001 y 2002; Salvatore 2002; Fiedorowicz 2011; Tondo 2010; Perugi 2015; Kupka 2003; Wehr y Goodwin 1979; Pacchiarotti 2013; Jabs 2002. Referencias completas en la ficha de la figura. Esquema docente: no sustituye a la valoración clínica individual.');
    return F;
  }
};
