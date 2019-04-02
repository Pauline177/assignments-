const express = require('express')
const app = express()

require('dotenv').config()

const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 4000

////middleware
app.use(express.json())
app.use(morgan('dev'))

////connection to DB
mongoose.connect('mongodb://localhost:27017/wherework', {useNewUrlParser: true}, () => {
    console.log("->>> better be connected to DB")
})

////check if  JWt matches our SECRET in env,, check point
app.use("/api", expressJwt({secret: process.env.SECRET}))

///routes
app.use("/adminauth", require('./routes/adminRoutes.js'))
app.use("/api/places", require('./routes/placesRoutes.js'))


//// error handling
app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "Unauthorized error"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


///Server setup
app.listen(PORT, () => {
    console.log(`->>>> running on ${PORT}`)
})
