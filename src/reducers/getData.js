import {
  receiveDetailedData,
  receiveDataFromAPI,
  updateFavorite,
} from "../constants/varForActions";

const initialState = {
  dataApi: [],
  isLoaded: false,
  detailedInfo: { data: [], loaded: false },
};

const getData = (state = initialState, actions) => {
  switch (actions.type) {
    case receiveDataFromAPI:
      return { ...state, dataApi: actions.payload, isLoaded: true };
    case receiveDetailedData:
      return { ...state, detailedInfo: actions.payload };
    case updateFavorite:
      return { ...state, dataApi: actions.payload };
    default:
      return state;
  }
};

export default getData;
