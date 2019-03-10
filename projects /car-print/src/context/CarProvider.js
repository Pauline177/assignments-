import React, {Component} from 'react'
import axios from 'axios'

const CarContext = React.createContext()

class CarProvider extends Component{
    constructor(){
        super()
        this.state = {
            makes: [],
            models: [],
            year: '',
            miles:'',
            // carMake: "",
        }
    }

    getAllMakes = () => {
        axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes/results/Make_Name?format=json").then(res => {
            this.setState({
                makes: res.data.Results
            }) 
        }).catch(err => console.log(err))
    }

    getAllModels = () => {
        console.log(this.state.carMake)
        console.log(this.state.year)
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${this.state.carMake}/modelyear/${this.state.year}?format=json`).then(res => {
        console.log(res.data)    
        this.setState({
                models: res.data.Results
            })
        }).catch(err => console.log(err))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
            this.setState({
                // year: "",
                // miles: "",
            })
    }

    render(){
        return(
            <CarContext.Provider 
            value={{
                makes: this.state.makes,
                models: this.state.models,
                getAllMakes: this.getAllMakes,
                getAllModels: this.getAllModels,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                year: this.state.year,
                miles: this.state.miles,
                carMake: this.state.carMake,

            }} >
                {this.props.children}
            </CarContext.Provider>
        )
    }
}
 
/// higher order component
export const withCar = C => props => (
    <CarContext.Consumer>
        {value => <C {... props} {...value} /> }
    </CarContext.Consumer>
)

export  default CarProvider