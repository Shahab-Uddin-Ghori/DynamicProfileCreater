import React from "react";

function PrimaryBtn({
  color = "#fff",
  text = "Add",
  backgroundColor = "#5cb85c",
  width = "6rem",
  height = "2rem",
  boderRadius = "7px",
  boxShadow = "0 0.4px 8px 0 rgb(120, 120, 120)",
  onClick,
  position,
  bottom,
  left,
  right,
}) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        borderRadius: boderRadius,
        boxShadow: boxShadow,
        position: position,
        bottom: bottom,
        left: left,
        right: right,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default PrimaryBtn;
