import Meta from "../../../src/components/Head/Meta";
import {useRouter} from 'next/router';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const SignupOptions = () => {
    //redirect
    const router = useRouter();

    //Google Auth
    const googleClientId = "675924797749-6vkjedqseo4ivamu7u2b2o3psb7tvaur.apps.googleusercontent.com";

    const onGoogleLoginSuccess = (res) => {
        console.log("Login Successful", res.profileObj)
    }
    const onGoogleFailureSuccess = (res) => {
        console.log("Login Failed", res)
    }
    const onGoogleSignoutSuccess = () => {
        console.log("Sign out Successful")
    }

    //Facebook Auth
    const responseFacebook = (res) => {
        console.log("Facebook login result", res);
    } 

    const facebookClicked = (data) => {
        console.warn(data)
    }

    return ( 
        <section className="w-full">
            <Meta />
            <main>
                <div className="signup-bg py-20 ">
                    <div className="form-holder w-11/12 lg:w-3/12 md:w-2/5  mx-auto mt-20 py-12 px-12">
                        <div className="text-center">
                            <p className="text-sm primary-color font-medium">Select an option to sign up</p>
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
                                cookiePolicy={'single_host_origin'}
                                style={{"border":"1px solid blue", "background-color": "black"}}
                            ></GoogleLogin>
                            {/* <button type="button" className="focus:outline-none mb-2.5 flex items-center px-2.5 w-full options-btn primary-color text-xs">
                                <span className="mr-3">
                                    <img src="../assets/img/vectors/facebook-icon-blue.svg" alt="facebook-icon" />
                                </span>
                                Sign up with Facebook 
                            </button> */}
                            <FacebookLogin
                                appId="1014302915998441"
                                autoLoad={false}
                                fields="name,email,picture"
                                onClick={facebookClicked}
                                callback={responseFacebook} 
                                icon="fa-facebook"
                                cssClass="facebook-btn"
                            />
                            <button type="button" className="focus:outline-none mb-2.5 flex items-center px-2.5 w-full options-btn primary-color text-xs" onClick={() => {router.push("/auth/signup/email")}}>
                                <span className="mr-3">
                                    <img src="../assets/img/vectors/email-icon-red.svg" alt="facebook-icon" /> 
                                </span> 
                                Sign up with Email
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </section>
     );
}
 
export default SignupOptions;
