import React from "react";

export const Searchbox = ({ handleSubmit, searchInput, handleChange }) => {
  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <label htmlFor="site-search"></label>
      <input
        type="search"
        autocomplete="off"
        id="restaurant-search"
        name="search"
        value={searchInput}
        onChange={handleChange}
        placeholder="Search for restaurants"
      ></input>
      <button>Search</button>
    </form>
  );
};
