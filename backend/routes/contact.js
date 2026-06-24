const express = require("express");
const router = express.Router();

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