import React, {useEffect} from "react";
import {Categories, Header, SortPopup} from "./index";
import PizzaBlock from "./PizzaBlock";
import {useSelector} from "react-redux";

const Home = () => {

    const items = useSelector(({pizzas}) => pizzas.items);

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories items={['Все',"Мясные","Вегетерианские","Гриль","Острые","Закрытые",]} />
                            <SortPopup items={[{name:"популярности", type: "popular"}, {name:"цене", type: "price"}, {name:"алфавиту", type: "alphabet"},]} />
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {items.map((data) => {
                                return <PizzaBlock key={`pizza_id_${data.id}`} {...data} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;