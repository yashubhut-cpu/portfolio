import { useState, FormEvent, ChangeEvent } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import useTheme from "../hooks/useTheme";
import { useIsTablet, useIsSmallMobile } from "../hooks/useMediaQuery";
import heroImg from "../assets/hero.png";
import { featuredProjects } from "../data/projectsData";
import { TechCategory, CareerHighlight, ContactFormData, FormStatus } from "../types";

function Home() {
  const { isDark } = useTheme();
  const isTablet = useIsTablet();
  const isSmallMobile = useIsSmallMobile();

  // Contact form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    if (id === "contact-name") setFormData((prev) => ({ ...prev, name: value }));
    if (id === "contact-email") setFormData((prev) => ({ ...prev, email: value }));
    if (id === "contact-message") setFormData((prev) => ({ ...prev, message: value }));
  };

  // Tech stack categories
  const techCategories: TechCategory[] = [
    {
      title: "Frontend Development",
      icon: "⚡",
      skills: [
        "React",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Redux Toolkit",
        "Zustand",
      ],
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      skills: [
        "React Native CLI",
        "Expo Go",
        "React Navigation",
        "iOS & Android Builds",
        "Mobile UI Design",
        "Context API",
      ],
    },
    {
      title: "Backend & Database",
      icon: "🛠️",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL APIs",
        "MongoDB",
        "PostgreSQL",
        "JSON Web Tokens",
        "Mongoose",
      ],
    },
    {
      title: "Tools & Ecosystem",
      icon: "🔧",
      skills: [
        "Git & GitHub",
        "Docker",
        "Vite",
        "Webpack",
        "Vercel / Hosting",
        "Postman",
        "Figma Design",
        "ESLint",
      ],
    },
  ];

  // Career Highlights
  const careerHighlights: CareerHighlight[] = [
    {
      period: "Full-Stack Software Development",
      role: "Web & Mobile Product Engineer",
      details:
        "Architected scalable React frontends, robust Node.js APIs, and responsive mobile apps across healthcare, finance, logistics, and productivity domains.",
    },
    {
      period: "Mobile Application Engineering",
      role: "React Native Specialist",
      details:
        "Built production-grade cross-platform apps using React Native CLI and Expo, optimizing native bridge performance, push notifications, and local storage.",
    },
    {
      period: "Product Design Systems",
      role: "UI & Component Architect",
      details:
        "Designed clean, reusable component design systems that reduced development cycles and ensured responsive consistency across web and mobile viewports.",
    },
  ];

  return (
    <div
      className="animate-fade-in"
      style={{ paddingBottom: "var(--space-3xl)" }}
    >
      <SEO />
      <StructuredData type="home" />

      {/* 1. HERO SECTION */}
      <section
        style={{
          paddingTop: isTablet ? "var(--space-xl)" : "var(--space-2xl)",
          paddingBottom: "var(--space-2xl)",
          position: "relative",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "1.15fr 0.85fr",
            gap: "var(--space-2xl)",
            alignItems: "center",
            textAlign: isTablet ? "center" : "left",
          }}
        >
          {/* Hero Left Content */}
          <div>
            <div
              className="locale-badge"
              style={{ marginBottom: "var(--space-md)" }}
            >
              <span>🚀 Full-Stack & React Native Engineer</span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: isSmallMobile
                  ? "2.25rem"
                  : isTablet
                  ? "2.85rem"
                  : "3.75rem",
                fontWeight: 800,
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "var(--color-text-primary)",
                marginBottom: "var(--space-md)",
              }}
            >
              Hi, I'm <span className="text-gradient">Yash Bhut</span>
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--color-text-secondary)",
                lineHeight: "1.65",
                maxWidth: "600px",
                marginBottom: "var(--space-xl)",
                marginLeft: isTablet ? "auto" : "0",
                marginRight: isTablet ? "auto" : "0",
              }}
            >
              I design and engineer modern web platforms and cross-platform
              mobile apps. Specialized in{" "}
              <strong style={{ color: "var(--color-text-primary)" }}>
                React, Next.js, React Native, and Node.js
              </strong>{" "}
              backend architectures.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: isTablet ? "center" : "flex-start",
                flexWrap: "wrap",
              }}
            >
              <Button href="#projects" variant="primary" size="lg">
                View All Projects ↗
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get In Touch ↗
              </Button>
            </div>
          </div>

          {/* Hero Right Visual Frame */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              className="locale-card animate-float"
              style={{
                padding: "var(--space-sm)",
                maxWidth: "400px",
                width: "100%",
                background: isDark ? "var(--color-bg-card)" : "#ffffff",
              }}
            >
              <img
                src={heroImg}
                alt="Developer visual workspace"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "var(--radius-lg)",
                  display: "block",
                  border: "1.5px solid var(--color-border)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT / INTRODUCTION */}
      <Section
        id="about"
        badge="About Me"
        title="Engineering Quality & Product Value"
        subtitle="Focused on delivering clean code, resilient API architectures, and user-centered web and mobile applications."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "repeat(3, 1fr)",
            gap: "var(--space-lg)",
          }}
        >
          <div className="locale-card" style={{ padding: "var(--space-xl)" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                background: "var(--color-bg-pill)",
                border: "1.5px solid rgba(var(--color-primary-rgb), 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                marginBottom: "var(--space-md)",
              }}
            >
              💎
            </div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              Frontend Precision
            </h3>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.9375rem",
                lineHeight: "1.6",
              }}
            >
              Crafting modular React and Next.js interfaces with structured state
              management, high Lighthouse performance, and responsive UI
              elegance.
            </p>
          </div>

          <div className="locale-card" style={{ padding: "var(--space-xl)" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                background: "var(--color-bg-pill)",
                border: "1.5px solid rgba(var(--color-primary-rgb), 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                marginBottom: "var(--space-md)",
              }}
            >
              ⚡
            </div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              Backend Reliability
            </h3>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.9375rem",
                lineHeight: "1.6",
              }}
            >
              Building secure REST & GraphQL API microservices with Node.js and
              Express, connected to optimized MongoDB and SQL database layers.
            </p>
          </div>

          <div className="locale-card" style={{ padding: "var(--space-xl)" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                background: "var(--color-bg-pill)",
                border: "1.5px solid rgba(var(--color-primary-rgb), 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                marginBottom: "var(--space-md)",
              }}
            >
              📲
            </div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              Cross-Platform Mobility
            </h3>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.9375rem",
                lineHeight: "1.6",
              }}
            >
              Developing iOS and Android mobile applications using React Native CLI
              and Expo Go with smooth animations and native feature access.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. FEATURED PROJECTS */}
      <Section
        id="projects"
        badge="Portfolio"
        title="Featured Work & Case Studies"
        subtitle="A selection of web platforms, admin panels, mobile apps, and backend APIs built for real-world impact."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet
              ? "1fr"
              : "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "var(--space-xl)",
          }}
        >
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              image={project.image}
              isLogo={project.isLogo}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          <Button to="/projects" variant="primary" size="lg">
            Browse All 18 Projects →
          </Button>
        </div>
      </Section>

      {/* 4. SKILLS & TECHNOLOGY */}
      <Section
        id="skills"
        badge="Technologies"
        title="Technical Toolkit"
        subtitle="Languages, frameworks, and modern tools I use daily to build robust digital solutions."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "repeat(2, 1fr)",
            gap: "var(--space-xl)",
          }}
        >
          {techCategories.map((cat, idx) => (
            <div
              key={idx}
              className="locale-card"
              style={{ padding: "var(--space-xl)" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "var(--space-lg)",
                }}
              >
                <span style={{ fontSize: "1.6rem" }}>{cat.icon}</span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {cat.title}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      padding: "0.35rem 0.85rem",
                      borderRadius: "var(--radius-full)",
                      background: "var(--color-bg-pill)",
                      border: "1.5px solid rgba(var(--color-primary-rgb), 0.3)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. EXPERIENCE */}
      <Section
        id="experience"
        badge="Experience"
        title="Professional Milestones"
        subtitle="Key focus areas and responsibilities in web and mobile engineering."
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-lg)",
          }}
        >
          {careerHighlights.map((item, idx) => (
            <div
              key={idx}
              className="locale-card"
              style={{
                padding: "var(--space-xl)",
                borderLeft: "5px solid var(--color-primary)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                {item.period}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {item.role}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: "1.6",
                }}
              >
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. CONTACT SECTION */}
      <Section
        id="contact"
        badge="Contact"
        title="Let's Build Something Great"
        subtitle="Have a new project, product initiative, or engineering role in mind? Get in touch."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "0.9fr 1.1fr",
            gap: "var(--space-xl)",
          }}
        >
          {/* Info Side */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            <div
              className="locale-card"
              style={{
                padding: "var(--space-lg)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-bg-pill)",
                  border: "1.5px solid rgba(var(--color-primary-rgb), 0.3)",
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
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
                >
                  Email
                </span>
                <a
                  href="mailto:yashubhut@gmail.com"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                  }}
                >
                  yashubhut@gmail.com
                </a>
              </div>
            </div>

            <div
              className="locale-card"
              style={{
                padding: "var(--space-lg)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-bg-pill)",
                  border: "1.5px solid rgba(var(--color-primary-rgb), 0.3)",
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
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
                >
                  Location
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                  }}
                >
                  Gujarat, India
                </span>
              </div>
            </div>

            <div
              className="locale-card"
              style={{
                padding: "var(--space-lg)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-bg-pill)",
                  border: "1.5px solid rgba(var(--color-primary-rgb), 0.3)",
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
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
                >
                  Availability
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                  }}
                >
                  Full-time roles & Select Contracts
                </span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="locale-card" style={{ padding: "var(--space-xl)" }}>
            <form
              onSubmit={handleFormSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
              }}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    marginBottom: "0.35rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    border: "2px solid var(--color-border)",
                    background: "var(--color-bg-base)",
                    color: "var(--color-text-primary)",
                    fontSize: "0.9375rem",
                    outline: "none",
                    fontFamily: "var(--font-body)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    marginBottom: "0.35rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    border: "2px solid var(--color-border)",
                    background: "var(--color-bg-base)",
                    color: "var(--color-text-primary)",
                    fontSize: "0.9375rem",
                    outline: "none",
                    fontFamily: "var(--font-body)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    marginBottom: "0.35rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    border: "2px solid var(--color-border)",
                    background: "var(--color-bg-base)",
                    color: "var(--color-text-primary)",
                    fontSize: "0.9375rem",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "var(--font-body)",
                  }}
                />
              </div>

              <Button type="submit" variant="primary" size="lg">
                Send Message 🚀
              </Button>

              {status === "error" && (
                <p
                  style={{
                    color: "#f87171",
                    fontSize: "0.875rem",
                    marginTop: "0.5rem",
                    fontWeight: 600,
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
                    fontWeight: 600,
                  }}
                >
                  Sending message...
                </p>
              )}
              {status === "success" && (
                <p
                  style={{
                    color: "#10b981",
                    fontSize: "0.875rem",
                    marginTop: "0.5rem",
                    fontWeight: 600,
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

export default Home;
