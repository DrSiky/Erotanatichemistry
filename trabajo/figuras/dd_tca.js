// Figura: trastornos de la conducta alimentaria: diagnóstico diferencial y valoración del riesgo médico (MEED 2022, NICE NG69, CIE-11/DSM-5-TR).
// Compilar en prueba: node tools/fig.js dd_tca --dry --png <carpeta>
const TITLE = 'Trastornos de la conducta alimentaria: diagnóstico diferencial y valoración del riesgo médico';
module.exports = {
  key: 'dd_tca',
  meta: {
    title: TITLE,
    kind: 'dd',
    cap: 'Figura en siete bloques. 1) Punto de partida: cuándo sospechar un trastorno de la conducta alimentaria y por qué el peso normal no tranquiliza. 2) Diferencial entre anorexia nerviosa, bulimia nerviosa, trastorno por atracón, trastorno de evitación/restricción de la ingesta (TERIA/ARFID) y otros trastornos especificados, con los rasgos esenciales de la CIE-11 y los umbrales del DSM-5-TR. 3) Diferencial con otros trastornos mentales: cada pregunta conduce a la entidad que imita o acompaña al TCA y a lo que permite distinguirla. 4) Diferencial con causas médicas de pérdida de peso. 5) Marco de riesgo vital de la guía MEED del Royal College of Psychiatrists (2022): columnas «rojo» (riesgo alto inminente) y «ámbar» (alerta), rotuladas con texto para que el color no sea el único diferenciador. 6) Señales de alarma que obligan a valoración médica urgente. 7) Síndrome de realimentación e infraalimentación, marco legal y límites. Las cajas con flecha en la esquina abren la ficha correspondiente. «[fuente no localizada]», «[fuente oficial no localizada]» y «[texto original no cotejado]» señalan lo que no se ha podido comprobar en la fuente primaria. Esquema docente: no es un protocolo, no fija pautas de nutrición ni de fármacos y no sustituye a la valoración clínica individual.',
    refs: [
      'Royal College of Psychiatrists (2022). Medical emergencies in eating disorders (MEED): guidance on recognition and management. College Report CR233, mayo de 2022, actualizado en diciembre de 2025. London: RCPsych · tablas 1, 2, 3, 7 y 8, recomendaciones 1-4 y capítulos 2 y 4 cotejados en el texto completo',
      'National Institute for Health and Care Excellence (2017). Eating disorders: recognition and treatment. NICE guideline NG69, publicada el 23-05-2017 y actualizada el 16-12-2020, recomendaciones 1.2.5, 1.2.6, 1.2.9, 1.6.1, 1.8.17, 1.10.2, 1.10.3, 1.10.5, 1.11.2, 1.11.3, 1.11.5, 1.11.10 y 1.12.1-1.12.3 (texto en nice.org.uk, consultado en noviembre de 2026)',
      'National Institute for Health and Care Excellence (2006). Nutrition support for adults: oral nutrition support, enteral tube feeding and parenteral nutrition. Clinical guideline CG32, actualizada el 04-08-2017, recomendación 1.4.6 (cuadro 1) (texto en nice.org.uk, consultado en noviembre de 2026)',
      'Claudino AM et al. (2019). The classification of feeding and eating disorders in the ICD-11: results of a field study comparing proposed ICD-11 guidelines with existing ICD-10 guidelines. BMC Med 17:93 · PMID 31084617 · tabla 1 (rasgos esenciales) cotejada en el texto completo',
      'World Health Organization (2019). International Classification of Diseases, 11th Revision (ICD-11), capítulo 6, trastornos de la alimentación y de la ingesta de alimentos, 6B80-6B83 [fuente oficial no localizada: códigos y texto definitivo no cotejados en icd.who.int]',
      'American Psychiatric Association (2022). DSM-5-TR. Washington, DC: APA Publishing. Trastornos de la conducta alimentaria y de la ingesta de alimentos [texto original no cotejado]',
      'Arcelus J et al. (2011). Mortality rates in patients with anorexia nervosa and other eating disorders. A meta-analysis of 36 studies. Arch Gen Psychiatry 68:724-731 · PMID 21727255',
      'Sawyer SM et al. (2016). Physical and psychological morbidity in adolescents with atypical anorexia nervosa. Pediatrics 137:e20154080 · PMID 27025958',
      'Greenfeld D et al. (1995). Hypokalemia in outpatients with eating disorders. Am J Psychiatry 152:60-63 · PMID 7802122',
      'Garber AK et al. (2021). Short-term outcomes of the Study of Refeeding to Optimize Inpatient Gains for patients with anorexia nervosa: a multicenter randomized clinical trial. JAMA Pediatr 175:19-27 · PMID 33074282',
      'Richterich A, Brunner R & Resch F (2003). Achalasia mimicking prepubertal anorexia nervosa. Int J Eat Disord 33:356-359 · PMID 12655633',
      'Hambleton A et al. (2022). Psychiatric and medical comorbidities of eating disorders: findings from a rapid review of the literature. J Eat Disord 10:132 · PMID 36064606',
      'Jefatura del Estado (2000). Ley 1/2000, de 7 de enero, de Enjuiciamiento Civil (BOE núm. 7, 08-01-2000), art. 763'
    ],
    nodes: ['tcc_e', 'hered_an', 'apetito_sx', 'pica', 'rumiacion_alim', 'autolesion']
  },
  draw(Fig) {
    const W = 2300, X = 60, FW = 2180;
    const F = new Fig({ key: 'dd_tca', title: TITLE, w: W,
      desc: 'Figura de diagnóstico diferencial de los trastornos de la conducta alimentaria (anorexia nerviosa, bulimia nerviosa, trastorno por atracón, TERIA/ARFID y otros especificados) frente a otros trastornos mentales y a causas médicas de pérdida de peso, con el marco de riesgo vital de la guía MEED 2022 (rojo y ámbar), las señales de alarma que exigen valoración médica urgente, el síndrome de realimentación, el marco legal y los límites de la figura.' });
    const eq = bs => { const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return h; };

    // ---------- Bloque 1: punto de partida ----------
    let y = F.band(90, 'Punto de partida: sospecha, peso y prioridad de la nutrición', { n: 1 }) + 16;
    const CW = 700, CG = 40;
    const p1 = F.box('p1', { x: X, y, w: CW, type: 'q', fs: 18, node: 'edeq_scoff', title: '¿Sospecha de un trastorno de la conducta alimentaria?',
      text: 'Tener en cuenta IMC o peso inusualmente bajo o alto para la edad, pérdida rápida de peso, restricción, retraimiento social ante la comida, preocupación desproporcionada por el peso o la figura, alteraciones menstruales o endocrinas, síntomas digestivos inexplicados, desequilibrio electrolítico o hipoglucemia inexplicados y erosión dental atípica (NICE NG69, rec. 1.2.6). Un cribado como el SCOFF no basta por sí solo para afirmar o descartar el trastorno (rec. 1.2.5).' });
    const p2 = F.box('p2', { x: X + CW + CG, y, w: CW, type: 'info', fs: 18, title: 'El peso normal no excluye el riesgo',
      text: 'En 42 adolescentes con anorexia nerviosa atípica (sin peso bajo) y 118 con anorexia nerviosa completa no hubo diferencias significativas en bradicardia (24 % frente a 33 %) ni en inestabilidad ortostática (43 % frente a 38 %) (Sawyer 2016). La bulimia nerviosa sin peso bajo también puede presentarse como emergencia vital por alteraciones electrolíticas o complicaciones digestivas (MEED 2022).' });
    const p3 = F.box('p3', { x: X + 2 * (CW + CG), y, w: CW, type: 'warn', fs: 18, title: 'El diagnóstico no debe retrasar la nutrición',
      text: 'La búsqueda de un diagnóstico nunca debe retrasar la terapia nutricional en una persona desnutrida (MEED 2022). Razón de mortalidad estandarizada: 5,86 en la anorexia nerviosa, 1,93 en la bulimia nerviosa y 1,92 en los trastornos no especificados; una de cada cinco muertes en la anorexia nerviosa fue por suicidio (Arcelus 2011).' });
    eq([p1, p2, p3]);
    F.arrow(p1, p2); F.arrow(p2, p3);
    y += p1.h + 50;

    // ---------- Bloque 2: diferencial entre TCA ----------
    y = F.band(y, 'Diferencial entre los trastornos de la conducta alimentaria (CIE-11 y DSM-5-TR)', { n: 2 }) + 14;
    y = F.text(X, y + 20, 'Rasgos esenciales según la propuesta final de la CIE-11 publicada por Claudino (2019); los códigos 6B80-6B83 y el texto definitivo de la CIE-11, [fuente oficial no localizada]. Los umbrales del DSM-5-TR, [texto original no cotejado]. Cada fila abre la ficha de la entidad.', { fs: 18, w: FW }) + 10;
    let t = F.table({ x: X, y, fs: 17, cols: [{ w: 330, label: 'Entidad' }, { w: 780, label: 'Rasgos esenciales (CIE-11)' }, { w: 560, label: 'Umbrales y duración' }, { w: 510, label: 'Qué la separa de las vecinas' }],
      rows: [
        [{ t: 'Anorexia nerviosa', node: 'anor' }, 'Peso significativamente bajo no debido a falta de alimentos ni a otra afección médica; patrón persistente de restricción u otras conductas dirigidas a lograr o mantener un peso bajo, típicamente con miedo extremo a ganarlo (incluidos vómitos, laxantes, omisión de insulina, ejercicio excesivo o fármacos para adelgazar); el peso bajo está sobrevalorado y es central en la autoevaluación, o el peso o la figura se perciben de forma inexacta (Claudino 2019).', 'CIE-11, guía orientativa: IMC <18,5 en adultos y IMC para la edad < percentil 5 en menores; una pérdida rápida (más del 20 % del peso en 6 meses) puede sustituir al criterio de peso bajo (Claudino 2019). DSM-5-TR, gravedad por IMC: leve ≥17, moderada 16-16,99, grave 15-15,99, extrema <15.', 'Con atracones y purgas pero peso significativamente bajo se diagnostica anorexia nerviosa, no bulimia: la bulimia exige que no se cumplan los requisitos de la anorexia (Claudino 2019).'],
        [{ t: 'Bulimia nerviosa', node: 'bul' }, 'Atracones frecuentes con pérdida de control y conductas compensatorias inapropiadas repetidas (sobre todo vómito autoinducido, también ayuno, diuréticos, laxantes, enemas, omisión de insulina o ejercicio extenuante); preocupación excesiva por el peso y la figura; malestar marcado o deterioro (Claudino 2019).', 'CIE-11: atracones y conductas compensatorias, por ejemplo, una vez por semana o más durante al menos 1 mes (Claudino 2019). DSM-5-TR: al menos una vez por semana durante 3 meses.', 'Frente al trastorno por atracón: conductas compensatorias regulares. Frente a la anorexia: no hay peso significativamente bajo.'],
        [{ t: 'Trastorno por atracón', node: 'bed' }, 'Atracones frecuentes y recurrentes con pérdida de control, no acompañados de forma regular de conductas compensatorias; malestar marcado o deterioro; no mejor explicados por otra afección médica (p. ej., síndrome de Prader-Willi) u otro trastorno mental (p. ej., un trastorno depresivo), ni por el efecto de una sustancia o un medicamento (Claudino 2019).', 'CIE-11: por ejemplo, una vez por semana o más durante 3 meses (Claudino 2019). DSM-5-TR: al menos una vez por semana durante 3 meses.', 'Descartar el aumento de la ingesta de un episodio depresivo o el efecto de fármacos: la CIE-11 los excluye expresamente (Claudino 2019).'],
        [{ t: 'TERIA / ARFID', node: 'arfid' }, 'Evitación o restricción de la ingesta que produce pérdida de peso significativa, déficits nutricionales, dependencia de suplementos orales o de sonda, otro daño físico o deterioro funcional; no motivada por preocupación por el peso o la figura ni por distorsión de la imagen corporal; no debida a falta de alimentos, a otra afección médica (p. ej., alergias alimentarias, hipertiroidismo), a una sustancia (p. ej., anfetamina) ni a otro trastorno mental (Claudino 2019).', 'Sin umbral de peso: cuenta la consecuencia física o funcional (Claudino 2019). La pérdida rápida de peso con cualquier IMC, por ejemplo en la obesidad o en el TERIA, es un dato rojo en MEED (2022).', 'La ausencia de motivación ponderal y de distorsión corporal la separa de la anorexia nerviosa (Claudino 2019).'],
        [{ t: 'Otros especificados (OSFED)', node: 'tca_adol' }, 'Cuadros con síntomas clave de TCA que no cumplen todos los criterios: anorexia nerviosa atípica (pérdida significativa sin peso bajo), bulimia o atracones de baja frecuencia o duración limitada, trastorno por purgas y síndrome de ingesta nocturna (DSM-5-TR). Se tratan como el trastorno al que más se parecen (NICE NG69, rec. 1.6.1).', 'Sin umbrales propios. En ausencia de investigación, el riesgo se estima por los síntomas: purgas, peso bajo o autolesiones (MEED 2022).', 'En adolescentes hubo poca evidencia de que la morbilidad de la anorexia atípica fuera menor que la de la anorexia completa (Sawyer 2016): no infravalorar por el peso.']
      ] });
    y = t.y + 50;

    // ---------- Bloque 3: diferencial con otros trastornos mentales ----------
    y = F.band(y, 'Diferencial y comorbilidad con otros trastornos mentales', { n: 3 }) + 14;
    const QW = 620, DX = 740, DW = 520, IX = 1300, IW = 940;
    F.text(X, y + 18, 'Pregunta clínica', { bold: true, fs: 19, w: QW }); F.text(DX, y + 18, 'Entidad que imita o acompaña', { bold: true, fs: 19, w: DW }); F.text(IX, y + 18, 'Cómo distinguir y qué no olvidar', { bold: true, fs: 19, w: IW });
    y += 40;
    const prow = (id, q, d, i) => {
      const a = F.box(id + 'q', Object.assign({ x: X, y, w: QW, type: 'q', fs: 18 }, q));
      const b = F.box(id + 'd', Object.assign({ x: DX, y, w: DW, type: 'dx', fs: 18 }, d));
      const c = F.box(id + 'i', Object.assign({ x: IX, y, w: IW, type: 'info', fs: 17, align: 'left' }, i));
      eq([a, b, c]); F.arrow(a, b); F.arrow(b, c, { dash: true });
      y += a.h + 20;
    };
    prow('m1', { title: '¿Come menos por falta de apetito, sin intención de adelgazar?' }, { node: 'ddm', title: 'Episodio depresivo', text: 'La disminución del apetito y la pérdida de peso pueden ser síntomas depresivos (DSM-5-TR).' },
      { text: 'En la anorexia nerviosa la CIE-11 exige conductas dirigidas a lograr o mantener un peso bajo y la sobrevaloración del peso bajo (Claudino 2019); su ausencia orienta a otra causa [fuente no localizada para la comparación directa]. La depresión es además comorbilidad frecuente (trastornos del ánimo hasta en el 54 %; Hambleton 2022) y debe evaluarse siempre, junto con ansiedad, autolesiones y TOC (NICE NG69, rec. 1.2.9).' });
    prow('m2', { title: '¿Rituales con la comida por contaminación, simetría o duda, ajenos al peso?' }, { node: 'toc_dsm', title: 'Trastorno obsesivo-compulsivo', text: 'La ingesta puede restringirse por temor a contaminarse o por rituales [fuente no localizada].' },
      { text: 'Las obsesiones y compulsiones son frecuentes en los TCA (MEED 2022) y el TOC comórbido aumenta la mortalidad asociada al TCA (MEED 2022). Si la restricción se debe a otro trastorno mental, la CIE-11 no permite diagnosticar TERIA (Claudino 2019). Que el contenido de las obsesiones no gire en torno al peso o la figura orienta a TOC primario [fuente no localizada].' });
    prow('m3', { title: '¿Rechaza alimentos por una creencia delirante (veneno, órdenes alucinatorias)?' }, { node: 'tdelirant', title: 'Trastorno psicótico', text: 'Trastorno delirante, esquizofrenia u otra psicosis con restricción secundaria.' },
      { text: 'La restricción que es manifestación de otro trastorno mental excluye el TERIA (Claudino 2019). La creencia sobre la comida es delirante y no gira en torno al peso o la figura [fuente no localizada]. No confundir con la percepción inexacta del propio cuerpo, rasgo esencial de la anorexia nerviosa (Claudino 2019).' });
    prow('m4', { title: '¿Restricción por textura, olor o rigidez, sin preocupación por el peso?' }, { node: 'tea', title: 'Autismo y TERIA', text: 'La rigidez y la sensibilidad sensorial pueden condicionar la alimentación [fuente no localizada].' },
      { text: 'La prevalencia de autismo y de TCA es mayor que en la población general, y en personas autistas puede ser difícil discernir si la inflexibilidad o la atención al detalle se deben al TCA, y por tanto si conviene confrontarlas o acomodarlas (MEED 2022). La ausencia de motivación ponderal orienta a TERIA (Claudino 2019).' });
    prow('m5', { title: '¿La preocupación por el cuerpo se limita al peso y la grasa corporal?' }, { node: 'tdc', title: 'Trastorno dismórfico corporal', text: 'Preocupación por defectos percibidos del aspecto.' },
      { text: 'Si la preocupación se limita al peso o a la grasa en una persona que cumple criterios de TCA, se diagnostica el TCA y no un trastorno dismórfico corporal (DSM-5-TR). En la anorexia el peso bajo está sobrevalorado y es central en la autoevaluación (Claudino 2019), con la estructura de una idea sobrevalorada.', node: 'idea_sobrev' });
    y += 30;

    // ---------- Bloque 4: diferencial médico ----------
    y = F.band(y, 'Diferencial con causas médicas de pérdida de peso', { n: 4 }) + 16;
    const MW = 530, MG = 20, mx = k => X + k * (MW + MG);
    const md = [
      F.box('d1', { x: mx(0), y, w: MW, type: 'dx', fs: 17, node: 'endocrino', title: 'Endocrinas', text: 'El hipertiroidismo debe excluirse antes de diagnosticar TERIA (Claudino 2019). Ante hipoglucemia, pensar también en enfermedad de Addison o abuso de insulina (MEED 2022). En la anorexia puede haber síndrome eutiroideo enfermo, con T3 baja, sin enfermedad tiroidea previa (MEED 2022).' }),
      F.box('d2', { x: mx(1), y, w: MW, type: 'dx', fs: 17, title: 'Digestivas', text: 'Celiaquía (anticuerpos antitransglutaminasa IgA en el estudio básico) y enfermedad inflamatoria intestinal (la trombocitosis la sugiere; la calprotectina fecal ayuda) (MEED 2022). Una acalasia esofágica simuló una anorexia nerviosa prepuberal: vómitos nocturnos, dificultad para beber y sensación de nudo en la garganta (Richterich 2003).' }),
      F.box('d3', { x: mx(2), y, w: MW, type: 'dx', fs: 17, title: 'Hematológicas, neoplásicas e infecciosas', text: 'Leucemia y linfoma pueden dar pancitopenia y pérdida de peso, igual que la sepsis o la tuberculosis (MEED 2022). La pérdida de peso por mononucleosis infecciosa, enfermedad inflamatoria intestinal o tumores hipofisarios puede desencadenar un TCA en una persona vulnerable (MEED 2022).' }),
      F.box('d4', { x: mx(3), y, w: MW, type: 'warn', fs: 17, title: 'Diabetes tipo 1', text: 'La omisión de dosis de insulina es una conducta purgativa o compensatoria reconocida por la CIE-11 (Claudino 2019). En personas con diabetes ingresadas, una HbA1c >10 % (86 mmol/mol) es un dato rojo (MEED 2022).' })
    ];
    eq(md); y += md[0].h + 22;
    const e1 = F.box('e1', { x: X, y, w: 1070, type: 'act', fs: 18, align: 'left', title: 'Estudio básico y seguimiento',
      text: 'En toda persona: historia, exploración física completa y pruebas básicas (p. ej., antitransglutaminasa IgA, frotis de sangre periférica y PCR), con pruebas más complejas si son necesarias (MEED 2022). Las transaminasas elevadas suelen deberse a la desnutrición: se vigilan y solo se investigan si persisten tras recuperar el peso (MEED 2022). Ante un desequilibrio electrolítico persistente e inexplicado, valorar otra causa (NICE NG69, rec. 1.10.5).' });
    const e2 = F.box('e2', { x: X + 1110, y, w: 1070, type: 'info', fs: 18, align: 'left', title: 'Principios del diferencial (MEED 2022)',
      text: 'Los TCA son relativamente frecuentes y la mayoría de los síndromes alternativos no lo son. Si el diagnóstico es dudoso, ofrecer comida puede poner de manifiesto la evitación calórica de quien busca la delgadez y teme ganar peso. Es razonable derivar a valoración especializada a toda persona con un TCA en el diferencial y retirar la derivación si se confirma otro diagnóstico.' });
    eq([e1, e2]); F.arrow(e1, e2, { dash: true });
    y += e1.h + 50;

    // ---------- Bloque 5: marco de riesgo MEED ----------
    y = F.band(y, 'Valoración del riesgo médico: marco de riesgo vital de MEED (2022)', { n: 5 }) + 14;
    y = F.text(X, y + 20, 'Columnas rotuladas: ROJO = riesgo vital inminente alto; ÁMBAR = alerta ante un posible riesgo alto. Valores de adultos salvo indicación; en menores de 18 años los parámetros se ajustan por edad y sexo (MEED 2022, rec. 4). Fuente de todas las celdas: tabla 1 de MEED, salvo donde se indica la tabla 2.', { fs: 18, w: FW }) + 10;
    t = F.table({ x: X, y, fs: 17, cols: [{ w: 300, label: 'Dominio' }, { w: 760, label: 'ROJO: riesgo vital inminente alto' }, { w: 700, label: 'ÁMBAR: alerta' }, { w: 420, label: 'Nota' }],
      rows: [
        ['Pérdida de peso', '≥1 kg por semana durante 2 semanas consecutivas en una persona desnutrida; pérdida rápida con cualquier peso (p. ej., obesidad o TERIA)', '500-999 g por semana durante 2 semanas consecutivas en una persona desnutrida', 'NICE NG69 (rec. 1.11.3): una pérdida de más de 1 kg por semana puede requerir ingreso'],
        ['IMC', 'Adultos: <13. Menores: %mIMC <70 %', 'Adultos: 13-14,9. Menores: %mIMC 70-80 %', '%mIMC = IMC / IMC del percentil 50 para edad y sexo × 100; un valor verde no indica peso saludable'],
        ['Frecuencia cardiaca en vigilia', '<40 lpm', '40-50 lpm', 'Tabla 2: alarma también la taquicardia postural sintomática'],
        ['Tensión arterial y ortostatismo', 'TAS de pie <90 mmHg (≥18 años) o < percentil 0,4 para la edad, con síncope recurrente y caída postural de la TAS >20 mmHg o aumento de la FC >30 lpm (>35 en menores de 16 años)', 'TAS de pie <90 mmHg o < percentil 0,4 con síncope ocasional; caída postural >15 mmHg o aumento de la FC de hasta 30 lpm (35 en menores de 16 años)', 'Hipotensión y bradicardia suelen deberse a la desnutrición (tabla 2)'],
        ['Hidratación', 'Rechazo de líquidos; deshidratación grave (10 %)', 'Restricción hídrica grave; deshidratación moderada (5-10 %)', 'Tabla 2: cautela con los bolos de líquidos fuera de la hipovolemia'],
        ['Temperatura', '<35,5 °C timpánica o 35,0 °C axilar', '<36 °C', ''],
        ['Función muscular (prueba SUSS)', 'No se incorpora desde decúbito o no se levanta de cuclillas, o solo con ayuda de los brazos (puntuación 0-1)', 'No lo logra sin dificultad apreciable (puntuación 2)', 'Ninguna prueba muscular se ha investigado en menores de 18 años'],
        ['ECG', 'QTc prolongado* o cualquier otra anomalía significativa del ECG', 'Toma de fármacos que prolongan el QTc', '*Los umbrales de QTc de las tablas 1 y 2 de MEED no coinciden'],
        ['Bioquímica', 'Potasio <2,5 mmol/L; hipofosfatemia o fosfato en descenso; glucosa <3 mmol/L; hiponatremia; hipocalcemia; hipoalbuminemia; transaminasas >3 veces el rango normal', 'Tabla 2: potasio <3,0 mmol/L obliga a valoración médica y a considerar ingreso y monitorización cardiaca', 'Unos electrolitos normales no excluyen el compromiso médico (tabla 2)'],
        ['Conducta alimentaria y purgas', 'Rechazo agudo de la comida o ingesta estimada <500 kcal/día durante 2 días o más; varios episodios diarios de vómito o abuso de laxantes', 'Vómitos o abuso de laxantes 3 o más veces por semana', ''],
        ['Ejercicio en contexto de desnutrición', 'Ejercicio disfuncional >2 h/día', 'Ejercicio disfuncional >1 h/día', ''],
        [{ t: 'Autolesión y suicidio', node: 'ideac_suic' }, 'Autointoxicación; ideación suicida con riesgo moderado o alto de suicidio consumado', 'Cortes o conductas similares; ideación suicida con riesgo bajo', 'Valoración psicosocial urgente (tabla 2)']
      ] });
    y = t.y + 22;
    const r1 = F.box('r1', { x: X, y, w: 700, type: 'info', fs: 18, align: 'left', title: 'Cómo leer el marco',
      text: 'Una o más puntuaciones rojas, o dos o más ámbar, indican probablemente un riesgo alto. Ningún parámetro aislado basta, y un rojo de un dominio no equivale a un rojo de otro (MEED 2022). No usar un umbral absoluto de peso o IMC para decidir el ingreso (NICE NG69, rec. 1.11.2).' });
    const r2 = F.box('r2', { x: X + 740, y, w: 700, type: 'warn', fs: 18, align: 'left', title: '\nPurgas e hipopotasemia',
      text: 'En 945 pacientes ambulatorios, el 4,6 % tenía hipopotasemia; casi siempre en personas de menor peso que vomitaban o abusaban de laxantes, y fue un mal cribado de bulimia oculta (Greenfeld 1995). Signos de purgas: alcalosis metabólica o acidosis, erosión del esmalte, parótidas aumentadas y callosidades en los dedos (MEED 2022, tabla 2).' });
    const r3 = F.box('r3', { x: X + 1480, y, w: 700, type: 'info', fs: 18, align: 'left', node: 'qt_psicof', title: 'Fármacos y ECG',
      text: 'Ofrecer monitorización con ECG a quien toma fármacos que pueden comprometer la función cardiaca, por causar desequilibrio electrolítico, bradicardia <40 lpm, hipopotasemia o QT prolongado (NICE NG69, rec. 1.8.17). Valorar el ECG ante pérdida rápida de peso, purgas graves, bradicardia, hipotensión, exceso de cafeína, debilidad muscular o arritmia previa (rec. 1.10.2).' });
    eq([r1, r2, r3]);
    y += r1.h + 50;

    // ---------- Bloque 6: señales de alarma ----------
    y = F.band(y, 'Señales de alarma que obligan a valoración médica urgente', { n: 6 }) + 16;
    const AW = 530, ax = k => X + k * (AW + 20);
    const al = [
      F.box('a1', { x: ax(0), y, w: AW, type: 'warn', fs: 17, align: 'left', title: '\nAtención médica aguda', text: 'Desequilibrio electrolítico grave, desnutrición grave, deshidratación grave o signos de fallo orgánico incipiente: atención médica aguda, incluido el ingreso urgente (NICE NG69, rec. 1.10.3). El personal de planta debe saber que una persona con TCA puede tener un riesgo alto aunque parezca estar bien y tenga analítica normal (MEED 2022, rec. 1).' }),
      F.box('a2', { x: ax(1), y, w: AW, type: 'warn', fs: 17, align: 'left', title: '\nEn la anamnesis (MEED, tabla 3)', text: 'Pérdida de más de 1 kg por semana durante 2 semanas consecutivas; rechazo agudo de la comida (más de 24 horas: pedir consejo experto); vómitos frecuentes; debilidad muscular, como dificultad para subir escaleras; síncope, dolor torácico o disnea; diuresis escasa; estreñimiento pertinaz; ideas de suicidio.' }),
      F.box('a3', { x: ax(2), y, w: AW, type: 'warn', fs: 17, align: 'left', title: '\nEn la exploración y las pruebas (MEED, tabla 3)', text: 'IMC <13 o %mIMC <70 en menores; pulso <40; hipotensión postural con síncope recurrente; temperatura central <35,5 °C; SUSS 0-1; anomalía significativa del ECG; potasio <2,5 mmol/L; hiponatremia o densidad urinaria <1,010 (posible sobrecarga hídrica); fosfato bajo durante la realimentación o tras un atracón; glucosa <3 mmol/L.' }),
      F.box('a4', { x: ax(3), y, w: AW, type: 'warn', fs: 17, align: 'left', node: 'delirium', title: '\nConfusión, delirium o riesgo suicida', text: 'La confusión y el delirium son raros pero muy preocupantes: pueden deberse a síndrome de realimentación, encefalopatía de Wernicke u otra causa infecciosa, metabólica o neoplásica (MEED 2022). Con riesgo suicida significativo, considerar atención psiquiátrica de crisis u hospitalización psiquiátrica (NICE NG69, rec. 1.11.5).' })
    ];
    eq(al); y += al[0].h + 50;

    // ---------- Bloque 7: realimentación, marco legal y límites ----------
    y = F.band(y, 'Síndrome de realimentación e infraalimentación', { n: 7 }) + 16;
    const RW = 700, rx = k => X + k * (RW + 40);
    const s1 = F.box('s1', { x: rx(0), y, w: RW, type: 'mec', fs: 18, title: 'Qué es',
      text: 'Al reintroducir la nutrición tras una restricción intensa, el fosfato, el potasio y el magnesio pasan bruscamente al interior de las células y caen en la primera semana; el compromiso cardiaco puede ser mortal. Suele aparecer en las primeras 72 horas (1-5 días), pero puede ser tardío, hasta 18 días en un estudio (MEED 2022).' });
    const s2 = F.box('s2', { x: rx(1), y, w: RW, type: 'q', fs: 18, title: '¿Riesgo alto de realimentación? (MEED, tabla 8)',
      text: 'IMC <13 o %mIMC <70 %; ingesta escasa o nula durante más de 4 días; potasio, fósforo o magnesio bajos antes de empezar; leucocitos <3,8; comorbilidad médica (infección como la neumonía, cardiopatía, hepatopatía, consumo perjudicial de alcohol); riesgo de déficit de tiamina.' });
    const s3 = F.box('s3', { x: rx(2), y, w: RW, type: 'act', fs: 18, title: 'Qué hacer',
      text: 'Con riesgo alto: medio médico agudo con acceso a cuidados intermedios. Realimentar con cautela, controlar electrolitos hasta que se estabilicen y prolongar el control 2 semanas por el síndrome tardío (MEED 2022). Hipofosfatemia: <0,8 mmol/L en adultos y <1 mmol/L en adolescentes (MEED 2022). Usar un procedimiento normalizado que evite tanto la infranutrición como el síndrome (NICE NG69, rec. 1.11.10).' });
    eq([s1, s2, s3]); F.arrow(s1, s2); F.arrow(s2, s3);
    y += s1.h + 22;
    const u1 = F.box('u1', { x: rx(0), y, w: RW, type: 'warn', fs: 18, title: 'La infraalimentación también mata',
      text: 'Se han comunicado más muertes en la anorexia nerviosa por infraalimentación, a veces por miedo al síndrome de realimentación, que por el propio síndrome (MEED 2022). En 111 adolescentes y jóvenes de 12 a 24 años, la realimentación con más calorías desde el inicio restauró antes la estabilidad médica, sin más alteraciones electrolíticas (Garber 2021).' });
    const u2 = F.box('u2', { x: rx(1), y, w: RW, type: 'info', fs: 18, title: 'Criterios generales de NICE CG32',
      text: 'En población médica adulta general, riesgo alto con uno de: IMC <16, pérdida involuntaria >15 % en 3-6 meses, ingesta escasa o nula >10 días, o potasio, fosfato o magnesio bajos; o con dos de: IMC <18,5, pérdida >10 %, ingesta escasa >5 días, o alcohol o fármacos como insulina, quimioterapia, antiácidos o diuréticos (NICE CG32, cuadro 1). MEED advierte que aplicar pautas pensadas para enfermedad médica puede llevar a infraalimentar en la anorexia sin complicaciones.' });
    const u3 = F.box('u3', { x: rx(2), y, w: RW, type: 'dx', fs: 18, node: 'korsakoff', title: 'Tiamina y encefalopatía de Wernicke',
      text: 'Se ha descrito déficit de tiamina en el 38 % de las personas con anorexia nerviosa; la mayoría de las unidades de adultos la administran de forma sistemática durante la realimentación por el riesgo de síndrome de Wernicke-Korsakoff (MEED 2022). En el TERIA puede aparecer escorbuto si se evitan frutas y verduras durante mucho tiempo (MEED 2022).' });
    eq([u1, u2, u3]);
    y += u1.h + 22;
    const l1 = F.box('l1', { x: X, y, w: 1070, type: 'info', fs: 18, align: 'left', node: 'internamiento', title: 'Marco legal',
      text: 'Si la salud física corre un riesgo grave, la persona no consiente y solo puede tratarse con seguridad en régimen de ingreso, NICE NG69 remite al marco legal británico de tratamiento obligatorio, y la alimentación sin consentimiento solo debe hacerla un equipo multidisciplinar competente (rec. 1.12.1 y 1.12.3). En España, el internamiento no voluntario por razón de trastorno psíquico requiere autorización judicial (Ley de Enjuiciamiento Civil, art. 763).' });
    const l2 = F.box('l2', { x: X + 1110, y, w: 1070, type: 'info', fs: 18, align: 'left', node: 'consent_cap', title: 'Capacidad, comorbilidad y seguimiento',
      text: 'La capacidad para decidir se valora decisión a decisión y no se deduce del diagnóstico [fuente no localizada]. Los trastornos comórbidos (consumo de alcohol y sustancias, TEPT, trastorno de inestabilidad emocional de la personalidad, depresión y TOC) aumentan el riesgo de muerte asociado al TCA (MEED 2022). Ofrecer cuanto antes un tratamiento psicológico aprobado por NICE (MEED 2022).' });
    eq([l1, l2]);
    y += l1.h + 24;
    F.box('lim', { x: X, y, w: FW, type: 'lim', fs: 18, align: 'left', title: 'Límites de la figura',
      text: 'Esquema docente de apoyo al razonamiento: no es un protocolo, no fija pautas de nutrición, de electrolitos ni de fármacos y no sustituye al juicio clínico ni a los protocolos locales. El marco de MEED orienta el grado de preocupación y exige juicio clínico para su interpretación; su base es en gran parte consenso de expertos. Los valores son de adultos salvo indicación y no se aplican a menores sin ajustar por edad y sexo. Los rasgos de la CIE-11 proceden de la propuesta final publicada por Claudino (2019), no del texto oficial, y los umbrales del DSM-5-TR no se han cotejado en su texto original. Las distinciones con depresión, TOC y psicosis son orientativas: la comorbilidad es frecuente y un trastorno no excluye el otro. Las entidades enlazadas son ejemplos, no una lista exhaustiva; la pica y el trastorno de rumiación-regurgitación no se tratan aquí.' });
    F.footer('Fuentes: Royal College of Psychiatrists, MEED (CR233, 2022; actualizado en 2025); NICE NG69 (2017, actualizada en 2020) y CG32; Claudino 2019 (CIE-11); DSM-5-TR; Arcelus 2011; Sawyer 2016; Greenfeld 1995; Garber 2021; Richterich 2003; Hambleton 2022; Ley de Enjuiciamiento Civil, art. 763. Referencias completas en la ficha de la figura. Esquema docente: no sustituye a la valoración clínica individual.');
    return F;
  }
};
