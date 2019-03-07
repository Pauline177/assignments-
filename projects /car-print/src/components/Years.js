import React from 'react'


const Years = (props) => {
    return (
        
        <div>
        Year:  <input type="number" name="years" onChange={props.handleChange}/>
        </div>
    )
}
export default Years 