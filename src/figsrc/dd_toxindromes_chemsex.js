// Figura: síndromes tóxicos y de abstinencia en el contexto del chemsex (matriz de reconocimiento clínico).
// Complementa a dd_urgencias_chemsex (que parte de la presentación): aquí se parte del síndrome y de lo que lo separa de sus imitadores.
// Compilar en prueba: node tools/fig.js dd_toxindromes_chemsex --dry --png <carpeta>
const TITLE = 'Síndromes tóxicos y de abstinencia en el contexto del chemsex: reconocimiento clínico';
module.exports = {
  key: 'dd_toxindromes_chemsex',
  meta: {
    title: TITLE,
    kind: 'dd',
    cap: 'Matriz de reconocimiento para profesionales sanitarios, en cuatro bloques. 1) Nueve cuadros: signos cardinales, sustancias a las que orienta cada uno, qué lo separa de sus imitadores y la señal que obliga a derivación urgente; la última columna gradúa la base documental (●●● criterios derivados y contrastados en una cohorte; ●●○ revisiones y series clínicas; ●○○ series pequeñas, casos o ficha técnica). 2) Los cuadros con hipertermia que más se confunden, comparados rasgo a rasgo, y las reglas de decisión de Hunter para la toxicidad serotoninérgica (la hipertermia maligna, que la tabla original también compara, se omite por ser ajena a este contexto). 3) Abstinencia de GHB/GBL frente a abstinencia alcohólica y antirretrovirales potenciados como agravante. 4) Señales de alarma comunes, principio general de actuación y recursos. Complementa la figura de urgencias en chemsex, que parte de la presentación clínica. No incluye dosis ni pautas: el tratamiento se remite a cada ficha, a los protocolos locales y a toxicología. «[fuente no localizada]» señala lo que no se ha podido cotejar en una fuente primaria. Los porcentajes proceden de series de casos y no son riesgos poblacionales; en el policonsumo los cuadros se superponen.',
    refs: [
      'Dunkley EJC et al. (2003). The Hunter Serotonin Toxicity Criteria: simple and accurate diagnostic decision rules for serotonin toxicity. QJM 96:635-642 · PMID 12925718',
      'Isbister GK, Buckley NA & Whyte IM (2007). Serotonin toxicity: a practical approach to diagnosis and treatment. Med J Aust 187:361-365 · PMID 17874986',
      'Boyer EW & Shannon M (2005). The serotonin syndrome. N Engl J Med 352:1112-1120 · PMID 15784664 · tabla 2 (cuadros relacionados) y algoritmo diagnóstico cotejados en el texto completo',
      'Gurrera RJ et al. (2011). An international consensus study of neuroleptic malignant syndrome diagnostic criteria using the Delphi method. J Clin Psychiatry 72:1222-1228 · PMID 21733489',
      'Holstege CP & Borek HA (2012). Toxidromes. Crit Care Clin 28:479-498 · PMID 22998986 · solo se cita lo que figura en el resumen (utilidad y limitaciones de los síndromes tóxicos)',
      'Schep LJ, Slaughter RJ & Beasley DM (2010). The clinical toxicology of metamfetamine. Clin Toxicol (Phila) 48:675-694 · PMID 20849327',
      'Prosser JM & Nelson LS (2012). The toxicology of bath salts: a review of synthetic cathinones. J Med Toxicol 8:33-42 · PMID 22108839',
      'Wood DM, Greene SL & Dargan PI (2011). Clinical pattern of toxicity associated with the novel synthetic cathinone mephedrone. Emerg Med J 28:280-282 · PMID 20581379',
      'Schep LJ et al. (2012). The clinical toxicology of γ-hydroxybutyrate, γ-butyrolactone and 1,4-butanediol. Clin Toxicol (Phila) 50:458-470 · PMID 22746383',
      'Liechti ME et al. (2006). Clinical features of gamma-hydroxybutyrate and gamma-butyrolactone toxicity and concomitant drug and alcohol use. Drug Alcohol Depend 81:323-326 · PMID 16143455',
      'Galicia M, Nogué S & Miró O (2011). Liquid ecstasy intoxication: clinical features of 505 consecutive emergency department patients. Emerg Med J 28:462-466 · PMID 21602168',
      'McDonough M et al. (2004). Clinical features and management of gamma-hydroxybutyrate (GHB) withdrawal: a review. Drug Alcohol Depend 75:3-9 · PMID 15225884',
      'Dyer JE, Roth B & Hyma BA (2001). Gamma-hydroxybutyrate withdrawal syndrome. Ann Emerg Med 37:147-153 · PMID 11174231',
      'Wojtowicz JM, Yarema MC & Wax PM (2008). Withdrawal from gamma-hydroxybutyrate, 1,4-butanediol and gamma-butyrolactone: a case report and systematic review. CJEM 10:69-74 · PMID 18226321',
      'Mirijello A et al. (2015). Identification and management of alcohol withdrawal syndrome. Drugs 75:353-365 · PMID 25666543',
      'Glasner-Edwards S & Mooney LJ (2014). Methamphetamine psychosis: epidemiology and management. CNS Drugs 28:1115-1126 · PMID 25373627',
      'Dolengevich-Segal H et al. (2019). Drug-related and psychopathological symptoms in HIV-positive men who have sex with men who inject drugs during sex (slamsex): data from the U-SEX GESIDA 9416 Study. PLoS One 14:e0220272 · PMID 31800575',
      'Weiner AL et al. (2000). Ketamine abusers presenting to the emergency department: a case series. J Emerg Med 18:447-451 · PMID 10802423',
      'Kalsi SS, Wood DM & Dargan PI (2011). The epidemiology and patterns of acute and chronic toxicity associated with recreational ketamine use. Emerg Health Threats J 4:7107 · PMID 24149025',
      'Hunter L et al. (2011). Methaemoglobinaemia associated with the use of cocaine and volatile nitrites as recreational drugs: a review. Br J Clin Pharmacol 72:18-26 · PMID 21352269',
      'Wright RO, Lewander WJ & Woolf AD (1999). Methemoglobinemia: etiology, pharmacology, and clinical management. Ann Emerg Med 34:646-656 · PMID 10533013',
      'Romanelli F & Smith KM (2004). Recreational use of sildenafil by HIV-positive and -negative homosexual/bisexual males. Ann Pharmacother 38:1024-1030 · PMID 15113986',
      'Matsumoto RR et al. (2014). Methamphetamine-induced toxicity: an updated review on issues related to hyperthermia. Pharmacol Ther 144:28-40 · PMID 24836729',
      'Richards JR et al. (1999). Methamphetamine abuse and rhabdomyolysis in the ED: a 5-year study. Am J Emerg Med 17:681-685 · PMID 10597089',
      'Bracchi M et al. (2015). Increasing use of «party drugs» in people living with HIV on antiretrovirals: a concern for patient safety. AIDS 29:1585-1592 · PMID 26372268',
      'Harrington RD et al. (1999). Life-threatening interactions between HIV-1 protease inhibitors and the illicit drugs MDMA and gamma-hydroxybutyrate. Arch Intern Med 159:2221-2224 · PMID 10527300',
      'Antoniou T & Tseng AL (2002). Interactions between recreational drugs and antiretroviral agents. Ann Pharmacother 36:1598-1613 · PMID 12243611',
      'Abdulrahim D & Bowden-Jones O, en nombre del NEPTUNE Expert Group (2015). Guidance on the Clinical Management of Acute and Chronic Harms of Club Drugs and Novel Psychoactive Substances. London: Novel Psychoactive Treatment UK Network (NEPTUNE) · Guía clínica basada en revisión de la literatura y consenso de expertos',
      'American Psychiatric Association (2022). DSM-5-TR. Trastorno psicótico inducido por sustancias/medicamentos; delirium. Washington, DC: APA Publishing',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Viagra (nº de registro 98077010), sección 4.3 (contraindicados los dadores de óxido nítrico, como el nitrito de amilo, y los nitratos). Agencia Española de Medicamentos y Productos Sanitarios',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Norvir 100 mg comprimidos recubiertos con película (nº de registro 96016005), secciones 4.3-4.5. Agencia Española de Medicamentos y Productos Sanitarios',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Tybost 150 mg comprimidos recubiertos con película (nº de registro 113872001), secciones 4.3-4.5. Agencia Española de Medicamentos y Productos Sanitarios',
      'AEMPS-CIMA (2026; consulta de noviembre). Ficha técnica de Proveblue (nº de registro 111682001), secciones 4.3 y 4.4 (déficit de G6PD; síndrome serotoninérgico con ISRS, IRSN e IMAO; cooximetría). Agencia Española de Medicamentos y Productos Sanitarios',
      'Instituto Nacional de Toxicología y Ciencias Forenses, Ministerio de Justicia (2026; consulta de noviembre). Servicio de Información Toxicológica: teléfonos y horario. Página institucional en mjusticia.gob.es',
      'Secretaría del Plan Nacional sobre el Sida (2020). Abordaje del fenómeno del chemsex. Madrid: Ministerio de Sanidad (serie Informes, Estudios e Investigación 2020) · contenido clínico concreto [no verificada]',
      'University of Liverpool (2026; fecha de consulta). HIV Drug Interactions (base de datos de interacciones en línea)'
    ],
    nodes: ['chemsex_s', 'mefed', 'cat_malig', 'slam', 'bzd_dep', 'cocaina', 'alucinogenos', 'sumision_q', 'chemsex_ssex']
  },
  draw(Fig) {
    const W = 2300, X = 60, FW = W - 2 * X;
    const F = new Fig({ key: 'dd_toxindromes_chemsex', title: TITLE, w: W,
      desc: 'Matriz de nueve síndromes tóxicos y de abstinencia del contexto del chemsex con sus signos cardinales, sustancias, imitadores y señales de alarma; comparación de los cuadros con hipertermia, reglas de Hunter, abstinencia de GHB frente a alcohólica, antirretrovirales potenciados, alarmas comunes, recursos y límites.' });

    let y = 92;
    y = F.text(X, y, 'Herramienta de reconocimiento para profesionales sanitarios. Se lee por filas: del cuadro clínico a la sustancia probable, al imitador y a la alarma. No contiene dosis ni pautas de consumo o de tratamiento. ↗ abre la ficha del atlas.', { fs: 20, w: FW }) + 8;

    // ───────── 1. Matriz
    y = F.band(y, 'Nueve cuadros: signos cardinales, sustancia probable, imitadores y alarma', { n: 1 }) + 16;
    const t1 = F.table({ x: X, y, fs: 17.5,
      cols: [{ w: 262, label: 'Cuadro' }, { w: 520, label: 'Signos cardinales' }, { w: 312, label: 'Orienta a' }, { w: 546, label: 'Qué lo distingue de sus imitadores' }, { w: 440, label: 'Alarma: derivación urgente' }, { w: 100, label: 'Base' }],
      rows: [
        [{ t: 'Síndrome simpaticomimético', node: 'metanf' },
          'Conducta violenta y agresiva, taquicardia, hipertensión, taquipnea e hipertermia (Schep 2010); midriasis y diaforesis [fuente no localizada]. Mefedrona, 15 casos: agitación 53,3 %, taquicardia 40 %, hipertensión sistólica 20 %, crisis convulsivas 20 % (Wood 2011).',
          'Metanfetamina (Schep 2010); catinonas como la mefedrona, clínicamente parecidas a las anfetaminas y a la MDMA (Prosser 2012); también cocaína [fuente no localizada]. La clínica no identifica la sustancia.',
          'Del serotoninérgico: el clonus, más específico de la toxicidad serotoninérgica (Isbister 2007), no pertenece a este cuadro; pueden coexistir, porque las catinonas modulan también la serotonina (Prosser 2012). Del anticolinérgico: allí la piel está roja, seca y caliente y los ruidos intestinales faltan (Boyer 2005).',
          'Hipertermia, dolor torácico, arritmia, cefalea (hemorragia cerebral descrita), crisis convulsivas (Schep 2010); focalidad neurológica [fuente no localizada].',
          { sym: '●●○', t: '' }],
        [{ t: 'Sedante-hipnótico por GHB/GBL: coma breve, de recuperación rápida', node: 'ghb_gbl' },
          'Depresión de conciencia y respiratoria de corta duración; bradicardia, hipotermia, mioclonías y molestias digestivas (Schep 2012). En 65 casos: coma 83 %, bradicardia 38 %, hipotermia 48 %, vómitos 31 % (Liechti 2006). Recuperación en torno a 1-2 h: medias de 59-71 min (Galicia 2011) y 111 min (Liechti 2006).',
          'GHB, GBL o 1,4-butanodiol. Coingesta en el 76 % de 505 casos de Barcelona, sobre todo etanol (64 %) (Galicia 2011).',
          'De opioides y benzodiacepinas: coma breve con recuperación rápida; antídoto administrado en 35 casos sin respuesta (Galicia 2011); en el síndrome opioide, miosis y bradipnea [fuente no localizada]. La coingesta prolonga el coma y lo agrava (Galicia 2011; Liechti 2006). Las mioclonías pueden tomarse por crisis [fuente no localizada].',
          'Coma arreactivo (Liechti 2006), depresión respiratoria grave o vía aérea sin proteger (Schep 2012); vómitos con conciencia baja. Ventilación mecánica en el 3 % de las coingestas (Galicia 2011) y en el 6 % de 65 casos (Liechti 2006).',
          { sym: '●●○', t: '' }],
        [{ t: 'Abstinencia de GHB/GBL', node: 'ghb_abst' },
          'En 57 episodios publicados: temblor 67 %, alucinaciones 63 %, taquicardia 63 %, insomnio 58 % (Wojtowicz 2008). También hipertensión, sudoración, ansiedad, agitación, desorientación y confusión (Schep 2012).',
          'Dependencia de GHB, GBL o 1,4-butanodiol; el delirium se asoció a dependencia grave, con tomas más frecuentes (McDonough 2004), repetidas día y noche (Dyer 2001).',
          'De la abstinencia alcohólica: síntomas parecidos (McDonough 2004), de inicio rápido, 1-6 h tras la última toma en 8 casos (Dyer 2001), y que pueden prolongarse hasta 21 días (Schep 2012); véase el bloque 3. De la intoxicación simpaticomimética: antecedente de tomas muy frecuentes e interrupción reciente (Dyer 2001).',
          'Deterioro rápido a delirium (53 % de 38 casos; McDonough 2004); crisis convulsivas y rabdomiólisis en el 7 % cada una (Wojtowicz 2008). Potencialmente mortal: hospital.',
          { sym: '●●○', t: '' }],
        [{ t: 'Síndrome (toxicidad) serotoninérgico', node: 'sind_ser' },
          'Excitación neuromuscular (clonus, hiperreflexia, mioclonías, rigidez), estimulación autonómica (hipertermia, taquicardia, diaforesis, temblor, rubefacción) y cambio del estado mental (Isbister 2007). Bastan clonus, agitación, diaforesis, temblor e hiperreflexia para predecirlo (Dunkley 2003).',
          'MDMA, catinonas o anfetaminas combinadas con serotoninérgicos (ISRS, IRSN, IMAO). Las formas graves aparecen con combinaciones, sobre todo IMAO más inhibidor de la recaptación (Isbister 2007).',
          'Del síndrome neuroléptico maligno: inicio en horas, clonus e hiperreflexia, midriasis y ruidos intestinales aumentados, frente a inicio en días, rigidez «en tubo de plomo» y bradirreflexia (Boyer 2005). Del simpaticomimético: el clonus. Véase el bloque 2.',
          'Hipertonía y temperatura superior a 38 °C, constantes en las formas con riesgo vital (Dunkley 2003): hipertermia grave de inicio rápido, rigidez y fallo multiorgánico (Isbister 2007).',
          { sym: '●●●', t: '' }],
        [{ t: 'Psicosis inducida por estimulantes', node: 'psust' },
          'Ideas delirantes paranoides e ideas de referencia, alucinaciones auditivas y táctiles, agitación y violencia; síntomas psicóticos hasta en torno al 40 % de quienes consumen metanfetamina (Glasner-Edwards 2014).',
          'Metanfetamina y catinonas. En el slamsex, más ideas paranoides y conducta suicida durante o después de la sesión (Dolengevich-Segal 2019).',
          'Del delirium: el diagnóstico exige que el cuadro no ocurra solo durante un delirium (DSM-5-TR); atención fluctuante o constantes alteradas obligan a buscar un cuadro tóxico o una abstinencia. De la psicosis primaria: relación temporal con el consumo, información de terceros y tóxicos en orina (Glasner-Edwards 2014); si persiste en torno a 1 mes tras la abstinencia, valorar un trastorno primario (DSM-5-TR).',
          'Atención fluctuante, hipertermia o constantes alteradas: descartar delirium antes de atribuirlo a una psicosis (DSM-5-TR). Conducta suicida (Dolengevich-Segal 2019) o violencia (Glasner-Edwards 2014).',
          { sym: '●●○', t: '' }],
        [{ t: 'Cuadro disociativo', node: 'ketamina_rec' },
          'Agitación, alucinaciones, ansiedad y psicosis; hipertensión y taquicardia menos frecuentes (Kalsi 2011). En 20 casos: ansiedad, dolor torácico y palpitaciones; taquicardia como hallazgo más común; nistagmo solo en 3 (Weiner 2000).',
          'Ketamina; otros disociativos (fenciclidina, metoxetamina) [fuente no localizada].',
          'De la fenciclidina: efecto parecido, de duración mucho menor (Weiner 2000). De la psicosis inducida por estimulantes: cuadro breve, 18 de 20 personas dadas de alta en 5 h (Weiner 2000). Del coma por GHB: coingesta frecuente; ketamina en el 11 % de las intoxicaciones por GHB (Galicia 2011).',
          'Agitación grave y rabdomiólisis, las complicaciones más frecuentes (Weiner 2000); traumatismos, principal causa de las muertes, que son infrecuentes (Kalsi 2011); coingesta de depresores [fuente no localizada].',
          { sym: '●○○', t: '' }],
        [{ t: 'Metahemoglobinemia por nitritos (poppers)', node: 'poppers' },
          'Cianosis o saturación baja en la pulsioximetría sin otra explicación (Hunter 2011); síntomas desde cefalea leve hasta coma y muerte, que pueden no corresponderse con la cifra de metahemoglobina (Wright 1999).',
          'Nitritos de alquilo, oxidantes directos; con cocaína, por adulterantes como anestésicos locales o fenacetina (Hunter 2011).',
          'De la hipoxemia respiratoria: la gasometría y la pulsioximetría pueden inducir a error (Wright 1999); se confirma por cooximetría (ficha de Proveblue). Otras dishemoglobinas pueden confundirse con ella (Wright 1999).',
          'Cianosis con disnea o alteración de conciencia. El antídoto (azul de metileno) se complica con el déficit de G6PD (Wright 1999) y con ISRS, IRSN o IMAO (ficha de Proveblue).',
          { sym: '●●○', t: '' }],
        [{ t: 'Hipotensión por nitritos con inhibidores de la PDE5', node: 'poppers' },
          'Hipotensión potencialmente grave; mareo o síncope [fuente no localizada]. El sildenafilo potencia el efecto hipotensor de los dadores de óxido nítrico, como el nitrito de amilo: asociación contraindicada (ficha de Viagra, 4.3).',
          'Poppers con sildenafilo, tadalafilo o vardenafilo; uso conjunto con drogas recreativas descrito (Romanelli 2004).',
          'Del coma por GHB: aquí domina la hipotensión, sin el coma con bradicardia e hipotermia del GHB [fuente no localizada]. Los inhibidores de la proteasa reducen el metabolismo del sildenafilo (Romanelli 2004); véase el bloque 3.',
          'Dolor torácico, síncope o hipotensión mantenida [fuente no localizada]. Comunicar siempre la toma del inhibidor de la PDE5: la ficha de Viagra (4.3) contraindica los nitratos.',
          { sym: '●○○', t: '' }],
        [{ t: 'Hipertermia y rabdomiólisis (complicación común a varios cuadros)' },
          'Temperatura elevada, descrita como síntoma de presentación constante en las urgencias por metanfetamina; las sobredosis mortales se asocian a hipertermia extrema (Matsumoto 2014). Creatina-cinasa elevada: de 367 rabdomiólisis en urgencias, 43 % con metanfetamina (Richards 1999).',
          'Estimulantes; toxicidad serotoninérgica grave (Isbister 2007); abstinencia de GHB/GBL (Wojtowicz 2008); ketamina (Weiner 2000).',
          'Es una complicación, no un diagnóstico: obliga a buscar el cuadro de base (bloque 2). En el síndrome neuroléptico maligno, la creatina-cinasa alcanza al menos 4 veces el límite superior (Gurrera 2011). Medir la creatina-cinasa en urgencias ante toxicidad por metanfetamina (Richards 1999).',
          'Temperatura en ascenso con rigidez o alteración de conciencia; orina oscura o mialgias intensas [fuente no localizada]. Por encima de 39 °C, enfriamiento enérgico inmediato (NEPTUNE 2015).',
          { sym: '●●○', t: '' }]
      ] });
    y = t1.y + 14;
    y = F.text(X, y + 14, 'Base documental (columna «Base»): ●●● criterios diagnósticos derivados y contrastados en una cohorte de 2222 sobredosis · ●●○ revisiones y series clínicas · ●○○ series pequeñas, casos aislados o ficha técnica. Los porcentajes son de series de casos, no riesgos poblacionales.', { fs: 18, w: FW }) + 22;

    // ───────── 2. Hipertermia: comparación y reglas de Hunter
    y = F.band(y, 'Agitación con hipertermia: cuatro cuadros que se confunden y reglas de Hunter', { n: 2 }) + 16;
    const y2 = y;
    const t2 = F.table({ x: X, y, fs: 17.5,
      cols: [{ w: 176, label: 'Rasgo' }, { w: 290, label: 'Toxicidad serotoninérgica' }, { w: 290, label: 'Síndrome neuroléptico maligno' }, { w: 280, label: 'Síndrome anticolinérgico' }, { w: 304, label: 'Síndrome simpaticomimético' }],
      rows: [
        ['Desencadenante', 'Agente serotoninérgico, sobre todo en combinación (Isbister 2007)', 'Antagonista dopaminérgico reciente o retirada de un agonista (Gurrera 2011)', 'Fármaco o sustancia anticolinérgica', 'Metanfetamina, catinonas (Schep 2010; Prosser 2012); cocaína [fuente no localizada]'],
        ['Instauración', 'Menos de 12 h', '1 a 3 días', 'Menos de 12 h', 'Durante la intoxicación [fuente no localizada]'],
        ['Pupilas', 'Midriasis', 'Normales', 'Midriasis', 'Midriasis [fuente no localizada]'],
        ['Piel y mucosas', 'Diaforesis; sialorrea', 'Palidez y diaforesis; sialorrea', 'Piel roja, seca y caliente; mucosas secas', 'Diaforesis [fuente no localizada]'],
        ['Ruidos intestinales', 'Aumentados', 'Normales o disminuidos', 'Disminuidos o ausentes', 'Conservados [fuente no localizada]'],
        ['Tono muscular', 'Aumentado, sobre todo en las piernas', 'Rigidez «en tubo de plomo», generalizada', 'Normal', 'Sin rigidez característica [fuente no localizada]'],
        ['Reflejos', 'Hiperreflexia y clonus (la hipertonía puede enmascararlos)', 'Bradirreflexia', 'Normales', 'El clonus orienta a toxicidad serotoninérgica (Isbister 2007)'],
        ['Estado mental', 'Agitación; coma', 'Estupor, mutismo alerta; coma', 'Delirium agitado', 'Conducta violenta y agresiva (Schep 2010)'],
        ['Ficha del atlas', { t: 'Síndrome serotoninérgico', node: 'sind_ser' }, { t: 'Síndrome neuroléptico maligno', node: 'snm' }, { t: 'Delirium', node: 'delirium' }, { t: 'Catinonas de nueva generación', node: 'catinonas_nuevas' }]
      ] });
    const yT2 = F.text(X, t2.y + 30, 'Las tres primeras columnas reproducen la tabla 2 de Boyer 2005 (que añade la hipertermia maligna por anestésicos, aquí omitida), salvo la fila del desencadenante; la cuarta, las revisiones citadas en cada celda: sus rasgos clásicos sin fuente cotejada van marcados. Los síndromes tóxicos tienen excepciones y limitaciones (Holstege 2012) y en el policonsumo pueden coexistir. La catatonía maligna comparte hipertermia, rigidez y disautonomía con el síndrome neuroléptico maligno (véase su ficha).', { fs: 18, w: t2.w });

    // Reglas de Hunter (columna derecha)
    const HX = X + t2.w + 50, HW = W - X - HX;
    const hq = F.box('hq', { x: HX, y: y2, w: HW, type: 'q', title: '¿Exposición a un agente serotoninérgico?', text: 'Si la hay, basta UNA de las cinco reglas (Dunkley 2003; algoritmo reproducido en Boyer 2005)' });
    let hy = hq.y + hq.h + 104;
    const gy = hy - 40;
    const rules = [
      ['h1', 'Clonus espontáneo', ''],
      ['h2', 'Clonus inducible', 'más agitación o diaforesis'],
      ['h3', 'Clonus ocular', 'más agitación o diaforesis'],
      ['h4', 'Temblor', 'más hiperreflexia'],
      ['h5', 'Hipertonía', 'más temperatura superior a 38 °C y clonus ocular o inducible']
    ];
    let first = null, last = null;
    rules.forEach(r => { const b = F.box(r[0], { x: HX + 30, y: hy, w: HW - 60, type: 'info', fs: 19, title: r[1], text: r[2] || undefined }); if (!first) first = b; last = b; hy = b.y + b.h + 14; });
    const gh = hy - 14 + 22 - gy;
    F.group({ x: HX, y: gy, w: HW, h: gh, label: 'Reglas de decisión (cualquiera de ellas)' });
    const grp = { x: HX, y: gy, w: HW, h: gh };
    const hd = F.box('hd', { x: HX, y: gy + gh + 56, w: HW, type: 'dx', node: 'sind_ser', title: 'Toxicidad serotoninérgica', text: 'Sensibilidad 84 % y especificidad 97 % frente al diagnóstico de un toxicólogo clínico, en 2222 sobredosis de serotoninérgicos (Dunkley 2003)' });
    F.arrow(hq, grp, { from: 'b', to: 't', label: 'Sí' });
    F.arrow(grp, hd, { from: 'b', to: 't', label: 'Se cumple una' });
    const hn = F.box('hn', { x: X, y: yT2 + 6, w: t2.w, type: 'info', fs: 18, align: 'left', title: 'Cómo leerlas', text: 'Derivadas en 473 sobredosis de ISRS solos y probadas en las 2222 sobredosis de serotoninérgicos; la hipertonía y la temperatura superior a 38 °C se añadieron por ser constantes en los casos con riesgo vital (Dunkley 2003). El clonus es más específico de la toxicidad serotoninérgica (Isbister 2007); la hiperreflexia y el clonus predominan en las extremidades inferiores y puede haber clonus ocular horizontal (Boyer 2005). Frente a los criterios de Sternbach: sensibilidad del 84 % frente al 75 % y especificidad del 97 % frente al 96 % (Dunkley 2003).' });

    y = Math.max(hn.y + hn.h, hd.y + hd.h) + 34;

    // ───────── 3. Abstinencia GHB frente a alcohol + antirretrovirales
    y = F.band(y, 'Abstinencia de GHB/GBL frente a abstinencia alcohólica · antirretrovirales potenciados como agravante', { n: 3 }) + 16;
    const y3 = y;
    const t3 = F.table({ x: X, y, fs: 17.5,
      cols: [{ w: 190, label: 'Rasgo' }, { w: 440, label: 'Abstinencia de GHB/GBL' }, { w: 420, label: 'Abstinencia alcohólica' }],
      rows: [
        ['Inicio', 'Rápido: 1-6 h tras la última toma en 8 casos (Dyer 2001); puede empezar a los 30 min, lo habitual es en pocas horas (NEPTUNE 2015); la semivida del GHB es de 20-60 min (Schep 2012)', 'Síntomas en las 6-24 h tras interrumpir o reducir el consumo; los menores (temblor, diaforesis, taquicardia), a las 6-12 h (Mirijello 2015)'],
        ['Síntomas', 'Temblor, alucinaciones, taquicardia, insomnio (Wojtowicz 2008); inestabilidad autonómica y alteración del estado mental', 'Muy parecidos (McDonough 2004); alucinosis visual, auditiva y táctil a las 12-24 h (Mirijello 2015)'],
        ['Delirium', 'Deterioro rápido en el 53 % de 38 casos publicados, ligado a dependencia grave (McDonough 2004)', 'Complicación tardía: suele aparecer a las 48-72 h y puede hacerlo hasta 10 días después (Mirijello 2015)'],
        ['Crisis convulsivas', '7 % de 57 episodios (Wojtowicz 2008); ninguna en 38 casos (McDonough 2004)', 'Generalmente a las 24-48 h (Mirijello 2015)'],
        ['Duración', '5-15 días en 8 casos (Dyer 2001); de 3 a 21 días (NEPTUNE 2015; Schep 2012)', 'El delirium tremens suele durar 5-7 días (Mirijello 2015)'],
        ['Principio de manejo', 'Benzodiacepinas como primera opción, en ingreso si es grave; hay casos refractarios que requieren otros sedantes (McDonough 2004; Schep 2012)', 'Benzodiacepinas como tratamiento de referencia (Mirijello 2015); véase la ficha'],
        ['Ficha del atlas', { t: 'Síndrome de abstinencia de GHB/GBL', node: 'ghb_abst' }, { t: 'Abstinencia alcohólica y delirium tremens', node: 'dt_alc' }]
      ] });
    const yT3 = F.text(X, t3.y + 30, 'Ambas pueden coexistir: el etanol fue la coingesta más frecuente con GHB (64 %; Galicia 2011). Preguntar siempre, sin juicio, por la frecuencia de las tomas de GHB/GBL y por la hora de la última.', { fs: 18, w: t3.w });

    const AX = X + t3.w + 50;
    const t4 = F.table({ x: AX, y: y3, fs: 17.5,
      cols: [{ w: 250, label: 'Cuadro que se agrava' }, { w: 290, label: 'Sustancia implicada' }, { w: W - X - AX - 540, label: 'Con ritonavir o cobicistat' }],
      rows: [
        ['Simpaticomimético y serotoninérgico', 'MDMA, anfetamina y derivados', { sym: '●○○', t: 'Efecto prolongado de una dosis pequeña de MDMA con ritonavir y saquinavir (caso; Harrington 1999); la ficha de Norvir prevé mayor exposición a la anfetamina y sus derivados' }],
        ['Sedante-hipnótico', 'GHB/GBL', { sym: '●○○', t: 'Reacción casi mortal con una dosis pequeña en el mismo caso (Harrington 1999); mecanismo no confirmado' }],
        ['Hipotensión', 'Sildenafilo, tadalafilo, vardenafilo', { sym: '●●○', t: 'Menor metabolismo del sildenafilo con inhibidores de la proteasa (Romanelli 2004); la ficha de Norvir contraindica el vardenafilo y advierte de hipotensión con los demás; restricciones también en la de Tybost' }],
        ['Disociativo', 'Ketamina', { sym: '●○○', t: 'El ritonavir podría inhibir su metabolismo (Antoniou 2002)' }],
        ['Sedación en el tratamiento de la abstinencia', 'Midazolam oral, triazolam', { sym: '●●○', t: 'Contraindicados por riesgo de sedación excesiva y depresión respiratoria (fichas de Norvir y Tybost; Antoniou 2002): elegir la benzodiacepina con el equipo de VIH o con farmacia' }]
      ] });
    const ar = F.box('arv', { x: AX, y: t4.y + 22, w: W - X - AX, type: 'warn', node: 'chemsex_arv', fs: 19, title: 'Antirretrovirales potenciados: agravante, no causa única',
      text: 'El mayor riesgo de interacción se da con los potenciadores (ritonavir, cobicistat) y quizá con algunos no nucleósidos; faltan datos formales y el riesgo no debe sobreestimarse (Bracchi 2015). Anotar siempre la pauta antirretroviral y comprobar cada combinación en la ficha técnica y en la base de la Universidad de Liverpool. No suspender el tratamiento antirretroviral por cuenta propia.' });
    y = Math.max(yT3, ar.y + ar.h) + 34;

    // ───────── 4. Alarmas comunes, principio de actuación y recursos
    y = F.band(y, 'Alarmas comunes, principio general de actuación y recursos', { n: 4 }) + 24;
    const cw = (FW - 2 * 40) / 3;
    const al = F.box('al', { x: X, y, w: cw, type: 'warn', fs: 19, title: 'Cualquiera de estas señales: urgencias hospitalarias',
      text: 'Conciencia baja, bradipnea o vía aérea sin proteger\nHipertermia, más aún con hipertonía o rigidez (Dunkley 2003; NEPTUNE 2015)\nCrisis convulsivas\nConfusión tras dejar el GHB/GBL (McDonough 2004)\nCianosis o saturación baja sin explicación (Hunter 2011)\nDolor torácico, síncope o hipotensión\nAgitación extrema; ideas de suicidio\nFuera del hospital: 112.' });
    const ac = F.box('ac', { x: X + cw + 40, y, w: cw, type: 'act', align: 'left', fs: 19, title: 'Principio general (sin fármacos ni dosis)',
      text: 'Soporte vital y monitorización; identificar y retirar el agente. Toxicidad serotoninérgica: cese del serotoninérgico y soporte (Isbister 2007). GHB/GBL: soporte respiratorio y cardiovascular (Schep 2012). Hipertermia superior a 39 °C: enfriamiento enérgico (NEPTUNE 2015). Abstinencia de GHB/GBL grave: ingreso (McDonough 2004). El tratamiento concreto está en cada ficha, en el protocolo local y en la consulta con toxicología. Al alta: salud sexual, adicciones y reducción de daños, sin juicio.', node: 'red_danos' });
    const rc = F.box('rc', { x: X + 2 * (cw + 40), y, w: cw, type: 'info', align: 'left', fs: 19, title: 'Recursos',
      text: '• Servicio de Información Toxicológica (Instituto Nacional de Toxicología y Ciencias Forenses): 91 562 04 20, 24 h, todos los días; teléfono solo para médicos: 91 411 26 76 (página oficial del Ministerio de Justicia, consulta de noviembre de 2026)\n• Emergencias: 112\n• Interacciones con antirretrovirales: base HIV Drug Interactions de la Universidad de Liverpool\n• Marco institucional: «Abordaje del fenómeno del chemsex» (Ministerio de Sanidad, 2020)\n• Atención específica: véase la ficha de modelos de atención al chemsex', node: 'chemsex_atencion' });
    y = Math.max(al.y + al.h, ac.y + ac.h, rc.y + rc.h) + 34;

    F.box('lim', { x: X, y, w: FW, type: 'lim', align: 'left', fs: 19, title: 'Límites de esta figura',
      text: 'Esquema de reconocimiento, no algoritmo diagnóstico ni terapéutico: no sustituye la exploración, los protocolos de urgencias locales ni la consulta con toxicología. No contiene dosis, pautas ni combinaciones «seguras». Los síndromes tóxicos orientan, pero tienen excepciones y limitaciones (Holstege 2012); en el policonsumo se superponen, el producto real puede diferir del declarado [fuente no localizada] y las pruebas rápidas no detectan muchas de estas sustancias [fuente no localizada]. Los porcentajes proceden de series de casos y de revisiones de casos publicados (sesgo de publicación), no de estudios poblacionales. Las reglas de Hunter se derivaron en sobredosis de fármacos serotoninérgicos, no en personas que consumen drogas en contexto sexual. La comparación del bloque 2 procede de una revisión narrativa (Boyer 2005) y varias celdas del cuadro simpaticomimético carecen de fuente cotejada. Los plazos de las abstinencias varían entre fuentes. Casi todas las series proceden de urgencias generales, no de personas atendidas por chemsex; los datos específicos de este contexto (Dolengevich-Segal 2019; Bracchi 2015) se refieren a hombres gais, bisexuales y otros hombres que tienen sexo con hombres, y ninguna fuente citada aporta datos propios de mujeres, personas trans o personas no binarias.' });

    F.footer('Fuentes: Dunkley 2003; Isbister 2007; Boyer 2005; Gurrera 2011; Holstege 2012; Schep 2010 y 2012; Prosser 2012; Wood 2011; Liechti 2006; Galicia 2011; McDonough 2004; Dyer 2001; Wojtowicz 2008; Mirijello 2015; Glasner-Edwards 2014; Dolengevich-Segal 2019; Weiner 2000; Kalsi 2011; Hunter 2011; Wright 1999; Romanelli 2004; Matsumoto 2014; Richards 1999; Bracchi 2015; Harrington 1999; Antoniou 2002; NEPTUNE 2015; DSM-5-TR; fichas técnicas AEMPS-CIMA (Viagra, Norvir, Tybost, Proveblue); Servicio de Información Toxicológica. Esquema docente de reconocimiento y reducción de daños: no es una guía de consumo ni de tratamiento.');
    return F;
  }
};
