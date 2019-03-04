import React, {Component} from 'react'
import axios from 'axios'

const TodoContext = React.createContext()

class TodoProvider extends Component{
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }  

getTodos = () => {
    axios.get("https://api.vschool.io/pauline/todo").then(res => {
        this.setState({
            todos: res.data
        })
    }).catch(err => console.log(err))
}

addTodo = (given) => {
    const { title, description, imgUrl} = given
    const newTodo = { title, description, imgUrl}
    axios.post("https://api.vschool.io/pauline/todo", newTodo).then(res => {
        this.setState(prevState => {
            return {
                todos: [res.data, ...prevState.todos]
            }
        })
    }).catch(err => console.log(err))
}

handleDelete = (_id) => {
    axios.delete(`https://api.vschool.io/pauline/todo/${_id}`).then(res => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.filter(todo => todo._id !== _id)
            }
        })
    }).catch(err => console.log(err))
}

handleEdit = (_id, changes) => {
    axios.put(`https://api.vschool.io/pauline/todo/${_id}`, changes).then(res => {
        const changedTodo = res.data
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => todo._id === _id ? changedTodo : todo)
            }
        })
    }).catch(err => console.log(err))
}
    render(){
        return (
            <TodoContext.Provider value={{
                todos: this.state.todos,
                getTodos: this.getTodos,
                addTodo: this.addTodo,
                handleDelete: this.handleDelete,
                handleEdit: this.handleEdit,

            }}>
                {this.props.children}
            </TodoContext.Provider>

        )
    }
}

export const withTodos = C => props => (
    <TodoContext.Consumer>
        {value => < C {...props} {...value}/>}
    </TodoContext.Consumer>
)

export default TodoProvider