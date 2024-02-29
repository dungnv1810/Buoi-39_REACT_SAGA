import {combineReducers} from "redux"
import counterReducer from "./Counter/Reducer"
import todoListReducer from "./Todolist/Reducer";
const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoListReducer
})
export default rootReducer;

