import React, { useState } from "react";

const detail = () => {
    const [offer, setOffer] = useState(true);
    const openForm = (evt, status) => {
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
    };
    return (
        <div>
            <section class="flex flex-wrap justify-center pt-20 lg:pt-28 px-5 xl:px-0">
                <div class="details-border-b py-1 block lg:hidden">
                    <p class="font-13 font-bold primary-color">
                        2015 MERCEDES-BENZ GLK-CLASS GLK350
                    </p>

                    <div class="flex mt-1.5">
                        <div class="flex">
                            <p class="font-11 primary-gray font-medium">
                                2,124 mi
                            </p>
                            <p class="font-11 ml-2 primary-gray font-medium">
                                VIN: SJTKPOLVAX123
                            </p>
                        </div>
                        <div class="ml-auto">
                            <p class="primary-color text-base font-extrabold">
                                $19,500
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-3/5">
                    <div>
                        <img
                            src="../assets/img/cars/benz.png"
                            loading="lazy"
                            class="br-5 object-fit"
                            width="715"
                            height="424"
                            alt="Benz"
                        />
                    </div>
                    <div class="flex  mt-3">
                        <div class="mr-2.5">
                            <img
                                src="../assets/img/cars/1.png"
                                class="br-5"
                                width="93"
                                height="69"
                                alt=""
                            />
                        </div>

                        <div class="mr-2.5">
                            <img
                                src="../assets/img/cars/2.png"
                                class="br-5"
                                width="93"
                                height="69"
                                alt=""
                            />
                        </div>

                        <div class="mr-2.5">
                            <img
                                src="../assets/img/cars/3.png"
                                class="br-5"
                                width="93"
                                height="69"
                                alt=""
                            />
                        </div>

                        <div class="mr-2.5">
                            <img
                                src="../assets/img/cars/4.png"
                                class="br-5"
                                width="93"
                                height="69"
                                alt=""
                            />
                        </div>

                        <div class="mr-2.5">
                            <img
                                src="../assets/img/cars/5.png"
                                class="br-5"
                                width="93"
                                height="69"
                                alt=""
                            />
                        </div>

                        <div class="mr-2.5">
                            <img
                                src="../assets/img/cars/6.png"
                                class="br-5"
                                width="93"
                                height="69"
                                alt=""
                            />
                        </div>

                        <div class="mr-2.5">
                            <img
                                src="../assets/img/cars/7.png"
                                class="br-5"
                                width="93"
                                height="69"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="car-details-holder px-4 pt-4 pb-12">
                    <div class="details-border-b px-7 lg:px-0 mt-3 lg:mt-0 py-1 hidden lg:block">
                        <p class="text-sm font-bold primary-color">
                            2015 MERCEDES-BENZ GLK-CLASS GLK350
                        </p>

                        <div class="flex mt-1.5">
                            <div class="flex">
                                <p class="font-11 primary-gray font-medium">
                                    2,124 mi
                                </p>
                                <p class="font-11 ml-2 primary-gray font-medium">
                                    VIN: SJTKPOLVAX123
                                </p>
                            </div>
                            <div class="ml-auto">
                                <p class="primary-color text-base font-extrabold">
                                    $19,500
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex mt-4 lg:mt-0">
                        <div
                            class="details-tab  active px-10 lg:px-16 font-10 font-semibold  primary-black py-0.5"
                            onClick={(e) => openForm(e, true)}
                        >
                            <p href class="py-1.5">
                                Offer Amount
                            </p>
                        </div>

                        <div
                            class="ml-auto px-14 lg:px-20 font-10 font-medium details-tab primary-black py-0.5"
                            onClick={(e) => openForm(e, false)}
                        >
                            <p href class="py-1.5">
                                Budget
                            </p>
                        </div>
                    </div>
                    <div class="mt-3">
                        {offer && (
                            <div class="tabcontent" id="offer-amount">
                                <div class="edit-holder my-1.5 px-3 flex items-center">
                                    <table>
                                        <tbody>
                                            <tr class="">
                                                <td class="text-xs font-medium sec-gray pr-6">
                                                    {" "}
                                                    <label for="amount">
                                                        Click to edit
                                                    </label>{" "}
                                                </td>
                                                <td class="text-xs font-medium sec-gray">
                                                    <input
                                                        id="amount"
                                                        class="border-none edit-control focus:outline-none"
                                                        type="text"
                                                        placeholder="$8,000"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <table class="min-w-full border-separate detail-table">
                                    <tbody>
                                        <tr class="detail-row mb-2">
                                            <td class="sec-black font-11 font-semibold w-28 p-2 ">
                                                Destination
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                Nigeria
                                            </td>
                                            <td class="float-right px-2">
                                                <img
                                                    src="../assets/img/vectors/arrow-down2.svg"
                                                    alt="tooltip"
                                                />
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 py-2 p-2">
                                                Auction Fee
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                $300
                                            </td>
                                            <td class="float-right px-2">
                                                <img
                                                    src="../assets/img/vectors/tool-tip.svg"
                                                    alt="tooltip"
                                                />
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 p-2">
                                                Tax and Reg
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                Not Applicable
                                            </td>
                                            <td class="float-right px-2">
                                                <img
                                                    src="../assets/img/vectors/tool-tip.svg"
                                                    alt="tooltip"
                                                />
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 p-2">
                                                Trucking
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                $950
                                            </td>
                                            <td class="text-right px-2">
                                                {" "}
                                                <label class="detail">
                                                    <input
                                                        type="checkbox"
                                                        class="focus:outline-none detail self-center"
                                                    />
                                                    <span class="detail"></span>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 p-2">
                                                Shipping
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                $950
                                            </td>
                                            <td class="text-right px-2">
                                                {" "}
                                                <label class="detail">
                                                    <input
                                                        type="checkbox"
                                                        class="focus:outline-none detail self-center"
                                                    />
                                                    <span class="detail"></span>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 p-2">
                                                Clearing
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                N2,000,000
                                            </td>
                                            <td class="text-right px-2">
                                                {" "}
                                                <label class="detail">
                                                    <input
                                                        type="checkbox"
                                                        class="focus:outline-none detail self-center"
                                                    />
                                                    <span class="detail"></span>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 py-2">
                                                Service Fee
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                $400
                                            </td>
                                            <td> </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-bold w-28 p-2">
                                                Total
                                            </td>
                                            <td class="font-11 sec-black font-bold pr-20 py-2">
                                                N46,000,000
                                            </td>
                                            <td class="font-10 font-medium primary-blue text-center px-2">
                                                Change currency
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {!offer && (
                            <div class="tabcontent" id="budget">
                                <table class="min-w-full border-separate detail-table">
                                    <tbody>
                                        <tr class="detail-row mb-2">
                                            <td class="sec-black font-11 font-semibold w-28 p-2 ">
                                                Bid amount
                                            </td>
                                            <td class="font-11 sec-black font-bold pr-20 py-2">
                                                $ 121,000
                                            </td>
                                            <td class="float-right px-2"></td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 py-2 p-2">
                                                Destination
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                Nigeria
                                            </td>
                                            <td class="float-right px-2">
                                                <img
                                                    src="../assets/img/vectors/arrow-down2.svg"
                                                    alt="tooltip"
                                                />
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 p-2">
                                                Auction Fee
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                $300
                                            </td>
                                            <td class="float-right px-2">
                                                <img
                                                    src="../assets/img/vectors/tool-tip.svg"
                                                    alt="tooltip"
                                                />{" "}
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 p-2">
                                                Tax and Reg
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                Not Applicable
                                            </td>
                                            <td class="float-right px-2">
                                                <img
                                                    src="../assets/img/vectors/tool-tip.svg"
                                                    alt="tooltip"
                                                />
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 p-2">
                                                Trucking
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                $950
                                            </td>
                                            <td class="text-right px-2">
                                                {" "}
                                                <label class="detail">
                                                    <input
                                                        type="checkbox"
                                                        class="focus:outline-none detail self-center"
                                                    />
                                                    <span class="detail"></span>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 p-2">
                                                Service Fee
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                $950
                                            </td>
                                            <td class="text-right px-2">
                                                {" "}
                                                <label class="detail">
                                                    <input
                                                        type="checkbox"
                                                        class="focus:outline-none detail self-center"
                                                    />
                                                    <span class="detail"></span>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 p-2">
                                                Shipping{" "}
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                $950
                                            </td>
                                            <td class="text-right px-2">
                                                {" "}
                                                <label class="detail">
                                                    <input
                                                        type="checkbox"
                                                        class="focus:outline-none detail self-center"
                                                    />
                                                    <span class="detail"></span>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr class="detail-row">
                                            <td class="sec-black font-11 font-semibold w-28 p-2">
                                                Clearing{" "}
                                            </td>
                                            <td class="font-11 sec-black font-normal pr-20 py-2">
                                                $950
                                            </td>
                                            <td class="text-right px-2">
                                                {" "}
                                                <label class="detail">
                                                    <input
                                                        type="checkbox"
                                                        class="focus:outline-none detail self-center"
                                                    />
                                                    <span class="detail"></span>
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="edit-holder my-1.5 px-3 flex items-center">
                                    <table>
                                        <tbody>
                                            <tr class="">
                                                <td class="font-10 font-medium sec-gray pr-1">
                                                    {" "}
                                                    <label for="budget">
                                                        Enter your budget
                                                    </label>{" "}
                                                </td>
                                                <td class="text-xs font-medium sec-gray">
                                                    <input
                                                        id="budget"
                                                        class="border-none edit-control focus:outline-none"
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

                    <div class="flex justify-center my-3">
                        <div class="flex">
                            <label class="detail">
                                <input
                                    type="checkbox"
                                    class="focus:outline-none detail self-center"
                                />
                                <span class="detail"></span>
                            </label>
                            <label class="font-11 sec-black ml-1.5">
                                {" "}
                                I agree with{" "}
                                <span class="primary-blue">
                                    terms and conditions{" "}
                                </span>{" "}
                            </label>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button
                            type="button"
                            class="focus:outline-none primary-btn text-white font-9 font-semibold py-2 px-3"
                        >
                            LOGIN OR SIGN UP TO PROCEED
                        </button>
                    </div>
                </div>
            </section>

            <section class=" mt-20">
                <div class=" justify-center mb-10 block lg:hidden"></div>

                <div class="flex justify-around flex-wrap">
                    <div class="flex flex-col self-center">
                        <div class="items-center self-center">
                            <img
                                src="../assets/img/vectors/location.svg"
                                alt="location"
                            />
                        </div>
                        <p class="pt-5 primary-black font-semibold text-sm text-center">
                            Vehicle location
                        </p>
                        <p class="pt-0.5 primary-gray font-medium font-11 text-center">
                            Houston, Tx
                        </p>
                    </div>
                    <div class="flex flex-col relative  lg:block">
                        <div class="timer-container relative bg-white">
                            <svg width="250" height="250">
                                <circle
                                    r="100"
                                    cx="125"
                                    cy="125"
                                    class="track"
                                ></circle>
                                <circle
                                    r="100"
                                    cx="125"
                                    cy="125"
                                    class="progress progress-ring__circle"
                                ></circle>
                                <div class="timer">
                                    <button
                                        type="button"
                                        class="focus:outline-none cursor-auto pill auction-pill text-white font-semibold font-9 py-1 uppercase px-3 "
                                    >
                                        Auction Day
                                    </button>
                                    <div class=" flex justify-center mt-3">
                                        <p class="sec-black font-medium font-11">
                                            Feb 4, 2021
                                        </p>
                                        <p class="sec-black font-medium font-11 ml-4">
                                            9:06 AM
                                        </p>
                                    </div>
                                    <p class="font-9 font-semibold text-center primary-blue pt-4">
                                        TIME LEFT
                                    </p>

                                    <div class="flex mt-1.5 justify-center">
                                        <div class="flex flex-col ml-2">
                                            <p class="days font-13 sec-black font-semibold "></p>
                                            <p class="primary-gray font-6">
                                                DAYS
                                            </p>
                                        </div>

                                        <div class=" ml-3.5">
                                            <p class=" font-13 sec-black font-semibold hours"></p>
                                            <p class="primary-gray font-6">
                                                HOURS
                                            </p>
                                        </div>

                                        <div class="flex flex-col ml-3.5">
                                            <p class="font-13 sec-black font-semibold minutes"></p>
                                            <p class="primary-gray font-6">
                                                MINUTES
                                            </p>
                                        </div>

                                        <div class="flex flex-col ml-3.5">
                                            <p class="font-13 sec-black font-semibold seconds"></p>
                                            <p class="primary-gray font-6">
                                                SECONDS
                                            </p>
                                        </div>
                                    </div>
                                    <div class="days font-13 sec-black font-semibold"></div>
                                </div>
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col self-center mt-14">
                        <div class="items-center self-center">
                            <img
                                src="../assets/img/vectors/delivery.svg"
                                alt="location"
                            />
                        </div>
                        <p class="pt-5 primary-black font-semibold text-sm text-center">
                            Est. Delivery
                        </p>
                        <p class="pt-0.5 primary-gray font-medium font-11 text-center">
                            Thur Feb 14, 2020
                        </p>
                    </div>
                </div>
            </section>
            <section class="mt-14 pt-7 px-5 vehicle-details">
                <div class="text-center py-3">
                    <hr class="red-underline2 w-20 m-auto pb-4 " />
                    <h4 class="font-bold primary-color text-xl ">
                        VEHICLE DETAILS
                    </h4>
                    <p class="primary-blue pt-2 text-xs font-semibold">
                        HIGHLIGHTS
                    </p>
                </div>

                <div class="flex flex-wrap justify-center mt-8">
                    <div class="flex flex-col w-1/2 lg:w-1/3 mb-10 lg:mb-20">
                        <div class="self-center">
                            <img
                                src="../assets/img/vectors/clean-title.svg"
                                alt="clean-title"
                            />
                        </div>
                        <div class="pt-2.5 text-center">
                            <p class="primary-black font-semibold text-base">
                                Clean Title
                            </p>
                            <p class="primary-gray font-medium font-11">
                                Add a little note here about this highlight
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col w-1/2 lg:w-1/3 mb-10 lg:mb-20">
                        <div class="self-center">
                            <img
                                src="../assets/img/vectors/loaded.svg"
                                alt="loaded"
                            />
                        </div>
                        <div class="pt-2.5 text-center">
                            <p class="primary-black font-semibold text-base">
                                Fully Loaded
                            </p>
                            <p class="primary-gray font-medium font-11">
                                Add a little note here about this highlight
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col  w-1/2 lg:w-1/3 mb-10 lg:mb-20">
                        <div class="self-center">
                            <img
                                src="../assets/img/vectors/great-deal.svg"
                                alt="deal"
                            />
                        </div>
                        <div class="pt-2.5 text-center">
                            <p class="primary-black font-semibold text-base">
                                Great Deal
                            </p>
                            <p class="primary-gray font-medium font-11">
                                Add a little note here about this highlight
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col  w-1/2 lg:w-1/3 mb-10 lg:mb-20">
                        <div class="self-center">
                            <img
                                src="../assets/img/vectors/non-accident.svg"
                                alt="non-accident"
                            />
                        </div>
                        <div class="pt-2.5 text-center">
                            <p class="primary-black font-semibold text-base">
                                Non-Accident
                            </p>
                            <p class="primary-gray font-medium font-11">
                                Add a little note here about this highlight
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col  w-full lg:w-1/3 mb-10 lg:mb-20">
                        <div class="self-center">
                            <img
                                src="../assets/img/vectors/green-light-car.svg"
                                alt="green"
                            />
                        </div>
                        <div class="pt-2.5 text-center">
                            <p class="primary-black font-semibold text-base">
                                Green Light car
                            </p>
                            <p class="primary-gray font-medium font-11">
                                Add a little note here about this highlight
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-4 overview-section">
                <div class="flex justify-center px-5">
                    <div class="overview-tab relative mr-6 lg:mr-16 active lg:px-4 lg:text-sm text-xs font-semibold  primary-black lg:py-0.5">
                        <p href class="lg:py-1.5 ">
                            OVERVIEW
                        </p>
                    </div>

                    <div class="overview-tab relative mr-6 lg:mr-16 lg:px-4 lg:text-sm text-xs font-semibold  primary-black lg:py-0.5">
                        <p href class="lg:py-1.5">
                            EQUIPMENT AND OPTIONS
                        </p>
                    </div>

                    <div class="overview-tab relative mr-2 lg:mr-16 lg:px-4 lg:text-sm text-xs font-semibold  primary-black lg:py-0.5">
                        <p href class="lg:py-1.5">
                            AUCTION INFO
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap px-5 justify-center mt-6">
                    <div>
                        <table class="min-w-full border-separate overview-table">
                            <tbody>
                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        External Colour
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Grey
                                    </td>
                                    <td></td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        Interior Colour
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Cream
                                    </td>
                                    <td></td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        Interior typr
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Leather
                                    </td>
                                    <td></td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        Interior Style
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Interior Style
                                    </td>
                                    <td></td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        Top Type
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Top Type
                                    </td>
                                    <td></td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        Drive train
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Drive train
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="lg:ml-3">
                        <table class="min-w-full border-separate overview-table">
                            <tbody>
                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        External Colour
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Grey
                                    </td>
                                    <td></td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        Interior Colour
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Cream
                                    </td>
                                    <td></td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        Interior typr
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Leather
                                    </td>
                                    <td></td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        Interior Style
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Interior Style
                                    </td>
                                    <td></td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        Top Type
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 lg:pr-32">
                                        Top Type
                                    </td>
                                    <td></td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2 ">
                                        Drive train
                                    </td>
                                    <td class="text-sm sec-black font-normal py-2 pr-32">
                                        Drive train
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="text-center mt-5">
                    <a href="#" class="primary-blue font-semibold text-xs">
                        Show More Details
                    </a>
                </div>
            </section>
            <section class="overview-section py-3 px-7">
                <div class="text-center py-3">
                    <hr class="red-underline2 w-20 m-auto pb-4" />
                    <h4 class="font-bold primary-color text-xl ">
                        SIMILAR VEHICLES
                    </h4>
                </div>

                <div class="flex justify-center flex-wrap mt-4">
                    <div class=" similar-cars-holder p-3 mr-4 mb-5 lg:mb-0">
                        <img
                            class="br-5"
                            src="../assets/img/cars/tacoma.png"
                            alt="Tacoma"
                        />
                        <p class="pt-2 primary-black font-medium text-xs"></p>
                        <div class="flex pt-2">
                            <p class="flex items-center sec-black font-10">
                                {" "}
                                <span class="mr-1">
                                    <img
                                        src="../assets/img/vectors/red-location-beacon.svg"
                                        alt="location"
                                    />
                                </span>{" "}
                                Houston, Texas
                            </p>
                            <div class="ml-auto flex self-center">
                                <img
                                    class="img-fluid"
                                    src="../assets/img/vectors/red-date.svg"
                                    alt="date"
                                />
                                <p class="sec-black font-10 ml-1">
                                    {" "}
                                    Feb 22, 2020
                                </p>
                            </div>
                        </div>
                        <div class="flex font-11 primary-gray pt-1">
                            <p>2020</p>
                            <p class="ml-3.5">205,456 miles</p>
                        </div>
                        <div class="flex pt-2">
                            <p class=" sec-black text-base">$30,500</p>
                            <div class="ml-auto  self-center">
                                <button
                                    type="button"
                                    class="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                >
                                    Place bid
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class=" similar-cars-holder p-3 mr-4 mb-5 lg:mb-0">
                        <img
                            class="br-5"
                            src="../assets/img/cars/highlander2.png"
                            alt="Tacoma"
                        />
                        <p class="pt-2 primary-black font-medium text-xs"></p>
                        <div class="flex pt-2">
                            <p class="flex items-center sec-black font-10">
                                {" "}
                                <span class="mr-1">
                                    <img
                                        src="../assets/img/vectors/red-location-beacon.svg"
                                        alt="location"
                                    />
                                </span>{" "}
                                Houston, Texas
                            </p>
                            <div class="ml-auto flex self-center">
                                <img
                                    class="img-fluid"
                                    src="../assets/img/vectors/red-date.svg"
                                    alt="date"
                                />
                                <p class="sec-black font-10 ml-1">
                                    {" "}
                                    Feb 22, 2020
                                </p>
                            </div>
                        </div>
                        <div class="flex font-11 primary-gray pt-1">
                            <p>2020</p>
                            <p class="ml-3.5">205,456 miles</p>
                        </div>
                        <div class="flex pt-2">
                            <p class=" sec-black text-base">$30,500</p>
                            <div class="ml-auto  self-center">
                                <button
                                    type="button"
                                    class="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                >
                                    Place bid
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class=" similar-cars-holder p-3 mr-4 mb-5 lg:mb-0">
                        <img
                            class="br-5"
                            src="../assets/img/cars/Rav 4.png"
                            alt="Tacoma"
                        />
                        <p class="pt-2 primary-black font-medium text-xs"></p>
                        <div class="flex pt-2">
                            <p class="flex items-center sec-black font-10">
                                {" "}
                                <span class="mr-1">
                                    <img
                                        src="../assets/img/vectors/red-location-beacon.svg"
                                        alt="location"
                                    />
                                </span>{" "}
                                Houston, Texas
                            </p>
                            <div class="ml-auto flex self-center">
                                <img
                                    class="img-fluid"
                                    src="../assets/img/vectors/red-date.svg"
                                    alt="date"
                                />
                                <p class="sec-black font-10 ml-1">
                                    {" "}
                                    Feb 22, 2020
                                </p>
                            </div>
                        </div>
                        <div class="flex font-11 primary-gray pt-1">
                            <p>2020</p>
                            <p class="ml-3.5">205,456 miles</p>
                        </div>
                        <div class="flex pt-2">
                            <p class=" sec-black text-base">$30,500</p>
                            <div class="ml-auto  self-center">
                                <button
                                    type="button"
                                    class="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class=" similar-cars-holder p-3 mr-4 mb-5 lg:mb-0">
                        <img
                            class="br-5"
                            src="../assets/img/cars/tacoma.png"
                            alt="Tacoma"
                        />
                        <p class="pt-2 primary-black font-medium text-xs"></p>
                        <div class="flex pt-2">
                            <p class="flex items-center sec-black font-10">
                                {" "}
                                <span class="mr-1">
                                    <img
                                        src="../assets/img/vectors/red-location-beacon.svg"
                                        alt="location"
                                    />
                                </span>{" "}
                                Houston, Texas
                            </p>
                            <div class="ml-auto flex self-center">
                                <img
                                    class="img-fluid"
                                    src="../assets/img/vectors/red-date.svg"
                                    alt="date"
                                />
                                <p class="sec-black font-10 ml-1">
                                    {" "}
                                    Feb 22, 2020
                                </p>
                            </div>
                        </div>
                        <div class="flex font-11 primary-gray pt-1">
                            <p>2020</p>
                            <p class="ml-3.5">205,456 miles</p>
                        </div>
                        <div class="flex pt-2">
                            <p class=" sec-black text-base">$30,500</p>
                            <div class="ml-auto  self-center">
                                <button
                                    type="button"
                                    class="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                >
                                    Place bid
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center my-5">
                    <a href="#" class="primary-blue font-semibold text-xs">
                        Show More Vehicles
                    </a>
                </div>
            </section>
        </div>
    );
};

export default detail;
