import React, { useEffect } from 'react';
import Meta from '../src/components/Head/Meta';
import anime from 'animejs';


const Home = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Easy Buy Animation here
      var easyBuyTimeline = anime.timeline({
        autoplay: true,
      });

      easyBuyTimeline.add({
        targets: '.rover',
        translateX: [-70, 0],
        easing: 'easeInOutQuad',
        duration: 800,
      });

      easyBuyTimeline.add(
        {
          targets: '.subtract',
          opacity: [0, 1],
          translateY: [70, 0],
          easing: 'easeInOutQuad',
          duration: 1000,
        },
        '+=100'
      );

      easyBuyTimeline.add(
        {
          targets: '.sold',
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          duration: 1000,
        },
        '+=100'
      );

      // var easyBuywaypoint = new Waypoint({
      //   element: document.getElementById('easyBuywaypoint'),
      //   handler: function () {
      //     easyBuyTimeline.restart();
      //   },
      //   offset: 250,
      // });

      //Wholesale animations here
      var wholesaleTimeline = anime.timeline({
        autoplay: true,
      });

      wholesaleTimeline.add({
        targets: '.red__ellipse',
        // direction: 'alternate',
        // loop: true,
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1200,
      });

      wholesaleTimeline.add(
        {
          targets: '.audi',
          translateX: -30,
          easing: 'linear',
          duration: 1000,
        },
        200
      );

      // var Wholesalewaypoint = new Waypoint({
      //   element: document.getElementById('Wholesalewaypoint'),
      //   handler: function () {
      //     wholesaleTimeline.restart();
      //   },
      //   offset: 250,
      // });

      // filteredCarsTimeline Animation here
      var filteredCarsTimeline = anime.timeline({
        autoplay: true,
      });

      filteredCarsTimeline.add({
        targets: '.purple__ellipse',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1200,
      });

      filteredCarsTimeline.add(
        {
          targets: '.tesla',
          translateX: 30,
          easing: 'linear',
          duration: 1000,
        },
        200
      );

      // var filteredwaypoint = new Waypoint({
      //   element: document.getElementById('filteredwaypoint'),
      //   handler: function () {
      //     filteredCarsTimeline.restart();
      //   },
      //   offset: 250,
      // });

      var vehicles = [
        {
          title: 'Range rover',
          image: './assets/img/hero-range.svg',
          price: '$20,000',
          year: '2019',
        },
        {
          title: 'Audi',
          image: './assets/img/audi.svg',
          price: '$15,000',
          year: '2020',
        },
      ];

      // Hero Animations here

      var heroTimeline = anime.timeline({
        loop: true,
        autoplay: true,
      });

      heroTimeline.add({
        targets: 'progress',
        value: 100,
        easing: 'linear',
        autoplay: true,
        duration: 3800,
      });

      heroTimeline.add(
        {
          targets: '.hero-image',
          translateX: -35,
          easing: 'linear',
          duration: 1240,
        },
        0
      );

      heroTimeline.add({
        targets: [
          'progress',
          '.price-mileage-div ',
          '.car-details-div',
          '.hero-btns',
        ],
        opacity: 0,
        easing: 'linear',
      });

      heroTimeline.add(
        {
          targets: ['.hero-image', '.car__year', 'car__price'],
          opacity: 0,
          easing: 'linear',
          complete: function () {
            let image = document.querySelector('.hero-image ');
            let title = document.querySelector('#car__name');
            let year = document.querySelector('#car__year');
            let price = document.querySelector('.car__price');

            for (let i = 0; i < vehicles.length; i++) {
              image.src = vehicles[i].image;
              title.innerHTML = vehicles[i].title;
              year.innerHTML = vehicles[i].year;
              price.innerHTML = vehicles[i].price;
            }
          },
        },
        '+=5'
      );

      // Button controllers here
      const next = () => {
        //SHould track array and move to next Item then do the below
        heroTimeline.restart;
      };

      const previous = () => {
        //SHould track array and move to previous Item then do the below
        heroTimeline.restart;
      };
    }
  });

  
  return (
    <>
      <Meta />
      <main>
        {/* Hero section here */}
        <section className="Hero__section mt-1 px-2 lg:px-20 ">
          {/* Hero Text here */}
          <div className="text-center pt-10">
            <h1 className="text-3xl  lg:text-5xl primary-color font-bold hero-text ">
              WHAT CAR ARE YOU LOOKING FOR? <br />{' '}
              <span className="font-medium hero__sub__text text-3xl lg:text-4xl ">
                LET’S HELP YOU FIND IT
              </span>{' '}
            </h1>
          </div>
          {/* Hero Image here */}
          <div className="flex flex-wrap justify-center lg:justify-end 2xl:justify-center lg:flex-nowrap md:flex-nowrap mt-4 pb-24 ">
            <div>
              <img
                src="./assets/img/hero-range.svg"
                alt="Hero-Image "
                className="hero-image "
              />
              {/* <img src=" " alt="Hero-Image " class="hero-image "> */}
            </div>
            <div className="hero__holder p-4 mt-3 mx-2 lg:ml-10 ">
              <div className="flex ">
                {/* Progress bar here */}
                <div className=" w-1/2 ">
                  <progress value={10} max={100} />
                </div>
                {/* Controller here */}
                <div className="ml-auto hero-btns">
                  <button
                    type="button "
                    className=" hero__btn focus:outline-none py-1 px-2 mx-3 "
                    id="prev-btn"
                    onClick={() => console.log('Prev')}
                  >
                    <img
                      src="./assets/img/vectors/left-arrow.svg "
                      alt="arrow "
                    />
                  </button>
                  <button
                    type="button "
                    className=" hero__btn focus:outline-none py-1 px-2"
                    id="next-btn"
                    onClick={() => console.log('Next')}
                  >
                    <img
                      src="./assets/img/vectors/right-arrow.svg "
                      alt="arrow "
                    />
                  </button>
                </div>
              </div>
              {/* Car details here */}
              <div className="primary-color car-details-div text-base mt-1 ">
                <p className="font-bold " id="car__name">
                  RANGE ROVER SPORT
                </p>
                <p className="font-normal" id="car__year">
                  2019
                </p>
              </div>
              {/* Price & milage details here */}
              <div className="primary-color flex mt-3 price-mileage-div ">
                <div className="primary-color ">
                  <h5 className="font-medium mileage ">2,124 mi</h5>
                  <p className="font-bold range ">RANGE</p>
                </div>
                {/* dividing line here */}
                <div className="vl mx-3 " />
                {/* Price here */}
                <div>
                  <h3 className="primary-red font-extrabold car__price">
                    $111,900
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

     

      
        {/* Filtered Cars section here */}
        

        {/* Wholesale section here */}
        
        {/* Easy Buy Section here */}
        

       
        

        {/* Car features section here */}
        
      </main>
    </>
  );
};

export default Home;
