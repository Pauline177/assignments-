import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

class App extends Component{
    render(){
        return (
            <div>
                <Switch>
                    <Route path="Home" render={routerProps => <Home {...routerProps} /> } />
    
                </Switch>
            </div>
        )
    }
}


export default App