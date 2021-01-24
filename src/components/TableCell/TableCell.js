import React from "react";

import "./table-cell.css";

const TableCell = ({ data }) => {
  return <span className = "cell-position">{data}</span>;
};

export default TableCell;
