const mongoose = require('mongoose')
const Shema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema ({
    usrname:{
        type: String,
        unique: true,
        lowecase: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }, 
    isAdmin:{
        type: Boolean,
        default: false
    }, 
    userImg: String,
    birthday: Date,
    firstNAme: String,
    lastNAme: String,
    email: String,
    likedPosts: [{
        type: Schema.Types.ObjectId,
        ref: "Post",
        default: []
    }],
    votedFor:[{
        type: Schema.Types.ObjectId,
        ref: "Post",
        default:[]
    }]
})

///// user Auth
///pre-save hook for password ecnryption
userSchema.pre("save", function(next){
    const user = this 
    if(!user.isModofied("password")) return next() 
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

////// checkpassword method
userSchema.methods.checkPassowrd = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        callback(null, isMatch)
    })
}

//// without password method
////deleting the password before we send it to the front-end
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}


module.exports = mongoose.model("User", userSchema)