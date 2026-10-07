import "./payload.css";
import Footer from "../Footer";

export default function Payload() {
  return (
    <>
      {/* HERO */}
      <section className="payload-hero">
        <img
          src="/goose4/goose4-14.webp"
          alt="Payload Challenge"
          className="payload-hero-img"
          fetchpriority="high"
          decoding="async"
          sizes="100vw"
        />
        <div className="payload-hero-overlay">
          <h1 className="payload-title">Payload Challenge</h1>
          <p className="payload-subtitle">
            Where innovation meets gravity — explore, experiment, and elevate.
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section
        className="payload-content"
        style={{ contentVisibility: "auto", containIntrinsicSize: "1600px" }}
      >
        <div className="payload-story">
          <h2>What is the Payload Challenge?</h2>
          <p>
            The Payload Challenge is Arbalest Rocketry’s annual engineering
            competition — an opportunity for students to design, build, and test
            scientific or experimental payloads that launch aboard our rockets.
            The challenge encourages innovation, collaboration, and hands-on
            problem-solving in real aerospace conditions.
          </p>
          <p>
            Each payload must meet strict mass, volume, and power constraints
            while contributing meaningful data collection, experimentation, or
            functionality. From environmental sensors to advanced control
            systems, every design is a testament to creativity and engineering
            precision.
          </p>
        </div>

        {/* GALLERY */}
        <div className="payload-gallery">
          <img
            src="/payloadchallenge.webp"
            alt="Payload prototype"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>

        {/* CALL TO ACTION */}
        <div className="payload-cta">
          <h2>Want to Join the Challenge?</h2>
          <p>
            Students and innovators are welcome to submit payload ideas or join
            a development team. Help us push the boundaries of what’s possible
            in student rocketry!
          </p>
          <a href="#contact" className="payload-btn">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
