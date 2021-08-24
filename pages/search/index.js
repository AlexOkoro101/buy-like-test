import { useState, useEffect } from "react";
import Meta from "../../src/components/Head/Meta";
import { connect } from "react-redux";
import { getCars } from "../../redux/actions/carsAction";
const Search = (props) => {
    const [grid, setgrid] = useState(true);
    // useEffect(() =>

    // )

    const activateList = () => {
        let datass = props.getCars();
        console.log(datass);
        setgrid(false);
    };

    const activateGrid = () => {
        console.log(props.cars);
        setgrid(true);
    };

    return (
        <div>
            <Meta></Meta>
            <main>
                {/* <!-- Search region here --> */}
                <div className="flex main   pb-32 pt-24 px-5 lg:px-16">
                    {/* <!-- filter tab here --> */}
                    <div className="filter-holder hidden lg:block p-3 w-2/12">
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

                    {/* <!--  Display region here  --> */}
                    <div className="display-holder w-full  lg:w-5/6 ml-2.5">
                        {/* <!-- Filter and search for mobile here --> */}
                        <div className="mb-3 block lg:hidden ">
                            <div className="flex">
                                <div className="relative">
                                    <input
                                        className="search-result-control-mobile px-3 w-11/12 md:w-full focus:outline-none "
                                        type="text"
                                        placeholder="Search 7685 cars"
                                    />
                                </div>

                                <div className="ml-auto">
                                    <select className="select-result-control-mobile font-10 focus:outline-none">
                                        <option>Sort by: Default</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Search tabs here --> */}
                        <div className="search-results-holder flex items-center justify-between lg:px-3">
                            {/* <!-- first section here --> */}
                            <div>
                                <button
                                    type="button"
                                    className="focus:outline-none text-white font-10 primary-btn font-semibold px-3.5 py-1.5"
                                >
                                    All Cars
                                </button>
                                <button
                                    type="button"
                                    className="focus:outline-none primary-black font-10 ml-3 font-normal py-1.5"
                                >
                                    Buy Now
                                </button>
                                <button
                                    type="button"
                                    className="focus:outline-none primary-black font-10 ml-3 font-normal py-1.5"
                                >
                                    Bid Cars
                                </button>
                            </div>

                            {/* <!-- Second section here --> */}
                            <div className="hidden lg:block ">
                                <input
                                    className="search-result-control px-3  focus:outline-none"
                                    type="text"
                                    placeholder="Search 7685 cars"
                                />
                            </div>

                            {/* <!-- Third section here --> */}
                            <div className="flex">
                                <div className="lg:block  hidden">
                                    <label className="font-11 primary-black mr-1 ">
                                        Sort by:{" "}
                                    </label>
                                    <select className="select-result-control font-10 focus:outline-none">
                                        <option>Default</option>
                                    </select>
                                </div>

                                {/* <!-- grid view tab here --> */}
                                <button
                                    type="button"
                                    onClick={activateGrid}
                                    id="grid-btn"
                                    type="button"
                                    className={
                                        "focus:outline-none tab-toggle mx-2 " +
                                        (grid ? "active" : "")
                                    }
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        className="m-auto"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M10.7337 0.600006H12.8671C13.1615 0.600006 13.4004 0.838939 13.4004 1.13334V3.26667C13.4004 3.56107 13.1615 3.80001 12.8671 3.80001H10.7337C10.4393 3.80001 10.2004 3.56107 10.2004 3.26667V1.13334C10.2004 0.838939 10.4393 0.600006 10.7337 0.600006Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M10.7337 5.39999H12.8671C13.1615 5.39999 13.4004 5.63893 13.4004 5.93333V8.06666C13.4004 8.36106 13.1615 8.59999 12.8671 8.59999H10.7337C10.4393 8.59999 10.2004 8.36106 10.2004 8.06666V5.93333C10.2004 5.63893 10.4393 5.39999 10.7337 5.39999Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M10.7337 10.2H12.8671C13.1615 10.2 13.4004 10.4389 13.4004 10.7333V12.8667C13.4004 13.1611 13.1615 13.4 12.8671 13.4H10.7337C10.4393 13.4 10.2004 13.1611 10.2004 12.8667V10.7333C10.2004 10.4389 10.4393 10.2 10.7337 10.2Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M5.93368 0.600006H8.06701C8.36141 0.600006 8.60034 0.838939 8.60034 1.13334V3.26667C8.60034 3.56107 8.36141 3.80001 8.06701 3.80001H5.93368C5.63928 3.80001 5.40034 3.56107 5.40034 3.26667V1.13334C5.40034 0.838939 5.63928 0.600006 5.93368 0.600006Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M5.93368 5.39999H8.06701C8.36141 5.39999 8.60034 5.63893 8.60034 5.93333V8.06666C8.60034 8.36106 8.36141 8.59999 8.06701 8.59999H5.93368C5.63928 8.59999 5.40034 8.36106 5.40034 8.06666V5.93333C5.40034 5.63893 5.63928 5.39999 5.93368 5.39999Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M5.93368 10.2H8.06701C8.36141 10.2 8.60034 10.4389 8.60034 10.7333V12.8667C8.60034 13.1611 8.36141 13.4 8.06701 13.4H5.93368C5.63928 13.4 5.40034 13.1611 5.40034 12.8667V10.7333C5.40034 10.4389 5.63928 10.2 5.93368 10.2Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M1.13375 0.600006H3.26708C3.56148 0.600006 3.80042 0.838939 3.80042 1.13334V3.26667C3.80042 3.56107 3.56148 3.80001 3.26708 3.80001H1.13375C0.839349 3.80001 0.600415 3.56107 0.600415 3.26667V1.13334C0.600415 0.838939 0.839349 0.600006 1.13375 0.600006Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M1.13375 5.39999H3.26708C3.56148 5.39999 3.80042 5.63893 3.80042 5.93333V8.06666C3.80042 8.36106 3.56148 8.59999 3.26708 8.59999H1.13375C0.839349 8.59999 0.600415 8.36106 0.600415 8.06666V5.93333C0.600415 5.63893 0.839349 5.39999 1.13375 5.39999Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M1.13375 10.2H3.26708C3.56148 10.2 3.80042 10.4389 3.80042 10.7333V12.8667C3.80042 13.1611 3.56148 13.4 3.26708 13.4H1.13375C0.839349 13.4 0.600415 13.1611 0.600415 12.8667V10.7333C0.600415 10.4389 0.839349 10.2 1.13375 10.2Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect
                                                    width="12.8"
                                                    height="12.8"
                                                    className="active svg-tab"
                                                    fill=""
                                                    transform="matrix(-1 0 0 1 13.4004 0.600006)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>

                                {/* <!-- list view tab here --> */}
                                <button
                                    onClick={activateList}
                                    id="list-btn"
                                    type="button"
                                    className={
                                        "focus:outline-none tab-toggle hidden xl:block " +
                                        (!grid ? "active" : "")
                                    }
                                >
                                    <svg
                                        width="16"
                                        className="m-auto"
                                        height="13"
                                        viewBox="0 0 16 13"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.2018 11.8312H4.50293C4.06198 11.8312 3.70459 11.4738 3.70459 11.0329C3.70459 10.5919 4.06198 10.2345 4.50293 10.2345H15.2015C15.6425 10.2345 15.9999 10.5919 15.9999 11.0329C15.9999 11.4738 15.6427 11.8312 15.2018 11.8312Z"
                                            className="svg-tab"
                                        />
                                        <path
                                            d="M15.2018 6.81995H4.50293C4.06198 6.81995 3.70459 6.46256 3.70459 6.02161C3.70459 5.58066 4.06198 5.22327 4.50293 5.22327H15.2015C15.6425 5.22327 15.9999 5.58066 15.9999 6.02161C16.0001 6.46256 15.6427 6.81995 15.2018 6.81995Z"
                                            className="svg-tab"
                                        />
                                        <path
                                            d="M15.2018 1.80878H4.50293C4.06198 1.80878 3.70459 1.45139 3.70459 1.01044C3.70459 0.569489 4.06198 0.212097 4.50293 0.212097H15.2015C15.6425 0.212097 15.9999 0.569489 15.9999 1.01044C15.9999 1.45139 15.6427 1.80878 15.2018 1.80878Z"
                                            className="svg-tab"
                                        />
                                        <path
                                            d="M1.0712 2.14435C1.66334 2.14435 2.14337 1.66432 2.14337 1.07217C2.14337 0.480029 1.66334 0 1.0712 0C0.479052 0 -0.000976562 0.480029 -0.000976562 1.07217C-0.000976562 1.66432 0.479052 2.14435 1.0712 2.14435Z"
                                            className="svg-tab"
                                        />
                                        <path
                                            d="M1.07156 7.09384C1.66371 7.09384 2.14374 6.61381 2.14374 6.02167C2.14374 5.42952 1.66371 4.94949 1.07156 4.94949C0.479419 4.94949 -0.000610352 5.42952 -0.000610352 6.02167C-0.000610352 6.61381 0.479419 7.09384 1.07156 7.09384Z"
                                            className="svg-tab"
                                        />
                                        <path
                                            d="M1.07156 12.0432C1.66371 12.0432 2.14374 11.5632 2.14374 10.971C2.14374 10.3789 1.66371 9.89886 1.07156 9.89886C0.479419 9.89886 -0.000610352 10.3789 -0.000610352 10.971C-0.000610352 11.5632 0.479419 12.0432 1.07156 12.0432Z"
                                            className="svg-tab"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Filter pills here --> */}
                        <div className="flex flex-wrap my-4 text-white">
                            <span className="filter-pill mr-3 mb-2 lg:mb-0 flex items-center font-10 font-semibold px-2.5">
                                Audi A3
                                <span className="ml-1.5">
                                    {" "}
                                    <img
                                        src="../../assets/img/vectors/white-close.svg"
                                        alt="close"
                                    />{" "}
                                </span>
                            </span>
                            <span className="filter-pill mr-3 mb-2 lg:mb-0 flex items-center font-10 font-semibold px-2.5">
                                2020
                                <span className="ml-1.5">
                                    {" "}
                                    <img
                                        src="../../assets/img/vectors/white-close.svg"
                                        alt="close"
                                    />{" "}
                                </span>
                            </span>
                            <span className="filter-pill mr-3 mb-2 lg:mb-0  flex items-center font-10 font-semibold px-2.5">
                                Sedan
                                <span className="ml-1.5">
                                    {" "}
                                    <img
                                        src="../../assets/img/vectors/white-close.svg"
                                        alt="close"
                                    />{" "}
                                </span>
                            </span>
                            <span className="filter-pill mb-2 lg:mb-0 mr-3 flex items-center font-10 font-semibold px-2.5">
                                Automatic
                                <span className="ml-1.5">
                                    {" "}
                                    <img
                                        src="../../assets/img/vectors/white-close.svg"
                                        alt="close"
                                    />{" "}
                                </span>
                            </span>
                            <span className="filter-pill mr-3 mb-2 lg:mb-0  flex items-center font-10 font-semibold px-2.5">
                                Petrol
                                <span className="ml-1.5">
                                    {" "}
                                    <img
                                        src="../../assets/img/vectors/white-close.svg"
                                        alt="close"
                                    />{" "}
                                </span>
                            </span>
                        </div>

                        {/* <!-- Car Grid displays here --> */}
                        {grid && (
                            <div
                                className="flex flex-wrap justify-center lg:justify-between display-type"
                                id="car-grid"
                            >
                                {/* <!-- Car 1 --> */}
                                <div className="car-display-holder p-4 mb-4">
                                    <img
                                        className="img-fluid"
                                        src="../../assets/img/cars/AudiA3.png"
                                        className="br-5 "
                                        alt="Audi A3"
                                    />

                                    {/* <!-- Car details here --> */}
                                    <div className="mt-3">
                                        {/* <!-- name --> */}
                                        <p className="text-xs primary-black font-medium">
                                            Audi A3
                                        </p>

                                        {/* <!-- Mileage --> */}
                                        <p className="sec-black font-11 flex items-center pt-2">
                                            {" "}
                                            2020{" "}
                                            <span className="ml-6">
                                                205,456 miles
                                            </span>
                                        </p>

                                        {/* <!-- location here --> */}
                                        <div className="flex pt-2">
                                            <p className="flex items-center sec-black font-10">
                                                {" "}
                                                <span className="mr-1">
                                                    <img
                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                        alt="location"
                                                    />
                                                </span>{" "}
                                                Houston, Texas
                                            </p>
                                            {/* <!-- date here --> */}
                                            <div className="ml-auto flex self-center">
                                                <img
                                                    className="img-fluid"
                                                    src="../../assets/img/vectors/red-date.svg"
                                                    alt="date"
                                                />
                                                <p className="sec-black font-10 ml-1">
                                                    {" "}
                                                    Feb 22, 2020
                                                </p>
                                            </div>
                                        </div>

                                        {/* <!-- Price here --> */}
                                        <div className="flex pt-3">
                                            <p className=" sec-black text-base">
                                                $30,500
                                            </p>
                                            {/* <!-- Bid button here --> */}
                                            <div className="ml-auto  self-center">
                                                <button
                                                    type="button"
                                                    className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                                >
                                                    Place bid
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Car 2 --> */}
                                <div className="car-display-holder p-4 mb-4">
                                    <img
                                        className="img-fluid"
                                        src="../../assets/img/cars/fordescape.png"
                                        className="br-5 "
                                        alt="Audi A3"
                                    />

                                    {/* <!-- Car details here --> */}
                                    <div className="mt-3">
                                        {/* <!-- name --> */}
                                        <p className="text-xs primary-black font-medium">
                                            Ford Escape
                                        </p>

                                        {/* <!-- Mileage --> */}
                                        <p className="sec-black font-11 flex items-center pt-2">
                                            {" "}
                                            2020{" "}
                                            <span className="ml-6">
                                                205,456 miles
                                            </span>
                                        </p>

                                        {/* <!-- location here --> */}
                                        <div className="flex pt-2">
                                            <p className="flex items-center sec-black font-10">
                                                {" "}
                                                <span className="mr-1">
                                                    <img
                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                        alt="location"
                                                    />
                                                </span>{" "}
                                                Houston, Texas
                                            </p>
                                            {/* <!-- date here --> */}
                                            <div className="ml-auto flex self-center">
                                                <img
                                                    className="img-fluid"
                                                    src="../../assets/img/vectors/red-date.svg"
                                                    alt="date"
                                                />
                                                <p className="sec-black font-10 ml-1">
                                                    {" "}
                                                    Feb 22, 2020
                                                </p>
                                            </div>
                                        </div>

                                        {/* <!-- Price here --> */}
                                        <div className="flex pt-3">
                                            <p className=" sec-black text-base">
                                                $32,500
                                            </p>
                                            {/* <!-- Bid button here --> */}
                                            <div className="ml-auto  self-center">
                                                <button
                                                    type="button"
                                                    className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                                >
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Car 3 --> */}
                                <div className="car-display-holder p-4 mb-4">
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/img/cars/highlander.png"
                                        className="br-5 "
                                        alt="Audi A3"
                                    />

                                    {/* <!-- Car details here --> */}
                                    <div className="mt-3">
                                        {/* <!-- name --> */}
                                        <p className="text-xs primary-black font-medium">
                                            Toyota Highlander XLE
                                        </p>

                                        {/* <!-- Mileage --> */}
                                        <p className="sec-black font-11 flex items-center pt-2">
                                            {" "}
                                            2020{" "}
                                            <span className="ml-6">
                                                205,456 miles
                                            </span>
                                        </p>

                                        {/* <!-- location here --> */}
                                        <div className="flex pt-2">
                                            <p className="flex items-center sec-black font-10">
                                                {" "}
                                                <span className="mr-1">
                                                    <img
                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                        alt="location"
                                                    />
                                                </span>{" "}
                                                Houston, Texas
                                            </p>
                                            {/* <!-- date here --> */}
                                            <div className="ml-auto flex self-center">
                                                <img
                                                    className="img-fluid"
                                                    src="../../assets/img/vectors/red-date.svg"
                                                    alt="date"
                                                />
                                                <p className="sec-black font-10 ml-1">
                                                    {" "}
                                                    Feb 22, 2020
                                                </p>
                                            </div>
                                        </div>

                                        {/* <!-- Price here --> */}
                                        <div className="flex pt-3">
                                            <p className=" sec-black text-base">
                                                $30,500
                                            </p>
                                            {/* <!-- Bid button here --> */}
                                            <div className="ml-auto  self-center">
                                                <button
                                                    type="button"
                                                    className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                                >
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Car 4 --> */}
                                <div className="car-display-holder p-4 mb-4">
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/img/cars/tacoma.png"
                                        className="br-5 "
                                        alt="Audi A3"
                                    />

                                    {/* <!-- Car details here --> */}
                                    <div className="mt-3">
                                        {/* <!-- name --> */}
                                        <p className="text-xs primary-black font-medium">
                                            Toyota Tacoma
                                        </p>

                                        {/* <!-- Mileage --> */}
                                        <p className="sec-black font-11 flex items-center pt-2">
                                            {" "}
                                            2020{" "}
                                            <span className="ml-6">
                                                205,456 miles
                                            </span>
                                        </p>

                                        {/* <!-- location here --> */}
                                        <div className="flex pt-2">
                                            <p className="flex items-center sec-black font-10">
                                                {" "}
                                                <span className="mr-1">
                                                    <img
                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                        alt="location"
                                                    />
                                                </span>{" "}
                                                Houston, Texas
                                            </p>
                                            {/* <!-- date here --> */}
                                            <div className="ml-auto flex self-center">
                                                <img
                                                    className="img-fluid"
                                                    src="../../assets/img/vectors/red-date.svg"
                                                    alt="date"
                                                />
                                                <p className="sec-black font-10 ml-1">
                                                    {" "}
                                                    Feb 22, 2020
                                                </p>
                                            </div>
                                        </div>

                                        {/* <!-- Price here --> */}
                                        <div className="flex pt-3">
                                            <p className=" sec-black text-base">
                                                $30,500
                                            </p>
                                            {/* <!-- Bid button here --> */}
                                            <div className="ml-auto  self-center">
                                                <button
                                                    type="button"
                                                    className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                                >
                                                    Place bid
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Car 5 --> */}
                                <div className="car-display-holder p-4 mb-4">
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/img/cars/highlander2.png"
                                        className="br-5 "
                                        alt="Audi A3"
                                    />

                                    {/* <!-- Car details here --> */}
                                    <div className="mt-3">
                                        {/* <!-- name --> */}
                                        <p className="text-xs primary-black font-medium">
                                            Toyota Highlander
                                        </p>

                                        {/* <!-- Mileage --> */}
                                        <p className="sec-black font-11 flex items-center pt-2">
                                            {" "}
                                            2020{" "}
                                            <span className="ml-6">
                                                205,456 miles
                                            </span>
                                        </p>

                                        {/* <!-- location here --> */}
                                        <div className="flex pt-2">
                                            <p className="flex items-center sec-black font-10">
                                                {" "}
                                                <span className="mr-1">
                                                    <img
                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                        alt="location"
                                                    />
                                                </span>{" "}
                                                Houston, Texas
                                            </p>
                                            {/* <!-- date here --> */}
                                            <div className="ml-auto flex self-center">
                                                <img
                                                    className="img-fluid"
                                                    src="../../assets/img/vectors/red-date.svg"
                                                    alt="date"
                                                />
                                                <p className="sec-black font-10 ml-1">
                                                    {" "}
                                                    Feb 22, 2020
                                                </p>
                                            </div>
                                        </div>

                                        {/* <!-- Price here --> */}
                                        <div className="flex pt-3">
                                            <p className=" sec-black text-base">
                                                $30,500
                                            </p>
                                            {/* <!-- Bid button here --> */}
                                            <div className="ml-auto  self-center">
                                                <button
                                                    type="button"
                                                    className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                                >
                                                    Place bid
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Car 6 --> */}
                                <div className="car-display-holder p-4 mb-4">
                                    <img
                                        className="img-fluid"
                                        src="../../assets/img/cars/Rav4.png"
                                        className="br-5 "
                                        alt="Audi A3"
                                    />

                                    {/* <!-- Car details here --> */}
                                    <div className="mt-3">
                                        {/* <!-- name --> */}
                                        <p className="text-xs primary-black font-medium">
                                            Toyota RAV4
                                        </p>

                                        {/* <!-- Mileage --> */}
                                        <p className="sec-black font-11 flex items-center pt-2">
                                            {" "}
                                            2020{" "}
                                            <span className="ml-6">
                                                205,456 miles
                                            </span>
                                        </p>

                                        {/* <!-- location here --> */}
                                        <div className="flex pt-2">
                                            <p className="flex items-center sec-black font-10">
                                                {" "}
                                                <span className="mr-1">
                                                    <img
                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                        alt="location"
                                                    />
                                                </span>{" "}
                                                Houston, Texas
                                            </p>
                                            {/* <!-- date here --> */}
                                            <div className="ml-auto flex self-center">
                                                <img
                                                    className="img-fluid"
                                                    src="../../assets/img/vectors/red-date.svg"
                                                    alt="date"
                                                />
                                                <p className="sec-black font-10 ml-1">
                                                    {" "}
                                                    Feb 22, 2020
                                                </p>
                                            </div>
                                        </div>

                                        {/* <!-- Price here --> */}
                                        <div className="flex pt-3">
                                            <p className=" sec-black text-base">
                                                $30,500
                                            </p>
                                            {/* <!-- Bid button here --> */}
                                            <div className="ml-auto  self-center">
                                                <button
                                                    type="button"
                                                    className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                                >
                                                    Place bid
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* <!-- Car List displays here --> */}
                        {!grid && (
                            <div
                                className="flex flex-wrap display-type justify-between"
                                id="car-list"
                            >
                                {/* <!-- Car 1 --> */}
                                <div className="car-display-list-holder flex flex-wrap w-full p-4 mb-4">
                                    {/* <!-- image to details here --> */}
                                    <div className="flex flex-wrap">
                                        <img
                                            className="img-fluid"
                                            src="../../assets/img/cars/AudiA3.png"
                                            alt=""
                                        />

                                        {/* <!-- Details here --> */}
                                        <div className="lg:ml-3 py-4">
                                            <p className="text-base primary-black ">
                                                2020 Audi A3
                                            </p>

                                            {/* <!-- location to mileage here  --> */}
                                            <table className="min-w-full ">
                                                <tbody>
                                                    <tr>
                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black ">
                                                                {" "}
                                                                <span className="mr-1">
                                                                    <img
                                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                                        alt="beacon"
                                                                    />
                                                                </span>{" "}
                                                                Houston, Texas
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black ">
                                                                {" "}
                                                                <span className="mr-1">
                                                                    <img
                                                                        src="../../assets/img/vectors/speedometer.svg"
                                                                        alt="beacon"
                                                                    />
                                                                </span>{" "}
                                                                205,456 miles
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                {" "}
                                                                <span className="mr-1">
                                                                    <img
                                                                        src="../../assets/img/vectors/red-date.svg"
                                                                        alt="beacon"
                                                                    />
                                                                </span>
                                                                Feb 22, 2020 at
                                                                4:30 PM
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                Blue exterior
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                Cream interior
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                VIN:
                                                                123456789ABC
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            {/* <!-- others here --> */}
                                            <div className="flex border-t my-3 py-3">
                                                <p className="flex items-center font-11 primary-black mr-6">
                                                    {" "}
                                                    Non-Accident
                                                </p>
                                                <p className="flex items-center font-11 primary-black mr-6">
                                                    Green Light Car
                                                </p>
                                                <p className="flex items-center font-11 primary-black mr-6">
                                                    {" "}
                                                    Fully Loaded
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-auto py-4 items-end flex flex-col">
                                        <p className="primary-black text-base">
                                            $30,500
                                        </p>
                                        <div className="relative pt-1.5">
                                            <img
                                                src="../../assets/img/vectors/buy.svg"
                                                alt="buy"
                                            />
                                            <button
                                                type="button"
                                                className="focus:outline-none text-white action-btn buy px-2 items-center flex font-bold font-7 absolute bottom-0 "
                                            >
                                                BUY NOW
                                            </button>
                                        </div>

                                        <div>
                                            <button
                                                type="button"
                                                className="focus:outline-none primary-btn text-white font-10 font-semibold mt-4 py-1 px-2.5 -m-1.5"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Car 2 --> */}
                                <div className="car-display-list-holder flex w-full p-4 mb-4">
                                    {/* <!-- image to details here --> */}
                                    <div className="flex">
                                        <img
                                            className="img-fluid"
                                            src="../../assets/img/cars/AudiA3.png"
                                            alt=""
                                        />

                                        {/* <!-- Details here --> */}
                                        <div className="ml-3 py-4">
                                            <p className="text-base primary-black ">
                                                2020 Audi A3
                                            </p>

                                            {/* <!-- location to mileage here  --> */}
                                            <table className="min-w-full ">
                                                <tbody>
                                                    <tr>
                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black ">
                                                                {" "}
                                                                <span className="mr-1">
                                                                    <img
                                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                                        alt="beacon"
                                                                    />
                                                                </span>{" "}
                                                                Houston, Texas
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black ">
                                                                {" "}
                                                                <span className="mr-1">
                                                                    <img
                                                                        src="../../assets/img/vectors/speedometer.svg"
                                                                        alt="beacon"
                                                                    />
                                                                </span>{" "}
                                                                Houston, Texas
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                {" "}
                                                                <span className="mr-1">
                                                                    <img
                                                                        src="../../assets/img/vectors/red-date.svg"
                                                                        alt="beacon"
                                                                    />
                                                                </span>
                                                                Feb 22, 2020 at
                                                                4:30 PM
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                Blue exterior
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                Cream interior
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                VIN:
                                                                123456789ABC
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            {/* <!-- others here --> */}
                                            <div className="flex border-t my-3 py-3">
                                                <p className="flex items-center font-11 primary-black mr-6">
                                                    {" "}
                                                    Non-Accident
                                                </p>
                                                <p className="flex items-center font-11 primary-black mr-6">
                                                    Green Light Car
                                                </p>
                                                <p className="flex items-center font-11 primary-black mr-6">
                                                    {" "}
                                                    Fully Loaded
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-auto py-4 items-end flex flex-col">
                                        <p className="primary-black text-base">
                                            $30,500
                                        </p>
                                        <div className="relative pt-1.5">
                                            <img
                                                src="../../assets/img/vectors/bid.svg"
                                                alt="buy"
                                            />
                                            <button
                                                type="button"
                                                className="focus:outline-none text-white action-btn bid px-2 items-center flex font-bold font-7 absolute bottom-0 "
                                            >
                                                BID NOW
                                            </button>
                                        </div>

                                        <div>
                                            <button
                                                type="button"
                                                className="focus:outline-none primary-btn text-white font-10 font-semibold mt-4 py-1 px-2.5 -m-1.5"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Car 3 --> */}
                                <div className="car-display-list-holder flex w-full p-4 mb-4">
                                    {/* <!-- image to details here --> */}
                                    <div className="flex">
                                        <img
                                            className="img-fluid"
                                            src="../../assets/img/cars/AudiA3.png"
                                            alt=""
                                        />

                                        {/* <!-- Details here --> */}
                                        <div className="ml-3 py-4">
                                            <p className="text-base primary-black ">
                                                2020 Audi A3
                                            </p>

                                            {/* <!-- location to mileage here  --> */}
                                            <table className="min-w-full ">
                                                <tbody>
                                                    <tr>
                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black ">
                                                                {" "}
                                                                <span className="mr-1">
                                                                    <img
                                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                                        alt="beacon"
                                                                    />
                                                                </span>{" "}
                                                                Houston, Texas
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black ">
                                                                {" "}
                                                                <span className="mr-1">
                                                                    <img
                                                                        src="../../assets/img/vectors/speedometer.svg"
                                                                        alt="beacon"
                                                                    />
                                                                </span>{" "}
                                                                Houston, Texas
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                {" "}
                                                                <span className="mr-1">
                                                                    <img
                                                                        src="../../assets/img/vectors/red-date.svg"
                                                                        alt="beacon"
                                                                    />
                                                                </span>
                                                                Feb 22, 2020 at
                                                                4:30 PM
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                Blue exterior
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                Cream interior
                                                            </p>
                                                        </td>

                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                            <p className="flex items-center text-xs primary-black">
                                                                VIN:
                                                                123456789ABC
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            {/* <!-- others here --> */}
                                            <div className="flex border-t my-3 py-3">
                                                <p className="flex items-center font-11 primary-black mr-6">
                                                    {" "}
                                                    Non-Accident
                                                </p>
                                                <p className="flex items-center font-11 primary-black mr-6">
                                                    Green Light Car
                                                </p>
                                                <p className="flex items-center font-11 primary-black mr-6">
                                                    {" "}
                                                    Fully Loaded
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-auto py-4 items-end flex flex-col">
                                        <p className="primary-black text-base">
                                            $30,500
                                        </p>
                                        <div className="relative pt-1.5">
                                            <img
                                                src="../../assets/img/vectors/buy.svg"
                                                alt="buy"
                                            />
                                            <button
                                                type="button"
                                                className="focus:outline-none text-white action-btn buy px-2 items-center flex font-bold font-7 absolute bottom-0 "
                                            >
                                                BUY NOW
                                            </button>
                                        </div>

                                        <div>
                                            <button
                                                type="button"
                                                className="focus:outline-none primary-btn text-white font-10 font-semibold mt-4 py-1 px-2.5 -m-1.5"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
const mapStateToProps = (state) => {
    const { cars, loading, error } = state.Cars;
    return { cars, loading, error };
};

export default connect(mapStateToProps, { getCars })(Search);
