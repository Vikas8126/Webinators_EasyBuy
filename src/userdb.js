
const mongoose = require("mongoose")
mongoose.connect(
    `mongodb://localhost:27017/EasyBuyData`,).then(()=>{
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
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    postal:{
        type:String
    },
    country:{
        type:String
    },
    totalOrders:{
        type:Number
    },
    age:{
        type:Number
    },
    cart:{
        type: Array
    }
})


const collection = new mongoose.model("collection1", loginSchema);
module.exports = collection;