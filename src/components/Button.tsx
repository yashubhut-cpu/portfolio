import { CSSProperties, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "../types";

function Button({
  to,
  href,
  onClick,
  type = "button",
  children,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const getVariantStyles = (): CSSProperties => {
    switch (variant) {
      case "primary":
        return {
          background: "var(--color-primary)",
          color: "#ffffff",
          border: "2px solid var(--color-border-dark, #000000)",
          boxShadow: "var(--shadow-retro)",
        };
      case "secondary":
        return {
          background: "var(--color-secondary)",
          color: "#ffffff",
          border: "2px solid var(--color-border-dark, #000000)",
          boxShadow: "var(--shadow-retro)",
        };
      case "outline":
      default:
        return {
          background: "var(--color-bg-card)",
          color: "var(--color-text-primary)",
          border: "2px solid var(--color-border)",
          boxShadow: "var(--shadow-retro)",
        };
    }
  };

  const getSizeStyles = (): CSSProperties => {
    switch (size) {
      case "sm":
        return { padding: "0.4rem 0.95rem", fontSize: "0.8125rem" };
      case "lg":
        return { padding: "0.8rem 1.75rem", fontSize: "1rem" };
      case "md":
      default:
        return { padding: "0.6rem 1.35rem", fontSize: "0.9375rem" };
    }
  };

  const baseStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "var(--radius-full)",
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    textDecoration: "none",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
    lineHeight: "1.3",
    userSelect: "none",
    ...getVariantStyles(),
    ...getSizeStyles(),
  };

  const handleMouseEnter = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.currentTarget.style.transform = "translate(-2px, -2px)";
    e.currentTarget.style.boxShadow = "var(--shadow-retro-hover)";
    if (variant === "primary") {
      e.currentTarget.style.background = "var(--color-primary-hover)";
    } else if (variant === "secondary") {
      e.currentTarget.style.background = "var(--color-secondary-hover)";
    } else {
      e.currentTarget.style.borderColor = "var(--color-primary)";
      e.currentTarget.style.color = "var(--color-primary)";
    }
  };

  const handleMouseLeave = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
    e.currentTarget.style.boxShadow = "var(--shadow-retro)";
    if (variant === "primary") {
      e.currentTarget.style.background = "var(--color-primary)";
    } else if (variant === "secondary") {
      e.currentTarget.style.background = "var(--color-secondary)";
    } else {
      e.currentTarget.style.borderColor = "var(--color-border)";
      e.currentTarget.style.color = "var(--color-text-primary)";
    }
  };

  const handleMouseDown = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.currentTarget.style.transform = "translate(2px, 2px)";
    e.currentTarget.style.boxShadow = "2px 2px 0px #000000";
  };

  const handleMouseUp = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.currentTarget.style.transform = "translate(-2px, -2px)";
    e.currentTarget.style.boxShadow = "var(--shadow-retro-hover)";
  };

  if (to) {
    return (
      <Link
        to={to}
        style={baseStyle}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        className={className}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={baseStyle}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
