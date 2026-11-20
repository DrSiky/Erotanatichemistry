// Modelo: espectro bipolar. De las categorías oficiales (DSM-5-TR, CIE-11) a las propuestas de escuela (Akiskal, Koukopoulos, Ghaemi).
// Compilar en prueba: node tools/fig.js mod_espectro_bipolar --dry --png <carpeta>
const TITLE = 'Espectro bipolar: categorías oficiales, prototipos de Akiskal, estados mixtos y propuesta de Ghaemi';
module.exports = {
  key: 'mod_espectro_bipolar',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cuatro bloques que separa lo que es categoría oficial de lo que es propuesta de escuela. 1) Categorías del DSM-5-TR y la CIE-11 (trastorno bipolar I y II, ciclotimia y otro trastorno bipolar especificado) y los episodios que las definen. 2) Prototipos del espectro de Akiskal (I a VI, con las formas fraccionarias I½, II½ y III½), con su traducción a la nosología oficial y el tipo de respaldo. 3) Estados mixtos: de Kraepelin y Weygandt a la depresión mixta de Koukopoulos y al especificador «con características mixtas» del DSM-5. 4) Trastorno del espectro bipolar de Ghaemi, Ko y Goodwin, datos epidemiológicos de amplitud del espectro y críticas por sobrediagnóstico. Los símbolos ●●●, ●●○ y ●○○ indican el tipo de documento que respalda cada entidad (categoría oficial; propuesta con estudios multicéntricos o epidemiológicos; propuesta apoyada en series pequeñas u opinión de escuela), no su validez ni su utilidad clínica. «[fuente no localizada]» y «[fuente oficial no localizada]» señalan lo que no se ha podido cotejar. Esquema docente: no sustituye a la evaluación longitudinal ni al juicio clínico.',
    refs: [
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5.ª ed., texto revisado (DSM-5-TR). Washington, DC: APA Publishing. Trastornos bipolares y relacionados; especificador «con características mixtas» [texto original no cotejado en esta figura]',
      'Organización Mundial de la Salud (2024). CIE-11 para estadísticas de mortalidad y morbilidad (CIE-11 MMS), versión 2024-01: 6A60, 6A61, 6A62 y 6A6Y, según las fichas del atlas [fuente oficial no localizada en esta revisión]',
      'Akiskal HS & Pinto O (1999). The evolving bipolar spectrum. Prototypes I, II, III, and IV. Psychiatr Clin North Am 22:517-534 · PMID 10550853',
      'Akiskal HS (2007). The emergence of the bipolar spectrum: validation along clinical-epidemiologic and familial-genetic lines. Psychopharmacol Bull 40:99-115 · PMID 18227781',
      'Akiskal HS, Djenderedjian AM, Rosenthal RH & Khani MK (1977). Cyclothymic disorder: validating criteria for inclusion in the bipolar affective group. Am J Psychiatry 134:1227-1233 · PMID 910973',
      'Cassano GB, Akiskal HS, Savino M, Musetti L & Perugi G (1992). Proposed subtypes of bipolar II and related disorders: with hypomanic episodes (or cyclothymia) and with hyperthymic temperament. J Affect Disord 26:127-140 · PMID 1447430',
      'Camacho A & Akiskal HS (2005). Proposal for a bipolar-stimulant spectrum: temperament, diagnostic validation and therapeutic outcomes with mood stabilizers. J Affect Disord 85:217-230 · PMID 15780692',
      'Ng B et al. (2008). A case series on the hypothesized connection between dementia and bipolar spectrum disorders: bipolar type VI? J Affect Disord 107:307-315 · PMID 17889374',
      'Tondo L, Vázquez G & Baldessarini RJ (2010). Mania associated with antidepressant treatment: comprehensive meta-analytic review. Acta Psychiatr Scand 121:404-414 · PMID 19958306',
      'Salvatore P et al. (2002). Weygandt\'s On the Mixed States of Manic-Depressive Insanity: a translation and commentary on its significance in the evolution of the concept of bipolar disorder. Harv Rev Psychiatry 10:255-275 · PMID 12202452',
      'Marneros A (2001). Origin and development of concepts of bipolar mixed states. J Affect Disord 67:229-240 · PMID 11869773',
      'Kraepelin E (1913). Psychiatrie. Ein Lehrbuch für Studierende und Ärzte, 8.ª ed., vol. III. Leipzig: Barth [no verificada]',
      'Koukopoulos A & Koukopoulos A (1999). Agitated depression as a mixed state and the problem of melancholia. Psychiatr Clin North Am 22:547-564 · PMID 10550855',
      'Koukopoulos A, Sani G & Ghaemi SN (2013). Mixed features of depression: why DSM-5 is wrong (and so was DSM-IV). Br J Psychiatry 203:3-5 · PMID 23818531',
      'Koukopoulos A & Sani G (2014). DSM-5 criteria for depression with mixed features: a farewell to mixed depression. Acta Psychiatr Scand 129:4-16 · PMID 23600771',
      'Sani G et al. (2014). Koukopoulos\' diagnostic criteria for mixed depression: a validation study. J Affect Disord 164:14-18 · PMID 24856547',
      'Vieta E & Valentí M (2013). Mixed states in DSM-5: implications for clinical care, education, and research. J Affect Disord 148:28-36 · PMID 23561484',
      'Swann AC et al. (2013). Bipolar mixed states: an International Society for Bipolar Disorders task force report of symptom structure, course of illness, and diagnosis. Am J Psychiatry 170:31-42 · PMID 23223893',
      'Perugi G et al. (2015). Mixed features in patients with a major depressive episode: the BRIDGE-II-MIX study. J Clin Psychiatry 76:e351-e358 · PMID 25830457',
      'Pacchiarotti I et al. (2013). The International Society for Bipolar Disorders (ISBD) task force report on antidepressant use in bipolar disorders. Am J Psychiatry 170:1249-1262 · PMID 24030475',
      'Yatham LN et al. (2021). Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) recommendations for the management of patients with bipolar disorder with mixed presentations. Bipolar Disord 23:767-788 · PMID 34599629',
      'Ghaemi SN, Ko JY & Goodwin FK (2002). "Cade\'s disease" and beyond: misdiagnosis, antidepressant use, and a proposed definition for bipolar spectrum disorder. Can J Psychiatry 47:125-134 · PMID 11926074',
      'Ghaemi SN et al. (2005). Sensitivity and specificity of a new bipolar spectrum diagnostic scale. J Affect Disord 84:273-277 · PMID 15708426',
      'Mitchell PB et al. (2008). Diagnostic guidelines for bipolar depression: a probabilistic approach. Bipolar Disord 10:144-152 · PMID 18199233',
      'Ghaemi SN et al. (2008). Diagnostic guidelines for bipolar disorder: a summary of the International Society for Bipolar Disorders Diagnostic Guidelines Task Force Report. Bipolar Disord 10:117-128 · PMID 18199230',
      'Merikangas KR et al. (2007). Lifetime and 12-month prevalence of bipolar spectrum disorder in the National Comorbidity Survey replication. Arch Gen Psychiatry 64:543-552 · PMID 17485606',
      'Angst J et al. (2003). Toward a re-definition of subthreshold bipolarity: epidemiology and proposed criteria for bipolar-II, minor bipolar disorders and hypomania. J Affect Disord 73:133-146 · PMID 12507746',
      'Paris J (2009). The bipolar spectrum: a critical perspective. Harv Rev Psychiatry 17:206-213 · PMID 19499419',
      'Zimmerman M et al. (2008). Is bipolar disorder overdiagnosed? J Clin Psychiatry 69:935-940 · PMID 18466044'
    ],
    nodes: ['akiskal_hit', 'koukopoulos_hit', 'kraepelin_1913', 'locura_md', 'angst_hit', 'drec', 'emsu', 'dep_mixta_bz', 'disforia_3d', 'smix', 'hdis', 'crapid', 'sens_ad', 'conv_bip', 'mdq', 'hcl32', 'mapa_integr', 'tlp', 'tdah', 'mania_sec', 'dsm2', 'kraep_grund', 'dep_bip_tx', 'valproato_fertil', 'lm_bip']
  },
  draw(Fig) {
    const W = 2300, X = 60, IW = W - 2 * X, FS = 19;
    const F = new Fig({ key: 'mod_espectro_bipolar', title: TITLE, w: W,
      desc: 'Cuatro bloques: categorías oficiales del DSM-5-TR y la CIE-11; tabla de los prototipos del espectro de Akiskal (I a VI) con su correspondencia oficial y su respaldo; secuencia histórica de los estados mixtos desde Kraepelin y Weygandt hasta Koukopoulos y el especificador mixto del DSM-5; y propuesta de trastorno del espectro bipolar de Ghaemi con datos de prevalencia y críticas por sobrediagnóstico.' });
    const bot = (...bs) => Math.max(...bs.map(b => b.y + b.h));
    const eqH = (...bs) => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };

    // ---------- Bloque 1: categorías oficiales ----------
    let y = F.band(100, 'Categorías oficiales: DSM-5-TR y CIE-11 (●●●)', { n: 1 }) + 26;
    const CW = (IW - 3 * 30) / 4;
    const c1 = F.box('c_tb1', { x: X, y, w: CW, type: 'dx', fs: FS, node: 'tb1', title: '●●● Trastorno bipolar I', text: 'Al menos un episodio maníaco (≥7 días, o cualquier duración si requiere hospitalización); los episodios depresivos mayores son frecuentes pero no necesarios (APA 2022). CIE-11: 6A60.' });
    const c2 = F.box('c_tb2', { x: X + (CW + 30), y, w: CW, type: 'dx', fs: FS, node: 'tb2', title: '●●● Trastorno bipolar II', text: 'Al menos un episodio hipomaníaco (≥4 días) y al menos un episodio depresivo mayor, sin manía en ningún momento (APA 2022). CIE-11: 6A61.' });
    const c3 = F.box('c_cicl', { x: X + 2 * (CW + 30), y, w: CW, type: 'dx', fs: FS, node: 'cicl', title: '●●● Ciclotimia', text: '≥2 años (≥1 año en menores) de síntomas hipomaníacos y depresivos que no cumplen criterios de episodio (APA 2022). CIE-11: 6A62.' });
    const c4 = F.box('c_otro', { x: X + 3 * (CW + 30), y, w: CW, type: 'dx', fs: FS, node: 'bp3b', title: '●●● Otro trastorno bipolar especificado', text: 'Ejemplos: hipomanías de 2-3 días con depresión mayor, hipomanías con síntomas insuficientes, hipomanía sin depresión previa, ciclotimia de <24 meses (APA 2022). CIE-11: 6A6Y.' });
    eqH(c1, c2, c3, c4);
    y = bot(c1) + 26;
    const EW = (IW - 3 * 30) / 4;
    const e1 = F.box('e_mania', { x: X, y, w: EW, type: 'info', fs: 18, node: 'ep_mania', title: 'Episodio maníaco', text: 'Define el TB I.' });
    const e2 = F.box('e_hipom', { x: X + (EW + 30), y, w: EW, type: 'info', fs: 18, node: 'ep_hipom', title: 'Episodio hipomaníaco', text: 'Sin deterioro marcado ni psicosis.' });
    const e3 = F.box('e_dep', { x: X + 2 * (EW + 30), y, w: EW, type: 'info', fs: 18, node: 'ep_depmay', title: 'Episodio depresivo mayor', text: 'Necesario en el TB II.' });
    const e4 = F.box('e_leg', { x: X + 3 * (EW + 30), y, w: EW, type: 'info', fs: 17, align: 'left', title: 'Cómo leer los símbolos', text: '●●● categoría oficial · ●●○ propuesta con estudios multicéntricos o epidemiológicos · ●○○ propuesta de escuela (series pequeñas u opinión). Indican respaldo documental, no validez. Códigos CIE-11 según las fichas del atlas [fuente oficial no localizada en esta revisión].' });
    eqH(e1, e2, e3, e4);
    F.arrow(e1, c1, { from: 't', to: 'b', dash: true });
    F.arrow(e2, c2, { from: 't', to: 'b', dash: true });
    F.arrow(e3, c2, { from: 't', to: 'b', fb: 0.8, dash: true, via: [[e3.x + e3.w / 2, e3.y - 13], [c2.x + c2.w * 0.8, e3.y - 13]] });
    y = bot(e1, e4) + 46;

    // ---------- Bloque 2: prototipos de Akiskal ----------
    y = F.band(y, 'Espectro de Akiskal: prototipos I a VI y su traducción oficial (Akiskal y Pinto 1999; Akiskal 2007)', { n: 2 }) + 22;
    const t1 = F.box('temp', { x: X, y, w: IW * 0.62, type: 'info', fs: 18, node: 'tempcicl', title: 'Sustrato propuesto: temperamentos afectivos', text: 'Ciclotímico e hipertímico como base de las formas atenuadas; Akiskal estima ≥5 % de prevalencia para un espectro amplio y 6 % para el temperamento ciclotímico (Akiskal 2007).' });
    const t2 = F.box('temp_ht', { x: X + IW * 0.62 + 30, y, w: IW * 0.38 - 30, type: 'info', fs: 18, node: 'tempht', title: 'Temperamento hipertímico', text: 'Rasgo de energía y optimismo; describirlo no equivale a diagnosticar un trastorno.' });
    eqH(t1, t2);
    y = bot(t1) + 24;
    const cols = [{ w: 300, label: 'Prototipo' }, { w: 810, label: 'Definición de escuela y dato de apoyo' }, { w: 690, label: 'Dónde queda en el DSM-5-TR / CIE-11' }, { w: 380, label: 'Respaldo' }];
    const tb = F.table({ x: X, y, fs: 18, cols, rows: [
      [{ t: 'BP I', node: 'tb1' }, 'Manía plena.', 'Trastorno bipolar I.', '●●● categoría oficial'],
      [{ t: 'BP I½', node: 'bp1h' }, 'Depresión con hipomanías prolongadas (semanas o meses) sin manía; la definición procede del texto completo de 1999 [fuente no localizada].', 'Trastorno bipolar II: se pierde la información de duración.', '●○○ sin estudios propios'],
      [{ t: 'BP II', node: 'tb2' }, 'Depresión con hipomanía; para Akiskal la forma más frecuente tiene hipomanías de menos de 4 días (Akiskal 2007).', { t: 'TB II si ≥4 días; con hipomanías de 2-3 días, otro especificado (APA 2022).', node: 'bp3b' }, '●●● (umbral de 4 días discutido)'],
      [{ t: 'BP II½', node: 'bp2h' }, 'Depresiones ciclotímicas: depresión mayor sobre temperamento ciclotímico (Akiskal 2007); en 46 ciclotímicos, 35 % tuvo episodios plenos en el seguimiento (Akiskal 1977).', { t: 'Trastorno depresivo mayor u otro especificado: la ciclotimia excluye la depresión mayor (APA 2022). Diferencial con el TLP.', node: 'tlp' }, '●●○ cohortes pequeñas'],
      [{ t: 'BP III', node: 'bp3' }, 'Hipomanía asociada a antidepresivos con diátesis bipolar familiar (Akiskal 2007). Metaanálisis: manía con y sin antidepresivos 12,5 % y 7,5 % (Tondo 2010).', { t: 'TB si la hipomanía o manía persiste con criterios completos más allá del efecto del fármaco; si no, inducido (APA 2022).', node: 'tb_induc' }, '●●○ datos heterogéneos'],
      [{ t: 'BP III½', node: 'bp3h' }, 'Rasgos bipolares subumbrales complicados por consumo de estimulantes; serie abierta de 10 casos (Camacho y Akiskal 2005).', { t: 'Inducido por sustancias o TB primario comórbido, según la secuencia temporal (APA 2022).', node: 'tb_induc' }, '●○○ serie de 10 casos'],
      [{ t: 'BP IV', node: 'bp4' }, 'Depresión sobre temperamento hipertímico: 10,3 % de 687 depresiones mayores; parecida al TB en historia familiar y al unipolar en curso (Cassano 1992).', { t: 'Trastorno depresivo mayor (sin hipomanía no hay categoría bipolar).', node: 'ddm' }, '●●○ una serie clínica'],
      [{ t: 'BP V', node: 'bpv' }, 'Intrusiones hipomaníacas en episodios depresivos mayores (Akiskal 2007); el rótulo «V» no figura en el resumen [fuente no localizada].', { t: 'Depresión mayor o bipolar «con características mixtas» (solo de forma parcial).', node: 'mxto' }, '●○○ rótulo de escuela'],
      [{ t: 'BP VI', node: 'bpvi' }, 'Inestabilidad afectiva de inicio tardío con deterioro cognitivo; serie retrospectiva de 10 casos (Ng 2008).', { t: 'Debido a otra afección médica o trastorno neurocognitivo; TB primario solo sin causa orgánica [fuente oficial no localizada].', node: 'tb_mayor' }, '●○○ serie de 10 casos']
    ] });
    y = tb.y + 46;

    // ---------- Bloque 3: estados mixtos ----------
    y = F.band(y, 'Estados mixtos: de Kraepelin y Weygandt al especificador del DSM-5', { n: 3 }) + 26;
    const GAP = 150, MW = (IW - 2 * GAP) / 3;
    const m1 = F.box('m_krp', { x: X, y, w: MW, type: 'dx', fs: FS, node: 'mixtos_krp', title: 'Kraepelin y Weygandt (1899-1913) · histórico', text: 'Weygandt: la misma persona puede estar maníaca y deprimida a la vez (Salvatore 2002). Kraepelin sistematiza la manía depresivo-ansiosa, la depresión excitada y la manía estuporosa (Marneros 2001), dentro de un esquema de combinaciones de ánimo, pensamiento y actividad (Kraepelin 1913 [no verificada]).' });
    const m2 = F.box('m_kouk', { x: X + MW + GAP, y, w: MW, type: 'dx', fs: FS, node: 'dmko', title: '●●○ Depresión mixta (Koukopoulos)', text: '1999: depresión mayor con ≥2 de agitación motora, agitación psíquica o tensión interna, y pensamientos acelerados o apiñados (Koukopoulos 1999). Criterios ampliados (agitación psíquica, irritabilidad, labilidad): validación interna en 435 pacientes, sensibilidad 76,4 % y especificidad 86,3 %; falta validación externa (Sani 2014).' });
    const m3 = F.box('m_dsm', { x: X + 2 * (MW + GAP), y, w: MW, type: 'dx', fs: FS, node: 'mxto', title: '●●● «Con características mixtas» (DSM-5)', text: '≥3 síntomas no solapados del polo opuesto en manía, hipomanía o depresión, también en el trastorno depresivo mayor; sustituye al episodio mixto del DSM-IV (Vieta y Valentí 2013). En la depresión no cuentan irritabilidad, distraibilidad ni agitación (APA 2022). La CIE-11 mantiene el episodio mixto [fuente oficial no localizada].' });
    eqH(m1, m2, m3);
    F.arrow(m1, m2, { from: 'r', to: 'l', label: 'relectura', lx: m1.x + m1.w + 22, ly: m1.y + m1.h / 2 - 12 });
    F.arrow(m2, m3, { from: 'r', to: 'l', label: 'crítica', dash: true, lx: m2.x + m2.w + 40, ly: m2.y + m2.h / 2 - 12 });
    y = bot(m1) + 30;
    const DW = (IW - 2 * 30) / 3;
    const d1 = F.box('m_bridge', { x: X, y, w: DW, type: 'info', fs: 18, align: 'left', node: 'emsu', title: 'Cuánto cambia la definición', text: 'BRIDGE-II-MIX, 2811 episodios depresivos mayores: 7,5 % cumplía el especificador DSM-5 y 29,1 % los criterios de investigación (≥3 síntomas, incluidos los solapados) (Perugi 2015).' });
    const d2 = F.box('m_crit', { x: X + DW + 30, y, w: DW, type: 'info', fs: 18, align: 'left', node: 'koukopoulos_hit', title: 'Debate abierto', text: 'Koukopoulos sostiene que el DSM-5 exige los síntomas hipomaníacos menos frecuentes en la depresión mixta (Koukopoulos y Sani 2014). La ISBD considera robusto el concepto de estado mixto, con criterios aún por fijar (Swann 2013).' });
    const d3 = F.box('m_warn', { x: X + 2 * (DW + 30), y, w: DW, type: 'warn', fs: 18, node: 'riad', title: 'Seguridad', text: 'Ningún fármaco alcanza la primera línea en episodios DSM-5 con características mixtas (Yatham 2021). En el TB I, antidepresivos solo como adyuvantes de un estabilizador; preocupa el viraje a hipomanía, manía o estado mixto (Pacchiarotti 2013).' });
    eqH(d1, d2, d3);
    y = bot(d1) + 22;
    const a1 = F.box('m_agdep', { x: X, y, w: (IW - 30) / 2, type: 'info', fs: 18, node: 'agdep', title: 'Depresión agitada', text: 'Koukopoulos la considera un estado mixto; en el DSM ya no lo es (Koukopoulos 1999).' });
    const a2 = F.box('m_bpv', { x: X + (IW - 30) / 2 + 30, y, w: (IW - 30) / 2, type: 'info', fs: 18, node: 'mixtos_krp', title: 'Lo que no recoge el especificador', text: 'Mezclas con inhibición del pensamiento o motora (manía improductiva, depresión con fuga de ideas) [fuente no localizada].' });
    eqH(a1, a2);
    y = bot(a1) + 46;

    // ---------- Bloque 4: Ghaemi y amplitud del espectro ----------
    y = F.band(y, 'Propuesta de Ghaemi, amplitud del espectro y críticas', { n: 4 }) + 26;
    const GW = (IW - 2 * 30) / 3;
    const g1 = F.box('g_bsd', { x: X, y, w: GW, type: 'dx', fs: FS, node: 'ghaemi_bsd', title: '●○○ Trastorno del espectro bipolar (Ghaemi, Ko y Goodwin 2002)', text: 'Definición heurística para formas que no son I ni II: depresión mayor sin hipomanía espontánea, con más peso a la historia familiar de TB y a los síntomas maníacos inducidos por antidepresivos (Ghaemi 2002). Criterios no incorporados al DSM-5-TR ni a la CIE-11.' });
    const g2 = F.box('g_bsds', { x: X + GW + 30, y, w: GW, type: 'act', fs: FS, node: 'bsds', title: 'Cribado y enfoque probabilístico', text: 'BSDS: sensibilidad 0,76 y especificidad 0,85 (0,93 con otro umbral) en 95 pacientes (Ghaemi 2005). No hay rasgos patognomónicos de la depresión bipolar: la ISBD propone un enfoque probabilístico (Mitchell 2008).' });
    const g3 = F.box('g_crit', { x: X + 2 * (GW + 30), y, w: GW, type: 'warn', fs: FS, node: 'bipsft', title: 'Riesgo de sobrediagnóstico', text: 'Menos de la mitad de quienes referían un diagnóstico previo de TB lo confirmaron con la SCID (Zimmerman 2008). Las formas ampliadas difieren del TB clásico en historia familiar, curso y respuesta a fármacos (Paris 2009).' });
    eqH(g1, g2, g3);
    F.arrow(g1, g2, { from: 'r', to: 'l' });
    y = bot(g1) + 30;
    const p1 = F.box('g_epi', { x: X, y, w: (IW - 30) / 2, type: 'info', fs: 18, align: 'left', node: 'epi_bip', title: 'Cuánto mide el espectro según la definición', text: 'NCS-R (9282 adultos): prevalencia vital de 1,0 % para TB I, 1,1 % para TB II y 2,4 % para bipolaridad subumbral (Merikangas 2007). Cohorte de Zúrich: 23,7 % para el espectro blando con criterios amplios (Angst 2003).' });
    const p2 = F.box('g_ind', { x: X + (IW - 30) / 2 + 30, y, w: (IW - 30) / 2, type: 'info', fs: 18, align: 'left', node: 'ind_bipdep', title: 'Uso clínico prudente', text: 'Los indicadores de bipolaridad en la depresión orientan la anamnesis longitudinal con informantes; no sustituyen a la documentación de una hipomanía o manía (Mitchell 2008; Ghaemi 2008).' });
    eqH(p1, p2);
    y = bot(p1) + 40;

    F.box('lim', { x: X, y, w: IW, type: 'lim', fs: 18, align: 'left', title: 'Límites de la figura',
      text: 'Esquema docente de apoyo: no es un algoritmo diagnóstico ni terapéutico y no sustituye a la evaluación longitudinal ni al juicio clínico. Solo las categorías marcadas ●●● son diagnósticos oficiales; los prototipos de Akiskal, la depresión mixta de Koukopoulos y el trastorno del espectro bipolar de Ghaemi son propuestas de escuela sin validación prospectiva como categorías, y su uso para etiquetar a una persona tiene consecuencias terapéuticas. Las cifras proceden de estudios concretos (centros especializados, cohortes o series pequeñas) y no son extrapolables sin más. El texto del DSM-5-TR, la tabulación oficial de la CIE-11 y el texto completo de Akiskal y Pinto (1999) no se han podido cotejar en su original: lo que depende de ellos se marca. No se indican fármacos ni dosis: el tratamiento sigue las guías (CANMAT/ISBD, NICE) y las fichas técnicas vigentes.' });
    F.footer('Fuentes principales: DSM-5-TR (APA 2022); CIE-11 (OMS 2024); Akiskal y Pinto 1999; Akiskal 2007; Akiskal 1977; Cassano 1992; Camacho y Akiskal 2005; Ng 2008; Tondo 2010; Salvatore 2002; Marneros 2001; Koukopoulos 1999, 2013 y 2014; Sani 2014; Vieta y Valentí 2013; Swann 2013; Perugi 2015; Pacchiarotti 2013; Yatham 2021; Ghaemi 2002, 2005 y 2008; Mitchell 2008; Merikangas 2007; Angst 2003; Paris 2009; Zimmerman 2008. Referencias completas en la ficha de la figura. Esquema docente: no sustituye a la valoración clínica individual.');
    return F;
  }
};
