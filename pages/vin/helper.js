import fetch from "isomorphic-unfetch";
import nProgress from "nprogress";

export default async ({
    url,
    customHeaders,
    setData,
    showConsole,
    errorHandler,
    successHandler,
    nextAction,
    setLoading,
    type,
    showProgress,

    ctx,
}) => {
    const redirectOnError = () =>
        typeof window !== "undefined"
            ? Router.push("/vin")
            : ctx.res.writeHead(302, { Location: "/vin" }).end();

    try {
        setLoading && setLoading(true);
        showProgress && nProgress.start();
        const fetchResult = await fetch(`${url}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                ...customHeaders,
            },
        });
        const parsedResponse = await fetchResult.json();
        if (parsedResponse.error === true) {
            throw parsedResponse;
        }

        if (fetchResult.message === "Unauthenticated.")
            return redirectOnError();

        showConsole && console.log(parsedResponse, type);
        successHandler && successHandler(parsedResponse.msg);
        nextAction && nextAction();
        setLoading && setLoading(false);
        setData && setData(parsedResponse.data);
        showProgress && nProgress.done();
        return parsedResponse;
    } catch (error) {
        showProgress && nProgress.done();
        console.error(error, "error get helper");
        if (errorHandler) {
            if (!error.msg) return errorHandler(error);
            return errorHandler(error.msg);
        } else {
            return null;
        }
    }
};