import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { EventData, getAllEvents, getEventData } from "../../modules/events";

export interface EventDataProps {
  eventData: EventData;
  left?: boolean;
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context?.params?.event || context?.params?.event == undefined)
    throw new Error("Param missing");
  const eventData = await getEventData(context.params.event);
  return {
    props: {
      eventData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllEvents();
  return {
    paths,
    fallback: false,
  };
};

const Event: NextPage<EventDataProps> = ({ eventData }) => {
  return (
    <div>
      <Head>
        <title>Digital Innovation - {eventData.title}</title>
        <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
        <link rel="icon" href="images/LogoTextTransparant.png" />
      </Head>
      <main className="text-dinoblack min-h-screen">
        <div className="max-w-7xl mx-auto pb-24">
            <div>
            <h1 className="font-heading text-4xl sm:text-6xl pb-16 text-dinoblack max-w-[15rem] sm:max-w-sm md:max-w-lg xl:max-w-3xl mx-auto py-10">
                {eventData.title}
              </h1>
              <div className="mx-5 sm:mx-10 md:mx-20">
                <Image
                  src={eventData.image}
                  alt={eventData.title}
                  className="object-cover"
                  width={1280}
                  height={700}
                  />
              </div>
          </div>
          <div className="max-w-[15rem] sm:max-w-sm md:max-w-lg xl:max-w-3xl mx-auto py-10 prose-p:text-justify  prose-headings:font-heading prose lg:prose-md prose-a:text-tmblue dark:prose-a:text-coffeecream">
              <div dangerouslySetInnerHTML={{__html: `${eventData.content}`}}>
              </div>
              </div>
          </div>
      </main>
    </div>
  );
};

export default Event;
