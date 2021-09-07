import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/features/userSlice";
import { selectToken } from "../../../redux/reducers/userReducer";
import { logIn, logOut } from "../../../redux/actions/carsAction";
import { connect } from "react-redux";

const Navbar = ({ beginLogin, beginLogout, userLoggedIn }) => {
    const navRef = useRef(null);

    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(selectToken);
    const [token, settoken] = useState(null);
    const [userNmae, setuserName] = useState(null);
    let dropdown;

    //Get Data from Local Storage
    const retrieveData = () => {
        const userActive = localStorage.getItem("user");
        // console.log(userActive)
        if (!userActive) {
            settoken(null);
            return null;
        }
        const item = JSON.parse(userActive);
        const now = new Date();
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            window.localStorage.clear();
            return null;
        }
        settoken(item?.userToken);
        setuserName(item?.userName);
        // return item.value
        beginLogin({
            token: item.userToken,
        });
    };

    //Get Data from local Storage
    useEffect(() => {
        retrieveData();
        return retrieveData;
    }, [router.pathname, token]);

    //Navbar State
    function toggleView() {
        const menu = document.querySelector("#menu");
        if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        }
    }

    // Dropdown functionality
    const [navDropdown, setnavDropdown] = useState(false);
    const handleLogout = () => {
        dispatch(logOut());
        window.localStorage.clear();
        beginLogout();
        settoken(null)

        setnavDropdown(false);
    };

    const toggleDropdown = () => {
        setnavDropdown(!navDropdown);
    };

    //close drop down
    function closeDropdown(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    // alert(navDropdown)
                    setnavDropdown(false);
                } else {
                    setnavDropdown(true);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    closeDropdown(navRef);

    return (
        <header className="">
            <nav className="nav-bar flex flex-wrap items-center justify-between px-7 py-2 lg:px-16">
                <div className="flex flex-no-shrink items-center mr-6 py-3 px-2 text-grey-darkest">
                    <Link href="/">
                        {/* <span className="font-semibold text-xs ">BUY LIKE DEALERS</span> */}
                        <img
                            src="../../../assets/img/Logo.svg"
                            alt="Logo"
                            style={{ cursor: "pointer" }}
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
                    className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn"
                >
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul
                    id="menu"
                    className={
                        "hidden md:flex menu border-b md:border-none justify-end items-center list-reset m-0 w-full md:w-auto " +
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
                        {token ? (
                            <>
                                <div className=" ml-2 relative inline-block">
                                    <button type="button" className="">
                                        <img
                                            src="../../../assets/img/notif.png"
                                            alt=""
                                        />
                                    </button>
                                </div>

                                <div className="font-10 sec-black font-medium ml-2 relative inline-block text-left dropdown" onClick={toggleDropdown}>
                                    <span>
                                        <button
                                            className="uppercase inline-flex justify-center w-full px-4 py-2 leading-5 transition duration-150 ease-in-out focus:outline-none "
                                            type="button"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                            aria-controls="headlessui-menu-items-117"
                                        >
                                            <img
                                                src="../../../assets/img/usericon.png"
                                                alt=""
                                                className="bg-gray-200 rounded-full mr-2"
                                            />
                                            <span>My Account</span>
                                            <svg
                                                className="w-5 h-5 ml-2 -mr-1"
                                                viewBox="0 0 20 20"
                                                fill="#D80739"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </span>
                                    <div
                                        ref={navRef}
                                        className={
                                            !navDropdown
                                                ? "opacity-0 invisible dropdown-menu  transform origin-top-right -translate-y-2 scale-95 font-10"
                                                : " opacity-100 visible dropdown-menu  transform origin-top-right -translate-y-2 scale-95 font-10"
                                        }
                                    >
                                        <div
                                            className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none font-10"
                                            aria-labelledby="headlessui-menu-button-1"
                                            id="headlessui-menu-items-117"
                                            role="menu"
                                        >
                                            <div className="px-4 py-3">
                                                <p className="leading-5 uppercase">
                                                    Hello,{" "}
                                                </p>
                                                <p className="leading-5 text-gray-900 truncate uppercase">
                                                    {userNmae}
                                                </p>
                                            </div>
                                            <div className="py-1">
                                                <Link
                                                    href="/profile/transactions"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                >
                                                    <span className="cursor-pointer text-gray-700 flex justify-between w-full px-4 py-2 leading-5 text-left uppercase">
                                                        My Transactions
                                                    </span>
                                                </Link>
                                                <Link
                                                    href="/profile/my-collection"
                                                    tabIndex="1"
                                                    role="menuitem"
                                                >
                                                    <span className="cursor-pointer text-gray-700 flex justify-between w-full px-4 py-2 leading-5 text-left uppercase">
                                                        My Collection
                                                    </span>
                                                </Link>
                                                <Link
                                                    href="/profile/bid-tracker"
                                                    tabIndex="2"
                                                    role="menuitem"
                                                >
                                                    <span className="cursor-pointer text-gray-700 flex justify-between w-full px-4 py-2 leading-5 text-left uppercase">
                                                        Bid Tracker
                                                    </span>
                                                </Link>
                                                <Link
                                                    href="/profile"
                                                    tabIndex="3"
                                                    role="menuitem"
                                                >
                                                    <span className="cursor-pointer text-gray-700 flex justify-between w-full px-4 py-2 leading-5 text-left uppercase">
                                                        Settings
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="py-1">
                                                <a
                                                    onClick={handleLogout}
                                                    href="#"
                                                    tabIndex="3"
                                                    className="flex justify-between w-full px-4 py-2 leading-5 text-left text-red-700 uppercase"
                                                    role="menuitem"
                                                >
                                                    Log out
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
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
                                        className="login-btn primary-red focus:outline-none py-3 font-semibold font-10 flex items-center px-4 sign"
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
const mapStateToProps = (state) => {
    const { userLoggedIn } = state.Cars;
    return { userLoggedIn };
};

export default connect(mapStateToProps, (dispatch) => ({
    beginLogin: (payload) =>
        dispatch({
            type: "login",
            payload,
        }),
    beginLogout: () =>
        dispatch({
            type: "logout",
        }),
}))(Navbar);
