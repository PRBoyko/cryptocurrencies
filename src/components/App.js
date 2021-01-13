import React, {useState} from 'react';
import TableCell from "./TableCell/TableCell";
import getcryptoData from "./getData";
import './App.css';
import Favorite from "./Favorite/Favorite";
import TableHeaders from "./TableHeader/TableHeaders";

function App() {

    const [cryptoData, setCryptoData] = useState(getcryptoData.data);

    function changeFavorite(id){
        setCryptoData(prev=>{
            return prev.map(item=>{
                if(item.id===id){
                    item.onfavorite=!item.onfavorite;
                }


            return item;
            })
        })

        console.log(cryptoData)
    }


    return (
        <div className='centertable'>
            <div className='displaytable displaytableheaders'>
                <TableHeaders name='Slug'/>
                <TableHeaders name='Symbol'/>
                <TableHeaders name='USD_price'/>
            </div>

            {cryptoData.map(item=>
                (
                    <div className='displaytable' key={item.id}>
                    <Favorite id={item.id} style={item.onfavorite ? {color: 'yellow'} : {color: 'grey'} } onChecked={changeFavorite}/>
                    {/*{console.log(item.slug, item.id, item.onfavorite)}*/}
                    <TableCell cryptoDataCell={item.slug.toUpperCase()} />
                    <TableCell cryptoDataCell={item.symbol} />
                    <TableCell cryptoDataCell={item.metrics.market_data.price_usd.toFixed(2)} />
                    </div>
                ))}


        </div>
    );
}

export default App;

