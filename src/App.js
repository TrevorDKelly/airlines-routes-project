import React, { useState } from 'react';
import './App.css';
import data from "./data";
import Table from "./components/table";
import PageSelection from "./components/page_selection";

function formatValue(property, value) {
  if (property === "airline") {
    return data.getAirlineById(value).name;
  } else {
    return data.getAirportByCode(value).name;
  }
}

function routesToShow(start) {
  return data.routes.slice(start, start + 25);
}

const columns = [
  {name: "Airline", property: "airline"},
  {name: "Source Airport", property: "src"},
  {name: "Destination Airport", property: "dest"},
];

const App = () => {
  const [firstIndex, setFirstIndex] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <Table className="routes-table" columns={columns}
             rows={routesToShow(firstIndex)} format={formatValue}/>
      <PageSelection firstIndex={firstIndex} setFirstIndex={setFirstIndex} total={data.routes.length} />
    </div>
  )
}

export default App;
