import React, { useState } from "react";
import PrimaryBtn from "../Button/PrimaryBtn";
import { setDisplayValue } from "./inputValue";

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
}) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim("") !== "") {
      setDisplayValue(inputValue);
      console.log(inputValue);
    }
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        value={inputValue}
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
      <PrimaryBtn text="Submit" margin=".5rem 0" onClick={handleClick} />
    </>
  );
}

export default Input;
