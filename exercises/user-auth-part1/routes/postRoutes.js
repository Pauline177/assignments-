const express = require('express')
const postRouter  = express.Router()
const Post = require('../models/post.js')

////// adding a new post 
postRouter.post("/", (req, res, next) => {
    const newPost = new Post(req.body)
    newPost.user = req.user._id
    newPost.save((err, newPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newPost)
    })
})

////getting all the posts
postRouter.get("/", (req, res, next) => {
    Post.find({user: req.user._id}, (err, userPosts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userPosts)
    })
})


module.exports = postRouter