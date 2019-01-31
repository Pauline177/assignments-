// var machines = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// var results =machines.filter(i => i === "computer").length;
// console.log(results);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  for (var i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){  
      var num = peopleWhoWantToSeeMadMaxFuryRoad[i].age
      //if else statement to determine gender
      //save gender pronoun in a variable
      //
    if ( num >=18){
    //console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
    var sex = peopleWhoWantToSeeMadMaxFuryRoad[i].gender
      if ( sex === " female") {
          console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " she" + " is old enough")
      } else {
          console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " he" + " is old enough")
      }
    }  else   {
    //console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
    var sex = peopleWhoWantToSeeMadMaxFuryRoad[i].gender
      if ( sex === " female") {
          console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " she" + " is old enough")
      } else {
          console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " he" + " is old enough")
      }
    
    } 
}
    
//   var sex = peopleWhoWantToSeeMadMaxFuryRoad[i].gender
//   if ( sex === " female") {
//       console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " she" + " is old enough")
//   } else {
//       console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + " he" + " is old enough")
//   }