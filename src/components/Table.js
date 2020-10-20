import React from "react";
import "../css/table.css";

export const Table = ({ restaurants }) => {
  return (
    <table className="restaurant-datatable">
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
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.city}</td>
            <td>{restaurant.state}</td>
            <td>{restaurant.telephone}</td>
            <td>{restaurant.tags}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
