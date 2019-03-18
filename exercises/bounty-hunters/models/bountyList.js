//we do not need express on this page
const mongoose = require('mongoose')
const Schema = mongoose.Schema


///// this is how mongoose enforces rigidity
const bountySchema = new Schema ({
    first:{
        type: String,
        required: true        
    }, 
    last:{
        type: String,
        required: true
    },
    living:{
        type: Boolean,
        required: true
    },
    bountyAmount:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },

})

///exporting line 
module.exports = mongoose.model("bountyList", bountySchema)



