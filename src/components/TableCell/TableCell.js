import React from 'react';
import './table-cell.css'

const TableCell = (props) => {
    return (
       <span className='cellposition'>
           {props.data}
       </span>

    );
};

export default TableCell;