const express = require('express')
const router = express.Router();


//home route
router.get("/",(req,res)=>{

    res.render("general/home",{
        title:"Home Page"
    });
});

//sign-up route
router.get("/signUp",(req,res)=>{

    res.render("general/Signup",{
        title:"Sign up at Amazon"
    });
});

//process contact us form for when user submits form
router.post("/SignUp",(req,res)=>{

    const {userName,email,password,rePassword} = req.body;

    
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("process.env.SENDGRID_API_KEY";
    const msg = {
    to: `${email}`,
    from: `jingkeliang003@gmail.com`,
    subject: 'SignUp Form Submit',
    html: 
    `Vistor's username ${userName} <br>
     Vistor's Email Address ${email} <br>
    `,
    };

    //Asynchornous operation (who don't know how long this will take to execute)
    sgMail.send(msg)
    .then(()=>{
        res.redirect("/");
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    });

});

module.exports = router;



const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("process.env.SENDGRID_API_KEY");
const msg = {
  to: '${email}',
  from: 'service@amazon.com',
  subject: 'You have sucessfully signup at Amazon',
  text: 'Thanks for your subscription at Amazon',
  html: '<strong>Thanks for your subscription at Amazon</strong>',
};
sgMail.send(msg);