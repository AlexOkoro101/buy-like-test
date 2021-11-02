// import '../styles/globals.css';
import "../styles/index.css";
import "../styles/font.css";
import "../styles/onboarding.css";
import "../styles/user-profile.css";
import "../styles/search-results.css";
import "../styles/ft-status-page.css";
import "../styles/transaction-page.css";
import "../styles/car-details.css";
import "../styles/telInput.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/tailwind.css";
import App from "../src/components/App";

import { Provider, useDispatch, useSelector } from "react-redux";
import withRedux from "next-redux-wrapper";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Meta from "../src/components/Head/Meta";
const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    const handleRouteChange = (url) => {
        window.gtag("config", "G-NR7X96TBJ4", {
            page_path: url,
        });
    };
    useEffect(() => {
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {" "}
                <App>
                    <Meta />

                    <Component {...pageProps} />
                </App>
            </PersistGate>
        </Provider>
    );
};

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
