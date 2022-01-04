import React from "react";

const About = () => {
  return (
    <div style={{ marginTop: "67px" }} className=" p-10 lg:py-20 lg:px-40 bg-white">
      <div className="text-md">
        <div className=" lg:flex lg:justify-between">
        <div className="lg:w-3/6 ">
          <h1 className=" text-5xl md:text-7xl lg:text-7xl xl:text-7xl mb-2" style={{ color: "#D80739" }}>
            About Us
          </h1>
          <div className="py-1">
            We are a team of young passionate car lovers and experienced
            dealers. Thorough understanding of the vehicle exportation process
            we have sold thousands of cars,resourceful and we know how to find
            the cheapest deals. We prioritize customer satisfaction with their
            cars. We have a passion for delivering clean cars that stand out in
            the market We understand car parts that belong to particular trims,
            this helps you reduce the tricks car dealers use in covering
            accident cars.
          </div>
        </div>
        <div className=" hidden lg:block relative lg:w-2/5 text-center px-20">
          <div
            className=" rounded-full bg-red-500"
            style={{
              width: "320px",
              height: "320px",
              background: "#D80739",
            }}
          >
            <div
              className="absolute top-24 xl:top-14 "
              // style={{ width: "460px", height: "460px" }}
            >
              {" "}
              <div>
                <img
                  src="./assets/img/hero-mercedes.svg"
                  alt="Hero-Image "
                  className="hero-image w-full h-full"
                />
                {/* <img src=" " alt="Hero-Image " className="hero-image "> */}
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="pt-10">
          <div>
            Automated logistics: we explain how automation will make logistics
            faster and keep customers updated. Very detailed and follow up on
            every process We understand every component of a car. It helps with
            making sure we are delivering cars that are mechanically sound to
            customers. We are passionate about tech: Built series of
            applications in the past, Passionate about building solutions that
            enable car dealers and car buyers to get the best of deals and
            relieve them the stress of worrying about any part of the car buying
            process, our understanding of machine learning and data in the auto
            industry set us apart. We know this because we’ve seen some other
            local car startups work.We filter out accident cars We give you
            wholesale prices on cars- cut off dealers and connect you directly
            to the wholesale market Keep you up to date in the entire process
          </div>
          <div
            className="w-full h-1 border rounded-lg my-5"
            style={{ height: "", background: "#D80739" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
