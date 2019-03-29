import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {withUser} from '../context/UserProvider.js'
import ErrorBoundary from './ErrorBoundary.js'

const ProtectedRoute = (props) => {
    const {path, redirectTo, Component: Component, ...rest} = props
    return (
        props.token
            ? <Route path={path} render={rProps =>
                <ErrorBoundary>
                    <Component {...rProps} {...rest} />
                </ErrorBoundary>
            } />
            :<Redirect to={redirectTo} />
    )
}

export default withUser(ProtectedRoute )