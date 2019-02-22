import React from 'react'

function Pet (props){
    return (
        <div>
            <h5> {props.petsName} which is a {props.petsBreed} </h5>
        </div>
    )
}

export default Pet