// Figura: mapa lesional conceptual de los síndromes neuropsicológicos (hemisferio izquierdo, estructuras mediales y subcorticales, hemisferio derecho).
// Esquema conceptual, no anatómico a escala: filas de anterior (arriba) a posterior y subcortical (abajo).
// Compilar en prueba: node tools/fig.js mod_neuropsico_lesional --dry --png <carpeta>
const TITLE = 'Mapa lesional de los síndromes neuropsicológicos: hemisferio izquierdo, estructuras mediales y subcorticales y hemisferio derecho';
module.exports = {
  key: 'mod_neuropsico_lesional',
  meta: {
    title: TITLE,
    kind: 'mod',
    cap: 'Esquema cerebral conceptual, no anatómico a escala. Tres paneles en columnas: A) hemisferio izquierdo, dominante para el lenguaje en la mayoría de las personas; B) estructuras mediales, bilaterales y subcorticales; C) hemisferio derecho. Las filas van de la región anterior (frontal, arriba) a la posterior (occipitotemporal) y terminan en diencéfalo, ganglios basales, cerebelo y vías motoras. Cada caja de doble borde es un síndrome y abre su ficha; las cajas de borde discontinuo son notas, la de borde grueso con «!» es una alarma, y la flecha indica una desconexión (esplenio del cuerpo calloso en la alexia pura). El bloque 2 resume la lateralización del lenguaje, el paso de los centros a las redes, la relevancia psiquiátrica y la exploración. La localización es orientativa: hay variabilidad individual, las lesiones reales rara vez respetan los límites de una fila y muchas correspondencias proceden de casos y series pequeñas. «[fuente no localizada]» señala lo que no se ha podido cotejar en una fuente primaria. Esquema docente: no sustituye a la exploración neurológica ni a la neuroimagen.',
    refs: [
      'Knecht S et al. (2000). Handedness and hemispheric language dominance in healthy humans. Brain 123:2512-2518 · PMID 11099452',
      'Fridriksson J et al. (2018). Anatomy of aphasia revisited. Brain 141:848-862 · PMID 29360947',
      'Hillis AE (2007). Aphasia: progress in the last quarter of a century. Neurology 69:200-213 · PMID 17620554',
      'Mohr JP et al. (1978). Broca aphasia: pathologic and clinical. Neurology 28:311-324 · PMID 565019',
      'Dronkers NF et al. (2007). Paul Broca\'s historic cases: high resolution MR imaging of the brains of Leborgne and Lelong. Brain 130:1432-1441 · PMID 17405763',
      'Binder JR (2017). Current controversies on Wernicke\'s area and its role in language. Curr Neurol Neurosci Rep 17:58 · PMID 28656532',
      'Gerson SN, Benson DF & Frazier SH (1977). Diagnosis: schizophrenia versus posterior aphasia. Am J Psychiatry 134:966-969 · PMID 900305',
      'Buchsbaum BR et al. (2011). Conduction aphasia, sensory-motor integration, and phonological short-term memory - an aggregate analysis of lesion and fMRI data. Brain Lang 119:119-128 · PMID 21256582',
      'Bernal B & Ardila A (2009). The role of the arcuate fasciculus in conduction aphasia. Brain 132:2309-2316 · PMID 19690094',
      'Boatman D et al. (2000). Transcortical sensory aphasia: revisited and revised. Brain 123:1634-1642 · PMID 10908193',
      'Henderson VW (2019). Alexia and agraphia from 1861 to 1965. Front Neurol Neurosci 44:39-52 · PMID 31220840',
      'Leff AP et al. (2001). The functional anatomy of single-word reading in patients with hemianopic and pure alexia. Brain 124:510-521 · PMID 11222451',
      'Carranza-Rentería O & Swerdloff MA (2024). Clinicoradiological features of alexia without agraphia. Cureus 16:e58309 · PMID 38752100',
      'Roeltgen DP & Heilman KM (1984). Lexical agraphia: further support for the two-system hypothesis of linguistic agraphia. Brain 107:811-827 · PMID 6206909',
      'de Gobbi Porto FH et al. (2012). Thalamic alexia with agraphia. Neurol Int 4:e4 · PMID 22593808',
      'Rusconi E et al. (2009). A disconnection account of Gerstmann syndrome: functional neuroanatomy evidence. Ann Neurol 66:654-662 · PMID 19938150',
      'Rusconi E (2018). Gerstmann syndrome: historic and current perspectives. Handb Clin Neurol 151:395-411 · PMID 29519471',
      'De Renzi E (2000). Disorders of visual recognition. Semin Neurol 20:479-485 · PMID 11149704',
      'Martinaud O (2017). Visual agnosia and focal brain injury. Rev Neurol (Paris) 173:451-460 · PMID 28843416',
      'Barton JJS (2008). Structure and function in acquired prosopagnosia: lessons from a series of 10 patients with brain damage. J Neuropsychol 2:197-225 · PMID 19334311',
      'Ochipa C & Gonzalez Rothi LJ (2000). Limb apraxia. Semin Neurol 20:471-478 · PMID 11149703',
      'Goldenberg G (2009). Apraxia and the parietal lobes. Neuropsychologia 47:1449-1459 · PMID 18692079',
      'Pramstaller PP & Marsden CD (1996). The basal ganglia and apraxia. Brain 119:319-340 · PMID 8624692',
      'Pisella L et al. (2011). Right-hemispheric dominance for visual remapping in humans. Philos Trans R Soc Lond B Biol Sci 366:572-585 · PMID 21242144',
      'Chechlacz M et al. (2014). The neural substrates of drawing: a voxel-based morphometry analysis of constructional, hierarchical, and spatial representation deficits. J Cogn Neurosci 26:2701-2715 · PMID 24893744',
      'Fitzgerald LK, McKelvey JR & Szeligo F (2002). Mechanisms of dressing apraxia: a case study. Neuropsychiatry Neuropsychol Behav Neurol 15:148-155 · PMID 12050478',
      'Corbetta M & Shulman GL (2011). Spatial neglect and attention networks. Annu Rev Neurosci 34:569-599 · PMID 21692662',
      'Orfei MD et al. (2007). Anosognosia for hemiplegia after stroke is a multifaceted phenomenon: a systematic review of the literature. Brain 130:3075-3090 · PMID 17533170',
      'Cummings JL (1993). Frontal-subcortical circuits and human behavior. Arch Neurol 50:873-880 · PMID 8352676',
      'Godefroy O et al. (2010). Dysexecutive syndrome: diagnostic criteria and validation study. Ann Neurol 68:855-864 · PMID 21194155',
      'De Renzi E & Barbieri C (1992). The incidence of the grasp reflex following hemispheric lesion and its relation to frontal damage. Brain 115:293-313 · PMID 1559160',
      'Jacobs L & Gossman MD (1980). Three primitive reflexes in normal adults. Neurology 30:184-188 · PMID 7188797',
      'Lhermitte F (1983). \'Utilization behaviour\' and its relation to lesions of the frontal lobes. Brain 106:237-255 · PMID 6850269',
      'Lhermitte F, Pillon B & Serdaru M (1986). Human autonomy and the frontal lobes. Part I: imitation and utilization behavior: a neuropsychological study of 75 patients. Ann Neurol 19:326-334 · PMID 3707084',
      'Benson DF, Gardner H & Meadows JC (1976). Reduplicative paramnesia. Neurology 26:147-151 · PMID 943070',
      'Murai T et al. (1997). Reduplicative paramnesia in patients with focal brain damage. Neuropsychiatry Neuropsychol Behav Neurol 10:190-196 · PMID 9297712',
      'Diamantaras AA et al. (2023). The neuropsychology and neuroanatomy of reduplicative paramnesia. Cortex 167:12-24 · PMID 37515831',
      'Darby RR et al. (2017). Finding the imposter: brain connectivity of lesions causing delusional misidentifications. Brain 140:497-507 · PMID 28082298',
      'Scoville WB & Milner B (1957). Loss of recent memory after bilateral hippocampal lesions. J Neurol Neurosurg Psychiatry 20:11-21 · PMID 13406589',
      'Kopelman MD (2002). Disorders of memory. Brain 125:2152-2190 · PMID 12244076',
      'Bartsch T et al. (2006). Selective affection of hippocampal CA-1 neurons in patients with transient global amnesia without long-term sequelae. Brain 129:2874-2884 · PMID 17003071',
      'Bartsch T & Deuschl G (2010). Transient global amnesia: functional anatomy and clinical implications. Lancet Neurol 9:205-214 · PMID 20129169',
      'Arts NJ, Walvoort SJ & Kessels RP (2017). Korsakoff\'s syndrome: a critical review. Neuropsychiatr Dis Treat 13:2875-2890 · PMID 29225466',
      'Ross ED (1981). The aprosodias: functional-anatomic organization of the affective components of language in the right hemisphere. Arch Neurol 38:561-569 · PMID 7271534',
      'Ross ED & Monnot M (2008). Neurology of affective prosody and its functional-anatomic organization in right hemisphere. Brain Lang 104:51-74 · PMID 17537499',
      'Enderby P (2013). Disorders of communication: dysarthria. Handb Clin Neurol 110:273-281 · PMID 23312647',
      'Schmahmann JD & Sherman JC (1998). The cerebellar cognitive affective syndrome. Brain 121:561-579 · PMID 9577385'
    ],
    nodes: ['confab', 'capgras', 'insight', 'dem', 'ftd', 'ictus_dep', 'tce_neuro', 'mutismo', 'ecolalia', 'incoher', 'apatia', 'desinhib']
  },
  draw(Fig) {
    const W = 2400, FS = 17;
    const F = new Fig({ key: 'mod_neuropsico_lesional', title: TITLE, w: W,
      desc: 'Mapa conceptual en tres paneles (hemisferio izquierdo, estructuras mediales y subcorticales, hemisferio derecho) y cinco filas de anterior a posterior y subcortical, con los síndromes neuropsicológicos situados en su localización orientativa y sus fuentes; bloque final de claves de lectura y límites.' });

    // Geometría de columnas: rótulo de fila, panel A (2 subcolumnas), panel B (1), panel C (2).
    const LBX = 40, LBW = 165;
    const A = { x: 222, w: 806 }, B = { x: 1046, w: 470 }, C = { x: 1534, w: 826 };
    const colA = [{ x: A.x + 14, w: 382 }, { x: A.x + 410, w: 382 }], colAfull = { x: A.x + 14, w: A.w - 28 };
    const colB = { x: B.x + 14, w: B.w - 28 };
    const colC = [{ x: C.x + 14, w: 392 }, { x: C.x + 420, w: 392 }], colCfull = { x: C.x + 14, w: C.w - 28 };

    let y = F.text(40, 128, 'Vista conceptual: región anterior arriba, posterior y subcortical abajo; no es un mapa anatómico a escala. Doble borde = síndrome (abre su ficha); borde discontinuo = nota; borde grueso con «!» = alarma; flecha = desconexión.', { fs: 19, w: W - 80 }) + 10;
    y = F.band(y, 'Mapa conceptual: dónde se sitúan, de forma orientativa, los síndromes', { n: 1 }) + 18;
    const gTop = y;
    y += 46; // espacio para el rótulo de los paneles

    // Coloca una fila: cells = [{col, boxes:[spec,...]}]; iguala alturas y alarga la última caja de cada columna.
    let rowN = 0;
    function row(label, cells) {
      rowN++;
      const y0 = y, stacks = [];
      cells.forEach(c => {
        let yy = y0; const bs = [];
        c.boxes.forEach((sp, i) => { const b = F.box('r' + rowN + '_' + sp.id, Object.assign({ x: c.col.x, y: yy, w: c.col.w, type: 'dx', fs: FS, align: 'left' }, sp)); bs.push(b); yy += b.h + 14; });
        stacks.push({ bs, h: yy - 14 - y0 });
      });
      const H = Math.max(...stacks.map(s => s.h));
      stacks.forEach(s => { const last = s.bs[s.bs.length - 1]; last.h += H - s.h; });
      const lb = F.box('lab' + rowN, { x: LBX, y: y0, w: LBW, type: 'head', fs: 18, title: label, minH: H });
      F._grow(y0 + H);
      y = y0 + H + 26;
      return { y0, H, stacks, lb };
    }
    const byId = id => F.boxes[Object.keys(F.boxes).find(k => k.endsWith('_' + id))];

    row('Frontal', [
      { col: colA[0], boxes: [{ id: 'broca', node: 'afasia_bro', title: 'Afasia de Broca', text: 'No fluente y agramatical, con comprensión relativamente conservada y repetición alterada. El síndrome completo corresponde a un infarto amplio (opérculo, ínsula y cerebro adyacente; división superior de la arteria cerebral media izquierda); el infarto limitado al área de Broca da un mutismo transitorio con articulación dispráxica que mejora (Mohr 1978). Las lesiones de los dos casos de Broca se extendían a regiones mediales (Dronkers 2007).' }] },
      { col: colA[1], boxes: [{ id: 'tcm', node: 'afasia_tc', title: 'Afasia transcortical motora', text: 'Habla espontánea escasa, con dificultad para iniciarla, comprensión conservada y repetición conservada. Lesiones frontales izquierdas, a menudo en territorios frontera entre arterias cerebrales [fuente no localizada]. Diferencial con la abulia y el mutismo acinético por los errores lingüísticos y el contexto lesional [fuente no localizada].' }] },
      { col: colB, boxes: [
        { id: 'frontales', node: 'signos_frontales', title: 'Signos de liberación frontal y conducta de utilización', text: 'Prensión: nunca con lesión solo retrorrolándica; en el 70 % con afectación frontal medial, siempre con daño del cíngulo, y suele ser bilateral aunque la lesión sea unilateral (De Renzi y Barbieri 1992). Imitación y utilización: 96 % de 29 pacientes con lesión frontal focal, en la mitad inferior de la parte anterior de uno o ambos lóbulos (Lhermitte 1986). El palmomentoniano y el hociqueo aparecen en el 50,5 % de 105 adultos sanos (Jacobs y Gossman 1980).' },
        { id: 'disejec', node: 'disejec', title: 'Síndrome disejecutivo (frontal y frontosubcortical)', text: 'Circuitos frontosubcorticales paralelos: dorsolateral (disfunción ejecutiva), orbitofrontal (desinhibición) y cingulado anterior (apatía); la lesión de sus estaciones subcorticales reproduce el síndrome frontal (Cummings 1993). Presente en el 60 % de 461 pacientes neurológicos y predictor independiente de pérdida de autonomía (Godefroy 2010).' }] },
      { col: colC[0], boxes: [{ id: 'redup', node: 'paramnesia_redup', title: 'Paramnesia reduplicativa', text: 'Reubicación persistente de un lugar pese a pruebas en contra; Benson (1976) subrayó el papel del hemisferio derecho y del lóbulo frontal. En 77 lesiones focales, 6 casos (7,8 %), 5 con lesión derecha o bilateral de predominio derecho (Murai 1997). Frente a controles con desorientación espacial: lesiones sobre todo derechas, con máximo solapamiento en la corteza prefrontal dorsolateral, y más disfunción ejecutiva (Diamantaras 2023, 11 casos).' }] },
      { col: colC[1], boxes: [{ id: 'falsaid', node: 'del_ident', title: 'Falsa identificación (Capgras y afines)', text: 'Las 17 lesiones causantes estudiadas estaban conectadas funcionalmente con la corteza retrosplenial izquierda (familiaridad) y 16 con la corteza frontal derecha (evaluación de creencias): una red y no un foco único (Darby 2017). Comparte con la paramnesia reduplicativa el componente frontal derecho.' }] }
    ]);

    row('Perisilviano y temporal', [
      { col: colA[0], boxes: [
        { id: 'wer', node: 'afasia_wer', title: 'Afasia de Wernicke', text: 'Fluente, con parafasias y neologismos; comprensión y repetición alteradas; anosognosia frecuente. Clásicamente, circunvolución temporal superior posterior izquierda; pero la comprensión depende de una red temporal, parietal y frontal más amplia, y la lesión focal de esa región produce sobre todo parafasias fonémicas (Binder 2017). Se confunde con la incoherencia de la esquizofrenia (Gerson 1977).' },
        { id: 'tcs', node: 'afasia_tc', title: 'Afasia transcortical sensorial', text: 'Fluente, con comprensión alterada y repetición conservada (ecolalia). Inducida por estimulación de puntos temporales posteriores izquierdos, con decodificación fonológica intacta (Boatman 2000, 6 pacientes).' }] },
      { col: colA[1], boxes: [
        { id: 'cond', node: 'afasia_cond', title: 'Afasia de conducción', text: 'Fluente, con comprensión conservada y repetición desproporcionadamente alterada, con parafasias fonémicas. Máximo solapamiento lesional en el área Spt, porción posterior del planum temporale izquierdo (Buchsbaum 2011, 14 pacientes); el fascículo arqueado no sería imprescindible para la repetición (Bernal y Ardila 2009).' },
        { id: 'global', node: 'afasia_cond', title: 'Afasia global', text: 'Todas las modalidades alteradas. Lesión perisilviana extensa del hemisferio izquierdo [fuente no localizada para la topografía]; en general, más daño se asocia a afasia más grave (Fridriksson 2018).' }] },
      { col: colB, boxes: [
        { id: 'amnesia', node: 'amnesia', title: 'Amnesia temporal medial (hipocampo)', text: 'Pérdida grave de la memoria reciente tras resección hipocampal bilateral (Scoville y Milner 1957). Las amnesias de origen temporal, diencefálico y frontal comparten rasgos y difieren en otros (Kopelman 2002).' },
        { id: 'agt', node: 'agt', title: 'Amnesia global transitoria', text: 'En difusión, 29 de 41 pacientes tuvieron lesiones hipocampales y 34 de 36 (94 %) estaban en CA1, sin secuelas a los 4-6 meses (Bartsch 2006). Se atribuye a la vulnerabilidad de las neuronas CA1 al estrés metabólico; los desencadenantes siguen sin conocerse (Bartsch y Deuschl 2010).' }] },
      { col: colCfull, boxes: [{ id: 'aprosodia', node: 'aprosodia', title: 'Aprosodias (motora, sensorial, global y transcorticales)', text: 'La prosodia afectiva sería una función dominante del hemisferio derecho, organizada en espejo del lenguaje proposicional izquierdo: aprosodia motora con lesiones anteriores y sensorial con posteriores, por analogía con las afasias (Ross 1981, 10 pacientes; Ross y Monnot 2008). Tras un ictus derecho puede enmascarar o simular la expresión de un cuadro depresivo [fuente no localizada].' }] }
    ]);

    row('Parietal', [
      { col: colA[0], boxes: [
        { id: 'alexagr', node: 'alexia_agrafia', title: 'Alexia con agrafia', text: 'Dejerine atribuyó al giro angular izquierdo un papel en la lectura y la escritura (Henderson 2019). Agrafia léxica por lesión del angular posterior y fonológica por lesión del supramarginal o de la ínsula subyacente (Roeltgen y Heilman 1984, 8 pacientes).' },
        { id: 'gerst', node: 'alexia_agrafia', title: 'Síndrome de Gerstmann', text: 'Agnosia digital, acalculia, desorientación derecha-izquierda y agrafia adquiridas; su unidad como síndrome se ha discutido (Rusconi 2018). Las formas puras se explicarían por desconexión de la sustancia blanca intraparietal subcortical (Rusconi 2009).' }] },
      { col: colA[1], boxes: [{ id: 'ideomot', node: 'apraxias', title: 'Apraxia ideomotora', text: 'En personas diestras, la apraxia de miembro se asocia a lesión del hemisferio izquierdo (Ochipa y Gonzalez Rothi 2000). La lesión parietal izquierda afecta sobre todo a la imitación de gestos sin significado y al uso real de herramientas; su efecto sobre la pantomima es inconstante (Goldenberg 2009).' }] },
      { col: colB, boxes: [{ id: 'talamo', type: 'info', title: 'Excepciones subcorticales', text: 'Alexia con agrafia por hemorragia talámica izquierda (de Gobbi Porto 2012, caso único). En 82 casos de apraxia por lesión profunda, casi todos izquierdos, las lesiones de ganglios basales solían invadir sustancia blanca; el tálamo la causó en 26 (Pramstaller y Marsden 1996).' }] },
      { col: colC[0], boxes: [
        { id: 'neglig', title: 'Heminegligencia espacial', text: 'Frecuente tras lesiones predominantemente derechas; se explica mejor por disfunción de redes atencionales (ventral frontoparietal derecha, que altera la dorsal) que por el daño de una región concreta (Corbetta y Shulman 2011).' },
        { id: 'anosog', node: 'anosog', title: 'Anosognosia de la hemiplejía', text: 'Implicación constante del hemisferio derecho: corteza prefrontal y parietotemporal, ínsula y tálamo. Incidencia tras ictus del 7 al 77 % según el método (Orfei 2007).' }] },
      { col: colC[1], boxes: [{ id: 'constr', node: 'apraxias', title: 'Apraxia constructiva y del vestir', text: 'Predominio derecho del procesamiento visoespacial; desorganización visual en la negligencia y en la apraxia constructiva (Pisella 2011). Pero en 358 ictus la mala copia de figuras se asoció a lesiones distintas en ambos hemisferios: parietal posterior, ganglios basales y tálamo, áreas visuales (Chechlacz 2014). Vestir: base visoespacial en un caso (Fitzgerald 2002); su lateralización derecha clásica [fuente no localizada].' }] }
    ]);

    row('Occipital y occipitotemporal', [
      { col: colA[1], boxes: [{ id: 'alexpura', node: 'alexia_agrafia', title: 'Alexia pura (sin agrafia)', text: 'Escribe pero no lee lo que acaba de escribir; lectura letra a letra (Leff 2001). Lesión occipital izquierda, con defecto campimétrico, que suele asociarse a lesión del esplenio (Carranza-Rentería y Swerdloff 2024, 2 casos). La hemianopsia derecha asociada interfiere por sí misma en la lectura (Leff 2001).' }] },
      { col: colA[0], boxes: [{ id: 'agnobj', node: 'agnosias', title: 'Agnosias visuales de objetos', text: 'Aperceptiva: falla la descripción estructural de la forma. Asociativa: percepto correcto sin acceso al significado, asociada a daño occipitotemporal izquierdo (De Renzi 2000). Ambas en la vía visual ventral (Martinaud 2017); correlato propio de la aperceptiva [fuente no localizada].' }] },
      { col: colB, boxes: [{ id: 'esplenio', type: 'info', title: 'Esplenio del cuerpo calloso', text: 'Su lesión, junto a la occipital izquierda, desconecta el giro angular de la información visual: alexia pura (Henderson 2019; Carranza-Rentería y Swerdloff 2024).' }] },
      { col: colCfull, boxes: [{ id: 'prosop', node: 'agnosias', title: 'Prosopagnosia (fusiforme; bilateral o derecha)', text: 'Más grave con lesiones occipitotemporales bilaterales que afectan a los giros fusiformes; la percepción de la configuración facial depende del fusiforme derecho, y el acceso a la memoria facial, del temporal anterior derecho (Barton 2008, 10 pacientes). Puede aparecer con lesión limitada a la región occipitotemporal derecha (De Renzi 2000).' }] }
    ]);
    F.arrow(byId('esplenio'), byId('alexpura'), { from: 'l', to: 'r' });

    row('Diencéfalo, ganglios basales, cerebelo y vías', [
      { col: colAfull, boxes: [{ id: 'disespast', node: 'disartria', title: 'Disartrias espástica y flácida (vías motoras)', text: 'Espástica: motoneurona superior, vía corticobulbar desde las áreas motoras corticales; flácida: motoneurona inferior. Son seis tipos con rasgos distintivos; la mixta implica más de una localización (Enderby 2013). Lenguaje y escritura conservados: diferencial con la afasia.' }] },
      { col: colB, boxes: [
        { id: 'korsakoff', node: 'korsakoff', title: 'Amnesia diencefálica (Korsakoff)', text: 'Alteraciones del diencéfalo, con cuerpos mamilares y núcleos talámicos; amnesia anterógrada y retrógrada, disfunción ejecutiva y confabulación (Arts 2017).' },
        { id: 'disgb', node: 'disartria', title: 'Disartrias hipocinética e hipercinética', text: 'Sistema extrapiramidal: ganglios basales (Enderby 2013).' }] },
      { col: colC[0], boxes: [{ id: 'disatax', node: 'disartria', title: 'Disartria atáxica', text: 'Disfunción cerebelosa (Enderby 2013). El cerebelo es medial y bilateral; se sitúa aquí solo por espacio.' }] },
      { col: colC[1], boxes: [{ id: 'cerebelo', node: 'cerebelo_psiq', title: 'Síndrome cognitivo-afectivo cerebeloso', text: 'Lesiones del lóbulo posterior y del vermis: disfunción ejecutiva y visoespacial, cambio de personalidad, agramatismo y disprosodia (Schmahmann y Sherman 1998, 20 pacientes).' }] }
    ]);

    const gBot = y - 8;
    F.group({ x: A.x, y: gTop, w: A.w, h: gBot - gTop, label: 'A · Hemisferio izquierdo (dominante para el lenguaje en la mayoría)' });
    F.group({ x: B.x, y: gTop, w: B.w, h: gBot - gTop, label: 'B · Estructuras mediales y subcorticales' });
    F.group({ x: C.x, y: gTop, w: C.w, h: gBot - gTop, label: 'C · Hemisferio derecho' });
    y = gBot + 36;

    y = F.band(y, 'Claves de lectura', { n: 2 }) + 22;
    const CW = (W - 80 - 3 * 24) / 4, cx = i => 40 + i * (CW + 24);
    const k1 = F.box('k1', { x: cx(0), y, w: CW, type: 'info', fs: FS, align: 'left', title: 'Lateralización del lenguaje', text: 'En 326 personas sanas, la dominancia derecha para el lenguaje aumentó de forma lineal con el grado de zurdera: 4 % en diestras marcadas, 15 % en ambidiestras y 27 % en zurdas marcadas (Knecht 2000). Los paneles A y C pueden invertirse en una minoría.' });
    const k2 = F.box('k2', { x: cx(1), y, w: CW, type: 'info', fs: FS, align: 'left', title: 'Redes, no centros', text: 'Denominar, repetir o procesar la gramática dependen de la interacción de las vías dorsal y ventral, por lo que lesiones distintas producen déficits parecidos (Fridriksson 2018); cada tarea depende de una red de regiones (Hillis 2007). La negligencia también se explica mejor por redes que por regiones (Corbetta y Shulman 2011).' });
    const k3 = F.box('k3', { x: cx(2), y, w: CW, type: 'warn', fs: FS, title: 'Relevancia psiquiátrica', text: 'La afasia posterior y la esquizofrenia se confunden con facilidad por la vaguedad y la aparente confusión del discurso (Gerson 1977). Un síndrome focal de inicio agudo exige valoración neurológica y neuroimagen urgentes, y un cambio de conducta disejecutivo de inicio tardío obliga a descartar enfermedad neurológica antes de atribuirlo a un trastorno psiquiátrico [fuente no localizada].' });
    const k4 = F.box('k4', { x: cx(3), y, w: CW, type: 'act', fs: FS, align: 'left', node: 'neuropsico', title: 'Exploración por dominios', text: 'Lenguaje (habla espontánea, comprensión, repetición, denominación, lectura, escritura), praxias, reconocimiento visual, atención espacial, memoria y funciones ejecutivas, con campos visuales y exploración neurológica [fuente no localizada para el orden]. Los cribados breves no sustituyen a la evaluación neuropsicológica.' });
    const kh = Math.max(k1.h, k2.h, k3.h, k4.h); [k1, k2, k3, k4].forEach(b => { b.h = kh; }); F._grow(y + kh);
    y += kh + 30;
    F.box('lim', { x: 40, y, w: W - 80, type: 'lim', fs: 18, align: 'left', title: 'Límites de la figura', text: 'Esquema docente y conceptual: la disposición en filas y paneles no reproduce la anatomía ni los territorios vasculares, y las lesiones reales (ictus, traumatismos, tumores, enfermedades degenerativas) suelen abarcar varias celdas. La localización es orientativa, con variabilidad individual y excepciones subcorticales, y buena parte de las correspondencias procede de casos aislados y series pequeñas. Ningún síndrome permite inferir por sí solo la etiología; no sustituye al juicio clínico, a la exploración neurológica ni a la neuroimagen.' });
    F.footer('Fuentes principales: Knecht 2000; Fridriksson 2018; Hillis 2007; Mohr 1978; Binder 2017; Buchsbaum 2011; Henderson 2019; Rusconi 2009, 2018; De Renzi 2000; Barton 2008; Goldenberg 2009; Corbetta y Shulman 2011; Orfei 2007; Cummings 1993; Lhermitte 1983, 1986; Diamantaras 2023; Darby 2017; Bartsch 2006; Kopelman 2002; Arts 2017; Ross 1981; Enderby 2013; Schmahmann y Sherman 1998. Referencias completas en la ficha de la figura. Esquema docente: la localización es orientativa.');
    return F;
  }
};
