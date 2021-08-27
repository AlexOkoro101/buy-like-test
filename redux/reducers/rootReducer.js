import requestReducer from "./requestReducer";
import User from "./userReducer";
import Cars from "./carsReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: requestReducer,
    Cars,
    vehicle: requestReducer,
    userState: User

});

export default rootReducer;
