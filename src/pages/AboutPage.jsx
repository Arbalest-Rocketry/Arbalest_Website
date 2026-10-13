import { Link } from "react-router-dom";
import "./About.css";
import Footer from "../Footer";
import { rockets } from "../GooseShowCase.jsx";

const pillars = [
  {
    title: "Design",
    text: "Students take a rocket from first sketch to full simulation, working through aerostructures, propulsion, avionics and payload.",
  },
  {
    title: "Build",
    text: "Every airframe, circuit board and ground system is made by our members, giving them hands-on experience they can't get in a classroom.",
  },
  {
    title: "Launch",
    text: "We fly at national competitions like Launch Canada, testing our work under real conditions and learning from every flight.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <img
          src="/images/about-team.webp"
          alt="The Arbalest Rocketry team with Goose IV"
          className="about-hero-img"
          fetchpriority="high"
          decoding="async"
        />
        <div className="about-hero-overlay">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Students designing, building and launching rockets out of Toronto.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-row">
          <h2 className="about-label">Our Mission</h2>
          <div className="about-body">
            <p>
              Arbalest Rocketry is a student design team at York University's
              Lassonde School of Engineering. Our mission is to give students
              real industry level experience by designing, building and
              launching high-power rockets, and to grow the next generation of
              engineers along the way.
            </p>
          </div>
        </div>

        {pillars.map((p) => (
          <div key={p.title} className="about-row about-pillar-row">
            <h3 className="about-label about-pillar-box">{p.title}</h3>
            <div className="about-body">
              <p>{p.text}</p>
            </div>
          </div>
        ))}

        <div className="about-row">
          <h2 className="about-label">Our Journey</h2>
          <div className="about-body">
            <ul className="about-timeline">
              {rockets.map((r) => (
                <li key={r.name}>
                  {r.link ? (
                    <Link to={r.link} className="about-timeline-name">
                      {r.name}
                    </Link>
                  ) : (
                    <span className="about-timeline-name">{r.name}</span>
                  )}
                  <span className="about-timeline-year">{r.year}</span>
                  {r.awards.filter(Boolean).length > 0 && (
                    <span className="about-timeline-award">
                      {r.awards.filter(Boolean).join(", ")}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-row">
          <h2 className="about-label">Partner With Us</h2>
          <div className="about-body">
            <p>
              Our sponsors make every launch possible. Partnering with Arbalest
              Rocketry puts your brand in front of motivated engineering talent
              and supports hands-on aerospace education in Canada.
            </p>
            <div className="about-buttons">
              <Link to="/sponsorships" className="about-btn">
                Become a Sponsor
              </Link>
              <Link to="/donations" className="about-btn about-btn-outline">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
