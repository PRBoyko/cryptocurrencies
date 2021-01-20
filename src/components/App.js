import React, { useState, useEffect } from 'react';


import TableCell from "./TableCell/TableCell";
import ButtonForFilter from '../components/Button/ButtonForFilter'
import Favorite from "./Favorite/Favorite";
import ItemStatus from "./ItemStatus/ItemStatus";

import './App.css';
import { getCurrencyDataNew } from "../constants/getData";


function App() {
   const [currencyData,setcurrencyData] =useState([]);
   const [filter, setFilter] = useState('all');


    useEffect(async () => {
        setcurrencyData(await getCurrencyDataNew());
    }, []);



    const changeFavorite = (id) => {
        const newCryptos = currencyData.map((item) => {
            if (id === item.id) {
                item.onfavorite = !item.onfavorite
            }

            return item;
        })

        setcurrencyData(newCryptos);

    }

   const  filterItems = (items, filter) => {
        if (filter==='all'){
            return items
        }

        if (filter==='favorite'){
            return items.filter(item=>item.onfavorite)
        }

   }

   const onFilterChange = (filter)=>{
        setFilter(filter)
    }

   const visibleItems = filterItems(currencyData, filter);

      return(
        <div >
            <ItemStatus filter={filter} onFilterChange={onFilterChange}/>
            <table className='center'>
                <thead>
                <tr>
                    <th className='borderoff'></th>
                    <th><TableCell data='Slug'/></th>
                    <th><TableCell data='Symbol'/></th>
                    <th><TableCell data='Price_USD'/></th>
                </tr>
                </thead>
                <tbody>
                    {visibleItems.map(item=>{
                        return(
                            <tr key={item.id} >
                               <td className='borderoff'><Favorite id={item.id} style={item.onfavorite ? {color: 'yellow'} : {color: 'grey'}} changeFavorite={changeFavorite}/></td>
                                <td><TableCell data={item.slug.toUpperCase()}/></td>
                                <td><TableCell data={item.symbol}/></td>
                                <td><TableCell data={item.metrics.market_data.price_usd.toFixed(2)}/></td>
                            </tr>
                        )


                    })}

                </tbody>
            </table>

            <div className='editbuttoncentred'>
                <ButtonForFilter  btnname='Edit Table'/>
            </div>


        </div>
    )

}

export default App;

