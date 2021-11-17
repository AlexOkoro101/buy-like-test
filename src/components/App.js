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
    const handleRouteChange = (url) => {
        if (typeof window.gtag !== "undefined") {
            window.gtag("config", "G-NR7X96TBJ4", {
                page_path: url,
            });
        }
    };
    const myFunction = () => {
        const user = localStorage.getItem("user");
        let token = JSON.parse(user)?.userToken;
        if (router.pathname !== "/" && !router.pathname.includes("auth")) {
            if (!token) {
                if (router.pathname === "/vin/[id]") {
                    return;
                }
            }

            setLoggedIn(true);
        }
        if (router.pathname.includes("auth") && router.pathname !== "/auth/signup/onboarding") {
            if (token && !router.query) {
                dispatch(logIn());
                router.back();
                
            }
            if(token && router.query) {
                router.push('/vin')
            }
        }
        if (
            router.pathname.includes("profile") ||
            router.pathname === "/transaction/[id]"
        ) {
            if (!token) {
                dispatch(logOut());
                router.push("/auth/login");
            }
        }
    };
    useEffect(() => {
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

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
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default App;
