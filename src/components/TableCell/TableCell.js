import React from "react";

import "./table-cell.css";

const TableCell = ({ data, onClick }) => {
  return (
    <span onClick={onClick} className="cell-position">
      {data}
    </span>
  );
};

export default TableCell;
