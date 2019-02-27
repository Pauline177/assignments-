import React from 'react'

const Hero = props =>{
    const styleObj = {
        backgroundImage: `url(${props.image})`,
        height: 300,
        color: "limegreen",
        backgroundSize: "cover",
        fontSize: 40
    }
    
        return (
            <div style={styleObj} onClick= {() => props.handleClick(props.phrase)}>
                <h1>{props.name}</h1>
            </div>
        )
    
}

export default Hero