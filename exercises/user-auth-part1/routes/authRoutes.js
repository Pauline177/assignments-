const express = require('express')
const User = require('../models/user.js')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')


authRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        /////checking if the user already exist 
        if(err){
            res.send.status(500)
            return next(err)
        }
        //// if they already exist then 
        if (user){
            res.status(400)
            return next( new Error ("that username has already been taken choose a different one"))
        }
        /// if they don't create a new one 
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            ///// the part fro here is want i don't get 
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({user: savedUser.toObject(), token})
        })

    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        ///// if the user does not exist or you have used the worng password
        if(!user || user.password !== req.body.password){
            res.status(403)
            return next(new Error("Username or password entered is incorrect"))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({user: user.toObject(), token})
    })
})


module.exports = authRouter