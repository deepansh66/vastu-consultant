const express = require("express");
const router = expressRouter();
const Appointment = require("../models/Appointment");

router.post("/appointment", async (req,res)=> {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.send("Appointment Booked"); 
});

router.get("/appointments", async (req,res)=>{
    const data = await Appointment.find();
    res.json(data);
})
module.exports = router;