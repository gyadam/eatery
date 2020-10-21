import React, { useState } from "react";
import { Pagination } from "./Pagination";
import "../css/datatable.css";
import ClipLoader from "react-spinners/ClipLoader";
import { Table } from "./Table";

export const DataTable = ({ restaurants, states, genres, loading, error }) => {
  const [stateFilter, setStateFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const handleStateFilterChange = (e) => {
    setCurrentPage(1);
    setStateFilter(e.target.value);
  };

  const handleGenreFilterChange = (e) => {
    setCurrentPage(1);
    setGenreFilter(e.target.value);
  };

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

  const filterResults = (restaurants) => {
    const filteredResults = restaurants
      .filter((restaurant) => filterRestaurantByState(restaurant))
      .filter((restaurant) => filterRestaurantByGenre(restaurant))
      .filter((restaurant) => filterRestaurantBySearchTerm(restaurant));

    return filteredResults;
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
    setCurrentPage(1);
  };

  const paginateResults = (restaurants) => {
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    return restaurants.slice(indexOfFirstResult, indexOfLastResult);
  };

  const filteredRestaurants = filterResults(restaurants);
  const paginatedRestaurants = paginateResults(filteredRestaurants);

  if (loading) {
    return (
      <div className="spinner-container">
        <ClipLoader size={30} color={"#086788"} />
      </div>
    );
  }

  return (
    <div className="restaurant-datatable">
      <div className="datatable-header">
        <div className="search-filter-container">
          <form className="search-box" onSubmit={handleSubmit}>
            <label for="site-search"></label>
            <input
              type="search"
              id="restaurant-search"
              name="search"
              value={searchInput}
              onChange={handleChange}
              placeholder="Search for restaurants"
            ></input>
            <button>Search</button>
          </form>
          <div className="filter-container">
            <label for="state-filter">Choose a state:</label>
            <select
              name="state"
              id="state-filter"
              onChange={handleStateFilterChange}
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
              onChange={handleGenreFilterChange}
            >
              <option value="">All</option>
              {genres.map((genre) => (
                <option value={genre}>{genre}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Table paginatedRestaurants={paginatedRestaurants} error={error}></Table>
      <Pagination
        resultsPerPage={resultsPerPage}
        totalResults={filteredRestaurants.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
