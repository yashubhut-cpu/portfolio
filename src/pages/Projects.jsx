import { useState } from "react";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import useTheme from "../hooks/useTheme";
import { useIsTablet } from "../hooks/useMediaQuery";
import { glass, textGradient, SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS, TRANSITION } from "../utils/styles";

function Projects() {
  const theme = useTheme();
  const isTablet = useIsTablet();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Full‑Stack", "Mobile", "Design"];

  const projectsData = [
    {
      image: "/project1.png",
      title: "BCT - Base camp trading",
      description:
        "Financial trading education dashboard and community hub featuring real-time market indicators, learning resources, and trading room integration.",
      tags: ["Next.js", "React", "Redux", "Tailwind CSS"],
      category: "Full‑Stack",
      link: "#",
    },
    {
      image: "/project2.png",
      title: "MHC - Admin panel",
      description:
        "Comprehensive administrative dashboard for Men's Health Clinic to manage doctor schedules, patient EMR, digital prescriptions, and billing pipelines.",
      tags: ["React.js", "Material UI", "Redux Toolkit", "ChartJS"],
      category: "Frontend",
      link: "#",
    },
    {
      image: "/project3.png",
      title: "MHC - Mobile application (Expo Go)",
      description:
        "Patient-facing mobile application built on Expo Go, allowing secure booking, virtual telehealth consultations, and wellness product purchasing.",
      tags: ["React Native", "Expo Go", "React Navigation", "Context API"],
      category: "Mobile",
      link: "#",
    },
    {
      image: "/project1.png",
      title: "MHC - Mobile application (RN CLI)",
      description:
        "Production-grade cross-platform patient application built using React Native CLI, featuring native performance, push notifications, and payment gateways.",
      tags: ["React Native CLI", "TypeScript", "Redux", "Native Modules"],
      category: "Mobile",
      link: "#",
    },
    {
      image: "/project2.png",
      title: "MHC - Landing page",
      description:
        "Highly performant and SEO-optimized public landing website for Men's Health Clinic designed to capture leads and drive appointment bookings.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "Frontend",
      link: "#",
    },
    {
      image: "/project3.png",
      title: "MHC - Desktop web-application",
      description:
        "Comprehensive desktop portal for patients to take self-assessments, view medical records, and manage billing details online.",
      tags: ["Next.js", "React", "REST API", "Tailwind CSS"],
      category: "Full‑Stack",
      link: "#",
    },
    {
      image: "/project1.png",
      title: "Marvelus berries - Admin panel",
      description:
        "Internal operations and logistics panel for a commercial berry agricultural group to track harvests, log work hours, and manage retail supply chains.",
      tags: ["React.js", "Tailwind CSS", "Recharts", "Context API"],
      category: "Frontend",
      link: "#",
    },
    {
      image: "/project2.png",
      title: "HR-Lite - Mobile Application",
      description:
        "A lightweight mobile HR assistant enabling employee check-ins, time tracking, vacation requests, and corporate memo notifications.",
      tags: ["React Native CLI", "JavaScript", "Context API", "Local Storage"],
      category: "Mobile",
      link: "#",
    },
    {
      image: "/project3.png",
      title: "Fitnova - Mobile Application",
      description:
        "A wellness and activity tracker app featuring custom exercise logging, personalized meal planners, and calorie counters.",
      tags: ["React Native CLI", "TypeScript", "Redux Toolkit", "SVG Charts"],
      category: "Mobile",
      link: "#",
    },
    {
      image: "/project1.png",
      title: "RBX Calculator - Mobile App",
      description:
        "Roblox utility companion app allowing fans to compute virtual currency exchanges, log achievements, and participate in trivia.",
      tags: ["React Native CLI", "JavaScript", "Google AdMob", "Context API"],
      category: "Mobile",
      link: "#",
    },
    {
      image: "/project2.png",
      title: "FFSkin - Mobile Application",
      description:
        "Companion utility app for customization visualization, providing diamond calculators and interactive configuration previews.",
      tags: ["React Native CLI", "JavaScript", "AdMob SDK", "React Navigation"],
      category: "Mobile",
      link: "#",
    },
    {
      image: "/project3.png",
      title: "OZshut - Admin panel",
      description:
        "Administrative ERP portal for a roller shutters company, managing leads pipelines, onsite quotes, client invoices, and dispatch logistics.",
      tags: ["React.js", "Tailwind CSS", "ChartJS", "REST Integration"],
      category: "Frontend",
      link: "#",
    },
    {
      image: "/project1.png",
      title: "RingsReady Caller Agent",
      description:
        "Operational console for AI-powered voice receptionist agents, enabling call log tracking, custom script configuration, and routing rules.",
      tags: ["Next.js", "React", "Tailwind CSS", "WebSockets"],
      category: "Full‑Stack",
      link: "#",
    },
    {
      image: "/project2.png",
      title: "PHS - Admin",
      description:
        "Robust administrative backend API and console managing asset inspections, database audits, and secure resource distribution.",
      tags: ["Node.js", "Express", "MongoDB", "Mongoose"],
      category: "Backend",
      link: "#",
    },
    {
      image: "/project3.png",
      title: "Mobile Application Design",
      description:
        "High-fidelity mockups, typography guides, and interactive user experience prototypes designed for next-generation mobile applications.",
      tags: ["Figma", "UI/UX Design", "Wireframes", "Design System"],
      category: "Design",
      link: "#",
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

  const filterBtnStyle = (isActive) => ({
    background: "transparent",
    border: "1px solid transparent",
    color: isActive ? theme.colorTextPrimary : theme.colorTextSecondary,
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.semibold,
    padding: "0.5rem 1.25rem",
    borderRadius: RADIUS.full,
    cursor: "pointer",
    transition: TRANSITION.fast,
    ...(isActive
      ? {
          background: theme.colorPrimary,
          color: theme.colorBgBase,
          boxShadow: `0 0 15px rgba(${theme.colorPrimaryRgb}, 0.5)`,
        }
      : {}),
  });

  const styles = {
    pageWrapper: {
      paddingBottom: SPACING.xxl,
    },
    filterWrapper: {
      marginBottom: SPACING.xxl,
    },
    filterContainer: {
      ...glass(theme),
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: SPACING.xs,
      borderRadius: RADIUS.full,
      padding: "0.35rem",
    },
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: isTablet ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))",
      gap: SPACING.xl,
      marginTop: SPACING.lg,
    },
    projectCardOuter: {
      animation: "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      height: "100%",
    },
    delivery: {
      marginTop: SPACING.xxl,
      display: "grid",
      gridTemplateColumns: isTablet ? "1fr" : "repeat(3, 1fr)",
      gap: SPACING.md,
    },
    deliveryItem: {
      ...glass(theme),
      padding: SPACING.lg,
      textAlign: "center",
      transition: TRANSITION.normal,
      cursor: "default",
    },
    deliveryValue: {
      display: "block",
      fontSize: FONT_SIZE.xl,
      marginBottom: SPACING.xs,
      ...textGradient(theme),
    },
    deliveryLabel: {
      color: theme.colorTextSecondary,
      fontSize: FONT_SIZE.sm,
    },
  };

  return (
    <div style={styles.pageWrapper}>
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="A curated collection of my latest work, highlighting clean code and interactive UX."
      >
        <div style={styles.filterWrapper}>
          <div style={styles.filterContainer}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                style={filterBtnStyle(filter === cat)}
                onClick={() => setFilter(cat)}
                onMouseEnter={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.color = theme.colorPrimaryLight;
                    e.currentTarget.style.borderColor = `rgba(${theme.colorPrimaryRgb}, 0.25)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.color = theme.colorTextSecondary;
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.projectsGrid}>
          {filteredProjects.map((project, idx) => (
            <div key={idx} style={styles.projectCardOuter}>
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

        <div style={styles.delivery}>
          {deliveryStats.map((stat) => (
            <div
              key={stat.label}
              style={styles.deliveryItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={styles.deliveryValue}>
                {stat.value}
              </span>
              <span style={styles.deliveryLabel}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Projects;
