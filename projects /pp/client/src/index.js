import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import AdminProvider from './context/adminProvider.js'


ReactDOM.render(
    <BrowserRouter>
        <AdminProvider>
            <App />
        </AdminProvider>
    </BrowserRouter>, document.getElementById('root'))
