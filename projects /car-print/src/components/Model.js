import React from 'react'

const Model = (props) => {
    const {Model_Name} = props
    return (
        <div className="model-div">
            <input type="radio" value={Model_Name}  name="carModels"/>
            <h4 style={{color: "green"}} >{Model_Name} </h4>
        </div>
    )
}

export default Model