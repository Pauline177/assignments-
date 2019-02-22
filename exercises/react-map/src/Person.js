import React from 'react'
import Friends from './Friends.js'

// name age favColor
function Person(props){

    const eachFriend = props.friends.map((friend, i) => <li> <Friends name={friend} key={i}/></li>)
    return (
        <div style={{backgroundColor: props.favColor}}>
            <h1> Hi my name is {props.name}, and I am {props.age}</h1>
            <h3>these are {props.name} friends:</h3>
            <ul>
                {eachFriend}
            </ul>
        </div>
    )
}



export default Person