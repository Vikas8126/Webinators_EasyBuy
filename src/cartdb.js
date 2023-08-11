const mongoose = require("mongoose")
mongoose.connect(
    `mongodb://localhost:27017/EasyBuyData`,).then(()=>{
    }).catch(()=>{
        console.log("connection error")
    })

const CartSchema = new mongoose.Schema({
    email:{
        type:String
    },
    id : {
        type: Number,
    },
    category: {
        type: String
    },
    title:{
        type: String
    },
    description: {
        type: String
    },
    price : {
        type:Number
    },
    discountPercentage:{
        type:Number
    },
    rating:{
        type:Number
    },
    stock:{
        type:Number
    },
    brand:{
        type:String
    },
    images:{
        type:String
    }
});

const carts = new mongoose.model("carts", CartSchema);
module.exports = carts;
