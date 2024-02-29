import {
    all,
    call,
    put,
    delay,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'

import {HANDLE_GET_LIST_USER, 
    HANDLE_ADD_GET_LIST_USER, 
    HANDLE_DELETE_GET_LIST_USER, 
    HANDLE_EDIT_GET_LIST_USER} from './Constanst'
import {getListUserSuccess, getListUserSuccessDetail, 
    addGetListUserSuccess, addGetListUserSuccessDetail,
    deleteGetListUserSuccess, deleteGetListUserSuccessDetail,
    editGetListUserSuccess, editGetListUserSuccessDetail
} from './Action'
import {getListUserApi, getAddUserApi, getDeleteApi, getEditApi} from './Services'

function* getListUserName(params){
    const response = yield call(getListUserApi)
    try{
        if(response.status === 200 || response.status === 201){
            yield delay(1000)
            yield put(getListUserSuccess(response.data))
        }else{
            yield put(getListUserSuccessDetail())
        }
    }catch(err){
        yield put(getListUserSuccessDetail())
    }
}
function* watchGetListUserName(){
    yield takeLatest(HANDLE_GET_LIST_USER, getListUserName)
}

function* getAddGetListUserTodo(params){
    const user = params.payload
    const response = yield call(getAddUserApi, user)
    try{    
        if(response.status === 200 || response.status === 201){
            yield put(addGetListUserSuccess(response.data))
        }else{
            yield put(addGetListUserSuccessDetail())
        }
    }catch(err){
        yield put(addGetListUserSuccessDetail())
    }
}
function* watchAddUser(){
    yield takeLatest(HANDLE_ADD_GET_LIST_USER, getAddGetListUserTodo)
}

function* getDeleteListUserTodo(params){
    const userId = params.payload
    const response = yield call(getDeleteApi, userId)
    try{
        if(response.status === 200 || response.status === 201){
            yield put(deleteGetListUserSuccess(response.data))
        }
    }catch(err){
        yield put(deleteGetListUserSuccessDetail())
    }
}
function* watchDeleteUser(){
    yield takeLatest(HANDLE_DELETE_GET_LIST_USER, getDeleteListUserTodo)
}

function* getEditListUserTodo(params){
    const user = params.payload
    const userId = params.payload.id
    const response = yield call(getEditApi, user, userId)
    try{
        if(response.status === 200 || response.status === 201){
            yield put(editGetListUserSuccess(response.data))
        }else{
            yield put(editGetListUserSuccessDetail())
        }
    }catch(err){
        yield put(editGetListUserSuccessDetail())
    }
}
function* watchEditUser(){
    yield takeLatest(HANDLE_EDIT_GET_LIST_USER, getEditListUserTodo)
}

function* watchAll(){
    yield all([
        watchAddUser(),
        watchGetListUserName(),
        watchDeleteUser(),
        watchEditUser()
    ])
}
export default watchAll