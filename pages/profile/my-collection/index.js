import Meta from "../../../src/components/Head/Meta";
import Collection from "../../../src/components/Layout/Collection";
import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useRef } from "react";
import { useState } from "react";
import { enviroment } from "../../../src/components/enviroment";
import { connect } from "react-redux";
import { getCollection } from "../../../redux/actions/carsAction";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePaystackPayment } from "react-paystack";

const MyCollection = ({
  loading,
  getCollection,
  carCollection: collection,
}) => {
  const [userEmail, setuserEmail] = useState(null);
  const [userPhone, setuserPhone] = useState(null);
  const [userName, setuserName] = useState(null);
  const [depositVisibility, setDepositVisibility] = useState("none");
  const router = useRouter();

  const [amount, setAmount] = useState(0);
  const referenceNumber = () => {
    return "bld" + Math.floor(Math.random() * 1000000000 + 1);
  };
  const config = {
    reference: referenceNumber(),
    // email: `${userEmail}`,
    email: `judgechuks@gmail.com`,
    amount: 100000,
    publicKey: "pk_test_1007e9b8ddb07fc05a17864b53865c135a948fbe",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    fetch(
      "http://localhost:4000/transactions/initialize/verify/" +
        reference.reference,
      {
        // fetch(enviroment.BASE_URL + "transactions/initialize/verify"+reference, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (res) => {
          console.log("category product -------->", res);
        },
        (error) => {}
      );
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const collectionID = (collectionID) => {
    console.log("Im here", collectionID);
  };
  const [id, setId] = useState(null);
  const [carCollection, setcarCollection] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [message, setmessage] = useState(null);
  const [activeTab, setactiveTab] = useState("place-bid");
  const [placeBidView, setplaceBidView] = useState(true);
  const [buyNowCars, setbuyNowCars] = useState(null);
  const [vehicleId, setVehicleId] = useState(null);

  const newCollection = useRef();
  const initializePayment = usePaystackPayment(config);

  const toastError = () =>
    toast.error(`${error ? error : "Could not create"}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const toastSuccess = () =>
    toast.success(`${message ? message : "Created successfully"}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const placeBidError = () =>
    toast.error("Could not perform transaction", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const placeBidSuccess = () =>
    toast.success("Payment Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  var nairaFormatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });
  var dollarFormatter = new Intl.NumberFormat();

  useEffect(() => {
    const getUserId = () => {
      const userActive = localStorage.getItem("user");
      // console.log(userActive)
      if (!userActive) {
        setId(null);
        return null;
      }
      const item = JSON.parse(userActive);
      setId(item?.userId);
      setuserEmail(item?.email);
      setuserPhone(item?.phone);
      setuserName(item?.userName);
    };
    getUserId();
  }, [id]);

  const addCollection = (e) => {
    e.preventDefault();

    if (!newCollection.current.value) {
      return;
    } else {
      seterror(null);
      setisLoading(true);

      const collectionObject = {
        owner: `${id}`,
        name: `${newCollection.current.value}`,
      };
      fetch(enviroment.BASE_URL + "collections", {
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
            toastError();
            throw Error("Could not create collection");
          } else {
            setmessage(response.statusText);
            toastSuccess();
            setshowModal(false);
          }
        })
        .catch((error) => {
          seterror(error);
          console.log("error", error);
        });
    }
  };

  const fetchBuyNowCars = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(enviroment.BASE_URL + "bids/owner/" + `${id}`, requestOptions)
      .then((response) => response.text())
      .then((data) => {
        // console.log(data)
        if (data) {
          if (Object.entries(data).length >= 1) {
            const formatBuyNow = JSON.parse(data);
            console.log(formatBuyNow);
            setbuyNowCars(formatBuyNow.data);
            localStorage.setItem("CollectionTransactionId", null);
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(enviroment.BASE_URL + "collections/owner/collections/" + `${id}`, {
      method: "GET",
      redirect: "follow",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        return response.text();
      })
      .then((data) => {
        // console.log(data)
        if (data) {
          //  console.log(data.data)
          if (Object.entries(data).length >= 1) {
            const formatCollection = JSON.parse(data);
            console.log(formatCollection.data);
            localStorage.setItem("collectionData", formatCollection);

            setcarCollection(formatCollection.data);
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id, isLoading]);

  useEffect(() => {
    fetchBuyNowCars();
  }, [id]);

  const switchTab = (val) => {
    setactiveTab(val);

    if (val === "place-bid") {
      setplaceBidView(true);
    }
    if (val === "buy-now") {
      setplaceBidView(false);
    }
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
        console.log(data);
        if (data) {
          // ??console.log(data.data)
          if (Object.entries(data).length >= 1) {
            const formatData = JSON.parse(data);
            // setcollection(formatData.data);
            if (formatData.data.status) {
              placeBidSuccess();
            } else {
              placeBidError();
            }
          }
        }
      })
      .catch((error) => console.log("payment error", error));
  };

  const frontendPayment = (collectionID) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      vin: "",
      number: `${userPhone}`,
      fullname: `${userName}`,
      email: `${userEmail}`,
      buyNow: false,
      username: "",
      collection: `${collectionID}`,
      owner: `${id}`,
      vehicle: "61417e66e48f1a073799ba99",
      bid: "",
      amount: "1000",
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

  const initializePaystack = (collectionID) => {
    initializePayment(onSuccess, onClose);
    frontendPayment(collectionID);
  };

  const showDepositDetails = (id) => {
    setVehicleId(id);

    setDepositVisibility(depositVisibility === "none" ? "block" : "none");
  };

  return (
    <div>
      <Meta></Meta>
      <main className="mb-20">
        <Collection></Collection>
        <div className="lg:mx-20 mx-10 px-3 mt-20 search-results-holder flex items-center justify-between">
          {/* <!-- first section here --> */}
          <div>
            <button
              type="button"
              className={
                activeTab === "place-bid"
                  ? "primary-btn focus:outline-none text-white font-10 font-semibold px-3.5 py-1.5"
                  : "focus:outline-none primary-black text-black font-10  px-3.5 py-1.5"
              }
              value="all"
              onClick={() => switchTab("place-bid")}
            >
              Place Bid
            </button>
            <button
              type="button"
              className={
                activeTab === "buy-now"
                  ? "primary-btn focus:outline-none text-white font-10 font-semibold px-3.5 py-1.5"
                  : "focus:outline-none primary-black text-black font-10  px-3.5 py-1.5"
              }
              value="now"
              onClick={() => switchTab("buy-now")}
            >
              Buy Now
            </button>
          </div>
        </div>

        {placeBidView ? (
          <div className="lg:px-20 px-5 mt-5 py-3 flex justify-between items-center">
            <>
              <div
                className=" w-full mt-2 origin-top-right bg-white outline-none font-10"
                aria-labelledby="headlessui-menu-button-1"
                id="headlessui-menu-items-117"
                role="menu"
              >
                {carCollection?.length <= 0 && (
                  <div> No Collection to Show</div>
                )}
                {carCollection?.map((collection) => (
                  <div key={collection?._id}>
                    <div className="border-gray-100 border mb-3 lg:px-2  md:py-2 flex justify-between items-center cursor-pointer hover:bg-blue-50 w-full sm:w-5/6 mx-auto rounded-lg ">
                      <div className="md:flex w-full ">
                        <div className="flex justify-between md:hidden p-2 text-sm">
                          <div>
                            <h4 className=" text-xs md:text-sm font-medium blue-text uppercase mb-2 ">
                              {collection?.name}
                            </h4>
                            <h4 className="text-xs">
                              {" "}
                              {collection?.vehicles.length} cars selected
                            </h4>
                          </div>
                          <div>
                            {collection?.payedStatus ? (
                              <div className="flex flex-col mx-auxo items-end">
                                <h6 className="text-xs font-normal light-gray-text">
                                  $1000 deposit paid
                                </h6>
                                <h6 className="text-xs font-normal text-green-300">
                                  Deposit paid
                                </h6>
                              </div>
                            ) : (
                              <div>
                                {/* <button
                                        onClick={() =>
                                          // initializePaystack(
                                          //     collection?._id
                                          // )
                                          router.push(
                                            "my-collection/transaction/" +
                                              collection?._id
                                          )
                                        }
                                        className="z-50 cursor-pointer focus:outline-none primary-btn text-white font-9 font-semibold py-2 px-3"
                                      >
                                        Make Deposit
                                      </button> */}
                                      <h6 className="text-xs font-normal text-red-300 my-2">
                                        Not Completed
                                      </h6> 
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="md:mr-2 w-full md:w-1/5 xl:w-1/5  h-full">
                          {collection?.vehicles.length > 0 ? (
                            <img
                              key={collection?.image_id}
                              src={`https://proxybuylike.herokuapp.com/?url=${collection?.vehicles[0]?.images[0]?.image_largeUrl}`}
                              alt="car"
                              className="img-fluid rounded text-center w-full h-full"
                            />
                          ) : (
                            // <div
                            //   style={{
                            //     backgroundImage: `url(/img/Rectangle.png)`,
                            //   }}
                            //   className="w-full font-semibold text-white object-cover bg-no-repeat	flex justify-center items-center h-6 w-full rounded-md img-fluid rounded "
                            // >
                            //   IMAGE COMING SOON
                            // </div>

                            <img
                              key={collection?.image_id}
                              src={`/img/Rectangle.png`}
                              alt="car"
                              className="img-fluid rounded text-center w-full h-full md:h-26"
                            />
                          )}
                        </div>
                        <div className=" w-4/5 flex flex-col">
                          <div className="hidden sm:flex w-full justify-between">
                            <div className="mb-5">
                              <h4 className=" text-xs md:text-sm font-medium blue-text uppercase mb-2 ">
                                {collection?.name}
                              </h4>
                              <h6 className="hidden md:block md-text-sm font-normal blue-text">
                                {collection?.vehicles.length} cars selected
                              </h6>
                            </div>
                            <div className="flex flex-col mx-auxo items-end text-right">
                              <div>
                                {collection?.payedStatus ? (
                                  <div className="flex flex-col mx-auxo items-end">
                                    <h6 className="hidden md:block lg:text-xs font-normal light-gray-text">
                                      $1000 deposit paid
                                    </h6>
                                    <h6 className="lg:text-xs font-normal text-green-300">
                                      Deposit paid
                                    </h6>
                                  </div>
                                ) : (
                                  <div>
                                    {/* <button
                                        onClick={() =>
                                          // initializePaystack(
                                          //     collection?._id
                                          // )
                                          router.push(
                                            "my-collection/transaction/" +
                                              collection?._id
                                          )
                                        }
                                        className="z-50 cursor-pointer focus:outline-none primary-btn text-white font-9 font-semibold py-2 px-3"
                                      >
                                        Make Deposit
                                      </button>
                                      <h6 className="text-xs font-normal text-red-300 my-2">
                                        Not Completed
                                      </h6> */}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div
                            className="w-full md:hidden  py-2"
                          >
                            <div className="flex flex-wrap py-2">
                              {collection?.vehicles?.map((vehicle) => (
                                <img
                                  key={vehicle?.image_id}
                                  src={`https://proxybuylike.herokuapp.com/?url=${vehicle?.images[0]?.image_smallUrl}`}
                                  alt="car"
                                  className="tiny-car-card mb-2"
                                />
                              ))}
                            </div>
                            <div className="cursor-pointer text-center object-center" >
                              <Link
                                href={
                                  "/profile/my-collection/" + collection?._id
                                }
                              >
                                <h6 className="text-center text-xs text-blue-400 my-2 font-bold mx-auto ml-10"  > 
                                  Manage this collection
                                </h6>
                              </Link>
                            </div>
                          </div>
                          <div
                            className="w-full hidden md:flex justify-between items-bottom md:mt-0 lg:mt-6  xl:mt-16  md:object-bottom"
                            style={{ borderTop: "0.2px solid grey" }}
                          >
                            <div className="flex flex-wrap pt-2">
                              {collection?.vehicles?.map((vehicle) => (
                                <img
                                  key={vehicle?.image_id}
                                  src={`https://proxybuylike.herokuapp.com/?url=${vehicle?.images[0]?.image_smallUrl}`}
                                  alt="car"
                                  className="tiny-car-card mb-2"
                                />
                              ))}
                            </div>
                            <div className="flex cursor-pointer group">
                              <Link
                                href={
                                  "/profile/my-collection/" + collection?._id
                                }
                              >
                                <h6 className="md:text-xs text-blue-400 mt-2 font-bold">
                                  Manage this collection
                                </h6>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </div>
        ) : (
          <section className="w-full grid gap-y-4 mb-10 px-5 md:px-20 mt-5 py-3">
            {buyNowCars?.length <= 0 && <div className>No cars to show</div>}
            {buyNowCars?.map((vehicle) => (
              <div
                key={vehicle._id}
                className="bid-card flex-col lg:flex-row flex py-3 px-3 mb-2 w-full md:w-5/6 mx-auto "
              >
                <img
                  src={`https://proxybuylike.herokuapp.com/?url=${vehicle.vehicle?.images[0]?.image_largeUrl}`}
                  alt="benz"
                  className="rounded-md w-64 h-36 flex-no-shrink mr-4 w-full sm:w-1/6"
                />
                <div className="flex flex-col justify-between flex-grow">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-xs font-normal">
                        {vehicle.vehicle?.name}
                      </h4>
                      <div className="flex mt-0.5">
                        <img
                          src="../../assets/img/Location.png"
                          alt=""
                          className="w-1.5 h-2 mt-1 mr-1"
                        />
                        <p className="text-xs font-normal">
                          {vehicle.vehicle?.Vehicle_location}
                        </p>
                      </div>
                      <div className="flex mt-0.5">
                        <h4 className="font-normal font-sm mr-5">
                          {vehicle.vehicle?.year}
                        </h4>
                        <h4 className="font-normal font-sm">
                          {/* {205,456} miles */}
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-col mx-auxo items-end">
                      <div className="mb-2" key={vehicle._id}>
                        <h4 className="text-xs  font-normal gray-text">
                          Deposit Status-{" "}
                          {vehicle.done ? (
                            <span
                              style={{ color: "green", cursor: "pointer" }}
                              onClick={() => showDepositDetails(vehicle._id)}
                            >
                              Paid
                            </span>
                          ) : (
                            <span style={{ color: "red" }}>Not Paid</span>
                          )}
                        </h4>
                        {vehicleId === vehicle._id ? (
                          <div
                            className="text-xs gray-text"
                            style={{ display: depositVisibility }}
                          >
                            <h1>Amount : {nairaFormatter.format(1000)}</h1>
                            <h1>
                              Date Paid :{" "}
                              {new Date(vehicle?.updatedAt).toLocaleDateString(
                                "en-NG",
                                {
                                  year: "numeric",
                                  day: "numeric",
                                  month: "long",
                                }
                              )}
                            </h1>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>

                      <h4 className="text-base font-normal gray-text">
                        ${dollarFormatter.format(vehicle.vehicle?.bidAmount)}
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <h3
                        style={{ fontSize: "12px" }}
                        className="font-xs primary-blue uppercase cursor-pointer hover:opacity-70"
                      >
                        <Link
                          href={
                            "/profile/my-collection/bid/" + vehicle.vehicle?.vin
                          }
                        >
                          view details
                        </Link>
                      </h3>
                    </div>
                    <div className="border"></div>
                    <div className="flex justify-between mt-1.5">
                      <div className="flex space-x-2">
                        <p className="primary-blue font-normal text-xs capitalize">
                          clean title
                        </p>
                        <p className="primary-blue font-normal text-xs capitalize">
                          fully loaded
                        </p>
                        <p className="primary-blue font-normal text-xs capitalize">
                          great deal
                        </p>
                        <p className="primary-blue font-normal text-xs capitalize">
                          green light car
                        </p>
                        <p className="primary-blue font-normal text-xs capitalize">
                          non-accident
                        </p>
                      </div>
                      {/* <div className="flex cursor-pointer group">
                                                <img
                                                    src="../../assets/img/bin.svg"
                                                    alt="bin"
                                                    className="w-3 h-3 mr-0.5 mt-0.5 group-hover:text-red-500"
                                                />
                                                <h4
                                                    className="font-normal font-sm gray-text group-hover:text-red-500"
                                                    onClick={() =>
                                                        removeBid(
                                                            vehicle._id
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </h4>
                                            </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { loading, error, carCollection } = state.Cars;
  return { loading, error, carCollection };
};

export default connect(mapStateToProps, {
  getCollection,
})(MyCollection);
