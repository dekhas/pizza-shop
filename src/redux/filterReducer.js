let initialState = {
    categories: 0,
    sortBy: "popular"
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SORT_BY": {
            return {
                ...state,
                sortBy: action.payload,
            };
        }
        case  "SET_CATEGORIES": {
            return {
                ...state,
                categories: action.payload,
            }
        }
        default:
            return state
    }
};

export const setSortBy = (sortBy) => ({type: "SET_SORT_BY", payload: sortBy});
export const setCategories = (categories) => ({type: "SET_CATEGORIES", payload: categories});

export default filterReducer;