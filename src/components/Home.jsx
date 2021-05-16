import React, {useEffect} from "react";
import {Categories, SortPopup} from "./index";
import PizzaBlock from "./PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {addPizzaToCart} from "../redux/cartReducer";

const Home = () => {

    const dispatch = useDispatch();

    const items = useSelector(({pizzas}) => pizzas.items);

    useEffect(() => {
        document.title = "Pizza-Shop | Home";
    }, []);

    const handleAddPizza = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories items={['Все', "Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые",]}/>
                    <SortPopup items={[{name: "популярности", type: "popular"}, {
                        name: "цене",
                        type: "price"
                    }, {name: "алфавиту", type: "alphabet"},]}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items.map((data) => {
                        return <PizzaBlock onClickAddPizzaToCart={(obj) => handleAddPizza(obj)} key={`pizza_id_${data.id}`} {...data} />
                    })}
                </div>
            </div>
        </div>
    )

};

export default Home;