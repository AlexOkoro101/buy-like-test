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
    LOGIN_SUCCESS,
    FETCHING_MAKE,
    FETCHING_MAKE_FAILED,
    FETCHING_MAKE_SUCCESS,
    FETCHING_MODEL,
    FETCHING_MODEL_FAILED,
    FETCHING_MODEL_SUCCESS,
    FETCHING_COLLECTION,
    FETCHING_COLLECTION_FAILED,
    FETCHING_COLLECTION_SUCCESS,
    LOGIN_FAILED,
    DETAIL,
    BUY_NOW,
    TOTAL,
} from "../types";
//
const initialState = {
    cars: [],
    loading: false,
    error: {},
    params: {},
    makes: [],
    models: [],
    carCollection: [],
    modeled: {},
    userLoggedIn: false,
    carDetails: {},
    total: 0,
};

const Cars = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_CARS:
        case FETCHING_MAKE:
        case FETCHING_MODEL:
        case BUY_NOW:
        case FETCHING_COLLECTION:
            return {
                ...state,
                loading: true,
                error: {},
            };
        case FETCHING_CARS_FAILED:
        case FETCHING_MAKE_FAILED:
        case FETCHING_MODEL_FAILED:
        case FETCHING_COLLECTION_FAILED:
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
        case FETCH_SUCCESSFUL:
            return {
                ...state,
                cars: action.payload,
                loading: false,
                error: {},
            };
        case TOTAL:
            return {
                ...state,
                total: action.payload,
            };
        case FETCHING_MAKE_SUCCESS:
            return {
                ...state,
                makes: action.payload,
                loading: false,
                error: {},
            };
        case FETCHING_MODEL_SUCCESS:
            return {
                ...state,
                models: action.payload,
                loading: false,
                error: {},
            };
        case FETCHING_COLLECTION_SUCCESS:
            return {
                ...state,
                carCollection: action.payload,
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
        case LOGIN_SUCCESS:
            return {
                ...state,
                userLoggedIn: true,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                userLoggedIn: false,
            };
        case DETAIL:
            return {
                ...state,
                carDetails: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
export default Cars;
