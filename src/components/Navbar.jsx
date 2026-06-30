import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import useHover from "../hooks/useHover";
import { useIsMobile } from "../hooks/useMediaQuery";
import { SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS, TRANSITION } from "../utils/styles";

function Navbar() {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const linkHover = useHover();
  const ctaHover = useHover();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const styles = {
    header: {
      position: "sticky",
      top: isMobile ? "0.8rem" : "1.5rem",
      width: "100%",
      zIndex: 1000,
      padding: `0 ${SPACING.md}`,
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "4.5rem",
      padding: "0.7rem 1.25rem",
      borderRadius: isMobile ? RADIUS.lg : RADIUS.full,
      margin: "0 auto",
      border: theme.glassBorder,
      background: isScrolled ? theme.navbarBgScrolled : theme.navbarBg,
      backdropFilter: theme.glassBlur,
      WebkitBackdropFilter: theme.glassBlur,
      boxShadow: theme.glassShadow,
      transition: TRANSITION.normal,
    },
    brand: {
      display: "inline-flex",
      alignItems: "center",
      gap: SPACING.sm,
      textDecoration: "none",
    },
    brandLogo: {
      width: "36px",
      height: "36px",
      objectFit: "contain",
      display: "block",
    },
    brandText: {
      color: theme.colorTextPrimary,
      fontSize: isMobile ? FONT_SIZE.xs : FONT_SIZE.sm,
      fontWeight: FONT_WEIGHT.semibold,
      letterSpacing: "0.04em",
    },
    navList: isMobile
      ? {
          position: "absolute",
          top: "calc(100% + 0.5rem)",
          left: 0,
          width: "100%",
          flexDirection: "column",
          alignItems: "stretch",
          padding: SPACING.lg,
          background: theme.navbarMobileBg,
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          border: theme.glassBorder,
          borderRadius: RADIUS.lg,
          gap: SPACING.md,
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
          pointerEvents: isOpen ? "auto" : "none",
          transition: TRANSITION.normal,
          listStyle: "none",
        }
      : {
          display: "flex",
          listStyle: "none",
          gap: SPACING.xl,
          alignItems: "center",
        },
    toggle: {
      display: isMobile ? "flex" : "none",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "24px",
      height: "18px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: 0,
    },
    cta: {
      textDecoration: "none",
      background: theme.colorPrimary,
      color: theme.colorBgBase,
      fontSize: FONT_SIZE.xs,
      fontWeight: FONT_WEIGHT.bold,
      letterSpacing: "0.05em",
      padding: "0.6rem 0.95rem",
      borderRadius: RADIUS.full,
      border: "1px solid transparent",
      transition: TRANSITION.normal,
      ...(ctaHover.isHovered
        ? {
            transform: "translateY(-2px)",
            boxShadow: `0 10px 25px rgba(${theme.colorPrimaryRgb}, 0.35)`,
          }
        : {}),
      ...(isMobile ? { width: "100%", textAlign: "center", display: "inline-block" } : {}),
    },
  };

  const getLinkStyle = (isActive) => ({
    textDecoration: "none",
    color: isActive ? theme.colorPrimary : theme.colorTextSecondary,
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
    letterSpacing: "0.03em",
    padding: "0.5rem 0.75rem",
    borderRadius: RADIUS.full,
    position: "relative",
    transition: TRANSITION.fast,
    ...(linkHover.isHovered && !isActive
      ? { color: theme.colorPrimary }
      : {}),
  });

  const barStyle = (index) => ({
    width: "100%",
    height: "2px",
    background: theme.colorTextPrimary,
    borderRadius: RADIUS.full,
    transition: TRANSITION.normal,
    ...(isOpen
      ? {
          transform:
            index === 0
              ? "translateY(8px) rotate(45deg)"
              : index === 2
              ? "translateY(-8px) rotate(-45deg)"
              : "translateY(0)",
          opacity: index === 1 ? 0 : 1,
        }
      : {}),
  });

  return (
    <header style={styles.header}>
      <nav style={styles.navbar} aria-label="Primary navigation">
        <Link
          to="/"
          style={styles.brand}
          aria-label="Go to homepage"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/icon.png"
            alt="Yash Bhut logo"
            style={styles.brandLogo}
          />
          <span style={styles.brandText}>Yash Bhut</span>
        </Link>

        <button
          style={styles.toggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
        >
          <span style={barStyle(0)} />
          <span style={barStyle(1)} />
          <span style={barStyle(2)} />
        </button>

        <ul
          id="site-navigation"
          style={styles.navList}
        >
          <li>
            <NavLink
              to="/"
              end
              style={({ isActive }) => getLinkStyle(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => getLinkStyle(isActive)}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => getLinkStyle(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              style={({ isActive }) => getLinkStyle(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => getLinkStyle(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              style={styles.cta}
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={ctaHover.onMouseEnter}
              onMouseLeave={ctaHover.onMouseLeave}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
