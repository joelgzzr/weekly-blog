import React from 'react'

const Home = ({ initialData }) => {
    return (
        <h1>
            Hello { initialData.name }!
        </h1>
    )
}

export default {
    component: Home
}