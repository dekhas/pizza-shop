import './App.scss';
import React, {useEffect} from 'react';
import {Home, Cart,} from "./components";
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchPizza} from "./redux/pizzasReducer";
import Header from "./components/Header.jsx";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizza())
    }, []);

    return (
        <div>
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/cart'} component={Cart}/>
                </div>
            </div>
        </div>
    );
}

export default App;