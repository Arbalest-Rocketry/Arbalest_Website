import "./RocketDetail.css";
import Footer from "../Footer";

// Shared layout for rockets that don't have their own photos yet (Moose 1, Red Robin).
// Fill in `hero`, `story` and `gallery` in the page data below as content arrives.
export const rocketPages = {
  moose1: {
    name: "Moose 1",
    tag: "Launch Canada 2027 · Upcoming",
    subtitle: "Our first ever liquid engine rocket.",
    hero: null,
    story: [
      "Our first ever liquid engine rocket, Moose 1 is set to compete at Launch Canada 2027.",
    ],
    gallery: [],
  },
  redrobin: {
    name: "Red Robin",
    tag: "2026",
    subtitle: "Mission details coming soon.",
    hero: null,
    story: [],
    gallery: [],
  },
};

export default function RocketDetailPage({ id }) {
  const rocket = rocketPages[id];

  return (
    <>
      <section className="rp-hero">
        {rocket.hero ? (
          <img src={rocket.hero} alt={rocket.name} className="rp-hero-img" />
        ) : (
          <div className="rp-hero-placeholder" aria-hidden="true" />
        )}
        <div className="rp-hero-overlay">
          <p className="rp-tag">{rocket.tag}</p>
          <h1 className="rp-title">{rocket.name}</h1>
          <p className="rp-subtitle">{rocket.subtitle}</p>
        </div>
      </section>

      <section className="rp-content">
        <div className="rp-story">
          <h2>Mission Story</h2>
          {rocket.story.length > 0 ? (
            rocket.story.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <p className="rp-soon">Full story coming soon.</p>
          )}
        </div>

        <div className="rp-gallery-section">
          <h2>Gallery</h2>
          {rocket.gallery.length > 0 ? (
            <div className="rp-gallery">
              {rocket.gallery.map((src) => (
                <img key={src} src={src} alt={rocket.name} loading="lazy" />
              ))}
            </div>
          ) : (
            <div className="rp-gallery-placeholder">Photos coming soon</div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
