import { useState } from "react";
import axios from "axios";
import "../styles/ContactUs.css";
function Contact() {
const [formData,setFormData] =
  useState({
    name:"",
    email:"",
    phone:"",
    message:""
  });
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value
    });
  };
  const handleSubmit =
  async(e)=>{
    e.preventDefault();
    try{
      const response =
      await axios.post(
        "https://vastu-consultant.onrender.com/api/contactus", 
        formData
      );
      alert(response.data.message);
      setFormData({
        name:"",
        email:"",
        phone:"",
        message:""
      });
    }
    catch(error){
      console.log(error);
      alert("Enquiry Failed");
    }
  };
  return (
    <section className="contact-section">
      {/* TOP */}
      <div className="contact-top">
        <h1 className="contact-title">
          Let's Build a
          <span> Better Space</span>
        </h1>
        <p className="contact-description">
          Whether you are planning a new home,
          redesigning an office, or seeking
          vastu guidance for an existing space —
          we begin by understanding your vision.
        </p>
      </div>
      {/* CONTACT GRID */}
      <div className="contact-grid">
        {/* LEFT */}
        <div className="contact-left">
          <div className="contact-card">
            <h3>WhatsApp</h3>
            <p>+91 77107 88800</p>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <p>ecovastuspaces@gmail.com</p>
          </div>
          <div className="contact-card">
            <h3>
              Consultation Hours
            </h3>
            <p>
              Monday — Saturday
              <br />
              10:00 AM — 7:00 PM
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="contact-right">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;