// Matriz comparada de las técnicas de neuromodulación en psiquiatría.
// Rangos tomados de CANMAT 2023 (tabla 8.3), CANMAT-ISBD 2018, BAP 2023 y NICE (NG222, TA59 e IPG542/530/679/676/693/680, hoy HealthTech guidance),
// leídos en nice.org.uk y en PubMed Central en noviembre de 2026; cifras de los resúmenes de PubMed; números de la FDA comprobados en accessdata.fda.gov y api.fda.gov.
const TITLE = 'Neuromodulación en psiquiatría: matriz comparada de técnicas, indicaciones, efecto, seguridad y regulación';
module.exports = {
  key: 'mat_neuromodulacion',
  meta: {
    title: TITLE,
    kind: 'mat',
    cap: 'Matriz de siete técnicas (terapia electroconvulsiva, estimulación magnética transcraneal repetitiva con theta burst y protocolos acelerados, estimulación transcraneal por corriente directa, estimulación del nervio vago, estimulación cerebral profunda, terapia convulsiva magnética, y fototerapia con cronoterapia) frente a mecanismo y requisitos, rango en guías por trastorno, magnitud del efecto, efectos adversos, contraindicaciones, situación regulatoria y mantenimiento. El símbolo de cada celda (● primera línea o recomendada, ◆ segunda línea u opción, △ tercera línea, ○ evidencia insuficiente o solo investigación, ✕ no recomendada, — sin datos) traduce la guía que se nombra en la misma celda, no una valoración propia; cada cifra lleva su fuente. Los parámetros de estimulación que aparecen pertenecen al estudio o a la guía citados y no son una pauta. Esquema docente: no sustituye al juicio clínico ni a los protocolos locales.',
    refs: [
      'Lam RW et al. (2024). Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 update on clinical guidelines for management of major depressive disorder in adults. Can J Psychiatry 69:641-687 · PMID 38711351 (pregunta 8 y tablas 8.2 y 8.3)',
      'Yatham LN et al. (2018). Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord 20:97-170 · PMID 29536616',
      'Rogers JP et al. (2023). Evidence-based consensus guidelines for the management of catatonia: recommendations from the British Association for Psychopharmacology. J Psychopharmacol 37:327-369 · PMID 37039129',
      'NICE (2022). Depression in adults: treatment and management. NICE guideline NG222, recomendaciones 1.4.39, 1.13.1-1.13.9, 1.14.1 y 1.15.1',
      'NICE (2003, última actualización de 1 de octubre de 2009). Guidance on the use of electroconvulsive therapy. Technology appraisal guidance TA59, recomendaciones 1.1-1.9 y apartados 3.2-3.7',
      'NICE (2015). Repetitive transcranial magnetic stimulation for depression. Interventional procedures guidance IPG542 (hoy HealthTech guidance HTG396), recomendaciones 1.1-1.3 y apartados 5.2-5.4',
      'NICE (2015). Transcranial direct current stimulation (tDCS) for depression. Interventional procedures guidance IPG530 (hoy HealthTech guidance HTG382), recomendación 1.1 y apartados 5.1-5.6',
      'NICE (2020). Implanted vagus nerve stimulation for treatment-resistant depression. Interventional procedures guidance IPG679 (hoy HealthTech guidance HTG551), recomendación 1.1 y apartados 2.4, 3.3, 3.5 y 3.8',
      'NICE (2020). Transcranial magnetic stimulation for obsessive-compulsive disorder. Interventional procedures guidance IPG676 (hoy HealthTech guidance HTG548), recomendación 1.1',
      'NICE (2021). Deep brain stimulation for chronic, severe, treatment-resistant obsessive-compulsive disorder in adults. Interventional procedures guidance IPG693 (hoy HealthTech guidance HTG577), recomendaciones 1.1-1.3 y apartado 3.3',
      'NICE (2020). Transcranial magnetic stimulation for auditory hallucinations. Interventional procedures guidance IPG680 (hoy HealthTech guidance HTG555), recomendación 1.1',
      'UK ECT Review Group (2003). Efficacy and safety of electroconvulsive therapy in depressive disorders: a systematic review and meta-analysis. Lancet 361:799-808 · PMID 12642045',
      'Mutz J et al. (2019). Comparative efficacy and acceptability of non-surgical brain stimulation for the acute treatment of major depressive episodes in adults: systematic review and network meta-analysis. BMJ 364:l1079 · PMID 30917990',
      'Berlim MT et al. (2014). Response, remission and drop-out rates following high-frequency repetitive transcranial magnetic stimulation (rTMS) for treating major depression: a systematic review and meta-analysis of randomized, double-blind and sham-controlled trials. Psychol Med 44:225-239 · PMID 23507264',
      'Blumberger DM et al. (2018). Effectiveness of theta burst versus high-frequency repetitive transcranial magnetic stimulation in patients with depression (THREE-D): a randomised non-inferiority trial. Lancet 391:1683-1692 · PMID 29726344',
      'Cole EJ et al. (2022). Stanford Neuromodulation Therapy (SNT): a double-blind randomized controlled trial. Am J Psychiatry 179:132-141 · PMID 34711062',
      'Senova S et al. (2019). Durability of antidepressant response to repetitive transcranial magnetic stimulation: systematic review and meta-analysis. Brain Stimul 12:119-128 · PMID 30344109',
      'Rossi S et al. (2021). Safety and recommendations for TMS use in healthy subjects and patient populations, with updates on training, ethical and regulatory issues: expert guidelines. Clin Neurophysiol 132:269-306 · PMID 33243615',
      'Carmi L et al. (2019). Efficacy and safety of deep transcranial magnetic stimulation for obsessive-compulsive disorder: a prospective multicenter randomized double-blind placebo-controlled trial. Am J Psychiatry 176:931-938 · PMID 31109199',
      'Brunoni AR et al. (2016). Transcranial direct current stimulation for acute major depressive episodes: meta-analysis of individual patient data. Br J Psychiatry 208:522-531 · PMID 27056623',
      'Brunoni AR et al. (2017). Trial of electrical direct-current therapy versus escitalopram for depression. N Engl J Med 376:2523-2533 · PMID 28657871',
      'Woodham RD et al. (2025). Home-based transcranial direct current stimulation treatment for major depressive disorder: a fully remote phase 2 randomized sham-controlled trial. Nat Med 31:87-95 · PMID 39433921',
      'Rush AJ et al. (2005). Vagus nerve stimulation for treatment-resistant depression: a randomized, controlled acute phase trial. Biol Psychiatry 58:347-354 · PMID 16139580',
      'Aaronson ST et al. (2017). A 5-year observational study of patients with treatment-resistant depression treated with vagus nerve stimulation or treatment as usual: comparison of response, remission, and suicidality. Am J Psychiatry 174:640-648 · PMID 28359201',
      'Holtzheimer PE et al. (2017). Subcallosal cingulate deep brain stimulation for treatment-resistant depression: a multisite, randomised, sham-controlled trial. Lancet Psychiatry 4:839-849 · PMID 28988904',
      'Dougherty DD et al. (2015). A randomized sham-controlled trial of deep brain stimulation of the ventral capsule/ventral striatum for chronic treatment-resistant depression. Biol Psychiatry 78:240-248 · PMID 25726497',
      'Alonso P et al. (2015). Deep brain stimulation for obsessive-compulsive disorder: a meta-analysis of treatment outcome and predictors of response. PLoS One 10:e0133591 · PMID 26208305',
      'Blumberger DM et al. (2026). Confirmatory efficacy and safety trial of magnetic seizure therapy versus right unilateral ultra-brief electroconvulsive therapy in depression (CREST-MST): a randomised, double-blind, non-inferiority trial in Canada and the USA. Lancet Psychiatry 13:376-386 · PMID 41997695',
      'Tang VM et al. (2021). A pilot study of magnetic seizure therapy for treatment-resistant obsessive-compulsive disorder. Depress Anxiety 38:161-171 · PMID 32949052',
      'Golden RN et al. (2005). The efficacy of light therapy in the treatment of mood disorders: a review and meta-analysis of the evidence. Am J Psychiatry 162:656-662 · PMID 15800134',
      'Lam RW et al. (2006). The Can-SAD study: a randomized controlled trial of the effectiveness of light therapy and fluoxetine in patients with winter seasonal affective disorder. Am J Psychiatry 163:805-812 · PMID 16648320',
      'Sit DK et al. (2018). Adjunctive bright light therapy for bipolar depression: a randomized double-blind placebo-controlled trial. Am J Psychiatry 175:131-139 · PMID 28969438',
      'Wu JC et al. (2009). Rapid and sustained antidepressant response with sleep deprivation and chronotherapy in bipolar disorder. Biol Psychiatry 66:298-301 · PMID 19358978',
      'Colombo C et al. (1999). Rate of switch from depression into mania after therapeutic sleep deprivation in bipolar depression. Psychiatry Res 86:267-270 · PMID 10482346',
      'Semkovska M & McLoughlin DM (2010). Objective cognitive performance associated with electroconvulsive therapy for depression: a systematic review and meta-analysis. Biol Psychiatry 68:568-577 · PMID 20673880',
      'Sackeim HA et al. (2007). The cognitive effects of electroconvulsive therapy in community settings. Neuropsychopharmacology 32:244-254 · PMID 16936712',
      'Tørring N et al. (2017). The mortality rate of electroconvulsive therapy: a systematic review and pooled analysis. Acta Psychiatr Scand 135:388-397 · PMID 28332236',
      'Jelovac A, Kolshus E & McLoughlin DM (2013). Relapse following successful electroconvulsive therapy for major depression: a meta-analysis. Neuropsychopharmacology 38:2467-2474 · PMID 23774532',
      'Sackeim HA et al. (2001). Continuation pharmacotherapy in the prevention of relapse following electroconvulsive therapy: a randomized controlled trial. JAMA 285:1299-1307 · PMID 11255384',
      'Kellner CH et al. (2006). Continuation electroconvulsive therapy vs pharmacotherapy for relapse prevention in major depression: a multisite study from the Consortium for Research in Electroconvulsive Therapy (CORE). Arch Gen Psychiatry 63:1337-1344 · PMID 17146008',
      'Leroy A et al. (2018). Is electroconvulsive therapy an evidence-based treatment for catatonia? A systematic review and meta-analysis. Eur Arch Psychiatry Clin Neurosci 268:675-687 · PMID 28639007',
      'Petrides G et al. (2015). Electroconvulsive therapy augmentation in clozapine-resistant schizophrenia: a prospective, randomized study. Am J Psychiatry 172:52-58 · PMID 25157964',
      'Sinclair DJ et al. (2019). Electroconvulsive therapy for treatment-resistant schizophrenia. Cochrane Database Syst Rev 3:CD011847 · PMID 30888709',
      'Fontenelle LF et al. (2015). Electroconvulsive therapy for obsessive-compulsive disorder: a systematic review. J Clin Psychiatry 76:949-957 · PMID 25844888',
      'Vera I et al. (2016). Electroconvulsive therapy practice in Spain: a national survey. J ECT 32:55-61 · PMID 26332499',
      'FDA (2018). Neurological devices; reclassification of electroconvulsive therapy devices; effective date of requirement for premarket approval for electroconvulsive therapy devices for certain specified intended uses. Final order. Federal Register 83 FR 66103 (26-12-2018), doc. 2018-27809',
      'FDA (2008-2022). Base de datos 510(k), código de producto OBP: K083538 (NeuroStar TMS Therapy System, 16-12-2008), K122288 (Brainsway Deep TMS System, 07-01-2013), K173620 (MagVita TMS Therapy System w/Theta Burst Stimulation, 14-08-2018) y K220177 (Magnus Neuromodulation System with SAINT Technology, 01-09-2022)',
      'FDA (2018). De Novo DEN170078: Brainsway Deep Transcranial Magnetic Stimulation System, sistema de estimulación magnética transcraneal para el trastorno obsesivo-compulsivo (21 CFR 882.5802), decisión de 17-08-2018',
      'FDA (2005). PMA P970003/S050: VNS Therapy System, tratamiento coadyuvante a largo plazo de la depresión crónica o recurrente, aprobación de 15-07-2005',
      'FDA (2009). Humanitarian Device Exemption H050003: Medtronic Reclaim DBS Therapy for obsessive compulsive disorder, decisión de 10-02-2009',
      'FDA (2025). PMA P230024: Flow FL-100, estimulador transcraneal por corriente directa para el trastorno depresivo mayor, aprobación de 08-12-2025',
      'Jefatura del Estado (2002). Ley 41/2002, de 14 de noviembre, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica, artículo 8.2. BOE núm. 274, de 15-11-2002 (BOE-A-2002-22188)'
    ],
    nodes: ['ddm', 'esq', 'tb1']
  },
  draw(Fig) {
    const X = 40, C0 = 190, CW = 345, W = X * 2 + C0 + 7 * CW, FS = 16;
    const F = new Fig({ key: 'mat_neuromodulacion', title: TITLE, desc: 'Matriz de siete técnicas de neuromodulación (terapia electroconvulsiva, estimulación magnética transcraneal, estimulación transcraneal por corriente directa, estimulación del nervio vago, estimulación cerebral profunda, terapia convulsiva magnética, y fototerapia y cronoterapia) comparadas en mecanismo, necesidad de anestesia o cirugía, rango en guías por trastorno con un código de símbolos, magnitud del efecto con su fuente, efectos adversos, contraindicaciones, situación regulatoria y mantenimiento, con notas de consentimiento, discrepancias entre fuentes y límites.', w: W });
    const heads = ['Terapia electroconvulsiva (TEC)', 'Estimulación magnética transcraneal repetitiva (EMTr), theta burst y protocolos acelerados', 'Estimulación transcraneal por corriente directa (tDCS)', 'Estimulación del nervio vago (ENV)', 'Estimulación cerebral profunda (ECP)', 'Terapia convulsiva magnética (TCM)', 'Fototerapia y cronoterapia'];
    const cols = [{ w: C0, label: 'Fila' }].concat(heads.map(h => ({ w: CW, label: h })));
    let y = 96;
    y = F.text(X, y + 18, 'Cómo leerla: ● primera línea o recomendada · ◆ segunda línea u opción · △ tercera línea · ○ evidencia insuficiente o solo investigación · ✕ no recomendada · — sin datos en las fuentes consultadas. El símbolo traduce la guía que se nombra en la misma celda (CANMAT, NICE, BAP), no una valoración propia. El número tras la sigla de NICE (por ejemplo, NG222, 1.13.1) es la recomendación o el apartado; las guías de procedimientos se citan por su número IPG original. Los parámetros citados son los del estudio o la guía que se nombra, no una pauta.', { fs: 19, w: W - 2 * X }) + 14;

    // Cabecera enlazada: una caja por técnica, alineada con su columna
    const top = [
      ['tec_dep', 'TEC', 'Convulsiva · anestesia general · sin cirugía'],
      ['emt', 'EMTr / iTBS', 'No convulsiva · sin anestesia · ambulatoria'],
      ['tdcs', 'tDCS', 'No convulsiva · sin anestesia · posible en domicilio'],
      ['vns', 'ENV', 'Implante quirúrgico · estimulación crónica'],
      ['dbs', 'ECP', 'Neurocirugía estereotáctica · estimulación crónica'],
      ['terapia_mst', 'TCM', 'Convulsiva · anestesia general · en investigación'],
      ['fototer', 'Luz y cronoterapia', 'Sin dispositivo implantado · sin anestesia']
    ];
    F.text(X, y + 46, 'Ficha de cada técnica', { fs: 17, bold: true, w: C0 - 14 });
    top.forEach((t, i) => F.box('top' + i, { x: X + C0 + i * CW + 6, y, w: CW - 12, type: 'act', fs: 17, minH: 104, node: t[0], title: t[1], text: t[2] }));
    y += 104 + 26;

    // 1. Qué es y qué exige
    y = F.band(y, 'Qué es y qué exige', { n: 1 }) + 14;
    let t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Mecanismo propuesto', node: 'tec_hit' },
        'Crisis generalizada breve inducida por un estímulo eléctrico aplicado en el cuero cabelludo (CANMAT 2023). No hay una teoría aceptada de su mecanismo; la hipótesis más extendida es un cambio en la respuesta postsináptica a los neurotransmisores (TA59, 3.2).',
        'Pulsos de campo magnético aplicados con una bobina sobre el cuero cabelludo que estimulan neuronas corticales; la diana con más evidencia es la corteza prefrontal dorsolateral. La theta burst agrupa ráfagas de 3 pulsos a 50 Hz; la forma intermitente (iTBS) dura poco más de 3 minutos (CANMAT 2023).',
        'Corriente continua débil entre electrodos de superficie que modula la excitabilidad cortical, sin provocar crisis (CANMAT 2023).',
        'Estimulación intermitente del nervio vago izquierdo cervical desde un generador implantado en la pared torácica; se cree que actúa a través del núcleo del tracto solitario y sus conexiones corticales y subcorticales (CANMAT 2023).',
        { t: 'Electrodos implantados en dianas profundas y conectados a un generador subclavicular. Dianas estudiadas en la depresión: cíngulo subcalloso (la más frecuente), cápsula y estriado ventrales, núcleo accumbens, brazo anterior de la cápsula interna y haz prosencefálico medial (CANMAT 2023).', node: 'mayberg' },
        'Crisis generalizada inducida con estimulación magnética de alta intensidad y frecuencia mediante bobinas en el vértex o la región frontal; se desarrolló en parte para reducir los efectos cognitivos de la TEC (CANMAT 2023).',
        { t: 'Exposición programada a luz brillante suplementaria; el protocolo típico que describe la guía usa 10.000 lux durante 30 minutos por la mañana (CANMAT 2023). La triple cronoterapia suma privación de sueño, avance de fase del sueño y luz brillante (Wu 2009).', node: 'circ_sueno' }],
      ['Anestesia, cirugía y entorno',
        'Anestesia general y relajante muscular en cada sesión; sin cirugía. Un curso agudo suele requerir de 6 a 12 sesiones (CANMAT 2023; TA59, 3.7).',
        'Sin anestesia ni cirugía. Curso convencional: sesiones diarias 5 días por semana durante 4-6 semanas (CANMAT 2023). Los protocolos acelerados dan varias sesiones al día y acortan el curso hasta 5 días, con o sin diana individual por resonancia funcional (CANMAT 2023; Cole 2022).',
        'Sin anestesia ni cirugía. Equipo barato y fácil de usar, que permite la aplicación en el domicilio (CANMAT 2023); un ensayo se hizo de forma totalmente remota (Woodham 2025).',
        'Cirugía con anestesia general o local: incisión cervical izquierda, electrodo alrededor del nervio y generador en un bolsillo subcutáneo torácico; los ajustes se programan desde fuera (IPG679, 2.4).',
        'Neurocirugía de implantación (CANMAT 2023). En el TOC, selección por un equipo multidisciplinar con experiencia y solo en centros expertos en estimulación cerebral profunda (IPG693, 1.2-1.3).',
        'Terapia convulsiva: se aplica en sesiones repetidas, como la TEC, con la que se comparó a doble ciego (Blumberger 2026). Requisitos de anestesia: [fuente no localizada en las guías consultadas].',
        'Sin anestesia ni cirugía. En el ensayo de triple cronoterapia, las personas con depresión bipolar mantenían litio y antidepresivos (Wu 2009). Entorno habitual de aplicación: [fuente no localizada].']
    ] });
    y = t.y + 30;

    // 2. Indicaciones y rango en guías
    y = F.band(y, 'Indicaciones con evidencia y rango en guías, por trastorno', { n: 2 }) + 14;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Depresión unipolar resistente', node: 'drt' },
        { t: '● Primera línea en el episodio grave con síntomas psicóticos o catatónicos, ideación suicida grave o deterioro físico. ◆ Segunda línea en la depresión difícil de tratar (CANMAT 2023, tabla 8.3). NICE: «considerar» en la depresión grave si la persona la prefiere por su experiencia previa, se necesita una respuesta rápida o han fracasado otros tratamientos (NG222, 1.13.1).', node: 'dpsic' },
        '● Primera línea en la depresión resistente, tras fracasar la psicoterapia y los fármacos de primera línea (CANMAT 2023, tabla 8.3); protocolos de primera línea: alta frecuencia izquierda, baja frecuencia derecha y theta burst (tabla 8.2). NICE: puede usarse con las disposiciones habituales de gobernanza clínica y auditoría (IPG542, 1.1; NG222, 1.14.1).',
        '△ Tercera línea, como coadyuvante en el episodio leve o moderado; la evidencia no apoya su uso en la depresión grave o difícil de tratar (CANMAT 2023). NICE: solo con disposiciones especiales de gobernanza, consentimiento y auditoría, o en investigación (IPG530, 1.1).',
        '△ Tercera línea en la depresión difícil de tratar (CANMAT 2023, tabla 8.3). NICE: solo con disposiciones especiales de gobernanza, consentimiento y auditoría, o en investigación (IPG679, 1.1; NG222, 1.15.1).',
        '○ En investigación (CANMAT 2023, tabla 8.3). NICE no tiene guía de procedimientos para la depresión (búsqueda en nice.org.uk, noviembre de 2026).',
        '○ En investigación (CANMAT 2023, tabla 8.3).',
        { t: '● Luz: primera línea en monoterapia en la depresión estacional. ◆ Segunda línea en la no estacional leve y coadyuvante de la medicación en la moderada. △ Privación de sueño: tercera línea (CANMAT 2023). NICE: advertir de que la evidencia de la luz en la depresión invernal es incierta (NG222, 1.4.39).', node: 'sad' }],
      [{ t: 'Depresión bipolar', node: 'dep_bip_tx' },
        '◆ Segunda línea (nivel 3) en la depresión bipolar I y II; a considerar sobre todo si hay resistencia o urge la respuesta: riesgo suicida inminente, catatonía o depresión psicótica (CANMAT-ISBD 2018).',
        '△ Tercera línea, añadida a la medicación, en la depresión bipolar I (nivel 3). ○ En la bipolar II, sin datos suficientes para una recomendación (CANMAT-ISBD 2018).',
        '— CANMAT-ISBD 2018 no la menciona.',
        '○ El ensayo agudo y el registro a 5 años incluyeron depresión bipolar no psicótica, sin resultados propios en el resumen (Rush 2005; Aaronson 2017). — CANMAT-ISBD 2018 no la menciona.',
        '— CANMAT-ISBD 2018 no la menciona.',
        '— Sin datos en las guías consultadas.',
        { t: '△ Luz: tercera línea, coadyuvante (nivel 3), incluida la luz al mediodía; puede haber beneficio adicional al combinarla con privación total de sueño (nivel 2), con poca experiencia clínica (CANMAT-ISBD 2018). ○ En la bipolar II, sin datos suficientes.', node: 'tct' }],
      [{ t: 'Manía', node: 'ep_mania' },
        '◆ Segunda línea (nivel 3) (CANMAT-ISBD 2018). NICE: solo para una mejoría rápida y a corto plazo de síntomas graves en el episodio maníaco prolongado o grave, tras un ensayo adecuado de otras opciones o si hay riesgo vital (TA59, 1.1).',
        '△ Tercera línea (nivel 3), sobre la corteza prefrontal derecha y combinada con fármacos (CANMAT-ISBD 2018).',
        '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.',
        '— No es una indicación. La privación de sueño puede precipitar hipomanía (CANMAT 2023; véase la fila de efectos adversos).'],
      [{ t: 'Catatonía', node: 'catatonia' },
        { t: '● Primera línea, junto a las benzodiacepinas; debe usarse si estas no logran la remisión, y en la catatonía maligna iniciarse en 48-72 horas si las benzodiacepinas no son rápidamente eficaces (BAP 2023). NICE la recomienda en la catatonía en las condiciones de TA59, 1.1.', node: 'cat_malig' },
        '○ Considerar EMTr o tDCS cuando la TEC está indicada pero no disponible; el apoyo son casos clínicos (BAP 2023).',
        '○ Considerar tDCS o EMTr cuando la TEC está indicada pero no disponible; el apoyo son casos clínicos (BAP 2023).',
        '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.'],
      [{ t: 'Esquizofrenia resistente', node: 'cloz' },
        { t: '✕ NICE: la evidencia no permite recomendar su uso general en la esquizofrenia (TA59, 1.9; 2003). ○ Potenciación de clozapina: respuesta del 50 % frente al 0 % con clozapina sola (n = 39; Petrides 2015); revisión Cochrane: mejor respuesta a medio plazo frente a la atención habitual (calidad moderada), sin ventaja clara en otros desenlaces (Sinclair 2019).', node: 'clozapina' },
        '○ Alucinaciones auditivas: solo en investigación; seguridad adecuada, eficacia insuficiente en cantidad y calidad (IPG680, 1.1).',
        '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.'],
      [{ t: 'Trastorno obsesivo-compulsivo (TOC)', node: 'toc_dsm' },
        '○ Sin ensayos aleatorizados; una revisión sistemática de casos y series (60,4 % de 265 casos con alguna respuesta) concluye que no puede afirmarse su eficacia (Fontenelle 2015).',
        { t: '○ NICE: solo en investigación; sin problemas importantes de seguridad, eficacia insuficiente (IPG676, 1.1). La EMT profunda superó a la simulación en un ensayo multicéntrico: respuesta del 38,1 % frente al 11,1 % (Carmi 2019); véase la fila de la FDA.', node: 'toc_neuro' },
        '— Sin datos en las guías consultadas.', '— Sin datos en las guías consultadas.',
        '○ NICE: solo en investigación; evidencia de seguridad y eficacia insuficiente en cantidad y calidad (IPG693, 1.1). La FDA mantiene una exención de uso humanitario; véase su fila.',
        '○ Piloto abierto de 10 personas: una respuesta, ninguna remisión; sus autores no ven justificados más estudios por ahora (Tang 2021).',
        '— Sin datos en las guías consultadas.']
    ] });
    y = t.y + 30;

    // 3. Magnitud del efecto
    y = F.band(y, 'Magnitud del efecto, con su fuente', { n: 3 }) + 14;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      ['Efecto frente a simulación o comparador',
        'Depresión, TEC real frente a simulada: tamaño de efecto estandarizado −0,91 (IC 95 % −1,27 a −0,54; 6 ensayos, 256 pacientes); frente a fármacos −0,80 (18 ensayos); bilateral frente a unilateral −0,32 (UK ECT Review Group 2003). Respuesta frente a simulación en metaanálisis en red: OR 8,91 la bitemporal y 7,27 la unilateral derecha a dosis alta (Mutz 2019). Catatonía: mejoría pre-post de −3,14 (diferencia de medias estandarizada, 10 estudios), sin ensayos de calidad (Leroy 2018).',
        { t: 'Alta frecuencia frente a simulación: respuesta del 29,3 % frente al 10,4 % y remisión del 18,6 % frente al 5 % (29 ensayos, 1.371 personas; OR 3,3; NNT 6 y 8) (Berlim 2014). En red, OR de respuesta: 3,17 alta frecuencia izquierda, 3,20 iTBS y 4,92 bilateral (Mutz 2019). iTBS no inferior a la EMTr de alta frecuencia (THREE-D; Blumberger 2018). SNT: reducción de la MADRS del 52,5 % frente al 11,1 % a las 4 semanas en 29 participantes, análisis intermedio (Cole 2022).', node: 'tms_acelerada' },
        'Respuesta del 34 % frente al 19 % (OR 2,44; NNT 7) y remisión del 23,1 % frente al 12,7 % (NNT 9) en 6 ensayos con 289 pacientes; la resistencia al tratamiento predijo peor resultado (Brunoni 2016). OR de respuesta en red: 2,65 (Mutz 2019). ELECT-TDCS (n = 245): superior a placebo (3,2 puntos de la HDRS-17), sin demostrar la no inferioridad frente a escitalopram (Brunoni 2017).',
        'Ensayo agudo de 10 semanas con simulación: respuesta del 15,2 % frente al 10,0 % (p = 0,251), sin prueba definitiva de eficacia a corto plazo (Rush 2005). Registro observacional de 5 años (795 personas): respuesta acumulada del 67,6 % frente al 40,9 % con tratamiento habitual; diseño no aleatorizado (Aaronson 2017).',
        'Depresión: sin eficacia estadísticamente significativa frente a simulación en el cíngulo subcalloso a los 6 meses (Holtzheimer 2017) ni en la cápsula y el estriado ventrales a las 16 semanas (respuesta del 20 % frente al 14,3 %; Dougherty 2015). TOC: reducción global de la Y-BOCS del 45,1 % y 60,0 % de respondedores en 31 estudios con 116 personas (Alonso 2015).',
        'CREST-MST (239 personas aleatorizadas): remisión del 22,5 % frente al 27,8 % con TEC unilateral derecha de pulso ultrabreve, con no inferioridad (IC 95 % de la diferencia −4,4 a 14,9); reclutamiento cerrado antes de alcanzar el tamaño previsto (Blumberger 2026). En red, OR de respuesta frente a simulación 5,55, muy imprecisa (IC 95 % 1,06 a 28,99) (Mutz 2019).',
        'Luz brillante: tamaño de efecto 0,84 en la depresión estacional (8 estudios) y 0,53 en la no estacional (3 estudios); como coadyuvante del antidepresivo, −0,01 (5 estudios) (Golden 2005). Estacional: respuesta del 67 % con luz y con fluoxetina (Can-SAD; Lam 2006). Depresión bipolar, luz al mediodía: remisión del 68,2 % frente al 22,2 % (Sit 2018). Triple cronoterapia: menos depresión que con medicación sola desde las 48 horas y durante 7 semanas (n = 49; Wu 2009).']
    ] });
    y = t.y + 30;

    // 4. Seguridad
    y = F.band(y, 'Efectos adversos, contraindicaciones y precauciones', { n: 4 }) + 14;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Efectos adversos', node: 'amnesia' },
        'Cognitivos: desorientación y confusión transitorias, amnesia anterógrada y retrógrada (TA59, 3.5; CANMAT 2023). El rendimiento objetivo desciende sobre todo en los 3 primeros días y no muestra efectos negativos pasados 15 (84 estudios; Semkovska 2010), pero ese metaanálisis no pudo medir la amnesia retrógrada; un estudio prospectivo de 347 personas detectó efectos cognitivos adversos a los 6 meses, con amnesia retrógrada más grave y persistente tras la colocación bilateral (Sackeim 2007), y personas que refieren lagunas autobiográficas duraderas (CANMAT 2023). Mortalidad: 2,1 por 100.000 sesiones (Tørring 2017). Complicaciones inmediatas (estado epiléptico, laringoespasmo, parálisis de nervio periférico): 1 por 1.300-1.400 sesiones (TA59, 3.4).',
        'Cefalea (10 % con alta frecuencia frente al 3 % con simulación) y molestias en el cuero cabelludo (9 % frente al 2 %) (IPG542, 5.3-5.4). Crisis epiléptica: riesgo bajo; una encuesta recogió 24 crisis en más de 300.000 sesiones, 7 por 100.000, con datos solo aproximados (Lerner 2019, citado en Rossi 2021). Sin efectos adversos cognitivos (CANMAT 2023). Hipomanía descrita tras el tratamiento (IPG542, 5.2).',
        { t: 'Enrojecimiento cutáneo (25 % frente al 8 % con simulación en un ensayo), picor, hormigueo y cefalea; lesiones cutáneas descritas (IPG530, 5.2-5.6). Manía o hipomanía emergentes: 2 casos de manía en ELECT-TDCS, que además registró más enrojecimiento, acúfenos y nerviosismo (Brunoni 2017), y 6 episodios en un ensayo de 120 personas, 5 de ellos con tDCS más sertralina (IPG530, 5.1).', node: 'tb_induc' },
        { t: 'Frecuentes: cambio de voz, tos y disnea, que tienden a disminuir con el tiempo (IPG679, 3.5); dolor ligado a la implantación, ronquera, cefalea, dolor de garganta y de cuello (CANMAT 2023). Desenlaces de seguridad clave para NICE: fallo del dispositivo, infección y empeoramiento del ánimo, incluido el riesgo suicida (IPG679, 3.3). Abandono por acontecimientos adversos en el ensayo agudo: 1 % (Rush 2005).', node: 'ideac_suic' },
        'Desenlaces de seguridad clave para NICE: hemorragia intracraneal, infección, daño de estructuras cerebrales adyacentes, crisis, ideación suicida, cambios del ánimo incluida la hipomanía y otros efectos psiquiátricos y cognitivos (IPG693, 3.3). Efectos transitorios ligados a la estimulación y acontecimientos adversos graves ligados a la neurocirugía (CANMAT 2023).',
        'Frente a la TEC unilateral derecha ultrabreve: empeoró la memoria autobiográfica en el 2,7 % frente al 17,3 % (p = 0,0003) y abandonaron por acontecimientos adversos no graves 3 frente a 12 participantes (Blumberger 2026). Riesgos de la anestesia: [fuente no localizada].',
        'Luz: efectos adversos habituales (cefalea, fatiga visual, náuseas) [fuente no localizada]. Viraje: ninguno en el ensayo de luz al mediodía (Sit 2018); tras tres ciclos de privación de sueño, 4,85 % a manía y 5,83 % a hipomanía en 206 personas con depresión bipolar (Colombo 1999). La privación de sueño de una noche puede precipitar hipomanía en personas susceptibles sin diagnóstico previo de trastorno bipolar (CANMAT 2023).'],
      [{ t: 'Contraindicaciones y precauciones', node: 'dep_embarazo' },
        'Contraindicaciones absolutas: [fuente no localizada]. Valoración documentada de riesgos y beneficios: anestesia, comorbilidad, efectos adversos previstos (sobre todo cognitivos) y riesgo de no tratar (TA59, 1.2; NG222, 1.13.2). Cautela especial en el embarazo, las personas mayores y la infancia y la adolescencia (TA59, 1.3). Benzodiacepinas y antiepilépticos pueden restar eficacia; litio y cannabis, empeorar los efectos cognitivos (CANMAT 2023).',
        'Epilepsia e implantes metálicos ferromagnéticos intracraneales: habitualmente criterio de exclusión, no contraindicación absoluta; evitarla con implante coclear salvo evaluación de seguridad adicional (Rossi 2021). Las benzodiacepinas pueden reducir la respuesta (CANMAT 2023). Consentimiento: informar de las alternativas y de que puede no haber beneficio (IPG542, 1.2).',
        'Vigilar el viraje maníaco o hipomaníaco (Brunoni 2017; IPG530, 5.1). No apoyada en la depresión grave o difícil de tratar (CANMAT 2023). La indicación aprobada por la FDA excluye a quienes se consideran refractarios a la medicación (PMA P230024). Contraindicaciones formales: [fuente no localizada].',
        'No sirve para la urgencia: los ensayos controlados no mostraron eficacia a corto plazo y el beneficio se describe a 2-5 años (CANMAT 2023). El dispositivo puede desactivarse temporalmente antes de pedir su retirada (IPG679, 3.8). Resonancia magnética y apnea del sueño: [fuente no localizada].',
        'Solo en investigación y en centros con experiencia (IPG693, 1.1 y 1.3; CANMAT 2023). En el TOC, la exención de la FDA exige el fracaso de al menos tres ISRS (HDE H050003). Contraindicaciones quirúrgicas: [fuente no localizada].',
        'Solo en investigación (CANMAT 2023). Como en la EMT, induce corrientes en metales de la cabeza: implantes metálicos intracraneales, placas craneales y clips de aneurisma están contraindicados (Rossi 2021). CREST-MST la comparó con la forma de TEC descrita con menos efectos cognitivos (Blumberger 2026; CANMAT 2023).',
        'Trastorno bipolar: uso junto a tratamiento eutimizante (así en Wu 2009; como recomendación de guía, [fuente no localizada]). Enfermedad ocular, fármacos fotosensibilizantes y epilepsia: [fuente no localizada].']
    ] });
    y = t.y + 30;

    // 5. Regulación
    y = F.band(y, 'Situación regulatoria (consulta de noviembre de 2026)', { n: 5 }) + 14;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      ['FDA (Estados Unidos)',
        'Reclasificada en 2018 a clase II (controles especiales) solo para la catatonía y el episodio depresivo mayor grave, unipolar o bipolar, desde los 13 años, si hay resistencia o se requiere una respuesta rápida; el resto de usos sigue en clase III y exige PMA (83 FR 66103, 26-12-2018).',
        'Depresión mayor, vía 510(k), código OBP: K083538 (NeuroStar, 16-12-2008), K122288 (EMT profunda, 07-01-2013), K173620 (theta burst, 14-08-2018) y K220177 (sistema con tecnología SAINT, 01-09-2022): autorización por equivalencia sustancial, no PMA. TOC: De Novo DEN170078 (EMT profunda, 17-08-2018).',
        'PMA P230024 (Flow FL-100, 08-12-2025): depresión mayor moderada o grave en el episodio actual, en monoterapia o como coadyuvante, en mayores de 18 años no considerados refractarios a la medicación.',
        'PMA P970003/S050 (VNS Therapy System, 15-07-2005): tratamiento coadyuvante a largo plazo de la depresión crónica o recurrente en mayores de 18 años sin respuesta adecuada a cuatro o más tratamientos antidepresivos.',
        'TOC: exención de uso humanitario H050003 (Medtronic Reclaim, 10-02-2009), estimulación bilateral del brazo anterior de la cápsula interna en el TOC crónico, grave y resistente. Depresión: la ENV es la única técnica quirúrgica aprobada para la depresión resistente (CANMAT 2023).',
        'Ninguna autorización localizada: una búsqueda por nombre de dispositivo en la base 510(k) no devolvió registros [fuente oficial no localizada para De Novo y PMA].',
        'Autorización específica de los dispositivos de luz: [fuente oficial no localizada].'],
      ['Marcado CE y España',
        'Marcado CE: [fuente oficial no localizada]. España: consentimiento por escrito, exigido para los procedimientos terapéuticos invasores o con riesgos notorios (Ley 41/2002, art. 8.2). Encuesta nacional: la aplicaba el 54,9 % de las unidades de psiquiatría, con 0,66 pacientes por 10.000 habitantes, grandes diferencias territoriales y consentimiento escrito en todos los centros (Vera 2016).',
        'Marcado CE y financiación en el Sistema Nacional de Salud: [fuente oficial no localizada].',
        'Marcado CE y financiación en el Sistema Nacional de Salud: [fuente oficial no localizada].',
        'Marcado CE y financiación en el Sistema Nacional de Salud para la depresión: [fuente oficial no localizada]. Consentimiento por escrito por tratarse de una intervención quirúrgica (Ley 41/2002, art. 8.2).',
        'Marcado CE para el TOC y centros de referencia en España: [fuente oficial no localizada]. Consentimiento por escrito por tratarse de una intervención quirúrgica (Ley 41/2002, art. 8.2).',
        'Marcado CE y disponibilidad en España fuera de la investigación: [fuente oficial no localizada].',
        'Financiación de los dispositivos de luz en el Sistema Nacional de Salud: [fuente oficial no localizada].']
    ] });
    y = t.y + 30;

    // 6. Mantenimiento
    y = F.band(y, 'Mantenimiento y recaída', { n: 6 }) + 14;
    t = F.table({ x: X, y, fs: FS, cols, rows: [
      [{ t: 'Después de la respuesta', node: 'lm_bip' },
        'Recaída tras una TEC eficaz con farmacoterapia de continuación: 37,7 % a los 6 meses y 51,1 % a los 12 (Jelovac 2013). A 24 semanas: 84 % con placebo, 60 % con nortriptilina y 39 % con nortriptilina más litio (Sackeim 2001). TEC de continuación frente a litio más nortriptilina: recaída del 37,1 % frente al 31,6 % a 6 meses, sin diferencia (CORE; Kellner 2006). NICE: iniciar o mantener antidepresivo o psicoterapia y considerar la potenciación con litio (NG222, 1.13.9). Eficacia de mantenimiento: nivel 1 en el episodio grave (CANMAT 2023, tabla 8.3).',
        'Entre quienes responden, la respuesta se mantiene en el 66,5 % a los 3 meses, el 52,9 % a los 6 y el 46,3 % a los 12 (19 estudios; Senova 2019). Eficacia de mantenimiento: nivel 3 (CANMAT 2023, tabla 8.3). NICE pide más datos sobre el tratamiento de mantenimiento y los resultados a largo plazo (IPG542, 1.3). SNT: faltan ensayos sobre su durabilidad (Cole 2022).',
        'Duración del efecto incierta (IPG530, 1.1). Eficacia de mantenimiento: nivel 3 (CANMAT 2023, tabla 8.3).',
        'Tratamiento crónico: remisión acumulada a 5 años del 43,3 % frente al 25,7 % con tratamiento habitual, en un registro no aleatorizado (Aaronson 2017). Eficacia de mantenimiento: nivel 3 (CANMAT 2023, tabla 8.3).',
        'Estimulación continua; los estudios observacionales sugieren que el efecto aumenta con el tiempo, pero la eficacia de mantenimiento figura como «no conocida» (CANMAT 2023, tabla 8.3). Fase abierta en la cápsula y el estriado ventrales: respuesta del 20 % al 26,7 % entre los 12 y los 24 meses (Dougherty 2015).',
        'Eficacia de mantenimiento «no conocida» (CANMAT 2023, tabla 8.3).',
        'Triple cronoterapia: ventaja mantenida durante 7 semanas en el único ensayo en la depresión bipolar aquí citado (Wu 2009). Duración del tratamiento con luz en la depresión estacional y recaída al suspenderlo: [fuente no localizada].']
    ] });
    y = t.y + 40;

    // 7. Notas de uso
    y = F.band(y, 'Secuencia, consentimiento y puntos en que las fuentes difieren', { n: 7 }) + 24;
    const gap = 30, bw = (W - 2 * X - 2 * gap) / 3;
    const sT = { title: 'Qué técnica antes, según CANMAT 2023',
      text: 'Las técnicas de neuromodulación se plantean en general cuando ha fracasado un cambio de antidepresivo o una potenciación (figura 7.1).\nSalvo urgencia, la EMTr se considera antes que la TEC por ser menos invasiva y compatible con trabajar o estudiar.\nLa TEC puede ser la primera opción en la enfermedad grave (síntomas psicóticos o catatónicos, ideación suicida grave, deterioro físico) o si hubo buena respuesta previa; la EMTr, si hay problemas de tolerabilidad con los fármacos o fue eficaz antes.\nLas técnicas quirúrgicas se consideran después de las no invasivas, por su menor nivel de evidencia y su mayor riesgo (pregunta 8.d).' };
    const cT = { title: 'Consentimiento y seguimiento de la TEC',
      text: 'Decisión compartida, consentimiento informado sin presión ni coacción y derecho a retirarlo en cualquier momento; si la persona no puede consentir, solo se aplica si no contradice una decisión anticipada válida (NG222, 1.13.3-1.13.4; TA59, 1.4-1.5).\nEn España el consentimiento se presta por escrito en los procedimientos terapéuticos invasores o con riesgos notorios (Ley 41/2002, art. 8.2).\nValorar el estado clínico tras cada sesión y la función cognitiva de forma continuada y, como mínimo, al final de cada curso (TA59, 1.6).\nSuspender de inmediato si los efectos adversos superan el beneficio, o al lograr una remisión estable (NG222, 1.13.8).' };
    const dT = { title: 'Donde las fuentes difieren (se muestran ambas, sin resolverlo)',
      text: '• EMTr en la depresión: primera línea en la resistente (CANMAT 2023) frente a «puede usarse» sin rango (NICE IPG542, 2015).\n• tDCS: tercera línea coadyuvante (CANMAT 2023) y «disposiciones especiales» (NICE IPG530, 2015) frente a aprobación PMA en monoterapia (FDA 2025).\n• TEC en la esquizofrenia: sin recomendación de uso general (NICE TA59, 2003) frente a ensayos posteriores de potenciación de clozapina (Petrides 2015; Sinclair 2019).\n• TOC: De Novo y exención humanitaria de la FDA frente a «solo en investigación» de NICE (IPG676 e IPG693).\n• TCM: «en investigación» (CANMAT 2023) frente a la no inferioridad de CREST-MST, posterior a la guía (Blumberger 2026).' };
    const M = new Fig({ key: 'medida', title: 'medida', w: W });
    const mh = Math.max(...[sT, cT, dT].map((o, i) => M.box('m' + i, Object.assign({ x: X, y: 100 + i * 3000, w: bw, fs: 18, align: 'left', type: 'warn' }, o)).h)) + 40;
    F.box('secuencia', Object.assign({ x: X, y, w: bw, type: 'act', align: 'left', fs: 18, node: 'ep_depmay', minH: mh }, sT));
    F.box('consent', Object.assign({ x: X + bw + gap, y, w: bw, type: 'warn', align: 'left', fs: 18, node: 'consent_cap', minH: mh }, cT));
    F.box('difieren', Object.assign({ x: X + 2 * (bw + gap), y, w: bw, type: 'info', align: 'left', fs: 18, minH: mh }, dT));
    y += mh + 30;
    const nT = { title: 'Fuera de la matriz: neurofeedback',
      text: 'Técnica de autorregulación de una señal cerebral registrada en tiempo real, no de estimulación eléctrica o magnética: no entra en la definición de neuromodulación de CANMAT 2023 (pregunta 8.a) ni tiene rango en las guías consultadas. Véase su ficha.' };
    const hT = { title: 'De dónde viene: terapias de choque',
      text: 'La TEC se usa desde la década de 1930 (TA59, 3.2) y sigue limitada por el estigma, la necesidad de anestesia, la preocupación por los efectos cognitivos y las recaídas (CANMAT 2023). La ficha histórica recoge su origen.' };
    const eT = { title: 'Otras opciones tras la resistencia',
      text: 'La matriz no compara la neuromodulación con las estrategias farmacológicas (cambio, potenciación, esketamina) ni con la psicoterapia; NICE remite desde la depresión resistente a su guía de la ENV y no recomienda el espray nasal de esketamina (NG222, 1.15.1-1.15.2).' };
    const mh2 = Math.max(...[nT, hT, eT].map((o, i) => M.box('n' + i, Object.assign({ x: X, y: 20000 + i * 3000, w: bw, fs: 18, align: 'left', type: 'info' }, o)).h)) + 16;
    F.box('neurofb', Object.assign({ x: X, y, w: bw, type: 'info', align: 'left', fs: 18, node: 'neurofeedback', minH: mh2 }, nT));
    F.box('historia', Object.assign({ x: X + bw + gap, y, w: bw, type: 'info', align: 'left', fs: 18, node: 'tec_hit', minH: mh2 }, hT));
    F.box('otras', Object.assign({ x: X + 2 * (bw + gap), y, w: bw, type: 'info', align: 'left', fs: 18, node: 'esketamina', minH: mh2 }, eT));
    y += mh2 + 30;
    F.box('lim', { x: X, y, w: W - 2 * X, type: 'lim', align: 'left', fs: 18, title: 'Límites de la figura',
      text: 'Esquema docente: no sustituye al juicio clínico, a la valoración individual ni a los protocolos y consentimientos de cada centro. Los símbolos traducen el rango que da la guía nombrada en la celda y no son comparables entre guías: CANMAT (Canadá) ordena por líneas de tratamiento; NICE (Reino Unido) no asigna líneas y expresa la fuerza con el verbo o, en las guías de procedimientos, con el tipo de disposición (habitual, especial o solo investigación). El rango detallado solo existe para la depresión unipolar; «—» significa que la guía consultada no menciona la técnica, no que sea ineficaz. Las cifras proceden de los resúmenes de PubMed y de las guías, con comparadores, poblaciones y desenlaces distintos: no permiten ordenar las técnicas entre sí. Los parámetros que se citan (lux, frecuencias, número de sesiones) describen el estudio o la guía nombrados y no son una pauta. La situación regulatoria es la de la FDA en la fecha de consulta; el marcado CE y la cartera de servicios española no pudieron comprobarse en fuente oficial. No incluye la neurocirugía ablativa, la estimulación vagal transcutánea ni otras técnicas en estudio, ni datos específicos de infancia, embarazo o personas mayores más allá de las cautelas citadas.' });
    F.footer('Fuentes: CANMAT 2023 (Lam 2024, PMID 38711351), CANMAT-ISBD 2018 (Yatham 2018, PMID 29536616) y BAP 2023 (Rogers 2023, PMID 37039129); NICE NG222 (2022), TA59 (2003, act. 2009) e IPG542, IPG530, IPG679, IPG676, IPG693 e IPG680 (hoy HealthTech guidance HTG396, HTG382, HTG551, HTG548, HTG577 y HTG555); UK ECT Review Group 2003, Mutz 2019, Berlim 2014, Brunoni 2016 y 2017, Cole 2022, Blumberger 2018 y 2026, Rush 2005, Aaronson 2017, Holtzheimer 2017, Dougherty 2015, Alonso 2015, Golden 2005, Sit 2018, Wu 2009, Semkovska 2010, Jelovac 2013 y demás referencias de la ficha; bases de datos de la FDA (510(k), De Novo, PMA y HDE) y Ley 41/2002. Consulta de noviembre de 2026. Esquema docente: no sustituye al juicio clínico.');
    return F;
  }
};
