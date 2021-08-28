import Navbar from "./Navbar/Navbar";
import Meta from "./Head/Meta";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const App = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [auth, setAuth] = useState(false);
    const router = useRouter();
    let user = localStorage.getItem("userToken");
    const myFunction = () => {
        if (router.pathname !== "/") {
            if (!user) {
                return router.push("/auth/login");
            }
            setLoggedIn(true);
            let token = JSON.parse(user).userToken;
            if (router.pathname.includes("auth")) {
                if (token) {
                    router.push("/search");
                }
            } else {
                if (!token) {
                    router.push("/auth/login");
                }
            }
        }
    };
    useEffect(() => {
        if (router.pathname.includes("auth")) {
            setAuth(true);
        } else {
            setAuth(false);
        }
        myFunction();
    });
    return (
        <>
            <Meta />
            <Navbar loggedIn={loggedIn} auth={auth} />
            {children}
            <Footer />
        </>
    );
};

export default App;
