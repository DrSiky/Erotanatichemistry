// Matriz: efectos adversos comparados de 15 antipsicóticos (figura hermana de mat_antipsicoticos_usos).
// Cifras leídas en las figuras de los textos completos de Huhn 2019 (PMC6891890, figura 4) y Pillinger 2020 (PMC7029416, figuras 2 y 3),
// tabla 3 de Solmi 2017 (PMC5499790) y fichas técnicas AEMPS-CIMA (apartados 4.3, 4.4 y 4.8) descargadas en noviembre de 2026.
// Los umbrales que convierten cada cifra en ○/●/●●/●●● son de esta figura (convención docente), no de las fuentes.
module.exports = {
  key: 'mat_antipsicoticos_efectos',
  meta: {
    title: 'Antipsicóticos: matriz comparada de efectos adversos',
    kind: 'mat',
    cap: 'Matriz de 15 antipsicóticos (las mismas columnas que la figura de indicaciones) por efecto adverso (filas): síntomas extrapiramidales, acatisia, hiperprolactinemia, aumento de peso, alteraciones de la glucosa y los lípidos, sedación, efectos anticolinérgicos, hipotensión ortostática, prolongación del QTc, neutropenia o agranulocitosis, convulsiones, miocarditis y síndrome neuroléptico maligno. Cada celda lleva símbolo y cifra: ○ mínimo, ● bajo, ●● moderado, ●●● alto, ◇ dato de un único ensayo (lumateperona), ! advertencia de clase en la ficha técnica sin gradación y — sin datos. Las cifras proceden del metaanálisis en red de Huhn 2019 en esquizofrenia aguda (razones de riesgo, kilos, ng/ml y milisegundos frente a placebo; «ns» = intervalo de credibilidad que incluye el valor nulo), del metaanálisis en red metabólico de Pillinger 2020, de la escala relativa de la revisión de Solmi 2017 cuando no hay metaanálisis en red (hipotensión ortostática y huecos) y de las fichas técnicas españolas (apartados 4.3, 4.4 y 4.8); los umbrales que convierten cada cifra en símbolos son una convención de la figura y se indican en cada fila. La banda inferior resume la monitorización de la clozapina (neutropenia y miocarditis), las contraindicaciones de ficha por QTc, el síndrome neuroléptico maligno, la prolactina, el metabolismo, la concordancia con Leucht 2013 y los límites. Sin dosis; no sustituye a la ficha técnica ni al juicio clínico.',
    refs: [
      'Huhn M et al. (2019). Comparative efficacy and tolerability of 32 oral antipsychotics for the acute treatment of adults with multi-episode schizophrenia: a systematic review and network meta-analysis. Lancet 394:939-951 · PMID 31303314 (texto completo PMC6891890; cifras por fármaco leídas en la figura 4, paneles A-G)',
      'Pillinger T et al. (2020). Comparative effects of 18 antipsychotics on metabolic function in patients with schizophrenia, predictors of metabolic dysregulation, and association with psychopathology: a systematic review and network meta-analysis. Lancet Psychiatry 7:64-77 · PMID 31860457 (texto completo PMC7029416; figuras 2 y 3)',
      'Leucht S et al. (2013). Comparative efficacy and tolerability of 15 antipsychotic drugs in schizophrenia: a multiple-treatments meta-analysis. Lancet 382:951-962 · PMID 23810019',
      'Solmi M et al. (2017). Safety, tolerability, and risks associated with first- and second-generation antipsychotics: a state-of-the-art clinical review. Ther Clin Risk Manag 13:757-777 · PMID 28721057 (texto completo PMC5499790; tabla 3, escala relativa 0 a +++)',
      'Myles N et al. (2018). Meta-analysis examining the epidemiology of clozapine-associated neutropenia. Acta Psychiatr Scand 138:101-109 · PMID 29786829',
      'Siskind D et al. (2020). Systematic review and meta-analysis of rates of clozapine-associated myocarditis and cardiomyopathy. Aust N Z J Psychiatry 54:467-481 · PMID 31957459',
      'Trollor JN et al. (2012). Comparison of neuroleptic malignant syndrome induced by first- and second-generation antipsychotics. Br J Psychiatry 201:52-56 · PMID 22626633',
      'Correll CU et al. (2020). Efficacy and safety of lumateperone for treatment of schizophrenia: a randomized clinical trial. JAMA Psychiatry 77:349-358 · PMID 31913424 (texto completo PMC6990963: acontecimientos adversos)',
      'AEMPS-CIMA (2026). Ficha técnica de Leponex 100 mg comprimidos (clozapina) (n.º de registro 59547), apartados 4.2, 4.3, 4.4 y 4.8; revisión del texto de febrero de 2026',
      'AEMPS-CIMA (2026). Fichas técnicas, apartados 4.3, 4.4 y 4.8: Haloperidol Esteve 10 mg (58343; revisión de mayo de 2020), Largactil 25 mg (23665; mayo de 2023), Risperdal 1 mg (60336; agosto de 2022), Invega 6 mg (107395045), Zyprexa 10 mg (96022009), Seroquel 100 mg (63055; julio de 2024), Zeldox 20 mg (64851; octubre de 2022), Solian 100 mg (63994; julio de 2022), Abilify 10 mg (04276007), Rxulti 1 mg (1181294003), Reagila 1,5 mg (1171209001), Latuda 37 mg (114913009) y Sycrest 5 mg (10640002); consulta directa de CIMA en noviembre de 2026; la lumateperona no figura en CIMA'
    ],
    nodes: ['ap_atipicos', 'ap_tipicos', 'biperideno', 'vmat2_td', 'hla_clozapina', 'cloz', 'polifarm']
  },
  draw(Fig) {
    const W = 2560, X = 50, FS = 15;
    const F = new Fig({ key: 'mat_antipsicoticos_efectos', title: 'Antipsicóticos: matriz comparada de efectos adversos', desc: 'Matriz de quince antipsicóticos por trece efectos adversos, con símbolo y cifra en cada celda: razones de riesgo, kilos, ng/ml y milisegundos frente a placebo del metaanálisis en red de Huhn 2019, cambios de glucosa y lípidos de Pillinger 2020, escala relativa de Solmi 2017 y advertencias de las fichas técnicas españolas. Incluye recuadros sobre la monitorización de la clozapina, el QTc, el síndrome neuroléptico maligno, la prolactina, el metabolismo, la lumateperona y los límites de la figura.', w: W });
    const drugs = [
      ['Haloperidol', 'haloperidol'], ['Clorpromazina', 'clorpromazina'], ['Risperidona', 'risperidona'], ['Paliperidona', 'paliperidona'],
      ['Olanzapina', 'olanzapina'], ['Quetiapina', 'quetiapina'], ['Ziprasidona', 'ziprasidona'], ['Amisulprida', 'amisulprida'],
      ['Aripiprazol', 'aripiprazol'], ['Brexpiprazol', 'brexpiprazol'], ['Cariprazina', 'cariprazina'], ['Lurasidona', 'lurasidona'],
      ['Asenapina', 'asenapina'], ['Clozapina', 'clozapina'], ['Lumateperona (FDA; sin UE)', 'lumateperona']
    ];
    const LW = 300, CW = 144;
    const cols = [{ w: LW, label: 'Efecto adverso, medida y fuente' }].concat(drugs.map(d => ({ w: CW, label: d[0] })));
    const c = (sym, t) => ({ sym, t });
    const N = c('—', '');
    let y = 96;
    y = F.text(X, y + 18, 'Cómo leerla: ○ mínimo · ● bajo · ●● moderado · ●●● alto · ◇ dato de un único ensayo aleatorizado (lumateperona; Correll 2020), no comparable con el metaanálisis · ! advertencia de clase en la ficha técnica, sin gradación · — sin datos. La cifra es la estimación frente a placebo del metaanálisis en red de esquizofrenia aguda (Huhn 2019) salvo que se indique otra fuente; «ns» = su intervalo de credibilidad incluye el valor nulo. Los umbrales que convierten cifras en símbolos son una convención de esta figura (se indican en cada fila), no de los autores. FT = ficha técnica AEMPS-CIMA (apartado). Solmi = escala relativa 0 a +++ de Solmi 2017. Sin dosis.', { fs: 19, w: W - 2 * X }) + 14;

    drugs.forEach((d, i) => F.box('f_' + d[1], { x: X + LW + i * CW + 3, y, w: CW - 6, type: 'drug', fs: 14, text: d[0], node: d[1], minH: 62 }));
    y += 62 + 8;
    F.text(X, y + 4, '↑ Cada recuadro abre la ficha del fármaco en el atlas; las filas con ↗ enlazan con la ficha del efecto adverso.', { fs: 16, fill: '#333' });
    y += 30;

    // 1. Motores y prolactina
    y = F.band(y, 'Efectos motores y prolactina (Huhn 2019; figura 4)', { n: 1 }) + 12;
    let t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Síntomas extrapiramidales: uso de antiparkinsonianos, RR (○ < 1,25 · ● < 2 · ●● < 3 · ●●● ≥ 3)', node: 'discin_tard' },
        c('●●●', '3,12'), c('●●', '2,17'), c('●', '1,80'), c('●', '1,61'), c('○', '1,02 ns'), c('○', '1,05 ns'), c('●', '1,70'), c('●', '1,46 ns'),
        c('●', '1,32 ns'), c('●', '1,60 ns'), c('●●', '2,21'), c('●', '1,94'), c('○', '1,21 ns'), c('○', '0,46'), c('◇', 'sin efectos motores relevantes frente a placebo')],
      [{ t: 'Acatisia, RR (mismos umbrales)', node: 'acatisia' },
        c('●●●', '3,76'), c('●●', '2,58'), c('●●', '2,73'), c('●', '1,47 ns'), c('○', '0,99 ns'), c('○', '1,01 ns'), c('●●', '2,11'), c('●●', '2,50'),
        c('●', '1,95'), c('●', '1,35 ns'), c('●●●', '3,16'), c('●●●', '3,93'), c('●●', '2,38'), c('○', '0,17 ns (11 personas)'), N],
      [{ t: 'Hiperprolactinemia: cambio de prolactina, ng/ml (○ < 4 · ● < 15 · ●● < 30 · ●●● ≥ 30)', node: 'hiperprl_ap' },
        c('●●', '18,5'), c('●', '8,7 ns'), c('●●●', '38,0'), c('●●●', '48,5'), c('●', '4,5'), c('○', '−1,2 ns'), c('○', '2,8 ns'), c('●●', '26,9'),
        c('○', '−7,1 (la reduce)'), c('○', '1,0 ns'), c('○', '−3,2 ns'), c('●', '7,0'), c('●', '5,1'), c('○', '−77 (posible artefacto: 2 ECA pequeños)'), c('◇', 'sin cambios endocrinos')]
    ] });
    y = t.y + 30;

    // 2. Cardiometabólicos, sedación y autonómicos
    y = F.band(y, 'Peso, metabolismo, sedación, efectos autonómicos y QTc', { n: 2 }) + 12;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Aumento de peso, kg (○ < 0,5 · ● < 1,5 · ●● < 2,5 · ●●● ≥ 2,5)', node: 'peso_psicof' },
        c('●', '0,54'), c('●●', '2,37'), c('●', '1,44'), c('●', '1,49'), c('●●●', '2,78'), c('●●', '1,94'), c('○', '−0,16 ns'), c('●', '0,84'),
        c('○', '0,48 ns'), c('●', '0,70 ns'), c('●', '0,73 ns'), c('○', '0,32 ns'), c('●', '1,21'), c('●●●', '1,89 (113 personas); 3,01 en Pillinger 2020'), c('◇', 'sin cambios cardiometabólicos')],
      [{ t: 'Glucosa y lípidos, mmol/l (Pillinger 2020): ○ perfil más benigno · ● sin cambios significativos · ●● / ●●● varios parámetros alterados', node: 'peso_psicof' },
        c('●', 'sin cambios significativos'), c('●●●', 'Solmi +++; sin metaanálisis en red'), c('●', 'sin cambios signif. (con paliperidona)'), c('●', 'sin cambios signif. (con risperidona)'),
        c('●●●', 'CT +0,40 · LDL +0,20 · TG +0,46'), c('●●', 'CT +0,31 · LDL +0,17 · TG +0,32'), c('○', 'perfil más benigno'), c('●', 'sin cambios significativos'),
        c('○', 'perfil más benigno'), c('○', 'perfil más benigno'), c('○', 'perfil más benigno; LDL −0,13'), c('○', 'perfil más benigno; glucosa −0,29'), c('●', 'sin cambios significativos'),
        c('●●●', 'glucosa +1,05 · CT +0,56 · TG +0,98'), c('◇', 'sin cambios cardiometabólicos')],
      [{ t: 'Sedación, RR (○ < 1,25 · ● < 2 · ●● < 3 · ●●● ≥ 3)' },
        c('●', '1,92'), c('●●', '2,55'), c('●●', '2,03'), c('●', '1,33'), c('●●', '2,17'), c('●●●', '3,27'), c('●●', '2,91'), c('●', '1,56 ns'),
        c('●', '1,46'), c('●', '1,64 ns'), c('○', '1,12 ns'), c('●', '1,75'), c('●●', '2,17'), c('●●●', '3,02'), c('◇', 'somnolencia 17,3 % frente a 4,0 %')],
      [{ t: 'Efectos anticolinérgicos (≥ 1), RR (mismos umbrales)', node: 'polifarm' },
        c('●', '1,50'), c('●●', '2,58'), c('●', '1,31'), c('●', '1,42 ns'), c('●', '1,94'), c('●●●', '3,89'), c('●', '1,33 ns'), c('●', '1,53 ns'),
        c('●', '1,30 ns'), c('○', '0,72 ns'), c('●', '1,45 ns'), c('○', '1,14 ns'), c('○', '1,11 ns'), c('●●', '2,21'), N],
      [{ t: 'Hipotensión ortostática (Solmi 2017: 0/+ ○ · + ● · ++ ●● · +++ ●●●; sin metaanálisis en red)' },
        c('●●', '++'), c('●●●', '+++\nFT 4.8: muy frecuente'), c('●●', '++\nFT 4.4'), c('●', '+\nFT 4.4: 2,5 % frente a 0,8 %'), c('●●', '++'), c('●●', '++\nFT 4.4'), c('●●', '++'), c('○', '0/+'),
        c('○', '0/+'), c('○', '0/+; FT 4.4'), c('○', '0/+; FT 4.4'), c('○', '0/+; FT 4.4'), c('●', '+; FT 4.4'), c('●●●', '+++\nFT 4.4: colapso raro'), c('◇', '1 abandono por hipotensión ortostática')],
      [{ t: 'Prolongación del QTc, ms (○ < 2 · ● < 5 · ●● < 10 · ●●● ≥ 10)', node: 'qt_psicof' },
        c('○', '1,7 ns · FT 4.3: contraindicado si QTc largo'), c('●', 'sin dato en red; Solmi +; FT 4.4'), c('●', '4,8'), c('○', '1,2 ns'), c('●', '4,3'), c('●', '3,4'), c('●●', '9,7 · FT 4.3: contraindicada si QT largo'), c('●●●', '14,1'),
        c('○', '−0,4 ns'), c('○', '−1,5 ns'), c('○', '−1,5 ns'), c('○', '−2,2 ns'), c('●●', '5,6 ns'), c('●', 'sin dato en red; Solmi +'), N]
    ] });
    y = t.y + 30;

    // 3. Graves e infrecuentes
    y = F.band(y, 'Reacciones graves o infrecuentes (fichas técnicas, Solmi 2017 y metaanálisis específicos)', { n: 3 }) + 12;
    const S0 = c('○', 'Solmi 0/+');
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Neutropenia o agranulocitosis', node: 'clozapina_monit' },
        S0, c('●', 'Solmi +; FT 4.3: contraindicada si agranulocitosis previa'), c('○', 'FT 4.4: agranulocitosis muy rara'), c('○', 'FT 4.4: advertencia de clase'), c('○', 'FT 4.4: precaución si neutrófilos bajos'), S0, S0, c('○', 'FT 4.4: advertencia de clase'),
        S0, c('○', 'FT 4.4: advertencia de clase'), S0, S0, S0, c('●●●', 'neutropenia 3,8 %, grave 0,9 % (Myles 2018); RAN obligatorio (FT)'), N],
      [{ t: 'Convulsiones' },
        c('○', 'Solmi 0/+; FT 4.4: precaución'), c('○', 'Solmi 0/+; FT 4.4: baja el umbral'), c('●', 'Solmi +; FT 4.4: precaución'), c('○', 'Solmi 0/+; FT 4.4: precaución'), c('○', 'Solmi 0/+; FT 4.4: precaución'), c('○', 'Solmi 0/+; FT 4.4: precaución'), c('○', 'Solmi 0/+; FT 4.4: precaución'), c('○', 'Solmi 0/+; FT 4.4: baja el umbral'),
        c('○', 'Solmi 0/+; FT 4.4: precaución'), c('○', 'Solmi 0/+; FT 4.4: precaución'), c('○', 'Solmi 0/+; FT 4.4: precaución'), c('○', 'Solmi 0/+; FT 4.4: precaución'), c('○', 'Solmi 0/+; FT 4.4: precaución'), c('●●', 'Solmi ++; FT 4.4: relacionadas con la dosis'), c('◇', '1 caso; epilepsia excluida')],
      [{ t: 'Miocarditis y miocardiopatía', node: 'miocarditis_cloz' },
        c('○', 'Solmi 0'), c('○', 'Solmi 0'), c('○', 'Solmi 0'), c('○', 'Solmi 0'), c('○', 'Solmi 0'), c('●', 'Solmi 0/+; FT 4.4: casos notificados'), c('○', 'Solmi 0'), c('○', 'Solmi 0'),
        c('○', 'Solmi 0'), c('○', 'Solmi 0'), c('○', 'Solmi 0'), c('○', 'Solmi 0'), c('○', 'Solmi 0'), c('●●●', 'miocarditis 0,7 %, letalidad 12,7 % (Siskind 2020)'), N],
      [{ t: 'Síndrome neuroléptico maligno (todos)', node: 'snm' },
        c('!', 'FT 4.4'), c('!', 'FT 4.4'), c('!', 'FT 4.4'), c('!', 'FT 4.4'), c('!', 'FT 4.4'), c('!', 'FT 4.4'), c('!', 'FT 4.4'), c('!', 'FT 4.4'),
        c('!', 'FT 4.4'), c('!', 'FT 4.4'), c('!', 'FT 4.4'), c('!', 'FT 4.4'), c('!', 'FT 4.4'), c('!', 'FT 4.4; menos rigidez (Trollor 2012)'), c('—', 'sin FT en la UE')]
    ] });
    y = t.y + 14;
    y = F.text(X, y + 16, 'Lectura de los RR: un RR de 2 significa el doble de personas con el efecto que con placebo en ensayos de 3 a 13 semanas; no informa del riesgo a largo plazo (discinesia tardía, síndrome metabólico establecido). Huhn 2019 no incluyó la lumateperona ni dio cifras de QTc para clorpromazina y clozapina; Pillinger 2020 no incluyó la clorpromazina y agrupó risperidona y paliperidona.', { fs: 17, w: W - 2 * X }) + 22;

    // 4. Claves de seguridad y límites
    y = F.band(y, 'Claves de seguridad, coherencia entre fuentes y límites', { n: 4 }) + 20;
    const M = new Fig({ key: 'medida', title: 'medida', w: W });
    const bw = (W - 2 * X - 2 * 30) / 3;
    const B = [
      { id: 'k_neut', node: 'clozapina_monit', type: 'warn', title: 'Clozapina: neutropenia (FT de Leponex, 4.4)', text: 'Solo con RAN ≥ 1500/mm³ (≥ 1000/mm³ en neutropenia étnica benigna confirmada); RAN semanal las primeras 18 semanas, mensual las 34 siguientes, cada 12 semanas en el segundo año y anual después de 24 meses, si no hubo neutropenia. Neutropenia en el 3,8 % y grave en el 0,9 %, con pico al mes y riesgo despreciable tras el primer año; mortalidad 0,013 % (Myles 2018).' },
      { id: 'k_mioc', node: 'miocarditis_cloz', type: 'warn', title: 'Clozapina: miocarditis (FT de Leponex, 4.4)', text: 'Riesgo mayor en los dos primeros meses; sospecharla ante taquicardia persistente en reposo, palpitaciones, arritmias, dolor torácico o signos de insuficiencia cardiaca. Tasa de miocarditis 0,007 y de miocardiopatía 0,006, con tasas mayores en Australia; los autores justifican vigilar las primeras 4 semanas y no ver estos riesgos como barrera para ofrecer clozapina (Siskind 2020).' },
      { id: 'k_snm', node: 'snm', type: 'warn', title: 'Síndrome neuroléptico maligno: con todos', text: 'Todas las fichas técnicas consultadas lo advierten (4.4). En 208 casos notificados en Australia, el cuadro con antipsicóticos de segunda generación fue muy parecido al de primera, salvo menos rigidez con clozapina, y la mortalidad fue menor (3,0 % frente a 16,3 %) (Trollor 2012). Una escala de riesgo por fármaco no excluye el síndrome con ninguno.' },
      { id: 'k_qt', node: 'qt_psicof', type: 'warn', title: 'QTc: la media del ensayo no anula la ficha', text: 'Haloperidol (FT 4.3): contraindicado con antecedentes de QTc prolongado, hipopotasemia no corregida o fármacos que alargan el QT, aunque en la red su media oral no fue significativa. Ziprasidona (FT 4.3): contraindicada con QT prolongado conocido o fármacos que lo alargan. Amisulprida (FT 4.4): precaución. Los datos de Huhn 2019 proceden de 51 ensayos que excluían enfermedad médica concomitante.' },
      { id: 'k_prl', node: 'hiperprl_ap', type: 'info', title: 'Prolactina: cifras con cautela', text: 'Paliperidona (+48,5 ng/ml), risperidona (+38,0) y amisulprida (+26,9) la elevan más; el aripiprazol la reduce (−7,1). La heterogeneidad fue alta y los autores atribuyen la reducción con clozapina a un posible artefacto de dos ensayos pequeños; con diferencias de medias estandarizadas la heterogeneidad bajó mucho (Huhn 2019).' },
      { id: 'k_met', node: 'peso_psicof', type: 'info', title: 'Metabolismo (Pillinger 2020)', text: '100 ensayos y 25 952 pacientes, mediana de 6 semanas: olanzapina y clozapina, peor perfil; aripiprazol, brexpiprazol, cariprazina, lurasidona y ziprasidona, el más benigno. Más peso basal y sexo masculino predijeron mayor subida de glucosa, y la etnia no blanca, más colesterol total; la mejoría sintomática se asoció a más alteración metabólica.' },
      { id: 'k_eps', node: 'ap_tipicos', type: 'info', title: 'Concordancia entre metaanálisis', text: 'Leucht 2013 (15 fármacos) ya ordenaba los síntomas extrapiramidales de clozapina (OR 0,30) a haloperidol (OR 4,76) y la sedación de amisulprida (OR 1,42) a clozapina (OR 8,82). Huhn 2019 lo confirma: los antiguos dan más efectos motores y prolactina (salvo amisulprida, paliperidona y risperidona, también altas) y muchos nuevos más peso y sedación.' },
      { id: 'k_luma', node: 'lumateperona', type: 'info', title: 'Lumateperona: un solo ensayo', text: 'Ensayo de fase 3 de 4 semanas con 450 personas: sin efectos motores, cardiometabólicos ni endocrinos relevantes frente a placebo; somnolencia 17,3 % y sedación 12,7 % con la dosis eficaz, frente a 4,0 % y 5,4 % con placebo; una convulsión y un abandono por hipotensión ortostática (Correll 2020). No está en Huhn 2019 ni en Pillinger 2020, ni autorizada en la UE.' },
      { id: 'k_lim', node: null, type: 'lim', title: 'Límites de la figura', text: 'Esquema docente: no sustituye al juicio clínico ni a la ficha técnica vigente. Los umbrales de los símbolos son una convención propia. Datos de ensayos agudos en adultos con esquizofrenia de larga evolución; confianza a menudo baja o muy baja (Huhn 2019). Solmi 2017 es una escala relativa de revisión, no un metaanálisis. Sin dosis ni poblaciones pediátrica, geriátrica o embarazada.' }
    ];
    const bh = Math.max(...B.map((s, i) => M.box('s' + i, { x: X, y: 100 + i * 1000, w: bw, fs: 17, align: 'left', type: s.type, title: s.title, text: s.text }).h)) + 20;
    B.forEach((s, i) => F.box(s.id, { x: X + (i % 3) * (bw + 30), y: y + Math.floor(i / 3) * (bh + 26), w: bw, type: s.type, align: s.type === 'warn' ? 'center' : 'left', fs: 17, node: s.node || undefined, title: s.title, text: s.text, minH: bh }));
    F.footer('Fuentes principales: metaanálisis en red de Huhn 2019 (PMID 31303314; figura 4 del texto completo), Pillinger 2020 (PMID 31860457) y Leucht 2013 (PMID 23810019); revisión de Solmi 2017 (PMID 28721057; tabla 3); Myles 2018, Siskind 2020, Trollor 2012 y Correll 2020 (PubMed); fichas técnicas AEMPS-CIMA de cada antipsicótico, apartados 4.3, 4.4 y 4.8 (consulta de noviembre de 2026). Esquema docente: no sustituye al juicio clínico.');
    return F;
  }
};
