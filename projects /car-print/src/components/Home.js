import React from 'react'
import { Link } from 'react-router-dom'
import { withCar } from '../context/CarProvider.js'


const Home = (props) => {
    const { handleChange, handleSubmit, year, miles } = props
    return (
        <div className="body-home">

            <div className="header-layer">
                <h1> Car Print</h1>
                <div className="header-home">
                    <img src={("https://images.unsplash.com/photo-1472722886393-f2f51e9deec8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")} />
                </div>
            </div>


            <div className="paragraph">
                <p>
                    About:
                why did i choose this project.
                An average regular passenger car emits about 4.6 metric tons(10k pounds) of CO2 per year.
            according to <a href="https://www.ucsusa.org/clean-vehicles/car-emissions-and-global-warming">UC USA</a>
                    cars and trucks emitted consist of 1/5th of the gas emiison in the United States.
                </p>
                <p>
                    I highly believe that people are able to make a difference when they feel like they can,
                alot of people don't try because they feel like the proboem is already bigger than something they can handleChange
                with car print each individual will have a chance to see how much their cars emits and get suggestions of what they can do
                that can make a difference because it is easy to dumo it on the bigger companies and say that they are the ones that plays the
                bigger role (which is true) but we as drivers can make a difference too.
                </p>
                <p>
                    Car print is the tool that will be able to give the drivers that power.
                </p>
                <p>
                    GO ahead ahead and try it, i hope you like it and will carpool whenever you can
                </p>

            </div>
            <div className="how-to">
                How to use the app:
                <li>year of car and how many miles driven</li>
                <li>click next to choose cars make</li>
                <li> click next to choose the make</li>
                <li> enter miles you plan on driving</li>
                <li> send to see results</li>
            </div>
            <div >
                <form onSubmit={handleSubmit} className="form" >
                    Year:  <input type="number" name="year" value={year} onChange={handleChange} placeholder="XXXX" limit="4" required />
                    <h4>{year}</h4>
                    miles driven:  <input type="number" name="miles" value={miles} onChange={handleChange} placeholder="000" required />
                    <h4>{miles}</h4>
                    <Link className="save-link" to='/Makes' > SAVE  ->>> </Link>
                </form>
            </div>



            <div className="footer-home">
                <div>
                    For questions or comments contact me at:
                    <li>1(385)695-4476</li>
                    <li>uwasepaldy@gmail.com</li>
                    <li> <a href="www.linkedin.com/in/pauline-makoma"> Linked in</a> </li>
                </div>
                <img className="globe" src={("https://cdn-images-1.medium.com/max/1200/1*iB0ZmlTLfj_6h6nNJs4qHw.gif")} />
            </div>



        </div>
    )
}
export default withCar(Home)