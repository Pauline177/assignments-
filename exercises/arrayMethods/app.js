var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
fruit.push("2")
vegetables.push("4")
console.log(vegetables.pop())
console.log(vegetables)
console.log(fruit.shift()) 
 console.log(fruit)

var a = fruit.indexOf("orange")
console.log(a)
 
console.log(vegetables.length)

var food = fruit.concat(vegetables)
console.log(food)

var foodSlc = food.slice(4,6)
 console.log(foodSlc)

 console.log(food.reverse())

 var foodStr = food.join()
 console.log(foodStr)

 var foodSpl = foodStr.split(" ", foodStr.length)
 console.log(foodSpl)
