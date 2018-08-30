#!/usr/bin/env node
const fs = require('fs');
// const path = require('path');
// console.log(path);

const mdLinks = (callback) => {
  fs.readFile('README.md', 'utf8', (err, data) => {
    if (err) {
      console.log('error');
    } else {
      callback(data);
    }
  });
};

callback = data => console.log(data);
  
mdLinks(callback);

module.exports = {
  mdLinks
};
