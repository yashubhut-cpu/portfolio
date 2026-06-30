import Button from "../components/Button.jsx";
import useTheme from "../hooks/useTheme";
import { useIsTablet, useIsSmallMobile } from "../hooks/useMediaQuery";
import {
  glass,
  textGradient,
  container,
  SPACING,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  TRANSITION,
} from "../utils/styles";

function Home() {
  const theme = useTheme();
  const isTablet = useIsTablet();
  const isSmallMobile = useIsSmallMobile();

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

  const styles = {
    container: {
      minHeight: `calc(100vh - 4.5rem)`,
      display: "grid",
      gap: SPACING.xxl,
      paddingTop: SPACING.xl,
      paddingBottom: SPACING.xxl,
      overflow: "hidden",
      position: "relative",
      animation: "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
    },
    heroSection: {
      ...container(),
      display: "grid",
      gridTemplateColumns: isTablet ? "1fr" : "1.2fr 0.8fr",
      gap: SPACING.xxl,
      alignItems: "center",
      ...(isTablet ? { textAlign: "center" } : {}),
    },
    heroContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: isTablet ? "center" : "flex-start",
      textAlign: isTablet ? "center" : "left",
    },
    badge: {
      display: "inline-flex",
      padding: "0.5rem 1rem",
      borderRadius: RADIUS.full,
      marginBottom: SPACING.md,
      border: `1px solid rgba(${theme.colorPrimaryRgb}, 0.2)`,
      ...glass(theme),
    },
    badgeSpan: {
      fontSize: FONT_SIZE.xs,
      fontWeight: FONT_WEIGHT.semibold,
      color: theme.colorPrimaryLight,
      letterSpacing: "0.05em",
    },
    title: {
      fontSize: isSmallMobile ? FONT_SIZE.xxl : FONT_SIZE.display,
      fontWeight: FONT_WEIGHT.bold,
      lineHeight: 1.05,
      letterSpacing: "-0.05em",
      marginBottom: SPACING.xs,
    },
    name: {
      ...textGradient(theme),
    },
    subtitle: {
      fontSize: FONT_SIZE.xl,
      fontWeight: FONT_WEIGHT.semibold,
      color: theme.colorTextSecondary,
      marginBottom: SPACING.md,
    },
    desc: {
      color: theme.colorTextMuted,
      fontSize: FONT_SIZE.md,
      maxWidth: "600px",
      lineHeight: 1.6,
      marginBottom: SPACING.xl,
      ...(isTablet ? { marginLeft: "auto", marginRight: "auto" } : {}),
    },
    actions: {
      display: "flex",
      gap: SPACING.md,
      ...(isSmallMobile ? { flexDirection: "column", width: "100%" } : {}),
    },
    visual: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...(isTablet ? { marginTop: SPACING.lg } : {}),
      animation: "floatY 4s ease-in-out infinite",
    },
    imageWrapper: {
      position: "relative",
      padding: SPACING.sm,
      borderRadius: RADIUS.lg,
      overflow: "hidden",
      boxShadow: theme.glassShadow,
      maxWidth: "420px",
      width: "100%",
      ...glass(theme),
    },
    img: {
      width: "100%",
      height: "auto",
      borderRadius: RADIUS.md,
      display: "block",
      filter: `drop-shadow(0 0 20px rgba(${theme.colorPrimaryRgb}, 0.15))`,
    },
    glowOrb: {
      position: "absolute",
      top: "-20%",
      right: "-20%",
      width: "250px",
      height: "250px",
      background: `radial-gradient(circle, rgba(${theme.colorPrimaryRgb}, 0.25) 0%, rgba(${theme.colorPrimaryRgb}, 0) 70%)`,
      zIndex: -1,
      pointerEvents: "none",
      animation: "pulseNeon 6s infinite ease-in-out",
    },
    metricsSection: {
      ...container(),
      display: "grid",
      gridTemplateColumns: isTablet ? (isSmallMobile ? "1fr" : "repeat(2, 1fr)") : "repeat(4, 1fr)",
      gap: SPACING.md,
    },
    metricCard: {
      ...glass(theme),
      padding: SPACING.lg,
      display: "flex",
      flexDirection: "column",
      gap: SPACING.xxs,
      textAlign: "left",
      transition: TRANSITION.normal,
      cursor: "default",
    },
    metricValue: {
      fontSize: "2rem",
      lineHeight: 1,
      ...textGradient(theme),
    },
    metricLabel: {
      fontSize: FONT_SIZE.sm,
      color: theme.colorTextSecondary,
    },
    highlightsSection: {
      ...container(),
      display: "grid",
      gridTemplateColumns: isTablet ? "1fr" : "repeat(3, 1fr)",
      gap: SPACING.md,
    },
    highlightCard: {
      ...glass(theme),
      padding: SPACING.xl,
      transition: TRANSITION.normal,
      cursor: "default",
    },
    highlightTitle: {
      marginBottom: SPACING.sm,
      fontSize: FONT_SIZE.md,
    },
    highlightDesc: {
      color: theme.colorTextSecondary,
      fontSize: FONT_SIZE.sm,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <span style={styles.badgeSpan}>
              🚀 Available for Select Freelance & Full-time Opportunities
            </span>
          </div>
          <h1 style={styles.title}>
            Hi, I am <span style={styles.name}>Yash Bhut</span>
          </h1>
          <h2 style={styles.subtitle}>
            I Build Modern, Scalable, and Delightful Web Products
          </h2>
          <p style={styles.desc}>
            Full-stack engineer focused on React ecosystems, backend
            architecture, and polished user interfaces. I partner with startups
            and growth teams to ship features faster, improve product quality,
            and create digital experiences that actually convert.
          </p>
          <div style={styles.actions}>
            <Button to="/projects" variant="primary">
              View My Work
            </Button>
            <Button to="/contact" variant="outline">
              Let's Connect
            </Button>
          </div>
        </div>

        <div style={styles.visual}>
          <div style={styles.imageWrapper}>
            <img
              src="/hero.png"
              alt="Developer Visual Space"
              style={styles.img}
            />
            <div style={styles.glowOrb} />
          </div>
        </div>
      </div>

      <section style={styles.metricsSection}>
        {metrics.map((item) => (
          <div
            key={item.label}
            style={styles.metricCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = `rgba(${theme.colorPrimaryRgb}, 0.28)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = theme.glassBorder;
            }}
          >
            <strong style={styles.metricValue}>
              {item.value}
            </strong>
            <span style={styles.metricLabel}>
              {item.label}
            </span>
          </div>
        ))}
      </section>

      <section style={styles.highlightsSection}>
        {highlights.map((item) => (
          <div
            key={item.title}
            style={styles.highlightCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 18px 35px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = theme.glassShadow;
            }}
          >
            <h3 style={styles.highlightTitle}>
              {item.title}
            </h3>
            <p style={styles.highlightDesc}>
              {item.detail}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
