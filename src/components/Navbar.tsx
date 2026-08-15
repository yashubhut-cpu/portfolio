import { useEffect, useState, MouseEvent } from "react";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { useIsMobile } from "../hooks/useMediaQuery";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";
import { NavItem } from "../types";

function Navbar() {
  const { theme, isDark, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/#projects" },
    { name: "Skills", path: "/#skills" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleToggleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1.1)";
  };

  const handleToggleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <header
      style={{
        position: "sticky",
        top: isMobile ? "0.6rem" : "1.2rem",
        width: "100%",
        zIndex: 1000,
        padding: "0 var(--space-md)",
      }}
    >
      <nav
        aria-label="Main Navigation"
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          minHeight: "4.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem 1.25rem",
          borderRadius: "var(--radius-full)",
          background: isScrolled
            ? isDark
              ? "rgba(12, 16, 26, 0.88)"
              : "rgba(255, 255, 255, 0.92)"
            : "var(--color-bg-card)",
          backdropFilter: "var(--glass-blur)",
          WebkitBackdropFilter: "var(--glass-blur)",
          border: "var(--glass-border)",
          boxShadow: isScrolled
            ? "0 10px 30px rgba(0, 0, 0, 0.25)"
            : "var(--glass-shadow)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Brand */}
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.65rem",
            textDecoration: "none",
          }}
        >
          <img
            src={isDark ? logoDark : logoLight}
            alt="Yash Bhut logo"
            style={{
              width: "36px",
              height: "36px",
              objectFit: "contain",
              display: "block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Yash Bhut
          </span>
        </Link>

        {/* Desktop Links & Theme Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {!isMobile && (
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                listStyle: "none",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith("/#") ? (
                    <a
                      href={link.path}
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--color-text-secondary)",
                        padding: "0.4rem 0.75rem",
                        borderRadius: "var(--radius-full)",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--color-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "var(--color-text-secondary)")
                      }
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      end
                      style={({ isActive }) => ({
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: isActive
                          ? "var(--color-primary)"
                          : "var(--color-text-secondary)",
                        padding: "0.4rem 0.75rem",
                        borderRadius: "var(--radius-full)",
                        transition: "color 0.2s ease",
                      })}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            style={{
              background: "rgba(var(--color-primary-rgb), 0.1)",
              border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
              color: "var(--color-text-primary)",
              borderRadius: "var(--radius-full)",
              width: "36px",
              height: "36px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={handleToggleMouseEnter}
            onMouseLeave={handleToggleMouseLeave}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-text-primary)",
                fontSize: "1.5rem",
                cursor: "pointer",
                padding: "0.25rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMobile && isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 0.5rem)",
            left: "var(--space-md)",
            right: "var(--space-md)",
            background: isDark
              ? "rgba(14, 18, 30, 0.96)"
              : "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "var(--glass-border)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-lg)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            animation: "fadeIn 0.3s ease-out forwards",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.path.startsWith("/#") ? (
                  <a
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "block",
                      fontFamily: "var(--font-heading)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      padding: "0.5rem 0",
                    }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    style={({ isActive }) => ({
                      display: "block",
                      fontFamily: "var(--font-heading)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text-primary)",
                      padding: "0.5rem 0",
                    })}
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
