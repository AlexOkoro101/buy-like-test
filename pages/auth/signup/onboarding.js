import Meta from "../../../src/components/Head/Meta";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { enviroment } from "../../../src/components/enviroment";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
import { selectToken } from "../../../redux/reducers/userReducer";

const OnBoarding = () => {
    const [tempToken, settempToken] = useState(null)
    const [userCountry, setuserCountry] = useState(null)

    const checkTemp = () => {
        const tempData = localStorage.getItem("temp");
        const item = JSON.parse(tempData)
        settempToken(item?.userToken)
        if (!tempData) {
            router.push('/auth/signup');
            return;
        }
    }

    const retrieveCountry = () => {
        const country = localStorage.getItem("userCountry")
        if(!country) return

        const item = JSON.parse(country)
        setuserCountry(item)
        formik.values.countrysytem = item
    }
    
    useEffect(() => {
        retrieveCountry()
        console.log("country", userCountry)
        return () => {
            retrieveCountry()
        }
    }, [tempToken])

    useEffect(() => {
        checkTemp()
        return () => {
            checkTemp()
        }
    }, [])

    const retrieveTemp = (data) => {
        const tempData = localStorage.getItem("temp");
        if (!tempData) {
            return;
        }
        const item = JSON.parse(tempData);
        item.phoneNumber = data.data.user.profile.phoneNumber;

        const now = new Date();
        
        localStorage.setItem("user", JSON.stringify(item))
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            window.localStorage.clear();
            return null;
        }
        sendOTP(item, data)
    }

    const sendOTP = (item, data) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            phoneNumber: data.data.user.profile.phoneNumber
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(enviroment.BASE_URL + "auth/user/verification/sender/" + item.userId, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            router.push("/verifyphone");
        })
        .catch(error => console.log('error', error));
    }
    //router
    const router = useRouter();

    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    const token = useSelector(selectToken);
    useEffect(() => {
        if (token.login) {
            router.push("/vin");
        }
    }, []);

    const toastError = () =>
        toast.error(`${error ? error : "Could not update account"}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const toastSuccess = () =>
        toast.success(`${error ? error : "Account updated"}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    //action access
    const dispatch = useDispatch();

    const [phone, setphone] = useState("");
    const [phoneError, setphoneError] = useState(null);
    const phoneRef = useRef(null);

    const validatePhone = () => {
        if (!phone) {
            setphoneError(true);
        } else {
            console.log(phone);
        }
    };
    const changeNumber = () => {
        formik.values.phoneNumber =
            `${phoneRef.current.selectedCountryData.dialCode}` +
            `${phoneRef.current.state.value}`;
        setphone(
            `${phoneRef.current.selectedCountryData.dialCode}` +
                `${phoneRef.current.state.value}`
        );
        if (phoneRef) {
            setphoneError(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            address: "",
            state: "",
            phoneNumber: "123",
            city: "",
            countrysytem: userCountry
        },
        validationSchema: Yup.object({
            address: Yup.string().required("Address is required"),
            state: Yup.string().required("State is required"),
            phoneNumber: Yup.string().required("Phone number is required"),
            city: Yup.string().required("City is required"),
        }),
        onSubmit: (values) => {
            console.log(values)
            setisLoading(true);
            seterror(null);
            fetch(enviroment.BASE_URL + "auth/user/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tempToken}`,
                },
                credentials: "same-origin",
                body: JSON.stringify(values),
            })
                .then((res) => {
                    if (!res.ok) {
                        setisLoading(false);
                        seterror(res.statusText);
                        toastError();
                        throw Error("Could not make update");
                    }
                    setisLoading(false);
                    return res.json();
                })
                .then((data) => {
                    if (data?.error) {
                        seterror(data?.message);
                        toastError();
                    } else {
                        seterror(data?.message);
                        toastSuccess();
                        retrieveTemp(data)
                        
                    }
                })
                .catch((e) => {
                    // seterror(e.message)
                    setisLoading(false);
                    console.log(e.message);
                });
        },
    });

    return (
        <section className="w-full">
            <Meta />
            <main>
                <ToastContainer />
                <div className="signup-bg py-20">
                    <div className="options-holder  mx-auto mt-20 p-5 lg:p-9">
                        <div className="text-center">
                            <p className="text-sm primary-color font-medium">
                                Enter these additonal details to complete sign
                                up
                            </p>
                        </div>

                        <form className="mt-8" onSubmit={formik.handleSubmit}>
                            <div className="flex w-full flex-wrap lg:flex-nowrap md:flex-nowrap lg:mb-5">
                                <div className="flex flex-col mb-3 w-full lg:mb-0 ">
                                    <label className="pb-1 sec-black font-10 font-medium">
                                        Address
                                    </label>
                                    <input
                                        className="login-control focus:outline-none px-2"
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="What is your address ?"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.address}
                                    />
                                    {formik.touched.address &&
                                    formik.errors.address ? (
                                        <div className="input-error">
                                            {formik.errors.address}
                                        </div>
                                    ) : null}
                                </div>

                                <div className="flex flex-col mb-3 w-full lg:ml-3.5 md:ml-3.5 lg:mb-0">
                                    <label className="pb-1 sec-black font-10 font-medium">
                                        State
                                    </label>
                                    <input
                                        className="login-control focus:outline-none px-2"
                                        type="text"
                                        id="state"
                                        name="state"
                                        placeholder="What is your state ?"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.state}
                                    />
                                    {formik.touched.state &&
                                    formik.errors.state ? (
                                        <div className="input-error">
                                            {formik.errors.state}
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap lg:flex-nowrap md:flex-nowrap lg:mb-5">
                                <div className="flex flex-col mb-3 w-full lg:w-6/12 lg:mb-0">
                                    <label className="pb-1 sec-black font-10 font-medium">
                                        City
                                    </label>
                                    <input
                                        className="login-control focus:outline-none px-2"
                                        id="text"
                                        name="city"
                                        type="city"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.city}
                                        placeholder="What is your city ?"
                                    />
                                    {formik.touched.city &&
                                    formik.errors.city ? (
                                        <div className="input-error">
                                            {formik.errors.city}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="flex flex-col mb-3 w-full lg:w-6/12  lg:ml-3.5 md:ml-3.5 lg:mb-0 ">
                                    <label className="pb-1 sec-black font-10 font-medium">
                                        Phone number
                                    </label>
                                    <IntlTelInput
                                        ref={phoneRef}
                                        fieldName="phoneNumber"
                                        fieldId="phoneNumber"
                                        preferredCountries={["ng"]}
                                        containerClassName="intl-tel-input"
                                        inputClassName="form-control"
                                        placeholder="905 665 7840"
                                        onPhoneNumberChange={changeNumber}
                                        onPhoneNumberBlur={validatePhone}
                                    />
                                    {phoneError && (
                                        <div className="input-error">
                                            Phone number is required
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="text-center pt-3">
                                <button
                                    type="submit"
                                    className="focus:outline-none primary-btn  text-white font-9 font-semibold uppercase py-2.5 px-4 w-full lg:w-1/3 md:w-1/2"
                                >
                                    {isLoading ? (
                                        <ClipLoader
                                            color="#fff"
                                            size={25}
                                            loading
                                        />
                                    ) : (
                                        "update my account"
                                    )}{" "}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default OnBoarding;
