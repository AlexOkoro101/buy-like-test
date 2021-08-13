import React, { useState } from 'react';
import Router, { withRouter } from 'next/router';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import { requestVehicle } from '../redux/actions/requestActions';
import { connect } from 'react-redux';

const confirmation = ({ router: { query }, requestVehicle }) => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    make: query.make,
    model: query.model,
    year: query.year
  });
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [phone, setPhone] = useState('');

  // Errors
  const [firstnameError, setFirstnameError] = useState(null);
  const [lastnameError, setLastnameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [makeError, setMakeError] = useState(null);
  const [modelError, setModelError] = useState(null);
  const [yearError, setYearError] = useState(null);
  

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const { firstname, lastname, email, make, model, year } = user;
  const onSubmit = (e) => {
    e.preventDefault();

    if (firstname.length === 0) {
      setFirstnameError('Invalid firstname field !');
    } else {
      setFirstnameError(null);
    }

    if (lastname.length === 0) {
      setLastnameError('Invalid lastname field !');
    } else {
      setLastnameError(null);
    }

    if (phone.length === 0) {
      setPhoneError('Invalid phone field !');
    } else {
      setPhoneError(null);
    }

    if (email.length === 0) {
      setEmailError('Invalid email field !');
    } else {
      setEmailError(null);
    }

    if (email.length === 0) {
      setEmailError('Invalid email field !');
    } else {
      setEmailError(null);
    }

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

    if (
      firstname.length > 0 &&
      lastname.length > 0 &&
      phone.length > 0 &&
      email.length > 0 &&
      make.length > 0 &&
      model.length > 0 &&
      year.length > 0
    ) {
      (async () => {
        setLoading(true);
        await requestVehicle({ ...user });
        setLoading(false);
        Router.push('/success');
      })();
    }
  };

  return (
    <>
      {/* Confirmation section here */}
      <section className="confirmation__section mt-1 pt-20 pb-32 px-2 lg:px-20 ">
        <div className="confirmation__holder w-full md:w-4/5 lg:w-full xl:w-4/5 m-auto pt-4 p-7 px-7">
          <div className="text-center pb-2">
            <p className="confirmation-header font-medium">Complete request</p>
          </div>
          <hr className="complete-border" />
          {/* request details here */}
          <div className="flex flex-wrap justify-between lg:flex-nowrap pt-6">
            {/* Car here */}
            <div className="red__ellipse  self-center align-middle">
              <img src="./assets/img/audi-2.svg" className="mt-4 " alt="audi" />
            </div>
            {/* details here */}
            <div className=" mt-5 lg:mt-0 w-full lg:w-1/2">
              {/* Headers here */}
              <div className="flex ">
                <div>
                  <p className="filtered__text font-semibold text-sm">
                    Selection
                  </p>
                </div>
                <div className="ml-auto">
                  <button
                    type="button"
                    className=" flex filtered__text text-sm focus:outline-none border-none"
                    onClick={() => setEdit(true)}
                  >
                    {' '}
                    <span className="mt-1 mx-0.5">
                      <img
                        src="./assets/img/vectors/edit-icon.svg"
                        alt="edit-icon"
                      />
                    </span>{' '}
                    Edit
                  </button>
                </div>
              </div>
              {/* Car details here */}
              {!edit && (
                <div
                  className="table mt-2"
                  style={{ borderSpacing: '0px 7px' }}
                >
                  <div className="table-row">
                    <p className="table-cell filtered__text font-semibold text-sm">
                      Make
                    </p>
                    <p className="table-cell text-sm filtered__text px-6">
                      {query.make}
                    </p>
                  </div>
                  <div className="table-row">
                    <p className="table-cell filtered__text font-semibold text-sm">
                      Model
                    </p>
                    <p className="table-cell text-sm filtered__text px-6">
                      {query.model}
                    </p>
                  </div>
                  {/* <div className="table-row">
                  <p className="table-cell filtered__text font-semibold text-sm">
                    Price Range
                  </p>
                  <p className="table-cell text-sm filtered__text px-6">
                    {query.price}
                  </p>
                </div> */}
                  <div className="table-row">
                    <p className="table-cell filtered__text font-semibold text-sm">
                      Year
                    </p>
                    <p className="table-cell text-sm filtered__text px-6">
                      {query.year}
                    </p>
                  </div>
                </div>
              )}

              {/* Form heres */}
              <div className="mt-4">
                <form onSubmit={onSubmit}>
                  {/* Edit */}
                  {edit && (
                    <>
                      {/* Select make here */}
                      <div className="flex mb-3 flex-wrap lg:flex-nowrap">
                        <div className="flex flex-col">
                          <label
                            htmlFor="make"
                            className="filtered__text font-semibold text-sm pb-1"
                          >
                            Select Make
                          </label>
                          <select
                            name="make"
                            id="make"
                            className="input-control box-border px-2 focus:outline-none text-sm"
                            onChange={onChange}
                            defaultValue={'DEFAULT'}
                          >
                            <option value={make}>{make}</option>
                          </select>
                          {makeError ? (
                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                              {makeError}
                            </span>
                          ) : null}
                        </div>
                        {/* Select Model here */}
                        <div className="flex flex-col ml-0 md:ml-3 lg:ml-3">
                          <label
                            htmlFor="model "
                            className="filtered__text font-semibold text-sm pb-1"
                          >
                            Select Model
                          </label>
                          <select
                            name="model"
                            id="model "
                            className="input-control box-border px-2 focus:outline-none text-sm "
                            style={{ width: '170px' }}
                            onChange={onChange}
                            defaultValue={'DEFAULT'}
                          >
                            <option value={model}>{model}</option>
                          </select>
                          {modelError ? (
                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                              {modelError}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex mb-3 flex-wrap lg:flex-nowrap">
                        {/* Select Year here */}
                        <div className="flex flex-col">
                          <label
                            htmlFor="year "
                            className="filtered__text font-semibold text-sm pb-1"
                          >
                            Select Year
                          </label>
                          <select
                            name="year"
                            id="year "
                            className="input-control box-border px-2 focus:outline-none text-sm "
                            style={{width: '360px'}}
                            onChange={onChange}
                            defaultValue={'DEFAULT'}
                          >
                            <option value={year}>{year}</option>
                          </select>
                          {yearError ? (
                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                              {yearError}
                            </span>
                          ) : null}
                        </div>

                        {/* Select Price Range here */}
                        {/* <div className="flex flex-col ml-0 md:ml-3 lg:ml-3">
                          <label
                            htmlFor="range "
                            className="filtered__text font-semibold text-sm pb-1"
                          >
                            Select Price Range
                          </label>
                          <select
                            name="price"
                            id="range "
                            className="input-control box-border px-2 focus:outline-none text-sm"
                            onChange={onChange}
                            defaultValue={'DEFAULT'}
                          >
                            <option value={price}>{price}</option>
                          </select>
                          {priceError ? (
                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                              {priceError}
                            </span>
                          ) : null}
                        </div> */}
                      </div>
                    </>
                  )}
                  {/* First part */}
                  <div className="flex mb-3 flex-wrap lg:flex-nowrap">
                    <div className="flex flex-col">
                      <label
                        className="filtered__text font-semibold text-sm pb-1"
                        htmlFor="first-name"
                      >
                        First name
                      </label>
                      <input
                        className="input-control box-border px-2 focus:outline-none text-sm "
                        type="text"
                        id="first-name"
                        name="firstname"
                        placeholder="Enter first name"
                        onChange={onChange}
                      />
                      {firstnameError ? (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          {firstnameError}
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-col ml-0 md:ml-3 lg:ml-3">
                      <label
                        className="filtered__text font-semibold text-sm pb-1"
                        htmlFor="last-name"
                      >
                        Last name
                      </label>
                      <input
                        className="input-control box-border px-2 focus:outline-none text-sm"
                        type="text"
                        id="last-name"
                        name="lastname"
                        placeholder="Enter last name"
                        onChange={onChange}
                      />
                      {lastnameError ? (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          {lastnameError}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  {/* Second part */}
                  <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="flex flex-col">
                      <label
                        className="filtered__text font-semibold text-sm pb-1"
                        htmlFor="number"
                      >
                        Phone number
                      </label>

                      <PhoneInput
                        international
                        value={phone}
                        placeholder="Enter phone number"
                        onChange={setPhone}
                        className="input-control box-border px-2 focus:outline-none text-sm"
                        style={{ outline: 'none' }}
                      />
                      {phoneError ? (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          {phoneError}
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-col ml-0 md:ml-3 lg:ml-3">
                      <label
                        className="filtered__text font-semibold text-sm pb-1"
                        htmlFor="last-name"
                      >
                        Email addres
                      </label>
                      <input
                        className="input-control box-border px-2 focus:outline-none text-sm"
                        type="email"
                        id="email-address"
                        name="email"
                        placeholder="Enter email address"
                        onChange={onChange}
                      />
                      {emailError ? (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          {emailError}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="lg:text-center my-7">
                    <button
                      disabled={loading ? true : false}
                      className="estimate__btn focus:outline-none font-semibold px-4"
                      type="submit"
                    >
                      {' '}
                      {loading ? 'Processing' : ' SUBMIT REQUEST'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default connect(null, { requestVehicle })(withRouter(confirmation));
