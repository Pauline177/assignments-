import React from 'react'
import Pet from './Pet.js'

function Friend (props){
const mappedPets = props.pets.map((pet, i) => 
<Pet petsName={pet.name}
     petsBreed={pet.breed}
     key={i}/>)

    return (
        <div>
            <h3> A good friend of mine named {props.name} is {props.age} and owns </h3>
            {mappedPets}
        </div>
    )
}

export default Friend 