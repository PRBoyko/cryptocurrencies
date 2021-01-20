import React, {useState} from "react";
import ButtonForFilter from "../Button/ButtonForFilter";
import './itemstatus.css'

const ItemStatus = (props) => {

    const [button,setButton] = useState([{name:'Show All', label:'all'}, {name:'Show Favorite', label:'favorite'} ])

    return (
        <div className='btn-group'>
            {button.map((item)=>{
                const isActive= props.filter===item.label
                return (
                    <ButtonForFilter onClick={()=>props.onFilterChange(item.label)} style={isActive ? {backgroundColor:'green'} : {backgroundColor:'gray'}} key={item.name} btnname={item.name}/>
                )
                })}
        </div>
    );
};

export default ItemStatus;

