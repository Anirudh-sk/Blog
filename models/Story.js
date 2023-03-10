const mongoose = require('mongoose')

const storyschema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    body:{
        type : String,
        required : true
    },
    status:{
        type : String,
        required : 'public',
        enum:['public', 'private']
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    createdAt:{
        type: Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Story',storyschema)