import { useState, FormEvent, ChangeEvent } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import { useIsTablet } from "../hooks/useMediaQuery";
import { ContactFormData, FormStatus } from "../types";

function Contact() {
  const isTablet = useIsTablet();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (id === "contact-page-name")
      setFormData((prev) => ({ ...prev, name: value }));
    if (id === "contact-page-email")
      setFormData((prev) => ({ ...prev, email: value }));
    if (id === "contact-page-message")
      setFormData((prev) => ({ ...prev, message: value }));
  };

  return (
    <div
      className="animate-fade-in"
      style={{ paddingBottom: "var(--space-3xl)" }}
    >
      <Section
        id="contact-page"
        badge="Contact"
        title="Get In Touch"
        subtitle="Have a software project, engineering team opportunity, or mobile app request? Let's discuss."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "0.9fr 1.1fr",
            gap: "var(--space-xl)",
          }}
        >
          {/* Direct Details */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: "var(--space-lg)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(var(--color-primary-rgb), 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                }}
              >
                📬
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    display: "block",
                  }}
                >
                  Email
                </span>
                <a
                  href="mailto:yashubhut@gmail.com"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                  }}
                >
                  yashubhut@gmail.com
                </a>
              </div>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: "var(--space-lg)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(var(--color-primary-rgb), 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                }}
              >
                📍
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    display: "block",
                  }}
                >
                  Location
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  Gujarat, India
                </span>
              </div>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: "var(--space-lg)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(var(--color-primary-rgb), 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                }}
              >
                💼
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    display: "block",
                  }}
                >
                  Open to Work
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  Full-Time Software Roles & Freelance Projects
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel" style={{ padding: "var(--space-xl)" }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
              }}
            >
              <div>
                <label
                  htmlFor="contact-page-name"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    marginBottom: "0.35rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Name
                </label>
                <input
                  id="contact-page-name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg-base)",
                    color: "var(--color-text-primary)",
                    fontSize: "0.9375rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-page-email"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    marginBottom: "0.35rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Email
                </label>
                <input
                  id="contact-page-email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg-base)",
                    color: "var(--color-text-primary)",
                    fontSize: "0.9375rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-page-message"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    marginBottom: "0.35rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-page-message"
                  rows={4}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg-base)",
                    color: "var(--color-text-primary)",
                    fontSize: "0.9375rem",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <Button type="submit" variant="primary" size="lg">
                Send Message
              </Button>

              {status === "error" && (
                <p
                  style={{
                    color: "#f87171",
                    fontSize: "0.875rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Please fill out all fields before sending.
                </p>
              )}
              {status === "sending" && (
                <p
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "0.875rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Sending message...
                </p>
              )}
              {status === "success" && (
                <p
                  style={{
                    color: "#4ade80",
                    fontSize: "0.875rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
