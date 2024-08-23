import React from "react";

function MenuIcon({
  color = "black",
  fontSize,
  textAlign,
  onClick,
  display = "inline",
}) {
  return (
    <i
      onClick={onClick}
      className="bx bx-menu"
      style={{
        color: color,
        fontSize: fontSize,
        display: display,
        textAlign: textAlign,
      }}
    ></i>
  );
}

export default MenuIcon;
