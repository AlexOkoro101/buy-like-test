import Document, { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "next-simple-google-analytics";
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <GoogleAnalytics id="G-77J3ZBF0M5" />
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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
