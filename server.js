const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const ProductDB = require("./models/products");
const product = require("./models/products");

//load the environment variable file
require('dotenv').config({path:"./sendgrid.env"});
const app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// This is home page
app.get("/", (req, res)=>{


    res.render("home" ,{
        title: "Amazon.ca Home page",
        deals: product.getAllProducts(),
        data: product.getAllProducts()
    })
});

// This is Amazon shopping cart

app.get("/new", (req, res) =>{
    res.render("new", {
        title: "Amazon Shopping cart",
        data: product.getAllProducts()
    })
});

// This calls the product list
app.get("/productListing",(req,res)=>{
    

    res.render("productListing",{
        title : "Amazon Product Listing Page",
        data : product.getAllProducts()
    })
});


// This is login page

app.get("/login", (req,res)=>{

    res.render("login",{
        title:"Amazon Login page",

    })
});

// This is sign-up page
app.get("/signUp", (req,res)=>{

    res.render("signUp",{
        title:"Amazon Create account",
        

    })
});
//Handlebars middlware
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

//MAPs EXPRESS TO ALL OUR  ROUTER OBJECTS
// app.use("/",generalRoutes);
// app.use("/user",userRoutes);
// app.use("/task",taskRoutes);
// app.use("/",(req,res)=>{
//     res.render("general/404");
// });


// load controllers
// const generalController = require("./controllers/general");
// const userController = require("./controllers/user");
// const taskController = require("/controllers/task");


// web server
const PORT = process.env.PORT || 3000;
app.listen (PORT, ()=>{

    console.log("The webserver is up and running.");
})