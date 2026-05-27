import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [otp, setOtp] =
  useState("");
  const [otpSent, setOtpSent] =
  useState(false);
  const [otpVerified,
  setOtpVerified] =
  useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value
    });
  };
  const sendOTP = async() => {
    try{
      const response =
      await axios.post(
        "https://vastu-consultant.onrender.com/api/otp/send-otp",
        { phone:`+91${formData.phone}`}
      );
      alert(response.data.message);
      setOtpSent(true);
    }
    catch(err){
      alert("OTP Failed");
    }
  };
  const verifyOTP = async() => {
    try{
      const response =
      await axios.post(
        "https://vastu-consultant.onrender.com/api/otp/verify-otp",
        {
          phone:`+91${formData.phone}`,
          otp
        }
      );
      alert(response.data.message);
      setOtpVerified(true);
    }
    catch(err){
      alert("Invalid OTP");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!otpVerified){
      alert(
        "Please Verify OTP First"
      );
      return;
    }
    if(
      formData.password !==
      formData.confirmPassword
    ){
      alert(
        "Passwords Do Not Match"
      );
      return;
    }
    try{
      const response =
      await axios.post(
        "https://vastu-consultant.onrender.com/api/auth/register",
        formData
      );
      alert(response.data.message);
      navigate("/login");
    }
    catch(err){
  console.log(err);
  alert(
    err.response?.data?.message ||
    err.message ||
    "Registration Failed"
  );
}
  };
  return (
    <section className="register-section">
      <div className="register-left">
        <h1>
          Create Your
          <span> Account</span>
        </h1>
        <p className="register-description">
          Join EcoVastu Spaces to access
          premium consultations,
          appointment bookings,
          personalized guidance,
          and detailed Vastu
          recommendations for your spaces.
        </p>
        <div className="register-features">
          <div className="register-feature">
            Personalized Dashboard
          </div>
          <div className="register-feature">
            Easy Appointment Booking
          </div>
          <div className="register-feature">
            Secure Client Access
          </div>
        </div>
      </div>
      <div className="register-right">
        <form
          className="register-form"
          onSubmit={handleSubmit}>
          <h2>
            Register Now
          </h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required/>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required/>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required/>
          <button
            type="button"
            onClick={sendOTP}
            className="otp-btn"
          >
            Send OTP
          </button>
          {
            otpSent && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e)=>
                    setOtp(
                      e.target.value
                    )
                  }/>
                <button
                  type="button"
                  onClick={verifyOTP}
                  className="otp-btn">
                  Verify OTP
                </button>
              </>
            )
          }
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required/>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required/>
          <button type="submit">
            Create Account
          </button>
          {/* LOGIN */}
          <p className="register-footer">
            Already have an account?
            <span
              className="login-link"
              onClick={() =>
                navigate("/login")
              } >
              Login
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}
export default Register;