import { useEffect, useState } from "react"
import { enviroment } from "../../src/components/enviroment"
import Meta from "../../src/components/Head/Meta"

const Transactions = () => {
    const [transactions, settransactions] = useState([])
    const [id, setId] = useState(null)

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
        console.log(id)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(enviroment.BASE_URL + "transactions/get-owner/" + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                if (result) {
                    // console.log(result)
                    if (Object.entries(result).length >= 1) {
                        const formatTrans = JSON.parse(result);
                        console.log("formated", formatTrans.data)
                        settransactions(formatTrans.data);
                    }
                }
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getTransactions()
    
    }, [id])


    return ( 
        <div>
            <Meta></Meta>
            <div className="h-screen  mt-24 mb-20 px-32">
                {!transactions?.length ? (
                    <div>
                        <p>No transaction available</p>
                    </div>
                ) : (
                    <>

                        <div className="flex">
                            <button className="primary-btn focus:outline-none text-white font-10 font-semibold px-2.5 py-1.5 ">ALL
                                BIDS</button>
                            <button className=" focus:outline-none primary-black font-10 font-normal px-2.5 py-1.5 ml-2">WON BIDS</button>
                            <button className=" focus:outline-none primary-black font-10 font-normal px-2.5 py-1.5">LOST BIDS</button>
                        </div>

                        <div className="pt-8 pb-6 text-2xl font-normal primary-black">
                            <h5>Transactions</h5>
                        </div>

                        {/* <!-- table here --> */}
                        <div className="flex items-center justify-center">
                            <div className="container">
                                <table className="w-full flex flex-row flex-no-wrap ">
                                    <thead className="tertiary-gray text-xs font-medium border-transactions">
                                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                            <th className="p-3.5 text-left">Vehicle Details</th>
                                            <th className="p-3.5 text-left">Amount paid</th>
                                            <th className="p-3.5 text-left">Form of payment</th>
                                            <th className="p-3.5 text-left">Status</th>
                                            <th className="p-3.5 text-left">Location</th>
                                            <th className="p-3.5 text-left">Balance</th>
                                        </tr>
                                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                            <th className="p-3.5 text-left">Vehicle Details</th>
                                            <th className="p-3.5 text-left">Amount paid</th>
                                            <th className="p-3.5 text-left">Form of payment</th>
                                            <th className="p-3.5 text-left">Status</th>
                                            <th className="p-3.5 text-left">Location</th>
                                            <th className="p-3.5 text-left">Balance</th>
                                        </tr>
                                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                            <th className="p-3.5 text-left">Vehicle Details</th>
                                            <th className="p-3.5 text-left">Amount paid</th>
                                            <th className="p-3.5 text-left">Form of payment</th>
                                            <th className="p-3.5 text-left">Status</th>
                                            <th className="p-3.5 text-left">Location</th>
                                            <th className="p-3.5 text-left">Balance</th>
                                        </tr>
                                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                            <th className="p-3.5 text-left">Vehicle Details</th>
                                            <th className="p-3.5 text-left">Amount paid</th>
                                            <th className="p-3.5 text-left">Form of payment</th>
                                            <th className="p-3.5 text-left">Status</th>
                                            <th className="p-3.5 text-left">Location</th>
                                            <th className="p-3.5 text-left">Balance</th>
                                        </tr>

                                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                            <th className="p-3.5 text-left">Vehicle Details</th>
                                            <th className="p-3.5 text-left">Amount paid</th>
                                            <th className="p-3.5 text-left">Form of payment</th>
                                            <th className="p-3.5 text-left">Status</th>
                                            <th className="p-3.5 text-left">Location</th>
                                            <th className="p-3.5 text-left">Balance</th>
                                        </tr>

                                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                            <th className="p-3.5 text-left">Vehicle Details</th>
                                            <th className="p-3.5 text-left">Amount paid</th>
                                            <th className="p-3.5 text-left">Form of payment</th>
                                            <th className="p-3.5 text-left">Status</th>
                                            <th className="p-3.5 text-left">Location</th>
                                            <th className="p-3.5 text-left">Balance</th>
                                        </tr>
                                    </thead>

                                    <tbody className="flex-1 sm:flex-none text-xs primary-black">

                                    {transactions.map((transaction) => (
                                        <tr key={transaction?._id} className="flex flex-col border-transactions flex-no wrap sm:table-row mb-2 sm:mb-0">
                                            <td className="p-3.5">Mercedes Benz GLK</td>
                                            <td className="p-3.5">{transaction?.amount}</td>
                                            <td className="p-3.5">Wire transfer</td>
                                            <td className="p-3.5">{transaction?.status}</td>
                                            <td className="p-3.5">Location</td>
                                            <td className="p-3.5">{transaction?.amountBalance}</td>
                                        </tr>

                                    ))}


                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </>
                )}
            </div>
        </div>
     );
}
 
export default Transactions;