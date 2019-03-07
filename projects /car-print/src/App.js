import React, {Component} from 'react'
import Makes from'./components/Makes.js'
import Models from './components/Models.js'
import axios from 'axios'
import Years from './components/Years.js'

class App extends Component{
    constructor(){
        super()
        this.state = {
            makes: [],
            makeee:"aston martin",
            models: [],
            years: "2015",
            
        } 
    }

    componentDidMount(){
        this.getAllMakes()
        this.getAllModels()
    }
    
    getAllMakes = () => {
        axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes/results/Make_Name?format=json").then(res => {
            this.setState({
                makes: res.data.Results
            }) 
        }).catch(err => console.log(err))
    }
    
    getAllModels = () => {
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${this.state.makeee}/modelyear/${this.state.years}?format=json`).then(res => {
            this.setState({
                models: res.data.Results
            })
        }).catch(err => console.log(err))
    }
    
    render(){
        return (
            <div>
                < Years /> 
                <Makes makes={this.state.makes}/>
                <Models models={this.state.models}/>
            </div>
        )
    }

}

export default App