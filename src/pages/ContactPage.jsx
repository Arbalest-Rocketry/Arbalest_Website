import Footer from "../Footer";

import "./Contact.css";

export default function ContactPage() {
  return (
    <>
      <section className="contact-section">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-intro">
          Whether you’re a student looking to join Arbalest Rocketry or a sponsor interested in supporting our mission,  
          we’d love to hear from you!
        </p>

        <div className="contact-grid">
          {/* Students */}
          <div className="contact-card student">
            <h2>Students</h2>
            <p>
              Join our community of passionate engineers, innovators, and makers.  
              Connect with us on Discord to get involved in projects, events, and meetings.
            </p>
            <a
              href="https://discord.gg/qDub9Uvx8J"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Join Our Discord
            </a>
          </div>

          {/* Sponsors */}
          <div className="contact-card sponsor">
            <h2>Sponsors</h2>
            <p>
              Interested in supporting the next generation of rocketeers?  
              Reach out to our team for sponsorship opportunities, partnerships, and collaborations.
            </p>
            <a
              href="mailto:arbalestrocketry@gmail.com"
              className="contact-btn"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

