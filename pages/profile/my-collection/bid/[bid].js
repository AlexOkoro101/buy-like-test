import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { enviroment } from "../../../../src/components/enviroment";
import Meta from "../../../../src/components/Head/Meta";
import FsLightbox from "fslightbox-react";
import Collection from "../../../../src/components/Layout/Collection";
import FadeLoader from "react-spinners/FadeLoader";
import Link from "next/link";
import { usePaystackPayment } from "react-paystack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BidDetails = () => {
  var dollarFormatter = new Intl.NumberFormat();
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
  const [CollectionBid, setCollectionBid] = useState(null);
  const [userEmail,setUserEmail] =useState(null)
  const [userPhone,setUserPhone] =useState(null)

  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState(null);
  const [message, setmessage] = useState(null);
  const [toggler, setToggler] = useState(false);
  const [imageD, setimageD] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(window.innerWidth <= 760 ? 3 : 5);
  const [count, setCount] = useState(0);
  const [overview, setoverview] = useState(true);
  const [userId, setuserId] = useState(null);
  const [processDetails, setprocessDetails] = useState(null);
  const [refNumber, setrefNumber] = useState(null);

  const router = useRouter();
  const bidId = router.query.bid;


  useEffect(()=>{
      console.log(JSON.parse(localStorage.getItem("user")))
      setUserEmail(JSON.parse(localStorage.getItem("user")).userEmail)
      setUserPhone(JSON.parse(localStorage.getItem("user")).phoneNumber)
  },[])

  const adjustHeight = () => {
    const proccessBody = document.getElementsByClassName("tracker-table");
    var proccessBodyHeight = proccessBody[0]?.offsetHeight;
    console.log(proccessBodyHeight);

    const processCircle = document.querySelector(".process-circle");
    processCircle?.style.setProperty("--height", `${proccessBodyHeight}px`);
  };

  const referenceNumber = () => {
    return "bld" + Math.floor(Math.random() * 1000000000 + 1);
  };

  const config = {
    reference: referenceNumber(),
    email: `${userEmail}`,
    amount: /*amount * 100*/ 500,
    publicKey: "pk_live_e0ee86f89440e1bea4b8a6a020bb71e2ecc1f86f",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log( reference.trxref)
    setrefNumber(reference.trxref);
    verifyPaystackPayment(refNumber);
    // console.log("vehicle ID", bnvehicleID);
    // console.log("bid ID", bidID);
    
  };
//   useEffect(() => {
//     if (refNumber === null) {
//       return;
//     } else {
//       console.log("verify payment");
//       verifyPaystackPayment(refNumber);
//     }
//   }, [confimation, state, refNumber]);

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

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
            console.log(formatData.data);
            if (formatData.data.status) {
                setTimeout(() => {
                    frontendPayment(ref, formatData);
                }, 1000);
            }
          }
        }
      })
      .catch((error) => console.log("payment error", error));
  };


  const frontendPayment = (ref) => {

    console.log('did you get here')
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      vin: bidCollection?.vin,
      number: `${userPhone}`,
      fullname: '',
      email: `${userEmail}`,
      buyNow: true,
      username: "",
      collection: "",
      owner: bidCollection?.owner,
      vehicle: bidCollection?._id,
      bid: processDetails?.bid,
      amount: (Number(bidCollection?.bidAmount)* 570)-500000,
      amountBalance: '',
      reference: ref,
      currency: "",
      metadata: "",
      symbol:"NGN",
      balance: '',
      status: true,
      statusTrans: '',
    });
    console.log("frontend data", raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",

    };

    fetch(enviroment.BASE_URL + "transactions/payment", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultFormat = JSON.parse(result);
        console.log("front end payment", resultFormat);
        if (resultFormat.error === false) {
          toastSuccess();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const retrieveData = () => {
    const userActive = localStorage.getItem("user");
    if (!userActive) {
      return;
    }
    const item = JSON.parse(userActive);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      window.localStorage.clear();
      return null;
    }
    setuserId(item?.userId);

    if (userId) {
      getProcessFlow();
    }
  }; //Get Data from local Storage

  const getProcessFlow = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      enviroment.BASE_URL + "process/vehicle/" + bidCollection?._id,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const newResult = JSON.parse(result);
        console.log(newResult);
        setprocessDetails(newResult?.data?.details);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    retrieveData();
    return () => {
      retrieveData();
    };
  }, [bidCollection]);

  useEffect(() => {
    // console.log(bidId);
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
            setbidCollection(formatCollection?.data?.vehicle);
            console.log(formatCollection?.data?.vehicle);
          }
        }
        console.log(bidCollection);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    // console.log(bidId);
    fetch(enviroment.BASE_URL + "collections/" + bidId, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => {
        setisLoading(false);
        return response.text();
      })
      .then((result) => {
        console.log(result);
        if (result) {
          if (Object.entries(result).length >= 1) {
            const formatCollection = JSON.parse(result);
            console.log(formatCollection.data);
            setCollectionBid(formatCollection.data);
          }
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    displaySmall();
  }, [bidCollection]);

  useEffect(() => {
    setTimeout(() => {
      adjustHeight();
    }, 2000);
    return () => {
      setTimeout(() => {
        adjustHeight();
      }, 2000);
    };
  }, []);

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
    const largeImageArray = bidCollection?.images.map((image) => {
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
          }}
          src={`https://proxybuylike.herokuapp.com/?url=${bidCollection?.images[0]?.image_largeUrl}`}
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
      {isLoading ? (
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
        <>
          {CollectionBid ? (
            <div className="mt-20">
              <main className="main mt-32">
                <div className="flex justify-center">
                  {/* <!-- w-10/12 --> */}
                  <div className="mx-auto flex-wrap lg:flex-nowrap flex page-holder w-full">
                    {/* <!-- deposit details here --> */}
                    <aside className="sidebar  px-4 md:px-2 lg:pl-24 lg:pr-9 pt-9 pb-4">
                      <p className="primary-color text-sm font-bold mb-3">
                        Transaction details
                      </p>
                      <div className="car-holder grid grid-cols-6 lg:grid-cols-1 items-center  gap-6 md:gap-3 lg:gap-1  py-2.5">
                        <span className="col-span-3 inline-block overflow-hidden rounded-md">
                          <img
                            className="w-full"
                            src={
                              CollectionBid?.vehicles[0]?.images[0]
                                ?.image_largeUrl
                            }
                            alt=""
                          />
                        </span>
                        <div className="col-span-3">
                          <p className="md:text-sm  lg:mt-3 primary-black font-medium font-10 uppercase">
                            {`${CollectionBid?.name}`}
                          </p>
                          {/* <p className="primary-black font-medium py-1 text-xs uppercase">
                                            {dollarFormatter.format(bidCollection?.odometer)} mi
                                        </p>
                                        <p className="primary-black font-medium text-xs uppercase">
                                            vin: {bidCollection?.vin}
                                        </p> */}
                          <p className="primary-black font-medium font-11 uppercase">
                            {dollarFormatter.format(
                              CollectionBid?.bids[0]?.bidAmount
                            )}
                          </p>
                        </div>
                      </div>

                      <table className="min-w-full ">
                        <tbody>
                          {bidCollection?.trucking &&
                          bidCollection?.trucking !== "0" ? (
                            <tr className="detail-row mb-2">
                              <td className="sec-black text-xs font-semibold py-1.5">
                                Trucking
                              </td>
                              <td className="text-xs primary-black font-normal py-1.5">
                                ${bidCollection?.trucking || 0}
                              </td>
                            </tr>
                          ) : (
                            <></>
                          )}

                          {bidCollection?.shipping &&
                            bidCollection?.shipping !== "0" && (
                              <tr className="detail-row mb-2">
                                <td className="sec-black text-xs font-semibold py-1.5">
                                  Shipping
                                </td>
                                <td className="text-xs primary-black font-normal py-1.5">
                                  ${bidCollection?.shipping || 0}
                                </td>
                              </tr>
                            )}

                          <tr className="detail-row mb-2">
                            <td className="sec-black text-xs font-semibold py-1.5">
                              Clearing
                            </td>
                            <td className="text-xs primary-black font-normal py-1.5">
                              N/A
                            </td>
                          </tr>

                          <tr className="detail-row mb-2">
                            <td className="sec-black text-xs font-semibold py-1.5">
                              Auction Fee
                            </td>
                            <td className="text-xs primary-black font-normal py-1.5">
                              $450
                            </td>
                          </tr>

                          <tr className="detail-row mb-2">
                            <td className="sec-black text-xs font-semibold py-1.5">
                              Service Fee
                            </td>
                            <td className="text-xs primary-black font-normal py-1.5">
                              $400
                            </td>
                          </tr>

                          <tr className="detail-row mb-2 ">
                            <td className="total-border sec-black text-xs font-semibold py-1.5 ">
                              Total
                            </td>
                            <td className="total-border text-xs primary-black font-normal py-1.5 ">
                              {bidCollection?.bidAmount}
                            </td>
                          </tr>

                          <tr className="detail-row mb-2">
                            <td className="sec-black text-xs font-semibold py-1.5">
                              Deposit
                            </td>
                            <td className="text-xs primary-black font-normal py-1.5">
                              $1,000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </aside>

                    <section className="main-section px-3   md:ml-5 lg:mx-12 lg:px-8  ">
                      <div className="lg:flex lg:justify-between">
                        <div className="Tracker-holder pb-20 ">
                          <p className="font-semibold text-sm py-5 px-2">
                            Bid Tracker
                          </p>
                          {processDetails ? (
                            <>
                              <table className="tracker-table">
                                {processDetails?.map((process) => (
                                  <tbody
                                    key={process._id}
                                    className="process-body flex items-center jus mb-2 mt-8 lg:mt-11"
                                  >
                                    <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                      <td>
                                        <p
                                          className="text-xs font-bold"
                                          id="date"
                                        >
                                          {new Date(
                                            process?.created_at
                                          ).toLocaleDateString("en-NG", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                          })}
                                        </p>
                                        <small className="text-xs " id="time">
                                          {new Date(process?.created_at)
                                            .toLocaleTimeString("en-NG", {
                                              hour: "2-digit",
                                              minute: "2-digit",
                                              hour12: true,
                                            })
                                            .toUpperCase()}
                                        </small>
                                      </td>
                                    </tr>
                                    <tr className=" mb-3 ">
                                      <td className="process-circle circle"></td>
                                    </tr>
                                    <tr>
                                      <td className=" pl-4 mb-3 leading-4 w-44 md:w-72">
                                        <small>{process?.body}</small>
                                      </td>
                                    </tr>
                                  </tbody>
                                ))}
                                {/* <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>Your bid has been won and is awaiting balance payment.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>You paid the balance for the car and is awaiting pick up at the
                                                                    lot.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>Your car has been picked up from the lot and is on the way to the
                                                                    port.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>The car has been dropped at the port and is awaiting
                                                                    shippment.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>Your car has been shipped to Nigeria and is awaiting clearance at
                                                                    the port.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>Your car has been cleared at the port and is awaiting delivery or
                                                                    pickup.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>Your car has been delivered.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody> */}
                              </table>
                            </>
                          ) : (
                            <>
                              <p className="text-xs">
                                No feedback available yet
                              </p>
                            </>
                          )}

                          {/* <!-- <div className=" px-3 mb-3  text-right leading-3 md:mb-0">
                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                <small className="text-xs " id="time">12:20 PM</small>
                                            </div>
                                            <div className="circle  px-3 mb-3 md:mb-0">
                                                <input type="radio">
                                            </div>
                                            <div className=" px-3 mb-3 md:mb-0 leading-4 text-sm">
                                                <small>You placed a bid for Mercedes Benz GLK.</small>
                                            </div> --> */}

                          {/* <!-- <div className=" flex items-center md:flex mb-2 mt-9">
                                            <div className=" px-3 mb-3  text-right leading-3 md:mb-0">
                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                <small className="text-xs " id="time">12:20 PM</small>
                                            </div>
                                            <div className="circle  px-3 mb-3 md:mb-0">
                                                <input type="radio">
                                            </div>
                                            <div className=" px-3 mb-3 md:mb-0 leading-4 text-sm">
                                                <small>Your bid has been won and is awaiting balance payment.</small>
                                            </div>
                                        </div> --> */}
                          {/* <!-- <div className=" flex items-center md:flex mb-2 mt-9">
                                            <div className=" px-3 mb-3  text-right leading-3 md:mb-0">
                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                <small className="text-xs " id="time">12:20 PM</small>
                                            </div>
                                            <div className="circle  px-3 mb-3 md:mb-0">
                                                <input type="radio">
                                            </div>
                                            <div className=" px-3 mb-3 md:mb-0 leading-4 text-sm">
                                                <small>Your bid has been won and is awaiting balance payment.</small>
                                            </div>
                                        </div> --> */}
                        </div>
                        {/* <!-- bid Tracker end --> */}
                        {/* <!-- document  file  --> */}
                        {/* <div className="doc-holder">
                                        <p className="font-semibold text-sm py-5 px-2">Vehicle Documents</p>
                                        <div className="pb-10">
                                            <div
                                                className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4">
                                                <div className="flex items-center">
                                                    <div className="mr-4"><img src="../../../assets/img/vectors/file-icon.svg"
                                                            alt="file-icon" />
                                                    </div>
                                                    <div className="leading-3">
                                                        <p className="text-xs">Legal Contract</p>
                                                        <small className="text-xs">105 kb</small>
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"><img src="../../../assets/img/vectors/download-icon.svg"
                                                        alt="download-icon" /></div>
                                            </div>
                                            <div
                                                className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4 mt-3">
                                                <div className="flex items-center">
                                                    <div className="mr-4"><img src="../../../assets/img/vectors/file-icon.svg"
                                                            alt="file-icon" />
                                                    </div>
                                                    <div className="leading-3">
                                                        <p className="text-xs">Legal Contract</p>
                                                        <small className="text-xs">105 kb</small>
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"><img src="../../../assets/img/vectors/download-icon.svg"
                                                        alt="download-icon" /></div>
                                            </div>
                                            <div
                                                className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4 mt-3">
                                                <div className="flex items-center">
                                                    <div className="mr-4"><img src="../../../assets/img/vectors/file-icon.svg"
                                                            alt="file-icon" />
                                                    </div>
                                                    <div className="leading-3">
                                                        <p className="text-xs">Legal Contract</p>
                                                        <small className="text-xs">105 kb</small>
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"><img src="../../../assets/img/vectors/download-icon.svg"
                                                        alt="download-icon" /></div>
                                            </div>
                                            <div
                                                className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4 mt-3">
                                                <div className="flex items-center">
                                                    <div className="mr-4"><img src="../../../assets/img/vectors/file-icon.svg"
                                                            alt="file-icon" />
                                                    </div>
                                                    <div className="leading-3">
                                                        <p className="text-xs">Legal Contract</p>
                                                        <small className="text-xs">105 kb</small>
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"><img src="../../../assets/img/vectors/download-icon.svg"
                                                        alt="download-icon" /></div>
                                            </div>
                                            
                                        </div>

                                    </div> */}
                      </div>
                    </section>
                  </div>
                </div>
              </main>
            </div>
          ) : (
            <>
              <main className="main mt-32">
                <div className="flex justify-center">
                  {/* <!-- w-10/12 --> */}
                  <div className="mx-auto flex-wrap lg:flex-nowrap flex page-holder w-full">
                    {/* <!-- deposit details here --> */}
                    <aside className="sidebar  px-4 md:px-2 lg:pl-24 lg:pr-9 pt-9 pb-4">
                      <p className="primary-color text-sm font-bold mb-3">
                        Transaction details
                      </p>
                      <div className="car-holder grid grid-cols-6 lg:grid-cols-1 items-center  gap-6 md:gap-3 lg:gap-1  py-2.5">
                        <span className="col-span-3 inline-block overflow-hidden rounded-md">
                          <img
                            className="w-full"
                            src={bidCollection?.images[0]?.image_largeUrl}
                            alt=""
                          />
                        </span>
                        <div className="col-span-3">
                          <p className="md:text-sm  lg:mt-3 primary-black font-medium font-10 uppercase">
                            {`${bidCollection?.name}` ||
                              `${bidCollection?.year} ${bidCollection?.make} ${bidCollection?.model}`}
                          </p>
                          <p className="primary-black font-medium py-1 text-xs uppercase">
                            {dollarFormatter.format(bidCollection?.odometer)} mi
                          </p>
                          <p className="primary-black font-medium text-xs uppercase">
                            vin: {bidCollection?.vin}
                          </p>
                          <p className="primary-black font-medium font-11 uppercase">
                            {dollarFormatter.format(bidCollection?.price)}
                          </p>
                        </div>
                      </div>

                      <table className="min-w-full ">
                        <tbody>
                          {bidCollection?.trucking &&
                          bidCollection?.trucking !== "0" ? (
                            <tr className="detail-row mb-2">
                              <td className="sec-black text-xs font-semibold py-1.5">
                                Trucking
                              </td>
                              <td className="text-xs primary-black font-normal py-1.5">
                                ${bidCollection?.trucking || 0}
                              </td>
                            </tr>
                          ) : (
                            <></>
                          )}

                          {bidCollection?.shipping &&
                            bidCollection?.shipping !== "0" && (
                              <tr className="detail-row mb-2">
                                <td className="sec-black text-xs font-semibold py-1.5">
                                  Shipping
                                </td>
                                <td className="text-xs primary-black font-normal py-1.5">
                                  ${bidCollection?.shipping || 0}
                                </td>
                              </tr>
                            )}

                          <tr className="detail-row mb-2">
                            <td className="sec-black text-xs font-semibold py-1.5">
                              Clearing
                            </td>
                            <td className="text-xs primary-black font-normal py-1.5">
                              N/A
                            </td>
                          </tr>

                          <tr className="detail-row mb-2">
                            <td className="sec-black text-xs font-semibold py-1.5">
                              Auction Fee
                            </td>
                            <td className="text-xs primary-black font-normal py-1.5">
                              $450
                            </td>
                          </tr>

                          <tr className="detail-row mb-2">
                            <td className="sec-black text-xs font-semibold py-1.5">
                              Service Fee
                            </td>
                            <td className="text-xs primary-black font-normal py-1.5">
                              $400
                            </td>
                          </tr>

                          <tr className="detail-row mb-2 ">
                            <td className="total-border sec-black text-xs font-semibold py-1.5 ">
                              Total
                            </td>
                            <td className="total-border text-xs primary-black font-normal py-1.5 ">
                              {bidCollection?.bidAmount}
                            </td>
                          </tr>

                          <tr className="detail-row mb-2">
                            <td className="sec-black text-xs font-semibold py-1.5">
                              Deposit
                            </td>
                            <td className="text-xs primary-black font-normal py-1.5">
                              $1,000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </aside>

                    <section className="main-section px-3   md:ml-5 lg:mx-12 lg:px-8  ">
                      <div className="lg:flex lg:justify-between">
                        <div className="Tracker-holder pb-20 ">
                          <p className="font-semibold text-sm py-5 px-2">
                            Bid Tracker
                          </p>
                          {processDetails ? (
                            <>
                              <table className="tracker-table">
                                {processDetails?.map((process) => (
                                  <tbody
                                    key={process._id}
                                    className="process-body flex items-center jus mb-2 mt-8 lg:mt-11"
                                  >
                                    <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                      <td>
                                        <p
                                          className="text-xs font-bold"
                                          id="date"
                                        >
                                          {new Date(
                                            process?.created_at
                                          ).toLocaleDateString("en-NG", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                          })}
                                        </p>
                                        <small className="text-xs " id="time">
                                          {new Date(process?.created_at)
                                            .toLocaleTimeString("en-NG", {
                                              hour: "2-digit",
                                              minute: "2-digit",
                                              hour12: true,
                                            })
                                            .toUpperCase()}
                                        </small>
                                      </td>
                                    </tr>
                                    <tr className=" mb-3 ">
                                      <td className="process-circle circle"></td>
                                    </tr>
                                    <tr>
                                      <td className=" pl-4 mb-3 leading-4 w-44 md:w-72">
                                        <small>{process?.body}</small>
                                      </td>
                                    </tr>
                                  </tbody>
                                ))}
                                {/* <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>Your bid has been won and is awaiting balance payment.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>You paid the balance for the car and is awaiting pick up at the
                                                                    lot.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>Your car has been picked up from the lot and is on the way to the
                                                                    port.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>The car has been dropped at the port and is awaiting
                                                                    shippment.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>Your car has been shipped to Nigeria and is awaiting clearance at
                                                                    the port.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>Your car has been cleared at the port and is awaiting delivery or
                                                                    pickup.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    <tbody className="flex items-center mb-2 mt-8 lg:mt-11">
                                                        <tr className="pr-4 mb-3  md:text-right leading-3 md:mb-0">
                                                            <td>
                                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                                <small className="text-xs " id="time">12:20 PM</small>
                                                            </td>
                                                        </tr>
                                                        <tr className=" mb-3 ">
                                                            <td className="circle"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className=" pl-4 mb-3 leading-4 w-52 md:w-72">
                                                                <small>Your car has been delivered.</small>
                                                            </td>
                                                        </tr>

                                                    </tbody> */}
                              </table>
                            </>
                          ) : (
                            <>
                              <p className="text-xs">
                                No feedback available yet
                              </p>
                            </>
                          )}

                          {/* <!-- <div className=" px-3 mb-3  text-right leading-3 md:mb-0">
                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                <small className="text-xs " id="time">12:20 PM</small>
                                            </div>
                                            <div className="circle  px-3 mb-3 md:mb-0">
                                                <input type="radio">
                                            </div>
                                            <div className=" px-3 mb-3 md:mb-0 leading-4 text-sm">
                                                <small>You placed a bid for Mercedes Benz GLK.</small>
                                            </div> --> */}

                          {/* <!-- <div className=" flex items-center md:flex mb-2 mt-9">
                                            <div className=" px-3 mb-3  text-right leading-3 md:mb-0">
                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                <small className="text-xs " id="time">12:20 PM</small>
                                            </div>
                                            <div className="circle  px-3 mb-3 md:mb-0">
                                                <input type="radio">
                                            </div>
                                            <div className=" px-3 mb-3 md:mb-0 leading-4 text-sm">
                                                <small>Your bid has been won and is awaiting balance payment.</small>
                                            </div>
                                        </div> --> */}
                          {/* <!-- <div className=" flex items-center md:flex mb-2 mt-9">
                                            <div className=" px-3 mb-3  text-right leading-3 md:mb-0">
                                                <p className="text-xs font-bold" id="date">Feb 28, 2021</p>
                                                <small className="text-xs " id="time">12:20 PM</small>
                                            </div>
                                            <div className="circle  px-3 mb-3 md:mb-0">
                                                <input type="radio">
                                            </div>
                                            <div className=" px-3 mb-3 md:mb-0 leading-4 text-sm">
                                                <small>Your bid has been won and is awaiting balance payment.</small>
                                            </div>
                                        </div> --> */}
                        </div>
                        {/* <!-- bid Tracker end --> */}
                        {/* <!-- document  file  --> */}
                        {/* <div className="doc-holder">
                                        <p className="font-semibold text-sm py-5 px-2">Vehicle Documents</p>
                                        <div className="pb-10">
                                            <div
                                                className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4">
                                                <div className="flex items-center">
                                                    <div className="mr-4"><img src="../../../assets/img/vectors/file-icon.svg"
                                                            alt="file-icon" />
                                                    </div>
                                                    <div className="leading-3">
                                                        <p className="text-xs">Legal Contract</p>
                                                        <small className="text-xs">105 kb</small>
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"><img src="../../../assets/img/vectors/download-icon.svg"
                                                        alt="download-icon" /></div>
                                            </div>
                                            <div
                                                className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4 mt-3">
                                                <div className="flex items-center">
                                                    <div className="mr-4"><img src="../../../assets/img/vectors/file-icon.svg"
                                                            alt="file-icon" />
                                                    </div>
                                                    <div className="leading-3">
                                                        <p className="text-xs">Legal Contract</p>
                                                        <small className="text-xs">105 kb</small>
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"><img src="../../../assets/img/vectors/download-icon.svg"
                                                        alt="download-icon" /></div>
                                            </div>
                                            <div
                                                className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4 mt-3">
                                                <div className="flex items-center">
                                                    <div className="mr-4"><img src="../../../assets/img/vectors/file-icon.svg"
                                                            alt="file-icon" />
                                                    </div>
                                                    <div className="leading-3">
                                                        <p className="text-xs">Legal Contract</p>
                                                        <small className="text-xs">105 kb</small>
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"><img src="../../../assets/img/vectors/download-icon.svg"
                                                        alt="download-icon" /></div>
                                            </div>
                                            <div
                                                className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4 mt-3">
                                                <div className="flex items-center">
                                                    <div className="mr-4"><img src="../../../assets/img/vectors/file-icon.svg"
                                                            alt="file-icon" />
                                                    </div>
                                                    <div className="leading-3">
                                                        <p className="text-xs">Legal Contract</p>
                                                        <small className="text-xs">105 kb</small>
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer"><img src="../../../assets/img/vectors/download-icon.svg"
                                                        alt="download-icon" /></div>
                                            </div>
                                            
                                        </div>

                                    </div> */}

                        <button
                          type="button"
                          className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5 h-12"
                          onClick={()=>initializePayment(onSuccess, onClose)}
                        >
                          Make Full Payment
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </main>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BidDetails;
