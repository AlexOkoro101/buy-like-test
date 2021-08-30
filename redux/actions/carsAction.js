import axios from "axios";
import {
    FETCHING_CARS,
    FETCH_SUCCESSFUL,
    FETCHING_CARS_FAILED,
    SEARCHING,
    SEARCHING_FAILED,
    SEARCHING_SUCCESS,
    FETCHING,
    FETCHING_SUCCESS,
    FETCHING_FAILED,
    FETCHING_MAKE,
    FETCHING_MAKE_FAILED,
    FETCHING_MAKE_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    DETAIL,
} from "../types";
const api = process.env.cars_api;

export const getCars = () => (dispatch) => {
    dispatch({
        type: FETCHING_CARS,
    });

    let url = `${api}?year=&make=&model=&price=&page=1&apiKey=Switch!2020`;
    fetch(url.trim(), {
        method: "GET",
        headers: {},
        credentials: "same-origin",
    })
        .then(function (response) {
            return response.text();
        })
        .then((res) => {
            if (res) {
                if (Object.entries(res).length >= 1) {
                    const dada = JSON.parse(res);
                    if (dada) {
                        dispatch({
                            type: FETCH_SUCCESSFUL,
                            payload: dada.data,
                        });
                    }
                }
            }
        })
        .catch(function (error) {
            dispatch({
                type: FETCHING_CARS_FAILED,
                payload: error.message,
            });
            console.log(error);
        });
};
export const searchTerm = (event) => async (dispatch) => {
    dispatch({
        type: SEARCHING,
        payload: event,
    });
    try {
        let res = await fetch(
            `${api}?year=${event.year}&make=${
                event.make
            }&model=${""}&price=${""}&page=1&apiKey=Switch!2020`,
            {
                method: "GET",
                headers: {},
                credentials: "same-origin",
            }
        )
            .then(function (response) {
                return response.text();
            })
            .catch(function (error) {
                dispatch({
                    type: SEARCHING_FAILED,
                    payload: error.message,
                });
                console.log(error);
            });
        if (res) {
            const dada = JSON.parse(res);
            if (dada) {
                dispatch({
                    type: SEARCHING_SUCCESS,
                    payload: dada.data,
                });
            }
        }
    } catch (error) {
        dispatch({
            type: SEARCHING_FAILED,
            payload: error.message,
        });
        console.log(error);
    }
};
export const fetchMore = (event) => async (dispatch) => {
    dispatch({
        type: FETCHING,
    });
    try {
        let res = await fetch(
            `${api}?year=${event.year}&make=${event.make}&model=${""}&page=${
                event.page
            }&apiKey=Switch!2020`,
            {
                method: "GET",
                headers: {},
                credentials: "same-origin",
            }
        )
            .then(function (response) {
                return response.text();
            })
            .catch(function (error) {
                dispatch({
                    type: FETCHING_FAILED,
                    payload: error.message,
                });
                console.log(error);
            });
        if (res) {
            const response = JSON.parse(res);
            if (response) {
                dispatch({
                    type: SEARCHING_SUCCESS,
                    payload: response.data,
                });
            }
        }
    } catch (error) {
        dispatch({
            type: FETCHING_FAILED,
            payload: error.message,
        });
        console.log(error);
    }
};
export const getMakes = () => (dispatch) => {
    dispatch({
        type: FETCHING_MAKE,
    });

    let url = `https://buylinke.herokuapp.com/vehicle-type/make`;
    fetch(url.trim(), {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "same-origin",
    })
        .then(function (response) {
            return response.json();
        })
        .then(async (result) => {
            let data = result.data.split("(")[1];
            data = data.split(")")[0];
            data = JSON.parse(data);
            dispatch({
                type: FETCHING_MAKE_SUCCESS,
                payload: data.Makes,
            });
        })
        .catch(function (error) {
            dispatch({
                type: FETCHING_MAKE_FAILED,
                payload: error.message,
            });
            console.log(error);
        });
};
export const logIn = () => (dispatch) => {
    dispatch({
        type: LOGIN_SUCCESS,
    });
};
export const logOut = () => (dispatch) => {
    dispatch({
        type: LOGIN_FAILED,
    });
};
export const carDetail = (data) => (dispatch) => {
    dispatch({
        type: DETAIL,
        payload: data,
    });
};
