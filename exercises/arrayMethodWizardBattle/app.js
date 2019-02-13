var wizards = [
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
]
//1. using for each to loop through the array and give an item 
 wizards.forEach(function(wizard)
 {
     //console.log(wizard.name)
 }
 )

 //2. using .map to add items to the objects in an array. 
 wizards.map( put => put.isActive = true)
 //console.log(wizards)

//3. make an array of wizards that are neutral good. 
var neutralWizards = []
wizards.forEach(function(wizard){
    if (wizard.alignment === "neutral good"){
        neutralWizards.push(wizard.name)
    }
}
) 
//console.log(neutralWizards)

//4.index of the wizard that is lawful good.

function lawfulGood(wizard){
    return wizard.alignment == "lawful good"
} 
 // console.log(wizards.findIndex(lawfulGood))

 // 5. boolean to check if all wizard are alive 
    function alive(wizard){
        return wizard.isActive === true
    } 
    //console.log(wizards.every(alive))

//6. say of atleast one wizard is neutral good , you write the function that compare the string
    //then console.log thearr.keyword(functionname)
 function oneNeutralGood(wizard){
     return wizard.alignment === "neutral good"
 } 
    //console.log(wizards.some(oneNeutralGood))

//7.Check every "alignment" for every wizard. Kill every "neutral good" wizard. 
    //(Modify every "neutral good" wizard's isAlive property to false.)
    wizards.forEach(function(wizard){
        if (wizard.alignment === "neutral good"){
            wizard.isActive = false
        }
    })
    //console.log(wizards)

//8.Return a Boolean that states whether or not all the wizards are alive.
function allWizards(wizard){
    return  wizard.isActive === true
}
    console.log(wizards.some(allWizards))

//9.Return a Boolean that states whether or not some of the wizards are alive.
// use "every" to check for all and "some" for atleast one. 
//console.log(wizards)