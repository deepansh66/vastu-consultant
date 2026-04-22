import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section">
          <h2 className="logo-text">
            <span className="eco">Eco</span>Vastu Spaces
          </h2>
          <p>
            Bringing balance, positivity, and harmony to your spaces 
            through expert Vastu solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Appointment</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Home Vastu</li>
            <li>Office Vastu</li>
            <li>Interior Guidance</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📧 info@ecovastu.com</p>
          <p>📞 +91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 EcoVastu Spaces. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;