import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import UserPovider from './context/UserProvider'



ReactDOM.render(
    <BrowserRouter>
        <UserPovider>
            <App />
        </UserPovider>
    </BrowserRouter>, document.getElementById('root'))