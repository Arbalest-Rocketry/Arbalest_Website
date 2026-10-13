import { useLayoutEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import GalleryLightbox from "./GalleryLightbox";
import HomePage from "./pages/HomePage";
import Goose2Page from "./pages/Goose2Page";
import Goose3Page from "./pages/Goose3Page";
import Goose4Page from "./pages/Goose4Page";
import SubteamsPage from "./pages/SubteamsPage";
import MembersPage from "./pages/MembersPage";
import SponsorshipsPage from "./pages/SponsorshipsPage";
import ContactPage from "./pages/ContactPage";
import DonationsPage from "./pages/DonationsPage";
import RocketsPage from "./pages/RocketsPage";
import AboutPage from "./pages/AboutPage";
import RocketDetailPage from "./pages/RocketDetailPage";

// Start every page at the top instead of keeping the last page's scroll position.
// The page can scroll on the window, body or #root depending on the CSS, so reset all three.
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    for (const el of [document.documentElement, document.body, document.getElementById("root")]) {
      if (el) el.scrollTop = 0;
    }
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <GalleryLightbox />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subteams" element={<SubteamsPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/sponsorships" element={<SponsorshipsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rockets" element={<RocketsPage />} />
        <Route path="/payload" element={<Navigate to="/rockets" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donations" element={<DonationsPage />} />
        <Route path="/goose2" element={<Goose2Page />} />
        <Route path="/goose3" element={<Goose3Page />} />
        <Route path="/goose4" element={<Goose4Page />} />
        <Route path="/moose1" element={<RocketDetailPage id="moose1" />} />
        <Route path="/redrobin" element={<RocketDetailPage id="redrobin" />} />
      </Routes>
    </>
  );
}
