const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");
const transporter = require("../config/mail");

router.post("/", async (req, res) => {
  try {
    // Save Appointment
    const appointment = new Appointment(req.body);
    await appointment.save();

    console.log("✅ Appointment Saved");

    // Send Confirmation Email to Client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: "Appointment Confirmation - EcoVastu Spaces",
      html: `
        <h2>Appointment Confirmed</h2>

        <p>Hello <strong>${req.body.name}</strong>,</p>

        <p>Thank you for booking your consultation with <strong>EcoVastu Spaces</strong>.</p>

        <p>Your appointment has been successfully booked.</p>

        <hr>

        <p><strong>Date:</strong> ${req.body.date}</p>
        <p><strong>Time:</strong> ${req.body.time}</p>
        <p><strong>Consultation Type:</strong> ${req.body.consultationType}</p>

        <hr>

        <p>Our team will contact you shortly if any additional information is required.</p>

        <p>Regards,<br><strong>EcoVastu Spaces</strong></p>
      `
    });

    console.log("✅ Client Confirmation Email Sent");

    // Send Notification Email to Admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Appointment Booking",
      html: `
        <h2>New Appointment Booking</h2>

        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Date:</strong> ${req.body.date}</p>
        <p><strong>Time:</strong> ${req.body.time}</p>
        <p><strong>Consultation Type:</strong> ${req.body.consultationType}</p>
      `
    });

    console.log("✅ Admin Notification Email Sent");

    res.status(201).json({
      success: true,
      message: "Appointment Booked Successfully"
    });

  } catch (err) {
    console.error("❌ Appointment Error:", err);

    res.status(500).json({
      success: false,
      message: "Failed to book appointment."
    });
  }
});

module.exports = router;