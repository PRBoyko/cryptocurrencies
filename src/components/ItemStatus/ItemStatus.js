import React, {useState} from "react";
import ButtonForFilter from "../ButtonForFilter/ButtonForFilter";
import { BrowserRouter, Link } from 'react-router-dom';

import './item-status.css'


const ItemStatus = (props) => {

    const [button] = useState([{name:'Show All', label:'all'}, {name:'Show Favorite', label:'favorite'} ])

    return (

        <BrowserRouter>
        <div className='btn-group'>
            {button.map((item)=>{
                const isActive= props.filter===item.label
                return (
                 <Link className='removedecoration' to={`/${item.label}`}>
                     <ButtonForFilter onClick={()=>props.onFilterChange(item.label)} style={isActive ? {backgroundColor:'green'} : {backgroundColor:'gray'}} key={item.name} btnname={item.name}/>
                 </Link>
                )
                })}
        </div>
        </BrowserRouter>
    );
};

export default ItemStatus;

