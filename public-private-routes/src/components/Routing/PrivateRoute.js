import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../../auth';

const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        <Route {...props} render={ props => (
            // Check if user is authenticated
            isAuth() ? 
                // If user is authenticated we can proceed to
                // render the component passing down the necessary props
                <Component {...props} /> :
                // If user is not authenticated we redirect
                // the user to the login page
                <Redirect to="/login" />
        )} />
    )
}

export default PrivateRoute
