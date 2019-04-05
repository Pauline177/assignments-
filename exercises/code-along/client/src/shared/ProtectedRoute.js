import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
    const {token, path, redirectTo, logout, component: Component, ...rest} = props


    return (
        token 
        ? <Route path={path} render={rProps => <Component {...rProps} />}  component={Component} />
        : <Redirect to={redirectTo} />
    )
}

export default ProtectedRoute