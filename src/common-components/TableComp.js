import React from 'react';

export default function TableComp({ tableCols, tableData }) {
  return (
    <div className="table-details">
      <table border="1">
        <tr>
          {tableCols.map(_ => (
            <td>{_.label}</td>
          ))}
        </tr>
      </table>
    </div>
  );
}
