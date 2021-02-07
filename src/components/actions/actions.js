export const receiveData = (json) => {
    return {
        type: "RECEIVE_DATA",
        payload: json
       }
}