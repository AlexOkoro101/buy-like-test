import axios from "axios";
import { enviroment } from "../../src/components/enviroment";
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
    FETCHING_MODEL,
    FETCHING_MODEL_FAILED,
    FETCHING_MODEL_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    DETAIL,
    FETCHING_COLLECTION,
    FETCHING_COLLECTION_SUCCESS,
    FETCHING_COLLECTION_FAILED,
} from "../types";
const api = process.env.cars_api;

export const getCars = () => (dispatch) => {
    console.log("calling3");
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
    console.log("calling2");
    console.log(event);
    dispatch({
        type: SEARCHING,
        payload: event,
    });
    try {
        let res = await fetch(
            `${api}?year=${event.year}&make=${event.make}&model=${
                event.model
            }&price=${""}&page=1&apiKey=Switch!2020`,
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
    console.log("calling");
    dispatch({
        type: FETCHING,
        payload: {
            make: event.make || "",
            model: event.model || "",
            year: event.year || "",
        },
    });
    try {
        let res = await fetch(
            `${api}?year=${event.year}&make=${event.make}&model=${event.model}&page=${event.page}&apiKey=Switch!2020`,
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

    fetch("https://buylinke.herokuapp.com/vehicle-type/make", {
        method: "GET",
        redirect: "follow",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then(function (response) {
            return response.json();
        })
        .then((data) => {
            if (data) {
                if (Object.entries(data).length >= 1) {
                    let carMakes = data.data;
                    let makeSplit = carMakes.split("(")[1];
                    let anotherSplit = makeSplit.split(")")[0];
                    let formatMake = JSON.parse(anotherSplit);
                    if (formatMake) {
                        dispatch({
                            type: FETCHING_MAKE_SUCCESS,
                            payload: formatMake.Makes,
                        });
                    }
                }
            }
        })
        .catch(function (error) {
            dispatch({
                type: FETCHING_MAKE_FAILED,
                payload: error.message,
            });
            console.log(error);
        });
};


export const getCollection = () => (dispatch) => {
    dispatch({
        type: FETCHING_COLLECTION,
    });

    fetch(enviroment.BASE_URL + 'collections', {
        method: "GET",
        redirect: "follow",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then(function (response) {
            console.log(response);
            return response.text();
        })
        .then((data) => {
            // console.log(data)
            if (data) {
                //  console.log(data.data)
                if (Object.entries(data).length >= 1) {
                    const formatCollection = JSON.parse(data);
                    // console.log("new collection", formatCollection.data)
                    if (formatCollection) {
                        dispatch({
                            type: FETCHING_COLLECTION_SUCCESS,
                            payload: formatCollection.data,
                        });
                    }
                }
            }
        })
        .catch(function (error) {
            dispatch({
                type: FETCHING_COLLECTION_FAILED,
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
