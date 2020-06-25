const express = require("express");
const exphbs  = require('express-handlebars');

const proudct = require("./models/product");
const product = require("./models/product");

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.static("public"));


app.get("/",(req,res)=>{

    res.render("index",{
        title : "Home Page"
        info: product.getFeaturedProducts()
    })

});


app.get("/productListing.handlebars",(req,res)=>{
    

    res.render("productListing",{
        title : "Product Listing Page",
        data : product.getFeaturedProducts()
    })

});

app.get("/login", (req,res)=>{

    res.render("login",{
        title:"Login page",
        

    })
})
app.get("/signUp", (req,res)=>{

    res.render("signUp",{
        title:"Create account",
        

    })
})


const PORT = 3000;

app.listen(PORT, ()=>{

    console.log(`The webserver is up and running`);
})