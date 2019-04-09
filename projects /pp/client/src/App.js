import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withAdmin } from './context/adminProvider.js'
import Home from './components/sections/Home.js'
import Places from './components/Places.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
import './style.css'



class App extends Component {
    render() {
        const { token, logout } = this.props
        return (
            <div>
                <Switch>
                    <Route exact path="/"
                        render={routerProps =>
                             <Home {...routerProps} />}
                                />
                    <ProtectedRoute
                        path={"/places"} 
                        redirectTo="/" 
                        component={Places} />

                </Switch>
               
            </div>
        )
    }
}


export default withAdmin(App)