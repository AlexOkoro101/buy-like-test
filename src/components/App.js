import Navbar from "./Navbar/Navbar";
import Meta from "./Head/Meta";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "../../redux/actions/carsAction";

const App = ({ children }) => {
    const dispatch = useDispatch();
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(() => localStorage.getItem("userToken"));
    const [auth, setAuth] = useState(false);
    const router = useRouter();
    const myFunction = () => {
        if (router.pathname !== "/") {
            if (!user) {
                dispatch(logOut());
                return router.push("/auth/login");
            }
            setLoggedIn(true);
            let token = JSON.parse(user).userToken;
            if (router.pathname.includes("auth")) {
                if (token) {
                    dispatch(logIn());
                    router.push("/search");
                }
            } else {
                if (!token) {
                    dispatch(logOut());
                    router.push("/auth/login");
                }
            }
        }
    };
    useEffect(() => {
        myFunction();
        if (router.pathname.includes("auth")) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, []);
    return (
        <>
            <Meta />
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default App;
