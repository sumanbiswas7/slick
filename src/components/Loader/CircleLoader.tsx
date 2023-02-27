import React from "react";
import "./CircleLoader.css";

interface Props {
  size?: "sm" | "md" | "lg";
  color?: "black" | "red" | "yellow" | "green" | "blue";
  style?: React.CSSProperties;
  hexBg?: string;
}

const colorMap = {
  black: { stroke: "#25262B", color: "#fff" },
  red: { stroke: "#FA5252", color: "#fff" },
  green: { stroke: "#12B886", color: "#fff" },
  yellow: { stroke: "#FAB005", color: "#fff" },
  blue: { stroke: "#228BE6", color: "#fff" },
};
const sizeMap = {
  sm: { width: "1.5em" },
  md: { width: "2.5em" },
  lg: { width: "3.5em" },
};

export const CircleLoader = ({ size, style, hexBg, color }: Props) => {
  const loaderColor = colorMap[color as keyof typeof colorMap];
  const loaderSize = sizeMap[(size as keyof typeof sizeMap) || "md"];
  const hexCol = { stroke: hexBg };

  const svg_style = {
    ...loaderSize,
  };

  const circle_style = {
    ...hexCol,
    ...loaderColor,
    ...style,
  };

  return (
    <svg style={svg_style} className="circleLoader-svg" viewBox="25 25 50 50">
      <circle
        style={circle_style}
        className="circleLoader-circle"
        r="20"
        cy="50"
        cx="50"
      ></circle>
    </svg>
  );
};
