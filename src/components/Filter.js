import React from "react";

export const Filter = ({ name, values, handleChange }) => {
  let options = [];

  if (name === "state") {
    options = values.map((state) => (
      <option key={state.name} value={state.abbreviation}>
        {state.name}
      </option>
    ));
  } else if (name === "genre") {
    options = values.map((genre) => (
      <option key={genre} value={genre}>
        {genre}
      </option>
    ));
  }

  return (
    <div className="filter-container">
      <label htmlFor={name + "-filter"}>Choose a {name}:</label>
      <select name={name} id={name + "-filter"} onChange={handleChange}>
        <option value="">All</option>
        {options}
      </select>
    </div>
  );
};
