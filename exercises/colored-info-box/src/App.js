import React from 'react'
import Comp from './Comp.js'
import './style.css'


function App(props) {

    const change = {
        display: "grid",
        backgroundColor: "black"
    }
   
    return (
        <div className="change">
            <h1>Exercise</h1>
            <div className="box">
                <Comp style="color1" name="first" number={1} />
                <Comp style="color2" name="second" number={2} />
                <Comp style="color3" name="third" number={3} />
                <Comp style="color4" name="fourth" number={4} />
                <Comp style="color5" name="fifth" number={5} />
                <Comp style="color6" name="sixth" number={6} />
                <Comp style="color7" name="seventh" number={7} />
                <Comp style="color8" name="eighth" number={8} />
                <Comp style="color9" name="nineth" number={9} />
                <Comp style="color10" name="tenth" number={10} />
            </div>
        </div>
    )
}
export default App