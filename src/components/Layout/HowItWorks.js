const HowItWorks = () => {
  return (
    <>
      <div className="px-2 lg:px-20 pt-16 ">
          <div className="text-center ">
              <hr className="red-underline w-20 m-auto pb-3 " />
              <h4 className="font-bold primary-color text-2xl ">HOW IT WORKS</h4>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between pt-12 ">

              {/* <!-- Search here --> */}
              <div className="works__holder px-8 pt-10 pb-16 mb-3 md:mx-4 ">
                  <img src="./assets/img/vectors/search-icon.svg " alt="search-icon " />
                  <h5 className="font-bold primary-red text-lg py-3 ">Search for a car </h5>
                  <p className="filtered__text font-normal ">Use the filters to find what you’re looking for.
                      Green light and red light options available.</p>
              </div>

              {/* <!-- MAke an offer here --> */}
              <div className="works__holder px-8 pt-10 pb-16 mb-3 ">
                  <img src="./assets/img/vectors/offer-icon.svg " alt="offer-icon " />
                  <h5 className="font-bold primary-red text-lg py-3 ">Make an offer</h5>
                  <p className="filtered__text font-normal ">You can choose suggested price or make an offer.
                      If it’s a buy now car, click to proceed with the buy now.</p>
              </div>

              {/* <!-- MAke deposit here --> */}
              <div className="works__holder px-8 pt-10 pb-16 mb-3 md:mx-4 ">
                  <img src="./assets/img/vectors/deposit-icon.svg " alt="deposit-icon " />
                  <h5 className="font-bold primary-red text-lg py-3 ">Make deposit</h5>
                  <p className="filtered__text font-normal ">Choose delivery location, make deposit and sign
                      online paper work. </p>
              </div>

              {/* <!-- MAke an offer here --> */}
              <div className="works__holder px-8 pt-10 pb-16 mb-3 ">
                  <img src="./assets/img/vectors/handle-icon.svg " className="pt-6 " alt="handle-icon " />
                  <h5 className="font-bold primary-red text-lg py-3 ">We handle the rest</h5>
                  <p className="filtered__text font-normal ">We bid on your selected car, after which you make
                      final payment and then we deliver the car to you or you pick up.</p>
              </div>
          </div>

      </div>
      <div className="text-center mt-5">
          <button type="button"
              className="focus:outline-none text-white text-sm primary-btn px-8 h-9 font-semibold">SEE HOW IT
              WORKS</button>
      </div>
    </>
  );
};

export default HowItWorks;
