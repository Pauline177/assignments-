import React, { Component } from 'react'
import AddTodoForm from './AddTodoForm.js'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl,
            isToggled: false
        }
    }
    toggler = (props) => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled,
        }))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
            const changes = {
                title: this.state.title,
                description: this.state.description,
                imgUrl: this.state.imgUrl,
            }
            this.props.handleEdit(this.props._id, changes)
            this.toggler()
    }




    render() {
        const { title, description, imgUrl, handleDelete, _id } = this.props
        return (
            <div>
                {!this.state.isToggled ?
                    <div className="todoBox">
                        <button onClick={this.toggler}>Edit your todo</button>
                        <div>
                            <h1>{title} </h1>
                            <h3>{description}</h3>
                        </div>
                        <img className="image" src={imgUrl} alt="various content" />
                        <button onClick={() => handleDelete(_id)}>Delete</button>
                    </div> :
                    <div className="edit-todoBox">
                        <AddTodoForm 
                        {...this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        text="Submit your Edits"
                        />
                        <button onClick={this.toggler} style={{backgroundColor: "red"}}>X</button>
                    </div>}
            </div>

        )
    }
}

export default Todo