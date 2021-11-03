import React, { useState, useEffect } from "react";
import Meta from "../src/components/Head/Meta";
import anime from "animejs";
import Testimonials from "../src/components/Layout/Testimonials";
import HowItWorks from "../src/components/Layout/HowItWorks";
import CarFeatures from "../src/components/Layout/CarFeatures";
import { connect } from "react-redux";
import { getCars } from "../redux/actions/carsAction";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { searchTerm, getCategory, getMakes } from "../redux/actions/carsAction";

//
const Home = ({ getCars, cars, makes, getMakes }) => {
    const [isComponentFullyMounted, setIsComponentFullyMounted] =
        useState(false);

    useEffect(() => {
        setIsComponentFullyMounted(true);
    }, []);

    useEffect(() => {
        if (isComponentFullyMounted === false) {
            return;
        } else {
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

                //   var easyBuywaypoint = new Waypoint({
                //     element: document.getElementById('easyBuywaypoint'),
                //     handler: function () {
                //       easyBuyTimeline.restart();
                //     },
                //     offset: 250,
                //   });

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

                //   var Wholesalewaypoint = new window.Waypoint({
                //     element: document.getElementById('Wholesalewaypoint'),
                //     handler: function () {
                //       wholesaleTimeline.restart();
                //     },
                //     offset: 250,
                //   });

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

                //   var filteredwaypoint = new window.Waypoint({
                //     element: document.getElementById('filteredwaypoint'),
                //     handler: function () {
                //       filteredCarsTimeline.restart();
                //     },
                //     offset: 250,
                //   });

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
                                if (image) {
                                    image.src = vehicles[i].image;
                                }
                                if (title) {
                                    title.innerHTML = vehicles[i].title;
                                    year.innerHTML = vehicles[i].year;
                                    price.innerHTML = vehicles[i].price;
                                }
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
        }
    });

    const [car, setCars] = useState([]);
    const [images, setImages] = useState(cars);
    const [fetchModel, setmodel] = useState(false);
    const [carMakes, setcarMakes] = useState(makes);
    const [carModels, setcarModels] = useState([]);

    const [years, setYears] = useState(() => {
        let year = 2005;
        const currentYear = new Date().getFullYear() + 2;
        let validVehicleYears = [];
        while (year <= currentYear) {
            validVehicleYears.push(year++);
        }
        return validVehicleYears;
    });
    const [seconds, setSeconds] = useState(0);
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cars && cars.length <= 0) {
            getCars();
            getMakes();
        }
        if (cars && cars.length > 0) {
            console.log("two");
            setImages(cars);
        }
        if (makes && makes.length) {
            setcarMakes(makes);
            getVehicleModels();
            console.log("three");
        }
    }, [cars]);
    const handleMake = (e) => {
        let data = makes.find(
            (ele) => ele.name.toLowerCase() === e.toLowerCase()
        );
        setcarModels(data ? data.models : []);
    };
    const getVehicleModels = () => {
        setcarModels(makes[0].models);
    };

    const { register, handleSubmit } = useForm();

    const router = useRouter();

    const onSubmit = (data) => {
        dispatch(searchTerm(data));
        router.push("/search");
    };

    const onCategory = (data) => {
        let options = { bodyType: data };
        dispatch(getCategory(options));
        router.push("/search");
    };

    const addImage = (params) => {
        if (params.images && params.images.length <= 0) {
            return null;
        }
        if (
            params.images &&
            params.images.length > 0 &&
            params.images[0].image_smallUrl
        ) {
            return <img src={params.images[0].image_largeUrl} alt="hello" />;
        }
    };
    //
    //
    return (
        <>
            <Meta title={"Buylike Dealers Home page"} />

            <main>
                {/* Hero section here */}
                <section className="Hero__section pt-5 px-2 lg:px-28 w-full">
                    {/* Hero Text here */}
                    <div className="text-center pt-10">
                        <h1 className=" text-3xl md:text-4xl lg:text-4xl pt-12 red font-bold ">
                            WHAT CAR ARE YOU LOOKING FOR? <br />
                            <span className="font-normal tertiary-gray text-2xl ">
                                LET’S HELP YOU FIND IT
                            </span>{" "}
                        </h1>
                    </div>

                    {/* Hero Image here */}
                    <div className="flex flex-wrap justify-center lg:justify-end 2xl:justify-center lg:flex-nowrap md:flex-nowrap mt-4 pb-24 ">
                        <div>
                            <img
                                src="./assets/img/hero-mercedes.svg"
                                alt="Hero-Image "
                                className="hero-image "
                            />
                            {/* <img src=" " alt="Hero-Image " className="hero-image "> */}
                        </div>
                        <div className="hero__holder p-7 mt-3.5 lg:ml-10 ">
                            <div className="flex ">
                                {/* Progress bar here */}
                                <div className=" w-1/2 ">
                                    <progress value={10} max={100} />
                                </div>
                                {/* Controller here */}
                                <div className="ml-auto hero-btns">
                                    <button
                                        type="button "
                                        className="  focus:outline-none "
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
                                        className="  focus:outline-none ml-3"
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
                            <div className="primary-color car-details-div text-base ">
                                <p className="font-bold " id="car__name">
                                    MERCEDES BENZ
                                </p>
                                <p className="font-medium" id="car__year">
                                    2019
                                </p>
                            </div>
                            {/* Price & milage details here */}
                            <div className="primary-color flex mt-1.5 price-mileage-div ">
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
                </section>

                {/* Request Section Here */}
                <section className="relative request__estimate px-2 lg:px-28 w-full">
                    <div className=" request__holder relative w-full p-12 mt-8 lg:mt-0">
                        {/* FOrm Here */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-wrap md:flex-nowrap  justify-between ml-7">
                                {/* Select Make Here */}
                                <div className="relative flex flex-col  pb-5 w-full">
                                    <svg
                                        class=" absolute top-6 right-0 m-4 pointer-events-none"
                                        width="15"
                                        height="10"
                                        viewBox="0 0 15 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line
                                            x1="1.41421"
                                            y1="1.8"
                                            x2="7.2"
                                            y2="7.58578"
                                            stroke="#0D101B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                        <line
                                            x1="13.2002"
                                            y1="2.01421"
                                            x2="7.41441"
                                            y2="7.8"
                                            stroke="#0D101B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>

                                    <label
                                        htmlFor="year"
                                        className="primary-black font-semibold text-sm "
                                    >
                                        Select Make
                                    </label>
                                    <select
                                        name=" "
                                        id="make"
                                        className="form__control  w-full focus:outline-none mt-1"
                                        {...register("make")}
                                        onChange={(e) =>
                                            handleMake(e.target.value)
                                        }
                                    >
                                        <option
                                            value=""
                                            readOnly
                                            disabled
                                            selected
                                        >
                                            Select
                                        </option>
                                        <option value="">All</option>
                                        {carMakes &&
                                            carMakes?.map((x, id) => (
                                                <option
                                                    key={id}
                                                    value={x?.name}
                                                >
                                                    {x?.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                {/* Select Model Here */}
                                <div className="relative flex flex-col ml-0 lg:ml-4  pb-5 w-full ">
                                    <svg
                                        class=" absolute top-6 right-0 m-4 pointer-events-none"
                                        width="15"
                                        height="10"
                                        viewBox="0 0 15 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line
                                            x1="1.41421"
                                            y1="1.8"
                                            x2="7.2"
                                            y2="7.58578"
                                            stroke="#0D101B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                        <line
                                            x1="13.2002"
                                            y1="2.01421"
                                            x2="7.41441"
                                            y2="7.8"
                                            stroke="#0D101B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>

                                    <label
                                        htmlFor="model "
                                        className="primary-black font-semibold text-sm "
                                    >
                                        Select Model
                                    </label>
                                    {fetchModel === true ? (
                                        <select
                                            name=" "
                                            id="model"
                                            className="form__control  w-full focus:outline-none mt-1"
                                        >
                                            <option value="" selected disabled>
                                                Fetching model
                                            </option>
                                        </select>
                                    ) : (
                                        <select
                                            name=" "
                                            id="model"
                                            className="form__control  w-full focus:outline-none mt-1"
                                            {...register("model")}
                                        >
                                            <option value="" selected disabled>
                                                Select
                                            </option>
                                            <option value="">All</option>
                                            {carModels.map((x, id) => (
                                                <option
                                                    key={id}
                                                    value={x?.name}
                                                >
                                                    {x?.name}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>

                                {/* Select Year Here */}
                                <div className="relative flex flex-col ml-0 lg:ml-4 pb-5 w-full ">
                                    <label className="primary-black font-semibold text-sm ">
                                        Select Year
                                    </label>

                                    <svg
                                        class=" absolute top-6 right-0 m-4 pointer-events-none"
                                        width="15"
                                        height="10"
                                        viewBox="0 0 15 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line
                                            x1="1.41421"
                                            y1="1.8"
                                            x2="7.2"
                                            y2="7.58578"
                                            stroke="#0D101B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                        <line
                                            x1="13.2002"
                                            y1="2.01421"
                                            x2="7.41441"
                                            y2="7.8"
                                            stroke="#0D101B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>

                                    <select
                                        id="year"
                                        {...register("year")}
                                        className="form__control  w-full focus:outline-none mt-1"
                                    >
                                        <option value="" selected disabled>
                                            Select
                                        </option>
                                        <option value="">All</option>
                                        {years.map((x) => (
                                            <option key={x} value={x}>
                                                {x}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Search Btn  Here */}
                                <div className="flex flex-col mt-5 ml-0 lg:ml-5 pb-5 w-full ">
                                    <button
                                        type="submit"
                                        className="lg:w-60 estimate__btn uppercase focus:outline-none font-semibold flex items-center justify-center mt-1 w-full"
                                    >
                                        search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                {/*  */}
                {/* <section className="pb-16 px-2 w-full lg:px-20 ">
                        <div className="mt-20 mb-12">
                            <hr className="orange-underline w-20 m-auto pb-4 " />
                            <h5 className="font-semibold primary-color text-center text-xl ">
                                {" "}
                                SEARCH A CATEGORY{" "}
                            </h5>
                        </div>
                        {images && (
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                responsive={data}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={1500}
                                keyBoardControl={true}
                                customTransition="all .7"
                                transitionDuration={1000}
                                containerclassName="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListclassName="custom-dot-list-style"
                                itemclassName="carousel-item-padding-40-px"
                            >
                                {images.length > 0 &&
                                    images.map((ele) => (
                                        <div key={ele.VIN}>
                                            <div className="car__holder flex my-3 flex-col justify-center px-4 pt-4 mb-5 lg:mb-0 md:mb-0 pb-3 ">
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() => {
                                                        dispatch(
                                                            carDetail(ele)
                                                        ),
                                                            router.push({
                                                                pathname:
                                                                    "/search/" +
                                                                    ele.VIN,
                                                            });
                                                    }}
                                                >
                                                    {addImage(ele)}
                                                </div>
                                                <div className="text-center text-xs pt-3 ">
                                                    <p
                                                        className="font-semibold primary-color "
                                                        style={{
                                                            height: "50px",
                                                        }}
                                                    >
                                                        {ele?.vehicleName
                                                            ? ele?.vehicleName
                                                            : `${
                                                                  ele?.make +
                                                                  " " +
                                                                  "" +
                                                                  "" +
                                                                  ele?.model
                                                              }`}
                                                    </p>
                                                    <a
                                                        href="# "
                                                        className="primary-red font-bold pt-5 "
                                                        onClick={() => {
                                                            dispatch(
                                                                carDetail(ele)
                                                            ),
                                                                router.push({
                                                                    pathname:
                                                                        "/search/" +
                                                                        ele.VIN,
                                                                });
                                                        }}
                                                    >
                                                        SEE MORE
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </Carousel>
                        )}
                        <div className="text-center mt-10 ">
                            <button
                                type="button "
                                className="estimate__btn focus:outline-none font-semibold px-4 "
                            >
                                SEE ALL VEHICLES
                            </button>
                        </div>
                    </section> */}

                {/* <!-- search a Category section here --> */}
                <section className="w-full pb-14 px-2 lg:px-28 ">
                    <div className="mt-14 ">
                        <hr className="orange-underline w-20  m-auto pb-4 " />
                        <h5 className="font-semibold primary-color text-center text-xl ">
                            {" "}
                            SEARCH A CATEGORY{" "}
                        </h5>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap md:justify-around 2xl:justify-center mt-12 ">
                        {/* <!-- Hatchback here --> */}
                        <div className="car__holder w-52 px-6 mb-5 md:mb-0 pt-6 mr-4 lg:mr-0">
                            <div className="h-12 m-auto">
                                <img
                                    src="./assets/img/hatchback.svg "
                                    alt="Hatchback "
                                    className="object-contain"
                                />
                            </div>

                            <div className="text-center text-sm pt-7 ">
                                <p className="font-semibold primary-color ">
                                    Hatchbacks
                                </p>
                                <a
                                    className="primary-red font-medium  pt-2 cursor-pointer"
                                    onClick={() => onCategory("hatchback")}
                                >
                                    VIEW MORE
                                </a>
                            </div>
                        </div>

                        {/* <!-- Sedans here --> */}
                        <div className="car__holder w-52 px-6 mb-5 md:mb-0 pt-6 ">
                            <div className="h-12 m-auto">
                                <img
                                    src="./assets/img/sedans.svg "
                                    alt="Sedans"
                                    className="object-contain"
                                />
                            </div>

                            <div className="text-center text-sm pt-7 ">
                                <p className="font-semibold primary-color ">
                                    Sedans
                                </p>
                                <a
                                    className="primary-red font-medium  pt-2 cursor-pointer"
                                    onClick={() => onCategory("sedan")}
                                >
                                    VIEW MORE
                                </a>
                            </div>
                        </div>

                        {/* <!-- Vans here --> */}
                        <div className="car__holder w-52 px-6 mb-5 md:mb-0 pt-6 mr-4 lg:mr-0">
                            <div className="h-12 m-auto">
                                <img
                                    src="./assets/img/van.svg "
                                    alt="Vans"
                                    className="object-contain"
                                />
                            </div>

                            <div className="text-center text-sm pt-7 ">
                                <p className="font-semibold primary-color ">
                                    Vans
                                </p>
                                <a
                                    className="primary-red font-medium  pt-2 cursor-pointer"
                                    onClick={() => onCategory("van")}
                                >
                                    VIEW MORE
                                </a>
                            </div>
                        </div>

                        {/* <!-- SUVs here --> */}
                        <div className="car__holder w-52 px-6 mb-5 md:mb-0 pt-6 ">
                            <div className="h-12 m-auto">
                                <img
                                    src="./assets/img/suv.svg "
                                    alt="SUVs"
                                    className="object-contain"
                                />
                            </div>

                            <div className="text-center text-sm pt-7 ">
                                <p className="font-semibold primary-color ">
                                    SUVs
                                </p>
                                <a
                                    className="primary-red font-medium  pt-2 cursor-pointer"
                                    onClick={() => onCategory("suv")}
                                >
                                    VIEW MORE
                                </a>
                            </div>
                        </div>

                        {/* <!-- Wagons here --> */}

                        <div className="car__holder w-52 px-6 mb-5 md:mb-0 pt-6 ">
                            <div className="h-12 m-auto">
                                <img
                                    src="./assets/img/wagon.svg "
                                    alt="Wagon"
                                    className="object-contain"
                                />
                            </div>

                            <div className="text-center text-sm pt-7 ">
                                <p className="font-semibold primary-color ">
                                    Wagons
                                </p>
                                <a
                                    className="primary-red font-medium  pt-2 cursor-pointer"
                                    onClick={() => onCategory("wagon")}
                                >
                                    VIEW MORE
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Button here --> */}
                    <div className="text-center mt-16 ">
                        <button
                            type="button "
                            className="estimate__btn focus:outline-none font-semibold px-9 text-sm"
                            onClick={() => router.push("/search")}
                        >
                            SEE ALL VECHICLES
                        </button>
                    </div>
                </section>

                {/* Filtered Section */}
                <section
                    className="w-full filtered__section "
                    id="number-offset"
                >
                    <div className="relative px-2 lg:px-28 lg:pl-8">
                        <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap flex-col-reverse md:flex-row lg:flex-row justify-between pt-14 pb-20 lg:pb-16 ">
                            <div
                                className="purple__ellipse mt-5 lg:mt-0 "
                                id="filteredwaypoint"
                            >
                                <img
                                    src="./assets/img/tesla.svg "
                                    className="pt-7 tesla"
                                    width="600px"
                                    alt="Tesla "
                                />
                            </div>
                            <div className=" w-full md:w-1/2 xl:w-2/5  self-end">
                                <div>
                                    <h3 className="primary-red line-60 font-medium text-3xl lg:text-4xl ">
                                        {" "}
                                        CLEAN TITLE CARS <br />
                                        <span className="primary-color rem4 font-semibold ">
                                            FILTERED <br /> FOR YOU
                                        </span>
                                    </h3>
                                    <hr className="orange-underline w-10 m-1 " />
                                </div>
                                <p className="pt-4 text-lg filtered__text font-normal w-10/12 ">
                                    Choose from our amazing selection of clean
                                    title cars carefully chosen to meet your
                                    exquisite taste.
                                </p>
                            </div>
                        </div>
                        <div className=" absolute bottom-0 right-0 hidden lg:block ">
                            <img
                                src="./assets/img/vectors/oval-red.svg "
                                alt="oval "
                            />
                        </div>
                    </div>
                </section>

                {/*  Wholesale Section */}
                <section className="wholesale__section w-full pb-24 px-2 lg:px-36">
                    <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap justify-between pt-9">
                        <div className="w-full md:w-1/2 xl:w-2/5 self-center">
                            <div>
                                <h3 className="primary-red line-60 font-medium text-3xl lg:text-4xl ">
                                    {" "}
                                    WHOLESALE PRICE{" "}
                                    <span className="primary-color block rem4 font-semibold ">
                                        ON CLEAN CARS
                                    </span>{" "}
                                </h3>
                                <hr className="orange-underline w-10 mx-1.5 mt-5" />
                            </div>
                            <p className="pt-4 text-lg filtered__text font-normal w-10/12 ">
                                Buy clean as new cars at unbeatable wholesale
                                prices.{" "}
                            </p>
                        </div>
                        <div className="red__ellipse mt-5 lg:mt-0 ">
                            <img
                                src="./assets/img/audi.svg "
                                className="pt-10 "
                                alt="Audi "
                            />
                        </div>
                    </div>
                </section>

                {/* Easy Buy Section */}
                <section className="w-full easybuy__section ">
                    <div className="relative lg:pr-28 ">
                        <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap flex-col-reverse md:flex-row lg:flex-row justify-between pt-12 pb-20 lg:pb-3.5 ">
                            <div className="relative " id="easyBuywaypoint">
                                <img
                                    src="./assets/img/land-rover.svg "
                                    alt="Land Rover "
                                    className="lg:pt-14 md:pt-10 pt-12 rover"
                                />
                                <img
                                    src="./assets/img/vectors/Subtract.svg "
                                    alt="anchor "
                                    className="subtract absolute "
                                />
                                <img
                                    src="./assets/img/vectors/sold.svg "
                                    alt="sold "
                                    className="sold absolute "
                                />
                            </div>
                            <div className=" w-full md:w-1/2 xl:w-2/5 lg:px-0 px-7 ">
                                <div>
                                    <h3 className="primary-red line-60 font-medium text-3xl lg:text-4xl ">
                                        {" "}
                                        BUY WITH EASE <br />{" "}
                                        <span className="primary-color rem4 font-semibold ">
                                            FROM ANYWHERE
                                        </span>{" "}
                                    </h3>
                                </div>
                                <p className="pt-4 text-lg filtered__text font-normal w-10/12 ">
                                    Visit our showroom from anywhere and
                                    complete a request while we handle the rest.
                                </p>
                            </div>
                        </div>
                        <div className=" absolute bottom-0 right-0 hidden lg:block ">
                            <img
                                src="./assets/img/vectors/oval-grey.svg "
                                alt="oval "
                            />
                        </div>
                    </div>
                </section>
                {/*  */}
                {/* How It works section here */}
                <section className="w-full works__section pb-12 ">
                    <HowItWorks />
                </section>

                {/* Testimonials here */}
                <section className="w-full testimonial__section px-2 lg:px-20 pb-40">
                    <Testimonials />
                </section>

                {/* Car features section here */}
                <section className="w-full">
                    <CarFeatures />
                </section>

                {/* <!-- FAQ here --> */}
                <section className="w-full bg-white px-7 md:px-10 lg:px-20 xl:px-40 pb-10">
                    <div className="text-center pt-20 lg:pt-16 ">
                        <hr className="orange-underline w-20 m-auto pb-10 " />
                        <h4 className="primary-color font-bold text-2xl ">
                            FREQUENTLY ASKED QUESTIONS
                        </h4>
                    </div>

                    {/* <!-- first section here --> */}
                    <div className="flex flex-wrap md:flex-nowrap mt-8">
                        {/* <!--    Questions here --> */}
                        <div className=" w-full lg:w-1/3 mb-5">
                            <h4 className="faq-header pb-3">
                                Bids and Deposits{" "}
                            </h4>

                            <ul>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> How do I place a bid?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a deposit?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a collection?</a>
                                </li>
                                <li className="pb-2 faq all">
                                    {" "}
                                    <a href="#"> See all questions</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!--    Questions here --> */}
                        <div className="w-full lg:w-1/3 mb-5">
                            <h4 className="faq-header pb-3">
                                Bids and Deposits{" "}
                            </h4>

                            <ul>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> How do I place a bid?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a deposit?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a collection?</a>
                                </li>
                                <li className="pb-2 faq all">
                                    {" "}
                                    <a href="#"> See all questions</a>
                                </li>
                            </ul>
                        </div>

                        {/* <!--    Questions here --> */}
                        <div className=" w-full lg:w-1/3 mb-5">
                            <h4 className="faq-header pb-3">
                                Bids and Deposits{" "}
                            </h4>

                            <ul>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> How do I place a bid?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a deposit?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a collection?</a>
                                </li>
                                <li className="pb-2 faq all">
                                    {" "}
                                    <a href="#"> See all questions</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Second section here --> */}
                    <div className="flex flex-wrap md:flex-nowrap mt-0 md:mt-10 lg:mt-10">
                        {/* <!--    Questions here --> */}
                        <div className=" w-full lg:w-1/3 mb-5">
                            <h4 className="faq-header pb-3">
                                Bids and Deposits{" "}
                            </h4>

                            <ul>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> How do I place a bid?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a deposit?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a collection?</a>
                                </li>
                                <li className="pb-2 faq all">
                                    {" "}
                                    <a href="#"> See all questions</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!--    Questions here --> */}
                        <div className="w-full lg:w-1/3 mb-5">
                            <h4 className="faq-header pb-3">
                                Bids and Deposits{" "}
                            </h4>

                            <ul>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> How do I place a bid?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a deposit?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a collection?</a>
                                </li>
                                <li className="pb-2 faq all">
                                    {" "}
                                    <a href="#"> See all questions</a>
                                </li>
                            </ul>
                        </div>

                        {/* <!--    Questions here --> */}
                        <div className=" w-full lg:w-1/3 mb-5">
                            <h4 className="faq-header pb-3">
                                Bids and Deposits{" "}
                            </h4>

                            <ul>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> How do I place a bid?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a deposit?</a>
                                </li>
                                <li className="pb-2 faq">
                                    {" "}
                                    <a href="#"> What is a collection?</a>
                                </li>
                                <li className="pb-2 faq all">
                                    {" "}
                                    <a href="#"> See all questions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

const mapStateToProps = (state) => {
    const { cars, loading, error, makes } = state.Cars;
    return { cars, loading, error, makes };
};

export default connect(mapStateToProps, { getCars, getMakes })(Home);
