const express = require('express')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

///signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(400)
            return next(new Error ("that username is already taken"))
        }
        const newUser = new User(req.body)
        //// pre-save hook fires, encrypts password and then .save() is executed
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            // create a token
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            //send response
            return res.status(201).send({user: savedUser.withoutPassword(), token})
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        //// if user does not exist
        if(!user){
            res.status(400)
            return next( new Error("username does not exist in our DB"))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!isMatch){
                res.status(401)
                return next(new Error("password does not match the one we have hahha"))
            }
             // create a token
             const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
             //send response
             return res.status(200).send({user: user.withoutPassword(), token})
        })
    })
})

module.exports = authRouter