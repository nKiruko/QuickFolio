import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Icon } from "@iconify/react";
import Inquiry from "../components/Inquiry";

export interface InquiryData {
    allTestData: GetStaticProps[];
  }
  
  export const getStaticProps: GetStaticProps = async (context) => {
    const allTestData = [
        {"firstname": "joe", "email": "joe@hotmail.com", "message": "hello"},
        {"firstname": "rat", "email": "rat@hotmail.com", "message": "rat"},
        {"firstname": "banaan", "email": "banaan@hotmail.com", "message": "banaan"},
    ];
  
    return {
      props: {
        allTestData,
      },
    };
  };
  
const inquiryPortal: NextPage<InquiryData> = ({ allTestData }) => {
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
                    {allTestData.map((inquiry, i) => {
                        return (
                            <Inquiry testData={inquiry} key={i}/>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default inquiryPortal;
