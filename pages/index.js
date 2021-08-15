import React, { useEffect } from "react";
import Meta from "../src/components/Head/Meta";
import anime from "animejs";

const Home = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Easy Buy Animation here
            var easyBuyTimeline = anime.timeline({
                autoplay: true,
            });

            easyBuyTimeline.add({
                targets: ".rover",
                translateX: [-70, 0],
                easing: "easeInOutQuad",
                duration: 800,
            });

            easyBuyTimeline.add(
                {
                    targets: ".subtract",
                    opacity: [0, 1],
                    translateY: [70, 0],
                    easing: "easeInOutQuad",
                    duration: 1000,
                },
                "+=100"
            );

            easyBuyTimeline.add(
                {
                    targets: ".sold",
                    opacity: [0, 1],
                    easing: "easeInOutQuad",
                    duration: 1000,
                },
                "+=100"
            );

            // var easyBuywaypoint = new Waypoint({
            //   element: document.getElementById('easyBuywaypoint'),
            //   handler: function () {
            //     easyBuyTimeline.restart();
            //   },
            //   offset: 250,
            // });

            //Wholesale animations here
            var wholesaleTimeline = anime.timeline({
                autoplay: true,
            });

            wholesaleTimeline.add({
                targets: ".red__ellipse",
                // direction: 'alternate',
                // loop: true,
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 1200,
            });

            wholesaleTimeline.add(
                {
                    targets: ".audi",
                    translateX: -30,
                    easing: "linear",
                    duration: 1000,
                },
                200
            );

            // var Wholesalewaypoint = new Waypoint({
            //   element: document.getElementById('Wholesalewaypoint'),
            //   handler: function () {
            //     wholesaleTimeline.restart();
            //   },
            //   offset: 250,
            // });

            // filteredCarsTimeline Animation here
            var filteredCarsTimeline = anime.timeline({
                autoplay: true,
            });

            filteredCarsTimeline.add({
                targets: ".purple__ellipse",
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 1200,
            });

            filteredCarsTimeline.add(
                {
                    targets: ".tesla",
                    translateX: 30,
                    easing: "linear",
                    duration: 1000,
                },
                200
            );

            // var filteredwaypoint = new Waypoint({
            //   element: document.getElementById('filteredwaypoint'),
            //   handler: function () {
            //     filteredCarsTimeline.restart();
            //   },
            //   offset: 250,
            // });

            var vehicles = [
                {
                    title: "Range rover",
                    image: "./assets/img/hero-range.svg",
                    price: "$20,000",
                    year: "2019",
                },
                {
                    title: "Audi",
                    image: "./assets/img/audi.svg",
                    price: "$15,000",
                    year: "2020",
                },
            ];

            // Hero Animations here

            var heroTimeline = anime.timeline({
                loop: true,
                autoplay: true,
            });

            heroTimeline.add({
                targets: "progress",
                value: 100,
                easing: "linear",
                autoplay: true,
                duration: 3800,
            });

            heroTimeline.add(
                {
                    targets: ".hero-image",
                    translateX: -35,
                    easing: "linear",
                    duration: 1240,
                },
                0
            );

            heroTimeline.add({
                targets: [
                    "progress",
                    ".price-mileage-div ",
                    ".car-details-div",
                    ".hero-btns",
                ],
                opacity: 0,
                easing: "linear",
            });

            heroTimeline.add(
                {
                    targets: [".hero-image", ".car__year", "car__price"],
                    opacity: 0,
                    easing: "linear",
                    complete: function () {
                        let image = document.querySelector(".hero-image ");
                        let title = document.querySelector("#car__name");
                        let year = document.querySelector("#car__year");
                        let price = document.querySelector(".car__price");

                        for (let i = 0; i < vehicles.length; i++) {
                            image.src = vehicles[i].image;
                            title.innerHTML = vehicles[i].title;
                            year.innerHTML = vehicles[i].year;
                            price.innerHTML = vehicles[i].price;
                        }
                    },
                },
                "+=5"
            );

            // Button controllers here
            const next = () => {
                //SHould track array and move to next Item then do the below
                heroTimeline.restart;
            };

            const previous = () => {
                //SHould track array and move to previous Item then do the below
                heroTimeline.restart;
            };
        }
    });

    return (
        <section>
            <Meta />
            <main>
                {/* Hero section here */}
                <section className="Hero__section mt-0 bg-gray-700 pt-20  ">
                    {/* Hero Text here */}
                    <div className="text-center pt-10">
                        <h1 className="text-3xl  lg:text-5xl primary-red font-bold hero-text ">
                            WHAT CAR ARE YOU LOOKING FOR? <br />{" "}
                            <span className="font-medium hero__sub__text text-3xl lg:text-4xl ">
                                LET’S HELP YOU FIND IT
                            </span>{" "}
                        </h1>
                    </div>
                    {/* Hero Image here */}
                    <div className="flex mb-24 flex-wrap  justify-center lg:justify-end 2xl:justify-center lg:flex-nowrap md:flex-nowrap mt-4 pb-24 ">
                        <div>
                            <img
                                src="./assets/img/hero-range.svg"
                                alt="Hero-Image "
                                className="hero-image "
                            />
                            {/* <img src=" " alt="Hero-Image " class="hero-image "> */}
                        </div>
                        <div className="hero__holder p-4 mt-3 mx-2 lg:ml-10 ">
                            <div className="flex ">
                                {/* Progress bar here */}
                                <div className=" w-1/2 ">
                                    <progress value={10} max={100} />
                                </div>
                                {/* Controller here */}
                                <div className="ml-auto hero-btns">
                                    <button
                                        type="button "
                                        className=" hero__btn focus:outline-none py-1 px-2 mx-3 "
                                        id="prev-btn"
                                        onClick={() => console.log("Prev")}
                                    >
                                        <img
                                            src="./assets/img/vectors/left-arrow.svg "
                                            alt="arrow "
                                        />
                                    </button>
                                    <button
                                        type="button "
                                        className=" hero__btn focus:outline-none py-1 px-2"
                                        id="next-btn"
                                        onClick={() => console.log("Next")}
                                    >
                                        <img
                                            src="./assets/img/vectors/right-arrow.svg "
                                            alt="arrow "
                                        />
                                    </button>
                                </div>
                            </div>
                            {/* Car details here */}
                            <div className="primary-color car-details-div text-base mt-1 ">
                                <p className="font-bold " id="car__name">
                                    RANGE ROVER SPORT
                                </p>
                                <p className="font-normal" id="car__year">
                                    2019
                                </p>
                            </div>
                            {/* Price & milage details here */}
                            <div className="primary-color flex mt-3 price-mileage-div ">
                                <div className="primary-color ">
                                    <h5 className="font-medium mileage ">
                                        2,124 mi
                                    </h5>
                                    <p className="font-bold range ">RANGE</p>
                                </div>
                                {/* dividing line here */}
                                <div className="vl mx-3 " />
                                {/* Price here */}
                                <div>
                                    <h3 className="primary-red font-extrabold car__price">
                                        $111,900
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section
                        style={{ background: "#E1E1E1" }}
                        class=" px-2 lg:px-20 "
                    >
                        <div class=" request__holder relative w-full py-16  ">
                            <form action="">
                                <div class="flex  flex-wrap justify-center ">
                                    <div class="flex flex-col mr-3 pb-5 w-full md:w-52 lg:w-52">
                                        <label
                                            for="make "
                                            class="primary-black font-semibold text-sm "
                                        >
                                            Select Make
                                        </label>
                                        <select
                                            name=" "
                                            id="make "
                                            class="form__control px-1.5 w-full font-13 focus:outline-none "
                                        >
                                            <option value=" ">
                                                Range Rover
                                            </option>
                                        </select>
                                    </div>

                                    <div class="flex flex-col mx-3 xl:ml-1 lg:ml-3 pb-5 w-full md:w-52 lg:w-52">
                                        <label
                                            for="model "
                                            class="primary-black font-semibold text-sm "
                                        >
                                            Select Model
                                        </label>
                                        <select
                                            name=" "
                                            id="model "
                                            class="form__control px-1.5 w-full font-13 focus:outline-none "
                                        >
                                            <option value=" ">Evoque</option>
                                        </select>
                                    </div>

                                    <div class="flex flex-col ml-1 xl:ml-1 lg:mx-3 pb-5 w-full md:w-52 lg:w-52">
                                        <label
                                            for="year "
                                            class="primary-black font-semibold text-sm "
                                        >
                                            Select Year
                                        </label>
                                        <select
                                            name=" "
                                            id="year "
                                            class="form__control px-1.5 w-full font-13 focus:outline-none "
                                        >
                                            <option value=" ">2020</option>
                                        </select>
                                    </div>

                                    <div class="flex flex-col ml-1 xl:ml-1 lg:mx-3 pb-5 w-full md:w-52 lg:w-52">
                                        <label
                                            for="range "
                                            class="primary-black font-semibold text-sm "
                                        >
                                            Select Price Range
                                        </label>
                                        <select
                                            name=" "
                                            id="range "
                                            class="form__control w-full px-1.5 font-13 focus:outline-none "
                                        >
                                            <option value=" ">
                                                $150.000 - $200,000
                                            </option>
                                        </select>
                                    </div>

                                    <div class="flex-col flex mt-4 pt-1 ml-1 xl:ml-1 lg:ml-3 pb-5 w-full md:w-40 lg:w-40">
                                        <button class="estimate__btn uppercase focus:outline-none font-semibold">
                                            search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    {/*  */}
                    <section class=" filtered__section " id="number-offset">
                        <div class="relative px-2 py-3 lg:px-20 ">
                            <div class="flex flex-wrap lg:flex-nowrap md:flex-nowrap flex-col-reverse md:flex-row lg:flex-row justify-between pt-10 pb-20 lg:pb-32 ">
                                <div
                                    class="purple__ellipse mt-5 lg:mt-0 "
                                    id="filteredwaypoint"
                                >
                                    <img
                                        src="./assets/img/tesla.svg "
                                        class="pt-7 tesla"
                                        alt="Tesla "
                                    />
                                </div>
                                <div class=" w-full md:w-1/2 xl:w-2/5 ">
                                    <div>
                                        <h3 class="primary-red line-60 font-medium text-3xl lg:text-4xl ">
                                            {" "}
                                            CLEAN TITLE CARS
                                            <span class="primary-color rem4 block font-semibold ">
                                                FILTERED <br /> FOR YOU
                                            </span>
                                        </h3>
                                        <hr class="orange-underline w-9 m-1 " />
                                    </div>
                                    <p class="pt-4 text-lg filtered__text font-normal w-10/12 ">
                                        Choose from our amazing selection of
                                        clean title cars carefully chosen to
                                        meet your exquisite taste.
                                    </p>
                                </div>
                            </div>
                            <div class=" absolute bottom-0 right-0 hidden lg:block ">
                                <img
                                    src="./assets/img/vectors/oval-red.svg "
                                    alt="oval "
                                />
                            </div>
                        </div>
                    </section>
                    {/*  */}
                    <section class="wholesale__section pb-12 px-2 lg:px-20 ">
                        <div class="flex flex-wrap lg:flex-nowrap md:flex-nowrap justify-between pt-10 ">
                            <div class="w-full md:w-1/2 xl:w-2/5 ">
                                <div>
                                    <h3 class="primary-red line-60 font-medium text-3xl lg:text-4xl ">
                                        {" "}
                                        WHOLESALE PRICE{" "}
                                        <span class="primary-color block rem4 font-semibold ">
                                            ON CLEAN CARS
                                        </span>{" "}
                                    </h3>
                                    <hr class="orange-underline w-9 m-1 " />
                                </div>
                                <p class="pt-4 text-lg filtered__text font-normal w-10/12 ">
                                    Buy clean as new cars at unbeatable
                                    wholesale prices.{" "}
                                </p>
                            </div>
                            <div class="red__ellipse mt-5 lg:mt-0 ">
                                <img
                                    src="./assets/img/audi.svg "
                                    class="pt-10 "
                                    alt="Audi "
                                />
                            </div>
                        </div>
                    </section>
                    {/*  */}
                    <section class="easybuy__section ">
                        <div class="relative lg:pr-20 ">
                            <div class="flex flex-wrap lg:flex-nowrap md:flex-nowrap flex-col-reverse md:flex-row lg:flex-row justify-between pt-10 pb-20 lg:pb-32 ">
                                <div class="relative " id="easyBuywaypoint">
                                    <img
                                        src="./assets/img/land-rover.svg "
                                        alt="Land Rover "
                                        class="lg:pt-5 md:pt-10 pt-12 rover"
                                    />
                                    <img
                                        src="./assets/img/vectors/Subtract.svg "
                                        alt="anchor "
                                        class="subtract absolute "
                                    />
                                    <img
                                        src="./assets/img/vectors/sold.svg "
                                        alt="sold "
                                        class="sold absolute "
                                    />
                                </div>
                                <div class=" w-full md:w-1/2 xl:w-2/5 lg:px-0 px-7 ">
                                    <div>
                                        <h3 class="primary-red line-60 font-medium text-3xl lg:text-4xl ">
                                            {" "}
                                            BUY WITH EASE <br />{" "}
                                            <span class="primary-color rem4 font-semibold ">
                                                FROM ANYWHERE
                                            </span>{" "}
                                        </h3>
                                    </div>
                                    <p class="pt-4 text-lg filtered__text font-normal w-10/12 ">
                                        Visit our showroom from anywhere and
                                        complete a request while we handle the
                                        rest.
                                    </p>
                                </div>
                            </div>
                            <div class=" absolute bottom-0 right-0 hidden lg:block ">
                                <img
                                    src="./assets/img/vectors/oval-grey.svg "
                                    alt="oval "
                                />
                            </div>
                        </div>
                    </section>
                    {/*  */}
                    <section class="works__section pb-12 ">
                        <div class="px-2 lg:px-20 pt-16 ">
                            <div class="text-center ">
                                <hr class="red-underline w-20 m-auto pb-3 " />
                                <h4 class="font-bold primary-color text-2xl ">
                                    HOW IT WORKS
                                </h4>
                            </div>

                            <div class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between pt-12 ">
                                <div class="works__holder px-8 pt-10 pb-16 mb-3 md:mx-3 ">
                                    <img
                                        src="./assets/img/vectors/search-icon.svg "
                                        alt="search-icon "
                                    />
                                    <h5 class="font-bold primary-red text-lg py-3 ">
                                        Search for a car{" "}
                                    </h5>
                                    <p class="filtered__text text-sm font-normal ">
                                        Use the filters to find what you’re
                                        looking for. Green light and red light
                                        options available.
                                    </p>
                                </div>
                                <div class="works__holder px-8 pt-10 pb-16 mb-3 ">
                                    <img
                                        src="./assets/img/vectors/offer-icon.svg "
                                        alt="offer-icon "
                                    />
                                    <h5 class="font-bold primary-red text-lg py-3 ">
                                        Make an offer
                                    </h5>
                                    <p class="filtered__text text-sm font-normal ">
                                        You can choose suggested price or make
                                        an offer. If it’s a buy now car, click
                                        to proceed with the buy now.
                                    </p>
                                </div>
                                <div class="works__holder px-8 pt-10 pb-16 mb-3 md:mx-3 ">
                                    <img
                                        src="./assets/img/vectors/deposit-icon.svg "
                                        alt="deposit-icon "
                                    />
                                    <h5 class="font-bold primary-red text-lg py-3 ">
                                        Make deposit
                                    </h5>
                                    <p class="filtered__text text-sm font-normal ">
                                        Choose delivery location, make deposit
                                        and sign online paper work.{" "}
                                    </p>
                                </div>
                                <div class="works__holder px-8 pt-10 pb-16 mb-3 ">
                                    <img
                                        src="./assets/img/vectors/handle-icon.svg "
                                        class="pt-6 "
                                        alt="handle-icon "
                                    />
                                    <h5 class="font-bold primary-red text-lg py-3 ">
                                        We handle the rest
                                    </h5>
                                    <p class="filtered__text text-sm font-normal ">
                                        We bid on your selected car, after which
                                        you make final payment and then we
                                        deliver the car to you or you pick up.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <button
                                type="button"
                                class="focus:outline-none text-white text-sm primary-btn px-6 h-9 font-semibold"
                            >
                                SEE HOW IT WORKS
                            </button>
                        </div>
                    </section>
                    {/*  */}
                    <section>
                        <div class="white__bg px-7 md:px-10 lg:px-20 xl:px-40">
                            <div class="py-14">
                                <div class="feature__holder ">
                                    <div class="flex flex-wrap md:flex-nowrap lg:flex-nowrap pt-4">
                                        <div class="w-full lg:w-1/2">
                                            <div class="flex items-center features__bg active px-5 py-2">
                                                <div class="">
                                                    <h5 class="feature__header active font-medium text-lg">
                                                        Green Light Car
                                                    </h5>
                                                </div>
                                                <div class="ml-auto">
                                                    <svg
                                                        width="12"
                                                        height="22"
                                                        viewBox="0 0 12 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.5 2L10.5 11L1.5 20"
                                                            stroke="#1F2A53"
                                                            stroke-opacity="0.75"
                                                            stroke-width="2.75"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="flex items-center features__bg px-5 py-2">
                                                <div class="">
                                                    <h5 class="feature__header font-medium text-lg">
                                                        Red Light Car
                                                    </h5>
                                                </div>
                                                <div class="ml-auto">
                                                    <svg
                                                        width="12"
                                                        height="22"
                                                        viewBox="0 0 12 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.5 2L10.5 11L1.5 20"
                                                            stroke="#1F2A53"
                                                            stroke-opacity="0.75"
                                                            stroke-width="2.75"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="flex items-center features__bg px-5 py-2">
                                                <div class="">
                                                    <h5 class="feature__header font-medium text-lg">
                                                        Blue Light Car
                                                    </h5>
                                                </div>
                                                <div class="ml-auto">
                                                    <svg
                                                        width="12"
                                                        height="22"
                                                        viewBox="0 0 12 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.5 2L10.5 11L1.5 20"
                                                            stroke="#1F2A53"
                                                            stroke-opacity="0.75"
                                                            stroke-width="2.75"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="flex items-center features__bg px-5 py-2">
                                                <div class="">
                                                    <h5 class="feature__header font-medium text-lg">
                                                        Odometer
                                                    </h5>
                                                </div>
                                                <div class="ml-auto">
                                                    <svg
                                                        width="12"
                                                        height="22"
                                                        viewBox="0 0 12 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.5 2L10.5 11L1.5 20"
                                                            stroke="#1F2A53"
                                                            stroke-opacity="0.75"
                                                            stroke-width="2.75"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="flex items-center features__bg px-5 py-2">
                                                <div class="">
                                                    <h5 class="feature__header font-medium text-lg">
                                                        Read more
                                                    </h5>
                                                </div>
                                                <div class="ml-auto">
                                                    <svg
                                                        width="12"
                                                        height="22"
                                                        viewBox="0 0 12 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.5 2L10.5 11L1.5 20"
                                                            stroke="#1F2A53"
                                                            stroke-opacity="0.75"
                                                            stroke-width="2.75"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pt-6 px-8 pb-3">
                                            <h5 class="primary-blue font-semibold text-lg">
                                                Green Light Car
                                            </h5>
                                            <p class="pt-4 filtered__text text-base font-normal">
                                                The vehicle is sold ride and
                                                drive. The vehicle is sold
                                                needing less than $700.00 in one
                                                single repair. The buyer has
                                                until 4:00pm the next day to
                                                report any problems. The vehicle
                                                is sold ride and drive.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*  */}
                    <section class="bg-white px-7 md:px-10 lg:px-20 xl:px-40 ">
                        <div class="text-center pt-20 lg:pt-16 ">
                            <hr class="orange-underline w-20 m-auto pb-7 " />
                            <h4 class="primary-color font-bold text-2xl ">
                                FREQUENTLY ASKED QUESTIONS
                            </h4>
                        </div>

                        <div class="flex flex-wrap md:flex-nowrap mt-10">
                            <div class=" w-full lg:w-1/3 mb-5">
                                <h4 class="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li class="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-1/3 mb-5">
                                <h4 class="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li class="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>

                            <div class=" w-full lg:w-1/3 mb-5">
                                <h4 class="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li class="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex flex-wrap md:flex-nowrap mt-0 md:mt-10 lg:mt-10">
                            <div class=" w-full lg:w-1/3 mb-5">
                                <h4 class="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li class="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-1/3 mb-5">
                                <h4 class="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li class="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>
                            <div class=" w-full lg:w-1/3 mb-5">
                                <h4 class="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li class="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li class="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>

                {/* Filtered Cars section here */}

                {/* Wholesale section here */}

                {/* Easy Buy Section here */}

                {/* Car features section here */}
            </main>
        </section>
    );
};

export default Home;
