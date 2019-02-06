 //var readline = require("readline-sync")
// var name = readline.question("what is my name ?")

// console.log("hello " + name)

// var answer = readline.keyInYNStrict("do you like me ?")
// console.log(answer)

// var animals = [ "buffalo", "sheep", "bird"]
// var favAnimal = readline.keyInSelect( animals, "what is your favorite animal?")
// console.log(favAnimal)

// var say = require("readline-sync")
// var ask = say.keyInYNStrict(" would like to add?")
// console.log(ask)

// var numbers = 

var ask = require('readline-sync')
var name = ask.question("what is your name?")

console.log("hello " + name+ ", how are you?")

var options = ["put hand in hole", "find the key", "open door"]
var gameOver = false 


//game loop
while(!gameOver){
    var userChoice = ask.keyInSelect(options, "what would you like to do?")
    if (userChoice === 0){
        console.log("you put your hand in the hole, and a beer ate you. RIP")
        break
    } else if (userChoice === 1){
        console.log(" you found the key, now open the door")
        
    } else if (userChoice === -1){
        console.log("canceling is not an option")
        
    }else {
        console.log(" goog job " + name + " you opened the door, now you can get out, you win the game.")
        break 
    }
}