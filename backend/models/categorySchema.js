const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    categoryName : { type:String, required: true, unique:true},


})

const model = mongoose.model(`category`, categorySchema)
module.exports = model






