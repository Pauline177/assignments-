const express = require('express')
const uuid = require('uuid/v4')
const app = express()

// make up the data
let todos = [
    {
        name: "dance",
        description: "zumba",
        imageUrl: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        completed: "false",
        _id: uuid()
    },
    {
        name: "meal prep",
        description: "shrimps fried rice",
        imageUrl: "https://images.unsplash.com/photo-1536643042380-9b4302726309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        completed: "false",
        _id: uuid()
    },
    {
        name: "sleep",
        description: "8 hours ",
        imageUrl: "https://images.unsplash.com/photo-1495546200065-d92a90266a1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        completed: "false",
        _id: uuid()
    },

]
//!!! must have line if we are you to use the post request. 
app.use(express.json())

//1. get all 
app.get("/todos", (req, res) => {
    console.log('get route was hit')
    res.send(todos)
})


app.get('/todos/:_id', (req, res) => {
    const ID = req.params._id
    const findTodo = todos.find(todo => todo._id === ID)
    res.send(findTodo)
})
 //2. post 
app.post('todos', (req, res) => {
    req.body._id = uuid()
    people.push(req.body)
    res.send(req.body)
})

//3. delete 
app.delete("/todos/:_id", (req, res) => {
    const newTodo = todos.filter(todo => todo._id !== req.params._id)
    todos = newTodo
    res.send(todos)
})

//4. put 
app.put("/todos/:_id", (req, res) => {
    const findTodo = todos.find(todo => todo._id === ID)

    Object.assign(findTodo, req.body)
    res.send(findTodo)
})

app.listen(5000, () => {
    console.log("the run is on")
})
