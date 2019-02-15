// const owner = { 
//             name: "John",
//             age: 101,
//             pets: ["cat", "dog"],
//             petObjects: []
//     }

// console.log(`this is ${owner.name}, i am ${owner.age} years old, i have a ${owner.pets[0]} and a ${owner.pets[1]}`)

/////// re-write using .map//////


////////////////// TASK 2 ///////////////
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return !!person.friendly
//     })
// }

const friends = people.filter( function(who){
    if (people[1].friendly === true){
        return people[0].name
    }
})
console.log(friends)




/////////// TASK 3 /////////////////
// function doMathSum(a, b) {
//     return a + b
// }

// const add = (a,b) => a + b
// console.log(add(2,4))

// var produceProduct = function(a, b) {
//     return a * b
// }

// const multiply = (a,b) => a * b
// console.log(multiply(5,6))


///////////// TASK 4 /////////////////
const person = {
    firstName: "Kat",
    lastName: "Doe",
    age: 40
}
// const person = (firstName = "Jane", lastName = "Doe", age = 100) => 
// `${person.firstName} this is ${}`

//console.log(`hey ${person.firstName}, how does it feel to be ${person.age}?`)


////////////// TASK 5///////////////////
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 }