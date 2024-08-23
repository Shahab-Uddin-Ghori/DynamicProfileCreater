// valueStore.js

let displayValue = ""; // Initialize the variable

export const setDisplayValue = (value) => {
  displayValue = value; // Update the value
};

export const getDisplayValue = () => {
  return displayValue; // Retrieve the value
};
