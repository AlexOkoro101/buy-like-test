import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { enviroment } from "../../src/components/enviroment";
import { usePaystackPayment } from "react-paystack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const Transaction = () => {
    const router = useRouter();
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

    const [token, settoken] = useState(null)
    const [userEmail, setuserEmail] = useState(null);
    const [userPhone, setuserPhone] = useState(null);
    const [userName, setuserName] = useState(null);
    const [userId, setuserId] = useState(null);
    const carId = router.query.id;
    const [carDetails, setcarDetails] = useState(null)
    const [sectabActive, setsectabActive] = useState(false);
    const [bidID, setbidID] = useState(null);
    const [bnvehicleID, setbnvehicleID] = useState(null);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setemail] = useState("");
    const [street, setstreet] = useState("");
    const phoneNumberRef = useRef(null);
    const [confimation, setconfimation] = useState(false);
    const [refNumber, setrefNumber] = useState(null);
    const referenceNumber = () => {
        return "bld" + Math.floor(Math.random() * 1000000000 + 1);
    };
    const config = {
        reference: referenceNumber(),
        email: `${userEmail}`,
        amount: /*amount * 100*/ 100000,
        publicKey: "pk_test_c9e721436fd837814692c450db204c33326ff6d1",
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        setrefNumber(reference.trxref)
        console.log("vehicle ID", bnvehicleID)
        console.log("bid ID", bidID)
        setstate(3)
    
        
        
    };
    useEffect(() => {
        if(refNumber === null) {
                return;
        } else {
            console.log("verify payment")
            verifyPaystackPayment(refNumber);
        }
    }, [confimation, state, refNumber])

    
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
        // setuserId(item?.userId);
        setuserEmail(item?.userEmail);
        setuserPhone(item?.phoneNumber);
    }; //Get Data from local Storage

    useEffect(() => {
        retrieveData();
        return retrieveData;
    }, [router.pathname, token]);

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
            price: carDetails?.buyNowPrice,
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
            bidAmount: carDetails?.bidAmount,
            owner: carDetails?.owner,
            facilitationLocation: carDetails?.facilitationLocation,
            Vehicle_location: carDetails?.Vehicle_location,
            images: carDetails?.images,
            trucking: carDetails?.trucking,
            shipping: carDetails?.shipping,
        };

        console.log("bid object", bidObject)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(bidObject),
            redirect: 'follow'
          };

        //Add car to buy now
        fetch(enviroment.BASE_URL + "bids/buy-now", requestOptions)
        .then(response => response.text())
        .then(result => {
            // console.log(result)
            const resultFormat = JSON.parse(result)
            console.log("bnf", resultFormat)
            if(resultFormat.error === false) {
                getBidId(resultFormat)
                setbnvehicleID(resultFormat.data._id)
                initializePayment(
                    onSuccess,
                    onClose
                );
                setconfimation(true)
            } else {
                buyNowInfo();
            }

        })
        .catch(error => console.log('error', error));
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
            amount: carDetails?.bidAmount,
            amountBalance: Number(carDetails?.bidAmount) - 1000,
            reference: ref,
            currency: "",
            metadata: "",
            balance: Number(carDetails?.bidAmount) - 1000,
            status: verifiedData.data.status,
            statusTrans: verifiedData.data.data.status,
        });
        console.log("frontend data", raw)

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch(enviroment.BASE_URL + "transactions/payment", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const resultFormat = JSON.parse(result)
                console.log("front end payment", resultFormat)
                if(resultFormat.error === false) {
                    buyNowSuccess();
                }
            })
            .catch((error) => console.log("error", error));
    };

    const getBidId = (bnfResult) => {
        const vehicleID = bnfResult.data._id;
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch(enviroment.BASE_URL + "bids/vehicle/" + vehicleID, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log("gbID", result)
            const resultFormat = JSON.parse(result)
            setbidID(resultFormat.data._id)
        })
        .catch(error => console.log('error', error));
    }


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
            tablinks[i].className = tablinks[i].className.replace(
                " active",
                ""
            );
        }
        evt.currentTarget.className += " active";
    };


    const retrieveCar = () => {
        const activeCar = localStorage.getItem("buyNowData");
        if (!activeCar) {
            router.back()
            return null;
        }
        
        const now = new Date();
        const item = JSON.parse(activeCar)
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            window.localStorage.clear();
            return null;
        }
        setcarDetails(item);
    }; //Get Data from local Storage

    useEffect(() => {
        retrieveCar()
        console.log("car detail", carDetails)
    }, [])

    const phoneNumberChange = () => {
        setphoneNumber(
            `+${phoneNumberRef.current.selectedCountryData.dialCode}` +
                `${phoneNumberRef.current.state.value}`
        );
    };

    const submitCustomerDetails = (e) => {
        e.preventDefault()
        if (!firstName ||  !lastName || !email || !phoneNumber || !street) {
            return;
        }
        setstate(2)
    }

    return (
        <div>
            <ToastContainer />
            <div className="flex justify-center pt-16">
                <div className="mx-auto flex-wrap lg:flex-nowrap flex page-holder ">

                <aside className="deposit-holder lg:h-screen px-4 md:px-2 lg:pl-24 lg:pr-9 pt-9 pb-4">
                    {
                        carDetails ? (
                            <>
                                <p className="primary-color text-sm font-bold mb-3">Make Deposit</p>
                                <div
                                    className="grid grid-cols-6 lg:grid-cols-1 items-center  gap-6 md:gap-3 lg:gap-1 car-holder py-2.5">
                                    <span className="col-span-3 inline-block overflow-hidden rounded-md">
                                        <img className="w-full" src={carDetails?.images[0]?.image_largeUrl} alt="" />
                                    </span>
                                    <div className="col-span-3">
                                        <p className="md:text-xs  lg:mt-3 primary-black font-medium font-10 uppercase">
                                            {carDetails?.year} {""} {carDetails?.make} {""} {carDetails?.Model}
                                        </p>
                                        <p className="primary-black font-medium py-1 font-11 uppercase">
                                            {carDetails?.odometer.toLocaleString()} mi
                                        </p>
                                        <p className="primary-black font-medium font-11 uppercase">
                                            vin: {carDetails?.vin}
                                        </p>
                                    </div>
                                </div>

                                <table className="min-w-full ">
                                    <tbody>
                                        {carDetails?.trucking && (
                                            <tr className="detail-row mb-2">
                                                <td className="sec-black font-10 font-semibold py-1.5">Trucking</td>
                                                <td className="font-10 primary-black font-normal py-1.5">${carDetails?.trucking}</td>
                                            </tr>

                                        )}

                                        {carDetails?.shipping && (
                                            <tr className="detail-row mb-2">
                                                <td className="sec-black font-10 font-semibold py-1.5">Shipping</td>
                                                <td className="font-10 primary-black font-normal py-1.5">${carDetails?.shipping}</td>
                                            </tr>

                                        )}

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black font-10 font-semibold py-1.5">Clearing</td>
                                            <td className="font-10 primary-black font-normal py-1.5">N/A</td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black font-10 font-semibold py-1.5">Service Fee</td>
                                            <td className="font-10 primary-black font-normal py-1.5">$800</td>
                                        </tr>

                                        <tr className="detail-row mb-2 ">
                                            <td className="sec-black font-10 font-semibold py-1.5 total-border">Total</td>
                                            <td className="font-10 primary-black font-normal py-1.5 total-border">${carDetails?.bidAmount}</td>
                                        </tr>

                                        <tr className="detail-row mb-2">
                                            <td className="sec-black font-10 font-semibold py-1.5">Deposit</td>
                                            <td className="font-10 primary-black font-normal py-1.5">$1,000</td>
                                        </tr>

                                    </tbody>
                                </table>
                                
                            </>
                        ) 
                        : 
                        (
                            <>
                                <p className="font-10 sec-black">Loading car details...</p>
                            </>
                        )
                    }
                </aside>

                    <section className="px-3 md:ml-5 lg:mx-12 lg:px-14 xl:px-28  ">
                        <div className="py-6 max-w-3xl mx-auto">
                            <div className="w-full flex uppercase ">
                                <div
                                    
                                    className={"details-tab flex-1 flex justify-center " + ( state === 1 ? "active" : "")}
                                >
                                    <p className="py-2.5">1 customer info</p>
                                </div>
                                <div
                                    
                                    className={"details-tab flex-1 flex justify-center font-semibold py-0.5 " + ( state === 2 ? "active" : "")}
                                >
                                    <p className="py-2">2 deposit payment</p>
                                </div>
                                <div
                                    
                                    className={"details-tab flex-1 flex justify-center font-semibold py-0.5 "  + ( state === 3 ? "active" : "")}
                                >
                                    <p className="py-2">3 confirmation</p>
                                </div>
                            </div>

                            <div className="mt-5">
                                {state === 1 && (
                                    <form
                                        className="tabcontent mt-5 "
                                        id="customer-info"
                                        onSubmit={submitCustomerDetails}
                                    >
                                        <div className="info-holder font-10 px-4 py-4 mb-3">
                                            <p className="font-semibold primary-color  ">
                                                Personal Details
                                            </p>

                                            <div className="grid grid-cols-6 gap-3 mt-3">
                                                <div className="col-span-6 lg:col-span-3">
                                                    <label
                                                        htmlFor="name"
                                                        className="block font-10 primary-color "
                                                    >
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Dare"
                                                        className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                                        required
                                                        value={firstName}
                                                        onChange={(e) => setfirstName(e.target.value)}
                                                    />
                                                </div>

                                                <div className=" col-span-6 lg:col-span-3 ">
                                                    <label
                                                        htmlFor="name"
                                                        className="block font-10 primary-color "
                                                    >
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Thomas"
                                                        className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                                        required
                                                        value={lastName}
                                                        onChange={(e) => setlastName(e.target.value)}
                                                    />
                                                </div>

                                                <div className="col-span-6 lg:col-span-3 relative ">
                                                    <label
                                                        htmlFor="phone"
                                                        className="block font-10 primary-color "
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
                                                    />
                                                </div>
                                                <div className="col-span-6 lg:col-span-3">
                                                    <label
                                                        htmlFor="email"
                                                        className="block font-10 primary-color "
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        placeholder="dare@thomas.com"
                                                        className="mt-1 block w-full info-text py-2 px-2  bg-white  focus:outline-none"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setemail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="info-holder font-10 px-4 py-4 mb-3">
                                            <p className="font-semibold primary-color ">
                                                Delivery address
                                            </p>

                                            <div className="grid grid-cols-6 gap-3 mt-3">
                                                <div className=" col-span-6 ">
                                                    <label
                                                        htmlFor="lga"
                                                        className="block font-10 primary-color "
                                                    >
                                                        Country
                                                    </label>
                                                    <select
                                                        id="lga"
                                                        className="mt-1 block w-full info-select py-2 px-2  bg-white  focus:outline-none"
                                                    >
                                                        <option>Nigeria</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>
                                                <div className="col-span-6 lg:col-span-3">
                                                    <label
                                                        htmlFor="state"
                                                        className="block font-10 primary-color "
                                                    >
                                                        State
                                                    </label>
                                                    <select
                                                        id="state"
                                                        className="mt-1 block w-full info-select py-2 px-2  bg-white  focus:outline-none"
                                                    >
                                                        <option>Lagos</option>
                                                        <option>Abuja</option>
                                                        <option>Rivers</option>
                                                    </select>
                                                </div>

                                                <div className=" col-span-6 lg:col-span-3">
                                                    <label
                                                        htmlFor="lga"
                                                        className="block font-10 primary-color "
                                                    >
                                                        Local Govenrment Area
                                                    </label>
                                                    <select
                                                        id="lga"
                                                        className="mt-1 block w-full info-select py-2 px-2  bg-white  focus:outline-none"
                                                    >
                                                        <option>
                                                            Select Local
                                                            Government Area
                                                        </option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6">
                                                    <label
                                                        htmlFor="lga"
                                                        className="block font-10 primary-color "
                                                    >
                                                        Street Address
                                                    </label>
                                                    <textarea
                                                        rows="2"
                                                        cols="1"
                                                        id="address"
                                                        className="mt-1 info-area block w-full py-2 px-2 focus:outline-none"
                                                        placeholder="Enter street address"
                                                        required
                                                        value={street}
                                                        onChange={(e) => setstreet(e.target.value)}
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <button
                                                onClick={(e) => 
                                                {
                                                    submitCustomerDetails(e)
                                                    }}
                                                // onClick={(e) => {
                                                //     setsectabActive(true)
                                                //     setstate(2)
                                                //     }}
                                                type="button"
                                                className="uppercase focus:outline-none primary-btn text-white font-10 font-semibold mt-4 py-1.5 px-6"
                                            >
                                                Proceed
                                            </button>
                                        </div>
                                    </form>
                                )}
                                {state === 2 && (
                                    <div
                                        className="tabcontent mt-5"
                                        id="deposit"
                                    >
                                        <div className="info-holder font-10 py-24 mb-3 ">
                                            <div className="flex justify-center px-4 ">
                                                <form className="w-full">
                                                    <div className="flex  justify-center items-center">
                                                        <button
                                                            onClick={() => {
                                                                // initializePayment(
                                                                //     onSuccess,
                                                                //     onClose
                                                                // );
                                                                buyNowFunction()
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
                                                </form>
                                            </div>
                                        </div>
                                        <div className="info-holder font-10   py-4 pb-5 mb-3 ">
                                            <div className="transfer-payment px-4">
                                                <p className="text-xs font-semibold">
                                                    Or make transfer payment
                                                    using these details
                                                </p>
                                                <table className="mt-2 min-w-full">
                                                    <tbody className="">
                                                        <tr>
                                                            <th className="text-left">
                                                                Bank Name
                                                            </th>
                                                            <th className="text-left">
                                                                Account Number
                                                            </th>
                                                            <th className="text-left">
                                                                Account Name
                                                            </th>
                                                            <th className="text-left">
                                                                REF
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Name of Bank
                                                            </td>
                                                            <td>0123456789</td>
                                                            <td>0123456789</td>
                                                            <td>
                                                                SJTKPOLVAX123
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {state === 3 && (
                                    <div
                                        className="confirm-holder tabcontent "
                                        id="confirmation"
                                    >
                                        <div className="flex justify-center mt-16">
                                            <img src="../../assets/img/vectors/check.svg" />
                                        </div>

                                        <div className="text-center mt-8">
                                            <p className="primary-color text-sm font-semibold">
                                                Your payment has been sent
                                            </p>
                                            <p className="pt-4 font-10 sec-black px-5 leading-5 lg:px-20">
                                                Your confirmation number is
                                                12A34A56C. You will be sent a
                                                link to pay the balance after
                                                the bid is won.
                                            </p>
                                            <p className="pt-4 font-10 sec-black px-5 leading-5 lg:px-20">
                                                You can increase your chances of
                                                getting a car by selecting
                                                multiple cars for us to bid on
                                                for you at no extra cost.
                                            </p>
                                        </div>

                                        <div className="flex justify-center mt-5 mb-16">
                                            <button
                                                onClick={() => {
                                                    router.push('/vin')
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
            </div>
        </div>
    );
};

export default Transaction;
