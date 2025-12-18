const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
    fullName: String,
    email: String,
    password: String,
    age: Number,
    gender : String

})

const User = mongoose.model("User", userSchema)
module.exports = User
