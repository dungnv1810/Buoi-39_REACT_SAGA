import {
    call,
    all,
    delay,
    takeEvery,
    takeLatest,
    put
} from "redux-saga/effects"
import {HANDLE_INCREMENT_COUNTER} from './Constanst';
import {incrementSuccess} from './Action'
function* counterIncremant(params){
    try{
        yield put(incrementSuccess())
    }catch(err){

    }
}

function* watchCounter(){
    yield takeLatest(HANDLE_INCREMENT_COUNTER, counterIncremant)
}

function* watchAll(){
    yield all([
        watchCounter()
    ])
}
export default watchAll