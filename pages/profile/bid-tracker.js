import Meta from "../../src/components/Head/Meta";
import Collection from "../../src/components/Layout/Collection";

const BidTracker = () => {



   
    return (
        <div>
            <Meta></Meta>
            <main className="mb-20">
                <Collection></Collection>

                <div className="flex font-11 mt-10">
                    <div className="side-card mx-20 px-5 py-5 space-y-4">
                        <div className="flex justify-between">
                            <h4 className="text-xs font-semibold">Trucking</h4>
                            <p className="text-xs font-normal">$300</p>
                        </div>

                        <div className="flex justify-between">
                            <h4 className="text-xs font-semibold">Shipping</h4>
                            <p className="text-xs font-normal">$950</p>
                        </div>

                        <div className="flex justify-between">
                            <h4 className="text-xs font-semibold">Clearing</h4>
                            <p className="text-xs font-normal">$2,000,000</p>
                        </div>

                        <div className="flex justify-between">
                            <h4 className="text-xs font-semibold">Trucking</h4>
                            <p className="text-xs font-normal">$400</p>
                        </div>

                        <div className="border"></div>

                        <div className="flex justify-between">
                            <h4 className="text-xs font-semibold">Total</h4>
                            <p className="text-xs font-medium">$46,000,000</p>
                        </div>

                        <div className="border"></div>

                        <div className="flex justify-between">
                            <h4 className="text-xs font-semibold">Deposit</h4>
                            <p className="text-xs font-medium">$1,000</p>
                        </div>

                        <div className="border"></div>

                        <div className="flex justify-between">
                            <h4 className="text-xs font-semibold">Balance</h4>
                            <p className="text-xs font-medium">$45,530,000</p>
                        </div>

                        <h4 className="font-medium gray-text">
                            You will be directed to make the rest of the payment
                            after a bid is won for you.
                        </h4>
                    </div>

                    <section className="grid gap-y-4 mx-auto mb-10 mr-20">
                        <div className="bid-card flex py-3 px-3">
                            <img
                                src="../assets/img/cars/AudiA3.png"
                                alt="benz"
                                className="rounded-md w-64 h-36 flex-no-shrink mr-4"
                            />
                            <div className="flex flex-col justify-between flex-grow">
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="text-xs font-normal">
                                            Audi A3
                                        </h4>
                                        <div className="flex mt-0.5">
                                            <img
                                                src="../assets/img/Location.png"
                                                alt=""
                                                className="w-1.5 h-2 mt-1 mr-1"
                                            />
                                            <p className="text-xs font-normal">
                                                Houston, Texas
                                            </p>
                                        </div>
                                        <div className="flex mt-0.5">
                                            <h4 className="font-normal font-sm mr-5">
                                                2020
                                            </h4>
                                            <h4 className="font-normal font-sm">
                                                205,456 miles
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mx-auxo items-end">
                                        <h4 className="text-base font-normal gray-text">
                                            $30,500
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <h3 className="font-medium font-xs primary-blue uppercase">
                                            Awaiting bid - April 22,2021
                                        </h3>
                                        <h3 className="font-medium font-xs primary-blue uppercase">
                                            view details
                                        </h3>
                                    </div>
                                    <div className="border"></div>
                                    <div className="flex justify-between mt-1.5">
                                        <div className="flex space-x-2">
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                clean title
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                fully loaded
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                great deal
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                green light car
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                non-accident
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <img
                                                src="../assets/img/bin.svg"
                                                alt="bin"
                                                className="w-3 h-3 mr-0.5 mt-0.5"
                                            />
                                            <h4 className="font-normal font-sm gray-text">
                                                Remove
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bid-card flex py-3 px-3">
                            <img
                                src="../assets/img/cars/AudiA3.png"
                                alt="benz"
                                className="rounded-md w-64 h-36 flex-no-shrink mr-4"
                            />
                            <div className="flex flex-col justify-between flex-grow">
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="text-xs font-normal">
                                            Audi A3
                                        </h4>
                                        <div className="flex ">
                                            <img
                                                src="../assets/img/Location.png"
                                                alt=""
                                                className="w-1.5 h-2 mt-1 mr-1"
                                            />
                                            <p className="text-xs font-normal">
                                                Houston, Texas
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <h4 className="font-normal font-sm mr-5">
                                                2020
                                            </h4>
                                            <h4 className="font-normal font-sm">
                                                205,456 miles
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mx-auxo items-end">
                                        <h4 className="text-base font-normal gray-text">
                                            $30,500
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <h3 className="font-medium font-xs primary-blue uppercase">
                                            bid lost
                                        </h3>
                                        <h3 className="font-medium font-xs primary-blue uppercase">
                                            view details
                                        </h3>
                                    </div>
                                    <div className="border"></div>
                                    <div className="flex justify-between mt-1.5">
                                        <div className="flex space-x-2">
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                clean title
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                fully loaded
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                great deal
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                green light car
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                non-accident
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <img
                                                src="../assets/img/bin.svg"
                                                alt="bin"
                                                className="w-3 h-3 mr-0.5 mt-0.5"
                                            />
                                            <h4 className="font-normal font-sm gray-text">
                                                Remove
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bid-card flex py-3 px-3">
                            <img
                                src="../assets/img/cars/AudiA3.png"
                                alt="benz"
                                className="rounded-md w-64 h-36 flex-no-shrink mr-4"
                            />
                            <div className="flex flex-col justify-between flex-grow">
                                <div className="flex justify-between">
                                    <div>
                                        <h4 className="text-xs font-normal">
                                            Audi A3
                                        </h4>
                                        <div className="flex ">
                                            <img
                                                src="../assets/img/Location.png"
                                                alt=""
                                                className="w-1.5 h-2 mt-1 mr-1"
                                            />
                                            <p className="text-xs font-normal">
                                                Houston, Texas
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <h4 className="font-normal font-sm mr-5">
                                                2020
                                            </h4>
                                            <h4 className="font-normal font-sm">
                                                205,456 miles
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mx-auxo items-end">
                                        <h4 className="text-base font-normal gray-text">
                                            $30,500
                                        </h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <h3 className="font-medium font-xs primary-blue uppercase">
                                            bid won
                                        </h3>
                                        <h3 className="font-medium font-xs primary-blue uppercase">
                                            view details
                                        </h3>
                                    </div>
                                    <div className="border"></div>
                                    <div className="flex justify-between mt-1.5">
                                        <div className="flex space-x-2">
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                clean title
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                fully loaded
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                great deal
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                green light car
                                            </p>
                                            <p className="primary-blue font-normal text-xs capitalize">
                                                non-accident
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <img
                                                src="../assets/img/bin.svg"
                                                alt="bin"
                                                className="w-3 h-3 mr-0.5 mt-0.5"
                                            />
                                            <h4 className="font-normal font-sm gray-text">
                                                Remove
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
           
        </div>
    );
};

export default BidTracker;
