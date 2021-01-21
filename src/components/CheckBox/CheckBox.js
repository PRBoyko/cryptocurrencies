import React from 'react';

const CheckBox = (props) => {


    return (
        <div>
        <input
            name={props.name}
            type="checkbox"
            checked={props.checked}
            onChange={()=>{props.changeCheck(props.id)} }/>
            <label>{props.value}</label>
        </div>
    );
};

export default CheckBox;