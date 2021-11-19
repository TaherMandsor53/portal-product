import React, { useState } from 'react';

export default function TableComp({ tableCols, tableData }) {
  const [sortData, setSortData] = useState('');

  const onSort = (event, sortKey) => {
    const data = tableData.slice().sort((a, b) => {
      if (a[sortKey] > b[sortKey]) {
        return 1;
      }
      if (b[sortKey] > a[sortKey]) {
        return -1;
      } else {
        return 0;
      }
    });
    setSortData(data);
  };

  const filterData = sortData && sortData.length > 0 ? sortData : tableData;
  return (
    <div className="table-details">
      <table border="1">
        <tr>
          {tableCols.map((_, index) => (
            <th key={index} onClick={e => onSort(e, _.value)}>
              {_.label}
            </th>
          ))}
        </tr>
        {filterData &&
          filterData.map((row, index) => {
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
