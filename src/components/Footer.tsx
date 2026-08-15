import { MouseEvent } from "react";
import { useIsMobile } from "../hooks/useMediaQuery";
import { SocialLink } from "../types";

function Footer() {
  const year = new Date().getFullYear();
  const isMobile = useIsMobile();

  const socialLinks: SocialLink[] = [
    { name: "GitHub", href: "https://github.com/yashubhut-cpu" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/yash-bhut/" },
    { name: "Instagram", href: "https://www.instagram.com/mr._yash_bhut/" },
    { name: "WhatsApp", href: "https://wa.me/918460800817" },
  ];

  const handleLinkMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "var(--color-primary)";
  };

  const handleLinkMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "var(--color-text-secondary)";
  };

  return (
    <footer
      style={{
        marginTop: "auto",
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-bg-surface)",
        padding: "var(--space-xl) 0",
        width: "100%",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "center",
          gap: "1.5rem",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-text-secondary)",
              fontWeight: 500,
            }}
          >
            © {year}{" "}
            <strong style={{ color: "var(--color-text-primary)" }}>
              Yash Bhut
            </strong>
            . Built with React & modern web standards.
          </p>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
              marginTop: "0.25rem",
            }}
          >
            Full-Stack & Mobile App Engineer • Crafting resilient digital
            products.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text-secondary)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={handleLinkMouseEnter}
              onMouseLeave={handleLinkMouseLeave}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
