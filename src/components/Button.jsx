import { useState } from "react";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS, TRANSITION } from "../utils/styles";

function Button({
  to,
  href,
  onClick,
  type = "button",
  children,
  variant = "primary",
}) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${SPACING.sm} ${SPACING.xl}`,
    borderRadius: RADIUS.full,
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    fontSize: FONT_SIZE.base,
    fontWeight: FONT_WEIGHT.semibold,
    textDecoration: "none",
    cursor: "pointer",
    outline: "none",
    transition: `${TRANSITION.fast}, ${TRANSITION.normal}, ${TRANSITION.fast}, ${TRANSITION.fast}, ${TRANSITION.fast}`,
    border: "1px solid transparent",
  };

  const variants = {
    primary: {
      background: `rgba(${theme.colorPrimaryRgb}, 0.15)`,
      color: theme.colorPrimary,
      border: `1px solid rgba(${theme.colorPrimaryRgb}, 0.35)`,
      boxShadow: `0 4px 15px rgba(${theme.colorPrimaryRgb}, 0.1)`,
      ...(isHovered && !isActive
        ? {
            background: theme.colorPrimary,
            color: theme.colorBgBase,
            borderColor: theme.colorPrimary,
            boxShadow: `0 0 20px rgba(${theme.colorPrimaryRgb}, 0.6)`,
            transform: "translateY(-2px)",
          }
        : {}),
      ...(isActive ? { transform: "translateY(0)" } : {}),
    },
    outline: {
      background: "transparent",
      color: theme.colorTextPrimary,
      border: `1px solid ${theme.colorBorder}`,
      ...(isHovered && !isActive
        ? {
            background: "rgba(255, 255, 255, 0.05)",
            borderColor: theme.colorTextSecondary,
            transform: "translateY(-2px)",
          }
        : {}),
      ...(isActive ? { transform: "translateY(0)" } : {}),
    },
  };

  const style = { ...baseStyle, ...variants[variant] };

  const interactiveProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => {
      setIsHovered(false);
      setIsActive(false);
    },
    onMouseDown: () => setIsActive(true),
    onMouseUp: () => setIsActive(false),
  };

  if (to) {
    return (
      <Link to={to} style={style} {...interactiveProps}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        {...interactiveProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      {...interactiveProps}
    >
      {children}
    </button>
  );
}

export default Button;
