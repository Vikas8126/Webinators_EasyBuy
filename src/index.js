const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const hbs = require("hbs");
const templateView = path.join(__dirname,'../views')
app.use(express.json());
app.set("view engine","hbs");
let alert = require("alert");
let localStorage = require("localStorage");
const collection = require('./userdb');
const laptops = require('./laptopdb')
const desktops = require('./desktopdb')
const carts = require('./cartdb')
const async = require("hbs/lib/async");
app.use(express.urlencoded({extended:false}))
// app.use(express.static(path.join(__dirname, "/public")));
const staticpath = path.join(__dirname,"../public")
app.use('/public', express.static(staticpath))


app.get('/',(req, res)=>{
    res.render('home')
})

app.get('/login',(req, res)=>{
    res.render('login')
})

app.get('/signup',(req, res)=>{
    res.render('signup')
})

app.get('/about',(req, res)=>{
    res.render('about')
})

app.get('/contact',(req, res)=>{
    res.render('contact')
})

app.get('/home',(req, res)=>{
    res.render('home')
})

app.get('/profile',async (req,res)=>{
    res.render('profile')
})

app.post('/signup',async(req, res)=>{
    const data ={
        name: req.body.fname + ' ' + req.body.lname,
        email:req.body.email,
        password: req.body.password
    }
    console.log(data)
    const email = req.body.email
    const check = await collection.findOne({email:email})
    if(check){
        alert("User already exsist please try another name")
    }
    else{
        alert("Signup Success! You can login now")
        await collection.insertMany([data])
        res.render('login')
        
    }
})

app.post('/login',async(req, res)=>{
    try {
        const check = await collection.findOne({email:req.body.email})
        if (check.password === req.body.password){
            alert("login Success")
            res.render('home')
        }else{
            alert("login failed! Please try again")
            res.render('login')
        }
    } catch{
        res.send("User Doesnt exists")
    }
})


app.get("/laptop", async (request, response) => {
    try {
        const laptop = await laptops.find({})
        response.render('laptop',{laptop : laptop})
        
    } catch{
        response.send("No Products")
    }
    
});


app.get("/desktop", async (request, response) => {
    try {
        const desktop = await desktops.find({})
        response.render('desktop',{desktop : desktop})
        
    } catch{
        response.send("No Products")
    }
    
});


app.get("/cart", async (request, response) => {
    try {
        const cart = await carts.find({})
        response.render('cart',{cart : cart})
        
    } catch{
        response.send("Cart Is Empty")
    }
    
});


app.post('/cart',async(req, res)=>{
    
    const data ={
        images:req.body.image,
        price:req.body.price,
        title :req.body.title,
        description: req.body.description,
        discountPercentage: req.body.discountPercentage
    }
    await carts.insertMany([data])
})


app.post('/UpdateProfile', async(req, res)=>{
    const data={
        name: req.body.firstName + ' ' + req.body.lastName,
        address: req.body.address,
        city:req.body.city,
        country:req.body.country,
        email:req.body.email,
        postal:req.body.postal,
        password:req.body.password

    }
    const email = req.body.email
    console.log(email)
    const check = await collection.findOne({email:email})
    console.log(check)
    if(check){
        await collection.insertMany([data])
        console.log("rendering profile")
        res.render('profile',{data:data})
        alert("Profile updated successfully")
    }
})


app.delete('/cart',async(req, res)=>{
    await carts.deleteOne({title:req.body.title})
    res.render('cart')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
