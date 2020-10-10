import "../styles/globalStyle.sass"
import Head from "next/head";
import React from "react";
import {AppProps} from "next/app";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="icon" href="faviconka.ico" type="image/x-icon" />
                <title>Error 404</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
