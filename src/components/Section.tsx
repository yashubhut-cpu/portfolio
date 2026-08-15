import { SectionProps } from "../types";

function Section({
  id,
  badge,
  title,
  subtitle,
  children,
  className = "",
  headingLevel = "h2",
}: SectionProps) {
  const HeadingTag = headingLevel;

  return (
    <section
      id={id}
      className={`section-wrapper ${className}`}
      style={{
        paddingTop: "var(--space-2xl)",
        paddingBottom: "var(--space-2xl)",
        position: "relative",
      }}
    >
      <div className="container">
        {(badge || title || subtitle) && (
          <div
            style={{
              textAlign: "center",
              marginBottom: "var(--space-2xl)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {badge && <div className="locale-badge">{badge}</div>}
            {title && (
              <HeadingTag
                style={{
                  fontSize: "clamp(1.85rem, 3.8vw, 2.75rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--color-text-primary)",
                  lineHeight: "1.2",
                  marginTop: badge ? "var(--space-sm)" : 0,
                  marginBottom: "var(--space-xs)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {title}
              </HeadingTag>
            )}
            {subtitle && (
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.0625rem",
                  maxWidth: "680px",
                  lineHeight: "1.65",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div>{children}</div>
      </div>
    </section>
  );
}

export default Section;
