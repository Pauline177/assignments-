// this are the first lines that i need to have for everycode.
        var ask = require('readline-sync')
           
//1. greeting the player

    var name = ask.question('can I have your name?')
    console.log("Are you ready to have some fun? " + name)

    var player = {
        name: name,
        health: 100,
        inventory: []
    }

// //2. asking the player to walk 

    var options = ["enter 'w' if you would like to walk"]

    while (player.health > 10) {
        var choice = ask.keyIn(options, {limit: "w"})
        if (choice == "w") {
            console.log("you're now walking ")
            break
        } else {
            console.log("you have to choose to walk to continue the game, don't be a lazy one hahaha")
        }
    }

    
    //3. the algorithm to determine if the player is attacked. 

    function randomEnemy() {
        var enemies = [{
            enemyName: "lion",
            enemyHealth: 400,
            enemyLocation: "infront of you."
        },
        {
            enemyName: "zebra",
            enemyHealth: 300,
            enemyLocation: "behind you."
        },
        {
            enemyName: "buffalo",
            enemyHealth: 300,
            enemyLocation: "beside you."
        }]

        var enemy = Math.floor(Math.random() * enemies.length)
        if (enemy === 0) {
            return enemies[0]
        } else if (enemy === 1) {
            return enemies[1]
        } else {
            return enemies[2]
        }
    }

      var currentEnemy = randomEnemy()

    function random() {
        // a function that will generate a random enemy
        //console.log(randomEnemy())

        // the enemy's name will be stored and if attacked the player will be shown the name of the enemy attacking.     
        
        var beingAttacked = Math.floor(Math.random() * 4)
        if (beingAttacked === 0 || beingAttacked === 1) {
            console.log("hey " + name + " an enemy has appeared it is a " + currentEnemy.enemyName + " with " + currentEnemy.enemyHealth +
                " health power, and is located " + currentEnemy.enemyLocation)
            return runAndAttack(player.health)

        } else {
            console.log("you're safe, no enemy has appeared yet.keep chilling fam.")
            return runAndAttack(player.health)
        }
    } console.log(random())
    
    
//4. when the user is attacked they can choose to run or attack.
// if running or attacking, player chooses the power they can run or attack with. 

    function runAndAttack(health) {
        while (health > 60) {
            
            var runAttack = ["run", "attack"]
            var defence = ask.keyInSelect(runAttack, "how would you like to defend yourself?")
            if (defence === 0) {
                console.log("you chose to run, that is a smart choice.")
                var power = ["lowest", "highest"]
                var runPower = ask.keyInSelect(power, "choose your running power")
                if (runPower === 0) {
                    console.log("you are running with the lowest power.")
                    return enemyAttack()
                } else {
                    console.log("you are running with the highest power.")
                    return enemyAttack()
                }
            } else if (defence === 1) {
                console.log("yes, fight and show them who is the boss.")
                var attackPower = ["minimum", "maximum"]
                var power = ask.keyInSelect(attackPower, "choose your attacking power")
                if (power === 0) {
                    console.log("you'are attacking with the minimum power")
                    return enemyAttack()
                } else {
                    console.log("you're attacking with the maximum power")
                    return enemyAttack()
                }
            } else {
                console.log("quiting is not an option, haha, choose a valid action")
            }
        }
    }

//5. enemy is going to attack back with random power.
    
    function enemyAttack() {
        console.log("the enemy has came back for big damage this time")
        var damage = Math.floor(Math.random() * 2)
        if (damage === 1) {
            player.health -= 33
            console.log("oohh you have been hurt, you are left with " + player.health + " health.");
            return walkAgain();
              } else {
            
            player.health += 33
            player.inventory.push(currentEnemy.enemyName)
            console.log("nice you have gained the " + currentEnemy.enemyName + " into your inventory and your new health is " + player.health);
            return walkAgain();
        }} //console.log(enemyAttack())
//6. allow player to be able to get their info when they enter print. 
// built in the if statements that will be able to end the game, winning or loosing. 
    function walkAgain() {
        if(player.health < 60){
            return "Game Over"
            
        } else if( player.health > 160){
            return "woohh!! you win the game"
        }
        else {
        var options2 = ["enter 'w' if you would like to walk, or 'print' if you would like to know you status during the game"]
        var choice = ask.keyIn(options2, {limit:"wp"})
        if (choice == "w") {
            console.log("you're now walking ")
            //console.log(player.health);
            return random()
        } else if(choice == "p") {
            console.log(player)
            return random()
        }
        else {
            console.log("you have to choose to walk to continue the game, don't be a lazy one hahaha")
            return random()
        }
    }}