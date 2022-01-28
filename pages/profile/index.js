import { useEffect } from "react";
import { useState } from "react";
import { enviroment } from "../../src/components/enviroment";
import Meta from "../../src/components/Head/Meta";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  //Notifiers
  const passwordChanged = () =>
    toast.success("Password Updated!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const pictureChanged = () =>
    toast.success("Photo Updated!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [isLoading, setisLoading] = useState(false);

  // Initial Tab state
  const [profileTab, setprofileTab] = useState(true);
  const [paymentsTab, setpaymentsTab] = useState(false);
  const [passwordTab, setpasswordTab] = useState(false);

  const [showModal, setshowModal] = useState(false);

  const [userToken, setuserToken] = useState(null);
  const [user, setuser] = useState(null);
  const [userID, setuserID] = useState(null);
  const [stripeId, setstripeId] = useState(null);
  const [userCards, setuserCards] = useState(null);

  //Forms
  const [newCardNumber, setnewCardNumber] = useState("");
  const [newCardMonth, setnewCardMonth] = useState(1);
  const [newCardYear, setnewCardYear] = useState(2022);
  const [newCardCVC, setnewCardCVC] = useState("");
  const [newCardName, setnewCardName] = useState("");
  const [newCardCity, setnewCardCity] = useState("");
  const [newCardCountry, setnewCardCountry] = useState("");
  const [newCardAddress, setnewCardAddress] = useState("");
  const [newCardZip, setnewCardZip] = useState("");
  const [newCardEmail, setnewCardEmail] = useState("");
  const [newCardPhone, setnewCardPhone] = useState("");

  //Password update
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  //Picture
  const [changeDPModal, setchangeDPModal] = useState(false)
  const [profilePicture, setprofilePicture] = useState(null);

  useEffect(() => {
    getUserID();
    return () => {
      getUserID();
    };
  }, [showModal, changeDPModal]);

  const getUserID = () => {
    const user = localStorage.getItem("user");
    if (user) {
      const item = JSON.parse(user);
      fetchUserData(item);
      setuserID(item?.userId)
      setuserToken(item.userToken);
      if (item?.stripeId) {
        setstripeId(item?.stripeId);

        getUserCards(item?.stripeId);
      }
    }
  };

  const fetchUserData = (user) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      enviroment.BASE_URL + "auth/user/users/admin/" + user.userId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.error == false) {
          setuser(result.data);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getUserCards = (id) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(enviroment.BASE_URL + "stripe/get-allcard/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.error == false) {
          setuserCards(result.data.data);
        }
      })
      .catch((error) => console.log("error", error));
  };

  //active tab
  const activateProfile = () => {
    setprofileTab(true);
    setpaymentsTab(false);
    setpasswordTab(false);
  };
  const activatePayment = () => {
    setpaymentsTab(true);
    setprofileTab(false);
    setpasswordTab(false);
  };
  const activatePassword = () => {
    setpasswordTab(true);
    setpaymentsTab(false);
    setprofileTab(false);
  };

  const openModal = () => {
    setshowModal(true);
  };

  const generateToken = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      number: newCardNumber,
      exp_month: newCardMonth,
      exp_year: newCardYear,
      cvc: newCardCVC,
      name: newCardName,
      address_city: newCardCity,
      address_country: newCardCountry,
      address_line1: newCardAddress,
      address_zip: newCardZip,
      ifsave: false,
      email: newCardEmail,
      phone: newCardPhone,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(enviroment.BASE_URL + "stripe/create-token", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.error == false) {
          addCustomerCard(result.data.id);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const addCustomerCard = (id) => {
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      token: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      enviroment.BASE_URL + "stripe/add-user-card/" + stripeId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setisLoading(false);
        console.log(result);
        setshowModal(false);
      })
      .catch((error) => console.log("error", error));
  };

  const updatePassword = () => {
    setisLoading(true);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userToken}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmPassword,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      enviroment.BASE_URL + "auth/user/settings/changepassword",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setisLoading(false);

        if (result.error == false) {
          setoldPassword("");
          setnewPassword("");
          passwordChanged();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getDP = () => {
    setchangeDPModal(true)
  };

  const changeDP = () => {
    setisLoading(true)

    const formData = new FormData();
    formData.append("user", userID);
    formData.append("file", profilePicture);

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      mode: 'no-cors',
      body: formData
    };
    
    fetch(enviroment.BASE_URL + "auth/user/upload", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        setisLoading(false)
        setchangeDPModal(false)
        pictureChanged()
      })
      .catch(error => console.log('error', error));
  };

  

  return (
    <div>
      <ToastContainer />
      <Meta />
      <main>
        <div className="flex main pt-20 pb-32">
          <div className="mx-auto overflow-hidden lg:border md:shadow-md md:rounded-md md:flex  lg:mt-5 container-main bg-white">
            {/* <!-- sidebar --> */}
            <aside className="hidden md:grid  profile-sidebar lg:grid auto-rows-min justify-items-center">
              <span
                className="inline-block w-32 h-32 relative mt-20 cursor-pointer"
                onClick={getDP}
              >
                <img
                  className="w-full h-full"
                  src={user?.image ? user?.image : "./../assets/img/vectors/user.svg"}
                  alt=""
                />
                <i
                  className="bg-blue-500 fill-current text-white p-1 rounded-full h-6 absolute top-1 right-2 fa fa-pencil"
                  aria-hidden="true"
                ></i>
              </span>

              <div id="side" className="w-full mt-8">
                <button
                  onClick={activateProfile}
                  className={
                    "head w-full py-3.5 pl-10 flex items-center " +
                    (profileTab ? "changeStyle" : "")
                  }
                >
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span className="ml-1.5 text-sm font-medium">Profile</span>
                </button>
                <button
                  onClick={activatePayment}
                  className={
                    "head w-full py-3.5 pl-10 flex items-center " +
                    (paymentsTab ? "changeStyle" : "")
                  }
                >
                  <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                  <span className="ml-1.5 text-sm font-medium">Payments</span>
                </button>
                <button
                  onClick={activatePassword}
                  className={
                    "head w-full py-3.5 pl-10 flex items-center " +
                    (passwordTab ? "changeStyle" : "")
                  }
                >
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
                {profileTab && (
                  <div id="profile" className="meg px-5 md:px-20 lg:px-32">
                    <form className="px-5">
                      <div className="flex flex-col items-center md:grid md:grid-cols-6 gap-6 font-10">
                        <h2 className="py-1 lg:px-0 text-xl col-span-6 w-full ">
                          Profile
                        </h2>
                        <div className="py-7 col-span-6 md:hidden">
                          <span className="inline-block relative">
                            <img
                              className="h-28"
                              src="./../assets/img/vectors/user.svg"
                              alt=""
                            />
                            <i
                              className="bg-blue-500 fill-current text-white p-1 rounded-full h-6 absolute top-1 right-2 fa fa-pencil"
                              aria-hidden="true"
                            ></i>
                          </span>
                          {/* <button
                                                        className="block p-4 bg-blue-50 border border-dashed border-blue-400 text-blue-500 mt-3">
                                                        Edit Profile Image
                                                    </button> */}
                        </div>
                        <span className="border-b-4 border-gray-100 w-full md:hidden"></span>
                        <div className="col-span-3 w-full">
                          <label
                            htmlFor="first_name"
                            className="block font-10 font-medium pb-1 sec-black"
                          >
                            First name
                          </label>
                          <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                            {user?.profile?.userName || "N/A"}
                          </div>
                          {/* <input type="text" id="first_name" placeholder="Enter your first name"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none" /> */}
                        </div>

                        <div className="col-span-3 w-full">
                          <label
                            htmlFor="last_name"
                            className="block font-10 font-medium pb-1 sec-black"
                          >
                            Last name
                          </label>
                          <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                            {user?.profile?.userName || "N/A"}
                          </div>
                          {/* <input type="text" id="last_name" placeholder="Enter your last name"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none" /> */}
                        </div>
                        <div className="col-span-3 w-full">
                          <label
                            htmlFor="phone"
                            className="block font-10 font-medium pb-1 sec-black"
                          >
                            Phone Number
                          </label>
                          <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                            {user?.profile?.phoneNumber || "N/A"}
                          </div>
                          {/* <input type="tel" id="phone" placeholder="Enter your phone number"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none" /> */}
                        </div>
                        <div className="col-span-3 w-full">
                          <label
                            htmlFor="phone"
                            className="block font-10 font-medium pb-1 sec-black"
                          >
                            Email Address
                          </label>
                          <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                            {user?.email || "N/A"}
                          </div>
                          {/* <input type="email" id="email" placeholder="Enter your email address"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none" /> */}
                        </div>

                        <span className="border-b-4 border-gray-100 w-full md:hidden"></span>

                        <div className="col-span-3 w-full">
                          <label
                            htmlFor="country"
                            className="block font-10 font-medium pb-1 sec-black"
                          >
                            Country
                          </label>
                          <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                            {user?.profile?.country || "N/A"}
                          </div>
                          {/* <select id="country"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none">
                                                        <option>Select Country</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select> */}
                        </div>

                        <div className="col-span-6 w-full">
                          <label
                            htmlFor="address_one"
                            className="block font-10 font-medium pb-1 sec-black"
                          >
                            Address Line
                          </label>
                          <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                            {user?.profile?.address || "N/A"}
                          </div>
                          {/* <input type="text" id="address_one"
                                                        className="mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none" /> */}
                        </div>

                        {/* <div className="col-span-6 w-full">
                                                    <label htmlFor="address_two"
                                                        className="block font-10 font-medium pb-1 sec-black">Address Line 2</label>
                                                    <input type="text" id="address_two"
                                                        className="mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none" />
                                                </div> */}

                        <div className="col-span-2 w-full ">
                          <label
                            htmlFor="city"
                            className="block font-10 font-medium pb-1 sec-black"
                          >
                            City
                          </label>
                          <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                            {user?.profile?.city || "N/A"}
                          </div>
                          {/* <input type="text" id="city" placeholder="Enter city"
                                                        className="mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none" /> */}
                        </div>

                        <div className="col-span-2 w-full ">
                          <label
                            htmlFor="province"
                            className="block font-10 font-medium pb-1 sec-black"
                          >
                            State / Province
                          </label>
                          <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                            {user?.profile?.state || "N/A"}
                          </div>
                          {/* <select id="province"
                                                        className="mt-1 block w-full py-2 px-3 profile-control bg-white focus:outline-none">
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select> */}
                        </div>

                        <div className="col-span-2 w-full ">
                          <label
                            htmlFor="postal_code"
                            className="block font-10 font-medium pb-1 sec-black"
                          >
                            ZIP / Postal
                          </label>
                          <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                            {user?.profile?.zip || "N/A"}
                          </div>
                          {/* <input type="text" id="postal_code" placeholder="Enter Zipcode"
                                                        className="mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none" /> */}
                        </div>
                      </div>

                      <div className="flex justify-center mt-6 mb-16">
                        {/* <button type="button"
                                                    className="uppercase focus:outline-none primary-btn text-white font-10 font-medium mt-4 py-1.5 px-4">
                                                    save
                                                </button> */}
                        <button
                          type="button"
                          className="uppercase focus:outline-none primary-red font-10 font-medium mt-4 py-1.5 px-4"
                        >
                          Update Profile
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                {/* <!-- end of user profile details --> */}

                {/* <!-- payment settings --> */}
                {paymentsTab && (
                  <div
                    id="payment"
                    className="meg pb-64 px-0 md:px-16 lg:px-24"
                  >
                    <h2 className="py-1 lg:px-0 text-xl col-span-6 w-full  primary-black ">
                      Payment Settings
                    </h2>
                    {userCards && userCards?.length ? (
                      <div className="profile-holder mt-4 py-3.5 px-10">
                        <p className="mb-5 text-sm primary-black pt-1">
                          Saved Cards
                        </p>

                        {/* <!-- Cards here --> */}
                        {userCards?.map((stripeCard, index) => (
                          <div className="flex flex-wrap" key={index}>
                            <div className="text-xs mr-3 md:mr-6 mb-4">
                              <div className="card-holder p-3.5 mb-2 grid place-content-between">
                                <p className="mb-10 primary-black">
                                  **** **** **** {stripeCard.last4}
                                </p>
                                <p className="font-10 primary-black">
                                  My online shopping card
                                </p>
                              </div>
                              <p className="text-center">
                                <a className="font-11 primary-blue" href="#">
                                  Edit card details
                                </a>
                              </p>
                            </div>
                          </div>
                        ))}
                        <div
                          id="myBtn"
                          onClick={openModal}
                          className="text-xs cursor-pointer mr-3 md:mr-6 mb-4"
                        >
                          <div className="add-new-card p-3.5 mb-3 grid place-content-center">
                            <p className="mb-3 text-blue-600 text-5xl text-center">
                              +
                            </p>
                            <p className="text-blue-600">Add a new card</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="mb-5 text-sm primary-black pt-1">
                          No Saved Cards
                        </p>
                        <div
                          id="myBtn"
                          onClick={openModal}
                          className="text-xs cursor-pointer mr-3 md:mr-6 mb-4"
                        >
                          <div className="add-new-card p-3.5 mb-3 grid place-content-center">
                            <p className="mb-3 text-blue-600 text-5xl text-center">
                              +
                            </p>
                            <p className="text-blue-600">Add a new card</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {/* <!-- end of payment settigs --> */}

                {/* <!-- password settings --> */}
                {passwordTab && (
                  <div id="password" className="meg">
                    <form className="px-32 pb-64">
                      <div className="flex flex-col items-center md:grid md:grid-cols-6 gap-5 font-11 w-1/2">
                        <h2 className="py-1 lg:px-0 text-xl col-span-6 w-full  primary-black ">
                          Password Settings
                        </h2>
                        <div className="col-span-6">
                          <label
                            className="block pb-1 font-10 font-medium sec-black"
                            htmlFor="password"
                          >
                            Enter current password
                          </label>
                          <input
                            id="password"
                            value={oldPassword}
                            onChange={(e) => setoldPassword(e.target.value)}
                            className="px-3 profile-control focus:outline-none w-full"
                            type="password"
                            placeholder="*******"
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            className="block pb-1 font-10 font-medium sec-black "
                            htmlFor="newPassword"
                          >
                            Enter new password
                          </label>
                          <input
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setnewPassword(e.target.value)}
                            className="px-3 profile-control focus:outline-none w-full"
                            type="password"
                            placeholder="*******"
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            className="block pb-1 font-10 font-medium sec-black "
                            htmlFor="confirm"
                          >
                            Confirm new password
                          </label>
                          <input
                            id="confirm"
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
                            className="px-3 profile-control focus:outline-none w-full"
                            type="password"
                            placeholder="*******"
                          />
                        </div>

                        <div className="col-span-6 place-self-center mt-3">
                          <button
                            type="button"
                            onClick={updatePassword}
                            className="primary-btn text-white font-10 font-semibold focus:outline-none px-4 py-1.5"
                          >
                            {isLoading ? (
                              <ClipLoader color="#fff" size={20} loading />
                            ) : (
                              "SAVE PASSWORD"
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                {/* <!-- end of password settings --> */}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* <!-- The Modal --> */}
      {showModal && (
        <div id="myModal" className="modal">
          {/* <!-- Modal content --> */}
          <div className="modal-content bg-white relative w-10/12 lg:w-1/3 mx-auto mx-8 md:px-0 md:mt-28 md:px-20 md:py-10">
            <span
              onClick={() => {
                setshowModal(false);
              }}
              className="close absolute right-5 top-1 text-4xl text-gray-500"
            >
              &times;
            </span>
            {/* <!-- <i className="absolute right-0 fa fa-times" aria-hidden="true"></i> --> */}
            <form className="font-11 grid grid-cols-6 gap-2 mx-6 py-10 md:mx-0 md:py-0">
              <div className="col-span-6 mb-2">
                <label
                  className="block pb-1.5 font-10 primary-black"
                  htmlFor="card_number"
                >
                  {" "}
                  Card Number{" "}
                </label>
                <input
                  value={newCardNumber}
                  onChange={(e) => setnewCardNumber(e.target.value)}
                  id="card_number"
                  className="profile-control focus:outline-none p-2 w-full"
                  type="text"
                  placeholder="Enter your 12 or 16 digit card number"
                />
              </div>
              <div className="col-span-6  "></div>

              <div className="col-span-2">
                <select
                  value={newCardMonth}
                  onChange={(e) => setnewCardMonth(e.target.value)}
                  className="bg-white profile-control focus:outline-none p-2 col-span-2 w-full"
                  name=""
                  id=""
                >
                  <option value={1}>01</option>
                  <option value={2}>02</option>
                  <option value={3}>03</option>
                  <option value={4}>04</option>
                  <option value={5}>05</option>
                  <option value={6}>06</option>
                  <option value={7}>07</option>
                  <option value={8}>08</option>
                  <option value={9}>09</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </select>
              </div>

              <div className="col-span-2">
                <select
                  value={newCardYear}
                  onChange={(e) => setnewCardYear(e.target.value)}
                  className="bg-white profile-control focus:outline-none p-2 col-span-2 w-full"
                >
                  <option value={2022}>2022</option>
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                  <option value={2026}>2026</option>
                  <option value={2027}>2027</option>
                  <option value={2028}>2028</option>
                  <option value={2029}>2029</option>
                  <option value={2030}>2030</option>
                  <option value={2031}>2031</option>
                  <option value={2032}>2032</option>
                </select>
              </div>

              <div className="col-span-2">
                <input
                  value={newCardCVC}
                  onChange={(e) => setnewCardCVC(e.target.value)}
                  type="text"
                  placeholder="CVV"
                  autocomplete="postal-code"
                  className="bg-white focus:outline-none profile-control p-2 col-span-2 w-full"
                />
              </div>
              <div className="col-span-6 mt-2">
                <label
                  className="block font-10 primary-black pb-1.5"
                  htmlFor="cardName"
                >
                  {" "}
                  Card Name{" "}
                </label>
                <input
                  value={newCardName}
                  onChange={(e) => setnewCardName(e.target.value)}
                  className="profile-control focus:outline-none p-2 w-full"
                  type="text"
                  placeholder="Add a name to help you identify this card"
                />
              </div>
              <div className="col-span-6 mt-2">
                <label
                  className="block font-10 primary-black pb-1.5"
                  htmlFor="cardName"
                >
                  {" "}
                  Billing Country{" "}
                </label>
                <input
                  value={newCardCountry}
                  onChange={(e) => setnewCardCountry(e.target.value)}
                  className="profile-control focus:outline-none p-2 w-full"
                  type="text"
                />
              </div>

              <div className="col-span-3 mt-2">
                <label
                  className="block font-10 primary-black pb-1.5"
                  htmlFor="cardName"
                >
                  {" "}
                  Billing City{" "}
                </label>
                <input
                  value={newCardCity}
                  onChange={(e) => setnewCardCity(e.target.value)}
                  className="profile-control focus:outline-none p-2 w-full"
                  type="text"
                />
              </div>

              <div className="col-span-3 mt-2">
                <label
                  className="block font-10 primary-black pb-1.5"
                  htmlFor="cardName"
                >
                  {" "}
                  Zip Code{" "}
                </label>
                <input
                  value={newCardZip}
                  onChange={(e) => setnewCardZip(e.target.value)}
                  className="profile-control focus:outline-none p-2 w-full"
                  type="text"
                />
              </div>

              <div className="col-span-3 mt-2">
                <label
                  className="block font-10 primary-black pb-1.5"
                  htmlFor="cardName"
                >
                  {" "}
                  Email{" "}
                </label>
                <input
                  value={newCardEmail}
                  onChange={(e) => setnewCardEmail(e.target.value)}
                  className="profile-control focus:outline-none p-2 w-full"
                  type="text"
                />
              </div>

              <div className="col-span-3 mt-2">
                <label
                  className="block font-10 primary-black pb-1.5"
                  htmlFor="cardName"
                >
                  {" "}
                  Phone Number{" "}
                </label>
                <input
                  value={newCardPhone}
                  onChange={(e) => setnewCardPhone(e.target.value)}
                  className="profile-control focus:outline-none p-2 w-full"
                  type="text"
                />
              </div>
              <div className="col-span-6 place-self-center mt-4">
                <button
                  type="button"
                  onClick={generateToken}
                  className="focus:outline-none primary-btn font-10 font-semibold text-white py-1.5 px-8"
                >
                  {isLoading ? (
                    <ClipLoader color="#fff" size={20} loading />
                  ) : (
                    <> ADD CARD</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* <!-- end of modal --> */}

         {/* <!-- DP Modal --> */}
         {changeDPModal && (
        <div id="myModal" className="modal">
          {/* <!-- Modal content --> */}
          <div className="modal-content bg-white relative w-10/12 lg:w-1/3 mx-auto mx-8 md:px-0 md:mt-28 md:px-20 md:py-10">
            <span
              onClick={() => {
                setchangeDPModal(false);
              }}
              className="close absolute right-5 top-1 text-4xl text-gray-500"
            >
              &times;
            </span>
            {/* <!-- <i className="absolute right-0 fa fa-times" aria-hidden="true"></i> --> */}
            <form className="font-11 grid grid-cols-6 gap-2 mx-6 py-10 md:mx-0 md:py-0">
              <div className="col-span-6 mb-2">
                <label
                  className="block pb-1.5 font-10 primary-black"
                  htmlFor="dp"
                >
                  {" "}
                  Profile Picture{" "}
                </label>
                <input
                  onChange={(e) => console.log(e.target.value)}
                  id="dp"
                  className="focus:outline-none p-2 w-full border border-gray-500 rounded"
                  type="file"
                  onChange={(e) => setprofilePicture(e.target.files[0])}
                />
              </div>
              <div className="col-span-6  "></div>

              
              <div className="col-span-6 place-self-center mt-4">
                <button
                  type="button"
                  onClick={changeDP}
                  className="focus:outline-none primary-btn font-10 font-semibold text-white py-1.5 px-8"
                >
                  {isLoading ? (
                    <ClipLoader color="#fff" size={20} loading />
                  ) : (
                    <>ADD PICTURE</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* <!-- end of DP modal --> */}
    </div>
  );
};

export default Profile;
