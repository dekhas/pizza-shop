import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";

const SortPopup = ({items}) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [activeItem, setActiveItem] = useState(0);

    let sortRef = useRef(null);

    const checkMouseOut = (e) => {
        if(!e.path.includes(sortRef.current)) {
            setIsOpenPopup(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', checkMouseOut)
    },[]);

    const changeIsOpen = () => {
        setIsOpenPopup(!isOpenPopup)
    };

    const changeActiveItem = (index) => {
        setActiveItem(index)
    };

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    className={ isOpenPopup ? "rotated" : null}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={changeIsOpen}>{items[activeItem].name}</span>
            </div>
            {isOpenPopup ?
                <div className="sort__popup">
                    <ul>
                        {items.map((obj, index) => {
                            return (
                                <li className={activeItem === index ? "active" : null}
                                    onClick={() => changeActiveItem(index)}
                                    key={`${obj.type}_${index}`}>{obj.name}</li>
                            )
                        })}
                    </ul>
                </div>
                : null}
        </div>
    )
};

SortPopup.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SortPopup;