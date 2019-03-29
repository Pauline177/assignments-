const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema ({
    title:{
        type: String,
        required: true
    }, 
    summary:String,
    imgUrl:{
        type: String,
        required: true,
        default: "https://images.unsplash.com/photo-1501199951034-d79a3f2d3039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
    },
    votes:{
        type: Number,
        default: 0
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    thread: {
        type: String,
        enum: ["recipes", "entertainment", "news", "sports", "culture", "science", "celebrity", "awcute", "hobbies", "politics", "music", "weather", "architecture"],
        required: true
    },
    comments:[{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        comment: {
            type: String,
            required: true
        }, 
        timeStamp:{
            type: Date,
            default: Date.now
        }
    }],
    timeStamp: {
        type: Date,
    },
    tags:[{
        type: String,
        default: []
    }]
})


module.exports = mongoose.model("Post", postSchema)