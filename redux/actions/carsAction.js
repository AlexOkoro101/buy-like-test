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
    BUY_NOW_SUCCESS,
    BUY_NOW_FAILED,
    BUY_NOW,
} from "../types";
import { RC, SC, RX, ES, NX, LS, IS, GS, GX } from "../../src/components/data";
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
                            payload: dada,
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

    let arrStr = [...event.model.split(",")];
    if (event.make == "Lexus") {
        for (var i = 0; i < arrStr.length; i++) {
            var supp = arrStr[i];
            switch (supp) {
                case "RC":
                    arrStr[i] = RC.map((ele) => ele.value);
                    break;
                case "RX":
                    arrStr[i] = RX.map((ele) => ele.value);
                    break;
                case "ES":
                    arrStr[i] = ES.map((ele) => ele.value);
                    break;
                case "GX":
                    arrStr[i] = GX.map((ele) => ele.value);
                    break;
                case "GS":
                    arrStr[i] = GS.map((ele) => ele.value);
                    break;
                case "IS":
                    arrStr[i] = IS.map((ele) => ele.value);
                    break;
                case "LS":
                    arrStr[i] = LS.map((ele) => ele.value);
                    break;
                case "NX":
                    arrStr[i] = NX.map((ele) => ele.value);
                    break;
                case "SC":
                    arrStr[i] = SC.map((ele) => ele.value);
                    break;
                default:
                    break;
            }
        }
    }
    let data = {
        year: event.year || "",
        make: event.make || "",
        model: event.model || "",
        vin: event.VIN || "",
    };

    try {
        let res = await fetch(
            `${api}?year=${data.year}&make=${data.make}&model=${arrStr}&vin=${data.vin}&page=1&apiKey=Switch!2020`,
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
                    payload: dada,
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

export const getMakes = () => (dispatch) => {
    dispatch({
        type: FETCHING_MAKE,
    });

    fetch("https://buylinke.herokuapp.com/makes", {
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
            dispatch({
                type: FETCHING_MAKE_SUCCESS,
                payload: data.data,
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

export const getCollection = (id) => (dispatch) => {
    dispatch({
        type: FETCHING_COLLECTION,
    });

    fetch(enviroment.BASE_URL + "collections/collections/" + `${id}`, {
        method: "GET",
        redirect: "follow",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then(function (response) {
            return response.text();
        })
        .then((data) => {
            // console.log(data)
            if (data) {
                //  console.log(data.data)
                if (Object.entries(data).length >= 1) {
                    const formatCollection = JSON.parse(data);
                    // console.log("new collection", formatCollection.data)

                    dispatch({
                        type: FETCHING_COLLECTION_SUCCESS,
                        payload: formatCollection.data,
                    });
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
export const carBuyNow = (data) => async (dispatch) => {
    dispatch({
        type: BUY_NOW,
    });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        vin: data.vin,
        link: data.link,
        name: data.name,
        site: data.site,
        price: data.price,
        year: data.year,
        exterior_color: data.exterior_color,
        vehicle_type: data.vehicle_type,
        interior_color: data.interior_color,
        transmission: data.transmission,
        odometer: data.odometer,
        driveTrain: data.driveTrain,
        doors: data.doors,
        Model: data.Model,
        make: data.make,
        equipment: data.equipment,
        EngineType: data.EngineType,
        interior_type: data.interior_type,
        body_style: data.body_style,
        fuel_type: data.fuel_type,
        passengerCapacity: data.passengerCapacity,
        sellerCity: data.sellerCity,
        description: data.description,
        Zip: data.Zip,
        tilteImage: "",
        bidAmount: data.bidAmount,
        owner: data.owner,
        facilitationLocation: data.facilitationLocation,
        Vehicle_location: data.Vehicle_location,
        images: data.images,
        trucking: data.trucking,
        shipping: data.shipping,
    });
    try {
        var requestOptions = {
            method: "POST",
            headers: {},
            body: raw,
            redirect: "follow",
        };

        let res = await fetch(
            `${enviroment.BASE_URL}bids/buy-now`,
            requestOptions
        )
            .then(function (response) {
                return response.text();
            })
            .then(function (res) {
                console.log(res);
            })
            .catch(function (error) {
                // dispatch({
                //     type: FETCHING_FAILED,
                //     payload: error.message,
                // });
                console.log(error);
            });
    } catch (error) {
        // dispatch({
        //     type: FETCHING_FAILED,
        //     payload: error.message,
        // });
        console.log(error);
    }
};

export const filterTabAction = (event, type) => async (dispatch) => {
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
            `${api}?${type}&year=${event.year}&make=${event.make}&model=${event.model}&page=${event.page}&apiKey=Switch!2020`,
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
                    payload: response,
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

export const getCategory = (data) => (dispatch) => {
    let body = { bodyType: data.bodyType, model: "", year: "" };
    dispatch({
        type: SEARCHING,
        payload: body,
    });

    let url = `${api}?bodyType=${data.bodyType}&make=&model=&year=&page=1&apiKey=Switch!2020`;
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
                            payload: dada,
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

//
//
export const fetchMore =
    (event, main, sortValue, active) => async (dispatch) => {
        let arrStr = [...main.model.split(",")];
        var sortType = "";
        var sortPattern = "";
        if (main.make == "Lexus") {
            for (var i = 0; i < arrStr.length; i++) {
                var supp = arrStr[i];
                switch (supp) {
                    case "RC":
                        arrStr[i] = RC.map((ele) => ele.value);
                        break;
                    case "RX":
                        arrStr[i] = RX.map((ele) => ele.value);
                        break;
                    case "ES":
                        arrStr[i] = ES.map((ele) => ele.value);
                        break;
                    case "GS":
                        arrStr[i] = GS.map((ele) => ele.value);
                        break;
                    case "IS":
                        arrStr[i] = IS.map((ele) => ele.value);
                        break;
                    case "GX":
                        arrStr[i] = GX.map((ele) => ele.value);
                        break;
                    case "LS":
                        arrStr[i] = LS.map((ele) => ele.value);
                        break;
                    case "NX":
                        arrStr[i] = NX.map((ele) => ele.value);
                        break;
                    case "SC":
                        arrStr[i] = SC.map((ele) => ele.value);
                        break;
                    default:
                        break;
                }
            }
        }
        if (sortValue) {
            switch (sortValue.value) {
                case 1:
                    sortType = active === "now" ? "buyprice" : "price";
                    sortPattern = "asc";
                    break;
                case 2:
                    sortType = active === "now" ? "buyprice" : "price";
                    sortPattern = "desc";
                    break;
                case 3:
                    sortType = "mileage";
                    sortPattern = "asc";
                    break;
                case 4:
                    sortType = "mileage";
                    sortPattern = "desc";
                    break;
                case 5:
                    sortType = "auctiondate";
                    sortPattern = "asc";
                    break;
                case 6:
                    sortType = "auctiondate";
                    sortPattern = "desc";
                    break;
                default:
                    break;
            }
        }
        dispatch({
            type: FETCHING,
            payload: {
                make: main.make || "",
                model: main.model || "",
                year: main.year || "",
            },
        });
        let data = {
            transmission:
                Object.entries(event.transmission).length > 0
                    ? event.transmission
                    : "",
            odometer: `${event.min ? event.min : 0}-${
                event.max ? event.max : 1000000
            }`,
            bodyType:
                Object.entries(event.bodyType).length > 0 ? event.bodyType : "",
            auctionenddate: event.saleDate
                ? new Date(event.saleDate).toISOString()
                : "",
            engineType:
                Object.entries(event.engineType).length > 0
                    ? event.engineType
                    : "",
            exterior_color:
                Object.entries(event.exterior_color).length > 0
                    ? event.exterior_color
                    : "",
            interior_color:
                Object.entries(event.interior_color).length > 0
                    ? event.interior_color
                    : "",
            interior_type:
                Object.entries(event.interior_type).length > 0
                    ? event.interior_type
                    : "",
            fuel_type:
                Object.entries(event.fuel_type).length > 0
                    ? event.fuel_type
                    : "",
            location:
                Object.entries(event.location).length > 0 ? event.location : "",
        };
        try {
            fetch(
                `${api}?year=${main.year}&make=${main.make}&model=${arrStr}&page=${main.page}&transmission=${data.transmission}&auctionenddate=${data.auctionenddate}&odometer=${data.odometer}&source_exterior_colour=${data.exterior_color}&source_interior_colour=${data.interior_color}&bodyType=${data.bodyType}&engineType=${data.engineType}&location=${data.location}&interiorType=${data.interior_type}&fuelType=${data.fuel_type}&sort_by=${sortType}&sort_pattern=${sortPattern}&apiKey=Switch!2020`,
                {
                    method: "GET",
                    headers: {},
                    credentials: "same-origin",
                }
            )
                .then(function (response) {
                    return response.text();
                })
                .then(function (res) {
                    if (JSON.parse(res)) {
                        const response = JSON.parse(res);
                        dispatch({
                            type: SEARCHING_SUCCESS,
                            payload: response,
                        });
                    } else {
                        dispatch({
                            type: FETCHING_FAILED,
                            payload: "No vehicle matches parameters",
                        });
                    }
                })
                .catch(function (error) {
                    dispatch({
                        type: FETCHING_FAILED,
                        payload: error.message,
                    });
                    console.log(error);
                });
        } catch (error) {
            dispatch({
                type: FETCHING_FAILED,
                payload: error.message,
            });
            console.log(error);
        }
    };
//
//
export const searchCars = (inputValue) => (dispatch) => {
    dispatch({
        type: FETCHING_CARS,
    });

    let url = `https://buylikepoint.us/json.php/view.php?vin=${inputValue}&apiKey=Switch!2020&apiKey=Switch!2020`;
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
                    dispatch({
                        type: DETAIL,
                        payload: dada.data,
                    });
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
