import React from "react";
import "./CloseButton.css";

interface Props {
  background?: "black" | "red" | "yellow" | "green" | "blue";
  hexBg?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
}

const colorMap = {
  black: { backgroundColor: "#25262B", color: "#fff" },
  red: { backgroundColor: "#FA5252", color: "#fff" },
  green: { backgroundColor: "#12B886", color: "#fff" },
  yellow: { backgroundColor: "#FAB005", color: "#fff" },
  blue: { backgroundColor: "#228BE6", color: "#fff" },
};
const sizeMap = {
  xs: { height: 20, width: 20 },
  sm: { height: 30, width: 30 },
  md: { height: 40, width: 40 },
  lg: { height: 50, width: 50 },
  xl: { height: 60, width: 60 },
};
const radiusMap = {
  xs: { borderRadius: 2 },
  sm: { borderRadius: 5 },
  md: { borderRadius: 8 },
  lg: { borderRadius: 15 },
  xl: { borderRadius: 30 },
};

export const CloseButton = ({
  background,
  hexBg,
  size,
  radius,
  color,
  style,
  onClick,
}: Props) => {
  const btnColor = colorMap[background as keyof typeof colorMap];
  const btnSize = sizeMap[(size as keyof typeof sizeMap) || "md"];
  const btnRadius = radiusMap[(radius as keyof typeof radiusMap) || "sm"];
  const hexCol = { backgroundColor: hexBg || "#603fef" };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  };
  const combiled_style = {
    ...btnSize,
    ...btnRadius,
    ...hexCol,
    ...btnColor,
    ...style,
  };

  return (
    <button onClick={handleClick} style={combiled_style} className="close-btn">
      <div
        style={{ backgroundColor: color || "#fff" }}
        className="cross-line-1"
      ></div>
      <div
        style={{ backgroundColor: color || "#fff" }}
        className="cross-line-2"
      ></div>
    </button>
  );
};
