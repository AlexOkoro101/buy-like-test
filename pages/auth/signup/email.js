import Meta from "../../../src/components/Head/Meta"
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRef, useState } from "react";
 

const EmailSignup = () => {
    const [phone, setphone] = useState('')
    const [phoneError, setphoneError] = useState(null)
    const phoneRef = useRef(null)
    const validatePhone = () => {
        if(!phone) {
            setphoneError(true)
            console.log("no value")
        } else {
            console.log(phone)
        }
    }
    const changeNumber = () => {
        // console.log(phoneRef.current)
        setphone(`${phoneRef.current.selectedCountryData.dialCode}` + `${phoneRef.current.state.value}`)
        if(phoneRef) {
            setphoneError(false)
        }
    }
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '123',
            email: '',
        },
        validationSchema: Yup.object({
        firstName: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .required('First name is required'),
        lastName: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .required('Last name is required'),
        phoneNumber: Yup.string()
        .required('Phone number is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
      });
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

                        <form className="mt-8" onSubmit={formik.handleSubmit}>

                            <div className="flex w-full flex-wrap lg:flex-nowrap md:flex-nowrap lg:mb-5">

                                <div className="flex flex-col mb-3 w-full lg:mb-0 ">
                                    <label className="pb-1 sec-black font-10 font-medium">First name</label>
                                    <input 
                                        className="login-control focus:outline-none px-2" 
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="What is your first name?" 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                        />
                                        {formik.touched.firstName && formik.errors.firstName ? (
                                            <div className="input-error">{formik.errors.firstName}</div>
                                        ) : null}
                                </div>

                                <div className="flex flex-col mb-3 w-full lg:ml-3.5 md:ml-3.5 lg:mb-0">
                                    <label className="pb-1 sec-black font-10 font-medium">Last name</label>
                                    <input 
                                        className="login-control focus:outline-none px-2" 
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="What is your last name?" 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                        />
                                        {formik.touched.lastName && formik.errors.lastName ? (
                                            <div className="input-error">{formik.errors.lastName}</div>
                                        ) : null}
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap lg:flex-nowrap md:flex-nowrap lg:mb-5">

                                <div className="flex flex-col mb-3 w-full lg:w-6/12 lg:mb-0 ">
                                    <label className="pb-1 sec-black font-10 font-medium">Phone number</label>
                                        <IntlTelInput
                                            ref={phoneRef}
                                            fieldName="phoneNumber"
                                            fieldId="phoneNumber"
                                            preferredCountries={['ng']}
                                            containerClassName="intl-tel-input"
                                            inputClassName="form-control"
                                            placeholder="905 665 7840"
                                            onPhoneNumberChange={changeNumber}
                                            onPhoneNumberBlur={validatePhone}
                                        />
                                        {phoneError &&  (
                                            <div className="input-error">Phone number is required</div>
                                        )}
                                </div>

                                <div className="flex flex-col mb-3 w-full lg:w-6/12 lg:ml-3.5 md:ml-3.5 lg:mb-0">
                                    <label className="pb-1 sec-black font-10 font-medium">Email ddress</label>
                                    <input className="login-control focus:outline-none px-2" 
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        placeholder="What is your email address?" />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="input-error">{formik.errors.email}</div>
                                        ) : null}
                                </div>
                            </div>

                            <div className="text-center pt-3">
                                <button
                                    type="submit"
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