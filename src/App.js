import React, { useState } from "react";

import SingleSelectDropdown from "./components/SingleSelectDropdown";

import MultiSelectDropdown from "./components/MultiSelectDropdown";

import "./styles.css";

const App = () => {
  // State to manage rows in the table
  const [rows, setRows] = useState([{ id: 1, singleSelect: "", multiSelect: [] }]);
  
  // Function to add a new row to the table
  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      { id: prevRows.length + 1, singleSelect: "", multiSelect: [] },
    ]);
  };
  
  // Function to handle changes in the single-select dropdown
  const handleSingleSelectChange = (id, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, singleSelect: value } : row
      )
    );
  };

  // Function to handle changes in the multi-select dropdown
  const handleMultiSelectChange = (id, values) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, multiSelect: values } : row
      )
    );
  };

  const getUsedSingleSelectValues = () => {
    return rows.map((row) => row.singleSelect).filter((value) => value);
  };

  return (
    <div className="container">  
      <table>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <SingleSelectDropdown
                  selectedValue={row.singleSelect}
                  onChange={(value) => handleSingleSelectChange(row.id, value)}
                  disabledOptions={getUsedSingleSelectValues()}
                />
              </td>
              <td>
                <MultiSelectDropdown
                  selectedValues={row.multiSelect}
                  onChange={(values) => handleMultiSelectChange(row.id, values)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-row-button" onClick={handleAddRow}>
        + Add New Row
      </button>
    </div>
  );
};

export default App;
