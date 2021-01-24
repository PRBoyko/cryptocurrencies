import React from 'react';
import './Button.css';

const ButtonForFilter = (props) => {
    return (
        <div>
            <button form={props.form}
                    type={props.type}
                    onSubmit={props.onSubmit}
                    onClick={props.onClick}
                    style={props.style}
                    className='btn buttonposition'>{props.btnname}</button>
        </div>
    );
}

export default ButtonForFilter;