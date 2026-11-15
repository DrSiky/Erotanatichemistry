#!/usr/bin/env node
// Recompone atlas_nosologico.html (un único HTML sin dependencias) a partir de src/.
//   node build.js            escribe atlas_nosologico.html
//   node build.js --check    solo valida y compara con el fichero existente
const fs=require('fs'),path=require('path');
const S=path.join(__dirname,'src'),OUT=path.join(__dirname,'atlas_nosologico.html');
const rd=f=>fs.readFileSync(path.join(S,f),'utf8');
const esc=s=>s.replace(/</g,'\\u003c');
// --- nodos
const nodes=rd('data/nodes.jsonl').split('\n').filter(Boolean).map((l,i)=>{try{return JSON.parse(l)}catch(e){throw new Error('nodes.jsonl línea '+(i+1)+': '+e.message)}});
const errs=[];const ids=new Set();
for(const n of nodes){if(!n.id||!n.n)errs.push('nodo sin id o nombre: '+JSON.stringify(n).slice(0,60));if(ids.has(n.id))errs.push('id duplicado: '+n.id);ids.add(n.id);}
for(const n of nodes)for(const r of n.rel||[])if(!ids.has(r))errs.push('relación rota: '+n.id+' -> '+r);
const extra=JSON.parse(rd('data/extra.json'));
const data=Object.assign({nodes},extra);
// --- figuras
const meta=JSON.parse(rd('fig/_meta.json'));const orden=JSON.parse(rd('fig/_orden.json'));
const figs={};
for(const k of orden){const f=path.join(S,'fig',k+'.svg');if(!fs.existsSync(f)){errs.push('falta la figura '+k+'.svg');continue;}figs[k]=fs.readFileSync(f,'utf8');}
for(const f of fs.readdirSync(path.join(S,'fig')))if(f.endsWith('.svg')&&!orden.includes(f.slice(0,-4)))errs.push('figura no listada en _orden.json: '+f);
for(const k in meta){if(!figs[k])errs.push('metadatos de una figura inexistente: '+k);for(const i of meta[k].nodes||[])if(!ids.has(i))errs.push('figura '+k+': nodo inexistente '+i);}
// --- documentos incrustados
const docs={};const dd=path.join(S,'docs');
if(fs.existsSync(dd))for(const f of fs.readdirSync(dd).sort())if(/\.pdf$/i.test(f)){const k=f.replace(/\.pdf$/i,'');if(!ids.has(k))errs.push('documento sin nodo: '+f);docs[k]=fs.readFileSync(path.join(dd,f)).toString('base64');}
if(errs.length){console.error(errs.join('\n'));process.exit(1);}
// --- composición
const html=rd('template.html')
 .replace('<!--@@CONFIG@@-->',()=>'<script>'+rd('config.js').replace(/\n$/,'')+'\n</script>')
 .replace('<!--@@DATA@@-->',()=>'<script>window.ATLAS_DATA='+esc(JSON.stringify(data))+';</script>')
 .replace('<!--@@FIGS@@-->',()=>'<script>window.ATLAS_FIG='+esc(JSON.stringify(figs))+';window.ATLAS_FIGMETA='+esc(JSON.stringify(meta))+';window.ATLAS_DOCS='+JSON.stringify(docs)+';</script>');
if(process.argv.includes('--check')){const cur=fs.existsSync(OUT)?fs.readFileSync(OUT,'utf8'):'';console.log(cur===html?'OK: el HTML publicado coincide con src/':'DIFERENTE: ejecuta node build.js');process.exit(cur===html?0:2);}
fs.writeFileSync(OUT,html);
console.log('nodos',nodes.length,'· figuras',orden.length,'· documentos',Object.keys(docs).length,'·',(html.length/1024).toFixed(0)+' KB');
