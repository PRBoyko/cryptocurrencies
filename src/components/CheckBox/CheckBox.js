import React from "react";

const CheckBox = (props) => {
  const { name, checked, changeCheck, id, value } = props;

  return (
    <div>
      <input
        name = {name}
        type = "checkbox"
        checked = {checked}
        onChange = {() => {
          changeCheck(id);
        }}
      />
      <label>{value}</label>
    </div>
  );
};

export default CheckBox;
