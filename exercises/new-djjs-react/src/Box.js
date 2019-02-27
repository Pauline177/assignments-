import React from 'react'


const Box = props => {

    const boxStyling = {
        width: 100,
        height: 100,
        borderRadius: `${props.boxChange}%`,
        backgroundColor: props.colorChange,
        border: '2px solid black',
    }

    return (
            <div style={boxStyling}>Box</div>
                
    )
}
export default Box