import React from 'react'
import Box from './Box.js'

const Container = props => {

    

    return (
        <div className="container">
            <Box colorChange={props.make.box1} boxChange={props.make.radius1}/>
            <Box colorChange={props.make.box2} boxChange={props.make.radius2}/>
            <Box colorChange={props.make.box3} boxChange={props.make.radius3}/>
            <Box colorChange={props.make.box4} boxChange={props.make.radius4}/>
        </div>
    )
}
export default Container