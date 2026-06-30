import useTheme from "../hooks/useTheme";
import useHover from "../hooks/useHover";
import { container, SPACING, FONT_SIZE, FONT_WEIGHT, TRANSITION } from "../utils/styles";

function Footer() {
  const theme = useTheme();
  const year = new Date().getFullYear();
  const githubHover = useHover();
  const linkedinHover = useHover();
  const instagramHover = useHover();
  const whatsappHover = useHover();

  const styles = {
    footer: {
      marginTop: "auto",
      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      background: `linear-gradient(180deg, transparent, ${theme.colorBgCard})`,
      backdropFilter: theme.glassBlur,
      WebkitBackdropFilter: theme.glassBlur,
      padding: `${SPACING.xl} 0`,
      width: "100%",
    },
    container: {
      ...container(),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    copy: {
      color: theme.colorTextSecondary,
      fontSize: FONT_SIZE.sm,
    },
    subcopy: {
      marginTop: SPACING.xxs,
      color: theme.colorTextMuted,
      fontSize: FONT_SIZE.xs,
    },
    socials: {
      display: "flex",
      gap: SPACING.md,
    },
  };

  const linkStyle = (isHovered) => ({
    color: isHovered ? theme.colorPrimary : theme.colorTextSecondary,
    textDecoration: "none",
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
    transition: TRANSITION.fast,
    ...(isHovered
      ? { textShadow: `0 0 10px rgba(${theme.colorPrimaryRgb}, 0.5)` }
      : {}),
  });

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <p style={styles.copy}>
            © {year} Yash Bhut. Crafted with React & precision.
          </p>
          <p style={styles.subcopy}>
            Building reliable digital experiences for ambitious teams.
          </p>
        </div>
        <div style={styles.socials}>
          <a
            href="https://github.com/yashubhut-cpu"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle(githubHover.isHovered)}
            onMouseEnter={githubHover.onMouseEnter}
            onMouseLeave={githubHover.onMouseLeave}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yash-bhut/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle(linkedinHover.isHovered)}
            onMouseEnter={linkedinHover.onMouseEnter}
            onMouseLeave={linkedinHover.onMouseLeave}
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/mr._yash_bhut/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle(instagramHover.isHovered)}
            onMouseEnter={instagramHover.onMouseEnter}
            onMouseLeave={instagramHover.onMouseLeave}
          >
            Instagram
          </a>
          <a
            href="https://wa.me/918460800817"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle(whatsappHover.isHovered)}
            onMouseEnter={whatsappHover.onMouseEnter}
            onMouseLeave={whatsappHover.onMouseLeave}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
