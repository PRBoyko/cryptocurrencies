const reducer = (state = {dataApi:[], isLoaded:false}, actions) => {
    switch (actions.type) {
        case  'RECEIVE_DATA':
          return {dataApi:actions.payload,isLoaded:true };
        case  'CHANGE_FAVORITE':
            return state;
        default:
            return state
    }


}

export default reducer;