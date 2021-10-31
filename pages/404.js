//

import { useRouter } from "next/router";

//
export default function Custom404() {
    const router = useRouter();

    return (
        <div
            className=" w-full text-center flex items-center justify-center"
            style={{
                minHeight: "480px",
            }}
        >
            <div className="text-center w-full">
                <h1
                    style={{
                        fontWeight: 900,
                        fontSize: "200px",
                    }}
                    className="text-gray-300 "
                >
                    404
                </h1>
                <h1 className="text-2xl font-semibold ">
                    We cannot find the page you are looking for
                </h1>
                <h1 className="text-xs  mt-1">
                    Sometimes this happens, it is not your fault and we are
                    working on it.
                </h1>
                <button
                    onClick={() => {
                        router.push("/");
                    }}
                    type="button"
                    className="tracking-wider w-full lg:w-96 m-auto text-xs mt-4 py-3 focus:outline-none font-semibold flex items-center justify-center text-white"
                    style={{
                        background: "#d80739",
                    }}
                >
                    LET'S TAKE YOU HOME
                </button>
            </div>
        </div>
    );
}
