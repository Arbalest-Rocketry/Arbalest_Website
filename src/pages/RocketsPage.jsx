import "./Rockets.css";
import GooseShowcase from "../GooseShowCase.jsx";
import Footer from "../Footer";

export default function RocketsPage() {
  return (
    <>
      <section className="rockets-header">
        <h1 className="rockets-title">Our Rockets</h1>
      </section>
      <GooseShowcase />
      <Footer />
    </>
  );
}
