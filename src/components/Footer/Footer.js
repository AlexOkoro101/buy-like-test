const Footer = () => {
    return (
        <footer className=" text-white" style={{ background: "#D80739" }}>
            <div className="px-7 md:px-10 lg:px-20 xl:px-40 flex flex-wrap md:flex-nowrap pt-14 pb-3">
                <div className="w-full flex flex-col lg:w-1/3 mb-10">
                    <p className="footer-header pb-4">contact us</p>

                    <div className="flex items-center pb-4">
                        <span>
                            <img src="../../img/mail.svg" alt="mail-icon" />
                        </span>
                        <a
                            href="mailto:test@gmail.com"
                            className="text-sm text-white ml-2.5 font-medium pt-0.5"
                        >
                            Email
                        </a>
                    </div>

                    <div className="flex items-center">
                        <span>
                            <img src="../../img/whatsapp.svg" alt="mail-icon" />
                        </span>
                        <a
                            href="whatsapp.com"
                            target="_blank"
                            className="text-sm text-white ml-2.5 font-medium pt-0.5"
                        >
                            Whatsapp
                        </a>
                    </div>
                    <div className="mt-3">
                        Buylikedealers
                        <br />
                        No 1 Nike Art Gallery Rd Ikate, <br />
                        Lekki, Lagos state. Nigeria.
                    </div>
                </div>

                <div className="w-full flex flex-col lg:w-1/3 mb-10">
                    <p className="footer-header pb-4">
                        FOLLOW US ON SOCIAL MEDIA
                    </p>

                    <div className="flex items-center pb-4">
                        <span>
                            <img src="../../img/face.svg" alt="mail-icon" />
                        </span>
                        <a
                            href="whatsapp.com"
                            target="_blank"
                            className="text-sm text-white ml-2.5 font-medium pt-0.5"
                        >
                            Facebook
                        </a>
                    </div>

                    <div className="flex items-center pb-4">
                        <span>
                            <img src="../../img/twitter.svg" alt="mail-icon" />
                        </span>
                        <a
                            href="whatsapp.com"
                            target="_blank"
                            className="text-sm text-white ml-2.5 font-medium pt-0.5"
                        >
                            Twitter
                        </a>
                    </div>

                    <div className="flex items-center">
                        <span>
                            <img src="../../img/insta.svg" alt="mail-icon" />
                        </span>
                        <a
                            href="whatsapp.com"
                            target="_blank"
                            className="text-sm text-white ml-2.5 font-medium pt-0.5"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                <div className="w-full flex flex-col lg:w-1/3">
                    <p className="footer-header pb-4">QUICK LINKS</p>

                    <div className="flex items-center pb-4">
                        <a
                            href=""
                            className="text-sm text-white font-medium pt-0.5"
                        >
                            About us{" "}
                        </a>
                    </div>

                    <div className="flex items-center pb-4">
                        <a
                            href=""
                            className="text-sm text-white font-medium pt-0.5"
                        >
                            Terms of use{" "}
                        </a>
                    </div>

                    <div className="flex items-center pb-4">
                        <a
                            href=""
                            className="text-sm text-white font-medium pt-0.5"
                        >
                            Financial Privacy Policy{" "}
                        </a>
                    </div>

                    <div className="flex items-center pb-4">
                        <a
                            href=""
                            className="text-sm text-white font-medium pt-0.5"
                        >
                            Accessibility{" "}
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-border pb-10 mx-7 md:mx-10 lg:mx-20 xl:mx-40">
                <p className="text-white text-sm font-medium py-6">
                    Copyright 2020 Buylikedealers. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
