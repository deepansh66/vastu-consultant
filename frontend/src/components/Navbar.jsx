import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left"> 
        <img src={logo} alt="logo" className="logo-img" />
        <div className="logo-text">EcoVastu Spaces</div>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MENU */}
      <div className={`nav-menu ${open ? "active" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/services" className="nav-link" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/contactus" className="nav-link" onClick={() => setOpen(false)}>Contact Us</NavLink>
        <NavLink to="/aboutus" className="nav-link" onClick={() => setOpen(false)}>About Us</NavLink>
        <NavLink to="/Blog" className="nav-link" onClick={() => setOpen(false)}>Blog</NavLink>
        <NavLink to="/appointment" className="nav-link" onClick={() => setOpen(false)}>Appointment</NavLink>
        <NavLink to="/login" className="nav-link" onClick={() => setOpen(false)}>Login</NavLink>
      </div> 
    </nav>
  );
}

export default Navbar;