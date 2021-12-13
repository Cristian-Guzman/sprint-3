import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducerProductos } from "../reducers/getProductosReducer";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    products: reducerProductos
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);