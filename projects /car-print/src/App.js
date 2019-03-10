import React, {Component} from 'react'
import Home from './components/Home.js'
import Makes from'./components/Makes.js'
import Models from './components/Models.js'
import Results from './components/Results'
import { Route, Switch, withRouter} from 'react-router-dom'
import './style.css'
import {withCar} from './context/CarProvider.js'

class App extends Component{
    constructor(){
        super()
        this.state = {
            year: "",
            miles: "",
            carMake: "",
            // makes: [],
            // models: [],
            
        } 
    }

    componentDidMount(){
        this.props.getAllMakes()
        // this.props.getAllModels()
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
            this.setState({
                year: "",
                miles: "",
            })
    }
   
    
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={routerProps => <Home {...routerProps}  /> } />
                    <Route path="/Makes" render={routerProps => <Makes {...routerProps} makes={this.state.makes} getAllMakes={this.getAllMakes}/>} />
                    <Route path="/Models" render={routerProps => <Models {...routerProps} models={this.state.models} />} />
                    <Route path="/Results" render={routerProps => <Results {...routerProps}  />} />
                    <Route path="/Home" render={routerProps => <Home {...routerProps}  />} />
                </Switch>
            </div>
        )
    }

}

export default withCar(withRouter(App))