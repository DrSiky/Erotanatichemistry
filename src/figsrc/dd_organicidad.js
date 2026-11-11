// Figura: banderas rojas de organicidad ante un primer cuadro psiquiátrico (árbol diferencial).
// Compilar en prueba: node tools/fig.js dd_organicidad --dry --png <carpeta>
const TITLE = 'Banderas rojas de organicidad ante un primer cuadro psiquiátrico';
module.exports = {
  key: 'dd_organicidad',
  meta: {
    title: TITLE,
    kind: 'dd',
    cap: 'Árbol diferencial en seis bloques. 1) Punto de partida: qué convierte un hallazgo en bandera roja. 2-4) Banderas de la anamnesis y el curso, de la exploración psicopatológica y de la exploración física y neurológica: cada pregunta de la izquierda conduce a las entidades hacia las que orienta, y cada caja de entidad abre su ficha. 5) Estudio inicial razonado según guías y consensos, sin batería universal. 6) Relevancia médico-legal y límites. Los símbolos ●●●, ●●○ y ●○○ no gradúan el valor diagnóstico de la bandera, sino el tipo de documento que la respalda (guía o consenso formal; revisión sistemática, metaanálisis o cohorte; revisión narrativa, serie o casos). «[fuente no localizada]» y «[no verificada]» señalan lo que no se ha podido cotejar en una fuente primaria. Ninguna bandera es patognomónica y su ausencia no descarta una causa médica. Esquema docente: no es un protocolo ni sustituye a la exploración clínica.',
    refs: [
      'Keshavan MS & Kaneko Y (2013). Secondary psychoses: an update. World Psychiatry 12:4-15 · PMID 23471787',
      'Freudenreich O, Schulz SC & Goff DC (2009). Initial medical work-up of first-episode psychosis: a conceptual review. Early Interv Psychiatry 3:10-18 · PMID 21352170',
      'Skikic M & Arriola JA (2020). First episode psychosis medical workup: evidence-informed recommendations and introduction to a clinically guided approach. Child Adolesc Psychiatr Clin N Am 29:15-28 · PMID 31708044',
      'Graus F et al. (2016). A clinical approach to diagnosis of autoimmune encephalitis. Lancet Neurol 15:391-404 · PMID 26906964',
      'Pollak TA et al. (2020). Autoimmune psychosis: an international consensus on an approach to the diagnosis and management of psychosis of suspected autoimmune origin. Lancet Psychiatry 7:93-108 · PMID 31669058',
      'Herken J & Prüss H (2017). Red flags: clinical signs for identifying autoimmune encephalitis in psychiatric patients. Front Psychiatry 8:25 · PMID 28261116',
      'Guasp M et al. (2021). Clinical, neuroimmunologic, and CSF investigations in first episode psychosis. Neurology 97:e61-e75 · PMID 33980703',
      'Lejuste F et al. (2016). Neuroleptic intolerance in patients with anti-NMDAR encephalitis. Neurol Neuroimmunol Neuroinflamm 3:e280 · PMID 27606355',
      'Al-Diwani A et al. (2019). The psychopathology of NMDAR-antibody encephalitis in adults: a systematic review and phenotypic analysis of individual patient data. Lancet Psychiatry 6:235-246 · PMID 30765329',
      'Titulaer MJ et al. (2013). Treatment and prognostic factors for long-term outcome in patients with anti-NMDA receptor encephalitis: an observational cohort study. Lancet Neurol 12:157-165 · PMID 23290630',
      'Castillo P et al. (2006). Steroid-responsive encephalopathy associated with autoimmune thyroiditis. Arch Neurol 63:197-202 · PMID 16476807',
      'Rogers JP et al. (2023). Evidence-based consensus guidelines for the management of catatonia: recommendations from the British Association for Psychopharmacology. J Psychopharmacol 37:327-369 · PMID 37039129',
      'Gurrera RJ et al. (2011). An international consensus study of neuroleptic malignant syndrome diagnostic criteria using the Delphi method. J Clin Psychiatry 72:1222-1228 · PMID 21733489',
      'Dunkley EJC et al. (2003). The Hunter Serotonin Toxicity Criteria: simple and accurate diagnostic decision rules for serotonin toxicity. QJM 96:635-642 · PMID 12925718',
      'Reinhardt MM & Cohen CI (2015). Late-life psychosis: diagnosis and treatment. Curr Psychiatry Rep 17:1 · PMID 25617038',
      'Krauthammer C & Klerman GL (1978). Secondary mania: manic syndromes associated with antecedent physical illness or drugs. Arch Gen Psychiatry 35:1333-1339 · PMID 757997',
      'Sami M, Khan H & Nilforooshan R (2015). Late onset mania as an organic syndrome: a review of case reports in the literature. J Affect Disord 188:226-231 · PMID 26368947',
      'Ducharme S et al. (2020). Recommendations to distinguish behavioural variant frontotemporal dementia from psychiatric disorders. Brain 143:1632-1650 · PMID 32129844',
      'Diniz BS et al. (2013). Late-life depression and risk of vascular dementia and Alzheimer\'s disease: systematic review and meta-analysis of community-based cohort studies. Br J Psychiatry 202:329-335 · PMID 23637108',
      'McKeith IG et al. (2017). Diagnosis and management of dementia with Lewy bodies: fourth consensus report of the DLB Consortium. Neurology 89:88-100 · PMID 28592453',
      'McKeith I et al. (1992). Neuroleptic sensitivity in patients with senile dementia of Lewy body type. BMJ 305:673-678 · PMID 1356550',
      'Inouye SK et al. (1990). Clarifying confusion: the confusion assessment method. A new method for detection of delirium. Ann Intern Med 113:941-948 · PMID 2240918',
      'Bellelli G et al. (2014). Validation of the 4AT, a new instrument for rapid delirium screening: a study in 234 hospitalised older people. Age Ageing 43:496-502 · PMID 24590568',
      'Mayo-Smith MF et al. (2004). Management of alcohol withdrawal delirium. An evidence-based practice guideline. Arch Intern Med 164:1405-1412 · PMID 15249349',
      'Galvin R et al. (2010). EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol 17:1408-1418 · PMID 20642790',
      'Starzer MSK, Nordentoft M & Hjorthøj C (2018). Rates and predictors of conversion to schizophrenia or bipolar disorder following substance-induced psychosis. Am J Psychiatry 175:343-350 · PMID 29179576',
      'Caton CL et al. (2005). Differences between early-phase primary psychotic disorders with concurrent substance use and substance-induced psychoses. Arch Gen Psychiatry 62:137-145 · PMID 15699290',
      'Judd LL et al. (2014). Adverse consequences of glucocorticoid medication: psychological, cognitive, and behavioral effects. Am J Psychiatry 171:1045-1051 · PMID 25272344',
      'Bergink V, Rasgon N & Wisner KL (2016). Postpartum psychosis: madness, mania, and melancholia in motherhood. Am J Psychiatry 173:1179-1188 · PMID 27609245',
      'Waters F et al. (2014). Visual hallucinations in the psychosis spectrum and comparative information from neurodegenerative disorders and eye disease. Schizophr Bull 40(Suppl 4):S233-S245 · PMID 24936084',
      'Acharya V, Acharya J & Lüders H (1998). Olfactory epileptic auras. Neurology 51:56-61 · PMID 9674778',
      'Clancy MJ et al. (2014). The prevalence of psychosis in epilepsy; a systematic review and meta-analysis. BMC Psychiatry 14:75 · PMID 24625201',
      'Kanner AM & Rivas-Grajales AM (2016). Psychosis of epilepsy: a multifaceted neuropsychiatric disorder. CNS Spectr 21:247-257 · PMID 27322691',
      'Fleminger S (2008). Long-term psychiatric disorders after traumatic brain injury. Eur J Anaesthesiol Suppl 42:123-130 · PMID 18289429',
      'Marrie RA et al. (2015). The incidence and prevalence of psychiatric disorders in multiple sclerosis: a systematic review. Mult Scler 21:305-317 · PMID 25583845',
      'Bates GP et al. (2015). Huntington disease. Nat Rev Dis Primers 1:15005 · PMID 27188817',
      'Zimbrean PC & Schilsky ML (2014). Psychiatric aspects of Wilson disease: a review. Gen Hosp Psychiatry 36:53-62 · PMID 24120023',
      'Antinori A et al. (2007). Updated research nosology for HIV-associated neurocognitive disorders. Neurology 69:1789-1799 · PMID 17914061',
      'Hutto B (2001). Syphilis in clinical psychiatry: a review. Psychosomatics 42:453-460 · PMID 11815679',
      'Lindenbaum J et al. (1988). Neuropsychiatric disorders caused by cobalamin deficiency in the absence of anemia or macrocytosis. N Engl J Med 318:1720-1728 · PMID 3374544',
      'Anderson KE et al. (2005). Recommendations for the diagnosis and treatment of the acute porphyrias. Ann Intern Med 142:439-450 · PMID 15767622',
      'ACR Ad Hoc Committee on Neuropsychiatric Lupus Nomenclature (1999). The American College of Rheumatology nomenclature and case definitions for neuropsychiatric lupus syndromes. Arthritis Rheum 42:599-608 · PMID 10211873',
      'Swedo SE et al. (1998). Pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections: clinical description of the first 50 cases. Am J Psychiatry 155:264-271 · PMID 9464208',
      'National Institute for Health and Care Excellence (2014). Psychosis and schizophrenia in adults: prevention and management. Clinical guideline CG178, recomendaciones 1.3.3.1, 1.3.3.2, 1.3.6.1 y 1.3.6.2 (texto en nice.org.uk, consultado en noviembre de 2026)',
      'National Institute for Health and Care Excellence (2008). Structural neuroimaging in first-episode psychosis. Technology appraisal guidance TA136, recomendación 1.1',
      'National Institute for Health and Care Excellence (2010). Delirium: prevention, diagnosis and management in hospital and long-term care. Clinical guideline CG103, actualizada el 18 de enero de 2023, recomendaciones 1.3.1, 1.6.1 y 1.6.3',
      'National Institute for Health and Care Excellence (2014). Bipolar disorder: assessment and management. Clinical guideline CG185, recomendación 1.3.3',
      'American Psychiatric Association (2022). DSM-5-TR. Washington, DC: APA Publishing. Trastornos psicótico y bipolar inducidos por sustancias o medicamentos y debidos a otra afección médica [no verificada]',
      'Jefatura del Estado (1995). Ley Orgánica 10/1995, de 23 de noviembre, del Código Penal (BOE núm. 281, 24-11-1995), arts. 20.1 y 20.2'
    ],
    nodes: ['tb_mayor', 'bpvi', 'desorient', 'enc_hep', 'ghb_abst', 'dep_induc', 'charles', 'parkinson_psiq', 'consent_cap', 'autoinm_infec', 'dpp', 'esq', 'tb1', 'dpsic']
  },
  draw(Fig) {
    const W = 2300;
    const F = new Fig({ key: 'dd_organicidad', title: TITLE, w: W,
      desc: 'Árbol diferencial: quince banderas rojas de la anamnesis, de la exploración psicopatológica y de la exploración física y neurológica ante un primer cuadro psiquiátrico, cada una unida a las entidades médicas, neurológicas, tóxicas o farmacológicas hacia las que orienta; recuadros de estudio inicial según guías, de relevancia médico-legal y de límites.' });
    const QX = 60, QW = 600, GX = 720, GW = 1520, GAP = 14, NC = 4, FQ = 18, FO = 17;

    // Fila: bandera a la izquierda y, a la derecha, el grupo de entidades hacia las que orienta (rejilla de 4 columnas).
    const row = (id, y0, q, outs) => {
      let yy = y0 + 42, bottom = yy;
      for (let i = 0; i < outs.length; i += NC) {
        const line = outs.slice(i, i + NC), n = Math.max(line.length, 3), w = (GW - 32 - GAP * (n - 1)) / n;
        const bs = line.map((o, k) => F.box(id + '_e' + (i + k), Object.assign({ x: GX + 16 + k * (w + GAP), y: yy, w, type: 'dx', fs: FO }, o)));
        const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; });
        yy += h + GAP; bottom = yy - GAP;
      }
      const gh = bottom + 16 - y0;
      const pre = F.box(id + '_tmp', Object.assign({ x: QX, y: y0, w: QW, type: 'q', fs: FQ }, q));
      const qh = pre.h; delete F.boxes[id + '_tmp']; F.order.pop();
      const H = Math.max(gh, qh);
      const qb = F.box(id, Object.assign({ x: QX, y: y0, w: QW, type: 'q', fs: FQ, minH: H }, q));
      F.group({ x: GX, y: y0, w: GW, h: H, label: 'Orienta a' });
      F.arrow(qb, { x: GX, y: y0, w: GW, h: H }, { from: 'r', to: 'l' });
      return y0 + H;
    };
    const heads = y => { F.text(QX, y + 18, 'Bandera roja (pregunta) y respaldo', { bold: true, fs: 19, w: QW }); F.text(GX, y + 18, 'Entidades hacia las que orienta: cada caja abre su ficha', { bold: true, fs: 19, w: GW }); return y + 36; };

    // ---------- Bloque 1: punto de partida ----------
    let y = F.band(90, 'Punto de partida: qué convierte un hallazgo en bandera roja', { n: 1 }) + 24;
    const CW = 700, CG = 40;
    const p1 = F.box('p1', { x: 60, y, w: CW, type: 'q', fs: 18, node: 'pep', title: 'Primer cuadro psiquiátrico',
      text: 'Psicosis, manía, depresión, catatonía o cambio de personalidad sin diagnóstico previo. La evaluación incluye la historia médica y una exploración física completa para identificar enfermedad física (incluidos los trastornos cerebrales orgánicos) y fármacos prescritos que puedan causar psicosis (NICE CG178, rec. 1.3.3.1).' });
    const p2 = F.box('p2', { x: 60 + CW + CG, y, w: CW, type: 'info', fs: 18, node: 'tpsc_med', title: 'Cuatro indicios de cuadro secundario',
      text: '1) Presentación atípica. 2) Relación temporal con una causa médica detectable. 3) Indicios de relación fisiológica causal directa con el agente. 4) Ausencia de datos de un trastorno psicótico primario que explique mejor el cuadro (Keshavan y Kaneko 2013).' });
    const p3 = F.box('p3', { x: 60 + 2 * (CW + CG), y, w: CW, type: 'warn', fs: 18, title: 'Ninguna bandera es patognomónica',
      text: 'No hay signos patognomónicos fiables que distingan la psicosis primaria de la secundaria (Reinhardt y Cohen 2015). Una bandera roja obliga a buscar, no a concluir. Respaldo: ●●● guía o consenso formal; ●●○ revisión sistemática, metaanálisis o cohorte; ●○○ revisión narrativa, serie o casos.' });
    const h1 = Math.max(p1.h, p2.h, p3.h); [p1, p2, p3].forEach(b => { b.h = h1; });
    F.arrow(p1, p2); F.arrow(p2, p3);
    y += h1 + 50;

    // ---------- Bloque 2: anamnesis y curso ----------
    y = F.band(y, 'Anamnesis y curso', { n: 2 }) + 14;
    y = heads(y) + 8;
    y = row('a1', y, { title: '¿Inicio tardío o a edad atípica, sin antecedentes?', text: 'Cerca del 60 % de las psicosis de nueva aparición en personas mayores son secundarias; la psicosis primaria es entonces un diagnóstico de exclusión (Reinhardt y Cohen 2015). Respaldo: ●○○.' }, [
      { node: 'psi_tardia', title: 'Psicosis de inicio tardío', text: 'Repasar las «seis d»: delirium, enfermedad médica, fármacos y drogas, demencia, depresión y trastorno delirante (Reinhardt y Cohen 2015).' },
      { node: 'mania_sec', title: 'Manía secundaria', text: 'Manía sin historia afectiva por fármacos, infección, neoplasia, epilepsia o alteración metabólica (Krauthammer y Klerman 1978). En 29 de 35 casos publicados de primera manía después de los 50 años se sospechó causa orgánica, con sesgo de publicación (Sami 2015).' },
      { node: 'ftd', title: 'Demencia frontotemporal conductual', text: 'Cerca del 50 % recibe antes un diagnóstico psiquiátrico y el retraso diagnóstico medio llega a 5-6 años (Ducharme 2020).' },
      { node: 'dep_tardia', title: 'Depresión de inicio tardío', text: 'La depresión tardía se asocia a demencia incidente por cualquier causa: riesgo agrupado 1,85 (IC 95 % 1,67-2,04) en 23 estudios (Diniz 2013).' }
    ]) + 22;
    y = row('a2', y, { title: '¿Inicio brusco o progresión rápida (menos de 3 meses)?', text: 'El inicio subagudo, con progresión rápida en menos de 3 meses, de síntomas psiquiátricos, alteración del estado mental o déficit de memoria de trabajo es el primer criterio de encefalitis autoinmune posible (Graus 2016). Respaldo: ●●●.' }, [
      { node: 'nmda', title: 'Encefalitis anti-NMDAR', text: 'Conducta anormal (psicosis, agitación, catatonía) con insomnio, seguida de alteración del habla, discinesias, déficit de memoria, inestabilidad autonómica y descenso del nivel de conciencia (Graus 2016).' },
      { node: 'delirium', title: 'Delirium', text: 'Inicio agudo y curso fluctuante, más inatención: los dos rasgos obligados del algoritmo CAM (Inouye 1990).' },
      { node: 'psust', title: 'Psicosis inducida por sustancias', text: 'Aparece durante la intoxicación o la abstinencia, o poco después (DSM-5-TR).' }
    ]) + 22;
    y = row('a3', y, { title: '¿Relación temporal con una sustancia, un fármaco o su retirada?', text: 'Revisar consumo, medicación y cambios recientes. Si los síntomas preceden al consumo o persisten en torno a 1 mes tras la abstinencia, pensar en un trastorno independiente (DSM-5-TR). En el registro danés, el 32,2 % de las psicosis inducidas evolucionó a esquizofrenia o trastorno bipolar (Starzer 2018). Respaldo: ●●○.' }, [
      { node: 'psust', title: 'Psicosis inducida por sustancias', text: 'En psicosis tempranas con consumo reciente, la dependencia de alguna droga orientó a psicosis inducida (OR 9,41; IC 95 % 5,26-16,85) (Caton 2005).' },
      { node: 'tb_induc', title: 'Manía inducida por sustancias o fármacos', text: 'Ánimo elevado, expansivo o irritable durante la exposición a una sustancia o un medicamento capaz de producirlo, o poco después (DSM-5-TR).' },
      { node: 'corticoides_psiq', title: 'Glucocorticoides', text: 'Consecuencias neuropsiquiátricas graves (psicosis, manía, depresión, delirium, conducta suicida): 15,7 por 100 personas-año de exposición (Judd 2014).' },
      { node: 'dt_alc', title: 'Abstinencia de alcohol', text: 'El delirium por abstinencia es la manifestación más grave de la abstinencia de alcohol (Mayo-Smith 2004).' }
    ]) + 22;
    y = row('a4', y, { title: '¿Periparto?', text: 'La psicosis o la manía tras el parto es una urgencia psiquiátrica, con riesgo de suicidio y de infanticidio (Bergink 2016). Respaldo: ●○○.' }, [
      { node: 'ppp', title: 'Psicosis posparto', text: 'Tras el primer episodio, entre el 20 % y el 50 % tiene solo psicosis posparto aislada; el resto presenta episodios fuera del periparto, habitualmente del espectro bipolar (Bergink 2016).' },
      { node: 'endocrino', title: 'Tiroiditis autoinmune', text: 'Algunas mujeres tienen causas y comorbilidades tratables, como la tiroiditis autoinmune o las infecciones (Bergink 2016).' },
      { node: 'nmda', title: 'Encefalitis anti-NMDAR', text: 'La encefalitis anti-NMDAR y los errores congénitos del metabolismo pueden presentarse con psicosis tras el parto (Bergink 2016).' }
    ]) + 22;
    y = row('a5', y, { title: '¿Antecedentes o exposiciones que cambian la probabilidad previa?', text: 'Preguntar por infecciones de transmisión sexual y VIH, inmunodepresión, enfermedad autoinmune o hepática y antecedentes familiares neurológicos [fuente no localizada]. Respaldo: ●○○.' }, [
      { node: 'neurosif', title: 'Neurosífilis', text: 'Las pruebas diagnósticas son complejas e imperfectas, sobre todo en las fases tardías y en la neurosífilis (Hutto 2001).' },
      { node: 'vih_ncd', title: 'Trastornos asociados al VIH', text: 'Trastornos neurocognitivos asociados al VIH, incluido el deterioro neurocognitivo asintomático (Antinori 2007).' },
      { node: 'wilson', title: 'Enfermedad de Wilson', text: 'Entre el 30 % y el 40 % tiene manifestaciones psiquiátricas al diagnóstico y el 20 % había consultado antes a psiquiatría (Zimbrean y Schilsky 2014).' },
      { node: 'pclupus', title: 'Lupus neuropsiquiátrico', text: 'El American College of Rheumatology define 19 síndromes neuropsiquiátricos en el lupus eritematoso sistémico (ACR 1999).' }
    ]) + 40;

    // ---------- Bloque 3: exploración psicopatológica ----------
    y = F.band(y, 'Exploración psicopatológica', { n: 3 }) + 14;
    y = heads(y) + 8;
    y = row('b1', y, { node: 'obnub', title: '¿Alteración del nivel de conciencia o de la atención, desorientación o fluctuación?', text: 'Los cambios recientes (horas o días) o fluctuantes de la cognición, la percepción, la función física o la conducta social indican posible delirium y obligan a evaluarlo con el 4AT (NICE CG103, rec. 1.3.1 y 1.6.1). Respaldo: ●●●.' }, [
      { node: 'delirium', title: 'Delirium', text: 'Si cuesta distinguir delirium, demencia o delirium superpuesto a demencia, se trata primero el delirium (NICE CG103, rec. 1.6.3).' },
      { node: 'cam', title: 'Cribado: 4AT y CAM', text: '4AT: sensibilidad del 89,7 % y especificidad del 84,1 % para delirium en personas de 70 años o más hospitalizadas (Bellelli 2014).' },
      { node: 'korsakoff', title: 'Encefalopatía de Wernicke', text: 'En el alcoholismo bastan dos de cuatro signos: déficit dietético, signos oculares, disfunción cerebelosa y alteración del estado mental o de la memoria (EFNS, Galvin 2010).' },
      { node: 'lewy', title: 'Demencia con cuerpos de Lewy', text: 'Las fluctuaciones de la cognición, la atención y la alerta, parecidas al delirium, son un rasgo clínico nuclear (McKeith 2017).' }
    ]) + 22;
    y = row('b2', y, { node: 'aluc_vis', title: '¿Alucinaciones visuales predominantes, u olfativas paroxísticas?', text: 'Orientan, pero no excluyen una psicosis primaria: la frecuencia media ponderada de alucinaciones visuales es del 27 % en la esquizofrenia y del 15 % en las psicosis afectivas (Waters 2014). Respaldo: ●●○.' }, [
      { node: 'delirium', title: 'Delirium', text: 'Los cambios de la percepción, como las alucinaciones visuales o auditivas, son uno de sus indicadores (NICE CG103, rec. 1.3.1).' },
      { node: 'psust', title: 'Psicosis inducida por sustancias', text: 'Las alucinaciones visuales orientaron a psicosis inducida frente a primaria (OR 2,13; IC 95 % 1,10-4,13) (Caton 2005).' },
      { node: 'aluc_olf', title: 'Aura olfativa epiléptica', text: 'Presente en 13 de 1423 personas con epilepsia focal refractaria: foco temporal mesial en todas y tumor temporal mesial en 10 (Acharya 1998).' },
      { node: 'psiep', title: 'Psicosis epiléptica', text: 'Prevalencia agrupada de psicosis en la epilepsia del 5,6 %, y del 7 % en la epilepsia del lóbulo temporal (Clancy 2014).' }
    ]) + 22;
    y = row('b3', y, { node: 'catatonia', title: '¿Catatonía, sobre todo con fiebre, disautonomía o delirium?', text: 'Cerca del 20 % de las catatonías en poblaciones no seleccionadas y más del 50 % en entornos médicos y quirúrgicos se asocian a un trastorno médico. Sugieren catatonía médica el delirium comórbido, la disautonomía significativa, la excitación catatónica, el reflejo de prensión, la neumonía, el antecedente neurológico y las crisis (BAP, Rogers 2023). Respaldo: ●●●.' }, [
      { node: 'cat_malig', title: 'Catatonía maligna', text: 'Catatonía con alteraciones autonómicas marcadas, que puede elevar de forma peligrosa la tensión arterial, la frecuencia cardiaca y la temperatura (BAP, Rogers 2023).' },
      { node: 'snm', title: 'Síndrome neuroléptico maligno', text: 'Reacción idiosincrásica a antagonistas dopaminérgicos: conciencia alterada con catatonía, rigidez, hipertermia y disautonomía (BAP, Rogers 2023).' },
      { node: 'nmda', title: 'Encefalitis anti-NMDAR', text: 'Catatonía en 137 de 464 personas adultas (30 %) con encefalitis anti-NMDAR y psicopatología descrita (Al-Diwani 2019).' },
      { node: 'epilepsia_psic', title: 'Estado epiléptico no convulsivo', text: 'Puede presentarse como catatonía; alertan las sacudidas sutiles de la cara o las extremidades y la enfermedad neurológica previa (BAP, Rogers 2023).' }
    ]) + 22;
    y = row('b4', y, { title: '¿Cambio de personalidad, apatía o desinhibición, o deterioro cognitivo?', text: 'La variante conductual de la demencia frontotemporal se solapa con la depresión, el trastorno bipolar, la esquizofrenia, el TOC y los trastornos de la personalidad; también ocurre el error inverso (Ducharme 2020). Respaldo: ●●●.' }, [
      { node: 'ftd', title: 'Demencia frontotemporal conductual', text: 'Se recomienda RM cerebral 3D-T1 con protocolo de lectura estandarizado; una PET con FDG normal ayuda a excluirla (Ducharme 2020).' },
      { node: 'tce_neuro', title: 'Traumatismo craneoencefálico', text: 'A largo plazo: cambio de personalidad, deterioro cognitivo, ansiedad y depresión; la psicosis no es inusual (Fleminger 2008).' },
      { node: 'em_neuro', title: 'Esclerosis múltiple', text: 'Prevalencia en estudios poblacionales: depresión 23,7 %, trastorno bipolar 5,83 % y psicosis 4,3 % (Marrie 2015).' }
    ]) + 22;
    y = row('b5', y, { title: '¿Reacción desproporcionada a los psicofármacos (rigidez, fiebre, confusión)?', text: 'De 45 personas con encefalitis anti-NMDAR ingresadas primero en psiquiatría, 21 (47 %) fueron trasladadas por sospecha de intolerancia a los antipsicóticos: fiebre, rigidez, mutismo o coma y datos de rabdomiólisis (Lejuste 2016). Respaldo: ●○○.' }, [
      { node: 'nmda', title: 'Encefalitis anti-NMDAR', text: 'En esa serie, 24 de 45 tenían signos neurológicos discretos en la primera evaluación y otros 17 los desarrollaron en pocos días (Lejuste 2016).' },
      { node: 'lewy', title: 'Demencia con cuerpos de Lewy', text: 'De 16 personas con demencia de cuerpos de Lewy confirmada en la necropsia y tratadas con neurolépticos, 13 reaccionaron de forma adversa, 7 con gravedad (McKeith 1992).' },
      { node: 'snm', title: 'Síndrome neuroléptico maligno', text: 'Existen criterios diagnósticos de consenso internacional elaborados por método Delphi (Gurrera 2011).' }
    ]) + 40;

    // ---------- Bloque 4: exploración física y neurológica ----------
    y = F.band(y, 'Exploración física y neurológica', { n: 4 }) + 14;
    y = heads(y) + 8;
    y = row('c1', y, { title: '¿Fiebre, cefalea o pródromo infeccioso?', text: 'Los diagnósticos diferenciales más frecuentes de la encefalitis autoinmune son la encefalitis por virus del herpes simple y otras infecciones del sistema nervioso central; la PCR de herpes en LCR puede ser negativa si se hace demasiado pronto (Graus 2016). Respaldo: ●●●.' }, [
      { node: 'tpsc_med', title: 'Encefalitis infecciosa', text: 'La recaída tras una encefalitis herpética puede ser autoinmune, con anticuerpos anti-NMDAR en LCR, y afecta al 20 % de quienes la han padecido (Graus 2016).' },
      { node: 'nmda', title: 'Encefalitis anti-NMDAR', text: 'La cefalea fue uno de los primeros síntomas en el 17 % de los casos con anticuerpos anti-NMDAR de un centro de referencia (Herken y Prüss 2017).' },
      { node: 'pandas', title: 'PANS/PANDAS (infancia)', text: 'Inicio agudo y llamativo de TOC o tics en edad prepuberal, con curso en brotes; en el 44 % el inicio siguió a una infección estreptocócica (Swedo 1998).' }
    ]) + 22;
    y = row('c2', y, { title: '¿Crisis epilépticas?', text: 'Las crisis no explicadas por una epilepsia ya conocida son uno de los hallazgos que, con el inicio subagudo, definen la encefalitis autoinmune posible (Graus 2016), y una de las «banderas rojas» que motivaron el estudio de anticuerpos en personas hospitalizadas por un cuadro psiquiátrico (Herken y Prüss 2017). Respaldo: ●●●.' }, [
      { node: 'epilepsia_psic', title: 'Psicosis de la epilepsia', text: 'Puede ser ictal, postictal o interictal, o expresión iatrogénica de fármacos o cirugía (Kanner y Rivas-Grajales 2016).' },
      { node: 'sreat', title: 'Encefalitis límbica autoinmune', text: 'Instauración rápida de confusión, déficit de memoria de trabajo, cambios del ánimo y, a menudo, crisis (Graus 2016).' },
      { node: 'nmda', title: 'Encefalitis anti-NMDAR', text: 'Las crisis pueden aparecer en cualquier momento de la enfermedad (Graus 2016).' }
    ]) + 22;
    y = row('c3', y, { title: '¿Movimientos anormales?', text: 'Discinesias orofaciales o de las extremidades, posturas anormales, temblor, mioclonías o clonus. El trastorno del movimiento es uno de los seis grupos de síntomas de los criterios de encefalitis anti-NMDAR (Graus 2016) y una señal de alerta («bandera amarilla») de encefalitis autoinmune (Herken y Prüss 2017). Respaldo: ●●●.' }, [
      { node: 'nmda', title: 'Encefalitis anti-NMDAR', text: 'Las discinesias orofaciales, de las extremidades o del tronco figuran entre los síntomas presentes al final del primer mes (Graus 2016).' },
      { node: 'huntington', title: 'Enfermedad de Huntington', text: 'Herencia autosómica dominante, inicio habitual en la edad adulta y combinación de rasgos motores, cognitivos y conductuales (Bates 2015).' },
      { node: 'sreat', title: 'Encefalopatía de Hashimoto', text: 'En 20 casos: temblor en el 80 %, afasia transitoria en el 80 %, mioclonías en el 65 %, ataxia en el 65 % y crisis en el 60 % (Castillo 2006).' },
      { node: 'sind_ser', title: 'Síndrome serotoninérgico', text: 'Clonus, agitación, diaforesis, temblor e hiperreflexia; hipertonía y temperatura superior a 38 °C en los casos graves (criterios de Hunter, Dunkley 2003).' }
    ]) + 22;
    y = row('c4', y, { title: '¿Signos focales, afasia o disartria, ataxia o signos oculares o sensitivos?', text: 'Los hallazgos focales nuevos del sistema nervioso central forman parte de los criterios de encefalitis autoinmune posible (Graus 2016); el déficit focal y la afasia o la disartria fueron «banderas amarillas» en la serie de Herken y Prüss (2017). Respaldo: ●●●.' }, [
      { node: 'tpsc_med', title: 'Lesión cerebral estructural o inflamatoria', text: 'En 302 catatonías de causa médica: trastornos inflamatorios cerebrales 28,8 %, daño neural 19,2 %, tóxicos o fármacos 11,6 %, patología estructural 9,6 % y epilepsia 9,3 % (BAP, Rogers 2023).' },
      { node: 'korsakoff', title: 'Encefalopatía de Wernicke', text: 'Signos oculares y disfunción cerebelosa junto a alteración del estado mental; la RM apoya el diagnóstico (EFNS, Galvin 2010).' },
      { node: 'b12', title: 'Déficit de vitamina B12', text: 'Parestesias, pérdida sensitiva, ataxia, demencia y trastornos psiquiátricos; 40 de 141 casos (28 %) sin anemia ni macrocitosis (Lindenbaum 1988).' }
    ]) + 22;
    y = row('c5', y, { title: '¿Signos sistémicos o analíticos de alarma?', text: 'Disautonomía, hiponatremia, dolor abdominal inexplicado o signos tiroideos. La inestabilidad autonómica y la hiponatremia figuran entre las «banderas amarillas» de Herken y Prüss (2017). Respaldo: ●○○.' }, [
      { node: 'porfiria', title: 'Porfiria aguda', text: 'Crisis neuroviscerales que imitan cuadros médicos y psiquiátricos agudos; pensar en ella ante un dolor abdominal inexplicado. La confirma un porfobilinógeno urinario muy elevado en una muestra aislada (Anderson 2005).' },
      { node: 'endocrino', title: 'Enfermedad tiroidea', text: 'En el diferencial del trastorno bipolar deben tenerse en cuenta trastornos físicos subyacentes como el hipotiroidismo o el hipertiroidismo (NICE CG185, rec. 1.3.3).' },
      { node: 'sreat', title: 'Encefalitis autoinmune no anti-NMDAR', text: 'La hiponatremia en un cuadro neuropsiquiátrico sin explicación motivó el estudio de anticuerpos de superficie neuronal (Herken y Prüss 2017).' }
    ]) + 40;

    // ---------- Bloque 5: estudio inicial razonado ----------
    y = F.band(y, 'Estudio inicial razonado: lo que dicen guías y consensos (no hay batería universal)', { n: 5 }) + 24;
    const EW = 530, EG = 20, ex = k => 60 + k * (EW + EG);
    const er = (defs, y0) => { const bs = defs.map((d, k) => F.box(d.id, Object.assign({ x: ex(k), y: y0, w: EW, fs: 18, align: 'left' }, d))); const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; }); return y0 + h; };
    y = er([
      { id: 'e1', type: 'act', title: '1 · En toda persona', text: 'Historia médica, de medicación y de consumo, y exploración física completa (NICE CG178, rec. 1.3.3.1). No existe un estándar consensuado para el estudio médico del primer episodio psicótico: se propone combinar un cribado amplio, la exclusión de enfermedades concretas elegidas por su tratabilidad y epidemiología, y medidas basales (Freudenreich 2009), con un enfoque escalonado guiado por la clínica (Skikic y Arriola 2020).' },
      { id: 'e2', type: 'act', node: 'cam', title: '2 · Si se altera la conciencia o la atención', text: 'Evaluación con el 4AT por una persona competente; en cuidados críticos o en la reanimación posquirúrgica, CAM-ICU o ICDSC (NICE CG103, rec. 1.6.1). Ante la duda con una demencia, tratar primero el delirium (rec. 1.6.3).' },
      { id: 'e3', type: 'act', node: 'nmda', title: '3 · Con banderas de encefalitis autoinmune', text: 'Evaluación neurológica y pruebas convencionales (RM cerebral, EEG y LCR) y anticuerpos neuronales en suero y en LCR a la vez: estudiar solo el suero puede dar falsos positivos y negativos (Graus 2016). El consenso de psicosis autoinmune define las categorías posible, probable y definida y las pruebas necesarias (Pollak 2020); el detalle de sus criterios, [fuente no localizada].' },
      { id: 'e4', type: 'act', node: 'catatonia', title: '4 · En un primer episodio de catatonía', text: 'Considerar TC o RM cerebral y anticuerpos anti-NMDAR y otros en suero y LCR; EEG si hay factores de riesgo de crisis, posible crisis o posible encefalitis. Las pruebas se eligen por la historia y la exploración, y no siempre hay que esperar a todos los resultados para tratar la catatonía (BAP, Rogers 2023).' }
    ], y) + 22;
    y = er([
      { id: 'e5', type: 'info', title: 'Neuroimagen en el primer episodio psicótico', text: 'La neuroimagen estructural (RM o TC) no se recomienda como parte rutinaria del estudio inicial del primer episodio psicótico (NICE TA136, rec. 1.1; recogido en CG178, rec. 1.3.3.2).' },
      { id: 'e6', type: 'info', title: 'Basal antes de un antipsicótico', text: 'Peso, perímetro abdominal, pulso y tensión arterial, glucemia en ayunas o HbA1c, perfil lipídico y prolactina, y valoración de trastornos del movimiento y del estado nutricional (NICE CG178, rec. 1.3.6.1); ECG si lo indica la ficha técnica, hay riesgo cardiovascular o la persona ingresa (rec. 1.3.6.2). Es una línea de base, no un cribado etiológico.' },
      { id: 'e7', type: 'warn', align: 'center', title: 'Rendimiento limitado de las banderas', text: 'En 105 primeros episodios psicóticos estudiados de forma prospectiva nadie tuvo anticuerpos neuronales; el 32 % y el 37 % cumplían dos listas de signos de alarma y el 20 % criterios de psicosis autoinmune posible o probable, y nadie la desarrolló. La causa fue psiquiátrica en 101 (96 %) y no psiquiátrica en 4 (Guasp 2021).' },
      { id: 'e8', type: 'warn', align: 'center', title: 'Sin demora cuando el cuadro es compatible', text: 'Con criterios de encefalitis anti-NMDAR probable se inician la inmunoterapia y la búsqueda de tumor sin esperar a los anticuerpos (Graus 2016). El tratamiento precoz predijo un buen resultado en una cohorte observacional de 577 personas (Titulaer 2013).' }
    ], y) + 50;

    // ---------- Bloque 6: relevancia médico-legal y límites ----------
    y = F.band(y, 'Relevancia médico-legal y límites', { n: 6 }) + 24;
    const MW = 1080;
    const m1 = F.box('m1', { x: 60, y, w: MW, type: 'info', fs: 18, align: 'left', node: 'imputabilidad', title: 'Causalidad e imputabilidad',
      text: 'Los diagnósticos «debido a otra afección médica» e «inducido por sustancias» son afirmaciones causales: requieren relación temporal, indicios de relación fisiológica directa y ausencia de una explicación primaria mejor (Keshavan y Kaneko 2013). En el proceso penal el diagnóstico no basta: la eximente exige que, al tiempo de los hechos, la anomalía o alteración psíquica impidiera comprender la ilicitud o actuar conforme a esa comprensión (Código Penal, art. 20.1); la intoxicación plena y el síndrome de abstinencia tienen eximente propia (art. 20.2).' });
    const m2 = F.box('m2', { x: 60 + MW + 20, y, w: MW, type: 'info', fs: 18, align: 'left', node: 'perit_forense', title: 'Pericia',
      text: 'El informe debe recoger qué se exploró y cuándo, qué pruebas se hicieron y cuáles no, y el grado de certeza de la atribución causal [fuente no localizada]. La persistencia del cuadro una vez resuelta la causa, o en torno a 1 mes tras la abstinencia, obliga a reconsiderar un trastorno independiente (DSM-5-TR), y la evolución posterior puede cambiar el diagnóstico: en el registro danés, el 32,2 % de las psicosis inducidas evolucionó a esquizofrenia o trastorno bipolar (Starzer 2018).' });
    const hm = Math.max(m1.h, m2.h); m1.h = hm; m2.h = hm;
    y += hm + 24;
    F.box('lim', { x: 60, y, w: 2180, type: 'lim', fs: 18, align: 'left', title: 'Límites de la figura',
      text: 'Esquema docente de apoyo al razonamiento: no es un protocolo ni un algoritmo validado. Ninguna bandera es patognomónica y su ausencia no descarta una causa médica; su rendimiento es limitado cuando no hay síntomas neurológicos ni pruebas alteradas (Guasp 2021). Los símbolos ●●●, ●●○ y ●○○ indican el tipo de documento que respalda cada bandera, no su sensibilidad ni su especificidad. Las cifras proceden de series, registros y centros de referencia y no son extrapolables sin más a otros dispositivos. No se dibujan baterías analíticas, umbrales ni pautas de tratamiento: la selección de pruebas corresponde al juicio clínico y a los protocolos de cada centro. Las entidades enlazadas son ejemplos, no una lista exhaustiva. Los criterios detallados de Pollak (2020) y el DSM-5-TR no se han podido cotejar en su texto original.' });
    F.footer('Fuentes: NICE CG178, TA136, CG103 y CG185; Graus 2016; Pollak 2020; Herken y Prüss 2017; Guasp 2021; BAP (Rogers 2023); Keshavan y Kaneko 2013; Freudenreich 2009; Reinhardt y Cohen 2015; Ducharme 2020; McKeith 2017; DSM-5-TR; Código Penal, art. 20. Referencias completas en la ficha de la figura. Esquema docente: no sustituye a la valoración clínica individual.');
    return F;
  }
};
