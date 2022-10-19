import rootReducer from "./reducers";
import rootSaga from "./sagas";
import createSagaMiddleware from "@redux-saga/core";
import {applyMiddleware, createStore} from "redux";
import {createWrapper} from "next-redux-wrapper";
import {SagaMiddleware} from "redux-saga";


const bindMiddleware = (middleware: SagaMiddleware<object>[]) => {
    if (process.env.NODE_ENV !== 'production') {
        const {composeWithDevTools} = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware))
    }

    return applyMiddleware(...middleware)

}

export const makeStore = (context: any) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    //@ts-ignore
    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

export const wrapper = createWrapper(makeStore, { debug: true })



