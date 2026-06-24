const express = require("express");
const router = express.Router();
const transporter = require("../config/mail");

router.post("/", async (req, res) => {
  try {

    const {
      name,
      email,
      phone,
      message
    } = req.body;

    console.log("New Contact Form:");
    console.log({
      name,
      email,
      phone,
      message
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Test Email",
        text: "Testing"
      });

      console.log("✅ Email Sent Successfully");

    } catch (err) {

      console.log("❌ EMAIL ERROR:", err);

    }

    res.status(200).json({
      message: "Enquiry Sent Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
});

module.exports = router;