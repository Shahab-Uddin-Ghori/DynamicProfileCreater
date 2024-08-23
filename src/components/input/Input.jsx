import React from "react";
import PrimaryBtn from "../Button/PrimaryBtn";

function Input({
  type = "text",
  placeholder = "",
  required = false,
  width = "100%",
  height = "40px",
  borderRadius = "7px",
  margin,
  backgroundColor,
  color,
  value,
  onChange,
  onSubmit,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        style={{
          width,
          height,
          borderRadius,
          margin: margin,
          outline: "none",
          border: "none",
          backgroundColor: backgroundColor,
          padding: "4px 16px",
          color: color,
        }}
      />
      <PrimaryBtn text="Submit" margin=".5rem 0" onClick={onSubmit} />
    </>
  );
}

export default Input;
