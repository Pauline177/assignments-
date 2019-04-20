import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {

    return (
        <div className="nav-page">
            <div className="about-contact">
                <Link className="link" to="/"> About Me </Link>
                <Link className="link" to="Contact"> Contact Me</Link>
                <Link className="link" to="Resume"> Resume</Link>


            </div>
            <h3>Projects</h3>
            <div className="links">
                <Link className="link" to="Zen" >Zen garden</Link>
                <Link className="link" to="Car" >CarPrint</Link>
                <Link className="link" to="Park" >ParkU</Link>
                <Link className="link" to="Todo" >TodoList</Link>
                <Link className="link" to="WhereWork" >WhereWork</Link>
            </div>

        </div>
    )
}
export default Navbar 