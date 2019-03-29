const express = require ('express')
const app = express()

require('dotenv').config()
const morgan  = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 8000


////middle ware
app.use(express.json())
app.use(morgan('dev'))

////connecting to the DB 
mongoose.connect('mongodb://localhost:27017/user-auth', {"useNewUrlParser": true}, () => {
    console.log("->>>>it is connected to the DB")
})


/////check point, this checks if the jwt is the same as the secret
app.use("/api", expressJwt({secret: process.env.SECRET}))


//// the routes 
app.use("/auth", require('./routes/authRoutes.js'))
app.use("/api/posts", require('./routes/postRoutes.js'))


///// error handling for the server
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError" ){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`->>>>>server is running on port ${PORT}`)
})