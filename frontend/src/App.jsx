import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import Login from "./pages/Login";

function App() {
   useEffect(() => {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }, []);
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin"element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<About />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />   {/* 👈 Bottom */}

    </BrowserRouter>
  );
}

export default App;