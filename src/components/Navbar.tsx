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
    e.currentTarget.style.transform = "scale(1.1) rotate(6deg)";
  };

  const handleToggleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
  };

  return (
    <header
      style={{
        position: "sticky",
        top: isMobile ? "0.5rem" : "1rem",
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
              ? "rgba(18, 24, 38, 0.95)"
              : "rgba(255, 255, 255, 0.96)"
            : "var(--color-bg-card)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "2px solid var(--color-border)",
          boxShadow: isScrolled
            ? "var(--shadow-retro-hover)"
            : "var(--shadow-retro)",
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Brand */}
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              padding: "0.25rem",
              borderRadius: "var(--radius-full)",
              background: "var(--color-bg-pill)",
              border: "1.5px solid rgba(var(--color-primary-rgb), 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={isDark ? logoDark : logoLight}
              alt="Yash Bhut logo"
              style={{
                width: "32px",
                height: "32px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Yash <span style={{ color: "var(--color-primary)" }}>Bhut</span>
          </span>
        </Link>

        {/* Desktop Links & Theme Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {!isMobile && (
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
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
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        padding: "0.45rem 0.9rem",
                        borderRadius: "var(--radius-full)",
                        transition: "all 0.2s ease",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--color-primary)";
                        e.currentTarget.style.background = "var(--color-bg-pill)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--color-text-primary)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      end
                      style={({ isActive }) => ({
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: isActive
                          ? "#ffffff"
                          : "var(--color-text-primary)",
                        background: isActive
                          ? "var(--color-primary)"
                          : "transparent",
                        padding: "0.45rem 0.9rem",
                        borderRadius: "var(--radius-full)",
                        border: isActive
                          ? "1.5px solid var(--color-border-dark, #000000)"
                          : "1.5px solid transparent",
                        boxShadow: isActive
                          ? "2px 2px 0px #000000"
                          : "none",
                        transition: "all 0.2s ease",
                        display: "inline-block",
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
              background: "var(--color-bg-pill)",
              border: "2px solid var(--color-border)",
              boxShadow: "2px 2px 0px var(--color-border-dark, #000000)",
              color: "var(--color-text-primary)",
              borderRadius: "var(--radius-full)",
              width: "38px",
              height: "38px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1.1rem",
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
                background: "var(--color-primary)",
                border: "2px solid var(--color-border-dark, #000000)",
                boxShadow: "2px 2px 0px #000000",
                color: "#ffffff",
                fontSize: "1.2rem",
                fontWeight: "bold",
                borderRadius: "var(--radius-full)",
                width: "38px",
                height: "38px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
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
            top: "calc(100% + 0.6rem)",
            left: "var(--space-md)",
            right: "var(--space-md)",
            background: isDark
              ? "rgba(18, 24, 38, 0.98)"
              : "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "2px solid var(--color-border)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-lg)",
            boxShadow: "var(--shadow-retro-hover)",
            animation: "fadeIn 0.3s ease-out forwards",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
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
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      padding: "0.6rem 1rem",
                      borderRadius: "var(--radius-md)",
                      border: "1.5px solid var(--color-border)",
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
                      fontWeight: 700,
                      color: isActive
                        ? "#ffffff"
                        : "var(--color-text-primary)",
                      background: isActive
                        ? "var(--color-primary)"
                        : "transparent",
                      padding: "0.6rem 1rem",
                      borderRadius: "var(--radius-md)",
                      border: isActive
                        ? "1.5px solid var(--color-border-dark, #000000)"
                        : "1.5px solid var(--color-border)",
                      boxShadow: isActive ? "2px 2px 0px #000000" : "none",
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
