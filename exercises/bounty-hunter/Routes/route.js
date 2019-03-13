const express = require('express')
const userRouter = express.Router()
const uuid = require('uuid/v4')

const bountyHunters = [
    {
        first: "Shade",
        last: "Charm",
        living: true,
        bountyAmount: 20,
        type:"Sith",
        _id: uuid(),
    },
    {
        first: "Nettle",
        last: "Umbra",
        living: false,
        bountyAmount: 40,
        type:"Jedi",
        _id: uuid(),
    },
    {
        first: "Scratch",
        last: "Misery",
        living: true,
        bountyAmount: 100,
        type:"Jedi",
        _id: uuid(),
    },
    {
        first: "Critter",
        last: "Maiden",
        living: true,
        bountyAmount: 1,
        type:"Sith",
        _id: uuid(),
    },
]
//we put together requests that has the same endpoints. 
// no id 

userRouter.route("/")
    .get((req, res) => {
        res.send(bountyHunters)
    })
    .post()


userRouter.route("/:_id")
    .get()
    .delete()
    .put()



module.exports = userRouter