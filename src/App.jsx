import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
import Goose2Page from "./pages/Goose2Page";
import Goose3Page from "./pages/Goose3Page";
import Goose4Page from "./pages/Goose4Page";
import SubteamsPage from "./pages/SubteamsPage";
import MembersPage from "./pages/MembersPage";
import SponsorshipsPage from "./pages/SponsorshipsPage";
import ContactPage from "./pages/ContactPage";
import DonationsPage from "./pages/DonationsPage";
import Payload from "./pages/Payload.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subteams" element={<SubteamsPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/sponsorships" element={<SponsorshipsPage />} />
        <Route path="/payload" element={<Payload />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donations" element={<DonationsPage />} />
        <Route path="/goose2" element={<Goose2Page />} />
        <Route path="/goose3" element={<Goose3Page />} />
        <Route path="/goose4" element={<Goose4Page />} />
      </Routes>
    </>
  );
}
