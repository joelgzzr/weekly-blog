import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>WELCOME TO HOME! ANYONE HAS ACCESS HERE</h1>
            <h3>If you are not logged in and try to access the "/dashboard" route you will be redirected to login</h3>
            <h3>If you are logged in and try to access the "/login" route you will be redirected to dashboard</h3>
        </div>
    )
}

export default Home
