import { checkBoxes } from "../constants/checkboxes";
import {
  changeFilter,
  changeColumns,
  changeCheckBoxes,
} from "../constants/varForActions";

const initialState = {
  filter: "all",
  changeColumns: false,
  showCheckboxColumn: checkBoxes,
  favoriteTable: JSON.parse(localStorage.getItem("favorite")) || [],
};

const changeData = (state = initialState, actions) => {
  switch (actions.type) {
    case changeFilter:
      return { ...state, filter: actions.payload };
    case changeColumns:
      return { ...state, changeColumns: actions.payload };
    case changeCheckBoxes:
      return { ...state, showCheckboxColumn: actions.payload };
    default:
      return state;
  }
};

export default changeData;
