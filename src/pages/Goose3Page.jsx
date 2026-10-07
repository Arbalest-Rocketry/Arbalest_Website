import "./Goose3.css";
import Footer from "../Footer";

export default function Goose3Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="goose3-hero">
        <img
          src="/goose3/Goose3-hero.webp"
          alt="Goose 3 Rocket Launch Over Water"
          className="goose3-hero-img"
        />
        <div className="goose3-hero-overlay">
          <h1 className="goose3-title">Goose 3</h1>
          <p className="goose3-subtitle">
            Built to soar higher — remembered for the one that never came home.
          </p>
        </div>
      </section>

      {/* Mission Story */}
      <section className="goose3-content">
        <div className="mission-story">
          <h2>Mission Story</h2>
          <p>
            Designed as a major evolution of the Goose 2 platform, 
            <strong> Goose 3 </strong> represented Arbalest Rocketry’s growing technical capabilities 
            — featuring advanced avionics, refined aerodynamics, and a lighter composite airframe. 
            Launched at the <strong>2023 Launch Canada competition</strong>, Goose 3 achieved stable 
            flight and near-perfect telemetry before contact was lost during descent.  
          </p>
          <p>
            Despite recovery efforts, Goose 3 was ultimately <strong>lost at sea</strong>, marking 
            an emotional but defining moment for the team. The mission pushed the limits of our 
            engineering precision and recovery planning — teaching invaluable lessons that directly 
            shaped the design of <strong>Goose 4</strong>.  
            While the rocket may rest beneath the waves, its legacy continues to guide our ascent.  
          </p>
        </div>

        {/* Gallery */}
        <div className="gallery">
          <img src="/goose3/goose3-1.webp" alt="Goose 3 on Pad" />
          <img src="/goose3/goose3-2.webp" alt="Launch Sequence" />
          <img src="/goose3/goose3-3.webp" alt="Team Preparing Goose 3" />
          <img src="/goose3/goose3-4.webp" alt="Team Preparing Goose 3" />
          <img src="/goose3/goose3-5.webp" alt="Team Preparing Goose 3" />
          <img src="/goose3/goose3-6.webp" alt="Team Preparing Goose 3" />
          <img src="/goose3/goose3-7.webp" alt="Team Preparing Goose 3" />
          <img src="/goose3/goose3-8.webp" alt="Team Preparing Goose 3" />
          <img src="/goose3/goose3-10.webp" alt="Team Preparing Goose 3" />
          <img src="/goose3/goose3-11.webp" alt="Team Preparing Goose 3" />
          <img src="/goose3/goose3-12.webp" alt="Team Preparing Goose 3" />
          <img src="/goose3/goose3-3.webp" alt="Team Preparing Goose 3" />
        </div>

        {/* Video Section */}
        <div className="video-section">
          <h2>Launch Video</h2>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/1ncLSijTldg"
              title="Goose 3 Launch Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
