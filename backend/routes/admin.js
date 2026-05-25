const express = require("express");
const router = express.Router();
const Appointment =
require("../models/Appointment");
/* GET ALL APPOINTMENTS */
router.get(
  "/appointments",
  async(req,res)=>{
    try{
      const appointments =
      await Appointment.find();
      res.json(appointments);
    }
    catch(err){
      console.log(err);
      res.status(500).json({
        message:"Server Error"
      });
    }
});
module.exports = router;