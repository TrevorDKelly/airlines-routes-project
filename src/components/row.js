import React from "react";

const Row = ({ row, columns, format }) => {
  return (
    <tr>
      {columns.map(({ property }) => {
        return <td key={property}>{format(property, row[property])}</td>
      })}
    </tr>
  )
}

export default Row;
