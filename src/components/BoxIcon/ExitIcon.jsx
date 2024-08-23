import React from "react";

function ExitIcon({
  color = "black",
  fontSize,
  textAlign,
  onClick,
  display = "inline-block",
}) {
  return (
    <i
      onClick={onClick}
      className="bx bx-exit"
      style={{
        color: color,
        fontSize: fontSize,
        display: display,
        textAlign: textAlign,
      }}
    ></i>
  );
}

export default ExitIcon;
