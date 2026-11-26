// Figura: mapa semiológico de las alteraciones formales del pensamiento y del lenguaje.
// Tres paneles (curso y velocidad; forma y conexión; lenguaje y habla de causa neurológica o motora),
// lectura por cuadros y banda de datos (dimensiones, fiabilidad, correlatos y afasia de Wernicke frente a esquizoafasia).
// La localización lesional no se repite: remite a mod_neuropsico_lesional.
// Compilar en prueba: node tools/fig.js mod_pensamiento_lenguaje --dry --png <carpeta>
const TITLE = 'Alteraciones formales del pensamiento y del lenguaje: mapa semiológico';
module.exports = {
  key: 'mod_pensamiento_lenguaje',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Mapa semiológico en tres paneles. A) Curso y velocidad: cuánto y a qué ritmo se piensa y se habla. B) Forma y conexión: cómo se enlazan las ideas y las palabras. C) Lenguaje y habla de causa neurológica o motora, para el diferencial. De cada alteración se da una definición operativa con su fuente, los cuadros en que orienta y aquello con lo que se confunde. Siguen una lectura por cuadros (manía, esquizofrenia, depresión, demencia, catatonía y delirium) y una banda de datos: dimensiones positiva y negativa, frecuencia y pronóstico, fiabilidad, correlatos y diferencial entre la afasia de Wernicke y la esquizoafasia. Ninguna alteración es patognomónica de un diagnóstico. En las tablas, «TLC» y «TALD» remiten al texto de los ítems de esas escalas (Andreasen 1979a, 1986; Kircher 2014), cotejado en su reproducción literal en la tabla suplementaria 1 de Voppel 2026, que también reproduce los ítems de la SANS y de la PANSS citados; «BFCRS» remite a las definiciones de la escala de catatonía de Bush-Francis (Bush 1996) recogidas en Walther 2019. «[no verificada]» señala fuentes clásicas o manuales no cotejados. La localización lesional se trata en la figura «Mapa lesional de los síndromes neuropsicológicos». Esquema docente: no sustituye a la exploración ni al juicio clínico.',
    refs: [
      'Andreasen NC (1979a). Thought, language, and communication disorders. I. Clinical assessment, definition of terms, and evaluation of their reliability. Arch Gen Psychiatry 36:1315-1321 · PMID 496551',
      'Andreasen NC (1979b). Thought, language, and communication disorders. II. Diagnostic significance. Arch Gen Psychiatry 36:1325-1330 · PMID 496552',
      'Andreasen NC (1986). Scale for the assessment of thought, language, and communication (TLC). Schizophr Bull 12:473-482 · PMID 3764363',
      'Andreasen NC & Grove WM (1986). Thought, language, and communication in schizophrenia: diagnosis and prognosis. Schizophr Bull 12:348-359 · PMID 3764356',
      'Kircher T et al. (2014). A rating scale for the assessment of objective and subjective formal Thought and Language Disorder (TALD). Schizophr Res 160:216-221 · PMID 25458572',
      'Kircher T et al. (2018). Formal thought disorders: from phenomenology to neurobiology. Lancet Psychiatry 5:515-526 · PMID 29678679',
      'Kircher T, Stein F & Nagels A (2022). Differences in single positive formal thought disorder symptoms between closely matched acute patients with schizophrenia and mania. Eur Arch Psychiatry Clin Neurosci 272:395-401 · PMID 33961098',
      'Mutlu E et al. (2019). Examination of formal thought disorder and its clinical correlates with the Turkish version of the Thought and Language Disorder Scale (TALD-TR) in schizophrenia. Compr Psychiatry 93:7-13 · PMID 31276902',
      'Liddle PF et al. (2002). Thought and Language Index: an instrument for assessing thought and language in schizophrenia. Br J Psychiatry 181:326-330 · PMID 12356660',
      'Park SC et al. (2015). Reliability and validity of the Korean version of the Scale for the Assessment of Thought, Language, and Communication. Compr Psychiatry 61:122-130 · PMID 25987197',
      'Voppel A et al. (2026). Analysis of conceptual overlap among formal thought disorder rating scales in psychosis: a systematic semantic synthesis. Schizophrenia (Heidelb) 12:9 (en línea el 15 de diciembre de 2025; la tabla suplementaria 1 reproduce el texto de los ítems de las escalas) · PMID 41398324',
      'Kuperberg GR (2010). Language in schizophrenia Part 1: an introduction. Lang Linguist Compass 4:576-589 · PMID 20936080',
      'Yalincetin B et al. (2017). Formal thought disorder in schizophrenia and bipolar disorder: a systematic review and meta-analysis. Schizophr Res 185:2-8 · PMID 28017494',
      'Roche E et al. (2015). The epidemiology and associated phenomenology of formal thought disorder: a systematic review. Schizophr Bull 41:951-962 · PMID 25180313',
      'Zamperoni G et al. (2024). Evidence for the factor structure of formal thought disorder: a systematic review. Schizophr Res 264:424-434 · PMID 38244319',
      'Bora E et al. (2019). Neurocognitive and linguistic correlates of positive and negative formal thought disorder: a meta-analysis. Schizophr Res 209:2-11 · PMID 31153670',
      'Marggraf MP et al. (2020). The link between formal thought disorder and social functioning in schizophrenia: a meta-analysis. Eur Psychiatry 63:e34 · PMID 32200776',
      'Argote M et al. (2022). Association between formal thought disorder and cannabis use: a systematic review and meta-analysis. Schizophrenia (Heidelb) 8:78 · PMID 36175509',
      'Cavelti M et al. (2018). Is formal thought disorder in schizophrenia related to structural and functional aberrations in the language network? A systematic review of neuroimaging findings. Schizophr Res 199:2-16 · PMID 29510928',
      'Wensing T et al. (2017). Neural correlates of formal thought disorder: an activation likelihood estimation meta-analysis. Hum Brain Mapp 38:4946-4965 · PMID 28653797',
      'Gerson SN, Benson DF & Frazier SH (1977). Diagnosis: schizophrenia versus posterior aphasia. Am J Psychiatry 134:966-969 · PMID 900305',
      'Faber R et al. (1983). Comparison of schizophrenic patients with formal thought disorder and neurologically impaired patients with aphasia. Am J Psychiatry 140:1348-1351 · PMID 6194698',
      'Lane ZP et al. (2011). Differentiating psychosis versus fluent aphasia. Clin Schizophr Relat Psychoses 4:258-261 · PMID 21177243',
      'de Oliveira-Souza R (2023). Kraepelin\'s schizophasia: chaotic speech with preservation of comprehension and activities of daily living. Cortex 165:160-171 · PMID 37290345',
      'Piguet C et al. (2010). Phenomenology of racing and crowded thoughts in mood disorders: a theoretical reappraisal. J Affect Disord 121:189-198 · PMID 19515428',
      'Keizer I et al. (2014). Subjective experience of thought overactivation in mood disorders: beyond racing and crowded thoughts. Psychopathology 47:174-184 · PMID 24107841',
      'Szabadi E, Bradshaw CM & Besson JA (1976). Elongation of pause-time in speech: a simple, objective measure of motor retardation in depression. Br J Psychiatry 129:592-597 · PMID 1000144',
      'Bush G et al. (1996). Catatonia. I. Rating scale and standardized examination. Acta Psychiatr Scand 93:129-136 · PMID 8686483',
      'Walther S et al. (2019). Structure and neural mechanisms of catatonia. Lancet Psychiatry 6:610-619 · PMID 31196794',
      'Blackburn C et al. (2023). A systematic review of interventions for echolalia in autistic children. Int J Lang Commun Disord 58:1977-1993 · PMID 37462136',
      'Torres-Prioris MJ et al. (2019). Repetitive verbal behaviors are not always harmful signs: compensatory plasticity within the language network in aphasia. Brain Lang 190:16-30 · PMID 30665003',
      'Newberg AB et al. (2006). The measurement of regional cerebral blood flow during glossolalia: a preliminary SPECT study. Psychiatry Res 148:67-71 · PMID 17046214',
      'Hillis AE (2007). Aphasia: progress in the last quarter of a century. Neurology 69:200-213 · PMID 17620554',
      'Gorno-Tempini ML et al. (2011). Classification of primary progressive aphasia and its variants. Neurology 76:1006-1014 · PMID 21325651',
      'Mohr JP et al. (1978). Broca aphasia: pathologic and clinical. Neurology 28:311-324 · PMID 565019',
      'Binder JR (2017). Current controversies on Wernicke\'s area and its role in language. Curr Neurol Neurosci Rep 17:58 · PMID 28656532',
      'Buchsbaum BR et al. (2011). Conduction aphasia, sensory-motor integration, and phonological short-term memory - an aggregate analysis of lesion and fMRI data. Brain Lang 119:119-128 · PMID 21256582',
      'Boatman D et al. (2000). Transcortical sensory aphasia: revisited and revised. Brain 123:1634-1642 · PMID 10908193',
      'Freedman M, Alexander MP & Naeser MA (1984). Anatomic basis of transcortical motor aphasia. Neurology 34:409-417 · PMID 6538298',
      'Enderby P (2013). Disorders of communication: dysarthria. Handb Clin Neurol 110:273-281 · PMID 23312647',
      'Kores B & Lader MH (1997). Irreversible lithium neurotoxicity: an overview. Clin Neuropharmacol 20:283-299 · PMID 9260727',
      'AEMPS-CIMA (2024). Ficha técnica de Plenur 400 mg comprimidos de liberación modificada (carbonato de litio), n.º de registro 48932, apartados 4.8 y 4.9; revisión del texto: julio de 2024 (consultada en noviembre de 2026)',
      'Ross ED (1981). The aprosodias. Functional-anatomic organization of the affective components of language in the right hemisphere. Arch Neurol 38:561-569 · PMID 7271534',
      'Ross ED & Rush AJ (1981). Diagnosis and neuroanatomical correlates of depression in brain-damaged patients. Implications for a neurology of depression. Arch Gen Psychiatry 38:1344-1354 · PMID 7316678',
      'Arnts H et al. (2020). On the pathophysiology and treatment of akinetic mutism. Neurosci Biobehav Rev 112:270-278 · PMID 32044373',
      'Ackermann H & Ziegler W (1995). Akinetischer Mutismus - eine Literaturübersicht. Fortschr Neurol Psychiatr 63:59-67 · PMID 7705740',
      'Catsman-Berrevoets C & Patay Z (2018). Cerebellar mutism syndrome. Handb Clin Neurol 155:273-288 · PMID 29891065',
      'Schuster JP et al. (2011). Le mutisme hystérique. Encephale 37:339-344 · PMID 22032276',
      'Jaspers K (1913). Allgemeine Psychopathologie. Berlin: Springer [no verificada]',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5ª ed., texto revisado (DSM-5-TR). Washington, DC: APA Publishing. Mutismo selectivo [no verificada]'
    ],
    nodes: ['tb1', 'mxto', 'dmko', 'hebefr', 'wkl18', 'dementia_praecox', 'panss', 'neuropsico', 'cannabis_psic', 'tea', 'ecopraxia', 'negativismo', 'inhib', 'tea_catatonia', 'seglas_hit', 'leonhard_expresion', 'esqneg', 'kleist_afasias', 'bleuler_4a', 'alexia_agrafia', 'mutis_sel', 'mutismo_acin', 'conv', 'estupor', 'cerebelo_psiq', 'rumiacion_persev', 'intox_litio']
  },
  draw(Fig) {
    const W = 2300, X = 60, TW = W - 120, FS = 18;
    const F = new Fig({ key: 'mod_pensamiento_lenguaje', title: TITLE, w: W,
      desc: 'Tres tablas (curso y velocidad del pensamiento; forma y conexión; lenguaje y habla de causa neurológica o motora) con definición operativa, cuadros en que orienta cada alteración y con qué se confunde; seis recuadros de lectura por cuadros; recuadros de dimensiones, pronóstico, fiabilidad y correlatos; tabla que compara la afasia de Wernicke con la esquizoafasia; recuadro de límites.' });
    const N = (t, node) => ({ t, node });
    const row3 = (ids, y, arr, gap) => { gap = gap == null ? 30 : gap; const w = (TW - 2 * gap) / 3; const bs = arr.map((o, i) => F.box(ids[i], Object.assign({ x: X + i * (w + gap), y, w, fs: 19 }, o))); const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); F._grow(y + h); return { bs, bottom: y + h }; };

    // ---------- Bloque 0: cómo leer ----------
    let y = F.band(90, 'Cómo leer el mapa: tres preguntas, tres paneles') + 22;
    const r0 = row3(['q_a', 'q_b', 'q_c'], y, [
      { type: 'q', title: 'A · ¿Cuánto y a qué ritmo?', text: 'Curso y velocidad: aceleración, enlentecimiento, interrupción, repetición y empobrecimiento del pensamiento y del habla.' },
      { type: 'q', title: 'B · ¿Cómo se enlazan ideas y palabras?', text: 'Forma y conexión: rodeo, desvío, ruptura entre frases o dentro de la frase, lógica, abstracción y uso de las palabras.' },
      { type: 'q', title: 'C · ¿Falla el lenguaje o el habla como instrumento?', text: 'Afasia, disartria, aprosodia y mutismo: causa neurológica o motora que hay que separar de A y B.' }]);
    F.arrow(r0.bs[0], r0.bs[1], { from: 'r', to: 'l' });
    F.arrow(r0.bs[1], r0.bs[2], { from: 'r', to: 'l' });
    y = r0.bottom + 22;
    const k0 = F.box('clave', { x: X, y, w: TW, type: 'info', fs: 19, align: 'left', title: 'Describir antes que inferir',
      text: 'El «trastorno formal del pensamiento» se observa en el discurso: las definiciones de la escala TLC son empíricas y evitan inferir procesos de pensamiento subyacentes (Andreasen 1979a). Se recomienda no hablar de «trastorno del pensamiento» de forma global, como si fuera homogéneo, y anotar los subtipos concretos que presenta cada persona (Andreasen 1979b). La escala TALD, de 30 ítems, añade las vivencias subjetivas referidas por la persona (Kircher 2014). El trastorno formal del pensamiento aparece en la mayoría de los trastornos psiquiátricos y en algunas personas sanas (Kircher 2018). Abreviaturas de las tablas: «TLC» y «TALD» remiten al texto de los ítems de esas escalas (Andreasen 1979a, 1986; Kircher 2014), cotejado en su reproducción literal en Voppel 2026 (tabla suplementaria 1); «BFCRS», a las definiciones de la escala de catatonía de Bush-Francis (Bush 1996) recogidas en Walther 2019.' });
    y = k0.y + k0.h + 44;

    // ---------- Panel A ----------
    y = F.band(y, 'Curso y velocidad del pensamiento y del habla', { n: 'A' }) + 20;
    const colsAB = [{ w: 300, label: 'Alteración (ficha)' }, { w: 660, label: 'Definición operativa y fuente' }, { w: 640, label: 'En qué cuadros orienta' }, { w: 580, label: 'Con qué se confunde' }];
    const tA = F.table({ x: X, y, fs: FS, cols: colsAB, rows: [
      [N('Taquipsiquia y pensamiento acelerado', 'taquipsiquia'),
       'Vivencia de que numerosos pensamientos de contenido variado irrumpen y se alternan con rapidez, sin poder controlarlos ni suprimirlos (ítem subjetivo «presión o aluvión de pensamientos» de la TALD). Dos formas: pensamientos «acelerados» (producción excesiva, paso rápido de uno a otro, vividos con fluidez y agrado) y «agolpados» (demasiados a la vez, desagradables y difíciles de atrapar) (Piguet 2010).',
       'Acelerados: hipomanía. Agolpados: depresión, sobre todo estados depresivos mixtos (Piguet 2010). En un cuestionario de hiperactivación del pensamiento, la puntuación mediana más alta se dio en los estados mixtos (Keizer 2014).',
       'Con la presión del habla, que es conducta observable y no vivencia. Con la rumiación, que la TALD recoge aparte: ocupación constante con temas casi siempre desagradables, que giran sin llegar a una conclusión.'],
      [N('Presión del habla y logorrea', 'presion_habla'),
       'Aumento de la cantidad de habla espontánea: rápida, difícil de interrumpir, a veces con frases que quedan sin terminar por la urgencia de pasar a la idea siguiente (TLC). La TALD separa la presión (velocidad de producción aumentada) de la logorrea (necesidad excesiva de hablar, con un discurso que puede ser coherente y no acelerado).',
       'Manía: es el grupo con la puntuación más alta en la dimensión positiva objetiva de la TALD (Kircher 2014; Mutlu 2019). No es exclusiva: en fase aguda, con grupos igualados en gravedad global, ni la presión ni la logorrea diferían de forma significativa entre esquizofrenia y manía (16 y 16 personas; Kircher 2022).',
       'Con el descarrilamiento, la tangencialidad y la incoherencia, que pueden acompañarla pero son fenómenos distintos (TLC). Bajo fenotiazinas o litio la velocidad puede frenarse: entonces se juzga por la cantidad, el volumen y la adecuación social del habla (TLC).'],
      [N('Fuga de ideas', 'fuga_ideas'),
       'Cambio rápido y continuo de tema, guiado por asociaciones superficiales, por el sonido de las palabras o por estímulos del entorno (descripción clásica; Jaspers 1913 [no verificada]). En la TLC no es un ítem aparte: es el descarrilamiento que ocurre con rapidez en el contexto de la presión del habla; el cambio de tema ante un estímulo cercano se anota como «habla distraíble».',
       'Manía. Pero la pérdida de asociaciones es frecuente tanto en la manía como en la esquizofrenia y no es patognomónica de ninguna (Andreasen 1979b). En fase aguda, la gravedad del trastorno formal positivo no difiere entre esquizofrenia y trastorno bipolar (d = −0,07; Yalincetin 2017).',
       'Con el descarrilamiento de la esquizofrenia: en un corte transversal pueden ser indistinguibles; ayuda la evolución (a los 6 meses, la mayoría de los tipos de alteración remite en la manía y persiste en la esquizofrenia; Andreasen y Grove 1986).'],
      [N('Bradipsiquia y pensamiento inhibido', 'bradipsiquia'),
       'Pensamiento y habla enlentecidos. La TALD separa el pensamiento enlentecido que aprecia quien observa (conversación lánguida) del pensamiento inhibido que refiere la persona (frenado, como contra una resistencia interna). En la depresión se alargan las pausas del habla, no el tiempo de fonación (4 pacientes; Szabadi 1976).',
       'Depresión: el enlentecimiento psicomotor, con cambios en la velocidad y la modulación del habla, es un rasgo cardinal, sobre todo en la melancolía (Walther 2019). El pensamiento enlentecido se cuenta entre las alteraciones formales negativas (Kircher 2022). El delirium tiene una forma hipoactiva (Walther 2019).',
       'Con la pobreza del habla (se reduce la cantidad, no la velocidad; TLC), con la latencia de respuesta aumentada (ítem aparte de la SANS) y con el bloqueo (interrupción con pérdida del hilo; TLC).'],
      [N('Bloqueo del pensamiento', 'bloqueo'),
       'Interrupción del discurso antes de completar una idea; tras un silencio de segundos o minutos, la persona indica que no recuerda lo que decía. Solo se registra si la persona lo describe por sí misma o lo confirma al preguntarle (TLC).',
       'Clásicamente, esquizofrenia. Es tan infrecuente que tiene poco valor diagnóstico (Andreasen 1979b): de 98 personas evaluadas (49 pacientes y 49 controles), ninguna puntuó en bloqueo, asonancia ni ecolalia de la TLC (Voppel 2026).',
       'La TALD distingue la «ruptura del pensamiento» (interrupción brusca observada desde fuera) del «bloqueo» (vivido y referido por la persona), que incluye el desvanecimiento gradual de la idea.'],
      [N('Perseveración', 'perseverac'),
       'Repetición persistente de palabras, ideas o temas: una vez que la persona empieza con un tema o una palabra, vuelve a ellos una y otra vez (TLC). En la TALD: adhesión a ideas y temas ya mencionados que no encajan en el contexto actual.',
       'Esquizofrenia: en fase aguda, más intensa que en la manía en grupos emparejados por edad, sexo, cociente verbal y rendimiento neuropsicológico (Kircher 2022). Es también un ítem de la escala de catatonía (BFCRS).',
       'Con la rumiación (vivencia subjetiva; ítem aparte de la TALD), con el «pensamiento restringido» a unos pocos temas (TALD) y con la verbigeración (panel B).'],
      [N('Pobreza del habla (alogia)', 'pobreza_pens'),
       'Restricción de la cantidad de habla espontánea: respuestas breves, concretas y sin elaborar, a veces monosilábicas; hay que insistir para obtener información (TLC). La pobreza del habla, o alogia, constituye el trastorno formal «negativo» (Kuperberg 2010).',
       'Esquizofrenia: el trastorno formal negativo es más grave que en el trastorno bipolar (d = 0,80; Yalincetin 2017) y es el mejor predictor de la evolución (Andreasen y Grove 1986; Roche 2015).',
       'Con el mutismo (respuesta verbal nula o mínima; BFCRS) y con el enlentecimiento. La «pobreza del pensamiento» de la TALD es otra cosa: la vivencia de pensar de forma poco imaginativa y limitada a pocos temas.'],
      [N('Pobreza del contenido del habla', 'pobreza_pens'),
       'Habla de cantidad suficiente que transmite poca información: vaga, demasiado abstracta o demasiado concreta, repetitiva y estereotipada; una respuesta larga puede resumirse en una o dos frases (TLC).',
       'Esquizofrenia: en fase aguda, más intensa que en la manía en grupos emparejados (Kircher 2022). Se ha clasificado como negativa con la TLC, pero cae en el factor positivo objetivo de la TALD (Kircher 2022).',
       'Con la circunstancialidad (abundan los detalles, pero se llega a la meta; TLC) y con la pobreza del habla: aquí la cantidad es suficiente (TLC).']
    ] });
    y = tA.y + 50;

    // ---------- Panel B ----------
    y = F.band(y, 'Forma y conexión: cómo se enlazan las ideas y las palabras', { n: 'B' }) + 20;
    const tB = F.table({ x: X, y, fs: FS, cols: colsAB, rows: [
      [N('Circunstancialidad', 'tangenc'),
       'Discurso muy indirecto y demorado en llegar a la meta: se añaden detalles tediosos y paréntesis, y a menudo hay que interrumpir para completar la entrevista (TLC). En la TALD, lo accesorio no se separa de lo esencial, sin perder del todo la meta.',
       'Inespecífica: personas voluntarias sin trastorno presentan una cantidad modesta de alteraciones en la TLC (Andreasen y Grove 1986), y en fase aguda no difería entre esquizofrenia y manía emparejadas (Kircher 2022).',
       'Con la tangencialidad y la pérdida de meta (no se llega al objetivo; TLC) y con la pobreza del contenido (muchas palabras, poca información; TLC).'],
      [N('Tangencialidad', 'tangenc'),
       'Respuesta oblicua, tangencial o incluso irrelevante a una pregunta. La TLC la limita a las respuestas: el desvío en el habla espontánea se registra como descarrilamiento. En la TALD, en cambio, es la deriva lenta del contenido en pasajes largos, sin volver al tema inicial.',
       'Sin valor diagnóstico aislada: en fase aguda no difería entre esquizofrenia y manía emparejadas (Kircher 2022).',
       'Con la evasión deliberada y con los fallos de comprensión: el ítem «hablar al margen de la pregunta» (crosstalk) de la TALD exige comprobar que la persona ha entendido la pregunta, pidiéndole que la repita, y no puntúa el rodeo intencionado.'],
      [N('Descarrilamiento y pérdida de asociaciones', 'descarril'),
       'Las ideas se deslizan de un tema a otro relacionado solo de forma oblicua, o no relacionado; la ruptura se da entre frases o cláusulas, no dentro de ellas (TLC). La TLC lo equipara a la pérdida de asociaciones, el aflojamiento asociativo descrito por Bleuler (Kuperberg 2010; Walther 2019).',
       'Esquizofrenia y manía por igual: ya no puede considerarse patognomónico de la esquizofrenia (Andreasen 1979b). El trastorno formal positivo persistente en fase estable sí se asocia a la esquizofrenia frente al trastorno bipolar (d = 1,02; Yalincetin 2017).',
       'Con la fuga de ideas (panel A), con la tangencialidad (respuesta a una pregunta) y con la incoherencia (ruptura dentro de la frase), a la que a menudo acompaña (TLC).'],
      [N('Incoherencia y esquizoafasia', 'incoher'),
       'Discurso por momentos incomprensible porque la alteración está dentro de la frase o cláusula: palabras sustituidas que destruyen el sentido, conjunciones y artículos suprimidos («ensalada de palabras») (TLC). Esquizoafasia de Kraepelin: habla caótica con comprensión y conducta cotidiana conservadas, en psicosis crónica (de Oliveira-Souza 2023).',
       'Relativamente rara y, cuando aparece, grave (TLC). Puede sonar como una afasia de Wernicke o de jerga: solo se llama incoherencia si la historia y las pruebas excluyen una causa orgánica y la exploración formal de afasia es negativa (TLC).',
       'Con la afasia de Wernicke y la transcortical sensorial (de Oliveira-Souza 2023) y con el delirium, definido por alteraciones de la atención, la conciencia y la cognición, de instauración rápida y curso fluctuante (Walther 2019).'],
      [N('Pensamiento ilógico', 'ilogic'),
       'Se llega a conclusiones que no se siguen lógicamente: inferencias injustificadas (non sequitur), inducciones defectuosas o conclusiones a partir de premisas falsas sin que haya pensamiento delirante (TLC).',
       'Sin valor diagnóstico propio en las fuentes cotejadas. La PANSS lo incluye, con la circunstancialidad, la tangencialidad y las asociaciones laxas, en su ítem de desorganización conceptual (P2).',
       'Con el delirio, que es una alteración del contenido: el ítem exige que no haya pensamiento delirante (TLC).'],
      [N('Pensamiento concreto', 'pensconc'),
       'Dificultad para comprender frases abstractas o figuradas (refranes, metáforas, chistes): la persona se atiene al significado literal (ítem «concretismo» de la TALD). La PANSS lo explora con semejanzas y refranes (ítem N5).',
       'Esquizofrenia: varios estudios confirman la elección de interpretaciones concretas del lenguaje figurado (Kuperberg 2010).',
       'Con el efecto del cociente intelectual y del rendimiento cognitivo, que modulan el trastorno formal positivo: hay que igualarlos al comparar grupos (Kircher 2022).'],
      [N('Neologismos y paralogismos', 'neolog'),
       'Neologismo: palabra o expresión completamente nueva cuya derivación no se entiende. Aproximación de palabras: palabras existentes usadas de forma nueva y no convencional, o palabras nuevas formadas con las reglas habituales («patín de papel» por bolígrafo) (TLC).',
       'Clásicamente, esquizofrenia. Los neologismos son tan infrecuentes que tienen poco valor diagnóstico (Andreasen 1979b); las alteraciones de frase y de discurso son más frecuentes que las de palabra aislada (Kuperberg 2010).',
       'Con las parafasias fonémica y semántica, que la TLC recoge aparte: las formas graves son propias de la afasia y, si hay duda con la incoherencia, se recomienda una exploración formal de afasia. La TALD excluye la jerga de grupos o subculturas y el dominio insuficiente de la lengua.'],
      [N('Asociaciones por asonancia y glosolalia', 'glosolalia'),
       'Asonancia: el sonido, y no el significado, guía la elección de las palabras (rimas, juegos de palabras), lo que resta inteligibilidad (TLC). Glosolalia: la persona parece hablar en una lengua incomprensible (Newberg 2006).',
       'Asonancia: infrecuente (ninguna puntuación entre 98 personas evaluadas; Voppel 2026). Glosolalia: se vive como conducta normal y esperada en grupos religiosos de oración, con gran significado personal y religioso (Newberg 2006).',
       'Con la parafasia fonémica y el lapsus cotidiano, en los que la persona suele advertir el error e intenta corregirlo (TLC).'],
      [N('Ecolalia y palilalia', 'ecolalia'),
       'Ecolalia: repetición en eco de las palabras o frases de quien entrevista, a menudo persistente; poco frecuente en personas adultas y más en la infancia (TLC). En la catatonía: imitación del habla de otra persona (BFCRS).',
       'Catatonía: figura en la escala de Bush-Francis y entre los criterios DSM-5 (Walther 2019). Autismo: frecuente, y para muchas personas funcional y con significado (Blackburn 2023). Afasia fluente crónica: ecolalia mitigada, interpretada como plasticidad compensatoria (3 casos; Torres-Prioris 2019).',
       'Con la perseveración (se repite lo propio, no lo ajeno; TLC). En la afasia transcortical sensorial la repetición está intacta y la comprensión auditiva, alterada (Boatman 2000).'],
      [N('Verbigeración', 'verbig'),
       'Repetición continua y sin dirección de palabras, frases u oraciones (BFCRS). La TALD la define de forma más estrecha: repetición innecesaria de una sola palabra.',
       'Catatonía: se considera uno de sus rasgos más característicos, junto a la flexibilidad cérea (Walther 2019).',
       'Con la perseveración, ítem aparte de la misma escala: repetición total o parcial, no dirigida a un fin, de actos o de contenido verbal (BFCRS). Ejemplo de que las escalas usan un mismo término para conceptos distintos (Voppel 2026).'],
      [N('Estereotipias verbales y habla amanerada', 'estereotip'),
       'Habla afectada o amanerada: excesivamente formal, pomposa, distante o anticuada (ítem «stilted speech» de la TLC; «habla amanerada» de la TALD). Estereotipia, en la catatonía: movimientos repetitivos, anormalmente frecuentes y sin finalidad; la repetición verbal se anota como verbigeración o perseveración (BFCRS).',
       'Catatonía: la estereotipia y el manierismo figuran entre los 12 criterios DSM-5 (Walther 2019). El habla amanerada se incluye en el trastorno formal positivo y no difería entre esquizofrenia y manía emparejadas (Kircher 2022).',
       'El manierismo catatónico es una caricatura extraña de actos normales (BFCRS), no un estilo de habla. Las estereotipias verbales forman parte, con el mutismo prolongado y el agramatismo, del síndrome clásico de la afasia de Broca (Mohr 1978).']
    ] });
    y = tB.y + 50;

    // ---------- Panel C ----------
    y = F.band(y, 'Lenguaje y habla de causa neurológica o motora: lo que hay que separar de A y B', { n: 'C' }) + 22;
    const r1 = row3(['c_warn', 'c_act', 'c_info'], y, [
      { type: 'warn', node: 'delirium', title: 'Señales de causa neurológica o médica', text: 'Parafasias fonémicas y semánticas: sus formas graves son propias de la afasia y, ante la duda entre parafasia e incoherencia, la TLC recomienda una exploración formal de afasia. Alteración de la atención y de la conciencia de instauración rápida y curso fluctuante: delirium (Walther 2019). En una persona sin historia fiable hay que considerar a la vez psicosis y afasia: confundirlas puede retrasar el tratamiento de un ictus (Lane 2011).' },
      { type: 'act', node: 'neuropsico', title: 'Exploración mínima del lenguaje', text: 'Órdenes verbales, escritas y gestuales; repetición de palabras y frases de longitud variable; lectura en voz alta y comentario de lo leído: la comprensión y la repetición conservadas separaron la esquizoafasia de las afasias sensoriales (de Oliveira-Souza 2023). La prosodia afectiva se explora del mismo modo: espontánea, repetida y comprendida, además del gesto emocional (Ross 1981).' },
      { type: 'info', title: 'Dónde está la lesión: otra figura', text: 'La localización lesional de las afasias, la aprosodia y la disartria no se repite aquí: ver la figura «Mapa lesional de los síndromes neuropsicológicos». La afasiología actual pasa de describir tareas alteradas a identificar procesos cognitivos y redes (Hillis 2007).' }]);
    F.arrow(r1.bs[0], r1.bs[1], { from: 'r', to: 'l' });
    F.arrow(r1.bs[1], r1.bs[2], { from: 'r', to: 'l', dash: true });
    y = r1.bottom + 26;
    const tC = F.table({ x: X, y, fs: FS, cols: [{ w: 300, label: 'Alteración (ficha)' }, { w: 620, label: 'Rasgo operativo' }, { w: 580, label: 'Causas y cuadros' }, { w: 680, label: 'Clave frente al trastorno formal del pensamiento' }], rows: [
      [N('Afasia no fluente (Broca)', 'afasia_bro'),
       'Síndrome clásico: mutismo prolongado, estereotipias verbales y agramatismo (Mohr 1978). La variante no fluente o agramatical de la afasia progresiva primaria se define también por rasgos del habla y del lenguaje (Gorno-Tempini 2011).',
       'Infarto amplio (opérculo, ínsula y cerebro adyacente) en el territorio de la división superior de la arteria cerebral media izquierda; el infarto limitado al área de Broca da un mutismo transitorio, sin trastorno persistente del lenguaje (20 casos; Mohr 1978).',
       'Frente a la pobreza del habla y el mutismo: en la afasia hay errores de lenguaje (agramatismo; parafasias semánticas, típicas de las afasias de Broca y de Wernicke según la TLC). La escala de catatonía excluye el mutismo si hay una afasia conocida (BFCRS).'],
      [N('Afasia fluente (Wernicke)', 'afasia_wer'),
       'Habla fluente con comprensión y repetición alteradas: es lo que la separa de la esquizoafasia (de Oliveira-Souza 2023). El daño focal del giro temporal superior posterior izquierdo produce parafasias fonémicas sin alterar la comprensión de palabras, que depende de una red más amplia (Binder 2017).',
       'Lesión del hemisferio izquierdo, con frecuencia un ictus. Su discurso puede parecerse al de la esquizofrenia y otras psicosis (Lane 2011).',
       'Frente a la incoherencia y la esquizoafasia: ver la tabla del bloque E. La incoherencia puede sonar como una afasia de Wernicke o de jerga (TLC).'],
      [N('Afasia de conducción', 'afasia_cond'),
       'Habla fluente y gramatical con errores frecuentes, repetición literal alterada, déficit de memoria fonológica a corto plazo y dificultad para denominar (Buchsbaum 2011).',
       'Lesiones temporoparietales izquierdas: máximo solapamiento en el área Spt, en la parte posterior del planum temporale (14 pacientes; Buchsbaum 2011).',
       'La «conducta de aproximación» y la ecolalia mitigada son conductas verbales repetitivas de la afasia fluente crónica que se interpretan como plasticidad compensatoria, no siempre como signos nocivos (3 casos; Torres-Prioris 2019).'],
      [N('Afasias transcorticales', 'afasia_tc'),
       'Sensorial: comprensión auditiva alterada con repetición intacta y habla fluente (Boatman 2000). Motora: la lesión esencial desconecta el área motora suplementaria de la zona perisilviana frontal del habla (Freedman 1984).',
       'Sensorial: inducida de forma transitoria por estimulación cortical temporal posterior izquierda (6 pacientes; Boatman 2000). Motora: también tras infarto frontal medial izquierdo o en la recuperación de una afasia de Broca (Freedman 1984).',
       'Repetir bien no garantiza comprender: se exploran por separado. La transcortical sensorial es uno de los diferenciales de la esquizoafasia (de Oliveira-Souza 2023).'],
      [N('Disartria', 'disartria'),
       'Trastorno motor del habla: se alteran la respiración, la función laríngea y la articulación, con merma de la calidad y la inteligibilidad del habla. Seis tipos principales: flácida, espástica, atáxica, hipercinética, hipocinética y mixta (Enderby 2013).',
       'Motoneurona inferior o superior, cerebelo o sistema extrapiramidal (Enderby 2013). Litio: la disartria figura entre las reacciones adversas (ficha técnica de Plenur, 4.8); las secuelas neurológicas irreversibles de la intoxicación son sobre todo cerebelosas, en especial ataxia y disartria (Kores y Lader 1997).',
       'Es un trastorno del habla, no del lenguaje ni del pensamiento. Los síntomas iniciales de la intoxicación por litio son diarrea, vómitos, cansancio, debilidad muscular, falta de coordinación y disartria, y pueden aparecer con litemias inferiores a 2 mEq/L (ficha técnica de Plenur, 4.9).'],
      [N('Aprosodia', 'aprosodia'),
       'Trastorno de los componentes afectivos del lenguaje (prosodia y gesto emocional). Tras lesiones del hemisferio derecho, las aprosodias pueden clasificarse igual que las afasias: motora, global, transcortical sensorial, etc. (Ross 1981).',
       'Lesiones focales del hemisferio derecho (10 pacientes diestros; Ross 1981).',
       'Frente al aplanamiento afectivo y la depresión: la lesión cerebral puede borrar los rasgos visibles de una depresión o imitarlos, y la persona puede incluso negar el ánimo depresivo (Ross y Rush 1981).'],
      [N('Mutismo', 'mutismo'),
       'Respuesta verbal nula o mínima (BFCRS). No es un diagnóstico: es un signo con causas psiquiátricas, neurológicas y funcionales. Mutismo acinético: conciencia y capacidad sensitivomotora intactas con pérdida de la conducta dirigida a metas (Arnts 2020).',
       'Catatonía (BFCRS y criterios DSM-5; Walther 2019). Mutismo selectivo (DSM-5-TR [no verificada]). Lesiones frontales bilaterales (Ackermann 1995). Cirugía de la fosa posterior en la infancia (Catsman-Berrevoets 2018). Mutismo o afonía funcional, en su mayoría reversible en tres meses (Schuster 2011).',
       'En la catatonía, el mutismo puede acentuarse en presencia de quien explora y atenuarse cuando se marcha (Walther 2019). El infarto limitado al área de Broca comienza con mutismo (Mohr 1978). Sin habla no puede evaluarse la forma del pensamiento.']
    ] });
    y = tC.y + 50;

    // ---------- Bloque D: lectura por cuadros ----------
    y = F.band(y, 'Lectura por cuadros: qué patrón orienta (ninguno es patognomónico)', { n: 'D' }) + 22;
    const r2 = row3(['d_mania', 'd_esq', 'd_dep'], y, [
      { type: 'dx', node: 'ep_mania', title: 'Manía', text: 'Predominio del trastorno formal positivo (Andreasen y Grove 1986). Puntuación más alta en la dimensión positiva objetiva de la TALD (Kircher 2014; Mutlu 2019). A los 6 meses la mayoría de los tipos de alteración ha remitido (Andreasen y Grove 1986).' },
      { type: 'dx', node: 'esq', title: 'Esquizofrenia', text: 'En fase aguda, trastorno positivo de gravedad similar al de la manía; más trastorno negativo (d = 0,80) y trastorno positivo persistente en fase estable (d = 1,02) (Yalincetin 2017). Más perseveración y pobreza de contenido que en la manía (Kircher 2022). Tiende a persistir (Andreasen y Grove 1986).' },
      { type: 'dx', node: 'ddm', title: 'Depresión', text: 'También presenta trastorno formal, con un patrón propio en la TALD, en la que cuentan las vivencias subjetivas (Kircher 2014). Pausas alargadas en el habla (Szabadi 1976); pensamientos agolpados en los estados depresivos mixtos (Piguet 2010).' }]);
    y = r2.bottom + 24;
    const r3 = row3(['d_dem', 'd_cat', 'd_del'], y, [
      { type: 'dx', node: 'dem', title: 'Demencia y afasia progresiva primaria', text: 'La afasia progresiva primaria se diagnostica primero como tal y después se clasifica en tres variantes definidas por rasgos del habla y del lenguaje: no fluente o agramatical, semántica y logopénica; la clasificación puede apoyarse en la neuroimagen (Gorno-Tempini 2011).' },
      { type: 'dx', node: 'catatonia', title: 'Catatonía', text: 'Mutismo, ecolalia, verbigeración y perseveración son ítems de la escala de Bush-Francis (Walther 2019). Cumplía criterios el 7 % (15 de 215) de los ingresos psiquiátricos consecutivos (Bush 1996). Frecuente en los trastornos del estado de ánimo y solapada con el delirium y con enfermedades médicas (Walther 2019).' },
      { type: 'warn', node: 'afasia_wer', title: 'Afasia y delirium: descartar primero', text: 'Discurso desorganizado en una persona sin historia fiable: explorar la comprensión oral y escrita y la repetición antes de atribuirlo a una psicosis (Lane 2011; de Oliveira-Souza 2023). El delirium se define por alteraciones de la atención, la conciencia y la cognición, de instauración rápida y curso fluctuante (Walther 2019).' }]);
    y = r3.bottom + 50;

    // ---------- Bloque E: datos ----------
    y = F.band(y, 'Lo que dicen los datos: dimensiones, pronóstico, fiabilidad, correlatos y afasia frente a esquizoafasia', { n: 'E' }) + 22;
    const HW = (TW - 30) / 2;
    const pair = (ida, a, idb, b, y0) => { const A = F.box(ida, Object.assign({ x: X, y: y0, w: HW, fs: 19, align: 'left' }, a)); const B = F.box(idb, Object.assign({ x: X + HW + 30, y: y0, w: HW, fs: 19, align: 'left' }, b)); const h = Math.max(A.h, B.h); A.h = B.h = h; F._grow(y0 + h); return y0 + h; };
    y = pair('e_dim', { type: 'info', node: 'panss', title: 'Dimensiones positiva y negativa',
      text: 'Positiva (descarrilamiento y pérdida de asociaciones, aumento de la cantidad de habla, neologismos, habla amanerada) y negativa (pobreza del habla, pensamiento enlentecido, bloqueo) (Kircher 2022). Definir subtipos y separar lo positivo de lo negativo permite a menudo distinguir manía y esquizofrenia (Andreasen 1979b). La TALD obtiene cuatro factores: objetivo y subjetivo, positivo y negativo (Kircher 2014). Revisión sistemática de 16 estudios y 39 análisis factoriales: predomina una estructura de tres factores, con acuerdo en dos (desorganización y negativo) y un tercero por aclarar (Zamperoni 2024). Metaanálisis de 19 estudios (715 personas con esquizofrenia y 474 con trastorno bipolar): el trastorno positivo es compartido; el negativo y el positivo persistente distinguen subgrupos (Yalincetin 2017).' },
      'e_pron', { type: 'info', title: 'Frecuencia, gravedad y pronóstico',
      text: 'Revisión sistemática de 120 artículos: la prevalencia en las psicosis oscila entre el 5 % y el 91 %; se asocia a mayor gravedad clínica, y el trastorno negativo predice peor evolución que el «discurso desorganizado» (Roche 2015). Asociación inversa, pequeña a moderada, con el funcionamiento social en la esquizofrenia (r = −0,23; 13 estudios, 1478 participantes; Marggraf 2020). Mayor gravedad en personas que consumen cannabis a lo largo del continuo de la psicosis (diferencia de medias estandarizada 0,21; 19 estudios; Argote 2022).' }, y) + 24;
    y = pair('e_fiab', { type: 'act', title: 'Fiabilidad: cómo evaluar',
      text: 'Con definiciones operativas la fiabilidad es buena para la mayoría de los términos (Andreasen 1979a); correlación intraclase buena por ítem y excelente por subescala en el Thought and Language Index (Liddle 2002); en la versión coreana de la TLC, 0,51 entre evaluadores y 0,94 test-retest (Park 2015). Límites: las escalas usan el mismo término para conceptos distintos y términos distintos para el mismo concepto (Voppel 2026), y distinguir a ciegas esquizofrenia de afasia sobre transcripciones resultó poco fiable (Faber 1983). En la práctica: nombrar el subtipo concreto y no un «trastorno del pensamiento» global (Andreasen 1979b).' },
      'e_corr', { type: 'info', title: 'Correlatos cognitivos y cerebrales',
      text: 'Metaanálisis de 52 trabajos (2805 pacientes): la neurocognición se asocia al trastorno positivo (r = −0,21) y al negativo (r = −0,24); el déficit de fluidez verbal pesa más en el negativo y el de inhibición y el sintáctico, en el positivo (Bora 2019). Revisión sistemática de 61 estudios de neuroimagen: déficit de sustancia gris, mayor en el lado izquierdo, en el giro frontal inferior, el giro temporal superior y el lóbulo parietal inferior, con resultados no siempre concordantes (Cavelti 2018). Metaanálisis de 18 estudios funcionales: giro temporal superior y giro temporal medio posterior izquierdos (Wensing 2017). En el trastorno positivo agudo los antipsicóticos son eficaces; no hay psicoterapia específica desarrollada (Kircher 2018).' }, y) + 30;
    y = F.text(X, y + 20, 'Afasia de Wernicke frente a esquizoafasia: lo que sostienen las fuentes cotejadas', { fs: 21, bold: true, w: TW }) + 8;
    const tE = F.table({ x: X, y, fs: FS, cols: [{ w: 400, label: 'Rasgo' }, { w: 560, label: 'Afasia fluente (Wernicke)' }, { w: 560, label: 'Esquizoafasia o incoherencia' }, { w: 660, label: 'Fuente y alcance' }], rows: [
      ['Por qué se confunden', 'Discurso vago, con asociaciones laxas y aparente confusión.', 'El mismo aspecto superficial del discurso.', 'Gerson 1977 (8 personas con afasia posterior y 10 con esquizofrenia y asociaciones laxas): describe seis rasgos diferenciales del discurso, que el resumen indexado no enumera.'],
      ['Comprensión y repetición', 'Alteradas.', 'Conservadas: sigue órdenes verbales, escritas y gestuales y repite palabras y frases.', 'de Oliveira-Souza 2023 (caso y revisión del diferencial con las afasias sensoriales).'],
      ['Conducta no verbal y vida diaria', 'Sin datos en las fuentes cotejadas.', 'Organizadas pese al habla caótica: disociación entre habla y conducta descrita por Kraepelin.', 'de Oliveira-Souza 2023.'],
      ['Contexto clínico', 'Lesión hemisférica izquierda, con frecuencia un ictus; puede faltar una historia fiable.', 'Estado alucinatorio-delirante crónico.', 'Lane 2011; de Oliveira-Souza 2023.'],
      ['Exploración formal de afasia', 'Positiva: las sustituciones de palabras se consideran parafasias semánticas.', 'Negativa, y sin causa orgánica en la historia ni en las pruebas: las sustituciones se atribuyen a la incoherencia.', 'TLC (ítems de incoherencia y de parafasia semántica; texto en Voppel 2026).'],
      ['Alteraciones lingüísticas', 'Síndrome afásico clásico.', 'Muchas alteraciones compartidas con la afasia, sin síndrome afásico clásico: solo 5 de 14 diferenciaban los grupos.', 'Faber 1983 (14 y 13 pacientes): de cinco especialistas, tres acertaron por encima del azar y solo uno discriminó bien.']
    ] });
    y = tE.y + 40;
    F.box('lim', { x: X, y, w: TW, type: 'lim', fs: 19, align: 'left', title: 'Límites de la figura',
      text: 'Esquema docente: no es un algoritmo diagnóstico ni sustituye a la exploración, a la neuroimagen cuando está indicada ni al juicio clínico. Ninguna alteración formal es patognomónica de un diagnóstico, y la frontera entre «pensamiento», «lenguaje» y «habla» es convencional: lo que se observa es siempre discurso. Las definiciones de la TLC, la TALD, la SANS y la PANSS se han cotejado en la reproducción literal de los ítems de Voppel 2026 (tabla suplementaria 1), que omite los ejemplos entre paréntesis, y las de la escala de Bush-Francis en Walther 2019; no se ha accedido al texto completo de Andreasen 1979a y 1986, Kircher 2014 ni Bush 1996. Las escalas no coinciden entre sí en el significado de varios términos (Voppel 2026). El cociente intelectual y el rendimiento cognitivo modulan el trastorno formal (Kircher 2022). Casi todos los datos proceden de muestras con esquizofrenia; en otros diagnósticos los estudios son escasos (Kircher 2018).' });
    F.footer('Fuentes principales: Andreasen 1979a, 1979b, 1986 (TLC); Andreasen y Grove 1986; Kircher 2014 (TALD), 2018, 2022; Voppel 2026; Yalincetin 2017; Roche 2015; Zamperoni 2024; Bora 2019; Cavelti 2018; Wensing 2017; Gerson 1977; Faber 1983; de Oliveira-Souza 2023; Bush 1996; Walther 2019; Gorno-Tempini 2011; Ross 1981; ficha técnica de Plenur (AEMPS-CIMA). Clásico no cotejado: Jaspers 1913. Referencias completas en la ficha de la figura. Esquema docente; no sustituye al juicio clínico.');
    return F;
  }
};
