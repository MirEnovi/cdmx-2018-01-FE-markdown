const fs = require('fs');
const MarkdownIt = require('markdown-it'); // to html
const jsdom = require('jsdom'); // to use dom
const {
  JSDOM
} = jsdom;
const fetch = require('node-fetch');
const path = require('path');

const fetchLink = (link, sendFunctionPrin) => {
  // console.log('hola');
  fetch(link)
    .then((res) => {
      const val = `El estatus es: ${res.status}, ${res.statusText}`;
      // console.log(res.status);
      sendFunctionPrin(val);
    })
    .catch(error => console.log('tenemos un error con el fetch'));
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

const readFile = (path, sendFetch) => {
  // console.log(path);
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.log('error');
    } else {
      const md = new MarkdownIt();
      const fileHTML = md.render(data);
      // console.log(fileHTML);
      sendFetch(fileHTML);
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
    for (let i = 0; i < arrayObj.length; i++) {
      const url = arrayObj[i].links;
      // fetchLink(url);
      fetchLink(url, (val) => {
        console.log(`${i + 1} ${url} \n`);
        console.log(`${i + 1} ${arrayObj[i].textContent} \n`);
        console.log(`${i + 1} ${arrayObj[i].path} \n`);  
        console.log(`${i + 1} ${val} \n`); 
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


// funciones recursivas
