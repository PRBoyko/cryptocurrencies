import axios from "axios";
import { API_PREFIX } from "../constants/API";

export const getDetailedData = async () => {
    try {
        const data = await axios.get(
            `${API_PREFIX}v1/assets/bitcoin/metrics`

        );


        return {
            id: data.data.data.id,
            open: data.data.data.market_data.ohlcv_last_1_hour.open.toFixed(2),
            high: data.data.data.market_data.ohlcv_last_1_hour.high.toFixed(2),
            low: data.data.data.market_data.ohlcv_last_1_hour.low.toFixed(2),
            close: data.data.data.market_data.ohlcv_last_1_hour.low.toFixed(2),
            volume: data.data.data.market_data.ohlcv_last_1_hour.volume.toFixed(2)
        }

    } catch (e) {
        throw Error(e);
    }
};
