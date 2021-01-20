import React from 'react';
import './Button.css';

const ButtonForFilter = (props) => {
    return (
        <div>
            <button className='btn btn-secondary buttonposition'>{props.btnname}</button>
        </div>
    );
}

export default ButtonForFilter;