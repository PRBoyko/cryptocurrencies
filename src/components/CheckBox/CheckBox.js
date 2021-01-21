import React from 'react';

const CheckBox = (props) => {


    return (


        <input
            name={props.name}
            type="checkbox"
            checked={props.checked}
            onClick={()=>{props.changeCheck(props.id)} }
        />

    );
};

export default CheckBox;