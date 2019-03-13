import React, {Component} from 'react'
import Model from './Model.js'
import {Link} from 'react-router-dom'
import {withCar} from '../context/CarProvider.js'

class Models extends Component  {
    constructor(){
        super()
        this.state ={
            
        }
    
    }

componentDidMount(){
    console.log(this.props)
    this.props.getAllModels(this.props.year, this.props.carMake)
} 

    render (){
        console.log(this.props)
        const {models} =  this.props
       const mappedModels = models ? models.map((model, i)=> <Model {...model} key={i}/>) : <div> <div className="spinner"> </div> <p>Page is loading..., please re-enter your information if it takes more than 5 secs. </p></div>

        // models.length > 0 ? mappedModels = models.map((model, i)=> <Model {...model} key={i}/>) : null
        
        return (
        <div> 
            <Link to="/Makes"> <h4>Back</h4> </Link>
            <div className="models"> 
            {mappedModels}
            </div>
            
            <Link to='/Results' className="to-results-link">See Results ->>> </Link>
        </div>
    )
    }
} 
export default withCar(Models)