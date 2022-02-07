// import Meta from "../../../src/components/Head/Meta"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { enviroment } from "../src/components/enviroment";
import Meta from "../src/components/Head/Meta";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from "react-redux";
import { selectToken } from "../redux/reducers/userReducer";
import { logIn, logOut } from "../redux/actions/carsAction";
import Link from "next/link";

const VerifyPhone = () => {
    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [id, setid] = useState(null);
    const [userId, setuserId] = useState(null);
    const [phoneNumber, setphoneNumber] = useState(null);
    //Redirect
    const router = useRouter();
    
    useEffect(() => {
        retrieveId()
        return () => {
            retrieveId()
        }
    }, [])


    const retrieveId = () => {
        const data = localStorage.getItem("user");
        if(!data) {
            return
        }
        const item = JSON.parse(data);

        setid(item?.userId);
        setuserId(item?.userId)
        setphoneNumber(item?.phoneNumber)

    }

    const toastError = () =>
        toast.error(`${error ? error : "Could not process request"}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const toastSuccess = () =>
        toast.success("Email sent for password reset", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });





    // let min = 6;
    const formik = useFormik({
        initialValues: {
            code: "",
        },
        validationSchema: Yup.object({
            code: Yup.string()
                .required("OTP is required")
        }),
        onSubmit: (values) => {
            // notify()
            setisLoading(true);
            seterror(null);
            console.log(values);

            fetch(enviroment.BASE_URL + "auth/user/verification/sms/" + id, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })
                .then((res) => {
                    if (!res.ok) {
                        setisLoading(false);
                        throw Error("Could not login");
                    }
                    setisLoading(false);
                    return res.json();
                })
                .then((data) => {
                    if (data?.error) {
                        // seterror(data?.message);
                        toast.error(data?.message);
                    } else {
                        seterror(data?.message);
                        toast.success(data?.message);
                        setTimeout(() => {
                            router.push('/vin')
                        }, 1000);
                    }

                })
                .catch((e) => {
                    // seterror(e.message)
                    setisLoading(false);
                    console.log(e.message);
                });
        },
    });

    const resendOTP = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            phoneNumber: phoneNumber
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(enviroment.BASE_URL + "auth/user/verification/sender/" + userId, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            // router.push("/auth/verifyphone");
            toast.success("OTP has been resent")
        })
        .catch(error => console.log('error', error));
    }

    return (
        <>
            <section className="w-full">
                <Meta />
                <main>
                    <ToastContainer />
                    <div className="bg-white py-20">
                        <div className="options-holder mx-auto mt-20 p-5 lg:px-24 lg:py-14">
                            <div className="text-center">
                                <img src="../../img/otp.svg" className="inline-block mb-6" alt="" />
                                <p className="otp-text mb-2">Enter your code</p>
                                <p className="text-xs primary-color font-medium">
                                Enter the code we sent to your phone to verify your phone number
                                </p>
                            </div>

                            <form
                                className="mt-2.5"
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="flex w-full flex-wrap lg:flex-nowrap md:flex-nowrap lg:mb-5 justify-center">
                                    <div className="flex flex-col mb-3 w-full lg:w-8/12 lg:mb-0">
                                        {/* <label className="pb-1 sec-black font-10 font-medium">
                                            Code
                                        </label> */}
                                        <input
                                            className="login-control focus:outline-none px-2"
                                            id="code"
                                            name="code"
                                            type="tel"
                                            maxLength="5"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.otp}
                                        />
                                        {formik.touched.code &&
                                        formik.errors.code ? (
                                            <div className="input-error">
                                                {formik.errors.code}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="text-center text-xs font-medium uppercase primary-text">
                                    <p onClick={resendOTP} className="inline cursor-pointer">Resend OTP</p>
                                </div>

                                <div className="text-center pt-3">
                                    
                                    <button
                                        type="submit"
                                        className="focus:outline-none primary-btn text-white text-xs font-semibold uppercase py-2.5 px-4 w-full lg:w-1/3 md:w-1/2"
                                    >
                                        {isLoading ? (
                                            <ClipLoader
                                                color="#fff"
                                                size={20}
                                                loading
                                            />
                                        ) : (
                                            "Confirm"
                                        )}{" "}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default VerifyPhone
