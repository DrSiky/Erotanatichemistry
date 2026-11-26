// Figura: árbol diferencial de los trastornos del neurodesarrollo a lo largo de la vida.
// Compilar en prueba: node tools/fig.js dd_neurodesarrollo --dry --png <carpeta>
// No repite la figura dd_tdah_adulto (diferencial del TDAH en la persona adulta): remite a ella.
const TITLE = 'Trastornos del neurodesarrollo a lo largo de la vida: diagnóstico diferencial';
module.exports = {
  key: 'dd_neurodesarrollo',
  meta: {
    title: TITLE,
    kind: 'dd',
    cap: 'Árbol de decisión en siete bloques para la infancia, la adolescencia y la primera evaluación en la edad adulta. 1) Cinco comprobaciones antes de poner una etiqueta (audición y visión, privación o maltrato, epilepsia, regresión y síndromes genéticos). 2) Dificultad global frente a perfil específico. 3) Comunicación social y patrones restringidos. 4) Atención e hiperactividad y lo que las imita en la infancia. 5) Aprendizaje y motricidad. 6) Movimientos repetitivos. 7) La coocurrencia como regla, la presentación en niñas, mujeres y personas adultas sin diagnóstico previo, y los instrumentos como apoyo. Cada pregunta (izquierda) lleva a las entidades que hay que considerar (derecha); las cajas con esquina negra abren su ficha. Los códigos CIE-11 se han cotejado con la tabulación oficial MMS (versión de enero de 2025). «[fuente no localizada]» señala lo que no se ha podido respaldar con una fuente primaria. Los diagnósticos no son excluyentes entre sí. El diferencial del TDAH en la persona adulta se desarrolla en la figura «dd_tdah_adulto». Esquema docente: no sustituye a la evaluación clínica individual.',
    refs: [
      'NICE (2011, actualizada en 2021). Autism spectrum disorder in under 19s: recognition, referral and diagnosis. Clinical guideline CG128. National Institute for Health and Care Excellence',
      'NICE (2012, actualizada en 2021). Autism spectrum disorder in adults: diagnosis and management. Clinical guideline CG142. National Institute for Health and Care Excellence',
      'NICE (2013, actualizada en 2021). Autism spectrum disorder in under 19s: support and management. Clinical guideline CG170. National Institute for Health and Care Excellence',
      'NICE (2018, actualizada en 2019). Attention deficit hyperactivity disorder: diagnosis and management. NICE guideline NG87. National Institute for Health and Care Excellence',
      'American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA Publishing',
      'Organización Mundial de la Salud (2025). CIE-11 para estadísticas de mortalidad y morbilidad (MMS), tabulación simple, versión de enero de 2025: 6A00-6A06, 6B04, 6B06, 6B44, 6B45, 8A05, 8A07.0, LD44.N0, LD55, LD90.4. icd.who.int',
      'Maulik PK et al. (2011). Prevalence of intellectual disability: a meta-analysis of population-based studies. Res Dev Disabil 32:419-436 · PMID 21236634',
      'Tassé MJ, Luckasson R & Schalock RL (2016). The relation between intellectual functioning and adaptive behavior in the diagnosis of intellectual disability. Intellect Dev Disabil 54:381-390 · PMID 27893317',
      'Reiss S, Levitan GW & Szyszko J (1982). Emotional disturbance and mental retardation: diagnostic overshadowing. Am J Ment Defic 86:567-574 · PMID 7102729',
      'Barger BD, Campbell JM & McDonough JD (2013). Prevalence and onset of regression within autism spectrum disorders: a meta-analytic review. J Autism Dev Disord 43:817-828 · PMID 22855372',
      'Neul JL et al. (2010). Rett syndrome: revised diagnostic criteria and nomenclature. Ann Neurol 68:944-950 · PMID 21154482',
      'Miller DT et al. (2010). Consensus statement: chromosomal microarray is a first-tier clinical diagnostic test for individuals with developmental disabilities or congenital anomalies. Am J Hum Genet 86:749-764 · PMID 20466091',
      'Moeschler JB, Shevell M & Committee on Genetics (2014). Comprehensive evaluation of the child with intellectual disability or global developmental delays. Pediatrics 134:e903-e918 · PMID 25157020',
      'Manickam K et al. (2021). Exome and genome sequencing for pediatric patients with congenital anomalies or intellectual disability: an evidence-based clinical guideline of the American College of Medical Genetics and Genomics (ACMG). Genet Med 23:2029-2037 · PMID 34211152',
      'Hagerman RJ et al. (2017). Fragile X syndrome. Nat Rev Dis Primers 3:17065 · PMID 28960184',
      'Kaufmann WE et al. (2017). Autism spectrum disorder in fragile X syndrome: cooccurring conditions and current treatment. Pediatrics 139(Suppl 3):S194-S206 · PMID 28814540',
      'McDonald-McGinn DM et al. (2015). 22q11.2 deletion syndrome. Nat Rev Dis Primers 1:15071 · PMID 27189754',
      'Rutter M et al. (1999). Quasi-autistic patterns following severe early global privation. English and Romanian Adoptees (ERA) Study Team. J Child Psychol Psychiatry 40:537-549 · PMID 10357161',
      'Auvin S et al. (2018). Systematic review of the screening, diagnosis, and management of ADHD in children with epilepsy. Consensus paper of the Task Force on Comorbidities of the ILAE Pediatric Commission. Epilepsia 59:1867-1880 · PMID 30178479',
      'Bishop DVM et al. (2017). Phase 2 of CATALISE: a multinational and multidisciplinary Delphi consensus study of problems with language development: terminology. J Child Psychol Psychiatry 58:1068-1080 · PMID 28369935',
      'Norbury CF et al. (2016). The impact of nonverbal ability on prevalence and clinical presentation of language disorder: evidence from a population study. J Child Psychol Psychiatry 57:1247-1257 · PMID 27184709',
      'Norbury CF (2014). Practitioner review: social (pragmatic) communication disorder conceptualization, evidence and clinical implications. J Child Psychol Psychiatry 55:204-216 · PMID 24117874',
      'Driessen J et al. (2020). Anxiety in children with selective mutism: a meta-analysis. Child Psychiatry Hum Dev 51:330-341 · PMID 31650460',
      'Zeanah CH & Gleason MM (2015). Annual research review: attachment disorders in early childhood - clinical presentation, causes, correlates, and treatment. J Child Psychol Psychiatry 56:207-222 · PMID 25359236',
      'Sedky K, Bennett DS & Carvalho KS (2014). Attention deficit hyperactivity disorder and sleep disordered breathing in pediatric populations: a meta-analysis. Sleep Med Rev 18:349-356 · PMID 24581717',
      'Rommelse N et al. (2016). An evidenced-based perspective on the validity of attention-deficit/hyperactivity disorder in the context of high intelligence. Neurosci Biobehav Rev 71:21-47 · PMID 27590827',
      'Caye A et al. (2020). Relative age and attention-deficit/hyperactivity disorder: data from three epidemiological cohorts and a meta-analysis. J Am Acad Child Adolesc Psychiatry 59:990-997 · PMID 31442562',
      'Peterson RL & Pennington BF (2012). Developmental dyslexia. Lancet 379:1997-2007 · PMID 22513218',
      'Butterworth B, Varma S & Laurillard D (2011). Dyscalculia: from brain to education. Science 332:1049-1053 · PMID 21617068',
      'Willcutt EG & Pennington BF (2000). Psychiatric comorbidity in children and adolescents with reading disability. J Child Psychol Psychiatry 41:1039-1048 · PMID 11099120',
      'Lingam R et al. (2009). Prevalence of developmental coordination disorder using the DSM-IV at 7 years of age: a UK population-based study. Pediatrics 123:e693-e700 · PMID 19336359',
      'Blank R et al. (2019). International clinical practice recommendations on the definition, diagnosis, assessment, intervention, and psychosocial aspects of developmental coordination disorder. Dev Med Child Neurol 61:242-285 · PMID 30671947',
      'Knight T et al. (2012). Prevalence of tic disorders: a systematic review and meta-analysis. Pediatr Neurol 47:77-90 · PMID 22759682',
      'Szejko N et al. (2022). European clinical guidelines for Tourette syndrome and other tic disorders - version 2.0. Part I: assessment. Eur Child Adolesc Psychiatry 31:383-402 · PMID 34661764',
      'Barry S et al. (2011). Neurodevelopmental movement disorders - an update on childhood motor stereotypies. Dev Med Child Neurol 53:979-985 · PMID 21749367',
      'Hirschtritt ME et al. (2015). Lifetime prevalence, age of risk, and genetic relationships of comorbid psychiatric disorders in Tourette syndrome. JAMA Psychiatry 72:325-333 · PMID 25671412',
      'Swedo SE et al. (1998). Pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections: clinical description of the first 50 cases. Am J Psychiatry 155:264-271 · PMID 9464208',
      'Chang K et al. (2015). Clinical evaluation of youth with pediatric acute-onset neuropsychiatric syndrome (PANS): recommendations from the 2013 PANS Consensus Conference. J Child Adolesc Psychopharmacol 25:3-13 · PMID 25325534',
      'Pringsheim T et al. (2021). Rapid onset functional tic-like behaviors in young females during the COVID-19 pandemic. Mov Disord 36:2707-2713 · PMID 34387394',
      'Gillberg C (2010). The ESSENCE in child psychiatry: Early Symptomatic Syndromes Eliciting Neurodevelopmental Clinical Examinations. Res Dev Disabil 31:1543-1551 · PMID 20634041',
      'Lai MC et al. (2019). Prevalence of co-occurring mental health diagnoses in the autism population: a systematic review and meta-analysis. Lancet Psychiatry 6:819-829 · PMID 31447415',
      'Loomes R, Hull L & Mandy WPL (2017). What is the male-to-female ratio in autism spectrum disorder? A systematic review and meta-analysis. J Am Acad Child Adolesc Psychiatry 56:466-474 · PMID 28545751',
      'Hinshaw SP et al. (2022). Annual research review: attention-deficit/hyperactivity disorder in girls and women: underrepresentation, longitudinal processes, and key directions. J Child Psychol Psychiatry 63:484-496 · PMID 34231220',
      'Cook J et al. (2021). Camouflaging in autism: a systematic review. Clin Psychol Rev 89:102080 · PMID 34563942',
      'Brugha TS et al. (2011). Epidemiology of autism spectrum disorders in adults in the community in England. Arch Gen Psychiatry 68:459-465 · PMID 21536975',
      'Fusar-Poli L et al. (2022). Missed diagnoses and misdiagnoses of adults with autism spectrum disorder. Eur Arch Psychiatry Clin Neurosci 272:187-198 · PMID 32892291',
      'Robins DL et al. (2014). Validation of the Modified Checklist for Autism in Toddlers, Revised with Follow-up (M-CHAT-R/F). Pediatrics 133:37-45 · PMID 24366990',
      'Wieckowski AT et al. (2023). Sensitivity and specificity of the Modified Checklist for Autism in Toddlers (original and revised): a systematic review and meta-analysis. JAMA Pediatr 177:373-383 · PMID 36804771',
      'Randall M et al. (2018). Diagnostic tests for autism spectrum disorder (ASD) in preschool children. Cochrane Database Syst Rev 7:CD009044 · PMID 30075057',
      'Lebersfeld JB et al. (2021). Systematic review and meta-analysis of the clinical utility of the ADOS-2 and the ADI-R in diagnosing autism spectrum disorders in children. J Autism Dev Disord 51:4101-4114 · PMID 33475930',
      'Kenny L et al. (2016). Which terms should be used to describe autism? Perspectives from the UK autism community. Autism 20:442-462 · PMID 26134030',
      'Bottema-Beutel K et al. (2021). Avoiding ableist language: suggestions for autism researchers. Autism Adulthood 3:18-29 · PMID 36601265'
    ],
    nodes: ['tea_camuflaje', 'func_ejec', 'sens_tea', 'disc_int', 'tics', 'mutismo']
  },
  draw(Fig) {
    const W = 2300, X = 60, FW = W - 2 * X;
    const F = new Fig({ key: 'dd_neurodesarrollo', title: TITLE, w: W,
      desc: 'Árbol diferencial en siete bloques: comprobaciones previas (audición y visión, privación o maltrato, epilepsia, regresión, síndromes genéticos); dificultad global o específica; comunicación social y patrones restringidos; atención e hiperactividad; aprendizaje y motricidad; movimientos repetitivos; y coocurrencia, presentación en niñas, mujeres y personas adultas, instrumentos de apoyo y límites.' });
    const QX = X, QW = 540, GX = 640, GW = W - X - GX, GAP = 14, FQ = 18, FO = 17;

    // Fila: pregunta a la izquierda y, a la derecha, el grupo de entidades que hay que considerar (rejilla de nc columnas).
    const row = (id, y0, q, outs, nc, label) => {
      let yy = y0 + 42, bottom = yy;
      for (let i = 0; i < outs.length; i += nc) {
        const line = outs.slice(i, i + nc), w = (GW - 32 - GAP * (nc - 1)) / nc;
        const bs = line.map((o, k) => F.box(id + '_e' + (i + k), Object.assign({ x: GX + 16 + k * (w + GAP), y: yy, w, type: 'dx', fs: FO }, o)));
        const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; });
        yy += h + GAP; bottom = yy - GAP;
      }
      const gh = bottom + 16 - y0;
      const pre = F.box(id + '_tmp', Object.assign({ x: QX, y: y0, w: QW, type: 'q', fs: FQ }, q));
      const qh = pre.h; delete F.boxes[id + '_tmp']; F.order.pop();
      const H = Math.max(gh, qh);
      const qb = F.box(id, Object.assign({ x: QX, y: y0, w: QW, type: 'q', fs: FQ, minH: H }, q));
      F.group({ x: GX, y: y0, w: GW, h: H, label: label || 'Considerar' });
      F.arrow(qb, { x: GX, y: y0, w: GW, h: H }, { from: 'r', to: 'l' });
      return y0 + H;
    };
    // Fila de cajas de igual altura repartidas a todo el ancho.
    const strip = (defs, y0, o) => {
      o = o || {}; const x0 = o.x == null ? X : o.x, tw = o.w || FW, g = o.gap == null ? 20 : o.gap, w = (tw - g * (defs.length - 1)) / defs.length;
      const bs = defs.map((d, k) => F.box(d.id, Object.assign({ x: x0 + k * (w + g), y: y0, w, fs: o.fs || 17 }, d)));
      const h = Math.max(...bs.map(b => b.h)); bs.forEach(b => { b.h = h; });
      return { y: y0 + h, bs };
    };

    // ---------- Bloque 1: antes de etiquetar ----------
    let y = F.band(90, 'Antes de poner una etiqueta: cinco comprobaciones', { n: 1 }) + 22;
    const s1 = strip([
      { id: 'a1', type: 'act', title: 'Audición y visión',
        text: 'El déficit auditivo o visual grave está en el diferencial del autismo (NICE CG128, rec. 1.5.7) y la evaluación reúne los resultados de las pruebas de audición y visión (rec. 1.4.7). Un retraso del lenguaje no se atribuye sin más a problemas auditivos tempranos ni a que la lengua familiar sea otra (CG128). En personas adultas: pruebas de audición o visión si se sospecha un déficit (CG142, rec. 1.2.17).' },
      { id: 'a2', type: 'act', node: 'maltrato_inf', title: 'Privación, maltrato y adversidad',
        text: 'Maltrato y trastornos del apego están en el diferencial (CG128, rec. 1.5.7) y la exploración física busca signos de lesión (rec. 1.5.6). Tras una privación institucional grave, el 6 % de 111 niñas y niños adoptados desde Rumanía mostró patrones de tipo autista, que mejoraron entre los 4 y los 6 años (Rutter 1999). La adversidad no excluye: en la infancia tutelada hay más TDAH (NG87, rec. 1.2.1).' },
      { id: 'a3', type: 'act', title: 'Epilepsia',
        text: 'EEG si se sospecha epilepsia, no de rutina (CG128, rec. 1.7.1). La encefalopatía epiléptica es una causa de regresión (rec. 1.5.7). Las personas con epilepsia tienen más prevalencia de TDAH (NG87, rec. 1.2.1); la ILAE propone cribarlo desde los 6 años o desde el diagnóstico (Auvin 2018). Las crisis de ausencia pueden tomarse por inatención [fuente no localizada].' },
      { id: 'a4', type: 'warn', node: 'regres_cond', title: 'Regresión: bandera roja',
        text: 'Pérdida de habilidades ya adquiridas. Valoración por pediatría o neuropediatría antes que por el equipo de autismo si hay regresión del lenguaje después de los 3 años o regresión motora a cualquier edad (CG128, rec. 1.3.2). Diferencial: síndrome de Rett y encefalopatía epiléptica (rec. 1.5.7); estudio genético según la clínica. En el autismo hay regresión en el 32,1 % (IC 95 % 29,5-34,8), a una edad media de 1,78 años (Barger 2013).' },
      { id: 'a5', type: 'act', node: 'hered_tea', title: 'Síndromes genéticos',
        text: 'Buscar rasgos dismórficos, anomalías congénitas, macro o microcefalia y estigmas cutáneos (CG128, rec. 1.5.6). NICE no pide pruebas genéticas de rutina: solo con dismorfias, anomalías congénitas o indicios de discapacidad intelectual (rec. 1.7.1). En la discapacidad intelectual o el retraso global sin causa conocida, microarray cromosómico de primera línea (rendimiento 15-20 %; Miller 2010) y estudio de X frágil (Moeschler y Shevell 2014); exoma o genoma como prueba de primer o segundo nivel (Manickam 2021).' }
    ], y);
    y = s1.y + 22;
    // Síndromes y exposiciones con fenotipo conductual
    const g1y = y; y += 40;
    const s1b = strip([
      { id: 'g1', type: 'dx', node: 'x_fragil', title: 'Síndrome X frágil (FMR1) · LD55',
        text: 'Forma hereditaria más frecuente de discapacidad intelectual y de autismo (Hagerman 2017). En una muestra clínica, la mitad de los varones y casi el 20 % de las mujeres cumplían criterios DSM-5 de autismo (Kaufmann 2017).' },
      { id: 'g2', type: 'dx', node: 'del22q', title: 'Deleción 22q11.2 · LD44.N0',
        text: 'Microdeleción más frecuente, en torno a 1 de cada 1000 fetos: retraso cognitivo variable, fenotipo conductual y enfermedad psiquiátrica (McDonald-McGinn 2015). Título CIE-11: «fenotipo CATCH 22».' },
      { id: 'g3', type: 'dx', title: 'Síndrome de Rett · LD90.4',
        text: 'En torno a 1 de cada 10 000 niñas nacidas vivas; a menudo por mutaciones de MECP2. El diagnóstico es clínico, con criterios de consenso revisados (Neul 2010).' }
    ], y, { x: X + 16, w: FW - 32, gap: GAP });
    y = s1b.y + GAP;
    const s1c = strip([
      { id: 'g4', type: 'dx', node: 'smith_magenis', title: 'Smith-Magenis (17p11.2)' },
      { id: 'g5', type: 'dx', node: 'williams', title: 'Williams-Beuren (7q11.23)' },
      { id: 'g6', type: 'dx', node: 'prader_willi', title: 'Prader-Willi · LD90.3' },
      { id: 'g7', type: 'dx', node: 'cnv_16p_1q', title: 'CNV 16p11.2 y 1q21.1' },
      { id: 'g8', type: 'dx', node: 'fasd', title: 'Espectro alcohólico fetal' },
      { id: 'g9', type: 'dx', node: 'privacion_instit', title: 'Privación institucional temprana' }
    ], y, { x: X + 16, w: FW - 32, gap: GAP });
    y = s1c.y + 16;
    F.group({ x: X, y: g1y, w: FW, h: y - g1y, label: 'Síndromes y exposiciones con fenotipo conductual propio (ejemplos; cada caja con esquina negra abre su ficha)' });
    y += 46;

    // ---------- Bloque 2: global o específica ----------
    y = F.band(y, '¿Dificultad global o perfil específico?', { n: 2 }) + 16;
    y = row('b2', y, { title: '¿Están limitados a la vez el funcionamiento intelectual y la conducta adaptativa?',
      text: 'Ambos se evalúan juntos y pesan por igual en el diagnóstico (Tassé 2016): razonamiento y aprendizaje por un lado; habilidades conceptuales, sociales y prácticas por otro. Prevalencia de la discapacidad intelectual: 10,37 por 1000 en 52 estudios poblacionales (Maulik 2011). Un cociente intelectual aislado no basta.' }, [
      { node: 'di', title: 'Trastorno del desarrollo intelectual · 6A00',
        text: 'Limitaciones significativas en los dos dominios, con inicio en el periodo del desarrollo. Leve 6A00.0, moderado 6A00.1, grave 6A00.2, profundo 6A00.3. El DSM-5-TR gradúa la gravedad por el funcionamiento adaptativo, no por el CI.' },
      { title: 'Provisional · 6A00.4 y retraso global del desarrollo',
        text: 'Cuando aún no cabe una evaluación válida: primera infancia (retraso global del desarrollo en menores de 5 años, DSM-5-TR) o déficit sensorial, motor o de comunicación que la impide. Obliga a reevaluar más adelante.' },
      { type: 'info', title: 'Perfil específico',
        text: 'Dificultad circunscrita con funcionamiento general conservado: seguir los bloques 3 a 6. Puede añadirse a la discapacidad intelectual si excede lo esperable para el nivel de desarrollo (DSM-5-TR).' },
      { type: 'warn', node: 'wais', title: 'Ensombrecimiento diagnóstico',
        text: 'El mismo síntoma se atribuye menos a un trastorno mental si la persona tiene discapacidad intelectual (Reiss 1982). La medida del CI con escalas de Wechsler se detalla en su ficha.' }
    ], 4);
    y += 46;

    // ---------- Bloque 3: comunicación social ----------
    y = F.band(y, 'Comunicación social y patrones restringidos y repetitivos', { n: 3 }) + 16;
    y = row('b3', y, { title: '¿Dificultad persistente en la comunicación y la interacción social? ¿Se acompaña de patrones restringidos y repetitivos?',
      text: 'Historia del desarrollo y observación directa de la interacción, con información de varios contextos (CG128, rec. 1.5.5 y 1.5.9). Hay más incertidumbre antes de los 24 meses, con edad de desarrollo inferior a 18 meses, sin información de la primera infancia (adopción, tutela), en la adolescencia tardía y con trastornos coexistentes complejos o déficit sensorial o motor (rec. 1.5.12).' }, [
      { node: 'tea', title: 'Trastorno del espectro del autismo · 6A02',
        text: 'Déficits persistentes de comunicación e interacción social con patrones restringidos, repetitivos e inflexibles de conducta, intereses o actividades (incluida la reactividad sensorial en el DSM-5-TR), desde el periodo del desarrollo. Subtipos CIE-11 según desarrollo intelectual y lenguaje funcional.' },
      { title: 'Trastorno de la comunicación social (pragmático) · 6A01.22',
        text: 'Dificultad pragmática sin patrones restringidos ni repetitivos (DSM-5-TR); en la CIE-11, subtipo del trastorno del desarrollo del lenguaje. Límites discutidos: faltan instrumentos validados y se solapa con otros trastornos (Norbury 2014).' },
      { node: 'tr_leng', title: 'Trastorno del desarrollo del lenguaje · 6A01.2',
        text: 'Dificultad del lenguaje con repercusión funcional y sin causa biomédica conocida (consenso CATALISE; Bishop 2017). Prevalencia al empezar la escuela: 7,58 % (IC 95 % 5,33-10,66) (Norbury 2016).' },
      { node: 'tartamudez', title: 'Fluidez del habla · 6A01.1',
        text: 'Trastorno de la fluidez de inicio en la infancia (tartamudez). Los sonidos del habla se codifican en 6A01.0. Ninguno altera por sí mismo la reciprocidad social [fuente no localizada].' },
      { node: 'mutis_sel', title: 'Mutismo selectivo · 6B06',
        text: 'No se habla en situaciones concretas (por ejemplo, la escuela) pese a hacerlo en otras (DSM-5-TR). El 80 % tiene otro trastorno de ansiedad, sobre todo fobia social (69 %) (Driessen 2020).' },
      { node: 'fobia_soc', title: 'Ansiedad social · 6B04',
        text: 'Temor a la evaluación negativa (DSM-5-TR). En la persona adulta figura entre los diferenciales y los trastornos coexistentes del autismo, junto con el TOC (CG142, rec. 1.2.10).' },
      { node: 'rad', title: 'Apego reactivo · 6B44 y relación social desinhibida · 6B45',
        text: 'Requieren un antecedente de cuidado gravemente insuficiente (DSM-5-TR; revisión de Zeanah y Gleason 2015). «Trastornos del apego» y maltrato constan en el diferencial del autismo (CG128, rec. 1.5.7).' },
      { node: 'tea_esq_dd', title: 'Primera evaluación en la edad adulta',
        text: 'Diferencial con esquizofrenia, trastornos del ánimo, ansiedad social y TOC (CG142, rec. 1.2.10); personalidad esquizoide y esquizotípica en la ficha. Clave: historia temprana del desarrollo, si es posible con informante.' }
    ], 4);
    y += 46;

    // ---------- Bloque 4: atención e hiperactividad ----------
    y = F.band(y, 'Atención e hiperactividad: el TDAH y lo que lo imita en la infancia', { n: 4 }) + 16;
    y = row('b4', y, { title: '¿Inatención, hiperactividad o impulsividad frecuentes, en dos o más contextos y con deterioro?',
      text: 'Evaluación clínica y psicosocial completa, historia del desarrollo y psiquiátrica, informes de observadores y exploración del estado mental (NG87, rec. 1.3.1). Síntomas frecuentes, en dos o más contextos importantes y con deterioro al menos moderado (rec. 1.3.3). Un imitador no excluye el TDAH: puede coexistir con él.' }, [
      { node: 'tdah', title: 'TDAH · 6A05',
        text: 'Presentación inatenta 6A05.0, hiperactiva-impulsiva 6A05.1 y combinada 6A05.2. Varios síntomas presentes antes de los 12 años (DSM-5-TR). No se recomienda excluirlo por coexistir con un trastorno generalizado del desarrollo (NG87, rec. 1.3.3).' },
      { node: 'sueno_inf', title: 'Sueño',
        text: 'Los trastornos respiratorios del sueño se asocian a síntomas de TDAH (g de Hedges 0,57; IC 95 % 0,36-0,78), que disminuyen tras la adenoamigdalectomía; los autores proponen cribarlos (Sedky 2014).' },
      { node: 'anx_sep', title: 'Ansiedad y ánimo',
        text: 'Inatención por preocupación o por ánimo bajo (DSM-5-TR). También coexisten: con trastornos del ánimo o de ansiedad hay más prevalencia de TDAH (NG87, rec. 1.2.1).' },
      { node: 'ptsd', title: 'Trauma y adversidad',
        text: 'Hipervigilancia y problemas de concentración postraumáticos pueden tomarse por TDAH (DSM-5-TR). En la infancia tutelada hay más prevalencia de TDAH (NG87, rec. 1.2.1).' },
      { type: 'info', title: 'Altas capacidades',
        text: 'La inteligencia alta puede imitar síntomas o, al contrario, compensarlos y retrasar el diagnóstico; los datos disponibles apoyan la validez del TDAH también con inteligencia alta (Rommelse 2016).' },
      { type: 'info', title: 'Déficit sensorial',
        text: 'Audición y visión comprobadas (bloque 1). Que la hipoacusia no detectada se presente como inatención es plausible, pero sin cifra respaldada [fuente no localizada].' },
      { node: 'edad_relativa_tdah', type: 'info', title: 'Edad relativa',
        text: 'Quienes nacen en los cuatro primeros meses del curso escolar (las niñas y los niños más jóvenes de la clase) reciben más diagnósticos de TDAH: RR 1,34 (IC 95 % 1,26-1,43) (Caye 2020).' },
      { node: 'tdah_dd_adulto', type: 'act', title: 'Primera evaluación en la edad adulta',
        text: 'Trastorno bipolar, trastorno límite, trauma y sustancias no se repiten aquí: véanse la figura «dd_tdah_adulto» y esta ficha.' }
    ], 4);
    y += 46;

    // ---------- Bloque 5: aprendizaje y motricidad ----------
    y = F.band(y, 'Aprendizaje y motricidad', { n: 5 }) + 16;
    y = row('b5', y, { title: '¿Lectura, escritura, cálculo o coordinación motora muy por debajo de lo esperado, pese a una enseñanza adecuada?',
      text: 'Rendimiento medido con pruebas normalizadas e interferencia en la vida escolar, laboral o cotidiana (DSM-5-TR). Problemas de aprendizaje académico y de coordinación motora figuran entre lo que puede coexistir con el autismo (CG128, rec. 1.5.15) y las dificultades específicas del aprendizaje aumentan la prevalencia de TDAH (NG87, rec. 1.2.1).' }, [
      { node: 'aprend', title: 'Con dificultad en la lectura (dislexia) · 6A03.0',
        text: 'Reconocimiento de palabras lento e impreciso; la teoría fonológica sigue siendo la mejor respaldada (Peterson y Pennington 2012).' },
      { title: 'Con dificultad en la expresión escrita · 6A03.1',
        text: 'Ortografía, gramática y puntuación, y claridad u organización de la expresión escrita (DSM-5-TR).' },
      { title: 'Con dificultad en matemáticas (discalculia) · 6A03.2',
        text: 'Déficit nuclear en la comprensión de los conjuntos y de su numerosidad, base de la aritmética escolar (Butterworth 2011).' },
      { node: 'tdcoord', title: 'Trastorno del desarrollo de la coordinación · 6A04',
        text: 'Habilidades motoras coordinadas muy por debajo de lo esperado, con interferencia en la vida diaria. Prevalencia del 1,7 % a los 7 años con criterios estrictos (Lingam 2009). Recomendaciones internacionales de la EACD (Blank 2019).' },
      { type: 'info', title: 'Qué descartar antes',
        text: 'Discapacidad intelectual, agudeza visual o auditiva no corregida, otros trastornos mentales o neurológicos, adversidad psicosocial, falta de dominio de la lengua de enseñanza o enseñanza inadecuada (DSM-5-TR, criterio D).' },
      { node: 'aprend_adulto', type: 'act', title: 'En la edad adulta',
        text: 'Persistencia, evaluación y apoyos de la dislexia y la discalculia en la persona adulta: véase la ficha.' }
    ], 3);
    y += 46;

    // ---------- Bloque 6: movimientos ----------
    y = F.band(y, 'Movimientos y vocalizaciones repetitivos', { n: 6 }) + 16;
    y = row('b6', y, { title: '¿Cómo es el movimiento: brusco y cambiante, rítmico y fijo, o dirigido a un fin?',
      text: 'Preguntar por la edad de inicio, el curso, la sensación previa, la capacidad de suprimirlo y lo que ocurre con la distracción. Las estereotipias pueden distinguirse de los tics por la historia (inicio más temprano) y por la exploración (Barry 2011). Las guías europeas insisten en el diferencial con los trastornos funcionales del movimiento (Szejko 2022).' }, [
      { node: 'tics_tr', title: 'Tics transitorios y crónicos · 8A05.01 a 8A05.03',
        text: 'Movimientos o vocalizaciones súbitos, rápidos, recurrentes y no rítmicos (DSM-5-TR). El trastorno de tics transitorio es el más frecuente en la infancia: 2,99 % (IC 95 % 1,60-5,61) (Knight 2012). La CIE-11 los codifica entre las enfermedades del sistema nervioso.' },
      { node: 'tourette', title: 'Síndrome de Tourette · 8A05.00',
        text: 'Varios tics motores y al menos uno fónico durante más de un año, con inicio antes de los 18 años (DSM-5-TR). Prevalencia infantil del 0,77 %; 1,06 % en niños y 0,25 % en niñas (Knight 2012).' },
      { node: 'estereotip', title: 'Estereotipias · 6A06 (8A07.0)',
        text: 'Movimientos repetitivos sin función clara. Frecuentes en el autismo, pero también con desarrollo típico, déficit sensorial, aislamiento social o discapacidad intelectual grave (Barry 2011). Sin autolesión 6A06.0; con autolesión 6A06.1.' },
      { node: 'toc_ped', title: 'Compulsiones',
        text: 'Conductas repetitivas en respuesta a una obsesión o según reglas rígidas, dirigidas a reducir el malestar (DSM-5-TR). El 72,1 % de las personas con síndrome de Tourette cumple criterios de TOC o de TDAH a lo largo de la vida (Hirschtritt 2015).' },
      { node: 'pandas', title: 'PANS y PANDAS · 8A05.10',
        text: 'PANDAS: cinco criterios de trabajo (TOC o tics, inicio prepuberal, curso episódico, asociación con estreptococo del grupo A y con anomalías neurológicas) (Swedo 1998). PANS: categoría más amplia de inicio agudo, con consenso de evaluación (Chang 2015). 8A05.10 corresponde a «tics infecciosos o posinfecciosos».' },
      { type: 'info', title: 'Conductas funcionales similares a tics',
        text: 'De inicio rápido, descritas en mujeres jóvenes durante la pandemia de COVID-19 (Pringsheim 2021). Rasgos diferenciales detallados en la ficha del síndrome de Tourette.' }
    ], 3);
    y += 46;

    // ---------- Bloque 7: comorbilidad, niñas y mujeres, personas adultas, instrumentos ----------
    y = F.band(y, 'La coocurrencia es la regla · niñas, mujeres y personas adultas sin diagnóstico previo · instrumentos', { n: 7 }) + 20;
    const t1 = F.table({ x: X, y, fs: 17.5,
      cols: [{ w: 430, label: 'Punto de partida' }, { w: 1150, label: 'Qué coexiste y con qué frecuencia' }, { w: 600, label: 'Fuente' }],
      rows: [
        ['Principio general', 'La coexistencia de trastornos y los síntomas compartidos son la regla y no la excepción en psiquiatría infantil y medicina del desarrollo: concepto ESSENCE.', 'Gillberg 2010'],
        [{ t: 'Autismo', node: 'tea_adulto' }, 'TDAH 28 % (IC 95 % 25-32); trastornos de ansiedad 20 %; del sueño-vigilia 13 %; disruptivos, del control de los impulsos y de la conducta 12 %; depresivos 11 %; TOC 9 %; bipolares 5 %; espectro de la esquizofrenia 4 %. Cifras más altas en muestras clínicas.', 'Lai 2019 (metaanálisis, 96 estudios)'],
        [{ t: 'TDAH', node: 'tdah_adulto' }, 'Más prevalencia de TDAH en personas con autismo, tics, discapacidad intelectual, dificultades específicas del aprendizaje, epilepsia, prematuridad, trastorno negativista o de conducta y trastornos del ánimo.', 'NICE NG87, rec. 1.2.1 (sin cifras)'],
        ['Síndrome de Tourette', 'Alguna comorbilidad psiquiátrica a lo largo de la vida en el 85,7 %; dos o más en el 57,7 %; TOC o TDAH en el 72,1 %. La edad de mayor riesgo de inicio es de 4 a 10 años.', 'Hirschtritt 2015 (n = 1374)'],
        ['Trastorno del lenguaje', 'Más síntomas sociales, emocionales y conductuales que sus iguales; el 88 % no alcanza el progreso académico esperado.', 'Norbury 2016'],
        ['Dificultad lectora', 'Más trastornos internalizantes y externalizantes; la relación con los externalizantes se explica por el TDAH asociado, y la relación con ansiedad y depresión se mantiene al controlarlo.', 'Willcutt y Pennington 2000'],
        ['Síndrome X frágil con autismo', 'Más crisis epilépticas que sin autismo (20,7 % frente a 7,6 %), problemas de sueño más persistentes y más problemas de conducta.', 'Kaufmann 2017'],
        ['Estereotipias motoras', 'Es frecuente la coexistencia con TDAH, TOC y trastornos de tics (sin cifra en la fuente).', 'Barry 2011']
      ] });
    y = t1.y + 24;
    const s7 = strip([
      { id: 'c1', type: 'info', align: 'left', node: 'tea_mujeres', title: 'Niñas y mujeres: autismo',
        text: 'Entre quienes cumplen criterios, la razón entre niños y niñas se acerca a 3:1 y no a 4:1; las niñas tienen un riesgo desproporcionado de no recibir el diagnóstico clínico (Loomes 2017). El camuflaje difiere según sexo y género, y más camuflaje autoinformado se asocia a peor salud mental (Cook 2021).' },
      { id: 'c2', type: 'info', align: 'left', node: 'tdah_mujeres', title: 'Niñas y mujeres: TDAH',
        text: 'Se considera infrarreconocido: menos derivaciones, más TDAH sin diagnosticar y más diagnósticos incorrectos de otra condición (NG87, rec. 1.2.2). Predominan la inatención y los problemas internalizantes; los síntomas menos visibles y las estrategias compensatorias hacen que pasen inadvertidos (Hinshaw 2022).' },
      { id: 'c3', type: 'info', align: 'left', node: 'aq10', title: 'Personas adultas sin diagnóstico previo',
        text: 'Prevalencia de autismo en personas adultas de la comunidad en Inglaterra: 9,8 por 1000 (IC 95 % 3,0-16,5), en su mayoría sin reconocer (Brugha 2011). En 161 primeros diagnósticos en la edad adulta pasaron 11 años (mediana) entre la primera evaluación en salud mental y el diagnóstico (Fusar-Poli 2022). AQ-10 de 6 o más, o sospecha clínica: ofrecer evaluación completa (CG142, rec. 1.2.3).' },
      { id: 'c4', type: 'info', align: 'left', title: 'Lenguaje y neurodiversidad',
        text: 'No hay un término aceptado por todo el mundo: «persona autista» lo prefieren muchas personas adultas autistas y familias, y «persona con autismo» más profesionales (Kenny 2016). Preguntar la preferencia y evitar el lenguaje de déficit o de «riesgo» cuando existe una alternativa neutra (Bottema-Beutel 2021). Describir fortalezas y necesidades además de dificultades (CG128, rec. 1.5.5).' }
    ], y, { fs: 17 });
    y = s7.y + 28;
    y = F.text(X, y + 18, 'Instrumentos: apoyan la evaluación, no hacen el diagnóstico', { bold: true, fs: 20, w: FW }) + 4;
    const t2 = F.table({ x: X, y, fs: 17.5,
      cols: [{ w: 430, label: 'Instrumento' }, { w: 1150, label: 'Qué aporta y con qué límites' }, { w: 600, label: 'Fuente' }],
      rows: [
        ['M-CHAT-R/F (cribado, 18-24 meses)', 'Cribado positivo tras el seguimiento: 47,5 % de diagnóstico de autismo y 94,6 % de algún retraso o motivo de preocupación del desarrollo. Sensibilidad agrupada 0,83 y especificidad 0,94, con amplia variabilidad entre estudios.', 'Robins 2014; Wieckowski 2023'],
        [{ t: 'ADOS-2 y ADI-R', node: 'aq_ados_adir' }, 'Preescolares: ADOS, sensibilidad 0,94 y especificidad 0,80; ADI-R, sensibilidad 0,52 y especificidad 0,84 (Cochrane; estudios con alto riesgo de sesgo). En la infancia, ADOS-2 0,89-0,92 y 0,81-0,85; ADI-R 0,75 y 0,82, con menos datos en contextos clínicos. No basarse en un instrumento específico por sí solo para diagnosticar autismo.', 'Randall 2018; Lebersfeld 2021; NICE CG128, rec. 1.5.11'],
        [{ t: 'SRS-2 (rasgos autistas)', node: 'srs2' }, 'Medida dimensional de rasgos; propiedades y límites en la ficha.', 'Ficha del atlas'],
        [{ t: 'Escalas de Conners', node: 'conners' }, 'El TDAH no se diagnostica solo con escalas ni con datos de observación; las escalas de Conners y el SDQ son apoyos útiles, y la observación (por ejemplo, en la escuela) ayuda cuando hay dudas.', 'NICE NG87, rec. 1.3.2'],
        [{ t: 'SDQ', node: 'sdq' }, 'Cribado amplio de dificultades emocionales y de conducta. Su uso para cribar el TDAH en la infancia con epilepsia cuenta con respaldo de nivel B.', 'NICE NG87, rec. 1.3.2; Auvin 2018'],
        [{ t: 'DIVA y ASRS (TDAH en la edad adulta)', node: 'diva_asrs' }, 'Entrevista y cribado para la persona adulta: se tratan en la figura «dd_tdah_adulto» y en la ficha.', 'Ficha del atlas']
      ] });
    y = t2.y + 28;
    y = F.text(X, y + 18, 'Etiopatogenia del neurodesarrollo: fichas relacionadas', { bold: true, fs: 20, w: FW }) + 4;
    const s8 = strip([
      { id: 'm1', type: 'mec', node: 'neurodev', title: 'Neurodesarrollo y plasticidad sináptica' },
      { id: 'm7', type: 'mec', node: 'hered_tdah', title: 'Heredabilidad del TDAH' },
      { id: 'm2', type: 'mec', node: 'conect_tea', title: 'Conectividad cerebral en el autismo' },
      { id: 'm3', type: 'mec', node: 'retraso_madur_tdah', title: 'Retraso madurativo cortical en el TDAH' },
      { id: 'm4', type: 'mec', node: 'dopa_na_tdah', title: 'Hipótesis dopaminérgica-noradrenérgica' },
      { id: 'm5', type: 'mec', node: 'confus_fam_prenat', title: 'Exposiciones prenatales y confusión familiar' },
      { id: 'm6', type: 'mec', node: 'estres_prenat', title: 'Estrés materno prenatal' }
    ], y, { fs: 16.5, gap: 14 });
    y = s8.y + 30;
    F.box('lim', { x: X, y, w: FW, type: 'lim', fs: 18, align: 'left', title: 'Límites de la figura',
      text: 'Esquema docente de apoyo al razonamiento: no es un protocolo ni un algoritmo validado y no sustituye al juicio clínico ni a la evaluación multidisciplinar. Los bloques no son excluyentes: lo habitual es que una misma persona reúna varios diagnósticos, y un «imitador» puede coexistir con el trastorno al que se parece. Las cifras proceden de metaanálisis, cohortes y muestras clínicas concretas, a menudo muy heterogéneas, y no se extrapolan sin más a otros contextos. Los códigos CIE-11 se han cotejado con la tabulación MMS; las definiciones del DSM-5-TR y de la CIE-11 se resumen y no se han cotejado palabra por palabra con el texto original. NICE CG128 y CG142 desaconsejan las pruebas biológicas o genéticas de rutina, mientras que los consensos de genética clínica proponen microarray y exoma en la discapacidad intelectual o el retraso global: la indicación es individual. PANS y PANDAS son entidades debatidas. No se dibujan tratamientos: NICE CG170 (rec. 1.3.2) indica no usar antipsicóticos, antidepresivos, anticonvulsivos ni dietas de exclusión para las características nucleares del autismo en menores de 19 años. Las entidades enlazadas son ejemplos, no una lista exhaustiva.' });
    F.footer('Fuentes: NICE CG128, CG142, CG170 y NG87; DSM-5-TR; CIE-11 (tabulación MMS, enero de 2025); Gillberg 2010; Lai 2019; Barger 2013; Miller 2010; Moeschler y Shevell 2014; Manickam 2021; Tassé 2016; Maulik 2011; Norbury 2014 y 2016; Bishop 2017; Driessen 2020; Sedky 2014; Caye 2020; Rommelse 2016; Lingam 2009; Blank 2019; Knight 2012; Barry 2011; Szejko 2022; Hirschtritt 2015; Swedo 1998; Chang 2015; Loomes 2017; Hinshaw 2022; Cook 2021; Brugha 2011; Randall 2018; Robins 2014. Referencias completas en la ficha de la figura. Esquema docente: no sustituye a la valoración clínica individual.');
    return F;
  }
};
