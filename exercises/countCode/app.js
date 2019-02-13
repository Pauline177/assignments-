//1. function


// function countCode(string) {  
//   var count = 0;
//   for (var i = 0; i < string.length; i++){
//       if (string[i] + string[i+1] + string[i+3] === "coe"){
//           count++
//       }
//   } return count;
// }



//2. ajaax method.
function countCode(string){
    var result = string.match(/co.e/g)
    //return result
    // if you want to get the number instead of the array
    return result.length
}





//Output: 
console.log(countCode("aaacodebbb")) //returns 1
console.log(countCode("codexxcode")) //returns 2
console.log(countCode("cozexxcope")) //returns 2