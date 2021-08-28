//
import {
    FETCHING_CARS,
    FETCH_SUCCESSFUL,
    FETCHING_CARS_FAILED,
    SEARCHING,
    SEARCHING_SUCCESS,
    SEARCHING_FAILED,
    FETCHING,
    FETCHING_FAILED,
    FETCHING_SUCCESS,
    FETCHING_MAKE,
    FETCHING_MAKE_FAILED,
    FETCHING_MAKE_SUCCESS,
} from "../types";
//
const initialState = {
    cars: [],
    loading: false,
    error: {},
    params: {},
    makes: [],
};

const Cars = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_CARS:
        case FETCHING_MAKE:
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
        case FETCHING_MAKE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SEARCHING:
        case FETCHING:
            return {
                ...state,
                loading: true,
                error: {},
                params: action.payload,
            };
        case SEARCHING_SUCCESS:
        case FETCHING_SUCCESS:
            return {
                ...state,
                cars: action.payload,
                loading: false,
                error: {},
            };
        case FETCHING_MAKE_SUCCESS:
            return {
                ...state,
                makes: action.payload,
                loading: false,
                error: {},
            };
        case SEARCHING_FAILED:
        case FETCHING_FAILED:
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
