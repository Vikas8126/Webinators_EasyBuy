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
const collection = require('./mongodb');
const async = require("hbs/lib/async");
app.use(express.urlencoded({extended:false}))
// app.use(express.static(path.join(__dirname, "/public")));
const staticpath = path.join(__dirname,"../public")
app.use('/public', express.static(staticpath))
var products = {}

app.get("/products", async (request, response) => {
    try {
        const products = await Products.find({})
        response.json(products)
        
    } catch{
        res.send("No Products")
    }
    
});




let data = JSON.parse(products)
var container = document.getElementById("container")
container.innerHTML = ''
data.forEach(function (element) {
var cardData = `
                                <div class='product_card'>
                                    <center><img style='width: 80%; height: 140px;' src='${element.images[0]}'>
                                        <h3 id='proName'>${element.title}</h3>
                                        <p style='color: red;''>${element.discountPercentage}% off</p>
                                        <p id='descrip'>${element.description}</p>
                                        <h3>Price: $${element.price}</h3>
                                        <button class='cartButton' onclick='addToCart(${element.title, element.id},"laptops")'>Add to Cart</button>
                                    </center>
                                </div>
                            `
container.innerHTML += cardData
});