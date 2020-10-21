import React from "react";
import "../css/pagination.css";

export const Pagination = ({
  resultsPerPage,
  totalResults,
  setCurrentPage,
}) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => setCurrentPage(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
