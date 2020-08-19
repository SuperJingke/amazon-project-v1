const dashBoardLoader = (req,res)=>{

    if(req.session.userInfo.type=="Admin")
    {
        res.render("User/adminDashBoard");
    }
    
    else
    {
        res.render("User/userDashboard");
    }

}

module.exports = dashBoardLoader;