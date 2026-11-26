# Fuentes del Atlas Nosológico

`atlas_nosologico.html` (en la raíz) es el entregable: un único HTML sin dependencias, que funciona sin conexión. **No se edita a mano**: se genera desde esta carpeta con `node build.js`.

| Ruta | Contenido |
|---|---|
| `data/nodes.jsonl` | Los nodos, uno por línea (JSON). Aquí se añaden o corrigen fichas. |
| `data/extra.json` | Redirecciones de ids, árbol de la guía WKL y fecha de construcción. |
| `config.js` | Vistas, sectores, anillos, tipos de nodo, etiquetas y recorridos. |
| `template.html` | El visor: HTML, CSS y JavaScript. |
| `fig/<clave>.svg` | Figuras ya dibujadas. `fig/_meta.json` guarda título, tipo, pie, fuentes, nodos enlazados y cortes de paneles; `fig/_orden.json`, el orden de la galería. |
| `docs/<id>.pdf` | PDF incrustados; el nombre es el id del nodo desde el que se abren. |

## Uso

```
node build.js            # valida y escribe atlas_nosologico.html
node build.js --check    # comprueba que el HTML coincide con src/
node tools/test.js       # prueba de humo en navegador (requiere playwright)
```

El build se detiene si hay ids duplicados, relaciones rotas, figuras sin fichero o enlaces de figuras a nodos inexistentes.

## Criterios de contenido

- Solo se afirma lo que tiene base documental sólida (guías, clasificaciones oficiales, revisiones sistemáticas, PubMed).
- Lo no verificable se conserva con el marcador literal `[fuente no localizada]` (códigos CIE-11: `[fuente oficial no localizada]`; referencias: `[no verificada]`).
  El visor los muestra como símbolos: `[Ø]`/`[ø]` (fuente no localizada y sus variantes) y `[∆]`/`[δ]` (referencia no verificada y sus variantes), con el texto íntegro en la descripción emergente. Por eso las variantes detalladas deben contener «no localizad…» o «no verificad…».
- Sin perífrasis del tipo «no se ha podido contrastar»: se dice lo que se sabe con la fuente disponible, aunque sea pobre o antigua («solo hay datos de 1998; se sabe que…»), y se marca con el símbolo lo que no tiene fuente. Si lo no verificado no aporta nada, se omite. Las ausencias de evidencia se enuncian en positivo («no constan ensayos…»), sin marcador redundante. Los pies de lámina no repiten la leyenda de las marcas, que está en «Criterios editoriales».
- Sin posología individualizada: solo límites literales de ficha técnica, citando la ficha.
- Redacción neutra en género y no patologizante en orientación sexual e identidad de género.

## Limitación conocida

Los módulos con los que se dibujaron las figuras se perdieron: las figuras se conservan como SVG final. Se pueden retocar editando el SVG; una figura nueva exige dibujarla de nuevo.
