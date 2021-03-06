// import Meta from "../../../src/components/Head/Meta"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { enviroment } from "../../../src/components/enviroment";
import Meta from "../../../src/components/Head/Meta";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/features/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from "react-redux";
import { selectToken } from "../../../redux/reducers/userReducer";
import { logIn, logOut } from "../../../redux/actions/carsAction";
import Link from "next/link";

const ForgotPassword = ({ beginLogin }) => {
    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(false);

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

    //Redirect
    const router = useRouter();


    // let min = 6;
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
        }),
        onSubmit: (values) => {
            // notify()
            setisLoading(true);
            seterror(null);
            console.log(values);

            fetch(enviroment.BASE_URL + "auth/password/forgot", {
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
                        seterror(data?.message);
                        toastError();
                    } else {
                        seterror(data?.message);
                        toastSuccess();
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
        <>
            <section className="w-full">
                <Meta />
                <main>
                    <ToastContainer />
                    <div className="signup-bg py-20">
                        <div className="options-holder  mx-auto mt-20 p-5 lg:p-9">
                            <div className="text-center">
                                <p className="text-sm primary-color font-medium">
                                    Enter the email address associated with the
                                    account
                                </p>
                            </div>

                            <form
                                className="mt-8"
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="flex w-full flex-wrap lg:flex-nowrap md:flex-nowrap lg:mb-5 justify-center">
                                    <div className="flex flex-col mb-3 w-full lg:w-8/12 lg:mb-0">
                                        <label className="pb-1 sec-black font-10 font-medium">
                                            Email ddress
                                        </label>
                                        <input
                                            className="login-control focus:outline-none px-2"
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                            placeholder="What is your email address?"
                                        />
                                        {formik.touched.email &&
                                        formik.errors.email ? (
                                            <div className="input-error">
                                                {formik.errors.email}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="text-center pt-3">
                                    <button
                                        type="submit"
                                        className="focus:outline-none primary-btn text-white font-9 font-semibold uppercase py-2.5 px-4 w-full lg:w-1/3 md:w-1/2"
                                    >
                                        {isLoading ? (
                                            <ClipLoader
                                                color="#fff"
                                                size={20}
                                                loading
                                            />
                                        ) : (
                                            "Submit"
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

export default connect(
    () => ({}),
    (dispatch) => ({
        beginLogin: (payload) =>
            dispatch({
                type: "login",
                payload,
            }),
    })
)(ForgotPassword);
