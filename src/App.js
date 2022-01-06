import React, { useState } from 'react';
import './App.css';
import data from "./data";
import Table from "./components/table";
import Filter from "./components/filter";

function formatValue(property, value) {
  if (property === "airline") {
    return data.getAirlineById(value).name;
  } else {
    return data.getAirportByCode(value).name;
  }
}

function filterRoutes(airline) {
  if (airline === -1) return data.routes;
  return data.routes.filter(r => r.airline === airline)
}

const App = () => {
  const [firstIndex, setFirstIndex] = useState(0)
  const [airline, setAirline] = useState(-1);
  const routesToShow = filterRoutes(airline);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <Filter allAirlines={data.airlines} selected={airline}
              setAirline={setAirline} setFirstIndex={setFirstIndex} />
      <Table className="routes-table" rows={routesToShow} perPage={25}
             format={formatValue} firstIndex={firstIndex}
             setFirstIndex={setFirstIndex} />
    </div>
  )
}

export default App;
