import React from "react";
import Select from "./select";

const Filter = ({ allAirlines, selected, setAirline, setFirstIndex }) => {
  const selectAirline = (e) => {
    e.preventDefault();
    setAirline(parseInt(e.target.value), 10);
    setFirstIndex(0);
  }

  return (
    <div>
      Show routes on
      <Select options={allAirlines} valueKey="id" titleKey="name"
              allTitle="All Airlines" value={selected} onSelect={selectAirline}
      />
    </div>
  );
}

export default Filter;
