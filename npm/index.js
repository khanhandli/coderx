//npm - node package manger 

var readlineSync = require('readline-sync');

// var userName = readlineSync.question('Ten may la gi: ');

// console.log('Hello ' + userName + '!') ;
// 
var languages = [];

var language = readlineSync.question('Ngon ngu cua may la gi: ')

languages.push(language);

console.log(languages)