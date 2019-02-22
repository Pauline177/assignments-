import React from 'react'
import Friend from './Friend.js'
 
 function FriendsList (props){
    const mappedFriendsList = props.friends.map((friendOf, i) => 
                                                        <Friend 
                                                        name={friendOf.name}
                                                        age={friendOf.age}
                                                        pets={friendOf.pets}
                                                        key={i}/>)
     return (
         <div>
             <h1 style={{backgroundColor: "yellow"}}>My friends's list</h1>
             {mappedFriendsList}

         </div>
     )
 }

 export default FriendsList