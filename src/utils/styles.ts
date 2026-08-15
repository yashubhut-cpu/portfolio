import { CSSProperties } from "react";
import { SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS, LAYOUT } from "../constants/theme";

export { SPACING, FONT_SIZE, FONT_WEIGHT, RADIUS, LAYOUT };

export function container(): CSSProperties {
  return {
    maxWidth: LAYOUT.pageMaxWidth,
    margin: "0 auto",
    padding: `0 ${SPACING.lg}`,
    width: "100%",
  };
}
