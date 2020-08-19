const mongoose =require('mongoose');
const Schema = mongoose.Schema;

// This indicates the shape of the documents that will be entering the database
const userSchma = new Schema({
    firstName:
    {
        type:String,
        required:true
    },
    lastName:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },

    password:
    {
        type:String,
        required:true
    }

})

const userModel = mongose.model('User', taskSchema);

module.exports = userModel;






/*********************USER ROUTES***************************/
const express = require('express')
const router = express.Router();


//Route to direct use to Registration form
router.get("/signUp",(req,res)=>
{
    res.render("/signUp");
});

//Route to process user's request and data when user submits registration form
router.post("/signUp",(req,res)=>
{ 
 
});

//Route to direct user to the login form
router.get("/login",(req,res)=>
{
    res.render("/login");
});

//Route to process user's request and data when user submits login form
// router.post("/login",(req,res)=>
// {

//     res.redirect("/user/profile/")
// });



// router.get("/profile/",(req,res)=>{

//     res.render("User/userDashboard");
// })



module.exports=router;