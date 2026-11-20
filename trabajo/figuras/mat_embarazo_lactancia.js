// Matriz: psicofármacos en el embarazo y la lactancia. Para cada grupo, (1) lo que dice literalmente la ficha técnica española
// (apartados 4.3 y 4.6, AEMPS-CIMA, consulta de noviembre de 2026), (2) lo que recomiendan NICE CG192 (act. 2020) y BAP 2017,
// (3) riesgos documentados con su fuente primaria (PubMed) y (4) qué monitorizar. Sin dosis.
const TITLE = 'Psicofármacos en el embarazo y la lactancia: ficha técnica, guías, riesgos documentados y monitorización';
module.exports = {
  key: 'mat_embarazo_lactancia',
  meta: {
    title: TITLE,
    kind: 'mat',
    cap: 'Matriz por grupos de psicofármacos (litio, valproato, carbamazepina, lamotrigina, ISRS, IRSN y mirtazapina, antipsicóticos, clozapina y benzodiacepinas). La columna (1) reproduce, entre comillas, el texto de los apartados 4.3 (contraindicaciones) y 4.6 (fertilidad, embarazo y lactancia) de la ficha técnica española de una presentación concreta (AEMPS-CIMA); la columna (2) resume NICE CG192 (2014, actualizada en 2020) y la guía de consenso de la BAP (McAllister-Williams 2017); la (3), los riesgos con su estudio primario o metaanálisis; y la (4), los controles que piden la ficha o las guías. Ficha y guía se distinguen siempre con los símbolos ▣ (ficha técnica) y ◆ (guía). En el litio prevalece la ficha técnica de Plenur, que contraindica el embarazo y la lactancia; en el valproato, la contraindicación de la ficha de Depakine Crono salvo Plan de Prevención de Embarazos; en los antipsicóticos prevalecen las guías. No recoge dosis y no sustituye a la ficha técnica vigente ni a la decisión compartida e individual.',
    refs: [
      'NICE (2014, última actualización de 11 de febrero de 2020). Antenatal and postnatal mental health: clinical management and service guidance. Clinical guideline CG192, recomendaciones 1.4.9, 1.4.12, 1.4.15-1.4.37 y 1.9.2',
      'McAllister-Williams RH et al. (2017). British Association for Psychopharmacology consensus guidance on the use of psychotropic medication preconception, in pregnancy and postpartum 2017. J Psychopharmacol 31:519-552 · PMID 28440103',
      'AEMPS-CIMA (2024). Ficha técnica de Plenur 400 mg comprimidos de liberación modificada (carbonato de litio) (n.º de registro 48932), apartados 4.3 y 4.6; revisión del texto de julio de 2024',
      'AEMPS-CIMA (2026). Ficha técnica de Depakine Crono 500 mg comprimidos de liberación prolongada (valproato) (n.º de registro 60350), apartados 4.3, 4.4 y 4.6; revisión del texto de septiembre de 2026',
      'AEMPS-CIMA (2026). Ficha técnica de Tegretol 200 mg comprimidos (carbamazepina) (n.º de registro 39955), apartados 4.3 y 4.6; revisión del texto de agosto de 2026',
      'AEMPS-CIMA (2025). Ficha técnica de Lamictal 100 mg comprimidos masticables/dispersables (lamotrigina) (n.º de registro 61568), apartados 4.3 y 4.6; revisión del texto de junio de 2025',
      'AEMPS-CIMA (2025). Ficha técnica de Besitran 100 mg comprimidos recubiertos con película (sertralina) (n.º de registro 59718), apartados 4.3 y 4.6; revisión del texto de julio de 2025',
      'AEMPS-CIMA (2025). Ficha técnica de Seroxat 20 mg comprimidos recubiertos con película (paroxetina) (n.º de registro 59468), apartados 4.3 y 4.6; revisión del texto de octubre de 2025',
      'AEMPS-CIMA (2024). Ficha técnica de Vandral Retard 150 mg cápsulas duras de liberación prolongada (venlafaxina) (n.º de registro 62402), apartados 4.3 y 4.6; revisión del texto de mayo de 2024',
      'AEMPS-CIMA (2026). Ficha técnica de Cymbalta 60 mg cápsulas duras gastrorresistentes (duloxetina) (n.º de registro 04296002, autorización centralizada), apartado 4.6; consulta de noviembre de 2026',
      'AEMPS-CIMA (2021). Ficha técnica de Rexer 30 mg comprimidos recubiertos con película (mirtazapina) (n.º de registro 61017), apartados 4.3 y 4.6; revisión del texto de marzo de 2021',
      'AEMPS-CIMA (2024). Ficha técnica de Seroquel 100 mg comprimidos recubiertos con película (quetiapina) (n.º de registro 63055), apartados 4.3 y 4.6; revisión del texto de julio de 2024',
      'AEMPS-CIMA (2026). Ficha técnica de Zyprexa 10 mg comprimidos recubiertos (olanzapina) (n.º de registro 96022009, autorización centralizada), apartado 4.6; consulta de noviembre de 2026',
      'AEMPS-CIMA (2026). Ficha técnica de Abilify 10 mg comprimidos (aripiprazol) (n.º de registro 04276007, autorización centralizada), apartado 4.6; consulta de noviembre de 2026',
      'AEMPS-CIMA (2025). Ficha técnica de Risperdal 1 mg comprimidos recubiertos con película (risperidona) (n.º de registro 60336), apartados 4.3 y 4.6; revisión del texto de mayo de 2025',
      'AEMPS-CIMA (2026). Ficha técnica de Leponex 100 mg comprimidos (clozapina) (n.º de registro 59547), apartados 4.3 y 4.6; revisión del texto de febrero de 2026',
      'AEMPS-CIMA (2023). Ficha técnica de Orfidal 1 mg comprimidos (lorazepam) (n.º de registro 49796), apartados 4.3 y 4.6; revisión del texto de marzo de 2023',
      'Patorno E et al. (2017). Lithium use in pregnancy and the risk of cardiac malformations. N Engl J Med 376:2245-2254 · PMID 28591541',
      'Munk-Olsen T et al. (2018). Maternal and infant outcomes associated with lithium use in pregnancy: an international collaborative meta-analysis of six cohort studies. Lancet Psychiatry 5:644-652 · PMID 29929874',
      'Tomson T et al. (2018). Comparative risk of major congenital malformations with eight different antiepileptic drugs: a prospective cohort study of the EURAP registry. Lancet Neurol 17:530-538 · PMID 29680205',
      'Meador KJ et al. (2009). Cognitive function at 3 years of age after fetal exposure to antiepileptic drugs. N Engl J Med 360:1597-1605 · PMID 19369666',
      'Christensen J et al. (2013). Prenatal valproate exposure and risk of autism spectrum disorders and childhood autism. JAMA 309:1696-1703 · PMID 23613074',
      'Huybrechts KF et al. (2014). Antidepressant use in pregnancy and the risk of cardiac defects. N Engl J Med 370:2397-2407 · PMID 24941178',
      'Huybrechts KF et al. (2015). Antidepressant use late in pregnancy and risk of persistent pulmonary hypertension of the newborn. JAMA 313:2142-2151 · PMID 26034955',
      'Grigoriadis S et al. (2013). The effect of prenatal antidepressant exposure on neonatal adaptation: a systematic review and meta-analysis. J Clin Psychiatry 74:e309-e320 · PMID 23656856',
      'Sujan AC et al. (2017). Associations of maternal antidepressant use during the first trimester of pregnancy with preterm birth, small for gestational age, autism spectrum disorder, and attention-deficit/hyperactivity disorder in offspring. JAMA 317:1553-1562 · PMID 28418479',
      'Huybrechts KF et al. (2016). Antipsychotic use in pregnancy and the risk for congenital malformations. JAMA Psychiatry 73:938-946 · PMID 27540849',
      'Straub L et al. (2022). Association of antipsychotic drug exposure in pregnancy with risk of neurodevelopmental disorders: a national birth cohort study. JAMA Intern Med 182:522-533 · PMID 35343998',
      'Grigoriadis S et al. (2019). Benzodiazepine use during pregnancy alone or in combination with an antidepressant and congenital malformations: systematic review and meta-analysis. J Clin Psychiatry 80(4):18r12412 · PMID 31294935',
      'Wesseloo R et al. (2016). Risk of postpartum relapse in bipolar disorder and postpartum psychosis: a systematic review and meta-analysis. Am J Psychiatry 173:117-127 · PMID 26514657',
      'Cohen LS et al. (2006). Relapse of major depression during pregnancy in women who maintain or discontinue antidepressant treatment. JAMA 295:499-507 · PMID 16449615'
    ],
    nodes: ['lm_bip', 'vpa_bip', 'quetiapina', 'olanzapina', 'aripiprazol', 'risperidona', 'duloxetina', 'lorazepam', 'tea', 'tdah', 'epds']
  },
  draw(Fig) {
    const W = 2300, X = 60, FS = 16;
    const F = new Fig({ key: 'mat_embarazo_lactancia', title: TITLE, desc: 'Matriz por grupos de psicofármacos con cuatro columnas: el texto literal de los apartados 4.3 y 4.6 de la ficha técnica española de una presentación concreta, las recomendaciones de NICE CG192 y de la BAP 2017, los riesgos documentados (malformaciones, neurodesarrollo, síndrome de adaptación neonatal, hipertensión pulmonar persistente del recién nacido) con su fuente primaria, y lo que hay que monitorizar. Debajo, la contraindicación del valproato con su Plan de Prevención de Embarazos, el conflicto entre la ficha del litio y las guías, principios comunes, lactancia, confusión por indicación, riesgo de recaída al suspender y límites de la figura.', w: W });
    const cols = [
      { w: 250, label: 'Grupo · presentación de referencia' },
      { w: 590, label: '(1) ▣ Ficha técnica española, apdos. 4.3 y 4.6 (texto literal entre «»)' },
      { w: 520, label: '(2) ◆ Guías: NICE CG192 (rec. n.º) y BAP 2017' },
      { w: 500, label: '(3) Riesgos documentados y fuente primaria' },
      { w: 320, label: '(4) Qué monitorizar' }
    ];
    let y = 96;
    y = F.text(X, y + 18, 'Cómo leerla: ▣ = lo que dice la ficha técnica española (AEMPS-CIMA, consulta de noviembre de 2026); ◆ = lo que recomienda una guía (NICE CG192, británica; BAP 2017). Cuando ficha y guía no coinciden se muestran ambas. MCM = malformaciones congénitas mayores; HPPN = hipertensión pulmonar persistente del recién nacido; SAN = síndrome de adaptación neonatal (síntomas serotoninérgicos o de retirada). Sin dosis.', { fs: 19, w: W - 120 }) + 8;

    // 1. Estabilizadores del ánimo
    y = F.band(y, 'Estabilizadores del ánimo', { n: 1 }) + 14;
    let t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Litio · Plenur 400 mg (prevalece la ficha técnica)', node: 'litio_embarazo' },
        '▣ 4.3: contraindicado en «Embarazo y lactancia». 4.6: «no debe administrarse durante el embarazo, especialmente durante el primer trimestre»; anticoncepción apropiada; «En caso de embarazo planificado se recomienda la suspensión»; si se considera esencial mantenerlo, controlar litemias, suspender cerca del parto y reiniciar unos días después. «Plenur no debe administrarse durante la lactancia».',
        '◆ NICE: no ofrecer a quien planifica un embarazo o está embarazada salvo que los antipsicóticos no hayan sido eficaces (1.4.33); si se queda embarazada y está bien, considerar retirada gradual en 4 semanas (1.4.35); si no está bien o el riesgo de recaída es alto, cambio gradual a antipsicótico, pausa y reinicio en el 2.º trimestre o continuar (1.4.36). ◆ BAP: retirada gradual en 4 semanas; no prescribir litio a quien amamanta.',
        'Malformaciones cardiacas 2,41 % frente a 1,15 % sin exposición; RR ajustado 1,65 (IC 95 % 1,02-2,68), mayor con más dosis (Patorno 2017). MCM tras el 1.er trimestre aOR 1,71 y reingreso neonatal aOR 1,62 (Munk-Olsen 2018). ▣ Bocio neonatal, anomalía de Ebstein, hipotonía e intoxicación neonatal (4.6).',
        '◆ Litemia cada 4 semanas y semanal desde la semana 36; balance hídrico; parto hospitalario; suspender en el trabajo de parto y litemia 12 h tras la última toma (NICE 1.4.37). ◆ Cribado fetal cardiovascular tras exposición en el 1.er trimestre (BAP). ▣ Observar al recién nacido (4.6).'],
      [{ t: 'Valproato · Depakine Crono 500 mg', node: 'valproato_fertil' },
        '▣ 4.3 (trastorno bipolar): contraindicado «en embarazo» y «en mujeres en edad fértil, a menos que se cumplan las condiciones del Plan de Prevención de Embarazos». 4.6: se excreta en la leche «entre el 1% y el 10%» de la concentración sérica materna, con trastornos hematológicos en lactantes; decidir entre interrumpir la lactancia o el tratamiento.',
        '◆ NICE: no ofrecer a quien planifica un embarazo, está embarazada o considera amamantar; solo con Plan de Prevención de Embarazos si no hay alternativa (1.4.27); retirada gradual si planifica (1.4.28); suspender si se queda embarazada (1.4.29). ◆ BAP: es el único psicofármaco contraindicado en personas con capacidad de gestar; si hay embarazo, normalmente retirarlo y considerar un antipsicótico.',
        '▣ MCM en torno al 11 % en monoterapia frente al 2-3 % (4.6). MCM 10,3 %, la más alta de ocho antiepilépticos (Tomson 2018). CI a los 3 años 9 puntos menor que con lamotrigina (Meador 2009). TEA: riesgo absoluto 4,42 %, HR ajustado 2,9 (Christensen 2013). ▣ Neonato: síndrome hemorrágico, hipoglucemia, hipotiroidismo y síndrome de retirada (4.6).',
        '▣ Plan de Prevención: test de embarazo antes y durante el tratamiento, anticoncepción eficaz sin interrupción, revisión al menos anual por especialista y Formulario Anual del Conocimiento del Riesgo (4.4). ▣ Neonato expuesto: plaquetas, fibrinógeno y coagulación (4.6).'],
      [{ t: 'Carbamazepina · Tegretol 200 mg', node: 'carbamaz' },
        '▣ 4.3: sin mención del embarazo. 4.6: «no debe utilizarse durante el embarazo a menos que se considere que el beneficio es superior a los riesgos»; MCM «entre 2 y 3 veces» la de la población general; anticoncepción eficaz durante el tratamiento y 2 semanas después (reduce la eficacia de los anticonceptivos hormonales). Lactancia: pasa a la leche (25-60 %); se puede amamantar «siempre que se controlen» las reacciones en el niño.',
        '◆ NICE: no ofrecer para un problema de salud mental a quien planifica un embarazo, está embarazada o considera amamantar (1.4.30); si ya la toma, valorar suspenderla (1.4.31). ◆ BAP: no iniciar antes de la concepción ni en el embarazo; no prescribir en la lactancia en los trastornos afectivos.',
        'MCM 5,5 %, con aumento según la dosis (Tomson 2018). ▣ Tubo neural, fisuras orales, cardiovasculares, hipospadias; pequeño para la edad gestacional 12,8 % frente a 10,9 %; datos de neurodesarrollo «contradictorios» (4.6).',
        '▣ Niveles plasmáticos; vigilancia prenatal de malformaciones y crecimiento; ácido fólico antes y durante el embarazo; vitamina K1 en las últimas semanas y al recién nacido; lactante: somnolencia, piel y función hepatobiliar (4.6).'],
      [{ t: 'Lamotrigina · Lamictal 100 mg', node: 'lamotrig' },
        '▣ 4.3: sin mención del embarazo. 4.6: más de 8700 embarazos expuestos en el 1.er trimestre «no sugieren un aumento sustancial» de MCM; usar «la menor dosis terapéutica posible»; niveles que bajan en el embarazo y suben tras el parto. Lactancia: niveles en el niño de hasta «aproximadamente el 50%» de los maternos; valorar beneficio frente a riesgo.',
        '◆ NICE: medir los niveles con frecuencia antes, durante y después del embarazo (1.4.32). ◆ BAP: niveles desde la preconcepción hasta el primer mes posparto; puede prescribirse en la lactancia con vigilancia del lactante y retirarla si aparece exantema hasta aclarar la causa.',
        'MCM 2,9 %, dentro del rango de no expuestos, con aumento según la dosis (Tomson 2018). Malformaciones cardiacas 1,39 % (Patorno 2017). CI medio a los 3 años de 101, frente a 92 con valproato (Meador 2009).',
        '▣ Concentraciones séricas antes, durante y después del embarazo y tras el parto; reacciones dosis-dependientes posparto; lactante: sedación, erupción cutánea y ganancia de peso escasa (4.6).']
    ] });
    y = t.y + 34;

    // 2. Antidepresivos
    y = F.band(y, 'Antidepresivos: ISRS, IRSN y mirtazapina', { n: 2 }) + 14;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Sertralina (ISRS) · Besitran 100 mg', node: 'sertralina' },
        '▣ 4.3: sin mención del embarazo. 4.6: «No se recomienda el tratamiento con sertralina durante el embarazo, a menos que» los beneficios superen los riesgos; HPPN «aproximadamente de 5 casos por cada 1000 embarazos» frente a 1-2 en la población general; hemorragia posparto (menos del doble) con exposición en el mes previo al parto. Lactancia: «No se recomienda» salvo que los beneficios superen los riesgos.',
        '◆ NICE: elegir según respuesta previa, etapa del embarazo, riesgo de cardiopatía y de HPPN, incertidumbre causal y riesgo de SAN (1.4.16); en la lactancia, sopesar beneficios e incertidumbre (1.4.17). ◆ BAP: los ISRS son la primera elección en el embarazo si no hubo tratamiento previo; la sertralina tiene baja transferencia al lactante.',
        'ISRS y cardiopatías: RR 1,06 (IC 95 % 0,93-1,22) con ajuste completo (Huybrechts 2014). HPPN 31,5 frente a 20,8 por 10 000; OR ajustada 1,10 (0,94-1,29) (Huybrechts 2015). SAN: OR 5,07 (Grigoriadis 2013). Prematuridad OR 1,34 entre hermanos; sin TEA ni TDAH (Sujan 2017).',
        '▣ Recién nacido si hubo exposición en el 3.er trimestre: síntomas en las primeras 24 h (4.6). ◆ Valoración neonatal completa (NICE 1.9.2). Síntomas maternos con EPDS o PHQ-9 (NICE 1.4.9).'],
      [{ t: 'Paroxetina (ISRS) · Seroxat 20 mg', node: 'paroxetina' },
        '▣ 4.3: sin mención del embarazo. 4.6: riesgo de malformación cardiovascular «menor del 2%, comparado con el 1% aproximado» de la población general; «sólo debe ser utilizada durante el embarazo cuando esté estrictamente indicado»; evitar la interrupción brusca. Lactancia: «Podría considerarse mantener la lactancia materna».',
        '◆ NICE: riesgo de SAN y de síntomas de retirada maternos «en particular» con paroxetina y venlafaxina (1.4.16). ◆ BAP: la señal cardiaca de la paroxetina puede desaparecer al controlar los factores de confusión.',
        'Paroxetina y obstrucción del tracto de salida del ventrículo derecho: RR 1,07 (IC 95 % 0,59-1,93) (Huybrechts 2014).',
        '▣ Evaluar con cuidado al recién nacido si hubo exposición al final del embarazo (4.6).'],
      [{ t: 'Venlafaxina y duloxetina (IRSN) · Vandral Retard 150 mg; Cymbalta 60 mg', node: 'venlafaxina' },
        '▣ Venlafaxina 4.6: «sólo debe administrarse a mujeres embarazadas si los beneficios esperados compensan cualquier posible riesgo»; recién nacidos con necesidad de sonda, ayuda respiratoria u hospitalización prolongada; HPPN no descartable. Lactancia: decidir entre lactancia y tratamiento. ▣ Duloxetina 4.6: sin aumento general de MCM; parto prematuro (menos del doble) en un estudio europeo; «no se recomienda» en la lactancia.',
        '◆ NICE: la venlafaxina, junto con la paroxetina, es la que más riesgo de SAN y de retirada materna tiene (1.4.16). ◆ BAP: no suspender el antidepresivo de forma brusca al conocer el embarazo; no hay consenso en reducirlo cerca del parto.',
        'Antidepresivos no ISRS y HPPN: OR ajustada 1,02 (IC 95 % 0,77-1,35) (Huybrechts 2015). Sin estudio primario específico de IRSN y neurodesarrollo localizado en esta revisión [fuente no localizada].',
        '▣ Recién nacido en las primeras 24 h; hemorragia posparto (4.6). ◆ Valoración neonatal completa (NICE 1.9.2).'],
      [{ t: 'Mirtazapina (otros) · Rexer 30 mg', node: 'mirtazapina' },
        '▣ 4.3: sin mención del embarazo. 4.6: datos limitados que «no muestran un riesgo incrementado de malformaciones congénitas»; HPPN no descartable; «Debe tenerse precaución»; monitorización posnatal si se usa hasta el parto. Lactancia: se excreta «en muy pequeñas cantidades»; decidir entre lactancia y tratamiento.',
        '◆ NICE CG192 y BAP 2017 no la mencionan de forma específica; se aplican los principios generales (fármaco de menor riesgo, una sola sustancia, menor dosis eficaz: NICE 1.4.12).',
        'Sin estudio primario localizado en esta revisión [fuente no localizada]; solo los datos limitados que resume la ficha.',
        '▣ Recién nacido si se usa hasta el parto (4.6).']
    ] });
    y = t.y + 34;

    // 3. Antipsicóticos y benzodiacepinas
    y = F.band(y, 'Antipsicóticos (prevalecen las guías) y benzodiacepinas', { n: 3 }) + 14;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Antipsicóticos de 2.ª generación · Seroquel, Zyprexa, Abilify, Risperdal', node: 'ap_atipicos' },
        '▣ 4.3: sin mención del embarazo. 4.6: usar solo si el beneficio justifica el riesgo (quetiapina, olanzapina, aripiprazol); risperidona, «excepto si fuera claramente necesario». Todos: exposición en el 3.er trimestre con riesgo de síntomas extrapiramidales o de abstinencia en el recién nacido. Lactancia: quetiapina y aripiprazol, decidir; olanzapina, «Se debe desaconsejar la lactancia materna»; risperidona, sopesar.',
        '◆ NICE: si está estable y es probable que recaiga sin tratamiento, continuar (1.4.23); dieta y control del peso (1.4.24); cribado de diabetes gestacional con sobrecarga oral de glucosa (1.4.25); prolactina si planifica un embarazo (1.4.22); evitar depot salvo excepciones (1.4.26). ◆ BAP: son el pilar del tratamiento perinatal del trastorno bipolar; no cambiar de fármaco por el embarazo; fomentar la lactancia (salvo clozapina).',
        'Malformaciones: RR ajustado 1,05 (IC 95 % 0,96-1,16) con atípicos; risperidona RR 1,26 (1,02-1,56), señal pendiente de confirmar (Huybrechts 2016). Neurodesarrollo: HR ajustado 1,08 (1,01-1,17); aripiprazol 1,36 (1,14-1,63), señal no replicada (Straub 2022).',
        '◆ Peso, diabetes gestacional y prolactina (NICE 1.4.22-1.4.25). ▣ Recién nacido: agitación, hipertonía o hipotonía, temblor, somnolencia, dificultad respiratoria y alimentaria (4.6). ◆ Lactante: sedación, alimentación, motricidad y neurodesarrollo (BAP).'],
      [{ t: 'Clozapina · Leponex 100 mg', node: 'clozapina' },
        '▣ 4.3: sin mención del embarazo. 4.6: datos clínicos «limitados»; «Se recomienda precaución»; riesgo neonatal extrapiramidal o de abstinencia. Lactancia: «las madres que reciban Leponex no deben amamantar a sus hijos». Anticoncepción adecuada: puede volver la menstruación al cambiar a clozapina.',
        '◆ BAP: si está estable con clozapina, continuar si los beneficios superan los riesgos; cribado de diabetes y control del crecimiento fetal; no amamantar (riesgo de agranulocitosis del lactante).',
        'La BAP describe datos de seguridad más limitados que con quetiapina, olanzapina o risperidona; sin estimación primaria específica localizada en esta revisión [fuente no localizada].',
        '◆ Diabetes y crecimiento fetal (BAP). ▣ Recién nacido (4.6).'],
      [{ t: 'Benzodiacepinas · Orfidal 1 mg (lorazepam)', node: 'ansiol_bzd' },
        '▣ 4.3: sin mención del embarazo. 4.6: «ORFIDAL, no deberá ser usado durante el embarazo»; posible aumento de malformaciones en el 1.er trimestre; en fase tardía o en el parto, hipoactividad, hipotermia, hipotonía, apnea y depresión respiratoria neonatal; abstinencia neonatal con uso crónico. Lactancia: «contraindicado en madres lactantes a menos que el beneficio real en la mujer supere el riesgo potencial en el niño».',
        '◆ NICE: no ofrecer en el embarazo ni en el posparto salvo para el tratamiento a corto plazo de la ansiedad y la agitación graves (1.4.18); considerar retirarlas de forma gradual (1.4.19). ◆ BAP: sin pruebas convincentes de defectos congénitos; datos limitados de retraso psicomotor; vigilar al lactante.',
        'Malformaciones congénitas OR 1,13 (IC 95 % 0,99-1,30); cardiacas OR 1,27 (0,98-1,65); combinadas con un antidepresivo, OR 1,40 (1,09-1,80) (Grigoriadis 2019).',
        '▣ Recién nacido: sedación, hipotonía, apnea y abstinencia; lactante: sedación e incapacidad para mamar (4.6).']
    ] });
    y = t.y + 40;

    // 4. Cajas: restricciones, conflictos y principios
    y = F.band(y, 'Lo que prevalece, principios comunes y lectura de la evidencia', { n: 4 }) + 24;
    const bw = 700, gap = 40, X2 = X + bw + gap, X3 = X + 2 * (bw + gap);
    const r1 = [
      { id: 'vpa', type: 'warn', node: 'vpa_bip', title: 'Valproato: contraindicado salvo Plan de Prevención de Embarazos',
        text: '▣ Depakine Crono 4.3: en el trastorno bipolar, contraindicado en el embarazo y en «mujeres en edad fértil» salvo que se cumpla el Plan (la condición se aplica a toda persona con capacidad de gestar). El Plan exige valorar la posibilidad de embarazo, test de embarazo, anticoncepción eficaz sin interrupción, revisión anual por especialista, Guía para el Paciente y Formulario Anual del Conocimiento del Riesgo (4.4).\n◆ NICE 1.4.27-1.4.29 y BAP coinciden con la ficha.' },
      { id: 'litio', type: 'warn', node: 'tb_embarazo', title: 'Litio: la ficha técnica contraindica; las guías contemplan excepciones',
        text: '▣ Plenur 4.3: embarazo y lactancia son contraindicaciones; esta ficha prevalece en la figura.\n◆ NICE 1.4.33-1.4.37 y la BAP admiten mantenerlo en el embarazo si los antipsicóticos no han sido eficaces o el riesgo de recaída es alto, con litemias frecuentes.\nMantenerlo es, por tanto, un uso en contraindicación de ficha: exige decisión compartida e informada y su registro en la historia. Suspender no anula el riesgo cardiaco si la exposición ya ocurrió en el 1.er trimestre (NICE 1.4.15 y 1.4.35).' },
      { id: 'recaida', type: 'warn', node: 'dep_embarazo', title: 'Suspender también tiene riesgos',
        text: 'Trastorno bipolar: recaída posparto del 66 % sin medicación en el embarazo frente al 23 % con profilaxis (Wesseloo 2016).\nDepresión: recaída en el embarazo del 68 % al suspender el antidepresivo frente al 26 % al mantenerlo; HR 5,0 (Cohen 2006).\n◆ NICE 1.4.13-1.4.14: si la persona decide suspender, comentar los motivos, reinicio, cambio, psicoterapia y más seguimiento. ◆ BAP: no suspender los antidepresivos de forma brusca al conocer el embarazo.' }
    ];
    const r2 = [
      { id: 'principios', type: 'act', node: 'emb_peri', title: 'Principios comunes (NICE CG192)',
        text: '◆ Umbral más alto para el tratamiento farmacológico y valorar la psicoterapia (1.4.10). Elegir el fármaco de menor riesgo teniendo en cuenta la respuesta previa, la menor dosis eficaz y una sola sustancia; las dosis pueden requerir ajuste en el embarazo (1.4.12). Si hubo exposición a un teratógeno en el 1.er trimestre: confirmar el embarazo, ofrecer cribado de anomalías fetales y explicar que suspender no elimina el riesgo (1.4.15). Valoración neonatal completa tras cualquier exposición (1.9.2). Revisar la medicación tras el parto en la enfermedad mental grave (1.9.1).' },
      { id: 'lactancia', type: 'info', node: 'psicof_lactancia', title: 'Lactancia: ficha y guía a menudo difieren',
        text: '▣ Las fichas suelen ser más restrictivas: Plenur y Leponex la excluyen; Zyprexa la «desaconseja»; Orfidal la contraindica salvo beneficio; Besitran «no la recomienda»; Seroxat admite mantenerla.\n◆ NICE 1.4.4 y 1.4.17: hablar de la lactancia con toda persona que pueda necesitar psicofármacos y apoyar la decisión. ◆ BAP: sertralina para iniciar tratamiento; antipsicóticos compatibles salvo clozapina; no litio, valproato ni carbamazepina en los trastornos afectivos.' },
      { id: 'confusion', type: 'info', node: 'confus_fam_prenat', title: 'Asociación no es causalidad',
        text: 'Muchos riesgos se atenúan al controlar la enfermedad materna: ISRS y cardiopatías, de RR 1,25 sin ajustar a 1,06 (Huybrechts 2014); antipsicóticos y neurodesarrollo, de HR 1,91 a 1,08 (Straub 2022); antidepresivos y TEA, sin asociación entre hermanos (Sujan 2017).\nEl valproato es la excepción: su teratogenia física y conductual se sostiene tras el ajuste (Meador 2009; Christensen 2013). La HPPN es rara en términos absolutos aunque la ficha la mencione.' }
    ];
    // se miden las cajas en una figura auxiliar para igualar alturas por fila
    const M = new Fig({ key: 'medida', title: 'medida', w: W });
    const meas = (arr, k) => Math.max(...arr.map((o, i) => M.box(k + i, { x: X, y: 100 + i * 3000, w: bw, fs: 18, align: 'left', type: o.type, title: o.title, text: o.text }).h)) + 30;
    const h1 = meas(r1, 'a'), h2 = meas(r2, 'b');
    const xs = [X, X2, X3];
    r1.forEach((o, i) => F.box(o.id, { x: xs[i], y, w: bw, fs: 18, align: 'left', type: o.type, node: o.node, minH: h1, title: o.title, text: o.text }));
    y += h1 + 30;
    r2.forEach((o, i) => F.box(o.id, { x: xs[i], y, w: bw, fs: 18, align: 'left', type: o.type, node: o.node, minH: h2, title: o.title, text: o.text }));
    y += h2 + 36;
    F.box('lim', { x: X, y, w: W - 2 * X, type: 'lim', align: 'left', fs: 18, title: 'Límites de la figura',
      text: 'Esquema docente que no sustituye al juicio clínico, a la ficha técnica vigente ni a la decisión compartida con la persona gestante o lactante. Cada ficha corresponde a una presentación concreta (consulta de noviembre de 2026) y otras presentaciones o genéricos pueden diferir; NICE CG192 es británica y su texto de 2014 marcaba como uso fuera de indicación varios de estos fármacos en el embarazo. Los riesgos proceden sobre todo de cohortes observacionales con confusión por indicación y de registros de epilepsia (antiepilépticos), cuya extrapolación al trastorno bipolar asume la BAP. No se recogen dosis, interacciones, otros fármacos (tricíclicos, fluoxetina, citalopram, escitalopram, haloperidol, hipnóticos Z, fármacos del TDAH, tratamiento agonista opioide) ni la terapia electroconvulsiva. Lo que no tiene fuente localizada se señala como [fuente no localizada]. Las fichas y guías hablan de «mujeres»; la figura se aplica a toda persona con capacidad de gestar o que amamanta.' });
    F.footer('Fuentes: fichas técnicas AEMPS-CIMA (apdos. 4.3, 4.4 y 4.6) de Plenur, Depakine Crono, Tegretol, Lamictal, Besitran, Seroxat, Vandral Retard, Cymbalta, Rexer, Seroquel, Zyprexa, Abilify, Risperdal, Leponex y Orfidal (consulta de noviembre de 2026); NICE CG192 (2014, act. 2020); McAllister-Williams 2017, BAP (PMID 28440103); Patorno 2017; Munk-Olsen 2018; Tomson 2018; Meador 2009; Christensen 2013; Huybrechts 2014, 2015 y 2016; Grigoriadis 2013 y 2019; Sujan 2017; Straub 2022; Wesseloo 2016; Cohen 2006. Esquema docente: no sustituye a la ficha técnica ni al juicio clínico.');
    return F;
  }
};
