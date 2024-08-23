import React from "react";

function H3({
  text = "Heading Here",
  color = "black",
  fontSize,
  fontFamily = "sans-serif",
}) {
  return (
    <h3
      className="h3"
      style={{ color: color, fontSize: fontSize, fontFamily: fontFamily }}
    >
      {text}
    </h3>
  );
}

export default H3;
