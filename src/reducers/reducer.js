import { checkBoxes } from "../constants/checkboxes";

const initialState = {
  dataApi: [],
  isLoaded: false,
  filter: "all",
  changeColumns: false,
  showCheckboxColumn: checkBoxes,
  favoriteTable: JSON.parse(localStorage.getItem("favorite")) || [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "RECEIVE_DATA":
      return { ...state, dataApi: actions.payload, isLoaded: true };
    case "CHANGE_FAVORITE":
      return { ...state, dataApi: actions.payload };
    case "CHANGE_FILTER":
      return { ...state, filter: actions.payload };
    case "CHANGE_COLUMNS":
      return { ...state, changeColumns: actions.payload };
    case "CHANGE_CHECKBOXES":
      return { ...state, showCheckboxColumn: actions.payload };
    default:
      return state;
  }
};

export default reducer;
