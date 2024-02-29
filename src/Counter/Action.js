import {
    HANDLE_INCREMENT_COUNTER,
    HANDLE_INCREMENT_COUNTER_SUCCESS,
} from "./Constanst"
export const increment = (payload) => {
    return{
        type: HANDLE_INCREMENT_COUNTER ,
        payload: payload
    }
}
export const incrementSuccess = (payload) => {
    return{
        type: HANDLE_INCREMENT_COUNTER_SUCCESS,
        payload: payload
    }
}
