import "./Subteams.css";
import Footer from "../Footer";

export default function SubteamsPage() {
  return (
    <>
      <section className="structure">
        <h1 className="structure-title">Arbalest Rocketry Club Structure</h1>

        <div className="org-chart">
          {/* Top level */}
          <div className="org-row">
            <div className="org-box pink">President / Chief Engineer</div>
          </div>

          <div className="org-row">
            <div className="org-box yellow">Vice President</div>
            <div className="org-box orange">Academic Liaison</div>
            <div className="org-box green">Administrative Supervisor</div>
          </div>

          <div className="org-row">
            <div className="org-box gray">Mechanical Lead</div>
            <div className="org-box light-blue">Avionics Lead</div>
            <div className="org-box purple">Liquid Lead</div>
            <div className="org-box red">Social Media Manager</div>
            <div className="org-box blue">Sponsorship Manager</div>
          </div>

          {/* Mechanical team */}
          <div className="org-subrow">
            <div className="org-sub gray">
              <h3>Simulations Lead</h3>
              <p>Oversees aerodynamic and structural simulations.</p>
            </div>
            <div className="org-sub gray">
              <h3>Controls Systems Lead</h3>
              <p>Handles actuation, servos, and feedback systems.</p>
            </div>
            <div className="org-sub gray">
              <h3>Mech Member</h3>
              <p>Supports fabrication, testing, and assembly.</p>
            </div>
          </div>

          {/* Avionics team */}
          <div className="org-subrow">
            <div className="org-sub light-blue">
              <h3>Ground Station Lead</h3>
              <p>Maintains real-time telemetry and communications.</p>
            </div>
            <div className="org-sub light-blue">
              <h3>Flight Computer Lead</h3>
              <p>Designs and programs onboard computers.</p>
            </div>
            <div className="org-sub light-blue">
              <h3>Flight Computer Software Lead</h3>
              <p>Develops firmware and data processing tools.</p>
            </div>
          </div>

          {/* Liquid team */}
          <div className="org-subrow">
            <div className="org-sub purple">
              <h3>Test Stand Designer</h3>
              <p>Builds and operates liquid test infrastructure.</p>
            </div>
            <div className="org-sub purple">
              <h3>Liquid Member</h3>
              <p>Assists with fuel systems and engine analysis.</p>
            </div>
          </div>

          {/* Media & Sponsorship */}
          <div className="org-subrow">
            <div className="org-sub red">
              <h3>Social Media Member</h3>
              <p>Handles posts, content, and digital outreach.</p>
            </div>
            <div className="org-sub blue">
              <h3>Sponsorship Member</h3>
              <p>Connects with partners and manages funding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer added at the bottom */}
      <Footer />
    </>
  );
}
