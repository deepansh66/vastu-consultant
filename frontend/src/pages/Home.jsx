import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import HomeFAQ from "../components/HomeFAQ";
function Home() {
  const [showPre, setShowPre] = useState(false);
  const [showPost, setShowPost] = useState(false);
  return (
    <div>
      {/* 🔥 HERO */}
      <section className="hero">
        <div className="overlay">
          <h1>Rooted in Wisdom,<br></br>Styled for Today</h1>
          <p>Bring balance, positivity, and success into your life</p>
          <Link to="/appointment">
          <button className="hero-btn">Book Consultation</button>
          </Link>
        </div> 
      </section>
      <div className="vastu-grid">
  <section className="split-wrapper">
  {/* PRE-CONSTRUCTION */}
  <section className="split-section">
    <div className="split-block">
      <h1 className="split-title">
        Pre-<span>Construction</span>
      </h1>
       <p className="split-desc">
        Vastu integrated at the design stage costs nothing extra
        and changes everything. Before a single brick is laid —
        we get it right.
      </p>
      <button
        className="dropdown-btn"
        onClick={() => setShowPre(!showPre)}>
        Explore Services ↗
      </button>
      {showPre && (
  <div className="dropdown-content">
    <div className="dropdown-item">
      <h3>Plot & Land Assessment</h3>
      <p>
        Detailed analysis of plot direction,
        shape, slope, and surrounding energy
        before beginning construction.
      </p>
    </div>
    <div className="dropdown-item">
      <h3>New Construction Design</h3>
      <p>
        Vastu-compliant layout planning for
        rooms, entrances, kitchen, staircase,
        and overall energy alignment.
      </p>
    </div>
    <div className="dropdown-item">
      <h3>Architectural Planning</h3>
      <p>
        Collaboration with architectural concepts
        to ensure balanced space utilization
        and positive directional flow.
      </p>
    </div>
    <div className="dropdown-item">
      <h3>Complete Design Package</h3>
      <p>
        End-to-end vastu consultation including
        layout corrections, floor planning,
        and construction guidance.
      </p>
    </div>
  </div>
)}
    </div> 
  </section>
{/* POST-CONSTRUCTION */}
  <section className="split-section post-section">
    <div className="split-block post-block">
      <h1 className="split-title">
        Post-<span>Construction</span>
      </h1> 
      <p className="split-desc">
        Already built does not mean already fixed. 
        We assess what your space can still become.
      </p>
      <button
        className="dropdown-btn"
        onClick={() => setShowPost(!showPost)}
      >
        Explore Services ↗
      </button>
      {showPost && (
  <div className="dropdown-content">
    <Link
      to="/services"
      className="dropdown-link"
    >
      <div className="dropdown-item">
        <h3>Existing Home Vastu Assessment </h3> 
        <p>
          Your home is built. We assess every room,
          every direction, every zone — and tell 
          you honestly where it stands.
        </p>
      </div>
    </Link>
    <Link
      to="/services"
      className="dropdown-link"
    >
      <div className="dropdown-item">
        <h3>
        Commercial Space Vastu Assessment 
        </h3>
        <p>
          Entrance, counter, cabin, reception 
          — spatial layout directly affects how 
          your business performs.
        </p>
      </div>
    </Link>
    <Link
      to="/services"
      className="dropdown-link"
    >
      <div className="dropdown-item">
        <h3>
          Renovation Vastu Guidance
        </h3>
        <p>
          Before you renovate — know what 
          to change, what to keep, and what 
          the priority order should be.
        </p>
      </div>
    </Link>
    <Link
      to="/services"
      className="dropdown-link"
    >
      <div className="dropdown-item">

        <h3>
          Vastu Interior Refresh
        </h3>

        <p>
           No demolition. Furniture placement, 
           colours, minor adjustments — maximum 
           improvement without structural change.
        </p>
      </div>
    </Link>
  </div>
)}
<section className="stats-section">
  <div className="stat-box">
    <h2>30+</h2>
    <p>Years of Practice</p>
  </div>
  <div className="stat-box">
    <h2>1968</h2>
    <p>Family Legacy Since</p>
  </div>
  <div className="stat-box">
    <h2>500+</h2>
    <p>Projects Completed</p>
  </div>
  <div className="stat-box">
    <h2>3</h2>
    <p>Cities, One Team</p>
  </div>
</section>
<section className="how-section">
  <div className="section-heading">
    <p className="section-tag">
      HOW IT WORKS
    </p>
    <h2>
      What happens next — clearly.
    </h2>
    <p className="section-subtext">
      No surprises. No confusion.
      Three simple steps.
    </p>
  </div>
  <div className="steps-container">
    <div className="step-card">
      <span>01</span>
      <h3>
        First Conversation
      </h3>
      <p>
        Describe your space on WhatsApp.
        We respond the same day.
        No forms, no registration.
      </p>
    </div>
    <div className="step-card">
      <span>02</span>
      <h3>
        Site Visit or Video Call
      </h3>
      <p>
        We come in person —
        compass, floor plan,
        full preparation.
        Or a virtual call.
      </p>
    </div>
    <div className="step-card">
      <span>03</span>
      <h3>
        Written Report
      </h3>
      <p>
        Clear, specific,
        contractor-ready guidance.
        What needs to change
        and exactly how to do it.
      </p>
    </div>
  </div>
  <p className="steps-bottom-text">
    The first step is free.
    Just one WhatsApp message.
  </p>
</section>
<section className="coverage-section">
  <div className="section-heading">
    <p className="section-tag">
      COVERAGE
    </p>
    <h2>
      Where we work.
    </h2>
    <p className="section-subtext">
      In person or virtually —
      distance has never been a problem.
    </p>
  </div>
  <div className="coverage-grid">
    <div className="coverage-card">
      <h3>Barnala</h3>
      <p>
        Locally present.
        Same-day visits possible.
      </p>
    </div>
    <div className="coverage-card">
      <h3>Ludhiana</h3>
      <p>
        Residential and
        commercial consultations.
      </p>
    </div>
    <div className="coverage-card">
      <h3>Tricity</h3>
      <p>
        Chandigarh · Mohali · Panchkula
      </p>
    </div>
    <div className="coverage-card">
      <h3>Pan-India</h3>
      <p>
        Virtual consultations with
        floor plans and written reports.
      </p>
    </div>
  </div>
</section>
<section className="home-testimonial">
  <div className="testimonial-wrapper">
    <p className="section-tag">
      TESTIMONIAL
    </p>
    <h2>From people who have been here before.</h2>
    <p className="testimonial-text">
      “The house was built — planned from
      drawing to construction.
      Yet something never felt settled.
      EcoVastu visited the site and gave
      a detailed report.
      The changes were practically doable —
      no demolition involved.
      Within three months,
      the difference was clearly felt.”
    </p>
    <span>
      — Residential Client, Barnala
    </span>
  </div>
</section>
<HomeFAQ />
<section className="usp-section">
  <div className="section-heading">
    <p className="section-tag">
      WHY US
    </p>
    <h2>
      What we do that most others do not.
    </h2>
  </div>
  <div className="usp-grid">
    <div className="usp-card">
      <h3>
        All in-house — always.
      </h3>
      <p>
        Vastu, architecture,
        and interiors —
        one team.
      </p>
    </div>
    <div className="usp-card">
      <h3>
        No demolition. Ever.
      </h3>
      <p>
        Existing space or new build —
        we never push unnecessary breaking.
      </p>
    </div>
    <div className="usp-card">
      <h3>
        Senior on every project.
      </h3>
      <p>
        No juniors.
        No handoffs.
        Same person from start to finish.
      </p>
    </div>
    <div className="usp-card">
      <h3>
        Transparent fees.
      </h3>

      <p>
        Talk first.
        Fees after.
        No surprises.
      </p>
    </div>
  </div>
</section>

<section className="final-cta">

  <h2>
    The first conversation
    is just to understand.
  </h2>

  <p>
    No commitment.
    No pressure.
    Just tell us about your space —
    we will tell you what is possible.
  </p>
  <a href="https://wa.me/917710788800" target="_blank">
  Talk to us on WhatsApp →
  </a>
  <span>
    Barnala · Ludhiana · Chandigarh ·
    Mohali · Panchkula · Pan-India virtually
  </span>
</section>
    </div>
  </section>
</section>
</div> 
<section className="visual-section">
  <div className="visual-left">
  <br></br> 
  </div>
</section>
    </div>
  );
}

export default Home;