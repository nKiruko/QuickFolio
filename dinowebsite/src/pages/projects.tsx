import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Project from "../components/Project";
import ProjectFeature from "../components/ProjectFeature";
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
              <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-5">Recent projects</h1>
                <div className="flex flex-col md:flex-row gap-8 md:gap-52">
                {allProjectsData.map((projectData, i) => {
                  if (i < 2) {
                    return (
                      <ProjectFeature key={i} image={projectData.image} title={projectData.title} text={projectData.text}/>
                    );
                  };
                })}
                </div>

              <div className="mt-20 flex flex-col md:flex-row gap-6">
                {allProjectsData.map((project, i) => (
                  <Project key={i} image={project.image} title={project.title} text={project.text}/>
                ))}
              </div>
            </div>
          </div>
       </main>
       </div>
  );
};

export default Projects;