export const receiveData = (json) => {
    return {
        type: "RECEIVE_DATA",
        payload: json
       }
}

export const changeFavorite=()=>{
    return{
        type: 'CHANGE_FAVORITE'
    }

}