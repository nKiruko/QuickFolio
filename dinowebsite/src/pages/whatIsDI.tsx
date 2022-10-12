import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Coffee from "../components/di/Coffee";
import ProjectCount, { ProjectCounterProps } from "../components/di/ProjectCount";
import { getAllProjectDataSorted } from "../modules/projects";

export const getStaticProps: GetStaticProps = async (context) => {
  const projectAmountNumber = (await getAllProjectDataSorted()).length;
  return {
    props: {
      projectAmountNumber,
    },
  };
};

const whatIsDI: NextPage<ProjectCounterProps> = ({ projectAmountNumber }) => {
  return (
    <div>
      <Head>
        <title>Digital Innovation - What is DI</title>
        <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
        <link rel="icon" href="images/Favicon_di.png" />
      </Head>
      <main className="text-dinoblack">
        <div className="mx-20 3xl:pb-24">
          <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-5 ">
            About Digital Innovation
          </h1>
          <h2 className="font-heading pt-9 pb-3 text-2xl">What is DI?</h2>
          <p className="font-sans text-md sm:text-lg text-justify">
          Do you have a very broad interest in IT? Are you able to work both individually and in team? Do you like learning through projects? 
          Search no further: Digital Innovation is the choice for you! In this specialization we do not follow the usual methods of education.
          Instead, we work on projects that companies ask us to work out. The advantage of this is that we encounter real-life problems that need a creative solution. 
          For a lot of these projects, we are supported by partner companies or segment experts who provide us with some sort of advanced tech support. 
          When you do encounter problems, you&apos;ll always have a safety net. During your final year you will have an internship just like all the other students with the same opportunities for internationalization. 
          After your graduation you will be fully prepared for the job market and all the opportunities IT offers you. 
          The jobs you&apos;ll encounter will rely heavily on the knowledge you gathered from projects you worked on. Some of the more common job descriptions are software engineer, network specialist, data engineer,... 
          Still not tired of studying after 3 years? Then you can always start a master&apos;s program after a transition year. But most of all remember: Whatever you do, just do IT!
          </p>
        </div>
        <div className="mt-28 md:mt-40 lg:mt-52 xl:mt-60 bg-[linear-gradient(-9deg,_#191919_50%,_#f6f2e7_50%)]">
          <div className="bg-tmorange dark:bg-coffeegreen h-20 md:h-32 lg:h-40 xl:h-60 -rotate-9 4xl:-rotate-3 5xl:-rotate-2 scale-125 shadow-glow"></div>
        </div>
        <div className="bg-dinoblack text-dinocream pb-16 4xl:pb-32 4xl:h-screen">
          <div className="">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <ProjectCount projectAmountNumber={projectAmountNumber} />
            <Coffee />
            <div className="pt-36 text-center">
              <div className="relative">
                <div className="h-96">
                  <Image
                    src="/images/di/People3.png"
                    alt="People"
                    className="object-contain animate-[bounce3_1s_ease-in-out_infinite] z-0"
                    layout="fill"
                  />
                  <Image
                    src="/images/di/People2.png"
                    alt="People"
                    className="object-contain animate-[bounce2_1s_ease-in-out_infinite] z-0"
                    layout="fill"
                  />
                  <Image
                    src="/images/di/People1.png"
                    alt="People"
                    className="object-contain animate-bounce z-10"
                    layout="fill"
                  />
                </div>
                </div>
              <h1 className="font-heading text-2xl sm:text-3xl pt-5 text-dinocream">
                Digital Innovation consists of 16 students</h1>
            </div>
            </div>

            <h1 className="font-heading text-5xl pt-24 pb-10 md:pt-32 md:pb-16 lg:pt-44 lg:pb-20 xl:pt-64 xl:pb-24 text-center">
              Gallery
            </h1>

            <div className="grid-container grid grid-cols-12 gap-7 xl:gap-10 lg:gap-8">
              <div className="col-span-12 md:col-span-5 lg:col-span-3 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/gallery/picture1.webp"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-4 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/gallery/picture2.webp"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-5 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/gallery/picture3.webp"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>

              <div className="col-span-12 md:col-span-5 lg:col-span-5 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/gallery/picture4.webp"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/gallery/picture5.webp"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-3 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/gallery/picture6.webp"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>

              <div className="col-span-12 md:col-span-7 lg:col-span-3 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/gallery/picture7.webp"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/gallery/picture8.webp"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-12 lg:col-span-5 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/gallery/picture9.webp"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default whatIsDI;
