//
import {
    FETCHING_CARS,
    FETCH_SUCCESSFUL,
    FETCHING_CARS_FAILED,
    SEARCHING,
} from "../types";
//
const initialState = {
    cars: {},
    loading: false,
    error: {},
    searchTerm: {},
};

const Cars = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_CARS:
            return {
                ...state,
                loading: true,
                error: {},
            };
        case FETCH_SUCCESSFUL:
            return {
                ...state,
                cars: action.payload,
                loading: false,
            };
        case FETCHING_CARS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SEARCHING:
            return {
                ...state,
                searchTerm: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
export default Cars;
