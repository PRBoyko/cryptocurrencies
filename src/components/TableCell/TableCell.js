import React from 'react';
import './tablecell.css'

const TableCell = (props) => {
    return (
       <span className='cellposition'>
           {props.data}
       </span>

    );
};

export default TableCell;