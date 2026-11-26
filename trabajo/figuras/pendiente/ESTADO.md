# Láminas 62-65: estado al guardar (26-11-2026)

El atlas publicado tiene 61 láminas y 1309 fichas. Estas cuatro están REDACTADAS pero NO integradas:
cada una estaba en verificación independiente cuando se guardó el progreso.

| Clave | Fuente | Verificación |
|---|---|---|
| mat_eutimizantes | trabajo/figuras/mat_eutimizantes.js | en curso; cotejar rangos con las tablas 12, 14 y 17 de CANMAT/ISBD 2018 (imágenes en PMC5947163) |
| mat_neuromodulacion | trabajo/figuras/mat_neuromodulacion.js | en curso; cotejar tabla 8.3 de CANMAT 2023, códigos NICE y números de la FDA |
| mod_pensamiento_lenguaje | trabajo/figuras/mod_pensamiento_lenguaje.js | en curso; definiciones de TLC/TALD escritas de memoria y 43 marcas «[fuente no localizada]» por reducir |
| dd_neurodesarrollo | trabajo/figuras/dd_neurodesarrollo.js | en curso; dos enlaces discutibles y códigos CIE-11 por cotejar |

En esta carpeta: los encargos de redacción (r_*.txt) y de verificación (v_*.txt), las notas de cada redactor
(*.notas.json) y, si el verificador terminó, su informe (*.informe.json).

## Para retomar
1. Si falta el informe de una lámina, relanzar su verificador con v_<clave>.txt (las rutas del scratchpad
   que citan los encargos pueden haber desaparecido: regenerarlas o ajustar la ruta de salida).
2. Integrar cada lámina verificada: copiar trabajo/figuras/<clave>.js a src/figsrc/, ejecutar
   `node tools/fig.js <clave>`, copiar el informe a verificacion/fig_<clave>.informe.json,
   `node build.js`, `PWP=/opt/node-tools/node_modules/playwright node tools/test.js`, commit y push.
3. Actualizar la descripción del PR #3 (65 láminas) y regenerar la copia privada.
