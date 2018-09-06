const fs = require('fs');
const MarkdownIt = require('markdown-it'); // to html
const jsdom = require('jsdom'); // to use dom
const {
  JSDOM
} = jsdom;
const fetch = require('node-fetch');
const path = require('path');

const fetchLink = (link, callbackL) => {
  // console.log('hola');
  fetch(link)
    .then((res) => {
      const val = `El estatus es: ${res.status}, ${res.statusText}`;
      callbackL(val);
    })
    .catch(error => console.log(error));
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
    obj = {
      links,
      textContent,
      path,
    };
    arr.push(obj);
  });
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
  readFile(pathDir, (fileHTML) => {
    const arrayObj = mdFilterLinks(fileHTML, pathDir);
    // console.log(arrayObj);
    for (let i = 0; i < arrayObj.length; i++) {
      const url = arrayObj[i].links;
      fetchLink(url, (val) => {
        console.log(`${i} ${url} \n`);
        console.log(`${i} ${arrayObj[i].textContent} \n`);
        console.log(`${i} ${arrayObj[i].path} \n`);  
        console.log(`${i} ${val} \n`); 
      });
    }
    // return new promise((resolve, reject) => {
    //   if (err)
    //     reject(err);
    //   else
    //     resolve(arrayObj);
    // });
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
