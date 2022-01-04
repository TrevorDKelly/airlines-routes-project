import React from 'react';
import './App.css';
import data from "./data";

const Data = ({type, data}) => {
  return (
    <div>
      <h2>{type}</h2>
      {data.map(d => {
        return <p>{Object.keys(d).map(k => <span>{d[k]} </span>)}</p>
      })}
    </div>
  )
}

const App = () => (
  <div className="app">
    <header className="header">
      <h1 className="title">Airline Routes</h1>
    </header>
    <section>
      <Data type="Routes" data={data.routes} />
      <Data type="airlines" data={data.airlines} />
      <Data type="airports" data={data.airports} />
    </section>
  </div>
)

export default App;
