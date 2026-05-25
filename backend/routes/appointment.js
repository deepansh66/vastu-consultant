const express = require("express");
const router = express.Router();
const Appointment =
require("../models/Appointment");
const transporter =
require("../config/mail");
/* CREATE APPOINTMENT */
router.post("/", async(req,res)=>{
  try{
    const appointment =
    new Appointment(req.body);
    await appointment.save();
    /* CLIENT EMAIL */
    await transporter.sendMail({
      from:process.env.EMAIL_USER,
      to:req.body.email,
      subject:"Appointment Confirmation",
      html:`
        <h2>EcoVastu Spaces</h2>
        <p>
          Hello ${req.body.name},
        </p>
        <p>
          Your appointment has been booked successfully.
        </p>
        <p>
          <strong>Date:</strong>
          ${req.body.date}
        </p>
        <p>
          <strong>Time:</strong>
          ${req.body.time}
        </p>
      `
    });
    /* ADMIN EMAIL */
    await transporter.sendMail({
      from:process.env.EMAIL_USER,
      to:process.env.EMAIL_USER,
      subject:"New Appointment Booking",
      html:`
        <h2>New Consultation Booking</h2>
        <p>
          <strong>Name:</strong>
          ${req.body.name}
        </p>
        <p>
          <strong>Email:</strong>
          ${req.body.email}
        </p>
        <p>
          <strong>Date:</strong>
          ${req.body.date}
        </p>
        <p>
          <strong>Time:</strong>
          ${req.body.time}
        </p>
        <p>
          <strong>Consultation:</strong>
          ${req.body.consultationType}
        </p>
      `
    });
    res.status(201).json({
      message:
      "Appointment Booked Successfully"
    });
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      message:"Server Error"
    });
  }
});
module.exports = router;