import React from 'react'
import Inputs from './Inputs.js'
import Box from './Box.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            aboutYou: "",
            allInfo: []
            
        }
    }
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault()
       let allInfo =  {
                firstName: this.state.firstName ,
                lastName: this.state.lastName,
                email: this.state.email,
                birthPlace: this.state.birthPlace,
                phone: this.state.phone,
                favFood: this.state.favFood,
                aboutYou: this.state.aboutYou,
            }
            
        this.setState(prevState => ({
            allInfo: [...prevState.allInfo, allInfo],
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            aboutYou: "",
        })
        )

    }

    render() {
        console.log(this.state.allInfo)

        return (
            <div>
                <Inputs firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    birthPlace={this.state.birthPlace}
                    phone={this.state.phone}
                    favFood={this.state.favFood}
                    aboutYou={this.state.aboutYou}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                < Box allInfo={this.state.allInfo}/>
    
            </div>
        )
    }
}


export default App 