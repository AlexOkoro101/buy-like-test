import { useEffect, useState } from "react"
import { enviroment } from "../../src/components/enviroment"
import Meta from "../../src/components/Head/Meta"
import Link from 'next/link'

const Transactions = () => {
    const [transactions, settransactions] = useState([]);
    const [id, setId] = useState(null);
    const [isLoading, setisLoading] = useState(true);

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
            // setuserEmail(item?.email)
        };
        getUserId();
    }, [id]);

    const getTransactions = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            enviroment.BASE_URL + "transactions/get-owner/" + id,
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                if (result) {
                    // console.log(result)
                    setisLoading(false)
                    if (Object.entries(result).length >= 1) {
                        const formatTrans = JSON.parse(result);
                        console.log("formated", formatTrans.data);
                        settransactions(formatTrans.data);
                    }
                }
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getTransactions();
    }, [id]);

    return (
        <div>
            <Meta></Meta>
            <div className="h-screen  mt-24 mb-20 lg:px-32 px-4">
            {isLoading? 
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
        </div>:
        <>
            
                {transactions?.length<=0 ? (
                    <div>
                        <p className="sec-black">No transaction available</p>
                    </div>
                ) : (
                    <>
                        <div className="flex">
                            <button className="primary-btn focus:outline-none text-white font-10 font-semibold px-2.5 py-1.5 ">
                                ALL BIDS
                            </button>
                            {/* <button className=" focus:outline-none primary-black font-10 font-normal px-2.5 py-1.5 ml-2">
                                WON BIDS
                            </button>
                            <button className=" focus:outline-none primary-black font-10 font-normal px-2.5 py-1.5">
                                LOST BIDS
                            </button> */}
                        </div>

                        <div className="pt-8 pb-6 text-2xl font-normal primary-black">
                            <h5>Transactions</h5>
                        </div>

                        {/* <!-- table here --> */}
                        <div className="">
                            <div className="block w-full overflow-x-auto overflow-y-auto h-96 mb-20">
                                <table className="items-center w-full  border-collapse">
                                    <thead className="tertiary-gray text-xs font-medium border-transactions">
                                       

                                        <tr className="">
                                            <th  className="p-3.5 text-left ">Vehicle/Collection Name</th>
                                            <th  className="p-3.5 text-left">Amount paid</th>
                                            {/* <th className="p-3.5 text-left">Form of payment</th> */}
                                            <th  className="p-3.5 text-left">Status</th>
                                            <th className="p-3.5 text-left">Balance</th>
                                            <th  className="p-3.5 text-left">Date</th>
                                        </tr>
                                    </thead>

                                    <tbody className="flex-1 sm:flex-none text-xs primary-black">

                                    {transactions?.map((transaction) => (
                                        <Link href={"/profile/my-collection/bid/" + (transaction?.vehicle?.vin || transaction?.BidCollection?._id)}>
                                            <tr key={transaction?._id} className="border-transactions flex-no wrap sm:table-row mb-2 sm:mb-0 cursor-pointer hover:bg-gray-100">
                                                <td className="p-3.5">{transaction?.BidCollection?.name || (`${transaction?.vehicle?.year || ""} ${transaction?.vehicle?.make || ""} ${transaction?.vehicle?.model || ""}` )}</td>
                                                <td className="p-3.5">${transaction?.amount || 0}</td>
                                                {/* <td className="p-3.5">{transaction?.type || ""}</td> */}
                                                <td className="p-3.5">{transaction?.statusTrans === "true" && (<>Success</>)}</td>
                                                <td className="p-3.5">${transaction?.amountBalance || 0}</td>
                                                <td className="p-3.5 ">{new Date(
                                                                    transaction?.createdAt
                                                            ).toLocaleDateString(
                                                                "en-NG",
                                                                {
                                                                    year: "numeric",
                                                                    day: "numeric",
                                                                    month: "long",
                                                                }
                                                            )}</td>
                                            </tr>

                                        </Link>

                                    ))}


                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                    
                )}
                </>
                        
            }                                    
            </div>
        </div>
        
    );
};

export default Transactions;
