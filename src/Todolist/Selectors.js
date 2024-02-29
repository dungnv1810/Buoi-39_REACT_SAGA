import {createSelector} from 'reselect'
import {initialState} from './Reducer'
// bước 1 select theo cấp độ reducer
const selectTodoListUserReducer = (state) => state.todos
// bước 2 select theo từng trường reduser
export const selectListUSer = createSelector(
    selectTodoListUserReducer,
    state => state.listUser
)
export const selectIsLoading = createSelector(
    selectTodoListUserReducer,
    state => state.isLoading
)

