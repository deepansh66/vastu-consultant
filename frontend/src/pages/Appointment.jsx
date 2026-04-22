import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Appointment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    consultationType: "Basic"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/appointment", formData);
      navigate("/payment", { state: formData });
    } catch (err) {
      alert("Error booking appointment");
    }
  };

  return (
    <div className="appointment-container">
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

        <select name="consultationType" onChange={handleChange}>
          <option value="Basic">Basic Consultation</option>
          <option value="Detailed">Detailed Consultation</option>
        </select>

        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
}

export default Appointment;