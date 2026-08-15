import Section from "../components/Section";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { useIsTablet } from "../hooks/useMediaQuery";
import { AboutValue, AboutHighlight } from "../types";

function About() {
  const isTablet = useIsTablet();

  const values: AboutValue[] = [
    {
      icon: "🎯",
      title: "Clarity Over Complexity",
      detail:
        "I build scalable systems with clean architecture so teams can iterate rapidly without incurring technical debt.",
    },
    {
      icon: "⚡",
      title: "Performance by Default",
      detail:
        "Fast load times, smooth UI rendering, and optimized API payloads are built into every release.",
    },
    {
      icon: "🤝",
      title: "Product Ownership",
      detail:
        "I care deeply about real user outcomes, working closely with founders, designers, and engineering teams.",
    },
  ];

  const highlights: AboutHighlight[] = [
    {
      period: "Full-Stack Development",
      role: "Web & Mobile Product Engineer",
      company: "Modern Web & App Ecosystems",
      description:
        "Architecting full-stack web applications and cross-platform mobile apps using React, Next.js, React Native, and Node.js REST services.",
    },
    {
      period: "Frontend Architecture",
      role: "React & Component Specialist",
      company: "Design Systems & UI Engineering",
      description:
        "Building reusable, accessible UI component libraries and state management patterns for enterprise dashboards and mobile applications.",
    },
    {
      period: "Backend Engineering",
      role: "API & Data Services",
      company: "Node.js & Database Systems",
      description:
        "Designing high-throughput API endpoints, MongoDB/PostgreSQL database schemas, and secure user authentication systems.",
    },
  ];

  return (
    <div
      className="animate-fade-in"
      style={{ paddingBottom: "var(--space-3xl)" }}
    >
      <SEO />
      <StructuredData type="about" />

      <Section
        id="about-page"
        badge="About Yash Bhut"
        title="Engineering Resilient Digital Products"
        subtitle="Product-minded software engineer specializing in React, React Native, Node.js, and modern full-stack architectures."
        headingLevel="h1"
      >
        {/* Bio Card */}
        <div
          className="locale-card"
          style={{
            padding: "var(--space-xl)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "var(--space-md)",
              color: "var(--color-text-primary)",
            }}
          >
            Building Software with Attention to Detail
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: "1.7",
              marginBottom: "var(--space-md)",
            }}
          >
            I am a full-stack engineer based in India with a strong focus on
            building fast, reliable, and beautifully polished software. My
            primary expertise spans{" "}
            <strong style={{ color: "var(--color-text-primary)" }}>
              React, Next.js, React Native, Node.js, Express, and MongoDB/SQL
              databases
            </strong>
            .
          </p>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: "1.7",
            }}
          >
            Whether developing healthcare admin portals, real-time AI
            receptionist consoles, financial education platforms, or
            patient-facing mobile apps, I bridge the gap between technical
            architecture and intuitive user experience.
          </p>
        </div>

        {/* Engineering Principles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "repeat(3, 1fr)",
            gap: "var(--space-lg)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              className="locale-card"
              style={{ padding: "var(--space-xl)" }}
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
                  fontSize: "1.5rem",
                  marginBottom: "var(--space-md)",
                }}
              >
                {v.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: "1.6",
                }}
              >
                {v.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.65rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "var(--space-xl)",
            color: "var(--color-text-primary)",
          }}
        >
          Key Areas of Experience
        </h2>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-lg)",
          }}
        >
          {highlights.map((item, idx) => (
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
                }}
              >
                {item.period}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginTop: "0.25rem",
                  marginBottom: "0.25rem",
                }}
              >
                {item.role}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-text-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                {item.company}
              </p>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: "1.6",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default About;
