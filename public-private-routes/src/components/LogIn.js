import React from 'react'

const LogIn = () => {
    const logIn = () => {
        sessionStorage.setItem('auth', true)
        window.location.reload();
    }

    return (
        <div>
            <h1>WELCOME TO THE LOGIN PAGE!</h1>
            <button onClick={logIn}>LogIn!</button>
        </div>
    )
}

export default LogIn
