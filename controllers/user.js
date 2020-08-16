/*********************USER ROUTES***************************/
const express = require('express')
const router = express.Router();


//Route to direct use to Registration form
router.get("/register",(req,res)=>
{
    res.render("User/register");
});

//Route to process user's request and data when user submits registration form
router.post("/register",(req,res)=>
{ 
 
});

//Route to direct user to the login form
router.get("/login",(req,res)=>
{
    res.render("User/login");
});

//Route to process user's request and data when user submits login form
router.post("/login",(req,res)=>
{

    res.redirect("/user/profile/")
});



router.get("/profile/",(req,res)=>{

    res.render("User/userDashboard");
})



module.exports=router;