import axios from "axios";
import { API_PREFIX } from './API'


export const getCurrencyDataNew = async () =>{
    try{
        const data = await axios.get(`${API_PREFIX}v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`);

        return   data.data.data.map(item => {
            item.onfavorite = false;
            return {
                metrics:item.metrics.market_data.price_usd.toFixed(2),
                onfavorite:item.onfavorite,
                symbol:item.symbol,
                slug: item.slug,
                id: item.id
            };
        });

    }
    catch (e){
        throw Error(e)
    }

}





