/*********************USER ROUTES***************************/
const express = require('express')
const router = express.Router();
const userModel = require("../models/User");
const path = require("path");
const bcrypt = require("bcryptjs");
const isAuthenticated = require("../middleware/auth");
const dashBoardLoader = require("../middleware/authorization");


//Route to direct use to Registration form
router.get("/register",(req,res)=>
{
    res.render("User/register");
});

//Route to process user's request and data when user submits registration form
router.post("/register",(req,res)=>
{ 

    const newUser = 
    {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    }

    const user = new userModel(newUser);
    user.save()
    .then((user)=>{

        req.files.profilePic.name = `pro_pic_${user._id}${path.parse(req.files.profilePic.name).ext}`;

        req.files.profilePic.mv(`public/uploads/${req.files.profilePic.name}`)
        .then(()=>{


            userModel.updateOne({_id:user._id},{
                profilePic: req.files.profilePic.name
            })
            .then(()=>{
                res.redirect(`/user/login`)
            })

        })
      
      
       
    })
    .catch(err=>console.log(`Error while inserting into the data ${err}`));
 
});

//Route to direct user to the login form
router.get("/login",(req,res)=>
{
    res.render("User/login");
});

//Route to process user's request and data when user submits login form
router.post("/login",(req,res)=>
{

    userModel.findOne({email:req.body.email})
    .then(user=>{

        const errors= [];

        //email not found
        if(user==null)
        {
            errors.push("Sorry, your email and/or password incorrect");
            res.render("User/login",{
                errors
            })
                
        }

        //email is found
        else
        {
            bcrypt.compare(req.body.password, user.password)
            .then(isMatched=>{
                
                if(isMatched)
                {
                    //cretae our sessoin
                    req.session.userInfo = user;
                   
                    res.redirect("/user/profile");
                }

                else
                {
                    errors.push("Sorry, your email and/or password incorrect ");
                    res.render("User/login",{
                        errors
                    })
                }

            })
            .catch(err=>console.log(`Error ${err}`));
        }


    })
    .catch(err=>console.log(`Error ${err}`));
    
});



router.get("/profile",isAuthenticated,dashBoardLoader);




router.get("/logout",(req,res)=>{

    req.session.destroy();
    res.redirect("/user/login")
    
})


module.exports=router;