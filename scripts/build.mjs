import {mkdir,copyFile,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','app.js','domain.js']) await copyFile(`src/${file}`,`dist/${file}`);
console.log('Build concluído: dist/');
