import "./Sponsors.css";
import Footer from "../Footer";

// Add a URL field for each sponsor (temporary placeholders can use "#")
const sponsors = [
  { name: "Bethune College", img: "/sponsors/Bethune.webp", tier: "Cosmic", url: "https://www.bethunedragons.ca/" },
  { name: "Nordspace", img: "/sponsors/nordspace.webp", tier: "Cosmic", url: "https://www.nordspace.com/" },
  { name: "Ansys", img: "/sponsors/Ansys.webp", tier: "Sustainer", url: "https://www.ansys.com/" },
  { name: "Solidworks", img: "/sponsors/SolidWorks.webp", tier: "Sustainer", url: "https://www.solidworks.com/" },
  { name: "BJ machine & tool inc", img: "/sponsors/bj_machine_and_tool_logo.webp", tier: "Sustainer", url: "https://www.bjmachineandtool.com/" },
  { name: "MDA space", img: "/sponsors/MDA_White_New.webp", tier: "Booster", url: "https://mda.space/" },
  { name: "CF turbo", img: "/sponsors/CF_turbo.webp", tier: "Booster", url: "https://cfturbo.com/" },
  { name: "GRT Genesis", img: "/sponsors/GRT_Genesis.webp", tier: "Booster", url: "https://grtgenesis.com/" },
  { name: "Humber valley", img: "/sponsors/Humber_Valley.webp", tier: "Booster", url: "https://hvrcf.org/wp/" },
  { name: "HARBH & CO", img: "/sponsors/Harbh_Logo.webp", tier: "Booster", url: "https://harbhandco.com/" },
  { name: "Alps Auto Repair Ltd", img: "/sponsors/Alp's_Auto_Repair.webp", tier: "Booster", url: "https://alpsautorepair.ca/" },
  { name: "Lassonde", img: "/sponsors/Lassonde.webp", tier: "Booster", url: "https://lassonde.yorku.ca/" },
  { name: "Matrix Academy", img: "/sponsors/Matrix_acad.webp", tier: "Booster", url: "https://matrix-academy.ca/" },
];

export default function SponsorshipsPage() {
  return (
    <>
      <section className="sponsors-section">
        <h1 className="sponsors-title">Our Sponsors</h1>
        <p className="sponsors-intro">
          We’re deeply grateful to our sponsors and partners for supporting Arbalest Rocketry’s mission.  
          Their generosity empowers us to innovate, compete, and push the boundaries of student rocketry in Canada.
        </p>

        {/* Tiers */}
        <div className="sponsor-tiers">
          {["Cosmic", "Sustainer", "Booster"].map((tier) => (
            <div className="tier" key={tier}>
              <h2>{tier} Package</h2>
              <div className="sponsor-grid">
                {sponsors
                  .filter((s) => s.tier === tier)
                  .map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sponsor-card"
                    >
                      <img src={s.img} alt={s.name} />
                      <p>{s.name}</p>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="sponsor-cta">
          <h2>Want to Support Arbalest Rocketry?</h2>
          <p>
            Join a growing network of sponsors and individual supporters and help advance Canadian innovation in rocketry and aerospace. We offer flexible sponsorship packages with unique and high-profile opportunities for brand visibility.
          </p>
          <a href="#contact" className="sponsor-btn">Learn more</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
