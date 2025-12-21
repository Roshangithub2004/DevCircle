const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {
        type:String,
        require: true,
        minLength:2,
        maxLength:50,
    },
    lastName: {
        type:String,
        require: true,
        minLength:4,
        maxLength:50,
        
          
    },
    email: {
        type:String,
        require: true,
        unique: true,
        lowercase:true,
        trim:true
    },
    password: {
        type:String,
        require: true
    },
    age:{
        type:String,
        min:18
    },
    gender : {
        type:String,
        validate(value){   
            if (!['male', 'female', 'others'].includes(value)){
                throw new Error("Gender is not valid")
            }
        }
    },
      
    photoUrl:{
        type: "String",
        default: "/Images/dummyPhoto"
    },
    about:{
        type: String,
        default : "Hi, I am a Web Developer"
    },
    skill:{
        type:[String]
    }

},{timestamps: true})

const User = mongoose.model("User", userSchema)
module.exports = User
