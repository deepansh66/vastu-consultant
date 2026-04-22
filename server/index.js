const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/vastuDB")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));
const authRoutes = require("/.routes/auth");
app.use("/api, authRoutes");
const appointmentRoutes = require("./routes/appointment");
app.use("/api", appointmentRoutes);
const paymentRoutes = require("./routes/payment");
app.use("/api", paymentRoutes);
app.get("/",(req,res)=>{
    res.send("API Working");
});
app.listen(5000, () => console.log("Server running on port 5000"));