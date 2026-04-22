const express = require("express");
const require = express.Router();
const User = require("../models/User");

router.post("/register",async (req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.send("User Registered");
});

router.post("/login",async (req,res)=>{
    const user = await User.findOne(req.body);
    if(user) {
        res.json(user);
    } else {
        res.status(401).send("Invalid Credentials");
    }
});
module.exports = router;