import { Head } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            // ...
            <Head>
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
            </Head>
        );
    }
}
