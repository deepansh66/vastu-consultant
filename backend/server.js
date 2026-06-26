require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const appointmentRoutes = require("./routes/appointment");
const paymentRoutes = require("./routes/payment");
const contactRoutes = require("./routes/contact");
const otpRoutes = require("./routes/otp");

const app = express();

// Connect MongoDB only once
let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);

    isConnected = true;

    console.log("✅ MongoDB Connected");

  } catch (err) {

    console.log(err);

  }
}

connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ecovastuspaces.com",
      "https://www.ecovastuspaces.com",
      "https://vastu-consultant-backend.vercel.app/"
    ],
    credentials: true
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.use("/api/contact", contactRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/otp", otpRoutes);

// Localhost only
if (process.env.NODE_ENV !== "production") {

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

}

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);