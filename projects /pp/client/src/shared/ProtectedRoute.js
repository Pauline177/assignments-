import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {withAdmin} from '../context/adminProvider.js'
import ErrorBoundary from './ErrorBoundary.js'


const ProtectedRoute = (props) => {
    const { path, redirectTo, token,  component: Component, ...rest } = props
    return (
        token
            ? <Route path={path} render={routerProps =>
                <ErrorBoundary>
                    <Component {...routerProps} {...rest} /> 
                </ErrorBoundary>
                } />

            : <Redirect to={redirectTo} />
    )
}

export default withAdmin(ProtectedRoute)