import React, { useEffect } from "react";
import "../styles/About.css";
export default function EcoVastuAbout() {
  useEffect(() => {
    const elements =
    document.querySelectorAll(".reveal");
    const observer =
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList
            .add("show");
          }
        });
      },
      {
        threshold:0.15
      }
    );
    elements.forEach((el) => {
      observer.observe(el);
    });
  }, []);
  return (
    <>
      <section className="eco-about">
        {/* HERO */}
        <section className="about-hero-section reveal">
          <div className="hero-left">
            <h1>
              Spaces designed with
              <span> clarity </span>
              from the very beginning.
            </h1>
            <p>
                “We do not see Vastu, architecture, and interiors as separate services. At EcoVastu Spaces,
            every project is designed with a unified in-house approach — where clarity is maintained from planning to execution.”
            </p>
            <a href="/contactus" className="hero-btn">
              Begin the Conversation
            </a>
          </div>
          <div className="hero-right">
            <div className="hero-frame">
              <div className="corner top-left"></div>
              <div className="corner bottom-right"></div>
              <div className="year-badge">
                1968
              </div>
              <div className="vertical-label">
                ECOVASTU SPACES
              </div>
              <p className="hero-quote">
              “When a home is planned correctly from the beginning, there’s no need for breaking or reconstruction later.”
              </p>
            </div>
          </div>
        </section>
        
        <section className="stats-reveal">

          <div className="stat-box">
            <h2>55<span>+</span></h2>
            <p>Years Family Legacy</p>
          </div>

          <div className="stat-box">
            <h2>30<span>+</span></h2>
            <p>Years Personal Practice</p>
          </div>

          <div className="stat-box">
            <h2>3<span>-in-1</span></h2>
            <p>Vastu · Architecture · Interiors</p>
          </div>

          <div className="stat-box">
            <h2>0</h2>
            <p>Post-Construction Demolitions</p>
          </div>

        </section>

        <section className="philosophy reveal">

          <div className="philo-left">

            <h2>
              Practical thinking rooted in classical understanding.
            </h2> 
            <p>
             We do not approach Vastu from the perspective of rituals or blind beliefs. For us, it is a disciplined framework of planning, proportion, orientation, natural light, and long-term spatial functionality.            </p>
            <p>
             Every recommendation is provided with practical implementation and real-world construction understanding.            </p>

            <div className="hinglish-quote">
              “A home is not just a combination of walls and design — the discipline of planning is equally important.”
            </div>

            <div className="quote-author">
              — ECO VASTU SPACES
            </div>

          </div>


          <div className="philo-right">

            <div className="principle">
              <span>01</span>
              <h3>One Unified Team</h3>
              <p>
                Vastu consultant, architect, aur interior direction — Everything is handled within a single in-house system.
              </p>
            </div>

            <div className="principle">
              <span>02</span>
              <h3>Right the First Time</h3>
              <p>
              In new builds, planning is done so clearly that situations requiring demolition after occupancy do not arise.
              </p>
            </div>

            <div className="principle">
              <span>03</span>
              <h3>Senior-Level Involvement</h3>
              <p>
                Every project involves direct senior participation — from the first discussion to the final recommendation.
              </p>
            </div>

          </div>

        </section>

        <section className="pillars reveal">
          <div className="pillars-top">
            <h2>Built around clarity, continuity, and responsibility.</h2>
            <p>“Every project is executed within a structured framework
               — where communication stays clear and design decisions remain aligned.”</p>

          </div>


          <div className="pillar-grid">
            <div className="pillar-card">
              <div className="small-corner"></div>
              <div className="icon-box">
                <svg width="30" height="30" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                  <rect x="5" y="5" width="20" height="20"/>
                </svg>
              </div>

              <p className="micro">
                IN-HOUSE
              </p>

              <h3>
                Unified Practice
              </h3>

              <p>
              “No referrals. No outsourced layers. Planning and execution remain within one integrated structure.”
              </p>
            </div>
            <div className="pillar-card">
              <div className="small-corner"></div>
              <div className="icon-box">
                <svg width="30" height="30" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                  <circle cx="15" cy="15" r="10"/>
                </svg>
              </div>

              <p className="micro">
                TRANSPARENCY
              </p>

              <h3>
                Clear Fee Structure
              </h3>

              <p>
                “Fees and scope are discussed upfront. No hidden charges or commission-based recommendations.”
              </p>

            </div>


            <div className="pillar-card">

              <div className="small-corner"></div>

              <div className="icon-box">
                <svg width="30" height="30" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                  <path d="M5 20 L15 8 L25 20"/>
                </svg>
              </div>

              <p className="micro">
                REACH
              </p>

              <h3>
                Regional & Virtual
              </h3>

              <p>
                Barnala, Ludhiana, Tricity, and pan-India virtual consultations — structured guidance across every format.
              </p>

            </div>

          </div>

        </section>


        {/* DIFFERENCE */}

        <section className="difference reveal">

          <div className="difference-left">

            <p className="eyebrow">
              WHAT MAKES US DIFFERENT
            </p>

            <h2>
              Most spaces fail because too many disconnected people are involved.
            </h2>

            <p>
              “In traditional projects, the Vastu consultant, architect, 
              and interior designer often work in different directions.
              The result — confusion, redesigns, and compromises.”
            </p>

            <p>
              “At EcoVastu Spaces, we work as a collective system — where every stage remains connected.”            </p>

          </div>


          <div className="difference-right">

            <div className="diff-row">
              <div className="dot"></div>
              <h4>One Conversation</h4>
              <p>
              Every decision is made with an integrated perspective.
              </p>
            </div>

            <div className="diff-row">
              <div className="dot"></div>
              <h4>Senior Oversight</h4>
              <p>
                No junior handoffs or fragmented communication systems.
              </p>
            </div>

            <div className="diff-row">
              <div className="dot"></div>
              <h4>Structured Guidance</h4>
              <p>
                Contractor-ready recommendations with clear documentation.
              </p>
            </div>

            <div className="diff-row">
              <div className="dot"></div>
              <h4>Long-Term Thinking</h4>
              <p>
                Every planning decision is made while keeping the years after occupancy in mind.
              </p>
            </div>

          </div>

        </section>


        {/* CLOSING */}

        <section className="closing reveal">

          <div className="vertical-rule"></div>

          <p className="eyebrow">
            START THE CONVERSATION
          </p>

          <h2>
            Designed with thought.
            <span> Built with clarity.</span>
          </h2>

          <p className="closing-text">
            We first understand the space — then recommend what is practical, what should be avoided, and what will work effectively in the long term.

          </p>

          <div className="cta-row">

            <a href="/contactus" className="btn-primary">
              Schedule Consultation
            </a>

            <a href="https://wa.me/917710788800" className="btn-secondary">
              WhatsApp Us
            </a>

          </div>

        </section>

      </section>

    </>

  );

}

