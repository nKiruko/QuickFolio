import type { NextPage } from "next";
import Head from "next/head";
import { Icon } from "@iconify/react";
import Inquiry from "../components/Inquiry";

const inquiryPortal: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Digital Innovation - inquiry portal</title>
                <meta name="description" content="Digital Innovation" />
                <link rel="icon" href="images/LogoTextTransparant.png" />
            </Head>
            <main className="bg-dinocream z-5 px-10 pb-40">
                <div className="ml-20 lg:ml-60 3xl:pb-24">
                    <h1 className="font-heading text-3xl sm:text-4xl pt-52 pb-5 text-dinoblack">
                        Question portal
                    </h1>
                <Inquiry/>
                </div>
            </main>
        </div>
    );
};

export default inquiryPortal;
