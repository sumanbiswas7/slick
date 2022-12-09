import React from "react";
import "./ToggleSwtichV2.css";

interface Props {
  value?: (e: boolean) => void;
  background?: "black" | "red" | "yellow" | "green" | "blue";
  hexBg?: string;
}

const colorMap = {
  black: { backgroundColor: "#25262B" },
  red: { backgroundColor: "#FA5252" },
  green: { backgroundColor: "#12B886" },
  yellow: { backgroundColor: "#FAB005" },
  blue: { backgroundColor: "#228BE6" },
};

export const ToggleSwitchV2 = ({ value, background, hexBg }: Props) => {
  const btnColor = colorMap[background as keyof typeof colorMap];
  const hexBgCol = { backgroundColor: hexBg };
  const handleChange = (e: any) => {
    const isChecked = e.target.checked;
    if (value) value(isChecked);
  };

  return (
    <label>
      <label className="switch"></label>
      <input onChange={handleChange} className="switch-input" type="checkbox" />
      <span style={{ ...hexBgCol, ...btnColor }} className="slider2"></span>
    </label>
  );
};
