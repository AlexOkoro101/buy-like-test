import Meta from "../../../src/components/Head/Meta";
import Collection from "../../../src/components/Layout/Collection";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { enviroment } from "../../../src/components/enviroment";
import { connect } from "react-redux";
import  {getCollection}  from "../../../redux/actions/carsAction";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyCollection = ({ loading, getCollection, carCollection:collection }) => {
    const [id, setId] = useState(null);
    const [carCollection, setcarCollection] = useState([]);
    const collectionRef = useRef(null);
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)
    const [message, setmessage] = useState(null)
    const newCollection = useRef()

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
            setId(item?.userId)
            console.log("user id", id)
            
        }
        getUserId()
        
    }, [id])

    const addCollection = (e) => {
        e.preventDefault()


        if(!newCollection.current.value) {
            return;
        } else {
            seterror(null)
            setisLoading(true)

            const collectionObject = {
                owner: `${id}`,
                name: `${newCollection.current.value}`
            }
            console.log(collectionObject)
            fetch(enviroment.BASE_URL + "collections", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(collectionObject),
                redirect: 'follow'
            })
            .then(response => {
                setisLoading(false)
                console.log(response)
                if (!response.ok) {
                    toastError()
                    throw Error("Could not create collection")
                } else {
                    setmessage(response.statusText)
                    toastSuccess();
                    setshowModal(false)
                }
            })
            .catch(error => {
                seterror(error)
                console.log('error', error)
            });
        }
    }

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
                console.log(response);
                return response.text();
            })
            .then((data) => {
                // console.log(data)
                if (data) {
                    //  console.log(data.data)
                    if (Object.entries(data).length >= 1) {
                        const formatCollection = JSON.parse(data);
                        console.log("new collection", formatCollection.data)
                        
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
                            <Link href={'/profile/my-collection/' + collection?._id} key={collection?._id}>
                                <div
                                    className="px-20 py-5 flex justify-between items-center cursor-pointer hover:bg-blue-50"
                                >
                                    <>

                                        <div className="flex flex-col">
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
                                                    {collection?.vehicles?.map((vehicle) => (

                                                        <img
                                                            src={vehicle?.images[0]?.image_smallUrl}
                                                            alt="car"
                                                            className="tiny-car-card"
                                                        />

                                                    ))}
                                            </div>
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
                            </Link>
                        ))}
                        </div>
                    </>
                </div>
            </main>    
        </div>
     );
}
 
const mapStateToProps = (state) => {
    const { loading, error, carCollection } = state.Cars;
    return { loading, error, carCollection };
};

export default connect(mapStateToProps, {
    getCollection,
})(MyCollection);