import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/features/userSlice";
import { selectToken } from "../../../redux/reducers/userReducer";
import { logIn, logOut } from "../../../redux/actions/carsAction";
import { connect } from "react-redux";
import Select from "react-select";
import { getCars } from "../../../redux/actions/carsAction";
import { enviroment } from "../enviroment";

const Navbar = ({ beginLogin, beginLogout, userLoggedIn, total, cars }) => {
    const navRef = useRef(null);
    var dollarFormatter = new Intl.NumberFormat();

    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(selectToken);
    const [token, settoken] = useState(null);
    const [totalCount, setTotalCount] = useState(0);
    const [userNmae, setuserName] = useState(null);
    const [userIp, setuserIp] = useState(null)
    let dropdown;
    useEffect(() => {
        dispatch(getCars());
    }, []);
    useEffect(() => {
        router.pathname == "/vin"
            ? setTotalCount(dollarFormatter.format(cars.total))
            : setTotalCount(dollarFormatter.format(total));
    }, [router.pathname, cars.total, total]);
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

    const getIp = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch(enviroment.BASE_URL + "auth/get-ip", requestOptions)
        .then(response => response.text())
        .then(result => {
            const ipData = JSON.parse(result)
            console.log("IP", ipData)
            localStorage.setItem("userCountry", JSON.stringify(ipData.data));

            if(ipData.error === false) {
                setCountry()
            }
        })
        .catch(error => console.log('error', error));
    }
    
    const setCountry = () => {
        const userCountry = localStorage.getItem("userCountry");
        // console.log(userActive)
        if (!userCountry) {
            // localStorage.setItem("userCountry");
            setuserIp(null);
            return null;
        }
        const item = JSON.parse(userCountry)
        setuserIp(item.countryCode)

    }

    //Get Data from local Storage
    useEffect(() => {
        retrieveData();
        getIp()
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

    const [options, setoptions] = useState([]);
    const [field, setField] = useState(null);

    // Dropdown functionality
    const [navDropdown, setnavDropdown] = useState(false);
    const [home, setHome] = useState(true);
    const [search, setSearch] = useState(true);
    const handleLogout = () => {
        dispatch(logOut());
        window.localStorage.clear();
        router.reload();
        beginLogout();
        settoken(null);

        setnavDropdown(false);
    };

    const toggleDropdown = () => {
        setnavDropdown(!navDropdown);
    };

    useEffect(() => {
        if (router.pathname === "/vin") {
            setHome(false);
            setField(null);
        } else {
            setHome(true);
        }
        setnavDropdown(false);
    }, [router.pathname]);

    //close drop down
    function closeDropdown(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (
                    event.target.matches(
                        "#data-dropdown-toggle, #data-dropdown-toggle *"
                    )
                ) {
                    return;
                }
                if (ref.current && !ref.current.contains(event.target)) {
                    // alert(navDropdown)
                    setnavDropdown(false);
                } else {
                    setnavDropdown(true);
                }
            }

            // Bind the event listener
            window.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                window.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    closeDropdown(navRef);

    const handleInputChange = (inputValue) => {
        if (inputValue !== "") {
            try {
                fetch(
                    `https://buylikepoint.us/json.php/view.php?vin=${inputValue}&apiKey=Switch!2020&apiKey=Switch!2020`,
                    {
                        method: "GET",
                        headers: {},
                        credentials: "same-origin",
                    }
                )
                    .then(function (response) {
                        return response.text();
                    })
                    .then(function (res) {
                        const dada = JSON.parse(res);
                        if (dada) {
                            dada.data.map((ele) => {
                                setoptions([
                                    {
                                        value: ele.VIN,
                                        label: ele.VIN,
                                        data: ele,
                                    },
                                ]);
                                setField(ele.VIN);
                            });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleChange = (newValue) => {
        if (newValue && newValue.data) {
            router.push({
                pathname: "/vin/" + newValue.value,
            });
        }
    };

    const renderSearchIcon = () => (
        <svg {...svgProps}>
            <path d={path} />
        </svg>
    );

    const customStyles = {
        valueContainer: (base) => ({
            ...base,
            height: "30px",
            paddingTop: 0,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            minWidth: "100%",
            margin: 0,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "flex",
            border: "1px solid #dee2e6",
            height: "30px",
            borderRadius: "5px",
            zIndex: 0,
            padding: 0,
        }),
        option: (provided, state) => ({
            ...provided,
            fontSize: "9px",
            cursor: "pointer",
            margin: 0,
            height: "100%",
            display: "flex",
            alignItems: "center",
        }),
        menuList: (provided, state) => ({
            ...provided,
            border: "0.5px solid #dee2e6",
            width: "100%",
            height: "30px",
            fontSize: "12px",
            overflow: "hidden",
        }),
        input: (provided, state) => ({
            ...provided,
            height: "30px",
            margin: 0,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = "opacity 300ms";

            return { ...provided, opacity, transition };
        },
    };

    return (
        <header className="">
            <nav className="nav-bar flex flex-wrap items-center justify-between px-3 py-2 lg:px-20">
                <div className="md:flex hidden  flex-no-shrink items-center mr-6 py-3 px-2 text-grey-darkest">
                    <Link href="/">
                        {/* <span className="font-semibold text-xs ">BUY LIKE DEALERS</span> */}
                        <img
                            src="../../../assets/img/Logo.svg"
                            alt="Logo"
                            style={{ cursor: "pointer" }}
                        />
                    </Link>
                </div>
                <div className="flex md:hidden flex-no-shrink items-center  py-3  text-grey-darkest">
                    <Link href="/">
                        {/* <span className="font-semibold text-xs ">BUY LIKE DEALERS</span> */}
                        <img
                            src="/img/logo.svg"
                            style={{ cursor: "pointer", width: 30 }}
                            alt="loader"
                        />
                    </Link>
                    {search && (
                        <div
                            className="block md:hidden relative"
                            style={{ height: "30px" }}
                        >
                            <Select
                                className="w-60 ml-2 cursor-pointer focus:outline-none"
                                placeholder={<div className="text-4xs" style={{fontSize:"8px"}}>VIN to search {totalCount} cars</div>}
                                type="text"
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                                arrowRenderer={renderSearchIcon}
                                styles={customStyles}
                            />
                            <button
                                onClick={() => {
                                    field
                                        ? router.push(`/vin/${field}`)
                                        : router.push("/vin");
                                }}
                                type="button"
                                className="absolute right-0 h-full p-1  rounded-r focus:outline-none  flex items-center justify-center text-white"
                                style={{
                                    backgroundColor: "#d80739",
                                    width: 40,
                                    top: 0,
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100%"
                                    height="95%"
                                    viewBox="0 0 24 24"
                                >
                                    {" "}
                                    <path
                                        fill="#fff"
                                        d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
                {home && (
                    <div className="md:block hidden h-6 relative">
                        <Select
                            className="w-72 h-6 cursor-pointer focus:outline-none"
                            placeholder={<div className="text-4xs" style={{fontSize:"9px"}}>VIN to search {totalCount} cars</div>}
                            type="text"
                            isClearable
                            onChange={handleChange}
                            onInputChange={handleInputChange}
                            options={options}
                            arrowRenderer={renderSearchIcon}
                        
                        />
                        <button
                            onClick={() => {
                                field
                                    ? router.push(`/vin/${field}`)
                                    : router.push("/vin");
                            }}
                            type="button"
                            className="absolute right-0 h-full  rounded-r focus:outline-none  flex items-center justify-center text-white"
                            style={{
                                backgroundColor: "#d80739",
                                width: 40,
                                top: 1,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="100%"
                                height="95%"
                                viewBox="0 0 24 24"
                            >
                                {" "}
                                <path
                                    fill="#fff"
                                    d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                )}
                <input
                    className="menu-btn hidden"
                    type="checkbox"
                    id="menu-btn"
                />
                <label
                    onClick={toggleView}
                    className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
                    htmlFor="menu-btn"
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
                            href="/aboutus"
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

                                <div
                                    ref={navRef}
                                    id="data-dropdown-toggle"
                                    className="font-10 sec-black font-medium ml-2 relative inline-block text-left dropdown"
                                    onClick={toggleDropdown}
                                >
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
                                        className="signup-btn focus:outline-none font-semibold font-10 flex items-center justify-center text-white"
                                    >
                                        SIGN UP
                                    </button>
                                </li>

                                <li className="text-xs">
                                    <button
                                        onClick={() => {
                                            router.push("/auth/login");
                                        }}
                                        type="button"
                                        className="login-btn primary-red focus:outline-none py-3 font-semibold font-10 flex items-center px-4"
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
    const { userLoggedIn, total, cars } = state.Cars;
    return { userLoggedIn, total, cars };
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