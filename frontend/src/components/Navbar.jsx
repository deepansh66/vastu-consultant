import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";
function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}></h2>
      <h2 className="logo-text">EcoVastu Spaces</h2>
      <img src={logo} alt="logo" style={styles.logoImg} />
      <div style={styles.menu}>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/appointment" className="nav-link">Appointment</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink> 
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "relative",
    display: "flex",
    borderRadius: "1px",
    alignItems: "center",
    padding: "15px 20px", 
    background: "#108b1c",
    color: "#fff"
  },
  logo: {
    fontSize: "30px",
    fontFamily: "arial",
    fontWeight: "bold",
    marginLeft: "100px"
  },
  menu: {
    position: "absolute",
    fontFamily: "arial",
    left: "74%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "60px"
  },
  logoImg: {
    width: "70px",
    height: "70px",
    marginLeft: "-300px",
    
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px"
  }
};

export default Navbar;