import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import { Menu, Home, LogIn, Dashboard } from './components';
import { PublicRoute, PrivateRoute } from './components/Routing'

const Routes = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <PublicRoute restricted={false} path="/" exact component={Home}/>
                <PublicRoute restricted={true} path="/login" exact component={LogIn}/>
                <PrivateRoute path="/dashboard" exact component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
