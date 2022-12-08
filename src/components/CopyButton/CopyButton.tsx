import React from "react";
import { useState } from "react";
import "./CopyButton.css";

interface Props {
  label: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  background?: "black" | "red" | "yellow" | "green" | "blue";
  style?: React.CSSProperties;
  disabled?: boolean;
  hexBg?: string;
  color?: string;
  value: string;
}
const colorMap = {
  black: { backgroundColor: "#25262B", color: "#fff" },
  red: { backgroundColor: "#FA5252", color: "#fff" },
  green: { backgroundColor: "#12B886", color: "#fff" },
  yellow: { backgroundColor: "#FAB005", color: "#fff" },
  blue: { backgroundColor: "#228BE6", color: "#fff" },
};
const sizeMap = {
  xs: { height: 20, padding: 10, fontSize: 9 },
  sm: { height: 20, padding: 11, fontSize: 10 },
  md: { height: 30, padding: 13, fontSize: 11 },
  lg: { height: 40, padding: 15, fontSize: 12 },
  xl: { height: 50, padding: 20, fontSize: 15 },
};
const radiusMap = {
  xs: { borderRadius: 2 },
  sm: { borderRadius: 3 },
  md: { borderRadius: 5 },
  lg: { borderRadius: 7 },
  xl: { borderRadius: 10 },
};

export const CopyButton = ({
  label,
  size,
  background,
  style,
  radius,
  disabled,
  hexBg,
  color,
  value,
}: Props) => {
  const [copied, setCopied] = useState(false);

  //   const title = label || "Copy";
  const btnColor = colorMap[background as keyof typeof colorMap];
  const btnSize = sizeMap[(size as keyof typeof sizeMap) || "md"];
  const btnRadius = radiusMap[(radius as keyof typeof radiusMap) || "sm"];
  const hexCol = { backgroundColor: hexBg || "teal" };
  const btnTextColor = { color: color };
  const disabledStyle = disabled && {
    backgroundColor: "#A5A5A5",
    color: "#656565",
  };
  const combiled_style = {
    ...btnSize,
    ...hexCol,
    ...btnColor,
    ...btnRadius,
    ...style,
    ...btnTextColor,
    ...disabledStyle,
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCopied(true);
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      style={combiled_style}
      className={disabled ? "disabled" : "btn"}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};
