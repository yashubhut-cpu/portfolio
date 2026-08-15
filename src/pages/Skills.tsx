import Section from "../components/Section";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { useIsTablet } from "../hooks/useMediaQuery";

interface SkillGroup {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

function Skills() {
  const isTablet = useIsTablet();

  const skillGroups: SkillGroup[] = [
    {
      title: "Frontend Engineering",
      icon: "💻",
      description:
        "Building responsive, fast, and accessible user interfaces for web platforms and dashboards.",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Redux Toolkit",
        "Zustand",
        "Material UI",
        "Framer Motion",
      ],
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      description:
        "Developing cross-platform iOS and Android mobile apps with native capabilities.",
      skills: [
        "React Native CLI",
        "Expo Go",
        "React Navigation",
        "Mobile UI Design",
        "Native Storage",
        "Push Notifications",
        "Cross-Platform Builds",
      ],
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      description:
        "Architecting server-side APIs, microservices, and database persistence layers.",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL APIs",
        "MongoDB",
        "Mongoose ODM",
        "PostgreSQL",
        "JWT Auth",
      ],
    },
    {
      title: "Tooling & DevOps",
      icon: "🚀",
      description:
        "Managing version control workflows, containerization, and automated deployments.",
      skills: [
        "Git / GitHub",
        "Docker",
        "Vite",
        "Webpack",
        "Vercel",
        "Postman API",
        "Figma",
        "npm / yarn / pnpm",
      ],
    },
  ];

  return (
    <div
      className="animate-fade-in"
      style={{ paddingBottom: "var(--space-3xl)" }}
    >
      <SEO />
      <StructuredData type="skills" />

      <Section
        id="skills-page"
        badge="Skills & Capabilities"
        title="Technical Stack & Expertise"
        subtitle="Core programming languages, frameworks, libraries, and development tools I work with."
        headingLevel="h1"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "repeat(2, 1fr)",
            gap: "var(--space-xl)",
          }}
        >
          {skillGroups.map((group, idx) => (
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
                  marginBottom: "var(--space-sm)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-bg-pill)",
                    border: "1.5px solid rgba(var(--color-primary-rgb), 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.35rem",
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {group.title}
                </h3>
              </div>

              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9375rem",
                  marginBottom: "var(--space-lg)",
                  lineHeight: "1.5",
                }}
              >
                {group.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill, sIdx) => (
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
    </div>
  );
}

export default Skills;
