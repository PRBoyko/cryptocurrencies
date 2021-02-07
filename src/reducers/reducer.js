const initialState = {
  dataApi: [],
  isLoaded: false,
  filter: "all",
  changeColumns: false,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "RECEIVE_DATA":
      return { dataApi: actions.payload, isLoaded: true };
    case "CHANGE_FAVORITE":
      return { ...state, dataApi: actions.payload };
    case "CHANGE_FILTER":
      return { ...state, filter: actions.payload };
    case "CHANGE_COLUMNS":
      return { ...state, changeColumns: actions.payload };
    default:
      return state;
  }
};

export default reducer;
