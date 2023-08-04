const mongoose = require("mongoose")
mongoose.connect(
    `mongodb://localhost:27017/EasyBuyData`,).then(()=>{
        console.log("mongoDb connected")
    }).catch(()=>{
        console.log("connection error")
    })

const loginSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    }
})


const collection = new mongoose.model("collection1", loginSchema);
module.exports = collection;