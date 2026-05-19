import { useState } from "react";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import "./Projects.css";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Full‑Stack"];

  const projectsData = [
    {
      image: "/project1.png",
      title: "NeonSpace SaaS platform",
      description:
        "Enterprise dashboard platform with role-based analytics, feature flags, and high-performance chart rendering for operational teams.",
      tags: ["React", "CSS Modules", "ChartJS", "Vite"],
      category: "Frontend",
      link: "https://github.com",
    },
    {
      image: "/project2.png",
      title: "Quantum Portal Gateway",
      description:
        "Secure payment orchestration API with multi-tenant routing, retries, reconciliation workflows, and observability tooling.",
      tags: ["NodeJS", "Express", "PostgreSQL", "Redis"],
      category: "Backend",
      link: "https://github.com",
    },
    {
      image: "/project3.png",
      title: "Aether Social network",
      description:
        "Social content platform with real-time chat, media workflows, and modular profile experiences built for scale.",
      tags: ["React", "WebSockets", "GraphQL", "MongoDB"],
      category: "Full‑Stack",
      link: "https://github.com",
    },
    {
      image: "/project1.png",
      title: "OpsLens Monitoring Suite",
      description:
        "Frontend-heavy observability suite featuring customizable data widgets, team alerting, and usage heatmaps.",
      tags: ["React", "TypeScript", "D3", "TanStack Query"],
      category: "Frontend",
      link: "https://github.com",
    },
    {
      image: "/project2.png",
      title: "FlowBridge Integration Engine",
      description:
        "Backend integration platform connecting payment, CRM, and inventory systems through queue-based pipelines.",
      tags: ["NodeJS", "BullMQ", "PostgreSQL", "Docker"],
      category: "Backend",
      link: "https://github.com",
    },
    {
      image: "/project3.png",
      title: "PulseCommerce Platform",
      description:
        "Full-stack commerce experience with personalized storefronts, checkout optimization, and admin automation.",
      tags: ["React", "NodeJS", "PostgreSQL", "Stripe"],
      category: "Full‑Stack",
      link: "https://github.com",
    },
  ];

  const deliveryStats = [
    { label: "Avg Lighthouse score", value: "95+" },
    { label: "Largest team project", value: "12 engineers" },
    { label: "Fastest MVP shipped", value: "4 weeks" },
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === filter);

  return (
    <div className="projects-page page-shell fade-in">
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="A curated collection of my latest work, highlighting clean code and interactive UX."
      >
        {/* Category Filters */}
        <div className="filter-wrapper flex-center">
          <div className="filter-container glass">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-btn transition ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-grid-item fade-in">
              <Card
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </div>
          ))}
        </div>

        <div className="delivery-stats">
          {deliveryStats.map((stat) => (
            <article
              key={stat.label}
              className="delivery-card glass transition"
            >
              <span className="delivery-value text-gradient">{stat.value}</span>
              <span className="delivery-label">{stat.label}</span>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Projects;
