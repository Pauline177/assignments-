import React from 'react'

const Home = ({ logout, username }) => {

    return (
        <div>
            <button onClick={logout}> Logout </button>
            HOME PAGE user is: {username}
        </div>
    )
}

export default Home 