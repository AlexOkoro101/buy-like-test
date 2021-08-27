import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/reducers/userReducer";
import Meta from "../../src/components/Head/Meta"

const CurrentBids2 = () => {
    const user = useSelector(selectToken)
    useEffect(() => {
        if(!user.login) {
           router.push('/auth/login')
        }
    }, []);

    return ( 
        <div>
            <Meta></Meta>
            <main>
                <div className="mx-auto font-11 mt-28">
                <section className="flex justify-end mx-auto mb-5">
                    <button type="button"
                    className="focus:outline-none text-white uppercase font-10 primary-btn font-semibold px-4 py-1.5">
                    Place new bid
                    </button>
                </section>

                <section className="grid gap-y-10 mx-auto mb-10">
                    <div className="bid-card flex py-4 px-4">
                    <img src="../assets/img/cars/benz.png" alt="benz" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                    <div className="flex flex-col justify-between flex-grow">
                        <div className="flex justify-between">
                        <div>
                            <h4 className="text-base font-medium gray-text">My first bid collection</h4>
                            <h6 className="text-base font-normal gray-text">6 cars selected</h6>
                        </div>
                        <div className="flex flex-col mx-auxo items-end">
                            <h4 className="text-base font-normal gray-text">$15,000 - $30,500</h4>
                            <h6 className="text-xs font-normal light-gray-text">$1000 deposit paid</h6>
                        </div>
                        </div>
                        <div>
                        <div className="border"></div>
                        <div className="flex justify-between mt-1.5">
                            <div className="flex">
                            <img src="../assets/img/cars/AudiA3.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/fordescape.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/Toyota2.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/Rav42.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/highlander2.png" alt="benz" className="small-car-card" />
                            </div>
                            <h3 className="primary-blue font-xs font-medium pt-3">Manage This Collection</h3>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="bid-card flex py-4 px-4">
                    <img src="../assets/img/cars/benz.png" alt="benz" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                    <div className="flex flex-col justify-between flex-grow">
                        <div className="flex justify-between">
                        <div>
                            <h4 className="text-base font-medium gray-text">2015 MERCEDES-BENZ GLK 350</h4>
                            <h6 className="text-base font-normal gray-text">1 car selected</h6>
                        </div>
                        <div className="flex flex-col mx-auxo items-end">
                            <h4 className="text-base font-normal gray-text">$20,000</h4>
                            <h6 className="text-xs font-normal light-gray-text">$1000 deposit paid</h6>
                        </div>
                        </div>
                        <div>
                        <div className="border"></div>
                        <div className="flex justify-between mt-1.5">
                            <div className="flex">
                            <img src="../assets/img/cars/AudiA3.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/fordescape.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/Toyota2.png" alt="benz" className="small-car-card" />
                            </div>
                            <h3 className="primary-blue font-xs font-medium pt-3">Manage This Collection</h3>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="bid-card flex py-4 px-4">
                    <img src="../assets/img/cars/benz.png" alt="benz" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                    <div className="flex flex-col justify-between flex-grow">
                        <div className="flex justify-between">
                        <div>
                            <h4 className="text-base font-medium gray-text">My first bid collection</h4>
                            <h6 className="text-base font-normal gray-text">6 cars selected</h6>
                        </div>
                        <div className="flex flex-col mx-auxo items-end">
                            <h4 className="text-base font-normal gray-text">$15,000 - $30,500</h4>
                            <h6 className="text-xs font-normal light-gray-text">$1000 deposit paid</h6>
                        </div>
                        </div>
                        <div>
                        <div className="border"></div>
                        <div className="flex justify-between mt-1.5">
                            <div className="flex">
                            <img src="../assets/img/cars/AudiA3.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/fordescape.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/Toyota2.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/Rav42.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/highlander2.png" alt="benz" className="small-car-card" />
                            </div>
                            <h3 className="primary-blue font-xs font-medium pt-3">Manage This Collection</h3>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="bid-card flex py-4 px-4">
                    <img src="../assets/img/cars/benz.png" alt="benz" className="rounded-md w-64 h-36 flex-no-shrink mr-4" />
                    <div className="flex flex-col justify-between flex-grow">
                        <div className="flex justify-between">
                        <div>
                            <h4 className="text-base font-medium gray-text">My first bid collection</h4>
                            <h6 className="text-base font-normal gray-text">6 cars selected</h6>
                        </div>
                        <div className="flex flex-col mx-auxo items-end">
                            <h4 className="text-base font-normal gray-text">$15,000 - $30,500</h4>
                            <h6 className="text-xs font-normal light-gray-text">$1000 deposit paid</h6>
                        </div>
                        </div>
                        <div>
                        <div className="border"></div>
                        <div className="flex justify-between mt-1.5">
                            <div className="flex">
                            <img src="../assets/img/cars/AudiA3.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/fordescape.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/Toyota2.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/Rav42.png" alt="benz" className="small-car-card" />
                            <img src="../assets/img/cars/highlander2.png" alt="benz" className="small-car-card" />
                            </div>
                            <h3 className="primary-blue font-xs font-medium pt-3">Manage This Collection</h3>
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
 
export default CurrentBids2;