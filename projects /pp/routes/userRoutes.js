const express = require('express')
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
const userRouter = express.Router()

userRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
        res.status(500)
        return next(err)
    }
        if(user){
            res.status(400)
            return next(new Error ("username taken, find your own, be creative haha"))
        }

        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }

            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({user: savedUser.toObject(), token})
        })


    })
})

userRouter.post("/login", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error("username not found"))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!isMatch){
                res.status(401)
                return next(new Error("password does not match"))
            }
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(200).send({user: user.toObject(), token})
        })
    })
})



module.exports = userRouter