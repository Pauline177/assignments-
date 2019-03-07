import React from 'react'

const Model = (props) => {
    const {Model_Name} = props
    return (
        <div>
            <h4 style={{color: "aqua"}} >{Model_Name} </h4>
        </div>
    )
}

export default Model