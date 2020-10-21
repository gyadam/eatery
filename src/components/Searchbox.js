import React from "react";

export const Searchbox = ({ handleSubmit, searchInput, handleChange }) => {
  return (
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
  );
};
