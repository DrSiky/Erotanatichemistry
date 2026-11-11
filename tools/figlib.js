// Librería mínima para dibujar las figuras del atlas como SVG (sin dependencias).
// Un módulo de figura (src/figsrc/<clave>.js) exporta { key, meta:{title,kind,cap,refs,nodes}, draw(Fig) } y draw devuelve la figura.
// Se compila con: node tools/fig.js <clave>
const FONT = "system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif";
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const cw = (ch, fs, bold) => fs * (/[iIl.,;:!'|·\[\]()]/.test(ch) ? 0.3 : /[mwMW—]/.test(ch) ? 0.85 : /[A-ZÁÉÍÓÚÑ0-9]/.test(ch) ? 0.64 : 0.53) * (bold ? 1.06 : 1);
const tw = (s, fs, bold) => [...String(s)].reduce((a, c) => a + cw(c, fs, bold), 0);
function wrap(text, maxW, fs, bold) {
  const out = [];
  for (const par of String(text).split('\n')) {
    let line = '';
    for (const word of par.split(/\s+/).filter(Boolean)) {
      const t = line ? line + ' ' + word : word;
      if (tw(t, fs, bold) <= maxW || !line) line = t; else { out.push(line); line = word; }
    }
    out.push(line);
  }
  return out;
}
// Tipos de caja: el color nunca es el único diferenciador (cambian también borde, trazo y forma).
const TYPES = {
  q:    { fill: '#fff8e1', stroke: '#111', sw: 3,   shape: 'round', tag: '?' },      // pregunta o decisión
  dx:   { fill: '#e8eef6', stroke: '#111', sw: 3.2, shape: 'rect', dbl: true },      // entidad o diagnóstico
  act:  { fill: '#e9f3ea', stroke: '#111', sw: 2,   shape: 'rect' },                 // acción o conducta a seguir
  warn: { fill: '#fdeaea', stroke: '#111', sw: 4,   shape: 'rect', tag: '!' },       // alarma o seguridad
  info: { fill: '#f6f6f2', stroke: '#555', sw: 1.6, shape: 'rect', dash: '3 4' },    // nota, dato o contexto
  mec:  { fill: '#f1eaf6', stroke: '#111', sw: 2,   shape: 'ellipse' },              // mecanismo o diana
  drug: { fill: '#e6eef8', stroke: '#111', sw: 2.4, shape: 'rect', dbl: true },      // fármaco o sustancia
  lim:  { fill: '#fff',    stroke: '#111', sw: 2,   shape: 'rect', dash: '10 6' },   // límites de la figura
  head: { fill: '#17202a', stroke: '#17202a', sw: 1, shape: 'round', ink: '#fff' }   // cabecera
};
class Fig {
  constructor(o) { this.key = o.key; this.title = o.title; this.desc = o.desc || o.title; this.w = o.w || 1940; this.items = []; this.boxes = {}; this.order = []; this.arrows = []; this.warn = []; this.maxY = 110; this.names = o.names || {}; }
  _grow(y) { if (y > this.maxY) this.maxY = y; }
  // Caja con título en negrita y texto; la altura se calcula sola. opciones: x,y,w,title,text,type,node,fs,minH,align
  box(id, o) {
    const T = TYPES[o.type || 'info'], fs = o.fs || 20, pad = T.shape === 'ellipse' ? 40 : 16, lh = fs * 1.28;
    const tl = o.title ? wrap(o.title, o.w - 2 * pad - (o.node ? 22 : 0), fs + 1.5, true) : [];
    const xl = o.text ? wrap(o.text, o.w - 2 * pad, fs, false) : [];
    const h = Math.max(o.minH || 0, tl.length * (fs + 1.5) * 1.28 + xl.length * lh + (tl.length && xl.length ? 8 : 0) + 2 * (T.shape === 'ellipse' ? 30 : 14));
    const b = { id, x: o.x, y: o.y, w: o.w, h, type: o.type || 'info', T, tl, xl, fs, node: o.node, pad, align: o.align || 'center' };
    if (this.boxes[id]) this.warn.push('id de caja duplicado: ' + id);
    this.boxes[id] = b; this.order.push(id); this._grow(b.y + b.h); return b;
  }
  // Marco de grupo con rótulo (no cuenta para solapes).
  group(o) { this.items.push({ k: 'group', ...o }); this._grow(o.y + o.h); }
  // Texto libre, envuelto al ancho dado. Devuelve la y inferior.
  text(x, y, str, o) { o = o || {}; const fs = o.fs || 20; const lines = wrap(str, o.w || this.w - x - 40, fs, o.bold); this.items.push({ k: 'text', x, y, lines, fs, bold: o.bold, fill: o.fill || '#111', anchor: o.anchor || 'start' }); const yb = y + lines.length * fs * 1.3; this._grow(yb); return yb; }
  // Banda de cabecera a todo el ancho. Devuelve la y inferior.
  band(y, label, o) { o = o || {}; const x = o.x == null ? 40 : o.x, w = o.w || this.w - 80; this.items.push({ k: 'band', x, y, w, label, n: o.n }); this._grow(y + 44); return y + 44; }
  // Flecha ortogonal entre cajas (ids u objetos). opciones: from/to ('t','b','l','r'), label, dash, via:[[x,y],...], fa/fb (0-1, punto a lo largo del lado)
  arrow(a, b, o) { this.arrows.push({ a: typeof a === 'string' ? this.boxes[a] : a, b: typeof b === 'string' ? this.boxes[b] : b, o: o || {} }); }
  // Tabla o matriz. cols:[{w,label}], rows:[[celda,...]]; celda = texto o {t, node, sym, bold}. Devuelve {y:inferior}
  table(o) {
    const fs = o.fs || 18, lh = fs * 1.28, pad = 10; let y = o.y;
    const xs = []; let x = o.x; o.cols.forEach(c => { xs.push(x); x += c.w; });
    const W = x - o.x; const cells = [];
    const hh = Math.max(...o.cols.map(c => wrap(c.label, c.w - 2 * pad, fs, true).length)) * lh + 2 * pad;
    o.cols.forEach((c, i) => cells.push({ x: xs[i], y, w: c.w, h: hh, lines: wrap(c.label, c.w - 2 * pad, fs, true), bold: true, head: true }));
    y += hh;
    o.rows.forEach((r, ri) => {
      const cs = r.map((c, i) => { const cc = typeof c === 'string' ? { t: c } : c; return { ...cc, lines: wrap((cc.sym ? cc.sym + ' ' : '') + (cc.t || ''), o.cols[i].w - 2 * pad - (cc.node ? 18 : 0), fs, cc.bold || i === 0) }; });
      const h = Math.max(...cs.map(c => c.lines.length)) * lh + 2 * pad;
      cs.forEach((c, i) => cells.push({ x: xs[i], y, w: o.cols[i].w, h, lines: c.lines, bold: c.bold || i === 0, node: c.node, zebra: ri % 2 === 1, first: i === 0 }));
      y += h;
    });
    this.items.push({ k: 'table', x: o.x, y: o.y, w: W, h: y - o.y, cells, fs });
    cells.forEach(c => { if (c.node) (this.tnodes = this.tnodes || []).push(c.node); });
    this._grow(y); return { y, w: W };
  }
  // Pie con las fuentes y la advertencia de uso. Se coloca al final automáticamente.
  footer(str) { this.foot = str; }
  check() {
    const w = this.warn.slice(); const bs = this.order.map(i => this.boxes[i]);
    for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) { const a = bs[i], b = bs[j]; if (a.x < b.x + b.w - 2 && b.x < a.x + a.w - 2 && a.y < b.y + b.h - 2 && b.y < a.y + a.h - 2) w.push('solape entre cajas: ' + a.id + ' y ' + b.id); }
    bs.forEach(b => { if (b.x < 20 || b.x + b.w > this.w - 20) w.push('caja fuera del ancho: ' + b.id); if (b.y < 70) w.push('caja sobre el título: ' + b.id); });
    this.items.filter(i => i.k === 'table').forEach(t => { if (t.x + t.w > this.w - 20) w.push('tabla fuera del ancho'); bs.forEach(b => { if (b.x < t.x + t.w && t.x < b.x + b.w && b.y < t.y + t.h && t.y < b.y + b.h) w.push('solape entre tabla y caja ' + b.id); }); });
    this.arrows.forEach(a => { if (!a.a || !a.b) w.push('flecha con extremo inexistente'); });
    return w;
  }
  nodes() { return [...new Set(this.order.map(i => this.boxes[i].node).filter(Boolean).concat(this.tnodes || []))]; }
  _side(b, s, f) { f = f == null ? 0.5 : f; return s === 't' ? [b.x + b.w * f, b.y] : s === 'b' ? [b.x + b.w * f, b.y + b.h] : s === 'l' ? [b.x, b.y + b.h * f] : [b.x + b.w, b.y + b.h * f]; }
  _link(node, inner, extra) { if (!node) return '<g class="fbox">' + inner + '</g>'; const nm = this.names[node] || node; return '<g class="fbox flink" data-id="' + esc(node) + '" tabindex="0" role="link" aria-label="Abrir ficha: ' + esc(nm) + '"><title>Abrir ficha: ' + esc(nm) + '</title>' + inner + (extra || '') + '</g>'; }
  render() {
    let s = '', footH = 0, footLines = [];
    if (this.foot) { footLines = wrap(this.foot, this.w - 80, 17, false); footH = footLines.length * 22 + 40; }
    const H = Math.ceil(this.maxY + 40 + footH);
    s += '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ' + this.w + ' ' + H + '" role="group" aria-labelledby="ft-' + this.key + ' fd-' + this.key + '" font-family="' + FONT + '">';
    s += '<title id="ft-' + this.key + '">' + esc(this.title) + '</title><desc id="fd-' + this.key + '">' + esc(this.desc) + '</desc>';
    s += '<style>.flink{cursor:pointer}.flink:hover polygon,.flink:hover rect,.flink:hover ellipse,.flink:focus polygon,.flink:focus rect,.flink:focus ellipse{stroke-width:4.2}.flink:focus{outline:none}</style>';
    s += '<defs><marker id="ah-' + this.key + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#111"/></marker></defs>';
    s += '<rect width="' + this.w + '" height="' + H + '" fill="#fff"/>';
    wrap(this.title, this.w - 80, 30, true).forEach((l, i) => { s += '<text x="40" y="' + (48 + i * 38) + '" font-size="30" font-weight="700" fill="#111">' + esc(l) + '</text>'; });
    for (const it of this.items.filter(i => i.k === 'group')) { s += '<rect x="' + it.x + '" y="' + it.y + '" width="' + it.w + '" height="' + it.h + '" rx="18" fill="' + (it.fill || '#f6f6f2') + '" stroke="#555" stroke-width="1.6" stroke-dasharray="14 7"/>'; if (it.label) s += '<text x="' + (it.x + 16) + '" y="' + (it.y + 26) + '" font-size="19" font-weight="700" fill="#333">' + esc(it.label) + '</text>'; }
    for (const it of this.items.filter(i => i.k === 'band')) { s += '<rect x="' + it.x + '" y="' + it.y + '" width="' + it.w + '" height="44" rx="8" fill="#17202a"/>'; let tx = it.x + 18; if (it.n != null) { s += '<circle cx="' + (it.x + 26) + '" cy="' + (it.y + 22) + '" r="14" fill="#fff"/><text x="' + (it.x + 26) + '" y="' + (it.y + 29) + '" font-size="19" font-weight="700" text-anchor="middle" fill="#17202a">' + esc(it.n) + '</text>'; tx = it.x + 52; } s += '<text x="' + tx + '" y="' + (it.y + 30) + '" font-size="22" font-weight="700" fill="#fff">' + esc(it.label) + '</text>'; }
    for (const a of this.arrows) {
      if (!a.a || !a.b) continue; const o = a.o; let from = o.from, to = o.to;
      if (!from || !to) { const dx = (a.b.x + a.b.w / 2) - (a.a.x + a.a.w / 2), dy = (a.b.y + a.b.h / 2) - (a.a.y + a.a.h / 2); if (Math.abs(dy) >= Math.abs(dx) * 0.6) { from = from || (dy > 0 ? 'b' : 't'); to = to || (dy > 0 ? 't' : 'b'); } else { from = from || (dx > 0 ? 'r' : 'l'); to = to || (dx > 0 ? 'l' : 'r'); } }
      const p1 = this._side(a.a, from, o.fa), p2 = this._side(a.b, to, o.fb); let pts = [p1];
      if (o.via) pts = pts.concat(o.via); else if (p1[0] !== p2[0] && p1[1] !== p2[1]) { if (from === 'b' || from === 't') { const my = (p1[1] + p2[1]) / 2; if (to === 't' || to === 'b') pts.push([p1[0], my], [p2[0], my]); else pts.push([p1[0], p2[1]]); } else { const mx = (p1[0] + p2[0]) / 2; if (to === 'l' || to === 'r') pts.push([mx, p1[1]], [mx, p2[1]]); else pts.push([p2[0], p1[1]]); } }
      pts.push(p2);
      s += '<polyline points="' + pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ') + '" fill="none" stroke="#111" stroke-width="' + (o.dash ? 1.8 : 2.4) + '"' + (o.dash ? ' stroke-dasharray="8 6"' : '') + ' marker-end="url(#ah-' + this.key + ')"/>';
      if (o.label) { const m = pts.length > 2 ? pts[1] : [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]; const lx = o.lx != null ? o.lx : (pts.length > 2 ? (pts[0][0] + pts[1][0]) / 2 + (pts[0][0] === pts[1][0] ? 10 : 0) : m[0] + 10), ly = o.ly != null ? o.ly : (pts.length > 2 ? (pts[0][1] + pts[1][1]) / 2 - 6 : m[1] - 6); const lw = tw(o.label, 17, true) + 10; s += '<rect x="' + (lx - 4).toFixed(1) + '" y="' + (ly - 16).toFixed(1) + '" width="' + lw.toFixed(1) + '" height="22" fill="#fff"/><text x="' + lx.toFixed(1) + '" y="' + ly.toFixed(1) + '" font-size="17" font-weight="700" fill="#111">' + esc(o.label) + '</text>'; }
    }
    for (const it of this.items.filter(i => i.k === 'table')) {
      for (const c of it.cells) { const lh = it.fs * 1.28; let inner = '<rect x="' + c.x + '" y="' + c.y + '" width="' + c.w + '" height="' + c.h + '" fill="' + (c.head ? '#17202a' : c.first ? '#eef1f4' : c.zebra ? '#f7f7f4' : '#fff') + '" stroke="#555" stroke-width="1.2"/>'; inner += '<text x="' + (c.x + 10) + '" y="' + (c.y + 10 + it.fs) + '" font-size="' + it.fs + '" fill="' + (c.head ? '#fff' : '#111') + '"' + (c.bold ? ' font-weight="700"' : '') + '>' + c.lines.map((l, i) => '<tspan x="' + (c.x + 10) + '"' + (i ? ' dy="' + lh.toFixed(1) + '"' : '') + '>' + esc(l) + '</tspan>').join('') + '</text>'; s += c.node ? this._link(c.node, inner, '<text x="' + (c.x + c.w - 8) + '" y="' + (c.y + 20) + '" font-size="16" text-anchor="end" fill="#111">↗</text>') : inner; }
    }
    for (const id of this.order) {
      const b = this.boxes[id], T = b.T, ink = T.ink || '#111'; let inner = '';
      const da = T.dash ? ' stroke-dasharray="' + T.dash + '"' : '';
      if (T.shape === 'ellipse') inner += '<ellipse cx="' + (b.x + b.w / 2) + '" cy="' + (b.y + b.h / 2) + '" rx="' + b.w / 2 + '" ry="' + b.h / 2 + '" fill="' + T.fill + '" stroke="' + T.stroke + '" stroke-width="' + T.sw + '"' + da + '/>';
      else inner += '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '"' + (T.shape === 'round' ? ' rx="16"' : '') + ' fill="' + T.fill + '" stroke="' + T.stroke + '" stroke-width="' + T.sw + '"' + da + '/>';
      if (T.dbl) inner += '<rect x="' + (b.x + 5) + '" y="' + (b.y + 5) + '" width="' + (b.w - 10) + '" height="' + (b.h - 10) + '" fill="none" stroke="#111" stroke-width="1"/>';
      if (T.tag) inner += '<circle cx="' + (b.x + 18) + '" cy="' + (b.y + 18) + '" r="12" fill="#111"/><text x="' + (b.x + 18) + '" y="' + (b.y + 24) + '" font-size="17" font-weight="700" text-anchor="middle" fill="#fff">' + T.tag + '</text>';
      const tfs = b.fs + 1.5, th = b.tl.length * tfs * 1.28 + b.xl.length * b.fs * 1.28 + (b.tl.length && b.xl.length ? 8 : 0);
      let y = b.y + (b.h - th) / 2 + tfs * 0.95; const cx = b.align === 'left' ? b.x + b.pad : b.x + b.w / 2, an = b.align === 'left' ? 'start' : 'middle';
      inner += '<text font-size="' + b.fs + '" fill="' + ink + '" text-anchor="' + an + '">';
      b.tl.forEach((l, i) => { inner += '<tspan x="' + cx + '" y="' + (y + i * tfs * 1.28).toFixed(1) + '" font-weight="700" font-size="' + tfs + '">' + esc(l) + '</tspan>'; });
      y += b.tl.length * tfs * 1.28 + (b.tl.length && b.xl.length ? 8 : 0) - (b.tl.length ? (tfs - b.fs) * 0.9 : 0);
      b.xl.forEach((l, i) => { inner += '<tspan x="' + cx + '" y="' + (y + i * b.fs * 1.28).toFixed(1) + '">' + esc(l) + '</tspan>'; });
      inner += '</text>';
      s += this._link(b.node, inner, '<path d="M' + (b.x + b.w - 26) + ' ' + b.y + 'h26v26z" fill="#111"/><text x="' + (b.x + b.w - 5) + '" y="' + (b.y + 14) + '" font-size="13" text-anchor="end" fill="#fff">↗</text>');
    }
    for (const it of this.items.filter(i => i.k === 'text')) s += '<text x="' + it.x + '" y="' + it.y + '" font-size="' + it.fs + '" fill="' + it.fill + '" text-anchor="' + it.anchor + '"' + (it.bold ? ' font-weight="700"' : '') + '>' + it.lines.map((l, i) => '<tspan x="' + it.x + '"' + (i ? ' dy="' + (it.fs * 1.3).toFixed(1) + '"' : '') + '>' + esc(l) + '</tspan>').join('') + '</text>';
    if (this.foot) { const y0 = this.maxY + 40; s += '<line x1="40" y1="' + (y0 - 14) + '" x2="' + (this.w - 40) + '" y2="' + (y0 - 14) + '" stroke="#999" stroke-width="1"/><text x="40" y="' + (y0 + 8) + '" font-size="17" fill="#333">' + footLines.map((l, i) => '<tspan x="40"' + (i ? ' dy="22"' : '') + '>' + esc(l) + '</tspan>').join('') + '</text>'; }
    return s + '</svg>';
  }
}
module.exports = { Fig, wrap, tw, TYPES };
