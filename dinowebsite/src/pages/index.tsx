import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Project from "../components/project/Project";
import { getAllProjectDataSorted, ProjectData } from "../modules/projects";
import { EventData, getAllEventDataSorted } from "../modules/events";


interface PageData {
  allProjectsData: ProjectData[];
  allEventsData: EventData[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allProjectsData = await getAllProjectDataSorted();
  const allEventsData = await getAllEventDataSorted();
  return {
    props: {
      allProjectsData,
      allEventsData,
    },
  };
};


const Home: NextPage<PageData> = ({ allProjectsData, allEventsData }) => {
  let amountOfFeaturedProjects = allProjectsData.filter(x => x.featured).length;
  return (
    <div>
      <Head>
        <title>Portfolio - Home</title>
        <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
      </Head>

      <main className="text-dinoblack min-h-screen">
        <div className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-2/3 md:w-4/5 lg:w-5/6 xl:w-6/6 ml-20 lg:ml-36 3xl:pb-24">
              <h1 className="font-heading text-4xl sm:text-4xl pt-24 pb-5 text-dinoblack">
                Full stack developer
              </h1>
              <p className="pb-5 font-bold">Nick Bulen</p>
              <Link href="/whatIsDI">
                <a className="font-heading text-lg sm:text-xl rounded-full border-2 border-dinoblack px-5 py-1 hover:border-tmorange dark:hover:border-coffeegreen">
                  Learn more
                </a>
              </Link>
            </div>
            {/* <div className="w-2/3 md:w-4/5 lg:w-4/6 xl:w-6/6 ml-20 lg:ml-36 3xl:pb-24">
              <h1 className="font-heading text-3xl sm:text-4xl pt-52 pb-5 text-dinoblack">
                We are always looking for project proposals
              </h1>
              <Link href="/contact">
                <a className="font-heading text-lg sm:text-xl rounded-full border-2 border-dinoblack px-5 py-1 hover:border-tmorange dark:hover:border-coffeegreen">
                  Click here
                </a>
              </Link>
            </div> */}
          </div>


          <div className="mt-32 md:mt-52 lg:mt-64 xl:mt-96 bg-[linear-gradient(9deg,_#191919_50%,_#e8e3d0_50%)]">
          <div className="bg-tmorange bg-[linear-gradient(120deg,_#f4b34d_20%,_#ca7d37_22%,_#bf6f32_30%,_#ae562b_32%,_#851d1c_40%,_#851d1c_60%,_#9c3e25_68%,_#bf6f32_70%,_#d48a3d_78%,_#f4b34d_80%)] h-20 md:h-32 lg:h-40 xl:h-60 2xl:h-80 rotate-9 4xl:rotate-3 5xl:rotate-2 scale-125 shadow-glow"></div>
          </div>

          <div className="bg-dinoblack text-dinocream">
            <div className="mx-20">
              <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-10">
                About me
              </h1>
              <div className="grid lg:grid-cols-2">
                <div className="border-8 mb-5 lg:mb-0 relative mx-auto rounded-[50px] overflow-hidden h-[552px] w-[311px] xl:h-[736px] xl:w-[414px]">
                  <Image
                          src="./images/Nick.jpg"
                          layout="fill"
                          alt="Nick"
                        />
                </div>
                <div className="my-auto"><p className="text-justify">Ik ben een gedreven full stack developer met een leergierige instelling. Mijn specialiteit ligt vooral in het frontend gedeelte van de ontwikkeling. Ik ben detailgericht en geloof dat kleine nuances het verschil maken. Ik ben een teamspeler en werk graag samen om projecten succesvol te voltooien. Daarnaast ben ik flexibel en kan ik gemakkelijk aanpassen aan nieuwe uitdagingen en technologieën.</p>
                </div>
                {/* {allEventsData.map((event, i) => {
                  if (i < 2) {
                    return (
                      <Link href={`/events/${event.path}`} key={i}>
                        <a>
                          <Event eventData={event} left={i == 0 ? true : false} />
                        </a>
                      </Link>
                    );
                  }
                })} */}
              </div>
            </div>
          </div>

          <div className="h-40 md:h-80 lg:h-[26rem] xl:h-[35rem] 4xl:h-[45rem] bg-[linear-gradient(-9deg,_#e8e3d0_50%,_#191919_50%)] 3xl:bg-[linear-gradient(-5deg,_#e8e3d0_50%,_#191919_50%)] 4xl:bg-[linear-gradient(-3deg,_#e8e3d0_50%,_#191919_50%)] 5xl:bg-[linear-gradient(-2deg,_#e8e3d0_50%,_#191919_50%)]"></div>

          <div>
            <div className="mx-20">
              <h1 className="font-heading text-4xl sm:text-5xl lg:pt-5 pb-5">
                Featured projects
              </h1>

              <div className={`grid md:grid-cols-2 grid-cols-1 gap-6 ${amountOfFeaturedProjects <= 2  ? amountOfFeaturedProjects <= 1 ? "md:grid-cols-1" : "lg:grid-flow-col lg:auto-cols-fr lg:gap-20 xl:gap-52" : "lg:grid-cols-3 md:grid-cols-2"} `}>
                {allProjectsData.length === 0 ? (
                  <p className="text-justify text-xl">No projects found</p>
                ) : (
                  allProjectsData.map((project, i) => {
                    if (project.featured) {
                      return (
                        <Link href={`/projects/${project.path}`} key={i}>
                          <a>
                            <Project projectData={project} />
                          </a>
                        </Link>
                      );
                    }
                  }))}
              </div>
              <div className="w-full py-20 text-center">
                <Link href="/projects">
                  <a className="font-heading text-xl sm:text-2xl rounded-full border-2 border-dinoblack px-5 py-1  hover:border-tmorange dark:hover:border-coffeegreen">
                    All projects
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
