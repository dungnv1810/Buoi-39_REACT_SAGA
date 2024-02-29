import {
    HANDLE_INCREMENT_COUNTER,
    HANDLE_INCREMENT_COUNTER_SUCCESS,

    
} from "./Constanst"
export const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_INCREMENT_COUNTER: {
            return state
        }
        case HANDLE_INCREMENT_COUNTER_SUCCESS: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        default:
            return state
    }
}
export default counterReducer;