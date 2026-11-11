// Ejemplo de módulo de figura: muestra todos los elementos de la librería (tools/figlib.js).
// No se publica (los ficheros que empiezan por «_» son plantillas). Compilar: node tools/fig.js <clave> --png <carpeta>
module.exports = {
  key: '_ejemplo',
  meta: {
    title: 'Ejemplo de figura',
    kind: 'dd',                    // dd (diferencial) | circ (circuito) | mat (matriz) | mod (modelo)
    cap: 'Pie de la figura: qué muestra, cómo leerla y sus límites.',
    refs: ['Apellido A et al. (2020). Título. Revista 1:1-10 · PMID 00000000'],
    nodes: []                      // nodos relacionados que no aparecen como caja enlazada
  },
  draw(Fig) {
    const F = new Fig({ key: '_ejemplo', title: 'Ejemplo de figura', desc: 'Descripción accesible de la figura.', w: 1940 });
    let y = F.band(90, 'Bloque de decisión', { n: 1 }) + 30;
    const q1 = F.box('q1', { x: 60, y, w: 520, type: 'q', title: '¿Pregunta de decisión?', text: 'Criterio operativo con su fuente (Autor 2020).' });
    const d1 = F.box('d1', { x: 760, y, w: 520, type: 'dx', title: 'Entidad enlazada', text: 'Rasgo que la define.', node: 'ptsd' });
    const w1 = F.box('w1', { x: 1360, y, w: 520, type: 'warn', title: 'Señal de alarma', text: 'Qué obliga a actuar de inmediato.' });
    F.arrow(q1, d1, { label: 'Sí' });
    y = Math.max(q1.y + q1.h, d1.y + d1.h, w1.y + w1.h) + 70;
    const a1 = F.box('a1', { x: 60, y, w: 520, type: 'act', title: 'Conducta a seguir', text: 'Según guía (NICE 2022).' });
    const m1 = F.box('m1', { x: 760, y, w: 520, type: 'mec', title: 'Mecanismo', text: 'Diana o proceso.', node: 'ansiedad' });
    const i1 = F.box('i1', { x: 1360, y, w: 520, type: 'info', title: 'Nota', text: 'Dato de contexto [fuente no localizada].' });
    F.arrow(q1, a1, { label: 'No' });
    F.arrow(d1, m1, { dash: true });
    y = Math.max(a1.y + a1.h, m1.y + m1.h, i1.y + i1.h) + 60;
    y = F.band(y, 'Matriz', { n: 2 }) + 20;
    const t = F.table({ x: 60, y, cols: [{ w: 380, label: 'Fármaco' }, { w: 700, label: 'Qué se controla' }, { w: 740, label: 'Fuente' }],
      rows: [[{ t: 'Clozapina (monitorización)', node: 'clozapina_monit' }, 'Función renal y tiroidea', 'NICE CG185 (2014)'], [{ t: 'Clozapina', node: 'clozapina' }, { sym: '●●●', t: 'Hemograma' }, 'Ficha técnica AEMPS-CIMA']] });
    y = t.y + 50;
    F.box('lim', { x: 60, y, w: 1820, type: 'lim', align: 'left', title: 'Límites', text: 'Esquema conceptual de apoyo: no es un algoritmo ni sustituye al juicio clínico.' });
    F.footer('Fuentes: Autor 2020; NICE 2022. Esquema docente.');
    return F;
  }
};
