const fs = require('fs');
const MarkdownIt = require('markdown-it'); // to html
const jsdom = require('jsdom'); // to use dom
const {
  JSDOM
} = jsdom;
const fetch = require('node-fetch');
// const path = require('path');
// variable de entorno
// console.log(path);

const mdFile = () => {
  fs.readFile('README.md', 'utf8', (err, data) => {
    if (err) {
      console.log('error');
    } else {
      mdLinks(data);
      return data;
    }
  });
};

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

const mdLinks = (data) => {
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
      // stats,
    };
    fetchLink(links);
    arr.push(obj);
  });
  // console.log(arr);
  // console.log(result);
  // console.log(fileHTML);
};

mdFile();


module.exports = {
  mdFile,
  mdLinks
};


// investigar
// const exprReg = new RegExp('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})');
// const result = exprReg.exec(`${fileHTML}`); // gin match
// forEach / retorna arreglo con url, texto que contiene el link y status.

// path absoluta y relativa
// pathExt

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
