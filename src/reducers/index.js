import { combineReducers } from "redux";
import getData from "./getData";
import changeData from "./changeData";

const rootReducer = combineReducers({ getData, changeData });

export default rootReducer;
