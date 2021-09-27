import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { enviroment } from "../../../src/components/enviroment";
import Meta from "../../../src/components/Head/Meta";
import Collection from "../../../src/components/Layout/Collection";
import FadeLoader from "react-spinners/FadeLoader";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CollectionDetails = () => {
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

    const [collection, setcollection] = useState(null);

    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const [editCollectionId, seteditCollectionId] = useState(null);

    const router = useRouter();
    const collectionId = router.query.collectionId;

    useEffect(() => {
        fetch(enviroment.BASE_URL + "collections/" + collectionId, {
            method: "GET",
            redirect: "follow",
        })
            .then((response) => {
                setisLoading(false);
                return response.text();
            })
            .then((result) => {
                if (result) {
                    if (Object.entries(result).length >= 1) {
                        const formatCollection = JSON.parse(result);
                        console.log("formated", formatCollection)
                        setcollection(formatCollection);
                    }
                }
            })
            .catch((error) => console.log("error", error));
    }, [collectionId, isLoading]);

    const removeBid = (id) => {
        setisLoading(true);
        seterror(null);
        setmessage(null);

        fetch(enviroment.BASE_URL + "bids/remove-bid/" + id, {
            method: "GET",
            redirect: "follow",
        })
            .then((response) => {
                if (!response.ok) {
                    toastError();
                    // throw Error("Could not create collection")
                } else {
                    setmessage(response.statusText);
                    toastSuccess();
                }
                setisLoading(false);
                return response.text();
            })
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    return (
        <div>
            <Meta></Meta>
            <main className="mb-20">
                <Collection></Collection>
                <ToastContainer></ToastContainer>

                {isLoading && (
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
                )}

                {!collection?.error && (
                    <div className="flex font-11 mt-10">
                        <div className="side-card mx-20 px-5 py-5 space-y-4">
                            <div className="flex justify-between">
                                <h4 className="text-xs font-semibold">
                                    Trucking
                                </h4>
                                <p className="text-xs font-normal">$300</p>
                            </div>

                            <div className="flex justify-between">
                                <h4 className="text-xs font-semibold">
                                    Shipping
                                </h4>
                                <p className="text-xs font-normal">$950</p>
                            </div>

                            <div className="flex justify-between">
                                <h4 className="text-xs font-semibold">
                                    Clearing
                                </h4>
                                <p className="text-xs font-normal">
                                    $2,000,000
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <h4 className="text-xs font-semibold">
                                    Trucking
                                </h4>
                                <p className="text-xs font-normal">$400</p>
                            </div>

                            <div className="border"></div>

                            <div className="flex justify-between">
                                <h4 className="text-xs font-semibold">Total</h4>
                                <p className="text-xs font-medium">
                                    $46,000,000
                                </p>
                            </div>

                            <div className="border"></div>

                            <div className="flex justify-between">
                                <h4 className="text-xs font-semibold">
                                    Deposit
                                </h4>
                                <p className="text-xs font-medium">$1,000</p>
                            </div>

                            <div className="border"></div>

                            <div className="flex justify-between">
                                <h4 className="text-xs font-semibold">
                                    Balance
                                </h4>
                                <p className="text-xs font-medium">
                                    $45,530,000
                                </p>
                            </div>

                            <h4 className="font-medium gray-text">
                                You will be directed to make the rest of the
                                payment after a bid is won for you.
                            </h4>
                        </div>

                        <section className="grid gap-y-4 mx-auto mb-10 mr-20">
                            {Collection?.data?.vehicles.length <= 0 && (
                                <div>No cars to show</div>
                            )}
                            {collection?.data?.vehicles?.map((vehicle) => (
                                <div
                                    key={vehicle._id}
                                    className="bid-card flex py-3 px-3"
                                >
                                    <img
                                        src={vehicle.images[0]?.image_largeUrl}
                                        alt="benz"
                                        className="rounded-md w-64 h-36 flex-no-shrink mr-4"
                                    />
                                    <div className="flex flex-col justify-between flex-grow">
                                        <div className="flex justify-between">
                                            <div>
                                                <h4 className="text-xs font-normal">
                                                    {vehicle.name}
                                                </h4>
                                                <div className="flex mt-0.5">
                                                    <img
                                                        src="../../assets/img/Location.png"
                                                        alt=""
                                                        className="w-1.5 h-2 mt-1 mr-1"
                                                    />
                                                    <p className="text-xs font-normal">
                                                        {
                                                            vehicle.Vehicle_location
                                                        }
                                                    </p>
                                                </div>
                                                <div className="flex mt-0.5">
                                                    <h4 className="font-normal font-sm mr-5">
                                                        {vehicle.year}
                                                    </h4>
                                                    <h4 className="font-normal font-sm">
                                                        205,456 miles
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="flex flex-col mx-auxo items-end">
                                                <h4 className="text-base font-normal gray-text">
                                                    ${vehicle.bidAmount}
                                                </h4>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <h3 className="font-medium font-xs primary-blue uppercase">
                                                    Awaiting bid - April 22,2021
                                                    
                                                </h3>
                                                <h3 className="font-medium font-xs primary-blue uppercase cursor-pointer hover:opacity-70">
                                                    <Link
                                                        href={
                                                            "/search/" +
                                                            vehicle._id
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
                                                <div className="flex cursor-pointer group">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CollectionDetails;