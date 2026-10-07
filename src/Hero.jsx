import { useEffect, useState } from "react";
import "./Hero.css"; // make sure this is imported

// Launch Canada 2027 (midnight Eastern time)
const LAUNCH_DATE = new Date("2027-08-15T00:00:00-04:00");

function timeLeft() {
  const ms = Math.max(0, LAUNCH_DATE - Date.now());
  return {
    Days: Math.floor(ms / 86400000),
    Hours: Math.floor(ms / 3600000) % 24,
    Minutes: Math.floor(ms / 60000) % 60,
    Seconds: Math.floor(ms / 1000) % 60,
  };
}

function LaunchCountdown() {
  const [left, setLeft] = useState(timeLeft);

  useEffect(() => {
    const id = setInterval(() => setLeft(timeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown" aria-label="Countdown to Launch Canada 2027">
      <h2 className="countdown-title">Launch Canada 2027</h2>
      <div className="countdown-units">
        {Object.entries(left).map(([label, value]) => (
          <div key={label} className="countdown-unit">
            <span className="countdown-value">
              {String(value).padStart(2, "0")}
            </span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Elevating Dreams.</h1>
        <p>
         A team of Toronto’s finest students designing, building, and launching rockets that bring innovation off the ground and into the sky.
        </p>
        <LaunchCountdown />
      </div>
    </section>
  );
}
