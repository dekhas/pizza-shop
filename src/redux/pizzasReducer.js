let initialState = {
    items: [],
    isLoading: true,
};

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PIZZAS": {
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
        }
        default: return state
    }
};

export const setPizzas = (items) => ({type: "SET_PIZZAS",payload:items});

export default pizzasReducer;