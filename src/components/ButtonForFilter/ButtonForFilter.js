import React from "react";

import "./button-for-filter.css";

const ButtonForFilter = (props) => {
  const { form, type, onSubmit, onClick, style, btnText } = props;
  return (
    <div>
      <button
        form={form}
        type={type}
        onSubmit={onSubmit}
        onClick={onClick}
        style={style}
        className="btn button-position"
      >
        {btnText}
      </button>
    </div>
  );
};

export default ButtonForFilter;
