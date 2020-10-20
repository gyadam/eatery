import React, { useState } from "react";
import "../css/table.css";

export const DataTable = ({ restaurants, states, genres }) => {
  const [stateFilter, setStateFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const filterRestaurantByState = (restaurant) => {
    return restaurant.state.includes(stateFilter);
  };

  const filterRestaurantByGenre = (restaurant) => {
    return (
      restaurant.tags.split(",").includes(genreFilter) || genreFilter === ""
    );
  };

  const filterRestaurantBySearchTerm = (restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(searchFilter) ||
      restaurant.city.toLowerCase().includes(searchFilter) ||
      restaurant.tags.toLowerCase().includes(searchFilter)
    );
  };

  const filteredRows = (restaurants) => {
    const filteredRows = restaurants
      .filter((restaurant) => filterRestaurantByState(restaurant))
      .filter((restaurant) => filterRestaurantByGenre(restaurant))
      .filter((restaurant) => filterRestaurantBySearchTerm(restaurant))
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

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setSearchFilter("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchFilter(searchInput);
  };

  return (
    <div className="restaurant-datatable">
      <form className="search-box" onSubmit={handleSubmit}>
        <label for="site-search">Search for restaurants:</label>
        <input
          type="search"
          id="restaurant-search"
          name="search"
          value={searchInput}
          onChange={handleChange}
        ></input>
        <button>Search</button>
      </form>
      <div className="filter-container">
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
      </div>
      <div className="filter-container">
        <label for="genre-filter">Choose a genre:</label>
        <select
          name="genre"
          id="genre-filter"
          onChange={(e) => setGenreFilter(e.target.value)}
        >
          <option value="">All</option>
          {genres.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
      </div>
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
