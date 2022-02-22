import React from "react";
import "./button.css";
const Button = ({ text, color, width, fontColor, boxShadow, type,onClick }) => {
  return (
    <button
      type={type ? type : ""}
      style={{
        backgroundColor: color,
        width: width,
        color: fontColor,
        boxShadow: boxShadow,
        borderRadius: "10px",
      }}
      onClick={onClick}
    >
      {text}{" "}
    </button>
  );
};

export default Button;
