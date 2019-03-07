import React from 'react'
import Make from './Make.js'

const Makes = (props) => {
  const {makes} = props
    const mappedMakes = makes.map((make, i) => <Make {...make} key={i}/>)
    const cutMakes1 = mappedMakes.splice(0,10)
    const cutMakes2 = mappedMakes.splice(20, 18)
    const cutMakes = cutMakes1.concat(cutMakes2)
   
    console.log(cutMakes)
    return (
        <div>
            {cutMakes}
        </div>
    )
}
export default Makes 