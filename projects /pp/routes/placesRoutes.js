const express = require('express')
const placesRouter = express.Router()
const Place = require('../models/place.js')

placesRouter.post("/", (req, res, next) => {
    const newPlace = new Place(req.body)
    // newPlace.admin = req.admin._id
    newPlace.save((err, newPlace) => {
        if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(newPlace)
    })
})

placesRouter.get("/", (req, res, next) => {
    Place.find((err, adminPlaces) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(adminPlaces)
    })
})

placesRouter.delete("/:_id", (req, res, next) => {
    Place.findByIdAndRemove({_id: req.params._id, admin: req.admin._id,}, req.body,(err, place) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("vacinity deleted")
    })
    
})

module.exports = placesRouter