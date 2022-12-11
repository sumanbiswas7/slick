import React from "react";
import "./Button.css";

interface Props {
  label: string;
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg";
  background?: "black" | "red" | "yellow" | "green" | "blue";
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  hexBg?: string;
  color?: string;
}

const colorMap = {
  black: { backgroundColor: "#25262B", color: "#fff" },
  red: { backgroundColor: "#FA5252", color: "#fff" },
  green: { backgroundColor: "#12B886", color: "#fff" },
  yellow: { backgroundColor: "#FAB005", color: "#fff" },
  blue: { backgroundColor: "#228BE6", color: "#fff" },
};
const sizeMap = {
  sm: { height: 28, padding: 12, fontSize: 10 },
  md: { height: 35, padding: 13, fontSize: 11 },
  lg: { height: 45, padding: 17, fontSize: 13 },
};
const radiusMap = {
  sm: { borderRadius: 4 },
  md: { borderRadius: 8 },
  lg: { borderRadius: 12 },
};

export const Button = ({
  label,
  size,
  background,
  style,
  radius,
  onClick,
  disabled,
  hexBg,
  color,
}: Props) => {
  const title = label || "Settings";
  const btnColor = colorMap[background as keyof typeof colorMap];
  const btnSize = sizeMap[(size as keyof typeof sizeMap) || "md"];
  const btnRadius = radiusMap[(radius as keyof typeof radiusMap) || "sm"];
  const hexCol = { backgroundColor: hexBg };
  const btnTextColor = { color: color };
  const disabledStyle = disabled && {
    backgroundColor: "#A5A5A5",
    color: "#656565",
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
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

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      style={combiled_style}
      className={
        disabled
          ? "E78F05D0790911EDA1B0B561FAB79F1A-disabled"
          : "E78F05D0790911EDA1B0B561FAB79F1A-btn"
      }
    >
      {title}
    </button>
  );
};
