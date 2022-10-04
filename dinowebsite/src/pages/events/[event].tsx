import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout"
import Image from "next/image";
import fs from "fs";
import { EventData, getAllEvents, getEventData } from "../../modules/events";

interface EventDataProps {
    eventData : EventData;
}

export const getStaticProps : GetStaticProps = async (context) => {
    console.log(context?.params?.event);
    if(!context?.params?.event || context?.params?.event == undefined) throw new Error("Param missing");
    const eventData = await getEventData(context.params.event);
    console.log(eventData);
    return {
      props: {
        eventData
      }
    }
};

export const getStaticPaths = async () => {
    const paths = getAllEvents();
    return {
        paths,
        fallback : false
    }
}

const Event: NextPage<EventDataProps> = ({eventData}) => {
    return (
        <div>
            <Head>
                <title>Dinowebsite | { eventData.title }</title>
                <meta name="description" content="Dinowebsite" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="overflow-hidden">
                <div className="bg-dinocream pb-20">
                    <div className="py-10 text-dinoblack flex flex-col justify-center">
                        <div className="container flex items-center justify-center h-52 md:h-96 m-auto mb-12 bg-fixed bg-center bg-contain bg-no-repeat bg-[url('/images/ThomasMore.png')]">
                            {/* <Image src={'/images/ThomasMore.png'} className="rounded-[25px]" width={125} height={250}></Image> */}
                        </div>
                        <div>
                            <h1 className="font-heading sm:text-4xl my-4 mx-20">{ eventData.title }</h1>
                        </div>
                        <div>
                            <p className="mx-20">{ eventData.text }</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Event;