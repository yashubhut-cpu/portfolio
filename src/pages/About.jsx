import Section from "../components/Section.jsx";
import useTheme from "../hooks/useTheme";
import { useIsTablet, useIsSmallMobile } from "../hooks/useMediaQuery";
import { glass, textGradient, SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS, TRANSITION } from "../utils/styles";

function About() {
  const theme = useTheme();
  const isTablet = useIsTablet();
  const isSmallMobile = useIsSmallMobile();

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

  const styles = {
    pageWrapper: {
      paddingBottom: SPACING.xxl,
    },
    aboutGrid: {
      display: "grid",
      gridTemplateColumns: isTablet ? "1fr" : "1.2fr 0.8fr",
      gap: SPACING.xl,
      marginBottom: SPACING.xxl,
    },
    bio: {
      ...glass(theme),
      padding: SPACING.xl,
      display: "flex",
      flexDirection: "column",
      gap: SPACING.md,
      textAlign: "left",
    },
    bioTitle: {
      fontSize: FONT_SIZE.xl,
      fontWeight: FONT_WEIGHT.bold,
      marginBottom: SPACING.xs,
    },
    bioName: {
      ...textGradient(theme),
    },
    bioText: {
      color: theme.colorTextSecondary,
      fontSize: FONT_SIZE.md,
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: isSmallMobile ? "1fr" : "1fr 1fr",
      gap: SPACING.md,
    },
    statCard: {
      ...glass(theme),
      padding: SPACING.lg,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      transition: TRANSITION.normal,
      cursor: "default",
    },
    statValue: {
      fontSize: FONT_SIZE.xxl,
      fontWeight: FONT_WEIGHT.bold,
      ...textGradient(theme),
    },
    statLabel: {
      color: theme.colorTextMuted,
      fontSize: FONT_SIZE.xs,
      fontWeight: FONT_WEIGHT.semibold,
      letterSpacing: "0.05em",
      marginTop: SPACING.xs,
    },
    timelineSection: {
      marginTop: SPACING.xxl,
    },
    timelineTitle: {
      fontSize: FONT_SIZE.xl,
      fontWeight: FONT_WEIGHT.bold,
      textAlign: "center",
      marginBottom: SPACING.xxl,
      ...textGradient(theme),
    },
    timelineContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: SPACING.lg,
      maxWidth: "800px",
      margin: "0 auto",
      paddingLeft: isSmallMobile ? "1.5rem" : "2rem",
      borderLeft: isSmallMobile
        ? "2px dashed rgba(255, 255, 255, 0.15)"
        : "2px dashed rgba(255, 255, 255, 0.15)",
    },
    timelineItem: {
      ...glass(theme),
      position: "relative",
      padding: SPACING.lg,
      textAlign: "left",
      transition: TRANSITION.normal,
      cursor: "default",
    },
    timelineDot: {
      position: "absolute",
      left: isSmallMobile ? "-1.9rem" : "-2.4rem",
      top: "1.7rem",
      width: "12px",
      height: "12px",
      background: theme.colorPrimary,
      borderRadius: RADIUS.full,
      boxShadow: `0 0 10px ${theme.colorPrimary}`,
      transition: TRANSITION.fast,
    },
    timelineYear: {
      fontSize: FONT_SIZE.xs,
      color: theme.colorPrimary,
      fontWeight: FONT_WEIGHT.bold,
      letterSpacing: "0.05em",
      display: "block",
      marginBottom: SPACING.xs,
    },
    timelineRole: {
      fontSize: FONT_SIZE.md,
      fontWeight: FONT_WEIGHT.semibold,
      marginBottom: SPACING.xxs,
    },
    timelineCompany: {
      fontSize: FONT_SIZE.sm,
      color: theme.colorTextSecondary,
      fontWeight: FONT_WEIGHT.medium,
      marginBottom: SPACING.xs,
    },
    timelineDesc: {
      color: theme.colorTextMuted,
      fontSize: FONT_SIZE.sm,
    },
    valuesGrid: {
      marginTop: SPACING.xxl,
      display: "grid",
      gridTemplateColumns: isTablet ? "1fr" : "repeat(3, 1fr)",
      gap: SPACING.md,
    },
    valueCard: {
      ...glass(theme),
      padding: SPACING.lg,
      transition: TRANSITION.normal,
      cursor: "default",
    },
    valueTitle: {
      marginBottom: SPACING.sm,
      fontSize: FONT_SIZE.md,
    },
    valueDesc: {
      color: theme.colorTextSecondary,
      fontSize: FONT_SIZE.sm,
    },
  };

  return (
    <div style={styles.pageWrapper}>
      <Section
        id="about"
        title="About Me"
        subtitle="Engineering leader focused on scalable products, polished interfaces, and long-term maintainability."
      >
        <div style={styles.aboutGrid}>
          <div style={styles.bio}>
            <h3 style={styles.bioTitle}>
              Who is <span style={styles.bioName}>Yash Bhut</span>?
            </h3>
            <p style={styles.bioText}>
              I am a product-focused full-stack developer who enjoys
              transforming complex requirements into clear, high-impact software
              experiences. I bridge frontend craftsmanship with backend
              reliability to help teams ship confidently.
            </p>
            <p style={styles.bioText}>
              I specialize in React ecosystems, Node.js services, API design,
              and robust component systems. Outside of work, I explore design
              systems, AI-assisted workflows, and automation to continuously
              improve delivery quality.
            </p>
          </div>

          <div style={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={styles.statCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = `rgba(${theme.colorPrimaryRgb}, 0.25)`;
                  e.currentTarget.style.boxShadow = `0 8px 30px rgba(${theme.colorPrimaryRgb}, 0.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = theme.glassBorder;
                  e.currentTarget.style.boxShadow = theme.glassShadow;
                }}
              >
                <span style={styles.statValue}>
                  {stat.value}
                </span>
                <span style={styles.statLabel}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.timelineSection}>
          <h3 style={styles.timelineTitle}>
            Professional Experience
          </h3>
          <div style={styles.timelineContainer}>
            {timeline.map((item, idx) => (
              <div
                key={idx}
                style={styles.timelineItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${theme.colorPrimaryRgb}, 0.2)`;
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.glassBorder;
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={styles.timelineDot} />
                <span style={styles.timelineYear}>
                  {item.year}
                </span>
                <h4 style={styles.timelineRole}>
                  {item.role}
                </h4>
                <h5 style={styles.timelineCompany}>
                  {item.company}
                </h5>
                <p style={styles.timelineDesc}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.valuesGrid}>
          {values.map((value) => (
            <div
              key={value.title}
              style={styles.valueCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = `rgba(${theme.colorPrimaryRgb}, 0.22)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = theme.glassBorder;
              }}
            >
              <h4 style={styles.valueTitle}>
                {value.title}
              </h4>
              <p style={styles.valueDesc}>
                {value.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default About;
