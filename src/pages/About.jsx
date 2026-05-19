import Section from "../components/Section.jsx";
import "./About.css";

function About() {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "40+", label: "Completed Projects" },
    { value: "20+", label: "Client Partnerships" },
    { value: "99%", label: "Delivery Reliability" },
  ];

  const values = [
    {
      title: "Clarity over complexity",
      detail:
        "I keep systems understandable so teams can move quickly without sacrificing quality.",
    },
    {
      title: "Performance by default",
      detail:
        "Fast load times, efficient API boundaries, and smooth UX are built into every release.",
    },
    {
      title: "Ownership mindset",
      detail:
        "I care deeply about outcomes, not just tasks — from architecture to post-launch iteration.",
    },
  ];

  const timeline = [
    {
      year: "2024 - Present",
      role: "Senior Full-Stack Engineer",
      company: "InnovateTech Labs",
      description:
        "Leading architecture and delivery for modern SaaS products, including analytics dashboards and workflow automation platforms used by 50k+ users.",
    },
    {
      year: "2022 - 2024",
      role: "Full-Stack Engineer",
      company: "Quantum Solutions",
      description:
        "Built high-throughput APIs and internal tools using Node.js, PostgreSQL, and GraphQL. Improved release velocity with reusable component systems.",
    },
    {
      year: "2020 - 2022",
      role: "Junior Web Developer",
      company: "PixelForge Studios",
      description:
        "Delivered websites and marketing platforms for startups, improving accessibility, SEO, and conversion through better UI implementation.",
    },
  ];

  return (
    <div className="about-page page-shell fade-in">
      <Section
        id="about"
        title="About Me"
        subtitle="Engineering leader focused on scalable products, polished interfaces, and long-term maintainability."
      >
        {/* Intro Grid */}
        <div className="about-grid">
          <div className="about-bio glass">
            <h3>
              Who is <span className="text-gradient">Yash Bhut</span>?
            </h3>
            <p>
              I am a product-focused full-stack developer who enjoys
              transforming complex requirements into clear, high-impact software
              experiences. I bridge frontend craftsmanship with backend
              reliability to help teams ship confidently.
            </p>
            <p>
              I specialize in React ecosystems, Node.js services, API design,
              and robust component systems. Outside of work, I explore design
              systems, AI-assisted workflows, and automation to continuously
              improve delivery quality.
            </p>
          </div>

          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass transition">
                <span className="stat-value text-gradient">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Area */}
        <div className="timeline-section">
          <h3 className="timeline-section-title text-gradient">
            Professional Experience
          </h3>
          <div className="timeline-container">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item glass transition">
                <div className="timeline-dot"></div>
                <span className="timeline-year">{item.year}</span>
                <h4 className="timeline-role">{item.role}</h4>
                <h5 className="timeline-company">{item.company}</h5>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <article key={value.title} className="value-card glass transition">
              <h4>{value.title}</h4>
              <p>{value.detail}</p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default About;
