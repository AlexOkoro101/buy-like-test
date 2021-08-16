import React, { useState } from "react";

const transaction = () => {
    const [state, setstate] = useState(1);
    const openForm = (evt, status) => {
        setstate(status);
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
            <div class="flex justify-center pt-16">
                <div class="mx-auto flex-wrap lg:flex-nowrap flex page-holder ">
                    <aside class="deposit-holder lg:h-screen px-4 md:px-2 lg:pl-24 lg:pr-9 pt-9 pb-4">
                        <p class="primary-color text-sm font-bold mb-3">
                            Make Deposit
                        </p>
                        <div class="grid grid-cols-6 lg:grid-cols-1 items-center  gap-6 md:gap-3 lg:gap-1 car-holder py-2.5">
                            <span class="col-span-3 inline-block overflow-hidden rounded-md">
                                <img
                                    class="w-full"
                                    src="./../assets/img/cars/benz.png"
                                    alt=""
                                />
                            </span>
                            <div class="col-span-3">
                                <p class="md:text-xs  lg:mt-3 primary-black font-medium font-10 uppercase">
                                    2015 MERCEDES-BENZ glk 30
                                </p>
                                <p class="primary-black font-medium py-1 font-11 uppercase">
                                    2,124 mi
                                </p>
                                <p class="primary-black font-medium font-11 uppercase">
                                    vin: SJTKPOLVAX123
                                </p>
                            </div>
                        </div>

                        <table class="min-w-full ">
                            <tbody>
                                <tr class="detail-row mb-2">
                                    <td class="sec-black font-10 font-semibold py-1.5">
                                        Trucking
                                    </td>
                                    <td class="font-10 primary-black font-normal py-1.5">
                                        $300
                                    </td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black font-10 font-semibold py-1.5">
                                        Shipping
                                    </td>
                                    <td class="font-10 primary-black font-normal py-1.5">
                                        $950
                                    </td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black font-10 font-semibold py-1.5">
                                        Clearing
                                    </td>
                                    <td class="font-10 primary-black font-normal py-1.5">
                                        $N2,000,000
                                    </td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black font-10 font-semibold py-1.5">
                                        Service Fee
                                    </td>
                                    <td class="font-10 primary-black font-normal py-1.5">
                                        $400
                                    </td>
                                </tr>

                                <tr class="detail-row mb-2 ">
                                    <td class="sec-black font-10 font-semibold py-1.5 total-border">
                                        Total
                                    </td>
                                    <td class="font-10 primary-black font-normal py-1.5 total-border">
                                        N46,000,000
                                    </td>
                                </tr>

                                <tr class="detail-row mb-2">
                                    <td class="sec-black font-10 font-semibold py-1.5">
                                        Deposit
                                    </td>
                                    <td class="font-10 primary-black font-normal py-1.5">
                                        $1,000
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </aside>

                    <section class=" px-3 lg:h-screen md:ml-5 lg:mx-12 lg:px-14 xl:px-28  ">
                        <div class="py-6 max-w-3xl mx-auto">
                            <div class="w-full flex uppercase ">
                                <div
                                    onClick={(e) => openForm(e, 1)}
                                    class="details-tab active flex-1 flex justify-center cursor-pointer"
                                >
                                    <p class="py-2.5">1 customer info</p>
                                </div>
                                <div
                                    onClick={(e) => openForm(e, 2)}
                                    class="details-tab cursor-pointer flex-1 flex justify-center font-semibold py-0.5 "
                                >
                                    <p class="py-2">2 deposit payment</p>
                                </div>
                                <div
                                    onClick={(e) => openForm(e, 3)}
                                    class="details-tab cursor-pointer flex-1 flex justify-center font-semibold py-0.5"
                                >
                                    <p class="py-2">3 confirmation</p>
                                </div>
                            </div>

                            <div class="mt-5">
                                {state === 1 && (
                                    <div
                                        class="tabcontent mt-5 "
                                        id="customer-info"
                                    >
                                        <div class="info-holder font-10 px-4 py-4 mb-3">
                                            <p class="font-semibold primary-color  ">
                                                Personal Details
                                            </p>

                                            <div class="grid grid-cols-6 gap-3 mt-3">
                                                <div class="col-span-6 lg:col-span-3">
                                                    <label
                                                        for="name"
                                                        class="block font-10 primary-color "
                                                    >
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Dare"
                                                        class="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                                    />
                                                </div>

                                                <div class=" col-span-6 lg:col-span-3 ">
                                                    <label
                                                        for="name"
                                                        class="block font-10 primary-color "
                                                    >
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Thomas"
                                                        class="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                                    />
                                                </div>

                                                <div class="col-span-6 lg:col-span-3 relative ">
                                                    <label
                                                        for="phone"
                                                        class="block font-10 primary-color "
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="+234 08181234567"
                                                        class="mt-1 block w-full info-text phone-number py-2 px-16  bg-white  focus:outline-none"
                                                    />
                                                    <div class="absolute left-7 bottom-3 cursor-pointer">
                                                        <img
                                                            src="./../assets/img/vectors/num-arrow.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="absolute left-12 bottom-0">
                                                        <img
                                                            src="./../assets/img/vectors/num-line.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-span-6 lg:col-span-3">
                                                    <label
                                                        for="email"
                                                        class="block font-10 primary-color "
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        placeholder="dare@thomas.com"
                                                        class="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="info-holder font-10 px-4 py-4 mb-3">
                                            <p class="font-semibold primary-color ">
                                                Delivery address
                                            </p>

                                            <div class="grid grid-cols-6 gap-3 mt-3">
                                                <div class=" col-span-6 ">
                                                    <label
                                                        for="lga"
                                                        class="block font-10 primary-color "
                                                    >
                                                        Country
                                                    </label>
                                                    <select
                                                        id="lga"
                                                        class="mt-1 block w-full info-select py-2 px-2  bg-white  focus:outline-none"
                                                    >
                                                        <option>Nigeria</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>
                                                <div class="col-span-6 lg:col-span-3">
                                                    <label
                                                        for="state"
                                                        class="block font-10 primary-color "
                                                    >
                                                        State
                                                    </label>
                                                    <select
                                                        id="state"
                                                        class="mt-1 block w-full info-select py-2 px-2  bg-white  focus:outline-none"
                                                    >
                                                        <option>Lagos</option>
                                                        <option>Abuja</option>
                                                        <option>Rivers</option>
                                                    </select>
                                                </div>

                                                <div class=" col-span-6 lg:col-span-3">
                                                    <label
                                                        for="lga"
                                                        class="block font-10 primary-color "
                                                    >
                                                        Local Govenrment Area
                                                    </label>
                                                    <select
                                                        id="lga"
                                                        class="mt-1 block w-full info-select py-2 px-2  bg-white  focus:outline-none"
                                                    >
                                                        <option>
                                                            Select Local
                                                            Government Area
                                                        </option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>

                                                <div class="col-span-6">
                                                    <label
                                                        for="lga"
                                                        class="block font-10 primary-color "
                                                    >
                                                        Street Address
                                                    </label>
                                                    <textarea
                                                        rows="2"
                                                        cols="1"
                                                        id="address"
                                                        class="mt-1 info-area block w-full py-2 px-2 focus:outline-none"
                                                        placeholder="Enter street address"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-center">
                                            <button
                                                type="button"
                                                class="uppercase focus:outline-none primary-btn text-white font-10 font-semibold mt-4 py-1.5 px-6"
                                            >
                                                Proceed
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {state === 2 && (
                                    <div class="tabcontent mt-5" id="deposit">
                                        <div class="info-holder font-10   py-4 pb-5 mb-3 ">
                                            <div class="flex justify-center px-4 ">
                                                <form class="w-full">
                                                    <p class="font-semibold primary-color ">
                                                        Bank Details
                                                    </p>
                                                    <div class="flex flex-col mb-4  mt-3">
                                                        <div class="col-span-6 lg:col-span-3 ">
                                                            <label
                                                                for="lga"
                                                                class="block font-10 primary-color "
                                                            >
                                                                Bank Name
                                                            </label>
                                                            <select
                                                                id="lga"
                                                                class="mt-1 block w-full info-select py-2 px-2  bg-white  focus:outline-none"
                                                            >
                                                                <option>
                                                                    Select your
                                                                    bank
                                                                </option>
                                                                <option>
                                                                    GT bank
                                                                </option>
                                                                <option>
                                                                    Kuda Bank
                                                                </option>
                                                            </select>
                                                        </div>

                                                        <div class="col-span-6 lg:col-span-3  mt-3">
                                                            <label
                                                                for="phone"
                                                                class="block font-10 primary-color "
                                                            >
                                                                Account number
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your account number"
                                                                pattern="^[0-9]*$"
                                                                class="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="flex flex-col mb-4">
                                                        <label
                                                            for="card-number"
                                                            class="font-10 primary-black pb-1.5"
                                                        >
                                                            Expiry Date
                                                        </label>

                                                        <div class="flex w-full">
                                                            <select class="card-select px-3 mr-2 w-24 focus:outline-none">
                                                                <option>
                                                                    Month
                                                                </option>
                                                            </select>

                                                            <select class="card-select px-3 mr-2 w-24 focus:outline-none">
                                                                <option>
                                                                    Year
                                                                </option>
                                                            </select>

                                                            <input
                                                                type="text"
                                                                class="focus:outline-none px-3 card-input w-24 mr-2"
                                                                pattern="^[0-9]*$"
                                                                placeholder="CVV"
                                                            />
                                                            <img src="../assets/img/vectors/tool-tip.svg" />
                                                        </div>
                                                    </div>
                                                    <div class="flex justify-center mt-5">
                                                        <button
                                                            type="button"
                                                            class="focus:outline-none primary-btn make-payment font-semibold tracking-wider  text-white font-10 "
                                                        >
                                                            MAKE PAYMENT
                                                        </button>
                                                    </div>

                                                    <div class="text-center py-4">
                                                        <p class="font-10 primary-black">
                                                            OR
                                                        </p>
                                                    </div>

                                                    <div class="flex  justify-center items-center">
                                                        <button
                                                            type="button"
                                                            class="focus:outline-none text-sm  paystack-btn font-medium primary-color flex justify-center items-center"
                                                        >
                                                            Pay with
                                                            <img
                                                                src="../assets/img/paystack-logo.png"
                                                                class="ml-2"
                                                                alt="Paystack"
                                                            />
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="info-holder font-10   py-4 pb-5 mb-3 ">
                                            <div class="transfer-payment px-4">
                                                <p class="text-xs font-semibold">
                                                    Or make transfer payment
                                                    using these details
                                                </p>
                                                <table class="mt-2 min-w-full">
                                                    <tbody class="">
                                                        <tr>
                                                            <th class="text-left">
                                                                Bank Name
                                                            </th>
                                                            <th class="text-left">
                                                                Account Number
                                                            </th>
                                                            <th class="text-left">
                                                                Account Name
                                                            </th>
                                                            <th class="text-left">
                                                                REF
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Name of Bank
                                                            </td>
                                                            <td>0123456789</td>
                                                            <td>0123456789</td>
                                                            <td>
                                                                SJTKPOLVAX123
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {state === 3 && (
                                    <div
                                        class="confirm-holder tabcontent "
                                        id="confirmation"
                                    >
                                        <div class="flex justify-center mt-16">
                                            <img src="../assets/img/vectors/check.svg" />
                                        </div>

                                        <div class="text-center mt-8">
                                            <p class="primary-color text-sm font-semibold">
                                                Your payment has been sent
                                            </p>
                                            <p class="pt-4 font-10 sec-black px-5 leading-5 lg:px-20">
                                                Your confirmation number is
                                                12A34A56C. You will be sent a
                                                link to pay the balance after
                                                the bid is won.
                                            </p>
                                            <p class="pt-4 font-10 sec-black px-5 leading-5 lg:px-20">
                                                You can increase your chances of
                                                getting a car by selecting
                                                multiple cars for us to bid on
                                                for you at no extra cost.
                                            </p>
                                        </div>

                                        <div class="flex justify-center mt-5 mb-16">
                                            <button
                                                type="button"
                                                class="focus:outline-none primary-btn px-4 font-10 text-white font-medium py-1.5"
                                            >
                                                ADD MORE CARS
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default transaction;
