//node built-in modules
var fs = require('fs');


var text  = fs.readFileSync('./test.txt', {encoding: 'utf8'})

console.log(text);

fs.writeFileSync('./song2.txt', 'I\'m from Lao cai');