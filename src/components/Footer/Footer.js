const Footer = () => {
  return (
    <>
      {/* footer section here */}
      <section className="bg-white">
        <footer>
          {/* Contact segment here */}
          <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap justify-between pt-10 pb-12 px-2 lg:px-32">
            {/* Contact us here */}
            <div>
              <p className="primary-color font-semibold text-sm">CONTACT US</p>
              <div className="flex items-center pt-2">
                <a
                  href="mailto:test@bld.com"
                  target="_blank"
                  className="flex text-sm"
                >
                  {' '}
                  <span className="mr-1 pt-0.5">
                    <img
                      src="./assets/img/vectors/mail-icon.svg"
                      alt="mail-icon"
                    />
                  </span>
                  Email
                </a>
                <a href="#" target="_blank" className="flex text-sm ml-10">
                  {' '}
                  <span className="mr-1 ">
                    <img
                      src="./assets/img/vectors/whatsapp-icon.svg"
                      alt="whatsapp-icon"
                    />
                  </span>{' '}
                  Whatsapp
                </a>
              </div>
            </div>
            {/* FOllow on Social media here */}
            <div>
              <div className="mt-5 md:mt-0 lg:mt-0">
                <p className="primary-color font-semibold text-sm ">
                  FOLLOW US ON SOCIAL MEDIA
                </p>
                <div className="flex items-center pt-2">
                  <a href="#" target="_blank" className="flex text-sm">
                    {' '}
                    <span className="mr-1 pt-0.5">
                      <img
                        src="./assets/img/vectors/facebook-icon.svg"
                        alt="facebook-icon"
                      />
                    </span>
                    Facebook
                  </a>
                  <a href="#" target="_blank" className="flex text-sm ml-4">
                    {' '}
                    <span className="mr-1 pt-0.5">
                      <img
                        src="./assets/img/vectors/twitter-icon.svg"
                        alt="twitter-icon"
                      />
                    </span>{' '}
                    Twitter
                  </a>
                  <a href="#" target="_blank" className="flex text-sm ml-4">
                    {' '}
                    <span className="mr-1 pt-0.5 ">
                      <img
                        src="./assets/img/vectors/instagram-icon.svg"
                        alt="instagram-icon"
                      />
                    </span>{' '}
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright region here */}
          <div className="footer-border pt-7 pb-12 px-2 lg:px-32">
            <div>
              <p className="filtered__text text-sm">
                Copyright 2020 Buylikedealers. All rights reserved.
              </p>
              <p className="filtered__text text-sm pt-4 lg:pt-1">
                {' '}
                <span>
                  <a href="#">Terms of use and privacy policy</a>
                </span>{' '}
                I{' '}
                <span>
                  <a href="#">Financial privacy policy</a>
                </span>{' '}
                I{' '}
                <span>
                  <a href="#">Accessibility</a>
                </span>
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
