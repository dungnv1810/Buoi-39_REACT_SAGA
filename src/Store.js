import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "@redux-saga/core"
import rootReducer from "./RootReducer"
import mySaga from "./RootSaga"
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(mySaga)
export default store