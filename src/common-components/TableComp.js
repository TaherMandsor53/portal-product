import React from 'react';

export default function TableComp({ tableCols, tableData }) {
  return (
    <div className="table-details">
      <table border="1">
        <tr>
          {tableCols.map(_ => (
            <th>{_.label}</th>
          ))}
        </tr>
        {tableData &&
          tableData.map((row, index) => {
            return (
              <tr key={index}>
                {tableCols.map((col, index) => (
                  <td key={index}>{row[col.value]}</td>
                ))}
              </tr>
            );
          })}
      </table>
    </div>
  );
}
