import React, { useState } from "react";
import "../css/table.css";
const states = require("../states.json");

export const DataTable = ({ restaurants }) => {
  const [stateFilter, setStateFilter] = useState("");

  const filteredRows = (restaurants, filter) => {
    const filteredRows = restaurants
      .filter((restaurant) => restaurant.state.includes(stateFilter))
      .map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.city}</td>
          <td>{restaurant.state}</td>
          <td>{restaurant.telephone}</td>
          <td>{restaurant.tags}</td>
        </tr>
      ));

    const noResults = (
      <tr>
        <td colSpan="5" className="no-results">
          Sorry, it looks like there are no restaurants that match these
          filters!
        </td>
      </tr>
    );

    return filteredRows.length > 0 ? filteredRows : noResults;
  };

  return (
    <div className="restaurant-datatable">
      <label for="state-filter">Choose a state:</label>
      <select
        name="state"
        id="state-filter"
        onChange={(e) => setStateFilter(e.target.value)}
      >
        <option value="">All</option>
        {states.map((state) => (
          <option value={state.abbreviation}>{state.name}</option>
        ))}
      </select>
      <table>
        <colgroup>
          <col class="auto-column" />
          <col class="auto-column" />
          <col class="small-column" />
          <col class="auto-column" />
          <col class="large-column" />
        </colgroup>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Phone number</th>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>{filteredRows(restaurants, stateFilter)}</tbody>
      </table>
    </div>
  );
};
