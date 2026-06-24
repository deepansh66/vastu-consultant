require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const otpRoutes = require("./routes/otp");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ecovastuspaces.com",
      "https://www.ecovastuspaces.com", 
    ], 
    credentials: true,
  }) 
);
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});
const authRoutes =
require("./routes/auth");
const adminRoutes =
require("./routes/admin");
const appointmentRoutes =
require("./routes/appointment");
const paymentRoutes =
require("./routes/payment");
const contactRoutes =
require("./routes/contact");

app.use(
  "/api/contact",
  contactRoutes
);
app.use(
  "/api/payment",
  paymentRoutes
);
app.use(
  "/api/auth",
  authRoutes
);
app.use(
  "/api/admin",
  adminRoutes
);
app.use(
  "/api/appointment",
  appointmentRoutes
);
app.use(
  "/api/otp",
  otpRoutes
);
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.get("/", (req, res) => {
  res.send("Backend Working");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});