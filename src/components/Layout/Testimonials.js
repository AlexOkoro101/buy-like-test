import Slider from 'react-slick';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
      <div className="text-center pt-20 lg:pt-16 ">
        <hr className="orange-underline w-20 m-auto pb-7 " />
        <h4 className="primary-color font-bold text-2xl ">
          JOIN OUR LEAGUE OF 500+ HAPPY CUSTOMERS
        </h4>
      </div>
      <div className="flx splide justify-beween pt-12 ">
        <div className="splide__track ">
          <div className="splide__list">
            <Slider {...settings}>
              <div className=" splide__slide testimonial__holder p-8 ">
                <p className="primary-color text-base font-normal ">
                  The car is exactly what I saw in the picture. The staff were
                  good listeners and professional. The car is exactly what I saw
                  in the picture.
                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-4 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {' '}
                  Dare Thomas{' '}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{' '}
                </p>
              </div>
              <div className=" splide__slide testimonial__holder p-8 ">
                <p className="primary-color text-base font-normal ">
                  The car is exactly what I saw in the picture. The staff were
                  good listeners and professional. The car is exactly what I saw
                  in the picture.
                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-4 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {' '}
                  Dare Thomas{' '}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{' '}
                </p>
              </div>
              <div className=" splide__slide testimonial__holder p-8 ">
                <p className="primary-color text-base font-normal ">
                  The car is exactly what I saw in the picture. The staff were
                  good listeners and professional. The car is exactly what I saw
                  in the picture.
                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-4 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {' '}
                  Dare Thomas{' '}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{' '}
                </p>
              </div>
              <div className=" splide__slide testimonial__holder p-8 ">
                <p className="primary-color text-base font-normal ">
                  The car is exactly what I saw in the picture. The staff were
                  good listeners and professional. The car is exactly what I saw
                  in the picture.
                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-4 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {' '}
                  Dare Thomas{' '}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{' '}
                </p>
              </div>{' '}
              <div className=" splide__slide testimonial__holder p-8 ">
                <p className="primary-color text-base font-normal ">
                  The car is exactly what I saw in the picture. The staff were
                  good listeners and professional. The car is exactly what I saw
                  in the picture.
                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-4 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {' '}
                  Dare Thomas{' '}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{' '}
                </p>
              </div>
              <div className=" splide__slide testimonial__holder p-8 ">
                <p className="primary-color text-base font-normal ">
                  The car is exactly what I saw in the picture. The staff were
                  good listeners and professional. The car is exactly what I saw
                  in the picture.
                </p>
                {/* Star ratings here */}
                <div className="star__rating flex pt-4 pb-2 ">
                  <span className="fa fa-star star checked " />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star checked ml-1" />
                  <span className="fa fa-star star  ml-1" />
                </div>
                <p className="font-bold text-base primary-color py-2 ">
                  {' '}
                  Dare Thomas{' '}
                </p>
                <p className="text-sm font-normal testinonial__location ">
                  Lagos, Nigeria{' '}
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
