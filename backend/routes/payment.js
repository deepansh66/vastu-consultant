const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

const razorpay = new Razorpay({

  key_id: process.env.RAZORPAY_KEY_ID,

  key_secret: process.env.RAZORPAY_KEY_SECRET

});

router.post("/create-order", async (req, res) => {

  try {

    const { amount } = req.body;

    const order = await razorpay.orders.create({

      amount: amount * 100,

      currency: "INR",

      receipt: `receipt_${Date.now()}`

    });

    res.json(order);

  }

  catch (err) {

    console.log(err);

    res.status(500).json({

      success: false,

      message: "Order Failed"

    });

  }

});

module.exports = router;