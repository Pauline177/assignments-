const express = require('express')
const userRouter = express.Router()
const uuid = require('uuid/v4')

// it needs to be let otherwise the variable will not be over-written
let bountyHunters = [
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


////this line allows the request to add the request to the response. 
// once the line is hit we make the request then when it hit next it 
//sends it to the next line
userRouter.use((req,res,next) => {
    req.hunters = bountyHunters
    next()
})

// userRouter.get("/search", (req, res) => {
//     const {living, bountyAmount} = req.query
//     if(living && bountyAmount) {
//         const foundBounties = bountyHunters.filter(hunter => {
//             if(hunter.living.toString() === living && hunter.bountyAmount <= Number(bountyAmount) ){
//                 return hunter
//             }
//         })  
//         res.send(foundBounties)
//     } else if(living){
//         const foundBounties = bountyHunters.filter( hunter => {
//             if(hunter.living.toString() === living){
//                 return hunter
                
//             } 
//         }) 
//         res.send(foundBounties)
//     }else if(bountyAmount){
//         const foundBounties = bountyHunters.filter(hunter => {
//             if(hunter.bountyAmount <= Number(bountyAmount)){
//                 return hunter
//             }
//         })
//         res.send(foundBounties)
//     } 
// })


// userRouter.route("/")
//     .get((req, res) => {
//         res.send(bountyHunters)
//     })
//     .post((req, res) => {
//         const addedBounty = req.body
//         addedBounty._id = uuid()
//         bountyHunters.push(addedBounty)
//         res.send(addedBounty)
//     })


// userRouter.route("/:_id")
//     .get((req, res) => {
//         const foundBounty = bountyHunters.find(hunter => hunter._id === req.params._id)
//         res.send(foundBounty)
//     })
//     .delete((req, res) => {
//         const removedBounty = bountyHunters.filter(hunter => hunter._id !== req.params._id)
//         bountyHunters = removedBounty
//         res.send(bountyHunters)
//     })
//     .put((req,res) => {
//         const foundBounty = bountyHunters.find(hunter => hunter._id === req.params._id)
//         Object.assign(foundBounty, req.body)
//         res.send(foundBounty)
//     })

module.exports = userRouter