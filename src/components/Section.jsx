import "./Section.css";

function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`section-container container fade-in ${className}`}
    >
      {(title || subtitle) && (
        <div className="section-header">
          {title && <h2 className="section-title text-gradient">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          <div className="section-divider"></div>
        </div>
      )}
      <div className="section-content">{children}</div>
    </section>
  );
}

export default Section;
