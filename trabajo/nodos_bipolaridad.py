# Añade 20 nodos a src/data/nodes.jsonl a partir de la carpeta del usuario «Bipolaridad y otras güías».
# Fuentes: los PDF de esa carpeta (leídos en el equipo del usuario) y, cuando el dato procede del resumen,
# el resumen indexado en PubMed. Todos los PMID se comprobaron en PubMed el 2026-11-27.
# Las páginas entre paréntesis son las de la revista impresa.
import json, sys
P = 'src/data/nodes.jsonl'

def N(id, n, ab, k, vw, sp, ring, trad, cs, y, ev, desc, feats, note, refs, rel, al=None, sec=None, tags=None):
    d = dict(id=id, n=n, ab=ab, k=k, vw=vw, sp=sp, ring=ring, trad=trad, cs=cs, y=y, ev=ev, desc=desc, feats=feats, note=note, refs=refs, rel=rel, origen='nuevo-bipolaridad')
    if al: d['al'] = al
    if sec: d['sec'] = sec
    if tags: d['tags'] = tags
    return d

R_GH22 = 'Ghaemi SN (2022). Symptomatic versus disease-modifying effects of psychiatric drugs. Acta Psychiatr Scand 146:251-257 · PMID 35653111'
R_GH13 = 'Ghaemi SN (2013). Taking disease seriously in DSM. World Psychiatry 12:210-212 · PMID 24096778'
R_GB07 = "Ghaemi SN & Baldessarini RJ (2007). The manic-depressive spectrum and mood stabilization: Kraepelin's ghost. Psychother Psychosom 76:65-69 · PMID 17230046"
R_GKG02 = "Ghaemi SN, Ko JY & Goodwin FK (2002). «Cade's disease» and beyond: misdiagnosis, antidepressant use, and a proposed definition for bipolar spectrum disorder. Can J Psychiatry 47:125-134 · PMID 11926074"
R_GH03 = 'Ghaemi SN, Hsu DJ, Soldani F & Goodwin FK (2003). Antidepressants in bipolar disorder: the case for caution. Bipolar Disord 5:421-433 · PMID 14636365'
R_GH10 = 'Ghaemi SN (2010). Antidepressants in bipolar depression: a new meta-analysis for an old controversy. Psychiatric Times 27(12):1, 9-10 (columna de opinión, sin revisión por pares; sin PMID)'
R_ISBD = 'Ghaemi SN, Bauer M, Cassidy F, Malhi GS, Mitchell P, Phelps J, Vieta E, Youngstrom E & ISBD Diagnostic Guidelines Task Force (2008). Diagnostic guidelines for bipolar disorder: a summary of the International Society for Bipolar Disorders Diagnostic Guidelines Task Force Report. Bipolar Disord 10(1 Pt 2):117-128 · PMID 18199230'
R_AREDOC = 'Parker G, Tavella G, Macqueen G, Berk M, Grunze H, Deckersbach T, et al. (2018). Revising Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, criteria for the bipolar disorders: phase I of the AREDOC project. Aust N Z J Psychiatry 52:1173-1182 · PMID 30378461'
R_PK13 = 'Phillips ML & Kupfer DJ (2013). Bipolar disorder diagnosis: challenges and future directions. Lancet 381:1663-1671 · PMID 23663952'
R_MC22 = 'McIntyre RS, Alda M, Baldessarini RJ, Bauer M, Berk M, Correll CU, et al. (2022). The clinical characterization of the adult patient with bipolar disorder aimed at personalization of management. World Psychiatry 21:364-387 · PMID 36073706'
R_TAK = 'Takeshima M (2017). Treating mixed mania/hypomania: a review and synthesis of the evidence. CNS Spectr 22:177-185 · PMID 28004626'
R_FOU = 'Fountoulakis KN, Kontis D, Gonda X, Siamouli M & Yatham LN (2012). Treatment of mixed bipolar states. Int J Neuropsychopharmacol 15:1015-1026 · PMID 22217434'
R_CUO = 'Cuomo A, Nikolova VL, Yalin N, Arnone D, Fagiolini A & Young AH (2017). Pharmacological treatment of mixed states. CNS Spectr 22:186-195 · PMID 28416033'
R_STA = 'Stahl SM, Morrissette DA, Faedda G, Fava M, Goldberg JF, Keck PE, et al. (2017). Guidelines for the recognition and management of mixed depression. CNS Spectr 22:203-219 · PMID 28421980'
R_RM1 = 'Rosenblat JD & McIntyre RS (2017). Treatment of mixed features in bipolar disorder. CNS Spectr 22:141-146 · PMID 27618746'
R_RM2 = 'Rosenblat JD & McIntyre RS (2017). Treatment recommendations for DSM-5-defined mixed features. CNS Spectr 22:147-154 · PMID 27629159'
R_PAX = 'McAllister-Williams RH, Goudie N, Azim L, et al. (2025). A randomised double-blind, placebo-controlled trial of pramipexole in addition to mood stabilisers for patients with treatment-resistant bipolar depression (the PAX-BD study). J Psychopharmacol 39:106-120 · PMID 39829389'
R_KC02 = 'Kahn D & Chaplan R (2002). The «good enough» mood stabilizer: a review of the clinical evidence. CNS Spectr 7:227-237 · PMID 15211286'
R_GG00 = 'Goodwin FK & Ghaemi SN (2000). The impact of mood stabilizers on suicide in bipolar disorder: a comparative analysis. CNS Spectr 5(2 Suppl 1) (suplemento académico; sin PMID en PubMed)'
R_MR24 = 'Martinez-Raga J, Bajouco M, Kenzin D, Sahlsten J, De Berardis D, Tzeferakos G, et al. (2024). Dual disorder: does expert clinical experience support the rationale for cariprazine use? Eur Rev Med Pharmacol Sci 28:2095-2106 · PMID 38497891'
R_CAN18 = 'Yatham LN, Kennedy SH, Parikh SV, Schaffer A, Bond DJ, Frey BN, et al. (2018). Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord 20:97-170 · PMID 29536616'
R_KER23 = 'Keramatian K, Chithra NK & Yatham LN (2023). The CANMAT and ISBD guidelines for the treatment of bipolar disorder: summary and a 2023 update of evidence. Focus (Am Psychiatr Publ) 21:344-353 · PMID 38695002'
R_MAL21 = 'Malhi GS, Bell E, Bassett D, Boyce P, Bryant R, Hazell P, et al. (2021). The 2020 Royal Australian and New Zealand College of Psychiatrists clinical practice guidelines for mood disorders. Aust N Z J Psychiatry 55:7-117 · PMID 33353391'
R_PARK24 = 'Park JH, Fernando K, Park YH & Park EO (2024). Global perspectives on bipolar disorder treatment: in-depth comparative analysis of international guidelines for medication selection. BJPsych Open 10:e75 · PMID 38586960'
R_AND18 = 'Andrews G, Bell C, Boyce P, Gale C, Lampe L, Marwat O, Rapee R & Wilkins G (2018). Royal Australian and New Zealand College of Psychiatrists clinical practice guidelines for the treatment of panic disorder, social anxiety disorder and generalised anxiety disorder. Aust N Z J Psychiatry 52:1109-1172 · doi 10.1177/0004867418799453'
R_SOR19 = 'Sorella S, Lapomarda G, Messina I, Frederickson JJ, Siugzdaite R, Job R & Grecucci A (2019). Testing the expanded continuum hypothesis of schizophrenia and bipolar disorder. Neural and psychological evidence for shared and distinct mechanisms. Neuroimage Clin 23:101854 · PMID 31121524'

NODES = [
N('sintom_vs_modif', 'Efecto sintomático frente a efecto modificador de la enfermedad (Ghaemi)', 'Sintomático vs modificador', 'mod', 'eti', 'mod', 3, 'clinical', 'm', 2022, 'hip',
  'Ghaemi distingue entre fármacos que alivian síntomas y fármacos que modifican el curso de la enfermedad. Sostiene que la mayoría de los psicofármacos son sintomáticos, «like 50 variations of aspirin» (p. 252). Toma el concepto de la neurología y le da dos componentes: uno biológico (actúa sobre la fisiopatología) y otro clínico (mejora el curso a largo plazo y la mortalidad) (p. 252). Para hablar de modificación de la enfermedad exige ambos tipos de prueba: clínica (curso a largo plazo, mortalidad por suicidio) y biológica (p. 254). Según el autor, solo el litio ha demostrado en ensayos aleatorizados que mejora el curso y previene el suicidio consumado (p. 255). La lamotrigina no mejora los síntomas actuales, pero tiene efecto preventivo a largo plazo (p. 255).',
  ['Sintomático: alivia el episodio sin cambiar el curso; la mayoría de los psicofármacos (p. 252)',
   'Modificador: componente biológico (fisiopatología) y componente clínico (curso, mortalidad) (p. 252)',
   'Prueba exigida: curso a largo plazo y mortalidad por suicidio, más plausibilidad biológica (p. 254)',
   'Neuroprotección (BDNF y similares): datos insuficientes para afirmar modificación de la enfermedad (p. 254)',
   'Crítica al diseño de retirada aleatorizada: las recaídas aparecen en 3-6 meses, casi nunca da negativo y fue la base de la aprobación de la esketamina por la FDA (pp. 254-255)',
   'Litio: único con curso mejorado y prevención del suicidio consumado en ECA (p. 255)'],
  'Ensayo conceptual de un solo autor. Sirve para leer críticamente los ensayos de mantenimiento, no como guía de prescripción.',
  [R_GH22], ['lm_bip', 'lamotrig', 'esketamina', 'enfermedad_dsm_ghaemi', 'est_animo_bueno', 'antisuic_comp'], al=['disease-modifying', 'modificación de la enfermedad']),

N('enfermedad_dsm_ghaemi', 'Enfermedades frente a cuadros clínicos en el DSM (Ghaemi 2013)', 'Enfermedad vs cuadro clínico', 'mod', 'eti', 'mod', 3, 'kraepelin', 'm', 2013, 'hip',
  'En un comentario de World Psychiatry, Ghaemi afirma que la psiquiatría actual es «Galenic, not Hippocratic» (p. 210). Recupera la distinción de Kraepelin entre procesos patológicos (Krankheitsprozesse) y cuadros clínicos (Zustandsbilder) (p. 210). Como enfermedades cita la esquizofrenia, la enfermedad maníaco-depresiva, el TOC y el autismo; como cuadros clínicos válidos que no serían enfermedades, el abuso de sustancias, el TEPT, el trastorno límite o el TDAH, entre otros (p. 210). Con la metáfora de que «red skies are not red apples» critica que el término «trastorno» ponga todo en el mismo plano ontológico (p. 211). Concluye que la cuestión no es categorías frente a dimensiones, sino «science versus pragmatism», y se separa del proyecto RDoC (p. 211).',
  ['Krankheitsprozesse (enfermedades) frente a Zustandsbilder (cuadros clínicos) (p. 210)',
   'Enfermedades según el autor: esquizofrenia, enfermedad maníaco-depresiva, TOC, autismo (p. 210)',
   'Cuadros clínicos que no serían enfermedades: abuso de sustancias, TEPT, trastorno límite, TDAH (p. 210)',
   '«Red skies are not red apples»: crítica al término «disorder» (p. 211)',
   'Ciencia frente a pragmatismo, no categorías frente a dimensiones (p. 211)'],
  'Postura de un autor en una sección de debate. La lista de «enfermedades» y «cuadros clínicos» es suya, no un consenso.',
  [R_GH13], ['boorse_bst', 'rdoc', 'sintom_vs_modif', 'fantasma_kraepelin', 'locura_md'], al=['Krankheitsprozess', 'Zustandsbild']),

N('fantasma_kraepelin', 'El fantasma de Kraepelin: espectro maníaco-depresivo y estabilización del ánimo', 'Fantasma de Kraepelin', 'con', 'nos', 'bip', 3, 'kraepelin', 'm', 2007, 'hip',
  'Editorial de Ghaemi y Baldessarini. Recuerdan que la locura maníaco-depresiva de Kraepelin era amplia: incluía la melancolía recurrente, la ciclotimia y los temperamentos, y se apoyaba en el criterio de curso de Kahlbaum (p. 66). En su figura 1 estiman una prevalencia de alrededor del 1-2% para el TB I, del 2-5% para la depresión mayor y un grupo intermedio de espectro bipolar (TB II ampliado) de otro 2-5% (p. 66). Siguiendo a Benazzi, proponen arquetipos categoriales con zonas intermedias dimensionales (p. 66). Aceptan el término «estabilizador del ánimo» si equivale a eficacia profiláctica demostrada a largo plazo (p. 67), critican las medidas sustitutivas de mantenimiento (pp. 67-68) y señalan el uso excesivo de antidepresivos en el TB (p. 68).',
  ['Locura maníaco-depresiva amplia: melancolía recurrente, ciclotimia y temperamentos (p. 66)',
   'Estimaciones de su figura 1: TB I alrededor del 1-2%; espectro intermedio 2-5%; depresión mayor 2-5% (p. 66)',
   'Arquetipos categoriales con intermedios dimensionales (Benazzi) (p. 66)',
   '«Estabilizador del ánimo» = eficacia profiláctica a largo plazo (p. 67)',
   'Crítica a las medidas sustitutivas en los ensayos de mantenimiento (pp. 67-68)'],
  'Las cifras de prevalencia de la figura son aproximaciones de los autores para ilustrar el espectro, no estimaciones epidemiológicas propias.',
  [R_GB07], ['locura_md', 'kraepelin_1913', 'akiskal_hit', 'cicl', 'tb2', 'bsd_ghaemi', 'est_animo_bueno'], al=["Kraepelin's ghost"]),

N('bsd_ghaemi', 'Trastorno del espectro bipolar: definición propuesta y «enfermedad de Cade» (Ghaemi, Ko y Goodwin 2002)', 'Espectro bipolar (Ghaemi)', 'con', 'nos', 'bip', 3, 'clinical', 'm', 2002, 'hip',
  'Ghaemi, Ko y Goodwin llaman «enfermedad de Cade» (término de Ketter) al TB I clásico que responde al litio (p. 126). Recogen que el 40% de los pacientes bipolares había recibido antes un diagnóstico de depresión unipolar (p. 126). Proponen una definición operativa de trastorno del espectro bipolar (tabla 2, p. 129) para sustituir al TB no especificado (p. 129). La hipomanía inducida por tratamiento y los antecedentes familiares fueron los rasgos más específicos (100% y 98%, datos de Akiskal) (p. 129).',
  ['A: al menos un episodio depresivo mayor (tabla 2, p. 129)',
   'B: sin hipomanía ni manía espontáneas',
   'C: antecedentes de TB en familiar de primer grado, o manía/hipomanía inducida por antidepresivos',
   'D (6 de 9 si no hay C): personalidad hipertímica; >3 episodios depresivos; episodios breves (<3 meses); síntomas atípicos; depresión psicótica; inicio <25 años; depresión posparto; pérdida de efecto del antidepresivo; falta de respuesta a ≥3 antidepresivos',
   'Regla de combinación: un criterio C más ≥2 de D, o ambos C más 1 de D',
   'Ningún antidepresivo ha demostrado eficacia profiláctica en el TB; 7 ensayos controlados a largo plazo (p. 130)'],
  'Definición propuesta, no adoptada por el DSM ni la CIE. Comparte elementos con los indicadores probabilísticos de Mitchell 2008.',
  [R_GKG02], ['ind_bipdep', 'bp3', 'tb2', 'conv_bip', 'fantasma_kraepelin', 'ad_tb_cautela', 'lm_bip'], al=['bipolar spectrum disorder', "Cade's disease", 'enfermedad de Cade']),

N('ad_tb_cautela', 'Antidepresivos en el trastorno bipolar: argumentos para la cautela', 'Antidepresivos en TB: cautela', 'con', 'ter', 'ad', 2, 'clinical', 'l', 2003, 'hip',
  'Ghaemi y colaboradores (2003) plantean cuatro proposiciones y tres conclusiones (resumen, p. 421): reservar los antidepresivos para la depresión bipolar aguda grave, retirarlos tras la recuperación y mantenerlos solo en el 15-20% que recae una y otra vez al retirarlos. En 2002 el mismo grupo señaló que ningún antidepresivo había demostrado eficacia profiláctica en el TB (Ghaemi, Ko y Goodwin 2002, p. 130). En una columna de Psychiatric Times (2010), Ghaemi critica un metaanálisis favorable a los antidepresivos en depresión bipolar aguda: lo basa en unos 5 estudios aleatorizados heterogéneos, y advierte que un metaanálisis de 2 o 3 estudios es casi inútil y que en algunos el «placebo» era en realidad un neuroléptico antimaníaco.',
  ['Uso solo en depresión bipolar aguda grave (resumen, p. 421)',
   'Retirada tras la recuperación (p. 421)',
   'Mantenimiento solo en el 15-20% con recaídas repetidas al retirar (p. 421)',
   'Sin eficacia profiláctica demostrada (Ghaemi, Ko y Goodwin 2002, p. 130)',
   'Heterogeneidad y pocos estudios: límites de los metaanálisis (Ghaemi 2010, columna)'],
  'Postura de un grupo concreto. Las guías posteriores (CANMAT/ISBD 2018) también restringen los antidepresivos en el TB, con matices distintos. La columna de 2010 no es una fuente revisada por pares.',
  [R_GH03, R_GKG02, R_GH10], ['bp3', 'dep_bip_tx', 'tb_induc', 'bsd_ghaemi', 'canmat_isbd_2018', 'isrs']),

N('isbd_diag_2008', 'Guías diagnósticas de la ISBD para el trastorno bipolar (2008)', 'ISBD diagnóstico 2008', 'con', 'nos', 'bip', 3, 'clinical', 'm', 2008, 'guia',
  'Informe del grupo de trabajo de guías diagnósticas de la International Society for Bipolar Disorders (Ghaemi, Bauer, Cassidy, Malhi, Mitchell, Phelps, Vieta y Youngstrom). Resume el estado nosológico de la enfermedad bipolar, discute posibles cambios en las definiciones del DSM-IV y la CIE-10, revisa la literatura, expone los puntos de consenso y de desacuerdo, y propone definiciones para orientar el diagnóstico con el conocimiento disponible (resumen, p. 117).',
  ['Revisión del estado nosológico del TB (p. 117)',
   'Propuestas de revisión del DSM-IV y la CIE-10, previas al DSM-5 (p. 117)',
   'Explicita consenso y disenso dentro del grupo (p. 117)',
   'Publicado como resumen de un número especial de Bipolar Disorders'],
  'Precede al DSM-5 (2013). Parte de sus propuestas sobre estados mixtos y espectro pasó al debate del especificador de rasgos mixtos.',
  [R_ISBD], ['tb1', 'tb2', 'dsm2', 'bsd_ghaemi', 'aredoc_parker', 'tb_dx_retos']),

N('aredoc_parker', 'Proyecto AREDOC: revisión de los criterios DSM-5 de los trastornos bipolares (fase I)', 'AREDOC', 'con', 'nos', 'bip', 3, 'dsm', 'm', 2018, 'guia',
  'El grupo AREDOC (Assessment, Revision and Evaluation of DSM and other Operational Criteria), coordinado por Parker, revisó los criterios DSM-5 de los trastornos bipolares. En la fase I señala tres problemas: distinguir manía de hipomanía, juzgar el deterioro funcional (en la hipomanía el funcionamiento puede incluso mejorar) y el riesgo de falsos positivos si se elimina el criterio de duración.',
  ['Diferenciación manía-hipomanía como problema central',
   'Deterioro funcional: en la hipomanía puede haber mejora del funcionamiento',
   'Duración: retirarla aumentaría los falsos positivos',
   'Fase I de un proyecto con fases sucesivas'],
  'Propuesta de un grupo de expertos, no un cambio oficial del DSM.',
  [R_AREDOC], ['tb1', 'tb2', 'bp3b', 'isbd_diag_2008', 'tb_dx_retos']),

N('tb_dx_retos', 'Diagnóstico del trastorno bipolar: retos y direcciones futuras (Phillips y Kupfer 2013)', 'Retos diagnósticos del TB', 'con', 'nos', 'bip', 3, 'neurobio', 'm', 2013, 'meta',
  'Revisión en The Lancet. Recoge que hasta el 60% de quienes consultan por depresión y tienen un TB reciben inicialmente el diagnóstico de depresión unipolar recurrente (p. 1663). Subraya que el TB II es el más difícil de distinguir. Plantea como futuro la neuroimagen, el reconocimiento de patrones y las «biofirmas», dentro de una visión del ánimo como continuo.',
  ['Error diagnóstico frecuente como depresión unipolar recurrente: 60% (p. 1663)',
   'El TB II es el más difícil de separar de la depresión unipolar',
   'Propuestas: neuroimagen, reconocimiento de patrones, biofirmas',
   'Continuo afectivo como marco'],
  'Las biofirmas propuestas no tienen todavía uso clínico diagnóstico.',
  [R_PK13], ['tb2', 'conv_bip', 'ind_bipdep', 'bsd_ghaemi', 'caract_mcintyre']),

N('caract_mcintyre', 'Caracterización clínica del adulto con trastorno bipolar para personalizar el tratamiento (McIntyre et al. 2022)', 'Caracterización clínica TB', 'con', 'nos', 'bip', 3, 'clinical', 'm', 2022, 'meta',
  'Artículo especial de World Psychiatry con 20 autores. Parte de que la mayoría de las personas con TB no logran ni mantienen la recuperación sindrómica completa. Propone caracterizar dominios clínicos con valor práctico mientras llegan los métodos «multiómicos» y de aprendizaje automático (resumen, p. 364). Considera bien establecido que los rasgos mixtos, sobre todo en la depresión, y la comorbilidad física y psiquiátrica informan del curso, la respuesta y el riesgo de suicidio. Asocia la exposición temprana a abuso sexual o físico y negligencia emocional a presentaciones más complicadas.',
  ['Rasgos mixtos (sobre todo depresivos): curso, respuesta y suicidio (p. 364)',
   'Comorbilidad física y psiquiátrica',
   'Trauma temprano: presentaciones más complejas',
   'Subtipos validados, en especial TB I frente a TB II, para decisiones farmacológicas',
   'Funcionamiento social, relaciones y estigma internalizado: riesgo de recaída y calidad de vida',
   'Razón de mortalidad estandarizada elevada por suicidio: caracterizar este dominio en todos los pacientes'],
  'Marco de evaluación propuesto por expertos, sin validación prospectiva como conjunto.',
  [R_MC22], ['dsm2', 'crapid', 'suic_mayor', 'tb1', 'tb2', 'tb_dx_retos', 'ace_ranzcp'], tags=['trauma', 'risk']),

N('tx_mania_mixta', 'Tratamiento farmacológico de la manía e hipomanía con rasgos mixtos', 'Tx manía mixta', 'tx', 'ter', 'ap', 2, 'clinical', 'm', 2017, 'meta',
  'Tres revisiones de la carpeta coinciden en que casi todos los datos proceden de análisis post hoc de ensayos en manía. Takeshima (2017) incluyó 34 estudios; solo 2 ensayos estudiaron de forma prospectiva la manía o hipomanía mixta. En fase aguda, la evidencia más sólida fue para aripiprazol, asenapina, carbamazepina, olanzapina y ziprasidona; quetiapina y valproato también fueron eficaces. En mantenimiento, la evidencia más sólida fue para olanzapina y quetiapina, solas o con litio o valproato. Fountoulakis et al. (2012) encontraron eficacia del valproato y la carbamazepina en episodios mixtos agudos, una eficacia del litio dudosa y ningún beneficio profiláctico significativo del litio o el valproato en monoterapia tras una manía mixta. Cuomo et al. (2017) confirman la escasez de ensayos controlados con placebo específicos.',
  ['Fase aguda, evidencia más sólida: aripiprazol, asenapina, carbamazepina, olanzapina, ziprasidona (Takeshima 2017, resumen)',
   'También eficaces: quetiapina, valproato (Takeshima 2017)',
   'Mantenimiento: olanzapina y quetiapina, solas o con litio o valproato (Takeshima 2017)',
   'Litio: eficacia dudosa en el episodio mixto agudo (Fountoulakis 2012)',
   'Antipsicótico atípico más eutimizante: mayor efecto agudo y profiláctico (Fountoulakis 2012)',
   'Base de datos: sobre todo análisis post hoc (Cuomo 2017; Takeshima 2017)'],
  'Estudios hechos con la definición DSM-IV de episodio mixto. Su extrapolación al especificador DSM-5 es incierta.',
  [R_TAK, R_FOU, R_CUO], ['mxto', 'smix', 'dsm2', 'aripiprazol', 'olanzapina', 'quetiapina', 'carbamaz', 'vpa_bip', 'lm_bip', 'tx_depmixta']),

N('tx_depmixta', 'Tratamiento de la depresión con rasgos mixtos', 'Tx depresión mixta', 'tx', 'ter', 'ap', 3, 'clinical', 'm', 2017, 'guia',
  'Stahl et al. (2017) reunieron un panel de expertos para guiar el reconocimiento y el tratamiento de la depresión mixta, porque las guías, las aprobaciones regulatorias y la evidencia daban un apoyo insuficiente; los fármacos se habían estudiado con la definición DSM-IV, más estricta. Rosenblat y McIntyre (2017) estiman que alrededor del 40% de las personas con TB tienen rasgos mixtos en algún momento. Hallaron 2 ensayos aleatorizados y 6 análisis post hoc, todos con antipsicóticos de segunda generación, que dan apoyo preliminar. En su segundo artículo de recomendaciones provisionales, la lurasidona es el único antipsicótico en monoterapia eficaz en la depresión mayor con rasgos mixtos. Los antidepresivos siguen siendo de primera línea en la depresión mayor con o sin rasgos mixtos, pero su uso en monoterapia exige vigilancia.',
  ['Rasgos mixtos en alrededor del 40% de las personas con TB a lo largo del curso (Rosenblat y McIntyre 2017a)',
   'Evidencia: 2 ECA y 6 análisis post hoc, todos con antipsicóticos de segunda generación (2017a)',
   'Lurasidona: única monoterapia antipsicótica eficaz en la depresión mayor con rasgos mixtos (2017b)',
   'Litio y valproato: poco estudiados con la definición DSM-5 (2017a; 2017b)',
   'Antidepresivo en monoterapia con rasgos mixtos: más vigilancia (2017b)',
   'Panel de expertos: base empírica escasa, recomendaciones apoyadas en experiencia clínica (Stahl 2017)'],
  'Recomendaciones provisionales con evidencia limitada, como reconocen los propios autores.',
  [R_STA, R_RM1, R_RM2], ['dsm2', 'dmko', 'smix', 'lurasidona', 'ap_atipicos', 'dep_bip_tx', 'tx_mania_mixta', 'koukopoulos_hit']),

N('pax_bd', 'Pramipexol en la depresión bipolar resistente: ensayo PAX-BD (2025)', 'PAX-BD', 'tx', 'ter', 'otr', 3, 'clinical', 'l', 2025, 'ecr',
  'Ensayo multicéntrico, aleatorizado, doble ciego y controlado con placebo. Definió la depresión bipolar resistente como falta de respuesta, intolerancia o contraindicación de al menos 2 de estos fármacos: quetiapina, olanzapina, lamotrigina o lurasidona. El pramipexol (máximo 2,5 mg/día de sal) o placebo se añadió al eutimizante en curso; se incluyeron 39 participantes (18 frente a 21). A las 12 semanas, la reducción en el QIDS-SR fue de 4,4 frente a 2,1 puntos (d = −0,72), sin significación estadística (p = 0,087). A las 36 semanas hubo ventajas significativas en el QIDS-SR (6,28 puntos; IC 95% 1,85-10,71) y en el funcionamiento psicosocial (5,36; IC 95% 0,38-10,35). A la salida del ensayo, la respuesta fue del 46% frente al 6% (p = 0,026) y la remisión del 31% frente al 0% (p = 0,030). Las puntuaciones de hipomanía fueron más altas a las 12 semanas.',
  ['Criterio de resistencia: ≥2 de quetiapina, olanzapina, lamotrigina o lurasidona',
   'n = 39; cierre anticipado del estudio',
   'Variable principal (QIDS-SR, 12 semanas): diferencia no significativa (p = 0,087)',
   'Beneficios significativos a largo plazo en ánimo y funcionamiento',
   'Más síntomas hipomaníacos y titulación compleja'],
  'Muestra pequeña. Los autores piden ensayos más grandes. El pramipexol no tiene esta indicación en ficha técnica. Los agonistas dopaminérgicos se asocian a trastornos del control de impulsos (ver nodo relacionado).',
  [R_PAX], ['dep_bip_tx', 'agon_dop_impulsos', 'quetiapina', 'lurasidona', 'lamotrig', 'olanzapina']),

N('est_animo_bueno', 'El estabilizador del ánimo «suficientemente bueno» (Kahn y Chaplan 2002)', 'Estabilizador suficientemente bueno', 'con', 'ter', 'est', 2, 'clinical', 'm', 2002, 'hip',
  'Kahn y Chaplan toman la expresión de Winnicott para preguntarse qué es un estabilizador del ánimo «suficientemente bueno» (p. 227). Recogen la definición de Sachs: un tratamiento que alivia o previene episodios agudos de manía o depresión, y que no empeora la depresión ni la manía ni induce ciclación rápida (p. 227). El ideal sería un fármaco bimodal, igual de eficaz en manía y depresión, en fase aguda y en prevención; ninguno lo logra en una proporción grande de pacientes, y la experiencia naturalista indica que solo el 15% se trata bien con un estabilizador en monoterapia (p. 227). Agrupan los estabilizadores en dos familias según su probable mecanismo: litio y anticonvulsivos, ligados a segundos mensajeros, más antimaníacos que antidepresivos salvo la lamotrigina; y antipsicóticos atípicos, que actúan sobre la dopamina y otras monoaminas (resumen, p. 227).',
  ['Definición de Sachs: eficacia en un polo sin empeorar el otro ni inducir ciclación rápida (p. 227)',
   'Ideal bimodal no alcanzado por ningún fármaco (p. 227)',
   'Monoterapia eficaz solo en el 15% (dato naturalista citado, p. 227)',
   'Hasta mediados de los 90 solo se aceptaban litio, carbamazepina, divalproato y TEC (p. 227)',
   'Lamotrigina: efecto antidepresivo sin precipitar manía (resumen)'],
  'Revisión de 2002; la evidencia de los antipsicóticos atípicos en mantenimiento creció después. Ghaemi y Baldessarini (2007) proponen una definición más estricta basada en la profilaxis.',
  [R_KC02, R_GB07], ['lm_bip', 'lamotrig', 'carbamaz', 'vpa_bip', 'ap_atipicos', 'fantasma_kraepelin', 'sintom_vs_modif'], al=['good enough mood stabilizer']),

N('antisuic_comp', 'Litio y anticonvulsivos frente al suicidio en el trastorno bipolar: análisis comparativo', 'Eutimizantes y suicidio', 'con', 'ter', 'est', 2, 'clinical', 'm', 2000, 'obs',
  'Goodwin y Ghaemi revisaron los datos sobre litio y anticonvulsivos y mortalidad por suicidio en el TB. Citan la revisión de Tondo y colaboradores: el riesgo de intentos y suicidios consumados fue de 3,2 por 100 pacientes-año sin litio frente a 0,37 con litio, una diferencia de 8,6 veces. Solo encontraron dos estudios con datos sobre anticonvulsivos y suicidio, con información incompleta. En el estudio aleatorizado alemán de 2,5 años, 4 de 9 suicidios y 5 de 5 intentos ocurrieron con carbamazepina y ninguno con litio en el momento de la muerte (p = 0,03 para suicidios consumados; p = 0,001 sumando intentos). Recomiendan estudiar la mortalidad como variable de resultado.',
  ['Litio: 3,2 frente a 0,37 intentos y suicidios por 100 pacientes-año (Tondo, citado)',
   'Anticonvulsivos: solo 2 estudios con datos, incompletos',
   'Litio frente a carbamazepina en el estudio alemán: diferencia en suicidios (p = 0,03)',
   'Separar intentos de suicidio y suicidios consumados en la literatura',
   'Factores de riesgo citados: depresión con agitación, desesperanza, insomnio global, ansiedad o pánico, estados mixtos, ciclación rápida, consumo de sustancias'],
  'Revisión del año 2000 en un suplemento. Ghaemi (2022) mantiene la conclusión: solo el litio ha demostrado prevenir el suicidio consumado en ECA.',
  [R_GG00, R_GH22], ['lm_bip', 'carbamaz', 'vpa_bip', 'suic_mayor', 'schou_hit', 'sintom_vs_modif'], tags=['risk']),

N('cariprazina_dual', 'Cariprazina en la patología dual con esquizofrenia: consenso de expertos (2024)', 'Cariprazina y patología dual', 'tx', 'ter', 'ap', 3, 'clinical', 'l', 2024, 'guia',
  'Artículo de un grupo europeo de expertos reunido en febrero de 2023 sobre la esquizofrenia con trastorno por consumo de sustancias (patología dual). La comorbilidad es frecuente y empeora el pronóstico, y las guías la abordan poco. Recomiendan atender a estas personas en un único centro. Para quienes necesitan controlar los síntomas psicóticos y la abstinencia, aconsejan un antipsicótico no sedante con actividad «anticraving», y razonan a favor de la cariprazina desde su experiencia clínica.',
  ['Población: espectro de la esquizofrenia con trastorno por consumo de sustancias, no TB',
   'Atención integrada en un único centro',
   'Antipsicótico no sedante con actividad «anticraving»',
   'Base: experiencia clínica del panel, no ensayos'],
  'Opinión de expertos. Aunque el PDF está en la carpeta de bipolaridad, el artículo trata la esquizofrenia. Recoger posibles conflictos de interés de los autores al citarlo.',
  [R_MR24], ['cariprazina', 'esq', 'tcs', 'ap_atipicos']),

N('canmat_isbd_2018', 'Guías CANMAT/ISBD 2018 para el trastorno bipolar y actualización de 2023', 'CANMAT/ISBD 2018', 'con', 'ter', 'est', 1, 'clinical', 'h', 2018, 'guia',
  'Guía conjunta de la Canadian Network for Mood and Anxiety Treatments y la International Society for Bipolar Disorders. Clasifica los tratamientos en primera, segunda y tercera línea según la evidencia de eficacia, el apoyo clínico y el consenso sobre seguridad, tolerabilidad y riesgo de viraje. Como novedad, ordena jerárquicamente las opciones de primera y segunda línea para la manía aguda, la depresión aguda y el mantenimiento del TB I. En manía aguda, de primera línea: litio, quetiapina, divalproato, asenapina, aripiprazol, paliperidona, risperidona y cariprazina, solos o combinados. En depresión del TB I: quetiapina, lurasidona con litio o divalproato, litio, lamotrigina, lurasidona o lamotrigina añadida. En mantenimiento: litio, quetiapina, divalproato, lamotrigina, asenapina y aripiprazol, en monoterapia o combinados. Keramatian, Chithra y Yatham (2023) resumen la guía y añaden la evidencia nueva hasta 2023.',
  ['Primera línea en manía aguda: litio, quetiapina, divalproato, asenapina, aripiprazol, paliperidona, risperidona, cariprazina (resumen)',
   'Primera línea en depresión TB I: quetiapina, lurasidona + litio/divalproato, litio, lamotrigina, lurasidona, lamotrigina añadida (resumen)',
   'Mantenimiento: litio, quetiapina, divalproato, lamotrigina, asenapina, aripiprazol (resumen)',
   'Jerarquía nueva dentro de primera y segunda línea, teniendo en cuenta todas las fases',
   'Excepción en mantenimiento: los antidepresivos eficaces en fase aguda no se continúan de forma general',
   'Apartados sobre TB II, embarazo y posparto, infancia, edad avanzada y comorbilidades'],
  'Guía de referencia muy citada en el atlas, que hasta ahora no tenía nodo propio. Sus recomendaciones no sustituyen a la ficha técnica en España.',
  [R_CAN18, R_KER23], ['lm_bip', 'quetiapina', 'vpa_bip', 'lamotrig', 'lurasidona', 'aripiprazol', 'cariprazina', 'dep_bip_tx', 'tb2', 'ranzcp_animo_2020', 'guias_comparadas_tb'], al=['CANMAT', 'ISBD']),

N('ranzcp_animo_2020', 'Guía RANZCP 2020 de trastornos del ánimo', 'RANZCP ánimo 2020', 'con', 'ter', 'est', 1, 'clinical', 'h', 2021, 'guia',
  'Guía del Royal Australian and New Zealand College of Psychiatrists (MDcpg2020), publicada en enero de 2021 y presidida por Malhi. Se basa en la evidencia completada con consenso clínico de expertos y en una consulta externa amplia. Amplía la guía de 2015 y trata a la vez los trastornos depresivos y bipolares. En el TB concede primacía al litio para el mantenimiento (p. 53) y afirma que es relativamente fácil de prescribir y manejar a largo plazo, y que sus efectos adversos se han exagerado (p. 55).',
  ['Evidencia más consenso de expertos con revisión externa (resumen)',
   'Depresión y TB en una sola guía, continuación de la de 2015',
   'Litio con primacía en el mantenimiento del TB (p. 53)',
   'Litio: manejo a largo plazo factible; efectos adversos exagerados según la guía (p. 55)',
   'Modelo ACE de la depresión (ver nodo relacionado)'],
  'La primacía del litio es una postura de esta guía; otras guías ordenan las opciones de otra forma (Park et al. 2024).',
  [R_MAL21], ['lm_bip', 'ace_ranzcp', 'canmat_isbd_2018', 'guias_comparadas_tb', 'tb1'], al=['MDcpg2020', 'RANZCP 2020']),

N('guias_comparadas_tb', 'Guías internacionales de tratamiento del trastorno bipolar: análisis comparativo (Park et al. 2024)', 'Guías TB comparadas', 'con', 'ter', 'est', 2, 'clinical', 'm', 2024, 'meta',
  'Revisión que compara las guías de tratamiento farmacológico del TB actualizadas después de 2014: Reino Unido, Canadá, Australia y Nueva Zelanda, Corea del Sur y el International College of Neuropsychopharmacology. Atribuye las diferencias en los fármacos recomendados al método de elaboración (consenso de expertos o metaanálisis), al momento de los análisis, a la selección de estudios, a las diferencias en enzimas metabólicas entre poblaciones y a las políticas sanitarias de cada país. El principal obstáculo para recomendaciones coherentes es la escasez de estudios de alta calidad (resumen).',
  ['Guías comparadas: NICE (Reino Unido), CANMAT, RANZCP, Corea del Sur, CINP',
   'Fuente de las diferencias: consenso frente a metaanálisis',
   'También influyen el calendario de los análisis y la selección de estudios',
   'Diferencias farmacogenéticas entre poblaciones y políticas sanitarias',
   'Conclusión: faltan ensayos amplios de alta calidad'],
  'Revisión narrativa de un equipo de farmacia; útil para explicar por qué las guías discrepan.',
  [R_PARK24], ['canmat_isbd_2018', 'ranzcp_animo_2020', 'lm_bip', 'quetiapina']),

N('ranzcp_ansiedad_2018', 'Guía RANZCP 2018 para el trastorno de pánico, la ansiedad social y la ansiedad generalizada', 'RANZCP ansiedad 2018', 'con', 'ter', 'ans', 1, 'clinical', 'h', 2018, 'guia',
  'Guía del Royal Australian and New Zealand College of Psychiatrists para adultos. Recomienda un enfoque pragmático: primero psicoeducación y consejo sobre estilo de vida, y después un tratamiento inicial elegido con el paciente según la gravedad, sus preferencias, la accesibilidad y el coste (resumen, p. 1109). Las opciones iniciales para los tres trastornos son la terapia cognitivo-conductual (presencial o por ordenador, tableta o aplicación), la farmacoterapia con un ISRS o un IRSN junto con indicaciones de exposición gradual, o la combinación de ambas (resumen, p. 1109).',
  ['Escalón inicial: psicoeducación y estilo de vida (p. 1109)',
   'Decisión compartida según gravedad, preferencia, acceso y coste (p. 1109)',
   'TCC presencial o digital (p. 1109)',
   'ISRS o IRSN más exposición gradual (p. 1109)',
   'Combinación TCC + fármaco (p. 1109)'],
  'Guía para población adulta de Australia y Nueva Zelanda. No se ha localizado su registro en PubMed; se cita por su DOI.',
  [R_AND18], ['panic', 'fobia_soc', 'tag', 'tcc_panico', 'isrs', 'venlafaxina', 'duloxetina'], al=['RANZCP 2018 anxiety']),

N('continuo_ampliado', 'Hipótesis del continuo ampliado entre esquizofrenia y trastorno bipolar (Sorella et al. 2019)', 'Continuo ampliado esquizofrenia-TB', 'mod', 'eti', 'cir', 3, 'neurobio', 'l', 2019, 'obs',
  'Estudio de morfometría basada en fuentes (source-based morphometry) con 46 personas con esquizofrenia, 46 con TB y 66 controles sanos, más pruebas cognitivas, afectivas y clínicas. Halló un núcleo psicótico compartido en una red que incluye regiones parietales mediales y temporooccipitales, partes del cerebelo y el giro frontal medio. Encontró un núcleo cognitivo más afectado en la esquizofrenia, con alteraciones frontoparietales, e indicios débiles de un núcleo afectivo más afectado en el TB. Los perfiles psicológicos coincidieron: más deterioro cognitivo en la esquizofrenia y más alteración afectiva en el TB. Los autores proponen un continuo con un núcleo psicótico común y dos núcleos, cognitivo y afectivo, afectados en distinto grado (resumen).',
  ['Muestra: 46 esquizofrenia, 46 TB, 66 controles',
   'Núcleo psicótico compartido (parietal medial, temporooccipital, cerebelo, frontal medio)',
   'Núcleo cognitivo más afectado en la esquizofrenia (circuito frontoparietal)',
   'Núcleo afectivo más afectado en el TB (evidencia débil)',
   'Concordancia entre hallazgos neurales y psicológicos'],
  'Estudio transversal de una sola muestra. Amplía, no sustituye, el modelo del continuo psicótico.',
  [R_SOR19], ['cont_psic', 'esq', 'tb1', 'hered_bip', 'psmx']),
]

ids = {json.loads(l)['id'] for l in open(P, encoding='utf-8')}
new = [n for n in NODES if n['id'] not in ids]
dup = [n['id'] for n in NODES if n['id'] in ids]
if dup:
    print('Ya existen (se omiten):', dup)
allids = ids | {n['id'] for n in NODES}
bad = [(n['id'], r) for n in NODES for r in n['rel'] if r not in allids]
if bad:
    print('Relaciones rotas:', bad); sys.exit(1)
with open(P, 'a', encoding='utf-8') as f:
    for n in new:
        f.write(json.dumps(n, ensure_ascii=False) + '\n')
print('Añadidos', len(new), 'nodos')
