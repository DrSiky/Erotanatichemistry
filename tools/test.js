// Prueba de humo en navegador: node tools/test.js   (necesita playwright; PWP=ruta opcional al módulo)
const path = require('path');
const { chromium } = require(process.env.PWP || 'playwright');

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1500, height: 950 } });
  const errs = [], net = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('request', r => { if (!/^(file|blob|data):/.test(r.url())) net.push(r.url()); });
  const U = 'file://' + path.join(__dirname, '..', 'atlas_nosologico.html');
  const ok = (c, m) => { console.log((c ? 'ok    ' : 'FALLO ') + m); if (!c) process.exitCode = 1; };

  await p.goto(U); await p.waitForTimeout(900);
  ok(+(await p.textContent('#figN')) > 0, 'figuras cargadas: ' + await p.textContent('#figN'));
  for (const v of ['nos', 'sem', 'eti', 'ter', 'hist', 'idx']) { await p.click('.tab[data-v=' + v + ']'); await p.waitForTimeout(350); }
  ok(true, 'las seis vistas se abren');

  await p.goto(U + '#id=ptsd'); await p.waitForTimeout(600);
  ok((await p.textContent('.ename')).length > 3, 'ficha por enlace directo');
  await p.click('[data-a=rmap]'); await p.waitForTimeout(300);
  const formas = await p.$$eval('.rmsvg .rn path', x => new Set(x.map(e => /[LlhHvV]/.test(e.getAttribute('d')) ? 'p' : 'c')).size);
  ok(formas > 1, 'mapa de relaciones con formas por tipo');
  await p.keyboard.press('Escape');

  await p.click('#bSym'); await p.fill('#symq', 'hipervigilancia'); await p.keyboard.press('Enter'); await p.waitForTimeout(200);
  ok((await p.$$('.symr')).length > 0, 'búsqueda por síntomas devuelve resultados');
  await p.click('.mclose');

  await p.click('#bFig'); await p.waitForTimeout(300);
  await p.fill('#figq', 'litio'); await p.waitForTimeout(200);
  const nf = (await p.$$('.figcard')).length;
  ok(nf > 0 && nf < 40, 'la búsqueda de láminas filtra (' + nf + ')');
  await p.fill('#figq', ''); await p.click('[data-fk=circ]'); await p.waitForTimeout(200);
  ok((await p.$$('.figcard')).length >= 5 && !(await p.$('.figcard[data-fig^=dd_]')), 'filtro de láminas por tipo');
  await p.click('.figcard[data-fig=circ_monoaminas]'); await p.waitForTimeout(400);
  const navt = async () => p.$eval('.fignav .pcur', e => e.textContent);
  const n0 = await navt(); await p.keyboard.press('ArrowRight'); await p.waitForTimeout(300);
  ok(n0.includes(' de ') && (await navt()) !== n0, 'flechas para pasar de lámina');
  await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(300);
  ok((await navt()) === n0, 'vuelta a la lámina anterior');
  const pcur = async () => p.$eval('#figpn .pcur:last-child', e => e.textContent);
  ok(/figura completa/.test(await pcur()), 'figura alta abierta entera por defecto');
  await p.click('[data-fp="0"]');
  ok(/Panel 1 de/.test(await pcur()), 'modo por paneles a petición');
  await p.click('[data-fp=next]');
  ok(/Panel 2 de/.test(await pcur()), 'navegación entre paneles');
  await p.click('[data-fp=full]');
  ok(/figura completa/.test(await pcur()), 'vuelta a la figura completa');
  await p.click('[data-fn=gal]'); await p.waitForTimeout(300);
  ok(!!(await p.$('#figq')), 'botón de vuelta a la galería');
  await p.click('[data-fk=""]');
  await p.keyboard.press('Escape');

  await p.goto(U + '#id=mapa_integr'); await p.waitForTimeout(500);
  ok((await p.$$('[data-a=pdf]')).length === 1, 'botón del PDF incrustado');

  ok(!errs.length, 'sin errores de consola' + (errs.length ? ': ' + errs.slice(0, 3).join(' | ') : ''));
  ok(!net.length, 'sin peticiones de red');
  await b.close();
})();
