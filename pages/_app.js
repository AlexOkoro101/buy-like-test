// import '../styles/globals.css';
import "../styles/index.css";
import "../styles/font.css";
import "../styles/onboarding.css";
import "../styles/user-profile.css";
import "../styles/search-results.css";
import "../styles/ft-status-page.css";
import "../styles/telInput.css";
import "../styles/tailwind.css";
import App from "../src/components/App";

import { Provider, useDispatch, useSelector } from "react-redux";
import withRedux from "next-redux-wrapper";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }) => {
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
