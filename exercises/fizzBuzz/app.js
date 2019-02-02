//create the array of numbers. 
var numbers = []
for (var i = 1; i <= 100; i++) {
    // start with fizzbuzz
    if ((i % 3 === 0) && (i % 5 === 0) ){
        numbers.push("fizzBuzz")
        // when it does not match it will go to the next command
    } else if (i % 3 === 0){
        numbers.push("fizz")
    } else if ( i % 5 === 0){
        numbers.push("buzz")
        //no fizzBuzz fizz or buzz it will print the actual value that is left. 
    } else {
        numbers.push(i)
    }

}
console.log("resilts" + numbers)

// figure this other way. 
// var f = ["fizz"]
// var b = ["buzz"]
// var numbers3 = numbers.filter((x,i) => i % 3 === 0 )
// var numbers5 = numbers.filter((x,i) => i % 5 === 0)

// numbers3 = f.slice(0)
// console.log(numbers3)


