import React from "react";

function Paragraph({
  text = "paragraph here",
  fontFamily = "sans-serif",
  color,
  fontWeight,
  lineHeight,
  letterSpacing,
}) {
  return (
    <p
      style={{
        color: color,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        fontFamily: fontFamily,
      }}
    >
      {text}
    </p>
  );
}

export default Paragraph;
