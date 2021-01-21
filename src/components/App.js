import React, { useState, useEffect } from 'react';

import TableCell from "./TableCell/TableCell";
import ButtonForFilter from '../components/Button/ButtonForFilter'
import Favorite from "./Favorite/Favorite";
import ItemStatus from "./ItemStatus/ItemStatus";
import CheckBox from "./CheckBox/CheckBox";


import './App.css';
import { getCurrencyDataNew } from "../constants/getData";


function App() {
   const [currencyData,setcurrencyData] =useState([]);
   const [filter, setFilter] = useState('all');
   const [changeColumns,setchangeColumns] = useState(false);
   const [showCheckboxColumn, setshowCheckboxColumn] = useState([{name:'Slug', isChecked:true},{name:'Symbol', isChecked:true},{name:'Price_USD', isChecked:true}]);
   const [showColumn, setShowColumn] = useState([true, true, true])



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

    const changeCheck = (id) => {
        const newCheck = showCheckboxColumn.map((item) => {
            if (id === item.name) {
                item.isChecked = !item.isChecked
            }

            return item;
        })

        setshowCheckboxColumn(newCheck);

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

    const saveData = ()=>{
        setchangeColumns(!changeColumns)
        setShowColumn(prevState => {
            return    prevState.map((item, index)=>item=showCheckboxColumn[index].isChecked)
        })



}


      return(
        <div >
            <ItemStatus filter={filter} onFilterChange={onFilterChange}/>
            <table className='center'>
                <thead>
                <tr>
                    <th className='borderoff'></th>
                    {showColumn[0] && <th><TableCell data='Slug'/></th>}
                    {showColumn[1] && <th><TableCell data='Symbol'/></th>}
                    {showColumn[2] &&<th><TableCell data='Price_USD'/></th>}
                </tr>
                </thead>
                <tbody>
                    {visibleItems.map(item=>{
                        return(
                            <tr key={item.id} >
                               <td className='borderoff'><Favorite id={item.id} style={item.onfavorite ? {color: 'yellow'} : {color: 'grey'}} changeFavorite={changeFavorite}/></td>
                                {showColumn[0] && <td><TableCell data={item.slug.toUpperCase()}/></td>}
                                {showColumn[1] && <td><TableCell data={item.symbol}/></td>}
                                {showColumn[2] &&<td><TableCell data={item.metrics.market_data.price_usd.toFixed(2)}/></td>}
                            </tr>
                        )



                    })}



                    {changeColumns ? <tr >
                                            <td className='borderoff'></td>
                            {showCheckboxColumn.map(item=>{
                                return(
                                    <td className='borderoff'>
                                        <CheckBox
                                            key={item.name}
                                            id={item.name}
                                            name={item.name}
                                            checked={item.isChecked}
                                            changeCheck={changeCheck}
                                            value={item.name}
                                        />
                                    </td>
                                )

                            })}


                    </tr> : null}

                </tbody>
            </table>

            <div className='editbuttoncentred'>
                <ButtonForFilter onClick={saveData} btnname={changeColumns ? 'Save changes' :'Edit Table' }/>
            </div>


        </div>
    )

}

export default App;

