import React from "react";
import { Link } from "react-router-dom";

import "./item-status.css";

const ItemStatus = () => {
  return (
    <div className="btn-group">
      <Link className={"remove-decoration"} to={"/"}>
        <button className={"btn button-position"}>Show All</button>
      </Link>
      <Link className={"remove-decoration"} to={"/favorite"}>
        <button className={"btn button-position"}>Favorite</button>
      </Link>
    </div>
  );
};

export default ItemStatus;
