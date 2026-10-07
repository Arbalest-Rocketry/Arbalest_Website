import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navRef = useRef(null);
  const lastScroll = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide on scroll (use window scroll — works everywhere)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop || 0;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScroll > lastScroll.current && currentScroll > 100) {
            navRef.current?.classList.add("nav-hidden");
          } else {
            navRef.current?.classList.remove("nav-hidden");
          }
          lastScroll.current = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={navRef} className="navbar">
      <nav className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/images/logo.png" alt="Arbalest Logo" />
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop nav */}
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/subteams" onClick={closeMenu}>Subteams</Link></li>
          <li><Link to="/payload" onClick={closeMenu}>Payload Challenge</Link></li>
          <li><Link to="/members" onClick={closeMenu}>Members</Link></li>
          <li><Link to="/sponsorships" onClick={closeMenu}>Sponsorships</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/donations" onClick={closeMenu}>Donations</Link></li>
        </ul>
      </nav>

      {/* Mobile overlay menu */}
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {[
          ["Home", "/"],
          ["Subteams", "/subteams"],
          ["Payload", "/payload"],
          ["Members", "/members"],
          ["Sponsorships", "/sponsorships"],
          ["Contact", "/contact"],
          ["Donations", "/donations"],
        ].map(([label, path]) => (
          <Link key={path} to={path} onClick={closeMenu}>
            {label}
          </Link>
        ))}
      </div>

      {/* Background dim overlay */}
      {menuOpen && (
        <div className="menu-backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  );
}
