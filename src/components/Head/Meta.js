import React from "react";
import Head from "next/head";






const Meta = ({ title, keywords, description,image }) => {
    // console.log("meta image", description)
    return (
        <Head>
            <link rel="icon" href="/fav.svg" />
            <meta name="google-site-verification" content="yGcb4Qn0DdhCHl8N7gbLcniO0cexMV3HUMdeVFcehaw" />
            <meta property="og:site_name" content="Buy cars like dealers" />
            <meta
                property="og:title"
                content={title ? title : "Buylikedealers"}
            />
            <meta
                property="og:description"
                content={description ? description:"Buy up to 100,000 accidents free cars from the U.S at wholesale auction prices and have them delivered to you! We have something for everyone - from different professions down to families, singles e.t.c or for individuals and companies"}
            />
            <meta
                property="og:image"
                itemprop="image"
                content={image ? image : `../../../public/img/logo.svg`}
            />
            <script
                type="module"
                property="og:image"
                async
                src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"
            ></script>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-77J3ZBF0M5"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(w,d,v3){
                        w.chaportConfig = {
                          appId : '61828b3b395e6219c372173e'
                        };
                        
                        if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
                        
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

            <title>
                {title === null ? "Buy cars like dealers with ease" : title}
            </title>
        </Head>
    );
};

Meta.defaultProps = {
    keywords: "cars, vehicles, motorcycles",
    description: "Buy cars like dealers with ease",
};

export default Meta;
