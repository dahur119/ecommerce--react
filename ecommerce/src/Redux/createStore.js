import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";


import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const SagaMiddleware = createSagaMiddleware()
export  const middlewares = [thunk, SagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
SagaMiddleware.run(rootSaga)

export default store;