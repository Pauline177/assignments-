var ask = require('readline-sync')
var player = {
    name: "",
    health: 100,
    inventory: []
}

//1. greeting the player

// var name = ask.question('can I have your name?')
// console.log("Are you ready to have some fun? " + name)

//2. asking the player to walk 

// var options = ["enter 'w' if you would like to walk"]
// 

// while(player.health > 0){
// var choice = ask.keyIn(options)
//     if(choice == "w"){
//     console.log("you're now walking ")   
//     break 
// }  else{
//      console.log("you have to choose to walk to continue the game, don't be a lazy one hahaha")
//  }
// }

//3. the algorithm to determine if the player is attacked. 

//  function random() {
//         // a function that will generate a random enemy
//         function randomEnemy(){
//         var enemies = ["lion", "zebra", "buffalo"]
//         var enemy = Math.floor(Math.random() * enemies.length )
//             if (enemy === 0){
//                 return "lion"
//             } else if (enemy === 1){
//                 return "zebra"
//             } else {
//                 return "buffalo"
//             } }//console.log(randomEnemy())

//        // the enemy's name will be stored and if attacked the player will be shown the name of the enemy attacking.     
//     var beingAttacked = Math.floor(Math.random() * 4)
//   if (beingAttacked === 0 || beingAttacked === 1) {
//      return "hey " + name + " you are about to get attacked by a " + randomEnemy()
     
//  } else {
//      return " you're safe, keep chilling fam"
//  } 
// } console.log(random())

//4. when the user is attacked they can choose to run or attack

while(player.health > 0){var runAttack = ["run", "attack"]
var defence = ask.keyInSelect(runAttack, "how would you like to defend yourself?")
    if(defence === 0){
        console.log("you chose to run, that is a smart choice.")
        var power = ["lowest","highest"]
        var runPower = ask.keyInSelect(power, "choose your running power")
        if (runPower === 0){
        console.log("you are running with the lowest power.")
        break
        } else {
            console.log("you are running with the highest power. you gain")
            break
        }
    } else if (defence === 1){
        console.log("yes, fight and show them who is the boss.")
        var attackPower = ["minimum", "maximum"]
        var power = ask.keyInSelect(attackPower, "choose your attacking power")
        if(power === 0){
            console.log("you'are attacking with the minimum power")
            break
        } else{
            console.log("you're attacking with the maximum power")
            break
        }
    } else {
        console.log("quiting is not an option, haha, choose a valid action")
    }
}
