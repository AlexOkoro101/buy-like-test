import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { enviroment } from "../../src/components/enviroment"
import ClipLoader from "react-spinners/ClipLoader";
import Link from "next/link";

function VerifyEmail() {
    const router = useRouter()
    const token = router.asPath.slice(30);
    const [isLoading, setisLoading] = useState(false)
    const [verifiedUser, setverifiedUser] = useState(false)


    useEffect(() => {
        verifyUser()
        return () => {
            verifyUser()
        }
    }, [])

    const verifyUser = () => {
        setisLoading(true)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "verifyToken": token
        });


        console.log(token);
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
        fetch(enviroment.BASE_URL + "auth/verify/", requestOptions)
        .then(response => response.json())
        .then(result => {
            setisLoading(false)
            console.log(result)
            if(result.error == false) {
                setverifiedUser(true)
                localStorage.setItem('verifiedUser', true)
                // router.push("/")
            } else {
                setverifiedUser("not verified")
            }
        })
        .catch(error => console.log('error', error));
    }


    return (
        <>
            <section className="w-full pt-20 pb-32">
                <main>
                        {isLoading && (
                        <div className="bg-white py-32 text-center">
                            <ClipLoader
                                color="#ddd"
                                size={80}
                                loading
                            />
                        </div>
                        )}

                        {verifiedUser == true && (
                            <>
                                {/* Confirmation section here */}
                                <section className="w-full confirmation__section pt-20 pb-32 px-2 lg:px-20 ">
                                    <div className="confirmation__holder w-full md:w-4/6 lg:w-4/6 m-auto py-16">
                                        <div className="flex justify-center flex-col ">
                                            {/* image here */}
                                            <div className="flex justify-center mt-16">
                                                <img src="../../assets/img/vectors/check.svg" />
                                            </div>

                                            {/*Confirmation Message here */}
                                            <div className="pt-7 text-center">
                                                <h4 className=" primary-color text-2xl font-semibold">
                                                    Your email has been verified
                                                </h4>
                                                {/* <p className="confirmation__message pt-1">
                                                    We will revert with an estimate
                                                </p>
                                                <p className=" confirmation__message pt-6">
                                                    You will also be among the first to know{" "}
                                                </p>
                                                <p className="confirmation__message ">
                                                    when we launch our website
                                                </p> */}
                                                <Link href="/vin">
                                                    <button
                                                        type="button"
                                                        className="estimate__btn focus:outline-none font-semibold px-7 mt-7"
                                                    >
                                                        {" "}
                                                        CLOSE
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        )}

                        {verifiedUser == "not verified" && (
                            <>
                                {/* Confirmation section here */}
                                <section className="w-full confirmation__section pt-20 pb-32 px-2 lg:px-20 ">
                                    <div className="confirmation__holder w-full md:w-4/6 lg:w-4/6 m-auto py-16">
                                        <div className="flex justify-center flex-col ">
                                            {/* image here */}
                                            <div className="flex justify-center mt-16">
                                                <svg class="w-24 h-24" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>

                                            {/*Confirmation Message here */}
                                            <div className="pt-7 text-center">
                                                <h4 className=" primary-color text-2xl font-semibold">
                                                    Your email was not verified
                                                </h4>
                                                {/* <p className="confirmation__message pt-1">
                                                    We will revert with an estimate
                                                </p>
                                                <p className=" confirmation__message pt-6">
                                                    You will also be among the first to know{" "}
                                                </p>
                                                <p className="confirmation__message ">
                                                    when we launch our website
                                                </p> */}
                                                <Link href="/vin">
                                                    <button
                                                        type="button"
                                                        className="estimate__btn focus:outline-none font-semibold px-7 mt-7"
                                                    >
                                                        {" "}
                                                        CLOSE
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        )}
                </main>
            </section>    
        </>
    )
}

export default VerifyEmail
