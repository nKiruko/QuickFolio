import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Icon } from "@iconify/react";
import { InquiryData } from "../modules/inquiry";
import Inquiry from "../components/inquiry/Inquiry";

export interface AllInquiryEntries {
    allInquiryData: InquiryData[];
}
  
  export const getStaticProps: GetStaticProps = async (context) => {
    const inquiryEntry1 : InquiryData = {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        message: "Hello, I am John Doe and I am interested in your project.",
    };
 
    const inquiryEntry2 : InquiryData = {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        message: "Hello, I am John Doe and I am interested in your project.",
    };

    const inquiryEntry3 : InquiryData = {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        message: "Hello, I am John Doe and I am interested in your project.",
    };


    const allInquiryData = [inquiryEntry1, inquiryEntry2, inquiryEntry3];
  
    return {
      props: {
        allInquiryData,
      },
    };
  };
  
const inquiryPortal: NextPage<AllInquiryEntries> = ({ allInquiryData }) => {
    return (
        <div>
            <Head>
                <title>Digital Innovation - Inquiry portal</title>
                <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
                <link rel="icon" href="images/LogoTextTransparant.png" />
            </Head>
            <main className="bg-dinocream z-5 px-10 pb-40">
                <div className="ml-20 lg:ml-60 3xl:pb-24">
                    <h1 className="font-heading text-3xl sm:text-4xl pt-52 pb-5 text-dinoblack">
                        Inquiry portal
                    </h1>
                    {allInquiryData.map((inquiry, i) => {
                        return (
                            <Inquiry inquiryData={inquiry} key={i}/>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default inquiryPortal;
