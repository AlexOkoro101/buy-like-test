import React, { useState } from 'react';
import Router from 'next/router';

const Request = () => {
  const [vehicle, setRequest] = useState({
    make: '',
    model: '',
    year: '',
    //price: ''
  });

  // Errors
  const [makeError, setMakeError] = useState(null);
  const [modelError, setModelError] = useState(null);
  const [yearError, setYearError] = useState(null);
  //const [priceError, setPriceError] = useState(null);

  const { make, model, year } = vehicle;
  const onSubmit = (e) => {
    e.preventDefault();

    if (make.length === 0) {
      setMakeError('Invalid make field !');
    } else {
      setMakeError(null);
    }

    if (model.length === 0) {
      setModelError('Invalid model field !');
    } else {
      setModelError(null);
    }

    if (year.length === 0) {
      setYearError('Invalid year field !');
    } else {
      setYearError(null);
    }

    // if (price.length === 0) {
    //   setPriceError('Invalid price field !');
    // } else {
    //   setPriceError(null);
    // }

    if (make.length > 0 && model.length > 0 && year.length > 0) {
      Router.push({
        pathname: '/confirmation',
        query: vehicle,
      });
    }
  };

  const onChange = (e) =>
    setRequest({ ...vehicle, [e.target.name]: e.target.value });
  return (
    <>
      <div className=" request__holder relative w-full p-14 ">
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap 2xl:justify-center ">
            {/* Select make here */}
            <div className="flex flex-col pb-5 ">
              <label
                htmlFor="make"
                className="primary-color font-bold text-sm "
              >
                Select Make
              </label>
              <select
                name="make"
                id="make"
                className="form__control focus:outline-none "
                onChange={onChange}
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled>
                  Select Model
                </option>
                <option>Range Rover</option>
              </select>
              {makeError ? (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {makeError}
                </span>
              ) : null}
            </div>
            {/* Select Model here */}
            <div className="flex flex-col ml-1 xl:ml-1 lg:ml-3 pb-5 ">
              <label
                htmlFor="model "
                className="primary-color font-bold text-sm "
              >
                Select Model
              </label>
              <select
                name="model"
                id="model "
                className="form__control focus:outline-none "
                onChange={onChange}
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled>
                  Select Model
                </option>
                <option>Evoque</option>
              </select>
              {modelError ? (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {modelError}
                </span>
              ) : null}
            </div>
            {/* Select Year here */}
            <div className="flex flex-col ml-1 xl:ml-1 lg:ml-3 pb-5 ">
              <label
                htmlFor="year "
                className="primary-color font-bold text-sm "
              >
                Select Year
              </label>
              <select
                name="year"
                id="year "
                className="form__control focus:outline-none "
                onChange={onChange}
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled>
                  Select Year
                </option>
                <option>2020</option>
              </select>
              {yearError ? (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {yearError}
                </span>
              ) : null}
            </div>
            {/* Select Price Range here */}
            {/* <div className="flex flex-col ml-1 xl:ml-1 pb-5 ">
              <label
                htmlFor="range "
                className="primary-color font-bold text-sm "
              >
                Select Price Range
              </label>
              <select
                name="price"
                id="range "
                className="form__control focus:outline-none"
                onChange={onChange}
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled>
                  Select Price Range
                </option>
                <option>$150.000 - $200,000</option>
              </select>
              {priceError ? (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {priceError}
                </span>
              ) : null}
            </div> */}
            {/* Request button here */}
            <div className="flex-col flex mt-4 pt-1 ml-1 xl:ml-1 lg:ml-3 pb-5 ">
              <button
                className="estimate__btn focus:outline-none font-semibold px-2"
                type="submit"
              >
                REQUEST ESTIMATE
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Request;
