import React from 'react'
import Child from './Child.js'

function Comp(props){

    return (
        <div className={props.style} >
            <h3>I am {props.name} my number is {props.number}</h3>
            <Child text="i know i know "/>
        </div>
    )
}
export default Comp