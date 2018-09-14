#!/usr/bin/env node

const {
  mdLinks
} = require('./md-links');

// const argv = require('yargs')
//   .command('*.md', 'nombre del archivo md', {
//     docMd: {
//       demand: true,
//       alias: 
//     }
//   }).argv;


// un if para validar el segundo argumento
// mdLinks('prueba.md')
//   .then(pathDir => {
//     return readFile(pathDir);
//   })
//   .then(resp => {
//     // console.log(resp.fileHTML, resp.path);
//     return mdFilterLinks(resp.fileHTML, resp.path);
//   })
//   .then(arr =>{
//     console.log(arr);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// mdLinks('./some/example.md')
//   .then(links => {
//     // => [{ href, text, file }]
//   })
//   .catch(console.error);

// mdLinks('./some/example.md', { validate: true })
//   .then(links => {
//     // => [{ href, text, file, status, ok }]
//   })
//   .catch(console.error);

// mdLinks('./some/example.md', { stats: true })
//   .then(links => {
//     // => [{total, unique }]
//   })
//   .catch(console.error);

// mdLinks('./some/example.md', { stats: true,
// validate: true })
//   .then(links => {
//     // => [{total, unique, broken }]
//   })
//   .catch(console.error);

// mdLinks('./some/dir')
//   .then(links => {
//     // => [{ href, text, file }]
//   })
//   .catch(console.error);
