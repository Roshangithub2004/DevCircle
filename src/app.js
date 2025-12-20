const express  = require('express');
const connectDB  = require('./config/database.js');
const app = express();
const User = require("./models/user.js")

app.use(express.json())

// app.post('/signUp', async(req, res)=>{
//     console.log(req.body)
// })  

app.post('/signUp', async(req, res) =>{
    const user = new User(req.body)

    try{
        await user.save()
        res.send('User added Successfully')
    } catch(err){
        res.status(400).send("Something is Invalid", err)
    }
    
})

// Get user by email

app.get('/user', async(req, res)=>{
    const userEmail = req.body.email
    try{

        // find one email form database if same emails are there and give oldest or first indexed from database

        // const user = await User.findOne({email: userEmail})
        // if( user.length ===0){
        //     res.status(400).send("User not found")
        // }
        // res.send(user)


        // find users from database with same email ids
        const user = await User.find({email : userEmail})
        if( user.length ===0){
            res.status(400).send("User not found")
        }
        res.send(user)
    }
    catch(err){
        res.status(400).send("Someting went wrong")
    }
})
// Get feed  
app.get('/feed', async(req, res)=>{
    
    try{
        const user = await User.find({})
        res.send(user)
    }
    catch(err){
        res.status(400).send("Someting went wrong")
    }
})


app.delete('/user', async(req, res)=>{
    const userId = req.body.userId
    try{
        const user = await User.findByIdAndDelete(userId)
        if (!user){
            res.status(400).send("User not found")

        }
        res.send("User deleted Successfully")
    }
    catch(err){
        res.status(400).send("Something went wrong")
    }
})


app.patch('/user', async(req, res)=>{
    const userId = req.body.userId
    const data = req.body 
    try{
        await User.findByIdAndUpdate(userId, data)
        res.send("Data Updated Successfully")
    }
    catch(err){
        res.status(400).send("Something went wrong")
    }
})

connectDB()
.then(()=>{
    console.log('Database is created')
    app.listen(3000)
})
.catch((err) =>{
    console.log('Database Connection is failde')
})