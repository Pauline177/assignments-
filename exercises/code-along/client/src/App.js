import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withUser } from './context/UserProvider.js'
import AuthContainer from './components/auth/AuthContainer.js'
import Home from './components/Home.js'
import ProtectedRoute from './shared/ProtectedRoute.js'

const App = props => {
    const { user, token, logout } = props
    return (
        <div>
            {token && <button onClick={logout}> Logout</button>}
            <Switch>
                <Route exact path="/" render={() => token ? <Redirect to="/home" /> : <Redirect to="/login" /> } />
                <Route
                    path="/login"
                    render={rProps => token ? <Redirect to="/home"/> : <AuthContainer {...rProps} />} />
                <ProtectedRoute 
                    token={token}
                    path="/home"
                    redirectTo="/login"
                    component={Home} 
                    username={user.username}
                    logout={logout}/>
            </Switch>
        </div>
    )
}

export default withUser(App) 