const express = require('express')
const bountiesRouter = express.Router()
const bountyList = require('../models/bountyList.js')

///this is where i will do all my requests for the back-end

//1.get all 
bountiesRouter.get("/", (req,res) => {
    bountyList.find( (err, hunters) => {
        if(err){
            res.status(500)
        }
        return res.status(200).send(hunters)
    })
})

//2. get one 
bountiesRouter.get("/", (req, res) => {
    bountyList.findOne({_id: req.params._id}, (err, hunters) => {
        if(err){
            res.status(500)
        }
        return res.status(200).send(hunters)
    })
})


// exporting line 

module.exports = bountiesRouter