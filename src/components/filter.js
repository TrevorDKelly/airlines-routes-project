import React from "react";
import Select from "./select";

const Filter = ({
  allAirlines, selectedAirline, setAirline, allAirports,
  selectedAirport, setAirport, setFirstIndex
}) => {
  const selectAirline = (e) => {
    e.preventDefault();
    setAirline(parseInt(e.target.value), 10);
    setFirstIndex(0);
  }

  const selectAirport = (e) => {
    e.preventDefault();
    setAirport(e.target.value);
    setFirstIndex(0);
  }

  return (
    <div>
      Show routes on
      <Select options={allAirlines} valueKey="id" titleKey="name"
              allTitle="All Airlines" value={selectedAirline}
              onSelect={selectAirline} />
      flying in or out of
      <Select options={allAirports} valueKey="code" titleKey="name"
              allTitle="All Airports" value={selectedAirport}
              onSelect={selectAirport} />
    </div>
  );
}

export default Filter;
