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
            if (typeof res === "string") {
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
                console.log(prevData);
                console.log(response);
                console.log(newData);
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
