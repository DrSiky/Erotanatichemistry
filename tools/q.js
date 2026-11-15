#!/usr/bin/env node
// Consulta de nodos.
//   node tools/q.js find <regex> [vista]   busca por id, nombre o alias
//   node tools/q.js show <id> [<id>...]    muestra la ficha completa
//   node tools/q.js sector <vista> <sector> lista los nodos de un sector
const fs = require('fs'), path = require('path');
const nodes = fs.readFileSync(path.join(__dirname, '../src/data/nodes.jsonl'), 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l));
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const [cmd, ...a] = process.argv.slice(2);
const line = n => [n.id, n.n, n.vw + '/' + n.sp, 'k=' + n.k, 'sec=' + (n.sec || []).length].join(' | ');
if (cmd === 'find') {
  const re = new RegExp(norm(a[0]), 'i');
  nodes.filter(n => (!a[1] || n.vw === a[1]) && re.test(norm([n.id, n.n, (n.al || []).join(' ')].join(' ')))).forEach(n => console.log(line(n)));
} else if (cmd === 'sector') {
  nodes.filter(n => n.vw === a[0] && n.sp === a[1]).forEach(n => console.log(line(n)));
} else if (cmd === 'show') {
  for (const id of a) {
    const n = nodes.find(x => x.id === id);
    if (!n) { console.log('NO EXISTE ' + id); continue; }
    console.log('=== ' + line(n) + ' | ring=' + n.ring + ' trad=' + n.trad + ' cs=' + n.cs + ' ev=' + (n.ev || '') + ' tags=' + (n.tags || []).join(',') + ' cie=' + (n.cie || []).join(','));
    if (n.al) console.log('alias: ' + n.al.join(' · '));
    console.log('desc: ' + n.desc);
    (n.feats || []).forEach(f => console.log(' · ' + f));
    if (n.tx) console.log('tx: ' + n.tx);
    if (n.note) console.log('nota: ' + n.note);
    (n.sec || []).forEach(s => console.log('[sec] ' + s.t + ': ' + s.x + (s.links ? ' {enlaces: ' + s.links.map(l => l.ids.join(',') + ' → ' + l.t).join('; ') + '}' : '')));
    console.log('rel: ' + (n.rel || []).join(' '));
    (n.refs || []).forEach(r => console.log('  - ' + r));
  }
} else console.log('uso: find <regex> [vista] | show <id>... | sector <vista> <sector>');
