import { useRouter } from "next/router";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Select from "react-select";
import { enviroment } from "../../src/components/enviroment";
import { usePaystackPayment } from "react-paystack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import countryList from "react-select-country-list";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import ClipLoader from "react-spinners/ClipLoader";

const useOptions = () => {
  const fontSize = "14px";
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "'Montserrat', sans-serif",
          "::placeholder": {
            color: "#aab7c4",
          },
          border: "1px solid #000",
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const Transaction = () => {
  //Stripe
  const stripe = useStripe();
  const elements = useElements();
  const cardOptions = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer (e.g., payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      stripeTokenHandler(result.token);
    }
  };
  const stripePromise = loadStripe(
    "pk_test_51JyfUzLikhQleFKQmN8UGjaUEHvzU1WZEw3gG5rLmnmYx13atgEOtDYPrS5wUSzfcUSXxG2W4k1QTJAVBuIlOuGb00jUdAZdni"
  );

  //Country List
  const options = useMemo(() => countryList().getData(), []);

  //Route hook
  const router = useRouter();

  //number format
  var dollarFormatter = new Intl.NumberFormat();

  //Notifiers
  const buyNowInfo = () =>
    toast.info("Car already bought by you", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const buyNowSuccess = () =>
    toast.success("Success", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const addAddressSuccess = () =>
    toast.success("New address added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const defaultAddressSuccess = () =>
    toast.success("Default address set", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const editAddressSuccess = () =>
    toast.success("Success", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const deleteAddressSuccess = () =>
    toast.success("Address deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const stripeSuccess = () =>
    toast.success("Payment Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const stripeFailure = () =>
    toast.error("Couldn't process payment", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  //End of Notifiers

  const [token, settoken] = useState("");
  const [userEmail, setuserEmail] = useState(null);
  const [userPhone, setuserPhone] = useState(null);
  const [userAddress, setuserAddress] = useState(null);
  const [userName, setuserName] = useState(null);
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [userId, setuserId] = useState(null);
  const carId = router.query.id;
  const [carDetails, setcarDetails] = useState(null);
  const [sectabActive, setsectabActive] = useState(false);
  const [bidID, setbidID] = useState(null);
  const [bnvehicleID, setbnvehicleID] = useState(null);
  const [bnsvehicleID, setbnsvehicleID] = useState(null);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [phoneError, setphoneError] = useState(null);
  const [email, setemail] = useState("");
  const [street, setstreet] = useState("");
  const phoneNumberRef = useRef(null);
  const newPhoneNumberRef = useRef(null);
  const editedphoneRef = useRef(null);
  const [confimation, setconfimation] = useState(false);
  const [refNumber, setrefNumber] = useState(null);
  const [switchAddress, setswitchAddress] = useState(false);
  const [addressModalContent1, setaddressModalContent1] = useState(true);
  const [addressModalContent2, setaddressModalContent2] = useState(false);
  const [addressModalContent3, setaddressModalContent3] = useState(false);

  //Set Address
  const [country, setcountry] = useState("Nigeria");
  const [city, setcity] = useState("");
  const [countryState, setcountryState] = useState("Lagos");

  //New Address State
  const [newAddressFirstName, setnewAddressFirstName] = useState("");
  const [newAddressLastName, setnewAddressLastName] = useState("");
  const [newAddressPhone, setnewAddressPhone] = useState("");
  const [newAddressEmail, setnewAddressEmail] = useState("");
  const [newAddressCountry, setnewAddressCountry] = useState("");
  const [newAddressState, setnewAddressState] = useState("");
  const [newAddressCity, setnewAddressCity] = useState("");
  const [newAddressStreet, setnewAddressStreet] = useState("");

  const [defaultAddress, setdefaultAddress] = useState(null);
  const [showNotif, setshowNotif] = useState(false);
  const [defaultmodal, setdefaultmodal] = useState(false);
  const [userInitialAddress, setuserInitialAddress] = useState(null);
  const [individualAddress, setindividualAddress] = useState(null);

  const [refreshDOM, setrefreshDOM] = useState(false);
  const [userCountry, setuserCountry] = useState(null);

  //Stripe Details
  const [cvc, setcvc] = useState("");
  const [stripeExpiry, setstripeExpiry] = useState("");
  const [stripeFocus, setstripeFocus] = useState("");
  const [stripeName, setstripeName] = useState("");
  const [stripeNumber, setstripeNumber] = useState("");
  const [billingName, setbillingName] = useState("");
  const [billingPhone, setbillingPhone] = useState("");
  const [billingEmail, setbillingEmail] = useState("");
  const [billingCity, setbillingCity] = useState("");
  const [billingCountry, setbillingCountry] = useState("");
  const [billingAddress, setbillingAddress] = useState("");
  const [billingZip, setbillingZip] = useState("");

  async function stripeTokenHandler(token) {
    const paymentData = {
      source: token,
      email: userEmail,
      amount: carDetails?.bidAmount,
    };
    console.log(token);

    // Use fetch to send the token ID and any other payment data to your server.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const response = await fetch(
      enviroment.BASE_URL + "stripe/charge-stripe/" + token.id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      }
    );

    // Return and display the result of the charge.
    return response.json();
  }

  const retrieveCountry = () => {
    const country = localStorage.getItem("userCountry");
    if (!country) return;

    const item = JSON.parse(country);
    setuserCountry(item.country);
  };

  const referenceNumber = () => {
    return "bld" + Math.floor(Math.random() * 1000000000 + 1);
  };
  const config = {
    reference: referenceNumber(),
    email: `${userEmail}`,
    amount: /*amount * 100*/ 100000,
    publicKey: "pk_live_e0ee86f89440e1bea4b8a6a020bb71e2ecc1f86f",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    setrefNumber(reference.trxref);
    console.log("vehicle ID", bnvehicleID);
    console.log("bid ID", bidID);
    setstate(3);
  };
  useEffect(() => {
    if (refNumber === null) {
      return;
    } else {
      console.log("verify payment");
      verifyPaystackPayment(refNumber);
    }
  }, [confimation, state, refNumber]);

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  const retrieveData = () => {
    const userActive = localStorage.getItem("user");
    if (!userActive) {
      settoken(null);
      return null;
    }
    const item = JSON.parse(userActive);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      window.localStorage.clear();
      return null;
    }
    // settoken(item?.userToken);
    setuserName(item?.userName);
    setuserId(item?.userId);
    setuserEmail(item?.userEmail);
    setuserPhone(item?.phoneNumber);
    // setuserAddress(item?.userAddress);
    // console.log(item?.userAddress)

    if (item?.userId) {
      getAddressArray(item?.userId);
    }
  }; //Get Data from local Storage

  const getAddressArray = (id) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(enviroment.BASE_URL + "auth/user/users/admin/" + id, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log(result)
        const newResult = JSON.parse(result);
        console.log("address info", newResult);
        setuserInitialAddress(newResult);
        setuserAddress(newResult.data.info);

        if (!newResult.data.info.length) {
          setdefaultmodal(true);
        }

        setdefaultAddress(
          newResult.data.info.filter((address) => {
            return address._id == newResult.data.defaultInfo;
          })
        );

        console.log("defaul", defaultAddress);

        if (defaultAddress && !defaultAddress?.length) {
          setdefaultmodal(true);
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    retrieveCountry();
    return () => {
      retrieveCountry();
    };
  }, [router.pathname, token, switchAddress]);

  useEffect(() => {
    retrieveData();
    // console.log(options)
    return retrieveData;
  }, [router.pathname, token, switchAddress, addressModalContent1]);

  const verifyPaystackPayment = (ref) => {
    fetch(enviroment.BASE_URL + "transactions/initialize/verify/" + ref, {
      method: "GET",
      redirect: "follow",
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        if (data) {
          //  console.log(data.data)
          if (Object.entries(data).length >= 1) {
            const formatData = JSON.parse(data);
            // setcollection(formatData.data);
            if (formatData.data.status) {
              frontendPayment(ref, formatData);
            }
          }
        }
      })
      .catch((error) => console.log("payment error", error));
  };

  const buyNowFunction = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const bidObject = {
      vin: carDetails?.vin,
      link: carDetails?.link,
      name: `${carDetails?.year} ${carDetails?.make} ${carDetails?.Model}`,
      site: carDetails?.site,
      price: carDetails?.bidAmount,
      year: carDetails?.year,
      exterior_color: carDetails?.exterior_color,
      vehicle_type: carDetails?.vehicle_type,
      interior_color: carDetails?.interior_color,
      transmission: carDetails?.transmission,
      odometer: carDetails?.odometer,
      driveTrain: carDetails?.driveTrain,
      doors: carDetails?.doors,
      Model: carDetails?.model,
      make: carDetails?.make,
      equipment: "",
      EngineType: "",
      interior_type: "",
      body_style: carDetails?.body_style,
      fuel_type: "",
      passengerCapacity: "",
      sellerCity: "",
      description: "",
      Zip: carDetails?.Zip,
      tilteImage: carDetails?.tilteImage,
      bidAmount: carDetails?.total,
      owner: carDetails?.owner,
      facilitationLocation: carDetails?.facilitationLocation,
      Vehicle_location: carDetails?.Vehicle_location,
      images: carDetails?.images,
      trucking: carDetails?.trucking,
      shipping: carDetails?.shipping,
      auctionEndTime: carDetails?.auctionEndTime,
    };

    console.log("bid object", bidObject);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(bidObject),
      redirect: "follow",
    };

    //Add car to buy now
    fetch(enviroment.BASE_URL + "bids/buy-now", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log(result)
        const resultFormat = JSON.parse(result);
        console.log("bnf", resultFormat);
        if (resultFormat.error === false) {
          getBidId(resultFormat);
          setbnvehicleID(resultFormat.data._id);
          initializePayment(onSuccess, onClose);
          setconfimation(true);
        } else {
          buyNowInfo();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const frontendPayment = (ref, verifiedData) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      vin: carDetails?.vin,
      number: `${userPhone}`,
      fullname: `${userName}`,
      email: `${userEmail}`,
      buyNow: true,
      username: "",
      collection: "",
      owner: carDetails?.owner,
      vehicle: bnvehicleID,
      bid: bidID,
      amount: 500000,
      amountBalance: carDetails?.total ? Number(carDetails?.total) - 500000 : 0,
      reference: ref,
      currency: "",
      metadata: "",
      symbol:"NGN",
      balance: carDetails?.total ? Number(carDetails?.total) - 500000 : 0,
      status: verifiedData.data.status,
      statusTrans: verifiedData.data.data.status,
    });
    console.log("frontend data", raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(enviroment.BASE_URL + "transactions/payment", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultFormat = JSON.parse(result);
        console.log("front end payment", resultFormat);
        if (resultFormat.error === false) {
          buyNowSuccess();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const stripePayment = (ref, verifiedData) => {
    console.log("vehicle id", bnsvehicleID);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      vin: carDetails?.vin,
      number: `${userPhone}`,
      fullname: `${userName}`,
      email: `${userEmail}`,
      buyNow: true,
      username: "",
      collection: "",
      owner: carDetails?.owner,
      vehicle: bnsvehicleID,
      bid: bidID,
      amount: carDetails?.total,
      amountBalance: carDetails?.total ? Number(carDetails?.total) - 1000 : 0,
      reference: ref,
      currency: "",
      metadata: "",
      balance: carDetails?.total ? Number(carDetails?.total) - 1000 : 0,
      status: verifiedData.data.paid,
      statusTrans: verifiedData.data.paid,
    });
    console.log("stripe data", raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(enviroment.BASE_URL + "transactions/payment", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultFormat = JSON.parse(result);
        console.log("front end payment", resultFormat);
        if (resultFormat.error === false) {
          setstate(3);
          stripeSuccess();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getBidId = (bnfResult) => {
    const vehicleID = bnfResult.data._id;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(enviroment.BASE_URL + "bids/vehicle/" + vehicleID, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("gbID", result);
        const resultFormat = JSON.parse(result);
        setbidID(resultFormat.data._id);
      })
      .catch((error) => console.log("error", error));
  };

  const [state, setstate] = useState(1);
  const openForm = (evt, status) => {
    setstate(status);
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("details-tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
  };

  const retrieveCar = () => {
    const activeCar = localStorage.getItem("buyNowData");
    if (!activeCar) {
      router.back();
      return null;
    }

    const now = new Date();
    const item = JSON.parse(activeCar);
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      window.localStorage.clear();
      return null;
    }
    setcarDetails(item);
  }; //Get Data from local Storage

  useEffect(() => {
    retrieveCar();
    console.log("car deets", carDetails);
  }, []);

  const validatePhone = () => {
    if (!phoneNumber) {
      setphoneError(true);
    } else {
      console.log(phoneNumber);
    }
  };

  const phoneNumberChange = () => {
    formik.values.phone =
      `${phoneNumberRef.current.selectedCountryData.dialCode}` +
      `${phoneNumberRef.current.state.value}`;
    setphoneNumber(
      `+${phoneNumberRef.current.selectedCountryData.dialCode}` +
        `${phoneNumberRef.current.state.value}`
    );
    if (phoneNumberRef) {
      setphoneError(false);
    }
  };

  const submitCustomerDetails = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phoneNumber || !street) {
      return;
    }
    setstate(2);
  };

  const setinitialDefault = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      default: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      enviroment.BASE_URL + "auth/user/address-default/" + userId,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const newResult = JSON.parse(result);
        if (newResult.error === false) {
          defaultAddressSuccess();
          setswitchAddress(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      lg: "",
      state: "",
      country: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("First name is required"),
      lastName: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Last name is required"),
      phone: Yup.string().required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      address: Yup.string().required("Address is required"),
      lg: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      country: Yup.string().required("Country is required"),
    }),
    onSubmit: (values) => {
      // notify()
      setisLoading(true);
      seterror(null);
      // console.log(values);

      userAddress?.push(values);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        info: userAddress,
      });

      console.log(raw);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        enviroment.BASE_URL + "auth/user/update/info/" + userId,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          const newResult = JSON.parse(result);

          if (newResult.error === false) {
            setstate(2);
            setinitialDefault(
              newResult.data.info[newResult.data.info.length - 1]._id
            );
          }
        })
        .catch((error) => console.log("err", error));
    },
  });

  const setbackupDefault = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      info: [
        {
          firstName: userInitialAddress?.data.profile.firstName,
          lastName: userInitialAddress?.data.profile.lastName,
          address: userInitialAddress?.data.profile.address,
          phone: userInitialAddress?.data.profile.phoneNumber,
          email: userInitialAddress?.data.email,
          country: userInitialAddress?.data.profile.country,
          state: userInitialAddress?.data.profile.state,
          lg: userInitialAddress?.data.profile.state,
        },
      ],
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      enviroment.BASE_URL + "auth/user/update/info/" + userId,
      requestOptions
    )
      .then((response) => {
        setrefreshDOM(true);
        response.text();
      })
      .then((result) => {
        console.log(result);
        const newResult = JSON.parse(result);
        console.log(newResult);

        if (newResult.error === false) {
          setdefaultmodal(false);
          setinitialDefault(newResult.data.info[0]._id);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const newPhoneNumberChange = () => {
    // formik.values.number =
    //     `${phoneNumberRef.current.selectedCountryData.dialCode}` +
    //     `${phoneNumberRef.current.state.value}`;
    setnewAddressPhone(
      `+${newPhoneNumberRef.current.selectedCountryData.dialCode}` +
        `${newPhoneNumberRef.current.state.value}`
    );
    // if (phoneNumberRef) {
    //     setphoneError(false);
    // }
  };

  const editAddress = (address) => {
    console.log(address);
    setindividualAddress(address);

    setaddressModalContent1(false);
    setaddressModalContent2(true);
    setaddressModalContent3(false);
  };

  const saveShippingAddress = () => {
    const editedAddress = userAddress.map((address) => {
      if (address._id == individualAddress._id) {
        return individualAddress;
      } else {
        return address;
      }
    });

    console.log(editedAddress);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      info: editedAddress,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      enviroment.BASE_URL + "auth/user/update/info/" + userId,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const newResult = JSON.parse(result);

        if (newResult.error === false) {
          setaddressModalContent1(true);
          setaddressModalContent2(false);
          setaddressModalContent3(false);
          editAddressSuccess();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const deleteAddress = (id) => {
    const editedAddress = userAddress.filter((address) => {
      return address._id !== id;
    });

    console.log(editedAddress);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      info: editedAddress,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      enviroment.BASE_URL + "auth/user/update/info/" + userId,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const newResult = JSON.parse(result);

        if (newResult.error === false) {
          setswitchAddress(false);
          deleteAddressSuccess();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const showNewAddress = () => {
    setaddressModalContent1(false);
    setaddressModalContent2(false);
    setaddressModalContent3(true);
  };

  const addNewAddress = () => {
    setaddressModalContent1(true);
    setaddressModalContent2(false);
    setaddressModalContent3(false);
    setswitchAddress(false);

    const addressObj = {
      // _id: makeid(24),
      firstName: newAddressFirstName,
      lastName: newAddressLastName,
      address: newAddressStreet,
      phone: newAddressPhone,
      email: newAddressEmail,
      country: newAddressCountry,
      state: newAddressState,
      lg: newAddressCity,
    };

    userAddress?.push(addressObj);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      info: userAddress,
    });

    console.log("added address", raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      enviroment.BASE_URL + "auth/user/update/info/" + userId,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const newResult = JSON.parse(result);
        if (newResult.error === false) {
          addAddressSuccess();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const sendDefaultAddress = () => {
    setstate(2);
  };

  const changeFirstName = (e) => {
    setindividualAddress({ ...individualAddress, firstName: e.target.value });
  };
  const changeLastName = (e) => {
    setindividualAddress({ ...individualAddress, lastName: e.target.value });
  };
  const changeEmail = (e) => {
    setindividualAddress({ ...individualAddress, email: e.target.value });
  };
  const changePhoneNumber = (e) => {
    setindividualAddress({
      ...individualAddress,
      phone: `${editedphoneRef.current.state.value}`,
    });
  };
  const changeCountry = (e) => {
    setindividualAddress({ ...individualAddress, country: e.target.value });
  };
  const changeState = (e) => {
    setindividualAddress({ ...individualAddress, state: e.target.value });
  };
  const changeLg = (e) => {
    setindividualAddress({ ...individualAddress, lg: e.target.value });
  };
  const changeAddress = (e) => {
    setindividualAddress({ ...individualAddress, address: e.target.value });
  };

  const chargeCard = (id) => {
    setisLoading(true);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      source: id,
      amount: `${carDetails?.total}`,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(enviroment.BASE_URL + "stripe/charge-card", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setisLoading(false);
        console.log(result);
        if (!result.error) {
          stripePayment(result.data.id, result);
        } else {
          stripeFailure();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const generateToken = () => {
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      number: stripeNumber,
      exp_month: stripeExpiry.slice(0, 2),
      exp_year: stripeExpiry.slice(2, 4),
      cvc: cvc,
      name: billingName,
      address_city: billingCity,
      address_country: billingCountry,
      address_line1: billingAddress,
      address_zip: billingZip,
      ifsave: false,
      email: billingEmail,
      phone: billingPhone,
    });

    console.log(JSON.parse(raw));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(enviroment.BASE_URL + "stripe/create-token", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setisLoading(true);
        console.log(result.data.id);
        if (!error) {
          chargeCard(result.data.id);
          // buyNowStripe()
        }
      })
      .catch((error) => console.log("error", error));
  };

  const addStripeCustomer = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: billingEmail,
      name: billingName,
      description: "lorem ipsum",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(enviroment.BASE_URL + "stripe/create-customer", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.error == false) {
          var existingInfo = JSON.parse(localStorage.getItem("user"));
          const StripeId = result.data.id;

          existingInfo.stripeId = StripeId;

          localStorage.setItem("user", JSON.stringify(existingInfo));
        }
      })
      .catch((error) => console.log("error", error));
  };

  const buyNowStripe = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const bidObject = {
      vin: carDetails?.vin,
      link: carDetails?.link,
      name:
        carDetails?.name ||
        `${carDetails?.year} ${carDetails?.make} ${carDetails?.Model}`,
      site: carDetails?.site,
      price: carDetails?.bidAmount,
      year: carDetails?.year,
      exterior_color: carDetails?.exterior_color,
      vehicle_type: carDetails?.vehicle_type,
      interior_color: carDetails?.interior_color,
      transmission: carDetails?.transmission,
      odometer: carDetails?.odometer,
      driveTrain: carDetails?.driveTrain,
      doors: carDetails?.doors,
      Model: carDetails?.model,
      make: carDetails?.make,
      equipment: "",
      EngineType: "",
      interior_type: "",
      body_style: carDetails?.body_style,
      fuel_type: "",
      passengerCapacity: "",
      sellerCity: "",
      description: "",
      Zip: carDetails?.Zip,
      tilteImage: carDetails?.tilteImage,
      bidAmount: carDetails?.total,
      owner: carDetails?.owner,
      facilitationLocation: carDetails?.facilitationLocation,
      Vehicle_location: carDetails?.Vehicle_location,
      images: carDetails?.images,
      trucking: carDetails?.trucking,
      shipping: carDetails?.shipping,
      auctionEndTime: carDetails?.auctionEndTime,
    };

    console.log("bid object", bidObject);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(bidObject),
      redirect: "follow",
    };

    //Add car to buy now
    fetch(enviroment.BASE_URL + "bids/buy-now", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log(result)
        const resultFormat = JSON.parse(result);
        console.log("bns", resultFormat);
        if (resultFormat.error === false) {
          getBidId(resultFormat);
          console.log("bnvID", resultFormat.data._id);
          setbnsvehicleID(resultFormat.data._id);
          generateToken();

          var checkStripeId = JSON.parse(localStorage.getItem("user"));
          if (!checkStripeId.stripeId) {
            addStripeCustomer();
          } else {
            return;
          }
          //
        } else {
          buyNowInfo();
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center pt-16">
        <div className="mx-auto flex-wrap lg:flex-nowrap flex page-holder ">
          <aside className="deposit-holder lg:h-screen px-4 md:px-2 lg:pl-14 lg:pr-9 pt-9 pb-4">
            {carDetails ? (
              <>
                <p className="primary-color text-sm font-bold mb-3">
                  Make Deposit
                </p>
                <div className="grid grid-cols-6 lg:grid-cols-1 items-center  gap-6 md:gap-3 lg:gap-1 car-holder py-2.5">
                  <span className="col-span-3 inline-block overflow-hidden rounded-md">
                    <img
                      className="w-full"
                      src={carDetails?.images[0]?.image_largeUrl}
                      alt=""
                    />
                  </span>
                  <div className="col-span-3">
                    <p className="md:text-sm  lg:mt-3 primary-black font-medium font-10 uppercase">
                      {`${carDetails?.name}` ||
                        `${carDetails?.year} ${carDetails?.make} ${carDetails?.Model}`}
                    </p>
                    <p className="primary-black font-medium py-1 text-xs uppercase">
                      {dollarFormatter.format(carDetails?.odometer)} mi
                    </p>
                    <p className="primary-black font-medium text-xs uppercase">
                      vin: {carDetails?.vin}
                    </p>
                    <p className="primary-black font-medium font-11 uppercase">
                      ${dollarFormatter.format(carDetails?.bidAmount)}
                    </p>
                  </div>
                </div>

                <table className="min-w-full ">
                  <tbody>
                    {(carDetails?.trucking || carDetails?.trucking != 0) && (
                      <tr className="detail-row mb-2">
                        <td className="sec-black text-sm font-semibold py-1.5">
                          Trucking
                        </td>
                        <td className="text-sm primary-black font-normal py-1.5">
                          ${carDetails?.trucking}
                        </td>
                      </tr>
                    )}

                    {(carDetails?.shipping || carDetails?.shipping != 0) && (
                      <tr className="detail-row mb-2">
                        <td className="sec-black text-sm font-semibold py-1.5">
                          Shipping
                        </td>
                        <td className="text-sm primary-black font-normal py-1.5">
                          ${carDetails?.shipping}
                        </td>
                      </tr>
                    )}

                    <tr className="detail-row mb-2">
                      <td className="sec-black text-sm font-semibold py-1.5">
                        Clearing
                      </td>
                      <td className="text-sm primary-black font-normal py-1.5">
                        N/A
                      </td>
                    </tr>

                    <tr className="detail-row mb-2">
                      <td className="sec-black text-sm font-semibold py-1.5">
                        Service Fee
                      </td>
                      <td className="text-sm primary-black font-normal py-1.5">
                        $400
                      </td>
                    </tr>

                    <tr className="detail-row mb-2">
                      <td className="sec-black text-sm font-semibold py-1.5">
                        Auction Fee
                      </td>
                      <td className="text-sm primary-black font-normal py-1.5">
                        $450
                      </td>
                    </tr>

                    <tr className="detail-row mb-2 ">
                      <td className="sec-black text-sm font-semibold py-1.5 total-border">
                        Total
                      </td>
                      <td className="text-sm primary-black font-normal py-1.5 total-border">
                        ${carDetails?.total}
                      </td>
                    </tr>

                    <tr className="detail-row mb-2">
                      <td className="sec-black text-sm font-semibold py-1.5">
                        Deposit Due
                      </td>
                      <td className="text-sm primary-black font-normal py-1.5">
                        $1,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <p className="font-11 sec-black">Loading car details...</p>
              </>
            )}
          </aside>

          <section className="px-3 md:ml-5 lg:mx-12 lg:px-14 xl:px-28  ">
            <div className="py-6 max-w-3xl mx-auto">
              <div className="w-full flex uppercase ">
                <div
                  className={
                    "details-tab flex-1 flex justify-center " +
                    (state === 1 ? "active" : "")
                  }
                >
                  <p className="py-2.5">1 customer info</p>
                </div>
                <div
                  className={
                    "details-tab flex-1 flex justify-center font-semibold py-0.5 " +
                    (state === 2 ? "active" : "")
                  }
                >
                  <p className="py-2">2 deposit payment</p>
                </div>
                <div
                  className={
                    "details-tab flex-1 flex justify-center font-semibold py-0.5 " +
                    (state === 3 ? "active" : "")
                  }
                >
                  <p className="py-2">3 confirmation</p>
                </div>
              </div>

              <div className="mt-5">
                {state === 1 && (
                  <>
                    {!userAddress?.length || !defaultAddress?.length ? (
                      <form
                        className="tabcontent mt-5 "
                        id="customer-info"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="info-holder text-xs px-4 py-4 mb-3">
                          <p className="font-semibold primary-color  ">
                            Personal Details
                          </p>

                          <div className="grid grid-cols-6 gap-3 mt-3">
                            <div className="col-span-6 lg:col-span-3">
                              <label
                                htmlFor="name"
                                className="block text-xs primary-color "
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Dare"
                                className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                              />
                              {formik.touched.firstName &&
                              formik.errors.firstName ? (
                                <div className="input-error">
                                  {formik.errors.firstName}
                                </div>
                              ) : null}
                            </div>

                            <div className=" col-span-6 lg:col-span-3 ">
                              <label
                                htmlFor="name"
                                className="block text-xs primary-color "
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Thomas"
                                className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                              />
                              {formik.touched.lastName &&
                              formik.errors.lastName ? (
                                <div className="input-error">
                                  {formik.errors.lastName}
                                </div>
                              ) : null}
                            </div>

                            <div className="col-span-6 lg:col-span-3 relative ">
                              <label
                                htmlFor="phone"
                                className="block text-xs primary-color "
                              >
                                Phone Number
                              </label>
                              <IntlTelInput
                                ref={phoneNumberRef}
                                placeholder="xxxx-xxxx-xxxx"
                                containerClassName="intl-tel-input buynow-phone-number"
                                inputClassName="form-control"
                                preferredCountries={["ng"]}
                                defaultValue={phoneNumber}
                                onPhoneNumberChange={(e) =>
                                  phoneNumberChange(e)
                                }
                                onPhoneNumberBlur={validatePhone}
                              />
                              {phoneError && (
                                <div className="input-error">
                                  Phone number is required
                                </div>
                              )}
                            </div>
                            <div className="col-span-6 lg:col-span-3">
                              <label
                                htmlFor="email"
                                className="block text-xs primary-color "
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="dare@thomas.com"
                                className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                              />
                              {formik.touched.email && formik.errors.email ? (
                                <div className="input-error">
                                  {formik.errors.email}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div className="info-holder text-xs px-4 py-4 mb-3">
                          <p className="font-semibold primary-color ">
                            Delivery address
                          </p>

                          <div className="grid grid-cols-6 gap-3 mt-3">
                            <div className=" col-span-6 ">
                              <label
                                htmlFor="lga"
                                className="block text-xs primary-color "
                              >
                                Country
                              </label>
                              <select
                                id="country"
                                name="country"
                                className="mt-1 block w-full info-select py-2 px-2  bg-white  focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.country}
                              >
                                <option value="">Chooose Country</option>
                                {options.map((country) => (
                                  <option
                                    key={country.label}
                                    value={country.label}
                                  >
                                    {country.label}
                                  </option>
                                ))}
                              </select>
                              {formik.touched.country &&
                              formik.errors.country ? (
                                <div className="input-error">
                                  {formik.errors.country}
                                </div>
                              ) : null}
                            </div>
                            <div className="col-span-6 lg:col-span-3">
                              <label
                                htmlFor="state"
                                className="block text-xs primary-color "
                              >
                                State
                              </label>
                              <input
                                type="text"
                                id="state"
                                name="state"
                                className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.state}
                              />
                              {formik.touched.state && formik.errors.state ? (
                                <div className="input-error">
                                  {formik.errors.state}
                                </div>
                              ) : null}
                            </div>

                            <div className=" col-span-6 lg:col-span-3">
                              <label
                                htmlFor="lga"
                                className="block text-xs primary-color "
                              >
                                City
                              </label>
                              <input
                                type="text"
                                id="lg"
                                name="lg"
                                className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lg}
                              />
                              {formik.touched.lg && formik.errors.lg ? (
                                <div className="input-error">
                                  {formik.errors.lg}
                                </div>
                              ) : null}
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="lga"
                                className="block text-xs primary-color "
                              >
                                Street Address
                              </label>
                              <textarea
                                rows="2"
                                cols="1"
                                id="address"
                                name="address"
                                id="address"
                                className="mt-1 info-area block w-full py-2 px-2 focus:outline-none"
                                placeholder="Enter street address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                              ></textarea>
                              {formik.touched.address &&
                              formik.errors.address ? (
                                <div className="input-error">
                                  {formik.errors.address}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="uppercase focus:outline-none primary-btn text-white font-10 font-semibold mt-4 py-1.5 px-6"
                          >
                            Proceed
                          </button>
                        </div>
                      </form>
                    ) : (
                      <>
                        {defaultAddress.length && (
                          <form className="tabcontent mt-5 " id="customer-info">
                            <div className="flex justify-end mb-4">
                              <button
                                type="button"
                                onClick={() => {
                                  setaddressModalContent1(true);
                                  setaddressModalContent2(false);
                                  setaddressModalContent3(false);
                                  setswitchAddress(true);
                                }}
                                className="text-white text-right font-11 bg-blue-500 rounded-sm py-1 px-2 hover:bg-blue-600"
                              >
                                Switch Address
                              </button>
                            </div>
                            <div className="info-holder text-xs px-4 py-4 mb-3">
                              <p className="font-semibold primary-color  ">
                                Personal Details
                              </p>

                              <div className="grid grid-cols-6 gap-3 mt-3">
                                <div className="col-span-6 lg:col-span-3">
                                  <label
                                    htmlFor="name"
                                    className="block text-xs primary-color "
                                  >
                                    First Name
                                  </label>

                                  <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                                    {defaultAddress[0]?.firstName}
                                  </div>
                                </div>

                                <div className=" col-span-6 lg:col-span-3 ">
                                  <label
                                    htmlFor="name"
                                    className="block text-xs primary-color "
                                  >
                                    Last Name
                                  </label>
                                  <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                                    {defaultAddress[0]?.lastName}
                                  </div>
                                </div>

                                <div className="col-span-6 lg:col-span-3 relative ">
                                  <label
                                    htmlFor="phone"
                                    className="block text-xs primary-color "
                                  >
                                    Phone Number
                                  </label>
                                  <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                                    {defaultAddress[0]?.phone}
                                  </div>
                                </div>
                                <div className="col-span-6 lg:col-span-3">
                                  <label
                                    htmlFor="email"
                                    className="block text-xs primary-color "
                                  >
                                    Email
                                  </label>
                                  <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                                    {defaultAddress[0]?.email}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="info-holder text-xs px-4 py-4 mb-3">
                              <p className="font-semibold primary-color ">
                                Delivery address
                              </p>

                              <div className="grid grid-cols-6 gap-3 mt-3">
                                <div className=" col-span-6 ">
                                  <label
                                    htmlFor="lga"
                                    className="block text-xs primary-color "
                                  >
                                    Country
                                  </label>
                                  <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                                    {defaultAddress[0]?.country}
                                  </div>
                                </div>
                                <div className="col-span-6 lg:col-span-3">
                                  <label
                                    htmlFor="state"
                                    className="block text-xs primary-color "
                                  >
                                    State
                                  </label>
                                  <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                                    {defaultAddress[0]?.state}
                                  </div>
                                </div>

                                <div className=" col-span-6 lg:col-span-3">
                                  <label
                                    htmlFor="lga"
                                    className="block text-xs primary-color "
                                  >
                                    City
                                  </label>
                                  <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                                    {defaultAddress[0]?.lg}
                                  </div>
                                </div>

                                <div className="col-span-6">
                                  <label
                                    htmlFor="lga"
                                    className="block text-xs primary-color "
                                  >
                                    Street Address
                                  </label>
                                  <div className="bg-gray-200 text-black py-2 px-2 w-full mt-1 block">
                                    {defaultAddress[0]?.address}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-center">
                              <button
                                onClick={sendDefaultAddress}
                                type="submit"
                                className="uppercase focus:outline-none primary-btn text-white font-10 font-semibold mt-4 py-1.5 px-6"
                              >
                                Proceed
                              </button>
                            </div>
                          </form>
                        )}
                      </>
                    )}
                  </>
                )}
                {state === 2 && (
                  <div className="tabcontent mt-5" id="deposit">
                    <div className="info-holder font-10 py-24 mb-3 ">
                      <div className="flex justify-center px-4 ">
                        <form className="w-full">
                          {userCountry == "Nigeria" &&
                          carDetails?.carDestination == "Nigeria" ? (
                            <div className="flex  justify-center items-center">
                              <button
                                onClick={() => {
                                  // initializePayment(
                                  //     onSuccess,
                                  //     onClose
                                  // );
                                  buyNowFunction();
                                }}
                                type="button"
                                className="focus:outline-none text-sm  paystack-btn font-medium primary-color flex justify-center items-center"
                              >
                                Pay with
                                <img
                                  src="../assets/img/paystack-logo.png"
                                  className="ml-2"
                                  alt="Paystack"
                                />
                              </button>
                            </div>
                          ) : userCountry !== "Nigeria" &&
                            carDetails?.carDestination == "Nigeria" ? (
                            <div className="flex flex-col gap-y-2">
                              <div className="flex  justify-center items-center">
                                <button
                                  onClick={() => {
                                    // initializePayment(
                                    //     onSuccess,
                                    //     onClose
                                    // );
                                    buyNowFunction();
                                  }}
                                  type="button"
                                  className="focus:outline-none text-sm  paystack-btn font-medium primary-color flex justify-center items-center"
                                >
                                  Pay with
                                  <img
                                    src="../assets/img/paystack-logo.png"
                                    className="ml-2"
                                    alt="Paystack"
                                  />
                                </button>
                              </div>

                              <div>OR</div>

                              <div className=" px-2 ">
                                <div
                                  id="PaymentForm"
                                  className="flex gap-x-3 flex-col gap-y-2 lg:gap-y-0 lg:flex-row justify-between"
                                >
                                  <Cards
                                    cvc={cvc}
                                    expiry={stripeExpiry}
                                    focused={stripeFocus}
                                    name={stripeName}
                                    number={stripeNumber}
                                  />
                                  <form className="flex-1 p-1">
                                    <div className="flex flex-col gap-y-2 mb-4">
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="tel"
                                          name="number"
                                          placeholder="Card Number"
                                          onChange={(e) =>
                                            setstripeNumber(e.target.value)
                                          }
                                          onFocus={(e) =>
                                            setstripeFocus(e.target.name)
                                          }
                                        />
                                      </div>
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="text"
                                          name="name"
                                          placeholder="Card Name"
                                          onChange={(e) =>
                                            setstripeName(e.target.value)
                                          }
                                          onFocus={(e) =>
                                            setstripeFocus(e.target.name)
                                          }
                                        />
                                      </div>
                                      <div className="flex flex-col lg:flex-row lg:gap-x-2 gap-x-0 gap-y-4">
                                        <div>
                                          <input
                                            className="outline-none p-2 border border-gray-200 w-full text-xs"
                                            type="tel"
                                            name="expiry"
                                            placeholder="Expiry"
                                            onChange={(e) =>
                                              setstripeExpiry(e.target.value)
                                            }
                                            onFocus={(e) =>
                                              setstripeFocus(e.target.name)
                                            }
                                          />
                                        </div>
                                        <div>
                                          <input
                                            className="outline-none p-2 border border-gray-200 w-full text-xs"
                                            type="tel"
                                            name="cvc"
                                            placeholder="CVC"
                                            onChange={(e) =>
                                              setcvc(e.target.value)
                                            }
                                            onFocus={(e) =>
                                              setstripeFocus(e.target.name)
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col lg:flex-row lg:gap-x-2 gap-x-0 gap-y-4">
                                        <div>
                                          <input
                                            className="outline-none p-2 border border-gray-200 w-full text-xs"
                                            type="text"
                                            name="billingName"
                                            placeholder="Full name"
                                            value={billingName}
                                            onChange={(e) =>
                                              setbillingName(e.target.value)
                                            }
                                          />
                                        </div>
                                        <div>
                                          <input
                                            className="outline-none p-2 border border-gray-200 w-full text-xs"
                                            type="tel"
                                            name="billingPhone"
                                            placeholder="Phone number"
                                            value={billingPhone}
                                            onChange={(e) =>
                                              setbillingPhone(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col lg:flex-row lg:gap-x-2 gap-x-0 gap-y-4">
                                        <div>
                                          <input
                                            className="outline-none p-2 border border-gray-200 w-full text-xs"
                                            type="email"
                                            name="billingEmail"
                                            placeholder="Email"
                                            value={billingEmail}
                                            onChange={(e) =>
                                              setbillingEmail(e.target.value)
                                            }
                                          />
                                        </div>
                                        <div>
                                          <input
                                            className="outline-none p-2 border border-gray-200 w-full text-xs"
                                            type="text"
                                            name="billingCity"
                                            placeholder="City"
                                            value={billingCity}
                                            onChange={(e) =>
                                              setbillingCity(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col lg:flex-row lg:gap-x-2 gap-x-0 gap-y-4">
                                        <div>
                                          <input
                                            className="outline-none p-2 border border-gray-200 w-full text-xs"
                                            type="text"
                                            name="billingCountry"
                                            placeholder="Country"
                                            value={billingCountry}
                                            onChange={(e) =>
                                              setbillingCountry(e.target.value)
                                            }
                                          />
                                        </div>
                                        <div>
                                          <input
                                            className="outline-none p-2 border border-gray-200 w-full text-xs"
                                            type="text"
                                            name="billingAddress"
                                            placeholder="Address"
                                            value={billingAddress}
                                            onChange={(e) =>
                                              setbillingAddress(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col lg:flex-row lg:gap-x-2 gap-x-0 gap-y-4">
                                        <div>
                                          <input
                                            className="outline-none p-2 border border-gray-200 w-full text-xs"
                                            type="tel"
                                            name="billingZip"
                                            placeholder="Zip Code"
                                            value={billingZip}
                                            onChange={(e) =>
                                              setbillingZip(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <button
                                        onClick={buyNowStripe}
                                        type="btn-primary"
                                        className="uppercase focus:outline-none primary-btn text-white font-10 font-semibold mt-1 py-1.5 px-6"
                                      >
                                        {isLoading ? (
                                          <ClipLoader
                                            color="#fff"
                                            size={20}
                                            loading
                                          />
                                        ) : (
                                          "Submit"
                                        )}
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className=" px-2 ">
                              <div
                                id="PaymentForm"
                                className="flex gap-x-3 flex-col gap-y-2 lg:gap-y-0 lg:flex-row justify-between"
                              >
                                <Cards
                                  cvc={cvc}
                                  expiry={stripeExpiry}
                                  focused={stripeFocus}
                                  name={stripeName}
                                  number={stripeNumber}
                                />
                                <form className="flex-1 p-1">
                                  <div className="flex flex-col gap-y-2 mb-4">
                                    <div>
                                      <input
                                        className="outline-none p-2 border border-gray-200 w-full text-xs"
                                        type="tel"
                                        name="number"
                                        placeholder="Card Number"
                                        onChange={(e) =>
                                          setstripeNumber(e.target.value)
                                        }
                                        onFocus={(e) =>
                                          setstripeFocus(e.target.name)
                                        }
                                      />
                                    </div>
                                    <div>
                                      <input
                                        className="outline-none p-2 border border-gray-200 w-full text-xs"
                                        type="text"
                                        name="name"
                                        placeholder="Card Name"
                                        onChange={(e) =>
                                          setstripeName(e.target.value)
                                        }
                                        onFocus={(e) =>
                                          setstripeFocus(e.target.name)
                                        }
                                      />
                                    </div>
                                    <div className="flex gap-x-2">
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="tel"
                                          name="expiry"
                                          placeholder="Expiry"
                                          onChange={(e) =>
                                            setstripeExpiry(e.target.value)
                                          }
                                          onFocus={(e) =>
                                            setstripeFocus(e.target.name)
                                          }
                                        />
                                      </div>
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="tel"
                                          name="cvc"
                                          placeholder="CVC"
                                          onChange={(e) =>
                                            setcvc(e.target.value)
                                          }
                                          onFocus={(e) =>
                                            setstripeFocus(e.target.name)
                                          }
                                        />
                                      </div>
                                    </div>

                                    <div className="flex gap-x-2">
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="text"
                                          name="billingName"
                                          placeholder="Full name"
                                          value={billingName}
                                          onChange={(e) =>
                                            setbillingName(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="tel"
                                          name="billingPhone"
                                          placeholder="Phone number"
                                          value={billingPhone}
                                          onChange={(e) =>
                                            setbillingPhone(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>

                                    <div className="flex gap-x-2">
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="email"
                                          name="billingEmail"
                                          placeholder="Email"
                                          value={billingEmail}
                                          onChange={(e) =>
                                            setbillingEmail(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="text"
                                          name="billingCity"
                                          placeholder="City"
                                          value={billingCity}
                                          onChange={(e) =>
                                            setbillingCity(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="flex gap-x-2">
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="text"
                                          name="billingCountry"
                                          placeholder="Country"
                                          value={billingCountry}
                                          onChange={(e) =>
                                            setbillingCountry(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="text"
                                          name="billingAddress"
                                          placeholder="Address"
                                          value={billingAddress}
                                          onChange={(e) =>
                                            setbillingAddress(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="flex gap-x-2">
                                      <div>
                                        <input
                                          className="outline-none p-2 border border-gray-200 w-full text-xs"
                                          type="tel"
                                          name="billingZip"
                                          placeholder="Zip Code"
                                          value={billingZip}
                                          onChange={(e) =>
                                            setbillingZip(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <button
                                      onClick={buyNowStripe}
                                      type="btn-primary"
                                      className="uppercase focus:outline-none primary-btn text-white font-10 font-semibold mt-1 py-1.5 px-6"
                                    >
                                      {isLoading ? (
                                        <ClipLoader
                                          color="#fff"
                                          size={20}
                                          loading
                                        />
                                      ) : (
                                        "Submit"
                                      )}
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                    {userCountry == "Nigeria" &&
                      carDetails?.carDestination == "Nigeria" && (
                        <div className="info-holder text-xs   py-4 pb-5 mb-3 ">
                          <div className="transfer-payment px-4">
                            <p className="text-xs font-semibold">
                              Or make transfer payment using these details
                            </p>
                            <table className="mt-2 min-w-full">
                              <tbody className="">
                                <tr>
                                  <th className="text-left ">Bank Name</th>
                                  <th className="text-left">Account Number</th>
                                  <th className="text-left">Account Name</th>
                                  <th className="text-left">REF</th>
                                </tr>
                                <tr>
                                  <td>Name of Bank</td>
                                  <td>0123456789</td>
                                  <td>0123456789</td>
                                  <td>SJTKPOLVAX123</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                  </div>
                )}
                {state === 3 && (
                  <div className="confirm-holder tabcontent " id="confirmation">
                    <div className="flex justify-center mt-16">
                      <img src="../../assets/img/vectors/check.svg" />
                    </div>

                    <div className="text-center mt-8">
                      <p className="primary-color text-sm font-semibold">
                        Your payment has been sent
                      </p>
                      <p className="pt-4 text-xs sec-black px-5 leading-5 lg:px-20">
                        Your confirmation number is BLD{carDetails?.vin}. You
                        will be sent a link to pay the balance after the bid is
                        won.
                      </p>
                      <p className="pt-4 text-xs sec-black px-5 leading-5 lg:px-20">
                        You can increase your chances of getting a car by
                        selecting multiple cars for us to bid on for you at no
                        extra cost.
                      </p>
                    </div>

                    <div className="flex justify-center mt-5 mb-16">
                      <button
                        onClick={() => {
                          router.push("/vin");
                        }}
                        type="button"
                        className="focus:outline-none primary-btn px-4 font-10 text-white font-medium py-1.5"
                      >
                        ADD MORE CARS
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        {switchAddress && (
          <div id="switchAddressModal" className="modal">
            {/* <!-- Modal content --> */}
            <div className="modal-content sheetModal bg-white relative w-10/12 lg:w-2/3 mx-auto mx-8 md:px-0 md:mt-28 md:px-20 md:py-10">
              <span
                onClick={() => {
                  setswitchAddress(false);
                }}
                className="close absolute right-5 top-1 text-4xl text-gray-500"
              >
                &times;
              </span>
              {/* <!-- <i className="absolute right-0 fa fa-times" aria-hidden="true"></i> --> */}
              {addressModalContent1 ? (
                <>
                  <div className="flex flex-col">
                    {userAddress?.map((address) => (
                      <div
                        key={address._id}
                        className="border-b border-gray-200 p-3 m-2 w-full flex justify-between cursor-pointer hover:bg-gray-200"
                      >
                        <div
                          onClick={() => {
                            setinitialDefault(address._id);
                            setshowNotif(true);
                          }}
                          className="flex-1"
                        >
                          <div>
                            <p className="text-xs text-black">
                              {address.firstName} {""} {address.lastName}
                            </p>
                            <p className="font-11 sec-black">
                              {address.address}
                            </p>
                            <p className="font-11 sec-black">{address.lg}</p>
                            <p className="font-11 sec-black">{address.state}</p>
                            <p className="font-11 sec-black mt-3">
                              {address.phone}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => editAddress(address)}
                            className=" text-blue-600 cursor-pointer"
                          >
                            <i
                              style={{ fontSize: "16px" }}
                              className="fa fa-edit"
                            ></i>
                          </button>
                          <button
                            onClick={() => deleteAddress(address._id)}
                            className=" text-red-600 cursor-pointer"
                          >
                            <i
                              style={{ fontSize: "16px" }}
                              className="fa fa-trash"
                            ></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-6 place-self-center mt-4">
                    <button
                      onClick={() => {
                        showNewAddress();
                      }}
                      type="button"
                      className="focus:outline-none primary-btn font-10 font-semibold text-white py-1.5 px-8"
                    >
                      ADD NEW ADDRESS
                    </button>
                  </div>
                </>
              ) : addressModalContent2 ? (
                <>
                  <form className="tabcontent mt-5 " id="customer-info">
                    <div className="info-holder text-xs px-4 py-4 mb-3">
                      <p className="font-semibold primary-color  ">
                        Personal Details
                      </p>

                      <div className="grid grid-cols-6 gap-3 mt-3">
                        <div className="col-span-6 lg:col-span-3">
                          <label
                            htmlFor="name"
                            className="block text-xs primary-color "
                          >
                            First Name
                          </label>
                          <input
                            value={individualAddress.firstName}
                            onChange={(e) => changeFirstName(e)}
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Dare"
                            className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                          />
                        </div>

                        <div className=" col-span-6 lg:col-span-3 ">
                          <label
                            htmlFor="name"
                            className="block text-xs primary-color "
                          >
                            Last Name
                          </label>
                          <input
                            value={individualAddress.lastName}
                            onChange={(e) => changeLastName(e)}
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Thomas"
                            className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                          />
                        </div>

                        <div className="col-span-6 lg:col-span-3 relative ">
                          <label
                            htmlFor="phone"
                            className="block text-xs primary-color "
                          >
                            Phone Number
                          </label>
                          <IntlTelInput
                            ref={editedphoneRef}
                            placeholder="xxxx-xxxx-xxxx"
                            containerClassName="intl-tel-input buynow-phone-number"
                            inputClassName="form-control"
                            preferredCountries={["ng"]}
                            defaultValue={individualAddress.phone}
                            onPhoneNumberChange={(e) => changePhoneNumber(e)}
                            // onPhoneNumberBlur={validatePhone}
                          />
                          {/* {phoneError && (
                                                    <div className="input-error">
                                                        Phone number is required
                                                    </div>
                                                )} */}
                        </div>
                        <div className="col-span-6 lg:col-span-3">
                          <label
                            htmlFor="email"
                            className="block text-xs primary-color "
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={individualAddress.email}
                            onChange={(e) => changeEmail(e)}
                            placeholder="dare@thomas.com"
                            className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.email}
                          />
                          {/* {formik.touched.email &&
                                                formik.errors.email ? (
                                                    <div className="input-error">
                                                        {formik.errors.email}
                                                    </div>
                                                ) : null} */}
                        </div>
                      </div>
                    </div>

                    <div className="info-holder text-xs px-4 py-4 mb-3">
                      <p className="font-semibold primary-color ">
                        Delivery address
                      </p>

                      <div className="grid grid-cols-6 gap-3 mt-3">
                        <div className=" col-span-6 ">
                          <label
                            htmlFor="lga"
                            className="block text-xs primary-color "
                          >
                            Country
                          </label>
                          <select
                            value={individualAddress.country}
                            onChange={(e) => changeCountry(e)}
                            id="lga"
                            className="mt-1 block w-full info-select py-2 px-2  bg-white  focus:outline-none"
                          >
                            <option value="">Chooose Country</option>
                            {options.map((country) => (
                              <option key={country.label} value={country.label}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-span-6 lg:col-span-3">
                          <label
                            htmlFor="state"
                            className="block text-xs primary-color "
                          >
                            State
                          </label>
                          <input
                            value={individualAddress.state}
                            onChange={(e) => changeState(e)}
                            type="text"
                            id="state"
                            className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                          />
                        </div>

                        <div className=" col-span-6 lg:col-span-3">
                          <label
                            htmlFor="lga"
                            className="block text-xs primary-color "
                          >
                            City
                          </label>
                          <input
                            value={individualAddress.lg}
                            onChange={(e) => changeLg(e)}
                            type="text"
                            id="city"
                            className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="lga"
                            className="block text-xs primary-color "
                          >
                            Street Address
                          </label>
                          <textarea
                            rows="2"
                            cols="1"
                            id="streetAddress"
                            name="streetAddress"
                            id="address"
                            className="mt-1 info-area block w-full py-2 px-2 focus:outline-none"
                            placeholder="Enter street address"
                            onChange={(e) => changeAddress(e)}
                            // onBlur={formik.handleBlur}
                            value={individualAddress.address}
                          ></textarea>
                          {/* {formik.touched.streetAddress &&
                                                formik.errors.streetAddress ? (
                                                    <div className="input-error">
                                                        {formik.errors.streetAddress}
                                                    </div>
                                                ) : null} */}
                        </div>
                        {/* <div className="col-span-6">
                                                <input type="checkbox" id="defaultAddress" />
                                                <label
                                                    htmlFor="lga"
                                                    className="text-xs ml-1 primary-color "
                                                >
                                                    Default Shipping Address
                                                </label>
                                            </div> */}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => saveShippingAddress()}
                        type="button"
                        className="uppercase focus:outline-none primary-btn text-white font-10 font-semibold mt-4 py-1.5 px-6"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </>
              ) : addressModalContent3 ? (
                <>
                  <form className="tabcontent mt-5 " id="customer-info">
                    <div className="info-holder text-xs px-4 py-4 mb-3">
                      <p className="font-semibold primary-color  ">
                        Personal Details
                      </p>

                      <div className="grid grid-cols-6 gap-3 mt-3">
                        <div className="col-span-6 lg:col-span-3">
                          <label
                            htmlFor="name"
                            className="block text-xs primary-color "
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Dare"
                            className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                            value={newAddressFirstName}
                            onChange={(e) =>
                              setnewAddressFirstName(e.target.value)
                            }
                          />
                        </div>

                        <div className=" col-span-6 lg:col-span-3 ">
                          <label
                            htmlFor="name"
                            className="block text-xs primary-color "
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Thomas"
                            className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                            value={newAddressLastName}
                            onChange={(e) =>
                              setnewAddressLastName(e.target.value)
                            }
                          />
                        </div>

                        <div className="col-span-6 lg:col-span-3 relative ">
                          <label
                            htmlFor="phone"
                            className="block text-xs primary-color "
                          >
                            Phone Number
                          </label>
                          <IntlTelInput
                            ref={newPhoneNumberRef}
                            placeholder="xxxx-xxxx-xxxx"
                            containerClassName="intl-tel-input buynow-phone-number"
                            inputClassName="form-control"
                            preferredCountries={["ng"]}
                            defaultValue={newAddressPhone}
                            onPhoneNumberChange={(e) => newPhoneNumberChange(e)}
                            // onPhoneNumberBlur={validatePhone}
                          />
                          {/* {phoneError && (
                                                    <div className="input-error">
                                                        Phone number is required
                                                    </div>
                                                )} */}
                        </div>
                        <div className="col-span-6 lg:col-span-3">
                          <label
                            htmlFor="email"
                            className="block text-xs primary-color "
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="dare@thomas.com"
                            className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                            onChange={(e) => setnewAddressEmail(e.target.value)}
                            // onBlur={formik.handleBlur}
                            value={newAddressEmail}
                          />
                          {/* {formik.touched.email &&
                                                formik.errors.email ? (
                                                    <div className="input-error">
                                                        {formik.errors.email}
                                                    </div>
                                                ) : null} */}
                        </div>
                      </div>
                    </div>

                    <div className="info-holder text-xs px-4 py-4 mb-3">
                      <p className="font-semibold primary-color ">
                        Delivery address
                      </p>

                      <div className="grid grid-cols-6 gap-3 mt-3">
                        <div className=" col-span-6 ">
                          <label
                            htmlFor="lga"
                            className="block text-xs primary-color "
                          >
                            Country
                          </label>
                          <select
                            id="lga"
                            className="mt-1 block w-full info-select py-2 px-2  bg-white  focus:outline-none"
                            value={newAddressCountry}
                            onChange={(e) =>
                              setnewAddressCountry(e.target.value)
                            }
                          >
                            <option value="">Chooose Country</option>
                            {options.map((country) => (
                              <option key={country.label} value={country.label}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-span-6 lg:col-span-3">
                          <label
                            htmlFor="state"
                            className="block text-xs primary-color "
                          >
                            State
                          </label>
                          <input
                            type="text"
                            id="state"
                            className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                            value={newAddressState}
                            onChange={(e) => setnewAddressState(e.target.value)}
                          />
                        </div>

                        <div className=" col-span-6 lg:col-span-3">
                          <label
                            htmlFor="lga"
                            className="block text-xs primary-color "
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                            value={newAddressCity}
                            onChange={(e) => setnewAddressCity(e.target.value)}
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="lga"
                            className="block text-xs primary-color "
                          >
                            Street Address
                          </label>
                          <textarea
                            rows="2"
                            cols="1"
                            id="streetAddress"
                            name="streetAddress"
                            id="address"
                            className="mt-1 info-area block w-full py-2 px-2 focus:outline-none"
                            placeholder="Enter street address"
                            onChange={(e) =>
                              setnewAddressStreet(e.target.value)
                            }
                            // onBlur={formik.handleBlur}
                            value={newAddressStreet}
                          ></textarea>
                          {/* {formik.touched.streetAddress &&
                                                formik.errors.streetAddress ? (
                                                    <div className="input-error">
                                                        {formik.errors.streetAddress}
                                                    </div>
                                                ) : null} */}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => addNewAddress()}
                        type="button"
                        className="uppercase focus:outline-none primary-btn text-white font-10 font-semibold mt-4 py-1.5 px-6"
                      >
                        Proceed
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transaction;
