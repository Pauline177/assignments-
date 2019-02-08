// //1. return an array of numbers > than 5 
// function fiveAndGreaterOnly(arr) {
//     var greaterThanFive = []
//     for (var i=0; i < arr.length; i++){
//         if (arr[i] > 5){
//             greaterThanFive.push(arr[i])
//         }
//     }  return greaterThanFive
//   }
//   // test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// //2. return an array of even numbers only
// function evensOnly(arr) {
//     var evenNum = []
//     for( var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 ===0){
//             evenNum.push(arr[i])
//         }

//     } return evenNum
//   }
//   // test
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  //3. return those that are 5 characters or fewer, using for loops
//   function fiveCharactersOrFewerOnly(arr) {
//       var char = []
//     for( var i = 0; i < arr.length; i++){
//         char.push(arr[i].split(""))
//     } //console.log(char)

//         var final = []
//     for( var i = 0; i < char.length; i++){
//         if ( char[i].length <= 5){
//             final.push(char[i])
//         }
//     } //console.log(final)
//     for (var i = 0; i < final.length; i++)
//     console.log(final[i].join(""))
// }   

//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]))


//3. using the filter 
function fiveCharactersOrFewerOnly(arr) {
    // your code here
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]