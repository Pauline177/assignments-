import React from 'react'
import Todo from './Todo.js'

//mapp through the data then put it in a single card to style
    //how it will apppear h1 or a box or a div

const List = (props) => {

const mappedList = props.todos.map(todo => <Todo {...todo}
             handleDelete={props.handleDelete}
             handleEdit={props.handleEdit}
             key={todo._id}
        />)
    return (
        <div >
            { mappedList }
        </div>
    )
}

export default List 