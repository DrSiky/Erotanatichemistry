#!/usr/bin/env node
// Aplica un parche de contenido a src/data/nodes.jsonl.
//   node tools/apply.js parche.json --check   valida sin escribir
//   node tools/apply.js parche.json           valida y escribe
// Formato del parche (JSON):
// { "patch": { "<id>": { "secAdd":[{t,x,links?}], "secReplace":[{t,x,links?}], "featsAdd":[..], "featsReplace":[[viejo,nuevo]],
//                        "refsAdd":[..], "relAdd":[ids], "set":{campo:valor} } },
//   "add": [ nodo completo, ... ] }
const fs = require('fs'), path = require('path'), vm = require('vm');
const R = path.join(__dirname, '..');
const NF = path.join(R, 'src/data/nodes.jsonl');
const file = process.argv[2], check = process.argv.includes('--check');
if (!file) { console.error('uso: node tools/apply.js parche.json [--check]'); process.exit(1); }

const w = {}; vm.runInNewContext(fs.readFileSync(path.join(R, 'src/config.js'), 'utf8'), { window: w });
const CFG = w.ATLAS_CFG;
const nodes = fs.readFileSync(NF, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l));
const BY = {}; nodes.forEach(n => BY[n.id] = n);
const P = JSON.parse(fs.readFileSync(file, 'utf8'));
const errs = [], warn = [];
const newIds = new Set((P.add || []).map(n => n.id));
const exists = id => !!BY[id] || newIds.has(id);
const DOSE = /\b\d+([.,]\d+)?\s?(mg|µg|mcg|g)\s?\/\s?(d[ií]a|kg|h)\b/i;

function chkSec(id, s) {
  if (!s || !s.t || !s.x) return errs.push(id + ': sección sin título o texto');
  if (s.x.length < 120 || s.x.length > 1500) errs.push(id + ' «' + s.t + '»: texto de ' + s.x.length + ' caracteres (120-1500)');
  (s.links || []).forEach(l => { if (!l.t || !Array.isArray(l.ids) || !l.ids.length) errs.push(id + ' «' + s.t + '»: enlace mal formado'); (l.ids || []).forEach(i => { if (!exists(i)) errs.push(id + ' «' + s.t + '»: enlace a nodo inexistente ' + i); }); });
  if (DOSE.test(s.x) && !/ficha técnica/i.test(s.x)) warn.push(id + ' «' + s.t + '»: posible dosis sin citar la ficha técnica');
}
function chkRef(id, r) { if (typeof r !== 'string' || !/\(\d{4}[a-z]?(, actualizada)?\)|\(\d{4}[-–/]\d{2,4}\)/.test(r)) errs.push(id + ': referencia sin «(año)»: ' + String(r).slice(0, 70)); }

for (const id in (P.patch || {})) {
  const n = BY[id], p = P.patch[id];
  if (!n) { errs.push('parche a nodo inexistente: ' + id); continue; }
  const bad = Object.keys(p).filter(k => !['secAdd', 'secReplace', 'featsAdd', 'featsReplace', 'refsAdd', 'relAdd', 'set'].includes(k));
  if (bad.length) errs.push(id + ': claves desconocidas ' + bad.join(','));
  (p.secAdd || []).forEach(s => { chkSec(id, s); if ((n.sec || []).some(x => x.t === s.t)) errs.push(id + ': ya existe la sección «' + s.t + '» (usa secReplace)'); });
  (p.secReplace || []).forEach(s => { chkSec(id, s); if (!(n.sec || []).some(x => x.t === s.t)) errs.push(id + ': secReplace de sección inexistente «' + s.t + '»'); });
  (p.featsReplace || []).forEach(([a]) => { if (!(n.feats || []).includes(a)) errs.push(id + ': featsReplace sin coincidencia exacta: ' + String(a).slice(0, 50)); });
  (p.refsAdd || []).forEach(r => chkRef(id, r));
  (p.relAdd || []).forEach(i => { if (!exists(i)) errs.push(id + ': relAdd a nodo inexistente ' + i); });
}
for (const n of (P.add || [])) {
  const id = n.id || '(sin id)';
  if (!/^[a-z0-9_]{3,31}$/.test(n.id || '')) errs.push(id + ': id no válido');
  if (BY[n.id]) errs.push(id + ': el id ya existe');
  const V = CFG.VIEWS[n.vw];
  if (!V && n.vw !== 'hist') errs.push(id + ': vista desconocida ' + n.vw);
  if (V) { if (!V.sectors.some(s => s.id === n.sp)) errs.push(id + ': sector ' + n.sp + ' no existe en ' + n.vw); if (!(n.ring >= 1 && n.ring <= V.rings.length)) errs.push(id + ': anillo fuera de rango'); }
  if (!CFG.KINDS[n.k]) errs.push(id + ': tipo desconocido ' + n.k);
  if (!CFG.TRADS[n.trad]) errs.push(id + ': tradición desconocida ' + n.trad);
  if (!CFG.CS[n.cs]) errs.push(id + ': consenso desconocido ' + n.cs);
  if (n.ev && !CFG.EV[n.ev]) errs.push(id + ': evidencia desconocida ' + n.ev);
  (n.tags || []).forEach(t => { if (!CFG.TAGS[t]) errs.push(id + ': etiqueta desconocida ' + t); });
  if (!n.n) errs.push(id + ': sin nombre');
  if (!n.ab || n.ab.length > 22) errs.push(id + ': abreviatura ausente o de más de 22 caracteres');
  if (!n.desc || n.desc.length < 150 || n.desc.length > 1200) errs.push(id + ': descripción de ' + (n.desc || '').length + ' caracteres (150-1200)');
  if (!Array.isArray(n.feats) || n.feats.length < 4) errs.push(id + ': menos de 4 rasgos');
  (n.feats || []).forEach(f => { if (f.length < 15 || f.length > 420) errs.push(id + ': rasgo de ' + f.length + ' caracteres (15-420)'); });
  if (!Array.isArray(n.refs) || n.refs.length < 3) errs.push(id + ': menos de 3 referencias');
  (n.refs || []).forEach(r => chkRef(id, r));
  (n.sec || []).forEach(s => chkSec(id, s));
  if (!Array.isArray(n.rel) || n.rel.length < 2) errs.push(id + ': menos de 2 relaciones');
  (n.rel || []).forEach(i => { if (!exists(i)) errs.push(id + ': relación a nodo inexistente ' + i); });
  if (DOSE.test(JSON.stringify(n)) && !/ficha técnica/i.test(JSON.stringify(n))) warn.push(id + ': posible dosis sin citar la ficha técnica');
}
warn.forEach(x => console.log('AVISO ' + x));
if (errs.length) { console.error(errs.map(e => 'ERROR ' + e).join('\n')); console.error(errs.length + ' errores'); process.exit(1); }
const np = Object.keys(P.patch || {}).length, na = (P.add || []).length;
if (check) { console.log('OK (' + np + ' parches, ' + na + ' nodos nuevos); no se ha escrito nada'); process.exit(0); }

const addRel = (a, b) => { const n = BY[a]; n.rel = n.rel || []; if (!n.rel.includes(b) && a !== b) n.rel.push(b); };
for (const n of (P.add || [])) { n.origen = n.origen || 'nuevo'; nodes.push(n); BY[n.id] = n; }
for (const n of (P.add || [])) (n.rel || []).forEach(i => addRel(i, n.id));
for (const id in (P.patch || {})) {
  const n = BY[id], p = P.patch[id];
  (p.secReplace || []).forEach(s => { n.sec[n.sec.findIndex(x => x.t === s.t)] = s; });
  if (p.secAdd) n.sec = (n.sec || []).concat(p.secAdd);
  (p.featsReplace || []).forEach(([a, b]) => { n.feats[n.feats.indexOf(a)] = b; });
  if (p.featsAdd) n.feats = (n.feats || []).concat(p.featsAdd);
  (p.refsAdd || []).forEach(r => { n.refs = n.refs || []; if (!n.refs.includes(r)) n.refs.push(r); });
  (p.relAdd || []).forEach(i => { addRel(id, i); addRel(i, id); });
  if (p.set) Object.assign(n, p.set);
}
fs.writeFileSync(NF, nodes.map(n => JSON.stringify(n)).join('\n') + '\n');
console.log('aplicado: ' + np + ' parches, ' + na + ' nodos nuevos; total ' + nodes.length + ' nodos');
