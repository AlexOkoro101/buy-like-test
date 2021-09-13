import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { connect, useSelector } from "react-redux";
import { selectToken } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { carDetail, getCollection } from "../../redux/actions/carsAction";
import Link from "next/link";
import { enviroment } from "../../src/components/enviroment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";

const CarDetails = ({ carDetails, cars, getCollection, carCollection }) => {
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

    const [cardD, setDetail] = useState(null);
    const dispatch = useDispatch();
    const router = useRouter();
    const [offer, setOffer] = useState(true);
    const [data, setData] = useState();
    const [imageD, setimageD] = useState([]);
    const [id, setId] = useState(0);

    const [token, settoken] = useState(null);
    const [userNmae, setuserName] = useState(null);
    const [userId, setuserId] = useState(null);
    const [terms, setterms] = useState(true);

    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [message, setmessage] = useState(false);

    const [vin, setvin] = useState("");
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [year, setyear] = useState("");
    const [exteriorColor, setexteriorColor] = useState("");
    const [vehicleType, setvehicleType] = useState("");
    const [interiorColor, setinteriorColor] = useState("");
    const [transmission, settransmission] = useState("");
    const [odometer, setodometer] = useState("");
    const [driveTrain, setdriveTrain] = useState("");
    const [doors, setdoors] = useState("");
    const [model, setmodel] = useState("");
    const [make, setmake] = useState("");
    const [bodyStyle, setbodyStyle] = useState("");
    const [zip, setzip] = useState("");
    const [bidAmount, setbidAmount] = useState("");
    const [collection, setcollection] = useState("");
    const [facilitationLocation, setfacilitationLocation] = useState("");
    const [vehicleLocation, setvehicleLocation] = useState("");
    const [carImages, setcarImages] = useState([])


    //Get Data from Local Storage
    const retrieveData = () => {
        const userActive = localStorage.getItem("user");
        if (!userActive) {
            settoken(null);
            return null;
        }
        const item = JSON.parse(userActive);
        const now = new Date();
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            window.localStorage.clear();
            return null;
        }
        settoken(item?.userToken);
        setuserName(item?.userName);
        setuserId(item?.userId);
    };

    //Get Data from local Storage
    useEffect(() => {
        retrieveData();
        return retrieveData;
    }, [router.pathname, token]);

    useEffect(() => {
        fetch(enviroment.BASE_URL + "collections/owner/collections/" + `${userId}`, {
            method: "GET",
            redirect: "follow",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then(function (response) {
                console.log(response);
                return response.text();
            })
            .then((data) => {
                // console.log(data)
                if (data) {
                    //  console.log(data.data)
                    if (Object.entries(data).length >= 1) {
                        const formatCollection = JSON.parse(data);
                        // console.log("new collection", formatCollection.data)
                        setcollection(formatCollection.data);
                        
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [userId, message]);

    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(window.innerWidth <= 760 ? 3 : 5);
    const [count, setCount] = useState(0);
    const [naira, setNaira] = useState(0);
    const user = useSelector(selectToken);

    const getZipLocation = () => {
        let initialZip = null;

        if(carDetails) {
            initialZip = `${carDetails.locationFullZipcode}`.substring(0, 5);

        }
        console.log("zip", initialZip)

        return initialZip;
    }

    useEffect(() => {
        setDetail(carDetails);
        console.log("car details", cardD)
        setvin(carDetails.VIN)
        setname(carDetails.vehicleName)
        setprice(carDetails.mmrPrice)
        setyear(carDetails.year)
        setexteriorColor(carDetails.exteriorColor)
        setvehicleType(carDetails.vehicleType)
        setinteriorColor(carDetails.interiorColor)
        settransmission(carDetails.transmission)
        setodometer(carDetails.odometer)
        setdriveTrain(carDetails.driveTrain)
        setdoors(carDetails.doors)
        setmodel(carDetails.model)
        setmake(carDetails.make)
        setbodyStyle(carDetails.bodyType)
        setzip(carDetails.locationFullZipcode)
        setbidAmount(carDetails.buyNowPrice)
        setfacilitationLocation(carDetails.facilitationLocation)
        setvehicleLocation(carDetails.pickupLocation)
        setcarImages(carDetails.images)
        getZipLocation()





        let array = [];
        if (cars) {
            cars.data.map((ele) => {
                if (ele.vehicleName !== "") {
                    array.push(ele);
                }
            });
        }
        const size = 4;
        const items = array.slice(0, size);
        // console.log(items);
        setData(items);
        getRate();
        displaySmall();
    }, [carDetails, cardD]);

    const getTrucking = {
        "packingCode":`${getZipLocation()}`,
        "packingName":""
    }

    const fetchTrucking = () => {

        fetch('https://buylink-shiping.herokuapp.com/api/ng-trucking', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getTrucking)
        })
        .then((response) => {

            return response.json()
        })
        .then((data) => {
            console.log("trucking", data)
        })
    }
    useEffect(() => {
        fetchTrucking()

    }, [cardD])

    const openForm = (evt, status) => {
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
    const addImage = (params) => {
        if (params.images && params.images.length <= 0) {
            return null;
        }
        if (
            params.images &&
            params.images.length > 0 &&
            params.images[0].image_smallUrl
        ) {
            return (
                <img
                    src={params.images[0].image_largeUrl}
                    alt="hello"
                    className="w-full h-full"
                />
            );
        }
    };

    function displaySmall() {
        let data = cardD?.images.length;
        var size;
        if (window.innerWidth <= 760) {
            size = 3;
        } else {
            size = 5;
        }
        let count = cardD?.images.length - size;
        setCount(count);
        if (data > window.innerWidth <= 760 ? 3 : 5) {
            let data = cardD?.images.slice(page, size);
            setimageD(data);
        } else {
            let data = cardD?.images;
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
        let data = cardD.images.slice(page - size, limit - size);
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
        let data = cardD.images.slice(page + size, limit + size);
        setimageD(data);
        setPage(page + size);
        setLimit(limit + size);
        setCount(count - size);
    };
    const displayLargeimage = () => {
        return (
            <img
                src={cardD.images[id].image_largeUrl}
                loading="lazy"
                className="rounded-xl w-full largeImage sm:h-32 shadow-md"
                alt="Benz"
            />
        );
    };

    const getRate = () => {
        let key = "a57db18c0b5cc8ad31a650a1e456712f";
        try {
            fetch("http://data.fixer.io/api/latest?access_key=" + `${key}`, {
                method: "GET",
            })
                .then(function (response) {
                    return response.json();
                })
                .then((data) => {
                    setNaira(data.rates.NGN);
                    console.log(cardD);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    if (!cardD) {
        // reRender();
        return <div className="App">Loading...</div>;
    }

    //Random collection name
    function makeCollectionName(length) {
        var result = "";
        var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }

    const placeBid = () => {

        async function addCar() {
            seterror(null)
            setisLoading(true)

            const bidObject =  {
                vin:vin,
                link:"https://members.manheim.com/",
                name:name,
                site:"https://members.manheim.com/",
                price:price,
                year:year,
                exterior_color:exteriorColor,
                vehicle_type:vehicleType,
                interior_color:interiorColor,
                transmission:transmission,
                odometer:odometer,
                driveTrain:driveTrain,
                doors:doors,
                Model:model,
                make:make,
                body_style:bodyStyle,
                Zip:zip,
                bidAmount:bidAmount,
                owner:userId,
                collection: await placeItem(), 
                facilitationLocation:facilitationLocation,
                Vehicle_location:vehicleLocation,
                images:carImages
            }
            console.log("bid object", bidObject)

            //Add car to collection
            fetch(enviroment.BASE_URL + "bids/add-bid", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bidObject),
                redirect: 'follow'
            })
            .then(response => {
                setisLoading(false)
                // console.log(response)
                if (!response.ok) {
                    toastError()
                    // throw Error("Could not create collection")
                } else {
                    setmessage(response.statusText)
                    toastSuccess();
                }
            })
            .then((response) => {
                setisLoading(false);
                console.log(response);
                if (!response.ok) {
                    toastError();
                    throw Error("Could not create collection");
                } else {
                    setmessage(response.statusText);
                    toastSuccess();
                    router.push("/search");
                }
            })
            .catch((error) => {
                seterror(error);
                console.log("error", error);
            });
        }

        async function placeItem() {
            let availableCollection = getAvailableCollection();

            if (!availableCollection) {
                availableCollection = await createCollection();
            }

            return availableCollection;

        }
            
        function getCollections() {
            // console.log("get collection", collection)
            return collection || [];
        }
            
        function getAvailableCollection() {
            // Replace getCollections
            const replaceCollections = getCollections();
            
            let filterCollection = null;
            
            for (let index = 0; index < replaceCollections.length; index++) {
                const currentCollection = replaceCollections[index];
                console.log("current collection",currentCollection )
            
                if (currentCollection.vehicles.length < 10) {
                    filterCollection = currentCollection._id;
                    // console.log(filterCollection)
                    
                    break;
                }
            }

            
            return filterCollection;
        }

        async function createCollection() {
            let randomName = makeCollectionName(7);

            const collectionObject = {
                owner: `${userId}`,
                name: `${randomName}`,
            };
            let newCollection;
            console.log(collectionObject);
            await fetch(enviroment.BASE_URL + "collections", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(collectionObject),
                redirect: "follow",
            })
            .then((response) => {
                setisLoading(false);
                console.log(response);
                if (!response.ok) {
                    // toastError()
                    // throw Error("Could not create collection")
                } else {
                    setmessage(response.statusText)
                    return response.json();
                    // toastSuccess();
                }
            })
            .then((data) => {
                newCollection = data.data._id;
                console.log(data)
            })
            .catch((error) => {
                seterror(error);
                console.log("error", error);
            });
            return newCollection;
        }
        
        addCar();
    };

    return (
        <div>
            <ToastContainer />
            {cardD && (
                <>
                    <section className="flex flex-wrap w-full justify-center pt-20 lg:pt-28 px-5 xl:px-0">
                        <div className="details-border-b py-1 block lg:hidden">
                            <p className="font-13 font-bold primary-color">
                                {cardD.vehicleName}
                            </p>

                            <div className="flex mt-1.5">
                                <div className="flex">
                                    <p className="font-11 primary-gray font-medium">
                                        2,124 mi
                                    </p>
                                    <p className="font-11 ml-2 primary-gray font-medium">
                                        VIN: {""}
                                        {cardD?.VIN}
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

                            <div className="overflow-scroll w-full md:px-5">
                                <div
                                    className=" flex transition-all mt-3
                                "
                                    style={{
                                        width: "100%",
                                        height: "87px",
                                    }}
                                >
                                    {page >=
                                    (window.innerWidth <= 760 ? 3 : 5) ? (
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
                                    imageD.length >=
                                        (window.innerWidth <= 760 ? 3 : 5) ? (
                                        <div
                                            className="rounded-md flex items-center text-xs font-mono justify-center relative shadow-sm"
                                            style={{
                                                height: "60.3px",
                                                width: "90.03px",
                                                backgroundImage: `url(${cardD.images[6].image_largeUrl})`,
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
                                    {`${cardD?.vehicleName}`}
                                </p>

                                <div className="flex mt-1.5">
                                    <div className="flex">
                                        <p className="font-11 primary-gray font-medium">
                                            2,124 mi
                                        </p>
                                        <p className="font-11 ml-2 primary-gray font-medium">
                                            VIN: {cardD.VIN}
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <p className="primary-color text-base font-extrabold">
                                            &#8358;
                                            {""}
                                            {(
                                                parseFloat(cardD.mmrPrice) *
                                                naira
                                            ).toLocaleString()}
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
                                                                Add amount to bid
                                                            </label>{" "}
                                                        </td>
                                                        <td className="text-sm font-medium sec-black">
                                                            <input
                                                                value={
                                                                    bidAmount
                                                                }
                                                                id="amount"
                                                                className=" w-full focus:outline-none"
                                                                type="text"
                                                                placeholder="$8,000"
                                                                value={
                                                                    bidAmount
                                                                }
                                                                onChange={(e) =>
                                                                    setbidAmount(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
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
                                            checked={terms}
                                            onChange={(e) => {
                                                setterms(!terms);
                                            }}
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
                                {token ? (
                                    <button
                                        onClick={placeBid}
                                        className={
                                            `cursor-pointer focus:outline-none primary-btn text-white font-9 font-semibold py-2 px-3 ` +
                                            (!terms &&
                                                `opacity-50 cursor-not-allowed`)
                                        }
                                        disabled={!terms}
                                    >
                                        {isLoading ? (
                                            <ClipLoader
                                                color="#fff"
                                                size={20}
                                                loading
                                            />
                                        ) : (
                                            "Place Bid"
                                        )}{" "}
                                    </button>
                                ) : (
                                    <Link href="/auth/login">
                                        <button
                                            type="button"
                                            className="cursor-pointer focus:outline-none primary-btn text-white font-9 font-semibold py-2 px-3"
                                        >
                                            LOGIN OR SIGN UP TO PROCEED
                                        </button>
                                    </Link>
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

                    <section
                        className="py-4 flex flex-col w-full overview-section"
                        style={{ justifyContent: "center" }}
                    >
                        <div className="flex justify-center px-5">
                            <div className="overview-tab relative mr-6 lg:mr-16 active lg:px-4 lg:text-base text-xs font-semibold  primary-black lg:py-0.5">
                                <p className="lg:py-1.5 ">OVERVIEW</p>
                            </div>

                            <div className="overview-tab text-xs relative mr-6 lg:mr-16 lg:px-4 lg:text-base  font-semibold  primary-black lg:py-0.5">
                                <p className="lg:py-1.5">
                                    EQUIPMENT AND OPTIONS
                                </p>
                            </div>

                            <div className="overview-tab text-xs relative mr-2 lg:mr-16 lg:px-4 lg:text-base font-semibold  primary-black lg:py-0.5">
                                <p className="lg:py-1.5">AUCTION INFO</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center  w-full  justify-center mt-6">
                            <div className="w-full md:w-1/3 ">
                                <table className="min-w-full border-separate overview-table">
                                    <tbody>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Vehicle Name
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {cardD?.make} {""}{" "}
                                                {cardD?.model}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Interior Colour
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {cardD?.sourceInteriorColor}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Seller Name
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {cardD?.sourceSellerName}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Mileage
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {cardD?.mileage}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Tranbaseission
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {cardD?.tranbaseission ||
                                                    "Not Specified"}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Drive train
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {cardD?.driveTrain}
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
                                                {cardD?.companyName}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Make
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {cardD?.make}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Model
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {cardD?.model}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Pickup Location
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {cardD?.pickupLocation}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Engine Type
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 lg:md:pr-32">
                                                {cardD?.sourceEngineFuelType}
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm md:text-base font-semibold w-40 py-3 lg:px-5 px-2 ">
                                                Exterior Color
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 md:pr-32">
                                                {cardD?.sourceExteriorColor}
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
                        <div
                            className="flex flex-wrap justify-center lg:justify-center display-type"
                            id="car-grid"
                        >
                            {data?.length > 0 &&
                                data?.map(
                                    (ele, id) =>
                                        ele.vehicleName && (
                                            <div
                                                key={id}
                                                className="car-display-holder mx-2 flex flex-col justify-between p-4 mb-4"
                                                style={{
                                                    height: "380px",
                                                }}
                                            >
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
                                                    style={{
                                                        width: "273px",
                                                        height: "204px",
                                                    }}
                                                >
                                                    {addImage(ele)}
                                                </div>
                                                <div className="mt-3">
                                                    <p className="text-xs primary-black font-medium">
                                                        {ele?.vehicleName
                                                            ? ele?.vehicleName
                                                            : [
                                                                  ele?.make,
                                                                  ele.model,
                                                              ].join(" ")}
                                                    </p>
                                                    <p className="sec-black font-11 flex items-center pt-2">
                                                        {" "}
                                                        {ele?.year}{" "}
                                                        <span className="ml-6">
                                                            205,456 miles
                                                        </span>
                                                    </p>
                                                    <div className="flex pt-2">
                                                        <p className="flex items-center sec-black font-10">
                                                            {" "}
                                                            <span className="mr-1">
                                                                <img
                                                                    src="../../assets/img/vectors/red-location-beacon.svg"
                                                                    alt="location"
                                                                />
                                                            </span>{" "}
                                                            {
                                                                ele?.pickupLocation
                                                            }
                                                        </p>
                                                        <div className="ml-auto flex self-center">
                                                            <img
                                                                className="img-fluid"
                                                                src="../../assets/img/vectors/red-date.svg"
                                                                alt="date"
                                                            />
                                                            <p className="sec-black font-10 ml-1">
                                                                {" "}
                                                                {new Date(
                                                                    ele?.auctionEndTime
                                                                ).toLocaleDateString()}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex pt-3">
                                                        <div className="ml-auto  self-center">
                                                            <button
                                                                type="button"
                                                                className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                                                onClick={() => {
                                                                    dispatch(
                                                                        carDetail(
                                                                            ele
                                                                        )
                                                                    ),
                                                                        router.push(
                                                                            {
                                                                                pathname:
                                                                                    "/search/" +
                                                                                    ele.VIN,
                                                                            }
                                                                        );
                                                                }}
                                                            >
                                                                Place bid
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                )}
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
    const { carDetails, cars, carCollection } = state.Cars;
    return { carDetails, cars, carCollection };
};

export default connect(mapStateToProps, { getCollection })(CarDetails);
