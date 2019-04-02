const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlaceSchema = new Schema({
    vacinity:{
        type:String,
        required: true,
    },
    imgUrl: {
        type: String,
    },
    postedAt:{
        type: Date,
        default: Date.now,
        required: true,
    }
})


module.exports = mongoose.model("Place", PlaceSchema)