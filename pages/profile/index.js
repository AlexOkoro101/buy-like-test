import { useState } from "react";
import Meta from "../../src/components/Head/Meta";

const Profile = () => {
    // Initial Tab state
    const [profileTab, setprofileTab] = useState(true)
    const [paymentsTab, setpaymentsTab] = useState(false)
    const [passwordTab, setpasswordTab] = useState(false)

    const [showModal, setshowModal] = useState(false)


    //active tab
    const activateProfile = () => {
        setprofileTab(true)
        setpaymentsTab(false)
        setpasswordTab(false)
    }
    const activatePayment = () => {
        setpaymentsTab(true)
        setprofileTab(false)
        setpasswordTab(false)
    }
    const activatePassword = () => {
        setpasswordTab(true)
        setpaymentsTab(false)
        setprofileTab(false)
    }

    const openModal = () => {
        setshowModal(true)
    }


    return ( 
        <div>
            <Meta />
            <main>
                <div className="flex main pt-20 pb-32">
                    <div
                        className="mx-auto overflow-hidden lg:border md:shadow-md md:rounded-md md:flex  lg:mt-5 container-main bg-white">
                        {/* <!-- sidebar --> */}
                        <aside className="hidden md:grid  profile-sidebar lg:grid auto-rows-min justify-items-center">
                            <span className="inline-block relative mt-20">
                                <img className="h-28" src="./../assets/img/vectors/user.svg" alt="" />
                                <i className="bg-blue-500 fill-current text-white p-1 rounded-full h-6 absolute top-1 right-2 fa fa-pencil"
                                    aria-hidden="true"></i>
                            </span>

                            <div id="side" className="w-full mt-8">
                                <button onClick={activateProfile} className={"head w-full py-3.5 pl-10 flex items-center " + (profileTab ? "changeStyle" : "")}>
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <span className="ml-1.5 text-sm font-medium">Profile</span>
                                </button>
                                <button onClick={activatePayment} className={"head w-full py-3.5 pl-10 flex items-center " + (paymentsTab ? "changeStyle" : "")}>
                                    <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                                    <span className="ml-1.5 text-sm font-medium">Payments</span>
                                </button>
                                <button onClick={activatePassword} className={"head w-full py-3.5 pl-10 flex items-center " + (passwordTab ? "changeStyle" : "")}>
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                    <span className="ml-1.5 text-sm font-medium">Password</span>
                                </button>
                            </div>
                        </aside>
                        {/* <!-- end sidebar --> */}

                        <section>
                            <div className="lg:py-10 mx-auto">
                                <div className="border-b border-gray-200 lg:border-0">
                                    {/* <!-- <h2 className="py-5 lg:text-2xl">Profile</h2> --> */}
                                </div>
                                {/* <!-- user profile details --> */}
                                {
                                    profileTab && (

                                    <div id="profile" className="meg px-5 md:px-20 lg:px-32">
                                        <form className="px-5">
                                            <div className="flex flex-col items-center md:grid md:grid-cols-6 gap-6 font-10">
                                                <h2 className="py-1 lg:px-0 text-xl col-span-6 w-full ">
                                                    Profile
                                                </h2>
                                                <div className="py-7 col-span-6 md:hidden">
                                                    <span className="inline-block relative">
                                                        <img className="h-28" src="./../assets/img/vectors/user.svg" alt="" />
                                                        <i className="bg-blue-500 fill-current text-white p-1 rounded-full h-6 absolute top-1 right-2 fa fa-pencil"
                                                            aria-hidden="true"></i>
                                                    </span>
                                                    <button
                                                        className="block p-4 bg-blue-50 border border-dashed border-blue-400 text-blue-500 mt-3">
                                                        Edit Profile Image
                                                    </button>
                                                </div>
                                                <span className="border-b-4 border-gray-100 w-full md:hidden"></span>
                                                <div className="col-span-3 w-full">
                                                    <label htmlFor="first_name" className="block font-10 font-medium pb-1 sec-black">First
                                                        name</label>
                                                    <input type="text" id="first_name" placeholder="Enter your first name"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none" />
                                                </div>

                                                <div className="col-span-3 w-full">
                                                    <label htmlFor="last_name" className="block font-10 font-medium pb-1 sec-black">Last
                                                        name</label>
                                                    <input type="text" id="last_name" placeholder="Enter your last name"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none" />
                                                </div>
                                                <div className="col-span-3 w-full">
                                                    <label htmlFor="phone" className="block font-10 font-medium pb-1 sec-black">Phone
                                                        Number</label>
                                                    <input type="tel" id="phone" placeholder="Enter your phone number"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none" />
                                                </div>
                                                <div className="col-span-3 w-full">
                                                    <label htmlFor="phone" className="block font-10 font-medium pb-1 sec-black">Email
                                                        Address</label>
                                                    <input type="email" id="email" placeholder="Enter your email address"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none" />
                                                </div>

                                                <span className="border-b-4 border-gray-100 w-full md:hidden"></span>

                                                <div className="col-span-3 w-full">
                                                    <label htmlFor="country"
                                                        className="block font-10 font-medium pb-1 sec-black">Country</label>
                                                    <select id="country"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none">
                                                        <option>Select Country</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6 w-full">
                                                    <label htmlFor="address_one"
                                                        className="block font-10 font-medium pb-1 sec-black">Address Line 1</label>
                                                    <input type="text" id="address_one"
                                                        className="mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none" />
                                                </div>

                                                <div className="col-span-6 w-full">
                                                    <label htmlFor="address_two"
                                                        className="block font-10 font-medium pb-1 sec-black">Address Line 2</label>
                                                    <input type="text" id="address_two"
                                                        className="mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none" />
                                                </div>

                                                <div className="col-span-2 w-full ">
                                                    <label htmlFor="city" className="block font-10 font-medium pb-1 sec-black">City</label>
                                                    <input type="text" id="city" placeholder="Enter city"
                                                        className="mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none" />
                                                </div>

                                                <div className="col-span-2 w-full ">
                                                    <label htmlFor="province" className="block font-10 font-medium pb-1 sec-black">State /
                                                        Province</label>
                                                    <select id="province"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white focus:outline-none">
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-2 w-full ">
                                                    <label htmlFor="postal_code" className="block font-10 font-medium pb-1 sec-black">ZIP /
                                                        Postal</label>
                                                    <input type="text" id="postal_code" placeholder="Enter Zipcode"
                                                        className="mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none" />
                                                </div>
                                            </div>

                                            <div className="flex justify-center mt-6 mb-16">
                                                <button type="button"
                                                    className="uppercase focus:outline-none primary-btn text-white font-10 font-medium mt-4 py-1.5 px-4">
                                                    save
                                                </button>
                                                <button type="button"
                                                    className="uppercase focus:outline-none primary-red font-10 font-medium mt-4 py-1.5 px-4">
                                                    cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    )
                                }
                                {/* <!-- end of user profile details --> */}

                                {/* <!-- payment settings --> */}
                                {
                                    paymentsTab && (

                                    <div id="payment" className="meg pb-64 px-0 md:px-16 lg:px-24">
                                        <h2 className="py-1 lg:px-0 text-xl col-span-6 w-full  primary-black ">
                                            Payment Settings
                                        </h2>
                                        <div className="profile-holder mt-4 py-3.5 px-10">
                                            <p className="mb-5 text-sm primary-black pt-1">Saved Cards</p>

                                            {/* <!-- Cards here --> */}
                                            <div className="flex flex-wrap">
                                                <div className="text-xs mr-3 md:mr-6 mb-4">
                                                    <div className="card-holder p-3.5 mb-2 grid place-content-between">
                                                        <p className="mb-10 primary-black">**** **** **** 1234</p>
                                                        <p className="font-10 primary-black">My online shopping card</p>
                                                    </div>
                                                    <p className="text-center">
                                                        <a className="font-11 primary-blue" href="#">Edit card details</a>
                                                    </p>
                                                </div>

                                                <div className="text-xs mr-3 md:mr-6 mb-4">
                                                    <div className="card-holder p-3.5 mb-2 grid place-content-between">
                                                        <p className="mb-10 primary-black">**** **** **** 1234</p>
                                                        <p className="font-10 primary-black">Alternate shopping card</p>
                                                    </div>
                                                    <p className="text-center">
                                                        <a className="font-11 primary-blue" href="#">Edit card details</a>
                                                    </p>
                                                </div>
                                                <div id="myBtn" onClick={openModal}
                                                    className="text-xs cursor-pointer mr-3 md:mr-6 mb-4">
                                                    <div className="add-new-card p-3.5 mb-3 grid place-content-center">
                                                        <p className="mb-3 text-blue-600 text-5xl text-center">+</p>
                                                        <p className="text-blue-600">Add a new card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                                {/* <!-- end of payment settigs --> */}

                                {/* <!-- password settings --> */}
                                {
                                    passwordTab && (

                                    <div id="password" className="meg">
                                        <form action="" className="px-32 pb-64">
                                            <div className="flex flex-col items-center md:grid md:grid-cols-6 gap-5 font-11 w-1/2">
                                                <h2 className="py-1 lg:px-0 text-xl col-span-6 w-full  primary-black ">
                                                    Password Settings
                                                </h2>
                                                <div className="col-span-6">
                                                    <label className="block pb-1 font-10 font-medium sec-black" htmlFor="password">
                                                        Enter current password
                                                    </label>
                                                    <input id="password" className="px-3 profile-control focus:outline-none w-full"
                                                        type="password" placeholder="*******" />
                                                </div>

                                                <div className="col-span-6">
                                                    <label className="block pb-1 font-10 font-medium sec-black " htmlFor="newPassword">
                                                        Enter new password
                                                    </label>
                                                    <input id="newPassword" className="px-3 profile-control focus:outline-none w-full"
                                                        type="password" placeholder="*******" />
                                                </div>

                                                <div className="col-span-6">
                                                    <label className="block pb-1 font-10 font-medium sec-black " htmlFor="confirm">
                                                        Confirm new password
                                                    </label>
                                                    <input id="confirm" className="px-3 profile-control focus:outline-none w-full"
                                                        type="password" placeholder="*******" />
                                                </div>

                                                <div className="col-span-6 place-self-center mt-3">
                                                    <button
                                                        className="primary-btn text-white font-10 font-semibold focus:outline-none px-4 py-1.5">
                                                        SAVE PASSWORD
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    )
                                }
                                {/* <!-- end of password settings --> */}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* <!-- The Modal --> */}
            {
                showModal && (

                <div id="myModal" className="modal">
                    {/* <!-- Modal content --> */}
                    <div className="modal-content relative w-10/12 lg:w-1/3 mx-auto mx-8 md:px-0 md:mt-28 md:px-20 md:py-10">
                        <span onClick={() => {setshowModal(false)}} className="close absolute right-5 top-1 text-4xl text-gray-500">&times;</span>
                        {/* <!-- <i className="absolute right-0 fa fa-times" aria-hidden="true"></i> --> */}
                        <form action="" className="font-11 grid grid-cols-6 gap-2 mx-6 py-10 md:mx-0 md:py-0">
                            <div className="col-span-6 mb-2">
                                <label className="block pb-1.5 font-10 primary-black" htmlFor="card_number"> Card Number </label>
                                <input id="card_number" className="profile-control focus:outline-none p-2 w-full" type="text"
                                    placeholder="Enter your 12 or 16 digit card number" />
                            </div>
                            <div className="col-span-6  ">

                            </div>

                            <div className="col-span-2">
                                <select className="bg-white profile-control focus:outline-none p-2 col-span-2 w-full" name="" id="">
                                    <option value="">Month</option>
                                </select>
                            </div>

                            <div className="col-span-2">
                                <select className="bg-white profile-control focus:outline-none p-2 col-span-2 w-full">
                                    <option value="">Year</option>
                                </select>
                            </div>

                            <div className="col-span-2">
                                <input type="text" placeholder="CVV" autocomplete="postal-code"
                                    className="bg-white focus:outline-none profile-control p-2 col-span-2 w-full" />
                            </div>
                            <div className="col-span-6 mt-2">
                                <label className="block font-10 primary-black pb-1.5" htmlFor="cardName"> Card Name </label>
                                <input className="profile-control focus:outline-none p-2 w-full" type="text"
                                    placeholder="Add a name to help you identify this card" />
                            </div>
                            <div className="col-span-6 place-self-center mt-4">
                                <button type="button"
                                    className="focus:outline-none primary-btn font-10 font-semibold text-white py-1.5 px-8">ADD
                                    CARD</button>
                            </div>
                        </form>
                    </div>
                </div>
                )
            }
            {/* <!-- end of modal --> */}
        </div>    
     );
}
 
export default Profile;