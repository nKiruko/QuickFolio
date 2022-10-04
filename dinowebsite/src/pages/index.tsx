import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Coffee from "../components/Coffee";
import Event from "../components/Event";
import Project from "../components/Project";
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
  return (
    <div>
      <Head>
        <title>Dinowebsite - Home</title>
        <meta name="description" content="Dinowebsite" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-dinocream pb-28">
          <div className="w-1/2 md:w-3/5 lg:w-3/6 xl:w-2/6 ml-20 lg:ml-60">
            <h1 className="font-heading text-3xl sm:text-4xl pt-52 pb-5 text-dinoblack">
              Build shit, break shit, but ultimately, learn from the
              experiences!
            </h1>
            <Link href="/">
              <a className="font-heading text-lg sm:text-xl rounded-full border-2 border-dinoblack px-5 py-1 hover:border-tmorange">
                Learn More
              </a>
            </Link>
          </div>

          <Coffee />

          <div className="mt-32 md:mt-52 lg:mt-64 xl:mt-96 bg-[linear-gradient(9deg,_#191919_50%,_#f6f2e7_50%)]">
            <div className="bg-tmblue h-20 md:h-32 lg:h-40 xl:h-60 2xl:h-80 rotate-9 scale-125 shadow-glow"></div>
          </div>

          <div className="bg-dinoblack text-dinocream">
            <div className="mx-20">
              <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-5">
                Upcoming events
              </h1>

              {allEventsData.map((eventData, i) => {
                if (i < 2) {
                  return (
                    <Link href={`/events/${eventData.title}`} key={i}>
                      <a>
                        <Event
                          image={eventData.image}
                          title="Title"
                          smalltext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis inventore iste earum hic consequatur ullam, iusto, accusamus quae assumenda, aliquam impedit dolore nam? Assumenda ad similique dolores ex, rem porro."
                          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis inventore iste earum hic consequatur ullam, iusto, accusamus quae assumenda, aliquam impedit dolore nam? Assumenda ad similique dolores ex, rem porro.
                      Corrupti voluptatum cum nam, minus a adipisci voluptates porro optio harum excepturi quae ad dicta placeat eum suscipit, fugiat culpa? Aliquam ut laborum ipsa ullam similique dolor voluptates voluptatum sit?
                      Neque a, provident ab ut libero, doloremque dicta aliquam quos veniam tenetur quas id ipsa reiciendis ratione fugit beatae dolor, et perferendis hic deserunt error animi harum. Aliquid, nostrum porro?
                      Amet possimus laborum magnam quibusdam doloribus odit, esse adipisci assumenda officiis rem harum, voluptas eaque alias libero iusto dicta molestiae? Molestiae laboriosam culpa ipsum, explicabo soluta eius quaerat quasi harum.
                      Ab, praesentium illum. Delectus consequatur asperiores eligendi atque, nam voluptas quae neque voluptatibus ut quam dolore earum corporis, quo vero dolor deleniti inventore aperiam? Maxime nihil illo tempore soluta quam."
                          left={i == 0 ? true : false}
                        />
                      </a>
                    </Link>
                  );
                }
              })}
            </div>
          </div>

          <div className="h-40 md:h-80 lg:h-[26rem] xl:h-[35rem] bg-[linear-gradient(-9deg,_#f6f2e7_50%,_#191919_50%)]"></div>

          <div className="bg-dinocream text-dinoblack">
            <div className="mx-20">
              <h1 className="font-heading text-4xl sm:text-5xl lg:pt-5 pb-5">
                Featured projects
              </h1>

              <div className="flex flex-col lg:flex-row gap-6">
                {allProjectsData.map((projectData, i) => {
                  if (i < 3) {
                    return (
                      <Link href={`/projects/${projectData.title}`} key={i}>
                        <a>
                          <Project
                            image={projectData.image}
                            title={projectData.title}
                            text={projectData.text}
                          />
                        </a>
                      </Link>
                    );
                  }
                })}
              </div>
              <div className="w-full py-20 text-center">
                <Link href="/projects">
                  <a className="font-heading text-xl sm:text-2xl rounded-full border-2 border-dinoblack px-5 py-1  hover:border-tmorange">
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
