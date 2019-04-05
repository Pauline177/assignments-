import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withAdmin } from './context/adminProvider.js'
import Home from './components/Home.js'
import Places from './components/Places.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
import './style.css'
import ImageUpload from './components/ImageUpload.jsx';

class App extends Component {
    render() {
        const { token } = this.props
        return (
            <div>
                <ImageUpload />
                <Switch>
                    <Route exact path="/login"
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