const express = require('express')
const publicRouter = express.Router()
const Post = require('../models/post.js')

////get all post  /public sorted by time 
publicRouter.get("/", async(req, res, next) => {
    try{
        const posts = await Post.find().sort({timeStamp: -1})      ///.slice(0,10) get top 10
        return res.status(200).send(posts)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

////get posts by thread
publicRouter.get("/thread/:thread", (req, res, next) => {
    Post.find({thread: req.params.thread}, (err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})



module.exports = publicRouter
