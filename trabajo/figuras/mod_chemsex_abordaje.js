// Modelo: chemsex. Comprensión integrada (definición, vulnerabilidad, riesgos) y niveles de abordaje con principios de atención afirmativa.
// Compilar en prueba: node tools/fig.js mod_chemsex_abordaje --dry --png <carpeta>
const TITLE = 'Chemsex: modelo integrado de comprensión y abordaje';
module.exports = {
  key: 'mod_chemsex_abordaje',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Modelo en cinco bloques para profesionales sanitarios y comunitarios. 1) Qué es el chemsex: definición, diferencia con el uso sexualizado de drogas en general, sustancias implicadas y datos de prevalencia, que varían mucho según la definición y la muestra. 2) Factores de vulnerabilidad descritos (estrés de minorías, homofobia interiorizada y estigma del VIH, vivir con el VIH, soledad no deseada, aplicaciones de contactos, experiencias adversas tempranas) y la función que las personas atribuyen al consumo; son asociaciones procedentes de estudios transversales y cualitativos, no causas demostradas. 3) Riesgos principales: infecciones de transmisión sexual, VIH y hepatitis C; inyección (slamming); sobredosis de GHB/GBL; dependencia y abstinencia; psicosis; depresión y conducta suicida; consentimiento y violencia sexual; interacciones con antirretrovirales. 4) Niveles de intervención, que se ofrecen a la vez y según las necesidades percibidas por la persona, con las situaciones que requieren derivación urgente. 5) Principios de atención afirmativa y no estigmatizante. La mayor parte de los datos procede de hombres gais, bisexuales y otros hombres que tienen sexo con hombres (GBHSH) de países de renta alta; las mujeres trans y las personas no binarias están poco representadas. No contiene dosis ni pautas de consumo o de tratamiento. «[fuente no localizada]» señala lo que no se ha podido cotejar en una fuente primaria. Esquema docente: no sustituye al juicio clínico ni a los protocolos locales.',
    refs: [
      'Ministerio de Sanidad, Secretaría del Plan Nacional sobre el Sida (2020). Abordaje del fenómeno del chemsex. Documento técnico. Madrid: Ministerio de Sanidad (Informes, Estudios e Investigación 2020) · cotejado en el PDF oficial (sanidad.gob.es): resumen ejecutivo, apartados 1.4, 4.1, 4.4, 6.2, 6.6, 7.2, 8.1 y 8.6 y anexo de reducción de riesgos',
      'Maxwell S, Shahmanesh M & Gafos M (2019). Chemsex behaviours among men who have sex with men: a systematic review of the literature. Int J Drug Policy 63:74-89 · PMID 30513473',
      'Edmundson C et al. (2018). Sexualised drug use in the United Kingdom (UK): a review of the literature. Int J Drug Policy 55:131-148 · PMID 29625796',
      'González-Baeza A et al. (2018). Sexualized drug use (chemsex) is associated with high-risk sexual behaviors and sexually transmitted infections in HIV-positive men who have sex with men: data from the U-SEX GESIDA 9416 study. AIDS Patient Care STDS 32:112-118 · PMID 29620925',
      'Pufall EL et al. (2018). Sexualized drug use («chemsex») and high-risk sexual behaviours in HIV-positive men who have sex with men. HIV Med 19:261-270 · PMID 29368440',
      'Rosińska M et al. (2018). Prevalence of drug use during sex amongst MSM in Europe: results from a multi-site bio-behavioural survey. Int J Drug Policy 55:231-241 · PMID 29402683',
      'Meyer IH (2003). Prejudice, social stress, and mental health in lesbian, gay, and bisexual populations: conceptual issues and research evidence. Psychol Bull 129:674-697 · PMID 12956539',
      'Pollard A, Nadarzynski T & Llewellyn C (2018). Syndemics of stigma, minority-stress, maladaptive coping, risk environments and littoral spaces among men who have sex with men using chemsex. Cult Health Sex 20:411-427 · PMID 28741417',
      'Lafortune D et al. (2021). Psychological and interpersonal factors associated with sexualized drug use among men who have sex with men: a mixed-methods systematic review. Arch Sex Behav 50:427-460 · PMID 33108566',
      'Deimel D et al. (2016). Drug use and health behaviour among German men who have sex with men: results of a qualitative, multi-centre study. Harm Reduct J 13:36 · PMID 27938393',
      'González-Baeza A et al. (2023). Understanding attachment, emotional regulation, and childhood adversity and their link to chemsex. Subst Use Misuse 58:94-102 · PMID 36422467',
      'Hibbert MP et al. (2019). Psychosocial and sexual characteristics associated with sexualised drug use and chemsex among men who have sex with men (MSM) in the UK. Sex Transm Infect 95:342-350 · PMID 30979782',
      'Bourne A et al. (2015). «Chemsex» and harm reduction need among gay men in South London. Int J Drug Policy 26:1171-1176 · PMID 26298332',
      'Bourne A et al. (2015). Illicit drug use in sexual settings («chemsex») and HIV/STI transmission risk behaviour among gay men in South London: findings from a qualitative study. Sex Transm Infect 91:564-568 · PMID 26163510',
      'Dolengevich-Segal H et al. (2019). Drug-related and psychopathological symptoms in HIV-positive men who have sex with men who inject drugs during sex (slamsex): data from the U-SEX GESIDA 9416 Study. PLoS One 14:e0220272 · PMID 31800575',
      'Schreck B et al. (2021). Slam practice: a review of the literature. Eur Addict Res 27:161-178 · PMID 33279895',
      'Hockenhull J, Murphy KG & Paterson S (2017). An observed rise in γ-hydroxybutyrate-associated deaths in London: evidence to suggest a possible link with concomitant rise in chemsex. Forensic Sci Int 270:93-97 · PMID 27936427',
      'Moreno-Gámez L, Hernández-Huerta D & Lahera G (2022). Chemsex and psychosis: a systematic review. Behav Sci (Basel) 12:516 · PMID 36546999',
      'Íncera-Fernández D, Gámez-Guadix M & Moreno-Guillén S (2021). Mental health symptoms associated with sexualized drug use (chemsex) among men who have sex with men: a systematic review. Int J Environ Res Public Health 18:13299 · PMID 34948907',
      'Strasser M et al. (2023). Lethal lust: suicidal behavior and chemsex. A narrative review of the literature. Brain Sci 13:174 · PMID 36831717',
      'Connolly DJ et al. (2025). Consent and violence amongst men in the context of sexualised drug use: a systematic scoping review. Int J Drug Policy 136:104706 · PMID 39848038',
      'McCormack S et al. (2016). Pre-exposure prophylaxis to prevent the acquisition of HIV-1 infection (PROUD): effectiveness results from the pilot phase of a pragmatic open-label randomised trial. Lancet 387:53-60 · PMID 26364263',
      'Molina JM et al. (2015). On-demand preexposure prophylaxis in men at high risk for HIV-1 infection. N Engl J Med 373:2237-2246 · PMID 26624850',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Truvada 200 mg/245 mg comprimidos recubiertos con película (nº de registro 04305001), secciones 4.1 (profilaxis preexposición) y 4.3 (contraindicada en la PrEP con estado frente al VIH-1 desconocido o positivo). Agencia Española de Medicamentos y Productos Sanitarios',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Xyrem 500 mg/ml solución oral (oxibato sódico; nº de registro 05312001), sección 4.1 (única indicación: narcolepsia con cataplejía). Agencia Española de Medicamentos y Productos Sanitarios',
      'Strong C et al. (2022). HIV, chemsex, and the need for harm-reduction interventions to support gay, bisexual, and other men who have sex with men. Lancet HIV 9:e717-e725 · PMID 35926550',
      'Pozo-Herce PD et al. (2024). Effectiveness of harm reduction interventions in chemsex: a systematic review. Healthcare (Basel) 12:1411 · PMID 39057554',
      'Íncera-Fernández D et al. (2025). A systematic review of intervention strategies aimed at chemsex users. Int J Drug Policy 140:104795 · PMID 40334305',
      'Pachankis JE et al. (2015). LGB-affirmative cognitive-behavioral therapy for young adult gay and bisexual men: a randomized controlled trial of a transdiagnostic minority stress approach. J Consult Clin Psychol 83:875-889 · PMID 26147563',
      'Shoptaw S et al. (2005). Behavioral treatment approaches for methamphetamine dependence and HIV-related sexual risk behaviors among urban gay and bisexual men. Drug Alcohol Depend 78:125-134 · PMID 15845315',
      'Dijkstra BAG et al. (2017). Detoxification with titration and tapering in gamma-hydroxybutyrate (GHB) dependent patients: the Dutch GHB monitor project. Drug Alcohol Depend 170:164-173 · PMID 27923198',
      'Hillier B et al. (2024). Developing a coordinated response to chemsex across health, justice and social care settings: expert consensus statement. BJPsych Bull 48:306-313 · PMID 38916191',
      'Rodríguez-González C, Vázquez-Martínez A & Villanueva-Blasco VJ (2025). Systematic review on chemsex: advocating for inclusive research and primary prevention. J Prev 46:161-187 · PMID 39798055',
      'Organización Mundial de la Salud (2025). CIE-11 para estadísticas de mortalidad y morbilidad (CIE-11 MMS), tabulación simple (icd.who.int): 6C45, 6C46, 6C47, 6C4D y 6C4F',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5.ª ed., texto revisado (DSM-5-TR). Trastornos relacionados con sustancias. Washington, DC: APA Publishing [texto original no cotejado en esta figura]'
    ],
    nodes: ['chemsex_inv', 'vih_metanf_snc', 'homosex_hist', 'apego_trauma', 'tdah_chemsex']
  },
  draw(Fig) {
    const W = 2300, X = 60, IW = W - 2 * X, G = 24, FS = 18;
    const F = new Fig({ key: 'mod_chemsex_abordaje', title: TITLE, w: W,
      desc: 'Cinco bloques: definición del chemsex, diferencia con el uso sexualizado de drogas, sustancias y prevalencia; factores de vulnerabilidad que convergen en la función atribuida al consumo; ocho riesgos principales; niveles de intervención que parten de una puerta de entrada sin juicio, con derivación urgente; y principios de atención afirmativa, con los límites del esquema.' });
    const bot = (...bs) => Math.max(...bs.map(b => b.y + b.h));
    const eqH = (...bs) => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); F._grow(bs[0].y + h); return h; };
    const cols = (n, g) => { const w = (IW - (n - 1) * g) / n; return [...Array(n)].map((_, i) => ({ x: X + i * (w + g), w })); };

    let y = 92;
    y = F.text(X, y, 'Se lee de arriba abajo: qué es, por qué ocurre, qué daños produce, cómo se interviene y con qué principios. GBHSH: hombres gais, bisexuales y otros hombres que tienen sexo con hombres. ↗ abre la ficha del atlas.', { fs: 20, w: IW }) + 10;

    // ───────── 1. Definición
    y = F.band(y, 'Qué es: definición, sustancias y magnitud', { n: 1 }) + 22;
    const c1 = cols(3, G);
    const d1 = F.box('def', { x: c1[0].x, y, w: c1[0].w + 120, type: 'dx', fs: FS, node: 'chemsex_s', title: 'Chemsex', text: 'Uso de drogas antes o durante encuentros sexuales planificados para facilitar, intensificar, prolongar o sostener la experiencia, sobre todo entre GBHSH (Maxwell 2019). En España: «uso intencionado de drogas para tener relaciones sexuales por un período largo de tiempo», de horas a días; el tiempo es el elemento clave, porque a más tiempo, más exposición a riesgos (Ministerio de Sanidad 2020). Es un fenómeno, no un diagnóstico: si procede, se diagnostica el trastorno por consumo de cada sustancia (DSM-5-TR; CIE-11: 6C45 cocaína, 6C46 estimulantes, incluida la metanfetamina, 6C47 catinonas sintéticas, 6C4D disociativos, 6C4F varias sustancias).' });
    const d2 = F.box('sdu', { x: c1[1].x + 120 + G / 2, y, w: c1[1].w - 60, type: 'info', fs: FS, node: 'sdu', title: 'Uso sexualizado de drogas (USD)', text: 'Categoría más amplia: cualquier consumo en contexto sexual (Edmundson 2018). «No todo consumo de drogas en un contexto sexual es chemsex»: este se vincula a la cultura sexual gay (Ministerio de Sanidad 2020).' });
    const d3 = F.box('prev', { x: c1[2].x + 60 + G / 2, y, w: c1[2].w - 60 - G / 2, type: 'info', fs: FS, title: 'Magnitud: muy variable', text: 'Chemsex en el último año: 29,1 % de 742 GBHSH con VIH en Madrid (González-Baeza 2018) y 29,5 % en clínicas de VIH de Inglaterra y Gales (Pufall 2018). Drogas de chemsex en el último encuentro: 3,4 % en 13 ciudades europeas (Rosińska 2018). Las cifras dependen de la definición y la muestra (Edmundson 2018; Maxwell 2019).' });
    eqH(d1, d2, d3);
    y = bot(d1) + 26;
    const c6 = cols(6, G);
    const subs = [
      ['s_meth', 'metanf', 'Metanfetamina', 'Estimulante; fumada o inyectada.'],
      ['s_ghb', 'ghb_gbl', 'GHB / GBL', 'Depresor; margen estrecho entre dosis buscada y tóxica.'],
      ['s_mef', 'mefed', 'Mefedrona y otras catinonas', 'Estimulantes; también inyectadas.'],
      ['s_ket', 'ketamina_rec', 'Ketamina', 'Disociativo.'],
      ['s_coc', 'cocaina', 'Cocaína', 'Estimulante.'],
      ['s_pop', 'poppers', 'Poppers y sildenafilo', 'Vasodilatadores: su combinación causa hipotensión grave.']
    ].map(([id, node, t, x], i) => F.box(id, { x: c6[i].x, y, w: c6[i].w, type: 'drug', fs: 17, node, title: t, text: x }));
    eqH(...subs);
    y = bot(subs[0]) + 10;
    y = F.text(X, y + 18, 'Sustancias y riesgos según Maxwell 2019 y Ministerio de Sanidad 2020 (el documento español añade poppers, éxtasis y sildenafilo, y subraya que el policonsumo es habitual); la vía intravenosa (slamming) es la de mayor riesgo (Ministerio de Sanidad 2020).', { fs: 17, w: IW, fill: '#333' }) + 30;

    // ───────── 2. Vulnerabilidad
    y = F.band(y, 'Por qué: factores de vulnerabilidad y función atribuida al consumo (asociaciones, no causas demostradas)', { n: 2 }) + 22;
    const SW = 640, MW = IW - 2 * SW - 2 * 130;
    const v = [
      ['v_min', 'genero', 'Estrés de minorías', 'Prejuicio y discriminación, expectativa de rechazo, ocultación y homofobia interiorizada generan un entorno estresante que explica parte del exceso de problemas de salud mental en personas LGB (Meyer 2003).'],
      ['v_hom', 'estigma', 'Homofobia interiorizada y estigma del VIH', 'Algunos hombres describen el chemsex como forma de afrontar conflictos internos por su homosexualidad o el estigma asociado al VIH (Ministerio de Sanidad 2020); marco sindémico de estigma y afrontamiento desadaptativo (Pollard 2018).'],
      ['v_vih', 'vih_ncd', 'Vivir con el VIH', 'Los GBHSH con VIH practican chemsex con más frecuencia que los GBHSH sin VIH (Maxwell 2019).'],
      ['v_sol', 'soledad', 'Soledad no deseada', 'Aliviar la soledad no deseada es uno de los motivos declarados (Ministerio de Sanidad 2020); la soledad figura entre los factores de riesgo de psicosis en el chemsex (Moreno-Gámez 2022).'],
      ['v_app', null, 'Aplicaciones de contactos y ocio sexualizado', 'Las aplicaciones sirven para buscar parejas para las sesiones y para comprar, vender o compartir sustancias (Ministerio de Sanidad 2020); relevantes en el acceso al chemsex en un estudio cualitativo alemán (Deimel 2016).'],
      ['v_tra', 'trauma', 'Trauma y experiencias adversas', 'Más acontecimientos adversos tempranos y apego evitativo en 41 GBHSH con chemsex que en 39 controles (González-Baeza 2023); afrontar emociones dolorosas o sucesos estresantes es un mecanismo descrito (Lafortune 2021).']
    ];
    const L = [], R = [];
    let yl = y, yr = y;
    v.forEach((r, i) => {
      const left = i % 2 === 0, bx = left ? X : X + IW - SW;
      const b = F.box(r[0], { x: bx, y: left ? yl : yr, w: SW, type: 'info', fs: 17, node: r[1] || undefined, align: 'left', title: r[2], text: r[3] });
      if (left) { L.push(b); yl = b.y + b.h + 20; } else { R.push(b); yr = b.y + b.h + 20; }
    });
    // igualar alturas por filas
    for (let i = 0; i < 3; i++) { const h = Math.max(L[i].h, R[i].h); L[i].h = R[i].h = h; if (i < 2) { L[i + 1].y = R[i + 1].y = L[i].y + h + 20; } }
    const vTop = y, vBot = bot(L[2], R[2]);
    const mh = 380;
    const mec = F.box('mec', { x: X + SW + 130, y: vTop + (vBot - vTop - mh) / 2, w: MW, minH: mh, type: 'mec', fs: 18, title: 'Función atribuida al consumo', text: 'Intensificar el deseo y prolongar las sesiones; intimidad, conexión y pertenencia; más autoestima y confianza sexual; escapar de situaciones dolorosas y manejar la angustia (Ministerio de Sanidad 2020; Lafortune 2021). Menor autoeficacia sexual, asociada al chemsex frente a otros USD (Hibbert 2019).' });
    L.forEach((b, i) => F.arrow(b, mec, { from: 'r', to: 'l', fb: [0.3, 0.5, 0.7][i], dash: true }));
    R.forEach((b, i) => F.arrow(b, mec, { from: 'l', to: 'r', fb: [0.3, 0.5, 0.7][i], dash: true }));
    y = vBot + 18;
    y = F.text(X, y + 18, 'Calidad de la evidencia: casi todo procede de estudios transversales, cualitativos o de muestras clínicas no representativas; las flechas discontinuas indican asociación descrita, no causalidad (Maxwell 2019; Lafortune 2021). Algunas personas que practican chemsex parecen satisfechas con esa conducta (Hibbert 2019).', { fs: 17, w: IW, fill: '#333' }) + 30;

    // ───────── 3. Riesgos
    y = F.band(y, 'Qué daños: riesgos principales', { n: 3 }) + 22;
    const c4 = cols(4, G);
    const r1 = [
      F.box('r_its', { x: c4[0].x, y, w: c4[0].w, type: 'warn', fs: 17, node: 'chemsex_ssex', title: 'ITS, VIH y hepatitis C', text: 'En GBHSH con VIH, el chemsex se asoció a coito anal sin preservativo (ORa 5,73), ITS bacteriana (ORa 2,65) y hepatitis C (ORa 6,58) (Pufall 2018). En Madrid, hepatitis C asociada al slamsex (OR 5,2) (González-Baeza 2018).' }),
      F.box('r_slam', { x: c4[1].x, y, w: c4[1].w, type: 'warn', fs: 17, node: 'slam', title: 'Inyección (slamming)', text: '15,7 % de quienes practicaban chemsex en U-SEX; más psicopatología, ideas paranoides y conducta suicida que sin inyección (Dolengevich-Segal 2019). Abscesos, flebitis, sepsis y endocarditis (Ministerio de Sanidad 2020). Metanfetamina y mefedrona, las más inyectadas (Schreck 2021).' }),
      F.box('r_ghb', { x: c4[2].x, y, w: c4[2].w, type: 'warn', fs: 17, node: 'ghb_gbl', title: 'Sobredosis de GHB/GBL', text: 'La mayoría de 30 entrevistados había sufrido sobredosis, sobre todo de GHB/GBL (Bourne 2015). Alcohol y otros depresores, incluso en pequeñas cantidades, facilitan el coma (Ministerio de Sanidad 2020). Las muertes asociadas al GHB en Londres aumentaron un 119 % en 2015 respecto a 2014 (Hockenhull 2017).' }),
      F.box('r_dep', { x: c4[3].x, y, w: c4[3].w, type: 'warn', fs: 17, node: 'ghb_abst', title: 'Dependencia y abstinencia', text: 'Más dependencia y abstinencia con la inyección (Dolengevich-Segal 2019). Abstinencia de GHB/GBL: véase la ficha. Dependencia más frecuente por vía intravenosa que por cualquier otra (Ministerio de Sanidad 2020).' })
    ];
    eqH(...r1);
    y = bot(r1[0]) + G;
    const r2 = [
      F.box('r_psi', { x: c4[0].x, y, w: c4[0].w, type: 'warn', fs: 17, node: 'psust', title: 'Psicosis', text: 'Síntomas psicóticos en el 6,7-37,2 % según los estudios; slamsex, policonsumo y metanfetamina fumada multiplican el riesgo hasta por tres (Moreno-Gámez 2022; revisión de 10 estudios).' }),
      F.box('r_mh', { x: c4[1].x, y, w: c4[1].w, type: 'warn', fs: 17, node: 'ideac_suic', title: 'Depresión, ansiedad y conducta suicida', text: 'Más depresión, ansiedad o dependencia, aunque no en todos los estudios; más graves con la inyección (Íncera-Fernández 2021). Resultados mixtos sobre la conducta suicida (Strasser 2023).' }),
      F.box('r_cons', { x: c4[2].x, y, w: c4[2].w, type: 'warn', fs: 17, node: 'sumision_q', title: 'Consentimiento y violencia sexual', text: 'Las drogas pueden hacer perder la conciencia e impedir consentir (Ministerio de Sanidad 2020). La violencia sexual parece frecuente y se asocia a peor salud mental y suicidalidad; se describen casos de administración no consentida de GHB/GBL (Connolly 2025).' }),
      F.box('r_arv', { x: c4[3].x, y, w: c4[3].w, type: 'warn', fs: 17, node: 'chemsex_arv', title: 'Interacciones con antirretrovirales', text: 'Algunos antirretrovirales aumentan la concentración de ciertas drogas y otros aceleran su eliminación (Ministerio de Sanidad 2020).' })
    ];
    eqH(...r2);
    y = bot(r2[0]) + 46;

    // ───────── 4. Intervención
    y = F.band(y, 'Cómo intervenir: niveles que se ofrecen a la vez, según las necesidades percibidas', { n: 4 }) + 22;
    const EW = 1180;
    const entry = F.box('entry', { x: X, y, w: EW, type: 'q', fs: 18, node: 'chemsex_atencion', title: '¿Dónde y cómo se detecta? Puerta de entrada sin juicio', text: 'Atender donde la persona ya acude (centros de ITS, unidades de VIH, entidades comunitarias LGTBQ+) y no solo derivar; preguntar por el consumo en contexto sexual con estilo empático; la vinculación es el primer objetivo (Ministerio de Sanidad 2020).' });
    const urg = F.box('urg', { x: X + EW + 60, y, w: IW - EW - 60, type: 'warn', fs: 18, align: 'left', title: 'Derivación urgente (Ministerio de Sanidad 2020)', text: 'Intoxicación grave o coma · delirium · agitación o psicosis aguda · ideación o intento de suicidio · abscesos por inyección · exposición de riesgo al VIH (la PPE se inicia antes de 72 h, idealmente en 24 h) · posible agresión o sumisión química.' });
    eqH(entry, urg);
    y = bot(entry) + 64;
    const gy = y - 22;
    const lv1 = [
      F.box('i_rrd', { x: c4[0].x + 16, y: y + 22, w: c4[0].w - 16, type: 'act', fs: 17, node: 'red_danos', title: 'Reducción de riesgos y daños', text: 'No mezclar GHB con alcohol ni otros depresores; no consumir a solas; material de inyección estéril y de uso personal (Ministerio de Sanidad 2020). Intervención web y programas de pares con resultados favorables en una revisión de 6 estudios (Pozo-Herce 2024).' }),
      F.box('i_prep', { x: c4[1].x, y: y + 22, w: c4[1].w, type: 'act', fs: 17, node: 'chemsex_ssex', title: 'PrEP y PPE', text: 'PrEP con tenofovir-emtricitabina: reducción relativa de la infección por VIH del 86 % diaria (McCormack 2016) y a demanda (Molina 2015). Indicada junto a prácticas sexuales más seguras; contraindicada si el estado frente al VIH-1 es desconocido o positivo (Truvada, FT 4.1 y 4.3).' }),
      F.box('i_ss', { x: c4[2].x, y: y + 22, w: c4[2].w, type: 'act', fs: 17, title: 'Salud sexual', text: 'Pruebas de ITS al menos anuales en GBHSH; con alto riesgo, VIH, sífilis, gonococo y clamidia cada 3-6 meses y hepatitis C cada 12 meses; vigilar la reinfección por hepatitis C (Ministerio de Sanidad 2020).' }),
      F.box('i_psi', { x: c4[3].x, y: y + 22, w: c4[3].w - 16, type: 'act', fs: 17, node: 'entrev_motiv', title: 'Intervención psicológica', text: 'Entrevista motivacional (Ministerio de Sanidad 2020). La TCC afirmativa centrada en el estrés de minorías redujo la depresión, los problemas con el alcohol y el sexo sin preservativo en un ensayo con 63 hombres gais y bisexuales jóvenes, no específico del chemsex (Pachankis 2015).' })
    ];
    eqH(...lv1);
    y = bot(lv1[0]) + G;
    const lv2 = [
      F.box('i_dep', { x: c4[0].x + 16, y, w: c4[0].w - 16, type: 'act', fs: 17, node: 'tcs', title: 'Tratamiento de la dependencia', text: 'Metanfetamina en GBHSH: manejo de contingencias, solo o con TCC, mejor que la TCC estándar en retención y orinas negativas (Shoptaw 2005). GHB: en 274 ingresos, la desintoxicación con GHB farmacéutico se completó en el 85 % y el 69 % recayó en 3 meses (Dijkstra 2017); el oxibato sódico solo está indicado en la narcolepsia con cataplejía (Xyrem, FT 4.1).' }),
      F.box('i_sm', { x: c4[1].x, y, w: c4[1].w, type: 'act', fs: 17, node: 'lgb_afirm', title: 'Salud mental', text: 'Valorar psicosis, depresión y conducta suicida; diagnóstico del trastorno por consumo con criterios DSM-5 y valoración del policonsumo (Ministerio de Sanidad 2020). Psicoterapia afirmativa LGTBIQ (véase la ficha).' }),
      F.box('i_com', { x: c4[2].x, y, w: c4[2].w, type: 'act', fs: 17, node: 'chemsex_atencion', title: 'Recursos comunitarios', text: 'Entidades LGTBQ+ como referencia; pares formados como agentes de salud y cibereducadores; consultas integradas de varios servicios en un mismo espacio (Ministerio de Sanidad 2020).' }),
      F.box('i_ev', { x: c4[3].x, y, w: c4[3].w - 16, type: 'info', fs: 17, title: 'Evidencia de eficacia', text: 'Escasa y heterogénea: 12 estudios, sin acuerdo sobre la mejor estrategia (Íncera-Fernández 2025). Se piden modelos de reducción de daños adaptados a cada subgrupo (Strong 2022) y formación en todos los servicios (Hillier 2024).' })
    ];
    eqH(...lv2);
    const gb = bot(lv2[0]) + 18;
    F.group({ x: X, y: gy, w: IW, h: gb - gy, label: 'Oferta integrada: se parte de las necesidades y prioridades que percibe la persona (Ministerio de Sanidad 2020)', fill: '#fafaf7' });
    lv1.forEach((b, i) => F.arrow(entry, b, { from: 'b', to: 't', fa: [0.12, 0.37, 0.63, 0.88][i] }));
    F.arrow(entry, urg, { from: 'r', to: 'l', label: 'Si hay alarma' });
    y = gb + 46;

    // ───────── 5. Principios
    y = F.band(y, 'Con qué principios: atención afirmativa y no estigmatizante', { n: 5 }) + 22;
    const c3 = cols(3, G);
    const p = [
      F.box('p_jui', { x: c3[0].x, y, w: c3[0].w, type: 'dx', fs: 18, node: 'genero', title: 'Sin juicio moral ni estigma', text: 'Evitar la discriminación y la estigmatización; tener en cuenta la orientación sexual, la vivencia del VIH y los condicionantes culturales (Ministerio de Sanidad 2020). El miedo al juicio aleja de la ayuda profesional (Bourne 2015).' }),
      F.box('p_cen', { x: c3[1].x, y, w: c3[1].w, type: 'dx', fs: 18, node: 'red_danos', title: 'Centrada en la persona', text: 'Partir de las necesidades, prioridades y motivaciones de la persona; integrar enfoques de abstinencia y de reducción de riesgos. Muchas demandas iniciales no buscan la abstinencia (Ministerio de Sanidad 2020).' }),
      F.box('p_cul', { x: c3[2].x, y, w: c3[2].w, type: 'dx', fs: 18, node: 'lgb_afirm', title: 'Competencia cultural e inclusión', text: 'La formación debe incluir competencias culturales LGTBQ+ (Ministerio de Sanidad 2020). Incluir a mujeres trans, personas no binarias y otras orientaciones, poco visibles en los estudios (Rodríguez-González 2025).' })
    ];
    eqH(...p);
    y = bot(p[0]) + 40;

    F.box('lim', { x: X, y, w: IW, type: 'lim', fs: 18, align: 'left', title: 'Límites', text: 'Esquema docente, no algoritmo: no sustituye al juicio clínico, a los protocolos locales ni a toxicología. Las asociaciones del bloque 2 no prueban causalidad y proceden sobre todo de GBHSH de países de renta alta; ninguna fuente citada aporta datos propios suficientes de mujeres trans ni de personas no binarias. Las cifras proceden de muestras clínicas o de conveniencia y no son prevalencias poblacionales. Los ensayos de PrEP y de TCC afirmativa no se hicieron en personas que practican chemsex. No contiene dosis ni pautas de consumo o de tratamiento; la desintoxicación de GHB requiere supervisión especializada [fuente no localizada]. No se han localizado guías NICE ni de GuíaSalud específicas del chemsex ni un consenso clínico de la EMCDDA/EUDA [fuente no localizada].' });

    F.footer('Fuentes: Ministerio de Sanidad 2020 (documento técnico Abordaje del fenómeno del chemsex); Maxwell 2019; Edmundson 2018; González-Baeza 2018 y 2023; Pufall 2018; Rosińska 2018; Meyer 2003; Pollard 2018; Lafortune 2021; Deimel 2016; Hibbert 2019; Bourne 2015 (2 artículos); Dolengevich-Segal 2019; Schreck 2021; Hockenhull 2017; Moreno-Gámez 2022; Íncera-Fernández 2021 y 2025; Strasser 2023; Connolly 2025; McCormack 2016; Molina 2015; Strong 2022; Pozo-Herce 2024; Pachankis 2015; Shoptaw 2005; Dijkstra 2017; Hillier 2024; Rodríguez-González 2025; fichas técnicas AEMPS-CIMA (Truvada, Xyrem); CIE-11 MMS (OMS); DSM-5-TR. Esquema docente de comprensión y abordaje: no es una guía de consumo ni de tratamiento.');
    return F;
  }
};
