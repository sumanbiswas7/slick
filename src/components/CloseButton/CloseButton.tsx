import React from "react";
import "./CloseButton.css";

interface Props {
  background?: "black" | "red" | "yellow" | "green" | "blue";
  hexBg?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg";
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
  sm: { height: 20, width: 20 },
  md: { height: 30, width: 30 },
  lg: { height: 40, width: 40 },
};
export const radiusMap = {
  sm: { borderRadius: 3 },
  md: { borderRadius: 7 },
  lg: { borderRadius: 30 },
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
    <button
      onClick={handleClick}
      style={combiled_style}
      className="X792B2C0790B11ED89ED499BB1F405DC-close-btn"
    >
      <div
        style={{ backgroundColor: color || "#fff" }}
        className="X792B2C0790B11ED89ED499BB1F405DC-cross-line-1"
      ></div>
      <div
        style={{ backgroundColor: color || "#fff" }}
        className="X792B2C0790B11ED89ED499BB1F405DC-cross-line-2"
      ></div>
    </button>
  );
};
