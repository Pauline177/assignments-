import React from 'react'

class Dice extends React.Component {
    constructor() {
    super()
    this.state = {
        number: 1,
        age: 30,
    }
    }


randomNumber = () => {
    const random = Math.floor(Math.random()*5)
    alert(random)
    this.setState({
        number: random
    })
   
    // return {
    //     random
    // }
}


    render(){


    return (
    <div>
        <button onClick={this.randomNumber}>give the random number</button>
    </div>
    )
}
}

export default Dice