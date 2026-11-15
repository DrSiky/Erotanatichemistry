#!/bin/sh
# Integra un bloque verificado: tools/integrar.sh <clave> <carpeta_de_salida>
set -e
K="$1"; O="$2"
node tools/apply.js "$O/$K.v.json"
mkdir -p verificacion
cp "$O/$K.informe.json" "verificacion/$K.informe.json"
node build.js
