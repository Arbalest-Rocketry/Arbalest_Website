import "./GooseShowCase.css";
import { Link } from "react-router-dom";

export const rockets = [
  {
    name: "Moose 1",
    year: "Launch Canada 2027 · Upcoming",
    desc: "Our first ever liquid-fuelled rocket, Moose 1 is in development now. The team is currently testing the Moose engine on our static fire stand as we build toward Launch Canada 2027",
    awards: [],
    img: "/moose1/moose1-engine.webp",
    link: "/moose1",
  },
  {
    name: "Red Robin",
    year: "2026 Launch Canada",
    desc: "Red Robin took on the restricted category at Launch Canada 2026 and came home with two second place finishes, proof that our team can take a design from the shop floor all the way to the podium",
    awards: ["2nd place in Restricted Category", "2nd place in Payload Challenge"],
    img: "/redrobin/redrobin.webp",
    wide: true,
    link: "/redrobin",
  },
  {
    name: "Goose IV",
    year: "2025 Launch Canada",
    desc: "Every wire, every weld, every sleepless night built this. Goose IV is the statement piece, were chasing legacy.",
    awards: ["3rd place in Payload Challenge"],
    img: "/goose4/goose4.webp",
    link: "/goose4",
  },
  {
    name: "Goose III",
    year: "2023 Maritime Launch Services",
    desc: "Our first collaboration with Maritime Launch Services. Goose III pushed the limits of our design. Though Goose III was ultimately lost at sea it was truly a step forward",
    awards: [""],
    img: "/goose3/goose3-cover.webp",
    link: "/goose3",
  },
  {
    name: "Goose II",
    year: "2021 Launch Canada",
    desc: "The rocket that changed everything. Goose II was our first real deal breaker, the build that put Arbalest Rocketry on the map and set the standard for every launch that followed",
    awards: ["3rd place Launch Canada"],
    img: "/goose2/goose2.webp",
    link: "/goose2",
  },
];

export default function GooseShowcase() {
  return (
    <div className="goose-showcase">
      {rockets.map((rocket, index) => (
        <section
          key={index}
          className={`goose-section ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="goose-text">
            <h4>{rocket.year}</h4>
            <h1>{rocket.name}</h1>
            <p>{rocket.desc}</p>

            {rocket.awards.filter(Boolean).length > 0 && (
              <ul>
                {rocket.awards.map((award, i) => (
                  <li key={i}>{award}</li>
                ))}
              </ul>
            )}

            {rocket.link && (
              <Link to={rocket.link}>
                <button className="learn-more">Learn More</button>
              </Link>
            )}
          </div>

          <div className={`goose-image${rocket.wide ? " goose-image-wide" : ""}`}>
            {rocket.img ? (
              <img src={rocket.img} alt={rocket.name} />
            ) : (
              <div className="goose-image-placeholder">Image coming soon</div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
