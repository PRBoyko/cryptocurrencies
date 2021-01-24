import axios from "axios";
import { API_PREFIX } from "./API";

export const getCurrencyData = async () => {
  try {
    const data = await axios.get(
      `${API_PREFIX}v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`
    );

    return data.data.data.map((item) => {
      item.onFavorite = false;
      const { metrics, onFavorite, symbol, slug, id } = item;
      return {
        metrics: metrics.market_data.price_usd.toFixed(2),
        onFavorite,
        symbol,
        slug,
        id,
      };
    });
  } catch (e) {
    throw Error(e);
  }
};
