// Matriz: antipsicóticos por indicación y papel (monoterapia frente a adyuvante).
// Rangos tomados del texto completo de CANMAT/ISBD 2018 (PMC5947163) y CANMAT 2023 (PMC11351064), leídos en noviembre de 2026;
// ensayos comprobados en PubMed (resúmenes). Las guías prevalecen sobre la ficha técnica; «FT» es solo una nota neutra.
module.exports = {
  key: 'mat_antipsicoticos_usos',
  meta: {
    title: 'Antipsicóticos por indicación: monoterapia frente a adyuvante, según las guías',
    kind: 'mat',
    cap: 'Matriz de 15 antipsicóticos (columnas) por indicación y papel (filas): esquizofrenia (episodio agudo, mantenimiento, síntomas negativos predominantes, resistencia), trastorno bipolar (manía en monoterapia o añadida a litio o valproato, mantenimiento, depresión bipolar en monoterapia o añadida) y depresión unipolar (adyuvante de ISRS/IRSN, monoterapia y depresión con síntomas psicóticos). Cada celda lleva símbolo y texto: ● primera línea, ◆ segunda, △ tercera, ✕ no recomendado, ○ evidencia negativa o insuficiente, ◇ ensayo o metaanálisis favorable sin rango en las guías citadas y — sin datos o sin recomendación; la etiqueta indica la guía (C18 = CANMAT/ISBD 2018; C23 = CANMAT 2023; APA = APA 2020) y «FT» señala que la indicación figura en la ficha técnica española, como nota neutra: manda la guía. Destaca lo que es eficaz como adyuvante pero no solo (ziprasidona con escitalopram en la depresión unipolar; olanzapina con sertralina en la depresión psicótica), el contraste del aripiprazol (adyuvante de 1.ª línea en la depresión unipolar, no recomendado en monoterapia en la depresión bipolar) y lo contrario (paliperidona y ziprasidona en la manía: eficaces solas, sin recomendación específica añadidas a litio o valproato). La banda inferior resume las potenciaciones mejor respaldadas por función. Sin dosis; no sustituye a la ficha técnica ni al juicio clínico.',
    refs: [
      'Yatham LN et al. (2018). Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord 20:97-170 · PMID 29536616 (texto completo PMC5947163: tablas 12-18 y apartados 3.3, 4.4 y 5.5)',
      'Lam RW et al. (2024). Canadian Network for Mood and Anxiety Treatments 2023 update on clinical guidelines for management of major depressive disorder in adults. Can J Psychiatry 69:641-687 · PMID 38711351 (texto completo PMC11351064: preguntas 3 y 7)',
      'Keepers GA et al. (2020). The American Psychiatric Association practice guideline for the treatment of patients with schizophrenia. Am J Psychiatry 177:868-872 · PMID 32867516 (sin resumen en PubMed; enunciados 4 [1A], 5 [1A], 6 [2B] y 7 [1B] comprobados en las diapositivas oficiales de la guía, psychiatry.org)',
      'NICE (2014, última actualización de 4 de septiembre de 2026). Psychosis and schizophrenia in adults: prevention and management. Clinical guideline CG178, recomendaciones 1.3.5.1 y 1.5.7.2',
      'Galderisi S et al. (2021). EPA guidance on treatment of negative symptoms in schizophrenia. Eur Psychiatry 64:e21 · PMID 33726883',
      'Krause M et al. (2018). Antipsychotic drugs for patients with schizophrenia and predominant or prominent negative symptoms: a systematic review and meta-analysis. Eur Arch Psychiatry Clin Neurosci 268:625-639 · PMID 29368205',
      'Barnes TR et al. (2017). Amisulpride augmentation in clozapine-unresponsive schizophrenia (AMICUS): a double-blind, placebo-controlled, randomised trial of clinical effectiveness and cost-effectiveness. Health Technol Assess 21:1-56 · PMID 28869006',
      'Tiihonen J et al. (2019). Association of antipsychotic polypharmacy vs monotherapy with psychiatric rehospitalization among adults with schizophrenia. JAMA Psychiatry 76:499-507 · PMID 30785608',
      'Petrides G et al. (2015). Electroconvulsive therapy augmentation in clozapine-resistant schizophrenia: a prospective, randomized study. Am J Psychiatry 172:52-58 · PMID 25157964',
      'Hay A et al. (2015). Asenapine versus placebo for schizophrenia. Cochrane Database Syst Rev 2015:CD011458 · PMID 26599405',
      'Correll CU et al. (2020). Efficacy and safety of lumateperone for treatment of schizophrenia: a randomized clinical trial. JAMA Psychiatry 77:349-358 · PMID 31913424',
      'Calabrese JR et al. (2021). Efficacy and safety of lumateperone for major depressive episodes associated with bipolar I or bipolar II disorder: a phase 3 randomized placebo-controlled trial. Am J Psychiatry 178:1098-1106 · PMID 34551584',
      'Durgam S et al. (2025). Adjunctive lumateperone in patients with major depressive disorder: results from a randomized, double-blind, phase 3 trial. Am J Psychiatry 182:1072-1082 · PMID 41320817',
      'Dunner DL et al. (2007). Efficacy and tolerability of adjunctive ziprasidone in treatment-resistant depression: a randomized, open-label, pilot study. J Clin Psychiatry 68:1071-1077 · PMID 17685744',
      'Papakostas GI et al. (2015). Ziprasidone augmentation of escitalopram for major depressive disorder: efficacy results from a randomized, double-blind, placebo-controlled study. Am J Psychiatry 172:1251-1258 · PMID 26085041',
      'Papakostas GI et al. (2012). A 12-week, randomized, double-blind, placebo-controlled, sequential parallel comparison trial of ziprasidone as monotherapy for major depressive disorder. J Clin Psychiatry 73:1541-1547 · PMID 23290327',
      'Weisler R et al. (2009). Extended release quetiapine fumarate monotherapy for major depressive disorder: results of a double-blind, randomized, placebo-controlled study. CNS Spectr 14:299-313 · PMID 19668121',
      'Suppes T et al. (2016). Lurasidone for the treatment of major depressive disorder with mixed features: a randomized, double-blind, placebo-controlled study. Am J Psychiatry 173:400-407 · PMID 26552942',
      'Meyers BS et al. (2009). A double-blind randomized controlled trial of olanzapine plus sertraline vs olanzapine plus placebo for psychotic depression: the study of pharmacotherapy of psychotic depression (STOP-PD). Arch Gen Psychiatry 66:838-847 · PMID 19652123',
      'Rothschild AJ et al. (2004). A double-blind, randomized study of olanzapine and olanzapine/fluoxetine combination for major depression with psychotic features. J Clin Psychopharmacol 24:365-373 · PMID 15232326',
      'Wijkstra J et al. (2015). Pharmacological treatment for psychotic depression. Cochrane Database Syst Rev 2015:CD004044 · PMID 26225902',
      'de Silva VA et al. (2016). Metformin in prevention and treatment of antipsychotic induced weight gain: a systematic review and meta-analysis. BMC Psychiatry 16:341 · PMID 27716110',
      'Fleischhacker WW et al. (2010). Effects of adjunctive treatment with aripiprazole on body weight and clinical efficacy in schizophrenia patients treated with clozapine: a randomized, double-blind, placebo-controlled trial. Int J Neuropsychopharmacol 13:1115-1125 · PMID 20459883',
      'AEMPS-CIMA (2026). Fichas técnicas, apartado 4.1 (indicaciones): Haloperidol Esteve (58343), Largactil (23665), Risperdal (60336), Invega (107395045), Zyprexa (96022009), Seroquel (63055) y Seroquel Prolong (69646), Zeldox (64851), Solian (63994; también apartado 5.1), Abilify (04276007), Rxulti (1181294003), Reagila (1171209001), Latuda (114913009), Sycrest (10640002), Leponex (59547) y Spravato (1191410001); lumateperona y la combinación olanzapina-fluoxetina no figuran en CIMA (consulta directa de CIMA, noviembre de 2026)',
      'AEMPS-CIMA (2025). Ficha técnica de Plenur 400 mg comprimidos de liberación modificada (carbonato de litio) (n.º de registro 48932), apartados 4.1 y 4.3',
      'AEMPS-CIMA (2026). Ficha técnica de Depakine Crono 500 mg comprimidos de liberación prolongada (valproato) (n.º de registro 60350), apartados 4.3 y 4.4; revisión del texto de septiembre de 2026'
    ],
    nodes: ['ap_atipicos', 'ap_tipicos', 'ap_lai', 'sertralina', 'escitalopram', 'isrs', 'tb1', 'clozapina_monit', 'esqneg']
  },
  draw(Fig) {
    const W = 2560, X = 50, FS = 15;
    const F = new Fig({ key: 'mat_antipsicoticos_usos', title: 'Antipsicóticos por indicación: monoterapia frente a adyuvante, según las guías', desc: 'Matriz de quince antipsicóticos por indicación y papel en esquizofrenia, trastorno bipolar y depresión unipolar, con símbolo y texto en cada celda, la guía que respalda el rango (CANMAT/ISBD 2018, CANMAT 2023, APA 2020) y una marca neutra cuando la indicación figura en la ficha técnica española. Incluye un recuadro sobre lo que funciona como adyuvante pero no en monoterapia, una banda con las potenciaciones mejor respaldadas por función, las restricciones del valproato y del litio y los límites de la figura.', w: W });
    const drugs = [
      ['Haloperidol', 'haloperidol'], ['Clorpromazina', 'clorpromazina'], ['Risperidona', 'risperidona'], ['Paliperidona', 'paliperidona'],
      ['Olanzapina (y OFC)', 'olanzapina'], ['Quetiapina', 'quetiapina'], ['Ziprasidona', 'ziprasidona'], ['Amisulprida', 'amisulprida'],
      ['Aripiprazol', 'aripiprazol'], ['Brexpiprazol', 'brexpiprazol'], ['Cariprazina', 'cariprazina'], ['Lurasidona', 'lurasidona'],
      ['Asenapina', 'asenapina'], ['Clozapina', 'clozapina'], ['Lumateperona (FDA; sin UE)', 'lumateperona']
    ];
    const LW = 300, CW = 144;
    const cols = [{ w: LW, label: 'Indicación y papel' }].concat(drugs.map(d => ({ w: CW, label: d[0] })));
    const c = (sym, t) => ({ sym, t: (sym === '◆' ? '2.ª ' : sym === '△' ? '3.ª ' : '') + t });
    const N = '—';
    let y = 96;
    y = F.text(X, y + 18, 'Cómo leerla: ● primera línea · ◆ segunda línea · △ tercera línea · ✕ no recomendado · ○ evidencia negativa o insuficiente · ◇ ensayo o metaanálisis favorable, sin rango en las guías citadas · — sin datos o sin recomendación. Etiquetas: C18 = CANMAT/ISBD 2018 (trastorno bipolar); C23 = CANMAT 2023 (depresión mayor); APA = APA 2020 (esquizofrenia); FT = la indicación figura en la ficha técnica española (nota neutra: manda la guía); FDA = autorizado solo en EE. UU. OFC = combinación olanzapina-fluoxetina. En esquizofrenia, APA 2020 y NICE CG178 no jerarquizan: ● = antipsicótico recomendado, elegido por perfil de efectos adversos. Sin dosis.', { fs: 19, w: W - 2 * X }) + 14;

    // fila de fichas enlazadas, alineada con las columnas
    drugs.forEach((d, i) => F.box('f_' + d[1], { x: X + LW + i * CW + 3, y, w: CW - 6, type: 'drug', fs: 14, text: d[0], node: d[1], minH: 62 }));
    y += 62 + 8;
    F.text(X, y + 4, '↑ Cada recuadro abre la ficha del fármaco en el atlas; las filas enlazan con la ficha de la indicación.', { fs: 16, fill: '#333' });
    y += 30;

    // 1. Esquizofrenia y psicosis
    y = F.band(y, 'Esquizofrenia y psicosis (APA 2020; NICE CG178)', { n: 1 }) + 12;
    let t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Episodio agudo (esquizofrenia)', node: 'esq' },
        c('●', 'APA · FT'), c('●', 'APA · FT'), c('●', 'APA · FT'), c('●', 'APA · FT'), c('●', 'APA · FT'), c('●', 'APA · FT'), c('●', 'APA · FT'), c('●', 'APA · FT'),
        c('●', 'APA · FT'), c('●', 'APA · FT'), c('●', 'APA · FT'), c('●', 'APA · FT'),
        c('○', 'evidencia baja (Hay 2015); sin FT en esquizofrenia'), c(N, 'reservada a la resistencia (FT; NICE)'), c('◇', 'ECA positivo (Correll 2020) · FDA')],
      [{ t: 'Mantenimiento (mismo fármaco que respondió)', node: 'retirada_ap' },
        c('●', 'APA · FT'), c('●', 'APA · FT'), c('●', 'APA · FT · inyectable'), c('●', 'APA · FT · inyectable'), c('●', 'APA · FT · inyectable'), c('●', 'APA · FT'), c('●', 'APA · FT'),
        c('●', 'APA · FT; recaídas no demostradas en ensayos ciegos (FT 5.1)'), c('●', 'APA · FT · inyectable'), c('●', 'APA · FT'), c('●', 'APA · FT'), c('●', 'APA · FT'),
        c(N, ''), c('●', 'si respondió (APA)'), c(N, '')],
      [{ t: 'Síntomas negativos predominantes', node: 'esqneg' },
        c('○', 'EPA: pasar a 2.ª generación (Galderisi 2021)'), c('○', 'EPA: pasar a 2.ª generación (Galderisi 2021)'), c(N, ''), c(N, ''), c('◇', '> haloperidol, 1 ECA pequeño (Krause 2018)'), c(N, ''), c(N, ''),
        c('◇', 'único > placebo (Krause 2018)'), c(N, ''), c(N, ''), c('◇', '> risperidona, 1 ECA (Krause 2018)'), c(N, ''), c(N, ''), c(N, ''), c(N, '')],
      [{ t: 'Resistente (≥ 2 fracasos) y resistente a clozapina', node: 'cloz' },
        c(N, ''), c(N, ''), c(N, ''), c(N, ''), c(N, ''), c(N, ''), c(N, ''),
        c('○', '+ clozapina: AMICUS no significativo (Barnes 2017)'), c('◇', '+ clozapina: menos reingresos (Tiihonen 2019)'), c(N, ''), c(N, ''), c(N, ''), c(N, ''),
        c('●', 'APA · NICE · FT; si falla, potenciar (banda 4)'), c(N, '')]
    ] });
    y = t.y + 30;

    // 2. Trastorno bipolar
    y = F.band(y, 'Trastorno bipolar (CANMAT/ISBD 2018)', { n: 2 }) + 12;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Manía aguda en monoterapia', node: 'ep_mania' },
        c('◆', 'C18 · FT'), c('△', 'C18 · FT (agitación)'), c('●', 'C18 · FT'), c('●', 'C18'), c('◆', 'C18 · FT'), c('●', 'C18 · FT'), c('◆', 'C18 · FT'), c(N, ''),
        c('●', 'C18 · FT'), c(N, ''), c('●', 'C18 · FDA'), c(N, ''), c('●', 'C18 · FT'), c('△', 'C18'), c(N, '')],
      [{ t: 'Manía aguda añadida a litio o valproato', node: 'lm_bip' },
        c('△', 'C18'), c(N, ''), c('●', 'C18'), c('○', 'ensayos negativos; «sin recomendación específica» (C18)'), c('◆', 'C18'), c('●', 'C18'), c('○', 'ensayos negativos; «sin recomendación específica» (C18)'), c(N, ''),
        c('●', 'C18'), c(N, ''), c(N, ''), c(N, ''), c('●', 'C18'), c('△', 'C18'), c(N, '')],
      [{ t: 'Mantenimiento del trastorno bipolar I', node: 'tb1' },
        c(N, ''), c(N, ''), c('◆', 'C18 (inyectable, solo o añadido)'), c('◆', 'C18'), c('◆', 'C18 · FT; OFC △ 3.ª C18'), c('●', 'C18, solo o + Li/VPA · FT'), c('◆', 'C18, únicamente añadida a Li/VPA'), c(N, ''),
        c('●', 'C18, solo o + Li/VPA · FT'), c(N, ''), c(N, 'sin recomendación (C18)'), c('◆', 'C18, únicamente añadida a Li/VPA'), c('●', 'C18'), c('△', 'C18, adyuvante'), c(N, '')],
      [{ t: 'Depresión bipolar I en monoterapia', node: 'dep_bip_tx' },
        c(N, ''), c(N, ''), c(N, ''), c(N, ''), c('△', 'C18; OFC ◆ 2.ª C18 · FDA'), c('●', 'C18 · FT'), c('✕', 'C18 (ineficaz)'), c(N, ''),
        c('✕', 'C18 (ineficaz)'), c(N, ''), c('◆', 'C18 · FDA'), c('●', 'C18 · FDA'), c(N, ''), c(N, ''), c('◇', 'ECA positivo (Calabrese 2021) · FDA')],
      [{ t: 'Depresión bipolar I añadida a litio o valproato', node: 'vpa_bip' },
        c(N, ''), c(N, ''), c(N, 'sin recomendación (C18)'), c(N, ''), c(N, ''), c(N, 'no evaluada como adyuvante (C18)'), c('✕', 'C18 (ineficaz)'), c(N, ''),
        c('△', 'C18'), c(N, ''), c(N, ''), c('●', 'C18'), c('△', 'C18'), c(N, ''), c(N, '')]
    ] });
    y = t.y + 30;

    // 3. Depresión unipolar
    y = F.band(y, 'Depresión unipolar (CANMAT 2023)', { n: 3 }) + 12;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Adyuvante de ISRS/IRSN con respuesta insuficiente', node: 'drt' },
        c(N, ''), c(N, ''), c('◆', 'C23'), c(N, ''), c('◆', 'C23'), c('◆', 'C23 (liberación prolongada) · FT'),
        c('△', 'C23 (ECA dispares): + escitalopram positivo (Papakostas 2015); + sertralina, piloto abierto no significativo (Dunner 2007)'), c(N, ''),
        c('●', 'C23'), c('●', 'C23'), c('◆', 'C23'), c(N, ''), c(N, ''), c(N, ''), c('◇', 'ECA positivo (Durgam 2025)')],
      [{ t: 'Monoterapia', node: 'ddm' },
        c(N, ''), c(N, ''), c(N, ''), c(N, ''), c(N, ''), c('◆', 'C23 (tabla 3.3); ECA positivo con liberación prolongada (Weisler 2009); sin FT'), c('○', 'ECA negativo (Papakostas 2012)'), c(N, ''),
        c(N, ''), c(N, ''), c(N, ''), c('◆', 'C23, solo con rasgos mixtos (Suppes 2016)'), c(N, ''), c(N, ''), c(N, '')],
      [{ t: 'Depresión con síntomas psicóticos: antipsicótico + antidepresivo (C23)', node: 'dpsic' },
        c(N, ''), c(N, ''), c(N, ''), c(N, ''), c('●', '+ sertralina (STOP-PD, Meyers 2009); sola ○ (Rothschild 2004)'), c(N, ''), c(N, ''), c(N, ''),
        c(N, ''), c(N, ''), c(N, ''), c(N, ''), c(N, ''), c(N, ''), c(N, '')]
    ] });
    y = t.y + 14;
    y = F.text(X, y + 16, 'Depresión psicótica: C23 recomienda la combinación de antidepresivo y antipsicótico atípico, o TEC, sin preferir un fármaco; en la revisión Cochrane la combinación superó al antidepresivo solo (RR 1,49), al antipsicótico solo (RR 1,83) y al placebo, y no hubo pruebas de eficacia de ninguna monoterapia (Wijkstra 2015). Las celdas con «—» indican ausencia de ensayo específico localizado, no ineficacia.', { fs: 17, w: W - 2 * X }) + 20;

    // recuadro clave: adyuvante sí, solo no (y al revés)
    const M = new Fig({ key: 'medida', title: 'medida', w: W });
    const kbo = { x: X, y, w: W - 2 * X, type: 'q', align: 'left', fs: 18, node: 'ziprasidona',
      title: '¿Eficaz como adyuvante pero no solo? Lo que dicen los ensayos',
      text: '• Ziprasidona en la depresión unipolar: añadida a escitalopram superó al placebo (respuesta 35,2 % frente a 20,5 %; Papakostas 2015); en monoterapia no superó al placebo (Papakostas 2012). Con sertralina, el ensayo localizado fue un piloto aleatorizado abierto de 64 personas, con mejoría numérica pero sin diferencias significativas frente a sertralina sola (Dunner 2007): la afirmación «eficaz con sertralina» no está respaldada; sí «eficaz con escitalopram». En la depresión bipolar es ✕ tanto sola como añadida (C18).\n• Olanzapina en la depresión psicótica: con sertralina, remisión del 41,9 % frente al 23,9 % con olanzapina sola (Meyers 2009); sola no superó al placebo en dos ensayos (Rothschild 2004).\n• Aripiprazol en la depresión: en la bipolar es ✕ en monoterapia y △ (3.ª línea) como adyuvante (C18); en la unipolar, ● (1.ª línea) como adyuvante (C23).\n• Al revés, eficaz solo pero no añadido: paliperidona y ziprasidona en la manía tienen eficacia en monoterapia (nivel 1), pero sus ensayos añadidos a litio o valproato fueron negativos (nivel 2 negativo); C18 desaconseja usarlas en combinación y las clasifica como «sin recomendación específica, requieren más estudio», no como «no recomendadas», porque atribuye el fracaso a problemas metodológicos.' };
    const kb = F.box('adyuvante', Object.assign({}, kbo, { minH: M.box('mk', kbo).h + 44 }));
    y = kb.y + kb.h + 30;

    // 4. Potenciaciones por función
    y = F.band(y, 'Mejores potenciaciones del antipsicótico por función', { n: 4 }) + 20;
    const bw = (W - 2 * X - 4 * 20) / 5;
    const pT = [
      ['p_psic', 'cloz', 'Psicosis resistente', 'Clozapina primero (APA; NICE 1.5.7.2). Si no responde: + aripiprazol, con menos reingresos en cohorte (Tiihonen 2019); + amisulprida, ECA AMICUS no significativo e infradimensionado (Barnes 2017); + TEC, respuesta 50 % frente a 0 % (Petrides 2015). Síntomas negativos: añadir un antidepresivo es una opción (Galderisi 2021).'],
      ['p_mania', 'vpa_bip', 'Manía', 'Antipsicótico + litio o valproato: ● 1.ª línea con quetiapina, aripiprazol, risperidona o asenapina; ◆ 2.ª con olanzapina (C18). Con la combinación responde en torno a un 20 % más de pacientes que con el estabilizador solo (C18).'],
      ['p_depbip', 'dep_bip_tx', 'Depresión bipolar', 'Litio o valproato + lurasidona: ● 1.ª línea (C18). Quetiapina: ● 1.ª línea en monoterapia; como adyuvante no se ha evaluado, aunque C18 admite añadirla en quien se deprime con litio o quetiapina optimizados.'],
      ['p_depuni', 'esketamina', 'Depresión unipolar', 'Potenciar el ISRS/IRSN con aripiprazol o brexpiprazol (● 1.ª línea) o cariprazina, quetiapina de liberación prolongada, olanzapina o risperidona (◆ 2.ª) (C23). La esketamina intranasal está autorizada como añadido a un ISRS/IRSN tras ≥ 2 antidepresivos fallidos y C23 la deja en ◆ 2.ª línea; aquí no se prioriza.'],
      ['p_metab', 'peso_psicof', 'Manejo metabólico', 'Metformina: −3,27 kg frente a placebo con antipsicóticos (de Silva 2016). Aripiprazol añadido a clozapina: −2,15 kg frente a placebo a las 16 semanas, sin cambio en la PANSS (Fleischhacker 2010).']
    ];
    const ph = Math.max(...pT.map((p, i) => M.box('m' + i, { x: X, y: 100 + i * 1000, w: bw, fs: 17, align: 'left', type: 'act', title: p[2], text: p[3] }).h));
    let bot = y;
    pT.forEach((p, i) => { const b = F.box(p[0], { x: X + i * (bw + 20), y, w: bw, type: 'act', align: 'left', fs: 17, node: p[1], title: p[2], text: p[3], minH: ph }); bot = Math.max(bot, b.y + b.h); });
    y = bot + 36;

    // 5. Seguridad de los estabilizadores y límites
    y = F.band(y, 'Restricciones de los estabilizadores asociados y límites', { n: 5 }) + 20;
    const sw = (W - 2 * X - 2 * 30) / 3;
    const sT = [
      { id: 'vpa', node: 'valproato_fertil', type: 'warn', title: 'Valproato (ficha técnica de Depakine Crono, apdos. 4.3 y 4.4)', text: 'Contraindicado en el embarazo y, en personas con capacidad de gestar, salvo que se cumplan las condiciones del Plan de Prevención de Embarazos (la ficha habla de «mujeres en edad fértil»). Afecta a toda combinación «antipsicótico + valproato» de esta figura.' },
      { id: 'li', node: 'litio_embarazo', type: 'warn', title: 'Litio (ficha técnica de Plenur, apdos. 4.1 y 4.3)', text: 'Indicado en el tratamiento y la prevención de los episodios maníaco-depresivos del trastorno bipolar y como tratamiento adicional en la depresión mayor resistente. Embarazo y lactancia figuran como contraindicación. Para el litio prevalece la ficha técnica.' },
      { id: 'lim', node: null, type: 'lim', title: 'Límites de la figura', text: 'Esquema docente: no sustituye al juicio clínico ni a la ficha técnica vigente. Rangos de CANMAT (canadienses) y APA (estadounidense); NICE, WFSBP y BAP pueden diferir y no se recogen celda a celda. C18 es anterior a la lumateperona. «—» no significa ineficaz. Sin dosis, sin población pediátrica ni geriátrica.' }
    ];
    const sh = Math.max(...sT.map((s, i) => M.box('s' + i, { x: X, y: 100 + i * 1000, w: sw, fs: 17, align: 'left', type: s.type, title: s.title, text: s.text }).h)) + 44;
    sT.forEach((s, i) => F.box(s.id, { x: X + i * (sw + 30), y, w: sw, type: s.type, align: 'left', fs: 17, node: s.node || undefined, title: s.title, text: s.text, minH: sh }));
    F.footer('Fuentes principales: CANMAT/ISBD 2018 (Yatham 2018, PMID 29536616) y CANMAT 2023 (Lam 2024, PMID 38711351), leídas en texto completo; APA 2020 (Keepers 2020) y NICE CG178; ensayos y metaanálisis citados en cada celda (PubMed); fichas técnicas AEMPS-CIMA (apartado 4.1) de cada antipsicótico, de Plenur y de Depakine Crono (consulta de noviembre de 2026). Esquema docente: no sustituye al juicio clínico.');
    return F;
  }
};
