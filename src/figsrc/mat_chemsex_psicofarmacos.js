// Matriz: interacciones entre las sustancias del chemsex y los psicofármacos (sustancia × familia de psicofármaco).
// Complementa a mod_interacciones_targa (antirretrovirales) y a mod_interacciones_psicofarmacos (psicofármaco × psicofármaco): aquí solo sustancia × psicofármaco.
// Fuentes: fichas técnicas AEMPS-CIMA (apartados 4.3-4.5) consultadas en noviembre de 2026 y artículos verificados en PubMed.
// Compilar en prueba: node tools/fig.js mat_chemsex_psicofarmacos --dry --png <carpeta>
const TITLE = 'Sustancias del chemsex y psicofármacos: matriz de interacciones de riesgo';
module.exports = {
  key: 'mat_chemsex_psicofarmacos',
  meta: {
    title: TITLE,
    kind: 'mat',
    cap: 'Matriz en tres bloques para profesionales que prescriben psicofármacos a personas que usan drogas en contexto sexual. 1) Cada fila es una sustancia (GHB/GBL, alcohol, ketamina, MDMA, mefedrona y otras catinonas, metanfetamina, cocaína y poppers) y cada columna una familia de psicofármacos; la celda indica el mecanismo (SER serotoninérgico, DEP depresión del sistema nervioso central y respiratoria aditiva, HTA hipertensivo, CONV umbral convulsivo, QT, FC farmacocinético por CYP, ATEN atenuación del efecto, MetHb metahemoglobinemia) y la fuente. Los símbolos gradúan la base documental, no la magnitud del riesgo: ●●● contraindicación o advertencia expresa en ficha técnica, o casos mortales publicados; ●●○ interacción descrita en ficha técnica o en un ensayo en humanos; ●○○ extrapolación por clase o por mecanismo, señalada como tal; «—» sin datos localizados, que no equivale a ausencia de riesgo. 2) Los mecanismos, con los pares de mayor riesgo y su fuente. 3) Combinaciones de alarma y conducta. Las fichas técnicas describen fármacos de uso clínico: lo que dicen de anfetaminas, oxibato de sodio o esketamina se extrapola a sustancias de composición y dosis desconocidas. Complementa, sin repetir, las figuras de interacciones con antirretrovirales y entre psicofármacos. No contiene dosis ni pautas de consumo o de tratamiento y no sustituye a la ficha técnica vigente, a farmacia clínica ni a toxicología.',
    refs: [
      'Farré M et al. (2007). Pharmacological interaction between 3,4-methylenedioxymethamphetamine (ecstasy) and paroxetine: pharmacological effects and pharmacokinetics. J Pharmacol Exp Ther 323:954-962 · PMID 17890444',
      'Schmid Y et al. (2015). Interactions between bupropion and 3,4-methylenedioxymethamphetamine in healthy subjects. J Pharmacol Exp Ther 353:102-111 · PMID 25655950',
      'Vuori E et al. (2003). Death following ingestion of MDMA (ecstasy) and moclobemide. Addiction 98:365-368 · PMID 12603236',
      'Silins E, Copeland J & Dillon P (2007). Qualitative review of serotonin syndrome, ecstasy (MDMA) and the use of other serotonergic substances: hierarchy of risk. Aust N Z J Psychiatry 41:649-655 · PMID 17620161',
      'Thai D et al. (2006). Gamma-hydroxybutyrate and ethanol effects and interactions in humans. J Clin Psychopharmacol 26:524-529 · PMID 16974199',
      'Galicia M, Nogué S & Miró O (2011). Liquid ecstasy intoxication: clinical features of 505 consecutive emergency department patients. Emerg Med J 28:462-466 · PMID 21602168',
      'Pedersen AJ et al. (2013). In vitro metabolism studies on mephedrone and analysis of forensic cases. Drug Test Anal 5:430-438 · PMID 22573603',
      'Prosser JM & Nelson LS (2012). The toxicology of bath salts: a review of synthetic cathinones. J Med Toxicol 8:33-42 · PMID 22108839',
      'Hijazi Y & Boulieu R (2002). Contribution of CYP3A4, CYP2B6, and CYP2C9 isoforms to N-demethylation of ketamine in human liver microsomes. Drug Metab Dispos 30:853-858 · PMID 12065445',
      'Krantz MJ, Rowan SB & Mehler PS (2005). Cocaine-related torsade de pointes in a methadone maintenance patient. J Addict Dis 24:53-60 · PMID 15774410',
      'Sticherling C et al. (2005). Methadone-induced Torsade de pointes tachycardias. Swiss Med Wkly 135:282-285 · PMID 15986265',
      'Hunter L et al. (2011). Methaemoglobinaemia associated with the use of cocaine and volatile nitrites as recreational drugs: a review. Br J Clin Pharmacol 72:18-26 · PMID 21352269',
      'Schifano F et al. (2025). Drugs used in «chemsex»/sexualized drug behaviour: overview of the related clinical psychopharmacological issues. Brain Sci 15:424 · PMID 40426596 · revisión narrativa',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Xyrem 500 mg/ml solución oral (oxibato de sodio) (n.º de registro 05312001), apartados 4.3, 4.4 y 4.5',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Spravato 28 mg solución para pulverización nasal (esketamina) (n.º de registro 1191410001), apartado 4.5',
      'AEMPS-CIMA (2023). Ficha técnica de Ketolar 50 mg/ml solución inyectable (ketamina) (n.º de registro 47034), apartado 4.5; revisión del texto de noviembre de 2023',
      'AEMPS-CIMA (2026). Ficha técnica de Elvanse Adultos 30 mg cápsulas duras (lisdexanfetamina) (n.º de registro 82336), apartados 4.3 y 4.5; revisión del texto de septiembre de 2026',
      'AEMPS-CIMA (2026). Ficha técnica de Tranilcipromina Aristo 10 mg comprimidos recubiertos con película (n.º de registro 88523), apartados 4.3, 4.4 y 4.5; revisión del texto de abril de 2026',
      'AEMPS-CIMA (2023). Ficha técnica de Manerix 150 comprimidos recubiertos con película (moclobemida) (n.º de registro 59169), apartado 4.5; revisión del texto de enero de 2023',
      'AEMPS-CIMA (2026). Ficha técnica de Elontril 150 mg comprimidos de liberación modificada (bupropión) (n.º de registro 68615), apartados 4.3, 4.4 y 4.5; revisión del texto de julio de 2026',
      'AEMPS-CIMA (2026). Ficha técnica de Concerta 18 mg comprimidos de liberación prolongada (metilfenidato) (n.º de registro 65148), apartados 4.4 y 4.5; revisión del texto de febrero de 2026',
      'AEMPS-CIMA (2024). Ficha técnica de Plenur 400 mg comprimidos de liberación modificada (carbonato de litio) (n.º de registro 48932), apartados 4.4 y 4.5; revisión del texto de julio de 2024',
      'AEMPS-CIMA (2021). Ficha técnica de Valium 5 mg comprimidos (diazepam) (n.º de registro 39409), apartado 4.4; revisión del texto de mayo de 2021',
      'AEMPS-CIMA (2026; consulta de noviembre). Fichas técnicas de Lyrica 100 mg cápsulas duras (pregabalina) (n.º de registro 104279015) y Neurontin 300 mg cápsulas duras (gabapentina) (n.º de registro 60621; revisión del texto de enero de 2026), apartados 4.4 y 4.5',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Suboxone 8 mg/2 mg comprimidos sublinguales (buprenorfina/naloxona) (n.º de registro 06359003), apartados 4.3 y 4.4',
      'AEMPS-CIMA (2025). Ficha técnica de Tryptizol 25 mg comprimidos recubiertos con película (amitriptilina) (n.º de registro 37130), apartado 4.5; revisión del texto de enero de 2025',
      'AEMPS-CIMA (2026). Ficha técnica de Leponex 100 mg comprimidos (clozapina) (n.º de registro 59547), apartado 4.5; revisión del texto de febrero de 2026',
      'AEMPS-CIMA (2020). Ficha técnica de Haloperidol Esteve 10 mg comprimidos (n.º de registro 58343), apartado 4.5; revisión del texto de mayo de 2020',
      'AEMPS-CIMA (2021-2023). Fichas técnicas de Seropram 30 mg (citalopram; n.º de registro 63564; revisión del texto de octubre de 2023) y Fluoxetina Cinfa 20 mg cápsulas duras EFG (n.º de registro 63499; revisión del texto de mayo de 2021), apartado 4.5 (alcohol)',
      'AEMPS-CIMA (2026; consulta de noviembre). Fichas técnicas de Viagra 100 mg (sildenafilo) (n.º de registro 98077010) y Cialis 10 mg (tadalafilo) (n.º de registro 02237001), apartados 4.3 y 4.5',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Cloruro de metiltioninio Proveblue 5 mg/ml solución inyectable (azul de metileno) (n.º de registro 111682001), apartados 4.4 y 4.5',
      'AEMPS-CIMA (2026). Ficha técnica de Depakine Crono 500 mg comprimidos de liberación prolongada (valproato) (n.º de registro 60350), apartado 4.3; revisión del texto de septiembre de 2026',
      'AEMPS-CIMA (2026). Ficha técnica de Metasedin 30 mg comprimidos (metadona) (n.º de registro 62422), apartado 4.4 (prolongación del QT); revisión del texto de mayo de 2026'
    ],
    nodes: ['isrs', 'moclobemida', 'tca_dep', 'lm_bip', 'metilfenidato', 'metadona', 'pregabalina', 'haloperidol', 'clozapina', 'esketamina', 'ghb_abst', 'tdah_chemsex', 'catinonas_nuevas', 'ap_atipicos']
  },
  draw(Fig) {
    const W = 2300, X = 60, FW = W - 2 * X;
    const F = new Fig({ key: 'mat_chemsex_psicofarmacos', title: TITLE, w: W,
      desc: 'Matriz de ocho sustancias del contexto del chemsex frente a nueve familias de psicofármacos, con el mecanismo de cada interacción, su fuente y el grado de base documental; tabla de mecanismos (serotoninérgico, depresión respiratoria aditiva, hipertensivo, hipotensión con nitritos e inhibidores de la PDE-5, CYP2D6, CYP3A4, GHB deshidrogenasa, umbral convulsivo, QT y atenuación del efecto); combinaciones de alarma, conducta y límites.' });

    let y = 92;
    y = F.text(X, y + 18, 'Cómo leerla: ●●● contraindicación o advertencia expresa en ficha técnica, o casos mortales publicados · ●●○ interacción descrita en ficha técnica o en un ensayo en humanos · ●●○ [como clase]: la ficha técnica nombra la clase (p. ej., «anfetaminas»), no la sustancia concreta · ●○○ extrapolación por clase farmacológica no nombrada en la ficha o por mecanismo · — sin datos localizados (no significa «sin riesgo»). Los símbolos gradúan la base documental, no la magnitud del riesgo. Mecanismos: SER serotoninérgico · DEP depresión del SNC y respiratoria aditiva · HTA hipertensivo · CONV umbral convulsivo · QT · FC farmacocinético (CYP) · ATEN el psicofármaco atenúa el efecto buscado · MetHb metahemoglobinemia. «FT» = ficha técnica AEMPS-CIMA, con su apartado. Sin dosis. ↗ abre la ficha del atlas.', { fs: 19, w: FW }) + 10;

    // ───────── 1. Matriz sustancia × psicofármaco
    y = F.band(y, 'Matriz: sustancia del chemsex × familia de psicofármaco', { n: 1 }) + 16;
    const cw = 218;
    const cols = [{ w: 218, label: 'Sustancia ↓ · psicofármaco →' },
      { w: cw, label: 'ISRS e IRSN' }, { w: cw, label: 'IMAO: tranilcipromina, moclobemida' }, { w: cw, label: 'Bupropión' },
      { w: cw, label: 'Tricíclicos' }, { w: cw, label: 'Antipsicóticos' }, { w: cw, label: 'Litio' },
      { w: cw, label: 'Benzodiacepinas y gabapentinoides' }, { w: cw, label: 'Metilfenidato' }, { w: cw, label: 'Opioides: metadona, buprenorfina' }];
    const N = '—';
    const t1 = F.table({ x: X, y, fs: 15, cols, rows: [
      [{ t: 'GHB / GBL', node: 'ghb_gbl' },
        { sym: '●○○', t: 'DEP: sin interacción FC con duloxetina; efecto aditivo no excluible (Xyrem 4.5)' },
        { sym: '●○○', t: 'DEP: tranilcipromina contraindicada en la intoxicación aguda por depresores del SNC y alcohol (FT 4.3); el GHB no se cita [extrapolación]' },
        { sym: '●○○', t: 'CONV: contraindicado en la retirada brusca de alcohol o BZD (Elontril 4.3); el GHB no se cita' },
        { sym: '●●○', t: 'Oxibato con tricíclicos: aumenta la frecuencia de reacciones adversas (Xyrem 4.5); mecanismo no especificado' },
        { sym: '●○○', t: 'DEP: no combinar oxibato con depresores del SNC (Xyrem 4.5); clozapina los potencia (Leponex 4.5); ninguna ficha cita al otro [por clase]' },
        N,
        { sym: '●●●', t: 'DEP: evitar BZD por depresión respiratoria (Xyrem 4.4); gabapentinoides con depresores del SNC: depresión respiratoria (Lyrica, Neurontin 4.4); el GHB no se cita [por clase]' },
        N,
        { sym: '●●●', t: 'DEP: oxibato contraindicado con opioides (Xyrem 4.3)' }],
      [{ t: 'Alcohol', node: 'alcohol' },
        { sym: '●○○', t: 'Sin interacción demostrada, pero no se aconseja combinar (Seropram, Fluoxetina Cinfa 4.5)' },
        { sym: '●●○', t: 'Tranilcipromina: potencia el alcohol; cerveza y vino, con tiramina (FT 4.4-4.5). Moclobemida: sin interacción (Manerix 4.5)' },
        { sym: '●●○', t: 'CONV: uso abusivo, factor de riesgo; retirada brusca, contraindicación (Elontril 4.3-4.4)' },
        { sym: '●●○', t: 'DEP: potencia la sedación (Tryptizol 4.5)' },
        { sym: '●●○', t: 'DEP: no tomar alcohol con clozapina (Leponex 4.5); haloperidol aumenta la depresión del SNC (FT 4.5)' },
        N,
        { sym: '●●●', t: 'DEP: sedación intensa que puede llevar a coma o muerte (Valium 4.4)' },
        { sym: '●●○', t: 'Exacerba efectos adversos centrales; con alcohol > 10 % aumenta in vitro la liberación (Concerta 4.5)' },
        { sym: '●●●', t: 'DEP: muertes por depresión respiratoria (Suboxone 4.4); contraindicado en alcoholismo agudo (4.3)' }],
      [{ t: 'Ketamina', node: 'ketamina_rec' },
        N,
        { sym: '●●○', t: 'HTA: vigilar la presión arterial de la esketamina con IMAO como tranilcipromina (Spravato 4.5) [esketamina → ketamina]' },
        N, N,
        { sym: '●●○', t: 'DEP: las fenotiazinas potencian la depresión del SNC (Ketolar 4.5)' },
        N,
        { sym: '●●○', t: 'DEP: las BZD prolongan la recuperación; diazepam alarga la semivida (Ketolar 4.5)' },
        { sym: '●●○', t: 'HTA: vigilar la presión arterial de la esketamina con psicoestimulantes como metilfenidato (Spravato 4.5) [esketamina → ketamina]' },
        { sym: '●●○', t: 'DEP: los opiáceos prolongan la recuperación (Ketolar 4.5); más sedación (Spravato 4.5)' }],
      [{ t: 'MDMA (éxtasis)', node: 'alucinogenos' },
        { sym: '●●○', t: 'ATEN y FC: paroxetina atenúa los efectos pese a un 30 % más de MDMA en plasma; riesgo de redosificar (Farré 2007)' },
        { sym: '●●●', t: 'SER: cuatro muertes con moclobemida (Vuori 2003); los IMAO, el mayor riesgo (Silins 2007)' },
        { sym: '●●○', t: 'FC: más MDMA y más bupropión en plasma; efecto subjetivo prolongado y menor aumento de la frecuencia cardiaca (Schmid 2015)' },
        N, N,
        { sym: '●○○', t: 'SER: el litio puede precipitarlo con serotoninérgicos (Plenur 4.4); la MDMA no se cita' },
        N,
        { sym: '●○○', t: 'SER: casos con serotoninérgicos (Concerta 4.4); la MDMA no se cita' },
        { sym: '●○○', t: 'SER: buprenorfina con serotoninérgicos (Suboxone 4.4); la MDMA no se cita' }],
      [{ t: 'Mefedrona y otras catinonas', node: 'mefed' },
        { sym: '●○○', t: 'FC: mefedrona metabolizada sobre todo por CYP2D6 in vitro (Pedersen 2013); paroxetina inhibe CYP2D6 (Farré 2007) [inferencia]' },
        { sym: '●○○', t: 'HTA: anfetaminas y simpaticomiméticos indirectos contraindicados (tranilcipromina 4.3); catinonas, afines a las anfetaminas (Prosser 2012)' },
        { sym: '●●○', t: 'CONV: «uso de estimulantes», factor de riesgo (Elontril 4.4). FC: el bupropión inhibe CYP2D6 (4.5) y la mefedrona depende de CYP2D6 in vitro (Pedersen 2013) [inferencia]' },
        N, N, N, N, N, N],
      [{ t: 'Metanfetamina', node: 'metanf' },
        { sym: '●●○', t: 'SER: descrito, raro, con anfetaminas e ISRS o IRSN (Elvanse 4.5) [como clase]' },
        { sym: '●●○', t: 'HTA: las anfetaminas, como clase, contraindicadas (tranilcipromina 4.3; Elvanse 4.3); crisis hipertensiva e hiperpirexia, a veces mortal (Elvanse 4.5)' },
        { sym: '●●○', t: 'CONV: estimulantes, factor de riesgo (Elontril 4.4)' },
        N,
        { sym: '●●○', t: 'ATEN: haloperidol y clorpromazina inhiben el efecto estimulante de las anfetaminas (Elvanse 4.5; Haloperidol Esteve 4.5) [como clase]' },
        { sym: '●●○', t: 'ATEN: el litio inhibe el efecto estimulante (Elvanse 4.5) [como clase]' },
        N,
        { sym: '●○○', t: 'HTA: precaución con fármacos que elevan la presión arterial (Concerta 4.5)' },
        N],
      [{ t: 'Cocaína', node: 'cocaina' },
        N,
        { sym: '●○○', t: 'HTA: simpaticomiméticos indirectos contraindicados (tranilcipromina 4.3); la cocaína no se cita' },
        { sym: '●●○', t: 'CONV: estimulantes, factor de riesgo (Elontril 4.4)' },
        { sym: '●○○', t: 'Potencia los efectos cardiovasculares de simpaticomiméticos (Tryptizol 4.5); la cocaína no se cita' },
        N, N, N,
        { sym: '●○○', t: 'HTA: precaución con fármacos que elevan la presión arterial (Concerta 4.5)' },
        { sym: '●○○', t: 'QT: metadona, precaución con otros fármacos que prolongan el QT (Metasedin 4.4; la cocaína no se cita); torsade de pointes tras cocaína en un caso (Krantz 2005) [por mecanismo]' }],
      [{ t: 'Poppers (nitritos de alquilo)', node: 'poppers' },
        { sym: '●●○', t: 'MetHb por poppers (Hunter 2011); su antídoto, el azul de metileno, debe evitarse con ISRS e IRSN (Proveblue 4.4)' },
        { sym: '●●○', t: 'MetHb: azul de metileno, evitar con IMAO (Proveblue 4.4)' },
        { sym: '●●○', t: 'MetHb: azul de metileno, evitar con bupropión (Proveblue 4.5)' },
        { sym: '●●○', t: 'MetHb: azul de metileno, evitar con clomipramina (Proveblue 4.5)' },
        N, N, N, N, N]
    ] });
    y = t1.y + 14;
    y = F.text(X, y + 18, 'Celdas «—»: ninguna ficha técnica ni artículo consultado describe la interacción; puede existir. Sildenafilo y otros inhibidores de la PDE-5 no figuran como fila: su interacción crítica es con los poppers (bloque 3).', { fs: 17, w: FW, fill: '#333' }) + 26;

    // ───────── 2. Mecanismos
    y = F.band(y, 'Mecanismos: qué ocurre, pares de mayor riesgo y fuente', { n: 2 }) + 16;
    const t2 = F.table({ x: X, y, fs: 17, cols: [{ w: 330, label: 'Mecanismo' }, { w: 760, label: 'Qué ocurre' }, { w: 620, label: 'Pares de mayor riesgo en la matriz' }, { w: 470, label: 'Fuente' }], rows: [
      [{ t: 'SER · síndrome serotoninérgico', node: 'sind_ser' },
        'Cambios del estado mental, inestabilidad autonómica (taquicardia, presión arterial lábil, hipertermia) y alteraciones neuromusculares (Elontril 4.4). Los inhibidores de la recaptación de serotonina son los que menos probablemente lo llevan a un nivel de riesgo vital con éxtasis; los IMAO, los que más (Silins 2007).',
        'MDMA con IMAO (moclobemida incluida); MDMA con estimulantes repetidos o a dosis altas; litio, metilfenidato o buprenorfina con serotoninérgicos.',
        'Silins 2007; Vuori 2003; Plenur, Concerta y Suboxone 4.4; Elvanse 4.5'],
      [{ t: 'DEP · depresión respiratoria y del SNC aditiva', node: 'ansiol_bzd' },
        'Se suman los efectos depresores. GHB con etanol en voluntarios: mayor descenso de la saturación de oxígeno y más hipotensión y vómitos que por separado (Thai 2006). En 505 intoxicaciones por GHB, la coingesta de otras sustancias (76 %) se asoció a una recuperación más lenta y a más ventilación mecánica (3 % frente a 0 %) (Galicia 2011).',
        'GHB/GBL o alcohol con opioides, benzodiacepinas o gabapentinoides; también con tricíclicos, antipsicóticos sedantes y ketamina.',
        'Thai 2006; Galicia 2011; Xyrem 4.3-4.5; Valium, Lyrica, Neurontin y Suboxone 4.4'],
      [{ t: 'HTA · crisis hipertensiva', node: 'maois' },
        'Con un IMAO, la anfetamina aumenta la liberación de noradrenalina y otras monoaminas: cefalea intensa, crisis hipertensiva, efectos neurológicos tóxicos e hiperpirexia, a veces mortal (Elvanse 4.5). Moclobemida potencia y prolonga los simpaticomiméticos (Manerix 4.5).',
        'Metanfetamina y MDMA con tranilcipromina o moclobemida; catinonas y cocaína, por extrapolación; ketamina (datos de esketamina) con IMAO o psicoestimulantes.',
        'Elvanse 4.3 y 4.5; tranilcipromina 4.3; Manerix 4.5; Spravato 4.5'],
      [{ t: 'Hipotensión: nitritos con inhibidores de la PDE-5', node: 'poppers' },
        'Sildenafilo potencia el efecto hipotensor de los nitratos y está contraindicado con dadores de óxido nítrico como el nitrito de amilo (Viagra 4.3); tadalafilo, con cualquier nitrato orgánico (Cialis 4.3; los poppers son nitritos: aplicación por mecanismo). En voluntarios, sildenafilo no potenció la hipotensión del alcohol (Viagra 4.5).',
        'Poppers con sildenafilo, tadalafilo u otro inhibidor de la PDE-5.',
        'Viagra 4.3 y 4.5; Cialis 4.3'],
      [{ t: 'FC · inhibición de CYP2D6', node: 'cyp2d6' },
        'Paroxetina es uno de los inhibidores más potentes de CYP2D6 (Farré 2007); bupropión e hidroxibupropión también lo inhiben, al menos 7 días tras la última dosis (Elontril 4.5). La MDMA y la mefedrona dependen de CYP2D6 (Farré 2007; Pedersen 2013).',
        'MDMA con paroxetina (+30 % de MDMA) o con bupropión (aumento de ambos); mefedrona con estos inhibidores [inferencia].',
        'Farré 2007; Schmid 2015; Pedersen 2013; Elontril 4.5'],
      [{ t: 'FC · CYP3A4', node: 'carbamaz' },
        'CYP3A4 es la principal enzima de la N-desmetilación de la ketamina (Hijazi 2002); sus inhibidores pueden obligar a reducir la ketamina (Ketolar 4.5). Carbamazepina, inductora de CYP3A4, puede reducir la concentración de tadalafilo (Cialis 4.5).',
        'Ketamina con inhibidores de CYP3A4; tadalafilo con carbamazepina (menor efecto).',
        'Hijazi 2002; Ketolar 4.5; Cialis 4.5'],
      [{ t: 'FC · GHB deshidrogenasa', node: 'vpa_bip' },
        'El oxibato (GHB farmacéutico) se metaboliza por la GHB deshidrogenasa: valproato aumentó su exposición en torno a un 25 % con más somnolencia y alteración cognitiva; con topiramato se notificaron coma y aumento del GHB plasmático (Xyrem 4.4-4.5).',
        'GHB/GBL con valproato o topiramato.',
        'Xyrem 4.4 y 4.5'],
      [{ t: 'CONV · umbral convulsivo', node: 'bupropion' },
        'El riesgo de convulsiones del bupropión depende de la dosis; son factores de riesgo el uso de estimulantes o anorexígenos y el uso abusivo de alcohol; la retirada brusca de alcohol o de benzodiacepinas lo contraindica (Elontril 4.3-4.4).',
        'Bupropión con metanfetamina, catinonas o cocaína; bupropión durante una retirada brusca de sedantes.',
        'Elontril 4.3 y 4.4'],
      [{ t: 'QT · prolongación del QT', node: 'qt_psicof' },
        'La metadona prolonga el QT y su ficha pide precaución con otros fármacos que lo prolongan (Metasedin 4.4); según estudios experimentales, la cocaína lo prolonga por el mismo mecanismo (Krantz 2005, a propósito de un caso), y el consumo continuado de cocaína aumenta el riesgo de torsade de pointes en tratamiento con metadona (Sticherling 2005, revisión).',
        'Cocaína con metadona.',
        'Metasedin 4.4; Krantz 2005 (caso); Sticherling 2005 (revisión)'],
      [{ t: 'ATEN · atenuación del efecto', node: 'estim_monoam' },
        'El psicofármaco reduce el efecto buscado: con paroxetina, los efectos fisiológicos y subjetivos de la MDMA disminuyen y ello podría llevar a tomar más (Farré 2007). Haloperidol, clorpromazina y litio inhiben los efectos estimulantes de las anfetaminas (Elvanse 4.5); haloperidol antagoniza estimulantes como las anfetaminas (Haloperidol Esteve 4.5).',
        'MDMA con ISRS; anfetaminas con antipsicóticos o litio.',
        'Farré 2007; Elvanse 4.5; haloperidol 4.5']
    ] });
    y = t2.y + 40;

    // ───────── 3. Alarmas y conducta
    y = F.band(y, 'Combinaciones de alarma y conducta', { n: 3 }) + 26;
    const bw = 690, gap = (FW - 3 * bw) / 2;
    const w1 = F.box('w_imao', { x: X, y, w: bw, type: 'warn', node: 'tranilcipromina', fs: 18, title: 'IMAO con estimulantes o MDMA',
      text: 'Tranilcipromina: contraindicadas anfetaminas y simpaticomiméticos indirectos (FT 4.3). Moclobemida: cuatro muertes por síndrome serotoninérgico con MDMA (Vuori 2003). Con un IMAO, la anfetamina está contraindicada durante el tratamiento y en los 14 días siguientes (Elvanse 4.3 y 4.5).' });
    const w2 = F.box('w_dep', { x: X + bw + gap, y, w: bw, type: 'warn', node: 'buprenorfina', fs: 18, title: 'GHB/GBL o alcohol con opioides, benzodiacepinas o gabapentinoides',
      text: 'Oxibato: contraindicado con opioides o barbitúricos (Xyrem 4.3) y debe evitarse con benzodiacepinas (4.4). Buprenorfina: muertes por depresión respiratoria con benzodiacepinas, alcohol u otros depresores (Suboxone 4.4). Gabapentinoides: depresión respiratoria grave con depresores del SNC (Lyrica, Neurontin 4.4).' });
    const w3 = F.box('w_nit', { x: X + 2 * (bw + gap), y, w: bw, type: 'warn', fs: 18, title: 'Poppers con sildenafilo u otros inhibidores de la PDE-5',
      text: 'Contraindicados los dadores de óxido nítrico como el nitrito de amilo (Viagra 4.3) y los nitratos orgánicos (Cialis 4.3; los poppers son nitritos, aplicación por mecanismo). Si los poppers causan metahemoglobinemia (Hunter 2011), el azul de metileno obliga a revisar ISRS, IRSN, IMAO, bupropión y clomipramina (Proveblue 4.4-4.5).' });
    y = Math.max(w1.y + w1.h, w2.y + w2.h, w3.y + w3.h) + 34;
    const w4 = F.box('w_vpa', { x: X, y, w: bw, type: 'warn', node: 'valproato_fertil', fs: 18, title: 'GHB/GBL con valproato o topiramato',
      text: 'Inhibición de la GHB deshidrogenasa: más exposición al GHB, somnolencia y alteración cognitiva; coma notificado con topiramato (Xyrem 4.4-4.5). Además, valproato en el trastorno bipolar: contraindicado en el embarazo y en personas con capacidad de gestar salvo que se cumpla el Plan de Prevención de Embarazos (Depakine Crono 4.3).' });
    const a1 = F.box('a_preg', { x: X + bw + gap, y, w: bw, type: 'act', node: 'chemsex_s', fs: 18, title: 'Al prescribir: preguntar por el consumo',
      text: 'Explorar el uso de éxtasis y de otros serotoninérgicos al prescribir antidepresivos (Silins 2007). Extender la pregunta a GHB/GBL, alcohol, estimulantes, ketamina y poppers, sin juicio y desde la reducción de daños [fuente no localizada].' });
    const a2 = F.box('a_info', { x: X + 2 * (bw + gap), y, w: bw, type: 'act', node: 'red_danos', fs: 18, title: 'Explicar el efecto atenuado o prolongado',
      text: 'Con paroxetina la MDMA «hace menos» aunque su concentración sube, y ello podría llevar a tomar más (Farré 2007); con bupropión la MDMA y el bupropión aumentan en plasma y el efecto se prolonga (Schmid 2015). Explicarlo forma parte de la reducción de daños [fuente no localizada].' });
    y = Math.max(w4.y + w4.h, a1.y + a1.h, a2.y + a2.h) + 34;
    const i1 = F.box('i_rel', { x: X, y, w: FW, type: 'info', node: 'chemsex_arv', align: 'left', fs: 18, title: 'Qué no está aquí',
      text: 'Las interacciones con antirretrovirales (ritonavir, cobicistat, efavirenz) están en la figura de interacciones con el TARGA; las de psicofármaco con psicofármaco (QT, litemia, hiponatremia, sangrado), en la figura de interacciones entre psicofármacos. Las mezclas entre sustancias (por ejemplo, cocaína con alcohol) quedan fuera de esta matriz.' });
    y = i1.y + i1.h + 30;
    F.box('lim', { x: X, y, w: FW, type: 'lim', align: 'left', fs: 18, title: 'Límites',
      text: 'Esquema docente: no es exhaustivo, no cuantifica el riesgo y no sustituye al juicio clínico, a la ficha técnica vigente, a farmacia clínica ni a toxicología. Las fichas técnicas describen medicamentos de pureza y dosis conocidas (oxibato, esketamina, lisdexanfetamina); su aplicación al GHB/GBL, la ketamina o la metanfetamina de uso no médico es una extrapolación aun en las celdas ●●○ y ●●●, y las celdas ●○○ son inferencias por clase o por mecanismo. Los estudios en humanos usan dosis únicas en voluntarios sanos, pocas personas (Farré 2007, 12 hombres; Schmid 2015 y Thai 2006, 16 personas cada uno), y los casos mortales son series pequeñas (Vuori 2003). La revisión sobre chemsex de Schifano 2025 es narrativa. En el policonsumo, real en este contexto, varias interacciones se suman y ninguna fuente citada las estudia juntas. Sin dosis ni pautas de consumo.' });

    F.footer('Fuentes: fichas técnicas AEMPS-CIMA, apartados 4.3-4.5 (Xyrem, Spravato, Ketolar, Elvanse, tranilcipromina Aristo, Manerix, Elontril, Concerta, Plenur, Valium, Lyrica, Neurontin, Suboxone, Tryptizol, Leponex, haloperidol Esteve, Seropram, fluoxetina Cinfa, Viagra, Cialis, Proveblue, Depakine Crono), consulta de noviembre de 2026; Farré 2007; Schmid 2015; Vuori 2003; Silins 2007; Thai 2006; Galicia 2011; Pedersen 2013; Prosser 2012; Hijazi 2002; Krantz 2005; Sticherling 2005; Hunter 2011; Schifano 2025; Metasedin 4.4. Esquema docente: no es una guía de consumo ni de tratamiento.');
    return F;
  }
};
