import React from 'react'
import Container from './Container.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            box1: "pink",
            box2: "violet",
            box3: "yellow",
            box4: "orange",

        }
    }
    handleBack = () => {
        this.setState({
            box1: "pink",
            box2: "violet",
            box3: "yellow",
            box4: "orange",
            radius1: 10,
            radius2: 10,
            radius3: 50,
            radius4: 50,
        })
    }

    handleAll = () => {
        this.setState(prevState => {
            return {
                box1: prevState.box1 === "black" ? "white" : "black",
                box2: prevState.box2 === "black" ? "white" : "black",
                box3: prevState.box3 === "black" ? "white" : "black",
                box4: prevState.box4 === "black" ? "white" : "black",
                
            }
        })
    }
    handleTop = () => {
        this.setState({
            box1: "purple",
            box2: "purple",
        })
    }

    handleBottomLeft = () => {
        this.setState({
            box3: "limegreen"
        })
    }
    
    handleBottomRight = () => {
        this.setState({
            box4: "teal"
        })
    }

    handleRadius = () => {
        this.setState(prevState => {
            return {
            radius1: prevState.radius1 === 50 ? 5 : 50,
            radius2: prevState.radius2 === 50 ? 5 : 50,
            radius3: prevState.radius3 === 50 ? 5 : 50,
            radius4: prevState.radius4 === 50 ? 5 : 50,
            }
        })
    }
    
    render() {
        return (
            <div>
                <Container make={this.state}/>
                <div className="buttons">
                    <button onClick={this.handleAll}>click to change black or white</button>
                    <button onClick={this.handleTop}>click to change top boxes</button>
                    <button onClick={this.handleBottomLeft}>click to change bottom left box</button>
                    <button onClick={this.handleBottomRight}>click to change bottom right box</button>
                    <button onClick={this.handleRadius}>click to change size</button>
                    <button onClick={this.handleBack}>initial colors</button>
                </div>
            </div>
        )
    }
}

export default App