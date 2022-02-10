import Meta from "../../../src/components/Head/Meta";
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { enviroment } from "../../../src/components/enviroment";
import { connect, useSelector } from "react-redux";
import { selectToken } from "../../../redux/reducers/userReducer";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginOptions = ({ beginLogin }) => {
    //redirect
    const router = useRouter();

    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [addEmail, setaddEmail] = useState(false)
    const [facebookRes, setfacebookRes] = useState(null)

    const user = useSelector(selectToken);
    useEffect(() => {
        if (user.login) {
            router.push("/vin");
        }
    }, []);

    const toastError = () =>
        toast.error(error ? `${error}` : "Could not log in", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const toastSuccess = () =>
        toast.success(`${message ? message : "Login successfull"}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    //Google Auth
    const googleClientId =
        "567677744916-439tbe6ok8mmf823hg4uu75rqs918oj0.apps.googleusercontent.com";

    const onGoogleLoginSuccess = (res) => {
        const googleProfile = {
            email: res.profileObj.email,
            googleId: res.profileObj.googleId,
        };

        // console.log("Login Successful", res.profileObj)
        fetch(enviroment.BASE_URL + "auth/login/google", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            body: JSON.stringify(googleProfile),
        })
            .then((res) => {
                if (!res.ok) {
                    setisLoading(false);
                    //   toastError()
                }
                setisLoading(false);
                return res.json();
            })
            .then((data) => {
                if (data?.error) {
                    seterror(data?.message);
                    toast.error(data?.message);
                } else {
                    setmessage(data?.message);
                    toast.success(data?.message);
                    const now = new Date();
                    //save data to local storage
                    const item = {
                        userToken: data.data._token,
                        userId: data.data.user._id,
                        userName: data.data.user.profile.firstName,
                        email: data.data.user.email,
                        phone: data.data.user.profile.phoneNumber,
                        expiry: now.getTime() + 3600000,
                        emailVerified: data.data.user.emailVerified
                    };
                    localStorage.setItem("user", JSON.stringify(item));
                    router.push("/vin");
                }
                //save data to store
                beginLogin({
                    token: data.data._token,
                    login: true,
                });
            })
            .catch((e) => {
                // seterror(e.message)
                setisLoading(false);
                console.log(e.message);
            });
    };
    const onGoogleFailureSuccess = (res) => {
        console.log("Login Failed", res);
    };
    const onGoogleSignoutSuccess = () => {
        console.log("Sign out Successful");
    };

    //Facebook Auth
    const responseFacebook = (res) => {
        console.log("Facebook login result", res);
        if(res.status == 'not_authorized') return;
        setaddEmail(true)
        setfacebookRes(res)
        
    };

    const facebookClicked = (data) => {
        console.warn(data);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required")
                .email("Enter valid email")
        }),
        onSubmit: (values) => {
            // notify()
            setisLoading(true);
            seterror(null);
            console.log(values);

            accessWithFacebook(values)
        },
    });

    const accessWithFacebook = (values) => {
        const facebookProfile = {
            email: values.email,
            fullName: facebookRes.name,
            facebookId: facebookRes.userID,
        };

        // console.log("Login Successful", res.profileObj)

        fetch(enviroment.BASE_URL + "auth/register/facebook", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            body: JSON.stringify(facebookProfile),
        })
            .then((res) => {
                if (!res.ok) {
                    setisLoading(false);
                    //   seterror(res.statusText)
                    //   toastError()
                }
                setisLoading(false);
                return res.json();
            })
            .then((data) => {
                if (data?.error) {
                    seterror(data?.message);
                    toastError();
                } else {
                    setmessage(data?.message);
                    toastSuccess();
                    const now = new Date();
                    const item = {
                        userToken: data.data._token,
                        userName: data.data.user.profile.firstName,
                        userId: data.data.user._id,
                        userEmail: data.data.user.email,
                        expiry: now.getTime() + 3600000,
                        emailVerified: data.data.user.emailVerified
                    };
                    localStorage.setItem("temp", JSON.stringify(item));
                    router.push("/auth/signup/onboarding");
                }
            })
            .catch((e) => {
                setisLoading(false);
                console.log(e.message);
            });
    }



    return (
        <section className="w-full">
            <Meta />
            <main>
                <ToastContainer />
                {!addEmail ? (
                    <div className="signup-bg py-20 ">
                        <div className="form-holder w-11/12 lg:w-3/12 md:w-2/5  mx-auto mt-20 py-12 px-12">
                            <div className="text-center">
                                <p className="text-sm primary-color font-medium">
                                    Select an option to log in
                                </p>
                            </div>
                            <div className="mt-3 signup-container">
                                {/* <button type="button" className="focus:outline-none mb-2.5 flex items-center px-2.5 w-full options-btn primary-color text-xs">
                                    <span className="mr-3">
                                        <img src="../assets/img/vectors/google-icon.svg" alt="facebook-icon" />
                                    </span> 
                                    Sign up with Google
                                </button> */}
                                <GoogleLogin
                                    clientId={googleClientId}
                                    buttonText="Log in with Google"
                                    onSuccess={onGoogleLoginSuccess}
                                    onFailure={onGoogleFailureSuccess}
                                    cookiePolicy={"single_host_origin"}
                                    style={{
                                        border: "1px solid blue",
                                        "background-color": "black",
                                    }}
                                ></GoogleLogin>
                                {/* <button type="button" className="focus:outline-none mb-2.5 flex items-center px-2.5 w-full options-btn primary-color text-xs">
                                    <span className="mr-3">
                                        <img src="../assets/img/vectors/facebook-icon-blue.svg" alt="facebook-icon" />
                                    </span>
                                    Sign up with Facebook 
                                </button> */}
                                <FacebookLogin
                                    appId="1364176120701351"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    onClick={facebookClicked}
                                    callback={responseFacebook}
                                    icon="fa-facebook"
                                    cssClass="facebook-btn"
                                    textButton="Log in with Facebook"
                                    authType="reauthenticate"
                                    scope="public_profile,email"
                                />
                                <button
                                    type="button"
                                    className="focus:outline-none mb-2.5 flex items-center px-2.5 w-full options-btn primary-color text-xs"
                                    onClick={() => {
                                        router.push("/auth/login/email");
                                    }}
                                >
                                    <span className="mr-3">
                                        <img
                                            src="../assets/img/vectors/email-icon-red.svg"
                                            alt="facebook-icon"
                                        />
                                    </span>
                                    Log in with Email
                                </button>
                                <div className="text-center">
                                    <p
                                        onClick={() => router.push("/auth/signup")}
                                        style={{ color: "#0C74D4" }}
                                        className="font-11 cursor-pointer mt-8"
                                    >
                                        Or create an account
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : (
                    <div className="bg-white py-20">
                        <div className="options-holder mx-auto mt-20 p-5 lg:px-24 lg:py-14">
                            <div className="text-center">
                                {/* <img src="../../img/otp.svg" className="inline-block mb-6" alt="" /> */}
                                <p className="fb-text mb-2">Enter your email</p>
                                {/* <p className="text-xs primary-color font-medium">
                                Enter the code we sent to your inbox to verify your email address
                                </p> */}
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
                                            className="login-control focus:outline-none px-2 text-sm"
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
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
                )}
            </main>
        </section>
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
)(LoginOptions);
