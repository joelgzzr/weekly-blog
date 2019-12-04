import React from 'react'
import { Link } from 'react-router-dom'

import { isAuth } from '../auth'

const Menu = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            { !isAuth() && <li><Link to="/login">LogIn</Link></li> }
            { isAuth() && <li><Link to="/dashboard">Dashboard</Link></li>}
        </ul>
    )
}

export default Menu
