import React from "react";

const Filter = ({ allAirlines }) => {
  return (
    <div>
      Show routes on
      <select>
        <option value="">Show All</option>
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
