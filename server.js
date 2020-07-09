const express = require("express");
const exphbs  = require('express-handlebars');

const product = require("./models/product");

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.static("public"))


app.get("/",(req,res)=>{

    res.render("index",{
        title : "Home Page",
        info: product.getFeaturedProducts()

    })

});


app.get("/productListing",(req,res)=>{
    

    res.render("productListing",{
        title : "Product Listing Page",
        info : product.getAllProducts()
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


const PORT = 3000;

app.listen(PORT, ()=>{

    console.log(`The webserver is up and running`);
})