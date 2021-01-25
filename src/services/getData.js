import axios from "axios";
import { API_PREFIX } from "../constants/API";

export const getCurrencyData = async () => {
  try {
    const data = await axios.get(
      `${API_PREFIX}v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`
    );

    let local = localStorage.getItem("favorite");
    return data.data.data.map((item) => {
      item.onFavorite = false;
      const { metrics, symbol, slug, id } = item;
      if (local !== null) {
        if (local.includes(item.id)) {
          item.onFavorite = true;
        }
      }

      return {
        metrics: metrics.market_data.price_usd.toFixed(2),
        onFavorite: item.onFavorite,
        symbol,
        slug,
        id,
      };
    });
  } catch (e) {
    throw Error(e);
  }
};
