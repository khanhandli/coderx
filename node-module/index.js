var Mouse = require('./Mouse.js');
var Cat = require('./Cat.js')


var mickey = new Mouse('black');
var jerry = new Mouse('white');

console.log(mickey);
console.log(jerry)


var tom = new Cat();
tom.eat(mickey);

console.log(tom)