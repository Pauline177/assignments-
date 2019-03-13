import React from 'react'
import {withCar} from '../context/CarProvider.js'

const Make = (props) => {
    const {Make_Name, handleChange } = props
    console.log(props)
    return (
        <div className="make-div">
        <input type="radio" value={Make_Name} name="carMake" onChange={handleChange}/>
        <h3> {Make_Name}</h3>
        </div>
    )
}
export default withCar(Make)