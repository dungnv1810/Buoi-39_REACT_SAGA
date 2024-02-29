import {
    HANDLE_GET_LIST_USER,
    HANDLE_GET_LIST_USER_SUCCESS,
    HANDLE_GET_USER_LIST_SUCCESS_DETAIL,

    HANDLE_ADD_GET_LIST_USER,
    HANDLE_ADD_GET_LIST_USER_SUCCESS,
    HANDLE_ADD_GET_LIST_USER_SUCCESS_DETAIL,

    HANDLE_DELETE_GET_LIST_USER,
    HANDLE_DELETE_GET_LIST_USER_SUCCESS,
    HANDLE_DELETE_GET_LIST_USER_SUCCESS_DETAIL,
    
    HANDLE_EDIT_GET_LIST_USER,
    HANDLE_EDIT_GET_LIST_USER_SUCCESS,
    HANDLE_EDIT_GET_LIST_USER_SUCCESS_DETAIL,
} from "./Constanst"

export const getListUser = () =>{
    return{
        type: HANDLE_GET_LIST_USER
    }
}
export const getListUserSuccess = (payload) => {
    return{
        type: HANDLE_GET_LIST_USER_SUCCESS,
        payload: payload
    }
}
export const getListUserSuccessDetail = (payload) => {
    return{
        type: HANDLE_GET_USER_LIST_SUCCESS_DETAIL,
        payload: payload
    }
}

export const addGetListUser = (payload) => {
    return{
        type: HANDLE_ADD_GET_LIST_USER,
        payload: payload
    }
}
export const addGetListUserSuccess = (payload) => {
    return{
        type: HANDLE_ADD_GET_LIST_USER_SUCCESS,
        payload: payload
    }
}
export const addGetListUserSuccessDetail = (payload) => {
    return{
        type: HANDLE_ADD_GET_LIST_USER_SUCCESS_DETAIL,
        payload: payload
    }
}

export const deletGetListUser = (payload) => {
    return{
        type: HANDLE_DELETE_GET_LIST_USER,
        payload: payload
    }
}
export const deleteGetListUserSuccess = (payload) => {
    return{
        type: HANDLE_DELETE_GET_LIST_USER_SUCCESS,
        payload: payload
    }
}
export const deleteGetListUserSuccessDetail = (payload) => {
    return{
        type: HANDLE_DELETE_GET_LIST_USER_SUCCESS_DETAIL,
        payload: payload
    }
}

export const editGetListUser = (payload) => {
    return{
        type: HANDLE_EDIT_GET_LIST_USER,
        payload: payload
    }
}
export const editGetListUserSuccess = (payload) => {
    return{
        type: HANDLE_EDIT_GET_LIST_USER_SUCCESS,
        payload: payload
    }
}
export const editGetListUserSuccessDetail = (payload) => {
    return{
        type: HANDLE_EDIT_GET_LIST_USER_SUCCESS_DETAIL,
        payload: payload
    }
}
