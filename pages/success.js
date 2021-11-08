import Link from "next/link";
const success = () => {
    return (
        <>
            {/* Confirmation section here */}
            <section className="w-full confirmation__section mt-1 pt-20 pb-32 px-2 lg:px-20 ">
                <div className="confirmation__holder w-full md:w-4/6 lg:w-4/6 m-auto py-16">
                    <div className="flex justify-center flex-col ">
                        {/* image here */}
                        <img
                            src="./assets/img/vectors/message-icon.svg"
                            className="h-24"
                            alt="message-icon"
                        />

                        {/*Confirmation Message here */}
                        <div className="pt-7 text-center">
                            <h4 className=" primary-color text-2xl font-semibold">
                                Your request has been sent
                            </h4>
                            <p className="confirmation__message pt-1">
                                We will revert with an estimate
                            </p>
                            <p className=" confirmation__message pt-6">
                                You will also be among the first to know{" "}
                            </p>
                            <p className="confirmation__message ">
                                when we launch our website
                            </p>
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
    );
};

export default success;
