import "./Goose2.css";
import Footer from "../Footer";

export default function Goose2() {
  return (
    <>
      {/* Hero Section */}
      <section className="goose2-hero">
        <img
          src="/goose2/goose2-hero.webp"
          alt="Goose 2 Rocket Team"
          className="goose2-hero-img"
        />
        <div className="goose2-hero-overlay">
          <h1 className="goose2-title">Goose 2</h1>
          <p className="goose2-subtitle">
            Arbalest’s first supersonic rocket — a story of resilience and innovation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="goose2-content">
        <div className="goose2-mission-story">
          <h2>Mission Story</h2>
          <p>
            The Goose 2 rocket soared to new heights, clinching
            <strong> 3rd place </strong> at the inaugural
            <strong> Launch Canada competition </strong>. Conceived amidst the challenges of
            limited access to facilities during the pandemic, the team’s
            resourcefulness shone through as we repurposed a basement into our
            manufacturing hub. Achieving a velocity of <strong> Mach 1.37 </strong> and an altitude
            of approximately <strong> 5500 meters </strong>, Goose 2’s successful recovery heralded a
            new chapter for our team — showcasing our capacity for innovation and adaptation.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="goose2-gallery">
          <img src="/goose2/1.webp" alt="Goose 2 team" />
          <img src="/goose2/2.webp" alt="Goose 2 team" />
          <img src="/goose2/3.webp" alt="Goose 2 team" />
          <img src="/goose2/4.webp" alt="Goose 2 team" />
          <img src="/goose2/5.webp" alt="Goose 2 team" />
          <img src="/goose2/6.webp" alt="Goose 2 team" />
          <img src="/goose2/8.webp" alt="Goose 2 team" />
          <img src="/goose2/9.webp" alt="Goose 2 team" />
          <img src="/goose2/10.webp" alt="Goose 2 team" />
          <img src="/goose2/11.webp" alt="Goose 2 team" />
          <img src="/goose2/12.webp" alt="Goose 2 team" />
          <img src="/goose2/14.webp" alt="Goose 2 team" />
          <img src="/goose2/15.webp" alt="Goose 2 team" />
        </div>

        {/* Video Section */}
        <div className="goose2-video-section">
          <h2>Launch Video</h2>
          <div className="goose2-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/lMGI3MWBSqQ"
              title="Goose 2 Launch Video"
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
