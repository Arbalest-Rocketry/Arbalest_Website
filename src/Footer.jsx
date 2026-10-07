import "./Footer.css";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/arbalestrocketry/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/@arbalestrocketry/featured", icon: "youtube" },
  { label: "GitHub", href: "https://github.com/Arbalest-Rocketry", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/arbalest-rocketry/", icon: "linkedin" },
  { label: "X", href: "https://x.com/ArbalestRockets", icon: "x" },
  { label: "Email", href: "mailto:arbalestrocketry@gmail.com", icon: "email" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/images/logo.png" alt="Arbalest Logo" className="footer-logo" />
        </div>

        <div className="footer-right">
          <div className="footer-address">
            <p>4700 Keele Street</p>
            <p>Toronto, ON</p>
            <p>M3J 1P3</p>
          </div>

          <div className="footer-socials">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" })}
                aria-label={label}
                title={label}
              >
                <img src={`/images/social/${icon}.png`} alt="" className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
