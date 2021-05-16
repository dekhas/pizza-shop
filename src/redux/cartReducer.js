let initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_TO_CART": {
            return {
                ...state,
                items: {
                    [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
                },
                totalPrice: state.totalPrice + action.payload.price,
                totalCount: ++state.totalCount,
            }
        }
        default: {
            return state
        }
    }
};

export const addPizzaToCart = (pizza) => ({type:"ADD_PIZZA_TO_CART", payload: pizza});

export default cartReducer;