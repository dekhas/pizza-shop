import './App.scss';
import * as axios from "axios";
import React, {useEffect} from 'react';
import {Home, Cart,} from "./components";
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/pizzasReducer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        })
    }, []);

    return (
        <div>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/cart'} component={Cart}/>
        </div>
    );
}

export default App;