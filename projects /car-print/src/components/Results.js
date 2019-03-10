import React from 'react'
import { Link } from 'react-router-dom'
import { withCar } from '../context/CarProvider.js'


const Results = (props) => {
    const { year, carMake, miles } = props
    const calculation = miles * 444.35

    return (
        <div>
            <Link to="/Models"> <h4>Back</h4></Link>
            <div>
                <img src={("https://images.unsplash.com/photo-1523939651214-1639cb634cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")} />
            </div>

            <div>Results will show here, this is assuming that all the cars use gasoline and their mp is 20,
                    that is the average per car, wiill include the fuel type and mpg once i get api that does that,
                    but i have not found them for the moment. 
            </div>
            <div>
                driving <b>{miles} mile(s) </b> with a <b>{year}</b> <b>{carMake}</b> emits <b>{calculation}</b> grams of CO2 
            </div>
            <Link to='/Home'> go back to the home page </Link>
            
        </div>
    )
}

export default withCar(Results);