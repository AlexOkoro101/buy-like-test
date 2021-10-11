import { useState, useEffect } from "react";
import Meta from "../../src/components/Head/Meta";
import { connect } from "react-redux";
import {
    searchTerm,
    fetchMore,
    filterTabAction,
    getMakes,
    carDetail,
} from "../../redux/actions/carsAction";
import Select from "react-select";
import { useRouter } from "next/router";
import FadeLoader from "react-spinners/FadeLoader";
import { useForm } from "react-hook-form";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { selectToken } from "../../redux/reducers/userReducer";
import {
    FuelType,
    BodyType,
    TransmissionType,
    EngineType,
    InteriorColour,
    InteriorType,
    ExternalColour,
    FacilitationLocation,
} from "../../src/components/data";
// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
//
export function useWindowDimensions() {
    const hasWindow = typeof window !== "undefined";

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [hasWindow]);

    return windowDimensions;
}
//
//
//

const Search = ({ cars, params, loading, getMakes, makes }) => {
    var dollarFormatter = new Intl.NumberFormat();
    const { height, width } = useWindowDimensions();
    // console.log("Search page makes", cars)
    const [grid, setgrid] = useState(true);
    const [open, setOpen] = useState(true);
    const [advance, setAdvance] = useState(false);
    const [paramValue, setParam] = useState(params);
    const [makeValue, setmake] = useState({});
    const [filterValue, setFilterValue] = useState({
        transmission: "",
        bodyType: "",
        engineType: "",
        exterior_color: "",
        interior_color: "",
        interior_type: "",
        fuel_type: "",
        location: "",
    });
    const [pageIndex, setPageIndex] = useState(1);
    const [active, setActive] = useState("all");
    const [filter, setfilter] = useState([]);
    const [options, setoptions] = useState([]);
    const [data, setData] = useState(cars.data);
    const [total, setTotal] = useState(cars.total);
    const [defaultMake, setDefaultMake] = useState();
    const [defaultModel, setDefaultModel] = useState();
    const [defaultYear, setDefaultYear] = useState();
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector(selectToken);
    const [years, setYears] = useState(() => {
        let year = 2005;
        const currentYear = new Date().getFullYear();
        let validVehicleYears = [];
        while (year <= currentYear) {
            validVehicleYears.push(year++);
        }
        return validVehicleYears;
    });
    const [carMakes, setcarMakes] = useState([]);
    const [carModels, setcarModels] = useState([]);
    useEffect(() => {
        if (paramValue && cars.data === []) {

            fetchPage(pageIndex);
        } else if (cars.data === {}) {
            fetchPage(pageIndex);
        } else {
            setData(cars.data);
        }
    }, [cars]);
    useEffect(() => {
        if (carModels.length <= 0) {
            if (makes && makes[0]) {
                getVehicleModels();
            }
        }
    }, []);
    useEffect(() => {
        if (advance === true) {
            handleTransmission();
        }
    }, [filterValue]);
    useEffect(() => {
        if (carMakes && carMakes.length <= 0) {
            getMakes();
        }
        if (makes && makes[0]) {
            setcarMakes(makes);
        }
    }, [makes]);
    useEffect(() => {
        let data = paramValue;
        for (var f in data) {
            if (data[f] === "") {
                delete data[f];
                setParam({ ...data });
            }
        }
        if (paramValue.make) {
            getVehicleModels(paramValue.make);
        }
    }, [paramValue, params]);

    useEffect(() => {
        let data = params;
        for (var f in data) {
            if (data[f] === "") {
                delete data[f];
                setParam({ ...data });
            }
        }
    }, [params]);

    useEffect(() => {
        getYearValue();
        getModelValue();
        getMakeValue();
    }, [paramValue, params, carModels, carMakes]);

    const handleSearch = async (e) => {
        const data = {
            VIN: e.target.value,
        };

        await dispatch(searchTerm(data));
        setData(cars);
    };

    const fetchPage = (i) => {
        if (active === "" || active === "all") {
            const datas = {
                make: paramValue?.make || "",
                model: paramValue?.model || "",
                year: paramValue?.year || "",
                page: i,
            };
            dispatch(fetchMore(filterValue, datas));
        } else {
            let data =
                active === "now"
                    ? "buy_now=1"
                    : active === "bid"
                    ? "mmr_price=1"
                    : "";
            const datas = {
                make: paramValue?.make || "",
                model: paramValue?.model || "",
                year: paramValue?.year || "",
                page: i,
            };
            dispatch(filterTabAction(datas, data));
        }
    };
    const handleYear = (e) => {
        var data;
        if (e[0]) {
            data = e.map((el) => {
                return el.value;
            });
        } else {
            data = "";
        }
        setDefaultYear(e);
        const datas = {
            make: paramValue?.make || "",
            model: paramValue?.model || "",
            year: data.toString(),
            page: 1,
        };
        setParam((prev) => ({
            ...prev,
            year: data,
        }));
        setPageIndex(1);
        dispatch(fetchMore(filterValue, datas));
        setPageIndex(1);
    };

    const handleModel = (e) => {
        var data;
        var MakeData;
        var datas;
        if (e[0]) {
            data = e.map((el) => {
                return el.value;
            });
        } else {
            data = "";
        }
        if (paramValue.make === undefined || paramValue === null) {
            MakeData = makes.find((ele) =>
                ele.models.map(
                    (el) => el.name.toLowerCase() === e[0].value.toLowerCase()
                )
            );
            setDefaultMake({ label: MakeData.name, value: MakeData.name });
            datas = {
                make: MakeData.name || "",
                model: data.toString(),
                year: paramValue?.year || "",
                page: 1,
            };
            setParam((prev) => ({
                ...prev,
                make: MakeData.name,
                model: data,
            }));
        } else {
            setDefaultMake(e);
            datas = {
                make: paramValue?.make || "",
                model: data.toString(),
                year: paramValue?.year || "",
                page: 1,
            };
            setParam((prev) => ({
                ...prev,
                model: data,
            }));
        }
        setPageIndex(1);
        dispatch(fetchMore(filterValue, datas));
        setDefaultModel(e);
    };
    const handleMake = async (e) => {
        setDefaultModel();
        var data;
        if (e) {
            data = e.value;
        } else {
            data = "";
        }
        const datas = {
            make: data,
            model: "",
            year: paramValue?.year || "",
            page: 1,
        };
        setDefaultMake(e);
        setParam((prev) => ({
            model: "",
            ...prev,
            make: data,
        }));
        setPageIndex(1);
        let dat = makes.find(
            (ele) => ele.name.toLowerCase() === e.value.toLowerCase()
        );
        if (dat) {
            setcarModels(dat.models);
        } else {
            setcarModels(makes[0].models);
        }
        dispatch(fetchMore(filterValue, datas));
    };
    //
    // Filter actions
    const handleTransmission = () => {
        const datas = {
            make: paramValue?.make || "",
            model: paramValue?.model || "",
            year: paramValue?.year || "",
            page: pageIndex,
        };
        dispatch(fetchMore(filterValue, datas));
    };
    //
    //
    const getVehicleModels = (e) => {
        if (e) {
            let dat = makes.find(
                (ele) => ele.name.toLowerCase() === e.toLowerCase()
            );
            if (dat) {
                setcarModels(dat.models);
            }
        } else {
            setcarModels(makes[0].models);
        }
    };
    const activateList = () => {
        setgrid(false);
    };

    function Paginate() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        let num = parseInt(cars.total) / 20;
        let maxPages = Math.round(num);
        let items = [];
        let leftSide = pageIndex - 2;
        if (leftSide <= 0) leftSide = 1;
        let rightSide = pageIndex + 2;
        if (rightSide > maxPages) rightSide = maxPages;
        for (let number = leftSide; number <= rightSide; number++) {
            items.push(
                <div
                    key={number}
                    className={
                        number === pageIndex
                            ? "round-effect active1"
                            : "round-effect"
                    }
                    onClick={() => {
                        setPageIndex(number);
                        fetchPage(number);
                    }}
                >
                    {number}
                </div>
            );
        }
        const nextPage = async () => {
            if (pageIndex < maxPages) {
                await setPageIndex(pageIndex + 1);
            }
            fetchPage(pageIndex);
        };

        const prevPage = async () => {
            if (pageIndex > 1) {
                await setPageIndex(pageIndex - 1);
            }
            fetchPage(pageIndex);
        };

        const paginationRender = (
            <div className="flex-container">
                <div className="paginate-ctn">
                    <div className="round-effect" onClick={prevPage}>
                        {" "}
                        &lsaquo;{" "}
                    </div>
                    {items}
                    <div className="round-effect" onClick={nextPage}>
                        {" "}
                        &rsaquo;{" "}
                    </div>
                </div>
            </div>
        );
        return paginationRender;
    }
    const removeItem = async (val) => {
        let data = paramValue;
        for (var f in data) {
            if (data[f] === val) {
                delete data[f];
                setParam({ ...data });
                fetchPage(pageIndex);
                break;
            } else {
                const dataWithArrays = Object.fromEntries(
                    Object.entries(data).map(([key, value]) => [
                        key,
                        ...value
                            .split(",")
                            .filter(
                                (ele) => ele.toLowerCase() != val.toLowerCase()
                            ),
                    ])
                );
                setParam(dataWithArrays);
                const datas = {
                    make: dataWithArrays?.make || "",
                    model: dataWithArrays?.model || "",
                    year: dataWithArrays?.year || "",
                    page: pageIndex,
                };
                dispatch(fetchMore(filterValue, datas));
            }
        }
    };
    const handleFilter = async (info) => {
        function buildFilter(filter) {
            let query = {};
            for (let keys in filter) {
                if (filter[keys]) {
                    query[keys] = filter[keys];
                }
            }
            return query;
        }
        function filterData(arr, query) {
            const filteredData = arr.filter((item) => {
                for (let key in query) {
                    if (query[key].toLowerCase() !== item[key].toLowerCase()) {
                        return false;
                    }
                }
                return true;
            });
            return filteredData;
        }
        const query = buildFilter(info);
        const result = filterData(cars.data, query);
        setData(result);
    };
    const clearForm = () => {
        // setFilterValue({
        //     transmission: "",
        //     bodyType: "",
        //     engineType: "",
        //     exterior_color: "",
        //     interior_color: "",
        //     interior_type: "",
        //     fuel_type: "",
        //     location: "",
        // });
        // document
        //     .querySelectorAll("input[type=checkbox]")
        //     .forEach((el) => (el.checked = false));

        //
        //
        console.log("clear");
    };
    const activateGrid = () => {
        setgrid(true);
    };
    const addImage = (params) => {
        if (params.images && params.images.length <= 0) {
            return null;
        }
        if (
            params.images &&
            params.images.length > 0 &&
            params.images[0].image_smallUrl
        ) {
            return (
                <div
                    style={{
                        width:
                            width >= 900
                                ? "100%"
                                : open && width >= 900
                                ? "273px"
                                : !open && width >= 900
                                ? "247px"
                                : "100%",
                        height: "164px",
                    }}
                    className="bg-black bg-opacity-20 rounded-md"
                >
                    <img
                        src={params.images[0].image_largeUrl}
                        alt="hello"
                        className="w-full object-contain h-full rounded-md object-center"
                    />
                </div>
            );
        }
    };
    const handleChange = (newValue) => {
        if (newValue && newValue.data) {
            dispatch(carDetail(newValue.data));

            router.push({
                pathname: "/search/" + newValue.value,
            });
        }
    };

    const filterTab = (event) => {
        if (event !== active) {
            setPageIndex(1);
            setActive(event);
            let data =
                event === "now"
                    ? "buy_now=1"
                    : event === "bid"
                    ? "mmr_price=1"
                    : "";
            const datas = {
                make: paramValue?.make || "",
                model: paramValue?.model || "",
                year: paramValue?.year || "",
                page: 1,
            };
            dispatch(filterTabAction(datas, data));
        }
    };

    const handleInputChange = (inputValue) => {
        if (inputValue !== "") {
            try {
                fetch(
                    `https://buylikepoint.us/json.php/view.php?vin=${inputValue}&apiKey=Switch!2020&apiKey=Switch!2020`,
                    {
                        method: "GET",
                        headers: {},
                        credentials: "same-origin",
                    }
                )
                    .then(function (response) {
                        return response.text();
                    })
                    .then(function (res) {
                        const dada = JSON.parse(res);
                        if (dada) {
                            dada.data.map((ele) => {
                                setoptions([
                                    {
                                        value: ele.VIN,
                                        label: ele.VIN,
                                        data: ele,
                                    },
                                ]);
                            });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const getMakeValue = () => {
        let data = carMakes.filter((option) => option.name == paramValue.make);
        setDefaultMake(
            data.map((ele) => {
                return {
                    label: ele.name,
                    value: ele.name,
                };
            })
        );
    };

    const getModelValue = () => {
        let data = paramValue.model;
        if (typeof data === "object") {
            let res = data.map((ele) =>
                carModels.filter((option) => option.name == ele)
            );
            setDefaultModel(
                [].concat(...res).map((ele) => {
                    return {
                        label: ele.name,
                        value: ele.name,
                    };
                })
            );
        } else if (typeof data === "string") {
            let res = data
                .split(",")
                .map((ele) => carModels.filter((option) => option.name == ele));
            setDefaultModel(
                [].concat(...res).map((ele) => {
                    return {
                        label: ele.name,
                        value: ele.name,
                    };
                })
            );
        } else {
            setDefaultModel();
        }
    };

    const getYearValue = () => {
        let data = paramValue.year;
        if (typeof data === "object") {
            let res = data.map((ele) =>
                years.filter((option) => option == ele)
            );
            setDefaultYear(
                [].concat(...res).map((ele) => {
                    return {
                        label: ele,
                        value: ele,
                    };
                })
            );
        } else if (typeof data === "string") {
            let res = data
                .split(",")
                .map((ele) => years.filter((option) => option == ele));
            setDefaultYear(
                [].concat(...res).map((ele) => {
                    return {
                        label: ele,
                        value: ele,
                    };
                })
            );
        } else {
            setDefaultYear(null);
        }
    };

    const getChips = () => {
        let data = [];
        let mat = [];
        for (const key in paramValue) {
            if (Object.hasOwnProperty.call(paramValue, key)) {
                const element = paramValue[key];
                if (typeof element === "object") {
                    for (let index = 0; index < element.length; index++) {
                        const ele = element[index];
                        data.push(ele);
                    }
                } else {
                    if (element !== undefined && element !== null) {
                        mat.push(element.split(","));
                    }
                }
            }
        }
        if (mat.length > 0) {
            mat.map(function (subarray) {
                subarray.map(function (ele) {
                    data.push(ele);
                });
            });
        }
        // data.map((ele) => {

        // })
        return data.map((ele, id) => {
            return (
                <span
                    key={id}
                    className="filter-pill mr-3 mb-2 lg:mb-0  flex items-center font-10 font-semibold px-2.5"
                >
                    {ele}
                    <span className="ml-1.5">
                        {" "}
                        <img
                            src="../../assets/img/vectors/white-close.svg"
                            alt="close"
                            className="cursor-pointer"
                            onClick={() => removeItem(ele)}
                        />{" "}
                    </span>
                </span>
            );
        });
    };
    const customStyles = {
        menuList: (provided, state) => ({
            ...provided,
            border: "1px solid #dee2e6",
            width: "100%",
            borderRadius: "5px",
            zIndex: 0,
            justifyContent: "space-between",
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            minWidth: "100%",
            margin: 0,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "flex",
            border: "2px solid rgba(59, 130, 246, 0.5)",
            borderRadius: "5px",
            zIndex: 0,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = "opacity 300ms";

            return { ...provided, opacity, transition };
        },
    };

    return (
        <div>
            <Meta></Meta>
            <main>
                {/* <!-- Search region here --> */}
                <div
                    className="flex items-start main h-full m-0  pb-12 pt-24"
                    id="carDeets"
                >
                    {/* <!-- filter tab here --> */}
                    {open && (
                        <div className="filter-holder hidden  h-full lg:block p-3 w-3/12 xl:w-2/12">
                            {/* <!-- Filter icon --> */}
                            <div className="flex pb-2">
                                <div>
                                    <p className="flex items-center primary-black font-medium font-11">
                                        {" "}
                                        <span className="mr-1">
                                            <img
                                                src="../../assets/img/vectors/filter-icon.svg"
                                                alt="filter"
                                            />
                                        </span>{" "}
                                        Search
                                    </p>
                                </div>
                                <div className="ml-auto self-center">
                                    <span
                                        onClick={() => setOpen(false)}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src="../../assets/img/vectors/close-icon.svg"
                                            alt="close"
                                        />
                                    </span>
                                </div>
                            </div>
                            {/* <!-- Filters --> */}
                            <div>
                                {/* Basic Filters */}
                                <div className="mt-3">
                                    <div className="tab border-bt py-4  ">
                                        {/* <!-- Make Here --> */}
                                        <ReactMultiSelectCheckboxes
                                            className="primary-black font-semibold font-11  "
                                            styles={customStyles}
                                            isMulti={false}
                                            placeholderButtonLabel={
                                                <div className="font-semibold text-xs w-full self-center	">
                                                    Make
                                                </div>
                                            }
                                            value={defaultMake}
                                            width="100%"
                                            onChange={(e) => handleMake(e)}
                                            options={
                                                carMakes &&
                                                carMakes.map((ele) => {
                                                    return {
                                                        label: ele.name,
                                                        value: ele.name,
                                                    };
                                                })
                                            }
                                        />
                                    </div>

                                    {/* model here */}
                                    <div>
                                        <div className="tab border-bt py-4  ">
                                            <ReactMultiSelectCheckboxes
                                                className="primary-black font-semibold font-11  "
                                                styles={customStyles}
                                                placeholderButtonLabel={
                                                    <div className="font-semibold text-xs w-full self-center	">
                                                        Model
                                                    </div>
                                                }
                                                width="100%"
                                                value={defaultModel}
                                                onChange={(e) => handleModel(e)}
                                                options={
                                                    carModels &&
                                                    carModels.map((ele) => {
                                                        return {
                                                            label: ele.name,
                                                            value: ele.name,
                                                        };
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="tab border-bt py-4">
                                            <ReactMultiSelectCheckboxes
                                                className="primary-black font-semibold font-11 placeholder-gray-900 "
                                                styles={customStyles}
                                                placeholderButtonLabel={
                                                    <div className="font-semibold text-xs w-96 self-center">
                                                        Year
                                                    </div>
                                                }
                                                width="100%"
                                                value={defaultYear}
                                                onChange={(e) => handleYear(e)}
                                                options={
                                                    years &&
                                                    years.map((ele) => {
                                                        return {
                                                            label: ele,
                                                            value: ele,
                                                        };
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Filters */}
                                <form className="mt-16 h-full">
                                    {/* <!-- Filter icon --> */}
                                    <div className="flex justify-between items-center pb-2">
                                        <div>
                                            <p className="flex items-center primary-black font-medium font-11">
                                                {" "}
                                                <span className="mr-1">
                                                    <img
                                                        src="../../assets/img/vectors/filter-icon.svg"
                                                        alt="filter"
                                                    />
                                                </span>{" "}
                                                Filters
                                            </p>
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                className={
                                                    "clearfilter focus:outline-none font-10 font-semibold px-3.5 py-1.5"
                                                }
                                                value="all"
                                                onClick={() => clearForm()}
                                            >
                                                Clear all filters
                                            </button>
                                        </div>
                                    </div>

                                    <div className="tabWrapper h-full relative">
                                        {/* <!--Body Type  Here --> */}
                                        <div className="tab border-bt py-4  ">
                                            <ReactMultiSelectCheckboxes
                                                className="primary-black font-semibold font-11  "
                                                styles={customStyles}
                                                placeholderButtonLabel={
                                                    <div className="font-semibold text-xs w-full self-center	">
                                                        Body type
                                                    </div>
                                                }
                                                width="100%"
                                                onChange={(e) => {
                                                    setFilterValue((prev) => ({
                                                        ...prev,
                                                        bodyType: e.map(
                                                            (el) => {
                                                                return el.value;
                                                            }
                                                        ),
                                                    })),
                                                        setAdvance(true);
                                                }}
                                                options={BodyType}
                                            />
                                        </div>

                                        {/* <!-- Mileage Here --> */}
                                        <div className="tab border-bt py-4 ">
                                            <ReactMultiSelectCheckboxes
                                                className="primary-black font-semibold font-11  "
                                                styles={customStyles}
                                                placeholderButtonLabel={
                                                    <div className="font-semibold text-xs w-full self-center	">
                                                        Transmission type
                                                    </div>
                                                }
                                                width="100%"
                                                onChange={(e) => {
                                                    setFilterValue((prev) => ({
                                                        ...prev,
                                                        transmission: e.map(
                                                            (el) => {
                                                                return el.value;
                                                            }
                                                        ),
                                                    })),
                                                        setAdvance(true);
                                                }}
                                                options={TransmissionType}
                                            />
                                        </div>
                                        {/* <!--External Colour  Here --> */}
                                        <div className="tab border-bt py-4  ">
                                            <ReactMultiSelectCheckboxes
                                                className="primary-black font-semibold font-11  "
                                                styles={customStyles}
                                                placeholderButtonLabel={
                                                    <div className="font-semibold text-xs w-full self-center	">
                                                        External Colour
                                                    </div>
                                                }
                                                width="100%"
                                                onChange={(e) => {
                                                    setFilterValue((prev) => ({
                                                        ...prev,
                                                        exterior_color: e.map(
                                                            (el) => {
                                                                return el.value;
                                                            }
                                                        ),
                                                    })),
                                                        setAdvance(true);
                                                }}
                                                options={ExternalColour}
                                            />
                                        </div>
                                        {/* <!--Fuel Type  Here --> */}
                                        <div className="tab border-bt py-4 ">
                                            <ReactMultiSelectCheckboxes
                                                className="primary-black font-semibold font-11  "
                                                styles={customStyles}
                                                placeholderButtonLabel={
                                                    <div className="font-semibold text-xs w-full self-center	">
                                                        Fuel type
                                                    </div>
                                                }
                                                width="100%"
                                                onChange={(e) => {
                                                    setFilterValue((prev) => ({
                                                        ...prev,
                                                        fuel_type: e.map(
                                                            (el) => {
                                                                return el.value;
                                                            }
                                                        ),
                                                    })),
                                                        setAdvance(true);
                                                }}
                                                options={FuelType}
                                            />
                                        </div>
                                        <div className="tab border-bt py-4 ">
                                            <ReactMultiSelectCheckboxes
                                                className="primary-black font-semibold font-11  "
                                                styles={customStyles}
                                                placeholderButtonLabel={
                                                    <div className="font-semibold text-xs w-full self-center	">
                                                        Facilitation Location
                                                    </div>
                                                }
                                                width="100%"
                                                onChange={(e) => {
                                                    setFilterValue((prev) => ({
                                                        ...prev,
                                                        location: e.map(
                                                            (el) => {
                                                                return el.value;
                                                            }
                                                        ),
                                                    })),
                                                        setAdvance(true);
                                                }}
                                                options={FacilitationLocation}
                                            />
                                        </div>
                                        <div className="tab border-bt py-4 ">
                                            <ReactMultiSelectCheckboxes
                                                className="primary-black font-semibold font-11  "
                                                styles={customStyles}
                                                placeholderButtonLabel={
                                                    <div className="font-semibold text-xs w-full self-center	">
                                                        Interior Colour
                                                    </div>
                                                }
                                                width="100%"
                                                onChange={(e) => {
                                                    setFilterValue((prev) => ({
                                                        ...prev,
                                                        interior_color: e.map(
                                                            (el) => {
                                                                return el.value;
                                                            }
                                                        ),
                                                    })),
                                                        setAdvance(true);
                                                }}
                                                options={InteriorColour}
                                            />
                                        </div>
                                        <div className="tab border-bt py-4 ">
                                            <ReactMultiSelectCheckboxes
                                                className="primary-black font-semibold font-11  "
                                                styles={customStyles}
                                                placeholderButtonLabel={
                                                    <div className="font-semibold text-xs w-full self-center	">
                                                        Interior Type
                                                    </div>
                                                }
                                                width="100%"
                                                onChange={(e) => {
                                                    setFilterValue((prev) => ({
                                                        ...prev,
                                                        interior_type: e.map(
                                                            (el) => {
                                                                return el.value;
                                                            }
                                                        ),
                                                    })),
                                                        setAdvance(true);
                                                }}
                                                options={InteriorType}
                                            />
                                        </div>
                                        <div className="tab border-bt py-4 ">
                                            <ReactMultiSelectCheckboxes
                                                className="primary-black  font-semibold font-11  "
                                                styles={customStyles}
                                                placeholderButtonLabel={
                                                    <div className="font-semibold text-xs w-full self-center	">
                                                        Engine Type
                                                    </div>
                                                }
                                                width="100%"
                                                onChange={(e) => {
                                                    setFilterValue((prev) => ({
                                                        ...prev,
                                                        engineType: e.map(
                                                            (el) => {
                                                                return el.value;
                                                            }
                                                        ),
                                                    })),
                                                        setAdvance(true);
                                                }}
                                                options={EngineType}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* <!--  Display region here  --> */}
                    <div className="display-holder w-full  relative px-5  lg:px-0 lg:pl-5">
                        {/* <!-- Filter and search for mobile here --> */}
                        <div className="mb-3 px-3 block lg:hidden h-9">
                            <div className="w-full h-full">
                                <div className="w-full h-full">
                                    <Select
                                        className="w-full h-full cursor-pointer focus:outline-none"
                                        type="text"
                                        placeholder={`Search ${cars.total} cars`}
                                        isClearable
                                        onChange={handleChange}
                                        onInputChange={handleInputChange}
                                        options={options}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Search tabs here --> */}
                        <div className="search-results-holder flex items-center justify-between px-3">
                            {/* <!-- first section here --> */}
                            <div>
                                {!open && (
                                    <button
                                        type="button"
                                        className="mr-5"
                                        value="all"
                                        onClick={() => setOpen(true)}
                                    >
                                        <img
                                            src="../../assets/img/vectors/filter-icon.svg"
                                            alt="filter"
                                        />
                                    </button>
                                )}
                                <button
                                    type="button"
                                    className={
                                        active === "all"
                                            ? "primary-btn focus:outline-none text-white font-10 font-semibold px-1.5 md:px-3.5 py-1.5"
                                            : "focus:outline-none primary-black text-black font-10  px-1.5 md:px-3.5 py-1.5"
                                    }
                                    value="all"
                                    onClick={() => filterTab("all")}
                                >
                                    All Cars
                                </button>
                                <button
                                    type="button"
                                    className={
                                        active === "now"
                                            ? "primary-btn focus:outline-none text-white font-10 font-semibold px-1.5 md:px-3.5 py-1.5"
                                            : "focus:outline-none primary-black text-black font-10  px-1.5 md:px-3.5 py-1.5"
                                    }
                                    value="now"
                                    onClick={() => filterTab("now")}
                                >
                                    Buy Now
                                </button>
                                <button
                                    type="button"
                                    className={
                                        active === "bid"
                                            ? "primary-btn focus:outline-none text-white font-10 font-semibold px-1.5 md:px-3.5 py-1.5"
                                            : "focus:outline-none primary-black text-black font-10  px-1.5 md:px-3.5 py-1.5"
                                    }
                                    value="bid"
                                    onClick={() => filterTab("bid")}
                                >
                                    Bid Cars
                                </button>
                            </div>

                            {/* <!-- Second section here --> */}
                            <div className="hidden lg:block h-6">
                                <Select
                                    className=" px-3 w-80 cursor-pointer focus:outline-none "
                                    type="text"
                                    placeholder={`Search ${dollarFormatter.format(
                                        cars.total
                                    )} cars`}
                                    isClearable={false}
                                    onChange={handleChange}
                                    onInputChange={handleInputChange}
                                    options={options}
                                />
                            </div>

                            {/* <!-- Third section here --> */}
                            <div className="flex">
                                {/* <!-- grid view tab here --> */}
                                <button
                                    type="button"
                                    onClick={activateGrid}
                                    id="grid-btn"
                                    type="button"
                                    className={
                                        "focus:outline-none tab-toggle mx-2 " +
                                        (grid ? "active" : "")
                                    }
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        className="m-auto"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M10.7337 0.600006H12.8671C13.1615 0.600006 13.4004 0.838939 13.4004 1.13334V3.26667C13.4004 3.56107 13.1615 3.80001 12.8671 3.80001H10.7337C10.4393 3.80001 10.2004 3.56107 10.2004 3.26667V1.13334C10.2004 0.838939 10.4393 0.600006 10.7337 0.600006Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M10.7337 5.39999H12.8671C13.1615 5.39999 13.4004 5.63893 13.4004 5.93333V8.06666C13.4004 8.36106 13.1615 8.59999 12.8671 8.59999H10.7337C10.4393 8.59999 10.2004 8.36106 10.2004 8.06666V5.93333C10.2004 5.63893 10.4393 5.39999 10.7337 5.39999Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M10.7337 10.2H12.8671C13.1615 10.2 13.4004 10.4389 13.4004 10.7333V12.8667C13.4004 13.1611 13.1615 13.4 12.8671 13.4H10.7337C10.4393 13.4 10.2004 13.1611 10.2004 12.8667V10.7333C10.2004 10.4389 10.4393 10.2 10.7337 10.2Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M5.93368 0.600006H8.06701C8.36141 0.600006 8.60034 0.838939 8.60034 1.13334V3.26667C8.60034 3.56107 8.36141 3.80001 8.06701 3.80001H5.93368C5.63928 3.80001 5.40034 3.56107 5.40034 3.26667V1.13334C5.40034 0.838939 5.63928 0.600006 5.93368 0.600006Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M5.93368 5.39999H8.06701C8.36141 5.39999 8.60034 5.63893 8.60034 5.93333V8.06666C8.60034 8.36106 8.36141 8.59999 8.06701 8.59999H5.93368C5.63928 8.59999 5.40034 8.36106 5.40034 8.06666V5.93333C5.40034 5.63893 5.63928 5.39999 5.93368 5.39999Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M5.93368 10.2H8.06701C8.36141 10.2 8.60034 10.4389 8.60034 10.7333V12.8667C8.60034 13.1611 8.36141 13.4 8.06701 13.4H5.93368C5.63928 13.4 5.40034 13.1611 5.40034 12.8667V10.7333C5.40034 10.4389 5.63928 10.2 5.93368 10.2Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M1.13375 0.600006H3.26708C3.56148 0.600006 3.80042 0.838939 3.80042 1.13334V3.26667C3.80042 3.56107 3.56148 3.80001 3.26708 3.80001H1.13375C0.839349 3.80001 0.600415 3.56107 0.600415 3.26667V1.13334C0.600415 0.838939 0.839349 0.600006 1.13375 0.600006Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M1.13375 5.39999H3.26708C3.56148 5.39999 3.80042 5.63893 3.80042 5.93333V8.06666C3.80042 8.36106 3.56148 8.59999 3.26708 8.59999H1.13375C0.839349 8.59999 0.600415 8.36106 0.600415 8.06666V5.93333C0.600415 5.63893 0.839349 5.39999 1.13375 5.39999Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                            <path
                                                d="M1.13375 10.2H3.26708C3.56148 10.2 3.80042 10.4389 3.80042 10.7333V12.8667C3.80042 13.1611 3.56148 13.4 3.26708 13.4H1.13375C0.839349 13.4 0.600415 13.1611 0.600415 12.8667V10.7333C0.600415 10.4389 0.839349 10.2 1.13375 10.2Z"
                                                className="active svg-tab"
                                                fill=""
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect
                                                    width="12.8"
                                                    height="12.8"
                                                    className="active svg-tab"
                                                    fill=""
                                                    transform="matrix(-1 0 0 1 13.4004 0.600006)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>

                                {/* <!-- list view tab here --> */}
                                <button
                                    onClick={() => {
                                        activateList(), setOpen(true);
                                    }}
                                    id="list-btn"
                                    type="button"
                                    className={
                                        "focus:outline-none tab-toggle hidden xl:block " +
                                        (!grid ? "active" : "")
                                    }
                                >
                                    <svg
                                        width="16"
                                        className="m-auto"
                                        height="13"
                                        viewBox="0 0 16 13"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.2018 11.8312H4.50293C4.06198 11.8312 3.70459 11.4738 3.70459 11.0329C3.70459 10.5919 4.06198 10.2345 4.50293 10.2345H15.2015C15.6425 10.2345 15.9999 10.5919 15.9999 11.0329C15.9999 11.4738 15.6427 11.8312 15.2018 11.8312Z"
                                            className="svg-tab"
                                        />
                                        <path
                                            d="M15.2018 6.81995H4.50293C4.06198 6.81995 3.70459 6.46256 3.70459 6.02161C3.70459 5.58066 4.06198 5.22327 4.50293 5.22327H15.2015C15.6425 5.22327 15.9999 5.58066 15.9999 6.02161C16.0001 6.46256 15.6427 6.81995 15.2018 6.81995Z"
                                            className="svg-tab"
                                        />
                                        <path
                                            d="M15.2018 1.80878H4.50293C4.06198 1.80878 3.70459 1.45139 3.70459 1.01044C3.70459 0.569489 4.06198 0.212097 4.50293 0.212097H15.2015C15.6425 0.212097 15.9999 0.569489 15.9999 1.01044C15.9999 1.45139 15.6427 1.80878 15.2018 1.80878Z"
                                            className="svg-tab"
                                        />
                                        <path
                                            d="M1.0712 2.14435C1.66334 2.14435 2.14337 1.66432 2.14337 1.07217C2.14337 0.480029 1.66334 0 1.0712 0C0.479052 0 -0.000976562 0.480029 -0.000976562 1.07217C-0.000976562 1.66432 0.479052 2.14435 1.0712 2.14435Z"
                                            className="svg-tab"
                                        />
                                        <path
                                            d="M1.07156 7.09384C1.66371 7.09384 2.14374 6.61381 2.14374 6.02167C2.14374 5.42952 1.66371 4.94949 1.07156 4.94949C0.479419 4.94949 -0.000610352 5.42952 -0.000610352 6.02167C-0.000610352 6.61381 0.479419 7.09384 1.07156 7.09384Z"
                                            className="svg-tab"
                                        />
                                        <path
                                            d="M1.07156 12.0432C1.66371 12.0432 2.14374 11.5632 2.14374 10.971C2.14374 10.3789 1.66371 9.89886 1.07156 9.89886C0.479419 9.89886 -0.000610352 10.3789 -0.000610352 10.971C-0.000610352 11.5632 0.479419 12.0432 1.07156 12.0432Z"
                                            className="svg-tab"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Filter pills here --> */}
                        <div className="flex w-full flex-wrap my-4 text-white">
                            {getChips()}
                        </div>

                        {/* <!-- Car Grid displays here --> */}
                        {data && data.length >= 1 ? (
                            <>
                                {loading ? (
                                    <div className="flex justify-center items-center w-full h-80">
                                        <FadeLoader
                                            color="#BFC1C6"
                                            width={5}
                                            radius={2}
                                            margin={2}
                                            height={5}
                                            loading={loading}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        {grid && (
                                            <div
                                                className={
                                                    "flex box-border flex-wrap justify-center w-full lg:justify-start display-type " +
                                                    (open
                                                        ? " gap-x-6 xl:gap-x-4"
                                                        : " gap-x-4 xl:gap-x-2")
                                                }
                                                id="car-grid"
                                            >
                                                {data?.length > 0 &&
                                                    data?.map(
                                                        (ele, id) =>
                                                            ele && (
                                                                <div
                                                                    key={id}
                                                                    className={
                                                                        open ==
                                                                        true
                                                                            ? " car-display-holder flex flex-col justify-between box-border rounded-md  p-4 mb-4"
                                                                            : " car-display-holder flex flex-col justify-between box-border rounded-md p-4 mb-4"
                                                                    }
                                                                    style={{
                                                                        height: "auto",
                                                                        width:
                                                                            width >
                                                                                900 &&
                                                                            width <
                                                                                1024
                                                                                ? "280px"
                                                                                : open &&
                                                                                  width >
                                                                                      1024
                                                                                ? "305px"
                                                                                : !open &&
                                                                                  width >=
                                                                                      900
                                                                                ? "280px"
                                                                                : width <
                                                                                      1300 &&
                                                                                  width >
                                                                                      625
                                                                                ? "280px"
                                                                                : "100%",
                                                                    }}
                                                                >
                                                                    <a
                                                                        className="cursor-pointer"
                                                                        onClick={() => {
                                                                            dispatch(
                                                                                carDetail(
                                                                                    ele
                                                                                )
                                                                            ),
                                                                                router.push(
                                                                                    {
                                                                                        pathname:
                                                                                            "/search/" +
                                                                                            ele.VIN,
                                                                                    }
                                                                                );

                                                                        }}
                                                                        href={
                                                                            "/search/" +
                                                                            ele.VIN
                                                                        }
                                                                        style={{
                                                                            width:
                                                                                width >=
                                                                                900
                                                                                    ? "100%"
                                                                                    : open &&
                                                                                      width >=
                                                                                          900
                                                                                    ? "273px"
                                                                                    : !open &&
                                                                                      width >=
                                                                                          900
                                                                                    ? "247px"
                                                                                    : "100%",
                                                                            height: "164px",
                                                                        }}
                                                                    >
                                                                        {addImage(
                                                                            ele
                                                                        )}
                                                                    </a>
                                                                    <div className="mt-3">
                                                                        <p className="text-sm primary-black font-medium">
                                                                            {ele?.make &&
                                                                            ele?.model
                                                                                ? [
                                                                                      ele?.make,
                                                                                      ele.model,
                                                                                  ].join(
                                                                                      " "
                                                                                  )
                                                                                : ele?.vehicleName}
                                                                        </p>
                                                                        <p className="sec-black text-sm flex items-center mt-2 font-medium">
                                                                            {" "}
                                                                            {
                                                                                ele?.year
                                                                            }{" "}
                                                                            <span className="ml-6">
                                                                                {/* {Object.entries(
                                                                                    ele?.mileage
                                                                                )
                                                                                    .length <=
                                                                                2
                                                                                    ? ""
                                                                                    : ele?.mileage.replace(
                                                                                          "/",
                                                                                          "."
                                                                                      )} */}
                                                                                {dollarFormatter.format(
                                                                                    ele?.odometer
                                                                                )}{" "}
                                                                                miles
                                                                            </span>
                                                                        </p>
                                                                        <div className="flex justify-between">
                                                                            <p className="flex items-center sec-black text-sm font-normal">
                                                                                {" "}
                                                                                <span className="mr-1">
                                                                                    <img
                                                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                                                        alt="location"
                                                                                    />
                                                                                </span>{" "}
                                                                                {
                                                                                    ele?.pickupLocation
                                                                                }
                                                                            </p>
                                                                            <div className="ml-auto flex self-center">
                                                                                <img
                                                                                    className="img-fluid"
                                                                                    src="../../assets/img/vectors/red-date.svg"
                                                                                    alt="date"
                                                                                />
                                                                                <p className="sec-black font-10 ml-1 font-normal">
                                                                                    {" "}
                                                                                    {new Date(
                                                                                        ele?.auctionEndTime
                                                                                    ).toLocaleDateString(
                                                                                        "en-NG",
                                                                                        {
                                                                                            year: "numeric",
                                                                                            day: "numeric",
                                                                                            month: "long",
                                                                                        }
                                                                                    )}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex pt-4">
                                                                            <div className="flex justify-end w-full">
                                                                                {parseInt(
                                                                                    ele.buyNowPrice
                                                                                ) ? (
                                                                                    <div className="flex w-full justify-between items-center">
                                                                                        <p className="sec-black text-base ml-1 font-normal">
                                                                                            $
                                                                                            {dollarFormatter.format(
                                                                                                ele.buyNowPrice
                                                                                            )}
                                                                                        </p>
                                                                                        <a
                                                                                            type="button"
                                                                                            className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                                                                            onClick={() => {
                                                                                                dispatch(
                                                                                                    carDetail(
                                                                                                        ele
                                                                                                    )
                                                                                                ),
                                                                                                    router.push(
                                                                                                        {
                                                                                                            pathname:
                                                                                                                "/search/" +
                                                                                                                ele.VIN,
                                                                                                        }
                                                                                                    );
                                                                                            }}
                                                                                        >
                                                                                            Buy
                                                                                            Now
                                                                                        </a>
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="flex w-full justify-between items-center">
                                                                                        <p className="sec-black text-base ml-1 font-normal">
                                                                                            $
                                                                                            {dollarFormatter.format(
                                                                                                ele.mmrPrice
                                                                                            )}
                                                                                        </p>
                                                                                        <a
                                                                                            type="button"
                                                                                            className="focus:outline-none text-white primary-btn py-1.5 font-10 fonr-semibold px-5"
                                                                                            onClick={() => {
                                                                                                dispatch(
                                                                                                    carDetail(
                                                                                                        ele
                                                                                                    )
                                                                                                ),
                                                                                                    router.push(
                                                                                                        {
                                                                                                            pathname:
                                                                                                                "/search/" +
                                                                                                                ele.VIN,
                                                                                                        }
                                                                                                    );
                                                                                            }}
                                                                                        >
                                                                                            Place
                                                                                            Bid
                                                                                        </a>
                                                                                    </div>
                                                                                )}

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                    )}
                                            </div>
                                        )}
                                        {/* <!-- Car List displays here --> */}
                                        {!grid && (
                                            <div
                                                className="flex flex-wrap display-type w-full justify-between"
                                                id="car-list"
                                            >
                                                {/* <!-- Car 1 --> */}
                                                {data &&
                                                    data?.map(
                                                        (ele, id) =>
                                                            ele.vehicleName && (
                                                                <div
                                                                    key={id}
                                                                    className="car-display-list-holder flex flex-col md:flex-row flex-wrap w-full p-4 mb-4"
                                                                >
                                                                    {/* <!-- image to details here --> */}
                                                                    <div className="flex w-5/6 flex-col md:flex-row justify-between flex-wrap">
                                                                        <div className="1/2">
                                                                            <a
                                                                                onClick={() => {
                                                                                    dispatch(
                                                                                        carDetail(
                                                                                            ele
                                                                                        )
                                                                                    ),
                                                                                        router.push(
                                                                                            {
                                                                                                pathname:
                                                                                                    "/search/" +
                                                                                                    ele.VIN,
                                                                                            }
                                                                                        );
                                                                                }}

                                                                            >
                                                                                <img
                                                                                    className="img-fluid"
                                                                                    src={
                                                                                        ele
                                                                                            ?.images[0]
                                                                                            ?.image_largeUrl
                                                                                    }
                                                                                    alt=""
                                                                                    style={{
                                                                                        width: "340px",
                                                                                        height: "250px",
                                                                                    }}
                                                                                />
                                                                            </a>
                                                                        </div>

                                                                        {/* <!-- Details here --> */}
                                                                        <div className="w-1/2 py-4">
                                                                            <p className="text-base font-semibold primary-black ">
                                                                                {ele?.vehicleName
                                                                                    ? ele?.vehicleName
                                                                                    : [
                                                                                          ele?.make,
                                                                                          ele.model,
                                                                                      ].join(
                                                                                          " "
                                                                                      )}
                                                                            </p>

                                                                            {/* <!-- location to mileage here  --> */}
                                                                            <table className="min-w-full ">
                                                                                <tbody>
                                                                                    <tr className="py-8">
                                                                                        <td className="py-5  whitespace-no-wrap">
                                                                                            <p className="flex items-center text-xs font-medium primary-black ">
                                                                                                {" "}
                                                                                                <span className="mr-1">
                                                                                                    <img
                                                                                                        src="../../assets/img/vectors/red-location-beacon.svg"
                                                                                                        alt="beacon"
                                                                                                    />
                                                                                                </span>{" "}
                                                                                                {
                                                                                                    ele?.pickupLocation
                                                                                                }
                                                                                            </p>
                                                                                        </td>

                                                                                        <td className="py-1.5 mx-2  whitespace-no-wrap">
                                                                                            <p className="flex items-center text-xs font-medium primary-black ">
                                                                                                {" "}
                                                                                                <span className="mr-1">
                                                                                                    <img
                                                                                                        src="../../assets/img/vectors/speedometer.svg"
                                                                                                        alt="beacon"
                                                                                                    />
                                                                                                </span>{" "}
                                                                                                {dollarFormatter.format(
                                                                                                    ele?.odometer
                                                                                                )}{" "}
                                                                                                miles
                                                                                            </p>
                                                                                        </td>

                                                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                                                            <p className="flex items-center text-xs font-medium primary-black">
                                                                                                {" "}
                                                                                                <span className="mr-1">
                                                                                                    <img
                                                                                                        src="../../assets/img/vectors/red-date.svg"
                                                                                                        alt="beacon"
                                                                                                    />
                                                                                                </span>
                                                                                                {new Date(
                                                                                                    ele?.auctionEndTime
                                                                                                ).toLocaleDateString(
                                                                                                    "en-NG",
                                                                                                    {
                                                                                                        year: "numeric",
                                                                                                        day: "numeric",
                                                                                                        month: "long",
                                                                                                    }
                                                                                                )}
                                                                                            </p>
                                                                                        </td>
                                                                                    </tr>

                                                                                    <tr>
                                                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                                                            <p className="flex font-medium items-center text-xs primary-black">
                                                                                                <span className="font-semibold mr-2">
                                                                                                    Exterior:
                                                                                                </span>
                                                                                                {
                                                                                                    ele?.sourceExteriorColor
                                                                                                }
                                                                                            </p>
                                                                                        </td>

                                                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                                                            <p className="flex font-medium items-center text-xs primary-black">
                                                                                                <span className="font-semibold mr-2">
                                                                                                    Interior:
                                                                                                </span>
                                                                                                {
                                                                                                    ele?.interiorColor
                                                                                                }
                                                                                            </p>
                                                                                        </td>

                                                                                        <td className="py-1.5 pr-20 whitespace-no-wrap">
                                                                                            <p className="flex font-medium items-center text-xs primary-black">
                                                                                                <span className="font-semibold mr-2">
                                                                                                    VIN:
                                                                                                </span>
                                                                                                {
                                                                                                    ele?.VIN
                                                                                                }
                                                                                            </p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <div className="flex w-full justify-between border-t mt-5 pt-8">
                                                                                <p className="flex font-medium items-center text-xs primary-black">
                                                                                    <span className="font-semibold mr-2">
                                                                                        Rating:
                                                                                    </span>
                                                                                    {
                                                                                        ele?.sellerRating
                                                                                    }
                                                                                </p>
                                                                                <p className="flex  font-medium items-center text-xs primary-black">
                                                                                    <span className="font-semibold mr-2">
                                                                                        Seller's
                                                                                        Name:
                                                                                    </span>
                                                                                    {
                                                                                        ele?.sourceSellerName
                                                                                    }
                                                                                </p>
                                                                                <p className="flex font-medium items-center text-xs primary-black">
                                                                                    <span className="font-semibold mr-2">
                                                                                        Seller's
                                                                                        Phone:
                                                                                    </span>
                                                                                    {
                                                                                        ele?.sellerPhone
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-1/6 py-4 items-end flex flex-col">
                                                                        <div className="flex pt-4">
                                                                            <div className="flex justify-end w-full">
                                                                                {Object.entries(
                                                                                    ele.buyNowPrice
                                                                                )
                                                                                    .length >
                                                                                2 ? (
                                                                                    <div className="flex flex-col w-full justify-between items-center">
                                                                                        <p className="sec-black text-base ml-1 font-medium">
                                                                                            $
                                                                                            {dollarFormatter.format(
                                                                                                ele.buyNowPrice
                                                                                            )}
                                                                                        </p>
                                                                                        <div className="relative my-3">
                                                                                            {ele
                                                                                                .buyNowPrice
                                                                                                .length >
                                                                                                0 && (
                                                                                                <>
                                                                                                    <img
                                                                                                        src="../../assets/img/vectors/buy.svg"
                                                                                                        alt="buy"
                                                                                                    />
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="focus:outline-none text-white action-btn buy px-2 items-center flex font-bold font-7 absolute bottom-0 "
                                                                                                    >
                                                                                                        BUY
                                                                                                        NOW
                                                                                                    </button>
                                                                                                </>
                                                                                            )}
                                                                                        </div>
                                                                                        <a
                                                                                            type="button"
                                                                                            className="focus:outline-none text-white primary-btn py-1.5 font-10 font-semibold px-5"
                                                                                            onClick={() => {
                                                                                                dispatch(
                                                                                                    carDetail(
                                                                                                        ele
                                                                                                    )
                                                                                                ),
                                                                                                    router.push(
                                                                                                        {
                                                                                                            pathname:
                                                                                                                "/search/" +
                                                                                                                ele.VIN,
                                                                                                        }
                                                                                                    );
                                                                                            }}
                                                                                        >
                                                                                            Buy
                                                                                            Now
                                                                                        </a>
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="flex flex-col w-full justify-between items-center">
                                                                                        <p className="sec-black text-base ml-1 font-medium">
                                                                                            $
                                                                                            {dollarFormatter.format(
                                                                                                ele.mmrPrice
                                                                                            )}
                                                                                        </p>
                                                                                        <a
                                                                                            type="button"
                                                                                            className="focus:outline-none text-white primary-btn mt-3 py-1.5 font-10 font-semibold px-5"
                                                                                            onClick={() => {
                                                                                                dispatch(
                                                                                                    carDetail(
                                                                                                        ele
                                                                                                    )
                                                                                                ),
                                                                                                    router.push(
                                                                                                        {
                                                                                                            pathname:
                                                                                                                "/search/" +
                                                                                                                ele.VIN,
                                                                                                        }
                                                                                                    );
                                                                                            }}
                                                                                        >
                                                                                            Place
                                                                                            Bid
                                                                                        </a>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                    )}
                                            </div>
                                        )}
                                    </>
                                )}
                            </>
                        ) : (
                            <div className="w-full flex items center justify-center py-40">
                                <h1>No Vehicle matches this parameters</h1>
                            </div>
                        )}
                        {data && data.length >= 1 && (
                            <div className="items-center w-full relative bottom-0 px-6   flex m-auto flex-row justify-end my-5">
                                {Paginate()}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
const mapStateToProps = (state) => {
    const { cars, loading, error, params, makes } = state.Cars;
    return { cars, loading, error, params, makes };
};

export default connect(mapStateToProps, {
    searchTerm,
    fetchMore,
    getMakes,
    filterTabAction,
})(Search);
