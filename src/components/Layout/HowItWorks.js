const HowItWorks = () => {
  return (
    <>
      <div className="px-2 lg:px-14 pt-16 ">
        <div className="text-center ">
          <hr className="orange-underline w-20 m-auto pb-4 " />
          <h4 className="font-bold primary-color text-2xl ">HOW IT WORKS</h4>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between 2xl:justify-evenly pt-12 ">
          {/* <!-- Search here --> */}
          <div className="works__holder px-8 pt-9 mb-3 ">
            <div className="h-16 flex items-center">
              <img
                src="./assets/img/vectors/search-icon.svg "
                className="my-auto"
                alt="search-icon "
              />
            </div>

            <h5 className="font-bold primary-red text-lg pt-4 ">
              Search for a car{" "}
            </h5>
            <p className="filtered__text text-sm  leading-6 font-normal pt-2 w-full lg:w-5/6">
              Use the filters to find what you’re looking for. Green light and
              red light options available.
            </p>
          </div>

          {/* <!-- Make an offer here --> */}
          <div className="works__holder h-auto lg:h-17 px-8 pt-9 mb-3">
            <div className="h-16 flex items-center">
              <img
                src="./assets/img/vectors/offer-icon.svg"
                className="my-auto"
                alt="offer-icon "
              />
            </div>

            <h5 className="font-bold primary-red text-lg pt-4 ">
              Make an offer
            </h5>
            <p className="filtered__text text-sm  leading-6 font-normal pt-2 w-full lg:w-5/6">
              You can choose suggested price or make an offer. If it’s a buy now
              car, click to proceed with the buy now.
            </p>
          </div>

          {/* <!-- Make deposit here --> */}
          <div className="works__holder h-auto lg:h-17 px-8 pt-9 mb-3">
            <div className="h-16 flex items-center">
              <img
                src="./assets/img/vectors/deposit-icon.svg "
                className="my-auto"
                alt="deposit-icon "
              />
            </div>

            <h5 className="font-bold primary-red text-lg pt-4 ">
              Make deposit
            </h5>
            <p className="filtered__text text-sm  leading-6 font-normal pt-2 w-full lg:w-5/6">
              Choose delivery location, make deposit and sign online paper work.
            </p>
          </div>

          {/* <!-- Make an offer here --> */}
          <div className="works__holder h-auto lg:h-17 px-8 pt-9 mb-3">
            <div className="h-16 flex items-center">
              <img
                src="./assets/img/vectors/handle-icon.svg "
                className="my-auto"
                alt="handle-icon "
              />
            </div>
            <h5 className="font-bold primary-red text-lg pt-4 ">
              We handle the rest
            </h5>
            <p className="filtered__text text-sm  leading-6 font-normal pt-2 w-full lg:w-5/6">
              We bid on your selected car, after which you make final payment
              and then we deliver the car to you or you pick up.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-9">
        <button
          type="button"
          className="focus:outline-none text-white text-sm estimate__btn px-8  font-semibold"
        >
          SEE HOW IT WORKS
        </button>
      </div>
    </>
  );
};

export default HowItWorks;
