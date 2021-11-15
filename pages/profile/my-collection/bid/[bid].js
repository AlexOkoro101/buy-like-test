import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { enviroment } from "../../../../src/components/enviroment";
import Meta from "../../../../src/components/Head/Meta";
import FsLightbox from 'fslightbox-react';
import Collection from "../../../../src/components/Layout/Collection";
import FadeLoader from "react-spinners/FadeLoader";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BidDetails = () => {
    const toastError = () =>
        toast.error(`${error ? error : "Could not perform operation"}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const toastSuccess = () =>
        toast.success(`${message ? message : "Success"}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const [bidCollection, setbidCollection] = useState(null);

    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const [toggler, setToggler] = useState(false);
    const [imageD, setimageD] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(window.innerWidth <= 760 ? 3 : 5);
    const [count, setCount] = useState(0);


    const router = useRouter();
    const bidId = router.query.bid;

    useEffect(() => {
        console.log(bidId)
        fetch(enviroment.BASE_URL + "vehicles/vin/" + bidId, {
            method: "GET",
            redirect: "follow",
        })
            .then((response) => {
                setisLoading(false);
                return response.text();
            })
            .then((result) => {
                if (result) {
                    // console.log(result)
                    if (Object.entries(result).length >= 1) {
                        const formatCollection = JSON.parse(result);
                        console.log("formated", formatCollection)
                        setbidCollection(formatCollection.data.vehicle);
                    }
                }
            })
            .catch((error) => console.log("error", error));
    }, []);

    useEffect(() => {
        displaySmall();
        
    }, [bidCollection])

    function displaySmall() {
        let data = bidCollection?.images?.length;
        var size;
        if (window.innerWidth <= 760) {
            size = 3;
        } else {
            size = 5;
        }
        let count = bidCollection?.images?.length - size;
        setCount(count);
        if (data > window.innerWidth <= 760 ? 3 : 5) {
            let data = bidCollection?.images?.slice(page, size);
            setimageD(data);
        } else {
            let data = bidCollection?.images;
            setimageD(data);
        }
    }
    const prevPage = async () => {
        var size;
        if (window.innerWidth <= 760) {
            size = 3;
        } else {
            size = 5;
        }
        let data = bidCollection?.images?.slice(page - size, limit - size);
        setimageD(data);
        setPage(page - size);
        setLimit(limit - size);
        setCount(count + size);
    };
    const nextPage = async () => {
        var size;
        if (window.innerWidth <= 760) {
            size = 3;
        } else {
            size = 5;
        }
        let data = bidCollection?.images?.slice(page + size, limit + size);
        setimageD(data);
        setPage(page + size);
        setLimit(limit + size);
        setCount(count - size);
    };

    const returnLargeimage = () => {
        const largeImageArray = bidCollection?.images.map(image => {
            return image.image_largeUrl
        })

        return largeImageArray;
    }

    const displayLargeimage = () => {
        return (
            <>
                <FsLightbox
                    toggler={toggler}
                    sources={returnLargeimage()}
                    type="image"
                />
                <img
                    onClick={() => {
                        setToggler(!toggler)
                        console.log("large images", returnLargeimage())
                        }}
                    src={bidCollection?.images[0]?.image_largeUrl}
                    loading="lazy"
                    className="rounded-xl w-full largeImage sm:h-32 shadow-md cursor-pointer"
                    alt="Benz"
                />
            </>
        );
    };

    var nairaFormatter = new Intl.NumberFormat();


    return (
        <div>
            <Meta></Meta>
            <ToastContainer />
            {bidCollection && (
                <>
                    <section className="flex flex-wrap w-full justify-center pt-20 lg:pt-28 px-5 xl:px-0">
                        <div className="details-border-b py-1 block lg:hidden">
                            <p className="font-13 font-bold primary-color">
                                {bidCollection?.name}
                            </p>

                            <div className="flex mt-1.5">
                                <div className="flex">
                                    <p className="font-11 primary-gray font-medium">
                                        2,124 mi
                                    </p>
                                    <p className="font-11 ml-2 primary-gray font-medium">
                                        VIN: {""}
                                        {bidCollection?.vin}
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <p className="primary-color text-base font-extrabold">
                                        {}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/6 md:px-5 overflow-hidden">
                            <div className="md:px-5">{displayLargeimage()}</div>

                            <div className="overflow-scroll w-full md:px-5 scrollbar-hide">
                                <div
                                    className="scrollbar-hide flex transition-all mt-3
                                "
                                    style={{
                                        width: "100%",
                                        height: "87px",
                                    }}
                                >
                                    {page >=
                                    (window.innerWidth < 760 ? 3 : 5) ? (
                                        <div
                                            className=" flex mr-2 md:mr-4 animate-pulse items-center text-xs font-mono justify-center  "
                                            style={{
                                                width: "25px",
                                                height: "60.03px",
                                            }}
                                        >
                                            <div
                                                onClick={() => prevPage(page)}
                                                className="cursor-pointer"
                                            >
                                                <img src="https://img.icons8.com/ios-filled/50/000000/double-left.png" />
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {imageD &&
                                        imageD.map((ele, id) => (
                                            <div
                                                key={id}
                                                onClick={() => setId(page + id)}
                                                className="mr-3 h-full transition-all cursor-pointer transform hover:scale-105"
                                            >
                                                <img
                                                    src={ele?.image_largeUrl}
                                                    className="rounded-md shadow-sm"
                                                    style={{
                                                        height: "60.3px",
                                                        width: "90.03px",
                                                    }}
                                                    alt=""
                                                />
                                            </div>
                                        ))}
                                    {imageD &&
                                    imageD.length ===
                                        (window.innerWidth <= 760 ? 3 : 5) &&
                                    count > 0 ? (
                                        <div
                                            className="rounded-md flex items-center text-xs font-mono justify-center relative shadow-sm"
                                            style={{
                                                height: "60.3px",
                                                width: "90.03px",
                                                backgroundImage: `url(${bidCollection.images[6].image_largeUrl})`,
                                                backgroundSize: "cover",
                                            }}
                                        >
                                            <div
                                                className=" rounded-md shadow-sm cursor-pointer absolute top-0 left-0 text-center right-0 bottom-0 bg-black
                        bg-opacity-40 text-white flex items-center justify-center
                        "
                                                style={{ fontSize: "10px" }}
                                                onClick={() => nextPage(page)}
                                            >
                                                load {count} more
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="car-details-holder px-4 pt-4 pb-12">
                            <div className="details-border-b px-7 lg:px-0 mt-3 lg:mt-0 py-1 hidden lg:block">
                                <p className="text-base font-bold primary-color">
                                    {`${bidCollection?.year} ${bidCollection?.make} ${bidCollection?.model} `}
                                </p>

                                <div className="flex mt-1.5">
                                    <div className="flex">
                                        <p className="font-11 primary-gray font-medium">
                                            {bidCollection?.odometer} mi
                                        </p>
                                        <p className="font-11 ml-2 primary-gray font-medium">
                                            VIN: {bidCollection?.vin}
                                        </p>
                                    </div>
                                    {/* <div className="ml-auto">
                                        {bidCollection?.buyNowPrice.length > 2 ? (
                                            <p className="primary-color text-xs font-medium">
                                                BUY NOW @ &#8358;
                                                {""}
                                                {bidCollection?.bidAmount}
                                            </p>
                                        ) : (
                                            parseFloat(
                                                bidCollection?.bidAmount?.mmrPrice 
                                            ).toLocaleString()
                                        )}
                                    </div> */}
                                </div>
                            </div>

                            <div className="flex mt-4 lg:mt-0">
                                <div className="details-tab  cursor-pointer active px-10 w-full text-center font-10 font-semibold  primary-black py-0.5 ">
                                    <p href className="py-1.5">
                                        Car Transaction Detail
                                    </p>
                                </div>
                                {/* 
                                <div
                                    className="ml-auto px-14 cursor-pointer lg:px-20 font-10 font-medium details-tab primary-black py-0.5"
                                    onClick={(e) => openForm(e, false)}
                                >
                                    <p href className="py-1.5">
                                        Budget
                                    </p>
                                </div> */}
                            </div>
                            <div className="mt-3">
                                {true && (
                                    <div
                                        className="tabcontent"
                                        id="offer-amount"
                                    >
                                        <div className="edit-holder my-1.5 px-2  flex items-center">
                                            <table className="table-fixed w-full">
                                                <tbody>
                                                    <tr className="">
                                                        <td className="sec-black font-11 font-semibold w-28  ">
                                                            <label>
                                                                Bid Amount
                                                            </label>
                                                        </td>
                                                        <td className="text-sm font-medium sec-black">
                                                            ${nairaFormatter.format(bidCollection?.bidAmount)}
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
                                                    
                                                </tr>


                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Tax and Reg
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        Not Applicable
                                                    </td>
                                                    
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Trucking
                                                    </td>

                                                    <td className="sec-black font-11 font-normal">
                                                        ${bidCollection?.trucking || 0}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Shipping
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        ${nairaFormatter.format(bidCollection?.shipping)}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Clearing
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        N2,000,000
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
                                                        ${nairaFormatter.format(bidCollection?.bidAmount)}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                                {false && (
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
                                                        {truckingPrice ? `${truckingPrice}` : 'Loading...'}
                                                    </td>
                                                    <td className="text-right px-2">
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
                                                        $950
                                                    </td>
                                                    <td className="text-right px-2">
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
                                                            <label>
                                                                Enter your
                                                                budget
                                                            </label>
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

                            
                        </div>
                    </section>

                    <section className="w-full mt-20">
                        <div className=" justify-center mb-10 block lg:hidden"></div>

                        <div className="flex justify-around flex-wrap">
                            <div className="flex flex-col self-center">
                                <div className="items-center self-center">
                                    <img
                                        src="../../../assets/img/vectors/location.svg"
                                        alt="location"
                                    />
                                </div>
                                <p className="pt-5 primary-black font-semibold text-base text-center">
                                    Vehicle location
                                </p>
                                <p className="pt-0.5 primary-gray font-medium font-11 text-center">
                                    {bidCollection?.Vehicle_location}
                                </p>
                            </div>
                            <div className="flex flex-col relative  lg:block">
                                <div className="timer-container relative bg-white">
                                    {/* <div>
                                        {renderCounter(
                                            carDetails.auctionEndTime
                                        )}
                                    </div> */}

                                    <div className="timer">
                                        <button
                                            type="button"
                                            className="focus:outline-none cursor-auto pill  auction-pill text-white font-semibold font-9 py-1 uppercase px-3 "
                                        >
                                            Auction Day
                                        </button>
                                        {/* {car.data.length === 0 ? (
                                            <></>
                                        ) : (
                                            <p className="font-9 font-semibold text-center primary-blue pt-4">
                                                TIME LEFT
                                                <p>
                                                    {car.data[0].auctionEndTime}
                                                    used the data this way
                                                </p>
                                            </p>
                                        )} */}

                                        {/* <div className=" flex w-full justify-center mt-3">
                                            <p className="sec-black font-medium font-11">
                                                {new Date(
                                                    carDetails.auctionEndTime
                                                ).toLocaleDateString()}
                                            </p>
                                            <p className="sec-black font-medium font-11 ml-4">
                                                {new Date(
                                                    carDetails.auctionEndTime
                                                ).toLocaleString("en-US", {
                                                    hour: "numeric",
                                                    hour12: true,
                                                })}
                                            </p>
                                        </div> */}

                                        {/* <div className="flex mt-1.5 justify-center">
                                            <div className="flex flex-col ml-2">
                                                <p className="days font-13 sec-black font-semibold ">
                                                    {days}
                                                </p>
                                                <p className="primary-gray font-6">
                                                    DAYS
                                                </p>
                                            </div>

                                            <div className=" ml-3.5">
                                                <p className=" font-13 sec-black font-semibold hours">
                                                    {hours}
                                                </p>
                                                <p className="primary-gray font-6">
                                                    HOURS
                                                </p>
                                            </div>

                                            <div className="flex flex-col ml-3.5">
                                                <p className="font-13 sec-black font-semibold minutes">
                                                    {minute}
                                                </p>
                                                <p className="primary-gray font-6">
                                                    MINUTES
                                                </p>
                                            </div>

                                            <div className="flex flex-col ml-3.5">
                                                <p className="font-13 sec-black font-semibold seconds">
                                                    {seconds}
                                                </p>
                                                <p className="primary-gray font-6">
                                                    SECONDS
                                                </p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col self-center mt-14">
                                <div className="items-center self-center">
                                    <img
                                        src="../../../assets/img/vectors/delivery.svg"
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

                    <section
                        className="py-4 flex flex-col w-full overview-section"
                        style={{ justifyContent: "center" }}
                    >
                        <div className="flex flex-col md:flex-row items-center  w-full  justify-center mt-6">
                            <div className="w-full md:w-1/3 ">
                                <table className="min-w-full border-separate overview-table">
                                    <tbody>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Vehicle Name
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.name}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Interior Colour
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.interior_color}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Seller Name
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.sourceSellerName}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Mileage
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.mileage}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Tranbaseission
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.tranbaseission ||
                                                    "Not Specified"}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Drive train
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.driveTrain}
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="w-full md:w-1/3  ">
                                <table className="min-w-full border-separate overview-table">
                                    <tbody>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Company Name
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.companyName}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Make
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.make}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Model
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.model}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Pickup Location
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.pickupLocation}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Engine Type
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 lg:md:pr-32">
                                                {bidCollection?.sourceEngineFuelType}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Exterior Color
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {bidCollection?.sourceExteriorColor}
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
                </>
            )}
        </div>
    );
};

export default BidDetails;
