import Section from "../components/Section.jsx";
import useTheme from "../hooks/useTheme";
import { useIsTablet, useIsSmallMobile } from "../hooks/useMediaQuery";
import { glass, textGradient, SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS, TRANSITION } from "../utils/styles";

function Skills() {
  const theme = useTheme();
  const isTablet = useIsTablet();
  const isSmallMobile = useIsSmallMobile();

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

  const styles = {
    pageWrapper: {
      paddingBottom: SPACING.xxl,
    },
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: isTablet ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
      gap: SPACING.xl,
    },
    skillCard: {
      ...glass(theme),
      padding: isSmallMobile ? SPACING.lg : SPACING.xl,
      textAlign: "left",
      transition: TRANSITION.normal,
      cursor: "default",
    },
    categoryTitle: {
      fontSize: FONT_SIZE.lg,
      fontWeight: FONT_WEIGHT.bold,
      marginBottom: SPACING.xl,
      ...textGradient(theme),
    },
    skillList: {
      display: "flex",
      flexDirection: "column",
      gap: SPACING.lg,
    },
    skillRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: SPACING.xs,
    },
    skillName: {
      fontSize: FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.semibold,
      color: theme.colorTextPrimary,
    },
    skillPercent: {
      fontSize: FONT_SIZE.xs,
      fontWeight: FONT_WEIGHT.bold,
      color: theme.colorPrimaryLight,
    },
    progressBarBg: {
      height: "8px",
      width: "100%",
      borderRadius: RADIUS.full,
      overflow: "hidden",
      position: "relative",
      border: "1px solid rgba(255, 255, 255, 0.06)",
      ...glass(theme),
    },
    serviceGrid: {
      marginTop: SPACING.xxl,
      display: "grid",
      gridTemplateColumns: isTablet ? "1fr" : "repeat(3, 1fr)",
      gap: SPACING.md,
    },
    serviceCard: {
      ...glass(theme),
      padding: SPACING.lg,
      transition: TRANSITION.normal,
      cursor: "default",
    },
    serviceTitle: {
      marginBottom: SPACING.xs,
    },
    serviceDesc: {
      color: theme.colorTextSecondary,
      fontSize: FONT_SIZE.sm,
    },
  };

  const getProgressBarFillStyle = (level) => ({
    height: "100%",
    borderRadius: RADIUS.full,
    background: `linear-gradient(90deg, ${theme.colorPrimaryDark} 0%, ${theme.colorPrimary} 100%)`,
    boxShadow: `0 0 10px rgba(${theme.colorPrimaryRgb}, 0.7)`,
    animation: "loadProgress 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) forwards",
    width: `${level}%`,
  });

  return (
    <div style={styles.pageWrapper}>
      <Section
        id="skills"
        title="My Toolkit"
        subtitle="An overview of the languages, frameworks, and technologies I rely on to build resilient digital architectures."
      >
        <div style={styles.skillsGrid}>
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              style={styles.skillCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = `rgba(${theme.colorPrimaryRgb}, 0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = theme.glassBorder;
              }}
            >
              <h3 style={styles.categoryTitle}>
                {category.title}
              </h3>
              <div style={styles.skillList}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={styles.skillRow}>
                      <span style={styles.skillName}>
                        {skill.name}
                      </span>
                      <span style={styles.skillPercent}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={styles.progressBarBg}>
                      <div style={getProgressBarFillStyle(skill.level)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.serviceGrid}>
          {serviceAreas.map((service) => (
            <div
              key={service.title}
              style={styles.serviceCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h4 style={styles.serviceTitle}>
                {service.title}
              </h4>
              <p style={styles.serviceDesc}>
                {service.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Skills;
