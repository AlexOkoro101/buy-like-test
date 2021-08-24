import axios from "axios";
import {
    FETCHING_CARS,
    FETCH_SUCCESSFUL,
    FETCHING_CARS_FAILED,
} from "../types";
const api = process.env.cars_api;

export const getCars = () => async (dispatch) => {
    dispatch({
        type: FETCHING_CARS,
    });
    try {
        let res = await fetch(
            `${api}?year=&make=Toyota&model=camry&price=3000&page=1&apiKey=Switch!2020`,
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
                    type: FETCHING_CARS_FAILED,
                    payload: error.message,
                });
                console.log(error);
            });
        const dada = JSON.parse(res);
        if (dada) {
            dispatch({
                type: FETCH_SUCCESSFUL,
                payload: dada.data,
            });
        }
    } catch (error) {
        dispatch({
            type: FETCHING_CARS_FAILED,
            payload: error.message,
        });
        console.log(error);
    }
};
