import React from "react";

const Row = ({ row, columns, format }) => {
  return (
    <tr key={row.airline + row.src + row.dest}>
      {columns.map(({ property }) => {
        return <td key={property}>{format(property, row[property])}</td>
      })}
    </tr>
  )
}

const Table = ({ className, columns, rows, format }) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map(c => <td key={c.name}>{c.name}</td>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => <Row row={row} columns={columns} format={format} />)}
      </tbody>
    </table>
  )
}

export default Table;
