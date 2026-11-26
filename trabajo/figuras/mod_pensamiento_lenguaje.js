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
    cap: 'Mapa semiológico en tres paneles. A) Curso y velocidad: cuánto y a qué ritmo se piensa y se habla. B) Forma y conexión: cómo se enlazan las ideas y las palabras. C) Lenguaje y habla de causa neurológica o motora, para el diferencial. De cada alteración se da una definición operativa con su fuente, los cuadros en que orienta y aquello con lo que se confunde. Siguen una lectura por cuadros (manía, esquizofrenia, depresión, demencia, catatonía y delirium) y una banda de datos: dimensiones positiva y negativa, frecuencia y pronóstico, fiabilidad, correlatos y diferencial entre la afasia de Wernicke y la esquizoafasia. Ninguna alteración es patognomónica de un diagnóstico. El signo † indica que la definición procede del glosario o de los ítems de la escala citada y que aquí solo se ha cotejado su resumen indexado; «[no verificada]» señala fuentes clásicas o manuales no cotejados y «[fuente no localizada]», afirmaciones de uso clínico habitual sin fuente primaria localizada. La localización lesional se trata en la figura «Mapa lesional de los síndromes neuropsicológicos». Esquema docente: no sustituye a la exploración ni al juicio clínico.',
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
      'Voppel A et al. (2025). Analysis of conceptual overlap among formal thought disorder rating scales in psychosis: a systematic semantic synthesis. Schizophrenia (Heidelb) 12:9 · PMID 41398324',
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
      'Goldfarb R et al. (1994). Communicative responsibility and semantic task in aphasia and "schizophasia". Percept Mot Skills 79:1027-1039 · PMID 7532852',
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
      'Darley FL, Aronson AE & Brown JR (1969). Differential diagnostic patterns of dysarthria. J Speech Hear Res 12:246-269 · PMID 5808852',
      'Kores B & Lader MH (1997). Irreversible lithium neurotoxicity: an overview. Clin Neuropharmacol 20:283-299 · PMID 9260727',
      'Ross ED (1981). The aprosodias. Functional-anatomic organization of the affective components of language in the right hemisphere. Arch Neurol 38:561-569 · PMID 7271534',
      'Ross ED & Rush AJ (1981). Diagnosis and neuroanatomical correlates of depression in brain-damaged patients. Implications for a neurology of depression. Arch Gen Psychiatry 38:1344-1354 · PMID 7316678',
      'Arnts H et al. (2020). On the pathophysiology and treatment of akinetic mutism. Neurosci Biobehav Rev 112:270-278 · PMID 32044373',
      'Ackermann H & Ziegler W (1995). Akinetischer Mutismus: eine Literaturübersicht. Fortschr Neurol Psychiatr 63:59-67 · PMID 7705740',
      'Catsman-Berrevoets C & Patay Z (2018). Cerebellar mutism syndrome. Handb Clin Neurol 155:273-288 · PMID 29891065',
      'Schuster JP et al. (2011). Le mutisme hystérique. Encephale 37:339-344 · PMID 22032276',
      'Kirkpatrick B et al. (2006). The NIMH-MATRICS consensus statement on negative symptoms. Schizophr Bull 32:214-219 · PMID 16481659 (sin resumen indexado; contenido [no verificada])',
      'Bleuler E (1911). Dementia praecox oder Gruppe der Schizophrenien. Leipzig: Deuticke [no verificada]',
      'Jaspers K (1913). Allgemeine Psychopathologie. Berlin: Springer [no verificada]',
      'Schneider K (1950). Klinische Psychopathologie. Stuttgart: Thieme [no verificada]',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, 5ª ed., texto revisado (DSM-5-TR). Washington, DC: APA Publishing. Criterios de catatonía, delirium y mutismo selectivo [no verificada]'
    ],
    nodes: ['tb1', 'mxto', 'dmko', 'hebefr', 'wkl18', 'dementia_praecox', 'panss', 'neuropsico', 'cannabis_psic', 'tea', 'tourette', 'ecopraxia', 'negativismo', 'inhib', 'apatia', 'tea_catatonia', 'obses', 'pens_magico', 'seglas_hit', 'leonhard_expresion', 'esqneg', 'kleist_afasias', 'bleuler_4a', 'alexia_agrafia', 'mutis_sel', 'mutismo_acin', 'conv', 'estupor', 'cerebelo_psiq', 'tics', 'ganser', 'rumiacion_persev', 'intox_litio']
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
      text: 'El «trastorno formal del pensamiento» se observa en el discurso: las definiciones de la escala TLC son empíricas y evitan inferir procesos de pensamiento subyacentes (Andreasen 1979a). Se recomienda no hablar de «trastorno del pensamiento» de forma global, como si fuera homogéneo, y anotar los subtipos concretos que presenta cada persona (Andreasen 1979b). La escala TALD, de 30 ítems, añade las vivencias subjetivas referidas por la persona (Kircher 2014). El trastorno formal del pensamiento aparece en la mayoría de los trastornos psiquiátricos y en algunas personas sanas (Kircher 2018). † = definición tomada del glosario o de los ítems de la escala citada, de la que aquí solo se ha cotejado el resumen indexado.' });
    y = k0.y + k0.h + 44;

    // ---------- Panel A ----------
    y = F.band(y, 'Curso y velocidad del pensamiento y del habla', { n: 'A' }) + 20;
    const colsAB = [{ w: 300, label: 'Alteración (ficha)' }, { w: 660, label: 'Definición operativa y fuente' }, { w: 640, label: 'En qué cuadros orienta' }, { w: 580, label: 'Con qué se confunde' }];
    const tA = F.table({ x: X, y, fs: FS, cols: colsAB, rows: [
      [N('Taquipsiquia y pensamiento acelerado', 'taquipsiquia'),
       'Vivencia subjetiva de que los pensamientos van demasiado deprisa o son demasiados. La TALD la recoge entre sus fenómenos subjetivos (Kircher 2014†). Dos formas: pensamientos «acelerados» (producción excesiva, paso rápido de uno a otro, vividos con fluidez y agrado) y pensamientos «agolpados» (demasiados a la vez, desagradables y difíciles de atrapar) (Piguet 2010).',
       'Acelerados: hipomanía y manía. Agolpados: depresión, sobre todo estados depresivos mixtos (Piguet 2010). En un cuestionario de hiperactivación del pensamiento, la puntuación mediana más alta se dio en los estados mixtos (Keizer 2014).',
       'Con la presión del habla (su correlato observable, que puede faltar). Con la rumiación, la preocupación ansiosa y las obsesiones, en las que cuenta el contenido repetido y no la velocidad [fuente no localizada].'],
      [N('Presión del habla y logorrea', 'presion_habla'),
       'Aumento de la cantidad de habla espontánea: rápida, difícil de interrumpir, a veces con frases que quedan sin terminar por la urgencia de pasar a la idea siguiente (TLC; Andreasen 1979a†).',
       'Manía: es el grupo con la puntuación más alta en la dimensión positiva objetiva de la TALD (Kircher 2014; Mutlu 2019). No es exclusiva: también en esquizofrenia y otros cuadros [fuente no localizada].',
       'Con la logorrea de la afasia de Wernicke (habla fluente con parafasias y comprensión alterada; ver panel C). Con la locuacidad por ansiedad, por estimulantes o por desinhibición frontal [fuente no localizada].'],
      [N('Fuga de ideas', 'fuga_ideas'),
       'Cambio rápido y continuo de tema, guiado por asociaciones superficiales, por el sonido de las palabras o por estímulos del entorno (descripción clásica; Jaspers 1913 [no verificada]). En la TLC no es un ítem aparte: se describe como descarrilamiento en el contexto de presión del habla, junto al habla distraíble (Andreasen 1979a†).',
       'Manía. Pero la pérdida de asociaciones es frecuente tanto en la manía como en la esquizofrenia y no es patognomónica de ninguna (Andreasen 1979b). En fase aguda, la gravedad del trastorno formal positivo no difiere entre esquizofrenia y trastorno bipolar (d = −0,07; Yalincetin 2017).',
       'Con el descarrilamiento de la esquizofrenia: en un corte transversal pueden ser indistinguibles; ayudan el estado de ánimo, la velocidad y la evolución (a los 6 meses remite en la mayoría de las personas con manía y persiste en la esquizofrenia; Andreasen y Grove 1986).'],
      [N('Bradipsiquia y pensamiento inhibido', 'bradipsiquia'),
       'Pensamiento y habla enlentecidos, con latencia de respuesta aumentada. La TALD separa el enlentecimiento observado de la vivencia subjetiva de pensamiento inhibido (Kircher 2014†). En la depresión se alargan las pausas del habla, no el tiempo de fonación (4 pacientes; Szabadi 1976).',
       'Depresión con inhibición. También delirium hipoactivo, demencias, parkinsonismo, hipotiroidismo y efecto sedante de fármacos [fuente no localizada].',
       'Con la pobreza del habla (poca cantidad, no lentitud), con el bloqueo (interrupción brusca), con el mutismo y con la afasia no fluente (esfuerzo y agramatismo) [fuente no localizada].'],
      [N('Bloqueo del pensamiento', 'bloqueo'),
       'Interrupción del discurso antes de completar una idea; tras un silencio, la persona dice que ha perdido el hilo. Solo se registra si la persona lo refiere o lo confirma al preguntarle (TLC; Andreasen 1979a†). Sperrung de Bleuler (1911 [no verificada]).',
       'Clásicamente, esquizofrenia. Es tan infrecuente que tiene poco valor diagnóstico (Andreasen 1979b).',
       'Con el robo del pensamiento (vivencia de que alguien lo retira; síntoma de primer rango de Schneider 1950 [no verificada]). Con crisis de ausencia, distracción, ansiedad, fatiga o latencia depresiva [fuente no localizada].'],
      [N('Perseveración', 'perseverac'),
       'Repetición persistente de palabras, ideas o temas: una vez que la persona empieza con un tema o una palabra, vuelve a ellos una y otra vez (TLC; Andreasen 1979a†).',
       'Esquizofrenia: en fase aguda, más intensa que en la manía en grupos emparejados por edad, sexo, cociente verbal y rendimiento neuropsicológico (Kircher 2022). Lesiones frontales, demencias y afasias [fuente no localizada].',
       'Con la rumiación y la obsesión (repetición vivida como propia, con contenido afectivo). Con la verbigeración, la palilalia y la estereotipia verbal (panel B).'],
      [N('Pobreza del habla (alogia)', 'pobreza_pens'),
       'Restricción de la cantidad de habla espontánea: respuestas breves, concretas y sin elaborar; hay que insistir para obtener información (TLC; Andreasen 1979a†). La alogia es uno de los dominios de los síntomas negativos (Kirkpatrick 2006 [no verificada]).',
       'Esquizofrenia: el trastorno formal negativo es más grave que en el trastorno bipolar (d = 0,80; Yalincetin 2017) y es el mejor predictor de la evolución (Andreasen y Grove 1986; Roche 2015).',
       'Con la inhibición depresiva, el parkinsonismo y la sedación por fármacos (síntomas negativos secundarios), el mutismo, la afasia no fluente y la reticencia o la desconfianza [fuente no localizada].'],
      [N('Pobreza del contenido del habla', 'pobreza_pens'),
       'Habla de cantidad suficiente que transmite poca información: vaga, demasiado abstracta o demasiado concreta, repetitiva o estereotipada (TLC; Andreasen 1979a†).',
       'Esquizofrenia: en fase aguda, más intensa que en la manía en grupos emparejados (Kircher 2022).',
       'Con la circunstancialidad (abundan los detalles, pero se llega a la meta). Con el habla «vacía» de la afasia anómica y de la variante semántica de la afasia progresiva primaria (Gorno-Tempini 2011).']
    ] });
    y = tA.y + 50;

    // ---------- Panel B ----------
    y = F.band(y, 'Forma y conexión: cómo se enlazan las ideas y las palabras', { n: 'B' }) + 20;
    const tB = F.table({ x: X, y, fs: FS, cols: colsAB, rows: [
      [N('Circunstancialidad', 'tangenc'),
       'Discurso indirecto y demorado: se añaden detalles y paréntesis superfluos, pero se acaba llegando a la meta (TLC; Andreasen 1979a†).',
       'Inespecífica. Personas voluntarias sin trastorno presentan una cantidad modesta de alteraciones en la TLC (Andreasen y Grove 1986). Clásicamente, epilepsia, rasgos obsesivos y deterioro cognitivo incipiente [fuente no localizada].',
       'Con la tangencialidad (no se llega a la meta), con la pobreza de contenido y con la logorrea.'],
      [N('Tangencialidad', 'tangenc'),
       'Respuesta oblicua, tangencial o irrelevante a una pregunta. La escala de 1986 la limita a las respuestas; en el habla espontánea se registra como descarrilamiento (TLC; Andreasen 1979a†, 1986†).',
       'Esquizofrenia y manía [fuente no localizada]. Carece de valor diagnóstico aislada.',
       'Con las pararrespuestas del síndrome de Ganser, con la evasión deliberada y con los fallos de comprensión (afasia, hipoacusia, lengua no materna) [fuente no localizada].'],
      [N('Descarrilamiento y pérdida de asociaciones', 'descarril'),
       'Las ideas se deslizan de un tema a otro relacionado solo de forma oblicua, o no relacionado; las frases están bien construidas y la ruptura se da entre ellas (TLC; Andreasen 1979a†). Corresponde al aflojamiento de las asociaciones de Bleuler (1911 [no verificada]).',
       'Esquizofrenia y manía por igual: ya no puede considerarse patognomónico de la esquizofrenia (Andreasen 1979b). El trastorno formal positivo persistente en fase estable sí se asocia a la esquizofrenia frente al trastorno bipolar (d = 1,02; Yalincetin 2017).',
       'Con la fuga de ideas (panel A), con la tangencialidad y con el discurso de la afasia fluente (ver la tabla del bloque E).'],
      [N('Incoherencia y esquizoafasia', 'incoher'),
       'Discurso incomprensible porque la alteración está dentro de la frase: se pierden la sintaxis o el sentido de las palabras («ensalada de palabras») (TLC; Andreasen 1979a†). Esquizoafasia de Kraepelin: habla caótica con comprensión y conducta cotidiana conservadas, en psicosis crónica (de Oliveira-Souza 2023).',
       'Esquizofrenia, sobre todo formas desorganizadas [fuente no localizada]. Obliga siempre a descartar afasia fluente y delirium.',
       'Con la afasia de Wernicke y la transcortical sensorial (de Oliveira-Souza 2023) y con el discurso incoherente del delirium, que se acompaña de inatención y fluctuación (DSM-5-TR [no verificada]).'],
      [N('Pensamiento ilógico', 'ilogic'),
       'Se llega a conclusiones que no se siguen de las premisas, sin que lo explique un delirio ni el nivel educativo o el marco cultural (TLC; Andreasen 1979a†).',
       'Esquizofrenia [fuente no localizada]. Valor orientador escaso si aparece aislado.',
       'Con el delirio (alteración del contenido) y con el pensamiento mágico o las creencias compartidas por el grupo cultural [fuente no localizada].'],
      [N('Pensamiento concreto', 'pensconc'),
       'Dificultad para captar el sentido figurado (refranes, metáforas) y para abstraer semejanzas. La TALD lo incluye como «concretismo» (Kircher 2014†).',
       'Esquizofrenia, demencias, lesión frontal, discapacidad intelectual y trastorno del espectro autista [fuente no localizada].',
       'Con el efecto de la escolaridad, de la lengua no materna y de los refranes ajenos a la cultura de la persona [fuente no localizada].'],
      [N('Neologismos y paralogismos', 'neolog'),
       'Neologismo: palabra nueva cuya derivación no se entiende. Aproximación de palabras o paralogismo: palabras existentes usadas de forma nueva o con un significado privado (TLC; Andreasen 1979a†).',
       'Clásicamente, esquizofrenia. Los neologismos son tan infrecuentes que tienen poco valor diagnóstico (Andreasen 1979b).',
       'Con las parafasias y la jerga de la afasia fluente, con la jerga profesional o generacional y con el juego verbal deliberado [fuente no localizada].'],
      [N('Asociaciones por asonancia y glosolalia', 'glosolalia'),
       'Asonancia: el sonido, y no el significado, guía la elección de las palabras (rimas, juegos de palabras) (TLC; Andreasen 1979a†). Glosolalia: emisión fluida de un habla ininteligible con apariencia de lengua.',
       'Asonancia: clásicamente, manía [fuente no localizada]. Glosolalia: conducta normal y esperada en determinados grupos religiosos de oración (Newberg 2006); por sí misma no es un síntoma.',
       'Con la parafasia fonémica, con el humor y la poesía, y entre sí: la glosolalia es voluntaria, contextual y reconocida por la comunidad de la persona [fuente no localizada].'],
      [N('Ecolalia y palilalia', 'ecolalia'),
       'Ecolalia: repetición en eco de palabras o frases de la otra persona (TLC; Andreasen 1979a†). Palilalia: repetición de las propias palabras o del final de la frase [fuente no localizada].',
       'Catatonía (ítem de ecofenómenos de la escala de Bush-Francis; Bush 1996†). Autismo: frecuente, y para muchas personas funcional y con significado (Blackburn 2023). Afasias: ecolalia mitigada en la afasia fluente crónica (3 casos; Torres-Prioris 2019).',
       'Con la repetición deliberada para ganar tiempo o para confirmar lo oído, y con la perseveración (se repite lo propio, no lo ajeno).'],
      [N('Verbigeración', 'verbig'),
       'Repetición continua y sin propósito de palabras o frases, «como un disco rayado» (ítem de la escala de Bush-Francis; Bush 1996†).',
       'Catatonía: se considera uno de sus rasgos característicos, junto a la flexibilidad cérea (Walther 2019).',
       'Con la perseveración (ligada al tema o a la pregunta previa), la palilalia, los tics vocales y las emisiones recurrentes de la afasia global [fuente no localizada].'],
      [N('Estereotipias verbales y habla amanerada', 'estereotip'),
       'Estereotipia verbal: palabras o frases repetidas de forma idéntica, fuera de contexto. Habla amanerada o afectada: pomposa, rebuscada o excesivamente formal (ítem «stilted speech» de la TLC; Andreasen 1979a†).',
       'Catatonía y esquizofrenia; la estereotipia y el manierismo figuran en los criterios de catatonía (DSM-5-TR [no verificada]).',
       'Con las muletillas, los tics vocales, los automatismos verbales de las crisis epilépticas y el estilo pedante sin trastorno [fuente no localizada].']
    ] });
    y = tB.y + 50;

    // ---------- Panel C ----------
    y = F.band(y, 'Lenguaje y habla de causa neurológica o motora: lo que hay que separar de A y B', { n: 'C' }) + 22;
    const r1 = row3(['c_warn', 'c_act', 'c_info'], y, [
      { type: 'warn', node: 'delirium', title: 'Señales de causa neurológica o médica', text: 'Inicio brusco, edad avanzada sin antecedentes psicóticos, atención o conciencia alteradas, parafasias, fallo de la comprensión o de la denominación y signos focales [fuente no localizada]. En una persona sin historia fiable hay que considerar a la vez psicosis y afasia: confundirlas puede retrasar el tratamiento de un ictus (Lane 2011).' },
      { type: 'act', node: 'neuropsico', title: 'Exploración mínima del lenguaje', text: 'Habla espontánea (fluencia, parafasias, esfuerzo), comprensión de órdenes, repetición, denominación, lectura y escritura, además de articulación y prosodia [fuente no localizada]. La repetición y la comprensión conservadas separan la esquizoafasia de las afasias sensoriales (de Oliveira-Souza 2023).' },
      { type: 'info', title: 'Dónde está la lesión: otra figura', text: 'La localización lesional de las afasias, la aprosodia y la disartria no se repite aquí: ver la figura «Mapa lesional de los síndromes neuropsicológicos». La afasiología actual pasa de describir tareas alteradas a identificar procesos cognitivos y redes (Hillis 2007).' }]);
    F.arrow(r1.bs[0], r1.bs[1], { from: 'r', to: 'l' });
    F.arrow(r1.bs[1], r1.bs[2], { from: 'r', to: 'l', dash: true });
    y = r1.bottom + 26;
    const tC = F.table({ x: X, y, fs: FS, cols: [{ w: 300, label: 'Alteración (ficha)' }, { w: 620, label: 'Rasgo operativo' }, { w: 580, label: 'Causas y cuadros' }, { w: 680, label: 'Clave frente al trastorno formal del pensamiento' }], rows: [
      [N('Afasia no fluente (Broca)', 'afasia_bro'),
       'Habla escasa, esforzada y agramatical, con comprensión relativamente conservada [fuente no localizada]. La variante no fluente o agramatical de la afasia progresiva primaria comparte el patrón, con inicio insidioso (Gorno-Tempini 2011).',
       'Ictus y otras lesiones focales del hemisferio dominante; enfermedades neurodegenerativas [fuente no localizada].',
       'Frente a la pobreza del habla y el mutismo: hay esfuerzo visible por hablar, errores gramaticales y fonológicos y, a menudo, conciencia del déficit y otros signos focales [fuente no localizada].'],
      [N('Afasia fluente (Wernicke)', 'afasia_wer'),
       'Habla fluente y bien articulada, con parafasias, neologismos y poco contenido; comprensión, repetición y denominación alteradas [fuente no localizada].',
       'Lesiones temporales posteriores izquierdas, sobre todo ictus [fuente no localizada]. Su discurso puede parecerse al de la esquizofrenia y otras psicosis (Lane 2011).',
       'Frente a la incoherencia y la esquizoafasia: ver la tabla del bloque E. Frente a la presión del habla de la manía: en esta no hay parafasias y la comprensión es normal [fuente no localizada].'],
      [N('Afasia de conducción', 'afasia_cond'),
       'Habla fluente con parafasias fonémicas y repetición alterada de forma desproporcionada; comprensión conservada [fuente no localizada].',
       'Lesiones focales de la red perisilviana izquierda o de sus conexiones [fuente no localizada].',
       'Los intentos sucesivos de autocorrección de una palabra no son perseveración ni verbigeración: la persona busca la forma correcta y advierte el error [fuente no localizada].'],
      [N('Afasias transcorticales y anómica', 'afasia_tc'),
       'Transcorticales: repetición conservada, a veces con ecolalia. Anómica: falta de la palabra y circunloquios, con el resto del lenguaje poco alterado [fuente no localizada].',
       'Lesiones focales fuera del área perisilviana [fuente no localizada]. Variantes semántica y logopénica de la afasia progresiva primaria (Gorno-Tempini 2011).',
       'El circunloquio anómico rodea una palabra que no sale; la circunstancialidad rodea el tema. La ecolalia transcortical se acompaña de comprensión o iniciativa verbal alteradas [fuente no localizada].'],
      [N('Disartria', 'disartria'),
       'Trastorno motor del habla: se alteran la articulación, la voz o el ritmo; el lenguaje (palabras, sintaxis, comprensión, escritura) está conservado. Clasificación perceptiva clásica en tipos (Darley 1969 [no verificada]).',
       'Lesiones de las vías motoras, del cerebelo o de los ganglios basales [fuente no localizada]. Litio: las secuelas neurológicas irreversibles de la intoxicación son sobre todo cerebelosas, en especial ataxia y disartria (Kores y Lader 1997).',
       'El discurso escrito es normal. Una disartria nueva en una persona en tratamiento con litio u otros psicofármacos obliga a pensar en toxicidad [fuente no localizada].'],
      [N('Aprosodia', 'aprosodia'),
       'Pérdida de la melodía afectiva del habla o de su comprensión. Tras lesiones del hemisferio derecho, las aprosodias pueden clasificarse igual que las afasias: motora, sensorial, global, transcorticales (Ross 1981).',
       'Lesiones focales del hemisferio derecho (10 pacientes; Ross 1981). Prosodia monótona también en el parkinsonismo [fuente no localizada].',
       'Frente al aplanamiento afectivo y la depresión: la lesión cerebral puede borrar los rasgos visibles de una depresión o imitarlos (Ross y Rush 1981). Se pregunta por el afecto vivido, no solo por el expresado.'],
      [N('Mutismo', 'mutismo'),
       'Ausencia o reducción extrema del habla. No es un diagnóstico: es un signo con causas psiquiátricas, neurológicas y funcionales. Mutismo acinético: conciencia y capacidad sensitivomotora intactas con pérdida de la conducta dirigida a metas (Arnts 2020).',
       'Catatonía (ítem de la escala de Bush-Francis; Bush 1996†). Mutismo selectivo (DSM-5-TR [no verificada]). Lesiones frontales bilaterales (Ackermann 1995). Cirugía de la fosa posterior en la infancia (Catsman-Berrevoets 2018). Afonía o mutismo funcional (Schuster 2011).',
       'Se observa si la persona comprende, escribe, gesticula o susurra, y si hay otros signos catatónicos, focales o de afasia global [fuente no localizada]. El mutismo no permite evaluar el pensamiento: no equivale a pobreza del pensamiento.']
    ] });
    y = tC.y + 50;

    // ---------- Bloque D: lectura por cuadros ----------
    y = F.band(y, 'Lectura por cuadros: qué patrón orienta (ninguno es patognomónico)', { n: 'D' }) + 22;
    const r2 = row3(['d_mania', 'd_esq', 'd_dep'], y, [
      { type: 'dx', node: 'ep_mania', title: 'Manía', text: 'Predominio positivo y objetivo: presión del habla, fuga de ideas y habla distraíble. Puntuación más alta en la dimensión positiva objetiva de la TALD (Kircher 2014; Mutlu 2019). A los 6 meses la mayoría de las alteraciones ha remitido (Andreasen y Grove 1986).' },
      { type: 'dx', node: 'esq', title: 'Esquizofrenia', text: 'En fase aguda, trastorno positivo de gravedad similar al de la manía; más trastorno negativo (d = 0,80) y trastorno positivo persistente en fase estable (d = 1,02) (Yalincetin 2017). Más perseveración y pobreza de contenido que en la manía (Kircher 2022). Tiende a persistir (Andreasen y Grove 1986).' },
      { type: 'dx', node: 'ddm', title: 'Depresión', text: 'También presenta trastorno formal, con un patrón propio en la TALD, en la que cuentan las vivencias subjetivas (Kircher 2014). Pausas alargadas en el habla (Szabadi 1976); pensamientos agolpados en los estados depresivos mixtos (Piguet 2010).' }]);
    y = r2.bottom + 24;
    const r3 = row3(['d_dem', 'd_cat', 'd_del'], y, [
      { type: 'dx', node: 'dem', title: 'Demencia y afasia progresiva primaria', text: 'Inicio insidioso y progresivo. La afasia progresiva primaria tiene tres variantes definidas por rasgos del habla y del lenguaje: no fluente o agramatical, semántica y logopénica (Gorno-Tempini 2011). Empobrecimiento, anomia y perseveración en otras demencias [fuente no localizada].' },
      { type: 'dx', node: 'catatonia', title: 'Catatonía', text: 'Mutismo, ecolalia, verbigeración y estereotipias verbales (Bush 1996†; Walther 2019). Cumplía criterios el 7 % (15 de 215) de los ingresos psiquiátricos consecutivos (Bush 1996). Frecuente en los trastornos del estado de ánimo y solapada con el delirium y con enfermedades médicas (Walther 2019).' },
      { type: 'warn', node: 'afasia_wer', title: 'Afasia y delirium: descartar primero', text: 'Discurso desorganizado de inicio brusco: explorar atención, comprensión, repetición y denominación antes de atribuirlo a una psicosis (Lane 2011; de Oliveira-Souza 2023). En el delirium dominan la inatención y la fluctuación (DSM-5-TR [no verificada]).' }]);
    y = r3.bottom + 50;

    // ---------- Bloque E: datos ----------
    y = F.band(y, 'Lo que dicen los datos: dimensiones, pronóstico, fiabilidad, correlatos y afasia frente a esquizoafasia', { n: 'E' }) + 22;
    const HW = (TW - 30) / 2;
    const pair = (ida, a, idb, b, y0) => { const A = F.box(ida, Object.assign({ x: X, y: y0, w: HW, fs: 19, align: 'left' }, a)); const B = F.box(idb, Object.assign({ x: X + HW + 30, y: y0, w: HW, fs: 19, align: 'left' }, b)); const h = Math.max(A.h, B.h); A.h = B.h = h; F._grow(y0 + h); return y0 + h; };
    y = pair('e_dim', { type: 'info', node: 'panss', title: 'Dimensiones positiva y negativa',
      text: 'Positiva (descarrilamiento, incoherencia, presión del habla) y negativa (pobreza del habla y de su contenido): definir subtipos y separar lo positivo de lo negativo permite a menudo distinguir manía y esquizofrenia (Andreasen 1979b†). La TALD obtiene cuatro factores: objetivo y subjetivo, positivo y negativo (Kircher 2014). Revisión sistemática de 16 estudios y 39 análisis factoriales: predomina una estructura de tres factores, con acuerdo en dos (desorganización y negativo) y un tercero por aclarar (Zamperoni 2024). Metaanálisis de 19 estudios (715 personas con esquizofrenia y 474 con trastorno bipolar): el trastorno positivo es compartido; el negativo y el positivo persistente distinguen subgrupos de esquizofrenia (Yalincetin 2017).' },
      'e_pron', { type: 'info', title: 'Frecuencia, gravedad y pronóstico',
      text: 'Revisión sistemática de 120 artículos: la prevalencia en las psicosis oscila entre el 5 % y el 91 %; se asocia a mayor gravedad clínica, y el trastorno negativo predice peor evolución que el «discurso desorganizado» (Roche 2015). Asociación inversa, pequeña a moderada, con el funcionamiento social en la esquizofrenia (r = −0,23; 13 estudios, 1478 participantes; Marggraf 2020). Mayor gravedad en personas que consumen cannabis a lo largo del continuo de la psicosis (diferencia de medias estandarizada 0,21; 19 estudios; Argote 2022).' }, y) + 24;
    y = pair('e_fiab', { type: 'act', title: 'Fiabilidad: cómo evaluar',
      text: 'Con definiciones operativas la fiabilidad es buena para la mayoría de los términos (Andreasen 1979a); correlación intraclase buena por ítem y excelente por subescala en el Thought and Language Index (Liddle 2002); en la versión coreana de la TLC, 0,51 entre evaluadores y 0,94 test-retest (Park 2015). Límites: las escalas usan el mismo término para conceptos distintos y términos distintos para el mismo concepto (Voppel 2025), y distinguir a ciegas esquizofrenia de afasia sobre transcripciones resultó poco fiable (Faber 1983). En la práctica: anotar una muestra literal del discurso y nombrar el subtipo concreto.' },
      'e_corr', { type: 'info', title: 'Correlatos cognitivos y cerebrales',
      text: 'Metaanálisis de 52 trabajos (2805 pacientes): la neurocognición se asocia al trastorno positivo (r = −0,21) y al negativo (r = −0,24); el déficit de fluidez verbal pesa más en el negativo y el de inhibición y el sintáctico, en el positivo (Bora 2019). Revisión sistemática de 61 estudios de neuroimagen: déficit de sustancia gris, mayor en el lado izquierdo, en el giro frontal inferior, el giro temporal superior y el lóbulo parietal inferior, con resultados no siempre concordantes (Cavelti 2018). Metaanálisis de 18 estudios funcionales: giro temporal superior y giro temporal medio posterior izquierdos (Wensing 2017). En el trastorno positivo agudo los antipsicóticos son eficaces; no hay psicoterapia específica desarrollada (Kircher 2018).' }, y) + 30;
    y = F.text(X, y + 20, 'Afasia de Wernicke frente a esquizoafasia: lo que sostienen las fuentes cotejadas', { fs: 21, bold: true, w: TW }) + 8;
    const tE = F.table({ x: X, y, fs: FS, cols: [{ w: 400, label: 'Rasgo' }, { w: 560, label: 'Afasia fluente (Wernicke)' }, { w: 560, label: 'Esquizoafasia o incoherencia' }, { w: 660, label: 'Fuente y alcance' }], rows: [
      ['Por qué se confunden', 'Discurso vago, con asociaciones laxas y aparente confusión.', 'El mismo aspecto superficial del discurso.', 'Gerson 1977 (8 personas con afasia posterior y 10 con esquizofrenia y asociaciones laxas): describe seis rasgos diferenciales del discurso, que el resumen indexado no enumera.'],
      ['Comprensión y repetición', 'Alteradas.', 'Conservadas: sigue órdenes verbales, escritas y gestuales y repite palabras y frases.', 'de Oliveira-Souza 2023 (caso y revisión del diferencial con las afasias sensoriales).'],
      ['Conducta no verbal y vida diaria', 'No valorada en las fuentes cotejadas.', 'Organizadas pese al habla caótica: disociación entre habla y conducta descrita por Kraepelin.', 'de Oliveira-Souza 2023.'],
      ['Contexto clínico', 'Lesión hemisférica izquierda, con frecuencia un ictus; puede faltar una historia fiable.', 'Estado alucinatorio-delirante crónico.', 'Lane 2011; de Oliveira-Souza 2023.'],
      ['Alteraciones lingüísticas', 'Síndrome afásico clásico.', 'Muchas alteraciones compartidas con la afasia, sin síndrome afásico clásico: solo 5 de 14 diferenciaban los grupos.', 'Faber 1983 (14 y 13 pacientes): de cinco especialistas, tres acertaron por encima del azar y solo uno discriminó bien.'],
      ['Tipo de tarea', 'En tareas semánticas, las diferencias de rendimiento dependieron más de la gravedad que del tipo de afasia.', 'Las diferencias con el grupo de afasia solo aparecieron cuando se exigían respuestas de varias palabras.', 'Goldfarb 1994 (29 personas con afasia, 26 con esquizofrenia crónica y 32 controles).']
    ] });
    y = tE.y + 40;
    F.box('lim', { x: X, y, w: TW, type: 'lim', fs: 19, align: 'left', title: 'Límites de la figura',
      text: 'Esquema docente: no es un algoritmo diagnóstico ni sustituye a la exploración, a la neuroimagen cuando está indicada ni al juicio clínico. Ninguna alteración formal es patognomónica de un diagnóstico, y la frontera entre «pensamiento», «lenguaje» y «habla» es convencional: lo que se observa es siempre discurso. Las definiciones marcadas con † resumen los glosarios de las escalas TLC, TALD y Bush-Francis sin cotejo del texto completo; las columnas «en qué cuadros orienta» y «con qué se confunde» contienen saber clínico tradicional señalado como [fuente no localizada]. La lengua, la escolaridad, la cultura y el contexto de la entrevista modifican el discurso: se valoran antes de calificarlo de alterado. Casi todos los datos proceden de muestras con esquizofrenia; en otros diagnósticos los estudios son escasos (Kircher 2018).' });
    F.footer('Fuentes principales: Andreasen 1979a, 1979b, 1986 (TLC); Andreasen y Grove 1986; Kircher 2014 (TALD), 2018, 2022; Yalincetin 2017; Roche 2015; Zamperoni 2024; Bora 2019; Cavelti 2018; Wensing 2017; Gerson 1977; Faber 1983; de Oliveira-Souza 2023; Bush 1996; Walther 2019; Gorno-Tempini 2011; Ross 1981. Clásicos no cotejados: Bleuler 1911, Jaspers 1913, Schneider 1950. Referencias completas en la ficha de la figura. Esquema docente; no sustituye al juicio clínico.');
    return F;
  }
};
