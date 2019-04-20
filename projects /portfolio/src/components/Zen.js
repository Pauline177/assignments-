import React from 'react'
import zen from './zenrecording.mov'

const Zen = () => {

    return (
        <div className="window">
            <video autoPlay="true" loop  >
                <source src={zen} type="video/mp4" />
            </video>
            <div>
                <p>
                    ZenGardern is a front-end site that i built using html and css
                </p>
            </div>
        </div>
    )
}

export default Zen