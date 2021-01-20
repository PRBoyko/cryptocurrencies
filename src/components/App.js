import React, {useState, useEffect} from 'react';
import TableCell from "./TableCell/TableCell";
import './App.css';
import ButtonForFilter from '../components/Button/ButtonForFilter'
import axios from "axios";
import Favorite from "./Favorite/Favorite";


function App() {
   const [currencyData,setcurrencyData] =useState([]);


    useEffect(() => {
        const getCurrencyData = () =>{
            axios.get('https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd').
            then((response)=>{
                const currencyData =response.data.data.map(item => {
                    item.onfavorite = false;
                    return item;
                })

                setcurrencyData(currencyData)
            }).catch(err=>console.log(err))
        }
        getCurrencyData();
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


      return(
        <div >
            <div className='displaybuttons'>
                <ButtonForFilter   btnname='Show All'/>
                <ButtonForFilter  btnname='Show Favorite'/>
            </div>

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
                    {currencyData.map(item=>{
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

