let cryptoData;

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd', false);
xhr.send();
if (xhr.status !==200) {
    console.log(xhr.status + ': ' + xhr.statusText );
} else {
    cryptoData = JSON.parse(xhr.responseText);
}

 cryptoData.data.forEach(item=>item.onfavorite=false);



export default cryptoData;