

const mongoose = require("mongoose")


const contactUsSchema = new mongoose.Schema({
    yourName : { type:String, required: true},
    email : {type:String, required: true},
    message: {type:String,required: true}
})


const model = mongoose.model(`contactUs`, contactUsSchema)
module.exports = model