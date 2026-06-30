import useTheme from "../hooks/useTheme";
import useHover from "../hooks/useHover";
import { SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS, TRANSITION } from "../utils/styles";

function Card({ image, title, description, tags = [], link = "#" }) {
  const theme = useTheme();
  const hover = useHover();

  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      height: "100%",
      borderRadius: RADIUS.lg,
      transform: hover.isHovered ? "translateY(-8px)" : "translateY(0)",
      transition: `${TRANSITION.normal}, ${TRANSITION.normal}, ${TRANSITION.normal}`,
      border: hover.isHovered
        ? `1px solid rgba(${theme.colorPrimaryRgb}, 0.3)`
        : theme.glassBorder,
      boxShadow: hover.isHovered
        ? `0 12px 40px rgba(${theme.colorPrimaryRgb}, 0.15)`
        : theme.glassShadow,
      background: theme.glassBg,
      backdropFilter: theme.glassBlur,
      WebkitBackdropFilter: theme.glassBlur,
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      paddingTop: "56.25%",
      overflow: "hidden",
      borderBottom: theme.glassBorder,
    },
    image: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover.isHovered ? "scale(1.08)" : "scale(1)",
      transition: TRANSITION.normal,
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(180deg, rgba(8, 10, 20, 0.25), rgba(8, 10, 20, 0.72))",
      opacity: hover.isHovered ? 1 : 0,
      pointerEvents: hover.isHovered ? "auto" : "none",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      transition: TRANSITION.normal,
    },
    linkBtn: {
      padding: `${SPACING.sm} ${SPACING.lg}`,
      color: theme.colorPrimary,
      fontWeight: FONT_WEIGHT.semibold,
      fontSize: FONT_SIZE.sm,
      textDecoration: "none",
      border: `1px solid ${theme.colorPrimary}`,
      borderRadius: RADIUS.full,
      background: "transparent",
      ...(hover.isHovered
        ? {
            background: theme.colorPrimary,
            color: theme.colorBgBase,
            boxShadow: `0 0 15px ${theme.colorPrimary}`,
          }
        : {}),
    },
    body: {
      padding: SPACING.lg,
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    title: {
      fontSize: FONT_SIZE.lg,
      fontWeight: FONT_WEIGHT.bold,
      marginBottom: SPACING.xs,
      color: theme.colorTextPrimary,
    },
    desc: {
      color: theme.colorTextSecondary,
      fontSize: FONT_SIZE.sm,
      lineHeight: 1.5,
      marginBottom: SPACING.lg,
      flex: 1,
    },
    tags: {
      display: "flex",
      flexWrap: "wrap",
      gap: SPACING.xs,
      marginTop: "auto",
    },
    tag: {
      fontSize: FONT_SIZE.xs,
      padding: `${SPACING.xxs} ${SPACING.sm}`,
      color: theme.colorPrimary,
      borderRadius: RADIUS.full,
      border: `1px solid rgba(${theme.colorPrimaryRgb}, 0.2)`,
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          style={styles.image}
          loading="lazy"
        />
        <div style={styles.overlay}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.linkBtn}
          >
            View Project
          </a>
        </div>
      </div>
      <div style={styles.body}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.desc}>{description}</p>
        <div style={styles.tags}>
          {tags.map((tag, idx) => (
            <span key={idx} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
