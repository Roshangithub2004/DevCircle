const express  = require('express');
const connectDB  = require('./config/database.js');
const app = express();
const User = require("./models/user.js")


app.post('/signUp', async(req, res) =>{
    const user = new User({ 
        fullName:'Roshan Shirbhate',
        email: 'roshanshirbhate654@gmail.com',
        password: 'Roshan@2004'
    })

    try{
        await user.save()
        res.send('User added Successfully')
    } catch(err){
        res.status(400).send("Something is Invalid", err)
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