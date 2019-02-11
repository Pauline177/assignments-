var word = "bookkeeper larry"
 //1. 
// function unique(str) {
//     var result = '';
//     for(var i = 0; i < str.length; i++) {
//       if(result.indexOf(str[i]) < 0) {
//         result += str[i];
//       }
//     }
//     return result;
//   }
  
//   console.log(
//     unique("bookkeeper larry"),
    
//   );


//2. method splits the string into an array for every character and removes any duplicates. 

var unique = [ ...new Set(word)];
 //console.log(unique);

console.log(unique.join(''))