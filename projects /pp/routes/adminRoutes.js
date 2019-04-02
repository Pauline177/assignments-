const express = require('express')
const Admin = require('../models/admin.js')
const jwt = require('jsonwebtoken')
const adminRouter = express.Router()

adminRouter.post("/signup", (req, res, next) => {
    Admin.findOne({adminname: req.body.adminname.toLowerCase()}, (err, admin) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(admin){
                res.status(400)
                return next(new Error ("adminname taken, please choose a different one"))
            }

            const newAdmin = new Admin(req.body)
            newAdmin.save((err, savedAdmin) => {
                if(err){
                    res.status(500)
                    return next(err)
                }

                const token = jwt.sign(savedAdmin.toObject(), process.env.SECRET)
                return res.status(201).send({admin: savedAdmin.toObject(), token})
            })
    })
})


adminRouter.post("/login", (req, res, next) => {
    Admin.findOne({adminname: req.body.adminname.toLowerCase()}, (err, admin) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!admin){
            res.status(403)
            return next(new Error("adminname not found"))
        }
        admin.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!isMatch){
                res.status(401)
                return next(new Error("password does not match"))
            }
            const token = jwt.sign(admin.toObject(), process.env.SECRET)
            return res.status(200).send({admin: admin.toObject(), token})
        })
    })
})



module.exports = adminRouter