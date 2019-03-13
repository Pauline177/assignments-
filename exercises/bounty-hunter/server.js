const express = require('express')
const app = express() 

//middleware allows us to make the crud requests. 
app.use(express.json())

///this links it to the route page
app.use("/bounty", require('./Routes/route.js'))


app.listen(6400, () => {
    console.log("it shoud be running on this port")
})