export const receiveData = (json) => {
    return {
        type: "RECEIVE_DATA",
        payload: json
       }
}

export const changeFavoriteItem=(data)=>{
    return{
        type: 'CHANGE_FAVORITE',
        payload: data
    }

}

export const setFilter =(filter)=>{
    return{
        type: 'CHANGE_FILTER',
        payload: filter
    }

}