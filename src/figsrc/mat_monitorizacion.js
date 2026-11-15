// Matriz: monitorización de seguridad de los psicofármacos (qué se controla, cuándo y según qué fuente).
// Periodicidades tomadas literalmente de NICE (CG185, CG178, NG87, NG222) y de las fichas técnicas AEMPS-CIMA consultadas en noviembre de 2026.
module.exports = {
  key: 'mat_monitorizacion',
  meta: {
    title: 'Monitorización de seguridad de los psicofármacos: qué se controla y cuándo',
    kind: 'mat',
    cap: 'Matriz por familias (estabilizadores del ánimo, antipsicóticos, antidepresivos y fármacos del TDAH) con lo que cada fuente pide controlar antes de iniciar y durante el seguimiento. Cada periodicidad procede literalmente de la recomendación de NICE o del apartado de la ficha técnica AEMPS-CIMA que se cita en la última columna; los símbolos indican si la fuente fija un intervalo (●●●), si solo pide un control «periódico» o clínico (●●○) o si el texto original no pudo abrirse y el dato se toma de una fuente secundaria indexada (●○○). Cuando dos fuentes difieren se muestran ambas sin resolver la diferencia. No recoge dosis y no sustituye a la ficha técnica vigente ni a los protocolos locales.',
    refs: [
      'NICE (2014, última actualización de 2 de septiembre de 2025). Bipolar disorder: assessment and management. Clinical guideline CG185, recomendaciones 1.2.11-1.2.12, 1.10.5-1.10.8 y 1.10.14-1.10.38',
      'NICE (2014, última actualización de 4 de septiembre de 2026). Psychosis and schizophrenia in adults: prevention and management. Clinical guideline CG178, recomendaciones 1.3.6.1, 1.3.6.2 y 1.3.6.4',
      'NICE (2018, última actualización de 13 de septiembre de 2019). Attention deficit hyperactivity disorder: diagnosis and management. NICE guideline NG87, recomendaciones 1.7.4, 1.8.5, 1.8.9 y 1.8.10',
      'NICE (2022). Depression in adults: treatment and management. NICE guideline NG222, recomendaciones 1.4.24 y 1.4.34',
      'AEMPS-CIMA (2026). Ficha técnica de Leponex 100 mg comprimidos (clozapina) (n.º de registro 59547), recuadro inicial y apartado 4.4; revisión del texto de febrero de 2026',
      'AEMPS-CIMA (2024). Ficha técnica de Plenur 400 mg comprimidos de liberación modificada (carbonato de litio) (n.º de registro 48932), apartados 4.2, 4.3 y 4.4; revisión del texto de julio de 2024',
      'AEMPS-CIMA (2026). Ficha técnica de Depakine Crono 500 mg comprimidos de liberación prolongada (valproato) (n.º de registro 60350), apartados 4.3, 4.4 y 4.6; revisión del texto de septiembre de 2026',
      'AEMPS-CIMA (2026). Ficha técnica de Tegretol 200 mg comprimidos (carbamazepina) (n.º de registro 39955), apartados 4.2 y 4.4; revisión del texto de agosto de 2026',
      'AEMPS-CIMA (2025). Ficha técnica de Lamictal 100 mg comprimidos masticables/dispersables (lamotrigina) (n.º de registro 61568), apartados 4.2 y 4.4; revisión del texto de junio de 2025',
      'AEMPS-CIMA (2023). Ficha técnica de Seropram 30 mg comprimidos recubiertos con película (citalopram) (n.º de registro 63564), apartados 4.3 y 4.4; revisión del texto de octubre de 2023',
      'AEMPS-CIMA (2024). Ficha técnica de Cipralex 10 mg comprimidos recubiertos con película (escitalopram) (n.º de registro 65230), apartados 4.3 y 4.4; revisión del texto de noviembre de 2024',
      'AEMPS-CIMA (2026). Ficha técnica de Concerta 18 mg comprimidos de liberación prolongada (metilfenidato) (n.º de registro 65148), apartados 4.2 y 4.4; revisión del texto de febrero de 2026',
      'AEMPS-CIMA (2024). Ficha técnica de Atomoxetina Cinfa 80 mg cápsulas duras EFG (n.º de registro 82446), apartados 4.2 y 4.4; revisión del texto de noviembre de 2024',
      'American Diabetes Association, American Psychiatric Association, American Association of Clinical Endocrinologists & North American Association for the Study of Obesity (2004). Consensus development conference on antipsychotic drugs and obesity and diabetes. Diabetes Care 27:596-601 · PMID 14747245 (referencia verificada en PubMed, sin resumen; el texto completo no pudo abrirse, por lo que su calendario se toma de Peña 2018)',
      'Peña A et al. (2018). Overcoming barriers to monitoring patients taking second-generation antipsychotics. Ment Health Clin 8:49-55 · PMID 29955545 (fuente secundaria: su introducción reproduce el calendario del consenso ADA-APA de 2004)',
      'De Picker L et al. (2014). Antidepressants and the risk of hyponatremia: a class-by-class review of literature. Psychosomatics 55:536-547 · PMID 25262043'
    ],
    nodes: ['clozapina', 'tb_embarazo', 'estimulantes', 'oxcarbazepina']
  },
  draw(Fig) {
    const W = 2300, X = 60;
    const F = new Fig({ key: 'mat_monitorizacion', title: 'Monitorización de seguridad de los psicofármacos: qué se controla y cuándo', desc: 'Matriz por familias de psicofármacos con los controles previos al inicio, los controles de seguimiento con su periodicidad y la fuente exacta (recomendación de NICE o apartado de la ficha técnica AEMPS-CIMA). Incluye las restricciones reproductivas del valproato, el cribado de HLA-B*15:02 con carbamazepina, las discrepancias entre fuentes y los límites de la figura.', w: W });
    const cols = [{ w: 290, label: 'Fármaco y fuente que habla' }, { w: 590, label: 'Antes de iniciar' }, { w: 800, label: 'Durante el seguimiento: qué y cada cuánto' }, { w: 500, label: 'Fuente exacta' }];
    const FS = 17;
    let y = 96;
    y = F.text(X, y + 18, 'Cómo leerla: ●●● la fuente fija un intervalo, citado literalmente · ●●○ la fuente pide control «periódico», «regular» o clínico sin intervalo · ●○○ texto original no abierto: dato tomado de una fuente secundaria indexada, que se nombra. «rec.» = número de recomendación de NICE; «apdo.» = apartado de la ficha técnica AEMPS-CIMA. Sin dosis.', { fs: 19, w: W - 120 }) + 8;

    // 1. Estabilizadores del ánimo
    y = F.band(y, 'Estabilizadores del ánimo', { n: 1 }) + 14;
    let t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Litio según NICE', node: 'lm_bip' },
        'Peso o IMC; urea y electrolitos con calcio, filtrado glomerular estimado, función tiroidea y hemograma; ECG si hay enfermedad cardiovascular o factores de riesgo (rec. 1.10.14).',
        '●●● Litemia: 1 semana tras el inicio y tras cada cambio de dosis, y semanal hasta estabilizar (1.10.15); cada 3 meses el primer año (1.10.19); después cada 6 meses, o cada 3 meses en personas mayores, con fármacos que interaccionan, riesgo renal, tiroideo o de hipercalcemia, mal control, mala adherencia o última litemia ≥ 0,8 mmol/L (1.10.20). ●●● Peso o IMC, urea y electrolitos con calcio, filtrado y tiroides cada 6 meses, y más a menudo si hay deterioro renal o tiroideo o hipercalcemia (1.10.21). Neurotoxicidad en cada visita (1.10.24). Nivel: 0,6-0,8 mmol/L en el primer tratamiento (1.10.15); «considerar» 0,8-1,0 mmol/L durante un periodo de prueba de al menos 6 meses si hubo recaída con litio o hay síntomas subumbral con deterioro funcional (1.10.16).',
        'NICE CG185, rec. 1.10.14 a 1.10.24 (2014; guía actualizada en 2025)'],
      [{ t: 'Litio según la ficha técnica española', node: 'litio_embarazo' },
        'Funciones renal, cardiaca y tiroidea; medicación concomitante; estado y potencial de embarazo (apdo. 4.4). Embarazo y lactancia figuran como contraindicación (apdo. 4.3).',
        '●●● Litemia 1 o 2 veces por semana al inicio hasta estabilizar el estado clínico y los niveles; después, en ausencia de complicaciones, cada 1-2 meses; muestra justo antes de la dosis siguiente, habitualmente 12 horas tras la última toma (4.2). ●●○ Función renal en insuficiencia renal, poliuria o polidipsia (4.4). Nivel: rango terapéutico 0,5-1,2 mEq/L; no sobrepasar 1,5 mEq/L (4.2).',
        'Ficha técnica AEMPS-CIMA de Plenur 400 mg (n.º reg. 48932), apdos. 4.2, 4.3 y 4.4 (texto de julio de 2024)'],
      [{ t: 'Valproato', node: 'vpa_bip' },
        'Peso o IMC, hemograma y pruebas hepáticas (NICE, rec. 1.10.29). Ficha: función hepática; hemograma con plaquetas, tiempo de sangría y coagulación; test de embarazo negativo en quien pueda gestar (apdo. 4.4).',
        '●●● Peso o IMC, pruebas hepáticas y hemograma a los 6 meses y después cada año (NICE 1.10.33). ●●○ Ficha: función hepática «periódicamente durante los 6 primeros meses» (4.4). No medir niveles de forma rutinaria salvo ineficacia, mala adherencia o toxicidad (1.10.32). Sedación, temblor y marcha en personas mayores (1.10.34). Suspender de inmediato ante función hepática anormal o discrasia sanguínea (1.10.30).',
        'NICE CG185, rec. 1.10.29 a 1.10.34 · Ficha técnica de Depakine Crono 500 mg (n.º reg. 60350), apdo. 4.4 (septiembre de 2026)'],
      [{ t: 'Carbamazepina', node: 'carbamaz' },
        'Hemograma completo con plaquetas, reticulocitos y hierro sérico; función hepática; HLA-B*15:02 en personas de origen chino han o tailandés «siempre que sea posible»; sodio sérico si hay nefropatía con sodio bajo o fármacos que lo reducen (apdos. 4.2 y 4.4).',
        '●●○ Hemograma «de forma periódica» y control estricto si leucocitos o plaquetas bajan (4.4). ●●○ Función hepática «periódicamente», sobre todo con hepatopatía previa y en personas mayores (4.4). ●●● Sodio en el grupo de riesgo: a las 2 semanas y luego mensual durante los 3 primeros meses «o en función de las necesidades clínicas» (4.4). Niveles plasmáticos: «puede ser útil» medirlos en supuestos concretos (embarazo, infancia y adolescencia, verificación del cumplimiento, sospecha de trastornos de absorción o de toxicidad al tomar más de un medicamento) (4.4). NICE CG185 no da pauta de controles para carbamazepina.',
        'Ficha técnica AEMPS-CIMA de Tegretol 200 mg (n.º reg. 39955), apdos. 4.2 y 4.4 (agosto de 2026)'],
      [{ t: 'Lamotrigina', node: 'lamotrig' },
        'Hemograma, urea y electrolitos y pruebas hepáticas (NICE, rec. 1.10.36).',
        '●●○ NICE no fija analítica periódica: consultar de inmediato ante exantema durante el escalado (1.10.37); la ficha sitúa las reacciones cutáneas generalmente en las primeras 8 semanas (apdo. 4.4). No medir niveles de forma rutinaria salvo ineficacia, mala adherencia o toxicidad (1.10.38). Ficha: niveles séricos antes y después de iniciar o retirar anticonceptivos hormonales (4.2).',
        'NICE CG185, rec. 1.10.36 a 1.10.38 · Ficha técnica de Lamictal 100 mg (n.º reg. 61568), apdos. 4.2 y 4.4 (junio de 2025)']
    ] });
    y = t.y + 34;

    // 2. Antipsicóticos
    y = F.band(y, 'Antipsicóticos', { n: 2 }) + 14;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Clozapina: recuento absoluto de neutrófilos (RAN) y corazón', node: 'clozapina_monit' },
        'RAN ≥ 1500/mm³ (≥ 1000/mm³ en neutropenia étnica benigna confirmada), con fórmula leucocitaria en los 10 días previos; historia clínica y examen médico; valorar un ECG previo (apdo. 4.4).',
        '●●● RAN semanal las primeras 18 semanas; mensual las 34 semanas siguientes; cada 12 semanas pasados 12 meses sin neutropenia; una vez al año pasados 24 meses sin neutropenia; mensual durante todo el tratamiento si hubo neutropenia leve ya estabilizada o resuelta; al menos 2 veces por semana mientras el RAN esté entre 1000 y 1500/mm³; inmediato ante signos de infección; y 4 semanas tras la interrupción completa o hasta la recuperación hematológica (4.4). ●●○ Miocarditis: riesgo mayor en los 2 primeros meses; sospechar ante taquicardia persistente en reposo (recuadro inicial). ●●○ Peso: «vigilancia clínica» (4.4).',
        'Ficha técnica AEMPS-CIMA de Leponex 100 mg (n.º reg. 59547), recuadro inicial y apdo. 4.4 (febrero de 2026)'],
      [{ t: 'Resto de antipsicóticos: peso, metabolismo y tensión (psicosis)', node: 'ap_atipicos' },
        'Peso (en gráfica), perímetro de cintura, pulso y tensión arterial, glucemia en ayunas o HbA1c, perfil lipídico y prolactina; trastornos del movimiento; estado nutricional, dieta y actividad física (rec. 1.3.6.1).',
        '●●● Peso semanal las 6 primeras semanas, a las 12 semanas, al año y después cada año; perímetro de cintura cada año; pulso y tensión arterial a las 12 semanas, al año y después cada año; glucemia en ayunas o HbA1c y lípidos a las 12 semanas, al año y después cada año (1.3.6.4).',
        'NICE CG178, rec. 1.3.6.1 y 1.3.6.4 (2014; guía actualizada en 2026)'],
      [{ t: 'Resto de antipsicóticos (trastorno bipolar)', node: 'ap_tipicos' },
        'Peso o IMC, pulso, tensión arterial, glucemia en ayunas o HbA1c y perfil lipídico (rec. 1.10.5).',
        '●●● Pulso y tensión arterial tras cada cambio de dosis; peso o IMC semanal las 6 primeras semanas y a las 12 semanas; glucemia en ayunas o HbA1c y lípidos a las 12 semanas (1.10.8). ●●● Revisión de salud física al menos anual: peso o IMC, pulso y tensión, glucemia o HbA1c, lípidos y función hepática (1.2.11-1.2.12).',
        'NICE CG185, rec. 1.2.11, 1.2.12, 1.10.5 y 1.10.8'],
      ['Consenso ADA-APA (antipsicóticos de segunda generación)',
        'Antecedentes personales y familiares de enfermedad cardiovascular, peso o IMC, perímetro de cintura, tensión arterial, glucemia en ayunas y perfil lipídico en ayunas (consenso ADA-APA 2004, según lo reproduce Peña 2018).',
        '●○○ Peso o IMC a las 4, 8 y 12 semanas y luego trimestral; tensión arterial y glucemia en ayunas a las 12 semanas y después cada año; perfil lipídico en ayunas a las 12 semanas y después cada 5 años; perímetro de cintura y antecedentes cada año (consenso ADA-APA 2004, según lo reproduce Peña 2018). Texto original del consenso [fuente no localizada]: no pudo abrirse y solo se comprobó su referencia.',
        'ADA, APA, AACE y NAASO (2004), Diabetes Care 27:596-601 · PMID 14747245, citado a través de Peña 2018, Ment Health Clin 8:49-55 · PMID 29955545'],
      [{ t: 'Prolactina', node: 'd2_block' },
        'Prolactina basal (CG178, rec. 1.3.6.1).',
        '●●○ CG178 no fija periodicidad para repetirla (no figura en 1.3.6.4). En la depresión tratada con un antipsicótico de potenciación, NG222 incluye la prolactina entre los posibles controles y pide revisar en cada visita los efectos relacionados con ella, sexuales o menstruales (1.4.34).',
        'NICE CG178, rec. 1.3.6.1 · NICE NG222, rec. 1.4.34'],
      ['ECG',
        'Ofrecer ECG si lo especifica la ficha técnica, si la exploración identifica un riesgo cardiovascular (por ejemplo, hipertensión), si hay antecedentes personales de enfermedad cardiovascular o si la persona ingresa (CG178, rec. 1.3.6.2; CG185, rec. 1.10.6, añade antecedentes familiares, colapso súbito y arritmia).',
        '●●○ CG178 y CG185 no fijan periodicidad de ECG en el seguimiento. NG222: ECG basal y al alcanzar la dosis final si hay enfermedad o riesgo cardiovascular o se toman otros fármacos que prolongan el QT, como citalopram o escitalopram (1.4.34).',
        'NICE CG178, rec. 1.3.6.2 · NICE CG185, rec. 1.10.6 · NICE NG222, rec. 1.4.34']
    ] });
    y = t.y + 34;

    // 3. Antidepresivos
    y = F.band(y, 'Antidepresivos: intervalo QT e hiponatremia', { n: 3 }) + 14;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Citalopram (QT)', node: 'citalopram' },
        'Contraindicado con antecedentes de QT alargado o síndrome congénito de QT largo y junto a otros fármacos que prolongan el QT (apdo. 4.3). Corregir antes la hipopotasemia y la hipomagnesemia (apdo. 4.4).',
        '●●○ La ficha no fija un calendario de ECG: si aparecen signos de arritmia, suspender y hacer un electrocardiograma; precaución con bradicardia significativa, infarto reciente o insuficiencia cardiaca descompensada (4.4).',
        'Ficha técnica AEMPS-CIMA de Seropram 30 mg (n.º reg. 63564), apdos. 4.3 y 4.4 (octubre de 2023)'],
      [{ t: 'Escitalopram (QT)', node: 'escitalopram' },
        'Mismas contraindicaciones por QT (apdo. 4.3). En la enfermedad cardiaca estable, considerar la revisión del ECG antes de iniciar; corregir antes la hipopotasemia y la hipomagnesemia (apdo. 4.4).',
        '●●○ La ficha no fija un calendario de ECG: si aparecen signos de arritmia cardiaca, retirar y hacer un ECG (4.4).',
        'Ficha técnica AEMPS-CIMA de Cipralex 10 mg (n.º reg. 65230), apdos. 4.3 y 4.4 (noviembre de 2024)'],
      [{ t: 'ISRS en personas mayores (hiponatremia)', node: 'isrs' },
        'Identificar el riesgo: edad avanzada, cirrosis o fármacos que causan hiponatremia (Cipralex, apdo. 4.4); diuréticos (NG222, rec. 1.4.24). La edad avanzada (OR 6,3) y el uso concomitante de diuréticos, tiazidas (OR 11,2-13,5), son los factores de riesgo descritos (De Picker 2014).',
        '●●○ «Estar alerta» al riesgo de hiponatremia al prescribir a personas mayores (NG222, rec. 1.4.24). Ni NICE ni las fichas consultadas fijan un calendario de natremia; el control de sodio basal y en las primeras semanas en personas de riesgo es práctica habitual [fuente no localizada].',
        'NICE NG222, rec. 1.4.24 · Fichas técnicas de Seropram y Cipralex, apdo. 4.4 · De Picker 2014 (PMID 25262043)']
    ] });
    y = t.y + 34;

    // 4. TDAH
    y = F.band(y, 'Fármacos del TDAH: tensión arterial, frecuencia cardiaca, peso y talla', { n: 4 }) + 14;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Metilfenidato', node: 'metilfenidato' },
        'Estado cardiovascular con presión arterial y ritmo cardiaco; antecedentes familiares de muerte súbita cardiaca o inexplicada; altura y peso en una gráfica de crecimiento (apdo. 4.2).',
        '●●● Pulso y presión arterial en cada ajuste de dosis y después al menos cada 6 meses; altura, peso y apetito en la infancia al menos cada 6 meses; trastornos psiquiátricos en cada ajuste de dosis, al menos cada 6 meses y en cada visita (4.2 y 4.4). ●●○ Peso de las personas adultas «con regularidad» (4.2).',
        'Ficha técnica AEMPS-CIMA de Concerta 18 mg (n.º reg. 65148), apdos. 4.2 y 4.4 (febrero de 2026)'],
      [{ t: 'Atomoxetina', node: 'atomoxetina' },
        'Historial médico y estado cardiovascular con presión arterial y frecuencia cardiaca (apdo. 4.2).',
        '●●● Frecuencia cardiaca y presión arterial tras cada ajuste de dosis y después al menos cada 6 meses (4.2 y 4.4). ●●○ Crecimiento y desarrollo en la infancia y la adolescencia; interrumpir ante ictericia o daño hepático demostrado por laboratorio (4.4).',
        'Ficha técnica AEMPS-CIMA de Atomoxetina Cinfa 80 mg (n.º reg. 82446), apdos. 4.2 y 4.4 (noviembre de 2024)'],
      [{ t: 'Medicación del TDAH según NICE', node: 'estim_seguridad' },
        'Altura y peso; pulso y tensión arterial basales; valoración cardiovascular. No hace falta ECG salvo los supuestos de la rec. 1.7.5 o un tratamiento concomitante con riesgo cardiaco (rec. 1.7.4).',
        '●●● Frecuencia cardiaca y tensión arterial antes y después de cada cambio de dosis y cada 6 meses (1.8.9). ●●● Peso cada 6 meses en personas adultas; altura cada 6 meses en la infancia y la adolescencia; peso cada 3 meses hasta los 10 años, y a los 3 y 6 meses del inicio y después cada 6 meses en mayores de 10 años y jóvenes (1.8.5). Sin análisis de sangre ni ECG de rutina salvo indicación clínica (1.8.10).',
        'NICE NG87, rec. 1.7.4, 1.8.5, 1.8.9 y 1.8.10 (2018; actualizada en 2019)']
    ] });
    y = t.y + 40;

    // 5. Restricciones y discrepancias
    y = F.band(y, 'Restricciones ligadas al fármaco y puntos en que las fuentes difieren', { n: 5 }) + 24;
    const bw = 700, gap = 40;
    const vT = {
      title: 'Valproato y reproducción (ficha técnica de Depakine Crono, apdos. 4.3, 4.4 y 4.6)',
      text: 'En el trastorno bipolar está contraindicado en el embarazo y, en quien pueda gestar, salvo que se cumplan las condiciones del Plan de Prevención de Embarazos (apdo. 4.3; la ficha habla de «mujeres en edad fértil»): test de embarazo negativo antes de iniciar, anticoncepción eficaz, revisión por especialista al menos una vez al año y Formulario Anual del Conocimiento del Riesgo (apdo. 4.4).\nVarones: informar del posible riesgo de trastornos del neurodesarrollo en la descendencia (evidencia inconsistente), tratar la necesidad de anticoncepción eficaz, también para la pareja, durante el tratamiento y al menos 3 meses después, no donar esperma en ese mismo periodo y reevaluar periódicamente si sigue siendo el tratamiento más adecuado (apdos. 4.4 y 4.6).' };
    const hT = {
      title: 'Carbamazepina y HLA-B*15:02 (ficha técnica de Tegretol, apdos. 4.2 y 4.4)',
      text: 'Las personas de origen chino han o tailandés deben examinarse, siempre que sea posible, antes de iniciar el tratamiento; si el resultado es positivo no debe usarse salvo que no exista otra opción terapéutica. La ficha cifra la prevalencia del alelo en un 10 % en esas poblaciones y en menos del 1 % en descendientes de europeos, y pide considerar la prueba en otras poblaciones asiáticas de riesgo (cita prevalencias superiores al 15 % en Filipinas y Malasia).\nHLA-A*31:01 (2-5 % en poblaciones europeas): la ficha considera insuficientes los datos para recomendar su detección previa.\nEl resultado genético no sustituye a la vigilancia clínica de la piel.' };
    const dT = {
      title: 'Donde las fuentes difieren (se muestran ambas, sin resolverlo)',
      text: '• Litemia de mantenimiento: cada 3 meses el primer año y después cada 6 o cada 3 meses (NICE CG185) frente a cada 1-2 meses (ficha de Plenur).\n• Intervalo de litemia: 0,6-0,8 o 0,8-1,0 mmol/L (NICE CG185) frente a 0,5-1,2 mEq/L (ficha de Plenur).\n• Función hepática con valproato: a los 6 meses y luego anual (NICE CG185) frente a «periódicamente durante los 6 primeros meses» (ficha de Depakine).\n• Pulso y tensión con antipsicóticos: a las 12 semanas, al año y anual (CG178) frente a tras cada cambio de dosis y en la revisión anual (CG185).\n• Peso de la persona adulta con metilfenidato: cada 6 meses (NG87) frente a «con regularidad» (ficha de Concerta).' };
    // se miden las tres cajas en una figura auxiliar para igualar alturas y dejar libre la esquina de la etiqueta «!»
    const M = new Fig({ key: 'medida', title: 'medida', w: W });
    const mh = Math.max(...[vT, hT, dT].map((o, i) => M.box('m' + i, Object.assign({ x: X, y: 100 + i * 2000, w: bw, fs: 18, align: 'left', type: 'warn' }, o)).h)) + 48;
    const v = F.box('vpa_repro', Object.assign({ x: X, y, w: bw, type: 'warn', align: 'left', fs: 18, node: 'valproato_fertil', minH: mh }, vT));
    const h = F.box('hla', Object.assign({ x: X + bw + gap, y, w: bw, type: 'warn', align: 'left', fs: 18, node: 'hla_carbamaz', minH: mh }, hT));
    const d = F.box('difieren', Object.assign({ x: X + 2 * (bw + gap), y, w: bw, type: 'info', align: 'left', fs: 18, minH: mh }, dT));
    y = Math.max(v.y + v.h, h.y + h.h, d.y + d.h) + 36;
    F.box('lim', { x: X, y, w: W - 2 * X, type: 'lim', align: 'left', fs: 18, title: 'Límites de la figura',
      text: 'Resumen de lo que piden las fuentes citadas, consultadas en noviembre de 2026: no sustituye a la ficha técnica vigente de cada medicamento ni a los protocolos locales, y no es una pauta individual. Las guías NICE son británicas y pueden no coincidir con la ficha técnica española; cuando difieren no se resuelve aquí. Las fichas técnicas corresponden a una presentación concreta de cada principio activo y otras presentaciones pueden diferir. No recoge dosis, interacciones ni la monitorización de otros fármacos (oxcarbazepina, tricíclicos, guanfacina, lisdexanfetamina). El calendario del consenso ADA-APA procede de una fuente secundaria indexada (Peña 2018), porque el texto original no pudo abrirse; el control de la natremia con ISRS se da como [fuente no localizada]. El símbolo ● describe cómo de explícita es la fuente, no la calidad de la evidencia.' });
    F.footer('Fuentes: NICE CG185 (2014, act. 2025), CG178 (2014, act. 2026), NG87 (2018, act. 2019) y NG222 (2022); fichas técnicas AEMPS-CIMA de Leponex, Plenur, Depakine Crono, Tegretol, Lamictal, Seropram, Cipralex, Concerta y Atomoxetina Cinfa (consulta de noviembre de 2026); consenso ADA-APA 2004 (PMID 14747245) a través de Peña 2018 (PMID 29955545); De Picker 2014 (PMID 25262043). Esquema docente: no sustituye a la ficha técnica ni a los protocolos locales.');
    return F;
  }
};
