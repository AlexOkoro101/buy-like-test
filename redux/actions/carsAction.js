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
    FETCHING_MODEL,
    FETCHING_MODEL_FAILED,
    FETCHING_MODEL_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
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
export const fetchMore = (event, prevData) => async (dispatch) => {
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
                let newData = response.data.concat(prevData);
                // console.log(prevData);
                // console.log(response);
                // console.log(newData);
                dispatch({
                    type: FETCHING_SUCCESS,
                    payload: newData,
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
export const getMakes = () =>  (dispatch) => {
    dispatch({
        type: FETCHING_MAKE,
    });

    fetch("https://buylinke.herokuapp.com/vehicle-type/make", {
        method: "GET",
        redirect: 'follow',
        credentials: "same-origin",
        headers: {
            'Content-Type':'application/json', 
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(function (response) {
        // console.log(response);
        return response.json();
    }).then(data => {
        // console.log(data)
         if (data) {
            //  console.log(data.data)
                if (Object.entries(data).length >= 1) {
                    let carMakes = data.data;
                    let makeSplit = carMakes.split('(')[1];
                    let anotherSplit = makeSplit.split(')')[0];
                    let formatMake = JSON.parse(anotherSplit);
                    // console.log("new makes", formatMake.Makes)
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
export const getModels = (make) => (dispatch) => {
    dispatch({
        type: FETCHING_MODEL,
    });

    fetch("https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=" + `${make}`, {
        method: "GET",
        redirect: 'follow',
        credentials: "same-origin",
    })
    .then(function (response) {
        console.log(response);
        return response.text();
    }).then(data => {
        // console.log(data)
         if (data) {
                if (Object.entries(data).length >= 1) {
                    let carModels = data;
                    let makeSplit = carModels.split('(')[1];
                    let anotherSplit = makeSplit.split(')')[0];
                    let formatModel = JSON.parse(anotherSplit);
                   
                        dispatch({
                            type: FETCHING_MODEL_SUCCESS,
                            payload: formatModel.Models,
                        });
                    
                }
            }
    })
    .catch(function (error) {
        dispatch({
            type: FETCHING_MODEL_FAILED,
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
