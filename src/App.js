import React from "react";
import { Table } from "./components/Table";
import "./css/app.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Eatery</h1>
        <h2>Eat. Sleep. Order. Repeat.</h2>
      </header>
      <main>
        <Table />
      </main>
    </div>
  );
}

export default App;
