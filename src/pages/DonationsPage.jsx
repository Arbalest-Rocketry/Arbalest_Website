import Footer from "../Footer";

import "./Donations.css";

export default function DonationsPage() {
  return (
    <>
      <section className="donate">
        <h1 className="donate-title">Support Arbalest Rocketry</h1>
        <p className="donate-intro">
          Your contribution fuels student innovation in Toronto, from designing avionics to
          building awesome rockets. Every dollar helps us test, iterate, and launch.
        </p>

        <div className="donate-grid">
          {/* e-Transfer */}
          <div className="donate-card">
            <h2>Interac e-Transfer</h2>
            <p>
              Send an e-Transfer to <strong>arbalestrocketry@gmail.com</strong>.
              Add a note with your name and “Donation” so we can thank you!
            </p>
            <a className="donate-btn" href="mailto:arbalestrocketry@gmail.com?subject=Donation%20to%20Arbalest%20Rocketry">
              Email Confirmation
            </a>
          </div>


          {/* Corporate Sponsorship */}
          <div className="donate-card">
            <h2>Corporate Sponsorship</h2>
            <p>
              Join us as a sponsor and help accelerate Canadian student rocketry.
              We offer recognition tiers and collaboration opportunities.
            </p>
            <a className="donate-btn " href="/#sponsorships">
              View Sponsor Info
            </a>
            <a className="donate-link" href="/#contact">Contact our team →</a>
          </div>
        </div>



        {/* Impact / Transparency */}
        <div className="donate-impact">
          <h3>Where Your Donation Goes</h3>
          <ul>
            <li> Avionics & sensors for flight computers and telemetry</li>
            <li> Composite materials, recovery, and airframe fabrication</li>
            <li> Launch fees, test hardware, and competition logistics</li>
            <li> Outreach & recruitment to grow Toronto’s next engineers</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="donate-faq">
          <h3>FAQ</h3>
          <details>
            <summary>Are donations tax-deductible?</summary>
            <p>
              At the moment, donations are not tax-receiptable. If this changes, we’ll update this page.
            </p>
          </details>
          <details>
            <summary>Can I make a monthly donation?</summary>
            <p>
              Not at the moment but we are working on it
            </p>
          </details>
          <details>
            <summary>How do I get listed as a sponsor?</summary>
            <p>
              Email us at <a href="mailto:arbalestrocketry@gmail.com">arbalestrocketry@gmail.com</a> or visit the Sponsors page for tier details.
            </p>
          </details>
        </div>
      </section>

      <Footer />
    </>
  );
}

