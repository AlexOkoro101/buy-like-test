import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/features/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    }
})
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/rootReducer";

const middleware = [];

middleware.push(thunk);

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === "development",
});

// middleware.push(loggerMiddleware);

const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(...middleware))
        : process.env.NODE_ENV === "production"
        ? applyMiddleware(...middleware)
        : null
);

export default store;
