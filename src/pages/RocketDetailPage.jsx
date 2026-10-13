import { useState } from "react";
import "./RocketDetail.css";
import Footer from "../Footer";

// Shared layout for rockets that don't have their own photos yet (Moose 1, Red Robin).
// Fill in `hero`, `story` and `gallery` in the page data below as content arrives.
export const rocketPages = {
  moose1: {
    name: "Moose 1",
    tag: "Launch Canada 2027 · Upcoming",
    subtitle: "Our first ever liquid-fuelled rocket, now in development.",
    hero: null,
    story: [
      "Moose 1 is our first ever liquid-fuelled rocket, and it is in development right now. The team is currently testing the Moose engine on our static fire stand as we build toward Launch Canada 2027.",
    ],
    gallery: [],
  },
  redrobin: {
    name: "Red Robin",
    tag: "2026 Launch Canada",
    subtitle: "2nd place in Restricted Category · 2nd place in Payload Challenge",
    hero: "/redrobin/redrobin.webp",
    video: "dX_ge8wRFuY",
    story: [
      "Red Robin was built to compete in the restricted category at Launch Canada 2026, and it came home with two second place finishes, one in the restricted category and one in the payload challenge.",
      "Behind that result are months of design reviews, test fits and long nights in the shop. Every subteam had a hand in it, from the airframe and recovery system to the avionics and the payload riding inside. Red Robin showed what the team can do when everything comes together on launch day, and it sets the bar for Moose 1 and every rocket that follows.",
    ],
    gallery: [],
  },
};

export default function RocketDetailPage({ id }) {
  const rocket = rocketPages[id];
  const [playVideo, setPlayVideo] = useState(false);

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

        {rocket.video && (
          <div className="rp-video-section">
            <h2>Watch the Launch</h2>
            <div className="rp-video">
              {playVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${rocket.video}?autoplay=1`}
                  title={`${rocket.name} launch video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  className="rp-video-poster"
                  onClick={() => setPlayVideo(true)}
                  aria-label={`Play ${rocket.name} launch video`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${rocket.video}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                  />
                  <span className="rp-play">▶</span>
                </button>
              )}
            </div>
          </div>
        )}

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
