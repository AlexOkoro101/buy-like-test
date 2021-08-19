import Meta from "../../../src/components/Head/Meta";

const SignupOptions = () => {
    return ( 
        <section className="w-full">
            <Meta />
            <main>
                <div className="signup-bg py-20 ">
                    <div className="form-holder w-11/12 lg:w-3/12 md:w-2/5  mx-auto mt-20 py-12 px-12">
                        <div className="text-center">
                            <p className="text-sm primary-color font-medium">Select an option to sign up</p>
                        </div>
                        <div className="mt-3">
                            <button type="button" className="focus:outline-none mb-2.5 flex items-center px-2.5 w-full options-btn primary-color text-xs">
                                <span className="mr-3">
                                    <img src="../assets/img/vectors/google-icon.svg" alt="facebook-icon" />
                                </span> 
                                Sign up with Google
                            </button>
                            <button type="button" className="focus:outline-none mb-2.5 flex items-center px-2.5 w-full options-btn primary-color text-xs">
                                <span className="mr-3">
                                    <img src="../assets/img/vectors/facebook-icon-blue.svg" alt="facebook-icon" />
                                </span>
                                Sign up with Facebook 
                            </button>
                            <button type="button" className="focus:outline-none mb-2.5 flex items-center px-2.5 w-full options-btn primary-color text-xs">
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
