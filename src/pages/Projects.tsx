import { useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { useIsTablet } from "../hooks/useMediaQuery";
import { projectsData } from "../data/projectsData";
import { ProjectCategory } from "../types";

function Projects() {
  const isTablet = useIsTablet();
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = [
    "All",
    "Full-Stack",
    "Frontend",
    "Mobile",
    "Backend",
    "Design",
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === filter);

  return (
    <div
      className="animate-fade-in"
      style={{ paddingBottom: "var(--space-3xl)" }}
    >
      <Section
        id="projects-page"
        badge="Portfolio"
        title="Complete Project Catalog (18 Projects)"
        subtitle="Explore the complete collection of web platforms, mobile applications, backend services, and tools built throughout my career."
      >
        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "var(--space-2xl)",
          }}
        >
          {categories.map((cat) => {
            const isActive = filter === cat;
            const count =
              cat === "All"
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  padding: "0.45rem 1.1rem",
                  borderRadius: "var(--radius-full)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: isActive
                    ? "1px solid var(--color-primary)"
                    : "1px solid var(--color-border)",
                  background: isActive
                    ? "var(--color-primary)"
                    : "var(--color-bg-card)",
                  color: isActive
                    ? "hsl(222, 24%, 6%)"
                    : "var(--color-text-secondary)",
                  boxShadow: isActive
                    ? "0 4px 14px rgba(var(--color-primary-rgb), 0.35)"
                    : "none",
                }}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet
              ? "1fr"
              : "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "var(--space-xl)",
          }}
        >
          {filteredProjects.map((project) => (
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
      </Section>
    </div>
  );
}

export default Projects;
