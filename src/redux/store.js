import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import filterReducer from "./filterReducer.js";
import pizzasReducer from "./pizzasReducer.js";
import thunk from "redux-thunk";
import cartReducer from "./cartReducer";

let reducers = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancer(
    applyMiddleware(thunk)
));

export default store;