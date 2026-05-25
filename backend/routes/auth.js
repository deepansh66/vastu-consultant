const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();
/* TEST ROUTE */
router.get("/", (req, res) => {
  res.send("Auth Route Working");
});
/* REGISTER */
router.post("/register", async(req,res)=>{
  try{
    const {
      fullName,
      email,
      phone,
      password,
      confirmPassword
    } = req.body;
    if(password !== confirmPassword){
      return res.status(400).json({
        message:"Passwords do not match"
      });
    }
    const existingUser =
    await User.findOne({ email });
    if(existingUser){
      return res.status(400).json({
        message:"User already exists"
      });
    }
    const hashedPassword =
    await bcrypt.hash(password,10);
    const user = new User({
      fullName,
      email,
      phone,
      password:hashedPassword
    });
    await user.save();
    res.status(201).json({
      message:"Registration Successful"
    });
  }
  catch(error){
    console.log(error);
    res.status(500).json({
      message:error.message
    });
  }
});
router.post("/login", async(req,res)=>{

  try{

    const { email, password } = req.body;

    // FIND USER

    const user =
    await User.findOne({ email });

    // USER NOT FOUND

    if(!user){

      return res.status(400).json({

        message:"User not registered"

      });

    }

    // PASSWORD CHECK

    const isMatch =
    await bcrypt.compare(

      password,
      user.password

    );

    if(!isMatch){

      return res.status(400).json({

        message:"Invalid password"

      });

    }

    // SUCCESS

    res.status(200).json({

      message:"Login Successful",

      user

    });

  }

  catch(error){

    console.log(error);

    res.status(500).json({

      message:"Server Error"

    });

  }

});
module.exports = router;