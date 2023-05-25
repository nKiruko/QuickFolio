import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Project from "../components/project/Project";
import {
  getAllProjectDataSorted,
  ProjectData,
} from "../modules/projects";

import { useEffect, useState } from "react";
import path from "path";
import { title } from "process";


interface AllProjectEntries {
  allProjectsData: ProjectData[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allProjectsData = await getAllProjectDataSorted();

  return {
    props: {
      allProjectsData,
    },
  };
};

const Projects: NextPage<AllProjectEntries> = ({ allProjectsData }) => {
  const [searchTerm, setSeachTerm] = useState("");
  let emptyResults = 0;

  useEffect(() => {
    console.log(searchTerm);
    
    if (searchTerm === "do a barrel roll") {
      document.documentElement.classList.add('transform', 'rotate-360', 'transition','duration-[5000ms]')
    }else{
      document.documentElement.classList.remove('transform', 'rotate-360', 'transition','duration-[5000ms]')
    }
  });

  return (
    <div>
      <Head>
        <title>Portfolio - Projects</title>
        <meta
          name="description"
          content="Digital Innovation Thomas More, What is Digital Innovation"
        />
        <link rel="icon" href="images/logo.png" />
      </Head>
      <main className="text-dinoblack min-h-screen">
        <div className="pb-64">
          <div className="mx-20">
            <div className="flex flex-col lg:flex-row justify-between pt-24 sm:pt-32 pb-5 ">
              <h1 className="font-heading text-4xl sm:text-5xl">
                Recent Projects
              </h1>
              <input
                type="text"
                placeholder="Search.."
                className=" valid:border-green-500 invalid:border-red-500 outline-tmblue dark:outline-coffeecream rounded bg-dinogrey  px-2 py-1  mt-5 lg:mt-0 sm:w-1/2 lg:w-2/5 xl:w-1/4 2xl:mr-16"
                onChange={(event) => {
                  setSeachTerm(event.target.value);
                }}
              />
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 lg:gap-20 xl:gap-52">
              {allProjectsData.length === 0 ? (
                <p className="text-justify text-xl">No projects found</p>
              ) : (
                allProjectsData
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.title.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                    emptyResults++;
                  })
                  .map((project, i) => {
                    if (project.featured) {
                      return (
                        <Link href={`/projects/${project.path}`} key={i}>
                          <a>
                            <Project projectData={project} />
                          </a>
                        </Link>
                      );
                    }
                  })
              )}
            </div>
            {emptyResults === allProjectsData.length && (
              <p className="text-justify text-xl">No projects found</p>
            )}
          </div>
          <div className="mx-20">
            <div className="mt-32 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {allProjectsData
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                  emptyResults++;
                })
                .map((project, i) => {
                  if (!project.featured) {
                    return (
                      <Link href={`/projects/${project.path}`} key={i}>
                        <a>
                          <Project projectData={project} />
                        </a>
                      </Link>
                    );
                  }
                })}
            </div>
            {emptyResults === allProjectsData.length && (
              <p className="text-justify text-xl">No projects found</p>
            )}
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default Projects;