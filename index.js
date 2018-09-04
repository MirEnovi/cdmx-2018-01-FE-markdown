#!/usr/bin/env node

const { mdLinks } = require('./md-links');
const [, , ...args] = process.argv[2];
// argumentos de linea decomandos Yargs.
// console.log(args);

// const docMd = 'prueba.md';
mdLinks(docMd);


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