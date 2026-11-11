// Figura: árbol semiológico de los fenómenos perceptivos (alucinación y fenómenos que la imitan).
// Compilar en prueba: node tools/fig.js dd_percepcion --dry --png <carpeta>
const TITLE = 'Fenómenos perceptivos: de la alucinación a sus imitadores';
module.exports = {
  key: 'dd_percepcion',
  meta: {
    title: TITLE,
    kind: 'dd',
    cap: 'Árbol semiológico en cuatro bloques. 1) Cinco preguntas (nivel de conciencia, relación con el estímulo, cualidad sensorial, corporeidad y localización, juicio de realidad) separan la alucinación de los fenómenos vecinos; la columna derecha indica la tradición de la que procede cada distinción. 2) Valor orientador de cada modalidad sensorial y cuadros en que aparece: ninguna modalidad ni rasgo formal es patognomónico. 3) Cómo explorar. 4) Experiencias frecuentes sin trastorno mental. Los símbolos ●●○ y ●○○ gradúan el valor orientador; «[fuente no localizada]» y «[no verificada]» señalan lo que no se ha podido cotejar en una fuente primaria. Esquema docente: las fronteras entre fenómenos son convencionales y no sustituye a la exploración clínica.',
    refs: [
      'Waters F & Fernyhough C (2017). Hallucinations: a systematic review of points of similarity and difference across diagnostic classes. Schizophr Bull 43:32-43 · PMID 27872259',
      'Telles-Correia D, Moreira AL & Gonçalves JS (2015). Hallucinations and related concepts—their conceptual background. Front Psychol 6:991 · PMID 26283978',
      'Berrios GE & Dening TR (1996). Pseudohallucinations: a conceptual history. Psychol Med 26:753-763 · PMID 8817710',
      'van der Zwaard R & Polak MA (2001). Pseudohallucinations: a pseudoconcept? A review of the validity of the concept, related to associate symptomatology. Compr Psychiatry 42:42-50 · PMID 11154715',
      'Waters F et al. (2016). What is the link between hallucinations, dreams, and hypnagogic-hypnopompic experiences? Schizophr Bull 42:1098-1109 · PMID 27358492',
      'Ohayon MM et al. (1996). Hypnagogic and hypnopompic hallucinations: pathological phenomena? Br J Psychiatry 169:459-467 · PMID 8894197',
      'Ohayon MM (2000). Prevalence of hallucinations and their pathological associations in the general population. Psychiatry Res 97:153-164 · PMID 11166087',
      'Sharpless BA & Barber JP (2011). Lifetime prevalence rates of sleep paralysis: a systematic review. Sleep Med Rev 15:311-315 · PMID 21571556',
      'Waters F et al. (2018). Severe sleep deprivation causes hallucinations and a gradual progression toward psychosis with increasing time awake. Front Psychiatry 9:303 · PMID 30042701',
      'McGrath JJ et al. (2015). Psychotic experiences in the general population: a cross-national analysis based on 31,261 respondents from 18 countries. JAMA Psychiatry 72:697-705 · PMID 26018466',
      'van Os J et al. (2009). A systematic review and meta-analysis of the psychosis continuum: evidence for a psychosis proneness-persistence-impairment model of psychotic disorder. Psychol Med 39:179-195 · PMID 18606047',
      'Linscott RJ & van Os J (2013). An updated and conservative systematic review and meta-analysis of epidemiological evidence on psychotic experiences in children and adults. Psychol Med 43:1133-1149 · PMID 22850401',
      'Rees WD (1971). The hallucinations of widowhood. Br Med J 4:37-41 · PMID 5096884',
      'Castelnovo A et al. (2015). Post-bereavement hallucinatory experiences: a critical overview of population and clinical studies. J Affect Disord 186:266-274 · PMID 26254619',
      'Teunisse RJ et al. (1996). Visual hallucinations in psychologically normal people: Charles Bonnet\'s syndrome. Lancet 347:794-797 · PMID 8622335',
      'Waters F et al. (2014). Visual hallucinations in the psychosis spectrum and comparative information from neurodegenerative disorders and eye disease. Schizophr Bull 40(Suppl 4):S233-S245 · PMID 24936084',
      'McKeith IG et al. (2017). Diagnosis and management of dementia with Lewy bodies: fourth consensus report of the DLB Consortium. Neurology 89:88-100 · PMID 28592453',
      'Fénelon G et al. (2000). Hallucinations in Parkinson\'s disease: prevalence, phenomenology and risk factors. Brain 123:733-745 · PMID 10734005',
      'Acharya V, Acharya J & Lüders H (1998). Olfactory epileptic auras. Neurology 51:56-61 · PMID 9674778',
      'Leopold D (2002). Distortion of olfactory perception: diagnosis and treatment. Chem Senses 27:611-615 · PMID 12200340',
      'Brady KT et al. (1991). Cocaine-induced psychosis. J Clin Psychiatry 52:509-512 · PMID 1752853',
      'Freudenmann RW & Lepping P (2009). Delusional infestation. Clin Microbiol Rev 22:690-732 · PMID 19822895',
      'Jenkins G & Röhricht F (2007). From cenesthesias to cenesthopathic schizophrenia: a historical and phenomenological review. Psychopathology 40:361-368 · PMID 17657136',
      'Blom JD (2016). Alice in Wonderland syndrome: a systematic review. Neurol Clin Pract 6:259-270 · PMID 27347442',
      'Todd J (1955). The syndrome of Alice in Wonderland. Can Med Assoc J 73:701-704 · PMID 13304769',
      'Heydrich L & Blanke O (2013). Distinct illusory own-body perceptions caused by damage to posterior insula and extrastriate cortex. Brain 136:790-803 · PMID 23423672',
      'Blanke O et al. (2014). Neurological and robot-controlled induction of an apparition. Curr Biol 24:2681-2686 · PMID 25447995',
      'Nayani TH & David AS (1996). The auditory hallucination: a phenomenological survey. Psychol Med 26:177-189 · PMID 8643757',
      'Haddock G et al. (1999). Scales to measure dimensions of hallucinations and delusions: the psychotic symptom rating scales (PSYRATS). Psychol Med 29:879-889 · PMID 10473315',
      'Jaspers K (1913). Allgemeine Psychopathologie. Berlin: Springer (9ª ed. 1973). Citado a través de Telles-Correia et al. 2015; original [no verificada]',
      'Kandinsky V (1885). Kritische und klinische Betrachtungen im Gebiete der Sinnestäuschungen. Berlin: Friedländer. Citado a través de Telles-Correia et al. 2015; original [no verificada]',
      'Schneider K (1950). Klinische Psychopathologie. Stuttgart: Thieme [no verificada]',
      'Casey P & Kelly B (2019). Fish\'s Clinical Psychopathology: Signs and Symptoms in Psychiatry. 4ª ed. Cambridge University Press [no verificada]',
      'American Psychiatric Association (2022). DSM-5-TR. Washington, DC: APA Publishing. Criterios de delirium [no verificada]'
    ],
    nodes: ['obses', 'wahnbewusstheit', 'lewy', 'dt_alc', 'matussek_gestalt', 'sens_tea', 'esq', 'psust', 'tlp', 'ptsd', 'tdi', 'dpsic', 'psiep', 'parkinson_psiq', 'ekbom', 'cocaina', 'chemsex_s', 'nar', 'sro']
  },
  draw(Fig) {
    const W = 2300;
    const F = new Fig({ key: 'dd_percepcion', title: TITLE, w: W,
      desc: 'Árbol de cinco preguntas que separa la alucinación de la pseudoalucinación, la alucinosis, la ilusión, las distorsiones perceptivas, los fenómenos hipnagógicos, la sensación de presencia y la autoscopia; tabla del valor orientador de cada modalidad sensorial; recuadros de exploración y de experiencias no patológicas.' });
    const QX = 60, QW = 520, GX = 680, GW = 1070, OW = 505, O1 = GX + 20, O2 = GX + 20 + OW + 20, TX = 1790, TW = 450, FS = 19;

    // ---------- Bloque 1: árbol ----------
    let y = F.band(90, 'Cinco preguntas que separan los fenómenos (se recorren de arriba abajo)', { n: 1 }) + 22;
    F.text(QX, y + 18, 'Pregunta y rasgo que explora', { bold: true, fs: 19, w: QW });
    F.text(GX, y + 18, 'Fenómeno que se separa en ese paso', { bold: true, fs: 19, w: GW });
    F.text(TX, y + 18, 'Tradición y fuente de la distinción', { bold: true, fs: 19, w: TW });
    y += 40;

    // Fila genérica: pregunta a la izquierda, grupo de resultados en el centro (rejilla de 2 columnas), tradición a la derecha.
    const row = (id, y0, q, ans, glabel, outs, trad) => {
      const qb = F.box(id, Object.assign({ x: QX, y: y0 + 44, w: QW, type: 'q', fs: FS }, q));
      let yy = y0 + 44, bottom = yy;
      for (let i = 0; i < outs.length; i += 2) {
        const a = F.box(id + '_o' + i, Object.assign({ x: O1, y: yy, w: outs[i + 1] ? OW : (outs[i].wide ? 2 * OW + 20 : OW), fs: FS }, outs[i]));
        let h = a.h;
        if (outs[i + 1]) { const b = F.box(id + '_o' + (i + 1), Object.assign({ x: O2, y: yy, w: OW, fs: FS, minH: a.h }, outs[i + 1])); h = Math.max(h, b.h); if (b.h > a.h) { a.h = b.h; } }
        yy += h + 18; bottom = yy - 18;
      }
      const tb = F.box(id + '_t', Object.assign({ x: TX, y: y0 + 44, w: TW, type: 'info', fs: 18, align: 'left' }, trad));
      const gh = bottom + 20 - y0;
      F.group({ x: GX, y: y0, w: GW, h: gh, label: glabel });
      const g = { x: GX, y: y0, w: GW, h: gh };
      if (ans) F.arrow(qb, g, { from: 'r', to: 'l', fb: (qb.y + qb.h / 2 - y0) / gh, label: ans, lx: QX + QW + 30 });
      return { q: qb, bottom: Math.max(y0 + gh, qb.y + qb.h, tb.y + tb.h) };
    };

    const r1 = row('q1', y,
      { title: '1 · ¿Ocurre en vigilia plena?', text: 'Rasgo: nivel de conciencia. Por definición, la alucinación solo se da en vigilia plena (Waters 2016).' },
      'No', 'No: solo al dormirse o al despertar, o con la conciencia alterada',
      [{ type: 'dx', node: 'aluc_hipn', title: 'Fenómenos hipnagógicos e hipnopómpicos', text: 'Transición entre vigilia y sueño. Son percepciones inmersivas y desconectadas del entorno; la alucinación es discreta y se superpone a lo que se percibe de verdad (Waters 2016).' },
       { type: 'warn', node: 'delirium', title: 'Conciencia o atención alteradas', text: 'Inicio agudo, curso fluctuante e ilusiones o alucinaciones cambiantes: valorar primero un delirium (DSM-5-TR, criterios de delirium [no verificada]).' }],
      { title: 'Hagen (1868)', text: 'Aplicó «pseudoalucinación» a errores sensoriales como las alucinaciones hipnagógicas de personas sanas, vividas de forma pasiva y con conciencia de su falsedad (Telles-Correia 2015).' });
    y = r1.bottom + 64;

    const r2 = row('q2', y,
      { title: '2 · ¿Hay un objeto o estímulo real en ese momento?', text: 'Rasgo: relación con el estímulo. Si no lo hay, se sigue hacia abajo.' },
      'Sí', 'Sí: ¿qué le ocurre al estímulo real?',
      [{ type: 'dx', node: 'ilusion', title: 'Ilusión y pareidolia', text: 'El objeto real se percibe transformado en otra cosa. Jaspers distinguió tres tipos: por inatención, por estados afectivos y pareidolias (Telles-Correia 2015).' },
       { type: 'dx', node: 'distors_perc', title: 'Distorsión perceptiva', text: 'El objeto se identifica bien, pero cambian su tamaño, forma o distancia (micropsia, macropsia, metamorfopsia). Síndrome de Alicia (Todd 1955): hasta el 30 % de adolescentes refiere síntomas no clínicos (Blom 2016).' },
       { type: 'dx', node: 'aluc_func', title: 'Alucinación funcional y refleja', text: 'El estímulo se percibe como tal y además desencadena un percepto: en la misma modalidad (funcional, p. ej. voces solo con el ruido del agua) o en otra (refleja) (Casey y Kelly 2019 [no verificada]).' },
       { type: 'info', node: 'percdel', title: 'Percepción delirante: no es un trastorno perceptivo', text: 'El objeto se percibe correctamente; lo anómalo es el significado que se le atribuye (Schneider 1950 [no verificada]).' }],
      { title: 'Esquirol y Jaspers', text: 'Esquirol integró el término «alucinación» en la psiquiatría. Para Jaspers la alucinación no surge de la transformación de percepciones reales, como sí ocurre en la ilusión; las ilusiones se definen de forma unánime como distorsiones de objetos reales (Telles-Correia 2015). Autor original de «funcional» y «refleja»: [fuente no localizada].' });
    F.arrow(r1.q, r2.q, { from: 'b', to: 't', label: 'Sí' });
    y = r2.bottom + 64;

    const r3 = row('q3', y,
      { title: '3 · ¿Tiene cualidad sensorial?', text: 'Rasgo: carácter perceptivo. ¿Se ve, se oye, se huele o se nota en el cuerpo, o «se sabe» sin percibirlo?' },
      'No', 'No: vivencias sin percepto',
      [{ type: 'dx', node: 'sens_presencia', title: 'Sensación de presencia', text: 'Sensación de que hay alguien cerca cuando no hay nadie ni se le ve. Ilusión de percepción del propio cuerpo, asociada a lesiones temporoparietales, insulares y sobre todo frontoparietales (Blanke 2014).' },
       { type: 'info', node: 'pasividad', title: 'Otros imitadores no perceptivos', text: 'Pensamiento insertado o impuesto (ajeno, pero no se oye), obsesión en forma de imagen (reconocida como propia) y conciencia delirante (saber inmediato sin apoyo sensorial) [fuente no localizada].' }],
      { title: 'Jaspers y neurología', text: 'Jaspers la llamó «conciencia corpórea» (leibhaftige Bewusstheit) (Jaspers 1913 [no verificada]). En la enfermedad de Parkinson forma parte de las alucinaciones menores (presencia, paso lateral o ilusiones), presentes en el 25,5 % de 216 pacientes (Fénelon 2000).' });
    F.arrow(r2.q, r3.q, { from: 'b', to: 't', label: 'No' });
    y = r3.bottom + 64;

    const r4 = row('q4', y,
      { title: '4 · ¿Tiene corporeidad y se sitúa en el espacio exterior?', text: 'Rasgos: consistencia sensorial (objetividad, detalle, corporeidad) y origen fuera de la mente del sujeto (Jaspers, a partir de Kandinsky; Telles-Correia 2015).' },
      'No', 'No: imagen sin objetividad, en el espacio interno',
      [{ type: 'dx', node: 'pseudoaluc', title: 'Pseudoalucinación (sentido de Kandinsky y Jaspers)', text: '«Percepciones subjetivas» semejantes a la alucinación por su carácter y viveza, pero sin realidad objetiva (Kandinsky 1885, citado por Telles-Correia 2015). Para Jaspers carecen de consistencia sensorial, no se sitúan fuera de la mente y pueden modificarse a voluntad (Telles-Correia 2015).' },
       { type: 'info', title: 'Imaginería vívida e imagen eidética', text: 'Se evocan y modifican a voluntad y se reconocen como producto propio; la imagen eidética reproduce con gran detalle algo visto antes [fuente no localizada].' }],
      { title: 'Kandinsky (1885) y Jaspers', text: 'Dos criterios conviven desde el origen: la falta de objetividad (Kandinsky, Jaspers) y la conciencia de irrealidad (Bleuler, Sedman, Hare) (Telles-Correia 2015). La localización en el espacio exterior no identifica la esquizofrenia frente a otros diagnósticos (Waters y Fernyhough 2017).' });
    F.arrow(r3.q, r4.q, { from: 'b', to: 't', label: 'Sí' });
    y = r4.bottom + 64;

    const r5 = row('q5', y,
      { node: 'insight', title: '5 · ¿Se conserva el juicio de realidad?', text: 'Rasgo: conciencia de irrealidad. ¿La persona reconoce que lo percibido no es real?' },
      'Sí', 'Sí: percepto vivo que la persona reconoce como irreal',
      [{ type: 'dx', title: 'Alucinosis', text: 'El término se introdujo («alucinosis alcohólica») para las alucinaciones acústicas vívidas y amenazantes de personas con consumo excesivo de alcohol, con conciencia de irrealidad y sin alteración de la conciencia; suele considerarse egodistónica (Telles-Correia 2015). Atribución a Wernicke: [fuente no localizada].' },
       { type: 'dx', node: 'charles', title: 'Pseudoalucinación (uso anglosajón) y síndrome de Charles Bonnet', text: 'Alucinación con conciencia de irrealidad. Entre 505 personas con déficit visual, 60 cumplían criterios de Charles Bonnet y todas reconocían la irrealidad de lo que veían (Teunisse 1996).' }],
      { title: 'Un término sin referente estable', text: 'Berrios y Dening (1996): «pseudoalucinación» carece de referente estable y se usa como «comodín» con el valor diagnóstico que convenga. Van der Zwaard y Polak (2001): baja validez de constructo; recomiendan especificar dimensiones y prefieren «alucinaciones no psicóticas».' });
    F.arrow(r4.q, r5.q, { from: 'b', to: 't', label: 'Sí' });
    y = r5.bottom + 64;

    // Fila final: alucinación en sentido estricto
    const al = F.box('aluc', { x: QX, y: y + 44, w: QW, type: 'dx', node: 'aluc', fs: FS, title: 'Alucinación en sentido estricto', text: 'Percepto sin objeto, con corporeidad, situado en el espacio exterior y vivido como real. Ningún rasgo formal aislado indica esquizofrenia, salvo la edad de inicio al final de la adolescencia (Waters y Fernyhough 2017).' });
    F.arrow(r5.q, al, { from: 'b', to: 't', label: 'No' });
    const au = F.box('autoscop', { x: O1, y: y + 44, w: OW, type: 'dx', node: 'autoscop', fs: FS, title: 'Fenómenos autoscópicos', text: 'Alucinación autoscópica: se ve un segundo cuerpo propio sin cambio de la conciencia corporal. Experiencia extracorporal: el cuerpo se ve desde una posición elevada. Heautoscopia: identificación con el doble, a menudo con la vivencia de estar en dos lugares (Heydrich y Blanke 2013).' });
    const fr = F.box('fronteras', { x: O2, y: y + 44, w: OW, type: 'warn', fs: FS, minH: au.h, title: 'Las fronteras son convencionales', text: 'Pseudoalucinaciones, alucinaciones, reexperimentación e imaginería disociativa forman un continuo que se solapa (van der Zwaard y Polak 2001). Describir cada dimensión es más útil que etiquetar.' });
    const tA = F.box('aluc_t', { x: TX, y: y + 44, w: TW, type: 'info', fs: 18, align: 'left', title: 'Correlato lesional', text: 'Heautoscopia: lesiones de la ínsula posterior izquierda. Alucinación autoscópica: córtex occipital derecho. Mecanismos distintos de los de la experiencia extracorporal (Heydrich y Blanke 2013).' });
    const gbot = Math.max(au.y + au.h, fr.y + fr.h) + 20;
    F.group({ x: GX, y, w: GW, h: gbot - y, label: 'Caso particular por su contenido (el propio cuerpo) y advertencia general' });
    y = Math.max(gbot, al.y + al.h, tA.y + tA.h) + 56;

    // ---------- Bloque 2: modalidades ----------
    y = F.band(y, 'Por modalidad sensorial: valor orientador real y cuadros en que aparece', { n: 2 }) + 22;
    const np = F.box('nopat', { x: 60, y, w: W - 120, type: 'warn', fs: 20, title: 'Ninguna modalidad ni rasgo formal es patognomónico',
      text: 'Revisión sistemática de 43 estudios: de 21 rasgos de las alucinaciones en la esquizofrenia, el 95 % se compartía con otros trastornos psiquiátricos, el 85 % con cuadros médicos o neurológicos, el 66 % con cuadros por alcohol y drogas y el 52 % con grupos no clínicos. El diagnóstico descansa en los síntomas acompañantes, no en la forma de la alucinación (Waters y Fernyhough 2017).' });
    y = np.y + np.h + 24;
    y = F.text(60, y + 18, 'Clave del valor orientador: ●●○ orienta hacia un grupo de causas solo en el contexto que se indica · ●○○ inespecífico. No se asigna ●●● a ninguna modalidad.', { fs: 19, bold: true, w: W - 120 }) + 6;
    const t = F.table({ x: 60, y, fs: 18, cols: [{ w: 290, label: 'Modalidad' }, { w: 370, label: 'Valor orientador' }, { w: 800, label: 'Datos que lo sustentan' }, { w: 720, label: 'Cuadros en que aparece' }],
      rows: [
        [{ t: 'Auditiva verbal (voces)', node: 'aluc_aud' },
         { sym: '●○○', t: 'Inespecífica. Las voces que comentan o dialogan en tercera persona son síntomas de primer rango (Schneider 1950 [no verificada]), pero no bastan para el diagnóstico.' },
         'Las voces negativas, en tercera persona o localizadas en el espacio exterior no indican por sí solas esquizofrenia (Waters y Fernyhough 2017). En 100 pacientes con psicosis, todas las personas oían voces que les hablaban o hablaban de ellas, y su complejidad aumentaba con el tiempo (Nayani y David 1996).',
         'Los cuatro grupos de la revisión: trastornos psiquiátricos (incluido el trastorno bipolar), cuadros médicos y neurológicos, alcohol y drogas, y grupos no clínicos (Waters y Fernyhough 2017). Trastorno límite, trastornos disociativos y TEPT: [fuente no localizada].'],
        [{ t: 'Visual', node: 'aluc_vis' },
         { sym: '●●○', t: 'Si predominan, empiezan a edad avanzada o hay alteración de la conciencia, orientan a causa médica, neurológica, tóxica o a pérdida visual [fuente no localizada]. No excluyen una psicosis primaria.' },
         'No son raras en las psicosis: media ponderada del 27 % en la esquizofrenia, 15 % en la psicosis afectiva y 7,3 % en la comunidad (Waters 2014). Las alucinaciones visuales complejas y recurrentes son un rasgo clínico nuclear de la demencia con cuerpos de Lewy y aparecen hasta en el 80 % de pacientes (McKeith 2017). En la privación de sueño la modalidad visual fue la más afectada (90 % de los estudios) (Waters 2018).',
         'Delirium; demencia con cuerpos de Lewy y enfermedad de Parkinson (alucinaciones visuales formadas en el 22,2 % de 216 pacientes; Fénelon 2000); pérdida visual (Teunisse 1996); enfermedad ocular y neurodegenerativa, esquizofrenia y psicosis afectiva (Waters 2014); privación de sueño (Waters 2018).'],
        [{ t: 'Olfativa y gustativa', node: 'aluc_olf' },
         { sym: '●●○', t: 'En población general, las alucinaciones diurnas distintas de las visuales y auditivas se relacionaron más con trastornos orgánicos o tóxicos (Ohayon 2000). Breve, paroxística y estereotipada: orienta a origen epiléptico [fuente no localizada].' },
         'Auras olfativas en 13 de 1423 pacientes con epilepsia focal refractaria: foco temporal mesial en todos, tumor temporal mesial en 10 y olor desagradable solo en 7 (Acharya 1998). Fantosmia (olor sin sustancia olorosa) y troposmia (olor real distorsionado) se atribuyen a alteraciones de las neuronas olfativas primarias o a señales periféricas, y muchas se resuelven solas (Leopold 2002).',
         'Epilepsia del lóbulo temporal (Acharya 1998); causas otorrinolaringológicas (Leopold 2002); esquizofrenia y trastorno delirante con delirio de envenenamiento, y depresión psicótica (Casey y Kelly 2019 [no verificada]).'],
        [{ t: 'Táctil y formicación', node: 'aluc_tact' },
         { sym: '●●○', t: 'Orienta a causa tóxica u orgánica: el consumo actual de drogas fue su mayor factor de riesgo en población general (Ohayon 2000). Formicación de inicio agudo: intoxicación por estimulantes o abstinencia [fuente no localizada].' },
         'En población general (13 057 personas) el 3,1 % refería alucinaciones hápticas, y el consumo actual de drogas era el mayor factor de riesgo (OR 9,8) (Ohayon 2000). De 55 personas ingresadas por dependencia de cocaína, 29 refirieron psicosis transitoria y, de ellas, 6 (21 %) alucinaciones táctiles, frente al 83 % auditivas y el 38 % visuales (Brady 1991).',
         'Psicosis inducida por cocaína (Brady 1991); consumo de drogas (Ohayon 2000); delirio de infestación, primario o secundario a otros cuadros: lo define la creencia fija de estar infestado, no la sensación (Freudenmann y Lepping 2009); abstinencia alcohólica y esquizofrenia [fuente no localizada].'],
        [{ t: 'Cenestésica (cenestopatía)', node: 'cenes' },
         { sym: '●○○', t: 'Inespecífica: no hay datos de especificidad para ningún trastorno [fuente no localizada].' },
         'La CIE-10 incluía la «esquizofrenia cenestopática» en F20.8 sin definirla; una revisión narrativa apoya la existencia de un subgrupo de pacientes con esquizofrenia y sensaciones corporales anómalas marcadas y dominantes (Jenkins y Röhricht 2007).',
         'Esquizofrenia (Jenkins y Röhricht 2007); depresión melancólica y síntomas básicos de las fases prodrómicas [fuente no localizada]. Exige descartar antes causas neurológicas y médicas [fuente no localizada].']
      ] });
    y = t.y + 56;

    // ---------- Bloque 3: exploración ----------
    y = F.band(y, 'Exploración: cómo preguntar', { n: 3 }) + 26;
    const CW = 530, CG = 20, cx = i => 60 + i * (CW + CG);
    const e1 = F.box('e1', { x: cx(0), y, w: CW, type: 'act', fs: FS, node: 'entrevistas', title: 'A · Antes de preguntar', text: 'Establecer nivel de conciencia, atención y orientación, y conocer el estado de la vista y del oído [fuente no localizada]. La privación sensorial y un nivel bajo de activación favorecen las alucinaciones de Charles Bonnet (Teunisse 1996).' });
    const e2 = F.box('e2', { x: cx(1), y, w: CW, type: 'act', fs: FS, title: 'B · Preguntar de forma activa y normalizadora', text: '«A veces, bajo tensión, las personas oyen o ven cosas que otras no perciben; ¿le ha ocurrido?» [fuente no localizada]. Se cuentan poco: solo 1 de 16 personas con Charles Bonnet que consultaron tenía el diagnóstico correcto (Teunisse 1996), y en la viudedad era inusual haberlas contado (Rees 1971).' });
    const e3 = F.box('e3', { x: cx(2), y, w: CW, type: 'act', fs: FS, node: 'panss', title: 'C · Describir dimensiones, no etiquetar', text: 'Cualidad sensorial, localización, juicio de realidad, control voluntario y relación con el sueño, un estímulo o un recuerdo traumático (van der Zwaard y Polak 2001). En las voces: número, localización, identidad, forma de dirigirse, desencadenantes y alivio (Nayani y David 1996). Las PSYRATS tienen fiabilidad interevaluador excelente (Haddock 1999).' });
    const e4 = F.box('e4', { x: cx(3), y, w: CW, type: 'warn', fs: FS, node: 'fpr_schneider', title: 'D · Lo que no debe omitirse', text: 'Preguntar siempre por voces que dan órdenes, su contenido y la capacidad de resistirlas, por su relación con el riesgo [fuente no localizada]. Inicio brusco, alteración de la conciencia, episodios breves y estereotipados o autoscopia de nueva aparición: valoración médica y neurológica [fuente no localizada].' });
    const eh = Math.max(e1.h, e2.h, e3.h, e4.h); [e1, e2, e3, e4].forEach(b => { b.h = eh; });
    F.arrow(e1, e2); F.arrow(e2, e3); F.arrow(e3, e4);
    y = e1.y + eh + 56;

    // ---------- Bloque 4: no patológicos ----------
    y = F.band(y, 'Experiencias perceptivas frecuentes sin trastorno mental', { n: 4 }) + 26;
    const n1 = F.box('n1', { x: cx(0), y, w: CW, type: 'info', fs: FS, node: 'cont_psic', title: 'Población general', text: 'Prevalencia vital de experiencias alucinatorias: 5,2 % en 31 261 personas adultas de 18 países; un tercio de quienes referían experiencias psicóticas solo había tenido un episodio (McGrath 2015). Entre el 75 % y el 90 % de las experiencias psicóticas del desarrollo son transitorias (van Os 2009); el 7,4 % de quienes las refieren desarrolla después un trastorno psicótico (Linscott y van Os 2013).' });
    const n2 = F.box('n2', { x: cx(1), y, w: CW, type: 'info', fs: FS, node: 'duelo', title: 'Duelo', text: 'De 227 viudas y 66 viudos entrevistados en Gales, casi la mitad había tenido alucinaciones o ilusiones del cónyuge fallecido; el autor las consideró acompañantes normales de la viudedad (Rees 1971). Una revisión sitúa la prevalencia entre el 30 % y el 60 % de las personas viudas, con estudios pequeños y métodos heterogéneos (Castelnovo 2015).' });
    const n3 = F.box('n3', { x: cx(2), y, w: CW, type: 'info', fs: FS, node: 'parasomn', title: 'Transición entre sueño y vigilia', text: 'En 4972 personas de la población general del Reino Unido, el 37 % refería alucinaciones hipnagógicas y el 12,5 % hipnopómpicas, muy por encima de lo explicable por la narcolepsia (Ohayon 1996). Parálisis del sueño alguna vez en la vida: 7,6 % de la población general y 28,3 % de estudiantes (Sharpless y Barber 2011).' });
    const n4 = F.box('n4', { x: cx(3), y, w: CW, type: 'info', fs: FS, node: 'priv_sueno', title: 'Privación de sueño', text: 'Revisión sistemática de 21 estudios en personas sanas (760 participantes): distorsiones perceptivas a las 24-48 h sin dormir, alucinaciones complejas a las 48-90 h y delirios tras 72 h; en muchos casos, aunque no en todos, se resuelven tras dormir (Waters 2018). Dato relevante tras sesiones prolongadas de consumo sin dormir [fuente no localizada].' });
    const nh = Math.max(n1.h, n2.h, n3.h, n4.h); [n1, n2, n3, n4].forEach(b => { b.h = nh; });
    y = n1.y + nh + 44;

    F.box('lim', { x: 60, y, w: W - 120, type: 'lim', align: 'left', fs: 19, title: 'Límites de la figura',
      text: 'Esquema docente, no algoritmo diagnóstico: el orden de las preguntas es una convención expositiva y un mismo fenómeno puede cumplir varias condiciones a la vez. Las distinciones clásicas (corporeidad, espacio interno o externo, juicio de realidad) proceden de la psicopatología descriptiva y no han mostrado valor para separar diagnósticos (Waters y Fernyhough 2017; van der Zwaard y Polak 2001). Las obras de Jaspers, Kandinsky, Hagen, Schneider y Esquirol se citan a través de fuentes secundarias y no se han cotejado en el original. Las cifras proceden de estudios concretos, con muestras y métodos distintos, y no son comparables entre sí. La graduación ●●○/●○○ es una síntesis cualitativa de las fichas del atlas, no una medida de sensibilidad ni de especificidad. No sustituye a la exploración clínica ni a las pruebas complementarias.' });
    F.footer('Fuentes: Waters y Fernyhough 2017 (PMID 27872259); Telles-Correia 2015 (26283978); Berrios y Dening 1996 (8817710); van der Zwaard y Polak 2001 (11154715); Waters 2016 (27358492); Waters 2014 (24936084); Waters 2018 (30042701); Ohayon 1996 (8894197); Ohayon 2000 (11166087); Sharpless y Barber 2011 (21571556); McGrath 2015 (26018466); van Os 2009 (18606047); Linscott y van Os 2013 (22850401); Rees 1971 (5096884); Castelnovo 2015 (26254619); Teunisse 1996 (8622335); McKeith 2017 (28592453); Fénelon 2000 (10734005); Acharya 1998 (9674778); Leopold 2002 (12200340); Brady 1991 (1752853); Freudenmann y Lepping 2009 (19822895); Jenkins y Röhricht 2007 (17657136); Blom 2016 (27347442); Todd 1955 (13304769); Heydrich y Blanke 2013 (23423672); Blanke 2014 (25447995); Nayani y David 1996 (8643757); Haddock 1999 (10473315). Esquema docente de apoyo; no sustituye al juicio clínico.');
    return F;
  }
};
