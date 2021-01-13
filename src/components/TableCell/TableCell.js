import React from 'react';
import './tablecell.css'

const TableCell = (props) => {
    return (
        <table>
            <tbody>
            <tr>
                <td className='tableborder'>
                    {props.cryptoDataCell}
                </td>
            </tr>
            </tbody>
        </table>

    );
};

export default TableCell;