import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  ProjectData,
  getProjectData,
  getAllProjects,
} from "../../modules/projects";

export interface ProjectDataProps {
  projectData: ProjectData;
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context?.params?.project) throw new Error("Param missing");
  const projectData = await getProjectData(context.params.project);
  return {
    props: {
      projectData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllProjects();
  return {
    paths,
    fallback: false,
  };
};

const Project: NextPage<ProjectDataProps> = ({ projectData }) => {
  return (
    <div>
      <Head>
        <title>{`Digital Innovation - ${projectData.title}`}</title>
        <meta name="description" content="Digital Innovation Thomas More, What is Digital Innovation" />
        <link rel="icon" href="images/LogoTextTransparant.png" />
      </Head>
      <main className="overflow-hidden">
        <div className="bg-dinocream pb-24 text-dinoblack">
          <div className=" max-w-7xl mx-auto">
            <div>
            <h1 className="font-heading text-4xl sm:text-6xl pb-16 text-dinoblack max-w-[15rem] sm:max-w-sm md:max-w-lg xl:max-w-3xl mx-auto py-10">
                {projectData.title}
              </h1>
              <div className="mx-5 sm:mx-10 md:mx-20">
                <Image
                  src={projectData.image}
                  alt={projectData.title}
                  className="object-cover"
                  width={1280}
                  height={700}
                  />
              </div>
          </div>
            <div className="max-w-[15rem] sm:max-w-sm md:max-w-lg xl:max-w-3xl mx-auto py-10 prose-p:text-justify  prose-headings:font-heading prose lg:prose-md prose-a:text-tmblue">
              <div  dangerouslySetInnerHTML={{__html: `${projectData.content}`}}>
              </div>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;
