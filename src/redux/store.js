import {createStore, combineReducers} from "redux";
import filterReducer from "./filterReducer.js";
import pizzasReducer from "./pizzasReducer.js";

let reducers = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer,
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;