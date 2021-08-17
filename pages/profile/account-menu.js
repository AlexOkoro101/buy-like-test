import Meta from "../../src/components/Head/Meta"

const AccountMenu = () => {
    return ( 
        <div>
            <Meta></Meta>
            <main className="mb-20">
                <div className="blue-div px-20 pt-4 py-3 mt-20 flex justify-between">
                    <div className="flex">
                        <div>
                            <h4 className="text-sm font-medium blue-text">My first bid collection</h4>
                            <h6 className="text-xs font-normal blue-text">6 cars selected</h6>
                        </div>
                        <div className="flex py-2 ml-3">
                            <img src="../../assets/img/cars/AudiA3.png" alt="benz" className="tiny-car-card" />
                            <img src="../../assets/img/cars/fordescape.png" alt="benz" className="tiny-car-card" />
                            <img src="../../assets/img/cars/Toyota2.png" alt="benz" className="tiny-car-card" />
                            <img src="../../assets/img/cars/Rav42.png" alt="benz" className="tiny-car-card" />
                            <img src="../../assets/img/cars/highlander2.png" alt="benz" className="tiny-car-card" />
                        </div>
                    </div>
                    <div className="flex flex-col mx-auxo items-end">
                        <h4 className="text-base font-normal gray-text">$15,000 - $30,500</h4>
                        <h6 className="text-xs font-normal light-gray-text">$1000 deposit paid</h6>
                    </div>
                </div>

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
                            <p className="text-xs font-medium">$400</p>
                        </div>

                        <h4 className="font-medium gray-text">
                        You will be directed to make the rest 
                        of the payment after a bid is won for you.
                        </h4>
                    </div>

                    <section className="grid grid-cols-3 gap-y-6 gap-x-4 mb-10 mr-20">
                        <div className="menu-card py-4 px-4">
                            <img src="../../assets/img/cars/benz.png" alt="benz" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                            <div className="mt-2">
                                <h4 className="text-sm font-medium">MERCEDES-BENZ GLK 350</h4>
                                <div className="flex mt-1">
                                    <img src="../../assets/img/Location.png" alt="" className="w-1.5 h-2 mt-1 mr-1" />
                                    <p className="text-xs font-normal gray-text">Houston, Texas</p>
                                </div>
                                <div className="flex mt-1">
                                    <h4 className="font-normal font-sm gray-text mr-5">2015</h4>
                                    <h4 className="font-normal font-sm gray-text">205,456 miles</h4>
                                </div>
                                <h4 className="font-normal text-base gray-text mt-2">$33,500</h4>
                            </div>
                        </div>
                        
                        <div className="menu-card py-4 px-3">
                            <img src="../../assets/img/cars/AudiA3.png" alt="benz" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                            <div className="mt-2">
                                <h4 className="text-sm font-medium">Audi A3</h4>
                                <div className="flex mt-1">
                                    <img src="../../assets/img/Location.png" alt="" className="w-1.5 h-2 mt-1 mr-1" />
                                    <p className="text-xs font-normal gray-text">Houston, Texas</p>
                                </div>
                                <div className="flex mt-1">
                                    <h4 className="font-normal font-sm gray-text mr-5">2020</h4>
                                    <h4 className="font-normal font-sm gray-text">205,456 miles</h4>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="font-normal text-base gray-text mt-2">$32,500</h4>
                                    <div className="flex mt-3">
                                        <img src="../../assets/img/bin.svg" alt="bin" className="w-3 h-3 mr-0.5" />
                                        <h4 className="font-normal font-sm gray-text mr-5">Remove</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="menu-card py-4 px-3">
                            <img src="../../assets/img/cars/fordescape.png" alt="benz" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                            <div className="mt-2">
                                <h4 className="text-sm font-medium">Ford Escape</h4>
                                <div className="flex mt-1">
                                    <img src="../../assets/img/Location.png" alt="" className="w-1.5 h-2 mt-1 mr-1" />
                                    <p className="text-xs font-normal gray-text">Houston, Texas</p>
                                </div>
                                <div className="flex mt-1">
                                    <h4 className="font-normal font-sm gray-text mr-5">2015</h4>
                                    <h4 className="font-normal font-sm gray-text">205,456 miles</h4>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="font-normal text-base gray-text mt-2">$32,500</h4>
                                    <div className="flex mt-3">
                                        <img src="../../assets/img/bin.svg" alt="bin" className="w-3 h-3 mr-0.5" />
                                        <h4 className="font-normal font-sm gray-text mr-5">Remove</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="menu-card py-4 px-3">
                            <img src="../../assets/img/cars/Toyota1.png" alt="Toyota" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                            <div className="mt-2">
                                <h4 className="text-sm font-medium">Toyota</h4>
                                <div className="flex mt-1">
                                    <img src="../../assets/img/Location.png" alt="" className="w-1.5 h-2 mt-1 mr-1" />
                                    <p className="text-xs font-normal gray-text">Houston, Texas</p>
                                </div>
                                <div className="flex mt-1">
                                    <h4 className="font-normal font-sm gray-text mr-5">2019</h4>
                                    <h4 className="font-normal font-sm gray-text">205,456 miles</h4>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="font-normal text-base gray-text mt-2">$33,500</h4>
                                    <div className="flex mt-3">
                                        <img src="../../assets/img/bin.svg" alt="bin" className="w-3 h-3 mr-0.5" />
                                        <h4 className="font-normal font-sm gray-text mr-5">Remove</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="menu-card py-4 px-3">
                            <img src="../../assets/img/cars/Rav4.png" alt="Toyota" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                            <div className="mt-2">
                                <h4 className="text-sm font-medium">Toyota Rav4</h4>
                                <div className="flex mt-1">
                                    <img src="../../assets/img/Location.png" alt="" className="w-1.5 h-2 mt-1 mr-1" />
                                    <p className="text-xs font-normal gray-text">Houston, Texas</p>
                                </div>
                                <div className="flex mt-1">
                                    <h4 className="font-normal font-sm gray-text mr-5">2019</h4>
                                    <h4 className="font-normal font-sm gray-text">205,456 miles</h4>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="font-normal text-base gray-text mt-2">$33,500</h4>
                                    <div className="flex mt-3">
                                        <img src="../../assets/img/bin.svg" alt="bin" className="w-3 h-3 mr-0.5" />
                                        <h4 className="font-normal font-sm gray-text mr-5">Remove</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="menu-card py-4 px-3">
                            <img src="../../assets/img/cars/highlander.png" alt="highlander" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                            <div className="mt-2">
                                <h4 className="text-sm font-medium">Toyota Highlander</h4>
                                <div className="flex mt-1">
                                    <img src="../../assets/img/Location.png" alt="" className="w-1.5 h-2 mt-1 mr-1" />
                                    <p className="text-xs font-normal gray-text">Houston, Texas</p>
                                </div>
                                <div className="flex mt-1">
                                    <h4 className="font-normal font-sm gray-text mr-5">2019</h4>
                                    <h4 className="font-normal font-sm gray-text">205,456 miles</h4>
                                </div>
                                <div className="flex justify-between">
                                    <h4 className="font-normal text-base gray-text mt-2">$33,500</h4>
                                    <div className="flex mt-3">
                                        <img src="../../assets/img/bin.svg" alt="bin" className="w-3 h-3 mr-0.5" />
                                        <h4 className="font-normal font-sm gray-text mr-5">Remove</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
     );
}
 
export default AccountMenu;