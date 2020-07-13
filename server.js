const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const product = require("./models/products");

//load the environment variable file
require('dotenv').config({path:"./sendgrid.env"});
const app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));


app.get("/", (req, res)=>{


    res.render("home" ,{
        title: "Home",
        info: product.getFeaturedProducts()
    });
});

app.get("/new", (req, res) =>{
    res.render("new", {
        title: "New page",
        data: product.getFeaturedProducts()
    })
});

app.get("/productListing",(req,res)=>{
    

    res.render("productListing",{
        title : "Product Listing Page",
        data : product.getAllProducts()
    })

});

app.get("/login", (req,res)=>{

    res.render("login",{
        title:"Login page",
        

    })
});
app.get("/signUp", (req,res)=>{

    res.render("signUp",{
        title:"Create account",
        

    })
});

//load controlloers

// const generalController = require("./controllers/general");
// //map each controller to the app object

// app.use("/signUp",generalController);


// web server
const PORT = 3000;
app.listen (PORT, ()=>{

    console.log("The webserver is up and running.");
})