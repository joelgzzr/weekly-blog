import React from 'react'

const Dashboard = () => {
    const logOut = () => {
        sessionStorage.removeItem('auth')
        window.location.reload();
    }

    return (
        <div>
            <h1>WELCOME TO THE DASHBOARD! YOU ARE LOGGED IN</h1>
            <button onClick={logOut}>LogOut!</button>
        </div>
    )
}

export default Dashboard
