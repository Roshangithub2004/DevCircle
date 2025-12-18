const mongoose  =  require('mongoose');
const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://roshan_dev_cirvle:Roshan06DevCircle@cluster1.nd8hegi.mongodb.net/DevCircle');
}

module.exports = connectDB