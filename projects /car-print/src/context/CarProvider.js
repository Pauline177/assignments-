import React, {Component} from 'react'
import axios from 'axios'

const CarContext = React.createContext()

class CarProvider extends Component{
    constructor(){
        super()
        this.state = {
            makes: [],
            models: [],
        }
    }

    getAllMakes = () => {
        axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes/results/Make_Name?format=json").then(res => {
            this.setState({
                makes: res.data.Results
            }) 
        }).catch(err => console.log(err))
    }


    getMakeBySearch = () => {
        axios.get("")
    }
    getAllModels = (year, carMake) => {
        // console.log(carMake)
        // console.log(year)
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${carMake}/modelyear/${year}?format=json`).then(res => {
        console.log(res.data)    
        this.setState({
                models: res.data.Results
            })
        }).catch(err => console.log(err))
    }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }


    render(){
        return(
            <CarContext.Provider 
            value={{
                makes: this.state.makes,
                models: this.state.models,
                getAllMakes: this.getAllMakes,
                getAllModels: this.getAllModels,
                // handleChange: this.handleChange,
                // year: this.state.year,
                
                // carMake: this.state.carMake,

            }} >
                {this.props.children}
            </CarContext.Provider>
        )
    }
}
 
/// higher order component
export const withCar = C => props => (
    <CarContext.Consumer>
        {value => <C {...props} {...value} /> }
    </CarContext.Consumer>
)

export  default CarProvider