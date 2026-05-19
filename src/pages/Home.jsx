import Button from "../components/Button.jsx";
import "./Home.css";

function Home() {
  const highlights = [
    {
      title: "Product-minded engineering",
      detail:
        "I design and ship user-first products with strong UX thinking, not just screens and APIs.",
    },
    {
      title: "Reliable delivery cadence",
      detail:
        "From roadmap to release, I focus on measurable outcomes, performance, and maintainable architecture.",
    },
    {
      title: "Cross-functional collaboration",
      detail:
        "I work closely with founders, designers, and PMs to turn ambiguity into clear execution.",
    },
  ];

  const metrics = [
    { value: "40+", label: "Projects launched" },
    { value: "18", label: "Global clients" },
    { value: "98%", label: "On-time delivery" },
    { value: "6+", label: "Years building web products" },
  ];

  return (
    <div className="home-container page-shell fade-in">
      <div className="hero-section container">
        <div className="hero-content">
          <div className="hero-badge glass">
            <span>
              🚀 Available for Select Freelance & Full-time Opportunities
            </span>
          </div>
          <h1 className="hero-title">
            Hi, I am <span className="text-gradient">Yash Bhut</span>
          </h1>
          <h2 className="hero-subtitle">
            I Build Modern, Scalable, and Delightful Web Products
          </h2>
          <p className="hero-description">
            Full-stack engineer focused on React ecosystems, backend
            architecture, and polished user interfaces. I partner with startups
            and growth teams to ship features faster, improve product quality,
            and create digital experiences that actually convert.
          </p>
          <div className="hero-actions">
            <Button to="/projects" variant="primary">
              View My Work
            </Button>
            <Button to="/contact" variant="outline">
              Let's Connect
            </Button>
          </div>
        </div>

        <div className="hero-visual float">
          <div className="hero-image-wrapper glass">
            <img
              src="/hero.png"
              alt="Developer Visual Space"
              className="hero-img"
            />
            <div className="glow-orb"></div>
          </div>
        </div>
      </div>

      <section className="home-metrics container">
        {metrics.map((item) => (
          <article key={item.label} className="metric-card glass transition">
            <strong className="metric-value text-gradient">{item.value}</strong>
            <span className="metric-label">{item.label}</span>
          </article>
        ))}
      </section>

      <section className="home-highlights container">
        {highlights.map((item) => (
          <article key={item.title} className="highlight-card glass transition">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Home;
