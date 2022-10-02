import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Project from "../components/Project";
import { getAllProjectDataSorted,ProjectData } from "../modules/projects";

interface AllProjectEntries {
  allProjectsData : ProjectData[];
}

export const getStaticProps : GetStaticProps = async (context) => {
  const allProjectsData = await getAllProjectDataSorted();

  return {
    props: {
      allProjectsData,
    }
  }
};

const Projects: NextPage<AllProjectEntries> = ({ allProjectsData }) => {
   return (
     <div>
       <Head>
         <title>Dinowebsite | Projects</title>
         <meta name="description" content="Dinowebsite" />
         <meta name="robots" content="noindex" />
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <main>
       <div className="bg-dinocream text-dinoblack">
            <div className="mx-20">
              <h1 className="font-heading text-5xl pt-52 pb-5">Recent projects</h1>

              <div className="flex flex-col md:flex-row gap-6">
                <Project image={allProjectsData[0].image} title={allProjectsData[0].title} text={allProjectsData[0].text}/>
                <Project image={allProjectsData[1].image} title={allProjectsData[1].title} text={allProjectsData[1].text}/>
                <Project image={allProjectsData[2].image} title={allProjectsData[2].title} text={allProjectsData[2].text}/>
              </div>
            </div>
          </div>
       </main>
       </div>
  );
};

export default Projects;