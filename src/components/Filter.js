import React from "react";

export const Filter = ({ name, values, handleChange }) => {
  let options = [];

  if (name === "state") {
    options = values.map((state) => (
      <option value={state.abbreviation}>{state.name}</option>
    ));
  } else if (name === "genre") {
    options = values.map((genre) => <option value={genre}>{genre}</option>);
  }

  return (
    <div className="filter-container">
      <label for={name + "-filter"}>Choose a {name}:</label>
      <select name={name} id={name + "-filter"} onChange={handleChange}>
        <option value="">All</option>
        {options}
      </select>
    </div>
  );
};
