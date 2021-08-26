import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";

const CarDetails = ({ cars }) => {
    const [carDetail, setDetail] = useState(null);
    const router = useRouter();
    const [offer, setOffer] = useState(true);
    useEffect(() => {
        if (cars.length > 0) {
            const found = cars.find(
                (element) => element.VIN === router.query.id
            );
            setDetail(found);
        }
    });
    const openForm = (evt, status) => {
        console.log(carDetail);
        if (status !== offer) {
            setOffer(status);
            let i, tabcontent, tablinks;

            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            tablinks = document.getElementsByClassName("details-tab");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(
                    " active",
                    ""
                );
            }

            evt.currentTarget.className += " active";
        }
    };

    if (!carDetail) {
        // reRender();
        return <div className="App">Loading...</div>;
    }
    return (
        <div>
            {carDetail && (
                <>
                    <section className="flex flex-wrap w-full justify-center pt-20 lg:pt-28 px-5 xl:px-0">
                        <div className="details-border-b py-1 block lg:hidden">
                            <p className="font-13 font-bold primary-color">
                                2015 MERCEDES-BENZ GLK-CLASS GLK350
                            </p>

                            <div className="flex mt-1.5">
                                <div className="flex">
                                    <p className="font-11 primary-gray font-medium">
                                        2,124 mi
                                    </p>
                                    <p className="font-11 ml-2 primary-gray font-medium">
                                        VIN: {""}
                                        {carDetail?.VIN}
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <p className="primary-color text-base font-extrabold">
                                        $19,500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/5">
                            <div>
                                <img
                                    src={carDetail?.images?.image_largeUrl}
                                    loading="lazy"
                                    className="br-5 object-fit"
                                    width="715"
                                    height="424"
                                    alt="Benz"
                                />
                            </div>
                            <div className="flex  mt-3">
                                <div className="mr-2.5">
                                    <img
                                        src="../assets/img/cars/1.png"
                                        className="br-5"
                                        width="93"
                                        height="69"
                                        alt=""
                                    />
                                </div>

                                <div className="mr-2.5">
                                    <img
                                        src="../assets/img/cars/2.png"
                                        className="br-5"
                                        width="93"
                                        height="69"
                                        alt=""
                                    />
                                </div>

                                <div className="mr-2.5">
                                    <img
                                        src="../assets/img/cars/3.png"
                                        className="br-5"
                                        width="93"
                                        height="69"
                                        alt=""
                                    />
                                </div>

                                <div className="mr-2.5">
                                    <img
                                        src="../assets/img/cars/4.png"
                                        className="br-5"
                                        width="93"
                                        height="69"
                                        alt=""
                                    />
                                </div>

                                <div className="mr-2.5">
                                    <img
                                        src="../assets/img/cars/5.png"
                                        className="br-5"
                                        width="93"
                                        height="69"
                                        alt=""
                                    />
                                </div>

                                <div className="mr-2.5">
                                    <img
                                        src="../assets/img/cars/6.png"
                                        className="br-5"
                                        width="93"
                                        height="69"
                                        alt=""
                                    />
                                </div>

                                <div className="mr-2.5">
                                    <img
                                        src="../assets/img/cars/7.png"
                                        className="br-5"
                                        width="93"
                                        height="69"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="car-details-holder px-4 pt-4 pb-12">
                            <div className="details-border-b px-7 lg:px-0 mt-3 lg:mt-0 py-1 hidden lg:block">
                                <p className="text-base font-bold primary-color">
                                    {`${carDetail?.vehicleName}`}
                                </p>

                                <div className="flex mt-1.5">
                                    <div className="flex">
                                        <p className="font-11 primary-gray font-medium">
                                            2,124 mi
                                        </p>
                                        <p className="font-11 ml-2 primary-gray font-medium">
                                            VIN: SJTKPOLVAX123
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <p className="primary-color text-base font-extrabold">
                                            $19,500
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-4 lg:mt-0">
                                <div
                                    className="details-tab  cursor-pointer active px-10 lg:px-16 font-10 font-semibold  primary-black py-0.5 "
                                    onClick={(e) => openForm(e, true)}
                                >
                                    <p href className="py-1.5">
                                        Offer Amount
                                    </p>
                                </div>

                                <div
                                    className="ml-auto px-14 cursor-pointer lg:px-20 font-10 font-medium details-tab primary-black py-0.5"
                                    onClick={(e) => openForm(e, false)}
                                >
                                    <p href className="py-1.5">
                                        Budget
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3">
                                {offer && (
                                    <div
                                        className="tabcontent"
                                        id="offer-amount"
                                    >
                                        <div className="edit-holder my-1.5 px-2  flex items-center">
                                            <table>
                                                <tbody>
                                                    <tr className="">
                                                        <td className="sec-black font-11 font-semibold w-28  ">
                                                            {" "}
                                                            <label>
                                                                Click to edit
                                                            </label>{" "}
                                                        </td>
                                                        <td className="text-sm font-medium sec-black">
                                                            <input
                                                                id="amount"
                                                                className=" w-full focus:outline-none"
                                                                type="text"
                                                                placeholder="$8,000"
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <table className="min-w-full border-separate detail-table">
                                            <tbody>
                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2 ">
                                                        Destination
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        Nigeria
                                                    </td>
                                                    <td className="float-right px-2">
                                                        <img
                                                            src="../assets/img/vectors/arrow-down2.svg"
                                                            alt="tooltip"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 py-2 p-2">
                                                        Auction Fee
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        $300
                                                    </td>
                                                    <td className="float-right px-2">
                                                        <img
                                                            src="../assets/img/vectors/tool-tip.svg"
                                                            alt="tooltip"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Tax and Reg
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        Not Applicable
                                                    </td>
                                                    <td className="float-right px-2">
                                                        <img
                                                            src="../assets/img/vectors/tool-tip.svg"
                                                            alt="tooltip"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Trucking
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        $950
                                                    </td>
                                                    <td className="text-right px-2">
                                                        {" "}
                                                        <label className="detail">
                                                            <input
                                                                type="checkbox"
                                                                className="focus:outline-none detail self-center"
                                                            />
                                                            <span className="detail"></span>
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Shipping
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        $950
                                                    </td>
                                                    <td className="text-right px-2">
                                                        {" "}
                                                        <label className="detail">
                                                            <input
                                                                type="checkbox"
                                                                className="focus:outline-none detail self-center"
                                                            />
                                                            <span className="detail"></span>
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Clearing
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        N2,000,000
                                                    </td>
                                                    <td className="text-right px-2">
                                                        {" "}
                                                        <label className="detail">
                                                            <input
                                                                type="checkbox"
                                                                className="focus:outline-none detail self-center"
                                                            />
                                                            <span className="detail"></span>
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 py-2">
                                                        Service Fee
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        $400
                                                    </td>
                                                    <td> </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-bold w-28 p-2">
                                                        Total
                                                    </td>
                                                    <td className="font-11 sec-black font-bold pr-20 py-2">
                                                        N46,000,000
                                                    </td>
                                                    <td className="font-10 font-medium primary-blue text-center px-2">
                                                        Change currency
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                                {!offer && (
                                    <div className="tabcontent" id="budget">
                                        <table className="min-w-full border-separate detail-table">
                                            <tbody>
                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2 ">
                                                        Bid amount
                                                    </td>
                                                    <td className="font-11 sec-black font-bold pr-20 py-2">
                                                        $ 121,000
                                                    </td>
                                                    <td className="float-right px-2"></td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 py-2 p-2">
                                                        Destination
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        Nigeria
                                                    </td>
                                                    <td className="float-right px-2">
                                                        <img
                                                            src="../assets/img/vectors/arrow-down2.svg"
                                                            alt="tooltip"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Auction Fee
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        $300
                                                    </td>
                                                    <td className="float-right px-2">
                                                        <img
                                                            src="../assets/img/vectors/tool-tip.svg"
                                                            alt="tooltip"
                                                        />{" "}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Tax and Reg
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        Not Applicable
                                                    </td>
                                                    <td className="float-right px-2">
                                                        <img
                                                            src="../assets/img/vectors/tool-tip.svg"
                                                            alt="tooltip"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Trucking
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        $950
                                                    </td>
                                                    <td className="text-right px-2">
                                                        {" "}
                                                        <label className="detail">
                                                            <input
                                                                type="checkbox"
                                                                className="focus:outline-none detail self-center"
                                                            />
                                                            <span className="detail"></span>
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Service Fee
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        $950
                                                    </td>
                                                    <td className="text-right px-2">
                                                        {" "}
                                                        <label className="detail">
                                                            <input
                                                                type="checkbox"
                                                                className="focus:outline-none detail self-center"
                                                            />
                                                            <span className="detail"></span>
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Shipping{" "}
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        $950
                                                    </td>
                                                    <td className="text-right px-2">
                                                        {" "}
                                                        <label className="detail">
                                                            <input
                                                                type="checkbox"
                                                                className="focus:outline-none detail self-center"
                                                            />
                                                            <span className="detail"></span>
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Clearing{" "}
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        $950
                                                    </td>
                                                    <td className="text-right px-2">
                                                        {" "}
                                                        <label className="detail">
                                                            <input
                                                                type="checkbox"
                                                                className="focus:outline-none detail self-center"
                                                            />
                                                            <span className="detail"></span>
                                                        </label>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="edit-holder my-1.5 px-3 flex items-center">
                                            <table>
                                                <tbody>
                                                    <tr className="">
                                                        <td className="font-10 font-medium sec-gray pr-1">
                                                            {" "}
                                                            <label>
                                                                Enter your
                                                                budget
                                                            </label>{" "}
                                                        </td>
                                                        <td className="text-sm font-medium sec-gray">
                                                            <input
                                                                id="budget"
                                                                className="border-none edit-control focus:outline-none"
                                                                type="text"
                                                                placeholder="$8,000"
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-center my-3">
                                <div className="flex">
                                    <label className="detail">
                                        <input
                                            type="checkbox"
                                            className="focus:outline-none detail self-center"
                                        />
                                        <span className="detail"></span>
                                    </label>
                                    <label className="font-11 sec-black ml-1.5">
                                        {" "}
                                        I agree with{" "}
                                        <span className="primary-blue">
                                            terms and conditions{" "}
                                        </span>{" "}
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    className="focus:outline-none primary-btn text-white font-9 font-semibold py-2 px-3"
                                >
                                    LOGIN OR SIGN UP TO PROCEED
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="w-full mt-20">
                        <div className=" justify-center mb-10 block lg:hidden"></div>

                        <div className="flex justify-around flex-wrap">
                            <div className="flex flex-col self-center">
                                <div className="items-center self-center">
                                    <img
                                        src="../assets/img/vectors/location.svg"
                                        alt="location"
                                    />
                                </div>
                                <p className="pt-5 primary-black font-semibold text-base text-center">
                                    Vehicle location
                                </p>
                                <p className="pt-0.5 primary-gray font-medium font-11 text-center">
                                    Houston, Tx
                                </p>
                            </div>
                            <div className="flex flex-col relative  lg:block">
                                <div className="timer-container relative bg-white">
                                    <svg width="250" height="250">
                                        <circle
                                            r="100"
                                            cx="125"
                                            cy="125"
                                            className="track"
                                        ></circle>
                                        <circle
                                            r="100"
                                            cx="125"
                                            cy="125"
                                            className="progress progress-ring__circle"
                                        ></circle>
                                    </svg>

                                    <div className="timer">
                                        <button
                                            type="button"
                                            className="focus:outline-none cursor-auto pill  auction-pill text-white font-semibold font-9 py-1 uppercase px-3 "
                                        >
                                            Auction Day
                                        </button>
                                        <div className=" flex justify-center mt-3">
                                            <p className="sec-black font-medium font-11">
                                                Feb 4, 2021
                                            </p>
                                            <p className="sec-black font-medium font-11 ml-4">
                                                9:06 AM
                                            </p>
                                        </div>
                                        <p className="font-9 font-semibold text-center primary-blue pt-4">
                                            TIME LEFT
                                        </p>

                                        <div className="flex mt-1.5 justify-center">
                                            <div className="flex flex-col ml-2">
                                                <p className="days font-13 sec-black font-semibold "></p>
                                                <p className="primary-gray font-6">
                                                    DAYS
                                                </p>
                                            </div>

                                            <div className=" ml-3.5">
                                                <p className=" font-13 sec-black font-semibold hours"></p>
                                                <p className="primary-gray font-6">
                                                    HOURS
                                                </p>
                                            </div>

                                            <div className="flex flex-col ml-3.5">
                                                <p className="font-13 sec-black font-semibold minutes"></p>
                                                <p className="primary-gray font-6">
                                                    MINUTES
                                                </p>
                                            </div>

                                            <div className="flex flex-col ml-3.5">
                                                <p className="font-13 sec-black font-semibold seconds"></p>
                                                <p className="primary-gray font-6">
                                                    SECONDS
                                                </p>
                                            </div>
                                        </div>
                                        <div className="days font-13 sec-black font-semibold"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col self-center mt-14">
                                <div className="items-center self-center">
                                    <img
                                        src="../assets/img/vectors/delivery.svg"
                                        alt="location"
                                    />
                                </div>
                                <p className="pt-5 primary-black font-semibold text-base text-center">
                                    Est. Delivery
                                </p>
                                <p className="pt-0.5 primary-gray font-medium font-11 text-center">
                                    Thur Feb 14, 2020
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="mt-14 pt-7 w-full px-5 vehicle-details">
                        <div className="text-center py-3">
                            <hr className="red-underline2 w-20 m-auto pb-4 " />
                            <h4 className="font-bold primary-color text-xl ">
                                VEHICLE DETAILS
                            </h4>
                            <p className="primary-blue pt-2 text-sm font-semibold">
                                HIGHLIGHTS
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center w-full mt-8">
                            <div className="flex flex-col w-1/2 lg:w-1/3 mb-10 lg:mb-20">
                                <div className="self-center">
                                    <img
                                        src="../assets/img/vectors/clean-title.svg"
                                        alt="clean-title"
                                    />
                                </div>
                                <div className="pt-2.5 text-center">
                                    <p className="primary-black font-semibold text-base">
                                        Clean Title
                                    </p>
                                    <p className="primary-gray font-medium font-11">
                                        Add a little note here about this
                                        highlight
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col w-1/2 lg:w-1/3 mb-10 lg:mb-20">
                                <div className="self-center">
                                    <img
                                        src="../assets/img/vectors/loaded.svg"
                                        alt="loaded"
                                    />
                                </div>
                                <div className="pt-2.5 text-center">
                                    <p className="primary-black font-semibold text-base">
                                        Fully Loaded
                                    </p>
                                    <p className="primary-gray font-medium font-11">
                                        Add a little note here about this
                                        highlight
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col  w-1/2 lg:w-1/3 mb-10 lg:mb-20">
                                <div className="self-center">
                                    <img
                                        src="../assets/img/vectors/great-deal.svg"
                                        alt="deal"
                                    />
                                </div>
                                <div className="pt-2.5 text-center">
                                    <p className="primary-black font-semibold text-base">
                                        Great Deal
                                    </p>
                                    <p className="primary-gray font-medium font-11">
                                        Add a little note here about this
                                        highlight
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col  w-1/2 lg:w-1/3 mb-10 lg:mb-20">
                                <div className="self-center">
                                    <img
                                        src="../assets/img/vectors/non-accident.svg"
                                        alt="non-accident"
                                    />
                                </div>
                                <div className="pt-2.5 text-center">
                                    <p className="primary-black font-semibold text-base">
                                        Non-Accident
                                    </p>
                                    <p className="primary-gray font-medium font-11">
                                        Add a little note here about this
                                        highlight
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col  w-full lg:w-1/3 mb-10 lg:mb-20">
                                <div className="self-center">
                                    <img
                                        src="../assets/img/vectors/green-light-car.svg"
                                        alt="green"
                                    />
                                </div>
                                <div className="pt-2.5 text-center">
                                    <p className="primary-black font-semibold text-base">
                                        Green Light car
                                    </p>
                                    <p className="primary-gray font-medium font-11">
                                        Add a little note here about this
                                        highlight
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-4 w-full overview-section">
                        <div className="flex justify-center px-5">
                            <div className="overview-tab relative mr-6 lg:mr-16 active lg:px-4 lg:text-base text-sm font-semibold  primary-black lg:py-0.5">
                                <p href className="lg:py-1.5 ">
                                    OVERVIEW
                                </p>
                            </div>

                            <div className="overview-tab relative mr-6 lg:mr-16 lg:px-4 lg:text-base text-sm font-semibold  primary-black lg:py-0.5">
                                <p href className="lg:py-1.5">
                                    EQUIPMENT AND OPTIONS
                                </p>
                            </div>

                            <div className="overview-tab relative mr-2 lg:mr-16 lg:px-4 lg:text-base text-sm font-semibold  primary-black lg:py-0.5">
                                <p href className="lg:py-1.5">
                                    AUCTION INFO
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap px-5 justify-center mt-6">
                            <div>
                                <table className="min-w-full border-separate overview-table">
                                    <tbody>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Vehicle Name
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.vehicleName}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Interior Colour
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.sourceInteriorColor}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Seller Name
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.sourceSellerName}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Mileage
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.mileage}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Tranbaseission
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.tranbaseission ||
                                                    "Not Specified"}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Drive train
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.driveTrain}
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="lg:ml-3">
                                <table className="min-w-full border-separate overview-table">
                                    <tbody>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Company Name
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.companyName}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Make
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.make}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Model
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.model}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Pickup Location
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.pickupLocation}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Engine Type
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 lg:pr-32">
                                                {
                                                    carDetail?.sourceEngineFuelType
                                                }
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Exterior Color
                                            </td>
                                            <td className="text-base sec-black font-normal py-2 pr-32">
                                                {carDetail?.sourceExteriorColor}
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <a
                                href="#"
                                className="primary-blue font-semibold text-sm"
                            >
                                Show More Details
                            </a>
                        </div>
                    </section>
                    <section className="overview-section w-full py-3 px-7">
                        <div className="text-center py-3">
                            <hr className="red-underline2 w-20 m-auto pb-4" />
                            <h4 className="font-bold primary-color text-xl ">
                                SIMILAR VEHICLES
                            </h4>
                        </div>

                        <div className="flex justify-center flex-wrap mt-4">
                            <div className=" similar-cars-holder p-3 mr-4 mb-5 lg:mb-0">
                                <img
                                    className="br-5"
                                    src="../assets/img/cars/tacoma.png"
                                    alt="Tacoma"
                                />
                                <p className="pt-2 primary-black font-medium text-sm"></p>
                                <div className="flex pt-2">
                                    <p className="flex items-center sec-black font-10">
                                        {" "}
                                        <span className="mr-1">
                                            <img
                                                src="../assets/img/vectors/red-location-beacon.svg"
                                                alt="location"
                                            />
                                        </span>{" "}
                                        Houston, Texas
                                    </p>
                                    <div className="ml-auto flex self-center">
                                        <img
                                            className="img-fluid"
                                            src="../assets/img/vectors/red-date.svg"
                                            alt="date"
                                        />
                                        <p className="sec-black font-10 ml-1">
                                            {" "}
                                            Feb 22, 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="flex font-11 primary-gray pt-1">
                                    <p>2020</p>
                                    <p className="ml-3.5">205,456 miles</p>
                                </div>
                                <div className="flex pt-2">
                                    <p className=" sec-black text-base">
                                        $30,500
                                    </p>
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
                            <div className=" similar-cars-holder p-3 mr-4 mb-5 lg:mb-0">
                                <img
                                    className="br-5"
                                    src="../assets/img/cars/highlander2.png"
                                    alt="Tacoma"
                                />
                                <p className="pt-2 primary-black font-medium text-sm"></p>
                                <div className="flex pt-2">
                                    <p className="flex items-center sec-black font-10">
                                        {" "}
                                        <span className="mr-1">
                                            <img
                                                src="../assets/img/vectors/red-location-beacon.svg"
                                                alt="location"
                                            />
                                        </span>{" "}
                                        Houston, Texas
                                    </p>
                                    <div className="ml-auto flex self-center">
                                        <img
                                            className="img-fluid"
                                            src="../assets/img/vectors/red-date.svg"
                                            alt="date"
                                        />
                                        <p className="sec-black font-10 ml-1">
                                            {" "}
                                            Feb 22, 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="flex font-11 primary-gray pt-1">
                                    <p>2020</p>
                                    <p className="ml-3.5">205,456 miles</p>
                                </div>
                                <div className="flex pt-2">
                                    <p className=" sec-black text-base">
                                        $30,500
                                    </p>
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
                            <div className=" similar-cars-holder p-3 mr-4 mb-5 lg:mb-0">
                                <img
                                    className="br-5"
                                    src="../assets/img/cars/Rav 4.png"
                                    alt="Tacoma"
                                />
                                <p className="pt-2 primary-black font-medium text-sm"></p>
                                <div className="flex pt-2">
                                    <p className="flex items-center sec-black font-10">
                                        {" "}
                                        <span className="mr-1">
                                            <img
                                                src="../assets/img/vectors/red-location-beacon.svg"
                                                alt="location"
                                            />
                                        </span>{" "}
                                        Houston, Texas
                                    </p>
                                    <div className="ml-auto flex self-center">
                                        <img
                                            className="img-fluid"
                                            src="../assets/img/vectors/red-date.svg"
                                            alt="date"
                                        />
                                        <p className="sec-black font-10 ml-1">
                                            {" "}
                                            Feb 22, 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="flex font-11 primary-gray pt-1">
                                    <p>2020</p>
                                    <p className="ml-3.5">205,456 miles</p>
                                </div>
                                <div className="flex pt-2">
                                    <p className=" sec-black text-base">
                                        $30,500
                                    </p>
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
                            <div className=" similar-cars-holder p-3 mr-4 mb-5 lg:mb-0">
                                <img
                                    className="br-5"
                                    src="../assets/img/cars/tacoma.png"
                                    alt="Tacoma"
                                />
                                <p className="pt-2 primary-black font-medium text-sm"></p>
                                <div className="flex pt-2">
                                    <p className="flex items-center sec-black font-10">
                                        {" "}
                                        <span className="mr-1">
                                            <img
                                                src="../assets/img/vectors/red-location-beacon.svg"
                                                alt="location"
                                            />
                                        </span>{" "}
                                        Houston, Texas
                                    </p>
                                    <div className="ml-auto flex self-center">
                                        <img
                                            className="img-fluid"
                                            src="../assets/img/vectors/red-date.svg"
                                            alt="date"
                                        />
                                        <p className="sec-black font-10 ml-1">
                                            {" "}
                                            Feb 22, 2020
                                        </p>
                                    </div>
                                </div>
                                <div className="flex font-11 primary-gray pt-1">
                                    <p>2020</p>
                                    <p className="ml-3.5">205,456 miles</p>
                                </div>
                                <div className="flex pt-2">
                                    <p className=" sec-black text-base">
                                        $30,500
                                    </p>
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
                        <div className="text-center my-5">
                            <a
                                href="#"
                                className="primary-blue font-semibold text-sm"
                            >
                                Show More Vehicles
                            </a>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};
const mapStateToProps = (state) => {
    const { cars, loading, error } = state.Cars;
    return { cars, loading, error };
};

export default connect(mapStateToProps)(CarDetails);
