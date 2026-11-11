#!/usr/bin/env node
// Compila una figura: node tools/fig.js <clave> [--dry] [--png <carpeta>]   (--dry: comprueba y dibuja sin escribir en src/fig)
// Lee src/figsrc/<clave>.js, comprueba solapes y enlaces, y escribe src/fig/<clave>.svg, _meta.json y _orden.json.
const fs = require('fs'), path = require('path');
const { Fig } = require('./figlib.js');
const R = path.join(__dirname, '..'), key = process.argv[2];
if (!key) { console.error('uso: node tools/fig.js <clave> [--png carpeta]'); process.exit(1); }
const nodes = fs.readFileSync(path.join(R, 'src/data/nodes.jsonl'), 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l));
const names = {}; nodes.forEach(n => names[n.id] = n.n);
const src = path.join(R, 'src/figsrc', key + '.js'); delete require.cache[require.resolve(src)];
const m = require(src);
class F extends Fig { constructor(o) { super(Object.assign({ names }, o)); } }
const g = m.draw(F);
const errs = g.check();
if (m.key !== key) errs.push('la clave del módulo no coincide con el nombre del fichero');
const linked = g.nodes(); linked.forEach(i => { if (!names[i]) errs.push('enlace a nodo inexistente: ' + i); });
const meta = m.meta || {};
for (const k of ['title', 'kind', 'cap', 'refs']) if (!meta[k] || (Array.isArray(meta[k]) && !meta[k].length)) errs.push('falta meta.' + k);
if (!['dd', 'circ', 'mat', 'mod'].includes(meta.kind)) errs.push('meta.kind debe ser dd, circ, mat o mod');
(meta.nodes || []).forEach(i => { if (!names[i]) errs.push('meta.nodes: nodo inexistente ' + i); });
if (linked.length < 6 && !key.startsWith('_')) errs.push('menos de 6 enlaces a nodos (' + linked.length + ')');
(meta.refs || []).forEach(r => { if (!/\(\d{4}/.test(r)) errs.push('referencia sin año: ' + r.slice(0, 60)); });
if (errs.length) { console.error(errs.map(e => 'ERROR ' + e).join('\n')); process.exit(1); }
const svg = g.render();
const vb = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/), W = +vb[1], H = +vb[2];
// cortes de paneles: entre cajas y tablas, sin partir ninguna
let cuts = [];
if (H >= 1.4 * W) {
  const spans = g.order.map(i => g.boxes[i]).map(b => [b.y - 5, b.y + b.h + 5]).concat(g.items.filter(i => i.k === 'table').map(t => [t.y - 5, t.y + t.h + 5])).sort((a, b) => a[0] - b[0]);
  const gaps = []; let end = 0; for (const [a, z] of spans) { if (a > end + 12) gaps.push([end, a]); end = Math.max(end, z); } if (H > end + 12) gaps.push([end, H]);
  const n = Math.max(2, Math.round(H / (0.55 * W))), step = H / n;
  for (let k = 1; k < n; k++) { let best = null, bd = 1e9; for (const [a, z] of gaps) { const c = (a + z) / 2, d = Math.abs(c - k * step); if (d < bd && c > (cuts[cuts.length - 1] || 0) + step * 0.4) { bd = d; best = c; } } if (best != null && bd < step * 0.5) cuts.push(Math.round(best)); }
}
const dry = process.argv.includes('--dry');
if (!dry) fs.writeFileSync(path.join(R, 'src/fig', key + '.svg'), svg);
const mf = path.join(R, 'src/fig/_meta.json'), of = path.join(R, 'src/fig/_orden.json');
const M = JSON.parse(fs.readFileSync(mf, 'utf8')), O = JSON.parse(fs.readFileSync(of, 'utf8'));
M[key] = { kind: meta.kind, nodes: [...new Set((meta.nodes || []).concat(linked))], cap: meta.cap, refs: meta.refs, title: meta.title, t: meta.title, cuts };
if (!O.includes(key)) { O.push(key); O.sort(); }
if (!dry) { fs.writeFileSync(mf, JSON.stringify(M, null, 1) + '\n'); fs.writeFileSync(of, JSON.stringify(O, null, 1) + '\n'); }
console.log('OK ' + key + ': ' + W + '×' + H + ', ' + g.order.length + ' cajas, ' + linked.length + ' enlaces, ' + (cuts.length + 1) + ' panel(es)');
const pi = process.argv.indexOf('--png');
if (pi > 0) (async () => {
  const { chromium } = require(process.env.PWP || 'playwright'); const dir = process.argv[pi + 1]; fs.mkdirSync(dir, { recursive: true });
  const b = await chromium.launch(); const bounds = [0].concat(cuts, [H]);
  for (let i = 0; i < bounds.length - 1; i++) { const h = bounds[i + 1] - bounds[i], sc = 0.7; const p = await b.newPage({ viewport: { width: Math.round(W * sc), height: Math.round(h * sc) } }); await p.setContent('<body style="margin:0">' + svg.replace('viewBox="0 0 ' + W + ' ' + H + '"', 'viewBox="0 ' + bounds[i] + ' ' + W + ' ' + h + '"') + '</body>'); const f = path.join(dir, key + '.p' + (i + 1) + '.png'); await p.screenshot({ path: f }); await p.close(); console.log('png ' + f); }
  await b.close();
})();
