import React from'react'
import Nav from './Nav.js'
import About from './About.js'
import Products from './Products.js'
import Footer from './Footer.js'



function Home(){
    return (
        <div className="home-container">
            <div className="title">
                <h1>Beets Market</h1>
            </div>
            <Nav/>
            <About/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Home 