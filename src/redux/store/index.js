import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import RootReducer from "../reducers";
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import RootSaga from "../sagas";
 
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['common']
  }

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(RootSaga);

export const persistor = persistStore(store);
