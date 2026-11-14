window.ATLAS_CFG = {
VIEWS:{
 nos:{t:'Nosología',sub:'Entidades, síndromes y constructos clínicos',center:'Nosología',
  rings:['Núcleo DSM-5-TR / CIE-11','Especificadores, subtipos y espectro clínico','Modelos clínicos y dimensionales','Constructos fenomenológicos y psicodinámicos','Nosologías clásicas (vigentes e históricas)'],
  sectors:[
   {id:'dep',t:'Depresiva',c:'#1d5c85'},{id:'bip',t:'Bipolar',c:'#b03329'},{id:'brg',t:'Puente cicloide-esquizoafectiva',st:'Puente cicloide',c:'#1a6b4a'},
   {id:'psy',t:'Psicótica',c:'#6b1b1e'},{id:'ndev',t:'Neurodesarrollo',st:'Neurodesarr.',c:'#7a5a12'},{id:'org',t:'Neurocognitiva y orgánica',st:'Orgánica',c:'#8a3a3a'},
   {id:'sub',t:'Sustancias y adicciones',st:'Sustancias',c:'#a04a10'},{id:'ins',t:'Instintos: alimentación, sueño, sexualidad, impulsos',st:'Instintos',c:'#5d6b1a'},
   {id:'tp',t:'Personalidad',c:'#5a3a6a'},{id:'trauma',t:'Trauma y disociación',st:'Trauma',c:'#2a6a7a'},{id:'som',t:'Somatomorfa y funcional',st:'Somatomorfa',c:'#3d5a70'},
   {id:'toc',t:'Obsesivo-compulsiva',st:'Obsesiva',c:'#8a6020'},{id:'anx',t:'Ansiedad',c:'#5a3a8a'},
   {id:'inf',t:'Infancia y adolescencia',st:'Infancia',c:'#2a7a5a'},{id:'ger',t:'Psicogeriatría',c:'#6a5a3a'}]},
 sem:{t:'Semiología',sub:'Psicopatología descriptiva por funciones psíquicas',center:'Semiología',
  rings:['Signo operativo (escalas, criterios)','Descripción clínica','Fenomenología (Jaspers, Schneider, Conrad)','Psicopatología clásica e histórica'],
  sectors:[
   {id:'con',t:'Conciencia',c:'#4a4a80'},{id:'ori',t:'Atención, orientación y memoria',st:'Atención y memoria',c:'#3f6a80'},{id:'per',t:'Percepción e imaginación',st:'Percepción',c:'#2a7060'},
   {id:'cur',t:'Pensamiento: curso y forma',st:'Curso del pensam.',c:'#5a6a20'},{id:'del',t:'Pensamiento: contenido',st:'Contenido',c:'#7a5418'},{id:'len',t:'Lenguaje y habla',c:'#8a3a20'},
   {id:'afe',t:'Afectividad',c:'#8a2a4a'},{id:'yo',t:'Conciencia del yo',st:'Yo',c:'#6a2a6a'},{id:'psm',t:'Psicomotricidad',c:'#40407a'},
   {id:'vol',t:'Voluntad, conducta e impulsos',st:'Voluntad',c:'#2a5a8a'},{id:'ins',t:'Funciones instintivas',st:'Instintos',c:'#2a6a4a'},{id:'cog',t:'Inteligencia, juicio e introspección',st:'Juicio e insight',c:'#5a5a5a'}]},
 eti:{t:'Etiopatogenia',sub:'Mecanismos, factores causales y modelos explicativos',center:'Etiopatogenia',
  rings:['Evidencia robusta y replicada','Evidencia consistente o moderada','Hipótesis activa','Histórico o superado'],
  sectors:[
   {id:'gen',t:'Genética',c:'#1d5c85'},{id:'ndv',t:'Neurodesarrollo y epigenética',st:'Neurodesarrollo',c:'#2a6a7a'},{id:'nq',t:'Neurotransmisión y plasticidad',st:'Neurotransmisión',c:'#1a6b4a'},
   {id:'nei',t:'Neuroendocrino-inmune',st:'Endocrino-inmune',c:'#5d6b1a'},{id:'cir',t:'Circuitos y redes cerebrales',st:'Circuitos',c:'#7a5a12'},{id:'cro',t:'Cronobiología',c:'#a04a10'},
   {id:'cmp',t:'Cognitivo-computacional',st:'Cognitivo',c:'#8a3a3a'},{id:'psi',t:'Psicológico y psicodinámico',st:'Psicológico',c:'#6b1b1e'},{id:'soc',t:'Social y ambiental',st:'Social',c:'#5a3a6a'},
   {id:'tox',t:'Sustancias y tóxicos',st:'Tóxicos',c:'#b03329'},{id:'med',t:'Causas médicas y neurológicas',st:'Causas médicas',c:'#3d5a70'},{id:'fen',t:'Fenomenología y análisis existencial',st:'Fenomenología',c:'#5a3a8a'},
   {id:'mod',t:'Modelos y marcos integradores',st:'Modelos',c:'#8a6020'}]},
 ter:{t:'Terapéutica',sub:'Tratamientos, mecanismos de acción e instrumentos',center:'Terapéutica',
  rings:['Primera línea / evidencia alta','Evidencia moderada / segunda línea','Evidencia limitada o experimental','Histórico'],
  sectors:[
   {id:'ad',t:'Antidepresivos',c:'#1d5c85'},{id:'est',t:'Eutimizantes',c:'#b03329'},{id:'ap',t:'Antipsicóticos',c:'#6b1b1e'},
   {id:'ans',t:'Ansiolíticos e hipnóticos',st:'Ansiolíticos',c:'#5a3a8a'},{id:'otr',t:'Otros psicofármacos',st:'Otros fármacos',c:'#a04a10'},{id:'neu',t:'Neuromodulación',c:'#7a5a12'},
   {id:'psd',t:'Psicodinámicas e interpersonales',st:'Psicodinámicas',c:'#5a3a6a'},{id:'tcc',t:'Cognitivo-conductuales',st:'TCC',c:'#2a6a7a'},{id:'3g',t:'Tercera generación e integradoras',st:'3ª generación',c:'#1a6b4a'},
   {id:'soc',t:'Psicosocial, rehabilitación y reducción de daños',st:'Psicosocial',c:'#5d6b1a'},{id:'ins',t:'Instrumentos de evaluación',st:'Instrumentos',c:'#5a5a5a'},{id:'leg',t:'Marco ético-legal y pericial',st:'Ético-legal',c:'#7a2a4a'}]}
},
KIND_VIEW:{ent:'nos',sin:'nos',con:'nos',sus:'nos',sx:'sem',mec:'eti',fac:'eti',mod:'eti',tx:'ter',ins:'ter',hit:'hist'},
KINDS:{ent:{t:'Trastorno / entidad',sh:'circle'},sin:{t:'Síndrome / especificador',sh:'square'},con:{t:'Constructo / modelo clínico',sh:'diamond'},
 sus:{t:'Sustancia',sh:'hex'},sx:{t:'Síntoma / signo',sh:'circle'},mec:{t:'Mecanismo',sh:'square'},fac:{t:'Factor causal o de riesgo',sh:'triangle'},
 mod:{t:'Modelo explicativo',sh:'diamond'},tx:{t:'Tratamiento',sh:'circle'},ins:{t:'Instrumento',sh:'square'},hit:{t:'Hito histórico',sh:'star'}},
TRADS:{dsm:'DSM-5-TR',cie:'CIE-11 / CIE-10',clinical:'Clínica actual',akiskal:'Akiskal (espectro bipolar)',koukopoulos:'Koukopoulos',zurich:'Angst (Zúrich)',
 wkl:'Wernicke-Kleist-Leonhard',kraepelin:'Kraepelin',german:'Psicopatología alemana',french:'Escuela francesa',classic:'Clásica',phenom:'Fenomenología',
 existential:'Análisis existencial',psychoan:'Psicoanálisis',behavioral:'Aprendizaje y conducta',dimensional:'Dimensional (HiTOP, RDoC, redes)',
 neurobio:'Neurobiología',cultural:'Psiquiatría cultural',icsd:'Medicina del sueño (ICSD-3)'},
TAGS:{risk:'Riesgo vital',emerg:'Urgencia',chr:'Alto riesgo / pródromo',organic:'Causa orgánica',trauma:'Trauma',dissoc:'Disociación',somatic:'Somático',
 lgtbi:'Diversidad sexual y de género',repro:'Ciclo reproductivo',sexdif:'Diferencias por sexo/género',chemsex:'Chemsex',forense:'Relevancia medicolegal',
 wkl:'WKL',akiskal:'Akiskal',kouk:'Koukopoulos',child:'Infancia y adolescencia',elderly:'Edad avanzada',cultural:'Cultural'},
EV:{crit:'Criterio diagnóstico oficial',guia:'Guía clínica o consenso',meta:'Metaanálisis o revisión sistemática',ecr:'Ensayo controlado aleatorizado',obs:'Estudios observacionales o de cohorte',fen:'Descripción fenomenológica o clínica clásica',hip:'Modelo teórico o hipótesis',hist:'Histórico-conceptual'},
CS:{h:'Alto consenso',m:'Consenso moderado',l:'Bajo consenso / histórico'},
CT:{fasico:'Fásico','recurrente-remitente':'Recurrente-remitente','recurrente-progresivo':'Recurrente-progresivo','progresivo-monomorfo':'Progresivo monomorfo'}
};
window.ATLAS_CFG.TOURS=[
 {t:'El espectro bipolar: de Areteo a la matriz integradora',d:'Historia, nosología oficial y modelos de espectro',s:[
  ['areteo','Primera descripción de manía y melancolía en un mismo paciente.'],['locu_circ','Falret y Baillarger (1854): la locura circular.'],['kahlbaum_hit','Kahlbaum: el curso longitudinal como criterio.'],
  ['locura_md','Kraepelin reúne las formas periódicas en la locura maníaco-depresiva.'],['mixtos_krp','Los estados mixtos de Kraepelin y Weygandt.'],['kraep_grund','Los estados fundamentales: precursores de los temperamentos.'],
  ['perris','Leonhard, Angst y Perris separan formas unipolares y bipolares.'],['tb1','Trastorno bipolar I en el DSM-5-TR y la CIE-11.'],['tb2','Trastorno bipolar II: la depresión domina el curso.'],
  ['cicl','Ciclotimia.'],['bp3b','Hipomanía breve recurrente (Angst, Zúrich).'],['tempcicl','Temperamentos afectivos (Akiskal).'],['bp3','Viraje por antidepresivos.'],
  ['dmko','Depresión mixta de Koukopoulos.'],['dsm2','El especificador DSM-5 de rasgos mixtos.'],['ind_bipdep','Indicadores de bipolaridad en un episodio depresivo.'],
  ['conv_bip','Conversión de depresión mayor a trastorno bipolar.'],['mapa_integr','El atlas clínico-geométrico del espectro afectivo (PDF incrustado).']]},
 {t:'Chemsex en urgencias y en consulta',d:'Sustancias, complicaciones, evaluación y reducción de daños',s:[
  ['chemsex_s','Definición, contexto y evaluación del chemsex.'],['ghb_gbl','GHB/GBL: margen estrecho, coma y abstinencia grave.'],['mefed','Mefedrona y catinonas.'],['catinonas_nuevas','Catinonas de nueva generación (3-MMC, α-PVP).'],
  ['metanf','Metanfetamina: psicosis y neurotoxicidad.'],['slam','Slamming: consumo inyectado.'],['poppers','Poppers, sildenafilo y otras sustancias del contexto sexual.'],['ketamina_rec','Ketamina recreativa.'],
  ['vih_ncd','Comorbilidad neuropsiquiátrica del VIH.'],['ideac_suic','Valoración del riesgo suicida.'],['chemsex_inv','Instrumentos de evaluación.'],['red_danos','Reducción de daños.'],['ghb_abst','Abstinencia de GHB/GBL.'],['chemsex_arv','Interacciones con antirretrovirales.'],['chemsex_ssex','Salud sexual: PrEP e ITS.'],['sumision_q','Consentimiento y sumisión química.'],['chemsex_atencion','Modelos de atención.'],['genero','Estrés de minorías y salud mental LGTBIQ.']]},
 {t:'Psicosis: del síntoma al diagnóstico',d:'Semiología, mecanismos, diferencial y tratamiento',s:[
  ['wahnstimm','Humor delirante: el pródromo jaspersiano.'],['delirio','Idea delirante: criterios y crítica.'],['aluc_aud','Alucinaciones auditivo-verbales.'],['fpr_schneider','Síntomas de primer rango de Schneider.'],
  ['saliencia','Saliencia aberrante.'],['dopa_hyp','Hipótesis dopaminérgica.'],['nmda_psic','Hipótesis NMDA.'],['pep','Primer episodio psicótico.'],['nmda','Diferencial orgánico: encefalitis anti-NMDA.'],
  ['psust','Psicosis inducida por sustancias.'],['psbreve','Trastorno psicótico agudo y transitorio.'],['esq','Esquizofrenia.'],['teasqb','Trastorno esquizoafectivo.'],['clozapina','Clozapina en la resistencia.']]},
 {t:'Psicosis cicloides y la escuela de Wernicke-Kleist-Leonhard',d:'Nosología clásica alemana y su vigencia',s:[
  ['psciclb','Kleist: psicosis marginales.'],['pcicloid','Psicosis cicloides: criterios operativos.'],['wkl14','Psicosis de angustia-felicidad.'],['wkl15','Psicosis confusional excitada-inhibida.'],['wkl16','Psicosis de la motilidad.'],
  ['perris','Perris y Brockington: criterios escandinavos.'],['bouf','La bouffée délirante francesa.'],['psbreve','Su heredera en la CIE-11.'],['einheit','La psicosis única (Einheitspsychose) como contrapunto.']]},
 {t:'Fenomenología y análisis existencial',d:'Jaspers, Husserl, Minkowski, Binswanger, Blankenburg, Fuchs',s:[
  ['jaspers_compr','Comprender y explicar.'],['husserl','Husserl y Heidegger.'],['minkowski','El tiempo vivido.'],['vongebsatt','Von Gebsattel: melancolía y anancasmo.'],['binswang','Daseinsanalyse.'],
  ['tellenbach','Typus melancholicus.'],['blankenburg','Pérdida de la evidencia natural.'],['ipsei','Ipseidad y mínimo self.'],['selfips','Trastornos del self en el espectro esquizofrénico.'],['kimura','Temporalidad en Kimura.'],['fuchs_cuerpo','Cuerpo vivido e intercorporalidad.']]},
 {t:'Psiquiatría forense en el marco legal español',d:'Imputabilidad, capacidad, internamiento, pericia y riesgo',s:[
  ['imputabilidad','Método mixto biológico-psicológico: arts. 20 y 21 del Código Penal.'],['capacidad_jur','Ley 8/2021: de la incapacitación a las medidas de apoyo.'],['internamiento','Internamiento involuntario (art. 763 LEC).'],
  ['consent_cap','Capacidad para consentir tratamientos.'],['perit_forense','Método pericial y daño psíquico.'],['simulacion','Simulación.'],['sims_tomm','Instrumentos de validez de síntomas.'],['riesgo_viol','Valoración del riesgo de violencia.'],['sumision_q','Sumisión química y consentimiento.']]},
 {t:'Diversidad sexual y de género: de la patologización a la salud afirmativa',d:'Historia, nosología y estrés de minorías',s:[
  ['homosex_hist','Despatologización de la homosexualidad (1973-1990).'],['genero','Estrés de minorías y despatologización.'],['incong_gen','De la «disforia» a la incongruencia de género en la CIE-11.'],['chemsex_s','Chemsex como fenómeno de salud sexual y mental.'],['ecosieg','Terapias de conversión: daño y prohibición.'],['wpath_soc8','Atención afirmativa a personas trans (SOC-8).'],['lgb_afirm','Psicoterapia afirmativa y estrés de minorías.'],['dsd','Diferencias del desarrollo sexual.'],['trauma','Trauma y victimización.']]}
];
