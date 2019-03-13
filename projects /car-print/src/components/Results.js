import React from 'react'
import { Link } from 'react-router-dom'
import { withCar } from '../context/CarProvider.js'


const Results = (props) => {
    const { year, carMake, miles } = props
    const calculation = miles * 444   

    return (
        <div className="results-body">
            <Link to="/Models"> <h4>Back</h4></Link>
            
            <div className="answer">
                 <b>{calculation}</b> grams of CO2 emited by driving <b>{miles} mile(s) </b> with a <b>{year}</b> <b>{carMake}</b>
            </div>
            <Link to='/Home'className="to-home-link"> Home Page </Link>

            <div>
                Results will show here, this is assuming that all the cars use gasoline and their mp is 20,
                    that is the average per car, wiill include the fuel type and mpg once i get api that does that,
                    but i have not found them for the moment. 
            </div>
            <div className="car">
                <img src={("https://thumbs.gfycat.com/GloomyPoliteHeron-small.gif")} />
            </div>
            
        </div>
    )
}

export default withCar(Results);