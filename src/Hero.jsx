import "./Hero.css"; // make sure this is imported

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Elevating Dreams.</h1>
        <p>
         A team of Toronto’s finest students designing, building, and launching rockets that bring innovation off the ground and into the sky.
        </p>
      </div>
    </section>
  );
}
