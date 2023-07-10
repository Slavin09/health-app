const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();
const mongoose = require("mongoose");
const app = express()
const port = 5000

app.use(express.json());

app.use(cors())
app.use(express.json())

app.post("/register",async (req,res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result)
})

app.get("/form", async(req,res)=>{
    res = await fetch('<UserData/>')
})
app.listen(port,()=>{
    console.log('Connected successfully at http://localhost:'+port)
})
const userSchema = new mongoose.Schema({
    username: String,
    UID : String,
    password : String,
    lastUpdated : String
});
username: {
    type: String
}
wallet_address: {
    type: String,
    required = true
}
const User = mongoose.model('User', userSchema);
const user_data = new User({
    username: "username",
    wallet_address: "address",
});
user_data
    .save()
    .then(
        () => console.log("One entry added"), 
        (err) => console.log(err)
    );