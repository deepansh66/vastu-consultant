const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Mail Verify Error:");
    console.log(error);
  } else {
    console.log("✅ Mail Server Ready");
  }
});

module.exports = transporter;