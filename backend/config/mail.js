const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// transporter.verify((err, success) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Mail Server Ready");
//   }
// });

module.exports = transporter;