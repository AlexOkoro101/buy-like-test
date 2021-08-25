import requestReducer from "./requestReducer";
import Cars from "./carsReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: requestReducer,
    Cars,
    vehicle: requestReducer,
});

export default rootReducer;
