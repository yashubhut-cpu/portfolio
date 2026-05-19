import { useState } from "react";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const collaborationPoints = [
    "Product feature development and MVP builds",
    "Frontend performance optimization and UI modernization",
    "API integrations, automation, and platform scaling",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }
    setStatus("Sending...");

    // Simulate API request
    setTimeout(() => {
      setStatus("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="contact-page page-shell fade-in">
      <Section
        id="contact"
        title="Get In Touch"
        subtitle="Have a project in mind or need a technical partner to scale your product? Let’s talk."
      >
        <div className="contact-grid">
          {/* Info Panels */}
          <div className="contact-info-panel">
            <div className="info-card glass transition">
              <div className="info-icon flex-center">📬</div>
              <div className="info-details">
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:yashbhut@example.com">yashbhut@example.com</a>
                </p>
              </div>
            </div>

            <div className="info-card glass transition">
              <div className="info-icon flex-center">📍</div>
              <div className="info-details">
                <h4>Current Location</h4>
                <p>Gujarat, India</p>
              </div>
            </div>

            <div className="info-card glass transition">
              <div className="info-icon flex-center">💼</div>
              <div className="info-details">
                <h4>Open to Work</h4>
                <p>Full‑Time & Freelance Contracts</p>
              </div>
            </div>

            <div className="collaboration-card glass">
              <h4>How I can help</h4>
              <ul>
                {collaborationPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper glass">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input glass transition"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input glass transition"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input glass transition"
                  placeholder="Let's build something epic together..."
                  required
                ></textarea>
              </div>

              <div className="form-submit">
                <Button type="submit" variant="primary" className="submit-btn">
                  Send Message
                </Button>
              </div>

              {status && (
                <div
                  className={`status-message glass ${status.includes("successfully") ? "success" : status.includes("fill") ? "error" : "loading"}`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
