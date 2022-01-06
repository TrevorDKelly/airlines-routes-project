import React, { useState } from "react";
import Select from "./select";

const Filter = ({
  allAirlines, selectedAirline, setAirline, allAirports,
  selectedAirport, setAirport, setFirstIndex
}) => {
  const [disableShowAll, setDisableShowAll] = useState(true);

  const selectAirline = (e) => {
    e.preventDefault();
    setAirline(parseInt(e.target.value), 10);
    setDisableShowAll(false);
    setFirstIndex(0);
  }

  const selectAirport = (e) => {
    e.preventDefault();
    setAirport(e.target.value);
    setDisableShowAll(false);
    setFirstIndex(0);
  }

  const showAll = (e) => {
    e.preventDefault();
    setAirport("");
    setAirline(-1);
    setDisableShowAll(true);
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
      <button onClick={showAll} disabled={disableShowAll}>Show All Routes</button>
    </div>
  );
}

export default Filter;
