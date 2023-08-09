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
const collection = require('./userdb');
const product = require('./productdb')
const async = require("hbs/lib/async");
app.use(express.urlencoded({extended:false}))
// app.use(express.static(path.join(__dirname, "/public")));
const staticpath = path.join(__dirname,"../public")
app.use('/public', express.static(staticpath))
var products =[]





app.get('/',(req, res)=>{
    res.render('home')
})


app.get('/login',(req, res)=>{
    res.render('login')
})


app.get('/signup',(req, res)=>{
    res.render('signup')
})

app.get('/cart',(req, res)=>{
    res.render('cart')
})

app.get('/desktop',(req, res)=>{
    res.render('desktop')
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

app.get('/profile',(req, res)=>{
    res.render('profile')
})

app.post('/signup',async(req, res)=>{
    const data ={
        name: req.body.fname + ' ' + req.body.lname,
        password: req.body.password
    }
    console.log(data)
    const name = req.body.fname + ' ' + req.body.lname
    const check = await collection.findOne({name})
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
        const check = await collection.findOne({name:req.body.name})
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
        products = await product.find({})
        response.render('laptop',{products : products})
        
    } catch{
        response.send("No Products")
    }
    
});







app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
