const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    userId: String,
    name: String,
    date: String,
    time: String,
    consultationType: String,
    amount: Number,
    paymentStatus: String
});
module.exports = mongoose.model("Appointment",appointmentSchema);