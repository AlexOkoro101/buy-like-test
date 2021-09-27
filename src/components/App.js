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
    const [auth, setAuth] = useState(false);
    const router = useRouter();
    const myFunction = () => {
        const user = localStorage.getItem("user");
        let token = JSON.parse(user)?.userToken;
        if (router.pathname !== "/" && !router.pathname.includes("auth")) {
            if (!token) {
                if (router.pathname === "/search/[id]") {
                    return;
                }


            }

            setLoggedIn(true);
        }

        if (router.pathname.includes("auth")) {
            if (token) {
                dispatch(logIn());
                return router.back();
            }
        }
        if (router.pathname.includes("profile") || router.pathname === "/transaction/[id]") {
            if (!token) {
                dispatch(logOut());
                router.push("/auth/login");
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
    }, [router.pathname]);
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
