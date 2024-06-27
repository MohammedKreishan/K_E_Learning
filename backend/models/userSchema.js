

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    firstName : { type:String, required: true},
    role : {type: mongoose.Schema.Types.ObjectId, ref: "role"},
    lastName : {type:String},
    age : {type: Number},
    country : {type:String},
    email : {type:String, unique:true, required: true},
    password: {type:String, required:true},
    profilePicture : {type:String},
    dateOfRegestration: {type:String}
})

userSchema.pre("save", async function () {
    this.email = this.email.toLowerCase();
    this.password = await bcrypt.hash(this.password, 10);
  });

const model = mongoose.model(`user`, userSchema)
module.exports = model