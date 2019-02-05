 //var readline = require("readline-sync")
// var name = readline.question("what is my name ?")

// console.log("hello " + name)

// var answer = readline.keyInYNStrict("do you like me ?")
// console.log(answer)

// var animals = [ "buffalo", "sheep", "bird"]
// var favAnimal = readline.keyInSelect( animals, "what is your favorite animal?")
// console.log(favAnimal)

var say = require("readline-sync")
var ask = say.keyInYNStrict(" would like to add?")
console.log(ask)

var numbers = 