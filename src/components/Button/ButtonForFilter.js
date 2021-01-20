import React from 'react';
import './Button.css';

const ButtonForFilter = (props) => {
    return (
        <div>
            <button onClick={props.onClick} style={props.style} className='btn buttonposition'>{props.btnname}</button>
        </div>
    );
}

export default ButtonForFilter;