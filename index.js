#!/usr/bin/env node

const {
  mdLinks,
  mdConvertDir,
  readFile,
  mdFilterLinks,
  fetchLink
} = require('./md-links');

const argv = require('yargs')
  .command('*.md', 'nombre del archivo md', {
    validate: {
      // demand: true,
      alias: 'va'
    }
  })
  .help()
  .argv;

const nameFile = argv._[0];

if (argv.validate) {
  // console.log('hago fetch');  
  mdLinks(nameFile)
    .then(docMd => {
      return mdConvertDir(docMd);
    })
    .then(pathDir => {
      return readFile(pathDir);
    })
    .then(resp => {
      // console.log(resp.fileHTML, resp.path);
      return mdFilterLinks(resp.fileHTML, resp.path);
    })
    .then(arr => {
      return fetchLink(arr);
    })
    // .then(val => {
    //   console.log(val);      
    // })
    .catch(err => {
      console.log(err);
    });
} else {
  // console.log('no hago fetch');
  mdLinks(nameFile)
    .then(docMd => {
      return mdConvertDir(docMd);
    })
    .then(pathDir => {
      return readFile(pathDir);
    })
    .then(resp => {
      return mdFilterLinks(resp.fileHTML, resp.path);
    })
    .then(arr => {
      console.log(arr);
      
      return arr;
    })
    .catch(err => {
      console.log(err);
    });
}


// un if para validar el segundo argumento

// mdLinks('prueba.md')
//   .then(docMd => {
//     return mdConvertDir(docMd);
//   })
//   .then(pathDir => {
//     return readFile(pathDir);
//   })
//   .then(resp => {
//     // console.log(resp.fileHTML, resp.path);
//     return mdFilterLinks(resp.fileHTML, resp.path);
//   })
//   .then(arr =>{
//     console.log(arr);
//     return arr;
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
