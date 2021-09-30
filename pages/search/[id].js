import React, { useState, useEffect, useRef } from "react";
import FsLightbox from "fslightbox-react";
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
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { usePaystackPayment } from "react-paystack";
var moment = require("moment");
const Url = "https://buylikepoint.us/json.php/view.php";

//
//

//
//
const CarDetails = ({
    carDetails,
    cars,
    getCollection,
    carCollection,
    res, // const [article, setArticle] =  useState(props.res.data)
}) => {
    const buyNowError = () =>
        toast.error(`${error ? error : "Could not perform operation"}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const buyNowInfo = () =>
        toast.error("Car already bought by you", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const buyNowSuccess = () =>
        toast.success("Success", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const placeBidSuccess = () =>
        toast.success("Car added to your collection", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const placeBidInfo = () =>
        toast.info("Bid already placed by you", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const placeBidError = () =>
        toast.error(`${error ? error : "Could not perform operation"}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    var dollarFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const [userEmail, setuserEmail] = useState(null);
    const [userPhone, setuserPhone] = useState(null);
    const [amount, setAmount] = useState(0);
    const referenceNumber = () => {
        return "bld" + Math.floor(Math.random() * 1000000000 + 1);
    };
    const config = {
        reference: referenceNumber(),
        email: `${userEmail}`,
        amount: /*amount * 100*/ 100000,
        publicKey: "pk_test_c9e721436fd837814692c450db204c33326ff6d1",
    };

    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        verifyPaystackPayment(reference.trxref);
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log("closed");
    };

    const initializePayment = usePaystackPayment(config);
    const Ref = useRef(null);
    const [toggler, setToggler] = useState(false);
    const [key, setkey] = useState(0);
    const [timer, setTimer] = useState("00:00:00");
    const [cardD, setDetail] = useState(null);
    const dispatch = useDispatch();
    const router = useRouter();
    const [offer, setOffer] = useState(true);
    const [data, setData] = useState();
    const [imageD, setimageD] = useState([]);
    const [id, setId] = useState(0);
    const [percentage, setPercentage] = useState();
    const [days, setdays] = useState(0);
    const [distance, setDistance] = useState(null);
    const [hours, sethours] = useState(0);
    const [minute, setminute] = useState(0);
    const [seconds, setseconds] = useState(0);
    const [car, setCar] = useState(res);
    const [rate, setRate] = useState(res);
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
    const [totalAmount, setTotalAmount] = useState(0);
    const [collection, setcollection] = useState("");
    const [facilitationLocation, setfacilitationLocation] = useState("");
    const [vehicleLocation, setvehicleLocation] = useState("");
    const [carImages, setcarImages] = useState([]);
    const [noZipValue, setnoZipValue] = useState(false);
    const [truckingPrice, settruckingPrice] = useState(null);
    const [addTrucking, setaddTrucking] = useState(false);
    const [buyNowPrice, setbuyNowPrice] = useState(null);
    const [overview, setoverview] = useState(true);

    const retrieveData = () => {
        const userActive = localStorage.getItem("user");
        if (!userActive) {
            settoken(null);
            return null;
        }
        const item = JSON.parse(userActive);
        console.log(item);
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
        setuserEmail(item?.email);
        setuserPhone(item?.phone);
    }; //Get Data from local Storage

    useEffect(() => {
        retrieveData();
        return retrieveData;
    }, [router.pathname, token]);

    useEffect(() => {
        fetch(
            enviroment.BASE_URL +
                "collections/owner/collections/" +
                `${userId}`,
            {
                method: "GET",
                redirect: "follow",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        )
            .then(function (response) {
                return response.text();
            })
            .then((data) => {
                // console.log(data)
                if (data) {
                    //  console.log(data.data)
                    if (Object.entries(data).length >= 1) {
                        const formatCollection = JSON.parse(data); // console.log("new collection", formatCollection.data)
                        setcollection(formatCollection.data);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [userId, message]);

    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(window.innerWidth <= 760 ? 3 : 6);
    const [count, setCount] = useState(0);
    const [naira, setNaira] = useState(0);
    const user = useSelector(selectToken);
    const [size, setsize] = useState(4);

    const getZipLocation = () => {
        let initialZip = null;

        if (carDetails) {
            initialZip = `${carDetails.locationFullZipcode}`.substring(0, 5);
        }
        return initialZip;
    };

    const showMoreVehicles = () => {
        var num = 4;
        getSimilarVehicles(num);
        // console.log("my num", num)
    };

    const getSimilarVehicles = (num) => {
        let array = [];
        if (size === 12) {
            router.push("/search");
            return;
        }

        if (cars) {
            cars.data?.map((ele) => {
                if (ele.vehicleName !== "") {
                    array.push(ele);
                }
            });
        }
        setsize((num || 0) + size);
        const items = array.slice(0, size + (num || 0));
        setData(items);
    };

    useEffect(() => {
        setDetail(carDetails);
        setvin(carDetails.VIN);
        setname(carDetails.vehicleName);
        setprice(carDetails.mmrPrice);
        setyear(carDetails.year);
        setexteriorColor(carDetails.exteriorColor);
        setvehicleType(carDetails.vehicleType);
        setinteriorColor(carDetails.interiorColor);
        settransmission(carDetails.transmission);
        setodometer(carDetails.odometer);
        setdriveTrain(carDetails.driveTrain);
        setdoors(carDetails.doors);
        setmodel(carDetails.model);
        setmake(carDetails.make);
        setbodyStyle(carDetails.bodyType);
        setzip(carDetails.locationFullZipcode);
        setbidAmount(carDetails.buyNowPrice);
        setfacilitationLocation(carDetails.facilitationLocation);
        setvehicleLocation(carDetails.pickupLocation);
        setcarImages(carDetails.images);
        getZipLocation();

        setbuyNowPrice(carDetails.buyNowPrice);

        getSimilarVehicles();
        getRate();
        getSecondRate();
        displaySmall();
    }, [carDetails, cardD]);

    const getTrucking = {
        packingCode: `${getZipLocation()}`,
        packingName: "",
    };
    const fetchLocalTrucking = () => {
        if (getZipLocation() === "") {
            setnoZipValue(true);
            return;
        }

        fetch(enviroment.BASE_URL + "truck/code/" + getZipLocation(), {
            method: "GET",
            redirect: "follow",
        })
            .then((res) => {
                return res.text();
            })
            .then((data) => {
                const formatData = JSON.parse(data);
                console.log("local trucking", formatData.data);
                if (formatData?.data !== null) {
                    // console.log("has value")
                    console.log("local trucking", formatData.data.raw[1]);
                    settruckingPrice(formatData.data.raw[1]);
                } else {
                    fetchScrapperTrucking();
                }
            });
    };

    const fetchScrapperTrucking = () => {
        const getTrucking = {
            packingCode: `${getZipLocation()}`,
            packingName: "",
        };
        if (getZipLocation() === "") {
            setnoZipValue(true);
            return;
        }
        fetch("https://buylink-shiping.herokuapp.com/api/ng-trucking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                credentials: "same-origin",
            },
            body: JSON.stringify(getTrucking),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.status) {
                    createLocalTrucking(data);
                }
                console.log("scrapper trucking", data);
                settruckingPrice(data.raw[1]);
                console.log("scrapper trucking price", truckingPrice);
            });
    };

    const createLocalTrucking = (data) => {
        const localTruckingObject = {
            code: `${getZipLocation()}`,
            location: "",
            raw: [`${data.raw[0]}`, `${data.raw[1]}`],
        };

        fetch(enviroment.BASE_URL + "truck", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(localTruckingObject),
            redirect: "follow",
        })
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };
    useEffect(() => {
        if (typeof getZipLocation() !== "undefined") {
            console.log("zip", getZipLocation());
            fetchLocalTrucking();
        }
    }, []);
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

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
                <div
                    className=" bg-black bg-opacity-20 rounded-md"
                    style={{ width: "240px", height: "178px" }}
                >
                    <img
                        src={params.images[0].image_largeUrl}
                        alt="hello"
                        className="w-full h-full object-center rounded-md object-contain"
                    />
                </div>
            );
        }
    };

    function displaySmall() {
        let data = cardD?.images?.length;
        var size;
        if (window.innerWidth <= 760) {
            size = 3;
        } else {
            size = 6;
        }
        let count = cardD?.images?.length - size;
        setCount(count);
        if (data > window.innerWidth <= 760 ? 3 : 6) {
            let data = cardD?.images?.slice(page, size);
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
            size = 6;
        }
        let data = cardD?.images?.slice(page - size, limit - size);
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
            size = 6;
        }
        let data = cardD?.images?.slice(page + size, limit + size);
        setimageD(data);
        setPage(page + size);
        setLimit(limit + size);
        setCount(count - size);
    };
    const returnLargeimage = () => {
        const largeImageArray = cardD?.images.map((image) => {
            return image.image_largeUrl;
        });

        return largeImageArray;
    };
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
                        setToggler(!toggler);
                        console.log("large images", returnLargeimage());
                    }}
                    src={cardD?.images[id]?.image_largeUrl}
                    loading="lazy"
                    className="br-5 object-fit cursor-pointer"
                    width="715"
                    height="424"
                    alt="Benz"
                />
            </>
        );
    };

    const getSecondRate = () => {
        let key = "a57db18c0b5cc8ad31a650a1e456712f";
        try {
            fetch(enviroment.BASE_URL + "rates/613b98b1e28f970016362ae3", {
                method: "GET",
            })
                .then(function (response) {
                    return response.json();
                })
                .then((data) => {
                    setNaira(data.data.rate);
                    setTotalAmount(
                        parseInt(carDetails.buyNowPrice * data.data.rate)
                    );
                    setAmount(carDetails.buyNowPrice * data.data.rate);
                    setbidAmount(carDetails.buyNowPrice);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
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
                    if (data.success !== false) {
                        setNaira(data.rates.NGN);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    function renderCounter(e) {
        if (e !== null && distance > 0) {
            console.log(e, "pp");
            return (
                <>
                    <CountdownCircleTimer
                        size={186}
                        strokeWidth={2}
                        strokeWidth={2}
                        isPlaying
                        duration={distance}
                        colors={[["#0C74D4"], ["#F7B801"], ["#A30000"]]}
                    >
                        {/* {({ remainingTime }) =>
                            moment(carDetails.auctionEndTime)
                                .endOf("seconds")
                                .fromNow()
                        } */}
                    </CountdownCircleTimer>
                </>
            );
        } else {
            return (
                <CountdownCircleTimer
                    size={186}
                    strokeWidth={2}
                    isPlaying
                    duration={0}
                    colors={[["#004777"], ["#F7B801"], ["#A30000"]]}
                >
                    {/* {({ remainingTime }) =>
                        moment(carDetails.auctionEndTime)
                            .endOf("seconds")
                            .fromNow()
                    } */}
                </CountdownCircleTimer>
            );
        }
    }

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
            seterror(null);
            setisLoading(true);

            const bidObject = {
                vin: vin,
                link: "https://members.manheim.com/",
                name: name,
                site: "https://members.manheim.com/",
                price: price,
                year: year,
                exterior_color: exteriorColor,
                vehicle_type: vehicleType,
                interior_color: interiorColor,
                transmission: transmission,
                odometer: odometer,
                driveTrain: driveTrain,
                doors: doors,
                Model: model,
                make: make,
                equipment: "",
                EngineType: "",
                interior_type: "",
                body_style: bodyStyle,
                fuel_type: "",
                passengerCapacity: "",
                sellerCity: "",
                description: "",
                Zip: zip,
                bidAmount: bidAmount,
                owner: userId,
                collection: await placeItem(),
                facilitationLocation: facilitationLocation,
                Vehicle_location: vehicleLocation,
                images: carImages,
                trucking: truckingPrice || "",
                shipping: "",
            };
            console.log("bid object", bidObject);

            //Add car to collection
            fetch(enviroment.BASE_URL + "bids/add-bid", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bidObject),
                redirect: "follow",
            })
                .then((response) => {
                    setisLoading(false);
                    console.log("bid response", response);
                    if (!response.ok) {
                        placeBidInfo();
                    } else {
                        setmessage(response.statusText);
                        placeBidSuccess();
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
                if (currentCollection.vehicles.length < 10) {
                    filterCollection = currentCollection._id; // console.log(filterCollection)
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
                    if (!response.ok) {
                        // toastError()
                        // throw Error("Could not create collection")
                    } else {
                        setmessage(response.statusText);
                        return response.json(); // toastSuccess();
                    }
                })
                .then((data) => {
                    newCollection = data.data._id;
                })
                .catch((error) => {
                    seterror(error);
                    console.log("error", error);
                });
            return newCollection;
        }

        addCar();
    };
    const buyNowFunction = () => {
        const bidObject = {
            vin: vin,
            link: "https://members.manheim.com/",
            name: name,
            site: "https://members.manheim.com/",
            price: price,
            year: year,
            exterior_color: exteriorColor,
            vehicle_type: vehicleType,
            interior_color: interiorColor,
            transmission: transmission,
            odometer: odometer,
            driveTrain: driveTrain,
            doors: doors,
            Model: model,
            make: make,
            equipment: "",
            EngineType: "",
            interior_type: "",
            body_style: bodyStyle,
            fuel_type: "",
            passengerCapacity: "",
            sellerCity: "",
            description: "",
            Zip: zip,
            tilteImage: "",
            bidAmount: bidAmount,
            owner: userId,
            facilitationLocation: facilitationLocation,
            Vehicle_location: vehicleLocation,
            images: carImages,
            trucking: addTrucking ? truckingPrice : "",
            shipping: "",
        };
        console.log("bid object", bidObject);

        //Add car to buy now
        fetch(enviroment.BASE_URL + "bids/buy-now", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bidObject),
            redirect: "follow",
        })
            .then((response) => {
                setisLoading(false);
                console.log("bid response", response);
                if (!response.ok) {
                    buyNowInfo();
                } else {
                    setmessage(response.statusText);
                    buyNowSuccess();
                    hideCar(vin);
                    router.push("/transaction/" + vin);
                }
            })
            .catch((error) => {
                seterror(error);
                console.log("error", error);
            });
    };

    const hideCar = (vin) => {
        fetch("https://buylikepoint.us/bid.php?apiKey=Switch!2020&vin=" + vin, {
            method: "GET",
            redirect: "follow",
        })
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    const verifyPaystackPayment = (ref) => {
        fetch(enviroment.BASE_URL + "transactions/initialize/verify/" + ref, {
            method: "GET",
            redirect: "follow",
        })
            .then((res) => {
                console.log(res);
                return res.text();
            })
            .then((data) => {
                console.log(data);
                if (data) {
                    //  console.log(data.data)
                    if (Object.entries(data).length >= 1) {
                        const formatData = JSON.parse(data);
                        // setcollection(formatData.data);
                        console.log("callback", formatData);

                        if (formatData.data.status) {
                            buyNowFunction();
                            frontendPayment();
                        }
                    }
                }
            })
            .catch((error) => console.log("payment error", error));
    };

    const frontendPayment = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            vin: vin,
            number: `${userPhone}`,
            fullname: `${userNmae}`,
            email: `${userEmail}`,
            buyNow: true,
            username: "",
            collection: "612ccfeeac78e30b1e228a4e",
            owner: `${userId}`,
            vehicle: "61417e66e48f1a073799ba99",
            bid: bidAmount || "",
            amount: bidAmount,
            amountBalance: "1000",
            reference: "",
            currency: "",
            metadata: "",
            balance: "",
            status: false,
            statusTrans: "",
        });
        console.log("raw", raw);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch(enviroment.BASE_URL + "transactions/payment", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log("front end payment", result))
            .catch((error) => console.log("error", error));
    };

    function getTimeRemaining(e) {
        const total = Date.parse(e) - Date.parse(new Date());
        setDistance(total / 1000);
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / (1000 * 60)) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        let days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total,
            hours,
            minutes,
            seconds,
            days,
        };
    }

    const setFees = (e, type, value) => {
        switch (type) {
            case "truck":
                if (e.target.checked === true) {
                    setaddTrucking(true);
                    setTotalAmount(
                        parseInt(totalAmount) + parseInt(value) * naira
                    );
                } else {
                    setaddTrucking(false);
                    setTotalAmount(
                        parseInt(totalAmount) - parseInt(value) * naira
                    );
                }
                break;
            case "ship":
                if (e.target.checked === true) {
                    setTotalAmount(
                        parseInt(totalAmount) + parseInt(value) * naira
                    );
                } else {
                    setTotalAmount(
                        parseInt(totalAmount) - parseInt(value) * naira
                    );
                }
                break;
            case "clear":
                if (e.target.checked === true) {
                    setTotalAmount(
                        parseInt(totalAmount) + parseInt(value) * naira
                    );
                } else {
                    setTotalAmount(
                        parseInt(totalAmount) - parseInt(value) * naira
                    );
                }
                break;
            default:
                break;
        }
    };

    function startTimer(e) {
        let { total, hours, minutes, seconds, days } = getTimeRemaining(e);
        if (total >= 0) {
            sethours(hours);
            setminute(minutes);
            setseconds(seconds);
            setdays(days);
        }
    }

    function clearTimer(e) {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    }

    function getDeadTime() {
        let deadline = new Date(carDetails.auctionEndTime);
        deadline.setSeconds(deadline.getSeconds());
        return deadline;
    }

    //
    //
    //
    if (!cardD) {
        // reRender();
        return <div className="App">Loading...</div>;
    }
    //
    //

    return (
        <main>
            <ToastContainer />
            {cardD && cardD.auctionEndTime && (
                <>
                    <div className="flex flex-wrap justify-center pt-20 px-5 xl:px-0">
                        <div className="details-border-b py-1 block lg:hidden">
                            <p className="font-13 font-bold primary-color">
                                {cardD.vehicleName}
                            </p>

                            <div className="flex mt-1.5">
                                <div className="flex">
                                    <p className="font-11 primary-gray font-medium">
                                        {Object.entries(cardD?.mileage).length}
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
                        <div className="w-full lg:w-3/5">
                            <div>
                                <div>{displayLargeimage()}</div>
                                <div className="overflow-hidden">
                                    <div
                                        className="flex justify-start h-full transition-all mt-3
                                "
                                    >
                                        <div
                                            className={
                                                page >=
                                                (window.innerWidth < 760
                                                    ? 3
                                                    : 6)
                                                    ? "flex mr-2 md:mr-4 animate-bounce items-center text-xs font-mono justify-center  "
                                                    : "flex mr-2 md:mr-4  opacity-20  pointer-events-none items-center text-xs font-mono justify-center  "
                                            }
                                            style={{
                                                height: "60.03px",
                                                width: "20px",
                                            }}
                                        >
                                            <button
                                                onClick={() => prevPage(page)}
                                            >
                                                <img src="https://img.icons8.com/ios-filled/50/000000/double-left.png" />
                                            </button>
                                        </div>
                                        {imageD &&
                                            imageD.map((ele, id) => (
                                                <div
                                                    key={id}
                                                    onClick={() =>
                                                        setId(page + id)
                                                    }
                                                    className="mr-3 h-full  transition-all cursor-pointer transform hover:scale-105"
                                                    style={{
                                                        width: "9%",
                                                    }}
                                                >
                                                    <img
                                                        src={
                                                            ele?.image_largeUrl
                                                        }
                                                        className="rounded-md shadow-sm"
                                                        style={{
                                                            height: "60.3px",
                                                        }}
                                                        alt=""
                                                    />
                                                </div>
                                            ))}
                                        {imageD &&
                                        imageD.length ===
                                            (window.innerWidth <= 760
                                                ? 3
                                                : 6) &&
                                        count > 0 ? (
                                            <div
                                                className="rounded-md w-1/6 flex items-center text-xs font-mono justify-center relative shadow-sm"
                                                style={{
                                                    height: "60.3px",
                                                    backgroundImage: `url(${cardD.images[6].image_largeUrl})`,
                                                    backgroundSize: "cover",
                                                    width: "9%",
                                                }}
                                            >
                                                <div
                                                    className=" rounded-md shadow-sm cursor-pointer absolute top-0 left-0 text-center right-0 bottom-0 bg-black
                        bg-opacity-40 text-white flex items-center justify-center
                        "
                                                    style={{ fontSize: "10px" }}
                                                    onClick={() =>
                                                        nextPage(page)
                                                    }
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
                        </div>
                        <div className="car-details-holder px-4 pt-4 pb-12">
                            <div className="details-border-b px-7 lg:px-0 mt-3 lg:mt-0 py-1 hidden lg:block">
                                <p className="text-base font-bold primary-color">
                                    {`${cardD?.vehicleName}`}
                                </p>

                                <div className="flex mt-1.5">
                                    <div className="flex">
                                        <p className="font-11 primary-gray font-medium">
                                            {Object.entries(cardD?.mileage)
                                                .length <= 2
                                                ? ""
                                                : cardD?.mileage.replace(
                                                      "/",
                                                      "."
                                                  )}
                                        </p>
                                        <p className="font-11 ml-2 primary-gray font-medium">
                                            VIN: {cardD.VIN}
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        {cardD.buyNowPrice.length > 2 ? (
                                            <p className="primary-color text-xs font-medium">
                                                BUY NOW @ {""}
                                                {""}
                                                {dollarFormatter.format(
                                                    carDetails.buyNowPrice
                                                )}
                                            </p>
                                        ) : (
                                            parseFloat(
                                                cardD.mmrPrice * naira
                                            ).toLocaleString()
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-4 lg:mt-0">
                                <div className="details-tab  cursor-pointer active w-full font-10 font-semibold  primary-black py-0.5 ">
                                    <p href className="py-2">
                                        Offer Amount
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
                                {offer && (
                                    <div
                                        className="tabcontent"
                                        id="offer-amount"
                                    >
                                        <div className="edit-holder my-1.5 px-3  flex items-center">
                                            <table>
                                                <tbody>
                                                    <tr className="">
                                                        <td className="text-xs font-medium sec-gray pr-6">
                                                            <label htmlFor="amount">
                                                                Add amount to
                                                                bid
                                                            </label>
                                                        </td>
                                                        <td className="text-xs font-medium sec-black">
                                                            <input
                                                                value={
                                                                    bidAmount
                                                                }
                                                                id="amount"
                                                                className=" w-full focus:outline-none"
                                                                type="text"
                                                                placeholder="$8,000"
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

                                                    {noZipValue ? (
                                                        <td className="font-11 sec-black font-normal py-2">
                                                            <>Contact Support</>
                                                            <a
                                                                href="https://api.whatsapp.com/send?phone=15551234567"
                                                                style={{
                                                                    margin: "0 10px",
                                                                }}
                                                            >
                                                                <i
                                                                    style={{
                                                                        fontSize:
                                                                            "17px",
                                                                        color: "green",
                                                                    }}
                                                                    className="fa fa-whatsapp"
                                                                ></i>
                                                            </a>
                                                            <a
                                                                href="mailto:test@example.com"
                                                                style={{
                                                                    margin: "0 10px",
                                                                }}
                                                            >
                                                                <i
                                                                    style={{
                                                                        fontSize:
                                                                            "17px",
                                                                        color: "blue",
                                                                    }}
                                                                    className="fa fa-envelope-o"
                                                                ></i>
                                                            </a>
                                                        </td>
                                                    ) : (
                                                        <>
                                                            <td className="font-11 sec-black font-normal pr-20 py-2">
                                                                {truckingPrice
                                                                    ? `${truckingPrice}`
                                                                    : "Loading..."}
                                                            </td>
                                                            <td className="text-right px-2">
                                                                <label className="detail">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="focus:outline-none detail self-center"
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setFees(
                                                                                e,
                                                                                "truck",
                                                                                truckingPrice.slice(
                                                                                    1
                                                                                )
                                                                            )
                                                                        }
                                                                    />
                                                                    <span className="detail"></span>
                                                                </label>
                                                            </td>
                                                        </>
                                                    )}
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black font-11 font-semibold w-28 p-2">
                                                        Shipping
                                                    </td>
                                                    <td className="font-11 sec-black font-normal pr-20 py-2">
                                                        $1,050
                                                    </td>
                                                    <td className="text-right px-2">
                                                        <label className="detail">
                                                            <input
                                                                type="checkbox"
                                                                className="focus:outline-none detail self-center"
                                                                onChange={(e) =>
                                                                    setFees(
                                                                        e,
                                                                        "ship",
                                                                        1050
                                                                    )
                                                                }
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
                                                        <label className="detail">
                                                            <input
                                                                type="checkbox"
                                                                className="focus:outline-none detail self-center"
                                                                onChange={(e) =>
                                                                    setFees(
                                                                        e,
                                                                        "clear",
                                                                        2000000
                                                                    )
                                                                }
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
                                                        N
                                                        {totalAmount.toLocaleString()}
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
                                                <tr className="detail-row">
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
                                                        {truckingPrice
                                                            ? `${truckingPrice}`
                                                            : "Loading..."}
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
                                        I agree with {""}
                                        <span className="primary-blue">
                                            terms and conditions
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                {token ? (
                                    <>
                                        {carDetails?.buyNowPrice?.length >=
                                        1 ? (
                                            <button
                                                onClick={() => {
                                                    initializePayment(
                                                        onSuccess,
                                                        onClose
                                                    );
                                                    console.log(
                                                        referenceNumber()
                                                    );
                                                }}
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
                                                    "Buy Now"
                                                )}
                                            </button>
                                        ) : (
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
                                                )}
                                            </button>
                                        )}
                                    </>
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
                    </div>

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
                                <div
                                    style={{ padding: "15px" }}
                                    className="timer-container relative"
                                >
                                    {distance !== null && (
                                        <div>{renderCounter(distance)}</div>
                                    )}

                                    <div className="timer text-center">
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

                                        <div className=" flex w-full justify-center mt-3">
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
                                        </div>

                                        <p className="font-9 font-semibold text-center primary-gray pt-4">
                                            TIME LEFT
                                        </p>
                                        <div className="flex mt-1.5 justify-center">
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
                                        </div>
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

                    <div className="py-4 overview-section">
                        <div className="flex justify-center px-5">
                            <div
                                onClick={() => {
                                    setoverview(true);
                                }}
                                className={
                                    "overview-tab relative lg:px-4 lg:text-sm text-xs font-semibold  primary-black lg:py-0.5 " +
                                    (overview ? " active" : "")
                                }
                            >
                                <p className="lg:py-1.5 ">OVERVIEW</p>
                            </div>

                            <div
                                onClick={() => {
                                    setoverview(false);
                                }}
                                className={
                                    "overview-tab text-xs relative lg:px-4 lg:text-sm font-semibold  primary-black lg:py-0.5 " +
                                    (!overview ? " active" : "")
                                }
                            >
                                <p className="lg:py-1.5">AUCTION INFO</p>
                            </div>
                        </div>
                        <div
                            className={
                                overview
                                    ? "flex flex-wrap px-5 justify-center mt-6 "
                                    : " hidden"
                            }
                        >
                            <div>
                                <table className="min-w-full border-separate overview-table">
                                    <tbody>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Vehicle Name
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.vehicleName}
                                            </td>
                                        </tr>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Vehicle VIN
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                <span className="truncate overflow-hidden overflow-ellipsis ">
                                                    {cardD?.VIN}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Interior Color
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                <span className="truncate overflow-hidden overflow-ellipsis ">
                                                    {cardD?.sourceInteriorColor}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Mileage
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {Object.entries(cardD?.mileage)
                                                    .length <= 2
                                                    ? ""
                                                    : cardD?.mileage.replace(
                                                          "/",
                                                          "."
                                                      )}
                                            </td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Year
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.year || "Not Specified"}
                                            </td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Drive train
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.driveTrain}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="lg:ml-3">
                                <table className="min-w-full border-separate overview-table">
                                    <tbody>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Make
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.make}
                                            </td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Model
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.model}
                                            </td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-44 py-3 lg:px-5 px-2">
                                                Engine Fuel Type
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 w-1/2">
                                                {cardD?.sourceEngineFuelType}
                                            </td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Exterior Color
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.sourceExteriorColor}
                                            </td>
                                        </tr>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Body type
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.bodyType}
                                            </td>
                                        </tr>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Doors
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.doors}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div
                            className={
                                !overview
                                    ? "flex flex-wrap px-5 justify-center mt-6 "
                                    : " hidden"
                            }
                        >
                            <div>
                                <table className="min-w-full border-separate overview-table">
                                    <tbody>
                                        <tr className="detail-row">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Facilitation Location
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.facilitationLocation}
                                            </td>
                                        </tr>

                                        <tr className="detail-row">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Seller City
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                <span className="truncate overflow-hidden overflow-ellipsis ">
                                                    {cardD?.sellerCity}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr className="detail-row">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Seller State
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.sellerState}
                                            </td>
                                        </tr>

                                        <tr className="detail-row">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Seller Phone
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.sellerPhone}
                                            </td>
                                        </tr>

                                        <tr className="detail-row">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Seller Rating
                                            </td>
                                            <td className="text-sm md:text-base sec-black font-normal py-2 w-1/2">
                                                {cardD?.sellerRating}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="lg:ml-3">
                                <table className="min-w-full border-separate overview-table">
                                    <tbody>
                                        <tr className="detail-row">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Bidding Price
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.mmrPrice}
                                            </td>
                                        </tr>
                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Pickup Location
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                <span className="truncate overflow-hidden overflow-ellipsis ">
                                                    {cardD?.pickupLocation}
                                                </span>
                                            </td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Auction End Time
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.auctionEndTime}
                                            </td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                Buy Now Price
                                            </td>
                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                {cardD?.buyNowPrice ||
                                                    "Not specified"}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="relative w-full flex flex-wrap px-5 justify-center mt-6">
                            <details className="relative justify-center overflow-hidden">
                                <div className="content mb-2 w-full h-full">
                                    <div className="w-full flex flex-col md:flex-row items-start  justify-center mt-6">
                                        <table className="w-full md:w-1/2 overflow-hidden   border-separate ">
                                            <tbody>
                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Passenger Capacity
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {
                                                            cardD?.passengerCapacity
                                                        }
                                                    </td>
                                                </tr>

                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Vehicle Type
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {cardD?.vehicleType}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Engine Type
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {
                                                            cardD?.sourceEngineType
                                                        }
                                                    </td>
                                                </tr>

                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Body Type
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {cardD?.bodyType}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Odometer
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {cardD?.odometer}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Transmission
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {cardD?.transmission ||
                                                            "Not Specified"}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Buy Now Price
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {cardD?.buyNowPrice ||
                                                            "Not specified"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className="w-full md:w-1/2 overflow-hidden  border-separate">
                                            <tbody>
                                                <tr className="detail-row">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Seller City
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        <span className="truncate overflow-hidden overflow-ellipsis ">
                                                            {cardD?.sellerCity}
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Seller State
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {cardD?.sellerState}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Facilitation Location
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {
                                                            cardD?.facilitationLocation
                                                        }
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Seller Phone
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {cardD?.sellerPhone}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Seller Rating
                                                    </td>
                                                    <td className="text-sm md:text-base sec-black font-normal py-2 lg:md:pr-8 w-1/2">
                                                        {cardD?.sellerRating}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Bidding Price
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {cardD?.mmrPrice}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <summary className="h-8 w-full text-center primary-blue font-semibold text-sm">
                                    Show More Details
                                </summary>
                            </details>
                        </div>
                    </div>
                    <section className="overview-section w-full py-3 px-7">
                        <div className="text-center py-3">
                            <hr className="red-underline2 w-20 m-auto pb-4" />
                            <h4 className="font-bold primary-color text-xl ">
                                SIMILAR VEHICLES
                            </h4>
                        </div>
                        <div
                            className="flex justify-center flex-wrap mt-4 display-type"
                            id="car-grid"
                        >
                            {data?.length > 0 &&
                                data?.map(
                                    (ele, id) =>
                                        ele.vehicleName && (
                                            <div
                                                key={id}
                                                className="similar-cars-holder p-3 mr-4 mb-5 lg:mb-0 cursor-pointer"
                                                style={
                                                    {
                                                        // width: "240px",
                                                        // height: "178px",
                                                    }
                                                }
                                                onClick={() => {
                                                    dispatch(carDetail(ele)),
                                                        router.push({
                                                            pathname:
                                                                "/search/" +
                                                                ele.VIN,
                                                        });
                                                }}
                                            >
                                                {addImage(ele)}
                                                <p class="pt-2 primary-black font-medium text-xs"></p>
                                                <div className="flex pt-2">
                                                    <p className="flex items-center sec-black font-10">
                                                        <span class="mr-1">
                                                            <img
                                                                src="../assets/img/vectors/red-location-beacon.svg"
                                                                alt="location"
                                                            />
                                                        </span>
                                                        {ele?.pickupLocation}
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
                                                <div class="flex font-11 primary-gray pt-1">
                                                    <p>{ele?.year}</p>
                                                    <p class="ml-3.5">
                                                        {Object.entries(
                                                            ele?.mileage
                                                        ).length <= 2
                                                            ? ""
                                                            : ele?.mileage.replace(
                                                                  "/",
                                                                  "."
                                                              )}
                                                    </p>
                                                </div>
                                                <div className="flex pt-2">
                                                    <p class=" sec-black text-base">
                                                        ${ele?.buyNowPrice}
                                                    </p>
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
                                        )
                                )}
                        </div>

                        <div className="text-center my-5">
                            <p
                                onClick={() => {
                                    showMoreVehicles();
                                }}
                                className="primary-blue font-semibold text-sm cursor-pointer"
                            >
                                Show More Vehicles
                            </p>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
};

const mapStateToProps = (state) => {
    const { carDetails, cars, carCollection } = state.Cars;
    return { carDetails, cars, carCollection };
};

export default connect(mapStateToProps, { getCollection })(CarDetails);
