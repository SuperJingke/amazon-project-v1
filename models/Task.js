
/*********************Task ROUTES***************************/
const express = require('express')
const router = express.Router();


//Route to direct use to Add Task form
router.get("/add",(req,res)=>
{
    res.render("Task/taskAddForm");
});

//Route to process user's request and data when the user submits the add task form
router.post("/add",(req,res)=>
{

   
});

////Route to fetch all tasks
router.get("/list",(req,res)=>
{
    res.render("Task/taskDashboard");
  
});

//Route to direct user to the task profile page
router.get("/description",(req,res)=>{

    

})


//Route to direct user to edit task form



//Route to update user data after they submit the form


//router to delete user


module.exports=router;