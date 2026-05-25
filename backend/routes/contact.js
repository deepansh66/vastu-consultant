const express = require("express");
const router = express.Router();
const transporter =
require("../config/mail");
router.post("/", async(req,res)=>{
  try{
    const {
      name,
      email,
      phone,
      message
    } = req.body;
    /* ADMIN EMAIL */
    await transporter.sendMail({
      from:process.env.EMAIL_USER,
      to:process.env.EMAIL_USER,
      subject:"New Contact Enquiry",
      html:`
        <h2>New Enquiry</h2>
        <p>
          <strong>Name:</strong>
          ${name}
        </p>
        <p>
          <strong>Email:</strong>
          ${email}
        </p>
        <p>
          <strong>Phone:</strong>
          ${phone}
        </p>
        <p>
          <strong>Message:</strong>
          ${message}
        </p>
      `
    });
    /* CLIENT EMAIL */
    await transporter.sendMail({
      from:process.env.EMAIL_USER,
      to:email,
      subject:"Enquiry Received",
      html:`
        <h2>EcoVastu Spaces</h2>
        <p>
          Hello ${name},
        </p>
        <p>
          We have received your enquiry.
        </p>
        <p>
          Our team will contact you shortly.
        </p>
      `
    });
    res.status(200).json({
      message:"Enquiry Sent Successfully"
    });
  }
  catch(error){
    console.log(error);
    res.status(500).json({
      message:error.message
    });
  }
});
module.exports = router;