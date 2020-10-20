import React, { useEffect, useState } from "react";
import { DataTable } from "./components/DataTable";
import "./css/app.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
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
    async function getRestaurants() {
      const url = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: "Api-Key q3MNxtfep8Gt",
          },
        });
        handleErrors(response);
        try {
          const data = await response.json();
          data.sort((a, b) => (a.name < b.name ? -1 : 1));
          setRestaurants(data);
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
        <h1>Eatery</h1>
        <h2>Eat. Sleep. Order. Repeat.</h2>
      </header>
      <main>
        <DataTable restaurants={restaurants} />
      </main>
    </div>
  );
}

export default App;
