import Meta from "../src/components/Head/Meta"

const FtStatusPage = () => {
    return ( 
        <div>
            <Meta></Meta>

            <section className="pop-holder relative w-full  px-5 lg:px-12 h-36 pt-20 pb-4 mt-5">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center lg:pl-10">
                        <div>
                            <p className="font-semibold text-sm">My first bid collection</p>
                            <small className="text-xs">6 cars selected</small>
                        </div>
                        <div className="mx-5  hidden md:hidden lg:block">
                            <div className="inline-block mr-1 "><img src="../assets/img/cars/Audi-view-1.svg" alt="image-1" /></div>
                            <div className="inline-block mr-1"><img src="../assets/img/cars/Ford-view- 2.svg" alt="image-2" /></div>
                            <div className="inline-block mr-1"><img src="../assets/img/cars/Toyota-view-3.svg" alt="image-3" /></div>
                            <div className="inline-block mr-1"><img src="../assets/img/cars/Rav-view-4.svg" alt="image-4" /></div>
                            <div className="inline-block mr-1"><img src="../assets/img/cars/highlander-view-5.svg" alt="image-5" />
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:pr-10">
                        <div className="text-right leading-4">
                            <p className="text-sm lg:text-base">$15,000 - $30,500</p>
                            <small className="text-xs ">$1000 deposit paid</small>
                        </div>
                        <div className=" hidden md:hidden lg:block relative bottom-2 left-5">
                            <div className="cursor-pointer relative top-2"><img src="../assets/img/vectors/Polygon-dropdown.svg"
                                    alt="dropdown" />
                            </div>
                            <div className="cursor-pointer absolute   top-0 left-6"><span>x</span></div>
                        </div>
                    </div>
                </div>

            </section>
            <main className="main  absolute top-20   ">
                <div className="flex justify-center">
                    {/* <!-- w-10/12 --> */}
                    <div className="mx-auto flex-wrap lg:flex-nowrap flex page-holder ">
                        {/* <!-- deposit details here --> */}
                        <aside className="sidebar  px-4 md:px-2 lg:pl-24 lg:pr-9 pt-9 pb-4">
                            <p className="primary-color text-sm font-bold mb-3">Transaction details</p>
                            <div
                                className="car-holder grid grid-cols-6 lg:grid-cols-1 items-center  gap-6 md:gap-3 lg:gap-1  py-2.5">
                                <span className="col-span-3 inline-block overflow-hidden rounded-md">
                                    <img className="w-full" src="./../assets/img/cars/benz.png" alt="" />
                                </span>
                                <div className="col-span-3">
                                    <p className="md:text-xs  lg:mt-3 primary-black font-medium font-10 uppercase">
                                        2015 MERCEDES-BENZ glk 30
                                    </p>
                                    <p className="primary-black font-medium py-1 font-11 uppercase">
                                        2,124 mi
                                    </p>
                                    <p className="primary-black font-medium font-11 uppercase">
                                        vin: SJTKPOLVAX123
                                    </p>
                                </div>
                            </div>

                            <table className="min-w-full ">
                                <tbody>
                                    <tr className="detail-row mb-2">
                                        <td className="sec-black font-10 font-semibold py-1.5">Trucking</td>
                                        <td className="font-10 primary-black font-normal py-1.5">$300</td>
                                    </tr>

                                    <tr className="detail-row mb-2">
                                        <td className="sec-black font-10 font-semibold py-1.5">Shipping</td>
                                        <td className="font-10 primary-black font-normal py-1.5">$950</td>
                                    </tr>

                                    <tr className="detail-row mb-2">
                                        <td className="sec-black font-10 font-semibold py-1.5">Clearing</td>
                                        <td className="font-10 primary-black font-normal py-1.5">$N2,000,000</td>
                                    </tr>

                                    <tr className="detail-row mb-2">
                                        <td className="sec-black font-10 font-semibold py-1.5">Service Fee</td>
                                        <td className="font-10 primary-black font-normal py-1.5">$400</td>
                                    </tr>

                                    <tr className="detail-row mb-2 ">
                                        <td className="total-border sec-black font-10 font-semibold py-1.5 ">Total</td>
                                        <td className="total-border font-10 primary-black font-normal py-1.5 ">
                                            N46,000,000</td>
                                    </tr>

                                    <tr className="detail-row mb-2">
                                        <td className="sec-black font-10 font-semibold py-1.5">Deposit</td>
                                        <td className="font-10 primary-black font-normal py-1.5">$1,000</td>
                                    </tr>

                                </tbody>
                            </table>
                        </aside>

                        <section className="main-section px-3   md:ml-5 lg:mx-12 lg:px-8  ">
                            <div className="lg:flex lg:justify-between">
                                <div className="Tracker-holder pb-20 ">
                                    <p className="font-semibold text-sm py-5 px-2">Bid Tracker</p>
                                    <table>
                                        <tbody className="flex items-center jus mb-2 mt-0">
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
                                                <td className=" pl-4 mb-3 leading-4 w-44 md:w-72">
                                                    <small>You placed a bid for Mercedes Benz GLK.</small>
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

                                        </tbody>





                                    </table>

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
                                <div className="doc-holder">
                                    <p className="font-semibold text-sm py-5 px-2">Vehicle Documents</p>
                                    <div className="pb-10">
                                        <div
                                            className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4">
                                            <div className="flex items-center">
                                                <div className="mr-4"><img src="../assets/img/vectors/file-icon.svg"
                                                        alt="file-icon" />
                                                </div>
                                                <div className="leading-3">
                                                    <p className="text-xs">Legal Contract</p>
                                                    <small className="text-xs">105 kb</small>
                                                </div>
                                            </div>
                                            <div className="cursor-pointer"><img src="../assets/img/vectors/download-icon.svg"
                                                    alt="download-icon" /></div>
                                        </div>
                                        <div
                                            className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4 mt-3">
                                            <div className="flex items-center">
                                                <div className="mr-4"><img src="../assets/img/vectors/file-icon.svg"
                                                        alt="file-icon" />
                                                </div>
                                                <div className="leading-3">
                                                    <p className="text-xs">Legal Contract</p>
                                                    <small className="text-xs">105 kb</small>
                                                </div>
                                            </div>
                                            <div className="cursor-pointer"><img src="../assets/img/vectors/download-icon.svg"
                                                    alt="download-icon" /></div>
                                        </div>
                                        <div
                                            className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4 mt-3">
                                            <div className="flex items-center">
                                                <div className="mr-4"><img src="../assets/img/vectors/file-icon.svg"
                                                        alt="file-icon" />
                                                </div>
                                                <div className="leading-3">
                                                    <p className="text-xs">Legal Contract</p>
                                                    <small className="text-xs">105 kb</small>
                                                </div>
                                            </div>
                                            <div className="cursor-pointer"><img src="../assets/img/vectors/download-icon.svg"
                                                    alt="download-icon" /></div>
                                        </div>
                                        <div
                                            className="download-file w-full md:w-72 flex justify-between items-center bg-white px-5 py-4 mt-3">
                                            <div className="flex items-center">
                                                <div className="mr-4"><img src="../assets/img/vectors/file-icon.svg"
                                                        alt="file-icon" />
                                                </div>
                                                <div className="leading-3">
                                                    <p className="text-xs">Legal Contract</p>
                                                    <small className="text-xs">105 kb</small>
                                                </div>
                                            </div>
                                            <div className="cursor-pointer"><img src="../assets/img/vectors/download-icon.svg"
                                                    alt="download-icon" /></div>
                                        </div>
                                        <div className="upload-file w-full md:w-72 px-6 py-10 text-center mt-4 leading-4 relative">
                                            <div className="flex  items-center justify-center pt-5">
                                                <div className="absolute  bottom-20 cursor-pointer mb-5 "><img
                                                        src="../assets/img/vectors/upload-icon.svg" alt="upload-icon" />
                                                </div>
                                                <div className="w-52 text-center ">
                                                    <p className="text-sm">Upload a document</p>
                                                    <small className="text-xs">Drag a document here to upload or click to browse
                                                        your files</small>
                                                </div>

                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default FtStatusPage;