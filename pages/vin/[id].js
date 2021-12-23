import React, { useState, useEffect, useRef } from "react";
import FsLightbox from "fslightbox-react";
import { useRouter } from "next/router";
import { connect, useSelector } from "react-redux";
import { selectToken } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { carDetail, getCollection } from "../../redux/actions/carsAction";
import Link from "next/link";
import Meta from "../../src/components/Head/Meta";
import { enviroment } from "../../src/components/enviroment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { usePaystackPayment } from "react-paystack";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import ReactFlagsSelect from "react-flags-select";
var moment = require("moment");
import { searchCars } from "../../redux/actions/carsAction";
import countryList from 'react-select-country-list'
import { useMemo } from "react";
import Select from "react-select";

const Url = "https://buylikepoint.us/json.php/view.php";

//
//

//
//
const CarDetails = ({ cars, loading, res, carDetail }) => {
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

    var dollarFormatter = new Intl.NumberFormat();

     //Country List
     const options = useMemo(() => countryList().getData(), [])

    const [selectedCountryCurrency, setSelectedCountryCurrency] = useState(
        carDestination === "Nigeria" ? "US" : "NG"
    );
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
    const [waterMarkToggle, setWaterMarkToggle] = useState(false);
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
    const [totalAmount, setTotalAmount] = useState(123);
    const [collection, setcollection] = useState("");
    const [facilitationLocation, setfacilitationLocation] = useState("");
    const [vehicleLocation, setvehicleLocation] = useState("");
    const [carImages, setcarImages] = useState([]);
    const [noZipValue, setnoZipValue] = useState(false);
    const [truckingPrice, settruckingPrice] = useState(null);
    const [addTrucking, setaddTrucking] = useState(false);
    const [buyNowPrice, setbuyNowPrice] = useState(null);
    const [overview, setoverview] = useState(true);
    const [carDestination, setcarDestination] = useState("");
    const [deliveryDuration, setdeliveryDuration] = useState(36288e5);
    const [NGN, setNGN] = useState(true);
    const dollarPrice = Number(totalAmount) / parseInt(usd);
    const [maxBidAmount, setmaxBidAmount] = useState("");
    const [sendSheetModal, setsendSheetModal] = useState(false);
    const [sendSheetPhoneNumber, setsendSheetPhoneNumber] = useState("");
    const [sendSheetEmail, setsendSheetEmail] = useState("");
    const [sheetError, setsheetError] = useState(false);
    const [shareSuccess, setshareSuccess] = useState(false);
    const [userIp, setuserIp] = useState(null)

    const retrieveData = () => {
        localStorage.removeItem('temp')
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
        setuserEmail(item?.email);
        setuserPhone(item?.phone);
    }; //Get Data from local Storage


    const setCountry = () => {
        const userCountry = localStorage.getItem("userCountry");
        // console.log(userActive)
        if (!userCountry) {
            // localStorage.setItem("userCountry");
            setuserIp(null);
            return null;
        }
        const item = JSON.parse(userCountry)
        setuserIp(item.countryCode)

        console.log("user ip", userIp)

    }


    

    useEffect(() => {
        retrieveData();
        return retrieveData;
    }, [router.pathname, token]);

    useEffect(() => {
        setCountry()
        if(userIp) {
            if(userIp === "NG") {
                setcarDestination(options[161])
                setSelectedCountryCurrency("NG")
            } else {
                setcarDestination(options[236])
                setSelectedCountryCurrency("US")
                setNGN(false)
            }
        }
        return () => {
            setCountry()
        }
    }, [router.pathname, token, userIp])

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
    const [limit, setLimit] = useState(window.innerWidth <= 760 ? 3 : 8);
    const [count, setCount] = useState(0);
    const [naira, setNaira] = useState(0);
    const [usd, setUsd] = useState(0);
    const user = useSelector(selectToken);
    const [size, setsize] = useState(4);

    const getZipLocation = () => {
        let initialZip = null;

        if (carDetail) {
            initialZip = `${carDetail.locationFullZipcode}`.substring(0, 5);
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
            router.push("/vin");
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
        const items = array?.slice(0, size + (num || 0));
        setData(items);
    };

    useEffect(() => {
        setvin(carDetail?.VIN);
        setname(carDetail?.vehicleName);
        setprice(carDetail?.mmrPrice);
        setyear(carDetail?.year);
        setexteriorColor(carDetail?.exteriorColor);
        setvehicleType(carDetail?.vehicleType);
        setinteriorColor(carDetail?.interiorColor);
        settransmission(carDetail?.transmission);
        setodometer(carDetail?.odometer);
        setdriveTrain(carDetail?.driveTrain);
        setdoors(carDetail?.doors);
        setmodel(carDetail?.model);
        setmake(carDetail?.make);
        setbodyStyle(carDetail?.bodyType);
        setzip(carDetail?.locationFullZipcode);
        setbidAmount(carDetail?.buyNowPrice);

        setfacilitationLocation(carDetail?.facilitationLocation);
        setvehicleLocation(carDetail?.pickupLocation);
        setcarImages(carDetail?.images);
        getZipLocation();

        setbuyNowPrice(carDetail?.buyNowPrice);

        getSimilarVehicles();
        getRate();
        getLocalRate();
        getSecondRate();
        displaySmall();

        if (!carDetail?.buyNowPrice && carDetail?.mmrPrice) {
            setOffer(false);
        }
    }, [carDetail, cardD]);

    useEffect(() => {
        if (carDetail) {
            setDetail(carDetail);
        }
    }, [carDetail]);

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
                if (formatData?.data !== null) {
                    console.log(formatData.data.raw[1])
                    settruckingPrice(formatData.data.raw[1] || 0);
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
                settruckingPrice(data.raw[1] || 0);
                console.log(data.raw[1])
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
            fetchLocalTrucking();
        }
    }, []);

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    useEffect(() => {
        setTotalAmount((Number(carDetail?.buyNowPrice) + 300) * Number(usd));
    }, [usd]);

    const openForm = (evt, status) => {
        if (status !== offer) {
            setOffer(status);
            let i, tabcontent, tablinks;

            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            tablinks = document.getElementsByClassName("buy-now-tab");
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
                    className={
                        !params.images?.length
                            ? "bg-white bg-opacity-20 rounded-md"
                            : "bg-black bg-opacity-20 rounded-md"
                    }
                    style={{ width: "240px", height: "178px" }}
                >
                    {params.images?.length ? (
                        <img
                            src={`https://proxybuylike.herokuapp.com/?url=${params.images[0].image_largeUrl}`}
                            alt="hello"
                            className="w-full h-full object-center rounded-md object-contain"
                        />
                    ) : (
                        <img
                            src="../../img/Rectangle.png"
                            loading="lazy"
                            className="br-5 w-full h-full object-contain object-center"
                            alt="Coming soon"
                        />
                    )}
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
            size = 8;
        }
        let count = cardD?.images?.length - size;
        setCount(count);
        if (data > window.innerWidth <= 760 ? 3 : 8) {
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
            size = 8;
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
            size = 8;
        }
        let data = cardD?.images?.slice(page + size, limit + size);
        setimageD(data);
        setPage(page + size);
        setLimit(limit + size);
        setCount(count - size);
    };
    const returnLargeimage = () => {
        const largeImageArray = cardD?.images.map((image) => {
            return `https://proxybuylike.herokuapp.com/?url=${image.image_largeUrl}`;
        });
        return largeImageArray;
    };
    const displayLargeimage = () => {
        // console.log(toggler)
        return (
            <>
                <FsLightbox
                    toggler={toggler}
                    sources={returnLargeimage()}
                    type="image"
                    className="relative"
                    onClose={() => setWaterMarkToggle(false)}
                />
                <img
                    onClick={() => {
                        setToggler(!toggler);
                        setWaterMarkToggle(true);
                    }}
                    src={`https://proxybuylike.herokuapp.com/?url=${cardD?.images[id]?.image_largeUrl}`}
                    loading="lazy"
                    className="br-5 w-full h-full object-cover object-center cursor-pointer"
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
                        (Number(carDetail?.buyNowPrice) + 300) * Number(naira)
                    );
                    setAmount(carDetail?.buyNowPrice * data.data.rate);
                    setbidAmount(carDetail?.buyNowPrice);
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

    const getLocalRate = () => {
        let id = "613b98b1e28f970016362ae3";
        try {
            fetch(enviroment.BASE_URL + "rates/" + `${id}`, {
                method: "GET",
            })
                .then(function (response) {
                    return response.json();
                })
                .then((data) => {
                    if (data.error === false) {
                        setUsd(data.data.rate);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };
    const getTimeHours = (time) => ((time % 86400) / 3600) | 0;

    const renderTime = (dimension, time) => {
        return (
            <div className="time-wrapper">
                <div className="time">{time}</div>
                <div>{dimension}</div>
            </div>
        );
    };

    function renderCounter(e) {
        if (e !== null && distance > 0) {
            return (
                <>
                    <CountdownCircleTimer
                        size={186}
                        strokeWidth={2}
                        strokeWidth={2}
                        isPlaying
                        duration={86400}
                        colors={[["#0C74D4"], ["#F7B801"], ["#A30000"]]}
                        initialRemainingTime={distance % 86400}
                    >
                        {/* {({ remainingTime }) =>
                            moment(carDetail.auctionEndTime)
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
                        moment(carDetail.auctionEndTime)
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
    const now = new Date();
    const bidData = () => ( {
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
        auctionEndTime: carDetail?.auctionEndTime,
        trucking: truckingPrice.includes(",") ?  (truckAccessory ? ( Number(truckingPrice?.slice(1).replace(/,/g, '')) > 1000
        ? Number(truckingPrice?.slice(1).replace(/,/g, '')) / 3
        : Number(truckingPrice?.slice(1).replace(/,/g, '')) > 400 &&
          Number(truckingPrice?.slice(1).replace(/,/g, '')) < 1000
        ? Number(truckingPrice?.slice(1).replace(/,/g, '')) / 2
        : Number(truckingPrice?.slice(1).replace(/,/g, ''))) : 0) 

        : 
        
        ((truckAccessory ? ( Number(truckingPrice?.slice(1)) > 1000
        ? Number(truckingPrice?.slice(1)) / 3
        : Number(truckingPrice?.slice(1)) > 400 &&
          Number(truckingPrice?.slice(1)) < 1000
        ? Number(truckingPrice?.slice(1)) / 2
        : Number(truckingPrice?.slice(1))) : 0)),
        shipping: shipAccessory ? "1150" : 0,
        expiry: now.getTime() + 3600000,
        total: accessories(),
        carDestination: carDestination?.label
    });
    const buyNowFunction = () => {

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
                return res.text();
            })
            .then((data) => {
                if (data) {
                    //  console.log(data.data)
                    if (Object.entries(data).length >= 1) {
                        const formatData = JSON.parse(data);
                        // setcollection(formatData.data);
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
                    setTotalAmount(parseInt(totalAmount) + parseInt(value));
                } else {
                    setTotalAmount(parseInt(totalAmount) - parseInt(value));
                }
                break;
            case "serviceFee":
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
            case "bidClear":
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
        let deadline = new Date(carDetail?.auctionEndTime);
        deadline.setSeconds(deadline.getSeconds());
        return deadline;
    }
    const bidAmountRef = useRef("");
    const formatbidAmount = () => {
        setmaxBidAmount(dollarFormatter.format(maxBidAmount));
    };
    const removeComma = () => {
        setmaxBidAmount(bidAmountRef.current.value.replace(/\,/g, ""));
    };

    const removeAlpha = () => {
        const re = /^[0-9\b]+$/;

        // if value is not blank, then test the regex

        if (re.test(bidAmountRef.current.value)) {
            setmaxBidAmount(bidAmountRef.current.value);
        }
    };
    const [bidval, setbidval] = useState(0);
    const [totalAmountPlusBid, settotalAmountPlusBid] = useState(0);
    const includeMaxBid = (e) => {
        setmaxBidAmount(e.target.value);
        // setbidval(maxBidAmount || 0);
        // settotalAmountPlusBid(Number(bidval));

        // console.log("bidval", bidval)
        // console.log("total", totalAmountPlusBid)
    };

    useEffect(() => {
        if (carDestination === "Nigeria") {
            setdeliveryDuration(36288e5);
        } else {
            setdeliveryDuration(12096e5);
        }
    }, [carDestination]);

    const convertCurrency = (code) => {
        if (code === "NG") {
            setNGN(true);
        } else {
            setNGN(false);
        }
    };

    const OpenSendSheetModal = () => {
        if (token) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const sendSheetObj = JSON.stringify({
                email: userEmail,
                name:
                    cardD.vehicleName ||
                    `${cardD.year} ${cardD.make} ${cardD.model}`,
                phone: userPhone,
                vin: cardD.VIN,
                url:
                    "https://buylike-web-git-ts-buylike-web.vercel.app/vin/" +
                    cardD.VIN,
                amount: cardD?.buyNowPrice || cardD?.mmrPrice,
                make: cardD.make,
                model: cardD.model,
                year: cardD.year,
            });

            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: sendSheetObj,
                redirect: "follow",
            };

            fetch(enviroment.BASE_URL + "bids/spreadsheet", requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    const returnData = JSON.parse(result);
                    if (returnData.error === false) {
                        router.push("/success");
                    }
                })
                .catch((error) => console.log("error", error));

            // window.open(`https://api.whatsapp.com/send?text=check%20out%20this%20car%20%20${encodeURIComponent(cardD?.vehicleName)}%20%20www.buylikedealers.com/${cardD?.VIN}`, '_blank')
        } else {
            setsendSheetModal(true);
        }
    };

    const sheetNumberRef = useRef(null);
    const phoneNumberChange = () => {
        // setsendSheetPhoneNumber()
        setsendSheetPhoneNumber(
            `+${sheetNumberRef.current.selectedCountryData.dialCode}` +
                `${sheetNumberRef.current.state.value}`
        );
    };

    const sendSheet = (e) => {
        setsheetError(false);
        e.preventDefault();
        if (
            sheetNumberRef.current.state.value === "" ||
            sendSheetEmail === ""
        ) {
            setsheetError(true);
            return;
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const sendSheetObj = JSON.stringify({
            email: sendSheetEmail,
            name:
                cardD.vehicleName ||
                `${cardD.year} ${cardD.make} ${cardD.model}`,
            phone: sendSheetPhoneNumber,
            vin: cardD.VIN,
            url:
                "https://buylike-web-git-ts-buylike-web.vercel.app/vin/" +
                cardD.VIN,
            amount: cardD?.buyNowPrice || cardD?.mmrPrice,
            make: cardD.make,
            model: cardD.model,
            year: cardD.year,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: sendSheetObj,
            redirect: "follow",
        };

        fetch(enviroment.BASE_URL + "bids/spreadsheet", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const returnData = JSON.parse(result);
                if (returnData.error === false) {
                    router.push("/success");
                }
            })
            .catch((error) => console.log("error", error));

        setsendSheetModal(false);
        window.open(
            `https://api.whatsapp.com/send?phone=+17135130111&&text=check%20out%20this%20car%20%20${encodeURIComponent(
                cardD?.vehicleName
            )}%20%20www.buylikedealers.com/vin/${cardD?.VIN}`,
            "_blank"
        );
    };

    const getAuctionFee = (price) => {
        const auctionFee = Number(price) <= 5000 ? 350 : Number(price) > 5000 && Number(price) <= 14000 ? 450 : Number(price) > 14000 && Number(price) <= 70000 ? (3.25 / 100) * Number(price) : Number(price) > 70000 ? 2500 : 0
        return auctionFee;
    }

    //
    const [truckAccessory, settruckAccessory] = useState(true);
    const [shipAccessory, setshipAccessory] = useState(true);

    const accessories = () => {
        var carPrice = Number(carDetail.buyNowPrice);
        var outstanding = 400 + getAuctionFee(cardD?.buyNowPrice);;
        var truck = 0;
        var ship = 0;

        if (truckAccessory === true) {
            // setaddTrucking(true);
            if(truckingPrice?.includes(",")) {
                
                truck =
                Number(truckingPrice?.slice(1).replace(/,/g, '')) > 1000
                    ? Number(truckingPrice?.slice(1).replace(/,/g, '')) / 3
                    : Number(truckingPrice?.slice(1).replace(/,/g, '')) > 400 &&
                      Number(truckingPrice?.slice(1).replace(/,/g, '')) < 1000
                    ? Number(truckingPrice?.slice(1).replace(/,/g, '')) / 2
                    : Number(truckingPrice?.slice(1).replace(/,/g, ''));
            } else {
                truck =
                    Number(truckingPrice?.slice(1)) > 1000
                        ? Number(truckingPrice?.slice(1)) / 3
                        : Number(truckingPrice?.slice(1)) > 400 &&
                          Number(truckingPrice?.slice(1)) < 1000
                        ? Number(truckingPrice?.slice(1)) / 2
                        : Number(truckingPrice?.slice(1));

            }
        } else {
            // setaddTrucking(false);
            truck = 0;
        }

        if (shipAccessory === true) {
            // setaddTrucking(true);
            ship = 1150;
        } else {
            // setaddTrucking(false);
            ship = 0;
        }

        // console.log(outstanding, truck, ship)
        return carPrice + outstanding + truck + ship;
    };

    const [placebidTruckAccessory, setplacebidTruckAccessory] = useState(true);
    const [placebidShipAccessory, setplacebidShipAccessory] = useState(true);

    const placebidAccessories = () => {
        // console.log(Number(maxBidAmount))
        var outstanding = 400 + getAuctionFee(cardD?.mmrPrice);
        var truck = 0;
        var ship = 0;

        if (placebidTruckAccessory === true) {
            // setaddTrucking(true);
            if(truckingPrice?.includes(",")) {
                
                truck =
                Number(truckingPrice?.slice(1).replace(/,/g, '')) > 1000
                    ? Number(truckingPrice?.slice(1).replace(/,/g, '')) / 3
                    : Number(truckingPrice?.slice(1).replace(/,/g, '')) > 400 &&
                      Number(truckingPrice?.slice(1).replace(/,/g, '')) < 1000
                    ? Number(truckingPrice?.slice(1).replace(/,/g, '')) / 2
                    : Number(truckingPrice?.slice(1).replace(/,/g, ''));
            } else {
                truck =
                    Number(truckingPrice?.slice(1)) > 1000
                        ? Number(truckingPrice?.slice(1)) / 3
                        : Number(truckingPrice?.slice(1)) > 400 &&
                          Number(truckingPrice?.slice(1)) < 1000
                        ? Number(truckingPrice?.slice(1)) / 2
                        : Number(truckingPrice?.slice(1));

            }
            
        } else {
            // setaddTrucking(false);
            truck = 0;
        }

        if (placebidShipAccessory === true) {
            // setaddTrucking(true);
            ship = 1150;
        } else {
            // setaddTrucking(false);
            ship = 0;
        }

        // console.log(outstanding, truck, ship)
        return outstanding + truck + ship;
    };

    useEffect(() => {
        if(shareSuccess === true) {
            setTimeout(function(){ setshareSuccess(false) }, 3000);
        }
    }, [shareSuccess])

    const editLocation = (location) => {
        return location.replace(/Manheim/g, "");
    }
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
            {loading && distance === null ? (
                <div className="flex justify-center items-center w-full h-80">
                    <div className="relative mt-5">
                        <img src="/img/Tag.png" alt="loader" />
                        <img
                            className="absolute top-3.5 right-10 ease-in-out animate-pulse
                        delay-1000"
                            src="/img/Car.png"
                            alt="loader"
                        />
                        <h1 className="mt-5 text-lg font-semibold">
                            Loading
                            <span className=" ">
                                <span className="ml-2 ease-in-out tracking-widest delay-300	text-2xl animate-pulse ">
                                    .
                                </span>
                                <span className="ml-2 ease-in-out tracking-widest delay-700 text-2xl	 animate-pulse ">
                                    .
                                </span>
                                <span className="ml-2 ease-in-out tracking-widest text-2xl delay-100	 animate-pulse ">
                                    .
                                </span>
                            </span>
                        </h1>
                    </div>
                </div>
            ) : (
                <div>
                    <Meta
                        title={
                            cardD?.vehicleName +
                            "" +
                            "" +
                            cardD?.model +
                            "" +
                            "" +
                            cardD?.make +
                            "" +
                            "" +
                            cardD?.year
                        }

                        image={cardD?.images[id]?.image_smallUrl}

                        
                    />
                    <ToastContainer />
                    {cardD && (
                        <>
                            <div className="pt-20 lg:px-24 px-4 flex items-center justify-end">
                                <div className="flex gap-x-4 relative">
                                    <p className="font-medium font-10 sec-black">
                                        Share via
                                    </p>
                                    <button>
                                        <Link
                                            href={
                                                "https://twitter.com/intent/tweet?url=https%3A%2F%2Fbuylikedealers.com" + 
                                                router.pathname
                                            }
                                        >
                                            <img
                                                src="../assets/img/twitter.svg"
                                                alt="twiter"
                                            />
                                        </Link>
                                    </button>
                                    <button>
                                        <a
                                            href={
                                                "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbuylikedealers.com" +
                                                router.pathname
                                            }
                                            target="_blank"
                                        >
                                            <img
                                                src="../assets/img/facebook.svg"
                                                alt="facebook"
                                            />
                                        </a>
                                    </button>
                                    <button>
                                        <a
                                            href={`https://api.whatsapp.com/send?text=check%20out%20this%20car%20%20${encodeURIComponent(
                                                cardD?.vehicleName
                                            )}%20%20www.buylikedealers.com/vin/${
                                                cardD?.VIN
                                            }`}
                                            data-action="share/whatsapp/share"
                                            target="_blank"
                                        >
                                            <img
                                                src="../assets/img/whatsapp-svg.svg"
                                                alt="whatsapp"
                                            />
                                        </a>
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                "www.buylikedealers.com/" + "vin/" +
                                                    cardD?.VIN
                                            )
                                            setshareSuccess(true)

                                           
                                        }
                                        }
                                    >
                                        <img
                                            src="../assets/img/copy-svg.svg"
                                            alt="copy"
                                        />
                                    </button>
                                    {shareSuccess && (
                                        <div className="absolute right-0 top-5 bg-green-200 p-1">
                                            <p className="font-10 sec-black">Copied!</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-5 lg:justify-center justify-start px-5 xl:px-0">
                                <div className="py-1 block lg:hidden hidden-header">
                                    <p className="text-sm font-bold primary-color">
                                        {`${cardD?.year}  ${cardD?.make} ${cardD?.model}`}
                                    </p>

                                    <div className="flex mt-1.5 flex-col">
                                        <div className="flex">
                                            <p className="font-11 primary-gray font-medium">
                                                {dollarFormatter.format(
                                                    cardD?.odometer
                                                )}{" "}
                                                mi
                                            </p>
                                            <p className="font-11 ml-2 primary-gray font-medium">
                                                {cardD?.year}
                                            </p>
                                            <p className="font-11 ml-2 primary-gray font-medium">
                                                VIN: {""}
                                                {cardD?.VIN}
                                            </p>
                                        </div>
                                        {cardD && (
                                            <div>
                                                {cardD?.buyNowPrice.length >
                                                2 ? (
                                                    <p className="primary-color text-sm font-bold">
                                                        $
                                                        {dollarFormatter.format(
                                                            carDetail.buyNowPrice
                                                        )}
                                                    </p>
                                                ) : (
                                                    <p className="primary-color text-base font-extrabold">
                                                        $
                                                        {dollarFormatter.format(
                                                            carDetail.mmrPrice
                                                        )}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full lg:w-3/5">
                                    {cardD.images.length ? (
                                        <>
                                            <div className="w-full relative displayLargeimage">
                                                {displayLargeimage()}
                                                {/* {waterMarkToggle === true ? (
                                                    <div
                                                        className="watermark-detail2 flex text-xs md:text-sm  md:pb-12 pb-1 opacity-80"
                                                        style={{
                                                            zIndex: 9999999999,
                                                        }}
                                                    >
                                                        <p>
                                                            BUYLIKEDEALERS.COM
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="watermark-detail text-xs md:text-sm md:pb-10 pb-1 opacity-60"
                                                        style={{
                                                            zIndex: 9999999999,
                                                        }}
                                                    >
                                                        <p>
                                                            BUYLIKEDEALERS.COM
                                                        </p>
                                                    </div>
                                                )} */}
                                            </div>

                                            <div className="overflow-hidden">
                                                <div
                                                    className="flex justify-start h-full transition-all mt-3
                                    "
                                                >
                                                    <div
                                                        className={
                                                            page >=
                                                            (window.innerWidth <
                                                            760
                                                                ? 3
                                                                : 8)
                                                                ? "flex mr-2 md:mr-4 animate-bounce items-center text-xs font-mono justify-center  "
                                                                : "flex mr-2 md:mr-4  opacity-20  pointer-events-none items-center text-xs font-mono justify-center  "
                                                        }
                                                        style={{
                                                            height: "60.03px",
                                                            width: "20px",
                                                        }}
                                                    >
                                                        <button
                                                            onClick={() =>
                                                                prevPage(page)
                                                            }
                                                        >
                                                            <img src="https://img.icons8.com/ios-filled/50/000000/double-left.png" />
                                                        </button>
                                                    </div>
                                                    {imageD &&
                                                        imageD.map(
                                                            (ele, id) => (
                                                                <div
                                                                    key={id}
                                                                    onClick={() =>
                                                                        setId(
                                                                            page +
                                                                                id
                                                                        )
                                                                    }
                                                                    className="smallDisplay mr-3 h-full  transition-all cursor-pointer transform hover:scale-105"
                                                                >
                                                                    <img
                                                                        src={`https://proxybuylike.herokuapp.com/?url=${ele?.image_largeUrl}`}
                                                                        className="rounded-md object-cover w-full shadow-sm"
                                                                        style={{
                                                                            height: "60.3px",
                                                                        }}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            )
                                                        )}
                                                    {imageD &&
                                                    imageD.length ===
                                                        (window.innerWidth <=
                                                        760
                                                            ? 3
                                                            : 8) &&
                                                    count > 0 ? (
                                                        <div
                                                            className="loadMore rounded-md flex items-center text-xs font-mono justify-center relative shadow-sm"
                                                            style={{
                                                                height: "60.3px",
                                                                backgroundImage: `url(${cardD.images[6].image_largeUrl})`,
                                                                backgroundSize:
                                                                    "cover",
                                                            }}
                                                        >
                                                            <div
                                                                className=" rounded-md shadow-sm cursor-pointer absolute top-0 left-0 text-center right-0 bottom-0 bg-black
                            bg-opacity-40 text-white flex items-center justify-center
                            "
                                                                style={{
                                                                    fontSize:
                                                                        "10px",
                                                                }}
                                                                onClick={() =>
                                                                    nextPage(
                                                                        page
                                                                    )
                                                                }
                                                            >
                                                                load {count}{" "}
                                                                more
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-center relative">
                                            <img
                                                src="../../img/Rectangle.png"
                                                loading="lazy"
                                                className="br-5 w-full h-full object-contain object-center"
                                                alt="Coming soon"
                                            />
                                            <p className="absolute lg:text-5xl text-2xl font-semibold text-white lg:top-56 top-16 lg:left-52 left-12 uppercase">
                                                Coming Soon
                                            </p>
                                            <p className="text-2xl sec-black">
                                                {" "}
                                                Contact Support
                                            </p>
                                            <div className="flex gap-x-2 text-center items-center justify-center">
                                                <a
                                                    href="https://api.whatsapp.com/send?phone=+17135130111"
                                                    className="sec-black hover:text-gray-900"
                                                >
                                                    <i className="fa fa-whatsapp text-2xl"></i>
                                                </a>
                                                <a
                                                    href="mailto:buylikedealers@gmail.com"
                                                    className="sec-black hover:text-gray-900"
                                                >
                                                    <i className="fa fa-envelope-o text-2xl"></i>
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="car-details-holder px-4 pt-4 pb-12">
                                    <div className="px-7 lg:px-0 mt-3 lg:mt-0 py-1 hidden lg:block">
                                        <p className="text-sm font-bold primary-color">
                                            {`${cardD?.year}  ${cardD?.make} ${cardD?.model}`}
                                        </p>

                                        <div className="mt-1.5">
                                            <div className="flex gap-x-5">
                                                <p className="font-11 sec-black font-bold">
                                                    {cardD?.odometer.length <= 2
                                                        ? ""
                                                        : dollarFormatter.format(
                                                              cardD?.odometer
                                                          )}{" "}
                                                    mi
                                                    <img
                                                        src="../assets/img/dot.svg"
                                                        className="inline pl-1"
                                                        alt=""
                                                    />
                                                </p>
                                                <p className="font-11 sec-black font-bold">
                                                    VIN: {cardD.VIN}
                                                </p>
                                            </div>
                                            <div>
                                                {offer ? (
                                                    <p className="sec-black font-11 font-bold">
                                                        BUY NOW AT {""}$
                                                        {dollarFormatter.format(
                                                            carDetail.buyNowPrice
                                                        )}
                                                    </p>
                                                ) : (
                                                    <p className="sec-black font-11 font-bold">
                                                        EST PRICE {""}$
                                                        {dollarFormatter.format(
                                                            carDetail.mmrPrice
                                                        )}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex mt-4 lg:mt-0 justify-between">
                                        <div
                                            className={
                                                "flex buy-now-tab cursor-pointer items-center justify-center " +
                                                (!cardD?.buyNowPrice
                                                    ? "pointer-events-none"
                                                    : "active")
                                            }
                                            onClick={(e) => openForm(e, true)}
                                        >
                                            <div className="text-center">
                                                <img
                                                    src={
                                                        offer
                                                            ? "../assets/img/buy-now-active.svg"
                                                            : "../assets/img/buy-now.svg"
                                                    }
                                                    className="inline"
                                                    alt="bid"
                                                />
                                                <p
                                                    className={
                                                        offer
                                                            ? "buy-now-active-tab-text"
                                                            : "place-bid-tab-text"
                                                    }
                                                >
                                                    Buy Now
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className={
                                                "flex buy-now-tab cursor-pointer items-center justify-center " +
                                                (!cardD?.mmrPrice &&
                                                    "pointer-events-none ") +
                                                (!cardD?.buyNowPrice &&
                                                cardD?.mmrPrice
                                                    ? " active"
                                                    : "")
                                            }
                                            onClick={(e) => openForm(e, false)}
                                        >
                                            <div className="text-center">
                                                <img
                                                    src={
                                                        offer
                                                            ? "../assets/img/bid.svg"
                                                            : "../assets/img/bid-active.svg"
                                                    }
                                                    className="inline"
                                                    alt="bid"
                                                />
                                                <p
                                                    className={
                                                        offer
                                                            ? "place-bid-tab-text"
                                                            : "buy-now-active-tab-text"
                                                    }
                                                >
                                                    Place Bid
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        {offer && (
                                            <div
                                                className="tabcontent"
                                                id="offer-amount"
                                            >
                                                <table className="min-w-full border-separate detail-table">
                                                    <tbody>
                                                        <tr className="detail-row">
                                                            <td
                                                                colSpan="2"
                                                                className="sec-black font-11 font-semibold p-2 "
                                                            >
                                                                Destination
                                                            </td>
                                                            <td
                                                                colSpan="3"
                                                                className="font-11 sec-black font-normal py-2 pr-4"
                                                            >
                                                                {/* <select
                                                                    className="w-full"
                                                                    name="destination"
                                                                    id="buynow-destination"
                                                                    value={
                                                                        carDestination
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setcarDestination(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                        if(e.target.value == "United States") {
                                                                            setshipAccessory(false)
                                                                        }
                                                                    }
                                                                    }
                                                                >
                                                                    {options.map((country) => (
                                                                        <option key={country.label} value={country.label}>{country.label}</option>
                                                                    ))}
                                                                </select> */}
                                                                <Select options={options} value={carDestination}                                                                 
                                                                onChange={(e) => {
                                                                console.log(e.label)
                                                                setcarDestination(e)
                                                                if(e.label == "United States") {
                                                                    setshipAccessory(false)
                                                                }

                                                                }} />
                                                            </td>
                                                        </tr>

                                                        <tr className="">
                                                            <td
                                                                colSpan="2"
                                                                className="sec-black font-11 font-semibold w-28 p-2"
                                                            >
                                                                Auction Fee
                                                            </td>
                                                            <td
                                                                colSpan="2"
                                                                className="font-11 sec-black font-normal py-2"
                                                            >
                                                                ${dollarFormatter.format(getAuctionFee(cardD?.buyNowPrice))}
                                                                
                                                            </td>
                                                            <td className="text-right px-2">
                                                                <img
                                                                    className="inline"
                                                                    src="../assets/img/vectors/tool-tip.svg"
                                                                    alt="tooltip"
                                                                />
                                                            </td>
                                                        </tr>

                                                        <tr className="">
                                                            <td
                                                                colSpan="2"
                                                                className="sec-black font-11 font-semibold w-28 p-2 border-b border-gray-200"
                                                            >
                                                                Tax and Reg
                                                            </td>
                                                            <td
                                                                colSpan="2"
                                                                className="font-11 sec-black font-normal py-2 border-b border-gray-200"
                                                            >
                                                                Not Applicable
                                                            </td>
                                                            <td className="text-right px-2 border-b border-gray-200">
                                                                <img
                                                                    className="inline"
                                                                    src="../assets/img/vectors/tool-tip.svg"
                                                                    alt="tooltip"
                                                                />
                                                            </td>
                                                        </tr>

                                                        
                                                            
                                                            <tr className="">
                                                                <td
                                                                    colSpan="2"
                                                                    className="sec-black font-11 font-semibold w-28 p-2"
                                                                >
                                                                    Trucking
                                                                </td>

                                                                {noZipValue ? (
                                                                    <td
                                                                        colSpan="2"
                                                                        className="font-11 sec-black font-normal py-2"
                                                                    >
                                                                        <>
                                                                            Contact
                                                                            Support
                                                                        </>
                                                                        <a
                                                                            onClick={(
                                                                                e
                                                                            ) =>
                                                                                sendSheet(
                                                                                    e
                                                                                )
                                                                            }
                                                                            href="https://api.whatsapp.com/send?phone=+17135130111"
                                                                            style={{
                                                                                margin: "0 10px",
                                                                            }}
                                                                            target="_blank"
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
                                                                            href="mailto:buylikedealers@gmail.com"
                                                                            style={{
                                                                                margin: "0 10px",
                                                                            }}
                                                                            target="_blank"
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
                                                                        <td
                                                                            colSpan="2"
                                                                            className="font-11 sec-black font-normal py-2"
                                                                        >
                                                                            {truckingPrice?.includes(",") ? (
                                                                                <>
                                                                                    
                                                                                    {"$"}
                                                                                    {truckingPrice
                                                                                        ? Number(
                                                                                            truckingPrice?.slice(
                                                                                                1
                                                                                            ).replace(/,/g, '')
                                                                                        ) > 
                                                                                        1000
                                                                                            ? Number(
                                                                                                truckingPrice?.slice(
                                                                                                    1
                                                                                                ).replace(/,/g, '')
                                                                                            ) /
                                                                                            3
                                                                                            : Number(
                                                                                                truckingPrice?.slice(
                                                                                                    1
                                                                                                ).replace(/,/g, '')
                                                                                            ) >
                                                                                                400 &&
                                                                                            Number(
                                                                                                truckingPrice?.slice(
                                                                                                    1
                                                                                                ).replace(/,/g, '')
                                                                                            ) <
                                                                                                1000
                                                                                            ? Number(
                                                                                                truckingPrice?.slice(
                                                                                                    1
                                                                                                ).replace(/,/g, '')
                                                                                            ) /
                                                                                            2
                                                                                            : Number(
                                                                                                truckingPrice?.slice(
                                                                                                    1
                                                                                                ).replace(/,/g, '')
                                                                                            )
                                                                                        : "0"}
                                                                                </>
                                                                            ) : (
                                                                            <>

                                                                            {"$"}
                                                                            {truckingPrice
                                                                                ? Number(
                                                                                    truckingPrice?.slice(
                                                                                        1
                                                                                    )
                                                                                ) >
                                                                                1000
                                                                                    ? Number(
                                                                                        truckingPrice?.slice(
                                                                                            1
                                                                                        )
                                                                                    ) /
                                                                                    3
                                                                                    : Number(
                                                                                        truckingPrice?.slice(
                                                                                            1
                                                                                        )
                                                                                    ) >
                                                                                        400 &&
                                                                                    Number(
                                                                                        truckingPrice?.slice(
                                                                                            1
                                                                                        )
                                                                                    ) <
                                                                                        1000
                                                                                    ? Number(
                                                                                        truckingPrice?.slice(
                                                                                            1
                                                                                        )
                                                                                    ) /
                                                                                    2
                                                                                    : Number(
                                                                                        truckingPrice?.slice(
                                                                                            1
                                                                                        )
                                                                                    )
                                                                                : "0"}
                                                                            </>
                                                                            )}
                                                                        </td>
                                                                        <td className="text-right px-2">
                                                                            <label className="detail">
                                                                                <input
                                                                                    value={
                                                                                        truckAccessory
                                                                                    }
                                                                                    type="checkbox"
                                                                                    className="focus:outline-none detail self-center"
                                                                                    onChange={() =>
                                                                                        settruckAccessory(
                                                                                            !truckAccessory
                                                                                        )
                                                                                    }
                                                                                    checked={truckAccessory}
                                                                                />
                                                                                <span className="detail"></span>
                                                                            </label>
                                                                        </td>
                                                                    </>
                                                                )}
                                                            </tr>

                                                        {carDestination?.label !== "United States" &&  (

                                                            <tr className="">
                                                                <td
                                                                    colSpan="2"
                                                                    className="sec-black font-11 font-semibold w-28 p-2"
                                                                >
                                                                    Shipping
                                                                </td>
                                                                <td
                                                                    colSpan="2"
                                                                    className="font-11 sec-black font-normal py-2"
                                                                >
                                                                    $1,150
                                                                </td>
                                                                <td className="text-right px-2">
                                                                    <label className="detail">
                                                                        <input
                                                                            value={
                                                                                shipAccessory
                                                                            }
                                                                            type="checkbox"
                                                                            className="focus:outline-none detail self-center"
                                                                            onChange={() =>
                                                                                setshipAccessory(
                                                                                    !shipAccessory
                                                                                )
                                                                            }
                                                                            checked={carDestination == "United States" ? false : shipAccessory}
                                                                        />
                                                                        <span className="detail"></span>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                        )}

                                                        {carDestination?.label !== "United States" && (

                                                            <tr className="">
                                                                <td
                                                                    colSpan="2"
                                                                    className="sec-black font-11 font-semibold w-28 p-2 border-b border-gray-200"
                                                                >
                                                                   Custom clearing
                                                                </td>
                                                                <td
                                                                    colSpan="2"
                                                                    className="font-11 sec-black font-normal py-2 border-b border-gray-200"
                                                                >
                                                                    N/A
                                                                </td>
                                                                <td className="text-right px-2 border-b border-gray-200">
                                                                    <img
                                                                        className="inline"
                                                                        src="../assets/img/vectors/tool-tip.svg"
                                                                        alt="tooltip"
                                                                    />
                                                                </td>
                                                            </tr>

                                                        )}

                                                        <tr className="">
                                                            <td
                                                                colSpan="2"
                                                                className="sec-black font-11 font-semibold w-28 p-2 border-b border-gray-200"
                                                            >
                                                                Buylikedealer’s fee
                                                            </td>
                                                            <td
                                                                colSpan="3"
                                                                className="font-11 sec-black font-normal py-2 border-b border-gray-200"
                                                            >
                                                                $400
                                                            </td>
                                                        </tr>

                                                        <tr className="">
                                                            <td
                                                                colSpan="2"
                                                                className="sec-black font-11 font-bold w-28 p-2"
                                                            >
                                                                Total
                                                            </td>
                                                            <td
                                                                colSpan="2"
                                                                className="font-11 sec-black font-bold py-2"
                                                            >
                                                                {NGN ? (
                                                                    <>
                                                                        N
                                                                        {(
                                                                            accessories() *
                                                                            Number(
                                                                                usd
                                                                            )
                                                                        ).toLocaleString()}
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        $
                                                                        {accessories().toLocaleString()}
                                                                    </>
                                                                )}
                                                            </td>
                                                            <td className="font-11 w-16 font-normal sec-black">
                                                                <ReactFlagsSelect
                                                                    selected={
                                                                        selectedCountryCurrency
                                                                    }
                                                                    countries={[
                                                                        "NG",
                                                                        "US",
                                                                    ]}
                                                                    searchPlaceholder="Search countries"
                                                                    selectedSize={
                                                                        10
                                                                    }
                                                                    optionsSize={
                                                                        10
                                                                    }
                                                                    showSelectedLabel={
                                                                        false
                                                                    }
                                                                    fullWidth={
                                                                        false
                                                                    }
                                                                    onSelect={(
                                                                        code
                                                                    ) => {
                                                                        convertCurrency(
                                                                            code
                                                                        );
                                                                        setSelectedCountryCurrency(
                                                                            code
                                                                        );
                                                                    }}
                                                                    className="currency-flags"
                                                                    selectButtonClassName="currency-flags-button"
                                                                    customLabels={{
                                                                        NG: {
                                                                            primary:
                                                                                "NGN",
                                                                        },
                                                                        US: {
                                                                            primary:
                                                                                "USD",
                                                                        },
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                        {!offer && (
                                            <div
                                                className="tabcontent"
                                                id="budget"
                                            >
                                                <table className="w-full border-separate detail-table table-fixed">
                                                    <tbody>
                                                        <tr className="destination-row pb-2">
                                                            <td className="sec-black font-11 font-semibold w-28 p-2 destination">
                                                                Destination
                                                            </td>
                                                            <td
                                                                colSpan="4"
                                                                className="font-11 sec-black font-normal py-2 destination-content pr-4"
                                                            >
                                                                {/* <select
                                                                    className="w-full "
                                                                    name="destination"
                                                                    id="placebid-destination"
                                                                    value={
                                                                        carDestination
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setcarDestination(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                >
                                                                    {options.map((country) => (
                                                                        <option key={country.label} value={country.label}>{country.label}</option>
                                                                    ))}
                                                                </select> */}
                                                                <Select options={options} value={carDestination} 
                                                                onChange={(e) => {
                                                                console.log(e.label)
                                                                setcarDestination(e)
                                                                if(e.label == "United States") {
                                                                    setshipAccessory(false)
                                                                }

                                                                }} />
                                                            </td>
                                                        </tr>

                                                        <tr className="max-bid-row">
                                                            <td className="font-semibold sec-black font-11 p-2 max-bid">
                                                                Enter max. bid
                                                            </td>
                                                            <td
                                                                colSpan="3"
                                                                className="text-sm font-medium sec-gray max-bid-content"
                                                            >
                                                                <input
                                                                    ref={
                                                                        bidAmountRef
                                                                    }
                                                                    id="budget"
                                                                    className="font-11 bidingAmt border-none edit-control focus:outline-none text-black focus:text-blue-500 w-full"
                                                                    type="text"
                                                                    onBlur={() =>
                                                                        formatbidAmount()
                                                                    }
                                                                    onFocus={() => {
                                                                        removeComma();
                                                                    }}
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        includeMaxBid(
                                                                            e
                                                                        );
                                                                        removeAlpha();
                                                                    }}
                                                                    value={
                                                                        maxBidAmount
                                                                    }
                                                                />
                                                            </td>
                                                            <td className="font-11 font-normal sec-black max-bid-dropdown pl-3">
                                                                USD
                                                            </td>
                                                        </tr>

                                                        <tr className="">
                                                            <td className="sec-black font-11 font-semibold w-28 p-2">
                                                                Auction Fee
                                                            </td>
                                                            <td
                                                                colSpan="3"
                                                                className="font-11 sec-black font-normal pr-20 py-2"
                                                            >
                                                                ${dollarFormatter.format(getAuctionFee(cardD?.mmrPrice))}
                                                            </td>
                                                            <td className=" px-2 text-right">
                                                                <img
                                                                    className="inline"
                                                                    src="../assets/img/vectors/tool-tip.svg"
                                                                    alt="tooltip"
                                                                />
                                                            </td>
                                                        </tr>

                                                        <tr className="">
                                                            <td className="sec-black font-11 font-semibold w-28 p-2 border-b border-gray-200">
                                                                Tax and Reg
                                                            </td>
                                                            <td
                                                                colSpan="3"
                                                                className="font-11 sec-black font-normal py-2 border-b border-gray-200"
                                                            >
                                                                Not Applicable
                                                            </td>
                                                            <td className="px-2 border-b border-gray-200 text-right">
                                                                <img
                                                                    className="inline"
                                                                    src="../assets/img/vectors/tool-tip.svg"
                                                                    alt="tooltip"
                                                                />
                                                            </td>
                                                        </tr>

                                                        
                                                        <tr className="">
                                                            <td className="sec-black font-11 font-semibold w-28 p-2">
                                                                Trucking
                                                            </td>
                                                            {noZipValue ? (
                                                                    <td
                                                                        colSpan="2"
                                                                        className="font-11 sec-black font-normal py-2"
                                                                    >
                                                                        <>
                                                                            Contact
                                                                            Support
                                                                        </>
                                                                        <a
                                                                            onClick={(
                                                                                e
                                                                            ) =>
                                                                                sendSheet(
                                                                                    e
                                                                                )
                                                                            }
                                                                            href="https://api.whatsapp.com/send?phone=+17135130111"
                                                                            style={{
                                                                                margin: "0 10px",
                                                                            }}
                                                                            target="_blank"
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
                                                                            href="mailto:buylikedealers@gmail.com"
                                                                            style={{
                                                                                margin: "0 10px",
                                                                            }}
                                                                            target="_blank"
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
                                                                        <td
                                                                            colSpan="3"
                                                                            className="font-11 sec-black font-normal py-2"
                                                                        >
                                                                            {truckingPrice?.includes(",") ? (
                                                                                <>
                                                                                    
                                                                                    {"$"}
                                                                                    {truckingPrice
                                                                                        ? Number(
                                                                                            truckingPrice?.slice(
                                                                                                1
                                                                                            ).replace(/,/g, '')
                                                                                        ) > 
                                                                                        1000
                                                                                            ? Number(
                                                                                                truckingPrice?.slice(
                                                                                                    1
                                                                                                ).replace(/,/g, '')
                                                                                            ) /
                                                                                            3
                                                                                            : Number(
                                                                                                truckingPrice?.slice(
                                                                                                    1
                                                                                                ).replace(/,/g, '')
                                                                                            ) >
                                                                                                400 &&
                                                                                            Number(
                                                                                                truckingPrice?.slice(
                                                                                                    1
                                                                                                ).replace(/,/g, '')
                                                                                            ) <
                                                                                                1000
                                                                                            ? Number(
                                                                                                truckingPrice?.slice(
                                                                                                    1
                                                                                                ).replace(/,/g, '')
                                                                                            ) /
                                                                                            2
                                                                                            : Number(
                                                                                                truckingPrice?.slice(
                                                                                                    1
                                                                                                ).replace(/,/g, '')
                                                                                            )
                                                                                        : "0"}
                                                                                </>
                                                                            ) : (
                                                                            <>

                                                                            {"$"}
                                                                            {truckingPrice
                                                                                ? Number(
                                                                                    truckingPrice?.slice(
                                                                                        1
                                                                                    )
                                                                                ) >
                                                                                1000
                                                                                    ? Number(
                                                                                        truckingPrice?.slice(
                                                                                            1
                                                                                        )
                                                                                    ) /
                                                                                    3
                                                                                    : Number(
                                                                                        truckingPrice?.slice(
                                                                                            1
                                                                                        )
                                                                                    ) >
                                                                                        400 &&
                                                                                    Number(
                                                                                        truckingPrice?.slice(
                                                                                            1
                                                                                        )
                                                                                    ) <
                                                                                        1000
                                                                                    ? Number(
                                                                                        truckingPrice?.slice(
                                                                                            1
                                                                                        )
                                                                                    ) /
                                                                                    2
                                                                                    : Number(
                                                                                        truckingPrice?.slice(
                                                                                            1
                                                                                        )
                                                                                    )
                                                                                : "0"}
                                                                            </>
                                                                            )}
                                                                        </td>
                                                                        <td className="text-right px-2">
                                                                            <label className="detail">
                                                                                <input
                                                                                    value={
                                                                                        placebidTruckAccessory
                                                                                    }
                                                                                    type="checkbox"
                                                                                    className="focus:outline-none detail self-center"
                                                                                    onChange={() =>
                                                                                        setplacebidTruckAccessory(
                                                                                            !placebidTruckAccessory
                                                                                        )
                                                                                    }
                                                                                    checked={placebidTruckAccessory}
                                                                                />
                                                                                <span className="detail"></span>
                                                                            </label>
                                                                        </td>
                                                                    </>
                                                                )}
                                                                
                                                        </tr>
                                                        

                                                        {carDestination?.label !== "United States" && (
                                                            <tr className="">
                                                                <td className="sec-black font-11 font-semibold w-28 p-2">
                                                                    Shipping
                                                                </td>
                                                                <td
                                                                    colSpan="3"
                                                                    className="font-11 sec-black font-normal pr-20 py-2"
                                                                >
                                                                    $1,150
                                                                </td>
                                                                <td className="text-right px-2">
                                                                    <label className="detail">
                                                                        <input
                                                                            value={
                                                                                placebidShipAccessory
                                                                            }
                                                                            type="checkbox"
                                                                            className="focus:outline-none detail self-center"
                                                                            onChange={() =>
                                                                                setplacebidShipAccessory(
                                                                                    !placebidShipAccessory
                                                                                )
                                                                            }
                                                                            checked={placebidShipAccessory}
                                                                        />
                                                                        <span className="detail"></span>
                                                                    </label>
                                                                </td>
                                                            </tr>

                                                        )}

                                                        {carDestination?.label !== "United States" && (
                                                            <tr className="">
                                                                <td className="sec-black font-11 font-semibold w-28 p-2 border-b border-gray-200">
                                                                    Clearing
                                                                </td>
                                                                <td
                                                                    colSpan="3"
                                                                    className="font-11 sec-black font-normal pr-20 py-2 border-b border-gray-200"
                                                                >
                                                                    N/A
                                                                </td>
                                                                <td className="text-right px-2 border-b border-gray-200">
                                                                    <img
                                                                        className="inline"
                                                                        src="../assets/img/vectors/tool-tip.svg"
                                                                        alt="tooltip"
                                                                    />
                                                                </td>
                                                            </tr>
                                                        )}



                                                        <tr className="">
                                                            <td
                                                                colSpan="1"
                                                                className="sec-black font-11 font-semibold w-28 p-2 border-b border-gray-200"
                                                            >
                                                                Service Fee
                                                            </td>
                                                            <td
                                                                colSpan="4"
                                                                className="font-11 sec-black font-normal py-2 border-b border-gray-200"
                                                            >
                                                                $400
                                                            </td>
                                                        </tr>

                                                        <tr className="">
                                                            <td className="sec-black font-11 font-bold w-28 p-2">
                                                                Total
                                                            </td>
                                                            <td
                                                                colSpan="3"
                                                                className="font-11 sec-black font-bold pr-8 py-2"
                                                            >
                                                                {NGN ? (
                                                                    <>
                                                                        N
                                                                        {/* {(placebidAccessories() * Number(usd)).toLocaleString()} */}
                                                                        {(
                                                                            (Number(
                                                                                maxBidAmount.replace(
                                                                                    /\,/g,
                                                                                    ""
                                                                                )
                                                                            ) +
                                                                                Number(
                                                                                    placebidAccessories()
                                                                                )) *
                                                                            Number(
                                                                                usd
                                                                            )
                                                                        ).toLocaleString()}
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        $
                                                                        {(
                                                                            Number(
                                                                                maxBidAmount.replace(
                                                                                    /\,/g,
                                                                                    ""
                                                                                )
                                                                            ) +
                                                                            Number(
                                                                                placebidAccessories()
                                                                            )
                                                                        ).toLocaleString()}
                                                                    </>
                                                                )}
                                                            </td>
                                                            <td className="font-11 font-normal sec-black">
                                                                <ReactFlagsSelect
                                                                    selected={
                                                                        selectedCountryCurrency
                                                                    }
                                                                    countries={[
                                                                        "NG",
                                                                        "US",
                                                                    ]}
                                                                    searchPlaceholder="Search countries"
                                                                    selectedSize={
                                                                        10
                                                                    }
                                                                    optionsSize={
                                                                        10
                                                                    }
                                                                    showSelectedLabel={
                                                                        false
                                                                    }
                                                                    fullWidth={
                                                                        false
                                                                    }
                                                                    onSelect={(
                                                                        code
                                                                    ) => {
                                                                        convertCurrency(
                                                                            code
                                                                        );
                                                                        setSelectedCountryCurrency(
                                                                            code
                                                                        );
                                                                    }}
                                                                    className="currency-flags"
                                                                    selectButtonClassName="currency-flags-button"
                                                                    customLabels={{
                                                                        NG: {
                                                                            primary:
                                                                                "NGN",
                                                                        },
                                                                        US: {
                                                                            primary:
                                                                                "USD",
                                                                        },
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
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
                                                <button
                                                    onClick={
                                                        OpenSendSheetModal
                                                    }
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
                                                        "SUBMIT A REQUEST"
                                                    )}
                                                </button>
                                                
                                                <p className="font-11 sec-black mx-2 mt-2">
                                                    OR
                                                </p>

                                                <button
                                                    type="button"
                                                    className="whatsapp-proceed"
                                                    onClick={() => {
                                                        OpenSendSheetModal();
                                                    }}
                                                >
                                                    <img
                                                        src="../assets/img/whatsapp-btn.svg"
                                                        className="inline"
                                                        alt=""
                                                    />{" "}
                                                    WHATSAPP US
                                                </button>
                                                
                                            </>
                                        ) : (
                                            <>
                                                <Link href="/auth/login">
                                                    <button
                                                        type="button"
                                                        className="cursor-pointer focus:outline-none primary-btn text-white font-9 font-semibold py-2 px-3"
                                                    >
                                                        REQUEST FOR MORE 
                                                        INFO

                                                    </button>
                                                </Link>

                                                <p className="font-11 sec-black mx-2 mt-2">
                                                    OR
                                                </p>

                                                <button
                                                    type="button"
                                                    className="whatsapp-proceed"
                                                    onClick={() => {
                                                        OpenSendSheetModal();
                                                    }}
                                                >
                                                    <img
                                                        src="../assets/img/whatsapp-btn.svg"
                                                        className="inline"
                                                        alt=""
                                                    />{" "}
                                                    WHATSAPP US
                                                </button>
                                            </>
                                        )}
                                    </div>
                                    <div className="flex justify-center mt-5">
                                        {offer ? (
                                            <button
                                                type="button"
                                                className="cursor-pointer focus:outline-none primary-btn text-white font-9 font-semibold py-2 px-3"
                                                onClick={() => {
                                                    if(token) {
                                                        router.push('/transaction/' + vin)
                                                        localStorage.setItem("buyNowData", JSON.stringify(bidData()));
                                                        console.log(bidData())
                                                    } else {
                                                        router.push('/auth/login')
                                                    }
                                                }}
                                            >
                                                
                                                BUY NOW
                                            </button>

                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <section className="w-full mt-20">
                                <div className=" justify-center mb-10 block lg:hidden"></div>

                                <div className="flex justify-around flex-col lg:flex-row flex-wrap items-center gap-y-8">
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
                                            {editLocation(cardD?.pickupLocation)}
                                        </p>
                                    </div>
                                    <div className="flex flex-col relative  lg:block">
                                        <div
                                            style={{ padding: "15px" }}
                                            className="timer-container relative"
                                        >
                                            {distance !== null && (
                                                <div>
                                                    {renderCounter(distance)}
                                                </div>
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
                                                            carDetail.auctionEndTime
                                                        ).toLocaleDateString(
                                                            "en-NG",
                                                            {
                                                                year: "numeric",
                                                                day: "numeric",
                                                                month: "long",
                                                            }
                                                        )}
                                                    </p>
                                                    <p className="sec-black font-medium font-11 ml-4">
                                                        {new Date(
                                                            carDetail?.auctionEndTime
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                hour: "numeric",
                                                                hour12: true,
                                                            }
                                                        )}
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
                                            {new Date(
                                                +new Date(
                                                    carDetail?.auctionEndTime
                                                ) + deliveryDuration
                                            ).toLocaleDateString("en-NG", {
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
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
                                                Add a little note here about
                                                this highlight
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
                                                Add a little note here about
                                                this highlight
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
                                                Add a little note here about
                                                this highlight
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
                                                Add a little note here about
                                                this highlight
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
                                                Add a little note here about
                                                this highlight
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="py-4 overview-section">
                                <div className="flex justify-center gap-x-8 lg:gap-x-0 px-5">
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
                                        <p className="lg:py-1.5">
                                            AUCTION INFO
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={
                                        overview
                                            ? "flex px-5 justify-center mt-6 w-full lg:w-auto flex-col lg:flex-row items-center"
                                            : " hidden"
                                    }
                                >
                                    <div className="w-full lg:w-auto">
                                        <table className="min-w-full border-separate overview-table">
                                            <tbody>
                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Make
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2 w-1/2">
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
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Year
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {cardD?.year ||
                                                            "Not Specified"}
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
                                                        Exterior Color
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {
                                                            cardD?.sourceExteriorColor
                                                        }
                                                    </td>
                                                </tr>
                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Interior Color
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        <span className="truncate overflow-hidden overflow-ellipsis ">
                                                            {
                                                                cardD?.sourceInteriorColor
                                                            }
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="lg:ml-3 w-full lg:w-auto">
                                        <table className="min-w-full border-separate overview-table">
                                            <tbody>
                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Mileage
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {dollarFormatter.format(
                                                            cardD?.odometer
                                                        )}
                                                        miles
                                                    </td>
                                                </tr>

                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-44 py-3 lg:px-5 px-2">
                                                        Engine Fuel Type
                                                    </td>
                                                    <td className="text-sm md:text-base sec-black font-normal py-2 w-1/2">
                                                        {
                                                            cardD?.sourceEngineFuelType
                                                        }
                                                    </td>
                                                </tr>
                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Transmission
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {cardD?.transmission}
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
                                                        {
                                                            cardD?.facilitationLocation?.replace("Manheim","")
                                                        }
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
                                                        $
                                                        {dollarFormatter.format(
                                                            cardD?.mmrPrice
                                                        ) || "Not Specified"}
                                                    </td>
                                                </tr>
                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Pickup Location
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        <span className="truncate overflow-hidden overflow-ellipsis ">
                                                            {
                                                                editLocation(cardD?.pickupLocation)
                                                            }
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Auction Date
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        {new Date(
                                                            cardD?.auctionEndTime
                                                        ).toLocaleDateString(
                                                            "en-NG",
                                                            {
                                                                year: "numeric",
                                                                day: "numeric",
                                                                month: "long",
                                                            }
                                                        )}
                                                    </td>
                                                </tr>

                                                <tr className="detail-row mb-2">
                                                    <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                        Buy Now Price
                                                    </td>
                                                    <td className="turncate text-sm sec-black font-normal py-2">
                                                        $
                                                        {dollarFormatter.format(
                                                            cardD?.buyNowPrice
                                                        ) || "Not specified"}
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
                                                                Passenger
                                                                Capacity
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
                                                                {
                                                                    cardD?.vehicleType
                                                                }
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
                                                                {
                                                                    cardD?.bodyType
                                                                }
                                                            </td>
                                                        </tr>

                                                        <tr className="detail-row mb-2">
                                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                                Odometer
                                                            </td>
                                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                                {
                                                                    cardD?.odometer
                                                                }
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
                                                                    {
                                                                        cardD?.sellerCity
                                                                    }
                                                                </span>
                                                            </td>
                                                        </tr>

                                                        <tr className="detail-row">
                                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                                Seller State
                                                            </td>
                                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                                {
                                                                    cardD?.sellerState
                                                                }
                                                            </td>
                                                        </tr>

                                                        <tr className="detail-row">
                                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                                Facilitation
                                                                Location
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
                                                                {
                                                                    cardD?.sellerPhone
                                                                }
                                                            </td>
                                                        </tr>

                                                        <tr className="detail-row">
                                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                                Seller Rating
                                                            </td>
                                                            <td className="text-sm md:text-base sec-black font-normal py-2 lg:md:pr-8 w-1/2">
                                                                {
                                                                    cardD?.sellerRating
                                                                }
                                                            </td>
                                                        </tr>

                                                        <tr className="detail-row">
                                                            <td className="sec-black text-sm font-semibold w-40 py-3 lg:px-5 px-2">
                                                                Bidding Price
                                                            </td>
                                                            <td className="turncate text-sm sec-black font-normal py-2">
                                                                {
                                                                    cardD?.mmrPrice
                                                                }
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
                                        {data?.length ? (
                                            <>SIMILAR VEHICLES</>
                                        ) : (
                                            <>OTHER VECHICLES</>
                                        )}
                                    </h4>
                                </div>
                                <div
                                    className="flex w-11/12 mx-auto justify-center  flex-wrap my-4 display-type"
                                    id="car-grid"
                                >
                                    {data?.length > 0 &&
                                        data?.map(
                                            (ele, id) =>
                                                ele && (
                                                    <div
                                                        key={id}
                                                        className="similar-cars-holder p-3 mr-4 my-5 lg:mb-0 cursor-pointer"
                                                    >
                                                        <a
                                                            className={
                                                                !ele.images
                                                                    ?.length
                                                                    ? "bg-white relative overflow-hidden block bg-opacity-20 rounded-md"
                                                                    : "bg-black relative overflow-hidden  block bg-opacity-20 rounded-md"
                                                            }
                                                            style={{
                                                                height: "203px",
                                                            }}
                                                            href={`/vin/${ele.VIN}`}
                                                        >
                                                            {ele?.images
                                                                ?.length ? (
                                                                <>
                                                                    <img
                                                                        src={`https://proxybuylike.herokuapp.com/?url=${ele.images[0].image_largeUrl}`}
                                                                        alt="hello"
                                                                        className="w-full object-cover h-full rounded-md object-center"
                                                                    />
                                                                    {/* <div className="watermark opacity-60">
                                                                        <p>
                                                                            BUYLIKEDEALERS.COM
                                                                        </p>
                                                                    </div> */}
                                                                </>
                                                            ) : (
                                                                <div className="text-center relative">
                                                                    <img
                                                                        src="../../img/Rectangle.png"
                                                                        loading="lazy"
                                                                        className="br-5 w-full h-full object-contain object-center"
                                                                        alt="Coming soon"
                                                                    />
                                                                    <p className="absolute  text-lg font-semibold text-white lg:top-12 top-6  left-14 uppercase">
                                                                        Coming
                                                                        Soon
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </a>
                                                        <p className="pt-2 primary-black font-medium text-xs">
                                                            {ele?.make} {""}{" "}
                                                            {ele?.model}
                                                        </p>
                                                        <div className="flex pt-2 justify-between">
                                                            <p className="flex items-center sec-black font-10">
                                                                <span className="mr-1">
                                                                    <img
                                                                        src="../assets/img/vectors/red-location-beacon.svg"
                                                                        alt="location"
                                                                    />
                                                                </span>
                                                                {ele?.pickupLocation.replace(
                                                                    "Manheim",
                                                                    ""
                                                                )}
                                                            </p>
                                                            <div className="ml-auto flex self-center">
                                                                <img
                                                                    className="img-fluid"
                                                                    src="../../assets/img/vectors/red-date.svg"
                                                                    alt="date"
                                                                />
                                                                <p className="sec-black font-10">
                                                                    {new Date(
                                                                        ele?.auctionEndTime
                                                                    ).toLocaleDateString(
                                                                        "en-NG",
                                                                        {
                                                                            year: "numeric",
                                                                            day: "numeric",
                                                                            month: "long",
                                                                        }
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex font-11 primary-gray pt-1">
                                                            <p>{ele?.year}</p>
                                                            <p className="ml-3.5">
                                                                {dollarFormatter.format(
                                                                    ele?.odometer
                                                                )}
                                                                miles
                                                            </p>
                                                        </div>
                                                        <div className="flex pt-2">
                                                            <p className=" sec-black text-base">
                                                                $
                                                                {ele?.buyNowPrice
                                                                    ? dollarFormatter.format(
                                                                          ele?.buyNowPrice
                                                                      )
                                                                    : dollarFormatter.format(
                                                                          ele?.mmrPrice
                                                                      )}
                                                            </p>
                                                            <div className="ml-auto  self-center">
                                                                <a
                                                                    href={`/vin/${ele.VIN}`}
                                                                >
                                                                    {ele?.buyNowPrice>0?
                                                                     <button
                                                                     type="button"
                                                                     className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                                                     onClick={() => {
                                                                         dispatch(
                                                                             carDetail(
                                                                                 ele
                                                                             )
                                                                         );
                                                                     }}
                                                                 >Buy now</button>:
                                                                 <button
                                                                 type="button"
                                                                 className="focus:outline-none text-white bg-blue-700 py-1.5 font-10 fonr-semibold px-5"
                                                                 onClick={() => {
                                                                     dispatch(
                                                                         carDetail(
                                                                             ele
                                                                         )
                                                                     );
                                                                 }}>
                                                                     Place bid
                                                                 </button>

                                                                    }
                                                                   
                                                                       
                                                            
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                        )}
                                </div>

                                <div className="text-center my-5">
                                    {!data?.length ? (
                                        <>
                                            <p
                                                onClick={() => {
                                                    router.push("/vin");
                                                }}
                                                className="primary-blue font-semibold text-sm cursor-pointer"
                                            >
                                                View Other Vehicles
                                            </p>
                                        </>
                                    ) : (
                                        <p
                                            onClick={() => {
                                                showMoreVehicles();
                                            }}
                                            className="primary-blue font-semibold text-sm cursor-pointer"
                                        >
                                            Show More Vehicles
                                        </p>
                                    )}
                                </div>
                            </section>
                        </>
                    )}
                    {/* <!-- The Modal --> */}
                    {sendSheetModal && (
                        <div id="sendSheetModal" className="modal">
                            {/* <!-- Modal content --> */}
                            <div className="modal-content sheetModal bg-white relative w-10/12 lg:w-1/3 mx-auto mx-8 md:px-0 md:mt-28 md:px-20 md:py-10">
                                <span
                                    onClick={() => {
                                        setsendSheetModal(false);
                                    }}
                                    className="close absolute right-5 top-1 text-4xl text-gray-500"
                                >
                                    &times;
                                </span>
                                {/* <!-- <i className="absolute right-0 fa fa-times" aria-hidden="true"></i> --> */}
                                <form
                                    onSubmit={(e) => sendSheet(e)}
                                    className="font-11 grid grid-cols-6 gap-2 mx-6 py-10 md:mx-0 md:py-0"
                                >
                                    <div className="col-span-6 mb-2">
                                        <label
                                            className="block pb-1.5 font-10 primary-black"
                                            htmlFor="card_number"
                                        >
                                            {" "}
                                            Email{" "}
                                        </label>
                                        <input
                                            id="card_number"
                                            className="profile-control focus:outline-none p-2 w-full"
                                            type="email"
                                            required
                                            placeholder="Enter your email address"
                                            value={sendSheetEmail}
                                            onChange={(e) =>
                                                setsendSheetEmail(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-span-6  "></div>

                                    <div className="col-span-6 mt-2">
                                        <label
                                            className="block font-10 primary-black pb-1.5"
                                            htmlFor="cardName"
                                        >
                                            {" "}
                                            Phone Number{" "}
                                        </label>
                                        <IntlTelInput
                                            ref={sheetNumberRef}
                                            placeholder="xxxx-xxxx-xxxx"
                                            containerClassName="intl-tel-input send-sheet-phone-number"
                                            inputClassName="form-control"
                                            preferredCountries={["ng"]}
                                            defaultValue={sendSheetPhoneNumber}
                                            onPhoneNumberChange={(e) =>
                                                phoneNumberChange(e)
                                            }
                                        />
                                    </div>
                                    {sheetError && (
                                        <div className="col-span-6 mt-2">
                                            <p className="text-red-500 font-10">
                                                Field can't be empty
                                            </p>
                                        </div>
                                    )}
                                    <div className="col-span-6 place-self-center mt-4">
                                        <button
                                            type="submit"
                                            className="focus:outline-none primary-btn font-10 font-semibold text-white py-1.5 px-8"
                                        >
                                            SUBMIT
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    {/* <!-- end of modal --> */}
                </div>
            )}
        </main>
    );
};

CarDetails.getInitialProps = async ({ query }) => {
    let url = `https://buylikepoint.us/json.php/view.php?vin=${query.id}&apiKey=Switch!2020&apiKey=Switch!2020`;
    let res = await fetch(url.trim(), {
        method: "GET",
        headers: {},
        credentials: "same-origin",
    })
        .then(function (response) {
            return response.text();
        })
        .then((res) => {
            if (res) {
                if (Object.entries(res).length >= 1) {
                    const dada = JSON.parse(res);
                    return dada.data[0];
                }
            }
        });
    return {
        carDetail: res,
    };
};

const mapStateToProps = (state) => {
    const { cars, carCollection, loading } = state.Cars;
    return { cars, carCollection, loading };
};

export default connect(mapStateToProps, { getCollection, searchCars })(
    CarDetails
);