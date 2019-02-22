import React from 'react'
import Person from './Person.js'
// import Name from './Name.js'

function App() {

    // const students = ["me", "you", "them", "us", "he","she", 10, 33]
    // const arrStundets = students.map((student, i) => <Name name = {student} key={i}/>)

    const person = [
        {
            name: "mike",
            age: 10,
            favColor: "red",
            friends: ["Rick, Morty, Birdman"]
        }
        ,
        {
            name: "miley",
            age: 22,
            favColor: "yellow",
            friends: ["Start, Sky"]
        }
    ]
const arrStundets = person.map((character, i) => 
    <Person name={character.name} 
            age={character.age} 
            friends={character.friends}
            favColor={character.favColor}/>)

    return (
        <div>
            {arrStundets}
        </div>
    )
}

export default App