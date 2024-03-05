import React, { useState } from "react";

interface Props {
  onChange: (value: string) => void; // Callback function to handle value change
  min: number; // Minimum value allowed
  max: number; // Maximum value allowed
}

const NumberSelect = ({ onChange, min, max }: Props) => {
  const [value, setValue] = useState(""); // State to store the input value

  // Event handler for input value change
  const handleNumber1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // Update the state with the new value
    onChange(event.target.value); // Call the onChange callback with the new value
  };

  return (
    <input
      type="number"
      id="number1"
      value={value}
      min={min}
      max={max}
      onChange={handleNumber1Change}
      placeholder="Enter a number"
      className="block w-full rounded-md border bg-dark-green p-2 focus:outline-none focus:ring-2 focus:ring-bright-yellow/70"
    />
  );
};

export default NumberSelect;
