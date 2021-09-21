import Meta from "../../../src/components/Head/Meta";
import Collection from "../../../src/components/Layout/Collection";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { enviroment } from "../../../src/components/enviroment";
import { connect } from "react-redux";
import { getCollection } from "../../../redux/actions/carsAction";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePaystackPayment } from 'react-paystack';

const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000,
    publicKey: 'pk_test_d23fcbca6c66668c6e6dbdc5344f28cbcab95e7a',
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

const MyCollection = ({
    loading,
    getCollection,
    carCollection: collection,
}) => {
    const [id, setId] = useState(null);
    const [carCollection, setcarCollection] = useState([]);
    const collectionRef = useRef(null);
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
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

    useEffect(() => {
        fetch(
            enviroment.BASE_URL + "collections/owner/collections/" + `${id}`,
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
                    //  console.log(data.data)
                    if (Object.entries(data).length >= 1) {
                        const formatCollection = JSON.parse(data);
                        setcarCollection(formatCollection.data);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id, isLoading]);

    return (
        <div>
            <Meta></Meta>
            <main className="mb-20">
                <Collection></Collection>
                <div className="px-20 mt-5 py-3 flex justify-between items-center">
                    <>
                        <div
                            className=" w-full mt-2 origin-top-right bg-white divide-y divide-gray-200 outline-none font-10"
                            aria-labelledby="headlessui-menu-button-1"
                            id="headlessui-menu-items-117"
                            role="menu"
                        >
                            {carCollection?.map((collection) => (
                                <div
                                    key={collection?._id}
                                >
                                    <div className="border-gray-100 border mb-3 px-20 py-5 flex justify-between items-center cursor-pointer hover:bg-blue-50">
                                        <>
                                            <Link  href={"/profile/my-collection/" + collection?._id}>
                                                <div className="flex flex-1 flex-col">
                                                    <div className="mb-5">
                                                        <h4 className="text-sm font-medium blue-text uppercase">
                                                            {collection?.name}
                                                        </h4>
                                                        <h6 className="text-xs font-normal blue-text">
                                                            {
                                                                collection?.vehicles
                                                                    .length
                                                            }{" "}
                                                            cars selected
                                                        </h6>
                                                    </div>
                                                    <div className="flex py-2">
                                                        {collection?.vehicles?.map(
                                                            (vehicle) => (
                                                                <img
                                                                    src={
                                                                        vehicle
                                                                            ?.images[0]
                                                                            ?.image_smallUrl
                                                                    }
                                                                    alt="car"
                                                                    className="tiny-car-card"
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                            </Link>
                                            <div>
                                                <button onClick={() => initializePayment(onSuccess, onClose)} className="z-50 cursor-pointer focus:outline-none primary-btn text-white font-9 font-semibold py-2 px-3">Make Deposit</button>
                                            </div>
                                            {/* <div className="flex flex-col mx-auxo items-end">
                                            <h4 className="text-base font-normal gray-text">
                                                $15,000 - $30,500
                                            </h4>
                                            <h6 className="text-xs font-normal light-gray-text">
                                                $1000 deposit paid
                                            </h6>
                                        </div> */}
                                        </>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                </div>
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
