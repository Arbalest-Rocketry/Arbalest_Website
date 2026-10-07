import { useState } from "react";
import Footer from "../Footer";
import "./Goose4.css";

const sections = [
  {
    id: "nosecone",
    label: "Nose Cone",
    info: "Streamlined fairing engineered for maximum aerodynamic efficiency and reliable payload protection.",
    style: { "--x": "17%", "--y": "51%" },
  },
  {
    id: "avionics",
    label: "Avionics Bay",
    info: "Houses the Teensy flight computer, telemetry radio, and sensors for real-time control.",
    style: { "--x": "28%", "--y": "51%" },
  },
  {
    id: "propulsion",
    label: "Propulsion",
    info: "Solid rocket motor section delivering thrust for ascent to supersonic speeds.",
    style: { "--x": "39%", "--y": "51%" },
  },
  {
    id: "fins",
    label: "Fins & Stabilizers",
    info: "Machined aluminum fins ensure aerodynamic stability during flight.",
    style: { "--x": "47%", "--y": "51%" },
  },
  {
    id: "daq",
    label: "DAQ System",
    info: "Data acquisition system and telemetry transmitter located at the tail for balanced mass distribution.",
    style: { "--x": "58%", "--y": "51%" },
  },
  {
    id: "recovery",
    label: "Recovery Section",
    info: "Houses the parachute bay and recovery electronics to ensure safe landing and retrieval.",
    style: { "--x": "69%", "--y": "51%" },
  },
  {
    id: "tail",
    label: "Engine Mount & Nozzle",
    info: "High-temperature alloy nozzle designed for optimal thrust efficiency and safe exhaust dispersion.",
    style: { "--x": "79%", "--y": "51%" },
  },
];

const galleryItems = Array.from({ length: 16 }, (_, i) => ({
  src: `/goose4/goose4-${i + 1}.webp`,
  alt: `Goose 4 photo ${i + 1}`,
}));

export default function Goose4Page() {
  const [active, setActive] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="goose4-hero">
        <img
          src="/goose4/goose4-hero.webp"
          alt="Goose 4 Rocket Hero"
          className="goose4-hero-img"
          fetchpriority="high"
          decoding="async"
        />
        <div className="goose4-hero-overlay">
          <h1 className="goose4-title">Goose 4</h1>
          <p className="goose4-subtitle">
            The next evolution of Arbalest’s rocket family — precision-engineered
            for altitude, control, and data.
          </p>
        </div>
      </section>

      {/* STORY + VIDEO */}
      <section className="goose4-story-section">
        <div className="story-content">
          <h2>The Journey of Goose 4</h2>
          <p>
            Goose 4 represents months of relentless design, late-night simulations,
            and endless iterations by a passionate team of engineers and makers.
            Every component, from the precision-machined nose cone to the flight
            computer deep inside its avionics bay, was hand built, tested, and refined
            through trial and determination. Yet through it all, Goose 4 became more
            than a rocket — it became a symbol of teamwork, persistence, and the drive
            to push the boundaries of what’s possible.
          </p>
        </div>

        <div className="video-section">
          <h2>Watch the Launch</h2>
          <div className="video-wrapper" style={{ maxWidth: 960, margin: "0 auto" }}>
            {!playVideo ? (
              <div
                className="lite-yt"
                onClick={() => setPlayVideo(true)}
                role="button"
                aria-label="Play Goose 4 Launch Video"
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                  background: "#000",
                  cursor: "pointer",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://i.ytimg.com/vi/h8uPEJSsnDg/hqdefault.jpg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: 0,
                  }}
                />
                <button
                  aria-label="Play video"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                    fontSize: 20,
                    padding: "14px 18px",
                    borderRadius: 9999,
                    border: "none",
                    background: "rgba(255,255,255,.9)",
                  }}
                >
                  ▶
                </button>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/h8uPEJSsnDg?autoplay=1"
                title="Goose 4 Launch Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "calc(960px * 0.5625)",
                  maxHeight: "70vh",
                  border: 0,
                  borderRadius: "12px",
                }}
              ></iframe>
            )}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ROCKET */}
      <div className="rocket-container white-bg">
        <div className="rocket-stage">
          <img
            src="/goose4/goose4_exterior.webp"
            alt="Goose 4 Diagram"
            className="rocket-image"
            loading="lazy"
            decoding="async"
          />

          {sections.map((sec) => (
            <div
              key={sec.id}
              className="hotspot"
              style={sec.style}
              onClick={() => setActive(active === sec.id ? null : sec.id)}
            >
              <div className="dot"></div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="info-box">
          <h2>{sections.find((s) => s.id === active).label}</h2>
          <p>{sections.find((s) => s.id === active).info}</p>
          <button onClick={() => setActive(null)}>Close</button>
        </div>
      )}

      {/* GALLERY */}
      <section
        className="goose4-gallery-section"
        style={{
          contentVisibility: "auto",
          containIntrinsicSize: "1200px",
        }}
      >
        <h2>Goose 4 Gallery</h2>
        <div className="goose4-gallery">
          {galleryItems.map((g, idx) => (
            <img
              key={idx}
              src={g.src}
              alt={g.alt}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                aspectRatio: "3 / 2",
                objectFit: "cover",
                display: "block",
                borderRadius: "12px",
              }}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
