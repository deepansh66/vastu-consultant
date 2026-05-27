import React from "react";
import "../styles/Blog.css";
function BlogDetails() {
  const blog = {
    title:
    "Vastu Consultant Punjab — Professional Consultation Checklist",
    image:
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop",
    category:
    "Vastu Consultation",
    author:
    "EcoVastu Spaces",
    date:
    "May 25, 2026",
    readTime:
    "6 Min Read"
  };
  return (
    <section className="blog-details">
      {/* HERO IMAGE */}
      <div className="blog-hero">
        <img
          src={blog.image}
          alt={blog.title}
        />
        <div className="blog-overlay">
          <span className="blog-category">
            {blog.category}
          </span>
          <h1>
            {blog.title}
          </h1>
          <div className="blog-meta">
            <span>
              {blog.author}
            </span>
            <span>
              {blog.date}
            </span>
            <span>
              {blog.readTime}
            </span>
          </div>
        </div>
      </div>
      {/* BLOG CONTENT */}
      <div className="blog-content">
        <p>
          Today in Punjab, you can find a Vastu consultant in almost every other city. Some work online, some come through referrals, and some give advice over a phone call alone.
        </p>
        <p>
          But a home is built only once. A mistake happens once — and its cost can run into lakhs.
        </p>
        <h2>
          Vastu Consultant Punjab — EcoVastu Spaces Professional Consultation Checklist
        </h2>
        <p>
          So before choosing a consultant — make sure you check these 5 things.
        </p>
        <h3>
          1. Do they conduct a site visit?
        </h3>
        <p>
          If a consultant only looked at the floor plan and gave advice — that was not an assessment, it was an assumption.
        </p>
        <p>
          A proper Vastu consultation involves physically studying the plot orientation, surrounding structures, entry angle, natural light, and overall site conditions.
        </p>
        <h3>
          2. Do they have an architectural background?
        </h3>
        <p>
          Vastu and architecture are not separate — they work together.
        </p>
        <p>
          A consultant with architectural training corrects things at the drawing stage itself.
        </p>
        <h3>
          3. Do they provide a written report?
        </h3>
        <p>
          Verbal advice leaves no record. A good consultant provides a written report after every assessment.
        </p>
        <h3>
          4. Do they recommend demolition?
        </h3>
        <p>
          Demolition is a failure of planning.
        </p>
        <p>
          The right approach is simple: do it correctly the first time.
        </p>
        <h3>
          5. Does the senior expert personally handle the project?
        </h3>
        <p>
          During site visits and reporting, the person handling the work should be experienced.
        </p>
        <h2>
          Why these 5 points matter
        </h2>
        <p>
          Because even today in Punjab, most consultations are either done over the phone or end with one-time generic advice.
        </p>
        <p>
          Take your time while choosing a consultant. Because once the drawing is finalized, one thing ends forever — choice.
        </p>
        <p>
          If you are seriously considering Vastu consultation in Punjab and want things to be done correctly the first time — let’s connect.
        </p>
        <div className="blog-cta">
          <a
            href="https://wa.me/917710788800"
            target="_blank"
            rel="noreferrer"
          >
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
export default BlogDetails;