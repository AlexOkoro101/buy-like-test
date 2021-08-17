const Footer = () => {
    return (
        <footer class=" text-white" style={{ background: "#D80739" }}>
            <div class="px-7 md:px-10 lg:px-20 xl:px-40 flex flex-wrap md:flex-nowrap pt-14 pb-3">
                <div class="w-full flex flex-col lg:w-1/3 mb-10">
                    <p class="footer-header pb-4">contact us</p>

                    <div class="flex items-center pb-4">
                        <span>
                            <img src="./img/mail.svg" alt="mail-icon" />
                        </span>
                        <a
                            href="mailto:test@gmail.com"
                            class="text-sm text-white ml-2.5 font-medium pt-0.5"
                        >
                            Email
                        </a>
                    </div>

                    <div class="flex items-center">
                        <span>
                            <img src="./img/whatsapp.svg" alt="mail-icon" />
                        </span>
                        <a
                            href="whatsapp.com"
                            target="_blank"
                            class="text-sm text-white ml-2.5 font-medium pt-0.5"
                        >
                            Whatsapp
                        </a>
                    </div>
                </div>

                <div class="w-full flex flex-col lg:w-1/3 mb-10">
                    <p class="footer-header pb-4">FOLLOW US ON SOCIAL MEDIA</p>

                    <div class="flex items-center pb-4">
                        <span>
                            <img src="./img/face.svg" alt="mail-icon" />
                        </span>
                        <a
                            href="whatsapp.com"
                            target="_blank"
                            class="text-sm text-white ml-2.5 font-medium pt-0.5"
                        >
                            Facebook
                        </a>
                    </div>

                    <div class="flex items-center pb-4">
                        <span>
                            <img src="./img/twitter.svg" alt="mail-icon" />
                        </span>
                        <a
                            href="whatsapp.com"
                            target="_blank"
                            class="text-sm text-white ml-2.5 font-medium pt-0.5"
                        >
                            Twitter
                        </a>
                    </div>

                    <div class="flex items-center">
                        <span>
                            <img src="./img/insta.svg" alt="mail-icon" />
                        </span>
                        <a
                            href="whatsapp.com"
                            target="_blank"
                            class="text-sm text-white ml-2.5 font-medium pt-0.5"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                <div class="w-full flex flex-col lg:w-1/3">
                    <p class="footer-header pb-4">QUICK LINKS</p>

                    <div class="flex items-center pb-4">
                        <a
                            href=""
                            class="text-sm text-white font-medium pt-0.5"
                        >
                            About us{" "}
                        </a>
                    </div>

                    <div class="flex items-center pb-4">
                        <a
                            href=""
                            class="text-sm text-white font-medium pt-0.5"
                        >
                            Terms of use{" "}
                        </a>
                    </div>

                    <div class="flex items-center pb-4">
                        <a
                            href=""
                            class="text-sm text-white font-medium pt-0.5"
                        >
                            Financial Privacy Policy{" "}
                        </a>
                    </div>

                    <div class="flex items-center pb-4">
                        <a
                            href=""
                            class="text-sm text-white font-medium pt-0.5"
                        >
                            Accessibility{" "}
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-border pb-10 mx-7 md:mx-10 lg:mx-20 xl:mx-40">
                <p class="text-white text-sm font-medium py-6">
                    Copyright 2020 Buylikedealers. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
