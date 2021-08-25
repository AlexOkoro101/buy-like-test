import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter()

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

                <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label
                    className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
                    
                >
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul className="menu border-b md:border-none text-xs flex justify-end items-center list-reset m-0 w-full md:w-auto">
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

                    <li className="text-xs ml-2">
                        <button
                            onClick={() => {router.push('/auth/signup')}}
                            type="button"
                            className="signup-btn bg-red-700  py-1.5 rounded-md focus:outline-none font-semibold font-10 flex items-center text-center text-white px-4 sign"
                        >
                            REGISTER
                        </button>
                    </li>

                    <li className="text-xs">
                        <button
                            onClick={() => {router.push('/auth/login')}}
                            type="button"
                            className="login-btn primary-red focus:outline-none py-3 font-semibold font-10 flex items-center text-white px-4 sign"
                        >
                            LOGIN
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
