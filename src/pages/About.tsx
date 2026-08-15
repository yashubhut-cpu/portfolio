import Section from "../components/Section";
import { useIsTablet } from "../hooks/useMediaQuery";
import { AboutValue, AboutHighlight } from "../types";

function About() {
  const isTablet = useIsTablet();

  const values: AboutValue[] = [
    {
      icon: "🎯",
      title: "Clarity over complexity",
      detail:
        "I build scalable systems with clean architecture so teams can iterate rapidly without incurring technical debt.",
    },
    {
      icon: "⚡",
      title: "Performance by default",
      detail:
        "Fast load times, responsive UI render pipelines, and optimized API payloads are built into every release.",
    },
    {
      icon: "🤝",
      title: "Product ownership",
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
        "Designing high-throughput API endpoints, MongoDB/PostgreSQL database schemas, and secure user authentication pipelines.",
    },
  ];

  return (
    <div
      className="animate-fade-in"
      style={{ paddingBottom: "var(--space-3xl)" }}
    >
      <Section
        id="about-page"
        badge="About Yash Bhut"
        title="Engineering Resilient Digital Products"
        subtitle="Product-minded software engineer specialized in React, React Native, Node.js, and modern full-stack architectures."
      >
        {/* Bio Card */}
        <div
          className="glass-panel"
          style={{
            padding: "var(--space-xl)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "var(--space-md)",
              color: "var(--color-text-primary)",
            }}
          >
            Building Software with Attention to Detail
          </h3>
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
            <strong>
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
              className="glass-panel"
              style={{ padding: "var(--space-xl)" }}
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
                {v.icon}
              </div>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {v.title}
              </h4>
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
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "var(--space-xl)",
            color: "var(--color-text-primary)",
          }}
        >
          Key Areas of Experience
        </h3>
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
              className="glass-panel"
              style={{
                padding: "var(--space-xl)",
                borderLeft: "4px solid var(--color-primary)",
              }}
            >
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {item.period}
              </span>
              <h4
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginTop: "0.25rem",
                  marginBottom: "0.25rem",
                }}
              >
                {item.role}
              </h4>
              <h5
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                {item.company}
              </h5>
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
