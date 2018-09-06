#!/usr/bin/env node

const {
  mdLinks
} = require('./md-links');
// const fetch = require('node-fetch');

// un if para validar el segundo argumento
mdLinks(process.argv[2]);
  // .then(array => console.log(array))
  // .catch(error => {
  //   console.log(error);
  // });


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
