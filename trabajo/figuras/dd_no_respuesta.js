// Figura: diagnóstico diferencial del paciente que no responde (no habla ni obedece órdenes). Árbol de decisión.
// Compilar en prueba: node tools/fig.js dd_no_respuesta --dry --png <carpeta>
const TITLE = 'El paciente que no responde: diagnóstico diferencial de arriba abajo';
module.exports = {
  key: 'dd_no_respuesta',
  meta: {
    title: TITLE,
    kind: 'dd',
    cap: 'Árbol de decisión que se recorre de arriba abajo ante una persona que no habla ni obedece órdenes. 1) Primero, las urgencias vitales y las causas reversibles (constantes, glucemia y tiamina, fiebre y rigidez, signos de herniación, intoxicación o abstinencia). 2) Apertura ocular, ciclos de sueño y vigilia y signos de conciencia: coma, síndrome de vigilia sin respuesta y estado de mínima conciencia frente al síndrome de enclaustramiento, que no es un trastorno de la conciencia. 3) Con vigilia y conciencia conservada o fluctuante, cuatro preguntas separan el estupor catatónico y sus formas con riesgo vital (síndrome neuroléptico maligno, síndrome serotoninérgico, catatonía maligna), el delirium hipoactivo, el estado epiléptico no convulsivo, la encefalitis autoinmune y las encefalopatías metabólicas, el mutismo acinético y la abulia, y el estupor depresivo, la falta de respuesta disociativa o funcional y la simulación, que es un diagnóstico de exclusión. 4) Pruebas clave y qué aporta cada una. La catatonía tiene su propia lámina (dd_catatonia) y el delirium la suya (dd_cognitivo). Las flechas continuas indican el recorrido del árbol; cada caja con esquina negra abre su ficha. Las cajas con «!» son alarmas, las de doble borde son entidades y las redondeadas son preguntas. «[fuente no localizada]» y «[no verificada]» señalan lo que no se ha podido cotejar en una fuente primaria. Esquema docente: no es un protocolo ni sustituye al juicio clínico.',
    refs: [
      'Edlow JA, Rabinstein AA, Traub SJ & Wijdicks EFM (2014). Diagnosis of reversible causes of coma. Lancet 384:2064-2076 · PMID 24767707',
      'Silva S, Treggiari M, Citerio G et al. (2026). Stepwise clinical and diagnostic strategy for coma of unknown origin. Intensive Care Med 52:729-746 · PMID 42059919',
      'Galvin R et al. (2010). EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol 17:1408-1418 · PMID 20642790',
      'Teasdale G & Jennett B (1974). Assessment of coma and impaired consciousness. A practical scale. Lancet 2:81-84 · PMID 4136544',
      'Wijdicks EFM et al. (2005). Validation of a new coma scale: the FOUR score. Ann Neurol 58:585-593 · PMID 16178024',
      'Multi-Society Task Force on PVS (1994). Medical aspects of the persistent vegetative state (1). N Engl J Med 330:1499-1508 · PMID 7818633',
      'Giacino JT et al. (2002). The minimally conscious state: definition and diagnostic criteria. Neurology 58:349-353 · PMID 11839831',
      'Giacino JT, Kalmar K & Whyte J (2004). The JFK Coma Recovery Scale-Revised: measurement characteristics and diagnostic utility. Arch Phys Med Rehabil 85:2020-2029 · PMID 15605342',
      'Schnakers C et al. (2009). Diagnostic accuracy of the vegetative and minimally conscious state: clinical consensus versus standardized neurobehavioral assessment. BMC Neurol 9:35 · PMID 19622138',
      'Laureys S et al. (2010). Unresponsive wakefulness syndrome: a new name for the vegetative state or apallic syndrome. BMC Med 8:68 · PMID 21040571',
      'Giacino JT et al. (2018). Practice guideline update recommendations summary: disorders of consciousness. Report of the Guideline Development, Dissemination, and Implementation Subcommittee of the American Academy of Neurology; the American Congress of Rehabilitation Medicine; and the National Institute on Disability, Independent Living, and Rehabilitation Research. Neurology 91:450-460 · PMID 30089618',
      'Kondziella D et al. (2020). European Academy of Neurology guideline on the diagnosis of coma and other disorders of consciousness. Eur J Neurol 27:741-756 · PMID 32090418',
      'Schnetzer L, McCoy M, Bergmann J et al. (2023). Locked-in syndrome revisited. Ther Adv Neurol Disord 16:17562864231160873 · PMID 37006459',
      'Bush G, Fink M, Petrides G, Dowling F & Francis A (1996). Catatonia. I. Rating scale and standardized examination. Acta Psychiatr Scand 93:129-136 · PMID 8686483',
      'Bush G, Fink M, Petrides G, Dowling F & Francis A (1996). Catatonia. II. Treatment with lorazepam and electroconvulsive therapy. Acta Psychiatr Scand 93:137-143 · PMID 8686484',
      'Sienaert P, Dhossche DM, Vancampfort D, De Hert M & Gazdag G (2014). A clinical review of the treatment of catatonia. Front Psychiatry 5:181 · PMID 25538636',
      'Solmi M et al. (2018). Prevalence of catatonia and its moderators in clinical samples: results from a meta-analysis and meta-regression analysis. Schizophr Bull 44:1133-1150 · PMID 29140521',
      'Rogers JP et al. (2023). Evidence-based consensus guidelines for the management of catatonia: recommendations from the British Association for Psychopharmacology. J Psychopharmacol 37:327-369 · PMID 37039129',
      'Gurrera RJ et al. (2011). An international consensus study of neuroleptic malignant syndrome diagnostic criteria using the Delphi method. J Clin Psychiatry 72:1222-1228 · PMID 21733489',
      'Dunkley EJC, Isbister GK, Sibbritt D, Dawson AH & Whyte IM (2003). The Hunter Serotonin Toxicity Criteria: simple and accurate diagnostic decision rules for serotonin toxicity. QJM 96:635-642 · PMID 12925718',
      'Inouye SK et al. (1990). Clarifying confusion: the confusion assessment method. A new method for detection of delirium. Ann Intern Med 113:941-948 · PMID 2240918',
      'Towne AR et al. (2000). Prevalence of nonconvulsive status epilepticus in comatose patients. Neurology 54:340-345 · PMID 10668693',
      'Leitinger M et al. (2015). Salzburg Consensus Criteria for Non-Convulsive Status Epilepticus: approach to clinical application. Epilepsy Behav 49:158-163 · PMID 26092326',
      'Graus F et al. (2016). A clinical approach to diagnosis of autoimmune encephalitis. Lancet Neurol 15:391-404 · PMID 26906964',
      'Ackermann H & Ziegler W (1995). Akinetischer Mutismus: eine Literaturübersicht. Fortschr Neurol Psychiatr 63:59-67 · PMID 7705740',
      'Fusunyan M, Praschan N, Fricchione G & Beach S (2021). Akinetic mutism and coronavirus disease 2019: a narrative review. J Acad Consult Liaison Psychiatry 62:625-633 · PMID 34461295',
      'Ludwig L, McWhirter L, Williams S, Derry C & Stone J (2016). Functional coma. Handb Clin Neurol 139:313-327 · PMID 27719852',
      'Spiegel D et al. (2011). Dissociative disorders in DSM-5. Depress Anxiety 28:824-852 · PMID 21910187',
      'Bass C & Halligan P (2014). Factitious disorders and malingering: challenges for clinical assessment and management. Lancet 383:1422-1432 · PMID 24612861',
      'National Institute for Health and Care Excellence (2003, actualizada en 2009). Guidance on the use of electroconvulsive therapy. Technology appraisal guidance TA59, recomendación 1.1 (catatonía y manía; sus recomendaciones sobre la depresión fueron sustituidas por la guía de depresión)',
      'National Institute for Health and Care Excellence (2022). Depression in adults: treatment and management. NICE guideline NG222, recomendación 1.13.1',
      'American Psychiatric Association (2022). DSM-5-TR. Washington, DC: APA Publishing. Delirium (especificadores de nivel de actividad) y simulación [no verificada]'
    ],
    nodes: ['conciencia_grave', 'catatonia', 'estupor', 'mutismo_acin', 'delirium', 'nmda', 'epilepsia_psic', 'snm', 'sind_ser', 'fuga_disoc', 'simulacion', 'obnub']
  },
  draw(Fig) {
    const W = 2300;
    const F = new Fig({ key: 'dd_no_respuesta', title: TITLE, w: W,
      desc: 'Árbol de decisión en cuatro bloques ante una persona que no habla ni obedece órdenes: urgencias vitales y causas reversibles; apertura ocular y signos de conciencia (coma, vigilia sin respuesta, mínima conciencia y enclaustramiento); cuatro preguntas que separan estupor catatónico, síndromes neuroléptico maligno y serotoninérgico, catatonía maligna, delirium hipoactivo, estado epiléptico no convulsivo, encefalitis autoinmune, mutismo acinético, estupor depresivo, falta de respuesta funcional y simulación; y tabla de pruebas clave.' });
    const QX = 60, QW = 600, GX = 720, GW = 1520, GAP = 16, NC = 3, FQ = 18, FO = 17;

    // Fila: pregunta a la izquierda y grupo de resultados a la derecha (rejilla de NC columnas). Devuelve {q, bottom}.
    const row = (id, y0, q, glabel, outs, ans) => {
      let yy = y0 + 42, bottom = yy;
      for (let i = 0; i < outs.length; i += NC) {
        const line = outs.slice(i, i + NC), n = NC, w = (GW - 32 - GAP * (n - 1)) / n;
        const bs = line.map((o, k) => F.box(id + '_e' + (i + k), Object.assign({ x: GX + 16 + k * (w + GAP), y: yy, w, type: 'dx', fs: FO }, o)));
        const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; });
        yy += h + GAP; bottom = yy - GAP;
      }
      const gh = bottom + 16 - y0;
      const pre = F.box(id + '_tmp', Object.assign({ x: QX, y: y0, w: QW, type: 'q', fs: FQ }, q));
      const qh = pre.h; delete F.boxes[id + '_tmp']; F.order.pop();
      const H = Math.max(gh, qh);
      const qb = F.box(id, Object.assign({ x: QX, y: y0, w: QW, type: 'q', fs: FQ, minH: H }, q));
      F.group({ x: GX, y: y0, w: GW, h: H, label: glabel });
      F.arrow(qb, { x: GX, y: y0, w: GW, h: H }, { from: 'r', to: 'l', fa: 0.3, fb: 0.3 * qb.h / H, label: ans || 'Sí', lx: QX + QW + 8 });
      return { q: qb, bottom: y0 + H };
    };

    // ---------- Bloque 1: urgencias vitales ----------
    let y = F.band(90, 'Primero, urgencias vitales y causas reversibles (antes de cualquier diagnóstico psiquiátrico)', { n: 1 }) + 24;
    const UW = (W - 120 - 2 * 30) / 3;
    const u = [
      { node: 'conciencia_grave', title: 'Estabilizar antes de filiar', text: 'La primera prioridad es estabilizar y tratar lo que amenaza la vida; después, historia, exploración y analítica para identificar lesiones estructurales y trastornos tratables (Edlow 2014). La evaluación inicial prioriza vía aérea, respiración y circulación (Silva 2026).' },
      { node: 'hipoglucemia_psiq', title: 'Glucemia capilar', text: 'Glucemia capilar y gasometría arterial son las pruebas inmediatas a pie de cama del primer paso, y la hipoglucemia figura entre las causas reversibles que exigen tratamiento inmediato (Silva 2026). Si la TC no es diagnóstica, revisar intoxicación, infección, crisis y estado no convulsivo, endocrinopatía y déficit de tiamina (Edlow 2014).' },
      { node: 'korsakoff', title: 'Tiamina', text: 'Tiamina parenteral a toda persona en riesgo atendida en urgencias (punto de buena práctica) y, ante la sospecha de encefalopatía de Wernicke, antes de cualquier hidrato de carbono (EFNS, Galvin 2010).' },
      { node: 'cat_malig', title: 'Fiebre, rigidez o disautonomía', text: 'Pensar en síndrome neuroléptico maligno, síndrome serotoninérgico, catatonía maligna e infección del sistema nervioso: urgencias médicas (Gurrera 2011; Dunkley 2003; Rogers 2023; Edlow 2014). Detalle en el paso 3a.' },
      { node: 'tce_neuro', title: 'Signos de herniación o focalidad', text: 'Neuroimagen urgente en el coma postraumático o cuando una lesión estructural es probable o posible (Edlow 2014). La escala FOUR reconoce estadios de herniación (Wijdicks 2005).' },
      { node: 'ghb_gbl', title: 'Intoxicación o abstinencia', text: 'Buscar una intoxicación tratable (Edlow 2014). El cribado toxicológico amplio en sangre y orina incluye alcoholes, benzodiacepinas, opioides, GHB, ketamina, cocaína y anfetaminas (Silva 2026). Abstinencias graves como el delirium tremens [fuente no localizada].' }
    ];
    let ub = u.map((o, i) => F.box('u' + i, Object.assign({ x: 60 + (i % 3) * (UW + 30), y: y + Math.floor(i / 3) * 0, w: UW, type: 'warn', fs: FO }, o)));
    const h1a = Math.max(ub[0].h, ub[1].h, ub[2].h); ub.slice(0, 3).forEach(b => { b.h = h1a; });
    ub.slice(3).forEach(b => { b.y = y + h1a + 24; });
    const h1b = Math.max(ub[3].h, ub[4].h, ub[5].h); ub.slice(3).forEach(b => { b.h = h1b; });
    y += h1a + 24 + h1b + 60;
    F._grow(y);

    // ---------- Bloque 2: apertura ocular y signos de conciencia ----------
    const y2band = y;
    y = F.band(y, 'Apertura ocular, ciclos de sueño y vigilia y signos de conciencia', { n: 2 }) + 24;
    const r2 = row('q2', y,
      { node: 'obnub', title: '2 · ¿Abre los ojos? ¿Muestra algún signo de conciencia?', text: 'Dos preguntas distintas: vigilia (apertura ocular, ciclos de sueño y vigilia) y conciencia (seguimiento visual, respuesta a órdenes, comunicación). Explorar los movimientos oculares voluntarios con un espejo y, en fase subaguda y crónica, repetir la evaluación con la CRS-R (EAN, Kondziella 2020).' },
      'Trastornos de la conciencia y su gran imitador',
      [
        { node: 'conciencia_grave', title: 'Coma', text: 'Sin apertura ocular ni respuesta dirigida. Se gradúa con la escala de Glasgow (Teasdale y Jennett 1974) o, en fase aguda, con la FOUR, que la EAN sugiere preferir (Kondziella 2020).' },
        { node: 'conciencia_grave', title: 'Síndrome de vigilia sin respuesta', text: 'Ciclos de sueño y vigilia sin respuestas conductuales sostenidas, reproducibles, intencionadas o voluntarias ni comprensión o expresión del lenguaje (Multi-Society Task Force 1994). Nombre propuesto para el «estado vegetativo» (Laureys 2010).' },
        { node: 'conciencia_grave', title: 'Estado de mínima conciencia', text: 'Signos de conciencia inconsistentes pero claramente discernibles (Giacino 2002). De 44 personas diagnosticadas de estado vegetativo por consenso clínico, 18 (41 %) estaban en mínima conciencia con la CRS-R (Schnakers 2009).' },
        { type: 'warn', node: 'conciencia_grave', title: 'Síndrome de enclaustramiento: NO es un trastorno de la conciencia', text: 'Tetraplejía con movimientos oculares verticales y parpadeo conservados y cognición preservada; la variante «plus» añade alteración de la conciencia (Schnetzer 2023). Pedir siempre que mire arriba o parpadee. La FOUR lo reconoce y la Glasgow no (Wijdicks 2005).' },
        { type: 'info', title: 'Si abre los ojos y hay signos de conciencia, aunque fluctúen', text: 'No es un coma ni una vigilia sin respuesta: se pasa al bloque 3. La conciencia se clasifica según el nivel más alto revelado por la clínica, el EEG o la neuroimagen funcional (Kondziella 2020).' }
      ], 'No');
    y = r2.bottom + 70;

    // ---------- Bloque 3: conciencia conservada o fluctuante ----------
    const b3 = F.band(y, 'Vigil, con conciencia conservada o fluctuante: cuatro preguntas (se exploran todas)', { n: 3 }) + 24;
    const y3 = y;
    y = b3;
    const r3a = row('q3a', y,
      { node: 'catatonia', title: '3a · ¿Signos catatónicos en la exploración estandarizada?', text: 'Exploración de Bush-Francis: mirada fija, mutismo, negativismo, catalepsia, flexibilidad cérea, posturas, ecofenómenos. Escala de 23 ítems y cribado de 14; fiabilidad interevaluador de 0,93 para la puntuación total (Bush 1996a).' },
      'Catatonía y sus formas con riesgo vital (lámina propia: dd_catatonia)',
      [
        { node: 'estupor', title: 'Estupor catatónico', text: 'Prueba de lorazepam: los signos se resolvieron en 16 de 21 personas (76 %) con un ensayo completo, y la respuesta a la prueba parenteral inicial predijo la respuesta final (Bush 1996b). Benzodiacepinas y TEC: abundante evidencia clínica, pocos ensayos (Sienaert 2014).' },
        { node: 'catatonia', title: 'Catatonía de causa médica', text: 'Prevalencia media de catatonía del 9,0 % en muestras clínicas y del 20,6 % con enfermedad médica o neurológica sin trastorno psiquiátrico (Solmi 2018): los signos catatónicos no excluyen una causa orgánica.' },
        { type: 'warn', node: 'cat_malig', title: 'Catatonía maligna', text: 'Catatonía complicada con fiebre y alteraciones autonómicas, potencialmente mortal (Sienaert 2014). Suele ser clínicamente indistinguible del SNM; en la catatonía maligna se retiran todos los antagonistas dopaminérgicos (BAP, Rogers 2023).' },
        { type: 'warn', node: 'snm', title: 'Síndrome neuroléptico maligno', text: 'Criterios de consenso: exposición a un antagonista dopaminérgico o retirada de un agonista, hipertermia (>38 °C en dos ocasiones), rigidez, alteración del estado mental, CK al menos 4 veces el límite superior, labilidad simpática y estudio negativo de otras causas (Gurrera 2011).' },
        { type: 'warn', node: 'sind_ser', title: 'Síndrome serotoninérgico', text: 'Tras un fármaco serotoninérgico: clonus inducible, espontáneo u ocular, agitación, diaforesis, temblor e hiperreflexia; hipertonía y temperatura >38 °C en las formas graves (criterios de Hunter, Dunkley 2003).' }
      ]);
    y = r3a.bottom + 50;
    const r3b = row('q3b', y,
      { node: 'delirium', title: '3b · ¿Fluctuación, inatención o fenómenos motores sutiles?', text: 'Inicio agudo, curso fluctuante e inatención (Inouye 1990) o fenómenos clínicos sutiles (Leitinger 2015). El estado no convulsivo puede ser clínicamente indistinguible de la catatonía y el delirium puede coexistir con ella: EEG y estudio médico aunque haya signos catatónicos (BAP, Rogers 2023).' },
      'Encefalopatías y crisis (delirium: lámina propia dd_cognitivo)',
      [
        { node: 'delirium', title: 'Delirium hipoactivo', text: 'El algoritmo CAM exige inicio agudo con curso fluctuante e inatención, más pensamiento desorganizado o alteración del nivel de conciencia (Inouye 1990). El DSM-5-TR especifica el nivel de actividad: hiperactivo, hipoactivo o mixto [no verificada].' },
        { node: 'epilepsia_psic', title: 'Estado epiléptico no convulsivo', text: 'De 236 personas en coma sin signos clínicos de crisis, el 8 % cumplía criterios EEG de estado no convulsivo (Towne 2000). Criterios de Salzburgo: más de 2,5 descargas/s, o menos (o actividad delta/theta rítmica) con mejoría clínica y EEG tras antiepilépticos, fenómenos clínicos sutiles o evolución espaciotemporal típica (Leitinger 2015).' },
        { node: 'nmda', title: 'Encefalitis autoinmune', text: 'Posible: inicio subagudo (menos de 3 meses) de déficit de memoria de trabajo, alteración del estado mental o síntomas psiquiátricos, con un hallazgo de apoyo y exclusión razonable de otras causas. Anti-NMDAR probable: 4 de 6 grupos (conducta anormal o disfunción cognitiva, habla alterada o mutismo, crisis, trastorno del movimiento o posturas anómalas, descenso de conciencia, disautonomía) más EEG o LCR anormales (Graus 2016).' },
        { node: 'enc_hep', title: 'Encefalopatías metabólicas, tóxicas o carenciales', text: 'Intoxicaciones, infecciones, endocrinopatías y déficit de tiamina forman la lista de causas tratables que se revisa cuando la TC no es diagnóstica (Edlow 2014).' }
      ]);
    y = r3b.bottom + 50;
    const r3c = row('q3c', y,
      { node: 'mutismo_acin', title: '3c · ¿Mira y sigue con los ojos, pero no inicia movimiento ni habla, sin negativismo?', text: 'La abulia responde a estímulos externos; en el mutismo acinético un estímulo brusco puede devolver por un momento el movimiento y el habla («efecto teléfono»), sin alteración emocional (BAP, Rogers 2023). Si comunica con la mirada vertical o el parpadeo, volver al enclaustramiento.' },
      'Trastornos de la iniciativa por lesión frontosubcortical',
      [
        { node: 'mutismo_acin', title: 'Mutismo acinético y abulia grave', text: 'Falta de respuesta con vigilancia aparentemente conservada (término de Cairns, 1941, citado por Ackermann y Ziegler 1995). Trastorno de la motivación por interrupción de los circuitos frontosubcorticales de la conducta dirigida a metas (Fusunyan 2021).' },
        { node: 'apatia', title: 'Lesiones que buscar en la RM', text: 'Lesiones frontales bilaterales o mesodiencefálicas de diversa etiología; Ackermann y Ziegler (1995) proponen reservar el término para la activación motora reducida por lesión frontal bilateral. La BAP agrupa abulia, pérdida de autoactivación y mutismo acinético como trastornos de la motivación (Rogers 2023).' },
        { node: 'mutismo', title: 'Otros mutismos', text: 'En la afasia y la anartria se conserva la función motora, y en la anartria también el lenguaje escrito; en el mutismo selectivo la comunicación es fluida en ciertos contextos (BAP, Rogers 2023). El mutismo acinético figura en el diferencial del enclaustramiento (Schnetzer 2023).' }
      ]);
    y = r3c.bottom + 50;
    const r3d = row('q3d', y,
      { title: '3d · ¿Exploración neurológica normal, con contexto afectivo, traumático o de incentivo externo?', text: 'En el coma, las causas psiquiátricas son raras frente a las lesiones estructurales y la disfunción neuronal difusa (Edlow 2014). Se llega aquí tras haber explorado los pasos anteriores.' },
      'Estupor de causa psiquiátrica y diagnóstico de exclusión',
      [
        { node: 'emel', title: 'Estupor depresivo o melancólico', text: 'Figura entre los estados de falta de respuesta con factores psicológicos (Ludwig 2016), y la catatonía se ha descrito asociada a la depresión (BAP, Rogers 2023). NICE propone considerar la TEC en la depresión grave si se necesita una respuesta rápida, p. ej. si no come ni bebe (NG222, 1.13.1), y en la catatonía (TA59, 1.1).' },
        { node: 'conv', title: 'Falta de respuesta disociativa o funcional', text: 'Mejor diagnosticarla por signos positivos de incongruencia que solo por exclusión: hay cierta evidencia a favor de la resistencia firme a la apertura palpebral y de la mirada que se dirige al suelo al girar a la persona de lado. No se recomiendan estímulos dolorosos repetidos (Ludwig 2016).' },
        { node: 'fuga_disoc', title: 'Otros cuadros disociativos', text: 'Spiegel (2011) propuso que la fuga disociativa (viaje o vagabundeo con amnesia de la identidad) pasara a ser un subtipo de la amnesia disociativa en el DSM-5. El estupor depresivo, la catatonía y los cuadros facticios entran en el mismo diferencial (Ludwig 2016).' },
        { node: 'simulacion', title: 'Simulación: diagnóstico de exclusión', text: 'Producción intencionada por incentivos externos; no es un trastorno mental (DSM-5-TR [no verificada]). Las pruebas de validez de síntomas necesitan evidencia convergente y la habilidad clínica sola no suele bastar (Bass y Halligan 2014).' }
      ]);
    F.arrow(r2.q, r3a.q, { from: 'b', to: 't', label: 'Sí: ojos abiertos y signos de conciencia', lx: QX + QW / 2 + 10, ly: y3 - 20 });
    F.arrow(r3a.q, r3b.q, { from: 'b', to: 't', label: 'y también' });
    F.arrow(r3b.q, r3c.q, { from: 'b', to: 't', label: 'y también' });
    F.arrow(r3c.q, r3d.q, { from: 'b', to: 't', label: 'y también' });
    y = r3d.bottom + 70;

    // ---------- Bloque 4: pruebas clave ----------
    y = F.band(y, 'Pruebas clave: qué aporta cada una', { n: 4 }) + 20;
    const t = F.table({ x: 60, y, fs: 17, cols: [{ w: 400, label: 'Prueba' }, { w: 1780, label: 'Qué aporta (fuente)' }], rows: [
      [{ t: 'Escala de Glasgow', node: 'obnub' }, 'Medida operativa clásica del coma: apertura ocular, respuesta verbal y respuesta motora (Teasdale y Jennett 1974). No puntúa el componente verbal en la persona intubada ni explora el tronco (Wijdicks 2005).'],
      [{ t: 'Escala FOUR', node: 'conciencia_grave' }, 'Cuatro componentes (ojos, motor, tronco, respiración) de 0 a 4; fiabilidad similar a la Glasgow, reconoce el enclaustramiento y los estadios de herniación (Wijdicks 2005). La EAN sugiere usarla en lugar de la Glasgow en fase aguda (Kondziella 2020).'],
      [{ t: 'CRS-R (Coma Recovery Scale-Revised)', node: 'conciencia_grave' }, 'Fiabilidad interevaluador y test-retest altas; distinguió a 10 personas en mínima conciencia mal clasificadas como en estado vegetativo (Giacino 2004). Tratar los factores de confusión, optimizar la vigilia y repetir evaluaciones estandarizadas (AAN, Giacino 2018).'],
      [{ t: 'Bush-Francis y prueba de lorazepam', node: 'lorazepam' }, 'Exploración estandarizada de la catatonía (Bush 1996a). La respuesta a la prueba parenteral inicial de lorazepam predijo la respuesta final al tratamiento (Bush 1996b). Esta lámina no recoge pautas.'],
      [{ t: 'EEG', node: 'epilepsia_psic' }, 'Imprescindible para el estado no convulsivo, incluso sin signos clínicos de crisis (Towne 2000; Leitinger 2015). En los trastornos de la conciencia, EEG estándar y búsqueda de patrones de sueño (Kondziella 2020).'],
      [{ t: 'TC y RM', node: 'korsakoff' }, 'Neuroimagen en el coma postraumático o si la lesión estructural es probable o posible (Edlow 2014). La RM apoya el diagnóstico de encefalopatía de Wernicke (Galvin 2010), forma parte de los criterios de encefalitis autoinmune (Graus 2016) y permite buscar las lesiones frontales bilaterales o mesodiencefálicas descritas en el mutismo acinético (Ackermann y Ziegler 1995).'],
      [{ t: 'Punción lumbar', node: 'psicosis_causa_conocida' }, 'Pilar del estudio del coma de origen desconocido cuando se sospecha infección o inflamación del sistema nervioso, si es segura (Silva 2026). La pleocitosis (más de 5 células/mm³) es uno de los hallazgos de apoyo de la encefalitis autoinmune posible (Graus 2016).'],
      [{ t: 'Tóxicos y analítica', node: 'enc_hep' }, 'Glucemia capilar y gasometría a pie de cama, analítica urgente (función renal y hepática, hemograma, coagulación, hemocultivos) y cribado toxicológico amplio en sangre y orina (Silva 2026); endocrinopatías e intoxicaciones tratables (Edlow 2014). CK al menos 4 veces el límite superior en los criterios de SNM (Gurrera 2011).']
    ] });
    y = t.y + 40;

    // ---------- Cierre: otras láminas y límites ----------
    const CW = (W - 120 - 30) / 2;
    const c1 = F.box('otras', { x: 60, y, w: CW, type: 'info', fs: 18, align: 'left', node: 'cam', title: 'Láminas relacionadas',
      text: 'La catatonía tiene su propia lámina (dd_catatonia) y el delirium la suya (dd_cognitivo). Esta caja abre la ficha de los instrumentos de detección del delirium (CAM y 4AT). Los pasos 3a-3d no son excluyentes: una misma persona puede cumplir varios.' });
    const c2 = F.box('lim', { x: 60 + CW + 30, y, w: CW, type: 'lim', fs: 18, align: 'left', title: 'Límites de este esquema',
      text: 'Esquema docente: no es un protocolo ni sustituye al juicio clínico. Varias entidades coexisten (catatonía con delirium, encefalitis o SNM). Las definiciones de los trastornos de la conciencia son de consenso y se apoyan en evidencia limitada (Giacino 2002; Kondziella 2020). No se indican dosis.' });
    const hc = Math.max(c1.h, c2.h); c1.h = c2.h = hc;

    F.footer('Fuentes: Edlow 2014; Silva 2026; Galvin 2010 (EFNS); Teasdale y Jennett 1974; Wijdicks 2005; Multi-Society Task Force 1994; Giacino 2002, 2004 y 2018 (AAN); Schnakers 2009; Laureys 2010; Kondziella 2020 (EAN); Schnetzer 2023; Bush 1996a y 1996b; Sienaert 2014; Solmi 2018; Rogers 2023 (BAP); Gurrera 2011; Dunkley 2003; Inouye 1990; Towne 2000; Leitinger 2015; Graus 2016; Ackermann y Ziegler 1995; Fusunyan 2021; Ludwig 2016; Spiegel 2011; Bass y Halligan 2014; NICE TA59 y NG222; DSM-5-TR. Referencias completas en la ficha de la figura. Esquema docente: no sustituye a la valoración clínica individual.');
    return F;
  }
};
