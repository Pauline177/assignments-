const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require ('bcrypt')   //// we only need bcrypt for auth

const adminSchema = new Schema ({
    adminname:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }, 
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type:Boolean, 
        default: true,
    }
})

adminSchema.pre("save", function(next){
    /// can also assign this = admin, this would then stand for admin
    if(!this.isModified("password")) return next()
    bcrypt.hash(this.password, 10, (err, hash) => {
        if(err) return next(err)
        this.password = hash
        next()
    })
})

//// function that checks for the password
adminSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        callback(null, isMatch)
    })
}




module.exports = mongoose.model("Admin", adminSchema)