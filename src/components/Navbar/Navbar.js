import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/features/userSlice";
import { selectToken } from "../../../redux/reducers/userReducer";
import { connect } from "react-redux";

const Navbar = ({ beginLogin, beginLogout, loggedIn, auth }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const retrieveData = () => {
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
        beginLogin({
            token: item.userToken,
        });
    };

    const user = useSelector(selectToken);
    // console.log(user.login)

    let dropdown;

    function toggleView() {
        const menu = document.querySelector("#menu");
        if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        }
    }

    const handleLogout = () => {
        window.localStorage.clear();
        window.location.reload();
        beginLogout();
    };

    return (
        <header className="">
            <nav className="nav-bar flex flex-wrap items-center justify-between px-7 py-3 lg:px-16">
                <div className="flex flex-no-shrink items-center mr-6 py-3 px-2 text-grey-darkest">
                    <Link href="/">
                        {/* <span className="font-semibold text-xs ">BUY LIKE DEALERS</span> */}
                        <img
                            src="../../../assets/img/Logo.svg"
                            alt="Logo"
                            style={{ cursor: "pointer" }}
                            className="w-48"
                        />
                    </Link>
                </div>

                <input
                    className="menu-btn hidden"
                    type="checkbox"
                    id="menu-btn"
                />
                <label
                    onClick={toggleView}
                    className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
                >
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul
                    id="menu"
                    className={
                        "hidden md:flex menu border-b md:border-none text-xs justify-end items-center list-reset m-0 w-full md:w-auto " +
                        (dropdown ? "block" : "")
                    }
                >
                    <li className="font-10 sec-black font-medium">
                        <a
                            href="/"
                            className="block md:inline-block uppercase px-2 lg:px-3 py-3 hover:no-underline hover:text-current"
                        >
                            how it works
                        </a>
                    </li>

                    <li className="font-10 sec-black font-medium">
                        <a
                            href="/"
                            className="block md:inline-block uppercase px-2 lg:px-3 py-3 hover:no-underline hover:text-current"
                        >
                            about us
                        </a>
                    </li>
                    <>
                        {loggedIn ? (
                            <li className="text-xs ml-2">
                                <button
                                    onClick={handleLogout}
                                    type="button"
                                    className="signup-btn bg-red-700  py-1.5 rounded-md focus:outline-none font-semibold font-10 flex items-center text-center text-white px-4 sign"
                                >
                                    LOGOUT
                                </button>
                            </li>
                        ) : (
                            <>
                                <li className="text-xs ml-2">
                                    <button
                                        onClick={() => {
                                            router.push("/auth/signup");
                                        }}
                                        type="button"
                                        className="signup-btn bg-red-700  py-1.5 rounded-md focus:outline-none font-semibold font-10 flex items-center text-center text-white px-4 sign"
                                    >
                                        REGISTER
                                    </button>
                                </li>

                                <li className="text-xs">
                                    <button
                                        onClick={() => {
                                            router.push("/auth/login");
                                        }}
                                        type="button"
                                        className="login-btn primary-red focus:outline-none py-3 font-semibold font-10 flex items-center text-white px-4 sign"
                                    >
                                        LOGIN
                                    </button>
                                </li>
                            </>
                        )}
                    </>
                </ul>
            </nav>
        </header>
    );
};

export default connect(
    () => ({}),
    (dispatch) => ({
        beginLogin: (payload) =>
            dispatch({
                type: "login",
                payload,
            }),
        beginLogout: () =>
            dispatch({
                type: "logout",
            }),
    })
)(Navbar);
