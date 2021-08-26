import React, { useState, useEffect } from "react";
import Meta from "../src/components/Head/Meta";
import anime from "animejs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";
import { getCars } from "../redux/actions/carsAction";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { searchTerm } from "../redux/actions/carsAction";

//
const Home = ({ getCars, cars }) => {
    //
    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const [car, setCars] = useState(null);
    const [images, setImages] = useState(null);
    const [make, setMake] = useState(["toyota", "honda", "accord"]);
    const [years, setYears] = useState(() => {
        let year = 2000;
        const currentYear = new Date().getFullYear();
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
        if (seconds <= 100) {
            setTimeout(() => setSeconds(seconds + 1), 100);
        } else {
            execute("next");
            setSeconds(0);
        }
    });
    useEffect(() => {
        getCars();
        async function fetchData() {
            try {
                let res = await fetch(
                    `https://buylikepoint.us/json.php?&apiKey=Switch!2020`,
                    {
                        method: "GET",
                        headers: {},
                        credentials: "same-origin",
                    }
                )
                    .then(function (response) {
                        return response.text();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                const dada = JSON.parse(res);
                if (dada) {
                    setCars(dada.data);
                    setImages(dada.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    function execute(event) {
        let heroTimeline = anime.timeline({
            autoplay: true,
        });
        switch (event) {
            case "prev":
                const nextIndex = index - 1;
                if (nextIndex <= 0) {
                    setIndex(images.length - 1); // returns last index of images array if index is less than 0
                } else {
                    setIndex(nextIndex);
                }
            case "next":
                if (index < images.length) {
                    setIndex(index + 1); // increases index by 1
                }
                if (index === images.length - 2) {
                    setIndex(0);
                }
            default:
                break;
        }
    }

    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const onSubmit = (data) => {
        dispatch(searchTerm(data));
        router.push("/search");
    };
    //
    //
    return (
        <section className="w-full">
            <Meta />

            <main className="w-full">
                {/* Hero section here */}
                <section className="Hero__section mt-0  w-full bg-gray-700 pt-20  ">
                    {/* Hero Text here */}
                    <div className="text-center py-10">
                        <h1 className="text-3xl  lg:text-5xl primary-red font-bold hero-text ">
                            WHAT CAR ARE YOU LOOKING FOR? <br />{" "}
                            <span className="font-medium hero__sub__text text-3xl lg:text-4xl ">
                                LET’S HELP YOU FIND IT
                            </span>{" "}
                        </h1>
                    </div>
                    {/* Hero Image here */}
                    <div style={{ minHeight: "280px" }}>
                        {images && (
                            <div className="flex  mb-24 flex-wrap w-full justify-center  2xl:justify-center lg:flex-nowrap md:flex-nowrap mt-5 pb-24 ">
                                <div
                                    style={{ width: "350px", height: "280px" }}
                                    className="rounded-lg shadow-lg overflow-hidden transition-all "
                                >
                                    {images && (
                                        <img
                                            id="one"
                                            src={
                                                images[index]?.images
                                                    ?.image_largeUrl
                                            }
                                            alt="Hero-Image "
                                            class="h-full w-full hero-image"
                                        />
                                    )}
                                </div>
                                <div
                                    className="hero__holder flex text-left flex-col items-start justify-center  p-4 mt-3 mx-2 lg:ml-10 "
                                    style={{ height: "250px" }}
                                >
                                    <div className="flex ">
                                        {/* Progress bar here */}
                                        <div className=" w-1/2 ">
                                            <progress
                                                value={seconds}
                                                max={100}
                                            />
                                        </div>
                                        {/* Controller here */}
                                        <div className="ml-auto hero-btns">
                                            <button
                                                type="button "
                                                className=" hero__btn focus:outline-none py-2 px-2.5 mx-3 "
                                                id="prev-btn"
                                                onClick={() => execute("prev")}
                                            >
                                                <img
                                                    src="./assets/img/vectors/left-arrow.svg "
                                                    alt="arrow "
                                                />
                                            </button>
                                            <button
                                                type="button"
                                                className=" hero__btn focus:outline-none py-2 px-2.5"
                                                id="next-btn"
                                                onClick={() => execute("next")}
                                            >
                                                <img
                                                    src="./assets/img/vectors/right-arrow.svg "
                                                    alt="arrow "
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Car details here */}
                                    {images && (
                                        <div className="primary-color text-left car-details-div text-base mt-1 ">
                                            <p
                                                className="font-bold text-left "
                                                id="car__name"
                                            >
                                                {images[index]?.vehicleName
                                                    ? images[index]?.vehicleName
                                                    : `${
                                                          images[index]?.make +
                                                          " " +
                                                          "" +
                                                          "" +
                                                          images[index]?.model
                                                      }`}
                                            </p>
                                            <p
                                                className="font-normal"
                                                id="car__year"
                                            >
                                                2019
                                            </p>
                                        </div>
                                    )}
                                    {/* Price & milage details here */}
                                    <div className="primary-color flex mt-3 price-mileage-div ">
                                        <div className="primary-color ">
                                            <h5 className="font-medium mileage ">
                                                2,124 mi
                                            </h5>
                                            <p className="font-bold range ">
                                                RANGE
                                            </p>
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
                        )}
                    </div>
                    <section
                        style={{ background: "#E1E1E1" }}
                        className=" px-2 lg:px-20 w-full "
                    >
                        <div className=" request__holder relative w-full py-16  ">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex  flex-wrap justify-center ">
                                    <div className="flex flex-col mr-3 pb-5 w-full md:w-52 lg:w-52">
                                        <label className="primary-black font-semibold text-sm ">
                                            Select Year
                                        </label>
                                        <select
                                            {...register("year")}
                                            className="form__control px-1.5 w-full font-13 focus:outline-none "
                                        >
                                            {years.map((x) => (
                                                <option value={x}>{x}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex flex-col mx-3 xl:ml-1 lg:ml-3 pb-5 w-full md:w-52 lg:w-52">
                                        <label
                                            for="model "
                                            className="primary-black font-semibold text-sm "
                                        >
                                            Select Model
                                        </label>
                                        <select
                                            {...register("model")}
                                            name=" "
                                            id="model "
                                            className="form__control px-1.5 w-full font-13 focus:outline-none "
                                        >
                                            <option value="evoque">
                                                Evoque
                                            </option>
                                            <option value="evoque">
                                                Evoque
                                            </option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col ml-1 xl:ml-1 lg:mx-3 pb-5 w-full md:w-52 lg:w-52">
                                        <label
                                            for="year "
                                            className="primary-black font-semibold text-sm "
                                        >
                                            Select Make
                                        </label>
                                        <select
                                            name=" "
                                            id="year "
                                            className="form__control px-1.5 w-full font-13 focus:outline-none "
                                            {...register("make")}
                                        >
                                            {make.map((x) => (
                                                <option value={x}>{x}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex flex-col ml-1 xl:ml-1 lg:mx-3 pb-5 w-full md:w-52 lg:w-52">
                                        <label
                                            for="range "
                                            className="primary-black font-semibold text-sm "
                                        >
                                            Select Price Range
                                        </label>
                                        <select
                                            {...register("range")}
                                            name=" "
                                            id="range "
                                            className="form__control w-full px-1.5 font-13 focus:outline-none "
                                        >
                                            <option value="200">
                                                $150.000 - $200,000
                                            </option>
                                            <option value="200">
                                                $150.000 - $200,000
                                            </option>
                                        </select>
                                    </div>

                                    <div className="flex-col flex mt-4 pt-1 ml-1 xl:ml-1 lg:ml-3 pb-5 w-full md:w-40 lg:w-40">
                                        <button
                                            type="submit"
                                            className="estimate__btn uppercase focus:outline-none font-semibold"
                                        >
                                            search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    {/*  */}
                    <section className="pb-16 px-2 w-full lg:px-20 ">
                        <div className="mt-20 mb-12">
                            <hr className="orange-underline w-20 m-auto pb-4 " />
                            <h5 className="font-semibold primary-color text-center text-xl ">
                                {" "}
                                SEARCH A CATEGORY{" "}
                            </h5>
                        </div>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            responsive={responsive2}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerclassName="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListclassName="custom-dot-list-style"
                            itemclassName="carousel-item-padding-40-px"
                        >
                            <div>
                                <div className="car__holder flex flex-col justify-center px-4 pt-4 mb-5 lg:mb-0 md:mb-0 pb-3 ">
                                    <img
                                        src="./assets/img/hatchback.svg "
                                        alt="Hatchback "
                                    />
                                    <div className="text-center text-xs pt-3 ">
                                        <p className="font-semibold primary-color ">
                                            Hatchbacks
                                        </p>
                                        <a
                                            href="# "
                                            className="primary-red font-bold pt-2 "
                                        >
                                            SEE MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="car__holder flex flex-col justify-center px-4 pt-4 mb-5 lg:mb-0 md:mb-0 pb-3 ">
                                    <img
                                        src="./assets/img/sedans.svg "
                                        alt="Sedans "
                                    />
                                    <div className="text-center text-xs pt-4 ">
                                        <p className="font-semibold primary-color ">
                                            Sedans
                                        </p>
                                        <a
                                            href="# "
                                            className="primary-red font-bold pt-2 "
                                        >
                                            SEE MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="car__holder flex flex-col justify-center px-4 pt-4 mb-5 lg:mb-0 md:mb-0 pb-3 ">
                                    <img
                                        src="./assets/img/van.svg "
                                        alt="Van "
                                    />
                                    <div className="text-center text-xs pt-3 ">
                                        <p className="font-semibold primary-color ">
                                            Vans
                                        </p>
                                        <a
                                            href="# "
                                            className="primary-red font-bold pt-2 "
                                        >
                                            SEE MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="car__holder flex flex-col justify-center px-4 pt-4 mb-5 lg:mb-0 md:mb-0 pb-3 ">
                                    <img
                                        src="./assets/img/suv.svg "
                                        alt="SUVs "
                                    />
                                    <div className="text-center text-xs pt-3 ">
                                        <p className="font-semibold primary-color ">
                                            SUVs
                                        </p>
                                        <a
                                            href="# "
                                            className="primary-red font-bold pt-2 "
                                        >
                                            SEE MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="car__holder flex flex-col justify-center px-4 pt-4 mb-5 lg:mb-0 md:mb-0 pb-3 ">
                                    <img
                                        src="./assets/img/wagon.svg "
                                        alt="Wagon "
                                    />
                                    <div className="text-center text-xs pt-2 ">
                                        <p className="font-semibold primary-color ">
                                            Wagons
                                        </p>
                                        <a
                                            href="# "
                                            className="primary-red font-bold pt-2 "
                                        >
                                            SEE MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                        <div className="text-center mt-10 ">
                            <button
                                type="button "
                                className="estimate__btn focus:outline-none font-semibold px-4 "
                            >
                                SEE ALL VEHICLES
                            </button>
                        </div>
                    </section>
                    {/*  */}
                    <section
                        className="w-full filtered__section "
                        id="number-offset"
                    >
                        <div className="relative px-2 py-3 lg:px-20 ">
                            <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap flex-col-reverse md:flex-row lg:flex-row justify-between pt-10 pb-20 lg:pb-32 ">
                                <div
                                    className="purple__ellipse mt-5 lg:mt-0 "
                                    id="filteredwaypoint"
                                >
                                    <img
                                        src="./assets/img/tesla.svg "
                                        className="pt-7 tesla"
                                        alt="Tesla "
                                    />
                                </div>
                                <div className=" w-full md:w-1/2 xl:w-2/5 ">
                                    <div>
                                        <h3 className="primary-red line-60 font-medium text-3xl lg:text-4xl ">
                                            {" "}
                                            CLEAN TITLE CARS
                                            <span className="primary-color rem4 block font-semibold ">
                                                FILTERED <br /> FOR YOU
                                            </span>
                                        </h3>
                                        <hr className="orange-underline w-9 m-1 " />
                                    </div>
                                    <p className="pt-4 text-lg filtered__text font-normal w-10/12 ">
                                        Choose from our amazing selection of
                                        clean title cars carefully chosen to
                                        meet your exquisite taste.
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
                    {/*  */}
                    <section className="wholesale__section w-full pb-12 px-2 lg:px-20 ">
                        <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap justify-between pt-10 ">
                            <div className="w-full md:w-1/2 xl:w-2/5 ">
                                <div>
                                    <h3 className="primary-red line-60 font-medium text-3xl lg:text-4xl ">
                                        {" "}
                                        WHOLESALE PRICE{" "}
                                        <span className="primary-color block rem4 font-semibold ">
                                            ON CLEAN CARS
                                        </span>{" "}
                                    </h3>
                                    <hr className="orange-underline w-9 m-1 " />
                                </div>
                                <p className="pt-4 text-lg filtered__text font-normal w-10/12 ">
                                    Buy clean as new cars at unbeatable
                                    wholesale prices.{" "}
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
                    {/*  */}
                    <section className="w-full easybuy__section ">
                        <div className="relative lg:pr-20 ">
                            <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap flex-col-reverse md:flex-row lg:flex-row justify-between pt-10 pb-20 lg:pb-32 ">
                                <div className="relative " id="easyBuywaypoint">
                                    <img
                                        src="./assets/img/land-rover.svg "
                                        alt="Land Rover "
                                        className="lg:pt-5 md:pt-10 pt-12 rover"
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
                                        complete a request while we handle the
                                        rest.
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
                    <section className="w-full works__section pb-12 ">
                        <div className="px-2 lg:px-20 pt-16 ">
                            <div className="text-center ">
                                <hr className="red-underline w-20 m-auto pb-3 " />
                                <h4 className="font-bold primary-color text-2xl ">
                                    HOW IT WORKS
                                </h4>
                            </div>

                            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between pt-12 ">
                                <div className="works__holder px-8 pt-10 pb-16 mb-3 md:mx-3 ">
                                    <img
                                        src="./assets/img/vectors/search-icon.svg "
                                        alt="search-icon "
                                    />
                                    <h5 className="font-bold primary-red text-lg py-3 ">
                                        Search for a car{" "}
                                    </h5>
                                    <p className="filtered__text text-sm font-normal ">
                                        Use the filters to find what you’re
                                        looking for. Green light and red light
                                        options available.
                                    </p>
                                </div>
                                <div className="works__holder px-8 pt-10 pb-16 mb-3 ">
                                    <img
                                        src="./assets/img/vectors/offer-icon.svg "
                                        alt="offer-icon "
                                    />
                                    <h5 className="font-bold primary-red text-lg py-3 ">
                                        Make an offer
                                    </h5>
                                    <p className="filtered__text text-sm font-normal ">
                                        You can choose suggested price or make
                                        an offer. If it’s a buy now car, click
                                        to proceed with the buy now.
                                    </p>
                                </div>
                                <div className="works__holder px-8 pt-10 pb-16 mb-3 md:mx-3 ">
                                    <img
                                        src="./assets/img/vectors/deposit-icon.svg "
                                        alt="deposit-icon "
                                    />
                                    <h5 className="font-bold primary-red text-lg py-3 ">
                                        Make deposit
                                    </h5>
                                    <p className="filtered__text text-sm font-normal ">
                                        Choose delivery location, make deposit
                                        and sign online paper work.{" "}
                                    </p>
                                </div>
                                <div className="works__holder px-8 pt-10 pb-16 mb-3 ">
                                    <img
                                        src="./assets/img/vectors/handle-icon.svg "
                                        className="pt-6 "
                                        alt="handle-icon "
                                    />
                                    <h5 className="font-bold primary-red text-lg py-3 ">
                                        We handle the rest
                                    </h5>
                                    <p className="filtered__text text-sm font-normal ">
                                        We bid on your selected car, after which
                                        you make final payment and then we
                                        deliver the car to you or you pick up.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <button
                                type="button"
                                className="focus:outline-none text-white text-sm primary-btn px-6 h-9 font-semibold"
                            >
                                SEE HOW IT WORKS
                            </button>
                        </div>
                    </section>
                    {/*  */}

                    <section className="testimonial__section w-full px-0 lg:px-20 pb-40">
                        <div className="text-center pt-20 lg:pt-16 ">
                            <hr className="orange-underline w-20 m-auto pb-7 " />
                            <h4 className="primary-color mb-8 font-bold text-2xl ">
                                JOIN OUR LEAGUE OF 500+ HAPPY CUSTOMERS
                            </h4>
                        </div>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerclassName="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListclassName="custom-dot-list-style"
                            itemclassName="carousel-item-padding-40-px"
                        >
                            <div>
                                <div className=" splide__slide testimonial__holder p-8 ">
                                    <p className="primary-color text-base font-normal ">
                                        The car is exactly .
                                    </p>
                                    <div className="star__rating flex pt-4 pb-2 ">
                                        <span className="fa fa-star star checked "></span>
                                        <span className="fa fa-star star checked ml-1"></span>
                                        <span className="fa fa-star star checked ml-1"></span>
                                        <span className="fa fa-star star checked ml-1"></span>
                                        <span className="fa fa-star star  ml-1"></span>
                                    </div>
                                    <p className="font-bold text-base primary-color py-2 ">
                                        {" "}
                                        Dare Thomas{" "}
                                    </p>
                                    <p className="text-sm font-normal testinonial__location ">
                                        Lagos, Nigeria{" "}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className=" splide__slide testimonial__holder  p-8 ">
                                    <p className="primary-color text-base font-normal ">
                                        The car is exactly what I saw in the
                                        picture. The staff
                                    </p>
                                    <div className="star__rating flex pt-4 pb-2 ">
                                        <span className="fa fa-star star checked "></span>
                                        <span className="fa fa-star star checked ml-1"></span>
                                        <span className="fa fa-star star checked ml-1"></span>
                                        <span className="fa fa-star star checked ml-1"></span>
                                        <span className="fa fa-star star  ml-1"></span>
                                    </div>
                                    <p className="font-bold text-base primary-color py-2 ">
                                        {" "}
                                        Dare Thomas{" "}
                                    </p>
                                    <p className="text-sm font-normal testinonial__location ">
                                        Lagos, Nigeria{" "}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className=" splide__slide testimonial__holder p-8">
                                    <p className="primary-color text-base font-normal ">
                                        The car is exactly what I saw in the
                                        picture. The staff were good listeners
                                        and professional. The car is exactly
                                        what I saw in the picture.
                                    </p>
                                    <div className="star__rating flex pt-4 pb-2 ">
                                        <span className="fa fa-star star checked "></span>
                                        <span className="fa fa-star star checked ml-1"></span>
                                        <span className="fa fa-star star checked ml-1"></span>
                                        <span className="fa fa-star star checked ml-1"></span>
                                        <span className="fa fa-star star  ml-1"></span>
                                    </div>

                                    <p className="font-bold text-base primary-color py-2 ">
                                        {" "}
                                        Dare Thomas{" "}
                                    </p>
                                    <p className="text-sm font-normal testinonial__location ">
                                        Lagos, Nigeria{" "}
                                    </p>
                                </div>
                            </div>
                        </Carousel>
                    </section>
                    {/*  */}

                    <section className="w-full">
                        <div className="white__bg w-full px-7 md:px-10 lg:px-20 xl:px-40">
                            <div className="py-14">
                                <div className="feature__holder ">
                                    <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap pt-4">
                                        <div className="w-full lg:w-1/2">
                                            <div className="flex items-center features__bg active px-5 py-2">
                                                <div className="">
                                                    <h5 className="feature__header active font-medium text-lg">
                                                        Green Light Car
                                                    </h5>
                                                </div>
                                                <div className="ml-auto">
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
                                            <div className="flex items-center features__bg px-5 py-2">
                                                <div className="">
                                                    <h5 className="feature__header font-medium text-lg">
                                                        Red Light Car
                                                    </h5>
                                                </div>
                                                <div className="ml-auto">
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
                                            <div className="flex items-center features__bg px-5 py-2">
                                                <div className="">
                                                    <h5 className="feature__header font-medium text-lg">
                                                        Blue Light Car
                                                    </h5>
                                                </div>
                                                <div className="ml-auto">
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
                                            <div className="flex items-center features__bg px-5 py-2">
                                                <div className="">
                                                    <h5 className="feature__header font-medium text-lg">
                                                        Odometer
                                                    </h5>
                                                </div>
                                                <div className="ml-auto">
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
                                            <div className="flex items-center features__bg px-5 py-2">
                                                <div className="">
                                                    <h5 className="feature__header font-medium text-lg">
                                                        Read more
                                                    </h5>
                                                </div>
                                                <div className="ml-auto">
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
                                        <div className="pt-6 px-8 pb-3">
                                            <h5 className="primary-blue font-semibold text-lg">
                                                Green Light Car
                                            </h5>
                                            <p className="pt-4 filtered__text text-base font-normal">
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
                    <section className="bg-white w-full px-7 md:px-10 lg:px-20 xl:px-40 ">
                        <div className="text-center pt-20 lg:pt-16 ">
                            <hr className="orange-underline w-20 m-auto pb-7 " />
                            <h4 className="primary-color font-bold text-2xl ">
                                FREQUENTLY ASKED QUESTIONS
                            </h4>
                        </div>

                        <div className="flex flex-wrap md:flex-nowrap mt-10">
                            <div className=" w-full lg:w-1/3 mb-5">
                                <h4 className="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li className="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/3 mb-5">
                                <h4 className="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li className="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>

                            <div className=" w-full lg:w-1/3 mb-5">
                                <h4 className="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li className="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap md:flex-nowrap mt-0 md:mt-10 lg:mt-10">
                            <div className=" w-full lg:w-1/3 mb-5">
                                <h4 className="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li className="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/3 mb-5">
                                <h4 className="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li className="pb-2 faq all">
                                        {" "}
                                        <a href> See all questions</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" w-full lg:w-1/3 mb-5">
                                <h4 className="faq-header pb-3">
                                    Bids and Deposits{" "}
                                </h4>

                                <ul>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> How do I place a bid?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a deposit?</a>
                                    </li>
                                    <li className="pb-2 faq">
                                        {" "}
                                        <a href> What is a collection?</a>
                                    </li>
                                    <li className="pb-2 faq all">
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

const mapStateToProps = (state) => {
    const { cars, loading, error } = state.Cars;
    return { cars, loading, error };
};

export default connect(mapStateToProps, { getCars })(Home);
