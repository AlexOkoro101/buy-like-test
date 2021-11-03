import Head from "next/head";

import React from "react";

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <script
                type="module"
                async
                src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"
            ></script>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <meta
                name="google-site-verification"
                content="SKiiwV76yNqt-_QG-qhsmSV0MRVFoso0ZtCBckK817w"
            />
            <meta
                property="og:title"
                content={title === null ? "BuyLike Dealers" : title}
            />
            <meta
                name="description"
                content={
                    title === null ? "Buy cars like dealears with ease" : title
                }
            />
            <meta property="og:url" content={"http://localhost:3000"} />
            <meta property="og:description" content={title} />
            <meta name="twitter:site" content={"http://localhost:3000"} />
            <meta
                name="twitter:card"
                content={
                    "https://res.cloudinary.com/codepally/image/upload/v1616584548/Ridora/png/Ridora_Logo_white-08_ifvjth.png"
                }
            />
            <meta
                property="og:image"
                content={
                    "https://res.cloudinary.com/codepally/image/upload/v1616584548/Ridora/png/Ridora_Logo_white-08_ifvjth.png"
                }
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-77J3ZBF0M5"
            />

            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-77J3ZBF0M5', { page_path: window.location.pathname });
            `,
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-77J3ZBF0M5', { page_path: window.location.pathname });
            `,
                }}
            />

            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window,document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                         fbq('init', '2765101373787184'); 
                        fbq('track', 'PageView');
            `,
                }}
            />

            <noscript>
                <img
                    height="1"
                    width="1"
                    src="https://www.facebook.com/tr?id=2765101373787184&ev=PageView
&noscript=1"
                />
            </noscript>
            <link rel="icon" href="../../public/favicon.ico" />

            {/* Fontawesome here */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    keywords: "cars, vechiles, motocycles",
    description: "Buy cars like dealears with ease",
};

export default Meta;
