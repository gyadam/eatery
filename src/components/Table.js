import React from "react";

export const Table = ({ paginatedRestaurants, error }) => {
  const generateRows = (restaurants) => {
    if (error) {
      return (
        <tr>
          <td colSpan="5" className="error-row">
            An error occured while retrieving data from the server. Please try
            again later!
          </td>
        </tr>
      );
    }
    if (restaurants.length > 0) {
      return restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{splitCommaSeparatedWords(restaurant.city)}</td>
          <td>{restaurant.state}</td>
          <td>{restaurant.telephone}</td>
          <td>{splitCommaSeparatedWords(restaurant.tags)}</td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td colSpan="5" className="no-results">
            Sorry, it looks like there are no restaurants that match these
            filters!
          </td>
        </tr>
      );
    }
  };

  const splitCommaSeparatedWords = (tags) => {
    return tags.split(",").join(", ");
  };

  return (
    <table>
      <colgroup>
        <col className="auto-column" />
        <col className="auto-column" />
        <col className="small-column" />
        <col className="auto-column" />
        <col className="large-column" />
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
      <tbody>{generateRows(paginatedRestaurants)}</tbody>
    </table>
  );
};
