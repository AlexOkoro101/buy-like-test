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

const SignupOptions = ({ beginLogin }) => {
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
        toast.error(error ? `${error}` : "Could not sign up", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const toastSuccess = () =>
        toast.success(`${message ? message : "Sign up successfull"}`, {
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
            fullName: res.profileObj.name,
            googleId: res.profileObj.googleId,
        };

        // console.log("Login Successful", res.profileObj)

        fetch(enviroment.BASE_URL + "auth/register/google", {
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
                    const item = {
                        userToken: data.data._token,
                        userName: data.data.user.profile.firstName,
                        userId: data.data.user._id,
                        userEmail: data.data.user.email,
                        expiry: now.getTime() + 3600000,
                        emailVerified: data.data.user.emailVerified,
                        phoneVerified: data.data.user.phoneVerified,
                    };
                    localStorage.setItem("temp", JSON.stringify(item));
                    router.push("/auth/signup/onboarding");
                }
            })
            .catch((e) => {
                // seterror(e.message)
                setisLoading(false);
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
        console.log("Facebook sign up result", res);
        // if(res.status == 'not_authorized') return;
        // setaddEmail(true)
        // setfacebookRes(res)
        accessWithFacebook(res)
        
        // toastSuccess()
        // router.push('/auth/signup/onboarding')

        
    };

    const facebookClicked = (data) => {
        console.warn(data);
    };

    // const formik = useFormik({
    //     initialValues: {
    //         email: "",
    //     },
    //     validationSchema: Yup.object({
    //         email: Yup.string()
    //             .required("Email is required")
    //             .email("Enter valid email")
    //     }),
    //     onSubmit: (values) => {
    //         // notify()
    //         setisLoading(true);
    //         seterror(null);
    //         console.log(values);

    //         accessWithFacebook(values)
    //     },
    // });

    const accessWithFacebook = (values) => {
        const facebookProfile = {
            email: values.email,
            fullName: values.name,
            facebookId: values.userID,
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
                    toast.error(data?.message);
                } else {
                    setmessage(data?.message);
                    toast.success(data?.message);
                    const now = new Date();
                    const item = {
                        userToken: data.data._token,
                        userName: data.data.user.profile.firstName,
                        userId: data.data.user._id,
                        userEmail: data.data.user.email,
                        expiry: now.getTime() + 3600000,
                        emailVerified: data.data.user.emailVerified,
                        phoneVerified: data.data.user.phoneVerified,
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
                <div className="signup-bg py-20 ">
                    <div className="form-holder w-11/12 lg:w-3/12 md:w-2/5  mx-auto mt-20 py-12 px-12">
                        <div className="text-center">
                            <p className="text-sm primary-color font-medium">
                                Select an option to sign up
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
                                buttonText="Sign up with Google"
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
                                textButton="Sign up with Facebook"
                                authType="reauthenticate"
                                scope="public_profile,user_friends"
                                
                            />
                            <button
                                type="button"
                                className="focus:outline-none mb-2.5 flex items-center px-2.5 w-full options-btn primary-color text-xs"
                                onClick={() => {
                                    router.push("/auth/signup/email");
                                }}
                            >
                                <span className="mr-3">
                                    <img
                                        src="../assets/img/vectors/email-icon-red.svg"
                                        alt="facebook-icon"
                                    />
                                </span>
                                Sign up with Email
                            </button>
                            <div className="text-center">
                                <p
                                    onClick={() => router.push("/auth/login")}
                                    style={{ color: "#0C74D4" }}
                                    className="font-11 cursor-pointer mt-8"
                                >
                                    Or log in, if you have an account
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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
)(SignupOptions);
