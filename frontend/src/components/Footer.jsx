import React from "react";
import "../styles/Footer.css";

function Footer() {

  return (

    <footer className="footer">

      {/* TOP */}

      <div className="footer-top">

        {/* LEFT */}

        <div className="footer-brand">

          <h2>
            EcoVastu Spaces
          </h2>

          <p>
            Rooted in Wisdom, Styled for Today.
            We integrate Vastu, Architecture,
            and Interior Planning into one
            unified consultation system.
          </p>

        </div>

        {/* LINKS */}

        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/services">
            Services
          </a>

          <a href="/blog">
            Blog
          </a>

          <a href="/contactus">
            Contact
          </a>

        </div>

        {/* SERVICES */}

        <div className="footer-links">

          <h3>
            Services
          </h3>

          <a href="#">
            Residential Vastu
          </a>

          <a href="#">
            Commercial Vastu
          </a>

          <a href="#">
            Architecture Planning
          </a>

          <a href="#">
            Interior Consultation
          </a>

        </div>

        {/* CONTACT */}

        <div className="footer-contact">

          <h3>
            Contact
          </h3>

          <p>
            Punjab, India
          </p>

          <p>
            +91 77107 88800
          </p>

          <p>
            ecovastuspaces@gmail.com
          </p>

          <a
            href="https://wa.me/917710788800"
            target="_blank"
            rel="noreferrer"
            className="footer-whatsapp"
          >
            WhatsApp Us
          </a>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 EcoVastu Spaces.
          All Rights Reserved.
        </p>

      </div>

    </footer>

  );

}

export default Footer;