import React from "react";
import "./Button.css";

interface Props {
  label: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
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
  xs: { height: 20, padding: 10, fontSize: 9 },
  sm: { height: 20, padding: 11, fontSize: 10 },
  md: { height: 27, padding: 12, fontSize: 10 },
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

const Button = ({
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
  const hexCol = { backgroundColor: hexBg || "#603fef" };
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
      className={disabled ? "disabled" : "btn"}
    >
      {title}
    </button>
  );
};

export default Button;
