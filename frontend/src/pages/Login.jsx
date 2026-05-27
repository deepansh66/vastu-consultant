import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import "../styles/Login.css";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async(e) => {
  e.preventDefault();
  try{
    const response =
    await axios.post(
      "https://vastu-consultant.onrender.com/api/login",
      formData
    );
    alert(response.data.message);
    localStorage.setItem(
    "isLoggedIn",
    "true"
  );
    navigate("/");
  }
  catch(err){
    alert(
      err.response?.data?.message ||
      "Login Failed"
    );
  }
};
  return (
    <section className="login-section">
      {/* LEFT CONTENT */}
      <div className="login-left">
      <h1> Welcome <span>Back</span></h1>
        <p className="login-description">
          Access your personalized Vastu consultations,
          appointments, reports, and premium guidance
          through your secure client portal.
        </p>
        <div className="login-features">
          <div className="login-feature">
            Secure Login
          </div>
          <div className="login-feature">
          Access Consultation History
          </div>
          <div className="login-feature">
            Personalized Dashboard
          </div>
        </div>
      </div> 
      {/* RIGHT FORM */}
      <div className="login-right">
        <form
          className="login-form"
          onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required />
          <button type="submit">Login</button>
          <p className="login-footer">Don't have an account?
         <span className="register-link"
          onClick={() => navigate("/register")}>Register</span></p>
        </form>
      </div>
    </section>
  );
}
export default Login;