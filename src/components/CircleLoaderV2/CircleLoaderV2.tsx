import React from "react";
import "./CircleLoaderV2.css";

interface Props {
  size?: "sm" | "md" | "lg";
  color?: "black" | "red" | "yellow" | "green" | "blue";
  style?: React.CSSProperties;
  hexBg?: string;
}

const colorMap = {
  black: { borderColor: "#25262B", borderLeftColor: "transparent" },
  red: { borderColor: "#FA5252", borderLeftColor: "transparent" },
  green: { borderColor: "#12B886", borderLeftColor: "transparent" },
  yellow: { borderColor: "#FAB005", borderLeftColor: "transparent" },
  blue: { borderColor: "#228BE6", borderLeftColor: "transparent" },
};
const sizeMap = {
  sm: { width: "1em", height: "1em", borderWidth: "2px" },
  md: { width: "2em", height: "2em", borderWidth: "2px" },
  lg: { width: "3em", height: "3em", borderWidth: "3px" },
};

export const CircleLoaderV2 = ({ size, style, hexBg, color }: Props) => {
  const loaderColor = colorMap[color as keyof typeof colorMap];
  const loaderSize = sizeMap[(size as keyof typeof sizeMap) || "md"];
  const hexCol = { borderColor: hexBg, borderLeftColor: "transparent" };

  const combined_style = {
    ...loaderSize,
    ...hexCol,
    ...loaderColor,
    ...style,
  };

  return <div style={combined_style} className="circleloaderV2-loader"></div>;
};
