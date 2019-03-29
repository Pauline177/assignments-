const express = require('express')
const app = express()
require('dotenv').config

const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 5000

///middleware
app.use(express.json())  
app.use(morgan('dev'))

/// connect to DB
mongoose.connect("mongodb://localhost27017/raddish", {useNewUrlParser: true}, () => {
    console.log("->>>> connected to the DB")
})

///routes


////error handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


///server listen
app.listen(PORT, () => {
    console.log(`->>>> server is running on ${PORT}`)
})