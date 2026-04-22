import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div>

      {/* 🔥 HERO */}
      <section className="hero">
        <div className="overlay">
          <h1>Transform Your Space with Vastu</h1>
          <p>Bring balance, positivity, and success into your life</p>

          <Link to="/appointment">
            <button className="hero-btn">Book Consultation</button>
          </Link>
        </div>
      </section>
      <section className="visual-section">
  <div className="visual-left">
    <h2>Design Your Space with Positive Energy</h2>
    <p>
      <p>
  Vastu is not just a tradition—it is a powerful science that helps align your 
  environment with natural energies to create balance and harmony in everyday life. 
  At VastuCare, we focus on understanding the unique structure and direction of your 
  space and provide practical, easy-to-follow solutions that can be applied without 
  major changes or reconstruction.

  Our approach is simple yet effective—we analyze your surroundings, identify energy 
  imbalances, and suggest improvements that enhance positivity, peace, and prosperity. 
  Whether it’s your home, office, or any personal space, even small adjustments in 
  placement, direction, and design can bring noticeable improvements in your lifestyle.

  We believe that a well-balanced environment leads to better mental clarity, stronger 
  relationships, and overall growth. With our expert guidance, you can transform your 
  space into a source of comfort, success, and positive energy.
</p>
    </p>

    <button className="explore-btn">Explore More</button>
  </div>

  <div className="visual-right">
    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="home" />
    <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf" alt="interior" />
    <img src="https://images.unsplash.com/photo-1615873968403-89e068629265" alt="office" />
  </div>
</section>
      {/* 💎 SERVICES */}
      <section className="expertise-section">

  <div className="expertise-left">

  <h5 className="tagline"><strong>Our Expertise</strong></h5>

  <h2>Comprehensive Vastu Solutions</h2>

  <p>
    At EcoVastu Spaces, we specialize in providing practical and result-oriented Vastu
    solutions that help create balance, positivity, and growth in your surroundings. 
    Our approach combines traditional Vastu principles with modern lifestyle needs, 
    ensuring that the solutions are easy to implement and effective in the long run. 
    Whether it is your home, workplace, or property, we focus on improving energy flow 
    to enhance overall well-being and success.
  </p><br></br><br></br>

  <div className="features">

    <div>
      <strong>Home Vastu:</strong> Your home directly impacts your mental peace,
      relationships, and health. We analyze the direction, room placement, and layout 
      of your house to suggest simple corrections that promote harmony, positivity, 
      and a peaceful living environment without requiring major structural changes.
    </div> <br></br>

    <div>
      <strong>Office & Business Vastu:</strong> A well-balanced workspace can improve 
      productivity, decision-making, and financial growth. We guide you in optimizing 
      seating arrangements, entrance direction, and workspace alignment to create a 
      positive and growth-oriented business environment.
    </div><br></br>

    <div>
      <strong>Plot & Property Analysis:</strong> Choosing the right plot is the 
      foundation of a successful future. We evaluate land direction, shape, and 
      surroundings to ensure that your investment supports stability, prosperity, 
      and long-term benefits.
    </div><br></br>

    <div>
      <strong>Interior Vastu Guidance:</strong> Small changes in furniture placement 
      and room usage can bring significant improvements. We help you design interiors 
      that support better energy flow, comfort, and overall balance in daily life.
    </div><br></br>

    <div>
      <strong>Online Consultation:</strong> Get expert Vastu advice from anywhere. 
      Through online sessions, we provide personalized guidance based on your space 
      and concerns, making the consultation process convenient and accessible.
    </div><br></br>

  </div>

  <button className="explore-btn">View Services</button>

</div>
  {/* RIGHT IMAGES */}
  <div className="expertise-right">
    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" alt="home vastu" />
    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" alt="office vastu" />
    <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" alt="interior vastu" />
  </div>

</section>

 
      {/* ⚙️ HOW IT WORKS */}
      <section className="how">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">📝 Fill Details</div>
          <div className="step">📅 Schedule Time</div>
          <div className="step">📞 Expert Consultation</div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="cta">
        <h2>Start Your Journey to Positive Living</h2>

        <Link to="/appointment">
          <button className="cta-btn">Get Started</button>
        </Link>
      </section>

    </div>
  );
}

export default Home;