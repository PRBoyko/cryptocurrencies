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