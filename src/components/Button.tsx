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
          color: "hsl(222, 24%, 6%)",
          border: "1px solid var(--color-primary)",
          boxShadow: "0 4px 14px rgba(var(--color-primary-rgb), 0.35)",
        };
      case "secondary":
        return {
          background: "var(--color-bg-surface)",
          color: "var(--color-text-primary)",
          border: "1px solid var(--color-border)",
        };
      case "outline":
        return {
          background: "transparent",
          color: "var(--color-text-primary)",
          border: "1px solid var(--color-border)",
        };
      default:
        return {};
    }
  };

  const getSizeStyles = (): CSSProperties => {
    switch (size) {
      case "sm":
        return { padding: "0.4rem 0.9rem", fontSize: "0.8125rem" };
      case "lg":
        return { padding: "0.85rem 1.8rem", fontSize: "1rem" };
      case "md":
      default:
        return { padding: "0.65rem 1.4rem", fontSize: "0.9375rem" };
    }
  };

  const baseStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "var(--radius-full)",
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    textDecoration: "none",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.3",
    ...getVariantStyles(),
    ...getSizeStyles(),
  };

  const handleMouseEnter = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (variant === "primary") {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow =
        "0 6px 20px rgba(var(--color-primary-rgb), 0.5)";
      e.currentTarget.style.background = "var(--color-primary-hover)";
    } else {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.borderColor = "var(--color-border-hover)";
      e.currentTarget.style.color = "var(--color-primary)";
    }
  };

  const handleMouseLeave = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.currentTarget.style.transform = "translateY(0)";
    if (variant === "primary") {
      e.currentTarget.style.boxShadow =
        "0 4px 14px rgba(var(--color-primary-rgb), 0.35)";
      e.currentTarget.style.background = "var(--color-primary)";
    } else {
      e.currentTarget.style.borderColor = "var(--color-border)";
      e.currentTarget.style.color = "var(--color-text-primary)";
    }
  };

  if (to) {
    return (
      <Link
        to={to}
        style={baseStyle}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
