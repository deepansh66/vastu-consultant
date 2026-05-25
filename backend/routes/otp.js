const express =
require("express");
const router =
express.Router();
const client =
require("../config/twilio");
/* SEND OTP */
router.post(
  "/send-otp",
  async(req,res)=>{
    try{
      await client.verify.v2
      .services(
        process.env
        .TWILIO_VERIFY_SID
      )
      .verifications
      .create({
        to:req.body.phone,
        channel:"sms"
      });
      res.json({
        success:true,
        message:"OTP Sent"
      });
    }
    catch(err){
      console.log(err);
      res.status(500).json({
        success:false,
        message:"OTP Failed"
      });
    }
  }
);

/* VERIFY OTP */
router.post(
  "/verify-otp",
  async(req,res)=>{
    try{
      const verificationCheck =
      await client.verify.v2
      .services(
        process.env
        .TWILIO_VERIFY_SID
      )
      .verificationChecks
      .create({
        to:req.body.phone,
        code:req.body.otp
      });
      if(
        verificationCheck.status
        ===
        "approved"
      ){
        res.json({
          success:true,
          message:"OTP Verified"
        });
      }
      else{
        res.status(400).json({
          success:false,
          message:"Invalid OTP"
        });
      }
    }
    catch(err){
      console.log(err.message);
      console.log(err);
      res.status(500).json({
        success:false,
        message:"Verification Failed"
      });
    }
  }
);
module.exports = router;