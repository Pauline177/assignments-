var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"]
//1. return the array as a string, join. 
// function strLyrics(){
    
//     var newJoined = lyrics.join(" ")
//     return newJoined
// }
// console.log(strLyrics(lyrics))


// 2. return the array reversed and joined, join and reverse. 
// function revLyrics () {
//     var newReversed = lyrics.reverse().join(" ")
//     return newReversed
// }
// console.log(revLyrics(lyrics))


//3. print every other word in the array. 
function skip() {
   var newLyrics = lyrics.filter((x,i) => i % 2 === 0)
   return newLyrics 
}
console.log(skip(lyrics))

