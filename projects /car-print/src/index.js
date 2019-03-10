import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import CarProvider from './context/CarProvider.js';




ReactDOM.render(

    <BrowserRouter>
        <CarProvider>
            <App />
        </CarProvider>
    </BrowserRouter>, document.getElementById('root'))