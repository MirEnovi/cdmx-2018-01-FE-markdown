const fs = require('fs'); // to read file
const MarkdownIt = require('markdown-it'); // to html
const jsdom = require('jsdom'); // to use dom
const fetch = require('node-fetch'); // to fetch whith node
const path = require('path'); //  working with file and directory paths 
const {
  JSDOM
} = jsdom; // is a pure-JavaScript implementation of many web standards


const fetchLink = (link) => {
  // console.log('hola');
  return new Promise((resolve, reject) => {
    if (!link) {
      reject(`el empleado ${link} no existe`);
    } else {
      fetch(link)
        .then((res) => {
          const val = `El estatus es: ${res.status}, ${res.statusText}`;
          // console.log(res.status);
          resolve(val);
        })
        .catch(error => console.log('tenemos un error con el fetch'));
    }
  });
};

const mdFilterLinks = (fileHTML, path) => {
  return new Promise((resolve, reject) => {
    if (!fileHTML) {
      reject(`tenemos un erro con ${fileHTML}`);
    } else {
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
      return resolve(arr);
    }
  });
};

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(`tenemos un erro con ${path}`);
    } else {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          console.log(`Error en la lectura del archivo: ${err}`);
        } else {
          const md = new MarkdownIt();
          const fileHTML = md.render(data);
          return resolve({ fileHTML, path });
        }
      });
    }
  });
};

const mdConvertDir = (docMd) => {
  return new Promise((resolve, reject) => {
    if (!docMd) {
      reject('Tenemos un error en la funcion mdConvertDir');
    } else {
      const pathQuestion = path.isAbsolute(docMd);
      let pathDir;
      if (pathQuestion) {
        pathDir = file;
      } else {
        pathDir = path.resolve(docMd);
      }
      return resolve(pathDir);
    }
  });
};

// Funcion que llama a todas las demas desde la linea de comandos
// const mdLinks = (docMd) => {
//   return new Promise((resolve, reject) => {
//     if (!docMd) {
//       reject('Tenemos un error en la función mdLinks');
//     } else {
      
//     }
//   });
// };

mdConvertDir('prueba.md')
  .then(pathDir => {
    return readFile(pathDir);
  })
  .then(resp => {
    // console.log(resp.fileHTML, resp.path);
    return mdFilterLinks(resp.fileHTML, resp.path);
  })
  .then(arr =>{
    console.log(arr);
    return arr;
  })
  .catch(err => {
    console.log(err);
  });


// module.exports = {
//   mdLinks
// };
