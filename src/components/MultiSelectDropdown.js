import React, { useState } from "react";

const MultiSelectDropdown = ({ selectedValues, onChange }) => {
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3", "Option 4"]);
  const [newOption, setNewOption] = useState("");

  const handleAddOption = () => {
    if (newOption.trim() && !options.includes(newOption)) {
      setOptions((prevOptions) => [...prevOptions, newOption]);
      setNewOption("");
    }
  };

  const handleCheckboxChange = (value) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(updatedValues);
  };

  const handleRemoveSelected = (value) => {
    const updatedValues = selectedValues.filter((v) => v !== value);
    onChange(updatedValues);
  };

  return (
    <div className="multi-select-dropdown">
      <div className="selected-values-container">
        {selectedValues.map((value) => (
          <div key={value} className="selected-value-item">
            {value} <span className="remove-icon" onClick={() => handleRemoveSelected(value)}>x</span>
          </div>
        ))}
      </div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedValues.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
      <div className="add-new-option">
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={handleAddOption}>Add</button>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;