import React from "react";

function H2({
  text = "Heading Here",
  color = "black",
  fontSize,
  fontFamily = "sans-serif",
}) {
  return (
    <h2
      className="h2"
      style={{ color: color, fontSize: fontSize, fontFamily: fontFamily }}
    >
      {text}
    </h2>
  );
}

export default H2;
