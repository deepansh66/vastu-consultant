import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Appointment() {
  const handlePayment = async()=>{
  console.log(window.Razorpay);
  try{
    const { data } =
    await axios.post(
      "http://localhost:5000/api/payment/create-order",
      {
        amount:1000
      }
    );
    const options = {
      key:"rzp_test_Srth64SVsV6mYH",
      amount:data.amount,
      currency:data.currency,
      order_id:data.id,
      name:"EcoVastu Spaces",
      description:"Appointment Booking",
      handler:async function(response){
  try{
    await axios.post(
      "http://localhost:5000/api/appointment",
      formData
    );
    alert(
      "Appointment Booked Successfully"
    );
  }
  catch(error){
    console.log(error);
    alert(
      error.response?.data?.message ||
      "Enquiry Failed"
    );
  }
},
    prefill:{
  name:formData.name,
  email:formData.email,
  contact:formData.phone
},
      theme:{
        color:"#C9A96E"
      }
    };
    const razorpay =
    new window.Razorpay(options);
    razorpay.open();
  }
  catch(error){
    console.log(error);
    alert("Payment Failed");
  }
};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  consultationType: "Basic"
});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const response = await axios.post(
      "http://localhost:5000/api/appointment",
      formData
    );
    alert(response.data.message);
    navigate("/payment");
  }
  catch(err){
    alert("Appointment Failed");
  }
};
  return (
  <section className="appointment-section">

    {/* LEFT CONTENT */}
    <div className="appointment-left">
      <h1>Book Your <span>Consultation</span></h1>

      <p className="appointment-description">
        Schedule a personalized Vastu consultation
        for your home, office, or commercial space.
        Our expert guidance helps create harmony,
        positivity, and balanced energy for long-term growth.
      </p>

      <div className="appointment-features">

        <div className="feature-box">
          Personalized Guidance
        </div>

        <div className="feature-box">
          Online & Offline Consultation
        </div>

        <div className="feature-box">
           Trusted Vastu Solutions
        </div>

      </div>

    </div>


    {/* RIGHT FORM */}
    <div className="appointment-right">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h2>Book Appointment</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
        <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
        />
        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
          required
        />

        <select
          name="consultationType"
          onChange={handleChange}
        >
          <option value="Basic">
            Basic Consultation
          </option>
          <option value="Detailed">
            Detailed Consultation
          </option>
        </select>
        <button type="button" onClick={handlePayment}>
          Proceed to Payment
        </button>
      </form>
    </div>
  </section>
);
}
export default Appointment;