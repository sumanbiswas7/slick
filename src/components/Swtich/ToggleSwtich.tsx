import React from "react";
import "./ToggleSwtich.css";

interface Props {
  value?: (e: boolean) => void;
  background?: "black" | "red" | "yellow" | "green" | "blue";
  hexBg?: string;
  size?: "sm" | "md" | "lg";
  wrapperStyle?: React.CSSProperties;
}

const colorMap = {
  black: { backgroundColor: "#25262B" },
  red: { backgroundColor: "#FA5252" },
  green: { backgroundColor: "#12B886" },
  yellow: { backgroundColor: "#FAB005" },
  blue: { backgroundColor: "#228BE6" },
};
const sizeMap = {
  sm: { height: 20, width: 40 },
  md: { height: 25, width: 50 },
  lg: { height: 30, width: 60 },
};

export const ToggleSwitch = ({
  value,
  background,
  hexBg,
  size,
  wrapperStyle,
}: Props) => {
  const btnColor = colorMap[background as keyof typeof colorMap];
  const hexBgCol = { backgroundColor: hexBg };
  const switchSize = sizeMap[(size as keyof typeof sizeMap) || "md"];
  const handleChange = (e: any) => {
    const isChecked = e.target.checked;
    if (value) value(isChecked);
  };
  const combined_styles = {
    ...hexBgCol,
    ...btnColor,
    ...switchSize,
    ...wrapperStyle,
  };

  return (
    <label>
      <label className="switch"></label>
      <input onChange={handleChange} className="switch-input" type="checkbox" />
      <span style={combined_styles} className="slider"></span>
    </label>
  );
};
