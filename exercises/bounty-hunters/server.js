const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

///the middle ware
app.use(express.json())
app.use(morgan('dev'))

//// coneect to the database
mongoose.connect("mongodb://localhost:27017/bounties", {useNewUrlParser: true}, () => {
    console.log("->>> running the connection to the DB")
})

/////routes 
app.use("/bounties", require('./routes/bountiesRoutes.js'))


///erros 
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg : err.message})
})

//listen 
app.listen(5500, () => {
    console.log("->>> running the regular server")
})