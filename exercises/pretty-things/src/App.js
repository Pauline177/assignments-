import React, { Component } from 'react'
import AddTodoForm from './components/AddTodoForm.js'
import List from './components/List.js'
import { withTodos } from './context/TodoProvider.js'

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            description: "",
            imgUrl: "",
            todos: [],
        }
    }
    componentDidMount() {
        this.props.getTodos()
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: "",
            description: "",
            imgUrl: "",
        })
    }
    render() {
        return (
            <div>
                <AddTodoForm 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
                title={this.state.title}
                description={this.state.description}
                imgUrl={this.state.imgUrl} 
                text="Save todo"/>
                

                <List todos={this.props.todos} 
                handleDelete={this.props.handleDelete}
                handleEdit={this.props.handleEdit}
                />
            </div>
        )
    }
}


export default withTodos(App);