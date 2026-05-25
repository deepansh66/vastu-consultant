import React,
{
  useState,
  useEffect
}
from "react";

import "../styles/HomeFAQ.css";

function HomeFAQ(){

  const [openIndex,
  setOpenIndex] =
  useState(null);

  useEffect(()=>{

    const elements =
    document.querySelectorAll(".faq-reveal");

    const observer =
    new IntersectionObserver(

      (entries)=>{

        entries.forEach((entry)=>{

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

    elements.forEach((el)=>{
      observer.observe(el);
    });

  },[]);

  const faqData = [

  {
    question:
    "What is Vastu Shastra, in plain terms?",

    answer:
    "Vastu Shastra is an architectural discipline developed around orientation, spatial planning, natural light, airflow, and how built environments influence the people living inside them."
  },

  {
    question:
    "Is Vastu scientific or superstition?",

    answer:
    "We approach Vastu as observation-based and practical. Our recommendations are rooted in spatial understanding, design logic, and environmental behaviour."
  },

  {
    question:
    "Can Vastu be corrected without demolition?",

    answer:
    "In most cases, yes. Placement, material, light, room usage, and spatial organisation often create meaningful improvements without structural changes."
  },

  {
    question:
    "Is a south-facing house actually bad?",

    answer:
    "No. The entrance placement, internal layout, airflow, and room positioning matter more than the facing direction alone."
  },

  {
    question:
    "Do you offer online consultations?",

    answer:
    "Yes. We work remotely across India and abroad through floor plans, maps, photographs, and structured consultation reports."
  },

  {
    question:
    "Why choose EcoVastu Spaces?",

    answer:
    "Because vastu, architecture, and interiors are handled together within one unified practice — without outsourcing or disconnected consultants."
  },

  {
    question:
    "Can Vastu be considered before construction begins?",

    answer:
    "Yes — and this is the ideal stage. Early planning allows orientation, room positioning, circulation, openings, and functionality to align before construction starts."
  },

  {
    question:
    "Can you review architectural floor plans?",

    answer:
    "Yes. We regularly assess architectural layouts before execution and suggest refinements where required."
  },

  {
    question:
    "Do you only work on homes?",

    answer:
    "No. We also consult on offices, retail spaces, commercial properties, hospitality spaces, clinics, and institutional environments."
  },

  {
    question:
    "How does an online consultation work?",

    answer:
    "Clients usually share floor plans, site details, maps, photographs, and concerns beforehand. The consultation is then conducted virtually, followed by a structured recommendation report."
  },

  {
    question:
    "Do you work outside Punjab?",

    answer:
    "Yes. We consult across India as well as internationally through remote consultation systems."
  },

  {
    question:
    "Will I receive a written report?",

    answer:
    "Yes. Depending on the project scope, recommendations are shared in a structured written format suitable for implementation."
  },

  {
    question:
    "Do you recommend demolition after construction?",

    answer:
    "For new builds, our approach focuses on getting things right during planning itself. Existing spaces are assessed practically and responsibly."
  },

  {
    question:
    "Do I need to believe in rituals for Vastu to work?",

    answer:
    "No. Our work is centred around planning logic, orientation, usability, environmental balance, and long-term functionality."
  },

  {
    question:
    "Who handles the consultation process?",

    answer:
    "Every project involves senior-level participation directly — from discussion to recommendation."
  }

];

  return(

    <section className="home-faq">

      <div className="home-faq-container faq-reveal">

        {/* HEADER */}

        <div className="home-faq-top">

          <p className="faq-eyebrow">

            QUICK CLARITY

          </p>

          <h2>

            Questions people usually ask
            <span> before </span>
            the first conversation.

          </h2>

          <p className="faq-description">

            A few honest answers about
            how we approach vastu,
            architecture, and spatial planning.

          </p>

        </div>


        {/* FAQ LIST */}

        <div className="home-faq-list">

          {

            faqData.map((faq,index)=>(

              <div
                className="home-faq-item"
                key={index}
              >

                <button
                  className="home-faq-question"

                  onClick={()=>

                    setOpenIndex(

                      openIndex === index
                      ? null
                      : index

                    )

                  }
                >

                  <h3>

                    {faq.question}

                  </h3>

                  <span>

                    {

                      openIndex === index
                      ? "−"
                      : "+"

                    }

                  </span>

                </button>


                <div

                  className={

                    openIndex === index
                    ?
                    "home-faq-answer open"
                    :
                    "home-faq-answer"

                  }

                >

                  <div className="home-faq-answer-inner">

                    <p>

                      {faq.answer}

                    </p>

                  </div>

                </div>

              </div>

            ))

          }

        </div>


        {/* FOOTER */}

        <div className="home-faq-footer">

          <a href="/faq">

            Read Full FAQ →

          </a>

        </div>

      </div>

    </section>

  );

}

export default HomeFAQ;