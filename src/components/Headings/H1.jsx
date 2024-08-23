import React from "react";

function H1({
  text = "Heading Here",
  color = "black",
  fontSize,
  fontFamily = "sans-serif",
}) {
  return (
    <h1
      className="h1"
      style={{ color: color, fontSize: fontSize, fontFamily: fontFamily }}
    >
      {text}
    </h1>
  );
}

export default H1;
