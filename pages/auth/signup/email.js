import Meta from "../../../src/components/Head/Meta"
import 'react-intl-tel-input/dist/main.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { enviroment } from "../../../src/components/enviroment";
import { login, selectToken } from "../../../redux/reducers/userReducer";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from 'react-redux';


const EmailSignup = ({ beginLogin }) => {
    //router
    const router = useRouter()

    const [error, seterror] = useState(null)
    const [isLoading, setisLoading] = useState(false)

    const user = useSelector(selectToken)
    useEffect(() => {
        if(user.login) {
           router.push('/search')
        }
    }, []);

    const toastError = () => toast.error(`${error ? error : 'Could not sign up'}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const toastSuccess = () => toast.success(`${error ? error : 'Account created Successfully'}`, {
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
        formik.values.number = `${phoneRef.current.selectedCountryData.dialCode}` + `${phoneRef.current.state.value}`
        setphone(`${phoneRef.current.selectedCountryData.dialCode}` + `${phoneRef.current.state.value}`)
        if(phoneRef) {
            setphoneError(false)
        }
    }


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            // number: '123',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
        firstName: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .required('First name is required'),
        lastName: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .required('Last name is required'),
        // number: Yup.string()
        // .required('Phone number is required'),
        email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
        password: Yup.string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password number is required'),
        }),
        onSubmit: values => {
            // notify()
            setisLoading(true)
            seterror(null)
            console.log(values)
            
            fetch(enviroment.BASE_URL + 'auth/register', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                credentials: "same-origin",
                body: JSON.stringify(values)
            })
            .then(res => {
                // console.log(res)
                if(!res.ok) {
                  setisLoading(false)
                  seterror(res.statusText)
                  toastError()
                  throw Error("Could not sign up")
                }
                setisLoading(false)
                return res.json()
          
            })
            .then(data => {
                //   console.log(data)
                  if(data?.error) {
                      seterror(data?.message)
                      toastError()
                    } else {
                        // console.log(data)
                        seterror(data?.message)
                        toastSuccess()
                        router.push('/auth/signup/onboarding')
                  }
                const now = new Date()
                //save data to local storage
                const item = {
                  userToken: data.data._token,
                  expiry: now.getTime() + 3600000,
                }
                localStorage.setItem('userToken', JSON.stringify(item));
          
                //save data to store
                beginLogin({
                    token: data.data._token,
                    login: false,
                });
            })
            .catch(e => {
                // seterror(e.message)
                setisLoading(false)
                console.log(e.message)
            })
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

                                <div className="flex flex-col mb-3 w-full lg:w-6/12  lg:mb-0">
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
                                <div className="flex flex-col mb-3 w-full lg:w-6/12 lg:ml-3.5 md:ml-3.5 lg:mb-0">
                                    <label className="pb-1 sec-black font-10 font-medium">Password</label>
                                    <input className="login-control focus:outline-none px-2" 
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        placeholder="Enter password" />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className="input-error">{formik.errors.password}</div>
                                        ) : null}
                                </div>
                            </div>
                            <div className="flex w-full flex-wrap lg:flex-nowrap md:flex-nowrap lg:mb-5">
                            </div>

                            <div className="text-center pt-3">
                                <button
                                    type="submit"
                                    className="focus:outline-none primary-btn  text-white font-9 font-semibold uppercase py-2.5 px-4 w-full lg:w-1/3 md:w-1/2">
                                    {isLoading ? (<ClipLoader color="#fff" size={25} loading />) : 'create my account'} </button>
                            </div>
                        </form>

                    </div>
                </div>
            </main>
        </section>    
     );
}
 

export default connect(
    () => ({}),
    (dispatch) => ({
      beginLogin: (payload) => dispatch({
        type: 'login',
        payload,
      })
    })
  )(EmailSignup);