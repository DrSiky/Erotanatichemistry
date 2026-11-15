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
  await p.click('.figcard[data-fig=circ_monoaminas]'); await p.waitForTimeout(400);
  ok(/Panel 1 de/.test(await p.textContent('.pcur')), 'figura alta dividida en paneles');
  await p.click('[data-fp=next]');
  ok(/Panel 2 de/.test(await p.textContent('.pcur')), 'navegación entre paneles');
  await p.keyboard.press('Escape');

  await p.goto(U + '#id=mapa_integr'); await p.waitForTimeout(500);
  ok((await p.$$('[data-a=pdf]')).length === 1, 'botón del PDF incrustado');

  ok(!errs.length, 'sin errores de consola' + (errs.length ? ': ' + errs.slice(0, 3).join(' | ') : ''));
  ok(!net.length, 'sin peticiones de red');
  await b.close();
})();
