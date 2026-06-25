const express = require("express");
const router = express.Router();
const transporter = require("../config/mail");

router.post("/", async (req, res) => {
  try {

    const { name, email, phone, message } = req.body;

    // Email to Admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Enquiry - EcoVastu Spaces",
      html: `
        <h2>New Contact Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    console.log("✅ Contact Enquiry Received");

    // Confirmation Email to Client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Received Your Enquiry - EcoVastu Spaces",
      html: `
        <h2>Thank You for Contacting EcoVastu Spaces</h2>

        <p>Hello <strong>${name}</strong>,</p>

        <p>We have successfully received your enquiry.</p>

        <p>Our team will review your message and get back to you as soon as possible.</p>

        <p><strong>Your Message:</strong></p>

        <blockquote>${message}</blockquote>

        <br>

        <p>Regards,</p>
        <p><strong>EcoVastu Spaces</strong></p>
      `
    });

    console.log("✅ Contact Confirmation Email Sent");

    res.status(200).json({
      success: true,
      message: "Enquiry Sent Successfully"
    });

  } catch (err) {

    console.error("❌ Contact Error:", err);

    res.status(500).json({
      success: false,
      message: "Failed to send enquiry."
    });

  }
});

module.exports = router;