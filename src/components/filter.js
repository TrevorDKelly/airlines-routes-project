import React from "react";

const Filter = ({ allAirlines, selected, setAirline, setFirstIndex }) => {
  const selectAirline = (e) => {
    e.preventDefault();
    setAirline(parseInt(e.target.value), 10);
    setFirstIndex(0);
  }

  return (
    <div>
      Show routes on
      <select onChange={selectAirline} value={selected}>
        <option value="-1">Show All</option>
        {allAirlines.map(airline => {
          return (
            <option key={airline.id} value={airline.id}>
              {airline.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Filter;
