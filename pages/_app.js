// import '../styles/globals.css';
import "../styles/index.css";
import "../styles/font.css";
import "../styles/onboarding.css";
import "../styles/user-profile.css";
import "../styles/search-results.css";
import "../styles/ft-status-page.css";
import "../styles/telInput.css";
import App from "../src/components/App";

import { Provider, useDispatch, useSelector } from "react-redux";
import withRedux from "next-redux-wrapper";
import { useEffect } from "react";
import Login from "./auth/login/index";
import { login, selectUser } from "../redux/features/userSlice";
import { useRouter } from "next/router";

import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const getToken = localStorage.getItem("userToken");
        if (!getToken) {
            return null;
        }
        const item = JSON.parse(getToken);
        const now = new Date();
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            window.localStorage.clear();
            return null;
        }
        // return item.value
        dispatch(
            login({
                token: item.userToken,
            })
        );
    }, []);

    const user = useSelector(selectUser);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {" "}
                <App>
                    <Component {...pageProps} />
                </App>
            </PersistGate>
        </Provider>
    );
};

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
