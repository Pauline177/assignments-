import React from 'react'

function Cards (props){
    let styleCard; 
    if (props.time === "Spring"){
      styleCard = {backgroundImage: 'url("https://media.istockphoto.com/photos/trekking-with-the-dog-on-mountains-picture-id940258986")'} 
    } else if(props.time === "Winter"){
        styleCard = {backgroundImage: 'url("https://media.istockphoto.com/photos/snowing-on-jubilee-gardens-in-london-at-dusk-picture-id619639650")'}
    } else if(props.time === "Fall"){
        styleCard = {backgroundImage: 'url("https://media.istockphoto.com/photos/paddling-in-the-wonder-of-nature-in-canada-picture-id623674644")'}
    }else {
        styleCard = {backgroundImage: 'url("https://media.istockphoto.com/photos/golden-gate-bridge-with-recreational-boats-ca-picture-id613039150?s=2048x2048")'}
    }
    
    // let money;
    //   if (props.price <= 500){
    //     money = {color: "blue"}
    // }


    return (
        <div style={styleCard}  className="cards">
            <h1>Place : {props.place}</h1>
            <h2>Price : {props.price}</h2>
            <h2>Season : {props.time}</h2>
        </div>
    )
}

export default Cards