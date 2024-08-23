import React, { useState } from "react";
import PrimaryBtn from "../Button/PrimaryBtn";
import Paragraph from "../paragraph/Paragraph";

function Input({
  type = "text",
  placeholder = "",
  required = false,
  width = "100%",
  height = "40px",
  borderRadius = "7px",
}) {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setDisplayValue(inputValue);
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        value={inputValue}
        style={{ width, height, borderRadius }}
      />
      <PrimaryBtn text="Submit" onClick={handleClick} />
      <Paragraph text={displayValue} />
    </>
  );
}

export default Input;
