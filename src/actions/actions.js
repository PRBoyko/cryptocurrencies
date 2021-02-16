import {
  changeColumns,
  changeFilter,
  changeCheckBoxes,
  receiveDetailedData,
  receiveDataFromAPI,
  updateFavorite,
} from "../constants/varForActions";

export const receiveData = (json) => {
  return {
    type: receiveDataFromAPI,
    payload: json,
  };
};

export const changeFavoriteItem = (data) => {
  return {
    type: updateFavorite,
    payload: data,
  };
};

export const setFilter = (filter) => {
  return {
    type: changeFilter,
    payload: filter,
  };
};

export const setChangeColumns = (change) => {
  return {
    type: changeColumns,
    payload: !change,
  };
};

export const setshowCheckboxColumn = (showCheckboxColumn) => {
  return {
    type: changeCheckBoxes,
    payload: showCheckboxColumn,
  };
};

export const receiveDetailData = (json, loaded) => {
  loaded = true;
  return {
    type: receiveDetailedData,
    payload: { data: json, loaded: loaded },
  };
};
