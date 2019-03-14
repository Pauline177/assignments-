const express = require('express')
const app = express() 

//middleware allows us to make the crud requests. 

app.use(express.json())


///this links it to the route page, this needs to be hit first
//to direct it to the next page, 

app.use(require('./Routes/route.js'))

// the is the line that is after the object is create 
// we do a res.send witht the object that wass created then prints that in post. 

app.use((req,res) => {
    // console.log("this is the second line 2 ")
    res.send(req.hunters)
})







app.listen(6400, () => {
    console.log(" it better be running lol ")
})