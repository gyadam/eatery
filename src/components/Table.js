import React from "react";
import "../css/table.css";

export const Table = () => {
  return (
    <table className="restaurant-datatable">
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
        <tr>
          <td>Old Hickory Steakhouse</td>
          <td>Oxon Hill</td>
          <td>MD</td>
          <td>(301) 965-4000</td>
          <td>Social, Food and Dining, Restaurants, Steakhouses</td>
        </tr>
        <tr>
          <td>Old Hickory Steakhouse</td>
          <td>Oxon Hill</td>
          <td>MD</td>
          <td>(301) 965-4000</td>
          <td>Social, Food and Dining, Restaurants, Steakhouses</td>
        </tr>
        <tr>
          <td>Old Hickory Steakhouse</td>
          <td>Oxon Hill</td>
          <td>MD</td>
          <td>(301) 965-4000</td>
          <td>Social, Food and Dining, Restaurants, Steakhouses</td>
        </tr>
      </tbody>
    </table>
  );
};
