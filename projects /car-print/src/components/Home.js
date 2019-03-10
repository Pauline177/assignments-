import React from 'react'
import { Link } from 'react-router-dom'
import { withCar } from '../context/CarProvider.js'


const Home = (props) => {
    const { handleChange, handleSubmit, year, miles } = props
    return (
        <div className="body-home">

            <div className="header-layer">
                <div className="header-home">
                    <h1> Car Print</h1>
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
                how to use the app:
                <li>year of car and how many miles driven</li>
                <li>click next to choose cars make</li>
                <li> click next to choose the make</li>
                <li> enter miles you plan on driving</li>
                <li> send to see results</li>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    Year:  <input type="number" name="year" value={year} onChange={handleChange} placeholder="XXXX" limit="4" required />
                    miles driven:  <input type="number" name="miles" value={miles} onChange={handleChange} placeholder="000" required />
                    {/* <button > save the year</button> */}
                </form>
                <h1>{year}</h1>
                <h1>{miles}</h1>
            </div>

            <Link to='/Makes' > select your car's Make</Link>

            <div className="footer-home">
                for questions contact me at;
                    <li>phone</li>
                <li>emai</li>
                <li>linked in</li>
            </div>
        </div>
    )
}
export default withCar(Home)