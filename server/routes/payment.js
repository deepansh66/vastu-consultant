const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

const razorpay = new Razorpay({
    key_id:"",
    key_secret:""
});

router.post("/create-order", async (res, req)=>{
    const options = {
        amount: req.body.amount * 100,
        currency: "INR"
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
});
module.exports = router;