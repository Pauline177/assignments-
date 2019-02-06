// //1.the sum 
// function sum (a,b) {
//     return a+b
// }
// var result = sum (20, 25)
// console.log(result)

// //2.largest of the numbers
// function returnLargestOf ( num1, num2, num3, num4, num5) {
//     return Math.max ( num1, num2,num3,num4, num5)
// }
// console.log(returnLargestOf (30,24,90, 900,8474))


//3.if the number is odd or even
 
// let number = 5
// function isEven(number){
   
//     if (number % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }     
// console.log(isEven(number))

//4. retunr it concated or first half.

var mystr = "bonjour, comment tu vas aujourdhui?"
var mid = Math.floor(mystr.length/2)
var left = mystr.slice(0,mid)
function change (mystr){
    if (mystr.length <= 20){
       return (mystr.concat(mystr))
    } else {
        return (left)
    }
}
console.log(change(mystr))


// var name = `Pauline`;
//  console.log(name.toUpperCase(), name.toLowerCase());

// console.log(Math.floor(43.56))

// var mystr = "bonjour, comment tu vas aujourdhui?"
// var middlePoint = Math.floor(mystr.length/2)

//  //console.log(leftside)

// var leftsidetext = mystr.slice(middlePoint, mystr.length);

// console.log(leftsidetext)