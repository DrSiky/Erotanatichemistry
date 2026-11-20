// Figura: psicodelicos, entactogenos, disociativos e ibogaina: diana receptorial, modelos, ensayos clave, riesgos e interacciones, y estado regulatorio.
// Farmacologia clinica para profesionales sanitarios. Sin dosis, vias, preparacion ni indicaciones de uso.
// Compilar en prueba: node tools/fig.js circ_psicodelicos --dry --png <carpeta>
const TITLE = 'Psicodelicos y disociativos: mecanismos, ensayos clave, riesgos y estado regulatorio';
module.exports = {
  key: 'circ_psicodelicos',
  meta: {
    title: TITLE,
    kind: 'circ',
    cap: 'Esquema de farmacologia clinica en cuatro bloques. 1) Cuatro familias de sustancias (psicodelicos clasicos, MDMA, ketamina y esketamina, ibogaina y agonistas kappa): diana receptorial, hipotesis de mecanismo con su nivel de evidencia (muchas proceden de modelos celulares o animales) y efectos agudos descritos en estudios con personas. 2) Ensayos clinicos clave con su resultado principal y sus matices: el ensayo de psilocibina frente a escitalopram no mostro diferencia en la variable principal, y el enmascaramiento y la expectativa limitan la interpretacion de todos ellos. 3) Riesgos, interacciones peligrosas con psicofarmacos y principios de manejo de las complicaciones. 4) Estado regulatorio segun fuentes oficiales (CIMA-AEMPS, ficha tecnica de Spravato, Drugs@FDA y carta de respuesta completa de la FDA via openFDA); para Australia la fuente es una revision porque la web de la TGA no fue accesible. No incluye dosis, vias ni pautas. "[fuente no localizada]" señala lo razonable sin fuente primaria cotejada.',
    refs: [
      'Nichols DE (2016). Psychedelics. Pharmacol Rev 68:264-355 · PMID 26841800',
      'Vollenweider FX et al. (1998). Psilocybin induces schizophrenia-like psychosis in humans via a serotonin-2 agonist action. Neuroreport 9:3897-3902 · PMID 9875725',
      'Preller KH et al. (2017). The fabric of meaning and subjective effects in LSD-induced states depend on serotonin 2A receptor activation. Curr Biol 27:451-457 · PMID 28132813',
      'Carhart-Harris RL & Friston KJ (2019). REBUS and the anarchic brain: toward a unified model of the brain action of psychedelics. Pharmacol Rev 71:316-344 · PMID 31221820',
      'Carhart-Harris RL et al. (2012). Neural correlates of the psychedelic state as determined by fMRI studies with psilocybin. Proc Natl Acad Sci U S A 109:2138-2143 · PMID 22308440',
      'Ly C et al. (2018). Psychedelics promote structural and functional neural plasticity. Cell Rep 23:3170-3182 · PMID 29898390',
      'Moliner R et al. (2023). Psychedelics promote plasticity by directly binding to BDNF receptor TrkB. Nat Neurosci 26:1032-1041 · PMID 37280397',
      'Riba J et al. (2003). Human pharmacology of ayahuasca: subjective and cardiovascular effects, monoamine metabolite excretion, and pharmacokinetics. J Pharmacol Exp Ther 306:73-83 · PMID 12660312',
      'Rudnick G & Wall SC (1992). The molecular mechanism of "ecstasy" [3,4-methylenedioxy-methamphetamine (MDMA)]: serotonin transporters are targets for MDMA-induced serotonin release. Proc Natl Acad Sci U S A 89:1817-1821 · PMID 1347426',
      'Green AR et al. (2003). The pharmacology and clinical pharmacology of 3,4-methylenedioxymethamphetamine (MDMA, "ecstasy"). Pharmacol Rev 55:463-508 · PMID 12869661',
      'Kirkpatrick MG et al. (2014). Plasma oxytocin concentrations following MDMA or intranasal oxytocin in humans. Psychoneuroendocrinology 46:23-31 · PMID 24882155',
      'Krystal JH et al. (1994). Subanesthetic effects of the noncompetitive NMDA antagonist, ketamine, in humans: psychotomimetic, perceptual, cognitive, and neuroendocrine responses. Arch Gen Psychiatry 51:199-214 · PMID 8122957',
      'Berman RM et al. (2000). Antidepressant effects of ketamine in depressed patients. Biol Psychiatry 47:351-354 · PMID 10686270',
      'Li N et al. (2010). mTOR-dependent synapse formation underlies the rapid antidepressant effects of NMDA antagonists. Science 329:959-964 · PMID 20724638',
      'Zanos P et al. (2016). NMDAR inhibition-independent antidepressant actions of ketamine metabolites. Nature 533:481-486 · PMID 27144355',
      'Williams NR et al. (2018). Attenuation of antidepressant effects of ketamine by opioid receptor antagonism. Am J Psychiatry 175:1205-1215 · PMID 30153752',
      'Litjens RPW & Brunt TM (2016). How toxic is ibogaine? Clin Toxicol (Phila) 54:297-302 · PMID 26807959',
      'Roth BL et al. (2002). Salvinorin A: a potent naturally occurring nonnitrogenous kappa opioid selective agonist. Proc Natl Acad Sci U S A 99:11934-11939 · PMID 12192085',
      'Koenig X et al. (2014). Anti-addiction drug ibogaine inhibits hERG channels: a cardiac arrhythmia risk. Addict Biol 19:237-239 · PMID 22458604',
      'Alper K et al. (2016). hERG blockade by iboga alkaloids. Cardiovasc Toxicol 16:14-22 · PMID 25636206',
      'Alper KR, Stajic M & Gill JR (2012). Fatalities temporally associated with the ingestion of ibogaine. J Forensic Sci 57:398-412 · PMID 22268458',
      'Cherian KN et al. (2024). Magnesium-ibogaine therapy in veterans with traumatic brain injuries. Nat Med 30:373-381 · PMID 38182784',
      'Carhart-Harris R et al. (2021). Trial of psilocybin versus escitalopram for depression. N Engl J Med 384:1402-1411 · PMID 33852780',
      'Goodwin GM et al. (2022). Single-dose psilocybin for a treatment-resistant episode of major depression. N Engl J Med 387:1637-1648 · PMID 36322843',
      'Raison CL et al. (2023). Single-dose psilocybin treatment for major depressive disorder: a randomized clinical trial. JAMA 330:843-853 · PMID 37651119',
      'Palhano-Fontes F et al. (2019). Rapid antidepressant effects of the psychedelic ayahuasca in treatment-resistant depression: a randomized placebo-controlled trial. Psychol Med 49:655-663 · PMID 29903051',
      'Mitchell JM et al. (2021). MDMA-assisted therapy for severe PTSD: a randomized, double-blind, placebo-controlled phase 3 study. Nat Med 27:1025-1033 · PMID 33972795',
      'Mitchell JM et al. (2023). MDMA-assisted therapy for moderate to severe PTSD: a randomized, placebo-controlled phase 3 trial. Nat Med 29:2473-2480 · PMID 37709999',
      'Popova V et al. (2019). Efficacy and safety of flexibly dosed esketamine nasal spray combined with a newly initiated oral antidepressant in treatment-resistant depression: a randomized double-blind active-controlled study. Am J Psychiatry 176:428-438 · PMID 31109201',
      'Muthukumaraswamy SD, Forsyth A & Lumley T (2021). Blinding and expectancy confounds in psychedelic randomized controlled trials. Expert Rev Clin Pharmacol 14:1133-1152 · PMID 34038314',
      'Vallersnes OM et al. (2016). Psychosis associated with acute recreational drug toxicity: a European case series. BMC Psychiatry 16:293 · PMID 27538886',
      'Halpern JH, Lerner AG & Passie T (2018). A review of hallucinogen persisting perception disorder (HPPD) and an exploratory study of subjects claiming symptoms of HPPD. Curr Top Behav Neurosci 36:333-360 · PMID 27822679',
      'Boyer EW & Shannon M (2005). The serotonin syndrome. N Engl J Med 352:1112-1120 · PMID 15784664',
      'Nayak SM et al. (2021). Classic psychedelic coadministration with lithium, but not lamotrigine, is associated with seizures: an analysis of online psychedelic experience reports. Pharmacopsychiatry 54:240-245 · PMID 34348413',
      'Hartung TK et al. (2002). Hyponatraemic states following 3,4-methylenedioxymethamphetamine (MDMA, "ecstasy") ingestion. QJM 95:431-437 · PMID 12096147',
      'Rothman RB et al. (2000). Evidence for possible involvement of 5-HT2B receptors in the cardiac valvulopathy associated with fenfluramine and other serotonergic medications. Circulation 102:2836-2841 · PMID 11104741',
      'Droogmans S et al. (2007). Possible association between 3,4-methylenedioxymethamphetamine abuse and valvular heart disease. Am J Cardiol 100:1442-1445 · PMID 17950805',
      'Tagen M et al. (2023). The risk of chronic psychedelic and MDMA microdosing for valvular heart disease. J Psychopharmacol 37:876-890 · PMID 37572027',
      'Nutt DJ et al. (2026). The Australia story: current status and future challenges for the clinical applications of psychedelics. Br J Pharmacol 183:4048-4057 · PMID 39701143',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha tecnica de Spravato 28 mg solucion para pulverizacion nasal (nº de registro 1191410001; autorizacion UE 18/12/2019), secciones 4.1, 4.3, 4.4 y 4.5. Agencia Española de Medicamentos y Productos Sanitarios',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha tecnica de Ketolar 50 mg/ml solucion inyectable (nº de registro 47034), seccion 4.1 (indicacion anestesica). Busquedas por principio activo sin resultados para psilocibina, midomafetamina, ibogaina, lisergida, dimetiltriptamina y mescalina',
      'U.S. Food and Drug Administration (2019). Drugs@FDA: Spravato (esketamina), NDA 211243, aprobacion original del 5/3/2019. Consultado via openFDA (api.fda.gov/drug/drugsfda) en noviembre de 2026',
      'U.S. Food and Drug Administration, CDER (2024). Complete response letter, NDA 215455 (midomafetamine capsules, Lykos Therapeutics), 8/8/2024. Consultada via openFDA (api.fda.gov/transparency/crl) en noviembre de 2026',
      'World Health Organization (2026; consulta). CIE-11 para estadisticas de mortalidad y morbilidad: 6C49 (trastornos por uso de alucinogenos), 6C4C (MDMA o drogas relacionadas), 6C4D (drogas disociativas, incluidas ketamina y fenciclidina). icd.who.int'
    ],
    nodes: ['alucinogenos', 'psilocib', 'psicodel_5ht2a', 'ketamina', 'esketamina', 'ketamina_rec', 'pred_coding', 'red_danos']
  },
  draw(Fig) {
    const W = 2300, X = 60, FW = W - 2 * X;
    const F = new Fig({ key: 'circ_psicodelicos', title: TITLE, w: W,
      desc: 'Cuatro familias de sustancias con su diana receptorial, hipotesis de mecanismo y efectos agudos; tabla de ensayos clinicos clave; riesgos, interacciones con psicofarmacos y principios de manejo; tabla de estado regulatorio con fuentes oficiales; limites.' });

    let y = 92;
    y = F.text(X, y, 'Esquema de farmacologia clinica para profesionales sanitarios. Cada columna se lee de arriba abajo: diana receptorial, hipotesis de mecanismo (con su nivel de evidencia) y efectos agudos descritos en personas. No contiene dosis, vias, preparacion ni indicaciones de uso. La flecha diagonal abre la ficha del atlas.', { fs: 20, w: FW }) + 10;

    // Bloque 1: cuatro familias en columnas
    y = F.band(y, 'Cuatro familias: diana receptorial, hipotesis de mecanismo y efectos agudos', { n: 1 }) + 20;
    const CW = 530, GAP = (FW - 4 * CW) / 3, FS = 18;
    const cx = i => X + i * (CW + GAP);
    const col = (i, head, diana, mec, efec) => {
      let yy = y;
      const a = F.box(head.id, Object.assign({ x: cx(i), y: yy, w: CW, type: 'drug', fs: FS }, head)); yy = a.y + a.h + 16;
      const b = F.box(head.id + '_d', Object.assign({ x: cx(i), y: yy, w: CW, type: 'mec', fs: FS, align: 'left' }, diana)); yy = b.y + b.h + 16;
      const c = F.box(head.id + '_m', Object.assign({ x: cx(i), y: yy, w: CW, type: 'info', fs: FS, align: 'left' }, mec)); yy = c.y + c.h + 16;
      const d = F.box(head.id + '_e', Object.assign({ x: cx(i), y: yy, w: CW, type: 'info', fs: FS, align: 'left' }, efec)); yy = d.y + d.h;
      F.arrow(a, b, { from: 'b', to: 't' }); F.arrow(b, c, { from: 'b', to: 't' }); F.arrow(c, d, { from: 'b', to: 't' });
      return yy;
    };

    const b1 = col(0,
      { id: 'c_clas', node: 'alucinogenos', title: 'Psicodelicos clasicos', text: 'Psilocibina, LSD, DMT (ayahuasca) y mescalina' },
      { node: 'psicodel_5ht2a', title: 'Diana: agonismo 5-HT2A cortical', text: 'Agonistas o agonistas parciales del receptor 5-HT2A, con especial relevancia en las piramidales de capa V (Nichols 2016).' },
      { title: 'Mecanismo (hipotesis)', text: 'El bloqueo con ketanserina (antagonista 5-HT2A) suprime los efectos de la psilocibina (Vollenweider 1998) y de la LSD (Preller 2017): evidencia en personas. El modelo REBUS propone que relajan las creencias previas de alto nivel elevando la entropia cortical (Carhart-Harris 2019): marco teorico. Plasticidad via TrkB y mTOR en modelos celulares y animales (Ly 2018; Moliner 2023).' },
      { title: 'Efectos agudos (en personas)', text: 'Cambios perceptivos y del yo, afecto intensificado; descenso de flujo y conectividad en nodos de la red por defecto, proporcional a la intensidad subjetiva (Carhart-Harris 2012). Ayahuasca: aumento leve de presion diastolica (Riba 2003).' });

    const b2 = col(1,
      { id: 'c_mdma', node: 'alucinogenos', title: 'Entactogeno: MDMA', text: '3,4-metilendioximetanfetamina' },
      { title: 'Diana: liberacion de serotonina', text: 'Invierte el transportador de serotonina (SERT) y el vesicular y provoca liberacion de serotonina, y tambien de dopamina (Rudnick 1992; Green 2003).' },
      { title: 'Mecanismo (hipotesis)', text: 'El efecto prosocial se ha atribuido a oxitocina: la MDMA eleva la oxitocina plasmatica (Kirkpatrick 2014), pero la respuesta subjetiva no se correlaciono con ese nivel (hipotesis parcial). En animales hay perdida duradera de terminales serotoninergicos; en personas la neurotoxicidad es equivoca (Green 2003).' },
      { title: 'Efectos agudos (en personas)', text: 'Euforia, sociabilidad y activacion; aumento de frecuencia cardiaca y presion arterial dependiente de dosis (Kirkpatrick 2014). Riesgo de hipertermia e hiponatremia (bloque 3).' });

    const b3 = col(2,
      { id: 'c_ket', node: 'ketamina', title: 'Disociativos: ketamina y esketamina', text: 'Ketamina racemica; esketamina (enantiomero S)' },
      { node: 'ketamina_rec', title: 'Diana: antagonismo NMDA', text: 'Antagonistas no competitivos del receptor glutamatergico NMDA (Krystal 1994).' },
      { title: 'Mecanismo (hipotesis)', text: 'Efecto antidepresivo rapido ya descrito con ketamina IV (Berman 2000). Hipotesis de sinaptogenesis: activacion de mTOR y formacion de espinas en corteza prefrontal (Li 2010, en roedores). Metabolitos (2R,6R)-HNK con accion antidepresiva independiente de NMDA en raton (Zanos 2016). La naltrexona atenuo el efecto antidepresivo, no el disociativo: posible papel del sistema opioide (Williams 2018).' },
      { title: 'Efectos agudos (en personas)', text: 'Sintomas disociativos y perceptivos, sedacion, nausea y aumento transitorio de la presion arterial (Krystal 1994; ficha de Spravato 4.8). A dosis subanestesicas, sintomas tipo esquizofrenia (Krystal 1994).' });

    const b4 = col(3,
      { id: 'c_ibo', node: 'alucinogenos', title: 'Ibogaina y agonistas kappa', text: 'Ibogaina (Tabernanthe iboga); salvinorina A (Salvia divinorum)' },
      { title: 'Diana multiple / kappa-opioide', text: 'Ibogaina y noribogaina: afinidad micromolar por NMDA, opioides kappa/mu y sigma-2 (Litjens 2016). Salvinorina A: agonista kappa selectivo, sin accion 5-HT2A (Roth 2002).' },
      { title: 'Mecanismo (hipotesis)', text: 'La salvinorina A muestra que no todo efecto alucinatorio pasa por 5-HT2A: la via kappa produce distorsiones perceptivas (Roth 2002). La ibogaina interesa en adiccion, pero con señal de cardiotoxicidad y evidencia clinica muy limitada (bloque 3).' },
      { title: 'Efectos agudos (en personas)', text: 'Ibogaina: estado oniroide prolongado; en una serie observacional de 30 veteranos con lesion cerebral traumatica se asociaron mejoras funcionales, con magnesio para mitigar el riesgo cardiaco (Cherian 2024, estudio abierto sin grupo control).' });

    y = Math.max(b1, b2, b3, b4) + 28;

    // Bloque 2: ensayos clave
    y = F.band(y, 'Ensayos clinicos clave: resultado principal y matices', { n: 2 }) + 16;
    const t2 = F.table({ x: X, y, fs: 17.5,
      cols: [
        { w: 250, label: 'Sustancia' },
        { w: 420, label: 'Ensayo y diseño' },
        { w: 320, label: 'Poblacion' },
        { w: 560, label: 'Resultado principal' },
        { w: 630, label: 'Matices y limitaciones' }
      ],
      rows: [
        [{ t: 'Psilocibina', node: 'psilocib' },
          'Goodwin 2022 (NEJM), fase 2 doble ciego, dosis unica 25/10/1 mg con apoyo psicologico',
          'Depresion resistente (n=233)',
          'A 3 semanas, MADRS -12,0 (25 mg) frente a -5,4 (1 mg); diferencia -6,6 (IC 95% -10,2 a -2,9; p<0,001).',
          'La respuesta sostenida a 12 semanas no fue concluyente. Eventos adversos en el 77%; ideacion o conducta suicida en todos los grupos de dosis (Goodwin 2022).'],
        [{ t: 'Psilocibina', node: 'psilocib' },
          'Raison 2023 (JAMA), fase 2 doble ciego, dosis unica 25 mg frente a niacina',
          'Trastorno depresivo mayor (n=104)',
          'MADRS a dia 43: diferencia -12,3 (IC 95% -17,5 a -7,2; p<0,001) a favor de psilocibina.',
          'Mas respuesta sostenida, pero no mas remision que niacina; mas eventos adversos y mas graves con psilocibina; sin eventos adversos graves emergentes (Raison 2023).'],
        [{ t: 'Psilocibina vs ISRS', node: 'psilocib' },
          'Carhart-Harris 2021 (NEJM), fase 2 doble ciego, psilocibina frente a escitalopram',
          'Depresion moderada-grave (n=59)',
          'En la variable principal (QIDS-SR-16 a 6 semanas) NO hubo diferencia significativa (-8,0 vs -6,0; p=0,17).',
          'Las variables secundarias favorecieron a psilocibina, pero sin correccion por comparaciones multiples: no concluyentes (Carhart-Harris 2021).'],
        [{ t: 'Ayahuasca (DMT)', node: 'alucinogenos' },
          'Palhano-Fontes 2019 (Psychol Med), ECA doble ciego controlado con placebo, dosis unica',
          'Depresion resistente (n=29)',
          'MADRS mas baja que placebo a dia 7 (p<0,0001); respuesta 64% vs 27% (p=0,04).',
          'Muestra pequeña; remision solo con tendencia a significacion (36% vs 7%; p=0,054) (Palhano-Fontes 2019).'],
        [{ t: 'MDMA', node: 'alucinogenos' },
          'Mitchell 2021 y 2023 (Nat Med), fase 3 doble ciego, terapia asistida con MDMA frente a placebo con terapia',
          'TEPT grave (2021, n=90) y moderado-grave (2023, n=104)',
          'Reduccion significativa del CAPS-5 (2021: p<0,0001, d=0,91; 2023: p<0,001, d=0,7) y de la discapacidad.',
          'A pesar de estos datos, la FDA no aprobo la MDMA (bloque 4). Enmascaramiento muy dificil por los efectos perceptibles del farmaco (Muthukumaraswamy 2021).'],
        [{ t: 'Esketamina intranasal', node: 'esketamina' },
          'Popova 2019 (Am J Psychiatry), fase 3 doble ciego con comparador activo, mas antidepresivo oral',
          'Depresion resistente (n=227)',
          'A dia 28, mayor descenso de MADRS que antidepresivo mas placebo nasal (diferencia -4,0; IC 95% -7,31 a -0,64).',
          'Disociacion, nausea, vertigo y mareo mas frecuentes; aparicion poco despues de la dosis y resolucion habitual en torno a 1,5 h (Popova 2019).']
      ] });
    y = t2.y + 14;
    y = F.text(X, y + 12, 'Nota transversal de interpretacion: en los ensayos con psicodelicos y MDMA el doble ciego es fragil, porque los efectos perceptibles permiten adivinar la asignacion; la expectativa puede inflar el tamaño del efecto, y pocos ensayos han medido estos factores (Muthukumaraswamy 2021). Todas las sustancias de la tabla, salvo la esketamina, siguen en investigacion.', { fs: 18, w: FW }) + 22;

    // Bloque 3: riesgos, interacciones y manejo
    y = F.band(y, 'Riesgos, interacciones peligrosas con psicofarmacos y principios de manejo', { n: 3 }) + 18;
    const RW = (FW - 2 * 30) / 3;
    const rc = i => X + i * (RW + 30);
    const y3 = y;
    const r1 = F.box('r_psi', { x: rc(0), y: y3, w: RW, type: 'warn', fs: FS, align: 'left',
      title: 'Psicosis, HPPD y cuadro agudo', text: 'La toxicidad aguda por alucinogenos puede cursar con psicosis: en una serie europea de urgencias, 20,9% de las presentaciones por LSD y 18,8% por setas con psilocibina (Vallersnes 2016). El trastorno perceptivo persistente por alucinogenos (HPPD) reexperimenta distorsiones visuales; se asocia a sintomas disociativos y a ansiedad previa (Halpern 2018). Precaucion especial con antecedentes de psicosis o trastorno bipolar (ficha de Spravato 4.4). La CIE-11 no tiene categoria especifica para el HPPD [fuente oficial no localizada].' });
    const r2 = F.box('r_ser', { x: rc(1), y: y3, w: RW, type: 'warn', fs: FS, align: 'left',
      title: 'Interaccion serotoninergica y convulsiones', text: 'La MDMA y otras sustancias serotoninergicas combinadas con ISRS, IRSN o IMAO pueden desencadenar toxicidad serotoninergica: emergencia por exceso de serotonina (Boyer 2005; ficha del nodo). Combinacion con IMAO especialmente peligrosa. Señal de convulsiones con psicodelicos clasicos junto a litio, no con lamotrigina, en una serie de relatos (Nayak 2021, evidencia debil pero concordante). Hiponatremia y SIADH por MDMA, agravados por ingesta de agua (Hartung 2002).' });
    const r3 = F.box('r_cv', { x: rc(2), y: y3, w: RW, type: 'warn', fs: FS, align: 'left',
      title: 'Riesgo cardiovascular y valvular', text: 'Esketamina: aumento transitorio de la presion arterial; contraindicada si un ascenso tensional supone riesgo grave, como en vasculopatia aneurismatica o episodio cardiovascular reciente (ficha de Spravato 4.3). Ibogaina y noribogaina bloquean el canal hERG, con riesgo de prolongacion del QT y arritmia (Koenig 2014; Alper 2016); fallecimientos descritos, casi siempre con comorbilidad cardiovascular o policonsumo (Alper 2012). Uso cronico de agonistas 5-HT2B (MDMA, algunos psicodelicos): riesgo teorico de valvulopatia (Rothman 2000; Droogmans 2007; Tagen 2023).' });
    y = Math.max(r1.y + r1.h, r2.y + r2.h, r3.y + r3.h) + 18;
    const r4 = F.box('r_man', { x: X, y, w: FW, type: 'act', fs: FS, align: 'left', node: 'red_danos',
      title: 'Principios de manejo de las complicaciones (a nivel de principios, no pautas)',
      text: 'Ante una reaccion aguda: entorno seguro, tranquilizacion y contencion verbal, con vigilancia de constantes; descartar siempre delirium, hipertermia, hiponatremia y causa cardiovascular antes de atribuir el cuadro a la sustancia. La toxicidad serotoninergica grave y la hipertermia son emergencias medicas (Boyer 2005). Revisar la medicacion habitual por el riesgo de interaccion (serotoninergicos, litio). Remitir el tratamiento concreto a toxicologia y a los protocolos locales. La esketamina solo se administra bajo supervision sanitaria, con control de la presion arterial tras la dosis y vigilancia de sedacion, disociacion y abuso (ficha de Spravato 4.4).' });
    y = r4.y + r4.h + 26;

    // Bloque 4: estado regulatorio
    y = F.band(y, 'Estado regulatorio (fuentes oficiales)', { n: 4 }) + 16;
    const t4 = F.table({ x: X, y, fs: 17.5,
      cols: [
        { w: 300, label: 'Sustancia' },
        { w: 560, label: 'Union Europea / España' },
        { w: 560, label: 'Estados Unidos (FDA)' },
        { w: 760, label: 'Australia y comentario' }
      ],
      rows: [
        [{ t: 'Esketamina (Spravato)', node: 'esketamina' },
          'Autorizada: depresion resistente, y reduccion rapida de sintomas en emergencia psiquiatrica, siempre con un ISRS/IRSN o antidepresivo oral (ficha de Spravato 4.1; autorizacion UE 18/12/2019; CIMA nº 1191410001).',
          'Aprobada por la FDA (NDA 211243, aprobacion original 5/3/2019; Drugs@FDA via openFDA).',
          'Primera via de acceso reglada a un derivado de la ketamina en salud mental. La ketamina racemica (Ketolar, CIMA nº 47034) solo esta autorizada como anestesico (seccion 4.1); su uso antidepresivo es fuera de ficha.'],
        [{ t: 'MDMA', node: 'alucinogenos' },
          'Sin medicamento autorizado; en investigacion (sin resultados en CIMA para midomafetamina).',
          'NO aprobada: carta de respuesta completa de la FDA para midomafetamina en TEPT (NDA 215455, Lykos Therapeutics, 8/8/2024). La FDA concluyo que no se demostro eficacia ni seguridad suficientes y señalo problemas de fiabilidad de los datos de seguridad.',
          'Australia (TGA, 1/7/2023): prescripcion de MDMA para TEPT por psiquiatras autorizados; no es un medicamento registrado de uso general (Nutt 2026, revision; web de la TGA no accesible en la consulta).'],
        [{ t: 'Psilocibina', node: 'psilocib' },
          'Sin medicamento autorizado; en investigacion (sin resultados en CIMA).',
          'En investigacion; sin aprobacion localizada.',
          'Australia (TGA, 1/7/2023): prescripcion de psilocibina para depresion resistente por psiquiatras autorizados; no es un medicamento registrado de uso general (Nutt 2026).'],
        [{ t: 'Ibogaina', node: 'alucinogenos' },
          'Sin medicamento autorizado; en investigacion (sin resultados en CIMA).',
          'En investigacion; sin aprobacion localizada.',
          'No es un medicamento aprobado; su uso al margen del sistema sanitario conlleva riesgo cardiaco documentado (Alper 2012; Koenig 2014).'],
        [{ t: 'LSD, DMT/ayahuasca, mescalina', node: 'psicodel_5ht2a' },
          'Sin medicamento autorizado; en investigacion (sin resultados en CIMA).',
          'En investigacion; sin aprobacion localizada.',
          'Siguen en fase de investigacion clinica en todas las jurisdicciones consultadas.']
      ] });
    y = t4.y + 16;

    // Limites
    const lim = F.box('lim', { x: X, y, w: FW, type: 'lim', align: 'left', fs: 19,
      title: 'Limites de la figura',
      text: 'Esquema docente de farmacologia clinica y regulacion; no sustituye al juicio clinico ni a los protocolos locales ni a toxicologia. No contiene dosis, vias, preparacion, obtencion, combinaciones ni indicaciones de uso. Muchas hipotesis de mecanismo (REBUS, sinaptogenesis, TrkB, oxitocina) proceden de modelos celulares o animales y no estan demostradas en personas. Los resultados de los ensayos deben leerse a la luz del enmascaramiento fragil y de la expectativa (Muthukumaraswamy 2021); el ensayo de psilocibina frente a escitalopram fue negativo en su variable principal. Los datos de valvulopatia por uso cronico son de riesgo teorico o asociacion, no de causalidad establecida. El estado regulatorio cambia: debe confirmarse en la fuente oficial vigente (AEMPS-CIMA, EMA, FDA, TGA). La informacion de la TGA procede de una revision, no de la web oficial. La CIE-11 carece de categoria especifica para el HPPD.' });
    y = lim.y + lim.h;

    F.footer('Fuentes principales: Nichols 2016 (PMID 26841800); Vollenweider 1998 (9875725); Preller 2017 (28132813); Carhart-Harris y Friston 2019 (31221820); Carhart-Harris 2012 (22308440) y 2021 (33852780); Ly 2018 (29898390); Moliner 2023 (37280397); Riba 2003 (12660312); Rudnick 1992 (1347426); Green 2003 (12869661); Kirkpatrick 2014 (24882155); Krystal 1994 (8122957); Berman 2000 (10686270); Li 2010 (20724638); Zanos 2016 (27144355); Williams 2018 (30153752); Litjens 2016 (26807959); Roth 2002 (12192085); Koenig 2014 (22458604); Alper 2016 (25636206) y 2012 (22268458); Cherian 2024 (38182784); Goodwin 2022 (36322843); Raison 2023 (37651119); Palhano-Fontes 2019 (29903051); Mitchell 2021 (33972795) y 2023 (37709999); Popova 2019 (31109201); Muthukumaraswamy 2021 (34038314); Vallersnes 2016 (27538886); Halpern 2018 (27822679); Boyer y Shannon 2005 (15784664); Nayak 2021 (34348413); Hartung 2002 (12096147); Rothman 2000 (11104741); Droogmans 2007 (17950805); Tagen 2023 (37572027); Nutt 2026 (39701143). Regulacion: ficha tecnica de Spravato (CIMA nº 1191410001) y Ketolar (nº 47034); Drugs@FDA (NDA 211243) y carta de respuesta completa de la FDA (NDA 215455, 8/8/2024) via openFDA; CIE-11 de la OMS (6C49, 6C4C, 6C4D). Esquema docente para profesionales; no sustituye al juicio clinico. Sin dosis ni pautas.');

    return F;
  }
};
