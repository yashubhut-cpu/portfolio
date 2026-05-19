import Section from "../components/Section.jsx";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Architecture",
      skills: [
        { name: "React / React Native", level: 90 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "HTML5 / CSS3 / Sass", level: 95 },
        { name: "State Management (Redux/Zustand)", level: 80 },
      ],
    },
    {
      title: "Backend & Infrastructure",
      skills: [
        { name: "Node.js / Express", level: 85 },
        { name: "GraphQL / REST APIs", level: 90 },
        { name: "SQL (PostgreSQL/MySQL)", level: 80 },
        { name: "NoSQL (MongoDB/Redis)", level: 75 },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git / GitHub Workflow", level: 90 },
        { name: "Docker Containers", level: 70 },
        { name: "CI/CD Pipelines", level: 75 },
        { name: "AWS (S3/EC2/Amplify)", level: 80 },
      ],
    },
  ];

  const serviceAreas = [
    {
      title: "Frontend Systems",
      detail:
        "Accessible interfaces, reusable component architecture, responsive layouts, and design system integration.",
    },
    {
      title: "Backend Engineering",
      detail:
        "Scalable API contracts, service decomposition, queue-based workflows, and secure data handling.",
    },
    {
      title: "Delivery & Quality",
      detail:
        "CI/CD pipelines, testing workflows, and observability to keep releases stable and fast.",
    },
  ];

  return (
    <div className="skills-page page-shell fade-in">
      <Section
        id="skills"
        title="My Toolkit"
        subtitle="An overview of the languages, frameworks, and technologies I rely on to build resilient digital architectures."
      >
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-card glass">
              <h3 className="category-title text-gradient">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="progress-bar-container glass">
                      <div
                        className="progress-bar-fill"
                        style={{ "--width-percent": `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="service-grid">
          {serviceAreas.map((service) => (
            <article
              key={service.title}
              className="service-card glass transition"
            >
              <h4>{service.title}</h4>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Skills;
