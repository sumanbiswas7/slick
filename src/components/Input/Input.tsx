import React from "react";
import "./Input.css";

interface Props {
  label?: string;
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accent?: "black" | "red" | "yellow" | "green" | "blue";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  size?: "sm" | "md" | "lg";
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
const sizeMap = {
  sm: { padding: 8, fontSize: 11, marginTop: 2 },
  md: { padding: 10, fontSize: 13, marginTop: 5 },
  lg: { padding: 20, fontSize: 16, marginTop: 5 },
};

export const Input = ({
  placeholder,
  label,
  required,
  style,
  onChange,
  accent,
  radius,
  size,
}: Props) => {
  const accentCol = colorMap[accent as keyof typeof colorMap];
  const inpRadius = radiusMap[radius as keyof typeof radiusMap];
  const inpSize = sizeMap[size as keyof typeof sizeMap];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  const combined_styles = { ...accentCol, ...inpRadius, ...inpSize, ...style };

  return (
    <div className="inp-container">
      {label && (
        <label
          style={{ ...inpSize, padding: 0 }}
          className="inp-label"
          htmlFor="input"
        >
          {label}
          {required && <span className="required"> *</span>}
        </label>
      )}
      <input
        onChange={handleChange}
        style={combined_styles}
        className="inp"
        id="input"
        placeholder={placeholder}
      />
    </div>
  );
};
