import React, { useState } from "react";
import { Link } from "react-router-dom";

import ButtonForFilter from "../ButtonForFilter";
import { buttons } from "../../constants/buttons";

import "./item-status.css";

const ItemStatus = ({ onFilterChange, filter }) => {
  const [button] = useState(buttons);

  return (
        <div className="btn-group">
        {button.map((item) => {
          const { label, name } = item;
          const isActive = filter === item.label;
          return (
            <Link key={label} className="remove-decoration" to={`/${label}`}>
              <ButtonForFilter
                onClick = {() => onFilterChange(label)}
                style = {
                  isActive
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "gray" }
                }
                key = {name}
                btnText = {name}
              />
            </Link>
          );
        })}
      </div>

  );
};

export default ItemStatus;
