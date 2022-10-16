import type { NextPage } from "next";
import Head from "next/head";
import InquiryEntries from "../components/inquiry/InquiryEntries";

const inquiryPortal: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Digital Innovation - Inquiry portal</title>
                <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
                <link rel="icon" href="images/LogoTextTransparant.png" />
            </Head>
            <main className="z-5 px-10 pb-40 text-dinoblack min-h-screen">
                <div className="ml-20 lg:ml-60 3xl:pb-24">
                    <h1 className="font-heading text-3xl sm:text-4xl pt-52 pb-5 text-dinoblack">
                        Inquiry portal
                    </h1>
                    <InquiryEntries/>
                </div>
            </main>
        </div>
    );
};

export default inquiryPortal;
