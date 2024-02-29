import {all} from 'redux-saga/effects'
import watchCounterSaga from './Counter/Saga'
import watchTodoListSaga from './Todolist/Saga'
function* watchAll(){
    yield all([
        watchCounterSaga(),
        watchTodoListSaga()
    ])
}
export default watchAll