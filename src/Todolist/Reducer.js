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
import { v4 as uuidv4 } from 'uuid';
export const initialState = {
    isLoading: false,
    listUser: [],
    error: {}
}

const todoListReducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_GET_LIST_USER: {
            return {
                ...state,
                isLoading: true
            }
        }
        case HANDLE_GET_LIST_USER_SUCCESS: {
            const newListUser = action.payload
            return {
                ...state,
                isLoading: false,
                listUser: newListUser
            }
        }
        case HANDLE_GET_USER_LIST_SUCCESS_DETAIL: {
            return{
                ...state,
                isLoading: false
            }
        }

        case HANDLE_ADD_GET_LIST_USER: {
            return state
        }
        case HANDLE_ADD_GET_LIST_USER_SUCCESS: {
            const user = action.payload
            const newListUser = [...state.listUser, user]
            return {
                ...state,
                listUser: newListUser
            }
        
        }
        case HANDLE_ADD_GET_LIST_USER_SUCCESS_DETAIL: {
            return state
        }

        case HANDLE_DELETE_GET_LIST_USER: {
            return state
        }
        case HANDLE_DELETE_GET_LIST_USER_SUCCESS: {
            const userId = action.payload
            const newListUser = state.listUser.filter(item => item.id !== userId.id)
            return {
                ...state,
                listUser: newListUser
            }
        }
        case HANDLE_DELETE_GET_LIST_USER_SUCCESS_DETAIL: {
            return state
        }

        case HANDLE_EDIT_GET_LIST_USER: {
            console.log("Action Edit = ", action)
            return state
        }
        case HANDLE_EDIT_GET_LIST_USER_SUCCESS: {
            const user = action.payload
            const newListUser = state.listUser.map(item => {
                if(item.id === user.id){
                    return{
                        ...state,
                        id: user.id,
                        name: user.name,
                        phone: user.phone,
                        email: user.email,
                        address: user.address
                    }
                }
                return item
            })
            return {
                ...state,
                listUser: newListUser
            }
        }
        case HANDLE_EDIT_GET_LIST_USER_SUCCESS_DETAIL: {
            return state
        }
    default:
        return state
    }
}
export default todoListReducer;