import {
  THEME,
  SPACING,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  TRANSITION,
  LAYOUT,
} from "../theme";

export { THEME, SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS, TRANSITION, LAYOUT };

export function glass(theme = THEME.dark) {
  return {
    background: theme.glassBg,
    backdropFilter: theme.glassBlur,
    WebkitBackdropFilter: theme.glassBlur,
    border: theme.glassBorder,
    boxShadow: theme.glassShadow,
    borderRadius: RADIUS.lg,
  };
}

export function textGradient(theme = THEME.dark) {
  return {
    background: `linear-gradient(135deg, ${theme.colorPrimaryLight} 0%, ${theme.colorPrimary} 50%, ${theme.colorPrimaryDark} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
}

export function flexCenter() {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
}

export function container() {
  return {
    maxWidth: LAYOUT.pageMaxWidth,
    margin: "0 auto",
    padding: `0 ${SPACING.lg}`,
    width: "100%",
  };
}

export function transition() {
  return {
    transition: TRANSITION.normal,
  };
}

export function pageShell(theme = THEME.dark) {
  return {
    paddingTop: SPACING.xl,
    ...glass(theme),
  };
}
