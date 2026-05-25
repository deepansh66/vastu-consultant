import "../styles/Services.css";
function Services() {
  const services = [
  { title: "Home Vastu",
    image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
    desc:"Create harmony, positivity, and emotional balance in your living space with personalized Vastu guidance tailored for modern homes.",
  },

  {title: "Office Vastu",
    image:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070",
    desc:"Improve productivity, decision-making, and business growth through strategic workspace energy alignment and vastu planning.",
  },

  {title: "Commercial Vastu",
    image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    desc:"Enhance customer attraction, financial stability, and overall business performance for shops and commercial properties.",
  },

  { title: "Interior Guidance",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070",
    desc:"Optimize furniture placement, room flow, lighting, and interior energy balance without major structural changes.",
  },
];

  return (
    <section className="services-section">
      <section className="services-page">
  <section className="services-intro">
    <h1>
      What We Do —
      And How We Do It
    </h1>
    <p className="services-intro-text">
      Most people come to us at one of
      three moments.

      They are about to build — and want
      to get it right before the foundation
      is poured.

      They are already living somewhere —
      and something has always felt slightly
      off, though they could never say
      exactly what.

      Or they are buying — and want to know,
      before they sign, whether this is
      the right space.

      Wherever you are in that journey —
      there is a place to begin.
    </p>

  </section>

  <section className="service-block">
    <div className="service-left">
      <p className="service-label">
        VASTU ASSESSMENT
      </p>
      <h2>Vastu Assessment</h2>
      <div className="service-line"></div>
    </div>
    <div className="service-right">
      <h3>
        A complete reading of your space.
        In writing. With reasons.
      </h3>
      <p>
        Most Vastu consultations end with
        vague recommendations that are
        difficult to understand and harder
        to act on.
      </p>

      <p>
        Ours ends with a structured written
        report — room by room, section by
        section — that explains what is
        working, what can be improved,
        and why.
      </p>
      <div className="service-meta">
        <h4>Best for</h4>
        <p>Anyone who wants to understand
          their space before making changes
          or renovations.</p>
      </div>
      <div className="service-meta">
        <h4>What you receive</h4>
        <p>
          A structured written Vastu
          assessment report covering
          the full property.
        </p>
      </div>
    </div>
  </section>
  <section className="service-block dark-section">
    <div className="service-left">
      <p className="service-label">
        NEW CONSTRUCTION
      </p>
      <h2>New Construction</h2>
      <div className="service-line"></div>
    </div>
    <div className="service-right">
      <h3>
        Get it right before the first brick.
        So nothing needs to be undone.
      </h3>
      <p>
        The decisions that determine how
        a home feels are made in the first
        drawings.
      </p>
      <p>
        We integrate Vastu, layout,
        orientation, and planning from
        the very beginning — not after
        construction is complete.
      </p>
      <div className="service-meta">
        <h4>Best for</h4>
        <p>
          Families planning a new home
          at any stage from plot selection
          to construction drawings.
        </p>
      </div>
      <div className="service-meta">
        <h4>What you receive</h4>
        <p>
          Floor plan review, entrance
          guidance, orientation assessment,
          and phased written recommendations.
        </p>
      </div>
      <blockquote className="service-quote">
        “Construction chal rahi hai aur
        sab kuch clarity ke saath ho raha
        hai — aage jaake final result
        dekhne ka wait hai.”
        <span>
          — Bhushan Goyal, Barnala
        </span>
      </blockquote>
    </div>
  </section>
  <section className="service-block">
    <div className="service-left">
      <p className="service-label">
        EXISTING PROPERTY
      </p>
      <h2>Existing Property Assessment</h2>
      <div className="service-line"></div>
    </div>
    <div className="service-right">
      <h3>
        Your home is already built.
        More can be done than you think.
      </h3>
      <p>
        In most cases, meaningful Vastu
        corrections are possible without
        demolition or disruption.
      </p>
      <p>
        We study what already exists and
        identify practical improvements
        within the reality of the space.
      </p>
      <div className="service-meta">
        <h4>Best for</h4>
        <p>
          Owners of existing homes,
          built-up properties, and
          renovation projects.
        </p>
      </div>
      <div className="service-meta">
        <h4>What you receive</h4>
        <p>
          Full assessment, written
          corrections, and renovation
          guidance where required.
        </p>
      </div>
    </div>
  </section>
  <section className="service-block">
    <div className="service-left">
      <p className="service-label">
        INTERIOR DESIGN
      </p>

      <h2>Interior Design</h2>
      <div className="service-line"></div>
    </div>
    <div className="service-right">
      <h3>
        A space that is Vastu-aligned
        should also be beautiful.
      </h3>
      <p>
        Vastu tells us where things
        should go. Design determines
        how the space should feel.
      </p>
      <p>
        Colour, light, furniture,
        material, and layout are
        approached together —
        not separately.
      </p>
      <div className="service-meta">
        <h4>Best for</h4>
        <p>
          New construction clients
          continuing into interiors
          and existing homes requiring
          upgrades.
        </p>
      </div>
      <div className="service-meta">
        <h4>What you receive</h4>
        <p>
          Space planning, material
          consultation, lighting guidance,
          and furniture placement.
        </p>
      </div>
    </div>
  </section>
  <section className="service-block dark-section">
    <div className="service-left">
      <p className="service-label">
        COMMERCIAL & INDUSTRIAL
      </p>
      <h2>
        Commercial & Industrial Spaces
      </h2>
      <div className="service-line"></div>
    </div>
    <div className="service-right">
      <h3>
        The same principles.
        Applied to the spaces where
        business happens.
      </h3>
      <p>
        We work with offices, showrooms,
        factories, retail spaces, and
        industrial environments across
        Punjab.
      </p>
      <p>
        The process remains structured —
        compass analysis, measurements,
        layout understanding, and
        written reporting.
      </p>
      <div className="service-meta">
        <h4>Best for</h4>
        <p>
          Business owners planning
          commercial construction or
          assessing existing premises.
        </p> 
      </div>
    </div>
  </section>
  <section className="service-block">
    <div className="service-left">
      <p className="service-label">
        REMOTE & NRI
      </p>
      <h2>Remote & NRI Consultation</h2>
      <div className="service-line"></div>
    </div>
    <div className="service-right">
      <h3>Distance is not a reason
        to compromise on how your
        home is built.</h3>
      <p>We regularly consult remotely
        for clients across India and
        abroad through plans, maps,
        photos, and digital reports.</p>
      <p>The process remains structured,
        practical, and completely
        manageable remotely.</p>
      <div className="service-meta">
        <h4>Best for</h4>
        <p>NRI families, outstation
          clients, and remote projects.</p>
      </div>
      <div className="service-meta">
        <h4>What you receive</h4>
        <p>
          Remote assessment report,
          digital recommendations,
          and follow-up consultation.
        </p>
      </div>
    </div>
  </section>
  <section className="services-cta">
    <p className="services-eyebrow">
      LET'S BEGIN
    </p>
    <h2>Not sure which service
      fits your situation?</h2>
    <p>Most of our clients come in with
      a question, not a decision.
      The first conversation is simply
      where we understand your space.</p>
    <a
      href="https://wa.me/917710788800"
      className="services-btn">
      Connect on WhatsApp →
    </a>
    <span className="services-location">
      Barnala · Ludhiana · Tricity ·
      Pan-India · NRI Consultations
    </span>
  </section>
</section>
      <div className="services-top">
        <h1> Our <span>Services</span></h1>
        <p className="services-description">
        We provide premium Vastu consultation services
        designed to create balance, positivity, and
        long-term success for residential, commercial,
        and professional spaces.
        </p>
      </div>
     <div className="services-grid">
        {services.map((service, index) => (
        <div className="service-card" key={index}>
  <div className="service-image">
    <img
      src={service.image}
      alt={service.title}/>
    <span className="service-number">
    {service.number}
    </span>
  </div>
  <div className="service-content">
    <h2>
    {service.title}
    </h2>
    <p>
    {service.desc}
    </p>
  </div>
</div>
))}
</div>
</section>
);
}
export default Services;