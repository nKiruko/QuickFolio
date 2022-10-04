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
         <title>Dinowebsite - Projects</title>
         <meta name="description" content="Dinowebsite" />
         <meta name="robots" content="noindex" />
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <main className="overflow-hidden h-full relative -z-10">
         <div className="bg-dinocream text-dinoblack overflow-hidden pb-64">
           <div className="mx-20">
            <div className="flex flex-col lg:flex-row justify-between pt-24 sm:pt-32 pb-5 ">
                <h1 className="font-heading text-4xl sm:text-5xl">Recent projects</h1>
                <input type="text" placeholder="Search.."
                  className=" valid:border-green-500 invalid:border-red-500 outline-tmblue rounded bg-dinogrey  px-2 py-1  mt-5 lg:mt-0 sm:w-1/2 lg:w-2/5 xl:w-1/4 2xl:mr-16" />
            </div>

             <div className="flex flex-col md:flex-row md:gap-8 lg:gap-20 xl:gap-52">
               {allProjectsData.map((projectData, i) => {
               if (i
               < 2) { return ( <ProjectFeature key={i} image={projectData.image} title={projectData.title}
                 text={projectData.text} />
               );
               };
               })}
             </div>
           </div>
           <div className="mx-20">
             <div className="mt-32 flex flex-col md:flex-row gap-6">
               {allProjectsData.map((project, i) => (
               <Project key={i} image={project.image} title={project.title} text={project.text} />
               ))}
             </div>
           </div>
         </div>

       </main>
       </div>
  );
};

export default Projects;