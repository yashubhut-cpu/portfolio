import useTheme from "../hooks/useTheme";
import { textGradient, SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS } from "../utils/styles";

function Section({ id, title, subtitle, children }) {
  const theme = useTheme();

  const styles = {
    section: {
      padding: `${SPACING.xxl} ${SPACING.lg} ${SPACING.xl}`,
      marginTop: SPACING.xl,
      marginBottom: SPACING.lg,
    },
    header: {
      textAlign: "center",
      marginBottom: SPACING.xxl,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: FONT_SIZE.xxl,
      fontWeight: FONT_WEIGHT.bold,
      letterSpacing: "-0.05em",
      marginBottom: SPACING.xs,
      ...textGradient(theme),
    },
    subtitle: {
      color: theme.colorTextSecondary,
      fontSize: FONT_SIZE.md,
      maxWidth: "600px",
      marginTop: SPACING.xs,
    },
    divider: {
      width: "60px",
      height: "3px",
      background: theme.colorPrimary,
      borderRadius: RADIUS.full,
      marginTop: SPACING.md,
      boxShadow: `0 0 10px ${theme.colorPrimary}`,
    },
    body: {
      width: "100%",
    },
  };

  return (
    <section id={id} style={styles.section}>
      {(title || subtitle) && (
        <div style={styles.header}>
          {title && (
            <h2 style={styles.title}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p style={styles.subtitle}>
              {subtitle}
            </p>
          )}
          <div style={styles.divider} />
        </div>
      )}
      <div style={styles.body}>{children}</div>
    </section>
  );
}

export default Section;
