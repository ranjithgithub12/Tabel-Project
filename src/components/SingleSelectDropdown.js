import React from "react";

const SingleSelectDropdown = ({ selectedValue, onChange, disabledOptions }) => {
   // Static options for the dropdown
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Select an Option
      </option>
      {options.map((option) => (
        <option
          key={option}
          value={option}
          disabled={disabledOptions.includes(option)}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default SingleSelectDropdown;
