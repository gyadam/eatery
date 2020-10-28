import React, { useEffect, useState } from "react";
import { DataTable } from "./components/DataTable";
import "./css/app.css";
require("dotenv").config();
const states = require("./states.json");

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function handleErrors(response) {
    if (!response.ok) {
      setError(true);
      setLoading(false);
      throw Error(response.statusText);
    }
  }

  useEffect(() => {
    const getAllGenres = (restaurants) => {
      const listOfGenres = [];
      for (let restaurant of restaurants) {
        const tags = restaurant.tags.split(",");
        for (let tag of tags) {
          if (listOfGenres.indexOf(tag) === -1) {
            listOfGenres.push(tag);
          }
        }
      }
      return listOfGenres;
    };

    async function getRestaurants() {
      const url = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Api-Key ${process.env.REACT_APP_API_KEY}`,
          },
        });
        handleErrors(response);
        try {
          const data = await response.json();
          data.sort((a, b) => (a.name < b.name ? -1 : 1));
          setRestaurants(data);
          const genres = getAllGenres(data);
          setGenres(genres);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }

    getRestaurants();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          <a href="/">Eatery</a>
        </h1>
        <h2>Eat. Sleep. Repeat.</h2>
        <h3>
          At Eatery, we are revolutionizing the way people eat out. With our
          blockchain-based, decentralized network of restaurants and
          cutting-edge AI technology, we are aiming to build the world's first
          scalable restaurant search engine and create a community of Eaters who
          all share the same passion of searching for the finest restaurants.
          Check out our cool new technology in the table below.
        </h3>
      </header>
      <main>
        <DataTable
          restaurants={restaurants}
          genres={genres}
          states={states}
          loading={loading}
          error={error}
        />
      </main>
    </div>
  );
}

export default App;
