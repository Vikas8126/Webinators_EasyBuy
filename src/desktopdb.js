const mongoose = require("mongoose")
mongoose.connect(
    `mongodb://localhost:27017/EasyBuyData`,).then(()=>{
    }).catch(()=>{
        console.log("connection error")
    })

const DesktopSchema = new mongoose.Schema({
    id : {
        type: Number,
        required: true,
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
        type:Array
    }
});

const desktops = new mongoose.model("desktops", DesktopSchema);
module.exports = desktops;
