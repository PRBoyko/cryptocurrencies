import axios from "axios";
import { API_PREFIX } from "../constants/API";

export const getDetailedData = async (id) => {
  let postfixApi;

  if (id === "1e31218a-e44e-4285-820c-8282ee222035") {
    postfixApi = "bitcoin/metrics";
  }

  if (id === "21c795f5-1bfd-40c3-858e-e9d7e820c6d0") {
    postfixApi = "ethereum/metrics";
  }

  if (postfixApi) {
    try {
      const data = await axios.get(`${API_PREFIX}v1/assets/${postfixApi}`);

      return {
        id: data.data.data.id,
        open: data.data.data.market_data.ohlcv_last_1_hour.open.toFixed(2),
        high: data.data.data.market_data.ohlcv_last_1_hour.high.toFixed(2),
        low: data.data.data.market_data.ohlcv_last_1_hour.low.toFixed(2),
        close: data.data.data.market_data.ohlcv_last_1_hour.low.toFixed(2),
        volume: data.data.data.market_data.ohlcv_last_1_hour.volume.toFixed(2),
      };
    } catch (e) {
      throw Error(e);
    }
  }
};
