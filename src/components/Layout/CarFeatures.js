import React, { useState } from 'react';

const CarFeatures = () => {
  const [heading, setHeading] = useState(`Green Light Car`);
  const [
    body,
    setBody,
  ] = useState(`The vehicle is sold ride and drive. The vehicle is sold
  needing less than $700.00 in one single repair. The buyer has
  until 4:00pm the next day to report any problems. The vehicle
  is sold ride and drive.`);
  const [greenStatus, setGreenStatus] = useState(true);
  const [redStatus, setRedStatus] = useState(false);
  const [blueStatus, setBlueStatus] = useState(false);
  const [odometerStatus, setOdometerStatus] = useState(false);

  const onGreenLight = () => {
    setHeading(`Green Light Car`);
    setBody(` The vehicle is sold ride and drive. The vehicle is sold
    needing less than $700.00 in one single repair. The buyer has
    until 4:00pm the next day to report any problems. The vehicle
    is sold ride and drive.`);
    setGreenStatus(true);
    setRedStatus(false);
    setBlueStatus(false);
    setOdometerStatus(false);
  };

  const onRedLight = () => {
    setHeading(`Red Light Car`);
    setBody(` The vehicle is sold ride and drive. The vehicle is sold
    needing less than $700.00 in one single repair. The buyer has
    until 4:00pm the next day to report any problems. The vehicle
    is sold ride and drive.`);
    setRedStatus(true);
    setGreenStatus(false);
    setBlueStatus(false);
    setOdometerStatus(false);
  };

  const onBlueLight = () => {
    setHeading(`Blue Light Car`);
    setBody(` The vehicle is sold ride and drive. The vehicle is sold
    needing less than $700.00 in one single repair. The buyer has
    until 4:00pm the next day to report any problems. The vehicle
    is sold ride and drive.`);
    setBlueStatus(true);
    setGreenStatus(false);
    setRedStatus(false);
    setOdometerStatus(false);
  };

  const onOdometerLight = () => {
    setHeading(`Odometer Light Car`);
    setBody(` The vehicle is sold ride and drive. The vehicle is sold
    needing less than $700.00 in one single repair. The buyer has
    until 4:00pm the next day to report any problems. The vehicle
    is sold ride and drive.`);
    setOdometerStatus(true);
    setGreenStatus(false);
    setRedStatus(false);
    setBlueStatus(false);
  };

  return (
    <>
      <div
        className={`white__bg px-3 lg:px-5 xl:px-40 ${
          greenStatus
            ? 'bg-green'
            : redStatus
            ? 'bg-red'
            : blueStatus
            ? 'bg-blue'
            : odometerStatus
            ? 'bg-odo'
            : null
        }`}
      >
        <div className="py-14">
          <div className="feature__holder ">
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap pt-4">
              <div className="w-full lg:w-1/2">
                {/* First Car here */}
                <div
                  className={`flex items-center features__bg ${
                    greenStatus ? 'active' : null
                  } px-5 py-2`}
                  style={{ cursor: 'pointer' }}
                  onClick={onGreenLight}
                >
                  <div>
                    <h5 className="feature__header font-medium text-lg">
                      Green Light Car
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <svg
                      width={12}
                      height={22}
                      viewBox="0 0 12 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 2L10.5 11L1.5 20"
                        stroke="#1F2A53"
                        strokeOpacity="0.75"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/* Second Car here */}
                <div
                  className={`flex items-center features__bg ${
                    redStatus ? 'active' : null
                  } px-5 py-2`}
                  style={{ cursor: 'pointer' }}
                  onClick={onRedLight}
                >
                  <div>
                    <h5 className="feature__header font-medium text-lg">
                      Red Light Car
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <svg
                      width={12}
                      height={22}
                      viewBox="0 0 12 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 2L10.5 11L1.5 20"
                        stroke="#1F2A53"
                        strokeOpacity="0.75"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/* Third Car here */}
                <div
                  className={`flex items-center features__bg ${
                    blueStatus ? 'active' : null
                  } px-5 py-2`}
                  style={{ cursor: 'pointer' }}
                  onClick={onBlueLight}
                >
                  <div>
                    <h5 className="feature__header font-medium text-lg">
                      Blue Light Car
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <svg
                      width={12}
                      height={22}
                      viewBox="0 0 12 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 2L10.5 11L1.5 20"
                        stroke="#1F2A53"
                        strokeOpacity="0.75"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/* Fourth Car here */}
                <div
                  className={`flex items-center features__bg ${
                    odometerStatus ? 'active' : null
                  } px-5 py-2`}
                  style={{ cursor: 'pointer' }}
                  onClick={onOdometerLight}
                >
                  <div>
                    <h5 className="feature__header font-medium text-lg">
                      Odometer
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <svg
                      width={12}
                      height={22}
                      viewBox="0 0 12 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 2L10.5 11L1.5 20"
                        stroke="#1F2A53"
                        strokeOpacity="0.75"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/* Fifth Car here */}
                {/* <div className="flex items-center features__bg px-5 py-2">
                      <div>
                        <h5 className="feature__header font-medium text-lg">
                          Read more
                        </h5>
                      </div>
                      <div className="ml-auto">
                        <svg
                          width={12}
                          height={22}
                          viewBox="0 0 12 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 2L10.5 11L1.5 20"
                            stroke="#1F2A53"
                            strokeOpacity="0.75"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div> */}
              </div>
              {/* Details here */}
              <div className="pt-6 px-8 pb-3">
                <h5 className="primary-color font-semibold text-lg">
                  {heading}
                </h5>
                <p className="pt-4 filtered__text text-base font-normal">
                  {body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarFeatures;
