import React, { Component } from 'react'
import Make from './Make.js'
import { Link } from 'react-router-dom'
import { withCar } from '../context/CarProvider.js'
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button'



class Makes extends Component {
    constructor() {
        super()
        this.state = {
            // nameSearch:"",
        }
    }

    render() {
        const { makes, handleChange } = this.props
        const mappedMakes = makes.map((make, i) => <Make handleChange={handleChange} {...make} key={i} />)
        const cutMakes1 = mappedMakes.splice(0, 10)
        const cutMakes2 = mappedMakes.splice(20, 18)
        const cutMakes = cutMakes1.concat(cutMakes2)
        return (
            <div>
                <Link to='/Home'> <h4> Back </h4> </Link>
                <Link to='/Models' className="to-model-link"> Choose Model ->>></Link>

                {/* <form>
                        <input type="text" name="nameSearch" value={this.state.nameSearch} />
                </form> */}
                <div className="allMakes">
                    {cutMakes}
                </div>

                <div>
                    <ScrollUpButton />
                </div>
            </div>
        )
    }
}
export default withCar(Makes) 