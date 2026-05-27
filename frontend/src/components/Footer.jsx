import React from "react";
import "../styles/Footer.css";

function Footer() {

  return (

    <footer className="footer-container-main">

      <div className="footer-content-wrapper">

        {/* LEFT */}

        <div className="footer-brand-section">

          <div className="footer-brand-name">
            EcoVastu Spaces
          </div>

          <p className="footer-brand-tagline">

            Rooted in Wisdom,
            Styled for Today.

          </p>

        </div>

        {/* CENTER */}

        <div className="footer-links-section">

          <a href="/">Home</a>

          <a href="/aboutus">About</a>

          <a href="/services">Services</a>

          <a href="/blog">Blog</a>

          <a href="/contactus">Contact</a>

        </div>

        {/* RIGHT */}

        <div className="footer-contact-section">

          <span>
            +91 77107 88800
          </span>

          <span>
            ecovastuspaces@gmail.com
          </span>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-copyright">

        <span>
          © 2026 EcoVastu Spaces
        </span>

      </div>

    </footer>

  );

}

export default Footer;