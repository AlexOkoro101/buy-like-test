import Link from "next/link";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { enviroment } from "../../src/components/enviroment";
import Meta from "../../src/components/Head/Meta"

const BidTracker = () => {
    const [carCollection, setcarCollection] = useState([])
    const [collectionDropdown, setcollectionDropdown] = useState(false);
    const collectionRef = useRef(null);

    const toggleCollectionDropdown = () => {
        setcollectionDropdown(!collectionDropdown);
    };


    useEffect(() => {
        const fetchCarCollection = () => {
            console.log("run funtion")
            fetch(enviroment.BASE_URL + 'collections', {
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
                            // console.log("new collection", formatCollection?.data)
                            setcarCollection(formatCollection?.data)
                            // console.log(carCollection)
                        }
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        fetchCarCollection()
        return () => {
            fetchCarCollection
        }
    }, [])

   
    return ( 
        <div>
            <Meta></Meta>
            <main className="mb-20">
            {carCollection?.length ? (
                <div className="blue-div px-20 mt-16 py-3 flex justify-between items-center">
                    <>
                        <div key={carCollection[0]._id} className="flex flex-1">
                            <div>
                            <h4 className="text-sm font-medium blue-text">{carCollection[0].name}</h4>
                            <h6 className="text-xs font-normal blue-text">{carCollection[0].vehicles.length} cars selected</h6>
                            </div>
                            <div className="flex py-2 ml-3">
                            <img src="../assets/img/cars/AudiA3.png" alt="benz" className="tiny-car-card" />
                            <img src="../assets/img/cars/fordescape.png" alt="benz" className="tiny-car-card" />
                            <img src="../assets/img/cars/Toyota2.png" alt="benz" className="tiny-car-card" />
                            <img src="../assets/img/cars/Rav42.png" alt="benz" className="tiny-car-card" />
                            <img src="../assets/img/cars/highlander2.png" alt="benz" className="tiny-car-card" />
                            </div>
                        </div>
                        <div className="flex flex-col mx-auxo items-end flex-1">
                            <h4 className="text-base font-normal gray-text">$15,000 - $30,500</h4>
                            <h6 className="text-xs font-normal light-gray-text">$1000 deposit paid</h6>
                        </div>
                        <div className="ml-10 flex items-start -mt-4">
                            {carCollection?.length > 1 && (
                                <img src={!collectionDropdown ? "../assets/img/dropdown.png" : "../assets/img/polygon.png"} alt="dropdown" className="cursor-pointer" onClick={toggleCollectionDropdown} />
                            )}
                        </div>

                    </>
                </div>

            ) : (
                <div className="blue-div px-20 mt-20 py-3 flex justify-between">
                    <p>No collection to display for now</p>
                </div>
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
                        {carCollection?.map((collection) => (
                            <>
                            <div  key={collection?._id} className="px-20 py-3 flex justify-between items-center">
                                <>
                                    <div className="flex flex-1">
                                        <div>
                                        <h4 className="text-sm font-medium blue-text">{collection?.name}</h4>
                                        <h6 className="text-xs font-normal blue-text">{collection?.vehicles.length} cars selected</h6>
                                        </div>
                                        <div className="flex py-2 ml-3">
                                        <img src="../assets/img/cars/AudiA3.png" alt="benz" className="tiny-car-card" />
                                        <img src="../assets/img/cars/fordescape.png" alt="benz" className="tiny-car-card" />
                                        <img src="../assets/img/cars/Toyota2.png" alt="benz" className="tiny-car-card" />
                                        <img src="../assets/img/cars/Rav42.png" alt="benz" className="tiny-car-card" />
                                        <img src="../assets/img/cars/highlander2.png" alt="benz" className="tiny-car-card" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mx-auxo items-end flex-1">
                                        <h4 className="text-base font-normal gray-text">$15,000 - $30,500</h4>
                                        <h6 className="text-xs font-normal light-gray-text">$1000 deposit paid</h6>
                                    </div>

                                </>
                            </div>
                            </>
                        ))}
                        <div className="flex justify-between">
                            <Link href="/search">
                                <p className="start-bid"> Start a new bid</p>
                            </Link>
                            
                            <p onClick={() => {console.log('testing')}} className="start-bid"> Add Collection</p>
                            
                        </div>
                       
                    </div>
                </div>

                <div className="flex font-11 mt-10">
                <div className="side-card mx-20 px-5 py-5 space-y-4">
                    <div className="flex justify-between">
                    <h4 className="text-xs font-semibold">Trucking</h4>
                    <p className="text-xs font-normal">$300</p>
                    </div>

                    <div className="flex justify-between">
                    <h4 className="text-xs font-semibold">Shipping</h4>
                    <p className="text-xs font-normal">$950</p>
                    </div>

                    <div className="flex justify-between">
                    <h4 className="text-xs font-semibold">Clearing</h4>
                    <p className="text-xs font-normal">$2,000,000</p>
                    </div>

                    <div className="flex justify-between">
                    <h4 className="text-xs font-semibold">Trucking</h4>
                    <p className="text-xs font-normal">$400</p>
                    </div>

                    <div className="border"></div>

                    <div className="flex justify-between">
                    <h4 className="text-xs font-semibold">Total</h4>
                    <p className="text-xs font-medium">$46,000,000</p>
                    </div>

                    <div className="border"></div>

                    <div className="flex justify-between">
                    <h4 className="text-xs font-semibold">Deposit</h4>
                    <p className="text-xs font-medium">$1,000</p>
                    </div>

                    <div className="border"></div>

                    <div className="flex justify-between">
                    <h4 className="text-xs font-semibold">Balance</h4>
                    <p className="text-xs font-medium">$45,530,000</p>
                    </div>

                    <h4 className="font-medium gray-text">
                    You will be directed to make the rest
                    of the payment after a bid is won for you.
                    </h4>
                </div>


                <section className="grid gap-y-4 mx-auto mb-10 mr-20">
                    <div className="bid-card flex py-3 px-3">
                    <img src="../assets/img/cars/AudiA3.png" alt="benz" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                    <div className="flex flex-col justify-between flex-grow">
                        <div className="flex justify-between">
                        <div>
                            <h4 className="text-xs font-normal">Audi A3</h4>
                            <div className="flex mt-0.5">
                            <img src="../assets/img/Location.png" alt="" className="w-1.5 h-2 mt-1 mr-1" />
                            <p className="text-xs font-normal">Houston, Texas</p>
                            </div>
                            <div className="flex mt-0.5">
                            <h4 className="font-normal font-sm mr-5">2020</h4>
                            <h4 className="font-normal font-sm">205,456 miles</h4>
                            </div>
                        </div>
                        <div className="flex flex-col mx-auxo items-end">
                            <h4 className="text-base font-normal gray-text">$30,500</h4>
                        </div>
                        </div>
                        <div>
                        <div className="flex justify-between mb-1">
                            <h3 className="font-medium font-xs primary-blue uppercase">
                            Awaiting bid - April 22,2021
                            </h3>
                            <h3 className="font-medium font-xs primary-blue uppercase">
                            view details
                            </h3>
                        </div>
                        <div className="border"></div>
                        <div className="flex justify-between mt-1.5">
                            <div className="flex space-x-2">
                            <p className="primary-blue font-normal text-xs capitalize">clean title</p>
                            <p className="primary-blue font-normal text-xs capitalize">fully loaded</p>
                            <p className="primary-blue font-normal text-xs capitalize">great deal</p>
                            <p className="primary-blue font-normal text-xs capitalize">green light car</p>
                            <p className="primary-blue font-normal text-xs capitalize">non-accident</p>
                            </div>
                            <div className="flex">
                            <img src="../assets/img/bin.svg" alt="bin" className="w-3 h-3 mr-0.5 mt-0.5" />
                            <h4 className="font-normal font-sm gray-text">Remove</h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="bid-card flex py-3 px-3">
                    <img src="../assets/img/cars/AudiA3.png" alt="benz" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                    <div className="flex flex-col justify-between flex-grow">
                        <div className="flex justify-between">
                        <div>
                            <h4 className="text-xs font-normal">Audi A3</h4>
                            <div className="flex ">
                            <img src="../assets/img/Location.png" alt="" className="w-1.5 h-2 mt-1 mr-1" />
                            <p className="text-xs font-normal">Houston, Texas</p>
                            </div>
                            <div className="flex">
                            <h4 className="font-normal font-sm mr-5">2020</h4>
                            <h4 className="font-normal font-sm">205,456 miles</h4>
                            </div>
                        </div>
                        <div className="flex flex-col mx-auxo items-end">
                            <h4 className="text-base font-normal gray-text">$30,500</h4>
                        </div>
                        </div>
                        <div>
                        <div className="flex justify-between mb-1">
                            <h3 className="font-medium font-xs primary-blue uppercase">
                            bid lost
                            </h3>
                            <h3 className="font-medium font-xs primary-blue uppercase">
                            view details
                            </h3>
                        </div>
                        <div className="border"></div>
                        <div className="flex justify-between mt-1.5">
                            <div className="flex space-x-2">
                            <p className="primary-blue font-normal text-xs capitalize">clean title</p>
                            <p className="primary-blue font-normal text-xs capitalize">fully loaded</p>
                            <p className="primary-blue font-normal text-xs capitalize">great deal</p>
                            <p className="primary-blue font-normal text-xs capitalize">green light car</p>
                            <p className="primary-blue font-normal text-xs capitalize">non-accident</p>
                            </div>
                            <div className="flex">
                            <img src="../assets/img/bin.svg" alt="bin" className="w-3 h-3 mr-0.5 mt-0.5" />
                            <h4 className="font-normal font-sm gray-text">Remove</h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="bid-card flex py-3 px-3">
                    <img src="../assets/img/cars/AudiA3.png" alt="benz" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                    <div className="flex flex-col justify-between flex-grow">
                        <div className="flex justify-between">
                        <div>
                            <h4 className="text-xs font-normal">Audi A3</h4>
                            <div className="flex ">
                            <img src="../assets/img/Location.png" alt="" className="w-1.5 h-2 mt-1 mr-1" />
                            <p className="text-xs font-normal">Houston, Texas</p>
                            </div>
                            <div className="flex">
                            <h4 className="font-normal font-sm mr-5">2020</h4>
                            <h4 className="font-normal font-sm">205,456 miles</h4>
                            </div>
                        </div>
                        <div className="flex flex-col mx-auxo items-end">
                            <h4 className="text-base font-normal gray-text">$30,500</h4>
                        </div>
                        </div>
                        <div>
                        <div className="flex justify-between mb-1">
                            <h3 className="font-medium font-xs primary-blue uppercase">
                            bid won
                            </h3>
                            <h3 className="font-medium font-xs primary-blue uppercase">
                            view details
                            </h3>
                        </div>
                        <div className="border"></div>
                        <div className="flex justify-between mt-1.5">
                            <div className="flex space-x-2">
                            <p className="primary-blue font-normal text-xs capitalize">clean title</p>
                            <p className="primary-blue font-normal text-xs capitalize">fully loaded</p>
                            <p className="primary-blue font-normal text-xs capitalize">great deal</p>
                            <p className="primary-blue font-normal text-xs capitalize">green light car</p>
                            <p className="primary-blue font-normal text-xs capitalize">non-accident</p>
                            </div>
                            <div className="flex">
                            <img src="../assets/img/bin.svg" alt="bin" className="w-3 h-3 mr-0.5 mt-0.5" />
                            <h4 className="font-normal font-sm gray-text">Remove</h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                </div>

            </main>
        </div>
     );
}
 
export default BidTracker;
