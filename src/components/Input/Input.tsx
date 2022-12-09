import React from "react";
import "./Input.css";

interface Props {
  label?: string;
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accent?: "black" | "red" | "yellow" | "green" | "blue";
  radius?: "sm" | "md" | "lg";
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
  sm: { borderRadius: 2 },
  md: { borderRadius: 5 },
  lg: { borderRadius: 10 },
};
const sizeMap = {
  sm: { padding: 7, fontSize: 10, marginTop: 3 },
  md: { padding: 9, fontSize: 12, marginTop: 4 },
  lg: { padding: 15, fontSize: 14, marginTop: 5 },
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
  const inpSize = sizeMap[(size as keyof typeof sizeMap) || "md"];

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
