import React from "react";
import PageSelection from "./page_selection";
import Row from "./row";

const columns = [
  {name: "Airline", property: "airline"},
  {name: "Source Airport", property: "src"},
  {name: "Destination Airport", property: "dest"},
];

const Table = ({ className, rows, perPage, format, firstIndex, setFirstIndex }) => {
  const displayedRows = rows.slice(firstIndex, firstIndex + perPage);

  return (
    <div>
      <table className={className}>
        <thead>
          <tr>
            {columns.map(c => <td key={c.name}>{c.name}</td>)}
          </tr>
        </thead>
        <tbody>
          {displayedRows.map(row => {
            return <Row row={row} columns={columns} format={format}
                    key={row.airline + row.src + row.dest} />
          })}
        </tbody>
      </table>
      <PageSelection firstIndex={firstIndex} setFirstIndex={setFirstIndex}
                     total={rows.length} perPage={perPage}/>
    </div>
  )
}

export default Table;
