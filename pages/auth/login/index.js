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

const LoginOptions = ({ beginLogin }) => {
    //redirect
    const router = useRouter();

    const [error, seterror] = useState(null);
    const [message, setmessage] = useState(null);
    const [isLoading, setisLoading] = useState(false);

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
                    toastError();
                } else {
                    setmessage(data?.message);
                    toastSuccess();
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
        // toastSuccess()
        // console.log("Facebook login result", res);
        // router.push('/auth/signup/onboarding')

        const facebookProfile = {
            email: res.email,
            facebookId: res.userID,
        };

        // console.log("Login Successful", res.profileObj)

        fetch(enviroment.BASE_URL + "auth/login/facebook", {
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
                    seterror(data?.message);
                    toastSuccess();
                    const now = new Date();
                    const item = {
                        userToken: data.data._token,
                        userId: data.data.user._id,
                        userName: data.data.user.profile.firstName,
                        phone: data.data.user.profile.phoneNumber,
                        email: data.data.user.email,
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
                setisLoading(false);
            });
    };

    const facebookClicked = (data) => {
        console.warn(data);
    };

    return (
        <section className="w-full">
            <Meta />
            <main>
                <ToastContainer />
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
                                appId="348837593684517"
                                autoLoad={false}
                                fields="name,email,picture"
                                onClick={facebookClicked}
                                callback={responseFacebook}
                                icon="fa-facebook"
                                cssClass="facebook-btn"
                                textButton="Log in with Facebook"
                                authType="reauthenticate"
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
