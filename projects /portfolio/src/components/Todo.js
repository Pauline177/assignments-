import React from 'react'
import todo from './todoRecording.mov'
const Todo = () => {

    return(
        <div className="window">

        <video autoPlay="true" loop  >
                <source src={todo} type="video/mp4" />
            </video>
        </div>
    )
}

export default  Todo