import React, { ReactNode } from "react";
import "./InputV2.css";

interface Props {
  placeholder?: string;
  inputStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accent?: "black" | "red" | "yellow" | "green" | "blue";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  icon: ReactNode;
  hexAccent?: string;
}

const colorMap = {
  black: { outlineColor: "#25262B" },
  red: { outlineColor: "#FA5252" },
  green: { outlineColor: "#12B886" },
  yellow: { outlineColor: "#FAB005" },
  blue: { outlineColor: "#228BE6" },
};
const radiusMap = {
  xs: { borderRadius: 2 },
  sm: { borderRadius: 5 },
  md: { borderRadius: 7 },
  lg: { borderRadius: 15 },
  xl: { borderRadius: 30 },
};

export const InputV2 = ({
  placeholder,
  inputStyle,
  wrapperStyle,
  onChange,
  accent,
  radius,
  icon,
  hexAccent,
}: Props) => {
  const accentCol = colorMap[accent as keyof typeof colorMap];
  const hexAccentCol = { outlineColor: hexAccent };
  const inpRadius = radiusMap[radius as keyof typeof radiusMap];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  const combined_styles = {
    ...hexAccentCol,
    ...accentCol,
    ...inpRadius,
    ...inputStyle,
  };

  return (
    <div style={{ ...wrapperStyle }} className="inp2-container">
      {icon && <div className="icon-label">{icon}</div>}
      <input
        onChange={handleChange}
        style={combined_styles}
        className="inp2"
        id="input"
        placeholder={placeholder}
      />
    </div>
  );
};
