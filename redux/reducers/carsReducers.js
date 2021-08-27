//
import {
    FETCHING_CARS,
    FETCH_SUCCESSFUL,
    FETCHING_CARS_FAILED,
    SEARCHING,
    SEARCHING_SUCCESS,
    SEARCHING_FAILED,
} from "../types";
//
const initialState = {
    cars: [],
    loading: false,
    error: {},
    params: {},
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
                loading: false,
                error: {},
                params: action.payload,
            };
        case SEARCHING_SUCCESS:
            return {
                ...state,
                cars: action.payload,
                loading: false,
                error: {},
            };
        case SEARCHING_FAILED:
            return {
                ...state,
                cars: {},
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default Cars;
