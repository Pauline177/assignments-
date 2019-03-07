import React from 'react'
import Model from './Model.js'

const Models = (props) => {
    const {models} =  props

    const mappedModels = models.map((model, i)=> <Model {...model} key={i}/>)
    
    return (
        
        <div>
            {mappedModels}
        </div>
    )
}
export default Models 