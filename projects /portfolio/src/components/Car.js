import React from 'react'
import carPrint from './carRecording.mov'

const Car = () => {
    return (
        <div className="window">

            <video autoPlay="true" loop  >
                <source src={carPrint} type="video/mp4" />
            </video>

        <p>
            about carprint 
        </p>
        </div>
    )
}

export default Car