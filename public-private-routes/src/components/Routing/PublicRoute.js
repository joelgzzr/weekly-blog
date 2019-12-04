import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../../auth';

const PublicRoute = ({ component: Component, restricted, ...props }) => {
    return (
        <Route {...props} render={ props => (
            // Check if route is restricted and user is logged in
            isAuth() && restricted ?
                // If user is logged in and tries to access the restricted route
                // redirect him to his dashboard.
                <Redirect to="/dashboard" /> : 
                // If there is no active user or route is not restricted
                // proceed to render the component passing down necessary props
                <Component {...props} />
        )} />
    )
}

export default PublicRoute;
