import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../Hero";
import GooseShowcase from "../GooseShowCase.jsx";
import Footer from "../Footer";

export default function HomePage() {
  const location = useLocation();

  // The navbar's Rockets button links here with state { scrollTo: "rockets" }
  useEffect(() => {
    if (location.state?.scrollTo) {
      document
        .getElementById(location.state.scrollTo)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.key, location.state]);

  return (
    <>
      <Hero />
      <div id="rockets" className="home-rockets-anchor">
        <GooseShowcase />
      </div>
      <Footer />
    </>
  );
}
