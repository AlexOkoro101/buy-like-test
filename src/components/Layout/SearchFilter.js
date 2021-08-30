import { useState } from "react";

const SearchFilter = () => {
    const [filter, setfilter] = useState([]);
    const MakeSelectAll



    return ( 
        <div className="filter-holder hidden lg:block p-3 w-2/12 overflow-y-scroll">
            {/* <!-- Filter icon --> */}
            <div className="flex pb-2">
                <div>
                    <p className="flex items-center primary-black font-medium font-11">
                        {" "}
                        <span className="mr-1">
                            <img
                                src="../../assets/img/vectors/filter-icon.svg"
                                alt="filter"
                            />
                        </span>{" "}
                        Filters
                    </p>
                </div>
                <div className="ml-auto self-center">
                    <span className="cursor-pointer">
                        <img
                            src="../../assets/img/vectors/close-icon.svg"
                            alt="close"
                        />
                    </span>
                </div>
            </div>

            {/* <!-- Filters --> */}
            <div>
                {/* <!-- MAke and Model Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-one"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11 pb-1.5"
                        for="tab-single-one"
                    >
                        Make & Model
                    </label>
                    <div className="tab-content overflow-hidden ">
                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Select All
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                        checked={}
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Acura
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Alfa Romeo
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                Audi
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                BMW
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Year Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-two"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-two"
                    >
                        Year
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex justify-between py-4">
                            <div>
                                <select className="select-group">
                                    <option>2018</option>
                                </select>
                            </div>

                            <div>
                                <select className="select-group">
                                    <option>2020</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Body Type  Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-three"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-three"
                    >
                        Body Type
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Select All
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Sedan/Saloon
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                SUV
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Coupe
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Hatchback
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Wagon
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Location  Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-four"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-four"
                    >
                        Location
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Select All
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Alaska
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Alabama
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Arkansas
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Carlifonia
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Mileage Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-five"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-five"
                    >
                        Mileage
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex  py-4">
                            <div>
                                <label className="font-10 sec-black">
                                    Max. Mileage
                                </label>
                            </div>

                            <div className="ml-auto">
                                <select className="select-group">
                                    <option>2000</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Transmission  Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-six"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-six"
                    >
                        Transmission
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Select All
                            </p>
                            <div className="ml-auto">
                                <input type="radio" />
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Automatic
                            </p>
                            <div className="ml-auto">
                                <input type="radio" />
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Manual
                            </p>
                            <div className="ml-auto">
                                <input type="radio" />
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--External Colour  Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-seven"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-seven"
                    >
                        External Colour
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                White
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Black
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Grey
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Red
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Gold
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Internal Colour  Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-seven"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-seven"
                    >
                        Internal Colour
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                White
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Black
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Grey
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Red
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Gold
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Fuel Type  Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-eight"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-eight"
                    >
                        Fuel Type
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Gasoline
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Diesel
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Gas/Electric Hybrid
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Plug-in Hybrid
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Electric
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Sale Condition  Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-nine"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-nine"
                    >
                        Sale Condition
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Green Light
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Red Light
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Blue Light
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Sale Date  Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-ten"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-ten"
                    >
                        Sale Date
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                Feb 17
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                March 21
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!--Equipment  Here --> */}
                <div className="tab border-bt py-4 overflow-hidden ">
                    <input
                        className="opacity-0 hidden"
                        id="tab-single-seven"
                        type="radio"
                        name="tabs2"
                    />
                    <label
                        className="block cursor-pointer primary-black font-medium font-11"
                        for="tab-single-seven"
                    >
                        Equipment
                    </label>
                    <div className="tab-content overflow-hidden">
                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Android Auto
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Apple CarPlay
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Heated Seats
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Rear View Camera
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                {" "}
                                Remote Start
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex pt-2">
                            <p className="font-11 primary-black">
                                Sunroof or Moonroof
                            </p>
                            <div className="ml-auto">
                                <label className="search">
                                    <input
                                        type="checkbox"
                                        className="focus:outline-none search self-center"
                                    />
                                    <span className="search"></span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Reset button here --> */}
                        <div className="text-center py-3">
                            <button
                                type="button"
                                className="focus:outline-none primary-red  font-11"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Clear all filters here --> */}
            <div className="flex  py-4">
                <div>
                    <button
                        type="button"
                        className="focus:outline-none font-11 primary-blue"
                    >
                        Clear all filters
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default SearchFilter;