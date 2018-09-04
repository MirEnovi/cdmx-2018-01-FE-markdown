
const fs = require('fs');
const MarkdownIt = require('markdown-it'); // to html
const jsdom = require('jsdom'); // to use dom
const {
  JSDOM
} = jsdom;
const fetch = require('node-fetch');
const path = require('path');

const fetchLink = (link) => {
  // console.log(link);
  fetch(link)
    .then((res) => {
      // console.log(res.statusText);
      // console.log(`El estatus es: ${res.status}, ${res.statusText}`);
      const status = `El estatus es: ${res.status}, ${res.statusText}`;
      console.log(status);
      return status;
    });
};

const mdFilterLinks = (data, fileA) => {
  const md = new MarkdownIt();
  const fileHTML = md.render(data);
  const dom = new JSDOM(fileHTML);
  let obj = {};
  const arr = [];
  const result = dom.window.document.querySelectorAll('a');
  result.forEach((element) => {
    const links = element.href;
    const textContent = element.textContent;
    obj = {
      links,
      textContent,
      fileA,
    };
    // fetchLink(links);
    arr.push(obj);
  });
  console.log(arr);
  return arr;
};

const readFile = (path, fileA) => {
  // console.log(path);
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.log('error');
    } else {
      // console.log(data);
      mdFilterLinks(data, fileA);
      return data;
    }
  });
};

const mdConvertFile = (file) => {
  const fileB = path.isAbsolute(file);
  let fileA;
  if (fileB) {
    fileA = file;
  } else {
    fileA = path.resolve(file);
  }
  readFile(file, fileA);
  return fileA;
};


const mdLinks = (docMd) => {
  const path = mdConvertFile(docMd);
};


module.exports = {
  // mdFile,
  mdLinks
};




// investigar

// ashban
// marked.lexer

// test true error

// parametro / argumento en funciones

// cuando se usa funcion y arrow funcion

// diferencia entre una ruta absoluta y ruta relativa
// ruta completa o no... seguir investigando  currentworking directory

// readline
// node-fetch

// argumentos de linea decomandos Yargs.

// funciones recursivas
