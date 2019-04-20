import React, {Component} from 'react'
import resume from './resume.png'

// const trigger = <Button>open resume</Button>
class Resume extends Component {
    constructor(){
        super()
        this.state = {
            showPopup: false
        }
    }
    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render(){
        return(
            <div className="window">
                <button onClick={this.togglePopup}> view resume </button>
                {this.state.showPopup ? 
                <div closePopup={this.togglePopup.bind(this)}>
                <img className="resume" src={resume} />
                 </div>
                : null
                }
                
                {/* <a href={pdf} download="">Download resume </a> */}
            </div>
        )
    }
}

export default Resume