import React from 'react';
import './App.css';
import data from "./data";
import Table from "./components/table";

function formatValue(property, value) {
  if (property === "airline") {
    return data.getAirlineById(value).name;
  } else {
    return data.getAirportByCode(value).name;
  }
}

const columns = [
  {name: "Airline", property: "airline"},
  {name: "Source Airport", property: "src"},
  {name: "Destination Airport", property: "dest"},
];

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <Table className="routes-table" columns={columns}
             rows={data.routes} perPage={25} format={formatValue}/>
    </div>
  )
}

export default App;
