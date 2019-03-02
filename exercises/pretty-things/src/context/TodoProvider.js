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

    render(){
        return (
            <TodoContext.Provider value={{
                todos: this.state.todos,
                getTodos: this.getTodos,
                addTodo: this.addTodo,

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