import {createSelector} from 'reselect'
import {initialState} from './Reducer'
const selectCounterUserReducer = state => state.counter
export const selectCounter = createSelector(
    selectCounterUserReducer,
    state => state.counter
)