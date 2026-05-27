import React from "react";
import "../styles/Blog.css";
function Blog() {
  return (
    <section className="blog-page">
      <div className="blog-hero-section">

        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
          alt="Vastu"
          className="blog-hero-image"
        />
        <div className="blog-overlay">
          <span className="blog-category">
            Vastu Consultation
          </span>
          <h1>
            Vastu Consultant Punjab —
            Professional Consultation Checklist
          </h1>
          <div className="blog-meta">
            <span>
              EcoVastu Spaces
            </span>
            <span>
              May 25, 2026
            </span>
            <span>
              6 Min Read
            </span>
          </div>
        </div>
      </div>
      <div className="blog-content">
        <p>Today in Punjab, you can find a Vastu consultant in almost every other city. Some work online, some come through referrals, and some give advice over a phone call alone.</p>
        <p>But a home is built only once. A mistake happens once — and its cost can run into lakhs.</p>
        <h2>So before choosing a consultant — make sure you check these 5 things.</h2>
        <h3>1. Do they conduct a site visit?</h3>
        <p>A proper Vastu consultation involves physically studying the plot orientation, surrounding structures, natural light, and site conditions.</p>
        <h3>2. Do they have an architectural background?</h3>
        <p>Vastu and architecture work together. A consultant with architectural understanding avoids impractical recommendations.</p>
        <h3>3. Do they provide a written report?</h3>
        <p>A proper written report keeps every recommendation documented clearly for future reference.</p>
        <h3>4. Do they recommend demolition?</h3>
        <p>Correct planning from the beginning removes the need for unnecessary reconstruction later.</p>
        <h3>5. Does the senior expert personally handle the project?</h3>
        <p>Experience matters. Senior-level involvement ensures better decision-making and accurate guidance.</p>
        <h2>Why these points matter</h2>
        <p>Most consultations today are rushed or generic. But thoughtful planning creates long-term clarity and peace in a home.</p>
        <p>Take your time while choosing a consultant. Once a drawing is finalized, the freedom to change things becomes limited.</p>
        <div className="blog-button-wrapper">
          <a
            href="https://wa.me/917710788800"
            target="_blank"
            rel="noreferrer"
            className="blog-button"
          >
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
export default Blog;