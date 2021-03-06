import React, {useState} from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const PizzaBlock = ({ id,name,imageUrl,types,sizes,price, onClickAddPizzaToCart }) => {
    const itemSizes = [26, 30, 40];
    const itemTypes = ["традиционное", "тонкое"];

    const [counter, setCounter] = useState(0);
    const [activeItemType, setActiveItemType] = useState(0);
    const [activeItemSize, setActiveItemSize] = useState(itemSizes[0]);

    const handleAddPizza = () => {
        setCounter(counter + 1);
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: activeItemSize,
            type: itemTypes[activeItemType],
        };
        onClickAddPizzaToCart(obj)
    };

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((item, index) => {
                        return <li className={index === activeItemType ? "active" : ''}
                                   key={`${item}_${index}`}
                                   onClick={() => setActiveItemType(index)}> {item ? "Тонкое" : "Традиционное"} </li>
                    })}
                </ul>
                <ul>
                    {sizes.map((item, index) => {
                        return <li className={activeItemSize === item ? "active" : ''}
                                   key={`${item}_${index}`}
                                   onClick={() => setActiveItemSize(item)}> {item} см. </li>
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button onclick={handleAddPizza} className="button--add" outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{counter}</i>
                </Button>
            </div>
        </div>
    )
};

PizzaBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number,
};

PizzaBlock.defaultProps = {
    name: "Название пиццы",
    price: 0,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
    types: [0],
    sizes: [26],
};

export default PizzaBlock;