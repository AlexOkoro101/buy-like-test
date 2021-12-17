import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    drag: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-center pt-20 pb-3">
        <hr className="orange-underline w-20 m-auto pb-10 " />
        <h4 className="primary-color font-bold text-2xl ">
          JOIN OUR LEAGUE OF 500+ HAPPY CUSTOMERS
        </h4>
      </div>
      <div className="flx splide justify-beween pt-16 ">
        <div className="splide__track ">
          <div className="splide__list">
            <Slider {...settings}>
              <div className=" testimonial__holder p-9 my-2">
                <p
                  style={{ lineHeight: "24px" }}
                  className="primary-color text-sm font-normal"
                >
                  If you can wait over 6 weeks for a car, then you should
                  buy from them. Their cars are good and worth the wait
                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-8 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {" "}
                  Ona. O{" "}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{" "}
                </p>
              </div>

              <div className=" testimonial__holder p-9 my-2">
                <p
                  style={{ lineHeight: "24px" }}
                  className="primary-color text-sm font-normal"
                >
                  I’ve heard a lot about them. Their customer service needs
                   improvement but their cars look great.
                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-8 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {" "}
                  Victor{" "}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{" "}
                </p>
              </div>

              <div className=" testimonial__holder p-9 my-2">
                <p
                  style={{ lineHeight: "24px" }}
                  className="primary-color text-sm font-normal"
                >
                  I got my Range Rover from them. It took some time to get to me but
                   I love the ride! It’s clean as they promised.

                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-8 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {" "}
                  Folk Obi{" "}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{" "}
                </p>
              </div>

              <div className=" testimonial__holder p-9 my-2">
                <p
                  style={{ lineHeight: "24px" }}
                  className="primary-color text-sm font-normal"
                >
                  I’ve actually bought over 10 cars since they started selling
                   in 2018. My family and I love their cars. They are accident-free 
                   and reliable.
                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-8 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {" "}
                  Uche Rhapsohair{" "}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{" "}
                </p>
              </div>

              <div className=" testimonial__holder p-9 my-2">
                <p
                  style={{ lineHeight: "24px" }}
                  className="primary-color text-sm font-normal"
                >
                 This is my 4th purchase in 2 years and I will keep coming back.
                 They have an eye for quality cars

                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-8 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {" "}
                  Adetoye Oludare{" "}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{" "}
                </p>
              </div>

              <div className=" testimonial__holder p-9 my-2">
                <p
                  style={{ lineHeight: "24px" }}
                  className="primary-color text-sm font-normal"
                >
                  Their prices are not so cheap but their cars are 
                  accident-free unlike the ones I was seeing in Nigeria

                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-8 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {" "}
                  Chibuike Danny{" "}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{" "}
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
