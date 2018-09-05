const fs = require('fs');
const MarkdownIt = require('markdown-it'); // to html
const jsdom = require('jsdom'); // to use dom
const {
  JSDOM
} = jsdom;
const fetch = require('node-fetch');
const path = require('path');

const fetchLink = (link) => {
  // console.log('hola');
  fetch(link)
    .then((res) => {
      const val = `El estatus es: ${res.status}, ${res.statusText}`;
      // console.log(val);
      return val;
    });
};

const mdFilterLinks = (fileHTML, path) => {
  // console.log(data);
  const dom = new JSDOM(fileHTML);
  let obj = {};
  const arr = [];
  const result = dom.window.document.querySelectorAll('a');
  result.forEach((element) => {
    const links = element.href;
    const textContent = element.textContent;
    const validate = fetchLink(links);
    // console.log(validate);
    obj = {
      links,
      textContent,
      path,
      validate
    };
    arr.push(obj);
  });
  // console.log(validate);
  return arr;
};

const readFile = (path, callback) => {
  // console.log(path);
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.log('error');
    } else {
      const md = new MarkdownIt();
      const fileHTML = md.render(data);
      // console.log(fileHTML);
      
      // mdFilterLinks(fileHTML, pathDir);
      callback(fileHTML);
    }
  });
};

const mdConvertFile = (file) => {
  const pathQuestion = path.isAbsolute(file);
  let pathDir;
  if (pathQuestion) {
    pathDir = file;
  } else {
    pathDir = path.resolve(file);
  }
  // readFile(file, pathDir);
  return pathDir;
};

const mdLinks = (docMd) => {
  const pathDir = mdConvertFile(docMd);
  readFile(pathDir, (fileHTML) =>{
    const pepitas = mdFilterLinks(fileHTML, pathDir);
    console.log(pepitas);
  });
  // const arry = mdFilterLinks(fileHTML, pathDir);

  // return new promise((resolve, reject) => {
  //   if (err) reject(err);
  //   else resolve();
  // });
};

module.exports = {
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
