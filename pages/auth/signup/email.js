import Meta from "../../../src/components/Head/Meta"
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

const EmailSignup = () => {
    return ( 
        <section className="w-full">
            <Meta />
            <main>
                <div className="signup-bg py-20">
                    <div className="options-holder  mx-auto mt-20 p-5 lg:p-9">
                        <div className="text-center">
                            <p className="text-sm primary-color font-medium">Enter your details to sign up with your email address
                            </p>
                        </div>

                        <form className="mt-8">

                            <div className="flex w-full flex-wrap lg:flex-nowrap md:flex-nowrap lg:mb-5">

                                <div className="flex flex-col mb-3 w-full lg:mb-0 ">
                                    <label className="pb-1 sec-black font-10 font-medium" for="first-name">First name</label>
                                    <input className="login-control focus:outline-none px-2" type="text" id="first-name"
                                        placeholder="What is your first name?" />
                                </div>

                                <div className="flex flex-col mb-3 w-full lg:ml-3.5 md:ml-3.5 lg:mb-0">
                                    <label className="pb-1 sec-black font-10 font-medium" for="last-name">Last name</label>
                                    <input className="login-control focus:outline-none px-2" type="text" id="last-name"
                                        placeholder="What is your last name?" />
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap lg:flex-nowrap md:flex-nowrap lg:mb-5">

                                <div className="flex flex-col mb-3 w-full lg:w-6/12 lg:mb-0 ">
                                    <label className="pb-1 sec-black font-10 font-medium" for="phone">Phone number</label>
                                    {/* <input className="login-control focus:outline-none px-2" type="tel" id="phone"
                                        placeholder="+1  (555) 555-1234 " /> */}
                                        <IntlTelInput
                                            preferredCountries={['ng']}
                                            containerClassName="intl-tel-input"
                                            inputClassName="form-control"
                                        />
                                </div>

                                <div className="flex flex-col mb-3 w-full lg:w-6/12 lg:ml-3.5 md:ml-3.5 lg:mb-0">
                                    <label className="pb-1 sec-black font-10 font-medium" for="email">Email ddress</label>
                                    <input className="login-control focus:outline-none px-2" type="email" id="email"
                                        placeholder="What is your last name?" />
                                </div>
                            </div>

                            <div className="text-center pt-3">
                                <button
                                    className="focus:outline-none primary-btn  text-white font-9 font-semibold uppercase py-2.5 px-4 w-full lg:w-1/3 md:w-1/2">
                                    create my account </button>
                            </div>
                        </form>

                    </div>
                </div>
            </main>
        </section>    
     );
}
 
export default EmailSignup;