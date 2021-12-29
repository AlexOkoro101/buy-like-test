import Link from "next/link";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { enviroment } from "../../../src/components/enviroment";
import { connect, useDispatch } from "react-redux";
import { getCollection } from "../../../redux/actions/carsAction";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import FadeLoader from "react-spinners/FadeLoader";

const Collection = ({ loading, getCollection, carCollection: collection }) => {
    const [id, setId] = useState(null);
    const [carCollection, setcarCollection] = useState([]);
    const [collectionDropdown, setcollectionDropdown] = useState(false);
    const collectionRef = useRef(null);
    const [showModal, setshowModal] = useState(false);
    const [showEditCollectionModal, setshowEditCollectionModal] =
        useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const [editCollectionId, seteditCollectionId] = useState(null);
    const newCollection = useRef();
    const newCollectionName = useRef();
    const dispatch = useDispatch();
    const router = useRouter();

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

    const toggleCollectionDropdown = () => {
        setcollectionDropdown(!collectionDropdown);
    };

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
                        // console.log("new collection", formatCollection.data)
                        setcarCollection(formatCollection.data);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id, isLoading]);

    const deleteCollection = (collectionId) => {
        setisLoading(true);
        seterror(null);

        fetch(enviroment.BASE_URL + "collections/" + collectionId, {
            method: "DELETE",
            redirect: "follow",
        })
            .then((response) => {
                setisLoading(false);
                if (!response.ok) {
                    toastError();
                    throw Error("Could not delete collection");
                } else {
                    setmessage(response.statusText);
                    toastSuccess();
                    router.push("/profile/my-collection");
                }
            })
            .catch((error) => {
                seterror(error);
                console.log("error", error);
            });
    };

    const editCollection = (collectionId) => {
        setshowEditCollectionModal(true);
        seteditCollectionId(collectionId);
    };

    const handleEdit = (e) => {
        e.preventDefault();

        setisLoading(true);
        seterror(null);

        const collectionName = {
            name: `${newCollectionName.current.value}`,
        };

        fetch(enviroment.BASE_URL + "collections/" + editCollectionId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(collectionName),
            redirect: "follow",
        })
            .then((response) => {
                setisLoading(false);
                if (!response.ok) {
                    toastError();
                    throw Error("Could not edit collection");
                } else {
                    try {
                        setmessage(response.statusText);
                        toastSuccess();
                        router.push("/profile/my-collection");
                        setshowEditCollectionModal(false);
                        getCollection(id);
                    } catch (e) {
                        console.log("edit error", e);
                    }
                }
            })
            .catch((error) => {
                seterror(error);
                console.log("error", error);
            });
    };

    console.log(carCollection)
    return (
        <>
            {id && (
                <>
                    <ToastContainer />
                    {carCollection?.length ? (
                        <div className="blue-div px-20 mt-16 py-3 flex justify-between items-center">
                            <>
                                <div
                                    key={carCollection[0]._id}
                                    className="flex flex-1"
                                >
                                    <div>
                                        <h4 className="text-sm font-medium blue-text">
                                            {carCollection[0].name}
                                        </h4>
                                        <h6 className="text-xs font-normal blue-text">
                                            {carCollection[0].vehicles.length}{" "}
                                            cars selected
                                        </h6>
                                    </div>
                                    <div className="flex py-2 ml-3">
                                        {carCollection[0]?.vehicles?.map(
                                            (vehicle) => (
                                                <img
                                                    src={`https://proxybuylike.herokuapp.com/?url=${vehicle?.images[0]?.image_smallUrl}`}
                                                    alt={"car"}
                                                    className="tiny-car-card"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="ml-10 flex items-start -mt-4">
                                    {carCollection?.length > 1 && (
                                        <img
                                            src={
                                                !collectionDropdown
                                                    ? "../../assets/img/dropdown.png"
                                                    : "../../assets/img/Polygon.png"
                                            }
                                            alt="dropdown"
                                            className="cursor-pointer"
                                            onClick={toggleCollectionDropdown}
                                        />
                                    )}
                                </div>
                            </>
                        </div>
                    ) : (
                        <></>
                    )}

                    <div
                        ref={collectionRef}
                        className={
                            !collectionDropdown
                                ? "opacity-0 invisible dropdown-menu  transform origin-top-right -translate-y-2 scale-95 font-10 transition duration-500 ease-in-out"
                                : " opacity-100 visible dropdown-menu  transform origin-top-right -translate-y-2 scale-95 font-10 transition duration-500 ease-in-out"
                        }
                    >
                        <div
                            className="absolute -left-8 w-full mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg outline-none font-10"
                            aria-labelledby="headlessui-menu-button-1"
                            id="headlessui-menu-items-117"
                            role="menu"
                        >
                            <>
                                {!isLoading ? (
                                    <>
                                        {carCollection
                                            ?.slice(0, 5)
                                            .map((collection) => (
                                                <div
                                                    key={collection?._id}
                                                    className="px-20 py-3 flex justify-between items-center"
                                                >
                                                    <>
                                                        <div className="flex">
                                                            <div>
                                                                <h4 className="text-sm font-medium blue-text">
                                                                    {
                                                                        collection?.name
                                                                    }
                                                                </h4>
                                                                <h6 className="text-xs font-normal blue-text">
                                                                    {
                                                                        collection
                                                                            ?.vehicles
                                                                            .length
                                                                    }{" "}
                                                                    cars
                                                                    selected
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <button
                                                                className="mx-2 text-sm text-blue-400"
                                                                onClick={() =>
                                                                    editCollection(
                                                                        collection?._id
                                                                    )
                                                                }
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="mx-2 text-red-600 text-sm"
                                                                onClick={() =>
                                                                    deleteCollection(
                                                                        collection?._id
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </>
                                                </div>
                                            ))}
                                    </>
                                ) : (
                                    <>
                                        <div className="flex justify-center items-center w-full h-80">
                                            <FadeLoader
                                                color="#BFC1C6"
                                                width={5}
                                                radius={2}
                                                margin={2}
                                                height={5}
                                                loading
                                            />
                                        </div>
                                    </>
                                )}
                            </>
                            <div className="px-20 py-3 flex justify-between items-center">
                                <Link href="/vin">
                                    <p className="start-bid">
                                        {" "}
                                        Start a new bid
                                    </p>
                                </Link>

                                <p
                                    onClick={() => {
                                        setcollectionDropdown(false);
                                        setshowModal(true);
                                    }}
                                    className="start-bid"
                                >
                                    {" "}
                                    Add Collection
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- The Modal --> */}
                    {showModal && (
                        <div id="myModal" className="modal">
                            {/* <!-- Modal content --> */}
                            <div className="modal-content relative w-10/12 lg:w-1/3 mx-auto mx-8 md:px-0 md:mt-28 md:px-20 md:py-10">
                                <span
                                    onClick={() => {
                                        setshowModal(false);
                                    }}
                                    className="close absolute right-5 top-1 text-4xl text-gray-500"
                                >
                                    &times;
                                </span>
                                {/* <!-- <i className="absolute right-0 fa fa-times" aria-hidden="true"></i> --> */}
                                <form
                                    onSubmit={addCollection}
                                    className="font-11 grid grid-cols-6 gap-2 mx-6 py-10 md:mx-0 md:py-0"
                                >
                                    <div className="col-span-6 mb-2">
                                        <label
                                            className="block pb-1.5 font-10 primary-black"
                                            htmlFor="card_number"
                                        >
                                            {" "}
                                            Collection Name{" "}
                                        </label>
                                        <input
                                            ref={newCollection}
                                            id="card_number"
                                            className="profile-control focus:outline-none p-2 w-full"
                                            type="text"
                                            placeholder="Enter your collection name"
                                        />
                                    </div>

                                    <div className="col-span-6 place-self-center mt-4">
                                        <button className="focus:outline-none primary-btn font-10 font-semibold text-white py-1.5 px-8">
                                            {isLoading ? (
                                                <ClipLoader
                                                    color="#fff"
                                                    size={20}
                                                    loading
                                                />
                                            ) : (
                                                <>ADD COLLECTION</>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    {showEditCollectionModal && (
                        <div id="myModal" className="modal">
                            {/* <!-- Modal content --> */}
                            <div className="modal-content relative w-10/12 lg:w-1/3 mx-auto mx-8 md:px-0 md:mt-28 md:px-20 md:py-10">
                                <span
                                    onClick={() => {
                                        setshowEditCollectionModal(false);
                                        setisLoading(false);
                                    }}
                                    className="close absolute right-5 top-1 text-4xl text-gray-500"
                                >
                                    &times;
                                </span>
                                {/* <!-- <i className="absolute right-0 fa fa-times" aria-hidden="true"></i> --> */}
                                <form
                                    onSubmit={handleEdit}
                                    className="font-11 grid grid-cols-6 gap-2 mx-6 py-10 md:mx-0 md:py-0"
                                >
                                    <div className="col-span-6 mb-2">
                                        <label
                                            className="block pb-1.5 font-10 primary-black"
                                            htmlFor="card_number"
                                        >
                                            New Collection Name{" "}
                                        </label>
                                        <input
                                            ref={newCollectionName}
                                            id="card_number"
                                            className="profile-control focus:outline-none p-2 w-full"
                                            type="text"
                                            placeholder="Enter new collection name"
                                        />
                                    </div>

                                    <div className="col-span-6 place-self-center mt-4">
                                        <button className="focus:outline-none primary-btn font-10 font-semibold text-white py-1.5 px-8">
                                            {isLoading ? (
                                                <ClipLoader
                                                    color="#fff"
                                                    size={20}
                                                    loading
                                                />
                                            ) : (
                                                <>EDIT COLLECTION</>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    {/* <!-- end of modal --> */}
                </>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    const { loading, error, carCollection } = state.Cars;
    return { loading, error, carCollection };
};

export default connect(mapStateToProps, {
    getCollection,
})(Collection);
