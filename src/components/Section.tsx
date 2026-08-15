import { SectionProps } from "../types";

function Section({
  id,
  badge,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
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
            {badge && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.35rem 0.9rem",
                  borderRadius: "var(--radius-full)",
                  background: "var(--color-bg-card)",
                  border: "var(--glass-border)",
                  color: "var(--color-primary)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  marginBottom: "var(--space-sm)",
                  textTransform: "uppercase",
                }}
              >
                {badge}
              </div>
            )}
            {title && (
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--color-text-primary)",
                  lineHeight: "1.2",
                  marginBottom: "var(--space-xs)",
                }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.0625rem",
                  maxWidth: "640px",
                  lineHeight: "1.6",
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
