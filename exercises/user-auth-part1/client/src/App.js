import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withUser } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import PostsList from './components/PostsList.js'
import ProtectedRoute from './shared/ProtectedRoute.js'


class App extends Component {
    render(){
        const { token, logout } = this.props
        return (
            <div>
                { token && <button onClick={logout}>Logout</button> }
                <Switch>
                    <Route exact path="/" render={rProps => token ? <Redirect to="/posts" /> : <Auth {...rProps}/>}/>
                    <ProtectedRoute path={"/posts" } redirectTo="/" Component={PostsList} />
                    
                </Switch>
            </div>
        )
    }
} 

export default withUser(App)

