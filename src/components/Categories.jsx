import React, {useState} from 'react';
import PropTypes from "prop-types"
import {useDispatch} from "react-redux";
import {setCategories} from "../redux/filterReducer";

const Categories = ({ items }) => {
    const[activeItem, setActiveItem] = useState(0);
    const dispatch = useDispatch();

    const changeActiveItem = (index) => {
        dispatch(setCategories(index));
        setActiveItem(index)
    };

    return (
        <div className="categories">
            <ul>
                {items.map((item, index) => {
                    return <li onClick={() => {changeActiveItem(index)}}
                               key={`${item}_${index}`}
                               className={activeItem === index ? "active": ''}>{item}</li>
                })}
            </ul>
        </div>
    )
};

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Categories.defaultProps = {
    items: ["Все"],
};

export default Categories;