export const receiveData = (json) => {
  return {
    type: "RECEIVE_DATA",
    payload: json,
  };
};

export const changeFavoriteItem = (data) => {
  return {
    type: "CHANGE_FAVORITE",
    payload: data,
  };
};

export const setFilter = (filter) => {
  return {
    type: "CHANGE_FILTER",
    payload: filter,
  };
};

export const setChangeColumns = (changeColumns) => {
  return {
    type: "CHANGE_COLUMNS",
    payload: !changeColumns,
  };
};

export const setshowCheckboxColumn = (showCheckboxColumn) => {
  return {
    type: "CHANGE_CHECKBOXES",
    payload: showCheckboxColumn,
  };
};

export const receiveDetailData = (json, loaded) => {
  loaded = true;
  return {
    type: "RECEIVE_DETAILED_DATA",
    payload: { data: json, loaded: loaded },
  };
};
