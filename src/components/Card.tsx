import { MouseEvent } from "react";
import Button from "./Button";
import { CardProps } from "../types";

function Card({
  image,
  isLogo,
  title,
  description,
  tags = [],
  link = "#",
  github,
}: CardProps) {
  const handleCardMouseEnter = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.borderColor = "var(--color-border-hover)";
    e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.35)";
  };

  const handleCardMouseLeave = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "var(--color-border)";
    e.currentTarget.style.boxShadow = "var(--glass-shadow)";
  };

  const handleImageMouseEnter = (e: MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = isLogo ? "scale(1.08)" : "scale(1.05)";
  };

  const handleImageMouseLeave = (e: MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <article
      className="glass-panel"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        borderRadius: "var(--radius-lg)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {image && (
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "52%",
            overflow: "hidden",
            background: isLogo
              ? "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.07) 100%)"
              : "var(--color-bg-surface)",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            style={{
              position: "absolute",
              top: isLogo ? "14%" : "0",
              left: isLogo ? "14%" : "0",
              width: isLogo ? "72%" : "100%",
              height: isLogo ? "72%" : "100%",
              objectFit: isLogo ? "contain" : "cover",
              filter: isLogo
                ? "drop-shadow(0 4px 12px rgba(0,0,0,0.25))"
                : "none",
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
          />
        </div>
      )}

      <div
        style={{
          padding: "var(--space-lg)",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            marginBottom: "var(--space-xs)",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "0.875rem",
            lineHeight: "1.6",
            marginBottom: "var(--space-lg)",
            flex: 1,
          }}
        >
          {description}
        </p>

        {tags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "var(--space-lg)",
            }}
          >
            {tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "0.2rem 0.65rem",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(var(--color-primary-rgb), 0.08)",
                  color: "var(--color-primary)",
                  border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginTop: "auto",
          }}
        >
          {link && link !== "#" && (
            <Button href={link} variant="primary" size="sm">
              Live Demo
            </Button>
          )}
          {github && (
            <Button href={github} variant="outline" size="sm">
              GitHub
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;
